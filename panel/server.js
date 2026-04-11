/**
 * panel/server.js
 * Admin panel server — Video Ads Factory
 * Puerto: 3003
 */

const express = require('express')
const { execSync, spawn } = require('child_process')
const fs   = require('fs')
const path = require('path')
const https = require('https')

const app  = express()
const PORT = process.env.PORT || 3003

const ROOT       = path.join(__dirname, '..')
const BRAND_KITS = path.join(__dirname, 'brand-kits')
const AUDIO_DIR  = path.join(ROOT, 'public', 'audio')
const PREVIEW_DIR = path.join(ROOT, 'public', 'preview')
const OUT_DIR    = path.join(ROOT, 'out')

// Asegurar directorios necesarios
;[AUDIO_DIR, PREVIEW_DIR, OUT_DIR].forEach(d => fs.mkdirSync(d, { recursive: true }))

app.use(express.json())
app.use('/preview', express.static(PREVIEW_DIR))
app.use('/audio',   express.static(AUDIO_DIR))

// Jobs de render en memoria
const jobs = new Map()

// ─── GET / ──────────────────────────────────────────────────────────────────
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

// ─── GET /brand-kits ────────────────────────────────────────────────────────
app.get('/brand-kits', (req, res) => {
  try {
    const files = fs.existsSync(BRAND_KITS)
      ? fs.readdirSync(BRAND_KITS).filter(f => f.endsWith('.json'))
      : []

    const kits = files.map(f => {
      try {
        const raw = fs.readFileSync(path.join(BRAND_KITS, f), 'utf8')
        return { name: f.replace('.json', ''), data: JSON.parse(raw) }
      } catch {
        return { name: f.replace('.json', ''), data: {} }
      }
    })

    res.json(kits)
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message })
  }
})

// ─── POST /generate-audio ───────────────────────────────────────────────────
app.post('/generate-audio', (req, res) => {
  const {
    text,
    voiceId     = 'hHjbwzYZW17oh0p05AKv',
    outputFile
  } = req.body

  if (!text || !outputFile) {
    return res.status(400).json({ ok: false, error: 'text y outputFile son requeridos' })
  }

  const ELEVENLABS_API_KEY = 'sk_44f31ae00a4badd0acec5e0855d665ffff18efae0f09dd6a'
  const OUTPUT_PATH = path.join(AUDIO_DIR, outputFile)

  const requestBody = JSON.stringify({
    text: text.trim(),
    model_id: 'eleven_multilingual_v2',
    voice_settings: {
      stability:        0.55,
      similarity_boost: 0.82,
      style:            0.50,
      use_speaker_boost: true,
    },
  })

  const options = {
    hostname: 'api.elevenlabs.io',
    path:     `/v1/text-to-speech/${voiceId}`,
    method:   'POST',
    headers: {
      'xi-api-key':    ELEVENLABS_API_KEY,
      'Content-Type':  'application/json',
      'Accept':        'audio/mpeg',
      'Content-Length': Buffer.byteLength(requestBody),
    },
  }

  const httpReq = https.request(options, (httpRes) => {
    if (httpRes.statusCode !== 200) {
      let body = ''
      httpRes.on('data', chunk => { body += chunk })
      httpRes.on('end', () => {
        res.status(500).json({ ok: false, error: `ElevenLabs ${httpRes.statusCode}: ${body}` })
      })
      return
    }

    const out = fs.createWriteStream(OUTPUT_PATH)
    httpRes.pipe(out)
    out.on('finish', () => {
      const size = (fs.statSync(OUTPUT_PATH).size / 1024).toFixed(1)
      res.json({ ok: true, file: outputFile, size: `${size} KB` })
    })
    out.on('error', err => {
      res.status(500).json({ ok: false, error: err.message })
    })
  })

  httpReq.on('error', err => {
    res.status(500).json({ ok: false, error: err.message })
  })

  httpReq.write(requestBody)
  httpReq.end()
})

// ─── POST /screenshot ───────────────────────────────────────────────────────
app.post('/screenshot', (req, res) => {
  const { compositionId, frame = 0 } = req.body

  if (!compositionId) {
    return res.status(400).json({ ok: false, error: 'compositionId es requerido' })
  }

  const outputPath = path.join(PREVIEW_DIR, 'preview.png')
  const cmd = `npx remotion still src/index.tsx ${compositionId} --frame=${frame} ${outputPath}`

  try {
    execSync(cmd, { cwd: ROOT, stdio: 'pipe', timeout: 60000 })
    res.json({ ok: true, url: '/preview/preview.png' })
  } catch (err) {
    res.status(500).json({ ok: false, error: err.stderr?.toString() || err.message })
  }
})

// ─── POST /render ────────────────────────────────────────────────────────────
app.post('/render', (req, res) => {
  const {
    compositionId,
    outputFile: rawOutput,
    inputProps
  } = req.body

  if (!compositionId) {
    return res.status(400).json({ ok: false, error: 'compositionId es requerido' })
  }

  const timestamp  = Date.now()
  const jobId      = `job_${timestamp}`
  const outputFile = rawOutput || `out/${compositionId}-${timestamp}.mp4`
  const outputPath = path.join(ROOT, outputFile)

  const args = [
    'remotion', 'render',
    'src/index.tsx',
    compositionId,
    outputPath,
  ]

  if (inputProps) {
    args.push(`--props=${JSON.stringify(inputProps)}`)
  }

  const job = { status: 'running', progress: 0, outputFile, error: null }
  jobs.set(jobId, job)

  const child = spawn('npx', args, {
    cwd: ROOT,
    stdio: ['ignore', 'pipe', 'pipe'],
    shell: true,
  })

  // Extraer progreso de la salida de Remotion
  child.stdout.on('data', data => {
    const line = data.toString()
    // Remotion emite líneas como "Rendering frame 120/390 (30%)"
    const match = line.match(/(\d+)%/)
    if (match) {
      job.progress = Math.min(parseInt(match[1], 10), 99)
    }
  })

  child.stderr.on('data', data => {
    const line = data.toString()
    const match = line.match(/(\d+)%/)
    if (match) {
      job.progress = Math.min(parseInt(match[1], 10), 99)
    }
  })

  child.on('close', code => {
    if (code === 0) {
      job.status   = 'done'
      job.progress = 100
    } else {
      job.status = 'error'
      job.error  = `Remotion salió con código ${code}`
    }
  })

  res.json({ ok: true, jobId })
})

// ─── GET /render-status/:jobId ───────────────────────────────────────────────
app.get('/render-status/:jobId', (req, res) => {
  const job = jobs.get(req.params.jobId)
  if (!job) {
    return res.status(404).json({ ok: false, error: 'Job no encontrado' })
  }
  res.json({
    status:     job.status,
    progress:   job.progress,
    outputFile: job.outputFile,
    error:      job.error,
  })
})

// ─── GET /download/:filename ─────────────────────────────────────────────────
app.get('/download/:filename', (req, res) => {
  const filePath = path.join(OUT_DIR, req.params.filename)
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ ok: false, error: 'Archivo no encontrado' })
  }
  res.download(filePath)
})

// ─── Start ───────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅  Video Ads Factory panel → http://localhost:${PORT}`)
})
