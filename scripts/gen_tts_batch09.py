"""
gen_tts_batch09.py -- Genera audios TTS para copies 081-090 usando Edge TTS.
Categoria: Familia y Proteccion
Salida: public/audio/bioscan-081.mp3 ... bioscan-090.mp3
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
        "n": "081", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Quien cuidara a tus hijos si a ti te pasa algo. "
            "No es una pregunta morbosa. Es la pregunta mas importante de cualquier padre. "
            "Los accidentes cardiovasculares son la primera causa de muerte "
            "en hombres mayores de cuarenta anos. "
            "Muchos de ellos no tenian sintomas previos. "
            "BioScan IA te ayuda a estar presente para los que mas te necesitan. "
            "Setenta y nueve parametros de salud en noventa segundos "
            "usando la camara trasera de tu celular. "
            "Riesgo cardiovascular calculado con el modelo PREVENT dos mil veintitres "
            "de la American Heart Association. "
            "Calibrado con datos reales del CDC. "
            "Score de salud de cero a cien. Reporte PDF. Asistente IA. "
            "Garantia total de devolucion. "
            "Por ellos. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "082", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Tu pareja necesita que estes bien. "
            "Cuando fue la ultima vez que te chequeaste. "
            "Cuidarte no es egoismo. Es la mayor responsabilidad que tienes "
            "con las personas que te aman. "
            "BioScan IA te da setenta y nueve parametros de salud en noventa segundos. "
            "Para que la persona que te ama sepa que te estas tomando en serio su bienestar "
            "y el de todos en casa. "
            "Saturacion de oxigeno. Presion arterial estimada. Glucosa estimada. "
            "Frecuencia cardiaca. Riesgo cardiovascular a diez anos AHA PREVENT dos mil veintitres. "
            "Calibrado con cinco mil ochocientos adultos reales del CDC. "
            "Score de salud. Reporte PDF. "
            "Cuidate por los tuyos. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "083", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Analiza la salud de toda tu familia por dieciocho dolares en total. "
            "BioScan IA tiene un Pack Familiar: cuatro analisis completos por dieciocho dolares. "
            "Cuatro con cincuenta por persona. "
            "Cada miembro recibe su reporte PDF, "
            "su score de salud individual de cero a cien "
            "y acceso completo al asistente de inteligencia artificial. "
            "Trescientos dieciseis parametros familiares analizados en menos de diez minutos total. "
            "Calibrado con datos reales del CDC. "
            "Algoritmo cardiaco AHA PREVENT dos mil veintitres. "
            "Sin gadgets extras. Solo los celulares que ya tienen. "
            "Garantia total de devolucion. "
            "Protege a tu familia. Dieciocho dolares. bioscanpro punto net."
        )
    },
    {
        "n": "084", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Tus papas dicen que estan bien. "
            "Pero cuando se chequearon por ultima vez. "
            "Los adultos mayores suelen minimizar sus sintomas. "
            "No quieren preocupar. No quieren molestar. "
            "BioScan IA les da datos objetivos que no dependen de como se sienten. "
            "Enviaselos como regalo. "
            "En noventa segundos saben como estan sus setenta y nueve parametros de salud. "
            "Su saturacion de oxigeno. Su frecuencia cardiaca. "
            "Su riesgo cardiovascular calculado con el modelo AHA PREVENT dos mil veintitres. "
            "Su score de salud de cero a cien. "
            "Reporte PDF que puedes ver desde tu celular. "
            "Y tu puedes estar tranquilo. "
            "Cuida a tus papas. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "085", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Cuidas a todos menos a ti misma. "
            "Eres la primera en levantarse y la ultima en acostarse. "
            "Preparas el desayuno, llevas a los ninos al colegio, trabajas, "
            "vuelves, cocinas, ayudas con las tareas, pones a dormir a todos "
            "y cuando terminas, ya no tienes energia ni para pensar en ti. "
            "BioScan IA: noventa segundos. Cinco dolares. "
            "Un analisis completo de salud para la persona mas importante de la familia: tu. "
            "Setenta y nueve parametros. Score de cero a cien. Reporte PDF. Asistente IA. "
            "Calibrado con datos del CDC. Algoritmo AHA PREVENT dos mil veintitres. "
            "Garantia total de devolucion. "
            "Cuidate tu tambien. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "086", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Los hijos aprenden lo que ven. Muestrasles que la salud importa. "
            "Cuando chequearte la salud es tan normal como lavarte los dientes, "
            "tus hijos lo aprenden como parte de la vida. "
            "No como algo excepcional o asustador, sino como un habito natural. "
            "BioScan IA hace que el monitoreo de salud sea parte del estilo de vida familiar. "
            "Noventa segundos. Cinco dolares. "
            "Un habito que puede cambiar la cultura de salud de tu familia para siempre. "
            "Setenta y nueve parametros. Score de salud. Reporte PDF. Asistente IA. "
            "Se el ejemplo. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "087", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Tu abuela no va al medico porque no quiere molestar. "
            "Pero si puede usar esto. "
            "BioScan IA es tan simple como tomar una foto con el celular. "
            "Si puede hacer una llamada de video con los nietos, puede hacerse el analisis. "
            "Ideal para adultos mayores que evitan la clinica por miedo, "
            "por comodidad o por no querer preocupar. "
            "Setenta y nueve parametros de salud en noventa segundos. "
            "Saturacion de oxigeno. Frecuencia cardiaca. Presion arterial estimada. "
            "Glucosa estimada. Riesgo cardiovascular AHA PREVENT dos mil veintitres. "
            "Score de cero a cien. Reporte PDF. Asistente IA que explica todo en lenguaje simple. "
            "Para toda la familia. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "088", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Que regalarle a quien ya tiene todo. Su chequeo de salud. "
            "En cumpleanos, aniversarios, Dia del Padre, Dia de la Madre. "
            "El regalo mas original y mas valioso: "
            "un analisis completo de salud de BioScan IA. "
            "Cinco dolares. Setenta y nueve parametros. "
            "Un gesto que dice, me importa que estes bien. "
            "Score de salud de cero a cien. Reporte PDF descargable. "
            "Asistente de inteligencia artificial que explica cada resultado. "
            "Calibrado con datos reales del CDC. "
            "Algoritmo cardiaco AHA PREVENT dos mil veintitres. "
            "Garantia total de devolucion. "
            "El regalo de la salud. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "089", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Perdi a mi papa por algo que pudimos haber detectado. "
            "Ese dolor no desaparece. Pero puede convertirse en motivacion. "
            "Si alguien en tu familia te importa, asegurate de que tengan acceso "
            "a herramientas de prevencion real. "
            "BioScan IA analiza setenta y nueve parametros de salud en noventa segundos. "
            "Deteccion temprana de riesgo cardiovascular con el modelo AHA PREVENT dos mil veintitres. "
            "Calibrado con cinco mil ochocientos adultos reales del CDC. "
            "Score de salud de cero a cien. Reporte PDF. Asistente IA. "
            "La informacion que puede marcar la diferencia "
            "entre detectar a tiempo o lamentarlo despues. "
            "Por los que amas. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "090", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Tus hijos te necesitan sano. No en un hospital. "
            "Cada ano que detectas y prevendes un problema cardiovascular "
            "es un ano mas con ellos. "
            "En su graduacion. En su boda. En el nacimiento de tus nietos. "
            "BioScan IA te da los datos para tomar decisiones preventivas hoy. "
            "Setenta y nueve parametros de salud en noventa segundos. "
            "Riesgo cardiovascular a diez anos calculado con el modelo AHA PREVENT dos mil veintitres. "
            "Calibrado con datos reales del CDC. "
            "Score de salud de cero a cien. Reporte PDF. Asistente IA. "
            "Garantia total de devolucion. "
            "Por mas anos con ellos. Cinco dolares. bioscanpro punto net."
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
    print("\n// durationInFrames para batch09-data.ts:")
    for n, dur, frames in sorted(results):
        print(f"//  {n}: {dur:.1f}s x30 + 60 = {frames} frames")

if __name__ == "__main__":
    asyncio.run(main())
