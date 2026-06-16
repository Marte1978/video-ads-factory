"""
gen_tts_batch02.py -- Genera audios TTS para copies 011-020 usando Edge TTS.
Guiones extendidos a ~62-75s con argumentos neuromarketing completos.
Salida: public/audio/bioscan-011.mp3 ... bioscan-020.mp3
"""
import asyncio, sys, os, json
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

try:
    import edge_tts
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "edge-tts", "-q"])
    import edge_tts

from pathlib import Path

BASE = Path(__file__).parent.parent
AUDIO_DIR = BASE / "public" / "audio"
AUDIO_DIR.mkdir(parents=True, exist_ok=True)

COPIES = [
    {
        "n": "011", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "No tienes tiempo de ir al medico. Pero si tienes 90 segundos. "
            "Eso es todo lo que BioScan IA necesita para analizar tu salud completa. "
            "No tienes que pedir cita. No tienes que desplazarte a ninguna clinica. "
            "No tienes que esperar dias por resultados. "
            "79 parametros de salud. 13 sistemas del cuerpo. "
            "Cardiovascular, renal, hormonal, pulmonar, metabolico y mas. "
            "Todo analizado desde la camara de tu celular. "
            "La misma tecnologia de oximetria que usan los hospitales, "
            "ahora disponible para cualquier persona, en cualquier momento, desde cualquier lugar. "
            "Validado con datos reales de cinco mil ochocientos cincuenta y seis adultos del CDC. "
            "Riesgo cardiovascular calculado con el modelo PREVENT 2023 de la American Heart Association. "
            "Al terminar recibes un reporte PDF completo y acceso a un asistente de inteligencia artificial "
            "que te explica cada resultado en lenguaje claro, sin terminos medicos incomprensibles. "
            "Noventa segundos. Cinco dolares. Hoy. bioscanpro punto net."
        )
    },
    {
        "n": "012", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Llevas anos postergandolo. Y tu cuerpo lo sabe. "
            "Ese chequeo que siempre dices que vas a hacer el proximo mes. "
            "Esa cita que nunca llegas a agendar. "
            "Mientras tanto, tu cuerpo sigue acumulando senales que tu no puedes ver. "
            "La hipertension crece en silencio. La glucosa sube lentamente. "
            "El corazon trabaja mas de lo que deberia. "
            "Y tu sigues diciendote que estas bien porque no duele nada. "
            "Pero el dolor no es el unico indicador de que algo esta mal. "
            "BioScan IA es la forma mas rapida, barata y privada de conocer tu salud real. "
            "79 indicadores. 13 sistemas. 90 segundos desde tu celular. "
            "Sin sacar cita. Sin sala de espera. Sin agujas. Sin excusas. "
            "Reporte PDF completo. Asistente IA que explica cada resultado. "
            "Score de salud de cero a cien para saber donde estas hoy. "
            "Hoy es el dia. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "013", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Le dijeron que estaba bien. Tres meses despues tuvo un ACV. "
            "Un chequeo rapido en urgencias no es suficiente para detectar lo que se acumula en silencio. "
            "Los medicos no siempre tienen tiempo para un analisis profundo de todos tus sistemas. "
            "Y cuando el resultado dice normal, muchas veces es porque no se midio lo que importaba. "
            "BioScan IA analiza 79 indicadores de salud en profundidad. "
            "Incluyendo marcadores de riesgo cerebrovascular, cardiovascular y metabolico. "
            "Tecnologia de oximetria avanzada basada en la ley Beer-Lambert, "
            "la misma fisica que usan los equipos medicos profesionales. "
            "Validado con la base de datos NHANES del CDC, "
            "cinco mil ochocientos adultos reales estudiados longitudinalmente. "
            "Riesgo cardiovascular calculado con el algoritmo PREVENT 2023 de la American Heart Association. "
            "Al terminar: reporte PDF descargable, asistente IA personalizado, "
            "y un score de salud de cero a cien. "
            "Todo desde tu celular. Todo en 90 segundos. "
            "Sabe mas que bien. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "014", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Tu cuerpo cambia todos los dias. "
            "Cuando fue la ultima vez que lo escuchaste de verdad. "
            "El estres del trabajo acumula cortisol. "
            "Las malas noches afectan tu presion arterial. "
            "El sedentarismo eleva tu glucosa sin que lo sientas. "
            "Tu cuerpo esta mandando senales constantemente. "
            "El problema es que la mayoria de esas senales son invisibles al ojo humano. "
            "BioScan IA las lee por ti. "
            "79 parametros de salud analizados desde la camara de tu celular en 90 segundos. "
            "Es como tener un medico en tu bolsillo, disponible las 24 horas, los 7 dias de la semana. "
            "Sin citas. Sin desplazamientos. Sin costos de consulta. "
            "Antes de BioScan IA: esperabas que algo doliera para actuar. "
            "Despues de BioScan IA: tienes informacion real para tomar decisiones reales. "
            "Reporte PDF. Asistente de inteligencia artificial. Score de salud. "
            "Todo por cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "015", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Mas de trescientas personas ya descubrieron algo sobre su salud que no sabian. "
            "Algunos recibieron buenas noticias. "
            "Otros recibieron alertas que llegaron exactamente a tiempo. "
            "Antes de que algo se convirtiera en emergencia. "
            "Antes de que fuera demasiado tarde. "
            "Lo que tienen en comun: usaron BioScan IA desde su celular. "
            "Sin clinica. Sin agujas. Sin espera. "
            "La plataforma esta validada con datos de cinco mil ochocientos cincuenta y seis adultos reales "
            "del estudio NHANES del Centro para el Control de Enfermedades de los Estados Unidos. "
            "No son estimaciones genericas. Son modelos entrenados con personas reales como tu. "
            "79 indicadores de salud. 13 sistemas del cuerpo. "
            "Riesgo cardiovascular segun el modelo PREVENT 2023 de la American Heart Association. "
            "Presion arterial estimada. Glucosa. Saturacion de oxigeno. "
            "Todo en un reporte PDF que puedes compartir con tu medico. "
            "Tu turno. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "016", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Revisas tu celular ciento cincuenta veces al dia. "
            "Y nunca lo usas para chequearte la salud. "
            "Lo usas para ver noticias, redes sociales, videos. "
            "Para todo menos para lo que realmente importa. "
            "Esa misma camara que usas para selfies puede convertirse en un analizador medico de 79 parametros. "
            "BioScan IA usa tecnologia de fotopletismografia para leer tu frecuencia cardiaca, "
            "saturacion de oxigeno, presion arterial estimada y glucosa estimada. "
            "Luego aplica el modelo PREVENT 2023 de la American Heart Association "
            "para calcular tu riesgo cardiovascular a diez anos. "
            "Todo validado con datos reales del CDC. "
            "El resultado: un reporte PDF completo con tu estado de salud actual. "
            "Un asistente de inteligencia artificial que te explica cada numero. "
            "Un score de salud de cero a cien. "
            "En noventa segundos. Desde donde estes ahora mismo. "
            "Usalo para lo que importa. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "017", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Tienes miedo de ir al medico porque te da miedo saber. "
            "Lo entendemos. Esa ansiedad es real. "
            "Pero no saber es peor. "
            "Porque mientras no sabes, el tiempo pasa. Y el dano se acumula. "
            "BioScan IA te da la informacion de forma privada, desde tu propia casa, en 90 segundos. "
            "Sin juzgarte. Sin formularios interminables. Sin salas de espera llenas de gente enferma. "
            "Solo la verdad sobre tu salud, con el apoyo de un asistente de inteligencia artificial "
            "que te explica cada resultado en lenguaje humano, no en terminologia medica intimidante. "
            "Y si algo requiere atencion medica, lo sabras a tiempo. "
            "Antes de que sea una emergencia. "
            "Antes de que sea demasiado tarde. "
            "La informacion es poder. Y el poder sobre tu salud empieza con conocerla. "
            "79 indicadores. 90 segundos. Garantia total de devolucion. "
            "Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "018", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Sabes cuantos anos tienes. "
            "Pero sabes cual es tu riesgo cardiovascular a diez anos. "
            "El modelo PREVENT 2023 de la American Heart Association puede calcularlo. "
            "Y BioScan IA lo hace por ti en 90 segundos desde la camara de tu celular. "
            "Sin sangre. Sin laboratorio. Sin medico. "
            "Solo pon el dedo en la camara y deja que la tecnologia haga el resto. "
            "El riesgo cardiovascular no es solo para personas mayores. "
            "Adultos de treinta y cinco anos ya pueden tener indicadores preocupantes "
            "sin ningun sintoma visible. "
            "El cincuenta y cuatro por ciento de los adultos latinoamericanos tiene al menos "
            "un factor de riesgo cardiovascular sin saberlo. "
            "Ese es el problema. Y BioScan IA es la solucion. "
            "79 parametros de salud. Reporte PDF descargable. "
            "Asistente de inteligencia artificial personalizado. "
            "Score de salud de cero a cien. "
            "Por solo cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "019", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "A los treinta te sentias invencible. "
            "A los cuarenta y cinco ya no tanto. "
            "El cuerpo cambia. Los riesgos aumentan. "
            "Y la mayoria de nosotros llegamos a los cuarenta sin habernos hecho un analisis completo de salud. "
            "No porque no nos importe. "
            "Sino porque es caro, complicado, lento, y siempre hay algo mas urgente. "
            "BioScan IA fue disenado exactamente para eso. "
            "Para adultos entre treinta y sesenta anos que quieren saber como estan sin gastar una fortuna. "
            "79 indicadores de salud analizados en 90 segundos desde tu celular. "
            "Tecnologia de oximetria avanzada. Base de datos del CDC con cinco mil ochocientos adultos reales. "
            "Algoritmo cardíaco PREVENT 2023 de la American Heart Association. "
            "La ciencia que antes solo tenian los hospitales, ahora en tu bolsillo. "
            "Reporte PDF. Asistente IA. Score de salud. "
            "Por cinco dolares hoy. bioscanpro punto net."
        )
    },
    {
        "n": "020", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "No sabemos cuanto tiempo tienes. "
            "Nadie lo sabe. "
            "Pero si puedes saber como estas hoy. "
            "BioScan IA no predice el futuro. "
            "Pero si te da el mejor mapa posible de tu salud actual. "
            "79 parametros analizados en 90 segundos. "
            "Score de salud de cero a cien para que sepas exactamente donde estas. "
            "Riesgo cardiovascular calculado con el estandar medico mas avanzado, "
            "el modelo PREVENT 2023 de la American Heart Association. "
            "Estimacion de presion arterial, glucosa, saturacion de oxigeno, "
            "frecuencia cardiaca y setenta y cinco parametros mas. "
            "Reporte PDF descargable que puedes compartir con tu medico. "
            "Asistente de inteligencia artificial que te explica cada resultado. "
            "Garantia total de devolucion si no estas satisfecho. "
            "Sin suscripcion. Sin agujas. Sin espera. "
            "Lo unico que pierdes al no hacerlo es informacion. "
            "Cinco dolares. Hoy. bioscanpro punto net."
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
    size = out.stat().st_size / 1024
    # Medir duracion
    import subprocess, json as _json
    r = subprocess.run(
        ["ffprobe", "-v", "quiet", "-print_format", "json",
         "-show_streams", str(out)],
        capture_output=True, text=True
    )
    dur = 0.0
    if r.returncode == 0:
        try:
            dur = float(_json.loads(r.stdout)["streams"][0]["duration"])
        except Exception:
            pass
    frames = int(dur * 30) + 60
    print(f"[OK]   {out.name} — {size:.1f} KB — {dur:.1f}s — {frames} frames")
    return n, dur, frames

async def main():
    results = await asyncio.gather(*[gen_audio(c["n"], c["voz"], c["texto"]) for c in COPIES])
    print(f"\n[DONE] {len(COPIES)} audios generados en {AUDIO_DIR}")
    print("\n// Copiar estos durationInFrames a batch02-data.ts:")
    for n, dur, frames in sorted(results):
        print(f"//  {n}: {dur:.1f}s x30 + 60 = {frames} frames")

if __name__ == "__main__":
    asyncio.run(main())
