import { BioScanProAdProps } from "./BioScanProAd";

// Batch 04 -- Copies 031-040 -- Categoria: Precio / Acceso Economico (cont.)
// Rotacion: cyan→purple→orange→green→red→gold→teal→indigo→blue→rose
// HookStyle: spring→slide→zoom (continua desde batch03 que termino en zoom)

export const batch04: BioScanProAdProps[] = [

  // -- 031 -- AIDA -- Cyan -- Spring -----------------------------------------
  {
    audioFile:        "audio/bioscan-031.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "cyan",
    hookStyle:        "spring",
    durationInFrames: 1968,  // 63.6s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🏥", title: "Espere 4 horas en urgencias para que me dijeran: todo esta bien.", subtitle: "Cuatro horas. Sin comer. Sin trabajar. Y al final: todo normal." },
      { type: "problem", emoji: "😤", title: "Eso no es sistema de salud. Eso es trampa.", body: "Con BioScan IA sabes en 90 segundos si realmente necesitas urgencias." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "indicadores", color: "#00D4FF" },
        { value: "90s", label: "resultado", color: "#00FF88" },
        { value: "$5", label: "precio", color: "#FFD700" },
      ]},
      { type: "proof", title: "Tu segunda opinion instantanea.", items: [
        { emoji: "❤️", text: "AHA PREVENT 2023", sub: "riesgo cardiaco" },
        { emoji: "🇺🇸", text: "CDC NHANES", sub: "5,856 adultos" },
        { emoji: "📄", text: "Reporte PDF", sub: "al instante" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "tu segunda opinion instantanea", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 032 -- HSO -- Purple -- Slide ------------------------------------------
  {
    audioFile:        "audio/bioscan-032.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "purple",
    hookStyle:        "slide",
    durationInFrames: 1623,  // 52.1s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💰", title: "El dinero que ahorres en visitas innecesarias puede cambiarte la vida.", subtitle: "Cuantas veces pagaste $150 para que te dijeran: esta sano, tome agua." },
      { type: "problem", emoji: "🔄", title: "BioScan IA es la respuesta en 90 segundos.", body: "Reserva las citas medicas para cuando de verdad las necesites." },
      { type: "solution", emoji: "💸", stats: [
        { value: "79", label: "indicadores", color: "#A855F7" },
        { value: "$5", label: "vs $150 cita", color: "#E879F9" },
        { value: "90s", label: "resultado", color: "#F0ABFC" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "ahorra · decide inteligente", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 033 -- Story -- Orange -- Zoom -----------------------------------------
  {
    audioFile:        "audio/bioscan-033.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "orange",
    hookStyle:        "zoom",
    durationInFrames: 2018,  // 65.3s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🌍", title: "Esta tecnologia antes solo existia en hospitales privados de primer mundo.", subtitle: "Hoy esta en tu celular. Por $5." },
      { type: "proof", title: "La ciencia que lo hace posible.", items: [
        { emoji: "⚗️", text: "Beer-Lambert", sub: "oximetria medica" },
        { emoji: "🇺🇸", text: "CDC NHANES", sub: "5,856 adultos" },
        { emoji: "❤️", text: "AHA PREVENT 2023", sub: "estandar cardiaco" },
      ]},
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#F97316" },
        { value: "13", label: "sistemas", color: "#FB923C" },
        { value: "$5", label: "para todos", color: "#FED7AA" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "la tecnologia medica que mereces", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 034 -- FAB -- Green -- Spring ------------------------------------------
  {
    audioFile:        "audio/bioscan-034.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "green",
    hookStyle:        "spring",
    durationInFrames: 1885,  // 60.9s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🔬", title: "Por $5 obtienes mas informacion de salud que en muchos chequeos de $100.", subtitle: "Un chequeo basico: 4-5 datos. BioScan IA: 79 parametros." },
      { type: "compare", title: "La diferencia es abismal", left: { label: "Chequeo basico", value: "$100 / 5 param" }, right: { label: "BioScan IA", value: "$5 / 79 param" }, subtitle: "20x mas barato. 15x mas parametros." },
      { type: "solution", emoji: "📊", stats: [
        { value: "79", label: "parametros", color: "#22C55E" },
        { value: "13", label: "sistemas", color: "#4ADE80" },
        { value: "$5", label: "total", color: "#BBF7D0" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "mas por menos · garantia incluida", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 035 -- PAS -- Red -- Slide ---------------------------------------------
  {
    audioFile:        "audio/bioscan-035.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "red",
    hookStyle:        "slide",
    durationInFrames: 2108,  // 68.3s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🏥", title: "Una hospitalizacion puede costarte $10,000.", subtitle: "Un analisis preventivo con BioScan IA cuesta $5." },
      { type: "problem", emoji: "⚠️", title: "Detectar a tiempo es exponencialmente mas barato.", body: "El infarto no previsto. La diabetes descubierta tarde. La hipertension silenciosa." },
      { type: "solution", emoji: "🛡️", stats: [
        { value: "79", label: "alertas de salud", color: "#EF4444" },
        { value: "$5", label: "vs $10,000", color: "#F87171" },
        { value: "90s", label: "deteccion", color: "#FCA5A5" },
      ]},
      { type: "proof", title: "Ciencia que salva vidas.", items: [
        { emoji: "❤️", text: "AHA PREVENT 2023", sub: "riesgo cardiovascular" },
        { emoji: "🇺🇸", text: "CDC NHANES", sub: "5,856 adultos" },
        { emoji: "💯", text: "Score 0-100", sub: "tu salud en un numero" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "prevenir es mas barato siempre", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 036 -- BAB -- Gold -- Zoom ---------------------------------------------
  {
    audioFile:        "audio/bioscan-036.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "gold",
    hookStyle:        "zoom",
    durationInFrames: 2050,  // 66.4s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🗺️", title: "Vives lejos de la ciudad. La clinica queda a 2 horas. Cuesta una fortuna.", subtitle: "Pero tienes celular. Y con eso basta." },
      { type: "problem", emoji: "🚗", title: "Sin desplazarte. Sin gastar en transporte. Sin perder un dia de trabajo.", body: "BioScan IA te da un analisis completo desde donde estes." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "indicadores", color: "#F59E0B" },
        { value: "0km", label: "de distancia", color: "#FBBF24" },
        { value: "$5", label: "total", color: "#FCD34D" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "la salud llega donde tu estes", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 037 -- AIDA -- Teal -- Spring ------------------------------------------
  {
    audioFile:        "audio/bioscan-037.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "teal",
    hookStyle:        "spring",
    durationInFrames: 1919,  // 62.0s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🛡️", title: "No tienes seguro medico. Una visita al doctor cuesta $150 o mas.", subtitle: "BioScan IA es tu primera linea de defensa. $5." },
      { type: "list", title: "Sabes en 90 segundos si necesitas esa visita", items: [
        { emoji: "❤️", text: "Presion arterial", sub: "estimada en tiempo real" },
        { emoji: "🫁", text: "SpO2", sub: "saturacion de oxigeno" },
        { emoji: "💉", text: "Glucosa estimada", sub: "nivel de riesgo" },
        { emoji: "📊", text: "Riesgo cardiovascular", sub: "modelo AHA PREVENT 2023" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "tu escudo de cinco dolares", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 038 -- PAS -- Indigo -- Slide ------------------------------------------
  {
    audioFile:        "audio/bioscan-038.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "indigo",
    hookStyle:        "slide",
    durationInFrames: 1977,  // 63.9s x30 + 60f
    scenes: [
      { type: "hook", emoji: "⚖️", title: "Las personas ricas tienen medico personal. ¿Y el resto?", subtitle: "El resto espera. El resto paga lo que no tiene. Hasta ahora." },
      { type: "problem", emoji: "🌎", title: "Sin privilegios. Sin clases sociales. Sin discriminacion de precio.", body: "La misma tecnologia medica para todos. Eso es BioScan IA." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "indicadores", color: "#6366F1" },
        { value: "13", label: "sistemas", color: "#818CF8" },
        { value: "$5", label: "para todos", color: "#C7D2FE" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "tu medico en el bolsillo", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 039 -- FAB -- Blue -- Zoom ---------------------------------------------
  {
    audioFile:        "audio/bioscan-039.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "blue",
    hookStyle:        "zoom",
    durationInFrames: 1920,  // 62.0s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🥤", title: "La gente paga $5 por un jugo verde saludable. Usalo en algo que realmente mida tu salud.", subtitle: "El jugo verde no analiza tu presion. BioScan IA si." },
      { type: "compare", title: "El mejor $5 que puedes gastar", left: { label: "Jugo verde", value: "$5 / 0 datos" }, right: { label: "BioScan IA", value: "$5 / 79 param" }, subtitle: "Mismos $5. Infinitamente mas valor." },
      { type: "solution", emoji: "📊", stats: [
        { value: "79", label: "parametros", color: "#3B82F6" },
        { value: "$5", label: "igual precio", color: "#60A5FA" },
        { value: "100%", label: "garantia", color: "#BFDBFE" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "invierte donde importa", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 040 -- HSO -- Rose -- Spring -------------------------------------------
  {
    audioFile:        "audio/bioscan-040.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "rose",
    hookStyle:        "spring",
    durationInFrames: 1854,  // 59.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🎁", title: "El mejor regalo que le puedes dar a alguien: saber como esta su salud.", subtitle: "Por $5. El regalo mas barato y mas valioso que existe." },
      { type: "list", title: "Todo incluido en el regalo de $5", items: [
        { emoji: "📊", text: "79 indicadores", sub: "en 90 segundos" },
        { emoji: "📄", text: "Reporte PDF", sub: "para compartir con medico" },
        { emoji: "🤖", text: "Asistente IA", sub: "explica cada resultado" },
        { emoji: "💯", text: "Score salud", sub: "0 a 100" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "regala salud real", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

];
