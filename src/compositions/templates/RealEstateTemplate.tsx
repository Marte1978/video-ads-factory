// ── RealEstateTemplate.tsx ────────────────────────────────────────────────────
// Template para inmobiliaria
// 900 frames @ 30fps = 30 segundos
// Escenas: Hook → Agente → Propiedades → Contacto → CTA

import React from 'react'
import {
  AbsoluteFill,
  Audio,
  Img,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  staticFile,
} from 'remotion'
import { DynamicBackground, AnimatedOrbs } from '../../shared/DynamicBackground'
import { RealEstateAdProps } from '../../shared/types'

// ── Helpers de animación ──────────────────────────────────────────────────────

function fi(frame: number, from: number, dur = 22): number {
  return interpolate(frame, [from, from + dur], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })
}

function su(frame: number, from: number, dist = 45, dur = 25): number {
  return dist * (1 - interpolate(frame, [from, from + dur], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  }))
}

function pulse(frame: number, speed = 0.08, maxScale = 1.06): number {
  return 1 + (maxScale - 1) * 0.5 * (1 + Math.sin(frame * speed))
}

// ── Escena 1: Hook ────────────────────────────────────────────────────────────
// Frames 0-150 (5s) — hookText con tipografía premium

function SceneHook({
  frame,
  props,
}: {
  frame: number
  props: RealEstateAdProps
}) {
  const opacity = fi(frame, 0, 20)
  const fadeOut = interpolate(frame, [125, 150], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })

  // Línea superior que se expande
  const lineWidth = interpolate(frame, [5, 40], [0, 500], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })

  const textY = su(frame, 12, 50, 28)
  const textOpacity = fi(frame, 12, 22)

  // Punto decorativo dorado
  const dotScale = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })

  return (
    <AbsoluteFill
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 100px',
        opacity: opacity * fadeOut,
        textAlign: 'center',
      }}
    >
      {/* Línea dorada superior */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          marginBottom: 40,
        }}
      >
        <div
          style={{
            width: lineWidth / 2,
            height: 2,
            background: `linear-gradient(90deg, transparent, ${props.colors.highlight})`,
          }}
        />
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: '50%',
            background: props.colors.highlight,
            transform: `scale(${dotScale})`,
            boxShadow: `0 0 16px ${props.colors.highlight}`,
            flexShrink: 0,
          }}
        />
        <div
          style={{
            width: lineWidth / 2,
            height: 2,
            background: `linear-gradient(90deg, ${props.colors.highlight}, transparent)`,
          }}
        />
      </div>

      {/* Hook text premium */}
      <div
        style={{
          fontSize: 78,
          fontWeight: 900,
          color: props.colors.text,
          transform: `translateY(${textY}px)`,
          opacity: textOpacity,
          lineHeight: 1.2,
          textShadow: `0 4px 24px rgba(0,0,0,0.5)`,
          letterSpacing: '-1px',
          maxWidth: 900,
        }}
      >
        {props.hookText}
      </div>

      {/* Línea dorada inferior */}
      <div
        style={{
          marginTop: 40,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          opacity: textOpacity,
        }}
      >
        <div
          style={{
            width: lineWidth / 2,
            height: 2,
            background: `linear-gradient(90deg, transparent, ${props.colors.accent})`,
          }}
        />
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: props.colors.accent,
            flexShrink: 0,
          }}
        />
        <div
          style={{
            width: lineWidth / 2,
            height: 2,
            background: `linear-gradient(90deg, ${props.colors.accent}, transparent)`,
          }}
        />
      </div>
    </AbsoluteFill>
  )
}

// ── Escena 2: Agente ──────────────────────────────────────────────────────────
// Frames 150-300 (5s) — agentName + company con gradiente dorado

function SceneAgent({
  frame,
  props,
}: {
  frame: number
  props: RealEstateAdProps
}) {
  const labelOpacity = fi(frame, 0, 18)
  const nameOpacity = fi(frame, 15, 22)
  const nameY = su(frame, 15, 45, 22)
  const companyOpacity = fi(frame, 32, 20)
  const companyY = su(frame, 32, 35, 20)
  const taglineOpacity = fi(frame, 48, 18)
  const fadeOut = interpolate(frame, [125, 150], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })

  return (
    <AbsoluteFill
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 80px',
        opacity: fadeOut,
        textAlign: 'center',
        gap: 0,
      }}
    >
      {/* Etiqueta "Tu Asesor" */}
      <div
        style={{
          fontSize: 28,
          fontWeight: 600,
          color: props.colors.textMuted,
          letterSpacing: 6,
          textTransform: 'uppercase',
          marginBottom: 24,
          opacity: labelOpacity,
        }}
      >
        Tu Asesor de Confianza
      </div>

      {/* Nombre del agente — gradiente dorado */}
      <div
        style={{
          fontSize: 96,
          fontWeight: 900,
          background: `linear-gradient(135deg, #FFD700, ${props.colors.highlight}, #FFA500)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          transform: `translateY(${nameY}px)`,
          opacity: nameOpacity,
          lineHeight: 1.05,
          marginBottom: 12,
          letterSpacing: '-2px',
          filter: `drop-shadow(0 4px 20px ${props.colors.highlight}60)`,
        }}
      >
        {props.agentName}
      </div>

      {/* Separador elegante */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          marginBottom: 24,
          opacity: companyOpacity,
        }}
      >
        <div style={{ width: 60, height: 1, background: props.colors.highlight }} />
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: props.colors.highlight,
            transform: `rotate(45deg)`,
          }}
        />
        <div style={{ width: 60, height: 1, background: props.colors.highlight }} />
      </div>

      {/* Empresa */}
      <div
        style={{
          fontSize: 52,
          fontWeight: 700,
          color: props.colors.text,
          transform: `translateY(${companyY}px)`,
          opacity: companyOpacity,
          marginBottom: 24,
          letterSpacing: 2,
        }}
      >
        {props.company}
      </div>

      {/* Tagline */}
      <div
        style={{
          fontSize: 34,
          fontWeight: 500,
          color: props.colors.textMuted,
          opacity: taglineOpacity,
          letterSpacing: 1,
          fontStyle: 'italic',
        }}
      >
        {props.tagline}
      </div>
    </AbsoluteFill>
  )
}

// ── Escena 3: Propiedades ─────────────────────────────────────────────────────
// Frames 300-600 (10s) — properties[] con tipo, ubicación, precio (cards doradas)

function SceneProperties({
  frame,
  props,
}: {
  frame: number
  props: RealEstateAdProps
}) {
  const titleOpacity = fi(frame, 0, 18)
  const titleY = su(frame, 0, 30, 18)
  const fadeOut = interpolate(frame, [265, 300], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })

  // Layout: 1-2 columnas según cantidad
  const cols = props.properties.length > 2 ? 2 : 1
  const cardSize = props.properties.length > 4 ? 'compact' : 'normal'

  return (
    <AbsoluteFill
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 80px',
        opacity: fadeOut,
        gap: 0,
      }}
    >
      {/* Título */}
      <div
        style={{
          fontSize: 46,
          fontWeight: 800,
          color: props.colors.text,
          marginBottom: 44,
          transform: `translateY(${titleY}px)`,
          opacity: titleOpacity,
          textAlign: 'center',
          textShadow: '0 2px 12px rgba(0,0,0,0.4)',
          letterSpacing: 3,
          textTransform: 'uppercase',
        }}
      >
        Propiedades Disponibles
      </div>

      {/* Grid de propiedades */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: cols === 2 ? '1fr 1fr' : '1fr',
          gap: 24,
          width: '100%',
          maxWidth: cols === 2 ? 980 : 700,
        }}
      >
        {props.properties.map((property, i) => {
          // Stagger de entrada: cada card aparece con delay
          const staggerDelay = 12 + i * 14
          const cardOpacity = fi(frame, staggerDelay, 20)
          const cardY = su(frame, staggerDelay, 40, 20)

          const padding = cardSize === 'compact' ? '22px 28px' : '28px 36px'

          return (
            <div
              key={i}
              style={{
                background: `linear-gradient(135deg, rgba(255,215,0,0.08), rgba(255,165,0,0.04))`,
                border: `1.5px solid ${props.colors.highlight}50`,
                borderRadius: 20,
                padding: padding,
                opacity: cardOpacity,
                transform: `translateY(${cardY}px)`,
                boxShadow: `0 6px 24px rgba(0,0,0,0.3), inset 0 1px 0 ${props.colors.highlight}20`,
              }}
            >
              {/* Ícono + Tipo de propiedad */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  marginBottom: 14,
                }}
              >
                <span style={{ fontSize: cardSize === 'compact' ? 36 : 44 }}>
                  {property.icon}
                </span>
                <span
                  style={{
                    fontSize: cardSize === 'compact' ? 28 : 32,
                    fontWeight: 800,
                    color: props.colors.text,
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                  }}
                >
                  {property.type}
                </span>
              </div>

              {/* Separador dorado */}
              <div
                style={{
                  width: '100%',
                  height: 1,
                  background: `linear-gradient(90deg, ${props.colors.highlight}60, transparent)`,
                  marginBottom: 14,
                }}
              />

              {/* Ubicación */}
              <div
                style={{
                  fontSize: cardSize === 'compact' ? 26 : 30,
                  fontWeight: 600,
                  color: props.colors.textMuted,
                  marginBottom: 14,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <span style={{ fontSize: 22 }}>📍</span>
                {property.location}
              </div>

              {/* Precio en dorado */}
              <div
                style={{
                  fontSize: cardSize === 'compact' ? 36 : 44,
                  fontWeight: 900,
                  background: `linear-gradient(135deg, #FFD700, #FFA500)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: `drop-shadow(0 2px 8px ${props.colors.highlight}50)`,
                }}
              >
                {property.price}
              </div>
            </div>
          )
        })}
      </div>
    </AbsoluteFill>
  )
}

// ── Escena 4: Contacto ────────────────────────────────────────────────────────
// Frames 600-750 (5s) — phone + website con íconos

function SceneContact({
  frame,
  props,
}: {
  frame: number
  props: RealEstateAdProps
}) {
  const phoneOpacity = fi(frame, 0, 22)
  const phoneY = su(frame, 0, 45, 22)
  const websiteOpacity = fi(frame, 25, 20)
  const websiteY = su(frame, 25, 35, 20)
  const fadeOut = interpolate(frame, [125, 150], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })

  const phonePulse = pulse(frame, 0.07, 1.04)

  return (
    <AbsoluteFill
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 80px',
        opacity: fadeOut,
        textAlign: 'center',
        gap: 0,
      }}
    >
      {/* Etiqueta contacto */}
      <div
        style={{
          fontSize: 30,
          fontWeight: 600,
          color: props.colors.textMuted,
          letterSpacing: 6,
          textTransform: 'uppercase',
          marginBottom: 28,
          opacity: phoneOpacity,
        }}
      >
        Contáctanos
      </div>

      {/* Teléfono */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 24,
          marginBottom: props.website ? 36 : 0,
          opacity: phoneOpacity,
          transform: `translateY(${phoneY}px) scale(${phonePulse})`,
        }}
      >
        <span style={{ fontSize: 64 }}>📞</span>
        <span
          style={{
            fontSize: 80,
            fontWeight: 900,
            background: `linear-gradient(135deg, #FFD700, ${props.colors.highlight})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: 3,
            filter: `drop-shadow(0 4px 16px ${props.colors.highlight}60)`,
          }}
        >
          {props.phone}
        </span>
      </div>

      {/* Website (opcional) */}
      {props.website && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            opacity: websiteOpacity,
            transform: `translateY(${websiteY}px)`,
          }}
        >
          <span style={{ fontSize: 48 }}>🌐</span>
          <span
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: props.colors.accent,
              letterSpacing: 1,
            }}
          >
            {props.website}
          </span>
        </div>
      )}
    </AbsoluteFill>
  )
}

// ── Escena 5: CTA ─────────────────────────────────────────────────────────────
// Frames 750-900 (5s) — ctaText + tagline final con branding premium

function SceneCTA({
  frame,
  props,
  durationInFrames,
}: {
  frame: number
  props: RealEstateAdProps
  durationInFrames: number
}) {
  const ctaOpacity = fi(frame, 0, 22)
  const ctaY = su(frame, 0, 50, 22)
  const taglineOpacity = fi(frame, 25, 20)
  const brandOpacity = fi(frame, 42, 18)

  const ctaScale = pulse(frame, 0.08, 1.06)

  // Fade-out final global
  const globalFade = interpolate(
    frame,
    [durationInFrames - 750 - 18, durationInFrames - 750],
    [1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  )

  return (
    <AbsoluteFill
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 80px',
        opacity: globalFade,
        textAlign: 'center',
        gap: 0,
      }}
    >
      {/* Botón CTA premium */}
      <div
        style={{
          background: `linear-gradient(135deg, ${props.colors.cta}, ${props.colors.primary})`,
          color: props.colors.ctaText,
          fontSize: 54,
          fontWeight: 900,
          padding: '32px 80px',
          borderRadius: 18,
          transform: `translateY(${ctaY}px) scale(${ctaScale})`,
          opacity: ctaOpacity,
          boxShadow: `
            0 8px 40px ${props.colors.cta}50,
            0 0 60px ${props.colors.cta}25,
            inset 0 1px 0 rgba(255,255,255,0.2)
          `,
          letterSpacing: 2,
          textTransform: 'uppercase',
          marginBottom: 44,
        }}
      >
        {props.ctaText}
      </div>

      {/* Tagline */}
      <div
        style={{
          fontSize: 36,
          fontWeight: 600,
          color: props.colors.textMuted,
          opacity: taglineOpacity,
          letterSpacing: 2,
          marginBottom: 48,
          fontStyle: 'italic',
        }}
      >
        {props.tagline}
      </div>

      {/* Separador dorado */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          marginBottom: 28,
          opacity: brandOpacity,
        }}
      >
        <div
          style={{
            width: 80,
            height: 1,
            background: `linear-gradient(90deg, transparent, ${props.colors.highlight})`,
          }}
        />
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: props.colors.highlight,
            boxShadow: `0 0 12px ${props.colors.highlight}`,
            transform: 'rotate(45deg)',
          }}
        />
        <div
          style={{
            width: 80,
            height: 1,
            background: `linear-gradient(90deg, ${props.colors.highlight}, transparent)`,
          }}
        />
      </div>

      {/* Agente + Empresa final */}
      <div
        style={{
          opacity: brandOpacity,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: 44,
            fontWeight: 900,
            background: `linear-gradient(135deg, #FFD700, ${props.colors.highlight})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: 8,
          }}
        >
          {props.agentName}
        </div>
        <div
          style={{
            fontSize: 30,
            fontWeight: 600,
            color: props.colors.textMuted,
            letterSpacing: 3,
            textTransform: 'uppercase',
          }}
        >
          {props.company}
        </div>
      </div>
    </AbsoluteFill>
  )
}

// ── Componente principal ──────────────────────────────────────────────────────

export function RealEstateTemplate(props: RealEstateAdProps) {
  const frame = useCurrentFrame()
  const { durationInFrames } = useVideoConfig()

  const orbColors = [
    `${props.colors.highlight}40`,
    `${props.colors.accent}35`,
    `${props.colors.primary}30`,
    `#FFD70025`,
  ]

  return (
    <AbsoluteFill>
      {/* Fondo dinámico */}
      <DynamicBackground config={props.background} frame={frame} />

      {/* Orbes decorativos */}
      <AnimatedOrbs frame={frame} colors={orbColors} />

      {/* Audio */}
      <Audio src={staticFile(props.audioFile)} />

      {/* ── Escena 1: Hook (0-150) ── */}
      <Sequence from={0} durationInFrames={150}>
        <SceneHook frame={frame} props={props} />
      </Sequence>

      {/* ── Escena 2: Agente (150-300) ── */}
      <Sequence from={150} durationInFrames={150}>
        <SceneAgent frame={frame - 150} props={props} />
      </Sequence>

      {/* ── Escena 3: Propiedades (300-600) ── */}
      <Sequence from={300} durationInFrames={300}>
        <SceneProperties frame={frame - 300} props={props} />
      </Sequence>

      {/* ── Escena 4: Contacto (600-750) ── */}
      <Sequence from={600} durationInFrames={150}>
        <SceneContact frame={frame - 600} props={props} />
      </Sequence>

      {/* ── Escena 5: CTA (750-900) ── */}
      <Sequence from={750} durationInFrames={150}>
        <SceneCTA
          frame={frame - 750}
          props={props}
          durationInFrames={durationInFrames}
        />
      </Sequence>
    </AbsoluteFill>
  )
}
