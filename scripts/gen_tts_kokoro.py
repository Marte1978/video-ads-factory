"""
gen_tts_kokoro.py -- Genera audios TTS para BioScan usando Kokoro local.
Calidad superior a Edge TTS. Requiere: py -m pip install kokoro misaki[es] soundfile

Uso:
    py scripts/gen_tts_kokoro.py --batch 02
    py scripts/gen_tts_kokoro.py --n 011 --voz masculino
    py scripts/gen_tts_kokoro.py --test

Voces disponibles:
    Masculino ES: em_alex, em_santa
    Femenino  ES: ef_dora
"""
import asyncio
import argparse
import json
import subprocess
import sys
import numpy as np
from pathlib import Path

BASE      = Path(__file__).parent.parent
AUDIO_DIR = BASE / "public" / "audio"
AUDIO_DIR.mkdir(parents=True, exist_ok=True)

# Mapeo de voz Edge TTS -> voz Kokoro
VOICE_MAP = {
    "es-CO-GonzaloNeural":  "em_alex",   # masculino, tono neutro
    "es-MX-JorgeNeural":    "em_alex",   # masculino, fallback mismo
    "es-ES-AlvaroNeural":   "em_santa",  # masculino, tono mas formal
    "es-CL-LorenzoNeural":  "em_alex",   # masculino, directo
}

# Speed por perfil de voz (Edge TTS rate=+5% equivale aprox speed=1.08)
SPEED_MAP = {
    "em_alex":  1.08,
    "em_santa": 1.05,
    "ef_dora":  1.05,
}

_pipeline_cache = {}

def get_pipeline(lang_code: str = 'e'):
    """Carga el pipeline Kokoro (una vez, se cachea en memoria)."""
    if lang_code not in _pipeline_cache:
        from kokoro import KPipeline
        print(f"  [KOKORO] Cargando modelo para lang='{lang_code}'...")
        _pipeline_cache[lang_code] = KPipeline(lang_code=lang_code)
    return _pipeline_cache[lang_code]


def synth(texto: str, voz_edge: str) -> tuple[np.ndarray, int]:
    """Sintetiza texto. Retorna (audio_array, sample_rate)."""
    pipeline   = get_pipeline('e')
    kokoro_voz = VOICE_MAP.get(voz_edge, "em_alex")
    speed      = SPEED_MAP.get(kokoro_voz, 1.05)

    chunks = []
    for _chunk, _phonemes, audio in pipeline(texto, voice=kokoro_voz, speed=speed):
        if audio is not None:
            chunks.append(audio)

    if not chunks:
        raise RuntimeError(f"Kokoro no genero audio para: {texto[:50]}...")

    return np.concatenate(chunks), 24000  # Kokoro -> 24kHz


def save_mp3(audio: np.ndarray, sample_rate: int, out: Path):
    """Guarda audio como MP3 via ffmpeg (WAV temporal)."""
    import soundfile as sf
    wav_tmp = out.with_suffix(".wav")
    sf.write(str(wav_tmp), audio, sample_rate)
    rc = subprocess.run(
        ["ffmpeg", "-y", "-i", str(wav_tmp),
         "-codec:a", "libmp3lame", "-q:a", "2", str(out)],
        capture_output=True
    ).returncode
    wav_tmp.unlink(missing_ok=True)
    if rc != 0:
        raise RuntimeError(f"ffmpeg fallo convirtiendo {out.name}")


def gen_one(n: str, voz: str, texto: str):
    out = AUDIO_DIR / f"bioscan-{n}.mp3"
    if out.exists():
        out.unlink()

    print(f"[KOKORO] Generando bioscan-{n}.mp3 ({VOICE_MAP.get(voz,'em_alex')})...")
    audio, sr = synth(texto, voz)
    save_mp3(audio, sr, out)

    dur    = len(audio) / sr
    frames = int(dur * 30) + 60
    size   = out.stat().st_size / 1024
    print(f"[OK]     bioscan-{n}.mp3 — {size:.0f} KB — {dur:.1f}s — {frames} frames")
    return n, dur, frames


def load_batch(batch_num: int) -> list:
    script = BASE / "scripts" / f"gen_tts_batch{batch_num:02d}.py"
    if not script.exists():
        raise FileNotFoundError(f"No existe {script}")
    ns = {}
    exec(script.read_text(encoding="utf-8"), ns)
    return ns.get("COPIES", [])


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--batch", type=int, help="Numero de batch (ej: 2)")
    parser.add_argument("--n",    type=str, help="Numero de copy (ej: 011)")
    parser.add_argument("--voz",  type=str, default="es-CO-GonzaloNeural")
    parser.add_argument("--test", action="store_true", help="Genera audio de prueba rapido")
    args = parser.parse_args()

    if args.test:
        texto = (
            "Bienvenido a BioScan IA. "
            "Setenta y nueve indicadores de salud en noventa segundos. "
            "Todo desde la camara de tu celular. Cinco dolares. bioscanpro punto net."
        )
        gen_one("test", "es-CO-GonzaloNeural", texto)
        return

    if args.n:
        copies = load_batch(int(args.n[:1]) if len(args.n) <= 3 else 1)
        copy   = next((c for c in copies if c["n"] == args.n), None)
        if not copy:
            print(f"[ERROR] No se encontro la copy {args.n}")
            sys.exit(1)
        gen_one(copy["n"], args.voz or copy["voz"], copy["texto"])
        return

    if args.batch:
        copies  = load_batch(args.batch)
        results = [gen_one(c["n"], c["voz"], c["texto"]) for c in copies]
        print(f"\n[DONE] {len(results)} audios generados con Kokoro")
        print("\n// durationInFrames para batch{:02d}-data.ts:".format(args.batch))
        for n, dur, frames in results:
            print(f"//  {n}: {dur:.1f}s x30 + 60 = {frames}")
        return

    print("Uso:")
    print("  py scripts/gen_tts_kokoro.py --test")
    print("  py scripts/gen_tts_kokoro.py --batch 2")
    print("  py scripts/gen_tts_kokoro.py --n 011")


if __name__ == "__main__":
    main()
