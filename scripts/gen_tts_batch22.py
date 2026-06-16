"""
gen_tts_batch22.py -- Genera audios TTS para copies 211-220 usando Edge TTS.
Categoria: Historias de Transformacion (cont.)
Salida: public/audio/bioscan-211.mp3 ... bioscan-220.mp3
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
        "n": "211", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Como mujer, siempre puse la salud de mi familia antes que la mia. BioScan IA cambio eso. "
            "Por primera vez, tuve datos reales de mi propia salud. "
            "No la de mis hijos, ni la de mi esposo. La mia. "
            "Setenta y nueve parametros que me dijeron como estaba yo. "
            "Fue liberador. Y me motivo a cuidarme de verdad. "
            "Tu salud tambien importa. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "212", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Trabajaba dieciseis horas al dia. Mi score BioScan era cuarenta y siete. Tuve que elegir. "
            "Los emprendedores sacrificamos todo por el negocio. "
            "Pero sin salud, no hay negocio. "
            "Mi score de cuarenta y siete fue el wake-up call que necesitaba. "
            "Reorganice prioridades. Hoy el negocio va bien y mi score es setenta y cuatro. "
            "La salud ES el negocio. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "213", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Deje de fumar hace tres meses. BioScan IA me muestra como mis pulmones se recuperan. "
            "Ver la SpO2 mejorar de noventa y cuatro a noventa y siete en tres meses de no fumar "
            "es el mejor motivador para no volver. "
            "Los setenta y nueve parametros de BioScan IA me muestran la recuperacion en tiempo real. "
            "No solo siento que respiro mejor: lo veo en datos. "
            "Ve tu recuperacion en datos. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "214", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Soy diabetico tipo 2. BioScan IA es parte de mi protocolo de monitoreo. "
            "No reemplaza mi glucometro. Lo complementa. "
            "La glucosa estimada de BioScan IA mas otros marcadores metabolicos "
            "me dan una vision mas completa entre mis analisis de laboratorio. "
            "Mi endocrinologo aprueba la herramienta. "
            "Monitoreo complementario. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "215", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "La presion arterial estimada de BioScan IA marco ciento cuarenta y cinco sobre noventa y dos. "
            "Fui al medico. Ciento cuarenta y ocho sobre noventa y cuatro: confirmado. "
            "No lo sabia. No tenia sintomas claros. "
            "BioScan IA detecto el patron en la estimacion de presion arterial. "
            "Confirme hipertension estadio uno. Empece tratamiento. "
            "Sin BioScan IA, quizas lo hubiera descubierto despues de un evento mas serio. "
            "Detecta lo que no ves. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "216", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "A los veintiocho anos pensaba que la salud era para los viejitos. BioScan IA me cambio la mente. "
            "Mi score inicial era sesenta y seis. Siendo joven, esperaba mas. "
            "El reporte mostro estres cronico, sueno deficiente y sedentarismo en mis parametros. "
            "Cambie. Ahora a los veintinueve tengo score ochenta y dos. "
            "La salud no tiene edad minima. "
            "Empieza joven. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "217", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "El COVID arruino mis habitos. BioScan IA me ayudo a reconstruirlos. "
            "Pandemia: sedentarismo, comida chatarra, ansiedad. Mi cuerpo lo acuso. "
            "Score post-pandemia: cincuenta y dos. "
            "Con BioScan IA como guia mensual, en diez meses recupere el setenta y uno. "
            "Los datos me mantuvieron honesto conmigo mismo. "
            "Reconstruye con datos. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "218", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Despues de una lesion, BioScan IA me guio en la vuelta al deporte. "
            "Cirugia de rodilla. Seis meses de rehabilitacion. "
            "BioScan IA me ayudo a monitorear que mi salud sistemica se mantenia durante el proceso. "
            "SpO2, cardiovascular, estres. "
            "Volvi al deporte con datos que confirmaron que estaba listo. "
            "Recuperacion inteligente. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "219", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Mi esposa y yo hacemos el analisis juntos cada mes. Competimos sanamente. "
            "Empezamos con scores similares: ella sesenta y ocho, yo sesenta y cinco. "
            "Hoy ella tiene setenta y nueve y yo setenta y seis. "
            "Ha sido una competencia divertida y saludable. "
            "Compartir el proceso nos motivo a ambos a cuidarnos mas. "
            "El pack familiar de dieciocho dolares fue la mejor decision que tomamos juntos. "
            "Cuidense juntos. bioscanpro punto net. Dieciocho dolares."
        )
    },
    {
        "n": "220", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Trabajo en turno de noche. Siempre pense que mi salud estaba comprometida. "
            "BioScan IA confirmo mis sospechas y me ayudo a mitigarlas. "
            "Turno nocturno: ritmo circadiano alterado, sueno deficiente, estres aumentado. "
            "Mi score inicial era cincuenta y cuatro. "
            "Con ajustes especificos para mi estilo de vida nocturno, llegue a sesenta y ocho. "
            "BioScan IA personalizo las recomendaciones para mi situacion real. "
            "Salud para tu estilo de vida real. bioscanpro punto net."
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
    print("\n// durationInFrames para batch22-data.ts:")
    for n, dur, frames in sorted(results):
        print(f"//  {n}: {dur:.1f}s x30 + 60 = {frames} frames")

if __name__ == "__main__":
    asyncio.run(main())
