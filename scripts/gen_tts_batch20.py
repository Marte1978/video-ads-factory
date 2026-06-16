"""
gen_tts_batch20.py -- Genera audios TTS para copies 191-200 usando Edge TTS.
Categoria: Escasez / Urgencia (cont.)
Salida: public/audio/bioscan-191.mp3 ... bioscan-200.mp3
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
        "n": "191", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Etapa uno de cancer: noventa y cinco por ciento de supervivencia. "
            "Etapa cuatro: veinte por ciento. La deteccion importa. "
            "No prometemos detectar cancer. "
            "Pero si podemos detectar senales de riesgo "
            "que ameritan una visita medica antes de que algo escale. "
            "BioScan IA: setenta y nueve parametros de salud, "
            "para dar el primer paso en la prevencion mas temprana posible. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Deteccion temprana. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "192", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Cada hora, mas personas hacen su analisis BioScan IA. Cuando es tu turno. "
            "La adopcion de BioScan IA crece cada dia. "
            "Trescientos treinta y dos analisis completados y contando. "
            "Cada hora que esperas es una hora mas sin datos reales sobre tu salud. "
            "Noventa segundos. Cinco dolares. Tu turno es ahora. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "bioscanpro punto net."
        )
    },
    {
        "n": "193", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "En tu proximo cumpleanos, tendras datos reales de tu salud para celebrar. "
            "El cumpleanos es el momento perfecto para hacer un audit de salud. "
            "BioScan IA, setenta y nueve parametros en noventa segundos, "
            "como regalo de cumpleanos personal. "
            "Para ti o para alguien que amas. Cinco dolares. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Celebra con datos. bioscanpro punto net."
        )
    },
    {
        "n": "194", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Tienes cita medica la proxima semana. "
            "Por que no llegar con datos de setenta y nueve parametros. "
            "Tu medico tiene quince o veinte minutos contigo. "
            "Maximiza ese tiempo llevando un reporte BioScan IA. "
            "Setenta y nueve parametros de salud, tendencias, score. "
            "Tu medico tendra mas informacion para darte mejores recomendaciones. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Prepara tu cita. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "195", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Pack Familiar BioScan IA: cuatro analisis por dieciocho dolares. Por tiempo limitado. "
            "Cuatro analisis completos. Trescientos dieciseis parametros. "
            "Cuatro reportes PDF. Cuatro accesos a asistente IA. "
            "Solo dieciocho dolares. Para toda tu familia. "
            "Por tiempo limitado en este precio. Aprovecha antes de que cambie. "
            "Score de cero a cien. Garantia total de devolucion. "
            "Aprovecha el pack familiar. bioscanpro punto net."
        )
    },
    {
        "n": "196", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "En epoca de virus y bacterias resistentes, "
            "conocer tu estado de salud nunca fue mas importante. "
            "Los sistemas inmunologicos debiles son los mas vulnerables. "
            "BioScan IA te ayuda a monitorear tu estado basal "
            "para detectar cuando algo cambia. "
            "Setenta y nueve parametros. Noventa segundos. Cinco dolares. "
            "Tu guardia personal de salud. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "bioscanpro punto net."
        )
    },
    {
        "n": "197", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "A los cuarenta anos el riesgo cardiovascular se duplica. Cuantos anos tienes. "
            "La estadistica es clara: despues de los cuarenta, "
            "el riesgo de enfermedades cardiovasculares, "
            "metabolicas y renales aumenta significativamente. "
            "Si ya llegaste a esa edad, o si te acercas, "
            "BioScan IA es mas urgente que nunca. "
            "Setenta y nueve parametros. Cinco dolares. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "El momento es ahora. bioscanpro punto net."
        )
    },
    {
        "n": "198", "voz": "es-MX-JorgeNeural",
        "texto": (
            "La ventana mas importante para prevenir enfermedades cronicas es ahora, "
            "antes de que aparezcan. "
            "Las enfermedades cronicas tardan anos en desarrollarse. "
            "Y hay una ventana, antes de los sintomas, "
            "donde la intervencion es mas efectiva. "
            "BioScan IA te ayuda a usar esa ventana. "
            "Setenta y nueve parametros de deteccion temprana. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Usa tu ventana. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "199", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Tu dieta actual, tu estres actual, tu sueno actual, "
            "todo esta afectando tu salud ahora mismo. "
            "Los habitos malos se acumulan silenciosamente. "
            "BioScan IA te muestra el impacto real en numeros. "
            "Setenta y nueve parametros que reflejan como tus habitos actuales "
            "estan afectando tu cuerpo. "
            "Una llamada de atencion basada en datos, no en intuicion. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Ve el impacto de tus habitos. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "200", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "El precio de cinco dolares es el mas bajo que tendra BioScan IA. Aprovechalo. "
            "Estamos en la fase mas accesible del servicio. "
            "Con cada mejora: mas parametros, mas precision, mas funciones, "
            "el precio se ajustara. "
            "Si quieres acceso al analisis mas completo por cinco dolares, "
            "el momento es ahora. "
            "Setenta y nueve parametros. Score de cero a cien. Reporte PDF. Asistente IA. "
            "El precio mas bajo. bioscanpro punto net."
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
    print("\n// durationInFrames para batch20-data.ts:")
    for n, dur, frames in sorted(results):
        print(f"//  {n}: {dur:.1f}s x30 + 60 = {frames} frames")

if __name__ == "__main__":
    asyncio.run(main())
