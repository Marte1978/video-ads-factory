import { BioScanProAdProps } from "./BioScanProAd";

// Batch 12 -- Copies 111-120 -- Categoria: FOMO / Prueba Social (cont.)
// Rotacion: cyan→purple→orange→green→red→gold→teal→indigo→blue→rose
// HookStyle: zoom→spring→slide→zoom→spring→slide→zoom→spring→slide→zoom
// (continua desde batch11 que termino en slide)

export const batch12: BioScanProAdProps[] = [

  // -- 111 -- AIDA -- Cyan -- Zoom --------------------------------------------
  {
    audioFile:        "audio/bioscan-111.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "cyan",
    hookStyle:        "zoom",
    durationInFrames: 1661,  // 53.4s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💼", title: "Los ejecutivos y atletas de elite monitorizan su salud constantemente. Ahora tu tambien puedes.", subtitle: "El secreto del alto rendimiento, democratizado por $5." },
      { type: "proof", title: "Lo que tienen los de elite. Ahora al alcance.", items: [
        { emoji: "❤️", text: "AHA PREVENT 2023", sub: "mismo algoritmo cardiaco" },
        { emoji: "🫁", text: "SpO2 y HRV", sub: "metricas de rendimiento elite" },
        { emoji: "📊", text: "79 parametros", sub: "vs $10,000 de monitor medico" },
      ]},
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#00D4FF" },
        { value: "elite", label: "nivel", color: "#00FF88" },
        { value: "$5", label: "precio", color: "#FFD700" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "rendimiento de elite · democratizado", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 112 -- FAB -- Purple -- Spring -----------------------------------------
  {
    audioFile:        "audio/bioscan-112.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "purple",
    hookStyle:        "spring",
    durationInFrames: 1462,  // 46.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🔢", title: "Mas de 332 analisis completados. Cada uno con resultados reales.", subtitle: "No simulaciones. No demos. 332 personas reales con datos reales." },
      { type: "proof", title: "Lo que las 332 personas descubrieron.", items: [
        { emoji: "💯", text: "Su score 0-100", sub: "estado de salud claro" },
        { emoji: "❤️", text: "Riesgo AHA 2023", sub: "cardiovascular real" },
        { emoji: "📄", text: "Reporte PDF", sub: "79 parametros en manos" },
      ]},
      { type: "solution", emoji: "📱", stats: [
        { value: "332+", label: "analisis", color: "#A855F7" },
        { value: "79", label: "parametros", color: "#E879F9" },
        { value: "$5", label: "precio", color: "#F0ABFC" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "se el 333 · tu analisis real", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 113 -- Autoridad -- Orange -- Slide ------------------------------------
  {
    audioFile:        "audio/bioscan-113.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "orange",
    hookStyle:        "slide",
    durationInFrames: 1250,  // 39.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "👨‍⚕️", title: "Medicos ya usan los reportes de BioScan IA como punto de partida en consultas.", subtitle: "Mas informacion para el medico = mejor diagnostico para ti." },
      { type: "proof", title: "Por que los medicos lo recomiendan.", items: [
        { emoji: "📄", text: "79 parametros al llegar", sub: "contexto completo" },
        { emoji: "❤️", text: "AHA PREVENT 2023", sub: "algoritmo que ya conocen" },
        { emoji: "🇺🇸", text: "CDC calibrado", sub: "datos que confian" },
      ]},
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#F97316" },
        { value: "PDF", label: "para medico", color: "#FB923C" },
        { value: "$5", label: "precio", color: "#FED7AA" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "el que usan los medicos · datos reales", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 114 -- PAS -- Green -- Zoom --------------------------------------------
  {
    audioFile:        "audio/bioscan-114.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "green",
    hookStyle:        "zoom",
    durationInFrames: 1326,  // 42.2s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🌍", title: "Igual que las vacunas, la prevencion funciona mejor cuando mas gente la adopta.", subtitle: "Tu salud individual contribuye a la salud colectiva. Unete al movimiento." },
      { type: "list", title: "Por que tu participacion importa", items: [
        { emoji: "🔬", text: "Algoritmos mejoran", sub: "con mas datos reales" },
        { emoji: "🏥", text: "Sistemas de salud", sub: "detectan tendencias antes" },
        { emoji: "👥", text: "Comunidad saludable", sub: "cada persona suma" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "se parte del cambio · salud colectiva", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 115 -- AIDA -- Red -- Spring -------------------------------------------
  {
    audioFile:        "audio/bioscan-115.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "red",
    hookStyle:        "spring",
    durationInFrames: 1546,  // 49.6s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🔥", title: "BioScan IA esta trending. Ya sabes por que?", subtitle: "Resolvio el problema que nadie habia resuelto: chequeo completo, accesible, rapido." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#EF4444" },
        { value: "90s", label: "resultado", color: "#F87171" },
        { value: "$5", label: "precio", color: "#FECACA" },
      ]},
      { type: "proof", title: "Por que todo el mundo habla de esto.", items: [
        { emoji: "⚗️", text: "Beer-Lambert real", sub: "ciencia medica verificable" },
        { emoji: "🇺🇸", text: "CDC calibrado", sub: "5,856 adultos reales" },
        { emoji: "❤️", text: "AHA PREVENT 2023", sub: "estandar cardiologico" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "el producto del ano · descubrelo", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 116 -- Story -- Gold -- Slide ------------------------------------------
  {
    audioFile:        "audio/bioscan-116.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "gold",
    hookStyle:        "slide",
    durationInFrames: 1417,  // 45.2s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🫁", title: "Descubri que mi SpO2 era 94% y no me sentia mal. El medico lo confirmo.", subtitle: "BioScan IA lo detecto antes de que yo sintiera nada." },
      { type: "list", title: "Lo que BioScan IA detecto antes que yo", items: [
        { emoji: "🫁", text: "SpO2: 94%", sub: "por debajo del rango optimo" },
        { emoji: "❤️", text: "Alerta cardiovascular", sub: "riesgo elevado AHA" },
        { emoji: "📄", text: "Reporte al medico", sub: "accion tomada a tiempo" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "detecta lo invisible · antes de sentirlo", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 117 -- HSO -- Teal -- Zoom ---------------------------------------------
  {
    audioFile:        "audio/bioscan-117.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "teal",
    hookStyle:        "zoom",
    durationInFrames: 1304,  // 41.5s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🤔", title: "Mi amigo me pregunto cual era mi score de salud. No supe que decirle.", subtitle: "Cada vez mas personas tienen su numero de salud. Cual es el tuyo?" },
      { type: "solution", emoji: "📱", stats: [
        { value: "0-100", label: "tu score", color: "#14B8A6" },
        { value: "79", label: "parametros", color: "#2DD4BF" },
        { value: "$5", label: "precio", color: "#99F6E4" },
      ]},
      { type: "proof", title: "Un numero que resume tu salud hoy.", items: [
        { emoji: "📊", text: "Calculado con 79 datos", sub: "CDC + AHA 2023" },
        { emoji: "🔄", text: "Actualizable", sub: "cada vez que quieras" },
        { emoji: "📈", text: "Rastreable", sub: "ve como mejoras mes a mes" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "conoce tu numero · 90 segundos", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 118 -- BAB -- Indigo -- Spring -----------------------------------------
  {
    audioFile:        "audio/bioscan-118.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "indigo",
    hookStyle:        "spring",
    durationInFrames: 1406,  // 44.9s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💪", title: "Despues de ver mi reporte BioScan, empiece a dormir mejor, comer mejor y hacer ejercicio.", subtitle: "Los datos cambian comportamientos. Sin datos, las intenciones quedan en intenciones." },
      { type: "list", title: "Como los datos cambiaron mis habitos", items: [
        { emoji: "😴", text: "Dormi mejor", sub: "variabilidad cardiaca subio" },
        { emoji: "🥗", text: "Comi mejor", sub: "glucosa estimada mejoro" },
        { emoji: "🏃", text: "Hice ejercicio", sub: "frecuencia en reposo bajo" },
        { emoji: "📈", text: "Score mejoro", sub: "de 62 a 78 en 3 meses" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "cambia con datos · el motivador real", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 119 -- AIDA -- Blue -- Slide -------------------------------------------
  {
    audioFile:        "audio/bioscan-119.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "blue",
    hookStyle:        "slide",
    durationInFrames: 1260,  // 40.0s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🤺", title: "Tu score de salud es mayor que el de tu pareja?", subtitle: "No es competencia seria. Pero comparar puede ser el motivador que necesitas." },
      { type: "compare", title: "BioScan IA para parejas y familias", left: { label: "Solo: Plan Individual", value: "$5 USD / persona" }, right: { label: "Juntos: Pack Familiar", value: "$18 USD / 4 personas" }, subtitle: "Compiten, se motivan y mejoran juntos. $4.50 por persona en pack." },
      { type: "cta", plan: "Pack Familiar", price: "$18 USD", priceNote: "compite sanamente · 4 analisis", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 120 -- Story -- Rose -- Zoom -------------------------------------------
  {
    audioFile:        "audio/bioscan-120.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "rose",
    hookStyle:        "zoom",
    durationInFrames: 1169,  // 37.0s x30 + 60f
    scenes: [
      { type: "hook", emoji: "👬", title: "Mi mejor amigo me dijo que hiciera el analisis. Le hice caso. No me arrepiento.", subtitle: "Empiece esceptico. Cuando vi 79 parametros reales con metodologia citada, cambie de opinion." },
      { type: "list", title: "Lo que me convencio", items: [
        { emoji: "🇺🇸", text: "CDC citado", sub: "5,856 adultos reales" },
        { emoji: "❤️", text: "AHA PREVENT 2023", sub: "algoritmo verificable" },
        { emoji: "📄", text: "PDF real", sub: "no promesas vagas" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "hazle caso a quien te importa", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

];
