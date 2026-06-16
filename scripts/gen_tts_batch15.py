"""
gen_tts_batch15.py -- Genera audios TTS para copies 141-150 usando Edge TTS.
Categoria: Comparaciones Directas
Salida: public/audio/bioscan-141.mp3 ... bioscan-150.mp3
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
        "n": "141", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Clinica privada: trescientos dolares. BioScan IA: cinco dolares. Que eliges. "
            "No es trampa. No hay letra pequena. "
            "BioScan IA analiza setenta y nueve parametros de salud en noventa segundos por cinco dolares. "
            "La clinica privada te cobra trescientos dolares por analisis mas completos, si. "
            "Pero para una evaluacion de estado general, "
            "BioScan IA gana en precio, velocidad y accesibilidad. "
            "Setenta y nueve parametros. Score de cero a cien. Reporte PDF. Asistente IA. "
            "Elige inteligente. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "142", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Tu chequeo de rutina analiza cinco o diez cosas. BioScan IA analiza setenta y nueve. "
            "Presion, peso, talla. Eso es el chequeo basico. "
            "BioScan IA analiza ademas SpO2, frecuencia cardiaca, "
            "variabilidad HRV, glucosa estimada, riesgo cardiovascular, "
            "funcion renal estimada y setenta y dos parametros mas. "
            "Por cinco dolares. "
            "Calibrado con datos del CDC. Algoritmo AHA PREVENT dos mil veintitres. "
            "Mas informacion. Menos costo. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "143", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Clinica: cuatro horas. BioScan IA: noventa segundos. "
            "El camino a la clinica incluye: sacar cita, dias de espera, "
            "ir hasta la clinica, treinta o sesenta minutos, "
            "sala de espera, una o dos horas, consulta, quince o veinte minutos. "
            "Total: medio dia. "
            "BioScan IA: abres la web, pagas cinco dolares, pones el dedo, "
            "noventa segundos, reporte listo. "
            "Setenta y nueve parametros. Score de cero a cien. Reporte PDF. Asistente IA. "
            "Tu tiempo vale. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "144", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Apple Watch: cuatrocientos dolares. BioScan IA: cinco dolares. Los dos miden SpO2. "
            "El Apple Watch mide SpO2 entre otras cosas. "
            "BioScan IA mide SpO2 mas setenta y ocho parametros adicionales. "
            "Por cinco dolares en lugar de cuatrocientos. "
            "Sin suscripcion. Sin gadget extra. "
            "Solo tu celular y noventa segundos. "
            "Mas parametros por mucho menos dinero. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Mas por menos. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "145", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Laboratorio: tres dias de espera. BioScan IA: resultado inmediato. "
            "Das la muestra. Esperas. Recoges el papel. "
            "Vas al medico a interpretarlo. "
            "BioScan IA: noventa segundos, resultado en pantalla, "
            "reporte PDF por correo, asistente IA que te explica todo. "
            "Sin esperas. Sin papeleria. Sin interpretacion confusa. "
            "Setenta y nueve parametros. Score de cero a cien. Reporte PDF. Asistente IA. "
            "Resultados ahora. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "146", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Medicina tradicional: espera a que algo duela. "
            "BioScan IA: detecta antes del dolor. "
            "El sistema medico actual esta disenado para tratar, no prevenir. "
            "BioScan IA invierte esa ecuacion. "
            "Setenta y nueve parametros que detectan senales de riesgo "
            "antes de que aparezcan sintomas. "
            "Preventivo. Proactivo. Calibrado CDC. Algoritmo AHA PREVENT dos mil veintitres. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Del tratamiento a la prevencion. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "147", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Un glucometro mide un parametro. BioScan IA mide setenta y nueve. Sin pinchar el dedo. "
            "El glucometro es util pero limitado. Y duele. "
            "BioScan IA incluye glucosa estimada entre sus setenta y nueve parametros. "
            "Completamente indoloro. Sin lanceta. Solo la camara del celular. "
            "Para personas que monitorean glucosa, "
            "es una alternativa complementaria y mas completa. "
            "Setenta y nueve parametros. Score de cero a cien. Reporte PDF. Asistente IA. "
            "Setenta y nueve en lugar de uno. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "148", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Esas apps de salud que cuentan pasos y miden sueno no miden esto. "
            "Calorias, pasos, sueno. Eso ya lo hace tu celular gratis. "
            "BioScan IA mide lo que ninguna app gratuita puede: "
            "SpO2 real, riesgo cardiovascular clinico, funcion renal estimada, "
            "parametros hormonales y setenta y cuatro indicadores mas. "
            "La diferencia entre datos superficiales y datos medicamente relevantes. "
            "Calibrado CDC. Algoritmo AHA PREVENT dos mil veintitres. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Datos que importan. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "149", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Telemedicina: treinta a ochenta dolares por consulta. "
            "BioScan IA: cinco dolares por setenta y nueve parametros. "
            "La telemedicina es genial, para cuando ya sabes que algo falla. "
            "BioScan IA es tu primer filtro. "
            "Analiza setenta y nueve parametros en noventa segundos "
            "y te dice si necesitas esa consulta o si puedes esperar. "
            "Ahorra tiempo y dinero con la secuencia correcta. "
            "Score de cero a cien. Reporte PDF. Asistente IA. "
            "Primero BioScan, luego si hace falta, medico. "
            "Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "150", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Tu seguro medico te cobra cien dolares al mes. BioScan IA: cinco dolares por analisis. "
            "El seguro medico cubre emergencias. "
            "BioScan IA cubre la prevencion diaria. "
            "No son competidores, son complementos. "
            "Pero si tienes que elegir entre saber como estas hoy por cinco dolares "
            "o no saberlo, la respuesta es obvia. "
            "Setenta y nueve parametros. Score de cero a cien. Reporte PDF. Asistente IA. "
            "La prevencion mas economica. Cinco dolares. bioscanpro punto net."
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
    print("\n// durationInFrames para batch15-data.ts:")
    for n, dur, frames in sorted(results):
        print(f"//  {n}: {dur:.1f}s x30 + 60 = {frames} frames")

if __name__ == "__main__":
    asyncio.run(main())
