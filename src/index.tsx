import { Composition, registerRoot } from 'remotion'
import React from 'react'
import { BlueberryAd } from './compositions/blueberry/BlueberryAd'
import { BlueberryCandyAd } from './compositions/candy/BlueberryCandyAd'
import { HealthTemplate } from './compositions/templates/HealthTemplate'
import { RestaurantTemplate } from './compositions/templates/RestaurantTemplate'
import { RealEstateTemplate } from './compositions/templates/RealEstateTemplate'
import { HealthAdProps, RestaurantAdProps, RealEstateAdProps } from './shared/types'

// ── Default props reutilizables ───────────────────────────────────────────────

const defaultHealthProps: HealthAdProps = {
  brandName:     'VitaMax',
  productName:   'VitaMax Articular',
  tagline:       'Movilidad sin límites',
  hookQuestion:  '¿Sientes dolor en tus articulaciones cada vez que te mueves?',
  hookEmoji:     '🦵',
  symptoms: [
    { icon: '😣', text: 'Rodillas que duelen' },
    { icon: '🥱', text: 'Rigidez matutina' },
    { icon: '🚶', text: 'Movimiento limitado' },
  ],
  ingredients:   ['🦴 Colágeno', '🌿 Glucosamina', '☀️ Vitamina D', '🫐 Cúrcuma'],
  badgeText:     'Fórmula Clínica Certificada',
  priceFinal:    'RD$2,500',
  pricePerDay:   'Solo RD$41 al día',
  offerText:     'Llévate 3 frascos por el precio de 2',
  unitsLeft:     8,
  socialProof:   'Más de 1,200 personas recuperaron su movilidad',
  ctaText:       '📲 QUIERO MIS 3 FRASCOS',
  ctaSubtext:    'Envío Gratis — WhatsApp',
  audioFile:     'audio/vitamax-voice.mp3',
  colors: {
    bg:        '#041A0A',
    bg2:       '#062A0F',
    primary:   '#16A34A',
    accent:    '#4ADE80',
    text:      '#FFFFFF',
    textMuted: '#86EFAC',
    highlight: '#FBBF24',
    cta:       '#16A34A',
    ctaText:   '#FFFFFF',
  },
  background: {
    type:           'gradient',
    gradientColors: ['#16A34A', '#4ADE80', '#041A0A'],
  },
}

const defaultRestaurantProps: RestaurantAdProps = {
  brandName: 'Blueberry',
  tagline:   'Cocina artesanal con alma',
  hookText:  '¿Buscas el lugar perfecto para una experiencia gastronómica única?',
  features: [
    { icon: '🍳', text: 'Desayunos artesanales' },
    { icon: '🥗', text: 'Almuerzos frescos' },
    { icon: '☕', text: 'Meriendas & cafés' },
    { icon: '🌍', text: 'Ingredientes del mundo' },
  ],
  location:  'Ensanche Naco',
  city:      'Santo Domingo',
  phone:     '809-396-6762',
  ctaText:   '📞 Reserva ahora',
  audioFile: 'audio/blueberry-voice.mp3',
  colors: {
    bg:        '#0D0D0D',
    bg2:       '#1A1A1A',
    primary:   '#6B48FF',
    accent:    '#A78BFA',
    text:      '#FFFFFF',
    textMuted: '#A1A1AA',
    highlight: '#F59E0B',
    cta:       '#6B48FF',
    ctaText:   '#FFFFFF',
  },
  background: {
    type:           'gradient',
    gradientColors: ['#6B48FF', '#A78BFA', '#0D0D0D'],
  },
}

const defaultRealEstateProps: RealEstateAdProps = {
  agentName: 'Rosire Inmobiliaria',
  company:   'Ciudad del Lago',
  tagline:   'Tu propiedad ideal te espera',
  hookText:  '¿Buscas la propiedad perfecta en República Dominicana?',
  properties: [
    { type: 'Apartamento', location: 'Punta Cana', price: 'US$95,000', icon: '🏖️' },
    { type: 'Casa',        location: 'Santiago',   price: 'US$180,000', icon: '🏡' },
    { type: 'Villa',       location: 'La Romana',  price: 'US$350,000', icon: '🏘️' },
  ],
  phone:     '809-000-0000',
  ctaText:   '📲 Ver propiedades disponibles',
  audioFile: 'audio/realestate-voice.mp3',
  colors: {
    bg:        '#0A0A0A',
    bg2:       '#161616',
    primary:   '#B8860B',
    accent:    '#FFD700',
    text:      '#FFFFFF',
    textMuted: '#D4AF37',
    highlight: '#FFD700',
    cta:       '#B8860B',
    ctaText:   '#FFFFFF',
  },
  background: {
    type:           'gradient',
    gradientColors: ['#B8860B', '#FFD700', '#0A0A0A'],
  },
}

// ── Composiciones registradas ─────────────────────────────────────────────────

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* ── Ads existentes ───────────────────────────────────────────────── */}

      {/* Blueberry Restaurant */}
      <Composition
        id="BlueberryAd"
        component={BlueberryAd}
        durationInFrames={390}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{}}
      />

      {/* Blueberry Candy — oferta 2x1 */}
      <Composition
        id="BlueberryCandyAd"
        component={BlueberryCandyAd}
        durationInFrames={1140}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{}}
      />

      {/* ── Templates configurables ──────────────────────────────────────── */}

      {/* Health / Suplementos — 36s */}
      <Composition
        id="HealthTemplate"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        component={HealthTemplate as any}
        durationInFrames={1080}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={defaultHealthProps}
      />

      {/* Restaurante — 26s */}
      <Composition
        id="RestaurantTemplate"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        component={RestaurantTemplate as any}
        durationInFrames={780}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={defaultRestaurantProps}
      />

      {/* Inmobiliaria — 30s */}
      <Composition
        id="RealEstateTemplate"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        component={RealEstateTemplate as any}
        durationInFrames={900}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={defaultRealEstateProps}
      />
    </>
  )
}

registerRoot(RemotionRoot)
