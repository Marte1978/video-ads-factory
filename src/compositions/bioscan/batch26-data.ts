import { BioScanProAdProps } from "./BioScanProAd";

// Batch 26 -- Copies 251-260 -- Categoria: Mujeres 35+ (cont.)
// Rotacion: cyan→purple→orange→green→red→gold→teal→indigo→blue→rose
// HookStyle: slide→zoom→spring→slide→zoom→spring→slide→zoom→spring→slide
// (continua desde batch25 que termino en rose/spring)

export const batch26: BioScanProAdProps[] = [

  // -- 251 -- Dietas keto mide si funcionan -- Cyan -- Slide --------------------
  {
    audioFile:        "audio/bioscan-251.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "cyan",
    hookStyle:        "slide",
    durationInFrames: 888,  // 27.6s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🥗", title: "Las dietas prometen. BioScan IA mide si de verdad funcionan.", subtitle: "Keto, intermitente, vegana. BioScan IA te dice si tu dieta mejora glucosa, metabolismo y energia." },
      { type: "list", title: "Valida que tu dieta funciona de verdad", items: [
        { emoji: "📊", text: "Glucosa estimada mejorada", sub: "dato real no promesa" },
        { emoji: "🔬", text: "Marcadores metabolicos", sub: "impacto visible en 79 parametros" },
        { emoji: "⚡", text: "Energia sistemica", sub: "como se siente tu cuerpo en datos" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "mide tu dieta con datos · no promesas", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 252 -- Postparto regreso trabajo datos -- Purple -- Zoom -----------------
  {
    audioFile:        "audio/bioscan-252.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "purple",
    hookStyle:        "zoom",
    durationInFrames: 845,  // 26.2s x30 + 60f
    scenes: [
      { type: "hook", emoji: "👶", title: "Volvi al trabajo despues del embarazo. Necesitaba saber como estaba mi cuerpo.", subtitle: "El postparto cambia todo. 79 parametros me dijeron que estaba lista para volver." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "tu recuperacion postparto con datos · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 253 -- SOP endometriosis impacto sistemico -- Orange -- Spring -----------
  {
    audioFile:        "audio/bioscan-253.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "orange",
    hookStyle:        "spring",
    durationInFrames: 968,  // 30.3s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🔬", title: "SOP. Endometriosis. Condiciones que afectan millones. BioScan IA monitorea su impacto sistemico.", subtitle: "No solo el sistema reproductivo. Impacto cardiovascular, metabolico y hormonal visible en datos." },
      { type: "problem", emoji: "💊", title: "El impacto sistemico de las condiciones femeninas.", body: "SOP y endometriosis afectan el sistema cardiovascular, metabolico y hormonal. BioScan IA monitorea esos efectos en 79 parametros. Informacion adicional para tus especialistas. Cinco dolares." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "monitoreo integral condiciones femeninas", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 254 -- Menopausia temprana riesgo CV dramatico -- Green -- Slide ---------
  {
    audioFile:        "audio/bioscan-254.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "green",
    hookStyle:        "slide",
    durationInFrames: 895,  // 27.9s x30 + 60f
    scenes: [
      { type: "hook", emoji: "⚠️", title: "La menopausia temprana aumenta el riesgo cardiovascular dramaticamente. Lo sabes?", subtitle: "Antes de los 45: mayor riesgo CV y osteoporosis. BioScan IA incluye marcadores relevantes." },
      { type: "problem", emoji: "🫀", title: "La menopausia temprana y tu corazon.", body: "La menopausia antes de los 45 se asocia con mayor riesgo cardiovascular. BioScan IA incluye marcadores relevantes en sus 79 parametros. Informacion valiosa para tu ginecologo. $5." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "monitoreo menopausia temprana · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 255 -- Chequeo postparto en casa 90 segundos -- Red -- Zoom --------------
  {
    audioFile:        "audio/bioscan-255.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "red",
    hookStyle:        "zoom",
    durationInFrames: 910,  // 28.3s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🏠", title: "El primer chequeo post-parto que puedes hacer desde casa. 90 segundos.", subtitle: "Dificil ir al medico con recien nacido. BioScan IA: 79 parametros desde el sofa de casa." },
      { type: "list", title: "Tu recuperacion postparto con datos desde casa", items: [
        { emoji: "❤️", text: "Cardiovascular post-parto", sub: "recuperacion sistemica" },
        { emoji: "🧪", text: "Marcadores metabolicos", sub: "cambios hormonales visibles" },
        { emoji: "⚡", text: "Energia sistemica", sub: "sabes cuando estas lista" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "chequeo postparto en casa · 90 segundos", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 256 -- Lideresa emprendedora resiliencia datos -- Gold -- Spring ---------
  {
    audioFile:        "audio/bioscan-256.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "gold",
    hookStyle:        "spring",
    durationInFrames: 803,  // 24.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "👩‍💼", title: "Las mujeres que lideran no pueden permitirse problemas de salud ignorados.", subtitle: "El liderazgo exige salud. 79 parametros en 90 segundos para las que no se detienen." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "lidera desde la salud · 79 parametros", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 257 -- Mapa cuerpo 79 parametros asistente IA -- Teal -- Slide -----------
  {
    audioFile:        "audio/bioscan-257.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "teal",
    hookStyle:        "slide",
    durationInFrames: 836,  // 25.9s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🗺️", title: "Muchas mujeres sienten que no conocen su propio cuerpo. BioScan IA puede cambiar eso.", subtitle: "79 parametros. Score 0-100. Reporte PDF. El mapa de tu cuerpo que nadie te habia dado." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "conocete por dentro · mapa de tu salud", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 258 -- Hija habito generacional construccion -- Indigo -- Zoom -----------
  {
    audioFile:        "audio/bioscan-258.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "indigo",
    hookStyle:        "zoom",
    durationInFrames: 751,  // 23.0s x30 + 60f
    scenes: [
      { type: "hook", emoji: "👩‍👧", title: "Quiero que mi hija crezca con habitos de salud que yo nunca tuve.", subtitle: "La miro hacer BioScan IA en 90 segundos y pienso que estamos construyendo algo nuevo." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "construye el habito generacional · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 259 -- Depresion marcadores fisicos HRV -- Blue -- Spring ----------------
  {
    audioFile:        "audio/bioscan-259.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "blue",
    hookStyle:        "spring",
    durationInFrames: 990,  // 31.0s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💙", title: "La depresion tiene marcadores fisicos. BioScan IA puede detectar algunos de ellos.", subtitle: "HRV baja, ritmo cardiaco irregular, fatiga sistemica. El cuerpo refleja el estado mental." },
      { type: "list", title: "Los marcadores fisicos de la salud mental", items: [
        { emoji: "💓", text: "HRV reducida", sub: "sistema nervioso en tension" },
        { emoji: "😴", text: "Fatiga sistemica", sub: "impacto de la carga mental" },
        { emoji: "🧠", text: "Ritmo cardiaco irregular", sub: "cuerpo y mente conectados" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "tu bienestar integral · mente y cuerpo", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 260 -- 39 anos segunda mitad score 84 -- Rose -- Slide -------------------
  {
    audioFile:        "audio/bioscan-260.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "rose",
    hookStyle:        "slide",
    durationInFrames: 885,  // 27.5s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🌟", title: "A los 39 decidi que la segunda mitad de mi vida seria la mas sana.", subtitle: "No dietas extremas. Con datos reales. A los 42 mi score mas alto: 84." },
      { type: "solution", emoji: "📈", stats: [
        { value: "39", label: "decision", color: "#FB7185" },
        { value: "84", label: "score a 42", color: "#E11D48" },
        { value: "3 años", label: "con datos", color: "#BE123C" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "tu mejor epoca comienza ahora · datos", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

];
