/**
 * create-ad.js
 * Pipeline completo: JSON brand kit → MP4.
 *
 * Uso:
 *   node scripts/create-ad.js --brand-kit panel/brand-kits/vitamax.json --output Downloads/vitamax-ad.mp4
 *
 * Pasos:
 *   1. Lee el brand kit JSON
 *   2. Si no existe el audioFile, genera audio con ElevenLabs
 *   3. Determina el compositionId del brand kit
 *   4. Llama a npx remotion render
 *   5. Reporta tiempo total
 */

const fs    = require('fs')
const path  = require('path')
const spawn = require('child_process').spawn

// ── Parsear argumentos CLI ─────────────────────────────────────────────────────
function parseArgs(argv) {
  const args = {}
  for (let i = 2; i < argv.length; i++) {
    const flag = argv[i]
    if (flag.startsWith('--') && i + 1 < argv.length) {
      const key   = flag.slice(2).replace(/-([a-z])/g, (_, c) => c.toUpperCase())
      const value = argv[i + 1]
      if (!value.startsWith('--')) {
        args[key] = value
        i++
      }
    }
  }
  return args
}

// ── Ejecutar comando y mostrar output en tiempo real ──────────────────────────
function runCommand(cmd, cmdArgs, cwd) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, cmdArgs, {
      cwd,
      stdio: 'inherit',
      shell: true,
    })
    child.on('close', (code) => {
      if (code === 0) resolve()
      else reject(new Error('Comando terminó con código ' + code))
    })
    child.on('error', reject)
  })
}

// ── Main ───────────────────────────────────────────────────────────────────────
async function main() {
  const args      = parseArgs(process.argv)
  const startTime = Date.now()

  if (!args.brandKit) {
    console.error('❌  Falta --brand-kit panel/brand-kits/nombre.json')
    process.exit(1)
  }
  if (!args.output) {
    console.error('❌  Falta --output ruta/nombre.mp4')
    process.exit(1)
  }

  const projectRoot  = path.join(__dirname, '..')
  const brandKitPath = path.resolve(args.brandKit)
  const outputPath   = path.resolve(args.output)

  // ── PASO 1: Leer brand kit ─────────────────────────────────────────────────
  console.log('\n📋  PASO 1 — Leyendo brand kit...')
  if (!fs.existsSync(brandKitPath)) {
    console.error('❌  Brand kit no encontrado:', brandKitPath)
    process.exit(1)
  }

  let brandKit
  try {
    brandKit = JSON.parse(fs.readFileSync(brandKitPath, 'utf-8'))
  } catch (e) {
    console.error('❌  Error al parsear JSON:', e.message)
    process.exit(1)
  }

  console.log('   Marca         :', brandKit.brandName)
  console.log('   Producto      :', brandKit.productName)
  console.log('   Composition   :', brandKit.compositionId)

  // ── PASO 2: Verificar / generar audio ──────────────────────────────────────
  console.log('\n🎙️  PASO 2 — Verificando audio...')

  const audioFile    = brandKit.audioFile                        // ej: "audio/vitamax-voice.mp3"
  const audioAbsPath = path.join(projectRoot, 'public', audioFile)

  if (fs.existsSync(audioAbsPath)) {
    const sizeKB = (fs.statSync(audioAbsPath).size / 1024).toFixed(1)
    console.log('   ✅ Audio ya existe:', audioAbsPath, '(' + sizeKB + ' KB)')
  } else {
    console.log('   ⚠️  Audio no encontrado. Generando con ElevenLabs...')

    if (!brandKit.ttsScript) {
      console.error('❌  El brand kit no tiene campo "ttsScript"')
      process.exit(1)
    }

    // Escribir guion en archivo temporal
    const tmpScript = path.join(projectRoot, 'scripts', '_tmp_tts_script.txt')
    fs.writeFileSync(tmpScript, brandKit.ttsScript)

    try {
      await runCommand('node', [
        path.join(projectRoot, 'scripts', 'generate-tts.js'),
        '--file',   tmpScript,
        '--output', audioFile,
      ], projectRoot)
    } finally {
      fs.unlinkSync(tmpScript)
    }

    if (!fs.existsSync(audioAbsPath)) {
      console.error('❌  No se pudo generar el audio:', audioAbsPath)
      process.exit(1)
    }
    console.log('   ✅ Audio generado correctamente.')
  }

  // ── PASO 3: Determinar compositionId ──────────────────────────────────────
  console.log('\n🎬  PASO 3 — Iniciando render de video...')
  const compositionId = brandKit.compositionId
  if (!compositionId) {
    console.error('❌  El brand kit no tiene campo "compositionId"')
    process.exit(1)
  }

  console.log('   Composition :', compositionId)
  console.log('   Output      :', outputPath)

  // Asegurar directorio de salida
  const outputDir = path.dirname(outputPath)
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
    console.log('   📁 Directorio creado:', outputDir)
  }

  // ── PASO 4: Remotion render ───────────────────────────────────────────────
  await runCommand('npx', [
    'remotion', 'render',
    'src/index.tsx',
    compositionId,
    outputPath,
  ], projectRoot)

  // ── PASO 5: Reporte final ─────────────────────────────────────────────────
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1)

  console.log('\n🏁  ¡LISTO!')
  console.log('   Brand    :', brandKit.brandName)
  console.log('   Video    :', outputPath)
  if (fs.existsSync(outputPath)) {
    const sizeMB = (fs.statSync(outputPath).size / 1024 / 1024).toFixed(2)
    console.log('   Tamaño   :', sizeMB + ' MB')
  }
  console.log('   Tiempo   :', elapsed + 's')
}

main().catch((err) => {
  console.error('\n❌  Error fatal:', err.message)
  process.exit(1)
})
