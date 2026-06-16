import { BioScanProAdProps } from "./BioScanProAd";

// Batch 02 -- Copies 011-020 -- Categoria: Miedo / Enfermedad Silenciosa (continuacion)
// 10 temas visuales unicos · 3 estilos de intro rotados · 4 fondos rotados
// Temas: cyan→purple→orange→green→red→gold→teal→indigo→blue→rose (misma rotacion, distinto hook style)

export const batch02: BioScanProAdProps[] = [

  // -- 011 -- FAB -- Cyan -- Slide -------------------------------------------
  {
    audioFile:        "audio/bioscan-011.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "cyan",
    hookStyle:        "slide",
    durationInFrames: 2124,  // 68.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "⏱️", title: "No tienes tiempo de ir al medico. Pero si tienes 90 segundos.", subtitle: "Eso es todo lo que BioScan IA necesita." },
      { type: "problem", emoji: "🏥", title: "Sin cita. Sin desplazamiento. Sin espera.", body: "La barrera del tiempo ya no existe para conocer tu salud." },
      { type: "list", title: "Lo que analiza en 90 segundos", items: [
        { emoji: "🫀", text: "Sistema cardiovascular", sub: "riesgo a 10 anos" },
        { emoji: "🩸", text: "Glucosa estimada", sub: "sin agujas" },
        { emoji: "💉", text: "Presion arterial", sub: "desde la camara" },
        { emoji: "🫁", text: "Saturacion O2", sub: "en tiempo real" },
      ]},
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "indicadores", color: "#00D4FF" },
        { value: "13", label: "sistemas", color: "#00FF88" },
        { value: "90s", label: "desde tu celular", color: "#FFD700" },
      ]},
      { type: "proof", title: "Ciencia real. No estimaciones.", items: [
        { emoji: "📊", text: "5,856", sub: "adultos CDC" },
        { emoji: "🏥", text: "AHA", sub: "PREVENT 2023" },
        { emoji: "📄", text: "PDF", sub: "reporte completo" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "pago unico · sin suscripcion", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 012 -- PAS -- Purple -- Zoom ------------------------------------------
  {
    audioFile:        "audio/bioscan-012.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "purple",
    hookStyle:        "zoom",
    durationInFrames: 1880,  // 60.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📅", title: "Llevas anos postergandolo. Y tu cuerpo lo sabe.", subtitle: "El chequeo que nunca llegas a hacer." },
      { type: "problem", emoji: "😔", title: "Mientras tanto el dano se acumula en silencio.", body: "La hipertension crece. La glucosa sube. Y tu sigues diciendote que estas bien." },
      { type: "compare", title: "El cambio empieza hoy", left: { label: "Sin BioScan", value: "No sabes" }, right: { label: "Con BioScan", value: "79 datos reales" }, subtitle: "90 segundos cambia todo." },
      { type: "solution", emoji: "🔬", stats: [
        { value: "79", label: "indicadores", color: "#A855F7" },
        { value: "$5", label: "pago unico", color: "#E879F9" },
        { value: "90s", label: "hoy mismo", color: "#F0ABFC" },
      ]},
      { type: "proof", title: "Sin excusas. Sin espera.", items: [
        { emoji: "🏠", text: "Desde casa", sub: "sin clinica" },
        { emoji: "🔒", text: "Privado", sub: "solo tu lo ves" },
        { emoji: "✅", text: "Garantia", sub: "devolucion total" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "sin suscripcion · resultado inmediato", guarantee: "Hoy es el dia" },
      { type: "url" },
    ],
  },

  // -- 013 -- Story -- Orange -- Spring --------------------------------------
  {
    audioFile:        "audio/bioscan-013.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "orange",
    hookStyle:        "spring",
    durationInFrames: 1938,  // 62.6s x30 + 60f
    scenes: [
      { type: "hook", emoji: "⚠️", title: "Le dijeron que estaba 'bien'. Tres meses despues tuvo un ACV.", subtitle: "Un chequeo rapido no basta." },
      { type: "problem", emoji: "🏥", title: "Los medicos no siempre tienen tiempo para todo.", body: "Un resultado 'normal' no es un analisis completo de 79 indicadores." },
      { type: "list", title: "BioScan IA analiza en profundidad", items: [
        { emoji: "🧠", text: "Riesgo cerebrovascular", sub: "marcadores especificos" },
        { emoji: "🫀", text: "Riesgo cardiovascular", sub: "modelo AHA PREVENT" },
        { emoji: "🩸", text: "Metabolismo", sub: "glucosa y mas" },
        { emoji: "📊", text: "79 parametros", sub: "reporte completo" },
      ]},
      { type: "solution", emoji: "🔬", stats: [
        { value: "79", label: "indicadores", color: "#F97316" },
        { value: "5,856", label: "adultos CDC", color: "#FB923C" },
        { value: "90s", label: "desde celular", color: "#FED7AA" },
      ]},
      { type: "proof", title: "La ciencia que los hospitales ya usan.", items: [
        { emoji: "🏛️", text: "Beer-Lambert", sub: "ley fisica medica" },
        { emoji: "🇺🇸", text: "CDC NHANES", sub: "base de datos real" },
        { emoji: "❤️", text: "AHA 2023", sub: "algoritmo cardíaco" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "sabe mas que 'bien'", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 014 -- BAB -- Green -- Slide ------------------------------------------
  {
    audioFile:        "audio/bioscan-014.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "green",
    hookStyle:        "slide",
    durationInFrames: 2019,  // 65.3s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🔁", title: "Tu cuerpo cambia todos los dias. ¿Cuando fue la ultima vez que lo escuchaste?", subtitle: "El estres, el sueno y la dieta te afectan en silencio." },
      { type: "problem", emoji: "👁️", title: "La mayoria de esas senales son invisibles al ojo humano.", body: "Sin tecnologia, no puedes verlas. Con BioScan IA, si." },
      { type: "compare", title: "Antes vs Despues de BioScan IA", left: { label: "Antes", value: "Esperar a que duela" }, right: { label: "Despues", value: "Informacion real hoy" }, subtitle: "El puente: 90 segundos." },
      { type: "solution", emoji: "📱", stats: [
        { value: "24/7", label: "disponible", color: "#22C55E" },
        { value: "79", label: "parametros", color: "#4ADE80" },
        { value: "$5", label: "hoy mismo", color: "#BBF7D0" },
      ]},
      { type: "proof", title: "Un medico en tu bolsillo.", items: [
        { emoji: "🏠", text: "Desde casa", sub: "sin citas" },
        { emoji: "📄", text: "PDF listo", sub: "para tu medico" },
        { emoji: "🤖", text: "Asistente IA", sub: "te explica todo" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "disponible las 24 horas", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 015 -- AIDA -- Red -- Zoom --------------------------------------------
  {
    audioFile:        "audio/bioscan-015.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "red",
    hookStyle:        "zoom",
    durationInFrames: 2109,  // 68.3s x30 + 60f
    scenes: [
      { type: "hook", emoji: "👥", title: "Mas de 300 personas ya descubrieron algo sobre su salud que no sabian.", subtitle: "Algunos buenas noticias. Otros alertas que llegaron a tiempo." },
      { type: "problem", emoji: "🎯", title: "¿Tu que vas a descubrir?", body: "No saberlo no significa que no este pasando." },
      { type: "list", title: "Lo que ya encontraron", items: [
        { emoji: "✅", text: "Buenas noticias", sub: "score alto, tranquilidad" },
        { emoji: "⚠️", text: "Alertas tempranas", sub: "a tiempo de actuar" },
        { emoji: "📊", text: "Datos reales", sub: "no estimaciones" },
        { emoji: "🤖", text: "Explicaciones IA", sub: "lenguaje claro" },
      ]},
      { type: "solution", emoji: "🔬", stats: [
        { value: "5,856", label: "adultos CDC", color: "#EF4444" },
        { value: "79", label: "indicadores", color: "#F87171" },
        { value: "AHA", label: "PREVENT 2023", color: "#FCA5A5" },
      ]},
      { type: "proof", title: "Ciencia validada con personas reales.", items: [
        { emoji: "🇺🇸", text: "CDC NHANES", sub: "estudio real" },
        { emoji: "❤️", text: "American Heart", sub: "Association 2023" },
        { emoji: "📄", text: "Reporte PDF", sub: "para tu medico" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "tu turno de descubrir", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 016 -- HSO -- Gold -- Spring ------------------------------------------
  {
    audioFile:        "audio/bioscan-016.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "gold",
    hookStyle:        "spring",
    durationInFrames: 1792,  // 57.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📱", title: "Revisas tu celular 150 veces al dia. Y nunca lo usas para chequearte la salud.", subtitle: "Esa camara puede hacer mucho mas." },
      { type: "problem", emoji: "🤳", title: "La misma camara que usas para selfies puede ser un analizador medico.", body: "Tecnologia de fotopletismografia. 79 parametros. 90 segundos." },
      { type: "solution", emoji: "🔬", stats: [
        { value: "79", label: "parametros", color: "#F59E0B" },
        { value: "90s", label: "desde tu camara", color: "#FBBF24" },
        { value: "0/100", label: "score de salud", color: "#FCD34D" },
      ]},
      { type: "proof", title: "La tecnologia que ya tienes en el bolsillo.", items: [
        { emoji: "📊", text: "AHA PREVENT", sub: "riesgo cardio" },
        { emoji: "🩸", text: "Glucosa estimada", sub: "sin laboratorio" },
        { emoji: "💉", text: "Presion arterial", sub: "sin aparatos" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "usalo para lo que importa", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 017 -- Empatia -- Teal -- Slide ---------------------------------------
  {
    audioFile:        "audio/bioscan-017.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "teal",
    hookStyle:        "slide",
    durationInFrames: 1819,  // 58.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💙", title: "Tienes miedo de ir al medico porque te da miedo saber.", subtitle: "Lo entendemos. Esa ansiedad es real." },
      { type: "problem", emoji: "😰", title: "Pero no saber es peor.", body: "Mientras no sabes, el tiempo pasa. Y el dano se acumula silenciosamente." },
      { type: "list", title: "Con BioScan IA es diferente", items: [
        { emoji: "🏠", text: "Desde tu casa", sub: "total privacidad" },
        { emoji: "🤝", text: "Sin juzgarte", sub: "sin formularios" },
        { emoji: "🤖", text: "IA te explica", sub: "lenguaje humano" },
        { emoji: "⏰", text: "A tiempo", sub: "antes de urgencias" },
      ]},
      { type: "solution", emoji: "🔬", stats: [
        { value: "79", label: "indicadores", color: "#14B8A6" },
        { value: "90s", label: "en privado", color: "#2DD4BF" },
        { value: "$5", label: "accesible", color: "#99F6E4" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "la informacion es poder", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 018 -- PAS -- Indigo -- Zoom ------------------------------------------
  {
    audioFile:        "audio/bioscan-018.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "indigo",
    hookStyle:        "zoom",
    durationInFrames: 1960,  // 63.4s x30 + 60f
    scenes: [
      { type: "hook", emoji: "❤️", title: "¿Sabes cual es tu riesgo cardiovascular a 10 anos?", subtitle: "El 54% de adultos latinos tiene al menos un factor de riesgo sin saberlo." },
      { type: "problem", emoji: "📉", title: "El riesgo cardiovascular no es solo para personas mayores.", body: "Adultos de 35 anos ya pueden tener indicadores criticos sin ningun sintoma." },
      { type: "solution", emoji: "🔬", stats: [
        { value: "AHA", label: "PREVENT 2023", color: "#6366F1" },
        { value: "79", label: "parametros", color: "#818CF8" },
        { value: "90s", label: "sin sangre", color: "#C7D2FE" },
      ]},
      { type: "proof", title: "El mismo estandar que usan los cardiologos.", items: [
        { emoji: "🏥", text: "PREVENT 2023", sub: "modelo AHA" },
        { emoji: "🇺🇸", text: "CDC NHANES", sub: "5,856 adultos" },
        { emoji: "📱", text: "Tu celular", sub: "camara + IA" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "calcula tu riesgo hoy", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 019 -- Story -- Blue -- Spring ----------------------------------------
  {
    audioFile:        "audio/bioscan-019.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "blue",
    hookStyle:        "spring",
    durationInFrames: 1944,  // 62.8s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🔄", title: "A los 30 te sentias invencible. A los 45 ya no tanto.", subtitle: "El cuerpo cambia. Los riesgos aumentan. El acceso no tiene que ser caro." },
      { type: "problem", emoji: "💸", title: "Los chequeos completos cuestan entre $200 y $500.", body: "Y la mayoria de adultos llegan a los 40 sin haberse hecho un analisis profundo." },
      { type: "list", title: "BioScan IA fue disenado para ti", items: [
        { emoji: "👨", text: "Adultos 35-60", sub: "riesgo creciente" },
        { emoji: "💰", text: "Solo $5 USD", sub: "acceso democratico" },
        { emoji: "📱", text: "Desde tu celular", sub: "en cualquier momento" },
        { emoji: "🧬", text: "Ciencia real", sub: "CDC + AHA" },
      ]},
      { type: "solution", emoji: "🔬", stats: [
        { value: "79", label: "indicadores", color: "#3B82F6" },
        { value: "$5", label: "vs $200-500", color: "#60A5FA" },
        { value: "90s", label: "resultado hoy", color: "#BFDBFE" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "la ciencia ahora en tu bolsillo", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 020 -- Open Loop -- Rose -- Slide -------------------------------------
  {
    audioFile:        "audio/bioscan-020.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "rose",
    hookStyle:        "slide",
    durationInFrames: 1812,  // 58.4s x30 + 60f
    scenes: [
      { type: "hook", emoji: "⌛", title: "No sabemos cuanto tiempo tienes. Pero si puedes saber como estas hoy.", subtitle: "BioScan IA te da el mejor mapa posible de tu salud actual." },
      { type: "problem", emoji: "🗺️", title: "Sin informacion, navegas a ciegas.", body: "Con 79 indicadores reales, tienes un mapa claro de tu cuerpo." },
      { type: "solution", emoji: "📊", stats: [
        { value: "79", label: "parametros", color: "#F43F5E" },
        { value: "0/100", label: "score salud", color: "#FB7185" },
        { value: "PDF", label: "reporte listo", color: "#FDA4AF" },
      ]},
      { type: "proof", title: "Todo incluido en $5 USD.", items: [
        { emoji: "📄", text: "Reporte PDF", sub: "descargable" },
        { emoji: "🤖", text: "Asistente IA", sub: "explica todo" },
        { emoji: "✅", text: "Garantia", sub: "devolucion total" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "lo unico que pierdes al no hacerlo es informacion", guarantee: "Hoy. bioscanpro punto net." },
      { type: "url" },
    ],
  },

];
