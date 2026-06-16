"""
gen_tts_batch01.py — Genera audios TTS para copies 001-010 usando Edge TTS.
Guiones extendidos a ~58s con argumentos neuromarketing completos.
Salida: public/audio/bioscan-001.mp3 ... bioscan-010.mp3
"""
import asyncio, sys, os
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
        "n": "001", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "¿Qué pasaría si hoy tienes algo grave dentro de ti y no lo sabes? "
            "La realidad es que la mayoría de las enfermedades que matan no duelen al principio. "
            "El infarto silencioso. La diabetes sin síntomas. La hipertensión que destruye tus arterias sin que lo sientas. "
            "Tu cuerpo puede estar enviando señales de alarma que simplemente no puedes ver. "
            "Y mientras más tiempo pasa sin saberlo, más daño se acumula en silencio. "
            "BioScan IA cambia eso completamente. "
            "En solo 90 segundos, usando la cámara de tu celular, analiza 79 indicadores de salud "
            "que cubren 13 sistemas de tu cuerpo. "
            "Presión arterial estimada. Glucosa. Riesgo cardiovascular según la American Heart Association. "
            "Saturación de oxígeno. Todo en un reporte completo que puedes compartir con tu médico. "
            "Sin agujas. Sin clínica. Sin espera. Sin excusas. "
            "Por solo cinco dólares hoy conoces tu estado real de salud. "
            "No mañana. Hoy. bioscanpro punto net."
        )
    },
    {
        "n": "002", "voz": "es-MX-JorgeNeural",
        "texto": (
            "El 70 por ciento de los infartos ocurren sin síntomas previos. "
            "No lo digo yo. Lo dice la Organización Mundial de la Salud. "
            "El 46 por ciento de los adultos tiene hipertensión sin saberlo. "
            "Y uno de cada tres adultos padece prediabetes sin síntomas. "
            "Estos no son números abstractos. Pueden ser tu número. "
            "El problema es que el cuerpo humano es muy bueno ocultando el daño interno. "
            "Puedes sentirte perfectamente bien mientras tu sistema cardiovascular está en riesgo. "
            "BioScan IA existe para darte esa información que tu cuerpo no te va a dar. "
            "En 90 segundos, desde la cámara de tu teléfono, mide 79 parámetros de salud. "
            "Riesgo cardiovascular con el modelo PREVENT 2023 de la American Heart Association. "
            "Estimación de glucosa. Saturación de oxígeno. Frecuencia cardíaca. "
            "Todo analizado con base de datos del CDC, cinco mil ochocientos cincuenta y seis adultos reales. "
            "No son estimaciones genéricas. Son datos reales. "
            "Cinco dólares. Un análisis completo. Hoy. bioscanpro punto net."
        )
    },
    {
        "n": "003", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Si algo te pasara mañana, ¿podrías decir honestamente que hiciste todo lo que podías para prevenirlo? "
            "La mayoría de nosotros aplazamos nuestra salud hasta que es demasiado tarde. "
            "La clínica queda lejos. Los exámenes cuestan doscientos, trescientos dólares o más. "
            "Y el tiempo simple y llanamente no alcanza. "
            "Pero ahora hay una alternativa real. "
            "BioScan IA analiza tu salud completa en 90 segundos usando solo la cámara de tu celular. "
            "No necesitas moverte de donde estás. No necesitas agujas ni instrumentos médicos. "
            "No necesitas cita previa. Disponible las 24 horas, los 7 días de la semana. "
            "79 indicadores de salud cubriendo 13 sistemas de tu cuerpo. "
            "Tecnología de oximetría avanzada basada en la ley Beer-Lambert, "
            "la misma física que usan los hospitales. "
            "Validada con la base de datos NHANES del CDC, cinco mil ochocientos adultos reales. "
            "Reporte PDF completo. Asistente de inteligencia artificial que te explica cada resultado. "
            "Por cinco dólares. Sin excusas. bioscanpro punto net."
        )
    },
    {
        "n": "004", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "13 sistemas de tu cuerpo pueden estar fallando ahora mismo. "
            "Y la mayoría de las personas no saben cómo está ninguno de ellos. "
            "Sistema cardiovascular. Sistema renal. Sistema pulmonar. Sistema hepático. "
            "Sistema hormonal. Sistema metabólico. Sistema óseo. Sistema inmunológico. "
            "Ocho sistemas críticos que trabajan en silencio. "
            "Cuando uno falla, los demás se ven afectados. "
            "Y tú no lo sabrías hasta que sea demasiado tarde. "
            "BioScan IA los analiza todos en menos de 2 minutos. "
            "79 indicadores en total. Desde la cámara de tu teléfono, "
            "sin instrumentos adicionales, sin clínica, sin agujas. "
            "La tecnología detrás es la misma que usa la medicina de precisión. "
            "Oximetría avanzada. Modelos estadísticos del CDC. "
            "Algoritmo PREVENT 2023 de la American Heart Association para riesgo cardiovascular. "
            "Al terminar recibes un reporte PDF completo y acceso a un asistente de inteligencia artificial "
            "que te explica cada resultado en lenguaje claro. "
            "Solo cinco dólares. Sin suscripción. Sin excusas. bioscanpro punto net."
        )
    },
    {
        "n": "005", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Mi papá murió de algo que hubiera podido detectarse a tiempo. "
            "Tenía 58 años. Se sentía bien. No tenía síntomas visibles. "
            "Y un día su corazón simplemente no aguantó más. "
            "La enfermedad había estado ahí durante años, acumulándose en silencio. "
            "Si hubiera tenido acceso a esta tecnología, a un análisis real de sus indicadores de salud, hoy estaría aquí. "
            "BioScan IA usa la cámara de tu celular para analizar 79 indicadores de salud. "
            "Incluyendo riesgo cardiovascular según el modelo PREVENT 2023 de la American Heart Association. "
            "Saturación de oxígeno. Estimación de glucosa. Presión arterial y 75 parámetros más. "
            "Todo en 90 segundos. Sin agujas. Sin clínica. Sin lista de espera. "
            "Recibes un reporte PDF completo y un asistente de inteligencia artificial "
            "que te explica qué significa cada número. "
            "No esperes a que algo duela. No esperes a que sea urgente. "
            "Hazlo hoy. Por cinco dólares. bioscanpro punto net."
        )
    },
    {
        "n": "006", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Tenía 42 años. Corría 5 kilómetros tres veces por semana. Comía bien. No fumaba. "
            "Y un día colapsó mientras entrenaba en el parque. "
            "Nadie espera que le pase a alguien así. "
            "Pero la salud interna no se ve desde afuera. "
            "Por fuera puede verse perfecto. "
            "Por dentro pueden estar fallando silenciosamente la presión arterial, el sistema cardiovascular, las arterias. "
            "Lo que el ojo no puede ver, BioScan IA lo detecta. "
            "En solo 90 segundos, usando únicamente la cámara de tu teléfono, "
            "mide presión arterial estimada, frecuencia cardíaca, saturación de oxígeno, "
            "glucosa estimada y 75 parámetros internos más. 79 indicadores en total. "
            "Tecnología basada en oximetría médica. Validada con datos reales del CDC. "
            "Riesgo cardiovascular calculado con el modelo PREVENT 2023 de la American Heart Association. "
            "El mismo estándar que usan los cardiólogos. "
            "Por cinco dólares hoy conoces lo que ningún espejo puede mostrarte. "
            "Conócete por dentro. bioscanpro punto net."
        )
    },
    {
        "n": "007", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "¿Estás ignorando las señales de tu cuerpo porque no tienes tiempo? "
            "Antes de BioScan IA: esperas a que algo duela. "
            "Vas al médico cuando ya es urgente. Gastas doscientos dólares o más en exámenes. "
            "Esperas días por resultados. "
            "Y después de todo eso, sigues sin saber exactamente cómo estás. "
            "Después de BioScan IA: en 90 segundos tienes 79 indicadores completos de salud. "
            "13 sistemas analizados. Reporte PDF listo para compartir con tu médico. "
            "Un asistente de inteligencia artificial que te explica cada resultado en lenguaje claro, "
            "sin términos médicos incomprensibles. "
            "Todo desde tu teléfono. Sin moverte. Sin cita. Sin agujas. Sin esperar días. "
            "El puente entre no saber y saber exactamente cómo está tu cuerpo se llama BioScan IA. "
            "Tecnología de oximetría avanzada. Base de datos del CDC. "
            "Algoritmo cardíaco de la American Heart Association. "
            "La ciencia que antes solo tenían los hospitales. Ahora en tu bolsillo. "
            "Por cinco dólares. Da ese paso hoy. bioscanpro punto net."
        )
    },
    {
        "n": "008", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "¿Qué diría tu familia si supiera que no te has chequeado en años? "
            "No tienes que confesarles nada. No tienes que explicarle a nadie. "
            "Solo actúa hoy en total privacidad. "
            "BioScan IA te da un análisis completo de 79 indicadores de salud en solo 90 segundos. "
            "Desde tu celular. En tu casa. A cualquier hora. "
            "Sin sala de espera. Sin recepcionistas. Sin nadie que sepa nada. "
            "Y si los resultados muestran algo preocupante, lo sabrás a tiempo. "
            "Antes de que sea una emergencia. Antes de que sea demasiado tarde. "
            "Antes de que tu familia tenga que enterarse de otra manera. "
            "El análisis incluye riesgo cardiovascular, estimación de presión arterial, "
            "saturación de oxígeno, glucosa estimada y 75 parámetros más. "
            "Reporte PDF descargable. Asistente de inteligencia artificial personal. "
            "Score de salud de cero a cien. "
            "Pago seguro con Stripe. Datos completamente protegidos. Garantía total de devolución. "
            "Tu chequeo privado. Cinco dólares. bioscanpro punto net."
        )
    },
    {
        "n": "009", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "La hipertensión afecta a 1 de cada 3 adultos en el mundo. "
            "Y la mitad de ellos no lo sabe. "
            "Tú puedes ser ese uno en tres. En este momento. Sin sentir absolutamente nada. "
            "La hipertensión se llama el asesino silencioso porque no duele. No avisa. "
            "No tiene síntomas obvios. "
            "Solo daña silenciosamente tus arterias, tu corazón, tus riñones. Año tras año. "
            "Hasta que un día, sin previo aviso, ocurre un infarto, un derrame, una insuficiencia renal. "
            "BioScan IA estima tu presión arterial, calcula tu riesgo cardiovascular "
            "según el modelo PREVENT 2023 de la American Heart Association "
            "y analiza 77 parámetros adicionales. "
            "Todo desde la cámara de tu celular. En 90 segundos. "
            "Basado en datos reales de cinco mil ochocientos adultos del estudio NHANES del CDC. "
            "No es un gadget. Es tecnología médica real ahora accesible para todos. "
            "Por solo cinco dólares. Chequéate hoy. No mañana. Hoy. bioscanpro punto net."
        )
    },
    {
        "n": "010", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Cada 33 segundos muere alguien de una enfermedad cardíaca en América Latina. "
            "Eso no tiene que ser tú. "
            "La diferencia entre la prevención y la tragedia es información. "
            "Y esa información nunca había sido tan accesible como ahora. "
            "BioScan IA analiza 79 indicadores de salud incluyendo riesgo cardiovascular "
            "calculado con el modelo PREVENT 2023 de la American Heart Association, "
            "el mismo estándar que usan los cardiólogos de los mejores hospitales del mundo. "
            "Todo en 90 segundos. Todo desde la cámara de tu celular. "
            "Sin agujas. Sin clínica. Sin lista de espera. "
            "Recibes un reporte PDF completo descargable. "
            "Un asistente de inteligencia artificial que explica cada resultado. "
            "Tu score de salud de cero a cien. "
            "Y recomendaciones personalizadas basadas en tus datos reales, no en promedios genéricos. "
            "Cada 33 segundos que pasan es un recordatorio. "
            "La prevención comienza ahora. Cinco dólares. bioscanpro punto net."
        )
    },
]

async def gen_audio(n: str, voz: str, texto: str):
    out = AUDIO_DIR / f"bioscan-{n}.mp3"
    if out.exists():
        out.unlink()  # forzar regeneracion con nuevo texto
    print(f"[TTS]  Generando {out.name} ({voz})...")
    comm = edge_tts.Communicate(texto, voz, rate="+5%")
    await comm.save(str(out))
    size = out.stat().st_size / 1024
    print(f"[OK]   {out.name} — {size:.1f} KB")

async def main():
    tasks = [gen_audio(c["n"], c["voz"], c["texto"]) for c in COPIES]
    await asyncio.gather(*tasks)
    print(f"\n[DONE] {len(COPIES)} audios generados en {AUDIO_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
