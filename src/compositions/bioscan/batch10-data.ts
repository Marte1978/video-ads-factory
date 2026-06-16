import { BioScanProAdProps } from "./BioScanProAd";

// Batch 10 -- Copies 091-100 -- Categoria: Familia y Proteccion (cont.)
// Rotacion: cyan→purple→orange→green→red→gold→teal→indigo→blue→rose
// HookStyle: spring→slide→zoom→spring→slide→zoom→spring→slide→zoom→spring
// (continua desde batch09 que termino en zoom)

export const batch10: BioScanProAdProps[] = [

  // -- 091 -- PAS -- Cyan -- Spring -------------------------------------------
  {
    audioFile:        "audio/bioscan-091.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "cyan",
    hookStyle:        "spring",
    durationInFrames: 1605,  // 51.5s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🤝", title: "Tu esposa te pide que te cuides. Dale la prueba de que lo estas haciendo.", subtitle: "Los datos concretos hablan solos. El reporte PDF muestra que es real." },
      { type: "problem", emoji: "⚠️", title: "Las conversaciones de salud son abstractas.", body: "Hablar de riesgo cardiovascular se siente lejos. Pero un score de salud de 0 a 100 y un reporte PDF son concretos, verificables y tranquilizadores." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#00D4FF" },
        { value: "PDF", label: "reporte", color: "#00FF88" },
        { value: "$5", label: "precio", color: "#FFD700" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "dales tranquilidad · datos reales", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 092 -- Story -- Purple -- Slide ----------------------------------------
  {
    audioFile:        "audio/bioscan-092.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "purple",
    hookStyle:        "slide",
    durationInFrames: 1371,  // 43.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🏠", title: "Cuando BioScan IA llego a nuestra casa, toda la familia empezo a cuidarse.", subtitle: "Un ritual mensual de 90 segundos que cambio nuestra cultura de salud." },
      { type: "list", title: "El ritual familiar de salud", items: [
        { emoji: "📅", text: "Primer domingo del mes", sub: "el dia del chequeo familiar" },
        { emoji: "📊", text: "Resultados compartidos", sub: "celebrar lo bueno, mejorar lo otro" },
        { emoji: "👨‍👩‍👧‍👦", text: "Pack Familiar $18", sub: "4 analisis, 316 parametros" },
      ]},
      { type: "cta", plan: "Pack Familiar", price: "$18 USD", priceNote: "ritual mensual de salud familiar", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 093 -- FAB -- Orange -- Zoom -------------------------------------------
  {
    audioFile:        "audio/bioscan-093.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "orange",
    hookStyle:        "zoom",
    durationInFrames: 1431,  // 45.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "👨‍👩‍👴", title: "Desde los 25 hasta los 75. BioScan IA funciona para toda la familia.", subtitle: "Jovenes: optimizar. Adultos: prevenir. Mayores: detectar a tiempo." },
      { type: "proof", title: "Un servicio para todas las edades.", items: [
        { emoji: "🇺🇸", text: "CDC NHANES", sub: "todas edades, generos y etnias" },
        { emoji: "❤️", text: "AHA PREVENT 2023", sub: "valido para cualquier adulto" },
        { emoji: "📊", text: "79 parametros", sub: "desde los 18 anos en adelante" },
      ]},
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#F97316" },
        { value: "18+", label: "cualquier edad", color: "#FB923C" },
        { value: "$5", label: "precio", color: "#FED7AA" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "para todas las edades · todos en familia", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 094 -- HSO -- Green -- Spring ------------------------------------------
  {
    audioFile:        "audio/bioscan-094.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "green",
    hookStyle:        "spring",
    durationInFrames: 1451,  // 46.4s x30 + 60f
    scenes: [
      { type: "hook", emoji: "✈️", title: "Antes de las vacaciones familiares, asegurate de que todos esten bien.", subtitle: "4 analisis en 10 minutos. $18 total. El mejor pre-check que puedes hacer." },
      { type: "solution", emoji: "📱", stats: [
        { value: "4", label: "analisis", color: "#22C55E" },
        { value: "10min", label: "familia completa", color: "#4ADE80" },
        { value: "$18", label: "total", color: "#BBF7D0" },
      ]},
      { type: "proof", title: "El pre-check de vacaciones mas inteligente.", items: [
        { emoji: "❤️", text: "Riesgo cardiovascular", sub: "AHA PREVENT 2023" },
        { emoji: "💉", text: "Glucosa estimada", sub: "sin sorpresas metabolicas" },
        { emoji: "💯", text: "Score 0-100", sub: "todos salen tranquilos" },
      ]},
      { type: "cta", plan: "Pack Familiar", price: "$18 USD", priceNote: "vacaciones sin sorpresas · 4 analisis", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 095 -- PAS -- Red -- Slide ---------------------------------------------
  {
    audioFile:        "audio/bioscan-095.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "red",
    hookStyle:        "slide",
    durationInFrames: 1598,  // 51.3s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🧔", title: "Los hombres evitan el medico. Sus familias lo saben. Y les preocupa.", subtitle: "El 72% de los hombres no va al medico. BioScan IA es para ellos." },
      { type: "problem", emoji: "😤", title: "Sin citas. Sin consultorios. Sin doctor talk.", body: "La excusa ya no vale. BioScan IA: 90 segundos con el celular. Sin salir de casa. Sin conversaciones incomodas. Solo datos reales de 79 parametros." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#EF4444" },
        { value: "90s", label: "sin clinica", color: "#F87171" },
        { value: "$5", label: "precio", color: "#FECACA" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "para los que no van al medico", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 096 -- Story -- Gold -- Zoom -------------------------------------------
  {
    audioFile:        "audio/bioscan-096.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "gold",
    hookStyle:        "zoom",
    durationInFrames: 1363,  // 43.5s x30 + 60f
    scenes: [
      { type: "hook", emoji: "👶", title: "Ser padre cambio mi perspectiva de la salud completamente.", subtitle: "Antes no me cuidaba. Cuando nacio mi hija, todo cambio en un instante." },
      { type: "list", title: "Lo que cambio cuando me converti en padre", items: [
        { emoji: "❤️", text: "Mi riesgo cardiovascular", sub: "AHA PREVENT 2023 mensual" },
        { emoji: "💯", text: "Mi score de salud", sub: "de cero a cien, siempre visible" },
        { emoji: "📄", text: "Mi reporte PDF", sub: "historial de mejora" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "la salud del padre importa · por ella", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 097 -- AIDA -- Teal -- Spring ------------------------------------------
  {
    audioFile:        "audio/bioscan-097.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "teal",
    hookStyle:        "spring",
    durationInFrames: 1365,  // 43.5s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🌱", title: "Que herencia de salud le estas dejando a tus hijos?", subtitle: "Los habitos de salud se heredan igual que los valores. BioScan IA es el habito." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#14B8A6" },
        { value: "mes", label: "habito", color: "#2DD4BF" },
        { value: "$5", label: "legado", color: "#99F6E4" },
      ]},
      { type: "proof", title: "El legado mas valioso que puedes dejar.", items: [
        { emoji: "👧", text: "Los hijos imitan", sub: "lo que ven en casa" },
        { emoji: "📊", text: "Cultura de datos", sub: "salud basada en numeros reales" },
        { emoji: "🔄", text: "Habito mensual", sub: "parte del ADN familiar" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "deja el mejor legado · cultura de salud", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 098 -- BAB -- Indigo -- Slide ------------------------------------------
  {
    audioFile:        "audio/bioscan-098.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "indigo",
    hookStyle:        "slide",
    durationInFrames: 1477,  // 47.3s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🏥", title: "Antes de ir al hospital, sabe si realmente es urgente.", subtitle: "No todas las molestias ameritan urgencias. Los datos te ayudan a decidir." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#6366F1" },
        { value: "90s", label: "decision", color: "#818CF8" },
        { value: "$5", label: "precio", color: "#C7D2FE" },
      ]},
      { type: "proof", title: "Decide con datos, no con miedo.", items: [
        { emoji: "🫁", text: "SpO2 en tiempo real", sub: "saturacion de oxigeno" },
        { emoji: "❤️", text: "Frecuencia cardiaca", sub: "ritmo y variabilidad" },
        { emoji: "📊", text: "Riesgo cardiovascular", sub: "contexto para decidir" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "decide con datos · no con angustia", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 099 -- Story -- Blue -- Zoom -------------------------------------------
  {
    audioFile:        "audio/bioscan-099.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "blue",
    hookStyle:        "zoom",
    durationInFrames: 1523,  // 48.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🦠", title: "El COVID nos enseno que la salud puede cambiar de un dia para otro.", subtitle: "Millones no sabian su SpO2, su estado cardiovascular. BioScan IA nacio de esa leccion." },
      { type: "proof", title: "La leccion del COVID aplicada hoy.", items: [
        { emoji: "🫁", text: "SpO2 siempre visible", sub: "el indicador del COVID" },
        { emoji: "❤️", text: "Estado cardiovascular", sub: "AHA PREVENT 2023" },
        { emoji: "🇺🇸", text: "CDC NHANES", sub: "datos validados reales" },
      ]},
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#3B82F6" },
        { value: "90s", label: "preparado", color: "#60A5FA" },
        { value: "$5", label: "precio", color: "#BFDBFE" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "nunca mas sin datos · siempre preparado", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 100 -- HSO -- Rose -- Spring -------------------------------------------
  {
    audioFile:        "audio/bioscan-100.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "rose",
    hookStyle:        "spring",
    durationInFrames: 1367,  // 43.6s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📅", title: "El primer domingo de cada mes, toda nuestra familia se chequea con BioScan IA.", subtitle: "Un ritual que transformo nuestra cultura familiar de salud." },
      { type: "list", title: "El ritual mensual de salud en familia", items: [
        { emoji: "🍳", text: "Desayunamos juntos", sub: "y luego hacemos el analisis" },
        { emoji: "🎉", text: "Celebramos lo bueno", sub: "y hablamos de lo que mejorar" },
        { emoji: "💰", text: "$18 al mes familia", sub: "la mejor inversion mensual" },
      ]},
      { type: "cta", plan: "Pack Familiar", price: "$18 USD", priceNote: "empieza tu ritual · primer domingo", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

];
