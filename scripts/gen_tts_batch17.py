"""
gen_tts_batch17.py -- Genera audios TTS para copies 161-170 usando Edge TTS.
Categoria: Autoridad / Credibilidad
Salida: public/audio/bioscan-161.mp3 ... bioscan-170.mp3
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
        "n": "161", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "El CDC es la institucion de salud mas confiable del mundo. "
            "BioScan IA usa sus datos. "
            "Los datos NHANES del CDC representan la muestra mas rigurosa "
            "de salud de la poblacion adulta americana. "
            "Los algoritmos de BioScan IA estan calibrados con cinco mil ochocientos cincuenta y seis datos reales. "
            "Cuando BioScan IA calcula tu riesgo, "
            "usa la misma base cientifica que los epidemiologos del CDC. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Ciencia del CDC. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "162", "voz": "es-MX-JorgeNeural",
        "texto": (
            "La American Heart Association publico el mejor modelo de riesgo cardiovascular. "
            "BioScan IA lo implemento. "
            "El modelo PREVENT dos mil veintitres de la AHA "
            "es el estandar de oro para evaluar riesgo cardiovascular. "
            "Fue publicado en noviembre de dos mil veintitres. "
            "BioScan IA es uno de los primeros servicios al consumidor en implementarlo. "
            "Por cinco dolares. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "El estandar de la AHA. bioscanpro punto net."
        )
    },
    {
        "n": "163", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "La Ley de Beer-Lambert. El principio fisico que hace posible BioScan IA. "
            "Descubierta en mil setecientos sesenta y refinada durante doscientos anos, "
            "la Ley de Beer-Lambert describe como la luz se absorbe en materiales. "
            "Aplicada a la piel, permite medir concentraciones de oxigeno en sangre. "
            "Es la misma fisica que usan los oximetros hospitalarios. "
            "BioScan IA la lleva a tu celular. "
            "Setenta y nueve parametros. Score de cero a cien. Reporte PDF. Asistente IA. "
            "Fisica real. Salud real. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "164", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Pago con Stripe. El sistema que usa Amazon, Google y Shopify. "
            "BioScan IA no maneja tu informacion de pago. Todo lo hace Stripe. "
            "El procesador de pagos mas seguro y confiable del mundo. "
            "El mismo que usan las empresas mas grandes del planeta. "
            "Tu dinero y tus datos estan seguros. "
            "Setenta y nueve parametros. Score de cero a cien. Reporte PDF. Asistente IA. "
            "Pago seguro con Stripe. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "165", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Cien por ciento garantia de devolucion. Sin preguntas. Sin excusas. "
            "Si no estas satisfecho con BioScan IA, "
            "devolvemos tu cinco dolares sin preguntas. "
            "Eso es lo confiados que estamos en el producto. "
            "No tienes nada que perder. "
            "Y tienes setenta y nueve parametros de informacion de salud que ganar. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Sin riesgo. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "166", "voz": "es-MX-JorgeNeural",
        "texto": (
            "NHANES: el estudio de salud mas grande y riguroso de la historia de Estados Unidos. "
            "National Health and Nutrition Examination Survey. Desde mil novecientos sesenta. "
            "Miles de adultos. Sangre, orina, examenes fisicos. "
            "Los datos mas confiables sobre salud humana adulta que existen. "
            "Los algoritmos de BioScan IA fueron entrenados en esos datos. "
            "Por cinco dolares. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Decadas de ciencia. En tu celular. bioscanpro punto net."
        )
    },
    {
        "n": "167", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Los oximetros de pulso salvaron millones de vidas. "
            "BioScan IA usa la misma tecnologia. "
            "La oximetria de pulso fue inventada en los anos setenta "
            "y hoy es equipo estandar en cada hospital del mundo. "
            "BioScan IA aplica ese mismo principio de fotopletismografia en la camara de tu celular "
            "para medir SpO2, frecuencia cardiaca "
            "y derivar setenta y siete parametros adicionales. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Tecnologia hospitalaria. En tu bolsillo. bioscanpro punto net."
        )
    },
    {
        "n": "168", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "BioScan IA no promete curas. Promete datos reales y confiables. "
            "No somos una app de bienestar con afirmaciones vagas. "
            "Somos un analizador de salud basado en oximetria real, "
            "la Ley de Beer-Lambert y datos CDC. "
            "Setenta y nueve parametros calculados con metodologia publicada y transparente. "
            "Datos reales. Sin exageraciones. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Datos, no promesas. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "169", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Trescientos treinta y dos analisis completados. "
            "Trescientos treinta y dos reportes reales. "
            "Trescientos treinta y dos personas informadas. "
            "Cada analisis de BioScan IA genera datos reales para una persona real. "
            "Trescientos treinta y dos veces se ha repetido ese proceso con resultados confiables. "
            "No es un demo. No es una promesa. Es un track record de datos reales. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Unete a los trescientos treinta y dos. "
            "Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "170", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Publicamos nuestra metodologia. "
            "Explica exactamente como calculamos cada parametro. "
            "La mayoria de las apps de salud son cajas negras. "
            "BioScan IA documenta su metodologia: "
            "fuentes cientificas, formulas utilizadas, limitaciones honestamente reconocidas. "
            "Si quieres entender como funciona, puedes. "
            "Eso es integridad cientifica. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Ciencia transparente. Cinco dolares. bioscanpro punto net."
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
    print("\n// durationInFrames para batch17-data.ts:")
    for n, dur, frames in sorted(results):
        print(f"//  {n}: {dur:.1f}s x30 + 60 = {frames} frames")

if __name__ == "__main__":
    asyncio.run(main())
