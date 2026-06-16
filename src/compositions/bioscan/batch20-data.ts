import { BioScanProAdProps } from "./BioScanProAd";

// Batch 20 -- Copies 191-200 -- Categoria: Escasez / Urgencia (cont.)
// Rotacion: cyan→purple→orange→green→red→gold→teal→indigo→blue→rose
// HookStyle: slide→zoom→spring→slide→zoom→spring→slide→zoom→spring→slide
// (continua desde batch19 que termino en spring)

export const batch20: BioScanProAdProps[] = [

  // -- 191 -- Deteccion temprana supervivencia -- Cyan -- Slide ----------------
  {
    audioFile:        "audio/bioscan-191.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "cyan",
    hookStyle:        "slide",
    durationInFrames: 1153,  // 36.5s x30 + 60f
    scenes: [
      { type: "hook", emoji: "⚠️", title: "Etapa 1 de cancer: 95% supervivencia. Etapa 4: 20%. La deteccion importa.", subtitle: "No prometemos detectar cancer. Si prometemos detectar senales de riesgo a tiempo." },
      { type: "problem", emoji: "🔍", title: "La deteccion temprana salva vidas.", body: "BioScan IA detecta 79 parametros de riesgo antes de que aparezcan sintomas. El primer paso de prevencion mas temprana posible. $5. 90 segundos. Garantia total de devolucion." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "deteccion temprana · 79 parametros", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 192 -- 332 creciendo turno ahora -- Purple -- Zoom ----------------------
  {
    audioFile:        "audio/bioscan-192.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "purple",
    hookStyle:        "zoom",
    durationInFrames: 908,  // 28.3s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📊", title: "Cada hora mas personas hacen su analisis BioScan IA. Cuando es tu turno?", subtitle: "332 analisis completados y contando. Cada hora que esperas es una hora sin datos." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "tu turno es ahora · 90 segundos", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 193 -- Cumpleanos audit de salud -- Orange -- Spring --------------------
  {
    audioFile:        "audio/bioscan-193.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "orange",
    hookStyle:        "spring",
    durationInFrames: 900,  // 28.0s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🎂", title: "En tu proximo cumpleanos, tendras datos reales de tu salud para celebrar?", subtitle: "Un audit de salud como regalo de cumpleanos. Para ti o para alguien que amas. $5." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "celebra con datos · regalo de salud", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 194 -- Pre-cita medica datos -- Green -- Slide --------------------------
  {
    audioFile:        "audio/bioscan-194.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "green",
    hookStyle:        "slide",
    durationInFrames: 1085,  // 34.2s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🩺", title: "Tienes cita medica la proxima semana. Llega con datos de 79 parametros.", subtitle: "Tu medico tiene 15-20 minutos contigo. Maximiza ese tiempo con informacion real." },
      { type: "list", title: "Lo que BioScan IA aporta a tu consulta", items: [
        { emoji: "📄", text: "Reporte PDF estructurado", sub: "tu medico puede leerlo" },
        { emoji: "📊", text: "79 parametros con tendencias", sub: "no solo un momento aislado" },
        { emoji: "❤️", text: "Score de salud 0-100", sub: "punto de referencia concreto" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "prepara tu cita · datos reales · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 195 -- Pack Familiar $18 tiempo limitado -- Red -- Zoom -----------------
  {
    audioFile:        "audio/bioscan-195.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "red",
    hookStyle:        "zoom",
    durationInFrames: 1104,  // 34.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "👨‍👩‍👧‍👦", title: "Pack Familiar BioScan IA: 4 analisis por $18. Por tiempo limitado.", subtitle: "4 analisis. 316 parametros totales. 4 reportes PDF. 4 asistentes IA. Toda tu familia." },
      { type: "solution", emoji: "📱", stats: [
        { value: "4", label: "analisis", color: "#EF4444" },
        { value: "316", label: "parametros", color: "#F87171" },
        { value: "$18", label: "familia", color: "#FECACA" },
      ]},
      { type: "cta", plan: "Pack Familiar", price: "$18 USD", priceNote: "toda la familia · tiempo limitado", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 196 -- Virus season inmunidad -- Gold -- Spring -------------------------
  {
    audioFile:        "audio/bioscan-196.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "gold",
    hookStyle:        "spring",
    durationInFrames: 935,  // 29.2s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🦠", title: "En epoca de virus y bacterias resistentes, conocer tu salud nunca fue mas urgente.", subtitle: "Los sistemas debiles son mas vulnerables. BioScan IA monitorea tu estado basal." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "tu guardia de salud · 79 parametros", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 197 -- 40 anos riesgo se duplica -- Teal -- Slide ----------------------
  {
    audioFile:        "audio/bioscan-197.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "teal",
    hookStyle:        "slide",
    durationInFrames: 1014,  // 31.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🎯", title: "A los 40 anos el riesgo cardiovascular se duplica. Cuantos anos tienes?", subtitle: "Despues de los 40: riesgo cardiovascular, metabolico y renal sube significativamente." },
      { type: "problem", emoji: "⏰", title: "La edad importa. Los datos tambien.", body: "Si ya llegaste a los 40 o te acercas — BioScan IA es mas urgente que nunca. 79 parametros. Score 0-100. $5. El momento es ahora." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "el momento es ahora · 40+ anos", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 198 -- Ventana prevencion cronica -- Indigo -- Zoom ---------------------
  {
    audioFile:        "audio/bioscan-198.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "indigo",
    hookStyle:        "zoom",
    durationInFrames: 1056,  // 33.2s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🪟", title: "La ventana mas importante para prevenir enfermedades cronicas es ahora.", subtitle: "Antes de los sintomas. Donde la intervencion es mas efectiva." },
      { type: "list", title: "Usa tu ventana de prevencion ahora", items: [
        { emoji: "⏰", text: "Enfermedades cronicas tardan anos", sub: "pero empiezan ahora" },
        { emoji: "🔍", text: "Antes de sintomas es el momento", sub: "la intervencion mas efectiva" },
        { emoji: "📊", text: "79 parametros de deteccion temprana", sub: "tu guardia de salud" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "usa tu ventana · actua ahora · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 199 -- Habitos impacto en salud -- Blue -- Spring -----------------------
  {
    audioFile:        "audio/bioscan-199.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "blue",
    hookStyle:        "spring",
    durationInFrames: 1109,  // 35.0s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🍕", title: "Tu dieta, tu estres, tu sueno actuales — todo afecta tu salud ahora mismo.", subtitle: "Los habitos malos se acumulan silenciosamente. BioScan IA los hace visibles en datos." },
      { type: "problem", emoji: "📉", title: "Los habitos tienen impacto numerico.", body: "BioScan IA muestra como tus habitos actuales afectan 79 parametros de salud. Una llamada de atencion basada en datos reales, no en intuicion. $5. 90 segundos." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "ve el impacto de tus habitos · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 200 -- $5 precio mas bajo cierre parte6 -- Rose -- Slide ----------------
  {
    audioFile:        "audio/bioscan-200.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "rose",
    hookStyle:        "slide",
    durationInFrames: 971,  // 30.4s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💎", title: "$5 es el precio mas bajo que tendra BioScan IA. El momento es ahora.", subtitle: "Cada mejora sube el precio. Mas parametros, mas precision, mas funciones." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "el precio mas bajo · aprovechalo hoy", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

];
