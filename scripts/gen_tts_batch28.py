"""
gen_tts_batch28.py -- Genera audios TTS para copies 271-280 usando Edge TTS.
Categoria: Jovenes 25-35 (cont.)
Salida: public/audio/bioscan-271.mp3 ... bioscan-280.mp3
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
        "n": "271", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Los jovenes que comen bien a veces tienen las peores deficiencias. Los datos lo revelan. "
            "El veganismo mal planificado, el ayuno extremo, la dieta ultraprocesada saludable. "
            "Las deficiencias de hierro, B doce, vitamina D aparecen en los parametros de BioScan IA "
            "antes de sentirlas. "
            "Setenta y nueve indicadores. Cinco dolares. Come bien de verdad. bioscanpro punto net."
        )
    },
    {
        "n": "272", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "La generacion mas ansiosa de la historia. Y nadie monitorea como afecta al cuerpo. "
            "Millennials y Gen Z reportan los niveles mas altos de ansiedad registrados. "
            "La ansiedad cronica afecta HRV, presion arterial, SpO2 y mas. "
            "BioScan IA te muestra el impacto fisico de tu ansiedad en datos reales. "
            "Setenta y nueve parametros. Cinco dolares. "
            "Entiende tu ansiedad con datos. bioscanpro punto net."
        )
    },
    {
        "n": "273", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Rastrear tu app de delivery, tu Spotify, tu Netflix. Por que no rastrear tu salud? "
            "El tracking es parte de la cultura digital. "
            "BioScan IA anade el tracking mas importante: tu salud. "
            "Setenta y nueve parametros. Historial mensual. Tendencias. "
            "La plataforma de tracking personal que conecta con lo que mas importa. "
            "Cinco dolares. Trackea lo que importa. bioscanpro punto net."
        )
    },
    {
        "n": "274", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Te fuiste de la casa. Nadie te recuerda ir al medico. Solo tu. "
            "La independencia viene con responsabilidades. Incluida la salud. "
            "BioScan IA es el chequeo que puedes hacer solo, sin nadie que te lleve, sin pedir permiso. "
            "Setenta y nueve parametros. Cinco dolares. El adulto independiente que eres. "
            "Cuidate solo. bioscanpro punto net."
        )
    },
    {
        "n": "275", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Los influencers de salud que sigues no saben como estan TUS parametros. BioScan IA si. "
            "Los consejos genericos de salud no son personalizados para ti. "
            "Tu SpO2, tu HRV, tu riesgo cardiovascular son unicos. "
            "BioScan IA te da los datos de TU cuerpo especifico, no el promedio de un influencer. "
            "Setenta y nueve parametros personales. Cinco dolares. "
            "Tu salud personalizada. bioscanpro punto net."
        )
    },
    {
        "n": "276", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Mi pareja y yo nos regalamos BioScan IA en nuestro aniversario. Fue raro. Y perfecto. "
            "No sabiamos que regalarnos. Terminamos regalandonos el pack familiar de BioScan IA. "
            "Hicimos los analisis juntos. Compartimos los scores. Nos reimos. Nos preocupamos un poco. "
            "Pero los dos empezamos a cuidarnos mas. Fue el mejor regalo que recibimos. "
            "Regalense salud. bioscanpro punto net."
        )
    },
    {
        "n": "277", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Los gamers optimizan su setup, su conexion, sus reacciones. Y su salud? "
            "La cultura gamer entiende de optimizacion. BioScan IA es el DLC de salud que faltaba. "
            "Setenta y nueve parametros. Score de cero a cien. Progresion mensual. "
            "La gamificacion de la salud para la generacion que sabe que los stats importan. "
            "Sube tu health score. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "278", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Tienes deuda de estudiante. No tienes dinero. BioScan IA cuesta menos que un almuerzo. "
            "La salud no tiene que esperar a tener dinero. "
            "Cinco dolares, menos que cualquier almuerzo decente, es todo lo que necesitas. "
            "Setenta y nueve parametros. Noventa segundos. "
            "La inversion en salud mas accesible para la generacion que no puede permitirse sorpresas. "
            "Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "279", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "YOLO dice: haz lo que quieras. Tu cuerpo dice: pero con datos. "
            "Vive la vida. Disfruta. "
            "Pero sabe como esta tu cuerpo mientras lo haces. "
            "BioScan IA, setenta y nueve parametros en noventa segundos, "
            "para el joven que vive intenso pero no quiere pagar las consecuencias sin haberlas visto venir. "
            "Vive informado. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "280", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Eres el CEO de tu vida. BioScan IA es tu dashboard de salud. "
            "Los mejores CEOs tienen dashboards de todo: finanzas, operaciones, equipo. "
            "Tu vida tambien merece un dashboard. "
            "BioScan IA te da setenta y nueve metricas de salud mensuales. "
            "El KPI mas importante del CEO de tu propia vida. "
            "Activa tu dashboard. Cinco dolares. bioscanpro punto net."
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
    print("\n// durationInFrames para batch28-data.ts:")
    for n, dur, frames in sorted(results):
        print(f"//  {n}: {dur:.1f}s x30 + 60 = {frames} frames")

if __name__ == "__main__":
    asyncio.run(main())
