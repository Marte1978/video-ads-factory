import { BioScanProAdProps } from "./BioScanProAd";

// Batch 19 -- Copies 181-190 -- Categoria: Escasez / Urgencia
// Rotacion: cyan→purple→orange→green→red→gold→teal→indigo→blue→rose
// HookStyle: spring→slide→zoom→spring→slide→zoom→spring→slide→zoom→spring
// (continua desde batch18 que termino en zoom)

export const batch19: BioScanProAdProps[] = [

  // -- 181 -- Precio lanzamiento -- Cyan -- Spring ------------------------------
  {
    audioFile:        "audio/bioscan-181.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "cyan",
    hookStyle:        "spring",
    durationInFrames: 977,  // 30.6s x30 + 60f
    scenes: [
      { type: "hook", emoji: "⏳", title: "$5 ahora. No podemos garantizar ese precio para siempre.", subtitle: "Fase de lanzamiento. El precio mas bajo que tendra BioScan IA. Aprovechalo." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "precio de lanzamiento · aprovechalo ahora", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 182 -- Dia sin datos es perdida -- Purple -- Slide -----------------------
  {
    audioFile:        "audio/bioscan-182.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "purple",
    hookStyle:        "slide",
    durationInFrames: 1062,  // 33.4s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📅", title: "Cada dia que pasa sin chequearte es un dia de informacion perdida.", subtitle: "La prevencion es acumulativa. Cada analisis construye tu historial. Empieza hoy." },
      { type: "list", title: "Lo que pierdes cada dia que esperas", items: [
        { emoji: "📊", text: "Un punto de datos de salud", sub: "que nunca recuperas" },
        { emoji: "📈", text: "Un dia de tendencia registrada", sub: "para tu historial" },
        { emoji: "⚡", text: "Oportunidad de actuar antes", sub: "si hay algo que atender" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "no pierdas mas dias · empieza hoy", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 183 -- Invierno riesgo cardiaco -- Orange -- Zoom ------------------------
  {
    audioFile:        "audio/bioscan-183.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "orange",
    hookStyle:        "zoom",
    durationInFrames: 1086,  // 34.2s x30 + 60f
    scenes: [
      { type: "hook", emoji: "❄️", title: "Los meses frios aumentan el riesgo cardiovascular. Como esta tu corazon?", subtitle: "Invierno = presion arterial y esfuerzo cardiaco elevados. El momento mas critico para chequearte." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#F97316" },
        { value: "HRV", label: "cardiaco", color: "#FB923C" },
        { value: "$5", label: "precio", color: "#FED7AA" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "preparate para el frio · chequeo ahora", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 184 -- Esta semana reporte extendido -- Green -- Spring ------------------
  {
    audioFile:        "audio/bioscan-184.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "green",
    hookStyle:        "spring",
    durationInFrames: 903,  // 28.1s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🎁", title: "Esta semana: analisis BioScan IA con reporte extendido incluido.", subtitle: "Analisis de tendencias extra sin costo adicional. Solo esta semana." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "reporte extendido · solo esta semana", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 185 -- Cuerpo envejece sin datos -- Red -- Slide -------------------------
  {
    audioFile:        "audio/bioscan-185.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "red",
    hookStyle:        "slide",
    durationInFrames: 1044,  // 32.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "⏱️", title: "Ahora mismo tu cuerpo esta envejeciendo. Y tu no tienes datos.", subtitle: "Celulas dividiendose. Telomeros acortandose. Cambios acumulandose. Cuales son normales?" },
      { type: "list", title: "Lo que BioScan IA detecta mientras tu cuerpo cambia", items: [
        { emoji: "❤️", text: "Variabilidad cardiaca HRV", sub: "senales de envejecimiento" },
        { emoji: "🫁", text: "Funcion pulmonar SpO2", sub: "capacidad con el tiempo" },
        { emoji: "🫘", text: "Marcadores metabolicos", sub: "glucosa y funcion renal" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "datos antes de que sea tarde · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 186 -- Manana puede ser tarde -- Gold -- Zoom ----------------------------
  {
    audioFile:        "audio/bioscan-186.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "gold",
    hookStyle:        "zoom",
    durationInFrames: 1098,  // 34.6s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🚨", title: "El problema con lo hago manana en salud: manana puede ser tarde.", subtitle: "Los problemas silenciosos no avisan. Lo de hoy puede ser urgente manana." },
      { type: "problem", emoji: "⚠️", title: "La procrastinacion en salud tiene costo real.", body: "Un analisis hoy puede detectar algo que manana ya necesita tratamiento urgente. BioScan IA: 90 segundos. $5. Hazlo ahora, no manana. Garantia total de devolucion." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "ahora no manana · 90 segundos · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 187 -- Revision fin de ano -- Teal -- Spring -----------------------------
  {
    audioFile:        "audio/bioscan-187.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "teal",
    hookStyle:        "spring",
    durationInFrames: 1026,  // 32.2s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🎯", title: "Termina el ano sabiendo exactamente como esta tu salud.", subtitle: "La revision anual no es solo de finanzas. Tu cuerpo merece un audit tambien." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#14B8A6" },
        { value: "2025", label: "con datos", color: "#2DD4BF" },
        { value: "$5", label: "precio", color: "#99F6E4" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "tu audit de salud anual · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 188 -- Chequeo pre-viaje -- Indigo -- Slide ------------------------------
  {
    audioFile:        "audio/bioscan-188.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "indigo",
    hookStyle:        "slide",
    durationInFrames: 922,  // 28.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "✈️", title: "Antes de ese viaje largo, sabe que tu salud esta bien.", subtitle: "Vuelo de 12h. Viaje internacional. Antes de embarcar: 90 segundos y 79 parametros." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "chequeo pre-viaje · vuela tranquilo", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 189 -- Post-estres recuperacion -- Blue -- Zoom ---------------------------
  {
    audioFile:        "audio/bioscan-189.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "blue",
    hookStyle:        "zoom",
    durationInFrames: 1005,  // 31.5s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🔋", title: "Despues del resfriado. Despues del estres intenso. Mide tu recuperacion.", subtitle: "Los eventos estresantes dejan huella. BioScan IA mide si ya te recuperaste." },
      { type: "list", title: "Cuando BioScan IA es mas urgente", items: [
        { emoji: "🤧", text: "Despues de enfermedad", sub: "confirma que te recuperaste" },
        { emoji: "😰", text: "Despues de estres intenso", sub: "mide el impacto real" },
        { emoji: "😴", text: "Despues de mala racha de sueno", sub: "ve el efecto en HRV" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "mide tu recuperacion · datos reales", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 190 -- Baseline nueva rutina -- Rose -- Spring ---------------------------
  {
    audioFile:        "audio/bioscan-190.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "rose",
    hookStyle:        "spring",
    durationInFrames: 1042,  // 32.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🏁", title: "Antes de empezar tu nueva rutina de salud, conoce tu punto de partida.", subtitle: "Sin datos del dia 0 no puedes medir progreso. BioScan IA es tu baseline." },
      { type: "solution", emoji: "📱", stats: [
        { value: "DIA 0", label: "baseline", color: "#F43F5E" },
        { value: "90d", label: "re-analisis", color: "#FB7185" },
        { value: "$5", label: "precio", color: "#FDA4AF" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "establece tu baseline · mide progreso", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

];
