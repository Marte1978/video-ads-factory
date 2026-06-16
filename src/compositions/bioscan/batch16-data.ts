import { BioScanProAdProps } from "./BioScanProAd";

// Batch 16 -- Copies 151-160 -- Categoria: Comparaciones Directas (cont.)
// Rotacion: cyan→purple→orange→green→red→gold→teal→indigo→blue→rose
// HookStyle: spring→slide→zoom→spring→slide→zoom→spring→slide→zoom→spring
// (continua desde batch15 que termino en zoom)

export const batch16: BioScanProAdProps[] = [

  // -- 151 -- Medico 2x ano vs BioScan diario -- Cyan -- Spring ----------------
  {
    audioFile:        "audio/bioscan-151.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "cyan",
    hookStyle:        "spring",
    durationInFrames: 1252,  // 39.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🩺", title: "Tu medico te ve 2 veces al ano. BioScan IA puede verte todos los dias.", subtitle: "No reemplaza al medico. Lo complementa con monitoreo continuo entre citas." },
      { type: "list", title: "Lo que BioScan IA agrega entre visitas medicas", items: [
        { emoji: "📊", text: "79 parametros cuando quieras", sub: "sin cita ni espera" },
        { emoji: "📈", text: "Historial y tendencias reales", sub: "no solo momentos aislados" },
        { emoji: "📄", text: "Reporte PDF para tu medico", sub: "llega con datos reales" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "monitoreo entre citas · datos reales", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 152 -- Farmacia sin datos vs BioScan -- Purple -- Slide -----------------
  {
    audioFile:        "audio/bioscan-152.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "purple",
    hookStyle:        "slide",
    durationInFrames: 1024,  // 32.2s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💊", title: "En la farmacia te venden pastillas sin saber si las necesitas.", subtitle: "BioScan IA te dice si las necesitas. Datos antes de decisiones." },
      { type: "proof", title: "Decisiones de salud basadas en datos.", items: [
        { emoji: "📊", text: "79 parametros de estado real", sub: "antes de cualquier suplemento" },
        { emoji: "🔬", text: "Calibrado CDC + AHA 2023", sub: "no marketing farmaceutico" },
        { emoji: "🤖", text: "Asistente IA que guia", sub: "que tomar segun tus datos" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "datos antes de pastillas · decide bien", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 153 -- Foto anual vs pelicula continua -- Orange -- Zoom ----------------
  {
    audioFile:        "audio/bioscan-153.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "orange",
    hookStyle:        "zoom",
    durationInFrames: 1053,  // 33.1s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🎬", title: "Un chequeo al ano es una foto. BioScan IA es una pelicula.", subtitle: "Las tendencias detectan lo que un dato aislado no ve." },
      { type: "compare", title: "Foto vs pelicula de salud", left: { label: "Chequeo anual", value: "1 foto / 12 meses" }, right: { label: "BioScan IA", value: "pelicula / cuando quieras" }, subtitle: "79 parametros mensuales para ver tendencias y actuar antes de que algo escale." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "de foto a pelicula · prevencion real", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 154 -- Hospital 6h vs 90s -- Green -- Spring ----------------------------
  {
    audioFile:        "audio/bioscan-154.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "green",
    hookStyle:        "spring",
    durationInFrames: 1065,  // 33.5s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🏥", title: "Hospital publico: 6 horas de espera. BioScan IA: 90 segundos.", subtitle: "Para emergencias reales, el hospital siempre. Para evaluar si es emergencia: BioScan IA primero." },
      { type: "compare", title: "Decide antes de ir a urgencias", left: { label: "Hospital publico", value: "6 horas espera" }, right: { label: "BioScan IA primero", value: "90s + decide con datos" }, subtitle: "79 parametros te dicen si ese malestar amerita urgencias o descanso." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "decide informado · 90 segundos", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 155 -- Nutricionista necesita datos -- Red -- Slide ---------------------
  {
    audioFile:        "audio/bioscan-155.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "red",
    hookStyle:        "slide",
    durationInFrames: 1206,  // 38.2s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🥗", title: "El nutricionista te pide examenes antes de una dieta. BioScan IA los hace en 90 segundos.", subtitle: "Nutricion personalizada requiere datos reales. SpO2, glucosa, marcadores metabolicos." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#EF4444" },
        { value: "GLU", label: "glucosa est.", color: "#F87171" },
        { value: "$5", label: "precio", color: "#FECACA" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "llega con datos al nutricionista · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 156 -- Fitbit pasos vs riesgo cardiaco -- Gold -- Zoom ------------------
  {
    audioFile:        "audio/bioscan-156.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "gold",
    hookStyle:        "zoom",
    durationInFrames: 1205,  // 38.2s x30 + 60f
    scenes: [
      { type: "hook", emoji: "👟", title: "Tu Fitbit sabe cuantos pasos diste. BioScan IA sabe si tu corazon esta en riesgo.", subtitle: "Los pasos son actividad fisica. El riesgo cardiovascular es salud clinica. Son cosas distintas." },
      { type: "compare", title: "Fitness tracker vs analisis clinico", left: { label: "Fitbit / fitness tracker", value: "pasos + sueno superficial" }, right: { label: "BioScan IA", value: "riesgo clinico + 79 parametros" }, subtitle: "La diferencia entre contar pasos y cuidar tu salud de verdad." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "mas alla del fitness · salud real", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 157 -- Sin BioScan 0 vs Con BioScan 79 -- Teal -- Spring ---------------
  {
    audioFile:        "audio/bioscan-157.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "teal",
    hookStyle:        "spring",
    durationInFrames: 956,  // 29.9s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🔢", title: "Sin BioScan: no sabes nada. Con BioScan: sabes 79 cosas.", subtitle: "Es asi de simple. La decision mas obvia que tomaras hoy." },
      { type: "solution", emoji: "📱", stats: [
        { value: "0", label: "sin datos", color: "#14B8A6" },
        { value: "→ 79", label: "con BioScan", color: "#2DD4BF" },
        { value: "$5", label: "precio", color: "#99F6E4" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "la respuesta es obvia · bioscanpro.net", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 158 -- $5,000 tratamiento vs $5 prevencion -- Indigo -- Slide -----------
  {
    audioFile:        "audio/bioscan-158.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "indigo",
    hookStyle:        "slide",
    durationInFrames: 1159,  // 36.6s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💸", title: "Gastar $5,000 tratando lo que pudiste prevenir con $5. Elige.", subtitle: "La medicina reactiva es cara. La preventiva, accesible. La matematica habla sola." },
      { type: "compare", title: "Costo real de no chequearse", left: { label: "Hospitalizacion prevenible", value: "$50,000+ / crisis" }, right: { label: "BioScan IA mensual", value: "$60/ano / prevencion" }, subtitle: "Un analisis mensual con BioScan IA cuesta $60 al ano. La ecuacion es clara." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "previene hoy · $5 vs $50,000", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 159 -- Salud democratica LATAM -- Blue -- Zoom --------------------------
  {
    audioFile:        "audio/bioscan-159.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "blue",
    hookStyle:        "zoom",
    durationInFrames: 1170,  // 37.0s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🌎", title: "En Europa hay salud universal. En America Latina, no. BioScan IA nivela la cancha.", subtitle: "Un chequeo completo puede costar semanas de salario. Por $5, cambia eso." },
      { type: "problem", emoji: "⚖️", title: "La desigualdad en salud es real.", body: "BioScan IA democratiza el acceso a datos de salud. $5. 79 parametros. Para cualquier persona con celular y conexion a internet. Democratizacion real de la salud." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "salud sin fronteras · acceso real", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 160 -- Netflix $15 vs salud $5 -- Rose -- Spring ------------------------
  {
    audioFile:        "audio/bioscan-160.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "rose",
    hookStyle:        "spring",
    durationInFrames: 1067,  // 33.6s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📺", title: "Gastas $15 al mes en Netflix. Cuanto en tu salud?", subtitle: "No es juicio. Es una pregunta honesta sobre prioridades." },
      { type: "compare", title: "Tu presupuesto mensual", left: { label: "Netflix", value: "$15/mes / entretenimiento" }, right: { label: "BioScan IA pack familiar", value: "$18 / 4 analisis completos" }, subtitle: "Toda tu familia. 316 parametros totales. Decide que importa mas." },
      { type: "cta", plan: "Pack Familiar", price: "$18 USD", priceNote: "4 analisis · toda la familia", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

];
