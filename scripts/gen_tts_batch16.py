"""
gen_tts_batch16.py -- Genera audios TTS para copies 151-160 usando Edge TTS.
Categoria: Comparaciones Directas (cont.)
Salida: public/audio/bioscan-151.mp3 ... bioscan-160.mp3
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
        "n": "151", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Tu medico te ve dos veces al ano. BioScan IA puede verte todos los dias. "
            "No reemplaza a tu medico. Lo complementa. "
            "Con BioScan IA tienes monitoreo continuo entre citas: "
            "setenta y nueve parametros cuando quieras, historial de datos, tendencias. "
            "Y cuando vas al medico, llevas informacion real. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Calibrado con datos del CDC. Algoritmo AHA PREVENT dos mil veintitres. "
            "Monitoreo entre citas. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "152", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "En la farmacia te venden pastillas sin saber si las necesitas. "
            "BioScan IA te dice si las necesitas. "
            "Muchas personas compran suplementos, vitaminas y medicamentos "
            "sin base en datos reales. "
            "Con BioScan IA tienes setenta y nueve parametros de tu estado actual "
            "antes de decidir que tomar. "
            "Decisiones de salud basadas en datos, no en marketing de farmacia. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Datos antes de pastillas. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "153", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Un chequeo al ano detecta lo que ya existe. BioScan IA previene lo que viene. "
            "El chequeo anual es una fotografia. BioScan IA es una pelicula. "
            "Setenta y nueve parametros que puedes medir mensualmente "
            "para ver tendencias, detectar cambios "
            "y actuar antes de que algo se convierta en problema. "
            "Calibrado CDC. Algoritmo AHA PREVENT dos mil veintitres. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "De foto a pelicula. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "154", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Hospital publico: seis horas de espera. BioScan IA: noventa segundos. "
            "Para emergencias reales, el hospital siempre. "
            "Pero para evaluar si algo es una emergencia real, BioScan IA primero. "
            "Setenta y nueve parametros en noventa segundos te dicen "
            "si ese malestar que sientes amerita urgencias o si puedes descansar. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Decide antes de ir. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "155", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "El nutricionista te pide examenes antes de recomendarte una dieta. "
            "BioScan IA los hace en noventa segundos. "
            "La nutricion personalizada requiere datos reales: "
            "SpO2, glucosa estimada, marcadores metabolicos. "
            "BioScan IA genera esos datos en noventa segundos. "
            "Llega a tu nutricionista con informacion real "
            "y obtien recomendaciones mas precisas. "
            "Setenta y nueve parametros. Score de cero a cien. Reporte PDF. Asistente IA. "
            "Nutricion basada en datos. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "156", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Tu Fitbit sabe cuantos pasos diste. "
            "BioScan IA sabe si tu corazon esta en riesgo. "
            "Los pasos son actividad fisica. El riesgo cardiovascular es salud clinica. "
            "Son cosas distintas. "
            "BioScan IA te da datos medicamente relevantes "
            "que ningun fitness tracker ofrece. "
            "Setenta y nueve parametros. La diferencia entre contar pasos "
            "y cuidar tu salud de verdad. "
            "Calibrado CDC. Algoritmo AHA. Score de cero a cien. Reporte PDF. Asistente IA. "
            "Mas alla del fitness. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "157", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Sin BioScan: no sabes nada. Con BioScan: sabes setenta y nueve cosas. "
            "Es asi de simple. "
            "Sin BioScan IA, caminas por la vida sin informacion de salud. "
            "Con BioScan IA, tienes setenta y nueve parametros reales, "
            "un score de salud honesto de cero a cien, un reporte PDF "
            "y un asistente de inteligencia artificial. "
            "Todo por cinco dolares. Con o sin. "
            "La respuesta es obvia. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "158", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Gastar cinco mil dolares tratando lo que pudiste prevenir con cinco dolares. Elige. "
            "La medicina reactiva es cara. La preventiva, accesible. "
            "Un analisis mensual con BioScan IA cuesta sesenta dolares al ano. "
            "Una hospitalizacion por algo prevenible puede costar cincuenta mil o mas. "
            "La matematica habla sola. "
            "Setenta y nueve parametros. Score de cero a cien. Reporte PDF. Asistente IA. "
            "Previene hoy. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "159", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "En Europa hay salud universal gratuita. En America Latina, no. "
            "En muchos paises de America Latina, "
            "un chequeo de salud completo puede costar semanas de salario. "
            "BioScan IA existe para nivelar esa cancha. "
            "Cinco dolares. Setenta y nueve parametros. "
            "Para cualquier persona con un celular y conexion a internet. "
            "Democratizacion real de la salud. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Salud sin fronteras. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "160", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Gastas quince dolares al mes en Netflix. Cuanto en tu salud. "
            "No es un juicio. Es una pregunta honesta. "
            "Netflix cuesta quince dolares al mes. "
            "BioScan IA cuesta cinco dolares por analisis. "
            "Un analisis mensual para toda tu familia con el pack familiar: dieciocho dolares. "
            "Decide que importa mas en tu presupuesto mensual. "
            "Setenta y nueve parametros. Score de cero a cien. Reporte PDF. Asistente IA. "
            "Prioriza tu salud. bioscanpro punto net."
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
    print("\n// durationInFrames para batch16-data.ts:")
    for n, dur, frames in sorted(results):
        print(f"//  {n}: {dur:.1f}s x30 + 60 = {frames} frames")

if __name__ == "__main__":
    asyncio.run(main())
