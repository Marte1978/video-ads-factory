"""
gen_tts_batch26.py -- Genera audios TTS para copies 251-260 usando Edge TTS.
Categoria: Mujeres 35+ (cont.)
Salida: public/audio/bioscan-251.mp3 ... bioscan-260.mp3
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
        "n": "251", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Las dietas prometen. BioScan IA mide si de verdad funcionan. "
            "Keto, intermitente, vegana: todas prometen resultados. "
            "BioScan IA te dice si tu dieta realmente esta mejorando tus parametros de salud: "
            "glucosa estimada, marcadores metabolicos, energia sistemica. "
            "Datos, no promesas de dieta. "
            "Mide tu dieta con datos. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "252", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Volvi al trabajo despues del embarazo. Necesitaba saber como estaba mi cuerpo. "
            "El postparto cambia todo. Hormonas, cardiovascular, energia. "
            "Cuando volvi al trabajo, use BioScan IA para monitorear mi recuperacion. "
            "Setenta y nueve parametros. Cinco dolares. "
            "Fue el chequeo que me dijo que estaba lista. "
            "Tu recuperacion postparto con datos. bioscanpro punto net."
        )
    },
    {
        "n": "253", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Sindrome de ovario poliquistico. Endometriosis. Condiciones que afectan millones. "
            "BioScan IA monitorea su impacto sistemico. "
            "Las condiciones ginecologicas no afectan solo el sistema reproductivo. "
            "SOP y endometriosis tienen impacto cardiovascular, metabolico y hormonal. "
            "BioScan IA monitorea esos efectos sistemicos en setenta y nueve parametros. "
            "Informacion adicional para tus especialistas. "
            "Monitoreo integral. bioscanpro punto net."
        )
    },
    {
        "n": "254", "voz": "es-MX-JorgeNeural",
        "texto": (
            "La menopausia temprana aumenta el riesgo cardiovascular dramaticamente. Lo sabes? "
            "La menopausia antes de los cuarenta y cinco se asocia con mayor riesgo cardiovascular y osteoporosis. "
            "BioScan IA incluye marcadores relevantes entre sus setenta y nueve parametros. "
            "No reemplaza al ginecologo, pero si anade informacion valiosa sobre el estado sistemico. "
            "Monitoreo en menopausia temprana. bioscanpro punto net."
        )
    },
    {
        "n": "255", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "El primer chequeo post-parto que puedes hacer desde casa. Noventa segundos. "
            "Las revisiones post-parto son cruciales pero a veces dificiles de llegar estando con un recien nacido. "
            "BioScan IA te da setenta y nueve parametros de salud desde casa. "
            "Cardiovascular, metabolico, energia. "
            "Complementario a tus visitas medicas. "
            "Tu chequeo post-parto en casa. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "256", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Las mujeres que lideran no pueden permitirse problemas de salud ignorados. "
            "El liderazgo exige salud. "
            "Las mujeres emprendedoras y ejecutivas que monitorean su bienestar con datos "
            "toman mejores decisiones y tienen mayor resiliencia. "
            "BioScan IA, setenta y nueve parametros en noventa segundos, "
            "para las que no se detienen pero si se cuidan. "
            "Lidera desde la salud. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "257", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Muchas mujeres sienten que no conocen su propio cuerpo. BioScan IA puede cambiar eso. "
            "Setenta y nueve parametros de salud en noventa segundos. Score de cero a cien. "
            "Reporte PDF. Asistente IA que explica cada indicador. "
            "BioScan IA te da el mapa de tu propio cuerpo, uno que nadie te habia dado antes. "
            "Conocete por dentro. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "258", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Quiero que mi hija crezca con habitos de salud que yo nunca tuve. "
            "Me crie en una familia donde no se hablaba de salud preventiva. "
            "Espero que mi hija crezca diferente. "
            "La miro hacer su analisis BioScan IA en noventa segundos "
            "y pienso que estamos construyendo algo nuevo. Un habito generacional. "
            "Construye el habito. bioscanpro punto net."
        )
    },
    {
        "n": "259", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "La depresion tiene marcadores fisicos. BioScan IA puede detectar algunos de ellos. "
            "HRV baja, ritmo cardiaco irregular, fatiga sistemica: "
            "el cuerpo refleja el estado mental. "
            "BioScan IA monitorea setenta y nueve parametros que incluyen "
            "senales fisicas de bienestar general. "
            "No es diagnostico psicologico, es informacion adicional sobre el estado corporal "
            "en tiempos dificiles. "
            "Tu bienestar integral. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "260", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "A los treinta y nueve decidi que la segunda mitad de mi vida seria la mas sana. "
            "No con dietas extremas ni gym obsesivo. Con datos reales y decisiones conscientes. "
            "BioScan IA mensualmente. Setenta y nueve parametros. "
            "Un mapa honesto de como estoy. "
            "Y ajustes graduales basados en esos datos. "
            "A los cuarenta y dos, mi score mas alto: ochenta y cuatro. "
            "Tu mejor epoca comienza ahora. bioscanpro punto net."
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
    print("\n// durationInFrames para batch26-data.ts:")
    for n, dur, frames in sorted(results):
        print(f"//  {n}: {dur:.1f}s x30 + 60 = {frames} frames")

if __name__ == "__main__":
    asyncio.run(main())
