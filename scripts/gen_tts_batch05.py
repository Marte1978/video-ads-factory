"""
gen_tts_batch05.py -- Genera audios TTS para copies 041-050 usando Edge TTS.
Categoria: Velocidad y Conveniencia
Salida: public/audio/bioscan-041.mp3 ... bioscan-050.mp3
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
        "n": "041", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Noventa segundos. Eso es todo lo que necesitas para conocer tu estado de salud completo. "
            "No tienes que sacar cita con semanas de anticipacion. "
            "No tienes que manejar hasta la clinica y buscar donde estacionarte. "
            "No tienes que esperar horas en una sala llena de gente. "
            "No tienes que pincharte ni dar muestras de sangre. "
            "No tienes que esperar dias para que lleguen los resultados. "
            "BioScan IA analiza setenta y nueve parametros de salud en noventa segundos "
            "desde la camara de tu celular. Ahora mismo. Donde estas. "
            "Presion arterial estimada. Frecuencia cardiaca. Saturacion de oxigeno. "
            "Glucosa estimada. Riesgo cardiovascular segun el modelo PREVENT 2023 "
            "de la American Heart Association. "
            "Validado con datos reales del CDC. Cinco mil ochocientos adultos estudiados. "
            "Score de salud de cero a cien. Reporte PDF descargable al instante. "
            "Asistente de inteligencia artificial que explica cada resultado. "
            "Empieza en diez segundos. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "042", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Antes pasabas cuatro horas en la clinica para un chequeo basico. "
            "Sacar la cita. Manejar hasta alli. Buscar estacionamiento. Esperar turno. "
            "El medico. Las pruebas. Esperar resultados. Tres dias despues: todo normal. "
            "Ahora tardas noventa segundos. "
            "Antes gastabas ciento cincuenta dolares o mas en cada visita. "
            "Ahora gastas cinco dolares. "
            "Antes te analizaban cinco o diez parametros. "
            "Ahora analizas setenta y nueve. "
            "Antes tardabas dias en saber si estabas bien. "
            "Ahora lo sabes en noventa segundos. "
            "BioScan IA cambio las reglas del juego. "
            "Tecnologia de oximetria avanzada basada en la ley Beer-Lambert. "
            "Datos del CDC. Algoritmo cardiaco AHA PREVENT 2023. "
            "Score de salud de cero a cien. Reporte PDF. Asistente de inteligencia artificial. "
            "El futuro de la salud. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "043", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "En el tiempo que leiste este texto, podrias haber iniciado tu analisis de salud. "
            "En serio. BioScan IA tarda noventa segundos. "
            "Entra a bioscanpro punto net. Paga cinco dolares. "
            "Sigue las instrucciones en pantalla. Pon el dedo en la camara. "
            "Y en menos de dos minutos tienes tu score de salud de cero a cien, "
            "analisis de setenta y nueve parametros, reporte PDF descargable "
            "y asistente de inteligencia artificial personalizado. "
            "Todo eso mientras tu cafe todavia esta caliente. "
            "Tecnologia de oximetria avanzada basada en la ley Beer-Lambert. "
            "Calibrado con la base de datos NHANES del CDC. "
            "Cinco mil ochocientos cincuenta y seis adultos reales estudiados. "
            "Riesgo cardiovascular segun el modelo PREVENT 2023 "
            "de la American Heart Association. "
            "Garantia total de devolucion si no estas satisfecho. "
            "Hazlo ahora. No en un rato. Ahora. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "044", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Mas rapido que pedir un Uber. Mas informativo que una visita al medico. "
            "Pedir un Uber tarda tres minutos en promedio. "
            "Una visita al medico: entre dos y cuatro horas entre espera y consulta. "
            "BioScan IA: noventa segundos. "
            "Y el resultado del Uber: te lleva de A a B. "
            "El resultado del medico: generalmente todo esta bien. "
            "El resultado de BioScan IA: setenta y nueve parametros de salud analizados. "
            "Score de cero a cien. Riesgo cardiovascular calculado. "
            "Presion arterial estimada. Saturacion de oxigeno. Glucosa estimada. "
            "Reporte PDF descargable que puedes mostrarle a tu medico. "
            "Asistente de inteligencia artificial que explica cada resultado en lenguaje claro. "
            "Todo sin salir de casa. Sin esperas. Sin citas. Sin tramites. "
            "La velocidad que tu salud merece. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "045", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Tienes reuniones, hijos, trabajo, y cero tiempo para chequearte la salud. "
            "Lo entendemos. La agenda de hoy no da para citas medicas de dos horas. "
            "Por eso BioScan IA cabe en cualquier agenda. "
            "Noventa segundos entre reuniones. "
            "En el carro esperando que salga el nino del colegio. "
            "En el bano si hace falta. "
            "En el aeropuerto esperando el vuelo. "
            "Setenta y nueve parametros de salud cuando tu quieras, donde tu quieras. "
            "Presion arterial estimada. Frecuencia cardiaca. Saturacion de oxigeno. "
            "Glucosa estimada. Riesgo cardiovascular a diez anos. "
            "Validado con datos reales del CDC y algoritmo AHA PREVENT 2023. "
            "Score de salud de cero a cien. Reporte PDF al instante. "
            "Asistente de inteligencia artificial incluido. "
            "Sin excusa de tiempo. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "046", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Sin aplicacion que descargar. Sin registro largo. Sin esperas. Sin formularios. "
            "Entra desde el navegador de tu celular. "
            "Paga cinco dolares. "
            "Sigue las instrucciones en pantalla. "
            "Pon el dedo en la camara. "
            "Noventa segundos despues tienes tus resultados. "
            "Asi de simple. Sin friccion. Sin obstaculos. Sin burocracia. "
            "BioScan IA es el analisis de salud mas accesible del mundo. "
            "Setenta y nueve indicadores de salud organizados en trece sistemas corporales. "
            "Score de salud de cero a cien. "
            "Reporte PDF descargable que puedes guardar y compartir con tu medico. "
            "Asistente de inteligencia artificial que te explica cada resultado sin terminos medicos. "
            "Tecnologia de oximetria avanzada validada con datos reales del CDC. "
            "Garantia total de devolucion incluida. "
            "Empieza ahora. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "047", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Tardas mas en preparar el desayuno que en hacer tu analisis de salud. "
            "Preparar el desayuno: diez minutos. "
            "BioScan IA: noventa segundos. "
            "Cafe con tostadas mientras tus resultados estan listos. "
            "Con que empiezas el dia manana. "
            "Setenta y nueve parametros de salud analizados mientras el cafe se enfria. "
            "Presion arterial estimada. Frecuencia cardiaca. Saturacion de oxigeno. "
            "Glucosa estimada en ayunas. Riesgo cardiovascular a diez anos. "
            "Score de salud de cero a cien para que sepas exactamente donde estas. "
            "Reporte PDF completo descargable al instante. "
            "Asistente de inteligencia artificial que explica cada resultado. "
            "Tecnologia basada en la ley Beer-Lambert. Datos CDC. Algoritmo AHA PREVENT 2023. "
            "Hazlo antes del desayuno. Hazlo despues. Hazlo durante. "
            "Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "048", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Los medicos atienden de ocho de la manana a cinco de la tarde. "
            "Con cita. Con dias de antelacion. Con suerte consigues una en la semana. "
            "BioScan IA: veinticuatro horas. Los siete dias. Los trescientos sesenta y cinco dias. "
            "Domingo a las once de la noche y quieres saber como esta tu corazon. "
            "BioScan IA esta disponible. "
            "Lunes a las cinco de la manana antes de correr. "
            "BioScan IA esta disponible. "
            "Dia de Navidad. Semana Santa. Cualquier feriado. "
            "BioScan IA esta disponible. "
            "Setenta y nueve parametros de salud. Noventa segundos. Cinco dolares. "
            "Siempre disponible para ti. Sin citas. Sin horarios. Sin dias festivos. "
            "Reporte PDF al instante. Asistente de inteligencia artificial. "
            "Score de salud de cero a cien. Garantia total de devolucion. "
            "Tu salud no tiene horario. bioscanpro punto net."
        )
    },
    {
        "n": "049", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Lo hice desde el aeropuerto esperando mi vuelo. "
            "Noventa segundos. Eso tarde. "
            "Tenia senal de WiFi, mi celular y cinco dolares. "
            "En el tiempo que esperaba el boarding, hice mi analisis de salud completo. "
            "Setenta y nueve parametros analizados. "
            "Score de salud de cero a cien. "
            "Reporte PDF en mi correo antes de subir al avion. "
            "BioScan IA va donde tu vas. "
            "Desde el aeropuerto. Desde el hotel. Desde la sala de espera. "
            "Desde casa. Desde la oficina. Desde el carro. "
            "Siempre disponible. Siempre listo. "
            "Tecnologia de oximetria avanzada basada en la ley Beer-Lambert. "
            "Calibrado con datos reales del CDC. Algoritmo cardiaco AHA PREVENT 2023. "
            "Asistente de inteligencia artificial que explica cada resultado. "
            "Garantia total de devolucion incluida. "
            "Desde cualquier lugar. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "050", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Tres pasos. Noventa segundos. Setenta y nueve indicadores de salud. "
            "Paso uno: entra a bioscanpro punto net y paga cinco dolares. "
            "Paso dos: pon el dedo indice en la camara trasera de tu celular "
            "y mantelo ahi durante noventa segundos. "
            "Paso tres: recibe tu analisis completo. "
            "Score de salud de cero a cien. "
            "Setenta y nueve parametros organizados en trece sistemas corporales. "
            "Presion arterial estimada. Frecuencia cardiaca. Saturacion de oxigeno. "
            "Glucosa estimada. Riesgo cardiovascular calculado con el modelo PREVENT 2023 "
            "de la American Heart Association. "
            "Reporte PDF descargable al instante. "
            "Asistente de inteligencia artificial que explica todo en lenguaje claro. "
            "Garantia total de devolucion si no estas satisfecho. "
            "Asi de simple. Tres pasos. Cinco dolares. bioscanpro punto net."
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
    print("\n// durationInFrames para batch05-data.ts:")
    for n, dur, frames in sorted(results):
        print(f"//  {n}: {dur:.1f}s x30 + 60 = {frames} frames")

if __name__ == "__main__":
    asyncio.run(main())
