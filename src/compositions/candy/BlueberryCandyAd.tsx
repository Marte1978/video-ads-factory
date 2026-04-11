import {
  AbsoluteFill,
  Audio,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  staticFile,
} from 'remotion'
import React from 'react'

// ── Paleta Blueberry Candy ────────────────────────────────────────────────
const C = {
  bg:      '#0F0520',
  bg2:     '#1A0A35',
  purple:  '#6B21A8',
  violet:  '#8B5CF6',
  indigo:  '#4F46E5',
  green:   '#22C55E',
  white:   '#FFFFFF',
  cream:   '#F5F0FF',
  gray:    '#C4B5FD',
  gold:    '#FBBF24',
  red:     '#EF4444',
  berry:   '#C084FC',
}

// Total: 38 segundos = 1140 frames a 30fps
// Escenas distribuidas para que el audio no se corte

function fi(frame: number, from: number, dur = 22) {
  return interpolate(frame, [from, from + dur], [0, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  })
}
function su(frame: number, from: number, dist = 45, dur = 25) {
  return dist * (1 - interpolate(frame, [from, from + dur], [0, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  }))
}

// ── Fondo ─────────────────────────────────────────────────────────────────
function Background() {
  return (
    <AbsoluteFill style={{
      background: `
        radial-gradient(ellipse 90% 55% at 50% 10%, rgba(107,33,168,0.55) 0%, transparent 55%),
        radial-gradient(ellipse 70% 45% at 90% 85%, rgba(139,92,246,0.30) 0%, transparent 50%),
        radial-gradient(ellipse 50% 40% at 10% 60%, rgba(79,70,229,0.25) 0%, transparent 50%),
        ${C.bg}
      `,
    }} />
  )
}

// ── Orbes animados ────────────────────────────────────────────────────────
function Orbs({ frame }: { frame: number }) {
  const orbs = [
    { x: 80,  y: 200,  r: 80,  color: C.violet, speed: 0.4 },
    { x: 940, y: 450,  r: 100, color: C.purple, speed: 0.3 },
    { x: 180, y: 950,  r: 70,  color: C.indigo, speed: 0.5 },
    { x: 850, y: 1300, r: 90,  color: C.berry,  speed: 0.35 },
    { x: 500, y: 1750, r: 110, color: C.violet, speed: 0.25 },
  ]
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      {orbs.map((o, i) => {
        const yOff = Math.sin((frame * o.speed + i * 40) * 0.04) * 25
        return (
          <div key={i} style={{
            position: 'absolute',
            left: o.x - o.r, top: o.y - o.r + yOff,
            width: o.r * 2, height: o.r * 2,
            borderRadius: '50%',
            background: o.color,
            opacity: 0.13,
            filter: `blur(${o.r * 0.75}px)`,
          }} />
        )
      })}
    </AbsoluteFill>
  )
}

// ── ESCENA 1: Hook (0–210 = 7s) ───────────────────────────────────────────
function Scene1({ frame }: { frame: number }) {
  return (
    <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center', padding: '0 70px' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ opacity: fi(frame, 8), fontSize: 120, marginBottom: 30 }}>👁️</div>

        <div style={{
          opacity: fi(frame, 25),
          transform: `translateY(${su(frame, 25)}px)`,
          fontSize: 68,
          fontWeight: 900,
          color: C.white,
          lineHeight: 1.15,
          fontFamily: 'Georgia, serif',
          textShadow: `0 0 40px ${C.violet}`,
        }}>
          ¿Tus ojos están
        </div>

        <div style={{
          opacity: fi(frame, 35),
          fontSize: 80,
          fontWeight: 900,
          background: `linear-gradient(135deg, ${C.berry}, ${C.violet})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: 'Georgia, serif',
          lineHeight: 1.1,
          filter: `drop-shadow(0 0 20px ${C.violet}80)`,
        }}>
          fallando...
        </div>

        <div style={{
          opacity: fi(frame, 55),
          marginTop: 28,
          fontSize: 46,
          color: C.gray,
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
        }}>
          y tú ni lo sabes?
        </div>
      </div>
    </AbsoluteFill>
  )
}

// ── ESCENA 2: Síntomas (210–420 = 7s) ────────────────────────────────────
function Scene2({ frame }: { frame: number }) {
  const symptoms = [
    { icon: '😵‍💫', text: 'Vista borrosa' },
    { icon: '🔥', text: 'Ojos ardiendo' },
    { icon: '🤕', text: 'Dolores de cabeza' },
  ]
  return (
    <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center', padding: '0 65px' }}>
      <div style={{ width: '100%' }}>
        <div style={{
          opacity: fi(frame, 8),
          transform: `translateY(${su(frame, 8)})`,
          textAlign: 'center',
          fontSize: 42,
          color: C.gray,
          fontFamily: 'Georgia, serif',
          marginBottom: 50,
          fontStyle: 'italic',
        }}>
          Son señales. No las ignores.
        </div>

        {symptoms.map((s, i) => (
          <div key={i} style={{
            opacity: fi(frame, 28 + i * 22),
            transform: `translateY(${su(frame, 28 + i * 22, 35)}px)`,
            display: 'flex',
            alignItems: 'center',
            gap: 26,
            marginBottom: 28,
            background: 'rgba(239,68,68,0.12)',
            border: '2px solid rgba(239,68,68,0.35)',
            borderRadius: 22,
            padding: '28px 36px',
          }}>
            <span style={{ fontSize: 60 }}>{s.icon}</span>
            <div>
              <div style={{ fontSize: 22, color: C.red, fontWeight: 800, marginBottom: 4 }}>✗</div>
              <div style={{ fontSize: 42, fontWeight: 800, color: C.white, fontFamily: 'Georgia, serif' }}>
                {s.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  )
}

// ── ESCENA 3: Solución (420–630 = 7s) ────────────────────────────────────
function Scene3({ frame }: { frame: number }) {
  const scale = interpolate(frame, [8, 40], [0.75, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  })
  const ingredients = ['🫐 Arándano', '🌿 Luteína', '🌿 Zeaxantina', '💊 Vitamina A']
  return (
    <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center', padding: '0 65px' }}>
      <div style={{ width: '100%', textAlign: 'center' }}>
        {/* Badge natural */}
        <div style={{
          opacity: fi(frame, 8),
          display: 'inline-flex', alignItems: 'center', gap: 10,
          background: 'rgba(34,197,94,0.15)',
          border: `2px solid ${C.green}`,
          borderRadius: 999, padding: '12px 30px', marginBottom: 36,
        }}>
          <span style={{ fontSize: 24, color: C.green }}>✓</span>
          <span style={{ fontSize: 28, fontWeight: 800, color: C.green }}>100% Natural</span>
        </div>

        {/* Nombre */}
        <div style={{
          opacity: fi(frame, 15),
          transform: `scale(${scale})`,
          fontSize: 86,
          fontWeight: 900,
          background: `linear-gradient(135deg, ${C.berry} 0%, ${C.violet} 55%, ${C.indigo} 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: 'Georgia, serif',
          lineHeight: 1,
          filter: `drop-shadow(0 0 30px ${C.violet}60)`,
        }}>
          Blueberry Candy
        </div>

        {/* Tagline */}
        <div style={{
          opacity: fi(frame, 40),
          marginTop: 22,
          fontSize: 36,
          color: C.cream,
          fontFamily: 'Georgia, serif',
          lineHeight: 1.4,
        }}>
          Protege y repara tu visión
        </div>
        <div style={{
          opacity: fi(frame, 48),
          fontSize: 32,
          color: C.gray,
          fontFamily: 'Georgia, serif',
          marginBottom: 40,
        }}>
          desde adentro
        </div>

        {/* Ingredientes */}
        <div style={{
          opacity: fi(frame, 60),
          display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center',
        }}>
          {ingredients.map((ing, i) => (
            <div key={i} style={{
              background: 'rgba(139,92,246,0.18)',
              border: '1.5px solid rgba(139,92,246,0.45)',
              borderRadius: 999, padding: '14px 26px',
              fontSize: 26, color: C.berry, fontWeight: 700,
            }}>
              {ing}
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  )
}

// ── ESCENA 4: Oferta 2x1 (630–870 = 8s) ──────────────────────────────────
function Scene4({ frame }: { frame: number }) {
  const pulse = 1 + Math.sin(frame * 0.18) * 0.025
  return (
    <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center', padding: '0 55px' }}>
      <div style={{ width: '100%', textAlign: 'center' }}>
        {/* ¡OFERTA! */}
        <div style={{
          opacity: fi(frame, 8),
          transform: `scale(${pulse})`,
          display: 'inline-block',
          background: 'linear-gradient(135deg, #DC2626, #EF4444)',
          borderRadius: 16, padding: '14px 44px',
          fontSize: 48, fontWeight: 900, color: C.white,
          letterSpacing: 4, boxShadow: '0 0 40px rgba(239,68,68,0.55)',
          marginBottom: 28,
        }}>
          ¡OFERTA!
        </div>

        {/* 2 frascos */}
        <div style={{
          opacity: fi(frame, 20),
          transform: `translateY(${su(frame, 20, 35)}px)`,
          fontSize: 58,
          fontWeight: 900,
          color: C.white,
          fontFamily: 'Georgia, serif',
          marginBottom: 10,
        }}>
          Llévate <span style={{ color: C.gold }}>2 frascos</span>
        </div>
        <div style={{
          opacity: fi(frame, 28),
          fontSize: 46,
          color: C.cream,
          fontFamily: 'Georgia, serif',
          marginBottom: 36,
        }}>
          por el precio de 1
        </div>

        {/* Precio */}
        <div style={{
          opacity: fi(frame, 40),
          background: `linear-gradient(135deg, ${C.purple}, ${C.violet})`,
          borderRadius: 24, padding: '34px 48px',
          boxShadow: `0 0 60px ${C.violet}45`,
          marginBottom: 34,
        }}>
          <div style={{
            fontSize: 90,
            fontWeight: 900,
            color: C.gold,
            fontFamily: 'Georgia, serif',
            lineHeight: 1,
          }}>
            RD$1,990
          </div>
          <div style={{ fontSize: 34, color: C.cream, marginTop: 10 }}>
            Solo <strong>RD$33</strong> al día
          </div>
        </div>

        {/* Beneficios */}
        <div style={{
          opacity: fi(frame, 58),
          display: 'flex', justifyContent: 'center', gap: 18, flexWrap: 'wrap',
        }}>
          {['🚚 Envío Gratis', '💵 Pagas al Recibir', '📦 3 días'].map((b, i) => (
            <div key={i} style={{
              background: 'rgba(34,197,94,0.12)',
              border: '1.5px solid rgba(34,197,94,0.40)',
              borderRadius: 14, padding: '14px 24px',
              fontSize: 26, color: C.green, fontWeight: 700,
            }}>{b}</div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  )
}

// ── ESCENA 5: Urgencia + CTA (870–1140 = 9s) ─────────────────────────────
function Scene5({ frame }: { frame: number }) {
  const blink = Math.sin(frame * 0.28) > 0
  const scaleBtn = 1 + Math.sin(frame * 0.15) * 0.03

  return (
    <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center', padding: '0 65px' }}>
      <div style={{ width: '100%', textAlign: 'center' }}>
        {/* Unidades */}
        <div style={{ opacity: fi(frame, 8) }}>
          <div style={{ fontSize: 32, color: C.gray, marginBottom: 16 }}>⏰ Solo hoy</div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 18,
            background: 'rgba(239,68,68,0.15)',
            border: '2px solid rgba(239,68,68,0.45)',
            borderRadius: 20, padding: '20px 40px', marginBottom: 40,
          }}>
            <span style={{
              width: 18, height: 18, borderRadius: '50%',
              background: blink ? C.red : 'transparent',
              border: `2.5px solid ${C.red}`,
              display: 'inline-block',
              boxShadow: blink ? `0 0 10px ${C.red}` : 'none',
            }} />
            <span style={{ fontSize: 40, fontWeight: 900, color: C.white }}>
              Solo quedan <span style={{ color: C.red }}>14 unidades</span>
            </span>
          </div>
        </div>

        {/* Social proof */}
        <div style={{
          opacity: fi(frame, 25),
          fontSize: 32,
          color: C.gray, marginBottom: 44,
        }}>
          ✓ Más de <strong style={{ color: C.white, fontSize: 36 }}>2,500</strong> pedidos en RD
        </div>

        {/* CTA */}
        <div style={{
          opacity: fi(frame, 38),
          transform: `scale(${scaleBtn})`,
          background: 'linear-gradient(135deg, #16A34A, #22C55E)',
          borderRadius: 26, padding: '36px 52px',
          boxShadow: '0 0 60px rgba(34,197,94,0.50)',
          marginBottom: 40,
        }}>
          <div style={{ fontSize: 48, fontWeight: 900, color: C.white, lineHeight: 1.15 }}>
            📲 PEDIR LOS 2 FRASCOS
          </div>
          <div style={{ fontSize: 30, color: 'rgba(255,255,255,0.88)', marginTop: 10 }}>
            Envío Gratis — WhatsApp
          </div>
        </div>

        {/* Logo final */}
        <div style={{
          opacity: fi(frame, 60),
          fontSize: 46,
          fontWeight: 900,
          background: `linear-gradient(135deg, ${C.berry}, ${C.violet})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: 'Georgia, serif',
        }}>
          Blueberry Candy
        </div>
        <div style={{
          opacity: fi(frame, 68),
          fontSize: 28,
          color: C.gray,
          fontStyle: 'italic',
          marginTop: 8,
        }}>
          Salud Visual · 100% Natural
        </div>
      </div>
    </AbsoluteFill>
  )
}

// ── Composición principal — 38s = 1140 frames ────────────────────────────
export const BlueberryCandyAd: React.FC = () => {
  const frame = useCurrentFrame()
  const { durationInFrames } = useVideoConfig()

  const globalOpacity = interpolate(
    frame,
    [durationInFrames - 18, durationInFrames],
    [1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  )

  return (
    <AbsoluteFill style={{ opacity: globalOpacity, fontFamily: 'system-ui, sans-serif' }}>
      <Background />
      <Orbs frame={frame} />

      {/* Escena 1 — Hook (0–210 = 7s) */}
      <Sequence from={0} durationInFrames={215}>
        <Scene1 frame={frame} />
      </Sequence>

      {/* Escena 2 — Síntomas (210–420 = 7s) */}
      <Sequence from={210} durationInFrames={215}>
        <Scene2 frame={frame - 210} />
      </Sequence>

      {/* Escena 3 — Solución (420–630 = 7s) */}
      <Sequence from={420} durationInFrames={215}>
        <Scene3 frame={frame - 420} />
      </Sequence>

      {/* Escena 4 — Oferta 2x1 (630–870 = 8s) */}
      <Sequence from={630} durationInFrames={245}>
        <Scene4 frame={frame - 630} />
      </Sequence>

      {/* Escena 5 — Urgencia + CTA (870–1140 = 9s) */}
      <Sequence from={870} durationInFrames={270}>
        <Scene5 frame={frame - 870} />
      </Sequence>

      {/* Audio Gabriela — ElevenLabs español latam */}
      <Audio src={staticFile('audio/candy-voice.mp3')} />
    </AbsoluteFill>
  )
}
