"""
gen_tts_voicebox.py -- Genera audios TTS usando Voicebox local (Kokoro/Chatterbox).
Reemplaza Edge TTS cuando Voicebox esta corriendo en localhost:8000.

Uso:
    py scripts/gen_tts_voicebox.py --batch 02
    py scripts/gen_tts_voicebox.py --text "texto de prueba" --out test.mp3

Si Voicebox no esta disponible, hace fallback automatico a Edge TTS.
"""
import asyncio
import argparse
import json
import sys
import time
import httpx
from pathlib import Path

BASE      = Path(__file__).parent.parent
AUDIO_DIR = BASE / "public" / "audio"
AUDIO_DIR.mkdir(parents=True, exist_ok=True)

VOICEBOX_URL = "http://localhost:8000"

# Mapeo Edge TTS voz -> Voicebox profile name (se crea al instalar Voicebox)
VOICE_MAP = {
    "es-CO-GonzaloNeural":  "gonzalo-co",
    "es-MX-JorgeNeural":    "jorge-mx",
    "es-ES-AlvaroNeural":   "alvaro-es",
    "es-CL-LorenzoNeural":  "lorenzo-cl",
}

# Voces Kokoro en espanol (fallback si no hay perfil personalizado)
KOKORO_ES_VOICES = {
    "masculine": "em_alex",
    "feminine":  "ef_dora",
}


def check_voicebox() -> bool:
    """Retorna True si Voicebox esta corriendo y responde."""
    try:
        r = httpx.get(f"{VOICEBOX_URL}/health", timeout=3)
        return r.status_code == 200
    except Exception:
        return False


def get_or_create_profile(client: httpx.Client, name: str, voice_type: str = "preset") -> str:
    """Obtiene o crea un perfil de voz en Voicebox. Retorna el profile_id."""
    # Listar perfiles existentes
    r = client.get(f"{VOICEBOX_URL}/profiles")
    profiles = r.json().get("data", [])
    for p in profiles:
        if p["name"] == name:
            return p["id"]

    # Crear perfil nuevo con Kokoro
    payload = {
        "name": name,
        "engine": "kokoro",
        "language": "es",
        "preset_voice": KOKORO_ES_VOICES["masculine"],
    }
    r = client.post(f"{VOICEBOX_URL}/profiles", json=payload)
    return r.json()["id"]


async def gen_with_voicebox(profile_id: str, text: str, out_path: Path, client: httpx.Client):
    """Genera audio via Voicebox /generate/stream y guarda como MP3."""
    payload = {
        "profile_id": profile_id,
        "text": text,
        "language": "es",
        "normalize": True,
    }
    # Usar endpoint de streaming — responde WAV directo
    r = client.post(f"{VOICEBOX_URL}/generate/stream", json=payload, timeout=120)
    if r.status_code != 200:
        raise RuntimeError(f"Voicebox error {r.status_code}: {r.text[:200]}")

    # Guardar WAV temporal y convertir a MP3 con ffmpeg
    wav_tmp = out_path.with_suffix(".wav")
    wav_tmp.write_bytes(r.content)

    import subprocess
    rc = subprocess.run(
        ["ffmpeg", "-y", "-i", str(wav_tmp), "-codec:a", "libmp3lame", "-q:a", "2", str(out_path)],
        capture_output=True
    ).returncode
    wav_tmp.unlink(missing_ok=True)

    if rc != 0:
        raise RuntimeError("ffmpeg conversion failed")


async def gen_with_edge(voz: str, texto: str, out_path: Path):
    """Fallback: genera audio con Edge TTS."""
    try:
        import edge_tts
    except ImportError:
        import subprocess as _sp
        _sp.check_call([sys.executable, "-m", "pip", "install", "edge-tts", "-q"])
        import edge_tts

    if out_path.exists():
        out_path.unlink()
    comm = edge_tts.Communicate(texto, voz, rate="+5%")
    await comm.save(str(out_path))


async def generate(n: str, voz: str, texto: str, use_voicebox: bool, vb_client=None):
    out = AUDIO_DIR / f"bioscan-{n}.mp3"
    if out.exists():
        out.unlink()

    if use_voicebox and vb_client:
        try:
            profile_name = VOICE_MAP.get(voz, "es-generic")
            profile_id   = get_or_create_profile(vb_client, profile_name)
            await gen_with_voicebox(profile_id, texto, out, vb_client)
            print(f"[VB]   {out.name} ({voz}) -- {out.stat().st_size//1024} KB")
            return
        except Exception as e:
            print(f"[WARN] Voicebox fallo para {n}: {e} -- usando Edge TTS")

    # Fallback Edge TTS
    await gen_with_edge(voz, texto, out)
    print(f"[TTS]  {out.name} ({voz}) -- {out.stat().st_size//1024} KB")


def load_batch_copies(batch_num: int):
    """Carga las copies del batch desde gen_tts_batchNN.py."""
    batch_str = str(batch_num).zfill(2)
    script    = BASE / "scripts" / f"gen_tts_batch{batch_str}.py"
    if not script.exists():
        raise FileNotFoundError(f"No existe {script}")

    ns = {}
    exec(script.read_text(encoding="utf-8"), ns)
    return ns.get("COPIES", [])


async def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--batch", type=int, help="Numero de batch (ej: 2)")
    parser.add_argument("--text",  type=str, help="Texto directo a sintetizar")
    parser.add_argument("--voz",   type=str, default="es-CO-GonzaloNeural")
    parser.add_argument("--out",   type=str, default="test-voicebox.mp3")
    args = parser.parse_args()

    use_voicebox = check_voicebox()
    if use_voicebox:
        print(f"[OK] Voicebox detectado en {VOICEBOX_URL}")
    else:
        print("[WARN] Voicebox no disponible -- usando Edge TTS como fallback")

    vb_client = httpx.Client() if use_voicebox else None

    if args.text:
        # Modo de prueba: texto directo
        out = Path(args.out)
        await generate("test", args.voz, args.text, use_voicebox, vb_client)
        print(f"[DONE] Guardado en {out}")
        return

    if args.batch:
        copies = load_batch_copies(args.batch)
        tasks  = [generate(c["n"], c["voz"], c["texto"], use_voicebox, vb_client) for c in copies]
        await asyncio.gather(*tasks)
        print(f"[DONE] {len(copies)} audios generados para Batch {args.batch:02d}")
        return

    print("Uso: py scripts/gen_tts_voicebox.py --batch 2")
    print("     py scripts/gen_tts_voicebox.py --text 'Hola mundo' --voz es-CO-GonzaloNeural")

if __name__ == "__main__":
    asyncio.run(main())
