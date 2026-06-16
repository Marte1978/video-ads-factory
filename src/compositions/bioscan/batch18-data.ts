import { BioScanProAdProps } from "./BioScanProAd";

// Batch 18 -- Copies 171-180 -- Categoria: Autoridad / Credibilidad (cont.)
// Rotacion: cyan→purple→orange→green→red→gold→teal→indigo→blue→rose
// HookStyle: zoom→spring→slide→zoom→spring→slide→zoom→spring→slide→zoom
// (continua desde batch17 que termino en slide)

export const batch18: BioScanProAdProps[] = [

  // -- 171 -- Privacidad SSL -- Cyan -- Zoom ------------------------------------
  {
    audioFile:        "audio/bioscan-171.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "cyan",
    hookStyle:        "zoom",
    durationInFrames: 1180,  // 37.3s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🔐", title: "Tus datos de salud son tuyos. BioScan IA no los vende ni los comparte.", subtitle: "SSL cifrado. Sin publicidad medica. Sin monetizar tu privacidad. Solo tu analisis." },
      { type: "solution", emoji: "🛡️", stats: [
        { value: "SSL", label: "cifrado", color: "#06B6D4" },
        { value: "0", label: "datos vendidos", color: "#22D3EE" },
        { value: "$5", label: "precio", color: "#A5F3FC" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "tu privacidad protegida · datos tuyos", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 172 -- Disclaimers honestos -- Purple -- Spring --------------------------
  {
    audioFile:        "audio/bioscan-172.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "purple",
    hookStyle:        "spring",
    durationInFrames: 1014,  // 31.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🤝", title: "BioScan IA no reemplaza un diagnostico medico. Lo dice claramente.", subtitle: "La honestidad genera confianza. Somos informacion, no medicos." },
      { type: "proof", title: "Transparencia total sobre lo que somos.", items: [
        { emoji: "📊", text: "Herramienta de informacion", sub: "no diagnostico medico" },
        { emoji: "🔬", text: "Estimaciones calibradas CDC", sub: "valiosas y precisas" },
        { emoji: "🩺", text: "Complementa la atencion medica", sub: "no la reemplaza" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "informacion honesta · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 173 -- Peer reviewed sources -- Orange -- Slide --------------------------
  {
    audioFile:        "audio/bioscan-173.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "orange",
    hookStyle:        "slide",
    durationInFrames: 1105,  // 34.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📄", title: "Las fuentes de BioScan IA estan publicadas en revistas revisadas por pares.", subtitle: "CDC NHANES. Beer-Lambert. AHA PREVENT. Citables. Verificables. No marketing." },
      { type: "list", title: "Ciencia verificable detras de BioScan IA", items: [
        { emoji: "🇺🇸", text: "CDC NHANES publicado", sub: "revision de pares rigurosa" },
        { emoji: "💡", text: "Beer-Lambert Law documentada", sub: "200 anos de fisica validada" },
        { emoji: "❤️", text: "AHA PREVENT 2023 publicado", sub: "noviembre 2023 peer-reviewed" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "decadas de ciencia · verificable", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 174 -- UCI hospital tech -- Green -- Zoom ---------------------------------
  {
    audioFile:        "audio/bioscan-174.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "green",
    hookStyle:        "zoom",
    durationInFrames: 1108,  // 34.9s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🏥", title: "La tecnologia de BioScan IA es equipo estandar en la UCI de cualquier hospital.", subtitle: "Fotopletismografia PPG — no experimental, medicina validada. Ahora en tu celular." },
      { type: "solution", emoji: "📷", stats: [
        { value: "PPG", label: "foto-pulso", color: "#22C55E" },
        { value: "UCI", label: "estandar", color: "#4ADE80" },
        { value: "$5", label: "precio", color: "#BBF7D0" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "tech de UCI · en tu celular · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 175 -- Score real ejemplo 76/100 -- Red -- Spring -------------------------
  {
    audioFile:        "audio/bioscan-175.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "red",
    hookStyle:        "spring",
    durationInFrames: 1116,  // 35.2s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🔢", title: "Score real de ejemplo: 76/100. Un adulto real de la base de datos CDC.", subtitle: "No lo inventamos. Es el score calculado con los mismos algoritmos de BioScan IA." },
      { type: "solution", emoji: "📱", stats: [
        { value: "76/100", label: "ejemplo CDC", color: "#EF4444" },
        { value: "real", label: "metodologia", color: "#F87171" },
        { value: "$5", label: "tu score", color: "#FECACA" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "cual sera tu score · descubrelo", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 176 -- Dispositivos $500-2000 vs $5 -- Gold -- Slide ----------------------
  {
    audioFile:        "audio/bioscan-176.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "gold",
    hookStyle:        "slide",
    durationInFrames: 1086,  // 34.2s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💰", title: "Dispositivos de monitoreo medico: $500-$2,000. BioScan IA: $5.", subtitle: "Holters, monitores de glucosa continuos, telemetria — BioScan IA usa principios similares." },
      { type: "compare", title: "Monitoreo medico accesible", left: { label: "Dispositivos medicos", value: "$500-$2,000 / aparato" }, right: { label: "BioScan IA", value: "$5 / 79 parametros" }, subtitle: "Por $5 es sorprendentemente poderoso. Sin aparatos extra." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "poderoso y accesible · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 177 -- Historia medicina preventiva -- Teal -- Zoom ----------------------
  {
    audioFile:        "audio/bioscan-177.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "teal",
    hookStyle:        "zoom",
    durationInFrames: 979,  // 30.6s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💉", title: "La medicina preventiva es la disciplina medica que mas vidas ha salvado.", subtitle: "Vacunas. Presion arterial. Colesterol. BioScan IA es la siguiente evolucion." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "la proxima revolucion preventiva · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 178 -- Actualizaciones algoritmo -- Indigo -- Spring ----------------------
  {
    audioFile:        "audio/bioscan-178.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "indigo",
    hookStyle:        "spring",
    durationInFrames: 1124,  // 35.5s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🔄", title: "BioScan IA actualiza sus algoritmos cuando la ciencia avanza.", subtitle: "AHA PREVENT 2023 implementado. CDC se actualiza → BioScan IA se actualiza." },
      { type: "list", title: "Ciencia viva, no software estatico", items: [
        { emoji: "🆕", text: "AHA PREVENT 2023 implementado", sub: "uno de los primeros servicios" },
        { emoji: "📊", text: "CDC NHANES actualizaciones", sub: "calibracion continua" },
        { emoji: "🔬", text: "Algoritmos que evolucionan", sub: "mejora con la ciencia" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "ciencia viva · siempre actualizado", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 179 -- 1000 apps vs una con fuentes -- Blue -- Slide ---------------------
  {
    audioFile:        "audio/bioscan-179.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "blue",
    hookStyle:        "slide",
    durationInFrames: 1225,  // 38.9s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🎯", title: "Hay mil apps que prometen cuidar tu salud. Solo una cita sus fuentes cientificas.", subtitle: "Meditacion, pasos, respiracion — pocas basan sus afirmaciones en ciencia publicada." },
      { type: "proof", title: "BioScan IA: marketing vs ciencia.", items: [
        { emoji: "📚", text: "CDC NHANES — fuente citable", sub: "no afirmacion vaga" },
        { emoji: "❤️", text: "AHA PREVENT 2023 — citado", sub: "no promesa de bienestar" },
        { emoji: "💡", text: "Beer-Lambert — 260 anos de fisica", sub: "no algoritmo secreto" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "elige ciencia · no marketing · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 180 -- PDF reporte medico -- Rose -- Zoom --------------------------------
  {
    audioFile:        "audio/bioscan-180.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "rose",
    hookStyle:        "zoom",
    durationInFrames: 786,  // 24.2s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📋", title: "El reporte PDF de BioScan IA es un documento real que puedes llevar a tu medico.", subtitle: "79 parametros. Valores de referencia. Indicadores de riesgo. Escala 0-100." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "reporte medico PDF · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

];
