import { BioScanProAdProps } from "./BioScanProAd";

// Batch 06 -- Copies 051-060 -- Categoria: Velocidad y Conveniencia (cont.)
// Rotacion: cyan→purple→orange→green→red→gold→teal→indigo→blue→rose
// HookStyle: zoom→spring→slide (continua desde batch05 que termino en slide)

export const batch06: BioScanProAdProps[] = [

  // -- 051 -- PAS -- Cyan -- Zoom --------------------------------------------
  {
    audioFile:        "audio/bioscan-051.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "cyan",
    hookStyle:        "zoom",
    durationInFrames: 1930,  // 62.4s x30 + 60f
    scenes: [
      { type: "hook", emoji: "⚡", title: "Cuando fue la ultima vez que en 90 segundos recibiste algo tan valioso.", subtitle: "79 parametros. Score 0-100. PDF. Asistente IA. Todo en 90s." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "parametros", color: "#00D4FF" },
        { value: "90s", label: "tiempo total", color: "#00FF88" },
        { value: "$5", label: "precio", color: "#FFD700" },
      ]},
      { type: "proof", title: "Mas valor en 90s que en 4h de clinica.", items: [
        { emoji: "❤️", text: "AHA PREVENT 2023", sub: "riesgo cardiaco" },
        { emoji: "🇺🇸", text: "CDC NHANES", sub: "5,856 adultos" },
        { emoji: "🤖", text: "Asistente IA", sub: "explica todo" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "los 90s mas valiosos de tu dia", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 052 -- AIDA -- Purple -- Spring ----------------------------------------
  {
    audioFile:        "audio/bioscan-052.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "purple",
    hookStyle:        "spring",
    durationInFrames: 1888,  // 61.0s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📋", title: "Sin formularios. Sin historial medico. Sin seguro. Sin cita previa.", subtitle: "El sistema medico te hace perder tiempo. BioScan IA no." },
      { type: "list", title: "Sin ninguna de estas barreras", items: [
        { emoji: "❌", text: "Formularios", sub: "entrada directa" },
        { emoji: "❌", text: "Seguro medico", sub: "no necesario" },
        { emoji: "❌", text: "Cita previa", sub: "disponible 24/7" },
        { emoji: "❌", text: "Burocracia", sub: "solo tu y los datos" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "sin barreras · sin obstaculos", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 053 -- HSO -- Orange -- Slide ------------------------------------------
  {
    audioFile:        "audio/bioscan-053.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "orange",
    hookStyle:        "slide",
    durationInFrames: 2039,  // 66.0s x30 + 60f
    scenes: [
      { type: "hook", emoji: "⏰", title: "Si lo dejas para despues, no lo haras.", subtitle: "BioScan IA es la unica opcion de salud que puedes hacer ahora mismo." },
      { type: "problem", emoji: "📅", title: "La lista de 'lo hare cuando tenga tiempo' nunca termina.", body: "Cinco dolares. Noventa segundos. Desde este telefono. Ninguna otra excusa." },
      { type: "solution", emoji: "📱", stats: [
        { value: "90s", label: "ahora mismo", color: "#F97316" },
        { value: "79", label: "indicadores", color: "#FB923C" },
        { value: "$5", label: "precio", color: "#FED7AA" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "ahora · no en un rato", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 054 -- FAB -- Green -- Zoom --------------------------------------------
  {
    audioFile:        "audio/bioscan-054.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "green",
    hookStyle:        "zoom",
    durationInFrames: 1747,  // 56.3s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📺", title: "Puedes hacer tu analisis de salud mientras ves Netflix.", subtitle: "90 segundos. Dedo en camara. Reporte en tu correo. Sigue la serie." },
      { type: "solution", emoji: "😌", stats: [
        { value: "79", label: "indicadores", color: "#22C55E" },
        { value: "90s", label: "sin pausar nada", color: "#4ADE80" },
        { value: "$5", label: "precio", color: "#BBF7D0" },
      ]},
      { type: "proof", title: "Tu salud no compite con tu tiempo libre.", items: [
        { emoji: "📊", text: "79 parametros", sub: "en 90 segundos" },
        { emoji: "📄", text: "Reporte PDF", sub: "en tu correo" },
        { emoji: "🤖", text: "Asistente IA", sub: "disponible siempre" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "la salud mas facil del mundo", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 055 -- PAS -- Red -- Spring --------------------------------------------
  {
    audioFile:        "audio/bioscan-055.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "red",
    hookStyle:        "spring",
    durationInFrames: 2008,  // 64.9s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🚪", title: "El unico obstaculo entre tu y conocer tu salud es abrir una pagina web.", subtitle: "Eso es todo. Un clic. bioscanpro.net." },
      { type: "list", title: "Cero obstaculos reales", items: [
        { emoji: "✅", text: "Sin seguro medico", sub: "no lo necesitas" },
        { emoji: "✅", text: "Sin desplazamiento", sub: "desde tu celular" },
        { emoji: "✅", text: "Solo $5", sub: "sin sorpresas" },
        { emoji: "✅", text: "90 segundos", sub: "resultado inmediato" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "un clic · cinco dolares", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 056 -- AIDA -- Gold -- Slide -------------------------------------------
  {
    audioFile:        "audio/bioscan-056.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "gold",
    hookStyle:        "slide",
    durationInFrames: 1836,  // 59.2s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📸", title: "No tienes que saber nada de tecnologia. Si puedes tomar una foto, puedes usar BioScan IA.", subtitle: "Mas simple que Instagram. Mas intuitivo que WhatsApp." },
      { type: "list", title: "Tres pasos. Tan simple como una selfie", items: [
        { emoji: "🌐", text: "Abre el navegador", sub: "bioscanpro.net" },
        { emoji: "👆", text: "Dedo en camara", sub: "90 segundos" },
        { emoji: "📊", text: "Recibe resultado", sub: "79 param + PDF + IA" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "tan facil como una selfie", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 057 -- FAB -- Teal -- Zoom ---------------------------------------------
  {
    audioFile:        "audio/bioscan-057.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "teal",
    hookStyle:        "zoom",
    durationInFrames: 1872,  // 60.4s x30 + 60f
    scenes: [
      { type: "hook", emoji: "⚡", title: "Resultado en tiempo real. No en 3 dias cuando el laboratorio procese tu muestra.", subtitle: "BioScan IA: 90 segundos. Laboratorio: 3-5 dias." },
      { type: "compare", title: "El futuro de los resultados", left: { label: "Laboratorio", value: "3-5 dias / papel" }, right: { label: "BioScan IA", value: "90s / PDF + IA" }, subtitle: "Mismo precio o menos. 100x mas rapido." },
      { type: "solution", emoji: "📱", stats: [
        { value: "90s", label: "resultado", color: "#14B8A6" },
        { value: "79", label: "parametros", color: "#2DD4BF" },
        { value: "$5", label: "precio", color: "#99F6E4" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "resultados en tiempo real", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 058 -- HSO -- Indigo -- Spring -----------------------------------------
  {
    audioFile:        "audio/bioscan-058.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "indigo",
    hookStyle:        "spring",
    durationInFrames: 1718,  // 55.3s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🔒", title: "Tu chequeo de salud mas privado y mas rapido. Nadie tiene que saberlo.", subtitle: "Sin sala de espera. Sin recepcionista. Sin registro en sistema." },
      { type: "solution", emoji: "🛡️", stats: [
        { value: "100%", label: "privado", color: "#6366F1" },
        { value: "90s", label: "discreto", color: "#818CF8" },
        { value: "$5", label: "precio", color: "#C7D2FE" },
      ]},
      { type: "proof", title: "Solo tu y tus resultados.", items: [
        { emoji: "🔒", text: "Total privacidad", sub: "nadie mas accede" },
        { emoji: "📄", text: "PDF solo tuyo", sub: "descarga privada" },
        { emoji: "🤖", text: "IA en privado", sub: "consulta discreta" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "en privado · en 90 segundos", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 059 -- PAS -- Blue -- Slide --------------------------------------------
  {
    audioFile:        "audio/bioscan-059.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "blue",
    hookStyle:        "slide",
    durationInFrames: 2121,  // 68.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💉", title: "Sin agujas. Sin pinchazos. Sin sangre.", subtitle: "Millones evitan chequeos por miedo a las agujas. Ya no hay excusa." },
      { type: "problem", emoji: "😰", title: "BioScan IA no necesita nada de eso.", body: "Solo la camara de tu celular. Tecnologia de oximetria avanzada. 100% indoloro." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "indicadores", color: "#3B82F6" },
        { value: "0", label: "agujas", color: "#60A5FA" },
        { value: "$5", label: "precio", color: "#BFDBFE" },
      ]},
      { type: "proof", title: "Ciencia sin dolor.", items: [
        { emoji: "⚗️", text: "Beer-Lambert", sub: "luz infrarroja" },
        { emoji: "🇺🇸", text: "CDC NHANES", sub: "5,856 adultos" },
        { emoji: "❤️", text: "AHA PREVENT 2023", sub: "estandar cardiaco" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "sin dolor · sin agujas", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 060 -- AIDA -- Rose -- Zoom --------------------------------------------
  {
    audioFile:        "audio/bioscan-060.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "rose",
    hookStyle:        "zoom",
    durationInFrames: 1890,  // 61.0s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🧬", title: "Las personas que se chequean regularmente viven mas. Y ahora es facil ser una de ellas.", subtitle: "Prevencion constante. $5. 90 segundos." },
      { type: "solution", emoji: "📈", stats: [
        { value: "79", label: "indicadores", color: "#F43F5E" },
        { value: "12x", label: "al ano por $60", color: "#FB7185" },
        { value: "100%", label: "proactivo", color: "#FDA4AF" },
      ]},
      { type: "proof", title: "Monitoreo continuo de tu salud.", items: [
        { emoji: "📊", text: "Seguimiento mensual", sub: "ve tu progreso" },
        { emoji: "⚠️", text: "Alerta temprana", sub: "detecta desviaciones" },
        { emoji: "💯", text: "Score 0-100", sub: "evolucion en el tiempo" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "se proactivo con tu salud", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

];
