"""
gen_tts_batch04.py -- Genera audios TTS para copies 031-040 usando Edge TTS.
Categoria: Precio / Acceso Economico (continuacion)
Salida: public/audio/bioscan-031.mp3 ... bioscan-040.mp3
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
        "n": "031", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Esperé cuatro horas en urgencias para que me dijeran todo esta bien. "
            "Cuatro horas. Sin comer. Sin poder trabajar. Sin poder cuidar a mis hijos. "
            "Y al final: todo normal. Vuelva a su casa. "
            "Eso no es sistema de salud. Eso es trampa. "
            "Con BioScan IA sabes en noventa segundos si realmente necesitas urgencias "
            "o si puedes quedarte tranquilo en casa. "
            "Analiza setenta y nueve parametros reales: presion arterial estimada, "
            "frecuencia cardiaca, saturacion de oxigeno, glucosa estimada, "
            "riesgo cardiovascular segun el modelo PREVENT 2023 de la American Heart Association. "
            "Todo validado con la base de datos NHANES del CDC. Cinco mil ochocientos adultos reales. "
            "Score de salud de cero a cien. Reporte PDF descargable al instante. "
            "Asistente de inteligencia artificial que te explica cada resultado. "
            "Tu segunda opinion instantanea. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "032", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "El dinero que ahorres en visitas innecesarias al medico puede cambiarte la vida. "
            "Piensalo: cuantas veces fuiste al medico y salio todo normal. "
            "Cuantas veces pagaste ciento cincuenta o doscientos dolares para que te dijeran: "
            "esta sano, descanse, tome agua. "
            "Muchas visitas medicas son preventivas. Solo para saber que todo esta bien. "
            "BioScan IA te da esa respuesta en noventa segundos por cinco dolares. "
            "Setenta y nueve indicadores de salud. Trece sistemas corporales analizados. "
            "Score de salud de cero a cien. "
            "Reporte PDF completo que puedes mostrarle a tu medico si algo llama la atencion. "
            "Asistente de inteligencia artificial que explica cada resultado en lenguaje simple. "
            "Reserva las citas medicas para cuando de verdad las necesites. "
            "Y el dinero que ahorras, usalo en lo que importa. "
            "Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "033", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Esta tecnologia antes solo existia en hospitales privados de primer mundo. "
            "Equipos de cientos de miles de dolares. Solo para pacientes con seguro premium. "
            "Hoy esta en tu celular. Por cinco dolares. "
            "BioScan IA democratiza el acceso a informacion de salud de calidad medica. "
            "La misma tecnologia de oximetria basada en la ley Beer-Lambert "
            "que usan los pulsioximetros medicos en clinicas y hospitales del mundo. "
            "Calibrado con la base de datos NHANES del CDC: "
            "cinco mil ochocientos cincuenta y seis adultos estudiados longitudinalmente. "
            "Riesgo cardiovascular calculado con el modelo PREVENT 2023 "
            "de la American Heart Association. El mismo estandar que usan los cardiologos. "
            "Setenta y nueve indicadores de salud. Trece sistemas corporales. "
            "Reporte PDF descargable. Asistente de inteligencia artificial personalizado. "
            "Todo desde la camara de tu celular. "
            "La tecnologia medica que mereces. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "034", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Por cinco dolares obtienes mas informacion de salud que en muchos chequeos de cien dolares. "
            "No es exageracion. Es la realidad. "
            "Un chequeo basico en clinica mide presion arterial, peso y talla. "
            "A veces temperatura. Cuatro o cinco datos en total. "
            "BioScan IA analiza setenta y nueve parametros de salud: "
            "saturacion de oxigeno, frecuencia cardiaca, presion arterial estimada, "
            "glucosa estimada, indice de masa corporal, riesgo cardiovascular a diez anos, "
            "riesgo renal, y decenas de indicadores adicionales organizados en "
            "trece sistemas corporales completos. "
            "Todo en noventa segundos desde la camara de tu celular. "
            "Sin agujas. Sin desplazamientos. Sin formularios. Sin sala de espera. "
            "Reporte PDF descargable al instante. "
            "Score de salud de cero a cien para que sepas exactamente donde estas. "
            "Asistente de inteligencia artificial que explica cada resultado. "
            "Mas por menos. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "035", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Una hospitalizacion puede costarte diez mil dolares. "
            "Un analisis preventivo con BioScan IA cuesta cinco dolares. "
            "La matematica es simple. Y brutal. "
            "Detectar un problema a tiempo es exponencialmente mas barato que tratarlo tarde. "
            "El infarto que no se previno. La diabetes que se descubrio demasiado tarde. "
            "La hipertension silenciosa que nadie monitoreo. "
            "BioScan IA es tu sistema de alerta temprana de cinco dolares. "
            "Setenta y nueve indicadores de salud analizados en noventa segundos. "
            "Riesgo cardiovascular calculado con el modelo PREVENT 2023 "
            "de la American Heart Association. "
            "Glucosa estimada. Presion arterial estimada. Saturacion de oxigeno. "
            "Todo validado con datos reales del CDC: cinco mil ochocientos adultos estudiados. "
            "Reporte PDF completo descargable. Score de salud de cero a cien. "
            "Asistente de inteligencia artificial que explica todo en lenguaje claro. "
            "Prevenir es mas barato. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "036", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Vives lejos de la ciudad. La clinica queda a dos horas. Y cuesta una fortuna. "
            "El transporte. El tiempo perdido. La cita que hay que sacar con semanas de anticipacion. "
            "Los resultados que llegan dias despues. "
            "Y todo eso para que te digan: tome vitaminas y descanse. "
            "Pero tienes celular. Y con eso basta. "
            "BioScan IA te da un analisis completo de salud desde donde estes. "
            "Desde tu casa en el campo. Desde la montana. Desde donde vives. "
            "Sin desplazarte. Sin gastar en transporte. Sin perder un dia de trabajo. "
            "Setenta y nueve indicadores de salud en noventa segundos. "
            "Presion arterial estimada. Frecuencia cardiaca. Saturacion de oxigeno. "
            "Riesgo cardiovascular. Glucosa estimada. Y decenas de parametros mas. "
            "Reporte PDF completo. Asistente de inteligencia artificial. Score de salud. "
            "La salud llega donde tu estes. "
            "Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "037", "voz": "es-MX-JorgeNeural",
        "texto": (
            "No tienes seguro medico. Una visita al doctor cuesta ciento cincuenta dolares o mas. "
            "Y para muchas personas eso es simplemente imposible. "
            "BioScan IA es tu primera linea de defensa. "
            "Por cinco dolares sabes si necesitas esa visita medica urgente "
            "o si puedes tranquilizarte y esperar. "
            "Setenta y nueve parametros de salud en noventa segundos. "
            "Si la presion arterial esta elevada, lo sabes. "
            "Si la saturacion de oxigeno esta baja, lo sabes. "
            "Si el riesgo cardiovascular a diez anos es alto, lo sabes. "
            "Si todo esta bien, te ahorras ciento cincuenta dolares y el dia entero en una sala de espera. "
            "Tecnologia de oximetria avanzada basada en la ley Beer-Lambert. "
            "Validado con datos reales del CDC y algoritmo cardiaco AHA PREVENT 2023. "
            "Reporte PDF descargable. Score de salud. Asistente de inteligencia artificial. "
            "Tu escudo por cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "038", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Las personas ricas tienen medico personal. Atencion VIP. Chequeos anuales privados. "
            "Acceso inmediato a especialistas. "
            "El resto espera. El resto paga lo que no tiene. El resto posterga su salud. "
            "Hasta ahora. "
            "BioScan IA es el medico en el bolsillo que todos merecen tener. "
            "Sin privilegios. Sin clases sociales. Sin discriminacion de precio. "
            "La misma tecnologia medica para todos. "
            "Setenta y nueve indicadores de salud. Trece sistemas corporales. "
            "Riesgo cardiovascular calculado con el modelo PREVENT 2023 "
            "de la American Heart Association. "
            "Glucosa estimada. Presion arterial estimada. Saturacion de oxigeno. "
            "Reporte PDF completo descargable al instante. "
            "Asistente de inteligencia artificial personalizado. Score de salud de cero a cien. "
            "Todo desde tu celular. Noventa segundos. "
            "Tu medico en el bolsillo. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "039", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "La gente paga cinco dolares por un jugo verde saludable cada manana. "
            "El jugo verde no analiza tu presion arterial. "
            "No mide tu saturacion de oxigeno. "
            "No calcula tu riesgo cardiovascular a diez anos. "
            "No te dice si tu glucosa esta elevada. "
            "No genera un reporte PDF con setenta y nueve indicadores de salud. "
            "No tiene un asistente de inteligencia artificial que te explica cada resultado. "
            "BioScan IA si hace todo eso. Y cuesta exactamente lo mismo. "
            "Cinco dolares. Noventa segundos. Setenta y nueve parametros de salud. "
            "Validado con datos del CDC. Algoritmo cardiaco AHA PREVENT 2023. "
            "Score de salud de cero a cien. Reporte PDF descargable. "
            "Asistente de inteligencia artificial que traduce los resultados a lenguaje simple. "
            "Garantia total de devolucion incluida. "
            "Invierte los cinco dolares donde importa. bioscanpro punto net."
        )
    },
    {
        "n": "040", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "El mejor regalo que le puedes dar a alguien es saber como esta su salud. "
            "No un objeto. No algo que olvidara en un cajon. "
            "Informacion real sobre su cuerpo. Datos que pueden salvarle la vida. "
            "Por cinco dolares le regalas a alguien un analisis completo de "
            "setenta y nueve parametros de salud. "
            "Presion arterial estimada. Frecuencia cardiaca. Saturacion de oxigeno. "
            "Glucosa estimada. Riesgo cardiovascular. Score de salud de cero a cien. "
            "Reporte PDF descargable que puede compartir con su medico. "
            "Asistente de inteligencia artificial que explica cada resultado en lenguaje claro. "
            "Todo en noventa segundos desde la camara de su celular. "
            "Tecnologia de oximetria avanzada validada con datos reales del CDC. "
            "Algoritmo cardiaco PREVENT 2023 de la American Heart Association. "
            "Garantia total de devolucion incluida. "
            "El regalo mas barato y mas valioso que existe. "
            "Cinco dolares. bioscanpro punto net."
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
    print("\n// durationInFrames para batch04-data.ts:")
    for n, dur, frames in sorted(results):
        print(f"//  {n}: {dur:.1f}s x30 + 60 = {frames} frames")

if __name__ == "__main__":
    asyncio.run(main())
