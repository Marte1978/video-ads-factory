"""
gen_tts_batch06.py -- Genera audios TTS para copies 051-060 usando Edge TTS.
Categoria: Velocidad y Conveniencia (continuacion)
Salida: public/audio/bioscan-051.mp3 ... bioscan-060.mp3
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
        "n": "051", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Cuando fue la ultima vez que en noventa segundos recibiste algo tan valioso. "
            "En noventa segundos BioScan IA te da tu score de salud de cero a cien. "
            "Analisis de setenta y nueve parametros: cardiovascular, pulmonar, renal, hormonal. "
            "Presion arterial estimada. Frecuencia cardiaca. Saturacion de oxigeno. "
            "Glucosa estimada. Riesgo cardiovascular a diez anos calculado "
            "con el modelo PREVENT 2023 de la American Heart Association. "
            "Reporte PDF completo descargable al instante. "
            "Asistente de inteligencia artificial que explica cada resultado en lenguaje simple. "
            "Validado con la base de datos NHANES del CDC: cinco mil ochocientos adultos reales. "
            "Tecnologia de oximetria avanzada basada en la ley Beer-Lambert. "
            "Garantia total de devolucion si no estas satisfecho. "
            "Todo eso en menos tiempo que un anuncio de television. "
            "Los noventa segundos mas valiosos de tu dia. "
            "Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "052", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Sin formularios. Sin historial medico. Sin seguro. Sin cita previa. "
            "Sin sala de espera. Sin codigo de vestimenta para la consulta. "
            "Sin perder horas de trabajo. Sin estacionamiento que pagar. "
            "El sistema medico esta disenado para hacerte perder tiempo. "
            "BioScan IA esta disenado para lo opuesto. "
            "Entras a bioscanpro punto net. Pagas cinco dolares. "
            "Pones el dedo en la camara. Noventa segundos. "
            "Recibes setenta y nueve parametros de salud analizados. "
            "Score de salud de cero a cien. "
            "Reporte PDF descargable al instante. "
            "Asistente de inteligencia artificial que explica cada resultado. "
            "Sin burocracia. Sin obstaculos. Sin tramites. "
            "Tecnologia basada en la ley Beer-Lambert y datos del CDC. "
            "Algoritmo cardiaco AHA PREVENT 2023. "
            "Sin barreras. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "053", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Si lo dejas para despues, no lo haras. Hazlo ahora. "
            "Todos tenemos esa lista de cosas que voy a hacer para mi salud. "
            "Ir al medico cuando tenga tiempo. Hacerme los examenes el proximo mes. "
            "Cuidarme mas cuando pase esta temporada de trabajo. "
            "Esa lista nunca termina. Siempre hay algo mas urgente. "
            "BioScan IA es la unica opcion de salud que puedes hacer "
            "en este momento exacto. "
            "Cinco dolares. Noventa segundos. Desde este telefono. "
            "Sin planificar. Sin sacar cita. Sin desplazarte. "
            "Setenta y nueve indicadores de salud. Score de cero a cien. "
            "Reporte PDF al instante. Asistente de inteligencia artificial incluido. "
            "Tecnologia validada con datos del CDC y algoritmo cardiaco AHA PREVENT 2023. "
            "Garantia total de devolucion incluida. "
            "Ninguna otra excusa. Ahora. "
            "Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "054", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Puedes hacer tu analisis de salud mientras ves Netflix. "
            "En serio. Pon una serie. "
            "Abre bioscanpro punto net en tu celular. "
            "Paga cinco dolares. "
            "Pon el dedo en la camara noventa segundos. "
            "Y vuelve a tu serie, pero ahora con setenta y nueve indicadores de salud analizados "
            "y reporte PDF en tu correo electronico. "
            "Tu salud no tiene que competir con tu tiempo libre. "
            "BioScan IA se adapta a tu vida, no al reves. "
            "Presion arterial estimada. Frecuencia cardiaca. Saturacion de oxigeno. "
            "Glucosa estimada. Riesgo cardiovascular calculado. Score de salud. "
            "Todo validado con datos reales del CDC y algoritmo AHA PREVENT 2023. "
            "Asistente de inteligencia artificial personalizado. "
            "Garantia total de devolucion incluida. "
            "La salud mas facil del mundo. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "055", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "El unico obstaculo entre tu y conocer tu salud es abrir una pagina web. "
            "Eso es todo. Una pagina web. Un clic. "
            "No hay obstaculos medicos: no necesitas seguro, historial ni receta. "
            "No hay obstaculos economicos: cinco dolares es lo que cuesta. "
            "No hay obstaculos logisticos: desde donde estas, ahora mismo. "
            "No hay obstaculos de tiempo: noventa segundos de tu dia. "
            "No hay obstaculos de conocimiento: mas facil que usar Instagram. "
            "bioscanpro punto net. Cinco dolares. Dedo en la camara. "
            "Noventa segundos. Setenta y nueve parametros de salud. "
            "Score de cero a cien. Reporte PDF descargable. Asistente de inteligencia artificial. "
            "Tecnologia de oximetria avanzada basada en la ley Beer-Lambert. "
            "Validado con cinco mil ochocientos adultos reales del CDC. "
            "Garantia total de devolucion. "
            "Un clic. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "056", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "No tienes que saber nada de tecnologia para usar BioScan IA. "
            "Si puedes tomar una foto con tu celular, puedes usar BioScan IA. "
            "La interfaz es mas simple que Instagram. Mas intuitiva que WhatsApp. "
            "Entras a bioscanpro punto net desde tu navegador. "
            "Sigues las instrucciones en pantalla. "
            "Pones el dedo en la camara trasera de tu celular. "
            "Esperas noventa segundos. "
            "Y los algoritmos hacen todo el trabajo. "
            "Tu solo recibes los resultados. Score de salud de cero a cien. "
            "Setenta y nueve parametros de salud organizados de forma clara. "
            "Reporte PDF descargable que puedes compartir con tu medico. "
            "Asistente de inteligencia artificial que traduce todo al lenguaje de todos los dias. "
            "Tecnologia basada en la ley Beer-Lambert. Datos CDC. Algoritmo AHA PREVENT 2023. "
            "Garantia total de devolucion incluida. "
            "Tan facil como una selfie. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "057", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Resultado en tiempo real. No en tres dias cuando el laboratorio procese tu muestra. "
            "Los laboratorios tradicionales tardan de tres a cinco dias en darte resultados. "
            "Luego tienes que ir a recogerlos o esperar que te los manden. "
            "Y despues buscar a alguien que te explique que significan. "
            "BioScan IA tarda noventa segundos. "
            "El resultado llega en el momento. Al instante. "
            "Reporte PDF digital al instante, listo para descargar y compartir. "
            "Asistente de inteligencia artificial que te explica cada uno de los setenta y nueve "
            "parametros en lenguaje claro, sin terminos medicos. "
            "Score de salud de cero a cien. "
            "Tecnologia de oximetria avanzada validada con datos reales del CDC. "
            "Algoritmo cardiaco PREVENT 2023 de la American Heart Association. "
            "Garantia total de devolucion. "
            "Resultados en noventa segundos. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "058", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Tu chequeo de salud mas privado y mas rapido. Nadie tiene que saberlo. "
            "Sin sala de espera donde te vean los vecinos. "
            "Sin recepcionista que registre tu visita y tu diagnostico. "
            "Sin formulario que quede en el sistema del hospital. "
            "Sin numero de seguro social ni datos personales sensibles. "
            "BioScan IA es completamente privado. "
            "Noventa segundos desde tu cuarto, tu carro o donde quieras. "
            "Solo tu y tus resultados. "
            "Setenta y nueve parametros de salud. Score de cero a cien. "
            "Reporte PDF que solo tu descargas y ves. "
            "Asistente de inteligencia artificial que te explica todo en privado. "
            "Tecnologia de oximetria avanzada. Datos CDC. Algoritmo AHA PREVENT 2023. "
            "Garantia total de devolucion incluida. "
            "En privado. En noventa segundos. "
            "Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "059", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Sin agujas. Sin pinchazos. Sin sangre. "
            "Si le tienes miedo a los pinchazos, a los tubos de vacio, a la sangre, "
            "entendemos perfectamente. "
            "Millones de personas evitan los chequeos medicos precisamente por eso. "
            "BioScan IA no necesita nada de eso. "
            "Solo la camara trasera de tu celular y noventa segundos de tu tiempo. "
            "La tecnologia de oximetria avanzada basada en la ley Beer-Lambert "
            "analiza el flujo sanguineo a traves de la piel mediante luz infrarroja. "
            "Sin contacto con sangre. Sin agujas. Sin dolor. "
            "Setenta y nueve parametros de salud completamente indoloros. "
            "Presion arterial estimada. Frecuencia cardiaca. Saturacion de oxigeno. "
            "Glucosa estimada. Riesgo cardiovascular calculado con AHA PREVENT 2023. "
            "Reporte PDF al instante. Score de salud. Asistente de inteligencia artificial. "
            "Sin dolor. Sin agujas. "
            "Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "060", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Las personas que se chequean regularmente viven mas. "
            "Y ahora es facil ser una de ellas. "
            "La prevencion constante es el secreto de la longevidad. "
            "Pero antes era cara. Era dificil. Requeria tiempo y desplazamiento. "
            "Con BioScan IA puedes hacer un analisis completo cada semana si quieres. "
            "Setenta y nueve parametros de salud. Noventa segundos. Cinco dolares. "
            "Seguimiento de tu progreso mes a mes. "
            "Ver como mejoran tus indicadores con los cambios de habitos. "
            "Detectar cualquier desviacion antes de que se convierta en problema. "
            "Tecnologia de oximetria avanzada basada en la ley Beer-Lambert. "
            "Calibrado con datos reales del CDC: cinco mil ochocientos adultos estudiados. "
            "Riesgo cardiovascular calculado con el modelo PREVENT 2023 "
            "de la American Heart Association. "
            "Reporte PDF. Score de salud. Asistente de inteligencia artificial. "
            "Se proactivo. Cinco dolares. bioscanpro punto net."
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
    print("\n// durationInFrames para batch06-data.ts:")
    for n, dur, frames in sorted(results):
        print(f"//  {n}: {dur:.1f}s x30 + 60 = {frames} frames")

if __name__ == "__main__":
    asyncio.run(main())
