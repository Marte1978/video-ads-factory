"""
gen_tts_batch10.py -- Genera audios TTS para copies 091-100 usando Edge TTS.
Categoria: Familia y Proteccion (cont.) + primeras FOMO/Prueba Social
Salida: public/audio/bioscan-091.mp3 ... bioscan-100.mp3
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
        "n": "091", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Tu esposa te pide que te cuides. Dale la prueba de que lo estas haciendo. "
            "Las conversaciones sobre salud son dificiles. "
            "Hablar de colesterol, de presion arterial, de riesgo cardiovascular "
            "puede sentirse abstracto e intimidante. "
            "Los datos concretos hablan solos. "
            "Con BioScan IA tienes setenta y nueve parametros de salud en un reporte PDF "
            "para mostrar que te estas cuidando de verdad. "
            "Saturacion de oxigeno. Presion arterial estimada. Glucosa estimada. "
            "Frecuencia cardiaca. Riesgo cardiovascular a diez anos AHA PREVENT dos mil veintitres. "
            "Score de salud de cero a cien. "
            "Noventa segundos. Cinco dolares. "
            "Y tu pareja puede descansar un poco mas tranquila. "
            "Dales tranquilidad. bioscanpro punto net."
        )
    },
    {
        "n": "092", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Cuando BioScan IA llego a nuestra casa, toda la familia empezo a cuidarse. "
            "Primero lo use yo. Luego mi esposa. "
            "Luego insistimos con los abuelos, que eran un poco mas reacios. "
            "Ahora es parte de nuestra rutina mensual. "
            "El primer domingo de cada mes, cada quien hace su analisis de noventa segundos. "
            "Compartimos los resultados, celebramos lo bueno "
            "y tomamos decisiones sobre lo que podemos mejorar. "
            "Cuatro analisis familiares: dieciocho dolares. "
            "Trescientos dieciseis parametros analizados. "
            "Una familia mucho mas consciente de su salud. "
            "Score de cero a cien por persona. Reporte PDF. Asistente IA. "
            "Empieza en tu familia. bioscanpro punto net."
        )
    },
    {
        "n": "093", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Desde los veinticinco hasta los setenta y cinco. "
            "BioScan IA funciona para toda la familia. "
            "Los jovenes para optimizar su rendimiento fisico. "
            "Los adultos de mediana edad para prevenir problemas cardiovasculares. "
            "Los mayores para detectar cambios a tiempo "
            "antes de que se conviertan en emergencias. "
            "BioScan IA analiza setenta y nueve parametros validos para cualquier adulto. "
            "Calibrado con datos del CDC NHANES: "
            "cinco mil ochocientos adultos de todas las edades, generos y etnias. "
            "Algoritmo cardiaco AHA PREVENT dos mil veintitres. "
            "Score de salud. Reporte PDF. Asistente IA. "
            "Un solo servicio para toda la familia. "
            "Para todas las edades. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "094", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Antes de las vacaciones familiares, asegurate de que todos esten bien. "
            "Nada arruina unas vacaciones como un problema de salud inesperado. "
            "Una crisis hipertensiva. Una descompensacion de glucosa. "
            "Algo que hubiera podido detectarse antes. "
            "BioScan IA: cuatro analisis familiares en diez minutos, dieciocho dolares. "
            "Para que salgan tranquilos sabiendo que todos estan en buen estado. "
            "Setenta y nueve parametros por persona. "
            "Riesgo cardiovascular calculado con AHA PREVENT dos mil veintitres. "
            "Score de cero a cien. Reporte PDF. "
            "El pre-check de vacaciones mas inteligente que puedes hacer. "
            "Vacaciones sin sorpresas. bioscanpro punto net."
        )
    },
    {
        "n": "095", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Los hombres evitan el medico. Sus familias lo saben. Y les preocupa. "
            "El setenta y dos por ciento de los hombres evita ir al medico. "
            "Sus parejas lo saben y lo padecen en silencio. "
            "BioScan IA es la solucion para los que rechazan el consultorio. "
            "Sin citas. Sin esperas. Sin la incomodidad de hablar con un medico. "
            "Solo noventa segundos con el celular. "
            "Setenta y nueve parametros de salud. Score de cero a cien. "
            "Reporte PDF. Asistente IA que explica todo. "
            "Calibrado con datos del CDC. Algoritmo AHA PREVENT dos mil veintitres. "
            "Algo que hasta el mas duro puede hacer. "
            "Para los que no van al medico. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "096", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Ser padre cambio mi perspectiva de la salud completamente. "
            "Antes no me importaba mucho. "
            "Comia mal, dormia poco, no me chequeaba, "
            "pensaba que era joven y que tenia tiempo. "
            "Pero cuando nacio mi hija, todo cambio en un instante. "
            "De repente tenia una razon real para cuidarme. "
            "Ahora uso BioScan IA mensualmente. "
            "Setenta y nueve parametros de salud en noventa segundos. "
            "Mi riesgo cardiovascular calculado con el modelo AHA PREVENT dos mil veintitres. "
            "Mi score de salud de cero a cien. Mi reporte PDF. "
            "Calibrado con datos del CDC. "
            "Porque ella me necesita aqui. "
            "La salud del padre importa. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "097", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Que herencia de salud le estas dejando a tus hijos. "
            "No hablo de dinero ni de propiedades. "
            "Hablo de habitos. De cultura. De como ven el mundo. "
            "Los habitos de salud se heredan igual que los valores. "
            "Si tus hijos te ven chequearte regularmente, ellos lo haran. "
            "Si te ven ignorar tu cuerpo, ellos tambien lo ignoraran. "
            "BioScan IA hace que el monitoreo de salud sea parte del ADN familiar. "
            "Setenta y nueve parametros. Cinco dolares. "
            "Un legado que vale mas que cualquier herencia economica. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Garantia total de devolucion. "
            "Deja el mejor legado. bioscanpro punto net."
        )
    },
    {
        "n": "098", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Antes de ir al hospital, sabe si realmente es urgente. "
            "Sientes algo raro. Te preocupas. "
            "Pero, es una emergencia real o es tension, estres, falta de sueno? "
            "No todas las molestias ameritan horas en urgencias. "
            "Con BioScan IA puedes analizar setenta y nueve parametros en noventa segundos "
            "y tomar una decision informada. "
            "Si todo esta bien, evitas horas en sala de espera. "
            "Si algo falla, tienes datos reales para mostrar al medico. "
            "Saturacion de oxigeno. Frecuencia cardiaca. Riesgo cardiovascular. "
            "Score de cero a cien. Reporte PDF. "
            "Decide con datos. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "099", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "El COVID nos enseno que la salud puede cambiar de un dia para otro. "
            "Nadie estaba preparado. "
            "Millones de personas no sabian su SpO2, su frecuencia cardiaca, "
            "su estado cardiovascular, su nivel de glucosa. "
            "Vivian seguros de que estaban bien porque no tenian sintomas. "
            "Y entonces el virus llego y muchos no lo superaron. "
            "BioScan IA nacio de esa leccion: "
            "que todos deberian poder monitorearse preventivamente. "
            "Setenta y nueve parametros. Noventa segundos. Cinco dolares. "
            "Score de salud. Reporte PDF. Asistente IA. "
            "Calibrado con datos CDC. Algoritmo AHA PREVENT dos mil veintitres. "
            "Siempre preparados. bioscanpro punto net."
        )
    },
    {
        "n": "100", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "El primer domingo de cada mes, toda nuestra familia se chequea con BioScan IA. "
            "Se convirtio en un ritual que todos esperamos. "
            "Desayunamos juntos. Hablamos de la semana. "
            "Y luego, cada quien hace su analisis de noventa segundos. "
            "Compartimos los resultados. Celebramos lo que mejoro. "
            "Hablamos de lo que podemos cambiar. "
            "Es una conversacion de salud sin tension, sin miedo, con datos reales. "
            "Dieciocho dolares al mes para toda la familia. "
            "Cuatro analisis. Cuatrocientos reportes PDF al ano. "
            "Un habito que transformo nuestra cultura familiar de salud. "
            "La mejor inversion mensual que hacemos. "
            "Empieza tu ritual. bioscanpro punto net."
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
    print("\n// durationInFrames para batch10-data.ts:")
    for n, dur, frames in sorted(results):
        print(f"//  {n}: {dur:.1f}s x30 + 60 = {frames} frames")

if __name__ == "__main__":
    asyncio.run(main())
