"""
gen_tts_batch12.py -- Genera audios TTS para copies 111-120 usando Edge TTS.
Categoria: FOMO / Prueba Social (cont.)
Salida: public/audio/bioscan-111.mp3 ... bioscan-120.mp3
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
        "n": "111", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Los ejecutivos y atletas de elite monitorizan su salud constantemente. "
            "Ahora tu tambien puedes. "
            "Los CEOs de las empresas mas grandes del mundo tienen medicos personales. "
            "Los deportistas de alto rendimiento tienen monitores de salud "
            "que cuestan diez mil, veinte mil, cien mil dolares. "
            "BioScan IA te da la misma filosofia de monitoreo constante por cinco dolares. "
            "Setenta y nueve parametros de salud en noventa segundos. "
            "El mismo SpO2, la misma variabilidad cardiaca, "
            "el mismo riesgo cardiovascular calculado con AHA PREVENT dos mil veintitres. "
            "El secreto del alto rendimiento, democratizado. "
            "Calibrado con datos del CDC. Score de cero a cien. Reporte PDF. Asistente IA. "
            "Rendimiento de elite. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "112", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Mas de trescientos treinta y dos analisis completados. Cada uno con resultados reales. "
            "Cada analisis en BioScan IA genera datos reales de personas reales. "
            "No simulaciones. No demos. No tests internos. "
            "Trescientas treinta y dos personas reales descubrieron sus setenta y nueve parametros. "
            "Su score de cero a cien. Sus areas de riesgo. Sus puntos fuertes. "
            "Su riesgo cardiovascular calculado con el modelo AHA PREVENT dos mil veintitres. "
            "Calibrado con datos del CDC NHANES. "
            "El siguiente analisis sera el tuyo. "
            "Score de salud. Reporte PDF. Asistente IA. "
            "Se el trescientos treinta y tres. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "113", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Varios medicos ya usan los reportes de BioScan IA "
            "como punto de partida para sus consultas. "
            "Cuando llegas a la consulta medica con un reporte de setenta y nueve parametros, "
            "el medico tiene mas contexto para trabajar. "
            "Sabe tu saturacion de oxigeno real, tu frecuencia cardiaca, "
            "tu presion arterial estimada, tu glucosa estimada, "
            "tu riesgo cardiovascular calculado con AHA PREVENT dos mil veintitres. "
            "Puede hacer mejores preguntas, un seguimiento mas preciso "
            "y darte un diagnostico mas completo. "
            "Muchos profesionales de la salud ya recomiendan BioScan IA a sus pacientes "
            "como herramienta de monitoreo entre citas. "
            "El que usan los medicos. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "114", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Igual que las vacunas, la prevencion funciona mejor "
            "cuando mas gente la adopta. "
            "El concepto de inmunidad de rebano en salud preventiva es real. "
            "Cuando mas personas monitorean su salud activamente, "
            "los sistemas de salud pueden detectar tendencias mas rapido, "
            "asignar recursos mas eficientemente "
            "y mejorar la atencion para todos. "
            "Unete al movimiento de salud preventiva. "
            "BioScan IA: setenta y nueve parametros. Cinco dolares. "
            "Porque tu salud individual contribuye a la salud colectiva. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Se parte del cambio. bioscanpro punto net."
        )
    },
    {
        "n": "115", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "BioScan IA esta trending. Ya sabes por que. "
            "Porque resolvio el problema que nadie habia resuelto antes. "
            "Hacer el chequeo de salud completo accesible para cualquier persona. "
            "Rapido: noventa segundos. Barato: cinco dolares. "
            "Sin clinicas, sin citas, sin esperas, sin batas blancas. "
            "Setenta y nueve parametros reales. "
            "Score de salud de cero a cien. "
            "Reporte PDF descargable. "
            "Asistente de inteligencia artificial que explica cada resultado. "
            "Calibrado con datos CDC. Algoritmo AHA PREVENT dos mil veintitres. "
            "Garantia total de devolucion. "
            "El producto del ano en salud digital. "
            "Descubrelo tu mismo. bioscanpro punto net."
        )
    },
    {
        "n": "116", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Descubri que mi SpO2 era noventa y cuatro por ciento y no me sentia mal. "
            "El medico lo confirmo. "
            "La saturacion de oxigeno por debajo de noventa y cinco por ciento "
            "puede ser senal de problemas respiratorios o cardiovasculares. "
            "Yo no tenia sintomas visibles. No me faltaba el aire. "
            "Pero BioScan IA lo detecto antes de que yo sintiera nada. "
            "Fui al medico con el reporte PDF. Tomaron accion a tiempo. "
            "Ese analisis de cinco dolares pudo haber marcado la diferencia. "
            "Setenta y nueve parametros. SpO2 incluido. "
            "Frecuencia cardiaca. Riesgo cardiovascular AHA. Score de cero a cien. "
            "Detecta lo invisible. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "117", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Mi amigo me pregunto cual era mi score de salud. "
            "No supe que decirle. "
            "Cada vez mas personas tienen su score BioScan. "
            "Hablan de el como hablan de su score de credito o su nivel de glucosa. "
            "Con naturalidad. Con datos reales. Sin dramatismo. "
            "El score de salud BioScan: de cero a cien. "
            "Calculado a partir de setenta y nueve parametros reales. "
            "Calibrado con el CDC. Algoritmo AHA PREVENT dos mil veintitres. "
            "Actualizable cada vez que quieras. Rastreable en el tiempo. "
            "Cual es el tuyo. "
            "Noventa segundos. Cinco dolares. "
            "Conoce tu numero. bioscanpro punto net."
        )
    },
    {
        "n": "118", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Despues de ver mi reporte BioScan, "
            "empiece a dormir mejor, comer mejor y hacer ejercicio regularmente. "
            "Los datos cambian comportamientos. "
            "Antes de BioScan no tenia numeros concretos para motivarme a mejorar. "
            "Sabia que debia comer mejor. Sabia que debia moverme mas. "
            "Pero sin datos concretos, las intenciones se quedan en intenciones. "
            "Ahora veo numeros reales que mejoran o empeoran segun mis habitos. "
            "Mi variabilidad cardiaca. Mi glucosa estimada. Mi score de cero a cien. "
            "Eso es poderoso. Setenta y nueve parametros. "
            "El motivador que necesitabas. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "119", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Tu score de salud es mayor que el de tu pareja. "
            "No es una competencia seria. "
            "Pero comparar resultados con alguien de confianza "
            "puede ser el motivador que necesitas para mejorar. "
            "Con BioScan IA, tu y tu pareja pueden monitorear "
            "sus setenta y nueve parametros juntos y ver quien mejora mas. "
            "El que tiene menor score sabe en que enfocar. "
            "El pack familiar incluye cuatro analisis por dieciocho dolares: "
            "cuatro con cincuenta dolares por persona. "
            "Score de cero a cien por cada uno. Reportes PDF. Asistente IA. "
            "Compite sanamente. Dieciocho dolares. bioscanpro punto net."
        )
    },
    {
        "n": "120", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Mi mejor amigo me dijo que hiciera el analisis. "
            "Le hice caso. No me arrepiento. "
            "Empiece muy esceptico. Pensaba que era otro app de salud generico "
            "con numeros sacados de la nada y diseño colorido. "
            "Pero cuando vi setenta y nueve parametros reales en un reporte PDF detallado, "
            "con metodologia explicada, con datos del CDC citados, "
            "con el algoritmo AHA PREVENT dos mil veintitres implementado, "
            "cambie de opinion completamente. "
            "Mi amigo tenia razon. Y ahora soy yo quien se lo recomienda a todos. "
            "Hazle caso a quien te importa. "
            "Cinco dolares. bioscanpro punto net."
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
    print("\n// durationInFrames para batch12-data.ts:")
    for n, dur, frames in sorted(results):
        print(f"//  {n}: {dur:.1f}s x30 + 60 = {frames} frames")

if __name__ == "__main__":
    asyncio.run(main())
