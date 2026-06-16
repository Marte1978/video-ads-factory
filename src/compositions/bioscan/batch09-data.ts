import { BioScanProAdProps } from "./BioScanProAd";

// Batch 09 -- Copies 081-090 -- Categoria: Familia y Proteccion
// Rotacion: cyan→purple→orange→green→red→gold→teal→indigo→blue→rose
// HookStyle: zoom→spring→slide→zoom→spring→slide→zoom→spring→slide→zoom
// (continua desde batch08 que termino en slide)

export const batch09: BioScanProAdProps[] = [

  // -- 081 -- Storytelling -- Cyan -- Zoom ------------------------------------
  {
    audioFile:        "audio/bioscan-081.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "cyan",
    hookStyle:        "zoom",
    durationInFrames: 1463,  // 46.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "👨‍👧", title: "Quien cuidara a tus hijos si a ti te pasa algo?", subtitle: "No es morboso. Es la pregunta mas importante de cualquier padre." },
      { type: "list", title: "BioScan IA te ayuda a estar presente", items: [
        { emoji: "❤️", text: "Riesgo cardiovascular", sub: "AHA PREVENT 2023" },
        { emoji: "🇺🇸", text: "CDC NHANES", sub: "5,856 adultos reales" },
        { emoji: "💯", text: "Score 0-100", sub: "tu estado de salud hoy" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "por ellos · cuida tu salud", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 082 -- PAS -- Purple -- Spring -----------------------------------------
  {
    audioFile:        "audio/bioscan-082.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "purple",
    hookStyle:        "spring",
    durationInFrames: 1541,  // 49.4s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💑", title: "Tu pareja necesita que estes bien. Cuando fue la ultima vez que te chequeaste?", subtitle: "Cuidarte no es egoismo. Es la mayor responsabilidad con los que te aman." },
      { type: "problem", emoji: "⚠️", title: "Sin datos, no puedes proteger a tu familia.", body: "Los accidentes cardiovasculares llegan sin sintomas previos. Sin monitoreo preventivo, la deteccion llega demasiado tarde." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#A855F7" },
        { value: "90s", label: "resultado", color: "#E879F9" },
        { value: "$5", label: "precio", color: "#F0ABFC" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "cuidate por los tuyos · datos reales", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 083 -- FAB -- Orange -- Slide ------------------------------------------
  {
    audioFile:        "audio/bioscan-083.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "orange",
    hookStyle:        "slide",
    durationInFrames: 1432,  // 45.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "👨‍👩‍👧‍👦", title: "Analiza la salud de toda tu familia por $18 USD total.", subtitle: "4 analisis completos. $4.50 por persona. 316 parametros familiares." },
      { type: "proof", title: "Pack Familiar BioScan IA.", items: [
        { emoji: "👥", text: "4 analisis completos", sub: "$18 USD total" },
        { emoji: "📄", text: "4 reportes PDF", sub: "uno por miembro" },
        { emoji: "🤖", text: "Asistente IA", sub: "para cada persona" },
      ]},
      { type: "solution", emoji: "📱", stats: [
        { value: "4", label: "analisis", color: "#F97316" },
        { value: "316", label: "parametros", color: "#FB923C" },
        { value: "$18", label: "familia", color: "#FED7AA" },
      ]},
      { type: "cta", plan: "Pack Familiar", price: "$18 USD", priceNote: "protege a tu familia · 4 analisis", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 084 -- Empatia -- Green -- Zoom ----------------------------------------
  {
    audioFile:        "audio/bioscan-084.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "green",
    hookStyle:        "zoom",
    durationInFrames: 1384,  // 44.2s x30 + 60f
    scenes: [
      { type: "hook", emoji: "👴", title: "Tus papas dicen que estan bien. Pero cuando se chequearon por ultima vez?", subtitle: "Los adultos mayores minimizan los sintomas. BioScan IA les da datos objetivos." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#22C55E" },
        { value: "90s", label: "proceso", color: "#4ADE80" },
        { value: "$5", label: "regalo", color: "#BBF7D0" },
      ]},
      { type: "proof", title: "El analisis que tus papas merecen.", items: [
        { emoji: "❤️", text: "Riesgo cardiovascular", sub: "AHA PREVENT 2023" },
        { emoji: "💉", text: "Glucosa estimada", sub: "control metabolico" },
        { emoji: "💯", text: "Score 0-100", sub: "puedes verlo tu tambien" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "cuida a tus papas · regala salud", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 085 -- Storytelling -- Red -- Spring -----------------------------------
  {
    audioFile:        "audio/bioscan-085.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "red",
    hookStyle:        "spring",
    durationInFrames: 1463,  // 46.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💪", title: "Cuidas a todos menos a ti misma.", subtitle: "Eres la primera en levantarse y la ultima en acostarse. BioScan IA es para ti." },
      { type: "list", title: "90 segundos para la persona mas importante", items: [
        { emoji: "❤️", text: "Tu salud cardiovascular", sub: "AHA PREVENT 2023" },
        { emoji: "💉", text: "Tu glucosa estimada", sub: "control metabolico" },
        { emoji: "💯", text: "Tu score 0-100", sub: "tu estado real hoy" },
        { emoji: "📄", text: "Tu reporte PDF", sub: "para compartir con tu medico" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "cuidate tu tambien · lo mereces", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 086 -- AIDA -- Gold -- Slide -------------------------------------------
  {
    audioFile:        "audio/bioscan-086.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "gold",
    hookStyle:        "slide",
    durationInFrames: 1347,  // 42.9s x30 + 60f
    scenes: [
      { type: "hook", emoji: "👶", title: "Los hijos aprenden lo que ven. Muestrasles que la salud importa.", subtitle: "Un habito que puede cambiar la cultura de salud familiar para siempre." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#F59E0B" },
        { value: "90s", label: "habito diario", color: "#FBBF24" },
        { value: "$5", label: "precio", color: "#FCD34D" },
      ]},
      { type: "proof", title: "El habito mas poderoso para tu familia.", items: [
        { emoji: "🧒", text: "Los hijos imitan", sub: "lo que ven en casa" },
        { emoji: "📊", text: "Datos reales", sub: "no promesas abstractas" },
        { emoji: "🔄", text: "Monitoreo continuo", sub: "salud como estilo de vida" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "se el ejemplo · cultura de salud", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 087 -- PAS -- Teal -- Zoom ---------------------------------------------
  {
    audioFile:        "audio/bioscan-087.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "teal",
    hookStyle:        "zoom",
    durationInFrames: 1556,  // 49.9s x30 + 60f
    scenes: [
      { type: "hook", emoji: "👵", title: "Tu abuela no va al medico para no molestar. Pero si puede usar esto.", subtitle: "BioScan IA: tan simple como tomar una foto con el celular." },
      { type: "problem", emoji: "⚠️", title: "Adultos mayores que evitan la clinica.", body: "Por miedo, por comodidad o por no querer preocupar. Problemas de salud que se detectan demasiado tarde porque nadie los monitoreo." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#14B8A6" },
        { value: "90s", label: "sin clinica", color: "#2DD4BF" },
        { value: "$5", label: "precio", color: "#99F6E4" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "para todas las edades · facil de usar", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 088 -- HSO -- Indigo -- Spring -----------------------------------------
  {
    audioFile:        "audio/bioscan-088.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "indigo",
    hookStyle:        "spring",
    durationInFrames: 1362,  // 43.4s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🎁", title: "Que regalarle a quien ya tiene todo? Su chequeo de salud.", subtitle: "El regalo mas original y valioso: un analisis completo de BioScan IA." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#6366F1" },
        { value: "PDF", label: "reporte", color: "#818CF8" },
        { value: "$5", label: "regalo", color: "#C7D2FE" },
      ]},
      { type: "proof", title: "El regalo que dice: me importas.", items: [
        { emoji: "❤️", text: "Salud cardiovascular", sub: "AHA PREVENT 2023" },
        { emoji: "🤖", text: "Asistente IA", sub: "explica cada resultado" },
        { emoji: "↩️", text: "Garantia total", sub: "devolucion si no satisfecho" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "el regalo de la salud · unico", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 089 -- Storytelling -- Blue -- Slide -----------------------------------
  {
    audioFile:        "audio/bioscan-089.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "blue",
    hookStyle:        "slide",
    durationInFrames: 1348,  // 43.0s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💙", title: "Perdi a mi papa por algo que pudimos haber detectado.", subtitle: "Ese dolor puede convertirse en motivacion. La informacion marca la diferencia." },
      { type: "proof", title: "BioScan IA detecta lo que no se siente.", items: [
        { emoji: "❤️", text: "Riesgo cardiovascular", sub: "AHA PREVENT 2023" },
        { emoji: "🇺🇸", text: "CDC NHANES", sub: "5,856 adultos validados" },
        { emoji: "💯", text: "Score 0-100", sub: "informacion que cambia decisiones" },
      ]},
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#3B82F6" },
        { value: "90s", label: "resultado", color: "#60A5FA" },
        { value: "$5", label: "precio", color: "#BFDBFE" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "por los que amas · prevencion real", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 090 -- AIDA -- Rose -- Zoom --------------------------------------------
  {
    audioFile:        "audio/bioscan-090.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "rose",
    hookStyle:        "zoom",
    durationInFrames: 1478,  // 47.3s x30 + 60f
    scenes: [
      { type: "hook", emoji: "👨‍👧‍👦", title: "Tus hijos te necesitan sano. No en un hospital.", subtitle: "Cada ano que prevendes un problema es un ano mas con ellos." },
      { type: "list", title: "Por mas anos con los que amas", items: [
        { emoji: "🎓", text: "Su graduacion", sub: "estar presente para verla" },
        { emoji: "💒", text: "Su boda", sub: "caminar junto a ellos" },
        { emoji: "👶", text: "Tus nietos", sub: "conocerlos y verlos crecer" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "por mas anos con ellos · cuidade", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

];
