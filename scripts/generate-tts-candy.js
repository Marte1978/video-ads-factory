/**
 * generate-tts-candy.js
 * Genera el audio del anuncio de Blueberry Candy usando ElevenLabs.
 * Voz: Gabriela — español latinoamericano, femenina, cálida y profesional.
 * Tono: urgente, empático, confiable — ideal para productos de salud.
 */

const https = require('https')
const fs    = require('fs')
const path  = require('path')

const ELEVENLABS_API_KEY = 'sk_44f31ae00a4badd0acec5e0855d665ffff18efae0f09dd6a'

// Gabriela — español latinoamericano, femenina, narrativa profesional
// Perfecta para salud: transmite confianza, calidez y urgencia natural
const VOICE_ID = 'hHjbwzYZW17oh0p05AKv'

const SCRIPT = `
¿Tus ojos están fallando... y tú ni lo sabes?

Vista borrosa. Ojos ardiendo. Dolores de cabeza.
Son señales. No las ignores.

Blueberry Candy — cien por ciento natural,
con arándano, luteína y zeaxantina...
para proteger y reparar tu visión desde adentro.

¡OFERTA! Llévate dos frascos por solo mil novecientos noventa pesos.
Solo treinta y tres pesos al día.
Envío gratis. Pagas cuando recibes.

Solo quedan catorce unidades.
Escríbenos por WhatsApp ahora.
`

const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'audio', 'candy-voice.mp3')

const requestBody = JSON.stringify({
  text: SCRIPT.trim(),
  model_id: 'eleven_multilingual_v2',
  voice_settings: {
    stability: 0.55,          // Menos estable = más expresiva y dinámica para el ad
    similarity_boost: 0.82,
    style: 0.50,              // Estilo expresivo para transmitir urgencia
    use_speaker_boost: true,
  },
})

console.log('🎙️  Generando audio Blueberry Candy...')
console.log('   Voz: Gabriela (español latam, femenina, salud/ads)')
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
