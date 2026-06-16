"""
gen_tts_batch19.py -- Genera audios TTS para copies 181-190 usando Edge TTS.
Categoria: Escasez / Urgencia
Salida: public/audio/bioscan-181.mp3 ... bioscan-190.mp3
"""
import asyncio, sys, os, subprocess
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

try:
    import edge_tts
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "edge-tts", "-q"])
    import edge_tts

from pathlib import Path

BASE = Path(__file__).parent.parent
AUDIO_DIR = BASE / "public" / "audio"
AUDIO_DIR.mkdir(parents=True, exist_ok=True)

COPIES = [
    {
        "n": "181", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Cinco dolares ahora. No podemos garantizar ese precio para siempre. "
            "BioScan IA esta en fase de crecimiento. "
            "El precio de lanzamiento es cinco dolares. "
            "Cuando el servicio escale y mejore, el precio puede ajustarse. "
            "Si quieres el analisis mas completo por el precio mas bajo, es ahora. "
            "Setenta y nueve parametros. Score de cero a cien. Reporte PDF. Asistente IA. "
            "Aprovecha el precio de lanzamiento. bioscanpro punto net."
        )
    },
    {
        "n": "182", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Cada dia que pasa sin chequearte es un dia de informacion perdida. "
            "No porque algo malo vaya a pasar hoy. "
            "Sino porque la prevencion es acumulativa. "
            "Cada analisis que haces construye tu historial. "
            "Cada dia que esperas es un punto de datos que no tienes. "
            "Empieza tu historial de salud hoy. "
            "Cinco dolares. Noventa segundos. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "No pierdas mas dias. bioscanpro punto net."
        )
    },
    {
        "n": "183", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Los meses frios aumentan el riesgo cardiovascular. "
            "Sabes como esta tu corazon. "
            "Los meses de invierno aumentan la presion arterial y el esfuerzo cardiaco. "
            "Es el momento mas importante para chequearte. "
            "BioScan IA analiza tu riesgo cardiovascular en noventa segundos. "
            "Setenta y nueve parametros. Cinco dolares. "
            "Antes de que el frio llegue. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Preparate. bioscanpro punto net."
        )
    },
    {
        "n": "184", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Esta semana: analisis BioScan IA con reporte extendido. Solo esta semana. "
            "BioScan IA esta lanzando el reporte extendido con analisis adicionales de tendencias. "
            "Esta semana esta incluido sin costo adicional con tu analisis de cinco dolares. "
            "La proxima semana podria tener un costo separado. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Esta semana nada mas. bioscanpro punto net."
        )
    },
    {
        "n": "185", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Ahora mismo tu cuerpo esta envejeciendo. Y tu no tienes datos. "
            "Cada minuto que pasa, tus celulas se dividen, "
            "tus telomeros se acortan y tu cuerpo acumula pequenos cambios. "
            "La mayoria son normales. Pero algunos no lo son. "
            "BioScan IA te da los datos para saber cuales son. "
            "Setenta y nueve parametros. Ahora. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Datos antes de que sea tarde. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "186", "voz": "es-MX-JorgeNeural",
        "texto": (
            "El problema con lo hago manana en salud: manana puede ser tarde. "
            "No es exageracion. Es estadistica. "
            "Los problemas de salud silenciosos no avisan. "
            "Un analisis que haces hoy puede detectar algo "
            "que manana ya necesita tratamiento urgente. "
            "BioScan IA: noventa segundos. Cinco dolares. "
            "Hazlo ahora, no manana. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Ahora, no manana. bioscanpro punto net."
        )
    },
    {
        "n": "187", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Termina el ano sabiendo exactamente como esta tu salud. "
            "La revision de fin de ano no deberia ser solo de finanzas o trabajo. "
            "Tu cuerpo merece un audit tambien. "
            "BioScan IA: setenta y nueve parametros de salud en noventa segundos. "
            "Para que empieces el proximo ano con informacion real "
            "y metas de salud concretas. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Tu revision anual de salud. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "188", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Antes de ese viaje largo, sabe que tu salud esta bien. "
            "Un vuelo de doce horas, un viaje de trabajo, unas vacaciones al extranjero. "
            "Antes de ir, haz tu analisis BioScan IA. "
            "Setenta y nueve parametros en noventa segundos. "
            "Si algo falla, mejor saberlo antes de embarcar. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Chequeo pre viaje. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "189", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Despues de ese resfriado. Despues de ese estres intenso. "
            "Despues de esas noches sin dormir. "
            "Los eventos estresantes dejan huella en tu cuerpo. "
            "BioScan IA te ayuda a medir esa huella. "
            "Setenta y nueve parametros. Noventa segundos. Cinco dolares. "
            "Sabe si tu cuerpo ya se recupero, o si necesita mas tiempo. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Mide tu recuperacion. bioscanpro punto net."
        )
    },
    {
        "n": "190", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Antes de empezar tu nueva rutina de salud, "
            "necesitas saber desde donde partes. "
            "Sin datos de punto de partida, no puedes medir progreso. "
            "BioScan IA te da tu baseline: "
            "setenta y nueve parametros de salud en el dia cero de tu nueva rutina. "
            "En noventa dias, otro analisis. Los numeros no mienten. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Establece tu baseline. Cinco dolares. bioscanpro punto net."
        )
    },
]

async def gen_audio(n: str, voz: str, texto: str):
    out = AUDIO_DIR / f"bioscan-{n}.mp3"
    if out.exists():
        out.unlink()
    print(f"[TTS]  Generando {out.name} ({voz})...")
    comm = edge_tts.Communicate(texto, voz, rate="+5%")
    await comm.save(str(out))
    r = subprocess.run(
        ["ffprobe", "-v", "quiet", "-print_format", "json", "-show_streams", str(out)],
        capture_output=True, text=True
    )
    dur = 0.0
    if r.returncode == 0:
        try:
            import json as _j
            dur = float(_j.loads(r.stdout)["streams"][0]["duration"])
        except Exception:
            pass
    frames = int(dur * 30) + 60
    size = out.stat().st_size / 1024
    print(f"[OK]   {out.name} -- {size:.1f} KB -- {dur:.1f}s -- {frames} frames")
    return n, dur, frames

async def main():
    results = await asyncio.gather(*[gen_audio(c["n"], c["voz"], c["texto"]) for c in COPIES])
    print(f"\n[DONE] {len(COPIES)} audios generados en {AUDIO_DIR}")
    print("\n// durationInFrames para batch19-data.ts:")
    for n, dur, frames in sorted(results):
        print(f"//  {n}: {dur:.1f}s x30 + 60 = {frames} frames")

if __name__ == "__main__":
    asyncio.run(main())
