// ── HealthTemplate.tsx ────────────────────────────────────────────────────────
// Template para suplementos / salud
// 1080 frames @ 30fps = 36 segundos
// Escenas: Hook → Síntomas → Solución → Oferta → CTA

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
import { HealthAdProps } from '../../shared/types'

// ── Helpers de animación ──────────────────────────────────────────────────────

/** Fade-in: 0→1 durante `dur` frames empezando en `from` */
function fi(frame: number, from: number, dur = 22): number {
  return interpolate(frame, [from, from + dur], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })
}

/** Slide-up: baja `dist`px al empezar, sube hasta 0 */
function su(frame: number, from: number, dist = 45, dur = 25): number {
  return dist * (1 - interpolate(frame, [from, from + dur], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  }))
}

/** Pulso: oscila entre 1 y `maxScale` con una frecuencia dada */
function pulse(frame: number, speed = 0.08, maxScale = 1.06): number {
  return 1 + (maxScale - 1) * 0.5 * (1 + Math.sin(frame * speed))
}

// ── Escena 1: Hook ────────────────────────────────────────────────────────────
// Frames 0-210 (7s) — hookEmoji grande + hookQuestion dramático

function SceneHook({
  frame,
  props,
}: {
  frame: number
  props: HealthAdProps
}) {
  const opacity = fi(frame, 0, 25)
  const emojiScale = interpolate(frame, [0, 30], [0.3, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })
  const emojiY = su(frame, 0, 60, 30)
  const textY = su(frame, 15, 45, 25)
  const textOpacity = fi(frame, 15, 22)

  // Fade-out al final de la escena
  const fadeOut = interpolate(frame, [185, 210], [1, 0], {
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
        opacity: opacity * fadeOut,
        padding: '0 80px',
        textAlign: 'center',
      }}
    >
      {/* Emoji grande */}
      <div
        style={{
          fontSize: 160,
          transform: `translateY(${emojiY}px) scale(${emojiScale})`,
          marginBottom: 40,
          filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.5))',
        }}
      >
        {props.hookEmoji}
      </div>

      {/* Pregunta dramática */}
      <div
        style={{
          fontSize: 72,
          fontWeight: 900,
          color: props.colors.text,
          transform: `translateY(${textY}px)`,
          opacity: textOpacity,
          lineHeight: 1.15,
          textShadow: `0 4px 24px rgba(0,0,0,0.6)`,
          letterSpacing: '-1px',
        }}
      >
        {props.hookQuestion}
      </div>

      {/* Línea decorativa */}
      <div
        style={{
          marginTop: 40,
          width: interpolate(frame, [30, 60], [0, 300], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
          height: 4,
          borderRadius: 2,
          background: `linear-gradient(90deg, ${props.colors.primary}, ${props.colors.accent})`,
          opacity: textOpacity,
        }}
      />
    </AbsoluteFill>
  )
}

// ── Escena 2: Síntomas ────────────────────────────────────────────────────────
// Frames 210-420 (7s) — lista symptoms[] con íconos y cards con borde rojo suave

function SceneSymptoms({
  frame,
  props,
}: {
  frame: number
  props: HealthAdProps
}) {
  const titleOpacity = fi(frame, 0, 20)
  const titleY = su(frame, 0, 35, 20)
  const fadeOut = interpolate(frame, [195, 210], [1, 0], {
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
      }}
    >
      {/* Título de sección */}
      <div
        style={{
          fontSize: 52,
          fontWeight: 800,
          color: props.colors.text,
          marginBottom: 50,
          transform: `translateY(${titleY}px)`,
          opacity: titleOpacity,
          textAlign: 'center',
          textShadow: '0 2px 12px rgba(0,0,0,0.5)',
        }}
      >
        ¿Sufres de esto?
      </div>

      {/* Cards de síntomas */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
          width: '100%',
          maxWidth: 800,
        }}
      >
        {props.symptoms.map((symptom, i) => {
          const delay = 10 + i * 12
          const cardOpacity = fi(frame, delay, 18)
          const cardX = interpolate(frame, [delay, delay + 22], [-60, 0], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          })

          return (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 28,
                background: `rgba(255, 80, 80, 0.08)`,
                border: `2px solid rgba(255, 100, 100, 0.35)`,
                borderRadius: 20,
                padding: '28px 36px',
                opacity: cardOpacity,
                transform: `translateX(${cardX}px)`,
                boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
              }}
            >
              <span style={{ fontSize: 52, flexShrink: 0 }}>{symptom.icon}</span>
              <span
                style={{
                  fontSize: 38,
                  fontWeight: 700,
                  color: props.colors.text,
                  lineHeight: 1.25,
                }}
              >
                {symptom.text}
              </span>
            </div>
          )
        })}
      </div>
    </AbsoluteFill>
  )
}

// ── Escena 3: Solución ────────────────────────────────────────────────────────
// Frames 420-630 (7s) — badgeText, productName en gradiente, tagline, ingredients pills

function SceneSolution({
  frame,
  props,
}: {
  frame: number
  props: HealthAdProps
}) {
  const badgeOpacity = fi(frame, 0, 18)
  const badgeY = su(frame, 0, 30, 18)
  const nameOpacity = fi(frame, 18, 22)
  const nameY = su(frame, 18, 40, 22)
  const taglineOpacity = fi(frame, 35, 20)
  const imgOpacity = fi(frame, 45, 25)
  const fadeOut = interpolate(frame, [195, 210], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })

  const hasImage = Boolean(props.productImageFile)

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
      {/* Layout con imagen (si existe) */}
      <div
        style={{
          display: 'flex',
          flexDirection: hasImage ? 'row' : 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: hasImage ? 60 : 0,
          width: '100%',
        }}
      >
        {/* Columna de texto */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: hasImage ? 'flex-start' : 'center',
            flex: 1,
          }}
        >
          {/* Badge verde */}
          <div
            style={{
              background: `linear-gradient(135deg, ${props.colors.primary}, ${props.colors.accent})`,
              color: props.colors.ctaText,
              fontSize: 28,
              fontWeight: 800,
              padding: '12px 32px',
              borderRadius: 50,
              marginBottom: 30,
              transform: `translateY(${badgeY}px)`,
              opacity: badgeOpacity,
              textTransform: 'uppercase',
              letterSpacing: 2,
              boxShadow: `0 4px 20px ${props.colors.primary}60`,
            }}
          >
            {props.badgeText}
          </div>

          {/* Nombre del producto — gradiente */}
          <div
            style={{
              fontSize: hasImage ? 68 : 80,
              fontWeight: 900,
              background: `linear-gradient(135deg, ${props.colors.highlight}, ${props.colors.accent}, ${props.colors.primary})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              transform: `translateY(${nameY}px)`,
              opacity: nameOpacity,
              lineHeight: 1.1,
              marginBottom: 20,
              textAlign: hasImage ? 'left' : 'center',
            }}
          >
            {props.productName}
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 36,
              fontWeight: 600,
              color: props.colors.textMuted,
              opacity: taglineOpacity,
              marginBottom: 36,
              textAlign: hasImage ? 'left' : 'center',
            }}
          >
            {props.tagline}
          </div>

          {/* Ingredients pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 14,
              justifyContent: hasImage ? 'flex-start' : 'center',
              opacity: taglineOpacity,
            }}
          >
            {props.ingredients.map((ing, i) => (
              <span
                key={i}
                style={{
                  background: `${props.colors.bg2}`,
                  border: `1.5px solid ${props.colors.primary}60`,
                  color: props.colors.text,
                  fontSize: 26,
                  fontWeight: 600,
                  padding: '10px 24px',
                  borderRadius: 50,
                  boxShadow: `0 2px 12px rgba(0,0,0,0.2)`,
                }}
              >
                {ing}
              </span>
            ))}
          </div>
        </div>

        {/* Imagen del producto */}
        {hasImage && props.productImageFile && (
          <div
            style={{
              opacity: imgOpacity,
              flexShrink: 0,
            }}
          >
            <Img
              src={staticFile(props.productImageFile)}
              style={{
                width: 340,
                height: 340,
                objectFit: 'contain',
                borderRadius: 24,
                boxShadow: `0 16px 48px rgba(0,0,0,0.5), 0 0 40px ${props.colors.primary}40`,
                filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.4))',
              }}
            />
          </div>
        )}
      </div>
    </AbsoluteFill>
  )
}

// ── Escena 4: Oferta ──────────────────────────────────────────────────────────
// Frames 630-870 (8s) — ¡OFERTA! pulsante, offerText, priceFinal dorado, beneficios

function SceneOffer({
  frame,
  props,
}: {
  frame: number
  props: HealthAdProps
}) {
  const offerLabelOpacity = fi(frame, 0, 20)
  const priceFinalOpacity = fi(frame, 20, 22)
  const priceFinalY = su(frame, 20, 50, 22)
  const perDayOpacity = fi(frame, 35, 18)
  const benefitsOpacity = fi(frame, 50, 22)
  const offerTextOpacity = fi(frame, 12, 18)
  const fadeOut = interpolate(frame, [225, 240], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })

  // Escala pulsante para el badge ¡OFERTA!
  const offerScale = pulse(frame, 0.07, 1.07)

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
        textAlign: 'center',
      }}
    >
      {/* Badge ¡OFERTA! pulsante */}
      <div
        style={{
          background: `linear-gradient(135deg, #FF2D2D, #FF6B6B)`,
          color: '#FFFFFF',
          fontSize: 48,
          fontWeight: 900,
          padding: '16px 60px',
          borderRadius: 16,
          marginBottom: 32,
          transform: `scale(${offerScale})`,
          opacity: offerLabelOpacity,
          letterSpacing: 4,
          textTransform: 'uppercase',
          boxShadow: '0 6px 30px rgba(255,45,45,0.5)',
        }}
      >
        ¡OFERTA!
      </div>

      {/* Texto de oferta */}
      <div
        style={{
          fontSize: 40,
          fontWeight: 700,
          color: props.colors.text,
          marginBottom: 24,
          opacity: offerTextOpacity,
          lineHeight: 1.3,
        }}
      >
        {props.offerText}
      </div>

      {/* Precio original tachado */}
      {props.priceOriginal && (
        <div
          style={{
            fontSize: 44,
            fontWeight: 600,
            color: props.colors.textMuted,
            textDecoration: 'line-through',
            marginBottom: 8,
            opacity: perDayOpacity,
          }}
        >
          Antes: {props.priceOriginal}
        </div>
      )}

      {/* Precio final en dorado */}
      <div
        style={{
          fontSize: 120,
          fontWeight: 900,
          background: `linear-gradient(135deg, ${props.colors.highlight}, #FFD700, ${props.colors.accent})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          transform: `translateY(${priceFinalY}px)`,
          opacity: priceFinalOpacity,
          lineHeight: 1,
          marginBottom: 12,
          filter: `drop-shadow(0 4px 16px ${props.colors.highlight}80)`,
        }}
      >
        {props.priceFinal}
      </div>

      {/* Precio por día */}
      <div
        style={{
          fontSize: 38,
          fontWeight: 700,
          color: props.colors.textMuted,
          marginBottom: 48,
          opacity: perDayOpacity,
        }}
      >
        {props.pricePerDay}
      </div>

      {/* Beneficios — Envío Gratis + Pagas al Recibir */}
      <div
        style={{
          display: 'flex',
          gap: 32,
          opacity: benefitsOpacity,
        }}
      >
        {['🚚 Envío Gratis', '💰 Pagas al Recibir'].map((b, i) => (
          <div
            key={i}
            style={{
              background: `${props.colors.bg2}`,
              border: `2px solid ${props.colors.primary}50`,
              color: props.colors.text,
              fontSize: 30,
              fontWeight: 700,
              padding: '18px 36px',
              borderRadius: 16,
              boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
            }}
          >
            {b}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  )
}

// ── Escena 5: CTA Urgencia ────────────────────────────────────────────────────
// Frames 870-1080 (7s) — unitsLeft parpadeante, socialProof, botón CTA pulsante

function SceneCTA({
  frame,
  props,
  durationInFrames,
}: {
  frame: number
  props: HealthAdProps
  durationInFrames: number
}) {
  const unitsOpacity = fi(frame, 0, 20)
  const socialOpacity = fi(frame, 18, 20)
  const ctaScale = pulse(frame, 0.09, 1.08)
  const ctaOpacity = fi(frame, 30, 22)
  const brandOpacity = fi(frame, 55, 20)

  // Dot parpadeante para unitsLeft
  const dotOpacity = interpolate(frame, [0, 15, 30, 45], [1, 0.2, 1, 0.2], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })

  // Fade-out final global
  const globalFade = interpolate(
    frame,
    [durationInFrames - 870 - 18, durationInFrames - 870],
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
        gap: 0,
        textAlign: 'center',
      }}
    >
      {/* Unidades disponibles con dot parpadeante */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          marginBottom: 32,
          opacity: unitsOpacity,
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: '50%',
            background: '#FF4444',
            opacity: dotOpacity,
            boxShadow: '0 0 12px #FF4444',
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontSize: 38,
            fontWeight: 800,
            color: '#FF6B6B',
          }}
        >
          ¡Solo quedan {props.unitsLeft} unidades!
        </span>
      </div>

      {/* Social proof */}
      <div
        style={{
          fontSize: 36,
          fontWeight: 600,
          color: props.colors.textMuted,
          marginBottom: 52,
          opacity: socialOpacity,
          maxWidth: 760,
          lineHeight: 1.4,
        }}
      >
        {props.socialProof}
      </div>

      {/* Botón CTA pulsante */}
      <div
        style={{
          background: `linear-gradient(135deg, ${props.colors.cta}, ${props.colors.primary})`,
          color: props.colors.ctaText,
          fontSize: 52,
          fontWeight: 900,
          padding: '32px 80px',
          borderRadius: 20,
          transform: `scale(${ctaScale})`,
          opacity: ctaOpacity,
          boxShadow: `0 8px 40px ${props.colors.cta}60, 0 0 60px ${props.colors.cta}30`,
          letterSpacing: 1,
          textTransform: 'uppercase',
          cursor: 'pointer',
          marginBottom: 12,
        }}
      >
        {props.ctaText}
      </div>

      {/* Subtexto CTA */}
      <div
        style={{
          fontSize: 28,
          fontWeight: 600,
          color: props.colors.textMuted,
          marginBottom: 52,
          opacity: ctaOpacity,
        }}
      >
        {props.ctaSubtext}
      </div>

      {/* Brand name + tagline al final */}
      <div
        style={{
          opacity: brandOpacity,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: 40,
            fontWeight: 900,
            background: `linear-gradient(135deg, ${props.colors.primary}, ${props.colors.accent})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: 8,
          }}
        >
          {props.brandName}
        </div>
        <div
          style={{
            fontSize: 28,
            fontWeight: 500,
            color: props.colors.textMuted,
          }}
        >
          {props.tagline}
        </div>
      </div>
    </AbsoluteFill>
  )
}

// ── Componente principal ──────────────────────────────────────────────────────

export function HealthTemplate(props: HealthAdProps) {
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

      {/* ── Escena 1: Hook (0-210) ── */}
      <Sequence from={0} durationInFrames={210}>
        <SceneHook frame={frame} props={props} />
      </Sequence>

      {/* ── Escena 2: Síntomas (210-420) ── */}
      <Sequence from={210} durationInFrames={210}>
        <SceneSymptoms frame={frame - 210} props={props} />
      </Sequence>

      {/* ── Escena 3: Solución (420-630) ── */}
      <Sequence from={420} durationInFrames={210}>
        <SceneSolution frame={frame - 420} props={props} />
      </Sequence>

      {/* ── Escena 4: Oferta (630-870) ── */}
      <Sequence from={630} durationInFrames={240}>
        <SceneOffer frame={frame - 630} props={props} />
      </Sequence>

      {/* ── Escena 5: CTA Urgencia (870-1080) ── */}
      <Sequence from={870} durationInFrames={210}>
        <SceneCTA
          frame={frame - 870}
          props={props}
          durationInFrames={durationInFrames}
        />
      </Sequence>
    </AbsoluteFill>
  )
}
