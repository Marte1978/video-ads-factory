export interface BioScanTheme {
  bg: string;
  bg2: string;
  accent: string;
  accentBr: string;
  green: string;
  red: string;
  gold: string;
  muted: string;
  card: string;
  border: string;
  ctaGrad: [string, string];
}

export type HookStyle = "spring" | "slide" | "zoom";

export const THEMES: Record<string, BioScanTheme> = {
  cyan: {
    bg: "#030B14", bg2: "#0A1628",
    accent: "#00B4D8", accentBr: "#00D4FF",
    green: "#00FF88", red: "#FF4444", gold: "#FFD700",
    muted: "#90E0EF",
    card: "rgba(0,180,216,0.08)", border: "rgba(0,180,216,0.25)",
    ctaGrad: ["#005F7A", "#00B4D8"],
  },
  purple: {
    bg: "#0D0A1E", bg2: "#160E2E",
    accent: "#9333EA", accentBr: "#A855F7",
    green: "#34D399", red: "#F87171", gold: "#FCD34D",
    muted: "#C4B5FD",
    card: "rgba(147,51,234,0.10)", border: "rgba(168,85,247,0.30)",
    ctaGrad: ["#581C87", "#9333EA"],
  },
  orange: {
    bg: "#160B02", bg2: "#1F0E03",
    accent: "#F97316", accentBr: "#FB923C",
    green: "#4ADE80", red: "#EF4444", gold: "#FDE047",
    muted: "#FED7AA",
    card: "rgba(249,115,22,0.10)", border: "rgba(251,146,60,0.30)",
    ctaGrad: ["#9A3412", "#F97316"],
  },
  green: {
    bg: "#020F0A", bg2: "#041A10",
    accent: "#10B981", accentBr: "#34D399",
    green: "#6EE7B7", red: "#F87171", gold: "#FCD34D",
    muted: "#6EE7B7",
    card: "rgba(16,185,129,0.10)", border: "rgba(52,211,153,0.30)",
    ctaGrad: ["#065F46", "#10B981"],
  },
  red: {
    bg: "#150304", bg2: "#200506",
    accent: "#EF4444", accentBr: "#F87171",
    green: "#4ADE80", red: "#FF2222", gold: "#FCD34D",
    muted: "#FCA5A5",
    card: "rgba(239,68,68,0.10)", border: "rgba(248,113,113,0.30)",
    ctaGrad: ["#7F1D1D", "#EF4444"],
  },
  gold: {
    bg: "#120F01", bg2: "#1A1302",
    accent: "#EAB308", accentBr: "#FACC15",
    green: "#4ADE80", red: "#F87171", gold: "#FDE047",
    muted: "#FEF08A",
    card: "rgba(234,179,8,0.10)", border: "rgba(250,204,21,0.30)",
    ctaGrad: ["#713F12", "#EAB308"],
  },
  teal: {
    bg: "#011918", bg2: "#022825",
    accent: "#14B8A6", accentBr: "#2DD4BF",
    green: "#86EFAC", red: "#F87171", gold: "#FCD34D",
    muted: "#99F6E4",
    card: "rgba(20,184,166,0.10)", border: "rgba(45,212,191,0.30)",
    ctaGrad: ["#134E4A", "#14B8A6"],
  },
  indigo: {
    bg: "#06041A", bg2: "#0A0828",
    accent: "#6366F1", accentBr: "#818CF8",
    green: "#34D399", red: "#F87171", gold: "#FCD34D",
    muted: "#A5B4FC",
    card: "rgba(99,102,241,0.10)", border: "rgba(129,140,248,0.30)",
    ctaGrad: ["#312E81", "#6366F1"],
  },
  blue: {
    bg: "#010916", bg2: "#020E22",
    accent: "#3B82F6", accentBr: "#60A5FA",
    green: "#34D399", red: "#F87171", gold: "#FCD34D",
    muted: "#93C5FD",
    card: "rgba(59,130,246,0.10)", border: "rgba(96,165,250,0.30)",
    ctaGrad: ["#1E3A8A", "#3B82F6"],
  },
  rose: {
    bg: "#160311", bg2: "#220419",
    accent: "#F43F5E", accentBr: "#FB7185",
    green: "#4ADE80", red: "#FF1744", gold: "#FCD34D",
    muted: "#FDA4AF",
    card: "rgba(244,63,94,0.10)", border: "rgba(251,113,133,0.30)",
    ctaGrad: ["#881337", "#F43F5E"],
  },
};
