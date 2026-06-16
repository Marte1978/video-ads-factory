"""
gen_tts_batch18.py -- Genera audios TTS para copies 171-180 usando Edge TTS.
Categoria: Autoridad / Credibilidad (cont.)
Salida: public/audio/bioscan-171.mp3 ... bioscan-180.mp3
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
        "n": "171", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Tus datos de salud son tuyos. BioScan IA no los vende ni los comparte. "
            "Conexion SSL cifrada. Datos de salud protegidos. "
            "Sin publicidad basada en tu informacion medica. "
            "BioScan IA no monetiza tu privacidad. "
            "Solo genera el analisis que pagaste. "
            "Eso es lo que deberia ser la tecnologia de salud. "
            "Setenta y nueve parametros. Score de cero a cien. Reporte PDF. Asistente IA. "
            "Tu privacidad protegida. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "172", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "BioScan IA no reemplaza un diagnostico medico. Lo dice claramente. "
            "La honestidad genera confianza. "
            "BioScan IA es una herramienta de informacion, no un medico. "
            "Sus resultados son estimaciones basadas en oximetria y datos CDC. "
            "Valiosas y precisas, pero siempre complementarias "
            "a la atencion medica profesional. "
            "Informacion honesta y responsable. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "173", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Las fuentes cientificas de BioScan IA "
            "estan publicadas en revistas con revision de pares. "
            "CDC NHANES. Beer-Lambert Law. AHA PREVENT dos mil veintitres. "
            "Todas fuentes publicadas, revisadas por pares, citables. "
            "BioScan IA no invento ningun algoritmo. "
            "Aplico lo que la ciencia ya habia demostrado. "
            "Por cinco dolares, tienes decadas de investigacion trabajando para ti. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Ciencia revisada por pares. bioscanpro punto net."
        )
    },
    {
        "n": "174", "voz": "es-MX-JorgeNeural",
        "texto": (
            "La tecnologia en que se basa BioScan IA "
            "es equipo estandar en la UCI de cualquier hospital. "
            "La fotopletismografia que usa BioScan IA "
            "es la misma tecnologia de los monitores de UCI, "
            "pulsioximetros y monitores de signos vitales "
            "de hospitales en todo el mundo. "
            "No es experimental. Es medicina validada. "
            "Ahora en tu celular. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Tecnologia UCI. Tu celular. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "175", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Score de ejemplo: setenta y seis sobre cien. "
            "Basado en un adulto real de la base de datos CDC. "
            "No inventamos ese numero. "
            "Setenta y seis de cien es el score calculado para un adulto de la base NHANES del CDC "
            "usando los mismos algoritmos de BioScan IA. "
            "Es un numero real, calculado con metodologia real, "
            "para ilustrar como funciona el sistema. "
            "Cual sera tu score. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "176", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Los dispositivos de monitoreo medico cuestan "
            "entre quinientos y dos mil dolares. BioScan IA cuesta cinco. "
            "Los holters cardiacos, los monitores de glucosa continuos, "
            "los equipos de telemetria. "
            "Todos son dispositivos medicos validados que cuestan fortunas. "
            "BioScan IA usa principios similares, "
            "aplicados con la tecnologia del celular. "
            "No es lo mismo, pero por cinco dolares es sorprendentemente poderoso. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Poderoso y accesible. bioscanpro punto net."
        )
    },
    {
        "n": "177", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "La medicina preventiva es la disciplina medica "
            "que mas vidas ha salvado en la historia. "
            "Vacunas. Chequeos de presion arterial. Examenes de colesterol. "
            "Cada practica preventiva ha evitado millones de muertes. "
            "BioScan IA es la siguiente evolucion: "
            "prevencion digital, accesible y continua. "
            "Por cinco dolares. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "La proxima revolucion preventiva. bioscanpro punto net."
        )
    },
    {
        "n": "178", "voz": "es-MX-JorgeNeural",
        "texto": (
            "BioScan IA actualiza sus algoritmos cuando la ciencia avanza. "
            "El modelo PREVENT de la AHA fue actualizado en dos mil veintitres. "
            "BioScan IA lo implemento. "
            "Cuando nuevos estudios CDC refinan los datos de referencia, "
            "BioScan IA actualiza sus calibraciones. "
            "No es software estatico. Es ciencia viva. "
            "Setenta y nueve parametros. Score de cero a cien. Reporte PDF. Asistente IA. "
            "Ciencia actualizada. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "179", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Hay mil apps que prometen cuidar tu salud. "
            "Solo una cita sus fuentes cientificas. "
            "Las apps de bienestar abundan: meditacion, respiracion, pasos. "
            "Pocas basan sus afirmaciones en ciencia publicada. "
            "BioScan IA si. CDC NHANES. Beer-Lambert. AHA PREVENT. "
            "Fuentes citables y verificables. "
            "La diferencia entre marketing y ciencia. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Elige ciencia. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "180", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "El reporte PDF de BioScan IA es un documento que puedes llevar a tu medico. "
            "No es una pantalla de colores bonitos. "
            "Es un reporte estructurado con setenta y nueve parametros, "
            "valores de referencia, indicadores de riesgo "
            "y una escala de salud de cero a cien. "
            "Un documento que tu medico puede leer "
            "y usar para tomar decisiones mas informadas. "
            "Un reporte medico por cinco dolares. bioscanpro punto net."
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
    print("\n// durationInFrames para batch18-data.ts:")
    for n, dur, frames in sorted(results):
        print(f"//  {n}: {dur:.1f}s x30 + 60 = {frames} frames")

if __name__ == "__main__":
    asyncio.run(main())
