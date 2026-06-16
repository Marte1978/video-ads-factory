"""
gen_tts_batch13.py -- Genera audios TTS para copies 121-130 usando Edge TTS.
Categoria: Curiosidad / Open Loop
Salida: public/audio/bioscan-121.mp3 ... bioscan-130.mp3
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
        "n": "121", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Cuanto pesa tu corazon trabajar ahora mismo. "
            "No lo sabes. Nadie te lo dice. "
            "Tu corazon late mas de cien mil veces al dia "
            "y casi nunca lo cuestionas. "
            "Cuanto esta trabajando ahora mismo. "
            "Si esta bajo estres. Si esta en ritmo optimo. "
            "Si su variabilidad es la de alguien de cuarenta anos o de sesenta. "
            "BioScan IA sabe la respuesta. "
            "Frecuencia cardiaca, variabilidad HRV, riesgo cardiovascular estimado "
            "y setenta y seis parametros mas. "
            "En noventa segundos. La respuesta que nunca pensaste poder obtener. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Descubre la respuesta. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "122", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Hay algo en tu cuerpo que esta pasando ahora mismo. "
            "Y probablemente no lo sabes. "
            "Tu corazon late cien mil veces al dia. "
            "Tu sangre circula por noventa y seis mil kilometros de vasos sanguineos. "
            "Tu sistema inmune neutraliza amenazas que nunca sabras que existieron. "
            "Todo eso pasa en silencio. Sin que lo veas. Sin que lo sientas. "
            "BioScan IA te muestra el estado de ese universo interno. "
            "Setenta y nueve parametros. Noventa segundos. "
            "La curiosidad mas importante de tu vida. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Descubrelo. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "123", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Sabias que tu edad biologica puede ser muy diferente a tu edad cronologica. "
            "Una persona de cuarenta anos puede tener la biologia de un cuerpo de cincuenta y cinco. "
            "O la biologia de uno de treinta. "
            "Depende de sus habitos, su genetica, su nivel de estres, su dieta, su sueno. "
            "BioScan IA analiza setenta y nueve parametros "
            "que reflejan como esta envejeciendo tu cuerpo realmente. "
            "No cuantos anos tienes en el calendario "
            "sino cuantos anos tiene tu corazon, tus pulmones, tus rinones. "
            "Calibrado con datos del CDC. Algoritmo AHA PREVENT dos mil veintitres. "
            "Cuantos anos tiene tu cuerpo realmente. "
            "Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "124", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Voy a contarte algo que la mayoria de las personas no sabe sobre su propia salud. "
            "La mayoria de personas no sabe su SpO2 real. "
            "No sabe su variabilidad cardiaca. "
            "No sabe su riesgo cardiovascular estimado. "
            "No sabe si su glucosa estimada esta en rango normal. "
            "Creen que estan bien porque no se sienten mal. "
            "Pero el dolor y los sintomas son las ultimas senales que el cuerpo da. "
            "Antes de los sintomas, los datos ya cuentan una historia diferente. "
            "BioScan IA te cuenta esa historia. "
            "Setenta y nueve parametros. Score de cero a cien. Reporte PDF. Asistente IA. "
            "Conoce tu historia real. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "125", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Las personas que parecen mas sanas a veces tienen los peores resultados internos. "
            "La salud visible no siempre refleja la salud interna. "
            "Estar delgado no significa tener buen nivel de glucosa. "
            "Hacer ejercicio no elimina el riesgo cardiovascular genetico. "
            "Verse bien no garantiza que la presion arterial este bajo control. "
            "BioScan IA analiza lo que no se ve: "
            "marcadores cardiovasculares, renales, hormonales y metabolicos. "
            "Setenta y nueve parametros. "
            "La sorpresa puede ser positiva o puede ser una alerta importante. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Cual sera tu sorpresa. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "126", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Si hubiera una maquina que te dijera algo importante sobre tu salud, "
            "querrias saberlo. "
            "Hay dos tipos de personas en el mundo. "
            "Las que quieren saber y actuan con esa informacion. "
            "Y las que prefieren no saber y esperan a que sea urgente. "
            "Los primeros tienen ventaja. Pueden actuar antes. "
            "Pueden prevenir en lugar de tratar. "
            "BioScan IA es para los primeros. "
            "Setenta y nueve parametros de salud. Noventa segundos. Cinco dolares. "
            "Eres del tipo que quiere saber. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Yo si quiero saber. bioscanpro punto net."
        )
    },
    {
        "n": "127", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "A tu carro le haces diagnostico cada ano. Y a tu cuerpo. "
            "El mecanico conecta un escaner y en minutos sabe exactamente que falla. "
            "Le dice que temperatura esta el motor. Como funcionan los sensores. "
            "Que piezas necesitan atencion. "
            "BioScan IA hace lo mismo con tu cuerpo. "
            "Setenta y nueve parametros. Noventa segundos. "
            "Frecuencia cardiaca. Saturacion de oxigeno. Presion arterial estimada. "
            "Glucosa estimada. Riesgo cardiovascular calculado con AHA PREVENT dos mil veintitres. "
            "Score de salud de cero a cien. "
            "El diagnostico que tu cuerpo merece. "
            "Y cuesta menos que un cambio de aceite. "
            "Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "128", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Tienes un numero entre cero y cien que define tu estado de salud hoy. "
            "Sabes cual es. "
            "Es tu BioScan Score. "
            "Calculado a partir de setenta y nueve parametros de salud "
            "medidos en noventa segundos desde tu celular. "
            "Setenta y seis sobre cien es un ejemplo real de alguien en la base de datos CDC. "
            "Con sus habitos reales, su dieta real, su estilo de vida real. "
            "El tuyo podria ser mayor. Podria ser menor. "
            "Solo hay una forma de saberlo. "
            "Noventa segundos. Cinco dolares. "
            "Descubre tu numero. bioscanpro punto net."
        )
    },
    {
        "n": "129", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Cuantos anos le quedan a tu corazon si sigues viviendo como hoy. "
            "No es una pregunta para deprimirte. "
            "Es la pregunta mas importante para motivarte a actuar. "
            "BioScan IA estima tu riesgo cardiovascular a diez anos "
            "usando el modelo PREVENT dos mil veintitres de la American Heart Association: "
            "el algoritmo mas avanzado disponible para esta estimacion. "
            "Esa informacion no te paraliza. "
            "Te da datos concretos para cambiar lo que puedes cambiar hoy. "
            "Setenta y nueve parametros. Score de cero a cien. Reporte PDF. Asistente IA. "
            "Calcula tu futuro. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "130", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Tu sangre dice mas sobre ti que diez anos de historial medico. "
            "El flujo sanguineo contiene informacion sobre tu corazon, "
            "tus pulmones, tus rinones, tus hormonas, tu metabolismo. "
            "Todo eso fluye a traves de la piel donde la luz puede detectarlo. "
            "BioScan IA lee esa informacion a traves de la camara de tu celular "
            "usando oximetria avanzada basada en la ley de Beer-Lambert. "
            "Calibrada con cinco mil ochocientos adultos reales del CDC. "
            "Setenta y nueve parametros calculados en noventa segundos. "
            "Lee tu sangre sin agujas. Sin clinica. Sin cita. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Lee tu sangre. Cinco dolares. bioscanpro punto net."
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
    print("\n// durationInFrames para batch13-data.ts:")
    for n, dur, frames in sorted(results):
        print(f"//  {n}: {dur:.1f}s x30 + 60 = {frames} frames")

if __name__ == "__main__":
    asyncio.run(main())
