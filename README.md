# Video Ads Factory — WebFactory RD

Generador de video ads con **Remotion** + **ElevenLabs TTS**.

## Setup

```bash
npm install
```

## Generar audio (ElevenLabs)

```bash
npm run tts
```
Genera `public/audio/blueberry-voice.mp3` con la voz **Gabriela** (español latinoamericano, femenina, ultra-realista).

Para cambiar de voz, edita `scripts/generate-tts.js` → cambia `VOICE_ID`:
- `hHjbwzYZW17oh0p05AKv` — Gabriela (español, femenina) ← ACTUAL
- `l1zE9xgNpUTaQCZzpNJa` — Alberto Rodriguez (español, masculina)
- `AWHCBSOYhP792YY91R9B` — WILLY TIRADO nueva (tu voz clonada)

## Ver preview en Remotion Studio

```bash
npm run studio
```
Abre http://localhost:3000

## Renderizar video final

```bash
npm run render:blueberry
```
Output: `out/blueberry-ad.mp4` — 1080×1920 (9:16 Reels/Stories), 13s, 30fps

## Build completo (TTS + render)

```bash
npm run build
```

## Composiciones disponibles

| ID | Tamaño | FPS | Duración | Descripción |
|----|--------|-----|----------|-------------|
| `BlueberryAd` | 1080×1920 | 30 | 13s | Anuncio Blueberry Restaurant |

## Agregar nueva composición

1. Crear carpeta `src/compositions/[cliente]/`
2. Crear `[Cliente]Ad.tsx`
3. Registrar en `src/index.tsx`
4. Agregar script en `scripts/generate-tts.js`
