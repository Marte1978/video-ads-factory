import { BioScanProAdProps } from "./BioScanProAd";

// Batch 23 -- Copies 221-230 -- Categoria: Hombres 40+
// Rotacion: cyan→purple→orange→green→red→gold→teal→indigo→blue→rose
// HookStyle: slide→zoom→spring→slide→zoom→spring→slide→zoom→spring→slide
// (continua desde batch22 que termino en rose/spring)

export const batch23: BioScanProAdProps[] = [

  // -- 221 -- Hombres fuertes van al medico -- Cyan -- Slide --------------------
  {
    audioFile:        "audio/bioscan-221.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "cyan",
    hookStyle:        "slide",
    durationInFrames: 802,  // 24.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💪", title: "Los hombres fuertes van al medico. Los que no van, son los que caen primero.", subtitle: "No es debilidad. Es inteligencia. BioScan IA: 90 segundos, sin pisar una clinica." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "el chequeo del hombre que se respeta", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 222 -- Riesgo cardiovascular 2-3x mayor en hombres -- Purple -- Zoom ----
  {
    audioFile:        "audio/bioscan-222.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "purple",
    hookStyle:        "zoom",
    durationInFrames: 936,  // 29.2s x30 + 60f
    scenes: [
      { type: "hook", emoji: "❤️", title: "Los hombres tienen 2-3x mas riesgo de infarto que las mujeres antes de los 65.", subtitle: "Es biologia. BioScan IA calcula tu riesgo personalizado con modelo AHA PREVENT 2023." },
      { type: "problem", emoji: "🫀", title: "El riesgo masculino es real y medible.", body: "Los hombres acumulan riesgo cardiovascular antes y mas rapido. BioScan IA lo calcula en 90 segundos usando el modelo PREVENT 2023 de la AHA. Setenta y nueve parametros. Cinco dolares. Sin excusas." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "conoce tu riesgo cardiovascular real", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 223 -- Colapso a los 44 por trabajo excesivo -- Orange -- Spring ---------
  {
    audioFile:        "audio/bioscan-223.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "orange",
    hookStyle:        "spring",
    durationInFrames: 975,  // 30.5s x30 + 60f
    scenes: [
      { type: "hook", emoji: "⚡", title: "Trabaje tan duro para mi familia que casi me mato en el proceso.", subtitle: "A los 44 colapso de estres. Marcadores cardiovasculares preocupantes. BioScan IA ahora es mi guardia." },
      { type: "problem", emoji: "🏥", title: "El trabajo no puede costarte la vida.", body: "A los cuarenta y cuatro tuve que parar. Colapso de estres. Marcadores cardiovasculares preocupantes. Ahora uso BioScan IA mensualmente. Setenta y nueve parametros. Para estar aqui cuando mi familia me necesite. Cinco dolares." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "cuidate para los tuyos · monitoreo mensual", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 224 -- Salud masculina 79 parametros completos -- Green -- Slide ---------
  {
    audioFile:        "audio/bioscan-224.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "green",
    hookStyle:        "slide",
    durationInFrames: 939,  // 29.3s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🧬", title: "La salud masculina va mucho mas alla de la prostata. BioScan IA analiza los 79 parametros.", subtitle: "Cardiovascular. Renal. Hormonal. Metabolico. El chequeo masculino completo por $5." },
      { type: "list", title: "El chequeo masculino que ningun hombre ignora", items: [
        { emoji: "❤️", text: "Sistema cardiovascular", sub: "riesgo real calculado con AHA" },
        { emoji: "🧪", text: "Renal + Metabolico + Hormonal", sub: "79 parametros especificos" },
        { emoji: "📄", text: "Reporte PDF + Asistente IA", sub: "resultados con explicacion" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "el chequeo del hombre serio · 79 parametros", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 225 -- Score gym competencia masculina -- Red -- Zoom --------------------
  {
    audioFile:        "audio/bioscan-225.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "red",
    hookStyle:        "zoom",
    durationInFrames: 867,  // 26.9s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🏋️", title: "Tu score de salud es mayor que el de tu competencia en el gym?", subtitle: "No es vanidad. Es datos. SpO2 real. HRV real. Riesgo cardiovascular real." },
      { type: "solution", emoji: "📊", stats: [
        { value: "SpO2", label: "real medido", color: "#EF4444" },
        { value: "HRV", label: "real medido", color: "#F87171" },
        { value: "79", label: "parametros", color: "#FECACA" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "demuestra tu salud real · score 0-100", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 226 -- Testosterona declina despues de 30 -- Gold -- Spring --------------
  {
    audioFile:        "audio/bioscan-226.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "gold",
    hookStyle:        "spring",
    durationInFrames: 877,  // 27.2s x30 + 60f
    scenes: [
      { type: "hook", emoji: "⚗️", title: "La testosterona declina despues de los 30. Sabes como estan tus marcadores hormonales?", subtitle: "BioScan IA incluye estimaciones hormonales entre sus 79 parametros. Primera lectura en $5." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "monitorea tu salud hormonal · 79 parametros", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 227 -- Cerveza vs inversion salud -- Teal -- Slide -----------------------
  {
    audioFile:        "audio/bioscan-227.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "teal",
    hookStyle:        "slide",
    durationInFrames: 920,  // 28.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🍺", title: "Gastas en cervezas con los amigos. Cuando fue la ultima vez que invertiste $5 en tu salud?", subtitle: "No es juicio. Es perspectiva. Una cerveza: calorias. BioScan IA: 79 parametros reales." },
      { type: "compare", left: { label: "Cerveza", value: "$3-5" }, right: { label: "BioScan IA", value: "$5" } },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "la inversion que importa · 20 anos despues", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 228 -- Amigo infarto a los 45 nunca se chequeo -- Indigo -- Zoom --------
  {
    audioFile:        "audio/bioscan-228.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "indigo",
    hookStyle:        "zoom",
    durationInFrames: 921,  // 28.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💔", title: "Mi amigo tuvo un infarto a los 45. Nunca se habia chequeado.", subtitle: "Eso me cambio. Desde ese dia, BioScan IA mensual. No quiero ser la proxima historia." },
      { type: "problem", emoji: "🚨", title: "No seas la proxima historia de nunca se chequeo.", body: "Si el se hubiera chequeado, probablemente lo hubieran detectado antes. Desde ese dia uso BioScan IA mensualmente. 79 parametros. Score de salud. Riesgo cardiovascular. Cinco dolares." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "no seas esa historia · monitoreo mensual", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 229 -- A los 45 ya a la mitad longevidad -- Blue -- Spring ---------------
  {
    audioFile:        "audio/bioscan-229.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "blue",
    hookStyle:        "spring",
    durationInFrames: 924,  // 28.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "⏳", title: "A los 45 ya estas a la mitad. La segunda mitad depende de lo que hagas ahora.", subtitle: "72-78 anos es la esperanza de vida masculina en Latam. Los proximos 10 anos determinan los siguientes 25." },
      { type: "problem", emoji: "📅", title: "La segunda mitad se construye con datos.", body: "Las decisiones de los proximos 10 anos determinan como son los siguientes 25. BioScan IA te da los datos para tomarlas bien. 79 parametros. Score 0-100. Cinco dolares. La inversion mas importante de tu segunda mitad." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "invierte en tu segunda mitad · datos reales", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 230 -- Pilar de la familia que se cae -- Rose -- Slide -------------------
  {
    audioFile:        "audio/bioscan-230.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "rose",
    hookStyle:        "slide",
    durationInFrames: 840,  // 26.0s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🏛️", title: "Dices que eres el pilar de tu familia. Pero un pilar que se cae destruye todo.", subtitle: "Si tu faltas, todo cambia. BioScan IA: 79 parametros para que el pilar siga de pie." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "se el pilar sano · 79 parametros", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

];
