import { AbsoluteFill, Img, staticFile } from 'remotion'
import React from 'react'
import { BackgroundConfig } from './types'

interface Props {
  config: BackgroundConfig
  frame?: number
}

/**
 * DynamicBackground — soporta 3 modos:
 *   'gradient' — fondo degradado radial (por defecto)
 *   'image'    — foto de fondo con overlay oscuro configurable
 *   'color'    — color sólido
 */
export function DynamicBackground({ config, frame = 0 }: Props) {
  // ── Imagen de fondo ──────────────────────────────────────────────────────
  if (config.type === 'image' && config.imageFile) {
    const overlay = config.overlayOpacity ?? 0.45
    return (
      <AbsoluteFill>
        <Img
          src={staticFile(config.imageFile)}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {overlay > 0 && (
          <AbsoluteFill style={{ background: `rgba(0,0,0,${overlay})` }} />
        )}
      </AbsoluteFill>
    )
  }

  // ── Color sólido ─────────────────────────────────────────────────────────
  if (config.type === 'color') {
    return <AbsoluteFill style={{ background: config.color ?? '#000000' }} />
  }

  // ── Gradient (default) ───────────────────────────────────────────────────
  const gc = config.gradientColors ?? ['#6B21A8', '#4F46E5', '#0F0520']
  const c0 = gc[0]
  const c1 = gc[1] ?? gc[0]
  const base = gc[gc.length - 1]

  return (
    <AbsoluteFill style={{
      background: `
        radial-gradient(ellipse 90% 55% at 50% 10%, ${c0}88 0%, transparent 55%),
        radial-gradient(ellipse 70% 45% at 90% 85%, ${c1}50 0%, transparent 50%),
        radial-gradient(ellipse 50% 40% at 10% 60%, ${c0}30 0%, transparent 50%),
        ${base}
      `,
    }} />
  )
}

/** Orbes flotantes animados — decoración opcional */
export function AnimatedOrbs({ frame, colors }: { frame: number; colors: string[] }) {
  const orbs = [
    { x: 80,  y: 200,  r: 80,  speed: 0.4 },
    { x: 940, y: 450,  r: 100, speed: 0.3 },
    { x: 180, y: 950,  r: 70,  speed: 0.5 },
    { x: 850, y: 1300, r: 90,  speed: 0.35 },
    { x: 500, y: 1750, r: 110, speed: 0.25 },
  ]
  return (
    <AbsoluteFill style={{ overflow: 'hidden' }}>
      {orbs.map((o, i) => {
        const yOff = Math.sin((frame * o.speed + i * 40) * 0.04) * 25
        return (
          <div key={i} style={{
            position: 'absolute',
            left: o.x - o.r,
            top: o.y - o.r + yOff,
            width: o.r * 2,
            height: o.r * 2,
            borderRadius: '50%',
            background: colors[i % colors.length],
            opacity: 0.13,
            filter: `blur(${o.r * 0.75}px)`,
          }} />
        )
      })}
    </AbsoluteFill>
  )
}
