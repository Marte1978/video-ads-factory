"""
gen_tts_batch21.py -- Genera audios TTS para copies 201-210 usando Edge TTS.
Categoria: Historias de Transformacion
Salida: public/audio/bioscan-201.mp3 ... bioscan-210.mp3
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
        "n": "201", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Tenia un score de cincuenta y cuatro. Seis meses despues llegue a ochenta y uno. "
            "Con los datos de BioScan IA empece a dormir mejor, reducir el estres y mejorar mi alimentacion. "
            "Cada mes veo el progreso en mis setenta y nueve parametros. "
            "Los numeros no mienten. La transformacion es real. "
            "Empieza tu transformacion. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "202", "voz": "es-MX-JorgeNeural",
        "texto": (
            "BioScan IA mostro riesgo cardiovascular alto. Fui al medico. Tenia razon. "
            "No tenia sintomas. Me sentia bien. "
            "Pero el analisis de BioScan IA mostro indicadores de riesgo. "
            "Fui al cardiologo con el reporte PDF. Lo confirmo. "
            "Empece tratamiento preventivo a tiempo. "
            "Ese analisis de cinco dolares puede haberme salvado la vida. "
            "El analisis que puede cambiarlo todo. bioscanpro punto net."
        )
    },
    {
        "n": "203", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Ver mis parametros de glucosa altos me dio el empuje para cambiar mi dieta. "
            "Lo sabia intelectualmente. Pero verlo en numeros: "
            "glucosa estimada ciento ocho, riesgo metabolico elevado, lo hizo real. "
            "Cambie mi dieta. Tres meses despues: glucosa estimada ochenta y nueve, riesgo bajo. "
            "BioScan IA no me dio la solucion. Me dio la motivacion. "
            "Deja que los datos te motiven. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "204", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Antes ignoraba mi salud completamente. Ahora la monitoro mensualmente. "
            "El cambio empezo con un analisis de curiosidad. Lo que vi me sorprendio. "
            "Empece a monitorearlo mensualmente. "
            "Ahora tengo ocho meses de historial de datos. "
            "Puedo ver exactamente como mis decisiones afectan mi cuerpo. "
            "BioScan IA cambio mi relacion con mi salud. "
            "Cambia tu relacion con tu salud. bioscanpro punto net."
        )
    },
    {
        "n": "205", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Baje doce kilos. Pero lo que me importa es que mis parametros cardiovasculares mejoraron. "
            "El peso es un numero. "
            "Pero los setenta y nueve parametros de BioScan IA me dijeron que mis cambios estaban funcionando de verdad: "
            "SpO2 mejoro, riesgo cardiovascular bajo, marcadores metabolicos normalizados. "
            "Los numeros reales, no solo la bascula. "
            "Mas alla del peso. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "206", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Despues del COVID, use BioScan IA para monitorear mi recuperacion. "
            "SpO2 post-COVID puede quedar comprometido semanas. "
            "Use BioScan IA para rastrear mi recuperacion semanal. "
            "Ver como la SpO2 subia de noventa y cuatro a noventa y ocho, "
            "como la frecuencia cardiaca se normalizaba. "
            "Los datos me dieron tranquilidad y me ayudaron a saber "
            "cuando realmente estaba listo para volver a ejercitar. "
            "Monitorea tu recuperacion. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "207", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "El estres laboral me estaba matando. Los datos me lo demostraron. "
            "Variabilidad cardiaca HRV baja. Frecuencia cardiaca en reposo elevada. "
            "Signos claros de estres cronico en mis parametros BioScan. "
            "Eso me hizo tomarlo en serio. Cambie habitos. "
            "Seis meses despues, HRV normal y frecuencia cardiaca optima. "
            "Los datos me salvaron del burnout. "
            "Detecta el estres antes de que te destruya. bioscanpro punto net."
        )
    },
    {
        "n": "208", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Soy corredor amateur. BioScan IA me ayudo a entrenar mas inteligente. "
            "Antes entrenaba por volumen. Ahora entreno por datos. "
            "Mi SpO2 y HRV de BioScan IA me dicen cuando estoy recuperado para entrenar duro y cuando descansar. "
            "Mis tiempos mejoraron quince por ciento en seis meses. "
            "Los datos hacen la diferencia. "
            "Entrena inteligente. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "209", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Mis hijos me pidieron que me cuidara mas. BioScan IA me dio los datos para hacerlo. "
            "Score inicial: sesenta y uno. Demasiado bajo para un padre de cuarenta y dos anos con hijos pequenos. "
            "Ese numero me cambio. "
            "Ocho meses despues: score setenta y nueve. "
            "Mis hijos tienen el papa que merecen. "
            "BioScan IA fue el espejo que necesitaba. "
            "Cambia por ellos. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "210", "voz": "es-MX-JorgeNeural",
        "texto": (
            "A los sesenta y siete anos, BioScan IA me mostro que podia estar mejor. Y trabaje para lograrlo. "
            "Pense que con sesenta y siete anos ya era tarde para mejorar mi salud. "
            "BioScan IA me mostro que no. "
            "Score inicial cincuenta y ocho. "
            "Con cambios en dieta, ejercicio moderado y sueno, llegue a setenta y dos en seis meses. "
            "Nunca es tarde cuando tienes datos. "
            "Nunca es tarde. Cinco dolares. bioscanpro punto net."
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
    print("\n// durationInFrames para batch21-data.ts:")
    for n, dur, frames in sorted(results):
        print(f"//  {n}: {dur:.1f}s x30 + 60 = {frames} frames")

if __name__ == "__main__":
    asyncio.run(main())
