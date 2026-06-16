import { BioScanProAdProps } from "./BioScanProAd";

// Batch 28 -- Copies 271-280 -- Categoria: Jovenes 25-35 (cont.)
// Rotacion: cyan→purple→orange→green→red→gold→teal→indigo→blue→rose
// HookStyle: spring→slide→zoom→spring→slide→zoom→spring→slide→zoom→spring
// (continua desde batch27 que termino en rose/zoom)

export const batch28: BioScanProAdProps[] = [

  // -- 271 -- Dieta joven deficiencias hierro B12 -- Cyan -- Spring --------------
  {
    audioFile:        "audio/bioscan-271.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "cyan",
    hookStyle:        "spring",
    durationInFrames: 855,  // 26.5s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🥗", title: "Los jovenes que comen bien a veces tienen las peores deficiencias. Los datos lo revelan.", subtitle: "Veganismo mal planificado, ayuno extremo, ultraprocesados healthy. Las deficiencias aparecen antes de sentirlas." },
      { type: "list", title: "Deficiencias que no se sienten pero si se miden", items: [
        { emoji: "🩸", text: "Hierro deficiente", sub: "fatiga sin explicacion visible" },
        { emoji: "💊", text: "B12 comprometida", sub: "dietas vegetales sin suplementar" },
        { emoji: "☀️", text: "Vitamina D baja", sub: "comun en jovenes de interior" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "valida tu nutricion con datos · 79 parametros", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 272 -- Ansiedad generacional HRV SpO2 -- Purple -- Slide -----------------
  {
    audioFile:        "audio/bioscan-272.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "purple",
    hookStyle:        "slide",
    durationInFrames: 891,  // 27.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "😰", title: "La generacion mas ansiosa de la historia. Nadie monitorea como afecta al cuerpo.", subtitle: "Millennials y Gen Z con niveles maximos de ansiedad. Tu HRV, presion y SpO2 lo reflejan en datos." },
      { type: "problem", emoji: "💓", title: "El impacto fisico de la ansiedad cronica.", body: "La ansiedad cronica afecta HRV, presion arterial, SpO2 y mas. BioScan IA te muestra el impacto fisico de tu ansiedad en datos reales. 79 parametros. Cinco dolares. Entiende tu ansiedad con datos." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "entiende tu ansiedad con datos · HRV real", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 273 -- Tracking digital salud Spotify Netflix -- Orange -- Zoom -----------
  {
    audioFile:        "audio/bioscan-273.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "orange",
    hookStyle:        "zoom",
    durationInFrames: 898,  // 28.0s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📊", title: "Rastrear tu app de delivery, tu Spotify, tu Netflix. Por que no rastrear tu salud?", subtitle: "El tracking es la cultura de tu generacion. BioScan IA anade el tracking que mas importa." },
      { type: "list", title: "El tracking que realmente importa", items: [
        { emoji: "📅", text: "Historial mensual de 79 parametros", sub: "tendencias reales de salud" },
        { emoji: "📈", text: "Progresion de score 0-100", sub: "ve si mejoras o empeoras" },
        { emoji: "🔔", text: "Alertas en parametros clave", sub: "SpO2, HRV, riesgo CV" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "trackea lo que importa · historial mensual", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 274 -- Independencia primer departamento salud solo -- Green -- Spring ----
  {
    audioFile:        "audio/bioscan-274.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "green",
    hookStyle:        "spring",
    durationInFrames: 897,  // 27.9s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🏠", title: "Te fuiste de la casa. Nadie te recuerda ir al medico. Solo tu.", subtitle: "La independencia viene con responsabilidades. Incluida la salud. BioScan IA es el chequeo que puedes hacer solo." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "el adulto independiente que eres · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 275 -- Influencer salud generico vs datos personales -- Red -- Slide ------
  {
    audioFile:        "audio/bioscan-275.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "red",
    hookStyle:        "slide",
    durationInFrames: 944,  // 29.5s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📱", title: "Los influencers de salud que sigues no saben como estan TUS parametros. BioScan IA si.", subtitle: "Consejos genericos no son para ti. Tu SpO2, tu HRV, tu riesgo CV son unicos." },
      { type: "problem", emoji: "🎯", title: "Tu salud personalizada, no el promedio de alguien mas.", body: "Los consejos genericos de salud no son personalizados para ti. BioScan IA te da los datos de TU cuerpo especifico. No el promedio de un influencer. Setenta y nueve parametros personales. Cinco dolares." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "tu salud personalizada · no consejos genericos", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 276 -- Pareja aniversario pack familiar regalo -- Gold -- Zoom ------------
  {
    audioFile:        "audio/bioscan-276.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "gold",
    hookStyle:        "zoom",
    durationInFrames: 935,  // 29.2s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💑", title: "Mi pareja y yo nos regalamos BioScan IA en nuestro aniversario. Fue raro. Y perfecto.", subtitle: "Hicimos los analisis juntos. Compartimos scores. Y los dos empezamos a cuidarnos mas." },
      { type: "cta", plan: "Pack Familiar", price: "$18 USD", priceNote: "regalense salud · 4 analisis completos", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 277 -- Gamer score salud DLC stats -- Teal -- Spring ---------------------
  {
    audioFile:        "audio/bioscan-277.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "teal",
    hookStyle:        "spring",
    durationInFrames: 894,  // 27.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🎮", title: "Los gamers optimizan su setup, su conexion, sus reacciones. Y su salud?", subtitle: "La cultura gamer entiende de optimizacion. BioScan IA es el DLC de salud que faltaba." },
      { type: "list", title: "Sube tus stats de salud como en un RPG", items: [
        { emoji: "❤️", text: "Score de salud 0-100", sub: "tu HP real medido" },
        { emoji: "📈", text: "Progresion mensual", sub: "levelup con datos" },
        { emoji: "⚡", text: "79 parametros de rendimiento", sub: "stats que importan de verdad" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "sube tu health score · nivel up real", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 278 -- Deuda estudiante $5 almuerzo acceso -- Indigo -- Slide ------------
  {
    audioFile:        "audio/bioscan-278.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "indigo",
    hookStyle:        "slide",
    durationInFrames: 949,  // 29.6s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💸", title: "Tienes deuda de estudiante. No tienes dinero. BioScan IA cuesta menos que un almuerzo.", subtitle: "La salud no tiene que esperar a tener dinero. Cinco dolares. 79 parametros. 90 segundos." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "menos que tu almuerzo · 79 parametros", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 279 -- YOLO vivir intenso con datos informado -- Blue -- Zoom ------------
  {
    audioFile:        "audio/bioscan-279.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "blue",
    hookStyle:        "zoom",
    durationInFrames: 859,  // 26.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🔥", title: "YOLO dice: haz lo que quieras. Tu cuerpo dice: pero con datos.", subtitle: "Vive intenso. Disfruta. Pero sabe como esta tu cuerpo mientras lo haces. 79 parametros en 90 segundos." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "vive informado · yolo con datos", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 280 -- CEO vida dashboard 79 metricas KPI -- Rose -- Spring --------------
  {
    audioFile:        "audio/bioscan-280.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "rose",
    hookStyle:        "spring",
    durationInFrames: 805,  // 24.9s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📱", title: "Eres el CEO de tu vida. BioScan IA es tu dashboard de salud.", subtitle: "Los mejores CEOs miden todo. Tu salud merece el mismo rigor. 79 metricas mensuales." },
      { type: "list", title: "El dashboard del CEO de tu propia vida", items: [
        { emoji: "📊", text: "79 KPIs de salud en tiempo real", sub: "el dashboard que necesitabas" },
        { emoji: "🎯", text: "Score global 0-100", sub: "tu KPI principal" },
        { emoji: "🔄", text: "Actualizacion mensual", sub: "itera con datos reales" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "activa tu dashboard · CEO de tu salud", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

];
