import { Composition, registerRoot } from 'remotion'
import React from 'react'
import { BlueberryAd } from './compositions/blueberry/BlueberryAd'
import { BlueberryCandyAd } from './compositions/candy/BlueberryCandyAd'
import { HealthTemplate } from './compositions/templates/HealthTemplate'
import { RestaurantTemplate } from './compositions/templates/RestaurantTemplate'
import { RealEstateTemplate } from './compositions/templates/RealEstateTemplate'
import { HealthAdProps, RestaurantAdProps, RealEstateAdProps } from './shared/types'
import { PresminHybrid } from './PresminHybrid'
import { PresminHybrid60 } from './PresminHybrid60'
import { PresminV3 } from './PresminV3'
import { BioScanProAd } from './compositions/bioscan/BioScanProAd'
import { bioscanV1, bioscanV2, bioscanV3, bioscanV5 } from './compositions/bioscan/bioscan-data'
import { batch01 } from './compositions/bioscan/batch01-data'
import { batch02 } from './compositions/bioscan/batch02-data'
import { batch03 } from './compositions/bioscan/batch03-data'
import { batch04 } from './compositions/bioscan/batch04-data'
import { batch05 } from './compositions/bioscan/batch05-data'
import { batch06 } from './compositions/bioscan/batch06-data'
import { batch07 } from './compositions/bioscan/batch07-data'
import { batch08 } from './compositions/bioscan/batch08-data'
import { batch09 } from './compositions/bioscan/batch09-data'
import { batch10 } from './compositions/bioscan/batch10-data'
import { batch11 } from './compositions/bioscan/batch11-data'
import { batch12 } from './compositions/bioscan/batch12-data'
import { batch13 } from './compositions/bioscan/batch13-data'
import { batch14 } from './compositions/bioscan/batch14-data'
import { batch15 } from './compositions/bioscan/batch15-data'
import { batch16 } from './compositions/bioscan/batch16-data'

// ── Presmin — Props generadas por PROMETHEUS 2026-06-14 ──────────────────────

const presminProps: HealthAdProps = {
  brandName:    'Presmin',
  productName:  'PRESMIN',
  tagline:      'Cuida tu próstata. Vive mejor.',
  hookQuestion: '¿Te preocupa la salud de tu próstata?\nNo estás solo.',
  hookEmoji:    '🛡️',
  symptoms: [
    { icon: '🚽', text: 'Levantarte varias veces en la noche' },
    { icon: '💧', text: 'Chorro débil o goteo al orinar' },
    { icon: '⚡', text: 'Urgencia repentina e incontrolable' },
  ],
  ingredients: ['🌿 Saw Palmetto', '⚡ Zinc', '🔬 Betasitosterol', '🌱 Licopeno'],
  badgeText:    'Fórmula Natural Certificada',
  priceFinal:   'RD$2,190',
  pricePerDay:  'Solo RD$73 al día',
  offerText:    '30 cápsulas — 30 días de protección total',
  unitsLeft:    12,
  socialProof:  'Más de 500 hombres en RD ya cuidan su próstata con Presmin',
  ctaText:      'QUIERO MI PRESMIN',
  ctaSubtext:   'presmin.webfactoryrd.com',
  audioFile:    'audio/presmin-voice.mp3',
  productImageFile: 'images/product.png',
  colors: {
    bg:        '#040D18',
    bg2:       '#081929',
    primary:   '#1D4ED8',
    accent:    '#3B82F6',
    text:      '#FFFFFF',
    textMuted: '#93C5FD',
    highlight: '#FBBF24',
    cta:       '#1D4ED8',
    ctaText:   '#FFFFFF',
  },
  background: {
    type:           'gradient',
    gradientColors: ['#1D4ED8', '#3B82F6', '#040D18'],
  },
}

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

      {/* Presmin — generado por PROMETHEUS */}
      <Composition
        id="PresminAd"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        component={HealthTemplate as any}
        durationInFrames={1080}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={presminProps}
      />

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

      {/* Presmin V3 — 65s, fuentes grandes, imagen vertical, URL final, fade out */}
      <Composition
        id="PresminV3"
        component={PresminV3}
        durationInFrames={1950}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* Presmin Hybrid 60s — Pexels + Remotion overlays + producto + transiciones */}
      <Composition
        id="PresminHybrid60"
        component={PresminHybrid60}
        durationInFrames={1800}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* Presmin Hybrid — 36s — Pexels + Remotion overlays */}
      <Composition
        id="PresminHybrid"
        component={PresminHybrid}
        durationInFrames={1080}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* ── BioScan IA — 5 variantes × 60s ─────────────────────────────── */}

      {/* ── BioScan IA Pro — 4 variantes × 60s con OffthreadVideo ─────────── */}

      {/* Pro V1 — Miedo/Prevención — es-CO-GonzaloNeural */}
      <Composition
        id="BioScanProV1"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        component={BioScanProAd as any}
        durationInFrames={1800}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={bioscanV1}
      />

      {/* Pro V2 — Precio/Acceso — es-MX-JorgeNeural */}
      <Composition
        id="BioScanProV2"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        component={BioScanProAd as any}
        durationInFrames={1800}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={bioscanV2}
      />

      {/* Pro V3 — Velocidad/Conveniencia — es-ES-AlvaroNeural */}
      <Composition
        id="BioScanProV3"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        component={BioScanProAd as any}
        durationInFrames={1800}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={bioscanV3}
      />

      {/* Pro V5 — Tecnología/Credibilidad — es-CL-LorenzoNeural */}
      <Composition
        id="BioScanProV5"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        component={BioScanProAd as any}
        durationInFrames={1800}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={bioscanV5}
      />

      {/* ── Batch 01 — 500 Videos BioScan — Copies 001-010 ───────────────── */}
      {batch01.map((props, i) => {
        const n = String(i + 1).padStart(3, "0");
        return (
          <Composition
            key={`BioScan${n}`}
            id={`BioScan${n}`}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            component={BioScanProAd as any}
            durationInFrames={props.durationInFrames ?? 1800}
            fps={30}
            width={1080}
            height={1920}
            defaultProps={props}
          />
        );
      })}

      {/* ── Batch 02 — 500 Videos BioScan — Copies 011-020 ───────────────── */}
      {batch02.map((props, i) => {
        const n = String(i + 11).padStart(3, "0");
        return (
          <Composition
            key={`BioScan${n}`}
            id={`BioScan${n}`}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            component={BioScanProAd as any}
            durationInFrames={props.durationInFrames ?? 1800}
            fps={30}
            width={1080}
            height={1920}
            defaultProps={props}
          />
        );
      })}

      {/* ── Batch 03 — 500 Videos BioScan — Copies 021-030 ───────────────── */}
      {batch03.map((props, i) => {
        const n = String(i + 21).padStart(3, "0");
        return (
          <Composition
            key={`BioScan${n}`}
            id={`BioScan${n}`}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            component={BioScanProAd as any}
            durationInFrames={props.durationInFrames ?? 1800}
            fps={30}
            width={1080}
            height={1920}
            defaultProps={props}
          />
        );
      })}

      {/* ── Batch 04 — 500 Videos BioScan — Copies 031-040 ───────────────── */}
      {batch04.map((props, i) => {
        const n = String(i + 31).padStart(3, "0");
        return (
          <Composition
            key={`BioScan${n}`}
            id={`BioScan${n}`}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            component={BioScanProAd as any}
            durationInFrames={props.durationInFrames ?? 1800}
            fps={30}
            width={1080}
            height={1920}
            defaultProps={props}
          />
        );
      })}

      {/* ── Batch 05 — 500 Videos BioScan — Copies 041-050 ───────────────── */}
      {batch05.map((props, i) => {
        const n = String(i + 41).padStart(3, "0");
        return (
          <Composition
            key={`BioScan${n}`}
            id={`BioScan${n}`}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            component={BioScanProAd as any}
            durationInFrames={props.durationInFrames ?? 1800}
            fps={30}
            width={1080}
            height={1920}
            defaultProps={props}
          />
        );
      })}

      {/* ── Batch 06 — 500 Videos BioScan — Copies 051-060 ───────────────── */}
      {batch06.map((props, i) => {
        const n = String(i + 51).padStart(3, "0");
        return (
          <Composition
            key={`BioScan${n}`}
            id={`BioScan${n}`}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            component={BioScanProAd as any}
            durationInFrames={props.durationInFrames ?? 1800}
            fps={30}
            width={1080}
            height={1920}
            defaultProps={props}
          />
        );
      })}

      {/* ── Batch 07 — 500 Videos BioScan — Copies 061-070 ───────────────── */}
      {batch07.map((props, i) => {
        const n = String(i + 61).padStart(3, "0");
        return (
          <Composition
            key={`BioScan${n}`}
            id={`BioScan${n}`}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            component={BioScanProAd as any}
            durationInFrames={props.durationInFrames ?? 1800}
            fps={30}
            width={1080}
            height={1920}
            defaultProps={props}
          />
        );
      })}

      {/* ── Batch 08 — 500 Videos BioScan — Copies 071-080 ───────────────── */}
      {batch08.map((props, i) => {
        const n = String(i + 71).padStart(3, "0");
        return (
          <Composition
            key={`BioScan${n}`}
            id={`BioScan${n}`}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            component={BioScanProAd as any}
            durationInFrames={props.durationInFrames ?? 1800}
            fps={30}
            width={1080}
            height={1920}
            defaultProps={props}
          />
        );
      })}

      {/* ── Batch 09 — 500 Videos BioScan — Copies 081-090 ───────────────── */}
      {batch09.map((props, i) => {
        const n = String(i + 81).padStart(3, "0");
        return (
          <Composition
            key={`BioScan${n}`}
            id={`BioScan${n}`}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            component={BioScanProAd as any}
            durationInFrames={props.durationInFrames ?? 1800}
            fps={30}
            width={1080}
            height={1920}
            defaultProps={props}
          />
        );
      })}

      {/* ── Batch 10 — 500 Videos BioScan — Copies 091-100 ───────────────── */}
      {batch10.map((props, i) => {
        const n = String(i + 91).padStart(3, "0");
        return (
          <Composition
            key={`BioScan${n}`}
            id={`BioScan${n}`}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            component={BioScanProAd as any}
            durationInFrames={props.durationInFrames ?? 1800}
            fps={30}
            width={1080}
            height={1920}
            defaultProps={props}
          />
        );
      })}

      {/* ── Batch 11 — 500 Videos BioScan — Copies 101-110 ───────────────── */}
      {batch11.map((props, i) => {
        const n = String(i + 101).padStart(3, "0");
        return (
          <Composition
            key={`BioScan${n}`}
            id={`BioScan${n}`}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            component={BioScanProAd as any}
            durationInFrames={props.durationInFrames ?? 1800}
            fps={30}
            width={1080}
            height={1920}
            defaultProps={props}
          />
        );
      })}

      {/* ── Batch 12 — 500 Videos BioScan — Copies 111-120 ───────────────── */}
      {batch12.map((props, i) => {
        const n = String(i + 111).padStart(3, "0");
        return (
          <Composition
            key={`BioScan${n}`}
            id={`BioScan${n}`}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            component={BioScanProAd as any}
            durationInFrames={props.durationInFrames ?? 1800}
            fps={30}
            width={1080}
            height={1920}
            defaultProps={props}
          />
        );
      })}

      {/* ── Batch 13 — 500 Videos BioScan — Copies 121-130 ───────────────── */}
      {batch13.map((props, i) => {
        const n = String(i + 121).padStart(3, "0");
        return (
          <Composition
            key={`BioScan${n}`}
            id={`BioScan${n}`}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            component={BioScanProAd as any}
            durationInFrames={props.durationInFrames ?? 1800}
            fps={30}
            width={1080}
            height={1920}
            defaultProps={props}
          />
        );
      })}

      {/* ── Batch 14 — 500 Videos BioScan — Copies 131-140 ───────────────── */}
      {batch14.map((props, i) => {
        const n = String(i + 131).padStart(3, "0");
        return (
          <Composition
            key={`BioScan${n}`}
            id={`BioScan${n}`}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            component={BioScanProAd as any}
            durationInFrames={props.durationInFrames ?? 1800}
            fps={30}
            width={1080}
            height={1920}
            defaultProps={props}
          />
        );
      })}

      {/* ── Batch 15 — 500 Videos BioScan — Copies 141-150 ───────────────── */}
      {batch15.map((props, i) => {
        const n = String(i + 141).padStart(3, "0");
        return (
          <Composition
            key={`BioScan${n}`}
            id={`BioScan${n}`}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            component={BioScanProAd as any}
            durationInFrames={props.durationInFrames ?? 1800}
            fps={30}
            width={1080}
            height={1920}
            defaultProps={props}
          />
        );
      })}

      {/* ── Batch 16 — 500 Videos BioScan — Copies 151-160 ───────────────── */}
      {batch16.map((props, i) => {
        const n = String(i + 151).padStart(3, "0");
        return (
          <Composition
            key={`BioScan${n}`}
            id={`BioScan${n}`}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            component={BioScanProAd as any}
            durationInFrames={props.durationInFrames ?? 1800}
            fps={30}
            width={1080}
            height={1920}
            defaultProps={props}
          />
        );
      })}
    </>
  )
}

registerRoot(RemotionRoot)
