import {
  AbsoluteFill,
  Audio,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  staticFile,
} from 'remotion'
import React from 'react'

// ── Paleta de colores Blueberry ───────────────────────────────────────────
const COLORS = {
  bg:        '#0D0D0D',     // negro profundo
  bgCard:    '#1A1A1A',
  primary:   '#6B48FF',     // violeta/blueberry principal
  accent:    '#A78BFA',     // violeta claro
  gold:      '#F59E0B',     // ámbar/dorado para acentos
  white:     '#FFFFFF',
  gray:      '#A1A1AA',
  pink:      '#EC4899',     // acento rosado
}

// ── Utilidades de animación ───────────────────────────────────────────────
function fadeIn(frame: number, from: number, duration = 20) {
  return interpolate(frame, [from, from + duration], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })
}

function slideUp(frame: number, from: number, distance = 40, duration = 25) {
  const p = interpolate(frame, [from, from + duration], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })
  return distance * (1 - p)
}

// ── Partículas decorativas ────────────────────────────────────────────────
function Particles({ frame }: { frame: number }) {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    x: 10 + (i * 80) % 1000,
    y: 200 + (i * 150) % 1600,
    size: 3 + (i % 4),
    delay: i * 8,
    color: i % 3 === 0 ? COLORS.primary : i % 3 === 1 ? COLORS.accent : COLORS.pink,
  }))

  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      {particles.map((p, i) => {
        const opacity = interpolate(
          (frame + p.delay * 3) % 90,
          [0, 30, 60, 90],
          [0, 0.6, 0.6, 0],
          { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
        )
        const yOffset = interpolate((frame + p.delay * 3) % 90, [0, 90], [0, -30], {
          extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
        })
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: p.x,
              top: p.y + yOffset,
              width: p.size,
              height: p.size,
              borderRadius: '50%',
              background: p.color,
              opacity,
              boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            }}
          />
        )
      })}
    </AbsoluteFill>
  )
}

// ── Fondo con gradiente animado ───────────────────────────────────────────
function Background({ frame }: { frame: number }) {
  const shift = interpolate(frame, [0, 390], [0, 360], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })

  return (
    <AbsoluteFill
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 50% 20%, rgba(107,72,255,0.25) 0%, transparent 60%),
          radial-gradient(ellipse 60% 40% at 80% 80%, rgba(167,139,250,0.15) 0%, transparent 50%),
          radial-gradient(ellipse 50% 50% at 20% 70%, rgba(236,72,153,0.10) 0%, transparent 50%),
          ${COLORS.bg}
        `,
      }}
    />
  )
}

// ── Escena 1: Intro tagline ───────────────────────────────────────────────
function Scene1({ frame }: { frame: number }) {
  // frames 0-60 (2s)
  const f = fadeIn(frame, 5)
  const y = slideUp(frame, 5)

  return (
    <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center' }}>
      <div
        style={{
          opacity: f,
          transform: `translateY(${y}px)`,
          textAlign: 'center',
          padding: '0 60px',
        }}
      >
        <div style={{
          fontSize: 38,
          fontWeight: 800,
          color: COLORS.white,
          lineHeight: 1.2,
          fontFamily: 'Georgia, serif',
          textShadow: `0 0 40px ${COLORS.primary}80`,
        }}>
          ¿Buscas el lugar
        </div>
        <div style={{
          fontSize: 38,
          fontWeight: 800,
          color: COLORS.white,
          lineHeight: 1.2,
          fontFamily: 'Georgia, serif',
        }}>
          perfecto para una
        </div>
        <div style={{
          fontSize: 42,
          fontWeight: 900,
          background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.accent})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: 'Georgia, serif',
          marginTop: 8,
        }}>
          experiencia gastronómica
        </div>
        <div style={{
          fontSize: 42,
          fontWeight: 900,
          color: COLORS.gold,
          fontFamily: 'Georgia, serif',
        }}>
          única?
        </div>
      </div>
    </AbsoluteFill>
  )
}

// ── Escena 2: Nombre de marca ──────────────────────────────────────────────
function Scene2({ frame }: { frame: number }) {
  // frames 70-150
  const f = fadeIn(frame, 0)
  const scale = interpolate(frame, [0, 30], [0.8, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  })
  const tagF = fadeIn(frame, 20)

  return (
    <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ opacity: f, transform: `scale(${scale})`, textAlign: 'center' }}>
        {/* Logo / nombre */}
        <div style={{
          fontSize: 88,
          fontWeight: 900,
          background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.accent} 50%, ${COLORS.pink} 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: 'Georgia, serif',
          letterSpacing: '-2px',
          lineHeight: 1,
          filter: `drop-shadow(0 0 30px ${COLORS.primary}60)`,
        }}>
          Blueberry
        </div>

        {/* Divider */}
        <div style={{
          width: 80, height: 3,
          background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.accent})`,
          margin: '20px auto',
          borderRadius: 2,
        }} />

        {/* Tagline */}
        <div style={{
          opacity: tagF,
          fontSize: 26,
          color: COLORS.gray,
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
          letterSpacing: 1,
        }}>
          Cocina artesanal con alma
        </div>
      </div>
    </AbsoluteFill>
  )
}

// ── Escena 3: Propuesta de valor ──────────────────────────────────────────
function Scene3({ frame }: { frame: number }) {
  // frames 155-255
  const items = [
    { icon: '🍳', text: 'Desayunos artesanales', delay: 0 },
    { icon: '🥗', text: 'Almuerzos frescos', delay: 12 },
    { icon: '☕', text: 'Meriendas & cafés', delay: 24 },
    { icon: '🌍', text: 'Ingredientes del mundo', delay: 36 },
  ]

  return (
    <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center', padding: '0 60px' }}>
      <div style={{ width: '100%' }}>
        <div style={{
          opacity: fadeIn(frame, 0),
          fontSize: 32,
          fontWeight: 700,
          color: COLORS.white,
          textAlign: 'center',
          marginBottom: 40,
          fontFamily: 'Georgia, serif',
        }}>
          Lo que nos hace especiales
        </div>

        {items.map((item, i) => {
          const f = fadeIn(frame, item.delay + 5)
          const y = slideUp(frame, item.delay, 30)
          return (
            <div
              key={i}
              style={{
                opacity: f,
                transform: `translateY(${y}px)`,
                display: 'flex',
                alignItems: 'center',
                gap: 24,
                marginBottom: 28,
                background: `rgba(107,72,255,0.12)`,
                border: `1px solid rgba(107,72,255,0.25)`,
                borderRadius: 16,
                padding: '20px 28px',
              }}
            >
              <span style={{ fontSize: 40 }}>{item.icon}</span>
              <span style={{
                fontSize: 28,
                fontWeight: 600,
                color: COLORS.white,
                fontFamily: 'Georgia, serif',
              }}>
                {item.text}
              </span>
            </div>
          )
        })}
      </div>
    </AbsoluteFill>
  )
}

// ── Escena 4: Ubicación ────────────────────────────────────────────────────
function Scene4({ frame }: { frame: number }) {
  // frames 260-320
  const f = fadeIn(frame, 5)
  const y = slideUp(frame, 5)

  return (
    <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center', padding: '0 60px' }}>
      <div style={{ opacity: f, transform: `translateY(${y}px)`, textAlign: 'center' }}>
        <div style={{ fontSize: 60, marginBottom: 20 }}>📍</div>
        <div style={{
          fontSize: 30,
          color: COLORS.gray,
          fontFamily: 'Georgia, serif',
          marginBottom: 12,
        }}>
          Nos encontramos en
        </div>
        <div style={{
          fontSize: 38,
          fontWeight: 800,
          color: COLORS.white,
          fontFamily: 'Georgia, serif',
          lineHeight: 1.2,
        }}>
          Ensanche Naco
        </div>
        <div style={{
          fontSize: 32,
          fontWeight: 700,
          color: COLORS.accent,
          fontFamily: 'Georgia, serif',
        }}>
          Santo Domingo
        </div>
      </div>
    </AbsoluteFill>
  )
}

// ── Escena 5: Teléfono (lento y claro) ────────────────────────────────────
function Scene5({ frame }: { frame: number }) {
  // frames 325-390
  const f = fadeIn(frame, 5)
  const phoneF = fadeIn(frame, 20)
  const pulseScale = interpolate(
    Math.sin((frame / 8) * Math.PI),
    [-1, 1], [0.97, 1.03]
  )

  return (
    <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center', padding: '0 60px' }}>
      <div style={{ opacity: f, textAlign: 'center' }}>
        <div style={{
          fontSize: 26,
          color: COLORS.gray,
          fontFamily: 'Georgia, serif',
          marginBottom: 20,
        }}>
          Para reservaciones
        </div>

        {/* Phone number */}
        <div
          style={{
            opacity: phoneF,
            transform: `scale(${pulseScale})`,
            background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.accent})`,
            borderRadius: 20,
            padding: '28px 48px',
            boxShadow: `0 0 40px ${COLORS.primary}50`,
          }}
        >
          <div style={{
            fontSize: 52,
            fontWeight: 900,
            color: COLORS.white,
            letterSpacing: 6,
            fontFamily: 'monospace',
          }}>
            809-396-6762
          </div>
        </div>

        {/* CTA */}
        <div style={{
          opacity: fadeIn(frame, 30),
          marginTop: 36,
          fontSize: 38,
          fontWeight: 900,
          color: COLORS.gold,
          fontFamily: 'Georgia, serif',
          textShadow: `0 0 20px ${COLORS.gold}60`,
        }}>
          Blueberry
        </div>
        <div style={{
          opacity: fadeIn(frame, 35),
          fontSize: 22,
          color: COLORS.gray,
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
          marginTop: 8,
        }}>
          Sabor que inspira.
        </div>
      </div>
    </AbsoluteFill>
  )
}

// ── Composición principal ─────────────────────────────────────────────────
export const BlueberryAd: React.FC = () => {
  const frame = useCurrentFrame()
  const { durationInFrames } = useVideoConfig()

  // Fade out final
  const globalOpacity = interpolate(
    frame,
    [durationInFrames - 20, durationInFrames],
    [1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  )

  return (
    <AbsoluteFill style={{ opacity: globalOpacity, fontFamily: 'Georgia, serif' }}>
      <Background frame={frame} />
      <Particles frame={frame} />

      {/* Escena 1: Pregunta inicial (0–65) */}
      <Sequence from={0} durationInFrames={70}>
        <Scene1 frame={frame} />
      </Sequence>

      {/* Escena 2: Nombre de marca (70–155) */}
      <Sequence from={70} durationInFrames={85}>
        <Scene2 frame={frame - 70} />
      </Sequence>

      {/* Escena 3: Propuesta de valor (155–260) */}
      <Sequence from={155} durationInFrames={105}>
        <Scene3 frame={frame - 155} />
      </Sequence>

      {/* Escena 4: Ubicación (260–325) */}
      <Sequence from={260} durationInFrames={65}>
        <Scene4 frame={frame - 260} />
      </Sequence>

      {/* Escena 5: Teléfono + CTA (325–390) */}
      <Sequence from={325} durationInFrames={65}>
        <Scene5 frame={frame - 325} />
      </Sequence>

      {/* Audio de voz — Gabriela (ElevenLabs, español latinoamericano) */}
      <Audio src={staticFile('audio/blueberry-voice.mp3')} />
    </AbsoluteFill>
  )
}
