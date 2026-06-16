"""
gen_tts_batch08.py -- Genera audios TTS para copies 071-080 usando Edge TTS.
Categoria: Tecnologia y Ciencia (continuacion)
Salida: public/audio/bioscan-071.mp3 ... bioscan-080.mp3
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
        "n": "071", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "En el ano dos mil treinta, todos tendran un analizador de salud en el celular. "
            "BioScan IA ya lo tiene hoy. "
            "La medicina predictiva y preventiva basada en inteligencia artificial "
            "es el futuro de la salud global. "
            "Ese futuro ya llego. "
            "BioScan IA analiza setenta y nueve parametros de salud en noventa segundos "
            "usando la camara trasera de tu celular. "
            "Te da un score de salud de cero a cien. "
            "Activa un asistente de inteligencia artificial que te guia, "
            "te explica cada resultado y te da recomendaciones personalizadas. "
            "Calibrado con datos reales del CDC. "
            "Algoritmo cardiaco AHA PREVENT dos mil veintitres. "
            "Reporte PDF descargable al instante. "
            "Garantia total de devolucion. "
            "El futuro es hoy. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "072", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Tu credito tiene un score. Tu salud tambien deberia tenerlo. "
            "El score de credito mide tu salud financiera con un numero claro: "
            "cuanto riesgo representas, en que areas mejorar, como avanzar. "
            "El score de BioScan IA hace lo mismo con tu salud fisica. "
            "De cero a cien. "
            "Basado en setenta y nueve parametros reales medidos con la camara de tu celular. "
            "Actualizable cada vez que quieras. "
            "Saturacion de oxigeno, frecuencia cardiaca, presion arterial estimada, "
            "glucosa estimada, riesgo cardiovascular a diez anos "
            "segun el modelo PREVENT dos mil veintitres de la AHA. "
            "Calibrado con cinco mil ochocientos adultos reales del CDC. "
            "Tu numero de salud personal. Siempre disponible. "
            "Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "073", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Un PDF con setenta y nueve indicadores de tu salud. "
            "Descargable. Compartible con tu medico. "
            "BioScan IA genera un reporte PDF completo con todos tus resultados. "
            "Cada parametro con su valor, su rango normal y una explicacion clara. "
            "Tu score de salud de cero a cien. "
            "Tu riesgo cardiovascular calculado con el modelo PREVENT dos mil veintitres de la AHA. "
            "Puedes guardarlo, compartirlo con tu medico en tu proxima cita, "
            "compararlo con analisis anteriores para ver tu progreso. "
            "Un documento real de tu estado de salud, "
            "generado en noventa segundos desde tu celular. "
            "Sin esperar resultados de laboratorio. "
            "Sin costos adicionales. "
            "El reporte completo incluido en los cinco dolares. "
            "bioscanpro punto net."
        )
    },
    {
        "n": "074", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Cuantas apps de salud te dicen exactamente como calculan sus resultados. "
            "Casi ninguna. BioScan IA si. "
            "Metodologia publicada y explicada. "
            "Base de datos citada: NHANES del CDC, cinco mil ochocientos adultos reales. "
            "Algoritmos transparentes: veinte parametros directos de oximetria "
            "mas cincuenta y nueve estimados por inteligencia artificial entrenada en esos datos reales. "
            "Sin cajas negras. Sin promesas vagas. Sin numeros inventados. "
            "Si quieres entender tu salud, primero necesitas una herramienta honesta. "
            "BioScan IA es esa herramienta. "
            "Score de salud de cero a cien. Reporte PDF. Asistente IA. "
            "Garantia total de devolucion. "
            "Ciencia transparente. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "075", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Los oximetros salvaron millones de vidas durante el COVID. "
            "BioScan IA usa la misma tecnologia. "
            "Durante la pandemia, los pulsioximetros mostraron al mundo "
            "el poder de medir el oxigeno en sangre con una simple pinza en el dedo. "
            "BioScan IA usa esa misma oximetria avanzada, "
            "basada en la ley de Beer-Lambert, "
            "calibrada con datos reales del CDC "
            "y potenciada con setenta y ocho parametros adicionales. "
            "Todo desde la camara trasera de tu celular. "
            "Incluyendo presion arterial estimada, glucosa estimada, "
            "frecuencia cardiaca, variabilidad cardiaca "
            "y riesgo cardiovascular calculado con el modelo AHA PREVENT dos mil veintitres. "
            "Tecnologia que ya probo salvar vidas. "
            "Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "076", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Cada analisis hace que BioScan IA sea mas preciso. "
            "Los modelos de inteligencia artificial de BioScan IA "
            "continuan mejorando con nuevos datos. "
            "Los algoritmos se refinan. La precision aumenta. "
            "Cuando usas BioScan IA, no solo cuidas tu salud "
            "sino que contribuyes a mejorar la herramienta para millones de personas. "
            "Es el poder de la inteligencia artificial colectiva aplicada a la salud. "
            "Ya hoy: setenta y nueve parametros en noventa segundos, "
            "calibrado con cinco mil ochocientos adultos del CDC, "
            "algoritmo cardiaco AHA PREVENT dos mil veintitres, "
            "score de salud de cero a cien, reporte PDF, asistente IA. "
            "Y mejora con cada uso. "
            "Se parte de la revolucion. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "077", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "BioScan IA no reemplaza a tu medico. Le da mas informacion para ayudarte mejor. "
            "Imagina llegar a tu proxima cita medica "
            "con un reporte de setenta y nueve parametros de tu salud en la mano. "
            "Tu medico tendra mas datos: saturacion de oxigeno, frecuencia cardiaca, "
            "presion arterial estimada, glucosa estimada, "
            "riesgo cardiovascular calculado con AHA PREVENT dos mil veintitres, "
            "funcion renal estimada, biomarcadores hormonales. "
            "Podra hacer mejores preguntas, hacer un seguimiento mas preciso "
            "y darte un diagnostico mas completo. "
            "BioScan IA y tu medico: el equipo perfecto para cuidar tu salud. "
            "Reporte PDF descargable. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "078", "voz": "es-MX-JorgeNeural",
        "texto": (
            "La camara de tu celular tiene mejor resolucion "
            "que muchos sensores medicos de hace diez anos. "
            "Los sensores fotopletiSmograficos de los celulares modernos "
            "son increiblemente precisos. "
            "Detectan variaciones minimas en el flujo sanguineo a traves de la piel. "
            "BioScan IA aprovecha esa capacidad para calcular setenta y nueve parametros de salud "
            "usando la ley de Beer-Lambert, "
            "calibrada con cinco mil ochocientos adultos reales del CDC. "
            "Tu celular ya era un medico. Solo faltaba el software correcto. "
            "BioScan IA es ese software. "
            "Saturacion de oxigeno. Presion arterial estimada. Glucosa estimada. "
            "Riesgo cardiovascular AHA PREVENT dos mil veintitres. "
            "Score de salud. Reporte PDF. Asistente IA. "
            "Activa el medico en tu celular. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "079", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Los sintomas son el lenguaje del cuerpo cuando ya es tarde. "
            "Los datos son las senales tempranas. "
            "Cuando sientes dolor de pecho, ya hay un problema. "
            "Cuando te falta el aire, algo ya fallo. "
            "Los sintomas son el cuerpo pidiendo socorro. "
            "Los datos son el cuerpo enviando advertencias antes de que sea urgente. "
            "BioScan IA te da datos reales de setenta y nueve parametros de salud "
            "antes de que aparezcan sintomas. "
            "Presion arterial. Glucosa. Riesgo cardiovascular a diez anos. "
            "Funcion renal. Biomarcadores de inflamacion. "
            "La diferencia entre detectar a tiempo y tratar una emergencia. "
            "Calibrado con el CDC. Algoritmo AHA. "
            "De reactivo a preventivo. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "080", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Pago seguro con Stripe. Datos privados. Garantia de devolucion total. "
            "BioScan IA no solo cuida tu salud. Cuida tu privacidad y tu dinero. "
            "El pago se procesa con Stripe, "
            "el sistema de pagos mas seguro y confiable del mundo. "
            "Tus datos de salud son privados y nunca se venden a terceros. "
            "Y si por cualquier razon no estas completamente satisfecho, "
            "te devolvemos el cien por ciento de tu dinero. Sin preguntas. Sin complicaciones. "
            "Setenta y nueve parametros de salud en noventa segundos. "
            "Score de salud de cero a cien. "
            "Reporte PDF descargable. "
            "Asistente de inteligencia artificial personalizado. "
            "Calibrado con datos del CDC. Algoritmo cardiaco AHA PREVENT dos mil veintitres. "
            "Sin riesgo. Cinco dolares. bioscanpro punto net."
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
    print("\n// durationInFrames para batch08-data.ts:")
    for n, dur, frames in sorted(results):
        print(f"//  {n}: {dur:.1f}s x30 + 60 = {frames} frames")

if __name__ == "__main__":
    asyncio.run(main())
