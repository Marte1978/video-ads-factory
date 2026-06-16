import { BioScanProAdProps } from "./BioScanProAd";

// Batch 13 -- Copies 121-130 -- Categoria: Curiosidad / Open Loop
// Rotacion: cyan→purple→orange→green→red→gold→teal→indigo→blue→rose
// HookStyle: spring→slide→zoom→spring→slide→zoom→spring→slide→zoom→spring
// (continua desde batch12 que termino en zoom)

export const batch13: BioScanProAdProps[] = [

  // -- 121 -- Open Loop -- Cyan -- Spring -------------------------------------
  {
    audioFile:        "audio/bioscan-121.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "cyan",
    hookStyle:        "spring",
    durationInFrames: 1430,  // 45.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "❤️", title: "Cuanto pesa tu corazon trabajar ahora mismo?", subtitle: "No lo sabes. Nadie te lo dice. BioScan IA si tiene la respuesta." },
      { type: "list", title: "Lo que BioScan IA te revela sobre tu corazon", items: [
        { emoji: "💓", text: "Frecuencia cardiaca", sub: "ritmo actual medido" },
        { emoji: "📊", text: "Variabilidad HRV", sub: "estres vs recuperacion" },
        { emoji: "❤️", text: "Riesgo cardiovascular", sub: "AHA PREVENT 2023 a 10 anos" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "descubre la respuesta · 90 segundos", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 122 -- HSO -- Purple -- Slide ------------------------------------------
  {
    audioFile:        "audio/bioscan-122.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "purple",
    hookStyle:        "slide",
    durationInFrames: 1447,  // 46.2s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🌌", title: "Hay algo en tu cuerpo que esta pasando ahora mismo. Y probablemente no lo sabes.", subtitle: "100,000 latidos. 96,000 km de vasos. Todo en silencio." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#A855F7" },
        { value: "90s", label: "para saber", color: "#E879F9" },
        { value: "$5", label: "precio", color: "#F0ABFC" },
      ]},
      { type: "proof", title: "El universo interno que BioScan IA te muestra.", items: [
        { emoji: "🫀", text: "Estado cardiovascular", sub: "AHA PREVENT 2023" },
        { emoji: "🫁", text: "Funcion pulmonar", sub: "SpO2 y mas" },
        { emoji: "💉", text: "Metabolismo", sub: "glucosa y funcion renal" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "descubrelo · la curiosidad mas importante", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 123 -- AIDA -- Orange -- Zoom ------------------------------------------
  {
    audioFile:        "audio/bioscan-123.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "orange",
    hookStyle:        "zoom",
    durationInFrames: 1347,  // 42.9s x30 + 60f
    scenes: [
      { type: "hook", emoji: "⏳", title: "Tu edad biologica puede ser muy diferente a tu edad cronologica.", subtitle: "Un cuerpo de 40 puede tener biologia de 30 o de 55. Depende de tus habitos." },
      { type: "proof", title: "BioScan IA analiza como envejece tu cuerpo.", items: [
        { emoji: "❤️", text: "Edad de tu corazon", sub: "riesgo AHA PREVENT 2023" },
        { emoji: "🫘", text: "Edad renal estimada", sub: "funcion de rinones" },
        { emoji: "💉", text: "Metabolismo actual", sub: "glucosa y marcadores" },
      ]},
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#F97316" },
        { value: "bio-age", label: "tu edad real", color: "#FB923C" },
        { value: "$5", label: "precio", color: "#FED7AA" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "cuantos anos tiene tu cuerpo · descubrelo", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 124 -- Open Loop -- Green -- Spring ------------------------------------
  {
    audioFile:        "audio/bioscan-124.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "green",
    hookStyle:        "spring",
    durationInFrames: 1353,  // 43.1s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🔍", title: "Algo que la mayoria no sabe sobre su propia salud.", subtitle: "Crees que estas bien porque no te sientes mal. Los datos cuentan otra historia." },
      { type: "proof", title: "Lo que no sabes de tu propio cuerpo.", items: [
        { emoji: "🫁", text: "Tu SpO2 real", sub: "la mayoria no lo sabe" },
        { emoji: "📊", text: "Tu variabilidad cardiaca", sub: "senales de estres interno" },
        { emoji: "❤️", text: "Tu riesgo cardiovascular", sub: "a 10 anos AHA 2023" },
      ]},
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "verdades", color: "#22C55E" },
        { value: "90s", label: "para saberlas", color: "#4ADE80" },
        { value: "$5", label: "precio", color: "#BBF7D0" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "conoce tu historia real · datos honestos", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 125 -- PAS -- Red -- Slide ---------------------------------------------
  {
    audioFile:        "audio/bioscan-125.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "red",
    hookStyle:        "slide",
    durationInFrames: 1340,  // 42.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "😮", title: "Las personas que parecen mas sanas a veces tienen los peores resultados internos.", subtitle: "La salud visible no siempre refleja la salud interna. Los datos si la reflejan." },
      { type: "problem", emoji: "⚠️", title: "Delgado no significa sano internamente.", body: "Glucosa elevada sin sobrepeso. Presion alta sin estres visible. Riesgo cardiovascular alto sin sintomas. BioScan IA detecta lo que los ojos no ven." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#EF4444" },
        { value: "CDC", label: "validado", color: "#F87171" },
        { value: "$5", label: "precio", color: "#FECACA" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "cual sera tu sorpresa · descubrelo", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 126 -- Open Loop -- Gold -- Zoom ---------------------------------------
  {
    audioFile:        "audio/bioscan-126.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "gold",
    hookStyle:        "zoom",
    durationInFrames: 1372,  // 43.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🤔", title: "Si hubiera una maquina que te dijera algo importante sobre tu salud, querrías saberlo?", subtitle: "Hay dos tipos de personas: las que quieren saber y actuan, y las que esperan que sea urgente." },
      { type: "list", title: "Los que saben tienen ventaja", items: [
        { emoji: "⚡", text: "Actuan antes", sub: "prevencion vs tratamiento" },
        { emoji: "📊", text: "Datos concretos", sub: "no intuicion ni suposiciones" },
        { emoji: "🔄", text: "Mejoran con tiempo", sub: "historial de progreso" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "yo si quiero saber · bioscanpro.net", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 127 -- AIDA -- Teal -- Spring ------------------------------------------
  {
    audioFile:        "audio/bioscan-127.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "teal",
    hookStyle:        "spring",
    durationInFrames: 1546,  // 49.6s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🚗", title: "A tu carro le haces diagnostico cada ano. Y a tu cuerpo?", subtitle: "El mecanico sabe exactamente que falla. BioScan IA hace lo mismo con tu salud." },
      { type: "compare", title: "Diagnostico del carro vs. diagnostico del cuerpo", left: { label: "Carro: diagnostico anual", value: "$80-150 / scanner" }, right: { label: "BioScan IA: tu cuerpo", value: "$5 / 79 parametros" }, subtitle: "Tu cuerpo merece mas atencion que tu carro. Y cuesta menos diagnosticarlo." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#14B8A6" },
        { value: "90s", label: "diagnostico", color: "#2DD4BF" },
        { value: "$5", label: "precio", color: "#99F6E4" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "el diagnostico de tu cuerpo · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 128 -- HSO -- Indigo -- Slide ------------------------------------------
  {
    audioFile:        "audio/bioscan-128.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "indigo",
    hookStyle:        "slide",
    durationInFrames: 1114,  // 35.1s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🔢", title: "Tienes un numero entre 0 y 100 que define tu estado de salud hoy. Sabes cual es?", subtitle: "Es tu BioScan Score. Calculado con 79 parametros reales en 90 segundos." },
      { type: "solution", emoji: "📱", stats: [
        { value: "0-100", label: "tu score", color: "#6366F1" },
        { value: "79", label: "parametros", color: "#818CF8" },
        { value: "$5", label: "precio", color: "#C7D2FE" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "descubre tu numero · solo una forma", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 129 -- Open Loop -- Blue -- Zoom ----------------------------------------
  {
    audioFile:        "audio/bioscan-129.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "blue",
    hookStyle:        "zoom",
    durationInFrames: 1196,  // 37.9s x30 + 60f
    scenes: [
      { type: "hook", emoji: "⏱️", title: "Cuantos anos le quedan a tu corazon si sigues viviendo como hoy?", subtitle: "No para deprimirte. Para motivarte a actuar con datos. AHA PREVENT 2023 tiene la respuesta." },
      { type: "list", title: "Tu riesgo cardiovascular a 10 anos incluye", items: [
        { emoji: "❤️", text: "Modelo AHA PREVENT", sub: "publicado 2023" },
        { emoji: "🇺🇸", text: "Calibrado CDC", sub: "5,856 adultos reales" },
        { emoji: "💊", text: "Accion posible hoy", sub: "con datos concretos" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "calcula tu futuro · actua hoy", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 130 -- AIDA -- Rose -- Spring ------------------------------------------
  {
    audioFile:        "audio/bioscan-130.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "rose",
    hookStyle:        "spring",
    durationInFrames: 1511,  // 48.4s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🩸", title: "Tu sangre dice mas sobre ti que 10 anos de historial medico.", subtitle: "BioScan IA la lee a traves de la camara. Sin agujas. Sin clinica." },
      { type: "proof", title: "Lo que tu sangre revela en 90 segundos.", items: [
        { emoji: "⚗️", text: "Beer-Lambert aplicado", sub: "oximetria medica avanzada" },
        { emoji: "🇺🇸", text: "CDC calibrado", sub: "5,856 adultos de referencia" },
        { emoji: "💉", text: "79 biomarcadores", sub: "desde glucosa a riesgo cardiaco" },
      ]},
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#F43F5E" },
        { value: "PPG", label: "sin agujas", color: "#FB7185" },
        { value: "$5", label: "precio", color: "#FDA4AF" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "lee tu sangre · sin agujas ni clinica", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

];
