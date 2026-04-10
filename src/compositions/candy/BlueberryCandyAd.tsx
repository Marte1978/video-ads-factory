import {
  AbsoluteFill,
  Audio,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  staticFile,
  spring,
} from 'remotion'
import React from 'react'

// ── Paleta de colores Blueberry Candy (de blueberry.webfactoryrd.com) ─────
const C = {
  bg:       '#0F0520',   // morado muy oscuro
  bg2:      '#1A0A35',   // morado oscuro secundario
  purple:   '#6B21A8',   // violeta principal
  violet:   '#8B5CF6',   // violeta claro
  indigo:   '#4F46E5',   // índigo acento
  green:    '#22C55E',   // verde CTA / verificado
  greenDark:'#15803D',
  white:    '#FFFFFF',
  cream:    '#F5F0FF',   // blanco cremoso con tinte morado
  gray:     '#A78BFA',   // gris-violeta
  gold:     '#FBBF24',   // dorado precio
  red:      '#EF4444',   // urgencia / ✗
  berry:    '#C084FC',   // color arándano
}

// ── Helpers ───────────────────────────────────────────────────────────────
function fi(frame: number, from: number, dur = 18) {
  return interpolate(frame, [from, from + dur], [0, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  })
}
function su(frame: number, from: number, dist = 35, dur = 22) {
  return dist * (1 - interpolate(frame, [from, from + dur], [0, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  }))
}

// ── Fondo animado ─────────────────────────────────────────────────────────
function Background({ frame }: { frame: number }) {
  const shift = interpolate(frame, [0, 540], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
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

// ── Partículas flotantes ──────────────────────────────────────────────────
function Orbs({ frame }: { frame: number }) {
  const orbs = [
    { x: 80,  y: 200, r: 60,  color: C.violet,  speed: 0.4 },
    { x: 900, y: 400, r: 80,  color: C.purple,  speed: 0.3 },
    { x: 200, y: 900, r: 50,  color: C.indigo,  speed: 0.5 },
    { x: 800, y: 1200,r: 70,  color: C.berry,   speed: 0.35 },
    { x: 540, y: 1700,r: 90,  color: C.violet,  speed: 0.25 },
  ]
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      {orbs.map((o, i) => {
        const yOff = Math.sin((frame * o.speed + i * 40) * 0.04) * 20
        return (
          <div key={i} style={{
            position: 'absolute',
            left: o.x - o.r,
            top: o.y - o.r + yOff,
            width: o.r * 2,
            height: o.r * 2,
            borderRadius: '50%',
            background: o.color,
            opacity: 0.12,
            filter: `blur(${o.r * 0.7}px)`,
          }} />
        )
      })}
    </AbsoluteFill>
  )
}

// ── Escena 1: Hook — ¿Tus ojos están fallando? (0-90 frames = 3s) ────────
function Scene1({ frame }: { frame: number }) {
  const f1 = fi(frame, 5)
  const f2 = fi(frame, 22)
  const f3 = fi(frame, 40)
  return (
    <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center', padding: '0 70px' }}>
      <div style={{ textAlign: 'center' }}>
        {/* Icono ojo */}
        <div style={{ opacity: f1, fontSize: 90, marginBottom: 24 }}>👁️</div>

        {/* Pregunta principal */}
        <div style={{
          opacity: f2,
          transform: `translateY(${su(frame, 22)}px)`,
          fontSize: 52,
          fontWeight: 900,
          color: C.white,
          lineHeight: 1.15,
          fontFamily: 'Georgia, serif',
          textShadow: `0 0 40px ${C.violet}`,
        }}>
          ¿Tus ojos están
        </div>
        <div style={{
          opacity: f2,
          fontSize: 58,
          fontWeight: 900,
          background: `linear-gradient(135deg, ${C.berry}, ${C.violet})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: 'Georgia, serif',
          lineHeight: 1.1,
        }}>
          fallando...
        </div>

        {/* Subtexto */}
        <div style={{
          opacity: f3,
          marginTop: 20,
          fontSize: 30,
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

// ── Escena 2: Síntomas (90-195 = 3.5s) ───────────────────────────────────
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
          opacity: fi(frame, 5),
          textAlign: 'center',
          fontSize: 32,
          color: C.gray,
          fontFamily: 'Georgia, serif',
          marginBottom: 40,
          fontStyle: 'italic',
        }}>
          Son señales. No las ignores.
        </div>
        {symptoms.map((s, i) => {
          const delay = i * 18
          return (
            <div key={i} style={{
              opacity: fi(frame, 20 + delay),
              transform: `translateY(${su(frame, 20 + delay, 30)}px)`,
              display: 'flex',
              alignItems: 'center',
              gap: 22,
              marginBottom: 24,
              background: 'rgba(239,68,68,0.12)',
              border: '1px solid rgba(239,68,68,0.30)',
              borderRadius: 18,
              padding: '22px 30px',
            }}>
              <span style={{ fontSize: 44 }}>{s.icon}</span>
              <div>
                <div style={{ fontSize: 16, color: C.red, fontWeight: 700, marginBottom: 2 }}>✗</div>
                <div style={{ fontSize: 30, fontWeight: 700, color: C.white, fontFamily: 'Georgia, serif' }}>
                  {s.text}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </AbsoluteFill>
  )
}

// ── Escena 3: Solución — Blueberry Candy (195-315 = 4s) ──────────────────
function Scene3({ frame }: { frame: number }) {
  const ingredients = ['Arándano', 'Luteína', 'Zeaxantina', 'Vitamina A']
  const scale = interpolate(frame, [5, 35], [0.75, 1], {
    extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  })
  return (
    <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center', padding: '0 65px' }}>
      <div style={{ width: '100%', textAlign: 'center' }}>
        {/* Badge natural */}
        <div style={{
          opacity: fi(frame, 5),
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: `rgba(34,197,94,0.15)`,
          border: `1.5px solid ${C.green}`,
          borderRadius: 999,
          padding: '8px 22px',
          marginBottom: 28,
        }}>
          <span style={{ fontSize: 18, color: C.green }}>✓</span>
          <span style={{ fontSize: 18, fontWeight: 700, color: C.green }}>100% Natural</span>
        </div>

        {/* Nombre del producto */}
        <div style={{
          opacity: fi(frame, 10),
          transform: `scale(${scale})`,
          fontSize: 72,
          fontWeight: 900,
          background: `linear-gradient(135deg, ${C.berry} 0%, ${C.violet} 50%, ${C.indigo} 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: 'Georgia, serif',
          lineHeight: 1,
          filter: `drop-shadow(0 0 25px ${C.violet}60)`,
        }}>
          Blueberry Candy
        </div>

        {/* Descripción */}
        <div style={{
          opacity: fi(frame, 30),
          marginTop: 18,
          fontSize: 24,
          color: C.cream,
          fontFamily: 'Georgia, serif',
          lineHeight: 1.5,
        }}>
          Protege y repara tu visión
        </div>
        <div style={{
          opacity: fi(frame, 35),
          fontSize: 22,
          color: C.gray,
          fontFamily: 'Georgia, serif',
          marginBottom: 32,
        }}>
          desde adentro
        </div>

        {/* Ingredientes chips */}
        <div style={{
          opacity: fi(frame, 50),
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          justifyContent: 'center',
        }}>
          {ingredients.map((ing, i) => (
            <div key={i} style={{
              background: `rgba(139,92,246,0.18)`,
              border: `1px solid rgba(139,92,246,0.40)`,
              borderRadius: 999,
              padding: '10px 20px',
              fontSize: 20,
              color: C.berry,
              fontWeight: 600,
            }}>
              🫐 {ing}
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  )
}

// ── Escena 4: Oferta 2x1 (315-435 = 4s) ──────────────────────────────────
function Scene4({ frame }: { frame: number }) {
  const pulse = 1 + Math.sin(frame * 0.18) * 0.025
  return (
    <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center', padding: '0 55px' }}>
      <div style={{ width: '100%', textAlign: 'center' }}>
        {/* OFERTA badge */}
        <div style={{
          opacity: fi(frame, 5),
          transform: `scale(${pulse})`,
          display: 'inline-block',
          background: `linear-gradient(135deg, #DC2626, #EF4444)`,
          borderRadius: 14,
          padding: '10px 32px',
          fontSize: 32,
          fontWeight: 900,
          color: C.white,
          letterSpacing: 3,
          boxShadow: '0 0 30px rgba(239,68,68,0.5)',
          marginBottom: 24,
        }}>
          ¡OFERTA!
        </div>

        {/* 2 x 1 */}
        <div style={{
          opacity: fi(frame, 15),
          transform: `translateY(${su(frame, 15, 30)}px)`,
          fontSize: 44,
          fontWeight: 900,
          color: C.white,
          fontFamily: 'Georgia, serif',
          marginBottom: 8,
        }}>
          Llévate <span style={{ color: C.gold }}>2 frascos</span>
        </div>
        <div style={{
          opacity: fi(frame, 20),
          fontSize: 34,
          color: C.cream,
          fontFamily: 'Georgia, serif',
          marginBottom: 30,
        }}>
          por el precio de 1
        </div>

        {/* Precio */}
        <div style={{
          opacity: fi(frame, 30),
          background: `linear-gradient(135deg, ${C.purple}, ${C.violet})`,
          borderRadius: 20,
          padding: '28px 40px',
          boxShadow: `0 0 50px ${C.violet}40`,
          marginBottom: 28,
        }}>
          <div style={{
            fontSize: 70,
            fontWeight: 900,
            color: C.gold,
            fontFamily: 'Georgia, serif',
            lineHeight: 1,
          }}>
            RD$1,990
          </div>
          <div style={{
            fontSize: 24,
            color: C.cream,
            marginTop: 6,
          }}>
            Solo <strong>RD$33</strong> al día
          </div>
        </div>

        {/* Beneficios entrega */}
        <div style={{ opacity: fi(frame, 45), display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap' }}>
          {['🚚 Envío Gratis', '💵 Pagas al Recibir', '📦 3 días'].map((b, i) => (
            <div key={i} style={{
              background: 'rgba(34,197,94,0.12)',
              border: `1px solid rgba(34,197,94,0.35)`,
              borderRadius: 12,
              padding: '10px 18px',
              fontSize: 19,
              color: C.green,
              fontWeight: 600,
            }}>{b}</div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  )
}

// ── Escena 5: Urgencia + CTA WhatsApp (435-540 = 3.5s) ────────────────────
function Scene5({ frame }: { frame: number }) {
  const blink = Math.sin(frame * 0.25) > 0
  const scaleBtn = 1 + Math.sin(frame * 0.15) * 0.03

  return (
    <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center', padding: '0 65px' }}>
      <div style={{ width: '100%', textAlign: 'center' }}>
        {/* Unidades restantes */}
        <div style={{ opacity: fi(frame, 5) }}>
          <div style={{ fontSize: 22, color: C.gray, marginBottom: 12 }}>⏰ Precio especial</div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 16,
            background: 'rgba(239,68,68,0.15)',
            border: '1.5px solid rgba(239,68,68,0.40)',
            borderRadius: 16,
            padding: '16px 32px',
            marginBottom: 32,
          }}>
            <span style={{
              width: 14, height: 14,
              borderRadius: '50%',
              background: blink ? C.red : 'transparent',
              border: `2px solid ${C.red}`,
              display: 'inline-block',
              boxShadow: blink ? `0 0 8px ${C.red}` : 'none',
              transition: 'all 0.1s',
            }} />
            <span style={{ fontSize: 30, fontWeight: 800, color: C.white }}>
              Solo quedan <span style={{ color: C.red }}>14 unidades</span>
            </span>
          </div>
        </div>

        {/* Social proof */}
        <div style={{
          opacity: fi(frame, 20),
          fontSize: 22,
          color: C.gray,
          marginBottom: 36,
        }}>
          ✓ Más de <strong style={{ color: C.white }}>2,500</strong> pedidos entregados en RD
        </div>

        {/* Botón WhatsApp */}
        <div style={{
          opacity: fi(frame, 30),
          transform: `scale(${scaleBtn})`,
          background: `linear-gradient(135deg, #16A34A, #22C55E)`,
          borderRadius: 22,
          padding: '30px 48px',
          boxShadow: `0 0 50px rgba(34,197,94,0.45)`,
          cursor: 'pointer',
        }}>
          <div style={{ fontSize: 38, fontWeight: 900, color: C.white, lineHeight: 1.1 }}>
            📲 PEDIR LOS 2 FRASCOS
          </div>
          <div style={{ fontSize: 22, color: 'rgba(255,255,255,0.85)', marginTop: 8 }}>
            Envío Gratis — Escríbenos por WhatsApp
          </div>
        </div>

        {/* Logo final */}
        <div style={{
          opacity: fi(frame, 55),
          marginTop: 36,
          fontSize: 32,
          fontWeight: 900,
          background: `linear-gradient(135deg, ${C.berry}, ${C.violet})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: 'Georgia, serif',
        }}>
          Blueberry Candy
        </div>
        <div style={{
          opacity: fi(frame, 60),
          fontSize: 18,
          color: C.gray,
          fontStyle: 'italic',
        }}>
          Salud Visual · 100% Natural
        </div>
      </div>
    </AbsoluteFill>
  )
}

// ── Composición principal ─────────────────────────────────────────────────
export const BlueberryCandyAd: React.FC = () => {
  const frame = useCurrentFrame()
  const { durationInFrames } = useVideoConfig()

  const globalOpacity = interpolate(
    frame,
    [durationInFrames - 15, durationInFrames],
    [1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  )

  return (
    <AbsoluteFill style={{ opacity: globalOpacity, fontFamily: 'system-ui, sans-serif' }}>
      <Background frame={frame} />
      <Orbs frame={frame} />

      {/* Escena 1 — Hook: ¿Tus ojos están fallando? (0–90) */}
      <Sequence from={0} durationInFrames={95}>
        <Scene1 frame={frame} />
      </Sequence>

      {/* Escena 2 — Síntomas (90–195) */}
      <Sequence from={90} durationInFrames={110}>
        <Scene2 frame={frame - 90} />
      </Sequence>

      {/* Escena 3 — Solución: Blueberry Candy (195–315) */}
      <Sequence from={195} durationInFrames={125}>
        <Scene3 frame={frame - 195} />
      </Sequence>

      {/* Escena 4 — Oferta 2x1 (315–435) */}
      <Sequence from={315} durationInFrames={125}>
        <Scene4 frame={frame - 315} />
      </Sequence>

      {/* Escena 5 — Urgencia + CTA WhatsApp (435–540) */}
      <Sequence from={435} durationInFrames={105}>
        <Scene5 frame={frame - 435} />
      </Sequence>

      {/* Audio — Gabriela (ElevenLabs, español latam) */}
      <Audio src={staticFile('audio/candy-voice.mp3')} />
    </AbsoluteFill>
  )
}
