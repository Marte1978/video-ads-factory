"""
gen_tts_batch27.py -- Genera audios TTS para copies 261-270 usando Edge TTS.
Categoria: Jovenes 25-35
Salida: public/audio/bioscan-261.mp3 ... bioscan-270.mp3
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
        "n": "261", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "A los veintiocho anos te sientes invencible. Tu SpO2 baja puede decir otra cosa. "
            "Los jovenes son los que menos se chequean. "
            "Y los que mas sorpresas desagradables encuentran cuando finalmente lo hacen. "
            "BioScan IA, setenta y nueve parametros en noventa segundos, "
            "porque la salud preventiva es para todos, especialmente para los jovenes. "
            "Chequéate aunque seas joven. bioscanpro punto net."
        )
    },
    {
        "n": "262", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Estas construyendo tu carrera. No destruyas tu salud en el proceso. "
            "Los veinte y treinta son los anos del trabajo intenso, el estres, el mal sueno, la comida rapida. "
            "El cuerpo aguanta, hasta que no. "
            "BioScan IA te da senales de alerta tempranas antes de que el dano sea irreversible. "
            "Setenta y nueve parametros. Cinco dolares. "
            "Cuida tu activo mas valioso. bioscanpro punto net."
        )
    },
    {
        "n": "263", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Tu generacion optimiza todo: el cafe, el sueno, la productividad. Por que no la salud? "
            "Los millennials y Gen Z son la generacion de la optimizacion. "
            "Nootropicos, cold plunges, ayuno intermitente. "
            "BioScan IA anade lo que falta: datos reales de setenta y nueve parametros de salud "
            "para validar si esas intervenciones funcionan realmente. "
            "Optimiza con datos reales. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "264", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "En Instagram todos estan saludables. Cuantos tienen datos reales que lo comprueben? "
            "La estetica de la salud, jugos verdes, gym, poses de yoga, "
            "no tiene nada que ver con los datos de salud reales. "
            "BioScan IA te da los setenta y nueve parametros que si importan. "
            "Para la generacion que dice que data is king, empieza con los datos de tu propia salud. "
            "Datos reales, no poses. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "265", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Usas apps para todo. Hay una para tu salud que realmente funciona. "
            "Pastas de dientes inteligentes, colchones con sensores, wearables de quinientos dolares. "
            "La generacion tech merece la mejor herramienta de salud digital. "
            "BioScan IA, setenta y nueve parametros en noventa segundos desde el navegador, "
            "sin app que descargar, sin gadget extra. "
            "La health tech que esperabas. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "266", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Si trataras tu salud como un startup, monitorearias cada KPI desde el dia uno. "
            "Los fundadores de startups miden todo desde el principio. Tu salud merece el mismo rigor. "
            "BioScan IA te da setenta y nueve KPIs de salud desde ahora. "
            "Crea tu baseline. Mide mensualmente. Itera tus habitos basado en datos. "
            "El MVP de tu salud preventiva. "
            "Tu startup de salud. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "267", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Despues de un fin de semana intenso, siempre hago el analisis BioScan. "
            "No para castigarme. Para entender el impacto real. "
            "SpO2, HRV, frecuencia cardiaca: me dicen cuanto tiempo necesita mi cuerpo para recuperarse. "
            "Y voy ajustando. Sin moralizar, solo con datos. "
            "Setenta y nueve parametros que me dicen la verdad. "
            "La verdad sin juicios. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "268", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Entrenas cinco veces por semana. Sabes si tu corazon lo maneja bien? "
            "El ejercicio intenso sin monitoreo puede ser contraproducente. "
            "BioScan IA monitorea tu HRV, SpO2 y estado cardiovascular "
            "para asegurarte de que tu entrenamiento esta mejorando tu salud, no comprometiendola. "
            "Setenta y nueve parametros. Cinco dolares. "
            "Entrena con datos. bioscanpro punto net."
        )
    },
    {
        "n": "269", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Mi primer trabajo real me paso factura. BioScan IA me lo demostro en numeros. "
            "Veinticuatro anos, primer trabajo de oficina, horarios locos, comida rapida, sin ejercicio. "
            "Mi score de BioScan despues de seis meses: cincuenta y ocho. "
            "Eso me hizo cambiar. Ahora a los veintiseis, score setenta y cuatro. "
            "Los datos fueron mi despertador. "
            "Tu despertador de salud. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "270", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Cada ano que empiezas antes en prevencion de salud son anos de vida que ganas al final. "
            "La medicina preventiva es acumulativa. "
            "Los habitos de salud que construyes a los veintiocho "
            "protegen el cuerpo que tendras a los cincuenta y ocho. "
            "BioScan IA como punto de partida de esa construccion. "
            "Setenta y nueve parametros. Cinco dolares. La inversion mas rentable a largo plazo. "
            "Invierte en tu futuro. bioscanpro punto net."
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
    print("\n// durationInFrames para batch27-data.ts:")
    for n, dur, frames in sorted(results):
        print(f"//  {n}: {dur:.1f}s x30 + 60 = {frames} frames")

if __name__ == "__main__":
    asyncio.run(main())
