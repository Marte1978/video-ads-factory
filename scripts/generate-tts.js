/**
 * generate-tts.js
 * Script genérico para generar audio con ElevenLabs.
 *
 * Uso con texto directo:
 *   node scripts/generate-tts.js --text "El texto aquí" --output audio/nombre.mp3
 *
 * Uso con archivo de texto:
 *   node scripts/generate-tts.js --file scripts/scripts/vitamax.txt --output audio/vitamax-voice.mp3
 *
 * Opciones adicionales:
 *   --voice  [voice_id]   ID de voz ElevenLabs (default: Gabriela)
 */

const https = require('https')
const fs    = require('fs')
const path  = require('path')

// ── Configuración ──────────────────────────────────────────────────────────────
const ELEVENLABS_API_KEY = 'sk_44f31ae00a4badd0acec5e0855d665ffff18efae0f09dd6a'

// Gabriela — español latinoamericano, femenina, narrativa profesional
const DEFAULT_VOICE_ID = 'hHjbwzYZW17oh0p05AKv'

const VOICE_SETTINGS = {
  stability:         0.55,
  similarity_boost:  0.82,
  style:             0.50,
  use_speaker_boost: true,
}

const OUTPUT_BASE_DIR = path.join(__dirname, '..', 'public')

// ── Parsear argumentos CLI ─────────────────────────────────────────────────────
function parseArgs(argv) {
  const args = {}
  for (let i = 2; i < argv.length; i++) {
    const flag = argv[i]
    if (flag.startsWith('--') && i + 1 < argv.length) {
      const key   = flag.slice(2)
      const value = argv[i + 1]
      if (!value.startsWith('--')) {
        args[key] = value
        i++
      }
    }
  }
  return args
}

// ── Main ───────────────────────────────────────────────────────────────────────
function main() {
  const args = parseArgs(process.argv)

  // Resolver texto
  let text = ''
  if (args.file) {
    const filePath = path.resolve(args.file)
    if (!fs.existsSync(filePath)) {
      console.error('❌  Archivo no encontrado:', filePath)
      process.exit(1)
    }
    text = fs.readFileSync(filePath, 'utf-8').trim()
    console.log('📄  Texto leído desde:', filePath)
  } else if (args.text) {
    text = args.text.trim()
  } else {
    console.error('❌  Debes pasar --text "..." o --file ruta.txt')
    console.error('')
    console.error('Uso:')
    console.error('  node scripts/generate-tts.js --text "Tu texto" --output audio/salida.mp3')
    console.error('  node scripts/generate-tts.js --file scripts/scripts/vitamax.txt --output audio/vitamax-voice.mp3')
    process.exit(1)
  }

  if (!args.output) {
    console.error('❌  Falta --output ruta/nombre.mp3')
    process.exit(1)
  }

  const voiceId    = args.voice || DEFAULT_VOICE_ID
  const outputPath = path.join(OUTPUT_BASE_DIR, args.output)

  // Asegurar que el directorio de salida existe
  const outputDir = path.dirname(outputPath)
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
    console.log('📁  Directorio creado:', outputDir)
  }

  const requestBody = JSON.stringify({
    text,
    model_id: 'eleven_multilingual_v2',
    voice_settings: VOICE_SETTINGS,
  })

  console.log('🎙️  Generando audio con ElevenLabs...')
  console.log('   Voz ID :', voiceId)
  console.log('   Modelo : eleven_multilingual_v2')
  console.log('   Chars  :', text.length)
  console.log('   Output :', outputPath)

  const options = {
    hostname: 'api.elevenlabs.io',
    path:     `/v1/text-to-speech/${voiceId}`,
    method:   'POST',
    headers: {
      'xi-api-key':     ELEVENLABS_API_KEY,
      'Content-Type':   'application/json',
      'Accept':         'audio/mpeg',
      'Content-Length': Buffer.byteLength(requestBody),
    },
  }

  const req = https.request(options, (res) => {
    if (res.statusCode !== 200) {
      let body = ''
      res.on('data', (chunk) => { body += chunk })
      res.on('end', () => {
        console.error('❌  Error ElevenLabs (' + res.statusCode + '):', body)
        process.exit(1)
      })
      return
    }

    const out = fs.createWriteStream(outputPath)
    res.pipe(out)
    out.on('finish', () => {
      const sizeKB = (fs.statSync(outputPath).size / 1024).toFixed(1)
      console.log('✅  Audio generado:', outputPath, '(' + sizeKB + ' KB)')
    })
  })

  req.on('error', (e) => {
    console.error('❌  Request error:', e.message)
    process.exit(1)
  })

  req.write(requestBody)
  req.end()
}

main()
