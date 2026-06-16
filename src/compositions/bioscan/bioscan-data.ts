import { BioScanProAdProps } from "./BioScanProAd";

const BG_SHARED = "videos/bioscan/bioscan-bg-shared.mp4" // fallback;

// ─── VIDEO 1 — Miedo / Prevención — Voz: es-CO-GonzaloNeural ─────────────────
export const bioscanV1: BioScanProAdProps = {
  audioFile: "audio/bioscan-v1-voice.mp3",
  bgVideo: "videos/bioscan/bioscan-bg-v1.mp4",
  scenes: [
    {
      type:     "hook",
      emoji:    "❓",
      title:    "¿Cuándo fue la última vez que te hiciste un chequeo?",
      subtitle: "No lo sabes. Y eso es el problema.",
    },
    {
      type:  "problem",
      emoji: "😰",
      title: "Muchos esperan sentirse mal para ir al médico.",
      body:  "Pero los problemas serios no duelen… hasta que ya es tarde.",
    },
    {
      type:  "list",
      title: "¿Qué puede estar fallando en silencio?",
      items: [
        { emoji: "🫀", text: "Sistema cardiovascular" },
        { emoji: "🫁", text: "Sistema pulmonar" },
        { emoji: "🧪", text: "Sistema renal y hepático" },
        { emoji: "⚡", text: "Sistema hormonal" },
      ],
    },
    {
      type:  "solution",
      emoji: "🔬",
      stats: [
        { value: "79", label: "indicadores de salud", color: "#00D4FF" },
        { value: "13", label: "sistemas corporales",  color: "#00FF88" },
        { value: "90s", label: "con tu celular",      color: "#FFD700" },
      ],
    },
    {
      type:  "proof",
      title: "Ciencia real. Base de datos CDC.",
      items: [
        { emoji: "📊", text: "332",   sub: "análisis hechos" },
        { emoji: "👥", text: "5,856", sub: "adultos en base CDC" },
        { emoji: "✅", text: "76/100", sub: "score ejemplo real" },
      ],
    },
    {
      type:      "cta",
      plan:      "Plan Individual",
      price:     "$5 USD",
      priceNote: "pago único · sin suscripción",
      guarantee: "Garantía total de devolución",
    },
    { type: "url" },
  ],
};

// ─── VIDEO 2 — Precio / Acceso — Voz: es-MX-JorgeNeural ─────────────────────
export const bioscanV2: BioScanProAdProps = {
  audioFile: "audio/bioscan-v2-voice.mp3",
  bgVideo: "videos/bioscan/bioscan-bg-v2.mp4",
  scenes: [
    {
      type:     "hook",
      emoji:    "💸",
      title:    "La clínica cobra $80-$300 por un chequeo básico.",
      subtitle: "BioScan IA lo hace por $5.",
    },
    {
      type:  "compare",
      title: "Lo que obtienes",
      left:  { label: "Clínica privada", value: "$80-300" },
      right: { label: "BioScan IA",      value: "$5 USD" },
      subtitle: "Mismo resultado. 60× más barato.",
    },
    {
      type:  "compare",
      title: "Indicadores analizados",
      left:  { label: "Clínica privada", value: "3-5" },
      right: { label: "BioScan IA",      value: "79" },
      subtitle: "Sin agujas. Sin turnos. Sin espera.",
    },
    {
      type:  "solution",
      emoji: "📱",
      stats: [
        { value: "79",  label: "indicadores", color: "#00D4FF" },
        { value: "13",  label: "sistemas",    color: "#00FF88" },
        { value: "$5",  label: "pago único",  color: "#FFD700" },
      ],
    },
    {
      type:  "proof",
      title: "Base científica real",
      items: [
        { emoji: "🏛️", text: "CDC",      sub: "NHANES database" },
        { emoji: "🫀", text: "AHA/ACC",  sub: "PREVENT 2023" },
        { emoji: "📈", text: "Beer-Lambert", sub: "física certificada" },
      ],
    },
    {
      type:      "cta",
      plan:      "Plan Individual",
      price:     "$5 USD",
      priceNote: "1 análisis completo · pago único",
      guarantee: "Devolución sin preguntas",
    },
    { type: "url" },
  ],
};

// ─── VIDEO 3 — Velocidad / Conveniencia — Voz: es-ES-AlvaroNeural ────────────
export const bioscanV3: BioScanProAdProps = {
  audioFile: "audio/bioscan-v3-voice.mp3",
  bgVideo: "videos/bioscan/bioscan-bg-v3.mp4",
  scenes: [
    {
      type:     "hook",
      emoji:    "⚡",
      title:    "90 segundos.",
      subtitle: "Todo lo que necesitas para conocer tu salud.",
    },
    {
      type:  "list",
      title: "El proceso más simple del mundo:",
      items: [
        { emoji: "1️⃣", text: "Paga $5 en línea" },
        { emoji: "2️⃣", text: "Pon el dedo en la cámara" },
        { emoji: "3️⃣", text: "60 segundos de captura" },
        { emoji: "4️⃣", text: "Reporte completo + IA" },
      ],
    },
    {
      type:  "solution",
      emoji: "🤖",
      stats: [
        { value: "79",    label: "parámetros analizados", color: "#00D4FF" },
        { value: "0-100", label: "score global de salud", color: "#00FF88" },
        { value: "24/7",  label: "disponible siempre",    color: "#FFD700" },
      ],
    },
    {
      type:  "list",
      title: "¿Qué recibes?",
      items: [
        { emoji: "📊", text: "Score global 0-100" },
        { emoji: "📄", text: "Reporte PDF descargable" },
        { emoji: "🤖", text: "Chat con IA personalizada" },
        { emoji: "🥗", text: "Plan de dieta y vida" },
      ],
    },
    {
      type:  "proof",
      title: "Sin instalación. Sin app. Solo el navegador.",
      items: [
        { emoji: "📱", text: "100%", sub: "desde el navegador" },
        { emoji: "🌍", text: "24/7", sub: "cualquier lugar" },
        { emoji: "🔒", text: "SSL",  sub: "datos privados" },
      ],
    },
    {
      type:      "cta",
      plan:      "Plan Individual",
      price:     "$5 USD",
      priceNote: "sin instalación · funciona desde el navegador",
      guarantee: "Garantía de devolución total",
    },
    { type: "url" },
  ],
};

// ─── VIDEO 5 — Tecnología / Credibilidad — Voz: es-CL-LorenzoNeural ──────────
export const bioscanV5: BioScanProAdProps = {
  audioFile: "audio/bioscan-v5-voice.mp3",
  bgVideo: "videos/bioscan/bioscan-bg-v5.mp4",
  scenes: [
    {
      type:     "hook",
      emoji:    "🏛️",
      title:    "La misma física que usan los oxímetros médicos.",
      subtitle: "Ahora en la cámara de tu celular.",
    },
    {
      type:  "list",
      title: "Metodología científica real:",
      items: [
        { emoji: "🔬", text: "Ley de Beer-Lambert",     sub: "SpO2 certificada" },
        { emoji: "📊", text: "NHANES / CDC",             sub: "5,856 adultos reales" },
        { emoji: "🫀", text: "PREVENT 2023 AHA/ACC",    sub: "riesgo cardiovascular" },
        { emoji: "🧬", text: "20 params calculados",    sub: "59 estimados por IA" },
      ],
    },
    {
      type:  "compare",
      title: "Indicadores vs clínica privada",
      left:  { label: "Clínica privada", value: "20-40" },
      right: { label: "BioScan IA",      value: "79" },
      subtitle: "Al precio que todos pueden pagar.",
    },
    {
      type:  "solution",
      emoji: "📡",
      stats: [
        { value: "79",    label: "parámetros",        color: "#00D4FF" },
        { value: "13",    label: "sistemas corporales", color: "#00FF88" },
        { value: "332+",  label: "análisis completados", color: "#FFD700" },
      ],
    },
    {
      type:  "proof",
      title: "Más de 330 personas ya lo usaron",
      items: [
        { emoji: "✅", text: "332",    sub: "análisis hechos" },
        { emoji: "💰", text: "100%",   sub: "garantía devolución" },
        { emoji: "🔒", text: "Stripe", sub: "pago certificado" },
      ],
    },
    {
      type:      "cta",
      plan:      "Plan Individual",
      price:     "$5 USD",
      priceNote: "ciencia real · precio accesible",
      guarantee: "Garantía de devolución total",
    },
    { type: "url" },
  ],
};
