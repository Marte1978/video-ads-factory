import { BioScanProAdProps } from "./BioScanProAd";

// Batch 03 -- Copies 021-030 -- Categoria: Precio / Acceso Economico
// Rotacion: cyan→purple→orange→green→red→gold→teal→indigo→blue→rose
// HookStyle: zoom→spring→slide (continua desde batch02 que termino en slide)

export const batch03: BioScanProAdProps[] = [

  // -- 021 -- PAS -- Cyan -- Zoom --------------------------------------------
  {
    audioFile:        "audio/bioscan-021.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "cyan",
    hookStyle:        "zoom",
    durationInFrames: 1990,  // 64.3s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💸", title: "Te cobran $300 por un analisis de sangre en clinica.", subtitle: "Sin agujas. Sin espera. Sin sorpresas. BioScan IA: $5." },
      { type: "problem", emoji: "🏥", title: "Trescientos dolares por resultados que llegan dias despues.", body: "Y muchas veces dicen: todo normal." },
      { type: "compare", title: "La diferencia es real", left: { label: "Clinica", value: "$300 + dias" }, right: { label: "BioScan IA", value: "$5 en 90s" }, subtitle: "Misma ciencia. 60x mas barato." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "indicadores", color: "#00D4FF" },
        { value: "$5", label: "precio total", color: "#00FF88" },
        { value: "90s", label: "desde celular", color: "#FFD700" },
      ]},
      { type: "proof", title: "Respaldado por ciencia real.", items: [
        { emoji: "🇺🇸", text: "CDC NHANES", sub: "5,856 adultos" },
        { emoji: "❤️", text: "AHA PREVENT", sub: "2023" },
        { emoji: "📄", text: "Reporte PDF", sub: "al instante" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "el chequeo que cualquiera puede pagar", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 022 -- AIDA -- Purple -- Spring ---------------------------------------
  {
    audioFile:        "audio/bioscan-022.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "purple",
    hookStyle:        "spring",
    durationInFrames: 1762,  // 56.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "⚖️", title: "La salud no deberia ser un privilegio para quien puede pagarlo.", subtitle: "Cita especialista: $150. Laboratorio: $200. BioScan IA: $5." },
      { type: "problem", emoji: "😤", title: "Millones no van al medico porque no pueden pagar.", body: "Y mientras esperan, el dano silencioso sigue acumulandose." },
      { type: "solution", emoji: "🌎", stats: [
        { value: "79", label: "indicadores", color: "#A855F7" },
        { value: "13", label: "sistemas", color: "#E879F9" },
        { value: "$5", label: "para todos", color: "#F0ABFC" },
      ]},
      { type: "proof", title: "Salud sin discriminacion de precio.", items: [
        { emoji: "🏠", text: "Desde casa", sub: "sin clinica" },
        { emoji: "🔒", text: "Total privacidad", sub: "solo tu lo ves" },
        { emoji: "🤖", text: "Asistente IA", sub: "incluido" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "salud para todos · sin barreras", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 023 -- FAB -- Orange -- Slide -----------------------------------------
  {
    audioFile:        "audio/bioscan-023.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "orange",
    hookStyle:        "slide",
    durationInFrames: 1656,  // 53.2s x30 + 60f
    scenes: [
      { type: "hook", emoji: "☕", title: "Por el precio de un cafe conoces tu estado de salud completo.", subtitle: "$5 USD. La mejor inversion que puedes hacer hoy." },
      { type: "list", title: "Todo incluido en $5", items: [
        { emoji: "📊", text: "79 indicadores", sub: "en 90 segundos" },
        { emoji: "📄", text: "Reporte PDF", sub: "descargable" },
        { emoji: "🤖", text: "Asistente IA", sub: "explica todo" },
        { emoji: "💯", text: "Score 0-100", sub: "tu salud en un numero" },
      ]},
      { type: "solution", emoji: "🔬", stats: [
        { value: "79", label: "parametros", color: "#F97316" },
        { value: "$5", label: "total", color: "#FB923C" },
        { value: "vs $300", label: "clinica", color: "#FED7AA" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "menos que un cafe · mas que un chequeo", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 024 -- HSO -- Green -- Zoom -------------------------------------------
  {
    audioFile:        "audio/bioscan-024.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "green",
    hookStyle:        "zoom",
    durationInFrames: 1530,  // 49.0s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🔬", title: "¿$5 por 79 indicadores de salud? Si. Respaldado por ciencia.", subtitle: "Beer-Lambert. CDC NHANES. AHA PREVENT 2023." },
      { type: "proof", title: "La ciencia que lo hace posible.", items: [
        { emoji: "⚗️", text: "Beer-Lambert", sub: "oximetria medica" },
        { emoji: "🇺🇸", text: "5,856 adultos", sub: "CDC NHANES" },
        { emoji: "❤️", text: "PREVENT 2023", sub: "American Heart Assoc." },
      ]},
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "indicadores", color: "#22C55E" },
        { value: "$5", label: "precio justo", color: "#4ADE80" },
        { value: "90s", label: "resultado", color: "#BBF7D0" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "compruebalo tu mismo hoy", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 025 -- PAS -- Red -- Spring -------------------------------------------
  {
    audioFile:        "audio/bioscan-025.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "red",
    hookStyle:        "spring",
    durationInFrames: 1792,  // 57.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📆", title: "El ano pasado gastaste $0 en conocer tu salud.", subtitle: "No porque no quisieras. Sino porque era caro, complicado, lejano." },
      { type: "problem", emoji: "🚫", title: "Todas las excusas desaparecen con BioScan IA.", body: "Sin citas. Sin laboratorio. Sin desplazamientos. Sin espera." },
      { type: "list", title: "Lo que elimina BioScan IA", items: [
        { emoji: "❌", text: "Citas previas", sub: "disponible 24/7" },
        { emoji: "❌", text: "Desplazamiento", sub: "desde tu celular" },
        { emoji: "❌", text: "Agujas", sub: "solo camara" },
        { emoji: "❌", text: "Dias de espera", sub: "resultado en 90s" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "ya no hay excusa · hoy es el dia", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 026 -- BAB -- Gold -- Slide -------------------------------------------
  {
    audioFile:        "audio/bioscan-026.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "gold",
    hookStyle:        "slide",
    durationInFrames: 1593,  // 51.1s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📉", title: "Antes: $200 laboratorio, 4 dias, 15 parametros.", subtitle: "Ahora: $5 BioScan IA, 90 segundos, 79 parametros." },
      { type: "compare", title: "La ecuacion cambio", left: { label: "Laboratorio", value: "$200 / 10-15 param" }, right: { label: "BioScan IA", value: "$5 / 79 param" }, subtitle: "40x mas barato. Dias vs 90 segundos." },
      { type: "solution", emoji: "📱", stats: [
        { value: "40x", label: "mas barato", color: "#F59E0B" },
        { value: "5x", label: "mas parametros", color: "#FBBF24" },
        { value: "infinito", label: "mas rapido", color: "#FCD34D" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "cambia la ecuacion hoy", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 027 -- Story -- Teal -- Zoom ------------------------------------------
  {
    audioFile:        "audio/bioscan-027.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "teal",
    hookStyle:        "zoom",
    durationInFrames: 1722,  // 55.4s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💔", title: "Le dijeron que el analisis costaba $400. No tenia el dinero. Espero.", subtitle: "Tres meses despues llego a urgencias con crisis hipertensiva." },
      { type: "problem", emoji: "🏥", title: "Esperar en salud tiene consecuencias reales.", body: "BioScan IA existe para que nadie tenga que elegir entre su salud y su billetera." },
      { type: "solution", emoji: "🌎", stats: [
        { value: "$5", label: "acceso real", color: "#14B8A6" },
        { value: "79", label: "indicadores", color: "#2DD4BF" },
        { value: "90s", label: "resultado", color: "#99F6E4" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "acceso sin barreras economicas", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 028 -- AIDA -- Indigo -- Spring ---------------------------------------
  {
    audioFile:        "audio/bioscan-028.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "indigo",
    hookStyle:        "spring",
    durationInFrames: 1533,  // 49.1s x30 + 60f
    scenes: [
      { type: "hook", emoji: "😌", title: "¿Cuanto vale saber que estas bien?", subtitle: "Esa tranquilidad respaldada por datos reales. $5 USD." },
      { type: "list", title: "Lo que te da esa paz mental", items: [
        { emoji: "🫀", text: "Corazon OK", sub: "riesgo cardiovascular" },
        { emoji: "💉", text: "Presion normal", sub: "estimada en tiempo real" },
        { emoji: "🫁", text: "SpO2 optimo", sub: "saturacion de oxigeno" },
        { emoji: "💯", text: "Score alto", sub: "0-100 de salud" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "compra tranquilidad real · garantia incluida", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 029 -- FAB -- Blue -- Slide -------------------------------------------
  {
    audioFile:        "audio/bioscan-029.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "blue",
    hookStyle:        "slide",
    durationInFrames: 1659,  // 53.3s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📅", title: "Una vez al mes con BioScan IA = $60 al ano en salud.", subtitle: "Clinica privada mensual: $3,600 al ano. Diferencia: $3,540." },
      { type: "compare", title: "El ahorro anual es real", left: { label: "Clinica mensual", value: "$3,600 / ano" }, right: { label: "BioScan IA mensual", value: "$60 / ano" }, subtitle: "948 indicadores revisados al ano." },
      { type: "solution", emoji: "📊", stats: [
        { value: "12x", label: "analisis al ano", color: "#3B82F6" },
        { value: "$60", label: "inversion anual", color: "#60A5FA" },
        { value: "948", label: "param revisados", color: "#BFDBFE" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "invierte inteligente en tu salud", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 030 -- PAS -- Rose -- Zoom --------------------------------------------
  {
    audioFile:        "audio/bioscan-030.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "rose",
    hookStyle:        "zoom",
    durationInFrames: 1546,  // 49.6s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🚕", title: "Un taxi cuesta mas que esto.", subtitle: "Cafe con leche. Uber. Combo de comida. Todo cuesta mas que BioScan IA." },
      { type: "list", title: "Por $5 obtienes todo esto", items: [
        { emoji: "📊", text: "79 indicadores", sub: "en 90 segundos" },
        { emoji: "📄", text: "Reporte PDF", sub: "descargable" },
        { emoji: "🤖", text: "Asistente IA", sub: "explica cada resultado" },
        { emoji: "💯", text: "Score salud", sub: "0 a 100" },
      ]},
      { type: "solution", emoji: "💰", stats: [
        { value: "$5", label: "precio total", color: "#F43F5E" },
        { value: "79", label: "parametros", color: "#FB7185" },
        { value: "100%", label: "garantia", color: "#FDA4AF" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "la decision mas obvia de hoy", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

];
