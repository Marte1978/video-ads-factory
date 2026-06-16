import { BioScanProAdProps } from "./BioScanProAd";

// Batch 15 -- Copies 141-150 -- Categoria: Comparaciones Directas
// Rotacion: cyan→purple→orange→green→red→gold→teal→indigo→blue→rose
// HookStyle: zoom→spring→slide→zoom→spring→slide→zoom→spring→slide→zoom
// (continua desde batch14 que termino en slide)

export const batch15: BioScanProAdProps[] = [

  // -- 141 -- Clinica $300 vs BioScan $5 -- Cyan -- Zoom -----------------------
  {
    audioFile:        "audio/bioscan-141.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "cyan",
    hookStyle:        "zoom",
    durationInFrames: 1242,  // 39.4s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💰", title: "Clinica privada: $300. BioScan IA: $5. Que eliges?", subtitle: "No hay trampa. No hay letra pequena. Solo una diferencia enorme de precio." },
      { type: "compare", title: "Clinica vs BioScan IA", left: { label: "Clinica privada", value: "$300 / analisis" }, right: { label: "BioScan IA", value: "$5 / 79 parametros" }, subtitle: "Para evaluacion de estado general, BioScan IA gana en precio, velocidad y accesibilidad." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "elige inteligente · mismo resultado", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 142 -- 5 vs 79 parametros -- Purple -- Spring ---------------------------
  {
    audioFile:        "audio/bioscan-142.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "purple",
    hookStyle:        "spring",
    durationInFrames: 1234,  // 39.1s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📊", title: "Tu chequeo de rutina analiza 5-10 cosas. BioScan IA analiza 79.", subtitle: "Presion, peso, talla. Eso es el chequeo basico. BioScan IA va 15x mas lejos." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#A855F7" },
        { value: "vs 5-10", label: "chequeo basico", color: "#E879F9" },
        { value: "$5", label: "precio", color: "#F0ABFC" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "mas informacion · menos costo · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 143 -- 4 horas vs 90 segundos -- Orange -- Slide ------------------------
  {
    audioFile:        "audio/bioscan-143.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "orange",
    hookStyle:        "slide",
    durationInFrames: 1285,  // 40.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "⏰", title: "Clinica: 4 horas. BioScan IA: 90 segundos.", subtitle: "Cita + traslado + sala de espera + consulta = medio dia perdido." },
      { type: "compare", title: "El tiempo que te cuesta chequearte", left: { label: "Clinica privada", value: "4 horas / medio dia" }, right: { label: "BioScan IA", value: "90 segundos / ahora" }, subtitle: "Tu tiempo vale. No lo gastes esperando lo que puedes tener en 90 segundos." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "tu tiempo vale · 90 segundos ahora", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 144 -- Apple Watch $400 vs BioScan $5 -- Green -- Zoom ------------------
  {
    audioFile:        "audio/bioscan-144.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "green",
    hookStyle:        "zoom",
    durationInFrames: 1195,  // 37.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "⌚", title: "Apple Watch: $400. BioScan IA: $5. Los dos miden SpO2.", subtitle: "Sin suscripcion. Sin gadget extra. Solo tu celular y 90 segundos." },
      { type: "compare", title: "SpO2 y mucho mas", left: { label: "Apple Watch", value: "$400 + SpO2" }, right: { label: "BioScan IA", value: "$5 + SpO2 + 78 parametros" }, subtitle: "BioScan IA mide SpO2 mas 78 parametros adicionales. Por 80 veces menos dinero." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "mas por menos · sin gadget extra", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 145 -- Lab 3 dias vs resultado inmediato -- Red -- Spring ----------------
  {
    audioFile:        "audio/bioscan-145.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "red",
    hookStyle:        "spring",
    durationInFrames: 1242,  // 39.4s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🧪", title: "Laboratorio: 3 dias de espera. BioScan IA: resultado inmediato.", subtitle: "Das la muestra. Esperas. Recoges el papel. Vas al medico. BioScan IA: 90 segundos." },
      { type: "list", title: "BioScan IA vs laboratorio", items: [
        { emoji: "⚡", text: "Resultado en 90 segundos", sub: "vs 3 dias de espera" },
        { emoji: "📱", text: "Reporte PDF al instante", sub: "vs papeleria confusa" },
        { emoji: "🤖", text: "Asistente IA que explica todo", sub: "vs interpretacion sola" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "resultados ahora · sin esperar dias", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 146 -- Medicina reactiva vs preventiva -- Gold -- Slide -----------------
  {
    audioFile:        "audio/bioscan-146.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "gold",
    hookStyle:        "slide",
    durationInFrames: 1273,  // 40.5s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🔄", title: "Medicina tradicional: espera a que algo duela. BioScan IA: detecta antes.", subtitle: "El sistema medico esta disenado para tratar. BioScan IA invierte esa ecuacion." },
      { type: "problem", emoji: "🚨", title: "La medicina reactiva llega tarde.", body: "El dolor y los sintomas son las ultimas senales. BioScan IA detecta 79 senales de riesgo antes de que aparezcan sintomas. Preventivo. Proactivo. Calibrado CDC. AHA PREVENT 2023." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "del tratamiento a la prevencion · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 147 -- Glucometro 1 param vs 79 -- Teal -- Zoom -------------------------
  {
    audioFile:        "audio/bioscan-147.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "teal",
    hookStyle:        "zoom",
    durationInFrames: 1345,  // 42.9s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💉", title: "Un glucometro mide 1 parametro. BioScan IA mide 79. Sin pinchar el dedo.", subtitle: "El glucometro es util pero limitado. Y duele. BioScan IA incluye glucosa estimada sin lanceta." },
      { type: "compare", title: "Monitoreo de glucosa", left: { label: "Glucometro clasico", value: "1 parametro + pinchazo" }, right: { label: "BioScan IA", value: "79 parametros + indoloro" }, subtitle: "Glucosa estimada entre 79 parametros. Solo la camara del celular. Sin sangre." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "79 en lugar de 1 · sin dolor · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 148 -- Apps genericas vs BioScan -- Indigo -- Spring --------------------
  {
    audioFile:        "audio/bioscan-148.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "indigo",
    hookStyle:        "spring",
    durationInFrames: 1248,  // 39.6s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📲", title: "Esas apps de salud que cuentan pasos no miden lo que importa.", subtitle: "Calorias, pasos, sueno. BioScan IA mide lo que ninguna app gratuita puede." },
      { type: "list", title: "Lo que las apps gratis no te dan", items: [
        { emoji: "🫁", text: "SpO2 real medido", sub: "no estimado por movimiento" },
        { emoji: "❤️", text: "Riesgo cardiovascular clinico", sub: "algoritmo AHA PREVENT 2023" },
        { emoji: "🫘", text: "Funcion renal estimada", sub: "datos medicamente relevantes" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "datos que importan · no solo pasos", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 149 -- Telemedicina $30-80 vs $5 -- Blue -- Slide -----------------------
  {
    audioFile:        "audio/bioscan-149.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "blue",
    hookStyle:        "slide",
    durationInFrames: 1138,  // 36.0s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💻", title: "Telemedicina: $30-80 por consulta. BioScan IA: $5 por 79 parametros.", subtitle: "La telemedicina es para cuando ya sabes que algo falla. BioScan IA es tu primer filtro." },
      { type: "compare", title: "La secuencia inteligente de salud", left: { label: "Telemedicina", value: "$30-80 / consulta" }, right: { label: "BioScan IA primero", value: "$5 / decide si consultar" }, subtitle: "Analiza primero. Si algo preocupa, entonces va al medico. Ahorra tiempo y dinero." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "primero BioScan · luego medico si aplica", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 150 -- Seguro $100/mes vs BioScan $5 -- Rose -- Zoom --------------------
  {
    audioFile:        "audio/bioscan-150.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "rose",
    hookStyle:        "zoom",
    durationInFrames: 1174,  // 37.2s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🏥", title: "Tu seguro medico te cobra $100 al mes. BioScan IA: $5 por analisis.", subtitle: "El seguro cubre emergencias. BioScan IA cubre la prevencion diaria. Son complementos." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#F43F5E" },
        { value: "$5", label: "vs $100/mes", color: "#FB7185" },
        { value: "90s", label: "resultado", color: "#FDA4AF" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "la prevencion mas economica · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

];
