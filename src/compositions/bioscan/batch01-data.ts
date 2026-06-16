import { BioScanProAdProps } from "./BioScanProAd";

// Batch 01 — Copies 001-010 — Categoria: Miedo / Enfermedad Silenciosa
// 10 temas visuales unicos · 3 estilos de intro · 4 fondos rotados

export const batch01: BioScanProAdProps[] = [

  // -- 001 -- PAS -- Cyan -- Spring ------------------------------------------
  {
    audioFile:        "audio/bioscan-001.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "cyan",
    hookStyle:        "spring",
    durationInFrames: 1911,  // 61.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "❓", title: "¿Que pasaria si hoy tienes algo grave y no lo sabes?", subtitle: "La mayoria no lo descubre a tiempo." },
      { type: "problem", emoji: "😰", title: "Las enfermedades mortales no duelen al principio.", body: "El infarto, la diabetes, la hipertension — todas empiezan en silencio." },
      { type: "list", title: "¿Que puede estar fallando ahora?", items: [
        { emoji: "🫀", text: "Sistema cardiovascular", sub: "sin sintomas" },
        { emoji: "🩸", text: "Glucosa y diabetes", sub: "invisible" },
        { emoji: "💉", text: "Presion arterial", sub: "el asesino silencioso" },
        { emoji: "🫁", text: "Sistema pulmonar", sub: "sin senales" },
      ]},
      { type: "solution", emoji: "🔬", stats: [
        { value: "79", label: "indicadores de salud", color: "#00D4FF" },
        { value: "13", label: "sistemas corporales",  color: "#00FF88" },
        { value: "90s", label: "desde tu celular",   color: "#FFD700" },
      ]},
      { type: "proof", title: "Ciencia real. Base de datos CDC.", items: [
        { emoji: "📊", text: "5,856", sub: "adultos CDC" },
        { emoji: "🏥", text: "AHA", sub: "modelo PREVENT 2023" },
        { emoji: "✅", text: "76/100", sub: "score ejemplo" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "pago unico · sin suscripcion", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 002 -- AIDA -- Purple -- Slide -----------------------------------------
  {
    audioFile:        "audio/bioscan-002.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "purple",
    hookStyle:        "slide",
    durationInFrames: 2265,  // 73.5s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💔", title: "El 70% de los infartos ocurren sin sintomas previos.", subtitle: "Esto no es alarmismo. Es estadistica de la OMS." },
      { type: "problem", emoji: "🏥", title: "Tu cuerpo puede estar fallando y tu seguir sintiendote bien.", body: "Sin analisis, no hay forma de saberlo." },
      { type: "compare", title: "Que detecta BioScan IA", left: { label: "Lo que ves", value: "Nada" }, right: { label: "Lo que mide", value: "79 parametros" }, subtitle: "Lo invisible, visible en 90 segundos." },
      { type: "solution", emoji: "📱", stats: [
        { value: "79", label: "indicadores medidos", color: "#A855F7" },
        { value: "OMS", label: "estadisticas validadas", color: "#34D399" },
        { value: "$5", label: "por analisis completo", color: "#FCD34D" },
      ]},
      { type: "proof", title: "BioScan IA. Ciencia, no marketing.", items: [
        { emoji: "🧬", text: "CDC", sub: "base de datos" },
        { emoji: "🫀", text: "AHA", sub: "modelo PREVENT 2023" },
        { emoji: "📱", text: "90s", sub: "tu celular" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "analisis completo · hoy mismo", guarantee: "Devolucion garantizada" },
      { type: "url" },
    ],
  },

  // -- 003 -- PAS -- Orange -- Zoom -------------------------------------------
  {
    audioFile:        "audio/bioscan-003.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "orange",
    hookStyle:        "zoom",
    durationInFrames: 2175,  // 70.5s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🤔", title: "Si algo te pasara manana, ¿podrias decir que hiciste algo para prevenirlo?", subtitle: "El momento de actuar es hoy." },
      { type: "problem", emoji: "⏰", title: "No tienes tiempo para la clinica.", body: "Pero si tienes 90 segundos. Y eso es todo lo que BioScan IA necesita." },
      { type: "list", title: "Sin excusas. Sin barreras.", items: [
        { emoji: "🏥", text: "Sin clinica", sub: "desde tu casa" },
        { emoji: "💉", text: "Sin agujas", sub: "solo tu camara" },
        { emoji: "📅", text: "Sin cita previa", sub: "disponible 24/7" },
        { emoji: "💰", text: "Sin gastar $200", sub: "solo $5 USD" },
      ]},
      { type: "solution", emoji: "🔬", stats: [
        { value: "79", label: "parametros analizados", color: "#FB923C" },
        { value: "90s", label: "analisis completo", color: "#4ADE80" },
        { value: "CDC", label: "tecnologia validada", color: "#FDE047" },
      ]},
      { type: "proof", title: "Oximetria medica. Algoritmos CDC.", items: [
        { emoji: "💡", text: "Beer-Lambert", sub: "fisica optica" },
        { emoji: "📊", text: "NHANES", sub: "5,856 adultos" },
        { emoji: "📄", text: "PDF", sub: "reporte completo" },
      ]},
      { type: "cta", plan: "Acceso Inmediato", price: "$5 USD", priceNote: "sin excusas · ahora mismo", guarantee: "Garantia de devolucion total" },
      { type: "url" },
    ],
  },

  // -- 004 -- Hook-Story-Offer -- Green -- Spring -----------------------------
  {
    audioFile:        "audio/bioscan-004.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "green",
    hookStyle:        "spring",
    durationInFrames: 2217,  // 71.9s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🚨", title: "13 sistemas de tu cuerpo pueden estar fallando ahora mismo.", subtitle: "Y la mayoria no lo sabe." },
      { type: "list", title: "Los sistemas que BioScan IA analiza:", items: [
        { emoji: "🫀", text: "Cardiovascular + Pulmonar" },
        { emoji: "🧪", text: "Renal + Hepatico" },
        { emoji: "⚡", text: "Hormonal + Metabolico" },
        { emoji: "🦴", text: "Oseo + Inmune" },
      ]},
      { type: "solution", emoji: "📱", stats: [
        { value: "13", label: "sistemas corporales", color: "#34D399" },
        { value: "79", label: "indicadores totales", color: "#6EE7B7" },
        { value: "2 min", label: "analisis completo", color: "#FCD34D" },
      ]},
      { type: "proof", title: "Reporte completo. Asistente IA.", items: [
        { emoji: "🤖", text: "IA Personal", sub: "explica cada resultado" },
        { emoji: "📄", text: "Reporte PDF", sub: "descargable" },
        { emoji: "📊", text: "Score 0-100", sub: "tu numero de salud" },
      ]},
      { type: "cta", plan: "Plan Completo", price: "$5 USD", priceNote: "13 sistemas · sin suscripcion", guarantee: "Devolucion total garantizada" },
      { type: "url" },
    ],
  },

  // -- 005 -- FAB -- Red -- Slide ---------------------------------------------
  {
    audioFile:        "audio/bioscan-005.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "red",
    hookStyle:        "slide",
    durationInFrames: 2001,  // 64.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💔", title: "Mi papa murio de algo que hubiera podido detectarse a tiempo.", subtitle: "No dejes que eso le pase a alguien mas." },
      { type: "problem", emoji: "😢", title: "Un chequeo a tiempo lo cambia todo.", body: "Si hubiera tenido acceso a esta tecnologia, hoy estaria aqui." },
      { type: "list", title: "Lo que BioScan IA detecta:", items: [
        { emoji: "🫀", text: "Riesgo cardiovascular", sub: "modelo AHA 2023" },
        { emoji: "💧", text: "SpO2 y oxigenacion", sub: "en tiempo real" },
        { emoji: "🩸", text: "Glucosa estimada", sub: "sin pinchazos" },
        { emoji: "💊", text: "Presion arterial", sub: "estimacion validada" },
      ]},
      { type: "solution", emoji: "🔬", stats: [
        { value: "79", label: "indicadores analizados", color: "#F87171" },
        { value: "90s", label: "con tu celular", color: "#4ADE80" },
        { value: "$5", label: "precio unico", color: "#FCD34D" },
      ]},
      { type: "proof", title: "Tecnologia medica real. Precio real.", items: [
        { emoji: "📊", text: "CDC", sub: "base cientifica" },
        { emoji: "🫀", text: "AHA", sub: "riesgo cardiaco" },
        { emoji: "📱", text: "Celular", sub: "siempre disponible" },
      ]},
      { type: "cta", plan: "Un analisis puede salvarte", price: "$5 USD", priceNote: "no esperes · actua hoy", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 006 -- Storytelling -- Gold -- Zoom ------------------------------------
  {
    audioFile:        "audio/bioscan-006.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "gold",
    hookStyle:        "zoom",
    durationInFrames: 2187,  // 70.9s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🏃", title: "Tenia 42 anos. Corria 5km por semana. Y un dia colapso.", subtitle: "La salud interna no se ve desde afuera." },
      { type: "problem", emoji: "⚠️", title: "Lo que el ojo no puede ver, BioScan IA lo detecta.", body: "Presion arterial, saturacion de oxigeno, frecuencia cardiaca y 76 parametros mas." },
      { type: "compare", title: "Lo visible vs lo invisible", left: { label: "Apariencia fisica", value: "Sano" }, right: { label: "Parametros internos", value: "79 datos" }, subtitle: "La salud real esta adentro." },
      { type: "solution", emoji: "🔬", stats: [
        { value: "76+", label: "parametros internos", color: "#FACC15" },
        { value: "AHA", label: "modelo cardiologico", color: "#4ADE80" },
        { value: "90s", label: "todo en 90 segundos", color: "#FDE047" },
      ]},
      { type: "proof", title: "Conocete por dentro.", items: [
        { emoji: "💓", text: "Cardiaco", sub: "SpO2 + frecuencia" },
        { emoji: "🧪", text: "Metabolico", sub: "glucosa estimada" },
        { emoji: "🫁", text: "Pulmonar", sub: "funcion respiratoria" },
      ]},
      { type: "cta", plan: "Analisis Profundo", price: "$5 USD", priceNote: "lo que el ojo no ve · ahora visible", guarantee: "Devolucion total garantizada" },
      { type: "url" },
    ],
  },

  // -- 007 -- BAB -- Teal -- Spring -------------------------------------------
  {
    audioFile:        "audio/bioscan-007.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "teal",
    hookStyle:        "spring",
    durationInFrames: 2298,  // 74.6s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🕐", title: "¿Estas ignorando senales de tu cuerpo porque no tienes tiempo?", subtitle: "Antes vs. Despues de BioScan IA." },
      { type: "compare", title: "El antes y el despues", left: { label: "Antes", value: "Ignorar" }, right: { label: "Con BioScan IA", value: "90 segundos" }, subtitle: "De la ignorancia a los datos reales." },
      { type: "list", title: "Lo que obtienes en 90 segundos:", items: [
        { emoji: "📊", text: "79 indicadores", sub: "analisis completo" },
        { emoji: "📄", text: "Reporte PDF", sub: "descargable" },
        { emoji: "🤖", text: "Asistente IA", sub: "explicaciones personalizadas" },
        { emoji: "🎯", text: "Score 0-100", sub: "tu numero de salud" },
      ]},
      { type: "solution", emoji: "✅", stats: [
        { value: "Sin", label: "clinica · sin agujas", color: "#2DD4BF" },
        { value: "Sin", label: "cita · sin espera",   color: "#86EFAC" },
        { value: "$5", label: "analisis completo",    color: "#FCD34D" },
      ]},
      { type: "proof", title: "El puente es BioScan IA.", items: [
        { emoji: "⏱", text: "90s", sub: "tiempo real" },
        { emoji: "📱", text: "Celular", sub: "sin gadgets" },
        { emoji: "🔬", text: "CDC", sub: "ciencia real" },
      ]},
      { type: "cta", plan: "Da ese paso hoy", price: "$5 USD", priceNote: "90 segundos · cambio permanente", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 008 -- AIDA -- Indigo -- Slide -----------------------------------------
  {
    audioFile:        "audio/bioscan-008.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "indigo",
    hookStyle:        "slide",
    durationInFrames: 2097,  // 67.9s x30 + 60f
    scenes: [
      { type: "hook", emoji: "👨‍👩‍👧‍👦", title: "¿Que diria tu familia si supiera que no te has chequeado en anos?", subtitle: "Tu chequeo mas privado. En 90 segundos." },
      { type: "problem", emoji: "🔒", title: "Nadie tiene que saberlo. Pero tu si necesitas saberlo.", body: "BioScan IA es completamente privado. Sin sala de espera. Sin recepcionistas." },
      { type: "list", title: "Solo tu y tus resultados:", items: [
        { emoji: "🏠", text: "Desde tu casa", sub: "total privacidad" },
        { emoji: "🌙", text: "A cualquier hora", sub: "sin horarios" },
        { emoji: "📱", text: "Solo tu celular", sub: "sin gadgets extra" },
        { emoji: "🔐", text: "Datos protegidos", sub: "solo tuyos" },
      ]},
      { type: "solution", emoji: "🤖", stats: [
        { value: "24/7", label: "disponible siempre", color: "#818CF8" },
        { value: "79",   label: "parametros privados", color: "#34D399" },
        { value: "90s",  label: "en total privacidad", color: "#FCD34D" },
      ]},
      { type: "proof", title: "Si algo falla, sabras a tiempo.", items: [
        { emoji: "🛡", text: "Stripe", sub: "pago seguro" },
        { emoji: "🔒", text: "Privado", sub: "datos protegidos" },
        { emoji: "✅", text: "Garantia", sub: "devolucion total" },
      ]},
      { type: "cta", plan: "Tu chequeo privado", price: "$5 USD", priceNote: "sin que nadie lo sepa", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 009 -- PAS -- Blue -- Zoom ---------------------------------------------
  {
    audioFile:        "audio/bioscan-009.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "blue",
    hookStyle:        "zoom",
    durationInFrames: 1983,  // 64.1s x30 + 60f
    scenes: [
      { type: "hook", emoji: "💊", title: "La hipertension afecta a 1 de cada 3 adultos. Y la mitad no lo sabe.", subtitle: "Tu puedes ser ese 1 en 3. Sin saberlo." },
      { type: "problem", emoji: "🩺", title: "La hipertension no duele. No avisa. Solo mata.", body: "Es el asesino silencioso mas prevalente del mundo." },
      { type: "list", title: "BioScan IA estima:", items: [
        { emoji: "❤️", text: "Presion arterial", sub: "estimacion validada" },
        { emoji: "🫀", text: "Riesgo cardiovascular", sub: "modelo AHA 2023" },
        { emoji: "📊", text: "Frecuencia cardiaca", sub: "en reposo" },
        { emoji: "💧", text: "SpO2", sub: "saturacion de oxigeno" },
      ]},
      { type: "solution", emoji: "🔬", stats: [
        { value: "77+", label: "parametros adicionales", color: "#60A5FA" },
        { value: "AHA", label: "modelo PREVENT 2023", color: "#34D399" },
        { value: "90s", label: "desde tu telefono",  color: "#FCD34D" },
      ]},
      { type: "proof", title: "Chequéate. No esperes sintomas.", items: [
        { emoji: "📊", text: "CDC", sub: "5,856 adultos" },
        { emoji: "🫀", text: "AHA", sub: "riesgo cardiaco" },
        { emoji: "📱", text: "Celular", sub: "tecnologia medica" },
      ]},
      { type: "cta", plan: "Deteccion Temprana", price: "$5 USD", priceNote: "chequéate hoy · no esperes", guarantee: "Garantia de devolucion total" },
      { type: "url" },
    ],
  },

  // -- 010 -- Hook-Story-Offer -- Rose -- Spring ------------------------------
  {
    audioFile:        "audio/bioscan-010.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "rose",
    hookStyle:        "spring",
    durationInFrames: 2037,  // 65.9s x30 + 60f
    scenes: [
      { type: "hook", emoji: "❤️", title: "Cada 33 segundos muere alguien de una enfermedad cardiaca en America.", subtitle: "Eso no tiene que ser tu." },
      { type: "problem", emoji: "🏥", title: "La prevencion comienza con conocer tu estado.", body: "No puedes prevenir lo que no sabes que existe. BioScan IA te da esa informacion." },
      { type: "list", title: "Que incluye el analisis:", items: [
        { emoji: "🫀", text: "Riesgo cardiaco 10 anos", sub: "modelo AHA PREVENT" },
        { emoji: "📊", text: "79 indicadores totales", sub: "13 sistemas" },
        { emoji: "🤖", text: "Asistente IA", sub: "explicaciones personalizadas" },
        { emoji: "📄", text: "Reporte PDF", sub: "comparte con tu medico" },
      ]},
      { type: "solution", emoji: "💪", stats: [
        { value: "79", label: "razones para actuar", color: "#FB7185" },
        { value: "AHA", label: "modelo cardiologico", color: "#4ADE80" },
        { value: "$5", label: "precio unico hoy",   color: "#FCD34D" },
      ]},
      { type: "proof", title: "Previene hoy. No manana.", items: [
        { emoji: "🏃", text: "Preventivo", sub: "antes de los sintomas" },
        { emoji: "📱", text: "Desde casa", sub: "90 segundos" },
        { emoji: "💲", text: "$5 USD", sub: "el costo mas bajo" },
      ]},
      { type: "cta", plan: "Prevencion Activa", price: "$5 USD", priceNote: "cada 33 segundos importa · actua ya", guarantee: "Devolucion total garantizada" },
      { type: "url" },
    ],
  },

];
