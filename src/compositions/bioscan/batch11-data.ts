import { BioScanProAdProps } from "./BioScanProAd";

// Batch 11 -- Copies 101-110 -- Categoria: FOMO / Prueba Social
// Rotacion: cyan→purple→orange→green→red→gold→teal→indigo→blue→rose
// HookStyle: slide→zoom→spring→slide→zoom→spring→slide→zoom→spring→slide
// (continua desde batch10 que termino en spring)

export const batch11: BioScanProAdProps[] = [

  // -- 101 -- AIDA -- Cyan -- Slide -------------------------------------------
  {
    audioFile:        "audio/bioscan-101.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "cyan",
    hookStyle:        "slide",
    durationInFrames: 1338,  // 42.6s x30 + 60f
    scenes: [
      { type: "hook", emoji: "👥", title: "332 personas ya conocen su estado de salud real. Tu aun no.", subtitle: "Cada dia mas personas descubren BioScan IA. Todos tienen algo que tu no: datos reales." },
      { type: "proof", title: "Lo que ya saben las 332 personas.", items: [
        { emoji: "💯", text: "Score 0-100", sub: "su estado de salud claro" },
        { emoji: "❤️", text: "Riesgo AHA 2023", sub: "cardiovascular a 10 anos" },
        { emoji: "📄", text: "Reporte PDF", sub: "79 parametros en sus manos" },
      ]},
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#00D4FF" },
        { value: "90s", label: "resultado", color: "#00FF88" },
        { value: "$5", label: "precio", color: "#FFD700" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "unete ahora · el siguiente eres tu", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 102 -- PAS -- Purple -- Zoom -------------------------------------------
  {
    audioFile:        "audio/bioscan-102.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "purple",
    hookStyle:        "zoom",
    durationInFrames: 1615,  // 51.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💔", title: "Una persona descubrio riesgo cardiovascular alto. Fue al medico. Le salvaron la vida.", subtitle: "Eso paso con BioScan IA. La proxima persona podria ser tu." },
      { type: "proof", title: "La informacion que puede cambiarlo todo.", items: [
        { emoji: "❤️", text: "AHA PREVENT 2023", sub: "riesgo cardiovascular real" },
        { emoji: "🇺🇸", text: "CDC NHANES", sub: "5,856 adultos calibrados" },
        { emoji: "📄", text: "Reporte PDF", sub: "para mostrar al medico" },
      ]},
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#A855F7" },
        { value: "90s", label: "resultado", color: "#E879F9" },
        { value: "$5", label: "precio", color: "#F0ABFC" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "tu turno · la informacion salva vidas", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 103 -- HSO -- Orange -- Spring -----------------------------------------
  {
    audioFile:        "audio/bioscan-103.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "orange",
    hookStyle:        "spring",
    durationInFrames: 1639,  // 52.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🚀", title: "Los early adopters de tecnologia de salud ya estan un paso adelante.", subtitle: "El monitoreo personal es la tendencia mas importante de la decada. Empieza hoy tu historial." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#F97316" },
        { value: "90s", label: "resultado", color: "#FB923C" },
        { value: "$5", label: "precio", color: "#FED7AA" },
      ]},
      { type: "proof", title: "Los que empiezan hoy ganan anos de ventaja.", items: [
        { emoji: "📈", text: "Historial de salud", sub: "datos que se acumulan" },
        { emoji: "🔄", text: "Tendencias personales", sub: "cambios mes a mes" },
        { emoji: "⚡", text: "Deteccion temprana", sub: "antes de que sea urgente" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "se de los primeros · empieza tu historial", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 104 -- AIDA -- Green -- Slide ------------------------------------------
  {
    audioFile:        "audio/bioscan-104.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "green",
    hookStyle:        "slide",
    durationInFrames: 1307,  // 41.6s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📱", title: "Todo el mundo habla de salud en redes. Pero pocos tienen datos reales.", subtitle: "Fotos de gym no son datos. BioScan IA te da 79 parametros verificables." },
      { type: "proof", title: "Datos reales vs. contenido de salud.", items: [
        { emoji: "⚗️", text: "Beer-Lambert calibrado", sub: "no filtros de app" },
        { emoji: "🇺🇸", text: "CDC NHANES real", sub: "no dieta de influencer" },
        { emoji: "❤️", text: "AHA PREVENT 2023", sub: "no promesas vagas" },
      ]},
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#22C55E" },
        { value: "CDC", label: "validado", color: "#4ADE80" },
        { value: "$5", label: "precio", color: "#BBF7D0" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "datos reales · no poses de redes", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 105 -- FAB -- Red -- Zoom ----------------------------------------------
  {
    audioFile:        "audio/bioscan-105.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "red",
    hookStyle:        "zoom",
    durationInFrames: 1142,  // 36.1s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🏆", title: "Tu colega ya hizo su analisis. Tu que esperas?", subtitle: "No es competencia. Pero la informacion de salud es una ventaja real." },
      { type: "list", title: "Lo que tu colega ya sabe de si mismo", items: [
        { emoji: "💯", text: "Su score 0-100", sub: "estado de salud claro" },
        { emoji: "❤️", text: "Riesgo cardiovascular", sub: "AHA PREVENT 2023" },
        { emoji: "📄", text: "Reporte PDF listo", sub: "para su proximo medico" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "adelantate · 79 parametros en 90s", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 106 -- Story -- Gold -- Spring -----------------------------------------
  {
    audioFile:        "audio/bioscan-106.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "gold",
    hookStyle:        "spring",
    durationInFrames: 1304,  // 41.5s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📈", title: "Mi score de salud era 62. Despues de 3 meses de cambios, es 78.", subtitle: "Eso es lo que BioScan IA hace posible: ver tu progreso con datos reales." },
      { type: "list", title: "Los cambios que mejoraron mi score", items: [
        { emoji: "😴", text: "Dormir mejor", sub: "variabilidad cardiaca mejoro" },
        { emoji: "🏃", text: "Ejercicio regular", sub: "frecuencia en reposo bajo" },
        { emoji: "🥗", text: "Mejor dieta", sub: "glucosa estimada mejoro" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "mide tu progreso · datos reales", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 107 -- AIDA -- Teal -- Slide -------------------------------------------
  {
    audioFile:        "audio/bioscan-107.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "teal",
    hookStyle:        "slide",
    durationInFrames: 1631,  // 52.4s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🧬", title: "Los biohackers y los que se toman en serio su salud ya usan esto.", subtitle: "La obsesion por los datos de salud, al alcance de cualquier persona con celular." },
      { type: "proof", title: "Biohacking democratizado.", items: [
        { emoji: "⚗️", text: "Beer-Lambert calibrado", sub: "ciencia medica real" },
        { emoji: "🇺🇸", text: "CDC NHANES", sub: "datos de 5,856 adultos" },
        { emoji: "❤️", text: "AHA PREVENT 2023", sub: "algoritmo cardiologico" },
      ]},
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#14B8A6" },
        { value: "90s", label: "resultado", color: "#2DD4BF" },
        { value: "$5", label: "precio", color: "#99F6E4" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "conviertete en biohacker · sin gadgets", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 108 -- HSO -- Indigo -- Zoom -------------------------------------------
  {
    audioFile:        "audio/bioscan-108.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "indigo",
    hookStyle:        "zoom",
    durationInFrames: 1104,  // 34.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🔥", title: "Challenge: cual es tu score de salud BioScan? Comparte el tuyo.", subtitle: "Cada vez mas personas comparten su score para normalizar la salud preventiva." },
      { type: "list", title: "Unete al movimiento BioScan", items: [
        { emoji: "💯", text: "Descubre tu score", sub: "en 90 segundos" },
        { emoji: "📤", text: "Compartelo", sub: "normaliza la salud preventiva" },
        { emoji: "🔄", text: "Mejoralo", sub: "sigue tu progreso" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "comparte tu score · bioscanpro.net", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 109 -- PAS -- Blue -- Spring -------------------------------------------
  {
    audioFile:        "audio/bioscan-109.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "blue",
    hookStyle:        "spring",
    durationInFrames: 1251,  // 39.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💬", title: "En el grupo de WhatsApp de la familia, todos ya lo han usado. Menos tu.", subtitle: "El pack familiar: $18 total. 4 analisis. 316 parametros. Tu familia te lo agradecera." },
      { type: "list", title: "Por que unirte a la familia saludable", items: [
        { emoji: "👨‍👩‍👧‍👦", text: "Pack Familiar $18", sub: "4 analisis completos" },
        { emoji: "📄", text: "4 reportes PDF", sub: "uno por persona" },
        { emoji: "🤖", text: "Asistente IA", sub: "para cada miembro" },
      ]},
      { type: "cta", plan: "Pack Familiar", price: "$18 USD", priceNote: "unete a la familia saludable", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 110 -- AIDA -- Rose -- Slide -------------------------------------------
  {
    audioFile:        "audio/bioscan-110.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "rose",
    hookStyle:        "slide",
    durationInFrames: 1566,  // 50.2s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📊", title: "El mercado de salud digital crece 24% anual. Los que no adoptan quedan atras.", subtitle: "Los que empiezan hoy tienen anos de ventaja en gestion preventiva de salud." },
      { type: "proof", title: "La ventaja de adoptar hoy.", items: [
        { emoji: "📈", text: "Historial de datos", sub: "anos de tendencias personales" },
        { emoji: "⚡", text: "Deteccion temprana", sub: "antes de que sea emergencia" },
        { emoji: "🤖", text: "Asistente IA", sub: "que mejora con cada analisis" },
      ]},
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#F43F5E" },
        { value: "24%", label: "crecimiento", color: "#FB7185" },
        { value: "$5", label: "precio", color: "#FDA4AF" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "adopta el futuro hoy · no mañana", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

];
