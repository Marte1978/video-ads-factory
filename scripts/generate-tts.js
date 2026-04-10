/**
 * generate-tts.js
 * Genera el audio del anuncio de Blueberry usando ElevenLabs API.
 * Guión mejorado con pausas naturales y número de teléfono lento.
 *
 * Uso: node scripts/generate-tts.js
 */

const https = require('https')
const fs    = require('fs')
const path  = require('path')

const ELEVENLABS_API_KEY = 'sk_44f31ae00a4badd0acec5e0855d665ffff18efae0f09dd6a'

// ── Voces disponibles en ElevenLabs ────────────────────────────────────────
// Rachel  (en) — elegante, femenina, clara
// Antoni  (en) — masculina, joven, energética
// Domi    (en) — femenina, fuerte
// Bella   (en) — femenina, suave
// Elli    (en) — femenina, emocional
// Josh    (en) — masculina, joven
// Arnold  (en) — masculina, imponente
// Adam    (en) — masculina, narrativa
// Sam     (en) — masculina, ronca
// Liam    (es) — masculina española  (si está disponible en tu plan)
// ─ Para español usa: voice_id de una voz multilingüe o clona tu propia voz

// ── Voz seleccionada ──────────────────────────────────────────────────────
// Gabriela — femenina, español latinoamericano, voz profesional y narrativa
// Es la voz más humana y realista en español disponible en la cuenta.
// Alternativa masculina: Alberto Rodriguez (l1zE9xgNpUTaQCZzpNJa)
const VOICE_ID = 'hHjbwzYZW17oh0p05AKv' // Gabriela - Spanish from Mexico Professional

// Guión mejorado con pausas <break> y número de teléfono lento
// SSML-compatible con ElevenLabs (usa <break time="Xs"/> para pausas)
const SCRIPT = `
¿Buscas el lugar perfecto para una experiencia gastronómica única?

En Blueberry... encontrarás una cocina artesanal inspirada en los sabores del mundo,
preparada con ingredientes frescos y mucho amor.

Desayunos, almuerzos y meriendas... en un ambiente acogedor que te hará sentir en casa.

Ubícanos en el Ensanche Naco, Santo Domingo.

Para reservaciones, llámanos al...

ocho... cero... nueve...

dos... cuatro... siete...

cinco... uno... ocho... cuatro.

Blueberry. Sabor que inspira.
`

const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'audio', 'blueberry-voice.mp3')

const requestBody = JSON.stringify({
  text: SCRIPT.trim(),
  model_id: 'eleven_multilingual_v2',
  voice_settings: {
    stability: 0.65,           // Más estable = más pausado y natural
    similarity_boost: 0.80,
    style: 0.35,               // Algo de estilo expresivo
    use_speaker_boost: true,
  },
})

console.log('🎙️  Generando audio con ElevenLabs...')
console.log('   Voz:', VOICE_ID)
console.log('   Modelo: eleven_multilingual_v2')
console.log('   Output:', OUTPUT_PATH)

const options = {
  hostname: 'api.elevenlabs.io',
  path: `/v1/text-to-speech/${VOICE_ID}`,
  method: 'POST',
  headers: {
    'xi-api-key': ELEVENLABS_API_KEY,
    'Content-Type': 'application/json',
    'Accept': 'audio/mpeg',
    'Content-Length': Buffer.byteLength(requestBody),
  },
}

const req = https.request(options, (res) => {
  if (res.statusCode !== 200) {
    let body = ''
    res.on('data', (chunk) => { body += chunk })
    res.on('end', () => {
      console.error('❌  Error ElevenLabs:', res.statusCode, body)
      process.exit(1)
    })
    return
  }

  const out = fs.createWriteStream(OUTPUT_PATH)
  res.pipe(out)
  out.on('finish', () => {
    const size = (fs.statSync(OUTPUT_PATH).size / 1024).toFixed(1)
    console.log(`✅  Audio generado: ${OUTPUT_PATH} (${size} KB)`)
  })
})

req.on('error', (e) => {
  console.error('❌  Request error:', e.message)
  process.exit(1)
})

req.write(requestBody)
req.end()
