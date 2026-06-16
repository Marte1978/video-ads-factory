import { BioScanProAdProps } from "./BioScanProAd";

// Batch 17 -- Copies 161-170 -- Categoria: Autoridad / Credibilidad
// Rotacion: cyan→purple→orange→green→red→gold→teal→indigo→blue→rose
// HookStyle: slide→zoom→spring→slide→zoom→spring→slide→zoom→spring→slide
// (continua desde batch16 que termino en spring)

export const batch17: BioScanProAdProps[] = [

  // -- 161 -- CDC autoridad -- Cyan -- Slide ------------------------------------
  {
    audioFile:        "audio/bioscan-161.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "cyan",
    hookStyle:        "slide",
    durationInFrames: 1068,  // 33.6s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🏛️", title: "El CDC es la institucion de salud mas confiable del mundo. BioScan IA usa sus datos.", subtitle: "5,856 adultos reales. La muestra mas rigurosa de salud adulta existente." },
      { type: "proof", title: "La ciencia detras de BioScan IA.", items: [
        { emoji: "🇺🇸", text: "CDC NHANES calibrado", sub: "5,856 adultos de referencia" },
        { emoji: "❤️", text: "AHA PREVENT 2023", sub: "estandar de oro cardiovascular" },
        { emoji: "💡", text: "Ley de Beer-Lambert", sub: "fisica optica medica validada" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "ciencia del CDC · en tu celular", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 162 -- AHA PREVENT 2023 -- Purple -- Zoom --------------------------------
  {
    audioFile:        "audio/bioscan-162.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "purple",
    hookStyle:        "zoom",
    durationInFrames: 1080,  // 34.0s x30 + 60f
    scenes: [
      { type: "hook", emoji: "❤️", title: "La AHA publico el mejor modelo de riesgo cardiovascular. BioScan IA lo implemento.", subtitle: "AHA PREVENT 2023 — el estandar de oro. Publicado noviembre 2023. En tu celular por $5." },
      { type: "list", title: "Por que AHA PREVENT 2023 importa", items: [
        { emoji: "🔬", text: "Algoritmo mas avanzado disponible", sub: "publicado nov 2023" },
        { emoji: "📊", text: "Riesgo a 10 anos calculado", sub: "basado en tus datos reales" },
        { emoji: "🌎", text: "Estandar mundial cardiologia", sub: "implementado en BioScan IA" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "estandar AHA · tu riesgo real", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 163 -- Beer-Lambert Law -- Orange -- Spring ------------------------------
  {
    audioFile:        "audio/bioscan-163.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "orange",
    hookStyle:        "spring",
    durationInFrames: 1280,  // 40.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🔬", title: "La Ley de Beer-Lambert. La fisica que hace posible BioScan IA desde 1760.", subtitle: "La misma fisica que usan los oximetros hospitalarios. Ahora en tu celular." },
      { type: "proof", title: "Ciencia de 260 anos en tu bolsillo.", items: [
        { emoji: "💡", text: "Luz absorbida en la piel", sub: "detecta oxigeno en sangre" },
        { emoji: "🏥", text: "Misma fisica que UCI", sub: "pulsioximetros hospitalarios" },
        { emoji: "📱", text: "Camara del celular", sub: "aplica Beer-Lambert PPG" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "fisica real · salud real · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 164 -- Stripe security -- Green -- Slide ---------------------------------
  {
    audioFile:        "audio/bioscan-164.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "green",
    hookStyle:        "slide",
    durationInFrames: 1025,  // 32.2s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🔒", title: "Pago con Stripe. El sistema que usa Amazon, Google y Shopify.", subtitle: "BioScan IA no maneja tu informacion de pago. Solo Stripe — el mas seguro del mundo." },
      { type: "solution", emoji: "💳", stats: [
        { value: "SSL", label: "cifrado", color: "#22C55E" },
        { value: "Stripe", label: "pagos", color: "#4ADE80" },
        { value: "$5", label: "precio", color: "#BBF7D0" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "pago seguro garantizado · sin riesgo", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 165 -- Garantia devolucion -- Red -- Zoom --------------------------------
  {
    audioFile:        "audio/bioscan-165.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "red",
    hookStyle:        "zoom",
    durationInFrames: 975,  // 30.5s x30 + 60f
    scenes: [
      { type: "hook", emoji: "✅", title: "100% garantia de devolucion. Sin preguntas. Sin excusas.", subtitle: "Si no estas satisfecho, devolvemos tu $5. No tienes nada que perder." },
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "sin riesgo · garantia total · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 166 -- NHANES dataset -- Gold -- Spring ----------------------------------
  {
    audioFile:        "audio/bioscan-166.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "gold",
    hookStyle:        "spring",
    durationInFrames: 1219,  // 38.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📚", title: "NHANES: el estudio de salud mas grande y riguroso de la historia de EE.UU.", subtitle: "Desde 1960. Miles de adultos. Sangre, orina, examenes fisicos. BioScan IA usa esos datos." },
      { type: "list", title: "Por que NHANES es la fuente definitiva", items: [
        { emoji: "🗓️", text: "Desde 1960 — 60+ anos de datos", sub: "continuidad cientifica real" },
        { emoji: "🩸", text: "Muestras biologicas reales", sub: "sangre, orina, examenes" },
        { emoji: "📊", text: "Mas riguroso disponible", sub: "calibracion BioScan IA" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "decadas de ciencia · en tu celular", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 167 -- Hospital PPG tech -- Teal -- Slide --------------------------------
  {
    audioFile:        "audio/bioscan-167.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v3.mp4",
    themeName:        "teal",
    hookStyle:        "slide",
    durationInFrames: 1109,  // 35.0s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🏥", title: "Los oximetros de pulso salvaron millones de vidas. BioScan IA usa la misma tecnologia.", subtitle: "Fotopletismografia PPG — estandar UCI de hospitales en todo el mundo. Ahora en tu celular." },
      { type: "solution", emoji: "📷", stats: [
        { value: "PPG", label: "foto-pulso", color: "#14B8A6" },
        { value: "UCI", label: "tecnologia", color: "#2DD4BF" },
        { value: "$5", label: "precio", color: "#99F6E4" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "tech de hospital · en tu celular", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 168 -- No promesas solo datos -- Indigo -- Zoom --------------------------
  {
    audioFile:        "audio/bioscan-168.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v5.mp4",
    themeName:        "indigo",
    hookStyle:        "zoom",
    durationInFrames: 1070,  // 33.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "🎯", title: "BioScan IA no promete curas. Promete datos reales y confiables.", subtitle: "No somos una app de bienestar con afirmaciones vagas. Somos ciencia aplicada." },
      { type: "proof", title: "Lo que BioScan IA si promete.", items: [
        { emoji: "🔬", text: "Metodologia publicada y transparente", sub: "verificable por cualquiera" },
        { emoji: "🇺🇸", text: "Fuentes citables CDC + AHA", sub: "ciencia peer-reviewed" },
        { emoji: "📊", text: "79 parametros calculados", sub: "no estimaciones vagas" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "datos no promesas · ciencia real", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 169 -- 332 analisis track record -- Blue -- Spring -----------------------
  {
    audioFile:        "audio/bioscan-169.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v1.mp4",
    themeName:        "blue",
    hookStyle:        "spring",
    durationInFrames: 1132,  // 35.7s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📈", title: "332 analisis completados. 332 reportes reales. 332 personas informadas.", subtitle: "No es demo. No es promesa. Es un track record de datos reales." },
      { type: "solution", emoji: "📱", stats: [
        { value: "332", label: "analisis", color: "#3B82F6" },
        { value: "100%", label: "reportes PDF", color: "#60A5FA" },
        { value: "$5", label: "precio", color: "#BFDBFE" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "unete a los 332 · analisis real", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

  // -- 170 -- Metodologia publicada -- Rose -- Slide ----------------------------
  {
    audioFile:        "audio/bioscan-170.mp3",
    bgVideo:          "videos/bioscan/bioscan-bg-v2.mp4",
    themeName:        "rose",
    hookStyle:        "slide",
    durationInFrames: 1137,  // 35.9s x30 + 60f
    scenes: [
      { type: "hook", emoji: "📖", title: "Publicamos nuestra metodologia. Como calculamos cada uno de los 79 parametros.", subtitle: "La mayoria de apps de salud son cajas negras. BioScan IA es completamente transparente." },
      { type: "list", title: "Transparencia total en BioScan IA", items: [
        { emoji: "📄", text: "Fuentes cientificas citadas", sub: "CDC, AHA, Beer-Lambert" },
        { emoji: "🔢", text: "Formulas documentadas", sub: "no cajas negras" },
        { emoji: "⚠️", text: "Limitaciones honestas", sub: "integridad cientifica" },
      ]},
      { type: "cta", plan: "Plan Individual", price: "$5 USD", priceNote: "ciencia transparente · confias · $5", guarantee: "Garantia total de devolucion" },
      { type: "url" },
    ],
  },

];
