import { BioScanProAdProps } from "./BioScanProAd";

// Batch 21 -- Copies 201-210 -- Categoria: Historias de Transformacion
// Rotacion: cyan→purple→orange→green→red→gold→teal→indigo→blue→rose
// HookStyle: zoom→spring→slide→zoom→spring→slide→zoom→spring→slide→zoom
// (continua desde batch20 que termino en rose/slide)

export const batch21: BioScanProAdProps[] = [

  // -- 201 -- Score 54 a 81 transformacion -- Cyan -- Zoom ----------------------
  {
    audioFile:        "audio/bioscan-201.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "cyan",
    hookStyle:        "zoom",
    durationInFrames: 777,  // 23.9s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📈", title: "Tenia un score de 54. Seis meses despues llegue a 81.", subtitle: "Los numeros no mienten. La transformacion es real con datos de BioScan IA." },
      { type: "solution", emoji: "🏆", stats: [
        { value: "54", label: "score inicial", color: "#06B6D4" },
        { value: "81", label: "score final", color: "#0891B2" },
        { value: "6m", label: "meses", color: "#164E63" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "empieza tu transformacion · 79 parametros", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 202 -- Diagnostico a tiempo cardiovascular -- Purple -- Spring ------------
  {
    audioFile:        "audio/bioscan-202.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "purple",
    hookStyle:        "spring",
    durationInFrames: 1003,  // 31.4s x30 + 60f
    scenes: [
      { type: "hook", emoji: "❤️", title: "BioScan IA mostro riesgo cardiovascular alto. Fui al medico. Tenia razon.", subtitle: "Sin sintomas. Pero los datos dijeron la verdad. Ese analisis de $5 puede haberme salvado la vida." },
      { type: "problem", emoji: "🩺", title: "Deteccion temprana que cambia vidas.", body: "No tenia sintomas. Me sentia bien. Pero BioScan IA mostro indicadores de riesgo. El cardiologo confirmo. Empece tratamiento preventivo a tiempo. El analisis que puede cambiarlo todo." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "el analisis que puede cambiarlo todo", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 203 -- Glucosa motivacion dieta -- Orange -- Slide -----------------------
  {
    audioFile:        "audio/bioscan-203.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "orange",
    hookStyle:        "slide",
    durationInFrames: 988,  // 30.9s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🍎", title: "Ver mis parametros de glucosa altos me dio el empuje para cambiar mi dieta.", subtitle: "Glucosa 108 → 89. BioScan IA no dio la solucion. Dio la motivacion." },
      { type: "problem", emoji: "📊", title: "Los datos como motivacion real.", body: "Lo sabia intelectualmente. Pero verlo en numeros lo hizo real. Cambie mi dieta. Tres meses despues: glucosa estimada 89, riesgo bajo. BioScan IA me dio la motivacion que necesitaba. $5. 90 segundos." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "deja que los datos te motiven · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 204 -- De ignorar a monitoreo mensual -- Green -- Zoom -------------------
  {
    audioFile:        "audio/bioscan-204.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "green",
    hookStyle:        "zoom",
    durationInFrames: 853,  // 26.4s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🔄", title: "Antes ignoraba mi salud completamente. Ahora la monitoro mensualmente.", subtitle: "8 meses de historial de datos. Cada decision visible en numeros." },
      { type: "list", title: "BioScan IA cambio mi relacion con mi salud", items: [
        { emoji: "📅", text: "8 meses de historial continuo", sub: "cada mes mas datos" },
        { emoji: "📊", text: "79 parametros cada analisis", sub: "vision completa" },
        { emoji: "💡", text: "Decisiones que afectan mi cuerpo", sub: "visibles en datos reales" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "cambia tu relacion con tu salud", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 205 -- Peso validado con parametros -- Red -- Spring ----------------------
  {
    audioFile:        "audio/bioscan-205.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "red",
    hookStyle:        "spring",
    durationInFrames: 849,  // 26.3s x30 + 60f
    scenes: [
      { type: "hook", emoji: "⚖️", title: "Baje 12 kg. Pero lo que me importa es que mis parametros cardiovasculares mejoraron.", subtitle: "El peso es un numero. Los 79 parametros de BioScan IA son la verdad real." },
      { type: "solution", emoji: "📉", stats: [
        { value: "SpO2", label: "mejoro", color: "#EF4444" },
        { value: "CV", label: "riesgo bajo", color: "#F87171" },
        { value: "12kg", label: "perdidos", color: "#FECACA" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "mas alla del peso · datos reales", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 206 -- Recuperacion post-COVID monitoreo -- Gold -- Slide ----------------
  {
    audioFile:        "audio/bioscan-206.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "gold",
    hookStyle:        "slide",
    durationInFrames: 1019,  // 32.0s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🦠", title: "Despues del COVID, use BioScan IA para monitorear mi recuperacion.", subtitle: "SpO2 de 94 a 98. Los datos me dijeron cuando estaba realmente listo para volver." },
      { type: "list", title: "Recuperacion inteligente con datos", items: [
        { emoji: "📈", text: "SpO2: 94% → 98%", sub: "recuperacion visible en semanas" },
        { emoji: "❤️", text: "Frecuencia cardiaca normalizada", sub: "datos objetivos de progreso" },
        { emoji: "✅", text: "Supe cuando volver a ejercitar", sub: "sin adivinanzas, con datos" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "monitorea tu recuperacion · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 207 -- Estres laboral burnout prevenido -- Teal -- Zoom ------------------
  {
    audioFile:        "audio/bioscan-207.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "teal",
    hookStyle:        "zoom",
    durationInFrames: 1021,  // 32.0s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🔥", title: "El estres laboral me estaba matando. Los datos me lo demostraron.", subtitle: "HRV baja. Frecuencia cardiaca elevada. Signos de estres cronico visibles en numeros." },
      { type: "problem", emoji: "⚡", title: "Los datos me salvaron del burnout.", body: "Variabilidad cardiaca HRV baja. Frecuencia cardiaca en reposo elevada. Signos claros de estres cronico. Eso me hizo tomarlo en serio. Cambie habitos. Seis meses despues: HRV normal, frecuencia optima. BioScan IA fue mi alarma a tiempo." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "detecta el estres antes · 79 parametros", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 208 -- Corredor amateur optimiza con datos -- Indigo -- Spring -----------
  {
    audioFile:        "audio/bioscan-208.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "indigo",
    hookStyle:        "spring",
    durationInFrames: 870,  // 27.0s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🏃", title: "Soy corredor amateur. BioScan IA me ayudo a entrenar mas inteligente.", subtitle: "De entrenar por volumen a entrenar por datos. Tiempos mejoraron 15% en 6 meses." },
      { type: "list", title: "Entrenamiento basado en datos reales", items: [
        { emoji: "💓", text: "HRV me dice cuando descansar", sub: "recuperacion real no supuesta" },
        { emoji: "🫁", text: "SpO2 de rendimiento optimo", sub: "oxigeno visible en datos" },
        { emoji: "⏱️", text: "Tiempos mejorados 15% en 6 meses", sub: "resultado de entrenar inteligente" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "entrena inteligente · datos reales", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 209 -- Padre cambia por sus hijos -- Blue -- Slide -----------------------
  {
    audioFile:        "audio/bioscan-209.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "blue",
    hookStyle:        "slide",
    durationInFrames: 902,  // 28.1s x30 + 60f
    scenes: [
      { type: "hook", emoji: "👨‍👧‍👦", title: "Mis hijos me pidieron que me cuidara mas. BioScan IA me dio los datos para hacerlo.", subtitle: "Score 61 → 79 en 8 meses. El espejo que necesitaba." },
      { type: "problem", emoji: "💙", title: "El cambio motivado por amor.", body: "Score inicial 61. Demasiado bajo para un padre de 42 anos con hijos pequenos. Ese numero me cambio. 8 meses despues: score 79. Mis hijos tienen el papa que merecen. BioScan IA fue el espejo que necesitaba. $5. 90 segundos." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "cambia por ellos · score real", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 210 -- Abuelo 67 anos transformacion -- Rose -- Zoom ---------------------
  {
    audioFile:        "audio/bioscan-210.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "rose",
    hookStyle:        "zoom",
    durationInFrames: 985,  // 30.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "👴", title: "A los 67 anos, BioScan IA me mostro que podia estar mejor. Y trabaje para lograrlo.", subtitle: "Score 58 → 72 en 6 meses. Nunca es tarde cuando tienes datos." },
      { type: "solution", emoji: "✨", stats: [
        { value: "67", label: "anos", color: "#FB7185" },
        { value: "58→72", label: "score", color: "#E11D48" },
        { value: "6m", label: "meses", color: "#BE123C" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "nunca es tarde · empieza hoy", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

];
