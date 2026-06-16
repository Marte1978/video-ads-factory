import { BioScanProAdProps } from "./BioScanProAd";

// Batch 14 -- Copies 131-140 -- Categoria: Curiosidad / Open Loop (cont.)
// Rotacion: cyan→purple→orange→green→red→gold→teal→indigo→blue→rose
// HookStyle: slide→zoom→spring→slide→zoom→spring→slide→zoom→spring→slide
// (continua desde batch13 que termino en spring)

export const batch14: BioScanProAdProps[] = [

  // -- 131 -- Open Loop testimonial -- Cyan -- Slide ---------------------------
  {
    audioFile:        "audio/bioscan-131.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "cyan",
    hookStyle:        "slide",
    durationInFrames: 1445,  // 46.2s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🔍", title: "Hice el analisis por curiosidad. No esperaba lo que encontre.", subtitle: "Me sentia bien. Hacia ejercicio. Dormia bien. Y aun asi BioScan IA revelo algo que atender." },
      { type: "proof", title: "Lo que un analisis de $5 puede revelar.", items: [
        { emoji: "❤️", text: "Variabilidad cardiaca baja", sub: "sin sintomas visibles" },
        { emoji: "⚠️", text: "Riesgo cardiovascular elevado", sub: "mayor de lo esperado para la edad" },
        { emoji: "🩺", text: "Reporte PDF para el medico", sub: "confirmacion clinica inmediata" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "descubre tu realidad · 90 segundos", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 132 -- Open Loop curiosidad -- Purple -- Zoom ---------------------------
  {
    audioFile:        "audio/bioscan-132.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "purple",
    hookStyle:        "zoom",
    durationInFrames: 1333,  // 42.5s x30 + 60f
    scenes: [
      { type: "hook", emoji: "❓", title: "Cual es tu presion arterial hoy. La mayoria no lo sabe.", subtitle: "La hipertension es el asesino silencioso. Sin sintomas hasta que ya es tarde." },
      { type: "list", title: "BioScan IA te da las respuestas que no tienes", items: [
        { emoji: "🩸", text: "Presion arterial estimada", sub: "sin aparato ni clinica" },
        { emoji: "🫁", text: "SpO2 en tiempo real", sub: "saturacion de oxigeno" },
        { emoji: "❤️", text: "Riesgo cardiovascular AHA 2023", sub: "a 10 anos calibrado CDC" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "conoce tus numeros · 90 segundos", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 133 -- Curiosidad ciencia -- Orange -- Spring ---------------------------
  {
    audioFile:        "audio/bioscan-133.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "orange",
    hookStyle:        "spring",
    durationInFrames: 1242,  // 39.4s x30 + 60f
    scenes: [
      { type: "hook", emoji: "❤️", title: "Tu corazon genera energia para manejar un camion 32km al dia. Cuidas esa maquina?", subtitle: "La maquina mas eficiente de la naturaleza late sin descanso desde antes de nacer." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#F97316" },
        { value: "HRV", label: "variabilidad", color: "#FB923C" },
        { value: "$5", label: "precio", color: "#FED7AA" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "cuida tu motor · diagnostico ahora", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 134 -- Prevencion silenciosa -- Green -- Slide --------------------------
  {
    audioFile:        "audio/bioscan-134.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "green",
    hookStyle:        "slide",
    durationInFrames: 1371,  // 43.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "😮", title: "Si piensas que no necesitas chequeo porque te sientes bien, este mensaje es para ti.", subtitle: "El 80% de quienes mueren de infarto nunca tuvieron sintomas previos significativos." },
      { type: "problem", emoji: "🔕", title: "La salud silenciosa es la mas peligrosa.", body: "BioScan IA analiza lo que no duele, no se ve y no se siente. Detecta antes de que sea tarde. 79 parametros. Calibrado CDC. Algoritmo AHA PREVENT 2023." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "checheate aunque te sientas bien · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 135 -- Self-knowledge gap -- Red -- Zoom --------------------------------
  {
    audioFile:        "audio/bioscan-135.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "red",
    hookStyle:        "zoom",
    durationInFrames: 1440,  // 46.0s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🤷", title: "Sabes el nivel de bateria de tu celular. Pero no sabes tu SpO2.", subtitle: "Sabemos el precio de la gasolina. No sabemos si nuestro riesgo cardiovascular es alto." },
      { type: "list", title: "Lo que BioScan IA cierra para siempre", items: [
        { emoji: "🫁", text: "Tu SpO2 real ahora mismo", sub: "la mayoria no lo sabe" },
        { emoji: "🩸", text: "Tu presion arterial de hoy", sub: "sin aparato en casa" },
        { emoji: "❤️", text: "Tu riesgo cardiovascular", sub: "alto o bajo · AHA 2023" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "conocete de verdad · 79 parametros", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 136 -- Conciencia corporal -- Gold -- Spring ----------------------------
  {
    audioFile:        "audio/bioscan-136.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "gold",
    hookStyle:        "spring",
    durationInFrames: 1205,  // 38.2s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🌅", title: "Antes de BioScan IA vivia en piloto automatico. Todo cambio con los datos.", subtitle: "Cuando tienes numeros concretos, cambias la relacion con tu propio cuerpo." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "verdades", color: "#EAB308" },
        { value: "HRV", label: "sueno real", color: "#FACC15" },
        { value: "$5", label: "precio", color: "#FEF08A" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "despierta tu conciencia · datos reales", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 137 -- Sorpresa 90s -- Teal -- Slide ------------------------------------
  {
    audioFile:        "audio/bioscan-137.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "teal",
    hookStyle:        "slide",
    durationInFrames: 1401,  // 44.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "⏱️", title: "Noventa segundos. Lo que descubres puede sorprenderte en cualquier direccion.", subtitle: "Algunos descubren que estan mejor de lo que pensaban. Otros reciben una alerta que llega a tiempo." },
      { type: "proof", title: "Dos tipos de descubrimiento. Ambos valiosos.", items: [
        { emoji: "✅", text: "Score alto · todo en rango", sub: "validacion y tranquilidad real" },
        { emoji: "⚠️", text: "Alerta temprana detectada", sub: "tiempo de actuar antes" },
        { emoji: "📖", text: "Siempre aprendes algo nuevo", sub: "sobre ti mismo y tu cuerpo" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "que descubriras tu · noventa segundos", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 138 -- Tecnologia celular -- Indigo -- Zoom -----------------------------
  {
    audioFile:        "audio/bioscan-138.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "indigo",
    hookStyle:        "zoom",
    durationInFrames: 1294,  // 41.1s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📱", title: "Tu celular sabe donde estas. Por que no sabia como estabas de salud.", subtitle: "GPS. Acelerometro. Giroscopio. Camera 4K. Todo menos el sensor de salud que faltaba." },
      { type: "solution", emoji: "📷", stats: [
        { value: "PPG", label: "sensor activo", color: "#6366F1" },
        { value: "79", label: "parametros", color: "#818CF8" },
        { value: "$5", label: "precio", color: "#C7D2FE" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "la pieza que faltaba · activala hoy", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 139 -- Explicacion cientifica -- Blue -- Spring -------------------------
  {
    audioFile:        "audio/bioscan-139.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "blue",
    hookStyle:        "spring",
    durationInFrames: 1373,  // 43.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🔬", title: "Que pasa exactamente en los 90 segundos que pones el dedo en la camara.", subtitle: "Beer-Lambert. CDC NHANES. 5,800 adultos de referencia. Ciencia optica real. No magia." },
      { type: "proof", title: "El proceso cientifico en 3 pasos.", items: [
        { emoji: "💡", text: "Variacion de luz en capilares", sub: "misma fisica que pulsioximetros medicos" },
        { emoji: "🇺🇸", text: "Algoritmos calibrados CDC", sub: "5,856 adultos reales de referencia" },
        { emoji: "📊", text: "79 parametros personalizados", sub: "en exactamente 90 segundos" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "vivelo tu mismo · ciencia real", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 140 -- CTA emocional -- Rose -- Slide ------------------------------------
  {
    audioFile:        "audio/bioscan-140.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "rose",
    hookStyle:        "slide",
    durationInFrames: 1278,  // 40.6s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🌱", title: "Y si hay algo que puedes cambiar hoy que cambia todo lo que viene despues.", subtitle: "Los cambios mas poderosos empiezan con informacion. No con intenciones. Con datos." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#F43F5E" },
        { value: "PDF", label: "reporte", color: "#FB7185" },
        { value: "$5", label: "precio", color: "#FDA4AF" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "el cambio empieza aqui · datos reales", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

];
