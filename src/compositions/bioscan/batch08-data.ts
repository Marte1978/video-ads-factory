import { BioScanProAdProps } from "./BioScanProAd";

// Batch 08 -- Copies 071-080 -- Categoria: Tecnologia y Ciencia (cont.)
// Rotacion: cyan→purple→orange→green→red→gold→teal→indigo→blue→rose
// HookStyle: slide→zoom→spring→slide→zoom→spring→slide→zoom→spring→slide
// (continua desde batch07 que termino en spring)

export const batch08: BioScanProAdProps[] = [

  // -- 071 -- AIDA -- Cyan -- Slide ------------------------------------------
  {
    audioFile:        "audio/bioscan-071.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "cyan",
    hookStyle:        "slide",
    durationInFrames: 1471,  // 47.1s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🔭", title: "En 2030 todos tendran un analizador de salud en el celular. BioScan IA ya lo tiene.", subtitle: "La medicina predictiva basada en IA es el futuro. Ese futuro ya llego." },
      { type: "proof", title: "El futuro de la salud, disponible hoy.", items: [
        { emoji: "🤖", text: "IA predictiva", sub: "diagnostico antes de sintomas" },
        { emoji: "📊", text: "79 parametros", sub: "score de salud 0-100" },
        { emoji: "🇺🇸", text: "CDC NHANES", sub: "validacion cientifica real" },
      ]},
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#00D4FF" },
        { value: "90s", label: "resultado", color: "#00FF88" },
        { value: "$5", label: "precio", color: "#FFD700" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "el futuro ya llego · hoy", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 072 -- FAB -- Purple -- Zoom -------------------------------------------
  {
    audioFile:        "audio/bioscan-072.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "purple",
    hookStyle:        "zoom",
    durationInFrames: 1541,  // 49.4s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💯", title: "Tu credito tiene un score. Tu salud tambien deberia tenerlo.", subtitle: "0 a 100. Basado en 79 parametros reales. Actualizable cuando quieras." },
      { type: "proof", title: "Tu numero de salud personal.", items: [
        { emoji: "💯", text: "Score 0-100", sub: "tu estado de salud claro" },
        { emoji: "👥", text: "CDC NHANES", sub: "5,856 adultos de referencia" },
        { emoji: "❤️", text: "AHA PREVENT 2023", sub: "riesgo cardiovascular real" },
      ]},
      { type: "solution", emoji: "📱", stats: [
        { value: "0-100", label: "tu score", color: "#A855F7" },
        { value: "79", label: "parametros", color: "#E879F9" },
        { value: "$5", label: "precio", color: "#F0ABFC" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "tu numero de salud · siempre disponible", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 073 -- HSO -- Orange -- Spring -----------------------------------------
  {
    audioFile:        "audio/bioscan-073.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "orange",
    hookStyle:        "spring",
    durationInFrames: 1394,  // 44.5s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📄", title: "Un PDF con 79 indicadores de tu salud. Descargable. Compartible con tu medico.", subtitle: "Un documento real de tu estado de salud — generado en 90 segundos." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#F97316" },
        { value: "90s", label: "proceso total", color: "#FB923C" },
        { value: "$5", label: "precio", color: "#FED7AA" },
      ]},
      { type: "proof", title: "El reporte PDF incluye todo esto.", items: [
        { emoji: "📊", text: "79 parametros", sub: "valores y rangos normales" },
        { emoji: "💯", text: "Score de salud", sub: "de cero a cien" },
        { emoji: "❤️", text: "Riesgo AHA 2023", sub: "cardiovascular a 10 anos" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "reporte PDF incluido · descargable", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 074 -- PAS -- Green -- Slide -------------------------------------------
  {
    audioFile:        "audio/bioscan-074.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "green",
    hookStyle:        "slide",
    durationInFrames: 1703,  // 54.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🔍", title: "Cuantas apps de salud te dicen exactamente como calculan sus resultados?", subtitle: "Casi ninguna. BioScan IA si. Metodologia publicada y explicada." },
      { type: "problem", emoji: "❓", title: "Las cajas negras no generan confianza.", body: "La mayoria de apps de salud son algoritmos opacos. Sin datos citados. Sin metodologia explicada. Solo promesas vacias." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#22C55E" },
        { value: "CDC", label: "datos reales", color: "#4ADE80" },
        { value: "$5", label: "precio", color: "#BBF7D0" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "metodologia publicada · sin cajas negras", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 075 -- Story -- Red -- Zoom --------------------------------------------
  {
    audioFile:        "audio/bioscan-075.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "red",
    hookStyle:        "zoom",
    durationInFrames: 1304,  // 41.5s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🫁", title: "Los oximetros salvaron millones de vidas durante el COVID. BioScan IA usa la misma tecnologia.", subtitle: "Oximetria avanzada Beer-Lambert. Mas 78 parametros adicionales." },
      { type: "list", title: "La tecnologia COVID, ahora en 79 parametros", items: [
        { emoji: "💡", text: "Oximetria Beer-Lambert", sub: "probada en pandemia" },
        { emoji: "🇺🇸", text: "CDC NHANES reales", sub: "5,856 adultos calibrados" },
        { emoji: "❤️", text: "AHA PREVENT 2023", sub: "riesgo cardiaco preciso" },
        { emoji: "📊", text: "78 parametros extra", sub: "mas alla del SpO2" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "tecnologia probada · ampliada a 79 params", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 076 -- AIDA -- Gold -- Spring ------------------------------------------
  {
    audioFile:        "audio/bioscan-076.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "gold",
    hookStyle:        "spring",
    durationInFrames: 1487,  // 47.6s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🧠", title: "Cada analisis hace que BioScan IA sea mas preciso.", subtitle: "IA colectiva. Mejora con cada uso. Mejor para todos." },
      { type: "compare", title: "BioScan IA vs apps estaticas", left: { label: "Apps estaticas", value: "mismo algoritmo siempre" }, right: { label: "BioScan IA", value: "mejora con cada analisis" }, subtitle: "Los algoritmos se refinan. La precision aumenta continuamente." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#F59E0B" },
        { value: "IA+", label: "que mejora", color: "#FBBF24" },
        { value: "$5", label: "precio", color: "#FCD34D" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "se parte de la revolucion · IA colectiva", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 077 -- FAB -- Teal -- Slide --------------------------------------------
  {
    audioFile:        "audio/bioscan-077.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "teal",
    hookStyle:        "slide",
    durationInFrames: 1292,  // 41.1s x30 + 60f
    scenes: [
      { type: "hook", emoji: "👨‍⚕️", title: "BioScan IA no reemplaza a tu medico. Le da mas informacion para ayudarte mejor.", subtitle: "Llega a tu proxima cita con un reporte de 79 parametros." },
      { type: "list", title: "Lo que tu medico vera en tu reporte", items: [
        { emoji: "❤️", text: "Riesgo cardiovascular", sub: "AHA PREVENT 2023" },
        { emoji: "💉", text: "Glucosa estimada", sub: "tendencia metabolica" },
        { emoji: "🫀", text: "Funcion renal estimada", sub: "salud de rinones" },
        { emoji: "💯", text: "Score 0-100", sub: "estado general de salud" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "potencia tu proxima cita medica", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 078 -- PAS -- Indigo -- Zoom -------------------------------------------
  {
    audioFile:        "audio/bioscan-078.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "indigo",
    hookStyle:        "zoom",
    durationInFrames: 1742,  // 56.1s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📸", title: "La camara de tu celular tiene mejor resolucion que muchos sensores medicos de hace 10 anos.", subtitle: "Fotopletismografia de precision medica. BioScan IA la activa." },
      { type: "proof", title: "Tu celular ya era un medico.", items: [
        { emoji: "📸", text: "Sensor PPG preciso", sub: "detecta flujo sanguineo" },
        { emoji: "⚗️", text: "Beer-Lambert aplicado", sub: "oximetria avanzada" },
        { emoji: "🇺🇸", text: "Calibrado CDC", sub: "5,856 adultos reales" },
      ]},
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#6366F1" },
        { value: "PPG", label: "sensor medico", color: "#818CF8" },
        { value: "$5", label: "precio", color: "#C7D2FE" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "activa el medico en tu celular", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 079 -- Educativo -- Blue -- Spring -------------------------------------
  {
    audioFile:        "audio/bioscan-079.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "blue",
    hookStyle:        "spring",
    durationInFrames: 1463,  // 46.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📡", title: "Los sintomas son senales cuando ya es tarde. Los datos son las advertencias tempranas.", subtitle: "De reactivo a preventivo. BioScan IA mide 79 indicadores antes de que aparezcan sintomas." },
      { type: "list", title: "Datos que detectan antes de los sintomas", items: [
        { emoji: "❤️", text: "Riesgo cardiovascular", sub: "a 10 anos AHA PREVENT" },
        { emoji: "💉", text: "Glucosa estimada", sub: "metabolismo antes del dolor" },
        { emoji: "🫁", text: "SpO2 y funcion pulmonar", sub: "sin esperar disnea" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "prevencion real · datos antes de sintomas", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 080 -- HSO -- Rose -- Slide --------------------------------------------
  {
    audioFile:        "audio/bioscan-080.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "rose",
    hookStyle:        "slide",
    durationInFrames: 1728,  // 55.6s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🔐", title: "Pago seguro con Stripe. Datos privados. Garantia de devolucion total.", subtitle: "Tu dinero y tu privacidad protegidos. Sin riesgo." },
      { type: "proof", title: "Triple proteccion garantizada.", items: [
        { emoji: "💳", text: "Pago con Stripe", sub: "el mas seguro del mundo" },
        { emoji: "🔒", text: "Datos privados", sub: "nunca se venden a terceros" },
        { emoji: "↩️", text: "Devolucion total", sub: "sin preguntas si no satisfecho" },
      ]},
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#F43F5E" },
        { value: "100%", label: "devolucion", color: "#FB7185" },
        { value: "$5", label: "precio", color: "#FDA4AF" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "sin riesgo · garantia total de devolucion", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

];
