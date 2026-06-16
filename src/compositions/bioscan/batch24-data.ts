import { BioScanProAdProps } from "./BioScanProAd";

// Batch 24 -- Copies 231-240 -- Categoria: Hombres 40+ (cont.)
// Rotacion: cyan→purple→orange→green→red→gold→teal→indigo→blue→rose
// HookStyle: zoom→spring→slide→zoom→spring→slide→zoom→spring→slide→zoom
// (continua desde batch23 que termino en rose/slide)

export const batch24: BioScanProAdProps[] = [

  // -- 231 -- Estoy bien la frase mas peligrosa -- Cyan -- Zoom -----------------
  {
    audioFile:        "audio/bioscan-231.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "cyan",
    hookStyle:        "zoom",
    durationInFrames: 957,  // 29.9s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🚨", title: "Estoy bien. La frase mas peligrosa en boca de un hombre de 40.", subtitle: "El cuerpo no miente aunque el hombre si. 79 parametros objetivos que no dependen de como te sientes." },
      { type: "problem", emoji: "📊", title: "Los datos no mienten aunque tu te mientas.", body: "Los hombres minimizan sintomas. Aguantan. No quieren preocupar. BioScan IA da datos objetivos. 79 parametros reales. La verdad que no sabes que necesitas. Score 0-100. $5." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "los datos no mienten · 79 parametros", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 232 -- Papa hijos graduacion planificacion -- Purple -- Spring ------------
  {
    audioFile:        "audio/bioscan-232.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "purple",
    hookStyle:        "spring",
    durationInFrames: 887,  // 27.6s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🎓", title: "Mis hijos tienen 8 y 12 anos. Para su graduacion tendre 54 y 58. Quiero estar sano para eso.", subtitle: "No es fantasia. Es planificacion. 79 parametros mensuales para llegar sano a esas graduaciones." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "planifica tu salud · monitoreo mensual", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 233 -- Negocio KPIs salud CEO dashboard -- Orange -- Slide ---------------
  {
    audioFile:        "audio/bioscan-233.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "orange",
    hookStyle:        "slide",
    durationInFrames: 837,  // 25.9s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📈", title: "Tu negocio tiene KPIs. Tu salud tambien deberia tenerlos.", subtitle: "Los empresarios miden ventas pero no su salud. 79 KPIs en 90 segundos. El CEO de tu cuerpo." },
      { type: "solution", emoji: "💼", stats: [
        { value: "79", label: "KPIs de salud", color: "#F97316" },
        { value: "90s", label: "por analisis", color: "#EA580C" },
        { value: "$5", label: "dashboard", color: "#9A3412" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "mide tus KPIs de salud · CEO de tu cuerpo", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 234 -- Sedentarismo laboral escritorio riesgo CV -- Green -- Zoom --------
  {
    audioFile:        "audio/bioscan-234.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "green",
    hookStyle:        "zoom",
    durationInFrames: 923,  // 28.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💻", title: "Llevas anos detras de un escritorio. Tu cuerpo lo registra. BioScan IA tambien.", subtitle: "El sedentarismo es uno de los principales factores de riesgo cardiovascular. 79 indicadores lo detectan." },
      { type: "problem", emoji: "🪑", title: "El trabajo de oficina puede estar costandote la salud.", body: "El sedentarismo laboral es factor de riesgo cardiovascular. BioScan IA detecta sus efectos en 79 parametros. 90 segundos. Descubre si tu escritorio te esta cobrando factura. $5." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "ve el costo del sedentarismo · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 235 -- Hombre inteligente prevencion actua antes -- Red -- Spring --------
  {
    audioFile:        "audio/bioscan-235.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "red",
    hookStyle:        "spring",
    durationInFrames: 770,  // 23.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🧠", title: "El hombre inteligente no espera a estar enfermo para actuar.", subtitle: "La prevencion es para los que piensan a largo plazo. 79 parametros. $5. Sin excusas." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "actua antes no despues · sin excusas", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 236 -- Alcohol higado marcadores hepaticos -- Gold -- Slide ---------------
  {
    audioFile:        "audio/bioscan-236.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "gold",
    hookStyle:        "slide",
    durationInFrames: 769,  // 23.6s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🍻", title: "Los marcadores hepaticos de BioScan IA te dicen si el alcohol esta afectando tu higado.", subtitle: "No tienes que dejar de tomar. Pero si debes saber como te esta afectando. $5." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "conoce el impacto real · funcion hepatica", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 237 -- Energia fatiga SpO2 tiroides -- Teal -- Zoom ----------------------
  {
    audioFile:        "audio/bioscan-237.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "teal",
    hookStyle:        "zoom",
    durationInFrames: 858,  // 26.6s x30 + 60f
    scenes: [
      { type: "hook", emoji: "⚡", title: "Si te falta energia a los 45, no es edad. Son datos.", subtitle: "SpO2 baja, tiroides, anemia estimada, estres hormonal. La respuesta puede estar en los numeros." },
      { type: "list", title: "Las causas medibles de tu fatiga", items: [
        { emoji: "🫁", text: "SpO2 baja", sub: "menos oxigeno disponible" },
        { emoji: "🧪", text: "Marcadores tiroideos", sub: "funcion metabolica" },
        { emoji: "💊", text: "Anemia estimada + estres", sub: "causas sistemicas detectables" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "encuentra tu energia · causas medibles", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 238 -- Sueno HRV presion 6 horas destruido -- Indigo -- Spring -----------
  {
    audioFile:        "audio/bioscan-238.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "indigo",
    hookStyle:        "spring",
    durationInFrames: 878,  // 27.3s x30 + 60f
    scenes: [
      { type: "hook", emoji: "😴", title: "Duermes 6 horas y te sientes destruido. BioScan IA puede explicar por que.", subtitle: "HRV, cortisol, presion arterial. La conexion entre tus noches y tu salud, visible en datos." },
      { type: "list", title: "El impacto del mal sueno en tu cuerpo", items: [
        { emoji: "💓", text: "HRV reducida", sub: "sistema nervioso estresado" },
        { emoji: "🩺", text: "Presion arterial elevada", sub: "efecto del sueno pobre" },
        { emoji: "⚗️", text: "Cortisol alto", sub: "inflamacion y fatiga cronica" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "entiende tu sueno con datos · 79 parametros", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 239 -- Reto 90 dias 3 mediciones -- Blue -- Slide ------------------------
  {
    audioFile:        "audio/bioscan-239.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "blue",
    hookStyle:        "slide",
    durationInFrames: 960,  // 30.0s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🏆", title: "El reto de los 90 dias. Un analisis BioScan al inicio, a los 45 y al final.", subtitle: "Tres meses. Tres mediciones. Los datos son tu accountability partner que nunca miente." },
      { type: "solution", emoji: "📅", stats: [
        { value: "Dia 1", label: "analisis base", color: "#2563EB" },
        { value: "Dia 45", label: "seguimiento", color: "#1D4ED8" },
        { value: "Dia 90", label: "resultado", color: "#1E3A8A" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "acepta el reto · 3 mediciones reales", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 240 -- Legado padre habitos hijos -- Rose -- Zoom ------------------------
  {
    audioFile:        "audio/bioscan-240.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "rose",
    hookStyle:        "zoom",
    durationInFrames: 663,  // 20.1s x30 + 60f
    scenes: [
      { type: "hook", emoji: "👨‍👧", title: "El mejor legado que puedes dejar a tus hijos: el ejemplo de un padre que se cuido.", subtitle: "Los habitos de salud se heredan. BioScan IA mensual. El legado mas valioso." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "el legado del padre sano · habito mensual", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

];
