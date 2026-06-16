"""
gen_tts_batch14.py -- Genera audios TTS para copies 131-140 usando Edge TTS.
Categoria: Curiosidad / Open Loop (cont.)
Salida: public/audio/bioscan-131.mp3 ... bioscan-140.mp3
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
        "n": "131", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Hice el analisis por curiosidad. No esperaba lo que encontre. "
            "Pensaba que estaba bien. Todo parecia normal. "
            "Me sentia con energia, dormi bien, hacia ejercicio tres veces a la semana. "
            "Pero BioScan IA mostro que mi variabilidad cardiaca era baja "
            "y mi riesgo cardiovascular era mayor de lo esperado para mi edad. "
            "Fui al medico con el reporte PDF. "
            "El medico confirmo que habia algo que atender. "
            "Ese analisis de cinco dolares fue el mejor dinero que gaste en mi vida. "
            "Setenta y nueve parametros. Score de cero a cien. Reporte PDF. Asistente IA. "
            "Tu turno de descubrir. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "132", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Puedes responder sin pensar: cual es tu presion arterial hoy. "
            "La mayoria no sabe. "
            "Y no hay nada de malo en eso hasta que hay algo mal. "
            "La hipertension arterial se llama el asesino silencioso "
            "porque no da sintomas hasta que ya es tarde. "
            "BioScan IA te da esa respuesta y setenta y ocho mas. "
            "Presion arterial estimada. SpO2. Frecuencia cardiaca. "
            "Glucosa estimada. Riesgo cardiovascular calculado con AHA PREVENT dos mil veintitres. "
            "Calibrado con datos del CDC. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Conoce tus numeros. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "133", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Tu corazon genera suficiente energia para manejar un camion por treinta y dos kilometros diarios. "
            "Es la maquina mas eficiente que existe en la naturaleza conocida. "
            "Lleva latiendo desde antes de que nacieras "
            "y lo hara mientras vivas, sin parar, sin descanso. "
            "Y merece que lo cuides. "
            "BioScan IA monitorea el estado de ese motor: "
            "frecuencia cardiaca, variabilidad HRV, riesgo cardiovascular estimado "
            "con el modelo AHA PREVENT dos mil veintitres. "
            "Calibrado con datos de cinco mil ochocientos adultos del CDC. "
            "Setenta y nueve parametros. Noventa segundos. Cinco dolares. "
            "Cuida tu motor. bioscanpro punto net."
        )
    },
    {
        "n": "134", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Si piensas que no necesitas un chequeo porque te sientes bien, este mensaje es para ti. "
            "El ochenta por ciento de las personas que mueren de infarto "
            "nunca tuvieron sintomas previos significativos. "
            "La mayoria murieron convencidos de que estaban bien. "
            "La salud silenciosa es la mas peligrosa. "
            "BioScan IA analiza lo que no duele, no se ve y no se siente. "
            "Hasta que ya es tarde. "
            "Setenta y nueve parametros. Score de cero a cien. Reporte PDF. "
            "Calibrado con datos del CDC. Algoritmo AHA PREVENT dos mil veintitres. "
            "Checheate aunque te sientas bien. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "135", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Cuanto sabes realmente sobre tu propio cuerpo. "
            "Sabemos el precio de la gasolina. "
            "Sabemos el saldo de nuestra cuenta bancaria. "
            "Sabemos el nivel de bateria de nuestro celular. "
            "Pero no sabemos nuestra SpO2. "
            "No sabemos nuestra presion arterial de hoy. "
            "No sabemos si nuestro riesgo cardiovascular es alto o bajo. "
            "BioScan IA cierra esa brecha. "
            "Setenta y nueve parametros de salud en noventa segundos. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Calibrado con datos del CDC. Algoritmo AHA PREVENT dos mil veintitres. "
            "Conocete de verdad. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "136", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Despues de hacer el analisis, "
            "empiece a notar cosas de mi cuerpo que nunca habia notado antes. "
            "Antes de BioScan IA, vivia en piloto automatico. "
            "Comia sin pensar en como afectaba mi glucosa estimada. "
            "Dormia mal sin entender el impacto en mi variabilidad cardiaca. "
            "Pero cuando tienes datos concretos, cambias la relacion con tu propio cuerpo. "
            "Te conviertes en un observador activo. "
            "Un mal dia de dieta, y lo ves en los parametros. "
            "Una buena semana de sueno, y lo ves tambien. "
            "BioScan IA: setenta y nueve parametros. Cinco dolares. "
            "Despierta tu conciencia. bioscanpro punto net."
        )
    },
    {
        "n": "137", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Noventa segundos. Lo que descubres puede sorprenderte. "
            "Algunas personas descubren que estan mucho mejor de lo que pensaban. "
            "Su score de cero a cien es alto. Sus parametros en rango optimo. "
            "Eso es validacion. Eso es tranquilidad. "
            "Otras personas descubren algo que necesita atencion urgente. "
            "Eso es una alerta que llega a tiempo. "
            "Y todos aprenden algo sobre si mismos. "
            "BioScan IA: setenta y nueve parametros reales. "
            "Score de salud. Reporte PDF. Asistente IA. "
            "Calibrado CDC. Algoritmo AHA. "
            "Que descubriras tu. Noventa segundos. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "138", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Tu celular sabe donde estas en todo momento. "
            "Por que no sabe como estas de salud. "
            "Tu celular tiene GPS. Tiene acelerometro. Tiene giroscopio. "
            "Tiene camara de alta resolucion capaz de detectar microexpresiones. "
            "Puede medir la luz ambiente, la temperatura y tu posicion exacta en el planeta. "
            "Pero no sabia como estabas de salud. "
            "BioScan IA activo el ultimo sensor que faltaba: "
            "la camara como oximetro medico de precision. "
            "Setenta y nueve parametros de salud. Noventa segundos. Cinco dolares. "
            "La pieza que completaba el puzzle. bioscanpro punto net."
        )
    },
    {
        "n": "139", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Que pasa exactamente en los noventa segundos que pones el dedo en la camara. "
            "Primero: la camara capta la variacion de luz que produce el pulso en tus capilares. "
            "Esa variacion sigue la ley de Beer-Lambert: "
            "la misma fisica que usan los pulsioximetros medicos. "
            "Segundo: BioScan IA procesa esa senal con algoritmos "
            "calibrados en datos reales del CDC NHANES. "
            "Cinco mil ochocientos adultos de referencia. "
            "Tercero: en noventa segundos calculas setenta y nueve parametros personalizados. "
            "Y eso es todo. Ciencia optica real. No magia. No estimaciones vagas. "
            "Vivelo tu mismo. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "140", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Y si hay algo que puedes cambiar hoy que cambia todo lo que viene despues. "
            "Los cambios de salud mas poderosos empiezan con informacion. "
            "No con intenciones. No con promesas de manana. Con datos. "
            "BioScan IA te da setenta y nueve parametros reales "
            "para identificar exactamente que cambiar. "
            "Un score de salud honesto de cero a cien. "
            "Un reporte PDF detallado. "
            "Un asistente de inteligencia artificial que te guia paso a paso. "
            "Calibrado con datos del CDC. Algoritmo AHA PREVENT dos mil veintitres. "
            "Garantia total de devolucion. "
            "El cambio empieza aqui. Cinco dolares. bioscanpro punto net."
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
    print("\n// durationInFrames para batch14-data.ts:")
    for n, dur, frames in sorted(results):
        print(f"//  {n}: {dur:.1f}s x30 + 60 = {frames} frames")

if __name__ == "__main__":
    asyncio.run(main())
