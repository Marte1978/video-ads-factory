// ── RestaurantTemplate.tsx ────────────────────────────────────────────────────
// Template para restaurantes
// 780 frames @ 30fps = 26 segundos
// Escenas: Hook → Marca → Features → Ubicación → Teléfono+CTA

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
import { RestaurantAdProps } from '../../shared/types'

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
// Frames 0-150 (5s) — hookText dramático con entrada explosiva

function SceneHook({
  frame,
  props,
}: {
  frame: number
  props: RestaurantAdProps
}) {
  // Entrada explosiva: empieza grande y se normaliza
  const scaleIn = interpolate(frame, [0, 20], [1.4, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })
  const opacity = fi(frame, 0, 18)
  const fadeOut = interpolate(frame, [125, 150], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })

  // Palabras divididas para animación por palabra
  const words = props.hookText.split(' ')

  return (
    <AbsoluteFill
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 80px',
        opacity: opacity * fadeOut,
        textAlign: 'center',
      }}
    >
      {/* Línea decorativa superior */}
      <div
        style={{
          width: interpolate(frame, [5, 35], [0, 200], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
          height: 3,
          background: `linear-gradient(90deg, transparent, ${props.colors.accent}, transparent)`,
          marginBottom: 36,
        }}
      />

      {/* Hook text — por palabras con delay */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0 20px',
          justifyContent: 'center',
          alignItems: 'center',
          transform: `scale(${scaleIn})`,
        }}
      >
        {words.map((word, i) => {
          const delay = i * 6
          const wOpacity = fi(frame, delay, 14)
          const wY = su(frame, delay, 40, 14)
          return (
            <span
              key={i}
              style={{
                fontSize: words.length > 4 ? 72 : 88,
                fontWeight: 900,
                color: i % 2 === 1 ? props.colors.accent : props.colors.text,
                opacity: wOpacity,
                transform: `translateY(${wY}px)`,
                display: 'inline-block',
                textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                lineHeight: 1.2,
              }}
            >
              {word}
            </span>
          )
        })}
      </div>

      {/* Línea decorativa inferior */}
      <div
        style={{
          marginTop: 36,
          width: interpolate(frame, [25, 55], [0, 200], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
          height: 3,
          background: `linear-gradient(90deg, transparent, ${props.colors.primary}, transparent)`,
        }}
      />
    </AbsoluteFill>
  )
}

// ── Escena 2: Nombre de marca ─────────────────────────────────────────────────
// Frames 150-330 (6s) — brandName enorme con gradiente, logo opcional, tagline

function SceneBrand({
  frame,
  props,
}: {
  frame: number
  props: RestaurantAdProps
}) {
  const logoOpacity = fi(frame, 0, 22)
  const logoScale = interpolate(frame, [0, 25], [0.5, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })
  const nameOpacity = fi(frame, 18, 22)
  const nameY = su(frame, 18, 45, 22)
  const taglineOpacity = fi(frame, 38, 20)
  const fadeOut = interpolate(frame, [155, 180], [1, 0], {
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
      {/* Logo (si existe) */}
      {props.logoFile && (
        <div
          style={{
            marginBottom: 36,
            opacity: logoOpacity,
            transform: `scale(${logoScale})`,
          }}
        >
          <Img
            src={staticFile(props.logoFile)}
            style={{
              width: 160,
              height: 160,
              objectFit: 'contain',
              borderRadius: 20,
              filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.5))',
            }}
          />
        </div>
      )}

      {/* Brand name en gradiente */}
      <div
        style={{
          fontSize: props.brandName.length > 12 ? 90 : 110,
          fontWeight: 900,
          background: `linear-gradient(135deg, ${props.colors.highlight}, ${props.colors.accent}, ${props.colors.primary})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          transform: `translateY(${nameY}px)`,
          opacity: nameOpacity,
          lineHeight: 1.05,
          marginBottom: 28,
          letterSpacing: '-2px',
          filter: `drop-shadow(0 4px 16px ${props.colors.primary}60)`,
        }}
      >
        {props.brandName}
      </div>

      {/* Separador decorativo */}
      <div
        style={{
          width: 120,
          height: 4,
          borderRadius: 2,
          background: `linear-gradient(90deg, ${props.colors.primary}, ${props.colors.accent})`,
          marginBottom: 28,
          opacity: taglineOpacity,
        }}
      />

      {/* Tagline */}
      <div
        style={{
          fontSize: 40,
          fontWeight: 600,
          color: props.colors.textMuted,
          opacity: taglineOpacity,
          letterSpacing: 3,
          textTransform: 'uppercase',
        }}
      >
        {props.tagline}
      </div>
    </AbsoluteFill>
  )
}

// ── Escena 3: Features ────────────────────────────────────────────────────────
// Frames 330-510 (6s) — features[] con íconos, cards animadas

function SceneFeatures({
  frame,
  props,
}: {
  frame: number
  props: RestaurantAdProps
}) {
  const titleOpacity = fi(frame, 0, 18)
  const titleY = su(frame, 0, 30, 18)
  const fadeOut = interpolate(frame, [155, 180], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })

  // Layout: 1-2 columnas según cantidad de features
  const cols = props.features.length > 3 ? 2 : 1

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
          fontSize: 48,
          fontWeight: 800,
          color: props.colors.text,
          marginBottom: 48,
          transform: `translateY(${titleY}px)`,
          opacity: titleOpacity,
          textAlign: 'center',
          textShadow: '0 2px 12px rgba(0,0,0,0.4)',
          letterSpacing: 2,
          textTransform: 'uppercase',
        }}
      >
        ¿Por qué elegirnos?
      </div>

      {/* Grid de features */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: cols === 2 ? '1fr 1fr' : '1fr',
          gap: 24,
          width: '100%',
          maxWidth: cols === 2 ? 900 : 700,
        }}
      >
        {props.features.map((feature, i) => {
          const delay = 14 + i * 10
          const cardOpacity = fi(frame, delay, 18)
          const cardY = su(frame, delay, 35, 18)

          return (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 24,
                background: `rgba(255,255,255,0.06)`,
                border: `1.5px solid ${props.colors.primary}40`,
                borderRadius: 20,
                padding: '26px 32px',
                opacity: cardOpacity,
                transform: `translateY(${cardY}px)`,
                boxShadow: `0 4px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)`,
              }}
            >
              <span style={{ fontSize: 48, flexShrink: 0 }}>{feature.icon}</span>
              <span
                style={{
                  fontSize: 34,
                  fontWeight: 700,
                  color: props.colors.text,
                  lineHeight: 1.3,
                }}
              >
                {feature.text}
              </span>
            </div>
          )
        })}
      </div>
    </AbsoluteFill>
  )
}

// ── Escena 4: Ubicación ───────────────────────────────────────────────────────
// Frames 510-630 (4s) — location + city con ícono 📍

function SceneLocation({
  frame,
  props,
}: {
  frame: number
  props: RestaurantAdProps
}) {
  const pinOpacity = fi(frame, 0, 20)
  const pinScale = interpolate(frame, [0, 22], [0.3, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })
  const locationOpacity = fi(frame, 18, 20)
  const locationY = su(frame, 18, 40, 20)
  const cityOpacity = fi(frame, 32, 18)
  const fadeOut = interpolate(frame, [100, 120], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })

  // Pulso del pin de ubicación
  const pinPulse = pulse(frame, 0.1, 1.12)

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
      {/* Pin de mapa pulsante */}
      <div
        style={{
          fontSize: 100,
          opacity: pinOpacity,
          transform: `scale(${pinScale * pinPulse})`,
          marginBottom: 32,
          filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.4))',
        }}
      >
        📍
      </div>

      {/* Dirección */}
      <div
        style={{
          fontSize: 52,
          fontWeight: 800,
          color: props.colors.text,
          transform: `translateY(${locationY}px)`,
          opacity: locationOpacity,
          marginBottom: 16,
          lineHeight: 1.3,
          textShadow: '0 2px 12px rgba(0,0,0,0.4)',
        }}
      >
        {props.location}
      </div>

      {/* Ciudad con acento de color */}
      <div
        style={{
          fontSize: 48,
          fontWeight: 700,
          color: props.colors.accent,
          opacity: cityOpacity,
          letterSpacing: 4,
          textTransform: 'uppercase',
        }}
      >
        {props.city}
      </div>
    </AbsoluteFill>
  )
}

// ── Escena 5: Teléfono + CTA ──────────────────────────────────────────────────
// Frames 630-780 (5s) — phone grande pulsante, ctaText, brandName

function SceneCTA({
  frame,
  props,
  durationInFrames,
}: {
  frame: number
  props: RestaurantAdProps
  durationInFrames: number
}) {
  const phoneOpacity = fi(frame, 0, 22)
  const phoneY = su(frame, 0, 50, 22)
  const ctaOpacity = fi(frame, 25, 20)
  const brandOpacity = fi(frame, 45, 18)

  // Pulso del teléfono
  const phonePulse = pulse(frame, 0.07, 1.05)

  // Fade-out final global
  const globalFade = interpolate(
    frame,
    [durationInFrames - 630 - 18, durationInFrames - 630],
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
      {/* Ícono teléfono */}
      <div
        style={{
          fontSize: 80,
          marginBottom: 20,
          opacity: phoneOpacity,
        }}
      >
        📞
      </div>

      {/* Número de teléfono grande pulsante */}
      <div
        style={{
          fontSize: 88,
          fontWeight: 900,
          background: `linear-gradient(135deg, ${props.colors.highlight}, ${props.colors.primary})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          transform: `translateY(${phoneY}px) scale(${phonePulse})`,
          opacity: phoneOpacity,
          marginBottom: 40,
          letterSpacing: 4,
          filter: `drop-shadow(0 4px 16px ${props.colors.primary}60)`,
        }}
      >
        {props.phone}
      </div>

      {/* Botón CTA */}
      <div
        style={{
          background: `linear-gradient(135deg, ${props.colors.cta}, ${props.colors.primary})`,
          color: props.colors.ctaText,
          fontSize: 46,
          fontWeight: 900,
          padding: '28px 72px',
          borderRadius: 18,
          opacity: ctaOpacity,
          boxShadow: `0 8px 36px ${props.colors.cta}60`,
          letterSpacing: 2,
          textTransform: 'uppercase',
          marginBottom: 40,
        }}
      >
        {props.ctaText}
      </div>

      {/* Brand name al cierre */}
      <div
        style={{
          fontSize: 36,
          fontWeight: 800,
          color: props.colors.textMuted,
          opacity: brandOpacity,
          letterSpacing: 3,
          textTransform: 'uppercase',
        }}
      >
        {props.brandName}
      </div>
    </AbsoluteFill>
  )
}

// ── Componente principal ──────────────────────────────────────────────────────

export function RestaurantTemplate(props: RestaurantAdProps) {
  const frame = useCurrentFrame()
  const { durationInFrames } = useVideoConfig()

  const orbColors = [
    `${props.colors.primary}50`,
    `${props.colors.accent}40`,
    `${props.colors.highlight}30`,
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

      {/* ── Escena 2: Marca (150-330) ── */}
      <Sequence from={150} durationInFrames={180}>
        <SceneBrand frame={frame - 150} props={props} />
      </Sequence>

      {/* ── Escena 3: Features (330-510) ── */}
      <Sequence from={330} durationInFrames={180}>
        <SceneFeatures frame={frame - 330} props={props} />
      </Sequence>

      {/* ── Escena 4: Ubicación (510-630) ── */}
      <Sequence from={510} durationInFrames={120}>
        <SceneLocation frame={frame - 510} props={props} />
      </Sequence>

      {/* ── Escena 5: Teléfono + CTA (630-780) ── */}
      <Sequence from={630} durationInFrames={150}>
        <SceneCTA
          frame={frame - 630}
          props={props}
          durationInFrames={durationInFrames}
        />
      </Sequence>
    </AbsoluteFill>
  )
}
