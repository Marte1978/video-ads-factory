"""
gen_tts_batch07.py -- Genera audios TTS para copies 061-070 usando Edge TTS.
Categoria: Tecnologia y Ciencia
Salida: public/audio/bioscan-061.mp3 ... bioscan-070.mp3
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
        "n": "061", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "La misma fisica que usan los hospitales. Ahora en tu bolsillo. "
            "La Ley de Beer-Lambert describe como la luz atraviesa los tejidos biologicos "
            "y como el oxigeno en la sangre absorbe longitudes de onda especificas. "
            "Es el principio fisico detras de los pulsioximetros medicos "
            "que ves en hospitales y clinicas de todo el mundo. "
            "BioScan IA usa ese mismo principio en la camara trasera de tu celular "
            "para analizar setenta y nueve parametros de salud en noventa segundos. "
            "Calibrado con la base de datos NHANES del CDC: "
            "cinco mil ochocientos cincuenta y seis adultos reales estudiados longitudinalmente. "
            "Riesgo cardiovascular calculado con el modelo PREVENT 2023 "
            "de la American Heart Association. "
            "Score de salud de cero a cien. Reporte PDF al instante. "
            "Asistente de inteligencia artificial que explica cada resultado. "
            "Garantia total de devolucion. "
            "Tecnologia medica real. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "062", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Base de datos de cinco mil ochocientos cincuenta y seis adultos reales del CDC. "
            "No de un algoritmo inventado. No de datos sinteticos. Adultos reales. "
            "El CDC, Centro para el Control y Prevencion de Enfermedades de los Estados Unidos, "
            "es la institucion de salud publica mas respetada del mundo. "
            "El estudio NHANES del CDC es el estandar de referencia en epidemiologia. "
            "Los algoritmos de BioScan IA estan calibrados con esos datos reales. "
            "No con simulaciones. No con modelos artificiales. "
            "Con datos de personas reales de todas las edades, generos y etnias. "
            "Eso es lo que diferencia a BioScan IA de cualquier otra aplicacion de salud. "
            "Setenta y nueve parametros. Noventa segundos. Cinco dolares. "
            "Reporte PDF descargable. Score de salud de cero a cien. "
            "Asistente de inteligencia artificial personalizado. "
            "Ciencia del CDC. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "063", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Lo que antes requeria un laboratorio completo, hoy cabe en la camara de tu celular. "
            "Un laboratorio de analisis clinico: equipos de cientos de miles de dolares. "
            "Tecnicos especializados. Reactivos quimicos. Procesos de horas. "
            "La miniaturizacion de la tecnologia medica es la revolucion de nuestro tiempo. "
            "BioScan IA es la vanguardia de esa revolucion. "
            "Setenta y nueve parametros de salud desde la camara de tu celular. "
            "Oximetria avanzada basada en la ley Beer-Lambert. "
            "Analisis de riesgo cardiovascular segun el modelo PREVENT 2023 "
            "de la American Heart Association. "
            "Validado con cinco mil ochocientos adultos reales del CDC. "
            "Score de salud de cero a cien. Reporte PDF al instante. "
            "Asistente de inteligencia artificial que explica todo. "
            "En noventa segundos. Por cinco dolares. "
            "El futuro es hoy. bioscanpro punto net."
        )
    },
    {
        "n": "064", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Como puede una camara de celular medir tu salud. Buena pregunta. Te lo explicamos. "
            "La camara trasera de tu celular emite luz LED. "
            "Esa luz penetra la piel y es parcialmente absorbida por la hemoglobina en tu sangre. "
            "El nivel de absorcion varia segun la concentracion de oxigeno. "
            "Es el mismo principio fisico que usan los pulsioximetros medicos. "
            "BioScan IA captura esas variaciones de luz y las procesa "
            "con algoritmos calibrados en los datos NHANES del CDC: "
            "cinco mil ochocientos cincuenta y seis adultos reales. "
            "El resultado: setenta y nueve parametros de salud personalizados. "
            "Presion arterial estimada. Frecuencia cardiaca. Saturacion de oxigeno. "
            "Glucosa estimada. Riesgo cardiovascular calculado con AHA PREVENT 2023. "
            "No es magia. Es fisica optica aplicada. "
            "Score de salud. Reporte PDF. Asistente IA. "
            "Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "065", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Imagina tener un medico de cabecera disponible las veinticuatro horas, "
            "los siete dias de la semana, en tu celular. "
            "No es imaginacion. Es BioScan IA. "
            "Despues de analizar tus setenta y nueve parametros de salud en noventa segundos, "
            "el asistente de inteligencia artificial de BioScan te explica cada resultado. "
            "Te dice que significa tu score de salud de cero a cien. "
            "Identifica que areas estan en riesgo y cuales estan optimas. "
            "Te da recomendaciones personalizadas basadas en tus datos reales. "
            "Todo en lenguaje claro, sin terminos medicos incomprensibles. "
            "Como tener un medico siempre disponible, sin cita previa, sin esperas. "
            "Tecnologia de oximetria avanzada basada en Beer-Lambert. "
            "Calibrado con datos del CDC. Algoritmo cardiaco AHA PREVENT 2023. "
            "Garantia total de devolucion. "
            "Tu medico digital. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "066", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Tu celular ya mide pasos, calorias y horas de sueno. "
            "Por que no setenta y nueve parametros de salud medica real. "
            "Los wearables llevan anos midiendo tu cuerpo. "
            "Pero miden cosas superficiales: pasos, calorias, pasos de sueno. "
            "BioScan IA va mucho mas alla de cualquier pulsera fitness. "
            "Y lo hace sin ningun gadget adicional. "
            "Solo la camara trasera que ya tienes en tu bolsillo. "
            "Saturacion de oxigeno. Presion arterial estimada. Glucosa estimada. "
            "Frecuencia cardiaca. Riesgo cardiovascular a diez anos. "
            "Funcion renal estimada. Biomarcadores hormonales. "
            "Y sesenta y cinco parametros mas organizados en trece sistemas corporales. "
            "Validado con datos reales del CDC. Algoritmo cardiaco AHA PREVENT 2023. "
            "Score de salud de cero a cien. Reporte PDF. Asistente IA. "
            "Sin gadgets extras. Solo tu celular. "
            "Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "067", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Tu reloj inteligente mide cinco cosas. BioScan IA mide setenta y nueve. "
            "El Apple Watch mide frecuencia cardiaca, saturacion de oxigeno, "
            "electrocardiograma aproximado y algunas mas. "
            "Y cuesta cuatrocientos dolares o mas. "
            "BioScan IA analiza esos mismos parametros mas presion arterial estimada, "
            "glucosa estimada, riesgo cardiovascular a diez anos "
            "segun el modelo PREVENT 2023 de la American Heart Association, "
            "funcion renal estimada, biomarcadores hormonales "
            "y sesenta y cinco indicadores adicionales. "
            "Todo validado con la base de datos NHANES del CDC. "
            "Cinco mil ochocientos cincuenta y seis adultos reales estudiados. "
            "Y cuesta cinco dolares. Sin subscription mensual. Sin gadget adicional. "
            "Solo tu celular y noventa segundos. "
            "Dieciseis veces mas completo. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "068", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "El modelo PREVENT dos mil veintitres de la American Heart Association. "
            "Ahora en tu celular. Por cinco dolares. "
            "En dos mil veintitres, la American Heart Association publico "
            "el modelo PREVENT: el algoritmo mas avanzado disponible "
            "para calcular riesgo cardiovascular a diez anos. "
            "Reemplaza modelos anteriores con mayor precision y mas variables. "
            "Los cardiologos lideres del mundo usan este modelo para evaluar pacientes. "
            "BioScan IA implementa ese mismo modelo PREVENT dos mil veintitres. "
            "Con tus datos reales de frecuencia cardiaca, saturacion de oxigeno, "
            "presion arterial estimada, glucosa estimada y mas parametros. "
            "Setenta y nueve indicadores. Score de salud de cero a cien. "
            "Reporte PDF descargable. Asistente de inteligencia artificial. "
            "Validado con datos del CDC. Garantia total de devolucion. "
            "Tecnologia cardiologica de primer nivel. "
            "Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "069", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Cuando pones el dedo en la camara, pasan tres cosas increibles. "
            "Una: la luz LED de tu celular penetra la piel y detecta "
            "el flujo de oxigeno en la hemoglobina de tu sangre, "
            "usando los mismos principios de la ley de Beer-Lambert "
            "que usan los pulsioximetros medicos. "
            "Dos: BioScan IA procesa esas senales de luz con algoritmos "
            "calibrados en datos reales de cinco mil ochocientos adultos "
            "de la base de datos NHANES del CDC. "
            "Tres: en noventa segundos calculas setenta y nueve parametros "
            "de salud completamente personalizados. "
            "Presion arterial estimada. Glucosa estimada. Frecuencia cardiaca. "
            "Saturacion de oxigeno. Riesgo cardiovascular AHA PREVENT 2023. "
            "Score de salud de cero a cien. Reporte PDF. Asistente IA. "
            "Tres pasos. Noventa segundos. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "070", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Veinte parametros calculados directamente. "
            "Cincuenta y nueve estimados por inteligencia artificial con datos del CDC. "
            "BioScan IA es transparente sobre su metodologia. "
            "Los veinte parametros directos incluyen frecuencia cardiaca, "
            "saturacion de oxigeno, variabilidad de la frecuencia cardiaca "
            "y otros indicadores medidos por oximetria de pulso. "
            "Los cincuenta y nueve parametros estimados son calculados "
            "por modelos de inteligencia artificial entrenados en los datos NHANES del CDC, "
            "cinco mil ochocientos adultos reales, "
            "correlacionando los parametros directos con biomarcadores conocidos. "
            "Sin cajas negras. Sin algoritmos ocultos. Ciencia honesta y transparente. "
            "Score de salud de cero a cien. Reporte PDF completo descargable. "
            "Asistente de inteligencia artificial personalizado. "
            "Garantia total de devolucion. "
            "Transparencia total. Cinco dolares. bioscanpro punto net."
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
    print("\n// durationInFrames para batch07-data.ts:")
    for n, dur, frames in sorted(results):
        print(f"//  {n}: {dur:.1f}s x30 + 60 = {frames} frames")

if __name__ == "__main__":
    asyncio.run(main())
