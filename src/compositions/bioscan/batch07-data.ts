import { BioScanProAdProps } from "./BioScanProAd";

// Batch 07 -- Copies 061-070 -- Categoria: Tecnologia y Ciencia
// Rotacion: cyan→purple→orange→green→red→gold→teal→indigo→blue→rose
// HookStyle: spring→slide→zoom (continua desde batch06 que termino en zoom)

export const batch07: BioScanProAdProps[] = [

  // -- 061 -- AIDA -- Cyan -- Spring -----------------------------------------
  {
    audioFile:        "audio/bioscan-061.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "cyan",
    hookStyle:        "spring",
    durationInFrames: 1709,  // 55.0s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🔬", title: "La misma fisica que usan los hospitales. Ahora en tu bolsillo.", subtitle: "Ley de Beer-Lambert. Pulsioximetria medica. En la camara de tu celular." },
      { type: "proof", title: "Ciencia medica real.", items: [
        { emoji: "⚗️", text: "Beer-Lambert", sub: "base de oximetros medicos" },
        { emoji: "🇺🇸", text: "CDC NHANES", sub: "5,856 adultos reales" },
        { emoji: "❤️", text: "AHA PREVENT 2023", sub: "estandar cardiaco mundial" },
      ]},
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "indicadores", color: "#00D4FF" },
        { value: "90s", label: "resultado", color: "#00FF88" },
        { value: "$5", label: "precio", color: "#FFD700" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "tecnologia medica real · accesible", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 062 -- FAB -- Purple -- Slide ------------------------------------------
  {
    audioFile:        "audio/bioscan-062.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "purple",
    hookStyle:        "slide",
    durationInFrames: 2005,  // 64.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🏛️", title: "Base de datos de 5,856 adultos reales del CDC. No de un algoritmo inventado.", subtitle: "El CDC es la institucion de salud publica mas respetada del mundo." },
      { type: "proof", title: "Datos reales. No simulaciones.", items: [
        { emoji: "🇺🇸", text: "CDC NHANES", sub: "estandar epidemiologico" },
        { emoji: "👥", text: "5,856 adultos", sub: "todas edades y etnias" },
        { emoji: "📊", text: "Estudio longitudinal", sub: "datos verificados" },
      ]},
      { type: "solution", emoji: "🔬", stats: [
        { value: "79", label: "parametros", color: "#A855F7" },
        { value: "5,856", label: "adultos CDC", color: "#E879F9" },
        { value: "$5", label: "precio", color: "#F0ABFC" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "ciencia del CDC · no marketing", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 063 -- HSO -- Orange -- Zoom -------------------------------------------
  {
    audioFile:        "audio/bioscan-063.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "orange",
    hookStyle:        "zoom",
    durationInFrames: 1705,  // 54.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🏗️", title: "Lo que antes requeria un laboratorio completo, hoy cabe en la camara de tu celular.", subtitle: "La miniaturizacion medica es la revolucion de nuestro tiempo." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#F97316" },
        { value: "vs $100k", label: "laboratorio", color: "#FB923C" },
        { value: "$5", label: "tu celular", color: "#FED7AA" },
      ]},
      { type: "proof", title: "La vanguardia tecnologica medica.", items: [
        { emoji: "⚗️", text: "Beer-Lambert", sub: "oximetria avanzada" },
        { emoji: "❤️", text: "AHA PREVENT 2023", sub: "riesgo cardiovascular" },
        { emoji: "🇺🇸", text: "CDC NHANES", sub: "validacion real" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "el futuro es hoy", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 064 -- PAS -- Green -- Spring ------------------------------------------
  {
    audioFile:        "audio/bioscan-064.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "green",
    hookStyle:        "spring",
    durationInFrames: 1988,  // 64.3s x30 + 60f
    scenes: [
      { type: "hook", emoji: "❓", title: "Como puede una camara de celular medir tu salud?", subtitle: "Buena pregunta. Es fisica optica aplicada." },
      { type: "problem", emoji: "💡", title: "La luz LED penetra la piel y detecta el flujo de oxigeno en la sangre.", body: "El mismo principio que usan los pulsioximetros medicos en hospitales." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#22C55E" },
        { value: "90s", label: "proceso total", color: "#4ADE80" },
        { value: "$5", label: "precio", color: "#BBF7D0" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "pruebalo tu mismo · es real", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 065 -- Story -- Red -- Slide -------------------------------------------
  {
    audioFile:        "audio/bioscan-065.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "red",
    hookStyle:        "slide",
    durationInFrames: 1707,  // 54.9s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🤖", title: "Imagina tener un medico de cabecera disponible 24/7 en tu celular.", subtitle: "No es imaginacion. Es BioScan IA." },
      { type: "list", title: "Tu medico digital hace todo esto", items: [
        { emoji: "📊", text: "Analiza 79 parametros", sub: "en 90 segundos" },
        { emoji: "💬", text: "Explica cada resultado", sub: "sin terminos medicos" },
        { emoji: "⚠️", text: "Identifica areas de riesgo", sub: "y cuales estan optimas" },
        { emoji: "📋", text: "Da recomendaciones", sub: "personalizadas para ti" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "tu medico digital · siempre disponible", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 066 -- AIDA -- Gold -- Zoom --------------------------------------------
  {
    audioFile:        "audio/bioscan-066.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "gold",
    hookStyle:        "zoom",
    durationInFrames: 2113,  // 68.4s x30 + 60f
    scenes: [
      { type: "hook", emoji: "⌚", title: "Tu celular ya mide pasos, calorias y sueno. Por que no 79 parametros de salud real?", subtitle: "Sin pulsera. Sin gadget adicional. Solo la camara que ya tienes." },
      { type: "compare", title: "BioScan IA vs pulsera fitness", left: { label: "Pulsera fitness", value: "5 datos / $400" }, right: { label: "BioScan IA", value: "79 datos / $5" }, subtitle: "16x mas parametros. 80x mas barato." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#F59E0B" },
        { value: "16x", label: "vs smartwatch", color: "#FBBF24" },
        { value: "$5", label: "precio total", color: "#FCD34D" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "sin gadgets extras · solo tu celular", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 067 -- FAB -- Teal -- Spring -------------------------------------------
  {
    audioFile:        "audio/bioscan-067.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "teal",
    hookStyle:        "spring",
    durationInFrames: 1632,  // 52.4s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🍎", title: "Tu reloj inteligente mide 5 cosas. BioScan IA mide 79.", subtitle: "Apple Watch: $400+. BioScan IA: $5. 16x mas completo." },
      { type: "compare", title: "La comparacion habla por si sola", left: { label: "Apple Watch", value: "$400 / 5 param" }, right: { label: "BioScan IA", value: "$5 / 79 param" }, subtitle: "El mismo SpO2. Mas presion. Mas glucosa. Mas riesgo cardiaco." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "16x mas completo · 80x mas barato", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 068 -- PAS -- Indigo -- Slide ------------------------------------------
  {
    audioFile:        "audio/bioscan-068.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "indigo",
    hookStyle:        "slide",
    durationInFrames: 1915,  // 61.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "❤️", title: "El modelo PREVENT 2023 de la American Heart Association. En tu celular por $5.", subtitle: "El algoritmo cardiaco que usan los cardiologos lideres del mundo." },
      { type: "proof", title: "El estandar cardiaco mas avanzado.", items: [
        { emoji: "❤️", text: "AHA PREVENT 2023", sub: "publicado 2023" },
        { emoji: "🏥", text: "Cardiólogos lideres", sub: "lo usan globalmente" },
        { emoji: "📊", text: "Riesgo a 10 anos", sub: "precision superior" },
      ]},
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "indicadores", color: "#6366F1" },
        { value: "AHA", label: "PREVENT 2023", color: "#818CF8" },
        { value: "$5", label: "precio", color: "#C7D2FE" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "tecnologia cardiologica de primer nivel", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 069 -- Educativo -- Blue -- Zoom ---------------------------------------
  {
    audioFile:        "audio/bioscan-069.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "blue",
    hookStyle:        "zoom",
    durationInFrames: 1632,  // 52.4s x30 + 60f
    scenes: [
      { type: "hook", emoji: "✨", title: "Cuando pones el dedo en la camara, pasan 3 cosas increibles.", subtitle: "Luz LED → flujo sanguineo → 79 parametros. En 90 segundos." },
      { type: "list", title: "La magia de la ciencia en 3 pasos", items: [
        { emoji: "💡", text: "LED penetra la piel", sub: "detecta hemoglobina" },
        { emoji: "🧮", text: "Algoritmos Beer-Lambert", sub: "calibrados en CDC" },
        { emoji: "📊", text: "79 parametros calculados", sub: "en 90 segundos" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "fisica optica aplicada · no magia", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 070 -- HSO -- Rose -- Spring -------------------------------------------
  {
    audioFile:        "audio/bioscan-070.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "rose",
    hookStyle:        "spring",
    durationInFrames: 1860,  // 60.0s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🔭", title: "20 parametros directos. 59 estimados por IA con datos del CDC.", subtitle: "Transparencia total. Sin cajas negras. Ciencia honesta." },
      { type: "proof", title: "Metodologia 100% transparente.", items: [
        { emoji: "📏", text: "20 parametros directos", sub: "oximetria pura" },
        { emoji: "🤖", text: "59 estimados por IA", sub: "entrenados en CDC" },
        { emoji: "🔓", text: "Sin cajas negras", sub: "metodologia abierta" },
      ]},
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "total parametros", color: "#F43F5E" },
        { value: "CDC", label: "validacion real", color: "#FB7185" },
        { value: "$5", label: "precio", color: "#FDA4AF" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "transparencia total · ciencia honesta", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

];
