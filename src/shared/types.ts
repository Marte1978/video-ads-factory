// ── Shared types for Video Ads Factory ───────────────────────────────────

export interface AdColors {
  bg: string
  bg2: string
  primary: string
  accent: string
  text: string
  textMuted: string
  highlight: string
  cta: string
  ctaText: string
}

export type BackgroundType = 'gradient' | 'image' | 'color'

export interface BackgroundConfig {
  type: BackgroundType
  // For 'color'
  color?: string
  // For 'image' — path relative to public/
  imageFile?: string
  // Overlay opacity on top of image (0-1), default 0.45
  overlayOpacity?: number
  // For 'gradient' — array of CSS hex colors [top, bottom, base]
  gradientColors?: string[]
}

// ── Health / Supplement Template ─────────────────────────────────────────
export interface HealthAdProps {
  brandName: string
  productName: string
  tagline: string
  hookQuestion: string
  hookEmoji: string
  symptoms: { icon: string; text: string }[]
  ingredients: string[]
  badgeText: string
  priceOriginal?: string
  priceFinal: string
  pricePerDay: string
  offerText: string
  unitsLeft: number
  socialProof: string
  ctaText: string
  ctaSubtext: string
  audioFile: string
  colors: AdColors
  background: BackgroundConfig
  productImageFile?: string
}

// ── Restaurant Template ───────────────────────────────────────────────────
export interface RestaurantAdProps {
  brandName: string
  tagline: string
  hookText: string
  features: { icon: string; text: string }[]
  location: string
  city: string
  phone: string
  ctaText: string
  audioFile: string
  colors: AdColors
  background: BackgroundConfig
  logoFile?: string
}

// ── Real Estate Template ──────────────────────────────────────────────────
export interface RealEstateAdProps {
  agentName: string
  company: string
  tagline: string
  hookText: string
  properties: { type: string; location: string; price: string; icon: string }[]
  phone: string
  website?: string
  ctaText: string
  audioFile: string
  colors: AdColors
  background: BackgroundConfig
}
