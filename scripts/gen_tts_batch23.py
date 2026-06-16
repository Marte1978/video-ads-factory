"""
gen_tts_batch23.py -- Genera audios TTS para copies 221-230 usando Edge TTS.
Categoria: Hombres 40+
Salida: public/audio/bioscan-221.mp3 ... bioscan-230.mp3
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
        "n": "221", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Los hombres fuertes van al medico. Los que no van, son los que caen primero. "
            "No es debilidad. Es inteligencia. "
            "Los hombres que monitorean su salud viven mas y mejor. "
            "BioScan IA lo hace sin pisar una clinica. "
            "Noventa segundos. Cinco dolares. "
            "Lo puede hacer cualquier hombre que se respete. "
            "Hazlo tu tambien. bioscanpro punto net."
        )
    },
    {
        "n": "222", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Los hombres tienen dos o tres veces mas riesgo de infarto que las mujeres antes de los sesenta y cinco. "
            "Es biologia. Los hombres acumulan riesgo cardiovascular antes y mas rapido. "
            "BioScan IA calcula tu riesgo cardiovascular personalizado "
            "usando el modelo PREVENT dos mil veintitres de la AHA. "
            "En noventa segundos. Por cinco dolares. Sin excusas. "
            "Conoce tu riesgo real. bioscanpro punto net."
        )
    },
    {
        "n": "223", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Trabaje tan duro para darle lo mejor a mi familia que casi me mato en el proceso. "
            "A los cuarenta y cuatro tuve que parar. No por eleccion. Por un colapso de estres. "
            "Los medicos dijeron que mis marcadores cardiovasculares eran preocupantes. "
            "Ahora uso BioScan IA mensualmente. "
            "Setenta y nueve parametros. Cinco dolares. "
            "Para estar aqui cuando mi familia me necesite. "
            "Cuidate para los tuyos. bioscanpro punto net."
        )
    },
    {
        "n": "224", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "La salud masculina va mucho mas alla de la prostata. "
            "BioScan IA analiza los setenta y nueve parametros que ningun hombre deberia ignorar. "
            "Sistema cardiovascular. Renal. Hormonal. Metabolico. "
            "Los hombres tienen riesgos especificos en cada uno de estos sistemas. "
            "BioScan IA los analiza todos en noventa segundos. "
            "El chequeo masculino mas completo por cinco dolares. "
            "El chequeo del hombre serio. bioscanpro punto net."
        )
    },
    {
        "n": "225", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Tu score de salud es mayor que el de tu competencia en el gym? "
            "No es vanidad. Es datos. "
            "Los hombres que monitorean su salud con BioScan IA tienen ventaja. "
            "Setenta y nueve parametros. SpO2 real. HRV real. Riesgo cardiovascular real. "
            "El gym de tus metricas de salud. "
            "Demuestra tu salud real. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "226", "voz": "es-MX-JorgeNeural",
        "texto": (
            "La testosterona declina despues de los treinta. Sabes como estan tus marcadores hormonales? "
            "BioScan IA incluye estimaciones de marcadores hormonales entre sus setenta y nueve parametros. "
            "No es un laboratorio hormonal completo, pero es informacion inicial relevante. "
            "En noventa segundos por cinco dolares, tienes una primera lectura de tu estado hormonal. "
            "Monitorea tu salud hormonal. bioscanpro punto net."
        )
    },
    {
        "n": "227", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Gastas en cervezas con los amigos. Cuando fue la ultima vez que invertiste cinco dolares en tu salud? "
            "No es juicio. Es perspectiva. "
            "Una cerveza promedio cuesta tres o cinco dolares. "
            "BioScan IA cuesta cinco dolares, y en lugar de calorias vacias, "
            "te da setenta y nueve parametros reales de tu estado de salud. "
            "Cual de las dos vas a recordar en veinte anos? "
            "La inversion que importa. bioscanpro punto net."
        )
    },
    {
        "n": "228", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Mi amigo tuvo un infarto a los cuarenta y cinco. Nunca se habia chequeado. "
            "Eso me cambio. Si el se hubiera chequeado, probablemente lo hubieran detectado antes. "
            "Desde ese dia uso BioScan IA mensualmente. "
            "Setenta y nueve parametros. Score de salud. Riesgo cardiovascular. "
            "Porque no quiero ser la proxima historia de nunca se chequeo. "
            "No seas esa historia. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "229", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "A los cuarenta y cinco ya estas a la mitad. La segunda mitad depende de lo que hagas ahora. "
            "La esperanza de vida masculina promedio es de setenta y dos a setenta y ocho anos en America Latina. "
            "Si tienes cuarenta y cinco, ya vas por la mitad. "
            "Las decisiones que tomes en los proximos diez anos "
            "determinan como son los siguientes veinticinco. "
            "BioScan IA te da los datos para tomar esas decisiones bien. "
            "Invierte en tu segunda mitad. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "230", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Dices que eres el pilar de tu familia. Pero un pilar que se cae destruye todo. "
            "No es metafora dramatica. Si tu faltas, todo cambia para tu familia. "
            "BioScan IA, setenta y nueve parametros de salud en noventa segundos, "
            "para que el pilar este monitoreado, fuerte y presente para los suyos. "
            "Se el pilar sano. Cinco dolares. bioscanpro punto net."
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
    print("\n// durationInFrames para batch23-data.ts:")
    for n, dur, frames in sorted(results):
        print(f"//  {n}: {dur:.1f}s x30 + 60 = {frames} frames")

if __name__ == "__main__":
    asyncio.run(main())
