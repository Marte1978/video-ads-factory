import { BioScanProAdProps } from "./BioScanProAd";

// Batch 22 -- Copies 211-220 -- Categoria: Historias de Transformacion (cont.)
// Rotacion: cyan→purple→orange→green→red→gold→teal→indigo→blue→rose
// HookStyle: spring→slide→zoom→spring→slide→zoom→spring→slide→zoom→spring
// (continua desde batch21 que termino en rose/zoom)

export const batch22: BioScanProAdProps[] = [

  // -- 211 -- Mujer empoderada por datos -- Cyan -- Spring ----------------------
  {
    audioFile:        "audio/bioscan-211.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "cyan",
    hookStyle:        "spring",
    durationInFrames: 922,  // 28.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "👩", title: "Como mujer, siempre puse la salud de mi familia antes que la mia. BioScan IA cambio eso.", subtitle: "Por primera vez, 79 parametros de MI salud. No la de mis hijos. La mia." },
      { type: "problem", emoji: "💙", title: "Tu salud tambien importa.", body: "Tuve datos reales de mi propia salud por primera vez. 79 parametros que me dijeron como estaba yo. Fue liberador. Y me motivo a cuidarme de verdad. Score 0-100. Reporte PDF. Asistente IA. $5. 90 segundos." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "tu salud tambien importa · 79 parametros", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 212 -- Empresario 16h score 47 a 74 -- Purple -- Slide -------------------
  {
    audioFile:        "audio/bioscan-212.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "purple",
    hookStyle:        "slide",
    durationInFrames: 856,  // 26.5s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💼", title: "Trabajaba 16 horas al dia. Mi score BioScan era 47. Tuve que elegir.", subtitle: "Sin salud, no hay negocio. Score 47 → 74. La salud ES el negocio." },
      { type: "solution", emoji: "📊", stats: [
        { value: "47", label: "score inicial", color: "#7C3AED" },
        { value: "74", label: "score ahora", color: "#6D28D9" },
        { value: "$5", label: "analisis", color: "#4C1D95" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "la salud ES el negocio · score real", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 213 -- Dejar de fumar SpO2 94 a 97 -- Orange -- Zoom ---------------------
  {
    audioFile:        "audio/bioscan-213.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "orange",
    hookStyle:        "zoom",
    durationInFrames: 859,  // 26.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🚭", title: "Deje de fumar hace 3 meses. BioScan IA me muestra como mis pulmones se recuperan.", subtitle: "SpO2: 94% → 97%. Lo siento y lo veo en datos." },
      { type: "solution", emoji: "🫁", stats: [
        { value: "94%", label: "SpO2 inicial", color: "#F97316" },
        { value: "97%", label: "SpO2 actual", color: "#EA580C" },
        { value: "3m", label: "sin fumar", color: "#9A3412" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "ve tu recuperacion en datos · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 214 -- Diabetico tipo 2 protocolo complementario -- Green -- Spring ------
  {
    audioFile:        "audio/bioscan-214.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "green",
    hookStyle:        "spring",
    durationInFrames: 864,  // 26.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🩺", title: "Soy diabetico tipo 2. BioScan IA es parte de mi protocolo de monitoreo.", subtitle: "No reemplaza el glucometro. Lo complementa con 79 parametros adicionales." },
      { type: "list", title: "Monitoreo complementario para diabeticos", items: [
        { emoji: "📊", text: "Glucosa estimada entre analisis", sub: "mas informacion continua" },
        { emoji: "❤️", text: "Marcadores metabolicos completos", sub: "vision integral de salud" },
        { emoji: "✅", text: "Aprobado por mi endocrinologo", sub: "complemento validado" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "monitoreo complementario · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 215 -- Hipertenso detectado 145/92 -- Red -- Slide -----------------------
  {
    audioFile:        "audio/bioscan-215.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "red",
    hookStyle:        "slide",
    durationInFrames: 1115,  // 35.2s x30 + 60f
    scenes: [
      { type: "hook", emoji: "⚠️", title: "La presion arterial estimada de BioScan IA marco 145/92. Fui al medico. Tenia razon.", subtitle: "Sin sintomas. Sin saberlo. El analisis de $5 lo detecto antes de que algo grave pasara." },
      { type: "problem", emoji: "🫀", title: "Deteccion de hipertension silenciosa.", body: "No tenia sintomas claros. BioScan IA detecto el patron. Fui al medico con el reporte PDF. Confirmado: hipertension estadio 1. Empece tratamiento. Sin BioScan IA, quizas lo hubiera descubierto despues de un evento mas serio. Detecta lo que no ves. $5." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "detecta lo que no ves · presion estimada", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 216 -- Joven 28 anos score 66 a 82 -- Gold -- Zoom -----------------------
  {
    audioFile:        "audio/bioscan-216.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "gold",
    hookStyle:        "zoom",
    durationInFrames: 907,  // 28.2s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🧑", title: "A los 28 anos pensaba que la salud era para los viejitos. BioScan IA me cambio la mente.", subtitle: "Score 66 → 82. La salud no tiene edad minima." },
      { type: "solution", emoji: "📈", stats: [
        { value: "66", label: "score a 28", color: "#D97706" },
        { value: "82", label: "score a 29", color: "#B45309" },
        { value: "1 año", label: "cambio real", color: "#78350F" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "empieza joven · la salud no espera", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 217 -- Post-pandemia score 52 a 71 -- Teal -- Spring ---------------------
  {
    audioFile:        "audio/bioscan-217.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "teal",
    hookStyle:        "spring",
    durationInFrames: 887,  // 27.6s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🦠", title: "El COVID arruino mis habitos. BioScan IA me ayudo a reconstruirlos.", subtitle: "Score post-pandemia 52. Con guia mensual de datos, en 10 meses: 71." },
      { type: "solution", emoji: "🔄", stats: [
        { value: "52", label: "score post-COVID", color: "#0D9488" },
        { value: "71", label: "score actual", color: "#0F766E" },
        { value: "10m", label: "reconstruido", color: "#134E4A" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "reconstruye con datos · guia mensual", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 218 -- Deportista cirugia rodilla vuelta -- Indigo -- Slide --------------
  {
    audioFile:        "audio/bioscan-218.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "indigo",
    hookStyle:        "slide",
    durationInFrames: 901,  // 28.1s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🦵", title: "Despues de una lesion, BioScan IA me guio en la vuelta al deporte.", subtitle: "Cirugia de rodilla. 6 meses de rehab. Los datos me dijeron cuando estaba listo." },
      { type: "list", title: "Recuperacion deportiva con datos reales", items: [
        { emoji: "🫁", text: "SpO2 monitoreado durante rehab", sub: "salud sistemica confirmada" },
        { emoji: "❤️", text: "Cardiovascular estable", sub: "durante todo el proceso" },
        { emoji: "✅", text: "Volvi al deporte con certeza", sub: "datos que confirmaron que estaba listo" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "recuperacion inteligente · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 219 -- Pareja scores 68-65 a 79-76 pack familiar -- Blue -- Zoom --------
  {
    audioFile:        "audio/bioscan-219.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "blue",
    hookStyle:        "zoom",
    durationInFrames: 1029,  // 32.3s x30 + 60f
    scenes: [
      { type: "hook", emoji: "👫", title: "Mi esposa y yo hacemos el analisis juntos cada mes. Competimos sanamente.", subtitle: "Ella 68 → 79. Yo 65 → 76. El pack familiar de $18 fue la mejor decision juntos." },
      { type: "solution", emoji: "💑", stats: [
        { value: "68→79", label: "ella", color: "#2563EB" },
        { value: "65→76", label: "el", color: "#1D4ED8" },
        { value: "$18", label: "pack familiar", color: "#1E3A8A" },
      ]},
      { type: "cta", plan: "Pack Familiar", price: "$18 USD", priceNote: "cuidense juntos · scores reales", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 220 -- Turno de noche score 54 a 68 -- Rose -- Spring -------------------
  {
    audioFile:        "audio/bioscan-220.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "rose",
    hookStyle:        "spring",
    durationInFrames: 958,  // 30.0s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🌙", title: "Trabajo en turno de noche. BioScan IA confirmo mis sospechas y me ayudo a mitigarlas.", subtitle: "Score 54 → 68 con ajustes para mi estilo de vida nocturno real." },
      { type: "problem", emoji: "⏰", title: "Salud para el estilo de vida real.", body: "Ritmo circadiano alterado, sueno deficiente, estres aumentado. Score inicial 54. Con ajustes especificos BioScan IA llego a 68. Los datos personalizaron las recomendaciones para mi situacion real. $5. 90 segundos." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "salud para tu vida real · score personalizado", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

];
