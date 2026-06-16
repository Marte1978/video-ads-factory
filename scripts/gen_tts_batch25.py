"""
gen_tts_batch25.py -- Genera audios TTS para copies 241-250 usando Edge TTS.
Categoria: Mujeres 35+
Salida: public/audio/bioscan-241.mp3 ... bioscan-250.mp3
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
        "n": "241", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Cuidas a todos. Quien te cuida a ti? "
            "Las mujeres son estadisticamente las principales cuidadoras de familia. "
            "Y las que mas descuidan su propia salud. "
            "BioScan IA, setenta y nueve parametros en noventa segundos, "
            "para que encuentres noventa segundos para ti. "
            "Te los mereces. Cuidate tu tambien. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "242", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Los cambios hormonales de la premenopausia afectan setenta y nueve parametros de tu salud. BioScan IA los detecta. "
            "Despues de los treinta y cinco a cuarenta, los cambios hormonales femeninos "
            "afectan el sistema cardiovascular, metabolico y mas. "
            "BioScan IA monitorea esos cambios en tiempo real. "
            "Setenta y nueve parametros. Tendencias mensuales. "
            "Informacion para hablar con tu ginecologa. "
            "Monitorea tus cambios. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "243", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "El espejo te dice como te ves. BioScan IA te dice como estas. "
            "La sociedad mide la salud femenina por apariencia. La ciencia la mide por datos. "
            "BioScan IA te da setenta y nueve parametros de salud real, no de como te ves. "
            "Tu SpO2, tu frecuencia cardiaca, tu riesgo cardiovascular. "
            "La salud que nadie puede ver en una foto. "
            "Tu salud real, no tu imagen. bioscanpro punto net."
        )
    },
    {
        "n": "244", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Antes de buscar un embarazo, conoce exactamente como esta tu salud. "
            "El estado de salud previo al embarazo afecta directamente su desarrollo. "
            "BioScan IA te da setenta y nueve parametros de tu estado basal. "
            "Informacion valiosa para compartir con tu obstetra "
            "y para optimizar tu salud antes de concebir. "
            "Preparate con datos. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "245", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Manejas el trabajo, la casa y los hijos. "
            "No tienes tiempo para ir al medico. Pero si tienes noventa segundos. "
            "BioScan IA para la mujer que no puede parar. "
            "Noventa segundos entre reuniones, en el carro, mientras los ninos duermen. "
            "Setenta y nueve parametros de salud cuando tu puedas. "
            "Porque tu salud importa tanto como todo lo demas que manejas. "
            "Para la mujer que lo hace todo. bioscanpro punto net."
        )
    },
    {
        "n": "246", "voz": "es-MX-JorgeNeural",
        "texto": (
            "La enfermedad cardiaca es la primera causa de muerte en mujeres. Nadie habla de eso. "
            "El infarto femenino no siempre duele en el pecho. Los sintomas son mas difusos. "
            "Y el riesgo se dispara despues de la menopausia. "
            "BioScan IA calcula tu riesgo cardiovascular personalizado con el modelo AHA PREVENT. "
            "En noventa segundos. Por cinco dolares. "
            "El riesgo que nadie te cuenta. bioscanpro punto net."
        )
    },
    {
        "n": "247", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "El self-care real no es solo spa. Es conocer tu estado de salud. "
            "Las velas, los banos de burbujas, las mascarillas, todo es valido. "
            "Pero el autocuidado mas profundo es saber como esta tu cuerpo por dentro. "
            "BioScan IA, setenta y nueve parametros en noventa segundos, "
            "el autocuidado que realmente importa. "
            "El self-care real. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "248", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "La ansiedad afecta tu corazon, tu respiracion y mas. BioScan IA lo detecta en tus parametros. "
            "HRV baja, frecuencia cardiaca elevada, SpO2 fluctuante: "
            "son senales fisicas de la ansiedad. "
            "BioScan IA puede detectar el impacto fisico de tu estres mental. "
            "Setenta y nueve parametros que conectan tu bienestar mental y fisico. "
            "Entiende la conexion mente-cuerpo. bioscanpro punto net."
        )
    },
    {
        "n": "249", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Las mujeres cuidan su salud juntas. Comparte BioScan IA con tus amigas. "
            "Cuando las amigas se cuidan juntas, el habito se sostiene. "
            "Comparte BioScan IA en tu grupo de WhatsApp. Comparen scores. Motivense. "
            "El pack familiar funciona perfecto para un grupo de cuatro amigas: "
            "dieciocho dolares en total, cuatro cincuenta cada una. "
            "Cuidanse juntas. bioscanpro punto net. Dieciocho dolares."
        )
    },
    {
        "n": "250", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Cancer de mama, ovario y cuello uterino: senales de riesgo que BioScan IA puede complementar. "
            "BioScan IA no detecta cancer. "
            "Pero si monitorea setenta y nueve parametros de salud general "
            "que, junto con tus examenes ginecologicos regulares, "
            "dan una imagen mas completa de tu estado. "
            "La informacion nunca sobra cuando se trata de salud femenina. "
            "Monitoreo integral femenino. Cinco dolares. bioscanpro punto net."
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
    print("\n// durationInFrames para batch25-data.ts:")
    for n, dur, frames in sorted(results):
        print(f"//  {n}: {dur:.1f}s x30 + 60 = {frames} frames")

if __name__ == "__main__":
    asyncio.run(main())
