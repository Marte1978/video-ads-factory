"""
gen_tts_batch24.py -- Genera audios TTS para copies 231-240 usando Edge TTS.
Categoria: Hombres 40+ (cont.)
Salida: public/audio/bioscan-231.mp3 ... bioscan-240.mp3
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
        "n": "231", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Estoy bien. La frase mas peligrosa en boca de un hombre de cuarenta. "
            "Los hombres minimizan sintomas. Aguantan. No quieren preocupar. "
            "Pero el cuerpo no miente aunque el hombre si. "
            "BioScan IA da datos objetivos que no dependen de como te sientes. "
            "Setenta y nueve parametros reales. La verdad que no sabes que necesitas. "
            "Los datos no mienten. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "232", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Mis hijos tienen ocho y doce anos. Para su graduacion tendre cincuenta y cuatro y cincuenta y ocho. "
            "Quiero estar sano para eso. "
            "No es fantasia. Es planificacion. "
            "Los hombres que monitorean su salud con datos reales viven mas y con mejor calidad de vida. "
            "BioScan IA, setenta y nueve parametros mensuales, para llegar sano a esas graduaciones. "
            "Planifica tu salud. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "233", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Tu negocio tiene KPIs. Tu salud tambien deberia tenerlos. "
            "Los empresarios miden ventas, margenes, conversiones. "
            "Pero pocos miden sus KPIs de salud. "
            "BioScan IA te da setenta y nueve KPIs de salud en noventa segundos. "
            "Tu dashboard de bienestar personal. Un CEO de su cuerpo. "
            "Mide tus KPIs de salud. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "234", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Llevas anos detras de un escritorio. Tu cuerpo lo registra. BioScan IA tambien. "
            "El sedentarismo laboral es uno de los principales factores de riesgo cardiovascular. "
            "BioScan IA puede detectar sus efectos en tus parametros. "
            "Setenta y nueve indicadores. Noventa segundos. "
            "Descubre si tu trabajo de oficina te esta cobrando factura. "
            "Ve el costo del sedentarismo. bioscanpro punto net."
        )
    },
    {
        "n": "235", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "El hombre inteligente no espera a estar enfermo para actuar. "
            "La prevencion es para los que piensan a largo plazo. "
            "BioScan IA, setenta y nueve parametros de salud en noventa segundos, "
            "es la decision del hombre que entiende que su salud es su mayor activo. "
            "Por cinco dolares. Sin excusas. "
            "Actua antes, no despues. bioscanpro punto net."
        )
    },
    {
        "n": "236", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Los marcadores hepaticos de BioScan IA te dicen si el alcohol esta afectando tu higado. "
            "No tienes que dejar de tomar. Pero si debes saber como te esta afectando. "
            "BioScan IA incluye estimaciones de funcion hepatica entre sus setenta y nueve parametros. "
            "Informacion para tomar decisiones conscientes. Cinco dolares. "
            "Conoce el impacto real. bioscanpro punto net."
        )
    },
    {
        "n": "237", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Si te falta energia a los cuarenta y cinco, no es edad. Son datos. "
            "La fatiga cronica tiene causas medibles: "
            "SpO2 baja, funcion tiroidea comprometida, anemia estimada, estres hormonal. "
            "BioScan IA analiza setenta y nueve parametros que pueden explicar "
            "por que tu energia no es lo que era. "
            "La respuesta puede estar en los numeros. "
            "Encuentra tu energia. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "238", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Duermes seis horas y te sientes destruido. BioScan IA puede explicar por que. "
            "El sueno insuficiente afecta HRV, cortisol, presion arterial y mas. "
            "BioScan IA mide el impacto del mal sueno en tus parametros de salud. "
            "Setenta y nueve indicadores. "
            "La conexion entre tus noches y tu salud diurna, visible en datos. "
            "Entiende tu sueno con datos. bioscanpro punto net."
        )
    },
    {
        "n": "239", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "El reto de los noventa dias. Un analisis BioScan al inicio, a los cuarenta y cinco y al final. "
            "Tres meses. Tres mediciones. Un cambio real. "
            "Haz tu analisis inicial con BioScan IA, establece que quieres mejorar, actua, "
            "y mide el progreso en cuarenta y cinco y noventa dias. "
            "Los datos son tu accountability partner que nunca te miente. "
            "Acepta el reto. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "240", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "El mejor legado que puedes dejar a tus hijos: el ejemplo de un padre que se cuido. "
            "Los habitos de salud se heredan. "
            "Si tus hijos te ven monitorear tu salud con BioScan IA mensualmente, "
            "aprenden que la prevencion importa. "
            "Ese habito puede ser el legado mas valioso que les das. "
            "El legado del padre sano. bioscanpro punto net."
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
    print("\n// durationInFrames para batch24-data.ts:")
    for n, dur, frames in sorted(results):
        print(f"//  {n}: {dur:.1f}s x30 + 60 = {frames} frames")

if __name__ == "__main__":
    asyncio.run(main())
