"""
gen_tts_batch11.py -- Genera audios TTS para copies 101-110 usando Edge TTS.
Categoria: FOMO / Prueba Social
Salida: public/audio/bioscan-101.mp3 ... bioscan-110.mp3
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
        "n": "101", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Trescientas treinta y dos personas ya conocen su estado de salud real. "
            "Tu aun no. "
            "Cada dia mas personas descubren BioScan IA. "
            "Algunos descubren que estan mejor de lo que pensaban. "
            "Otros detectan algo que hubiera empeorado sin atencion. "
            "Todos tienen algo que tu no: "
            "informacion real sobre sus setenta y nueve parametros de salud. "
            "Su score de cero a cien. Su reporte PDF. "
            "Su riesgo cardiovascular calculado con el modelo AHA PREVENT dos mil veintitres. "
            "Calibrado con datos reales del CDC NHANES. "
            "Noventa segundos. Cinco dolares. "
            "El siguiente en conocer su estado de salud real. Tu. "
            "Unete ahora. bioscanpro punto net."
        )
    },
    {
        "n": "102", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Una persona descubrio riesgo cardiovascular alto. "
            "Fue al medico. Le salvaron la vida. "
            "Eso paso con BioScan IA. "
            "No sabemos quien es la proxima persona que va a descubrir algo importante. "
            "Podria ser alguien que se siente perfectamente bien. "
            "Podria ser alguien que lleva anos sin chequearse. "
            "Podria ser tu. "
            "Setenta y nueve parametros de salud en noventa segundos. "
            "Riesgo cardiovascular calculado con AHA PREVENT dos mil veintitres. "
            "Calibrado con cinco mil ochocientos adultos reales del CDC. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Garantia total de devolucion. "
            "La informacion que puede cambiarlo todo. "
            "Tu turno. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "103", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Los early adopters de tecnologia de salud ya estan un paso adelante. "
            "El monitoreo personal de salud es la tendencia mas importante de la decada. "
            "Las personas que empiezan ahora van a tener anos de datos historicos. "
            "Van a ver como evolucionan sus parametros con el tiempo. "
            "Van a detectar cambios antes de que se conviertan en problemas. "
            "Los que esperan van a empezar desde cero cuando sea urgente. "
            "BioScan IA: empieza hoy tu historial de salud personal. "
            "Setenta y nueve parametros. Noventa segundos. Cinco dolares. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Calibrado con datos del CDC. Algoritmo AHA PREVENT dos mil veintitres. "
            "Se de los primeros. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "104", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Todo el mundo habla de salud en redes sociales. "
            "Pero pocos tienen datos reales. "
            "En Instagram todos muestran sus entrenos. En TikTok sus smoothies verdes. "
            "En YouTube sus rutinas de manana. "
            "Pero cuantos tienen datos concretos de sus setenta y nueve parametros de salud. "
            "Su SpO2 real. Su riesgo cardiovascular calculado con un algoritmo cardiaco de la AHA. "
            "Su glucosa estimada basada en datos de cinco mil ochocientos adultos del CDC. "
            "Con BioScan IA tienes algo que nadie mas tiene: "
            "informacion objetiva y verificable sobre como estas realmente. "
            "No fotos de gym. Datos reales. "
            "Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "105", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Tu colega ya hizo su analisis de BioScan IA. Tu que esperas. "
            "No es una competencia de salud. "
            "Pero si es una ventaja tener informacion que otros no tienen. "
            "Tu colega sabe su score de salud de cero a cien. "
            "Sabe su riesgo cardiovascular a diez anos calculado con AHA PREVENT. "
            "Sabe sus setenta y nueve parametros de salud. "
            "Tiene un reporte PDF para mostrar a su medico. "
            "El unico que no tiene esa informacion eres tu. "
            "Y la informacion en salud es poder. "
            "Noventa segundos. Cinco dolares. "
            "Adelantate. bioscanpro punto net."
        )
    },
    {
        "n": "106", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Mi score de salud era sesenta y dos. "
            "Despues de tres meses de cambios, es setenta y ocho. "
            "Eso es lo que BioScan IA hace posible: "
            "ver tu progreso con datos reales que cambian con tus habitos. "
            "Cuando empece a dormir mejor, mi variabilidad cardiaca mejoro. "
            "Cuando empece a hacer ejercicio, mi frecuencia cardiaca en reposo bajo. "
            "Cuando mejore mi dieta, mi glucosa estimada mejoro. "
            "Setenta y nueve parametros medibles y rastreables. "
            "Reporte PDF descargable para comparar mes a mes. "
            "La gamificacion de la salud real. "
            "Score de cero a cien. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "107", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Los biohackers y los que se toman en serio su salud ya usan esto. "
            "La biohacking community lleva anos monitoreando cada metrica de salud posible. "
            "Glucosa en tiempo real. Sueno con rastreadores avanzados. "
            "Frecuencia cardiaca y variabilidad HRV. "
            "Pero hasta ahora, eso requeria gadgets caros y rutinas complicadas. "
            "BioScan IA trae esa obsesion por los datos de salud "
            "al alcance de cualquier persona con un celular. "
            "Setenta y nueve parametros de salud. Noventa segundos. Cinco dolares. "
            "Sin gadgets. Sin suscripcion mensual. Sin complicaciones. "
            "Calibrado con CDC. Algoritmo AHA. Reporte PDF. Asistente IA. "
            "Conviertete en biohacker. bioscanpro punto net."
        )
    },
    {
        "n": "108", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Desafio: cual es tu score de salud BioScan. Comparte el tuyo. "
            "Cada vez mas personas estan compartiendo su score de salud en redes sociales. "
            "No para presumir de estar sanos "
            "sino para normalizar el cuidado preventivo de la salud. "
            "Para que hablar de riesgo cardiovascular, "
            "de saturacion de oxigeno, de glucosa estimada "
            "sea tan normal como hablar del clima. "
            "Cual es el tuyo. "
            "Descubrelo en noventa segundos. Cinco dolares. "
            "Score de salud de cero a cien. Reporte PDF. "
            "Comparte si te atreves. bioscanpro punto net."
        )
    },
    {
        "n": "109", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "En el grupo de WhatsApp de la familia, todos ya lo han usado. Menos tu. "
            "Es broma. Pero no deberia serlo. "
            "BioScan IA es la herramienta de salud que cada familia deberia tener. "
            "El pack familiar cuesta dieciocho dolares: cuatro analisis completos. "
            "Cuatro con cincuenta dolares por persona. "
            "Setenta y nueve parametros de salud cada uno. "
            "Cuatro reportes PDF. Cuatro scores de salud. "
            "Cuatro asistentes IA personalizados. "
            "Trescientos dieciseis parametros familiares analizados en diez minutos. "
            "Tu familia te lo agradecera. "
            "Unete a la familia saludable. bioscanpro punto net."
        )
    },
    {
        "n": "110", "voz": "es-MX-JorgeNeural",
        "texto": (
            "El mercado de salud digital crece un veinticuatro por ciento anual. "
            "Los que no adoptan estas herramientas quedan atras. "
            "La revolucion de la salud digital ya llego. "
            "Las personas que adoptan herramientas como BioScan IA hoy "
            "tienen anos de ventaja en gestion preventiva de su salud. "
            "Historial de datos. Tendencias personales. "
            "Deteccion temprana basada en datos reales. "
            "Setenta y nueve parametros. Reporte PDF descargable. "
            "Asistente de inteligencia artificial personalizado. "
            "Calibrado con datos del CDC. Algoritmo AHA PREVENT dos mil veintitres. "
            "Score de cero a cien. Garantia total de devolucion. "
            "Adopta el futuro hoy. Cinco dolares. bioscanpro punto net."
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
    print("\n// durationInFrames para batch11-data.ts:")
    for n, dur, frames in sorted(results):
        print(f"//  {n}: {dur:.1f}s x30 + 60 = {frames} frames")

if __name__ == "__main__":
    asyncio.run(main())
