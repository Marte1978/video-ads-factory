"""
gen_tts_batch03.py -- Genera audios TTS para copies 021-030 usando Edge TTS.
Categoria: Precio / Acceso Economico
Salida: public/audio/bioscan-021.mp3 ... bioscan-030.mp3
"""
import asyncio, sys, os, json, subprocess
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
        "n": "021", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Te cobran trescientos dolares por hacerte un analisis de sangre en la clinica. "
            "Trescientos dolares por agujas, formularios, sala de espera y resultados que llegan dias despues. "
            "Y muchas veces el resultado dice: todo normal. "
            "BioScan IA analiza setenta y nueve parametros de salud en noventa segundos por cinco dolares. "
            "Sin agujas. Sin desplazamientos. Sin sorpresas en la factura. "
            "Presion arterial estimada. Frecuencia cardiaca. Saturacion de oxigeno. Glucosa estimada. "
            "Riesgo cardiovascular segun el modelo PREVENT 2023 de la American Heart Association. "
            "Todo validado con la base de datos NHANES del CDC, cinco mil ochocientos adultos reales. "
            "Reporte PDF completo descargable en segundos. "
            "Asistente de inteligencia artificial que te explica cada resultado en lenguaje claro. "
            "Score de salud de cero a cien. "
            "El chequeo que cualquiera puede pagar. Hoy. bioscanpro punto net."
        )
    },
    {
        "n": "022", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "La salud no deberia ser un privilegio para quien puede pagarlo. "
            "Pero hoy, en la mayoria de paises, lo es. "
            "Una cita con un especialista: ciento cincuenta dolares. "
            "Examenes de laboratorio: doscientos dolares. "
            "Resonancia magnetica: quinientos dolares o mas. "
            "Millones de personas en America Latina no van al medico porque no pueden costear esos precios. "
            "Y mientras esperan, el dano silencioso sigue acumulandose. "
            "BioScan IA existe para cambiar eso. "
            "Cinco dolares. Setenta y nueve indicadores de salud. Trece sistemas corporales analizados. "
            "Reporte PDF completo. Asistente de inteligencia artificial personalizado. "
            "Todo desde la camara de tu celular. Sin clinica. Sin discriminacion de precio. "
            "Porque todos merecen saber como estan. "
            "Salud para todos. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "023", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Por el precio de un cafe conoces tu estado de salud completo. "
            "Cinco dolares. Eso es exactamente lo que cuesta BioScan IA. "
            "Menos que un cafe en cualquier cadena de cafeteria. "
            "Menos que un refresco en un restaurante. "
            "Menos que el parqueo en un centro comercial. "
            "Y a cambio: setenta y nueve indicadores de salud analizados en noventa segundos. "
            "Reporte PDF descargable que puedes compartir con tu medico. "
            "Score de salud de cero a cien para que sepas exactamente donde estas. "
            "Asistente de inteligencia artificial que te explica cada resultado sin terminos medicos. "
            "Tecnologia de oximetria avanzada basada en la ley Beer-Lambert. "
            "Validado con datos reales del CDC y el algoritmo cardiaco de la American Heart Association. "
            "La mejor inversion de cinco dolares que puedes hacer hoy. "
            "bioscanpro punto net."
        )
    },
    {
        "n": "024", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Cinco dolares por setenta y nueve indicadores de salud. "
            "Si. Y esta respaldado por la ciencia mas rigurosa disponible. "
            "No es magia. Es tecnologia de oximetria avanzada "
            "basada en la ley de Beer-Lambert, los mismos principios fisicos "
            "que usan los pulsioximetros medicos en hospitales y clinicas del mundo. "
            "Calibrado con la base de datos NHANES del CDC, "
            "cinco mil ochocientos cincuenta y seis adultos reales estudiados longitudinalmente. "
            "Riesgo cardiovascular calculado con el modelo PREVENT 2023 "
            "de la American Heart Association, el mismo estandar que usan los cardiologos. "
            "El resultado: un analisis de salud de precision medica "
            "disponible para cualquier persona con un celular y cinco dolares. "
            "Sin agujas. Sin clinica. Sin lista de espera. "
            "Compruebalo tu mismo. bioscanpro punto net."
        )
    },
    {
        "n": "025", "voz": "es-MX-JorgeNeural",
        "texto": (
            "El ano pasado gastaste cero dolares en conocer tu salud. "
            "No porque no quisieras. "
            "Sino porque era caro. Porque era complicado. "
            "Porque habia que sacar cita con semanas de anticipacion. "
            "Porque el laboratorio quedaba lejos. "
            "Porque los resultados tardaban dias. "
            "Porque cada visita al medico significaba perderse horas de trabajo. "
            "BioScan IA elimina todas esas barreras de una sola vez. "
            "Cinco dolares. Noventa segundos. Desde tu celular. Desde donde estes. "
            "Sin citas. Sin desplazamientos. Sin agujas. Sin espera. "
            "Setenta y nueve indicadores de salud. Trece sistemas analizados. "
            "Reporte PDF listo en segundos. Asistente de inteligencia artificial incluido. "
            "Ya no hay excusa. bioscanpro punto net."
        )
    },
    {
        "n": "026", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Antes: doscientos dolares en examenes de laboratorio, cuatro dias de espera, diez parametros analizados. "
            "Ahora: cinco dolares con BioScan IA, noventa segundos, setenta y nueve parametros analizados. "
            "El laboratorio tradicional tardaba dias en darte resultados. "
            "BioScan IA los entrega en tiempo real. "
            "El laboratorio analizaba diez o quince parametros en sangre. "
            "BioScan IA analiza setenta y nueve desde la camara de tu celular. "
            "La diferencia de precio: cuarenta veces mas barato. "
            "La diferencia de velocidad: dias versus noventa segundos. "
            "La diferencia de comodidad: clinica versus tu propio hogar. "
            "Tecnologia de oximetria avanzada. Datos del CDC. Algoritmo cardiaco AHA PREVENT 2023. "
            "Cambia la ecuacion. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "027", "voz": "es-ES-AlvaroNeural",
        "texto": (
            "Le dijeron que el analisis costaba cuatrocientos dolares. "
            "No tenia el dinero. Espero. "
            "Tres meses despues llego a urgencias con una crisis hipertensiva. "
            "Esperar en salud tiene consecuencias reales. "
            "Y no es culpa de quien no puede pagar. "
            "Es culpa de un sistema que convirtio la informacion de salud en un lujo. "
            "Millones de personas en America Latina no se chequean porque no pueden pagar. "
            "BioScan IA existe precisamente para esas personas. "
            "Cinco dolares por un analisis completo de setenta y nueve parametros de salud. "
            "Reporte PDF descargable. Asistente de inteligencia artificial personalizado. "
            "Score de salud de cero a cien. "
            "Acceso real a informacion de salud real. Sin barreras economicas. "
            "Porque todos merecen saber como estan. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "028", "voz": "es-CL-LorenzoNeural",
        "texto": (
            "Cuanto vale saber que estas bien. "
            "Esa tranquilidad de llegar a casa sabiendo que tu corazon esta funcionando bien. "
            "Que tu presion arterial esta en rango. "
            "Que tu saturacion de oxigeno es optima. "
            "Que tu riesgo cardiovascular a diez anos es bajo. "
            "Esa paz mental no tiene precio. "
            "Pero el analisis si: cinco dolares. "
            "BioScan IA te da tranquilidad respaldada por datos reales. "
            "Setenta y nueve indicadores de salud analizados en noventa segundos. "
            "Score de salud de cero a cien para que sepas exactamente donde estas. "
            "Reporte PDF descargable listo al instante. "
            "Asistente de inteligencia artificial que te explica cada resultado sin terminos medicos. "
            "Garantia total de devolucion si no estas satisfecho. "
            "Compra tranquilidad. Cinco dolares. bioscanpro punto net."
        )
    },
    {
        "n": "029", "voz": "es-MX-JorgeNeural",
        "texto": (
            "Si te chequeas con BioScan IA una vez al mes, gastas sesenta dolares al ano en tu salud. "
            "En una clinica privada, un chequeo mensual costaria tres mil seiscientos dolares al ano. "
            "La diferencia: tres mil quinientos cuarenta dolares ahorrados. "
            "Con BioScan IA tienes doce analisis completos al ano. "
            "Novecientos cuarenta y ocho indicadores de salud revisados a lo largo del ano. "
            "Seguimiento de tu progreso mes a mes. "
            "Asistente de inteligencia artificial disponible en cada revision. "
            "Todo por sesenta dolares al ano. "
            "Menos que una cena en restaurante. "
            "Menos que una subscripcion de streaming. "
            "La mejor inversion en salud que puedes hacer. "
            "Setenta y nueve indicadores. Noventa segundos. Desde tu celular. "
            "Invierte inteligente. bioscanpro punto net."
        )
    },
    {
        "n": "030", "voz": "es-CO-GonzaloNeural",
        "texto": (
            "Un taxi cuesta mas que esto. "
            "Un cafe con leche en la manana: cinco dolares. "
            "Una llamada de Uber al trabajo: ocho dolares. "
            "Un combo de comida rapida: diez dolares. "
            "Un analisis completo de salud con BioScan IA: cinco dolares. "
            "Setenta y nueve parametros de salud analizados en noventa segundos. "
            "Riesgo cardiovascular calculado con el modelo PREVENT 2023 de la American Heart Association. "
            "Presion arterial estimada, glucosa estimada, saturacion de oxigeno, frecuencia cardiaca. "
            "Reporte PDF descargable al instante. "
            "Asistente de inteligencia artificial que te explica todo. "
            "Score de salud de cero a cien. "
            "Garantia total de devolucion incluida. "
            "Es la decision mas obvia que puedes tomar hoy. "
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
    print("\n// durationInFrames para batch03-data.ts:")
    for n, dur, frames in sorted(results):
        print(f"//  {n}: {dur:.1f}s x30 + 60 = {frames} frames")

if __name__ == "__main__":
    asyncio.run(main())
