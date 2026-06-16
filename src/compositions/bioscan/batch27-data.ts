import { BioScanProAdProps } from "./BioScanProAd";

// Batch 27 -- Copies 261-270 -- Categoria: Jovenes 25-35
// Rotacion: cyan→purple→orange→green→red→gold→teal→indigo→blue→rose
// HookStyle: zoom→spring→slide→zoom→spring→slide→zoom→spring→slide→zoom
// (continua desde batch26 que termino en rose/slide)

export const batch27: BioScanProAdProps[] = [

  // -- 261 -- Invencible a los 28 SpO2 baja -- Cyan -- Zoom --------------------
  {
    audioFile:        "audio/bioscan-261.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "cyan",
    hookStyle:        "zoom",
    durationInFrames: 800,  // 24.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "⚡", title: "A los 28 anos te sientes invencible. Tu SpO2 baja puede decir otra cosa.", subtitle: "Los jovenes son los que menos se chequean. Y los que mas sorpresas encuentran." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "chequéate aunque seas joven · 79 parametros", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 262 -- Carrera dano salud alerta temprana -- Purple -- Spring -------------
  {
    audioFile:        "audio/bioscan-262.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "purple",
    hookStyle:        "spring",
    durationInFrames: 912,  // 28.4s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💼", title: "Estas construyendo tu carrera. No destruyas tu salud en el proceso.", subtitle: "Trabajo intenso, estres, mal sueno, comida rapida. El cuerpo aguanta hasta que no." },
      { type: "problem", emoji: "⚠️", title: "Las senales de alerta antes del dano irreversible.", body: "Los veinte y treinta son los anos de mayor riesgo silencioso. BioScan IA te da senales de alerta antes de que el dano sea irreversible. 79 parametros. Cinco dolares. Tu activo mas valioso." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "cuida tu activo mas valioso · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 263 -- Biohacking millennial datos reales -- Orange -- Slide --------------
  {
    audioFile:        "audio/bioscan-263.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "orange",
    hookStyle:        "slide",
    durationInFrames: 934,  // 29.2s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🧠", title: "Tu generacion optimiza todo: cafe, sueno, productividad. Por que no la salud?", subtitle: "Nootropicos, cold plunges, ayuno. BioScan IA valida si de verdad funcionan con 79 parametros." },
      { type: "list", title: "Optimiza con datos reales no suposiciones", items: [
        { emoji: "🧊", text: "Cold plunge - funciona?", sub: "HRV y SpO2 lo confirman" },
        { emoji: "⏱️", text: "Ayuno intermitente - funciona?", sub: "glucosa y metabolismo en datos" },
        { emoji: "💊", text: "Suplementos - funcionan?", sub: "79 parametros dicen la verdad" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "optimiza con datos reales · biohacking real", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 264 -- Instagram salud estetica vs datos reales -- Green -- Zoom ---------
  {
    audioFile:        "audio/bioscan-264.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "green",
    hookStyle:        "zoom",
    durationInFrames: 875,  // 27.2s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📱", title: "En Instagram todos estan saludables. Cuantos tienen datos reales que lo comprueben?", subtitle: "Jugos verdes, poses de yoga. Data is king — empieza con los datos de TU propia salud." },
      { type: "problem", emoji: "📊", title: "La diferencia entre verse saludable y estar saludable.", body: "La estetica de la salud no tiene nada que ver con los datos reales. BioScan IA te da 79 parametros que si importan. SpO2, HRV, riesgo CV. Para el que dice que data is king. $5." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "datos reales no poses · 79 parametros", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 265 -- Tech nativo health app 90 segundos -- Red -- Spring ---------------
  {
    audioFile:        "audio/bioscan-265.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "red",
    hookStyle:        "spring",
    durationInFrames: 872,  // 27.1s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📲", title: "Usas apps para todo. Hay una para tu salud que realmente funciona.", subtitle: "79 parametros en 90 segundos desde el navegador. Sin app extra, sin gadget de $500." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "la health tech que esperabas · sin gadgets", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 266 -- Startup mind salud KPIs baseline -- Gold -- Slide -----------------
  {
    audioFile:        "audio/bioscan-266.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "gold",
    hookStyle:        "slide",
    durationInFrames: 1006,  // 31.5s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🚀", title: "Si trataras tu salud como un startup, monitorearias cada KPI desde el dia 1.", subtitle: "Crea tu baseline. Mide mensual. Itera con datos. El MVP de tu salud preventiva." },
      { type: "list", title: "El startup de tu salud en 3 pasos", items: [
        { emoji: "📊", text: "Dia 1: Baseline de 79 KPIs", sub: "punto de partida real" },
        { emoji: "📅", text: "Mensual: Mide el progreso", sub: "iteracion basada en datos" },
        { emoji: "🔄", text: "Itera tus habitos", sub: "el ciclo que funciona" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "tu startup de salud · MVP preventivo", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 267 -- Party weekend datos recuperacion -- Teal -- Zoom ------------------
  {
    audioFile:        "audio/bioscan-267.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "teal",
    hookStyle:        "zoom",
    durationInFrames: 970,  // 30.3s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🎉", title: "Despues de un fin de semana intenso, siempre hago el analisis BioScan.", subtitle: "No para castigarme. Para entender el impacto real. SpO2, HRV, frecuencia cardiaca." },
      { type: "problem", emoji: "🔍", title: "La verdad sin juicios. Solo datos.", body: "SpO2, HRV, frecuencia cardiaca me dicen cuanto tiempo necesita mi cuerpo para recuperarse. Y voy ajustando. Sin moralizar. 79 parametros que dicen la verdad. Cinco dolares." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "la verdad sin juicios · recuperacion real", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 268 -- Gym 5 dias semana HRV SpO2 CV -- Indigo -- Spring -----------------
  {
    audioFile:        "audio/bioscan-268.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "indigo",
    hookStyle:        "spring",
    durationInFrames: 823,  // 25.4s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🏋️", title: "Entrenas 5 veces por semana. Sabes si tu corazon lo maneja bien?", subtitle: "El ejercicio intenso sin monitoreo puede ser contraproducente. 79 parametros lo confirman." },
      { type: "list", title: "Entrena con datos no a ciegas", items: [
        { emoji: "💓", text: "HRV de recuperacion", sub: "sabe cuando descansar" },
        { emoji: "🫁", text: "SpO2 de rendimiento", sub: "oxigeno real medido" },
        { emoji: "❤️", text: "Estado cardiovascular", sub: "mejora o compromete?" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "entrena con datos · no a ciegas", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 269 -- Primer trabajo score 58 a 74 despertador -- Blue -- Slide ---------
  {
    audioFile:        "audio/bioscan-269.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "blue",
    hookStyle:        "slide",
    durationInFrames: 932,  // 29.1s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📉", title: "Mi primer trabajo real me paso factura. BioScan IA me lo demostro en numeros.", subtitle: "Score 58 despues de 6 meses en oficina. Eso me cambio. A los 26: score 74." },
      { type: "solution", emoji: "📈", stats: [
        { value: "58", label: "score en oficina", color: "#2563EB" },
        { value: "74", label: "score al cambiar", color: "#1D4ED8" },
        { value: "2 años", label: "de diferencia", color: "#1E3A8A" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "tu despertador de salud · datos reales", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 270 -- Prevencion a los 28 anos de vida ganados -- Rose -- Zoom ----------
  {
    audioFile:        "audio/bioscan-270.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "rose",
    hookStyle:        "zoom",
    durationInFrames: 942,  // 29.4s x30 + 60f
    scenes: [
      { type: "hook", emoji: "⏳", title: "Cada ano que empiezas antes en prevencion son anos de vida que ganas al final.", subtitle: "Habitos a los 28 protegen el cuerpo de los 58. La inversion mas rentable a largo plazo." },
      { type: "problem", emoji: "🌱", title: "La medicina preventiva es acumulativa.", body: "Los habitos de salud que construyes a los 28 protegen el cuerpo que tendras a los 58. BioScan IA como punto de partida. 79 parametros. Cinco dolares. La inversion mas rentable." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "invierte en tu futuro · empieza hoy", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

];
