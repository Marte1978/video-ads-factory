import { BioScanProAdProps } from "./BioScanProAd";

// Batch 25 -- Copies 241-250 -- Categoria: Mujeres 35+
// Rotacion: cyan→purple→orange→green→red→gold→teal→indigo→blue→rose
// HookStyle: spring→slide→zoom→spring→slide→zoom→spring→slide→zoom→spring
// (continua desde batch24 que termino en rose/zoom)

export const batch25: BioScanProAdProps[] = [

  // -- 241 -- Mujer cuidadora quien te cuida -- Cyan -- Spring ------------------
  {
    audioFile:        "audio/bioscan-241.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "cyan",
    hookStyle:        "spring",
    durationInFrames: 759,  // 23.3s x30 + 60f
    scenes: [
      { type: "hook", emoji: "👩‍👧", title: "Cuidas a todos. Quien te cuida a ti?", subtitle: "Las mujeres son las principales cuidadoras de familia y las que mas descuidan su propia salud." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "cuidate tu tambien · 90 segundos para ti", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 242 -- Premenopausia cambios hormonales CV -- Purple -- Slide -------------
  {
    audioFile:        "audio/bioscan-242.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "purple",
    hookStyle:        "slide",
    durationInFrames: 1044,  // 32.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🔬", title: "Los cambios hormonales de la premenopausia afectan 79 parametros. BioScan IA los detecta.", subtitle: "Despues de los 35-40, los cambios afectan el sistema cardiovascular, metabolico y mas." },
      { type: "list", title: "Monitoreo hormonal femenino con datos", items: [
        { emoji: "❤️", text: "Sistema cardiovascular", sub: "riesgo que sube con la menopausia" },
        { emoji: "🧪", text: "Marcadores metabolicos", sub: "cambios visibles en parametros" },
        { emoji: "📋", text: "Tendencias mensuales", sub: "informacion para tu ginecologa" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "monitorea tus cambios · datos reales", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 243 -- Espejo apariencia vs salud real CV -- Orange -- Zoom ---------------
  {
    audioFile:        "audio/bioscan-243.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "orange",
    hookStyle:        "zoom",
    durationInFrames: 919,  // 28.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🪞", title: "El espejo te dice como te ves. BioScan IA te dice como estas.", subtitle: "La sociedad mide la salud femenina por apariencia. La ciencia la mide por datos. 79 parametros reales." },
      { type: "problem", emoji: "📊", title: "La salud que nadie puede ver en una foto.", body: "SpO2, frecuencia cardiaca, riesgo cardiovascular. 79 parametros de salud real, no de como te ves. La ciencia de tu cuerpo que ninguna foto puede mostrar. $5. 90 segundos." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "tu salud real no tu imagen · 79 parametros", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 244 -- Embarazo planificacion pre-concepcional -- Green -- Spring --------
  {
    audioFile:        "audio/bioscan-244.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "green",
    hookStyle:        "spring",
    durationInFrames: 749,  // 23.0s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🤱", title: "Antes de buscar un embarazo, conoce exactamente como esta tu salud.", subtitle: "79 parametros de tu estado basal. Informacion clave para tu obstetra antes de concebir." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "preparate con datos · pre-concepcional", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 245 -- Mama trabajadora 90 segundos multitasking -- Red -- Slide ---------
  {
    audioFile:        "audio/bioscan-245.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "red",
    hookStyle:        "slide",
    durationInFrames: 859,  // 26.6s x30 + 60f
    scenes: [
      { type: "hook", emoji: "👩‍💼", title: "Manejas el trabajo, la casa y los hijos. No tienes tiempo para el medico. Pero si tienes 90 segundos.", subtitle: "BioScan IA para la mujer que no puede parar. En el carro, entre reuniones, cuando puedas." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "para la mujer que lo hace todo · 90 seg", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 246 -- Riesgo CV femenino menopausia ignorado -- Gold -- Zoom -------------
  {
    audioFile:        "audio/bioscan-246.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "gold",
    hookStyle:        "zoom",
    durationInFrames: 946,  // 29.5s x30 + 60f
    scenes: [
      { type: "hook", emoji: "❤️‍🔥", title: "La enfermedad cardiaca es la primera causa de muerte en mujeres. Nadie habla de eso.", subtitle: "El infarto femenino no siempre duele en el pecho. El riesgo se dispara tras la menopausia." },
      { type: "problem", emoji: "🫀", title: "El riesgo cardiovascular femenino es real.", body: "El infarto femenino tiene sintomas mas difusos. El riesgo se dispara post-menopausia. BioScan IA calcula tu riesgo cardiovascular con modelo AHA PREVENT. 90 segundos. Cinco dolares. El riesgo que nadie te cuenta." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "el riesgo que nadie te cuenta · AHA PREVENT", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 247 -- Self-care real no spa 79 parametros -- Teal -- Spring -------------
  {
    audioFile:        "audio/bioscan-247.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "teal",
    hookStyle:        "spring",
    durationInFrames: 857,  // 26.6s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🧖", title: "El self-care real no es solo spa. Es conocer tu estado de salud.", subtitle: "El autocuidado mas profundo: saber como esta tu cuerpo por dentro. 79 parametros. $5." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "el self-care que realmente importa · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 248 -- Ansiedad HRV cuerpo mente conexion -- Indigo -- Slide -------------
  {
    audioFile:        "audio/bioscan-248.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "indigo",
    hookStyle:        "slide",
    durationInFrames: 823,  // 25.4s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🧘", title: "La ansiedad afecta tu corazon, tu respiracion y mas. BioScan IA lo detecta en tus parametros.", subtitle: "HRV baja, frecuencia cardiaca elevada, SpO2 fluctuante. El cuerpo refleja el estado mental." },
      { type: "list", title: "El impacto fisico de la ansiedad en datos", items: [
        { emoji: "💓", text: "HRV baja", sub: "sistema nervioso en alerta" },
        { emoji: "🫁", text: "SpO2 fluctuante", sub: "respiracion afectada" },
        { emoji: "⚡", text: "Frecuencia cardiaca elevada", sub: "estres medible en datos" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "entiende la conexion mente-cuerpo · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 249 -- Amigas WhatsApp pack 18 cuatro amigas -- Blue -- Zoom -------------
  {
    audioFile:        "audio/bioscan-249.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "blue",
    hookStyle:        "zoom",
    durationInFrames: 900,  // 28.0s x30 + 60f
    scenes: [
      { type: "hook", emoji: "👯", title: "Las mujeres cuidan su salud juntas. Comparte BioScan IA con tus amigas.", subtitle: "4 amigas. Pack familiar $18 total. $4.50 cada una. El habito que se sostiene juntas." },
      { type: "solution", emoji: "💕", stats: [
        { value: "4", label: "analisis", color: "#2563EB" },
        { value: "$18", label: "pack total", color: "#1D4ED8" },
        { value: "$4.50", label: "por amiga", color: "#1E3A8A" },
      ]},
      { type: "cta", plan: "Pack Familiar", price: "$18 USD", priceNote: "cuidanse juntas · $4.50 cada una", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 250 -- Deteccion temprana cancer femenino complemento -- Rose -- Spring --
  {
    audioFile:        "audio/bioscan-250.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "rose",
    hookStyle:        "spring",
    durationInFrames: 929,  // 29.0s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🎗️", title: "Cancer de mama, ovario, cuello uterino: BioScan IA complementa tu monitoreo ginecologico.", subtitle: "No detecta cancer. Si monitorea 79 parametros de salud general para una imagen mas completa." },
      { type: "problem", emoji: "🩺", title: "Monitoreo integral de salud femenina.", body: "BioScan IA no detecta cancer. Pero 79 parametros de salud general, junto con tus examenes ginecologicos regulares, dan una imagen mas completa. La informacion nunca sobra. Cinco dolares." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "monitoreo integral femenino · 79 parametros", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

];
