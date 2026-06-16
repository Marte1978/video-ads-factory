---
name: bioscan-batch
description: Produce un batch de 10 videos publicitarios para BioScan IA usando Remotion + Edge TTS. Activa cuando el usuario pide "hacer el batch", "producir videos bioscan", "siguiente batch", "batch 02", o cualquier variacion de produccion de videos BioScan. Orquesta TTS → render → entrega en D:\500 videos bioscan\.
---

# Skill: /bioscan-batch — Produccion de Videos BioScan IA

Genera un batch de 10 video ads (1080x1920, 30fps) para BioScan IA desde guion neuromarketing hasta MP4 final.

## Cuándo activar

- "hacer el batch [NN]"
- "producir videos bioscan"
- "siguiente batch de bioscan"
- "batch 02", "batch 03", etc.
- "generar 10 videos bioscan"
- "continuar con los 500 videos"

---

## Arquitectura del sistema

```
video-ads-factory/
├── src/compositions/bioscan/
│   ├── BioScanProAd.tsx        ← Componente Remotion principal
│   ├── bioscan-themes.ts       ← 10 paletas de color
│   ├── batch01-data.ts         ← Configs batch 01 (modelo a seguir)
│   └── batchNN-data.ts         ← Crear para cada nuevo batch
├── scripts/
│   ├── gen_tts_batch01.py      ← Genera MP3 con Edge TTS (modelo)
│   └── render_batch01.py       ← Render + copia a destino (modelo)
├── public/audio/               ← bioscan-001.mp3 ... bioscan-NNN.mp3
└── public/videos/bioscan/      ← Fondos de video
    ├── bioscan-bg-v1.mp4
    ├── bioscan-bg-v2.mp4
    ├── bioscan-bg-v3.mp4
    └── bioscan-bg-v5.mp4
```

**Salida final:** `D:\500 videos bioscan\{NNN}_bioscan_{voz}.mp4`

---

## Proceso obligatorio paso a paso

### Paso 1 — Identificar el batch

Determinar qué batch sigue:
- Ver `D:\500 videos bioscan\_progreso.txt`
- Batch 01 = copies 001-010 (COMPLETADO)
- Batch 02 = copies 011-020 (siguiente)
- Patrón: batch NN = copies (NN-1)*10+1 a NN*10

### Paso 2 — Leer las copies del batch

Las 500 copies están en:
`D:\dev\webfactory\video-ads-factory\scripts\bioscan_copies\`

Leer las 10 copies del batch correspondiente. Si no existen, generarlas siguiendo el patrón de escritura neuromarketing:
- Framework: PAS / AIDA / FAB / BAB / HSO — rotar entre los 10
- Longitud objetivo: 150-165 palabras → ~62-75 segundos de audio
- Incluir: estadísticas OMS/CDC/AHA, historia personal, objeción → solución, CTA fuerte
- Terminar siempre con: "bioscanpro punto net"

### Paso 3 — Asignar visuales (sin repetir entre batches)

| Elemento | Rotación |
|----------|---------|
| Tema de color | 10 únicos: cyan, purple, orange, green, red, gold, teal, indigo, blue, rose |
| Hook style | spring → slide → zoom (cíclico) |
| Fondo de video | v1 → v2 → v3 → v5 → v1... |
| Voz | GonzaloNeural → JorgeNeural → AlvaroNeural → LorenzoNeural (rotar) |

**Regla:** dentro de un batch los 10 videos deben tener todos los temas distintos.

### Paso 4 — Crear los 3 archivos del batch

#### 4a. `scripts/gen_tts_batchNN.py`
Copiar de `gen_tts_batch01.py`, actualizar:
- Números: 011-020 (o el rango del batch)
- Textos completos en COPIES[]
- Voces asignadas por video

Parámetros Edge TTS: `rate="+5%"` — no cambiar

#### 4b. `src/compositions/bioscan/batchNN-data.ts`
Copiar de `batch01-data.ts`, actualizar:
- Números de copy (011-020)
- `audioFile`: `"audio/bioscan-NNN.mp3"`
- `bgVideo`: según rotación de fondos
- `themeName`: color asignado
- `hookStyle`: spring/slide/zoom
- `durationInFrames`: calcular DESPUÉS de generar el audio

**Fórmula durationInFrames:**
```python
import subprocess
result = subprocess.run(
    ['ffprobe', '-v', 'quiet', '-print_format', 'json', '-show_streams', audio_path],
    capture_output=True, text=True
)
duration_s = float(json.loads(result.stdout)['streams'][0]['duration'])
duration_frames = int(duration_s * 30) + 60  # +60 = 2s de tail
```

#### 4c. `scripts/render_batchNN.py`
Copiar de `render_batch01.py`, actualizar:
- Lista VIDEOS[] con los 10 del batch
- Composición IDs: BioScan011...020

#### 4d. Registrar en `src/index.tsx`
Agregar import del nuevo batch y mapeo de composiciones (seguir patrón de batch01).

### Paso 5 — Ejecutar el pipeline

```powershell
# 1. Generar audios TTS
py scripts/gen_tts_batchNN.py

# 2. Verificar duración de cada audio con ffprobe
#    y actualizar durationInFrames en batchNN-data.ts

# 3. Render
py scripts/render_batchNN.py
```

El render script hace:
- Gate 1: Verifica que existan los 10 MP3
- Gate 2: TypeScript check (npx tsc --noEmit)
- Gate 3: Render uno a uno con npx remotion render
  - `--concurrency=2` (estable para esta GPU)
  - `--browser-executable` Chrome local
- Copia a `D:\500 videos bioscan\{NNN}_bioscan_{voz}.mp4`
- Log en `_progreso.txt`

### Paso 6 — Verificar y entregar

```powershell
# Verificar duración real de los MP4
foreach ($f in Get-ChildItem "D:\500 videos bioscan\0NN_*") {
    ffprobe -v quiet -show_entries format=duration -of csv=p=0 $f.FullName
}
```

Enviar el primero y el último a Telegram como muestra.

### Paso 7 — Actualizar tracking

1. Actualizar `D:\500 videos bioscan\_progreso.txt` con el batch completado
2. Actualizar HTML tracker: `D:\Descargas\bioscan-500-copies.html`
3. Actualizar memoria `project_500_videos_bioscan.md`

---

## Parámetros técnicos fijos

| Parámetro | Valor |
|-----------|-------|
| Resolución | 1080x1920 (vertical) |
| FPS | 30 |
| Tail | +60 frames (2s) después del audio |
| Concurrency | 2 (no subir — GPU GTX 1070 8GB) |
| Chrome | `C:\Users\ADMIN\AppData\Local\remotion\chrome-headless-shell-win64\chrome-headless-shell.exe` |
| NPX | `npx.cmd` en Windows |
| Edge TTS rate | `+5%` |

---

## Escenas disponibles en BioScanProAd.tsx

| Tipo | Uso |
|------|-----|
| `hook` | Gancho inicial — pregunta o estadística impactante |
| `problem` | Agitación del problema — lo que pasa sin saberlo |
| `list` | Lista de sistemas/síntomas — con emojis y subtítulo |
| `compare` | Antes vs después / Lo que ves vs lo que detecta |
| `solution` | Stats de la solución (79 indicadores, 13 sistemas, 90s) |
| `proof` | Credibilidad — CDC, AHA PREVENT 2023, NHANES 5,856 |
| `cta` | Llamado a la acción — precio $5 USD |
| `url` | Pantalla final con bioscanpro.net |

---

## Voces disponibles (Edge TTS — gratis)

| Voz | Acento | Perfil |
|-----|--------|--------|
| `es-CO-GonzaloNeural` | Colombiano | Tono médico/serio — preferida |
| `es-MX-JorgeNeural` | Mexicano | Neutro universal |
| `es-ES-AlvaroNeural` | Español | Formal/corporativo |
| `es-CL-LorenzoNeural` | Chileno | Directo/urgente |

---

## Errores conocidos y sus fixes

| Error | Fix |
|-------|-----|
| `UnicodeEncodeError` con ✓/✗ en Windows | Usar `[OK]` y `[X]` — cp1252 no soporta esos chars |
| Encoding corrupto en .ts con PowerShell | NUNCA usar `Set-Content` — usar Write tool de Claude |
| Audio muy corto (22-32s en video 60s) | Guiones deben tener 150-165 palabras → 62-75s |
| `shallow update not allowed` en GitLab | `git fetch --unshallow` antes del push |
| Render falla sin Chrome | Especificar `--browser-executable` en el comando |

---

## Estado de producción

| Batch | Copies | Estado | Videos |
|-------|--------|--------|--------|
| Batch 01 | 001-010 | COMPLETADO 2026-06-15 | `D:\500 videos bioscan\` |
| Batch 02 | 011-020 | Pendiente | — |
| Batch 03-50 | 021-500 | Pendiente | — |

**Meta:** 500 videos totales — 50 batches de 10.
