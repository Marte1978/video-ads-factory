import { BioScanProAdProps } from "./BioScanProAd";

// Batch 05 -- Copies 041-050 -- Categoria: Velocidad y Conveniencia
// Rotacion: cyan→purple→orange→green→red→gold→teal→indigo→blue→rose
// HookStyle: slide→zoom→spring (continua desde batch04 que termino en spring)

export const batch05: BioScanProAdProps[] = [

  // -- 041 -- PAS -- Cyan -- Slide -------------------------------------------
  {
    audioFile:        "audio/bioscan-041.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "cyan",
    hookStyle:        "slide",
    durationInFrames: 2191,  // 71.1s x30 + 60f
    scenes: [
      { type: "hook", emoji: "⏱️", title: "90 segundos. Eso es todo lo que necesitas.", subtitle: "Sin cita. Sin clinica. Sin espera. Sin agujas. Desde tu celular." },
      { type: "list", title: "Todo lo que elimina BioScan IA", items: [
        { emoji: "❌", text: "Cita previa", sub: "disponible 24/7" },
        { emoji: "❌", text: "Desplazamiento", sub: "desde tu celular" },
        { emoji: "❌", text: "Agujas", sub: "solo camara" },
        { emoji: "❌", text: "Dias de espera", sub: "resultado en 90s" },
      ]},
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "indicadores", color: "#00D4FF" },
        { value: "90s", label: "tiempo total", color: "#00FF88" },
        { value: "$5", label: "precio", color: "#FFD700" },
      ]},
      { type: "proof", title: "Respaldado por ciencia real.", items: [
        { emoji: "⚗️", text: "Beer-Lambert", sub: "oximetria medica" },
        { emoji: "🇺🇸", text: "CDC NHANES", sub: "5,856 adultos" },
        { emoji: "❤️", text: "AHA PREVENT 2023", sub: "estandar cardiaco" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "empieza en 10 segundos", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 042 -- BAB -- Purple -- Zoom -------------------------------------------
  {
    audioFile:        "audio/bioscan-042.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "purple",
    hookStyle:        "zoom",
    durationInFrames: 1927,  // 62.3s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📅", title: "Antes pasabas 4 horas en la clinica para un chequeo basico.", subtitle: "Ahora tardas 90 segundos." },
      { type: "compare", title: "Las reglas del juego cambiaron", left: { label: "Antes", value: "4h · $150 · 10 param" }, right: { label: "Ahora", value: "90s · $5 · 79 param" }, subtitle: "BioScan IA cambio todo." },
      { type: "solution", emoji: "📱", stats: [
        { value: "40x", label: "mas rapido", color: "#A855F7" },
        { value: "30x", label: "mas barato", color: "#E879F9" },
        { value: "8x", label: "mas parametros", color: "#F0ABFC" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "el futuro de la salud · hoy", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 043 -- AIDA -- Orange -- Spring ----------------------------------------
  {
    audioFile:        "audio/bioscan-043.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "orange",
    hookStyle:        "spring",
    durationInFrames: 1920,  // 62.0s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📖", title: "En el tiempo que leiste este texto, podrias haber iniciado tu analisis.", subtitle: "BioScan IA tarda 90 segundos. Hazlo ahora." },
      { type: "solution", emoji: "📱", stats: [
        { value: "90s", label: "total", color: "#F97316" },
        { value: "79", label: "parametros", color: "#FB923C" },
        { value: "$5", label: "precio", color: "#FED7AA" },
      ]},
      { type: "proof", title: "En 2 minutos obtienes:", items: [
        { emoji: "💯", text: "Score 0-100", sub: "tu salud en un numero" },
        { emoji: "📄", text: "Reporte PDF", sub: "descargable al instante" },
        { emoji: "🤖", text: "Asistente IA", sub: "explica todo" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "hazlo ahora · no en un rato", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 044 -- FAB -- Green -- Slide -------------------------------------------
  {
    audioFile:        "audio/bioscan-044.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "green",
    hookStyle:        "slide",
    durationInFrames: 1802,  // 58.1s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🚗", title: "Mas rapido que pedir un Uber. Mas informativo que una visita al medico.", subtitle: "Uber: 3min. Medico: 2-4h. BioScan IA: 90 segundos." },
      { type: "compare", title: "La comparacion es obvia", left: { label: "Visita medico", value: "2-4h / $150" }, right: { label: "BioScan IA", value: "90s / $5" }, subtitle: "79 parametros sin salir de casa." },
      { type: "solution", emoji: "⚡", stats: [
        { value: "79", label: "parametros", color: "#22C55E" },
        { value: "90s", label: "resultado", color: "#4ADE80" },
        { value: "$5", label: "precio", color: "#BBF7D0" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "la velocidad que tu salud merece", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 045 -- PAS -- Red -- Zoom ----------------------------------------------
  {
    audioFile:        "audio/bioscan-045.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "red",
    hookStyle:        "zoom",
    durationInFrames: 1878,  // 60.6s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📆", title: "Tienes reuniones, hijos, trabajo y cero tiempo para chequearte.", subtitle: "BioScan IA cabe en cualquier agenda. 90 segundos." },
      { type: "list", title: "Cuando te conviene a ti", items: [
        { emoji: "🚗", text: "En el carro", sub: "esperando al nino" },
        { emoji: "✈️", text: "En el aeropuerto", sub: "antes del boarding" },
        { emoji: "☕", text: "Con el cafe", sub: "antes de trabajar" },
        { emoji: "🛋️", text: "En el sofa", sub: "cuando quieras" },
      ]},
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "indicadores", color: "#EF4444" },
        { value: "24/7", label: "disponible", color: "#F87171" },
        { value: "$5", label: "precio", color: "#FCA5A5" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "sin excusa de tiempo", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 046 -- HSO -- Gold -- Spring -------------------------------------------
  {
    audioFile:        "audio/bioscan-046.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "gold",
    hookStyle:        "spring",
    durationInFrames: 1815,  // 58.5s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📲", title: "Sin app que descargar. Sin registro largo. Sin esperas.", subtitle: "Entra desde el navegador. Paga $5. Resultado en 90s." },
      { type: "list", title: "Asi de simple es el proceso", items: [
        { emoji: "1️⃣", text: "Entra al navegador", sub: "bioscanpro.net" },
        { emoji: "2️⃣", text: "Paga $5", sub: "tarjeta o PayPal" },
        { emoji: "3️⃣", text: "Dedo en camara", sub: "90 segundos" },
        { emoji: "4️⃣", text: "Recibe resultados", sub: "79 parametros" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "sin friccion · sin obstaculos", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 047 -- AIDA -- Teal -- Slide -------------------------------------------
  {
    audioFile:        "audio/bioscan-047.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "teal",
    hookStyle:        "slide",
    durationInFrames: 1942,  // 62.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "☕", title: "Tardas mas en preparar el desayuno que en hacer tu analisis de salud.", subtitle: "Desayuno: 10 minutos. BioScan IA: 90 segundos." },
      { type: "solution", emoji: "📱", stats: [
        { value: "90s", label: "vs 10min desayuno", color: "#14B8A6" },
        { value: "79", label: "parametros", color: "#2DD4BF" },
        { value: "$5", label: "precio", color: "#99F6E4" },
      ]},
      { type: "proof", title: "Todo antes del cafe.", items: [
        { emoji: "❤️", text: "Riesgo cardiaco", sub: "AHA PREVENT 2023" },
        { emoji: "💉", text: "Glucosa estimada", sub: "en ayunas" },
        { emoji: "💯", text: "Score 0-100", sub: "tu salud hoy" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "hazlo antes del desayuno", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 048 -- FAB -- Indigo -- Zoom -------------------------------------------
  {
    audioFile:        "audio/bioscan-048.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "indigo",
    hookStyle:        "zoom",
    durationInFrames: 1911,  // 61.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🕐", title: "Los medicos atienden de 8am a 5pm. BioScan IA: 24 horas, 7 dias.", subtitle: "Domingo 11pm. Navidad. Semana Santa. Siempre disponible." },
      { type: "solution", emoji: "🌙", stats: [
        { value: "24/7", label: "disponible", color: "#6366F1" },
        { value: "365", label: "dias al ano", color: "#818CF8" },
        { value: "$5", label: "precio siempre", color: "#C7D2FE" },
      ]},
      { type: "proof", title: "Sin citas. Sin horarios. Sin feriados.", items: [
        { emoji: "📊", text: "79 parametros", sub: "cuando quieras" },
        { emoji: "📄", text: "Reporte PDF", sub: "instantaneo" },
        { emoji: "🤖", text: "Asistente IA", sub: "siempre activo" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "tu salud no tiene horario", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 049 -- Story -- Blue -- Spring -----------------------------------------
  {
    audioFile:        "audio/bioscan-049.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "blue",
    hookStyle:        "spring",
    durationInFrames: 2043,  // 66.1s x30 + 60f
    scenes: [
      { type: "hook", emoji: "✈️", title: "Lo hice desde el aeropuerto esperando mi vuelo.", subtitle: "90 segundos. WiFi, celular y $5. Reporte PDF antes del boarding." },
      { type: "list", title: "BioScan IA va donde tu vas", items: [
        { emoji: "🏠", text: "Desde casa", sub: "en el sofa" },
        { emoji: "✈️", text: "En el aeropuerto", sub: "esperando vuelo" },
        { emoji: "🏨", text: "En el hotel", sub: "viajando" },
        { emoji: "🚗", text: "En el carro", sub: "donde sea" },
      ]},
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "indicadores", color: "#3B82F6" },
        { value: "90s", label: "desde cualquier lugar", color: "#60A5FA" },
        { value: "$5", label: "precio", color: "#BFDBFE" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "desde cualquier lugar del mundo", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 050 -- FAB -- Rose -- Slide --------------------------------------------
  {
    audioFile:        "audio/bioscan-050.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "rose",
    hookStyle:        "slide",
    durationInFrames: 1744,  // 56.2s x30 + 60f
    scenes: [
      { type: "hook", emoji: "3️⃣", title: "3 pasos. 90 segundos. 79 indicadores de salud.", subtitle: "Asi de simple es BioScan IA." },
      { type: "list", title: "El proceso mas simple del mundo", items: [
        { emoji: "1️⃣", text: "bioscanpro.net · $5", sub: "paga en segundos" },
        { emoji: "2️⃣", text: "Dedo en camara", sub: "90 segundos" },
        { emoji: "3️⃣", text: "Recibe tu analisis", sub: "79 param + PDF + IA" },
      ]},
      { type: "solution", emoji: "✅", stats: [
        { value: "3", label: "pasos totales", color: "#F43F5E" },
        { value: "90s", label: "de tu tiempo", color: "#FB7185" },
        { value: "$5", label: "inversion", color: "#FDA4AF" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "asi de simple · garantia incluida", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

];
