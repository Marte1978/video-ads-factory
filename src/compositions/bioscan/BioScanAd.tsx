import {
  AbsoluteFill, Audio, Sequence, staticFile,
  useCurrentFrame, interpolate, spring, useVideoConfig,
} from "remotion";

// ─── TIPOS ───────────────────────────────────────────────────────────────────

export interface BioScanScene {
  type: "hook" | "problem" | "list" | "compare" | "solution" | "proof" | "cta" | "url";
  emoji?: string;
  title?: string;
  subtitle?: string;
  body?: string;
  items?: { emoji: string; text: string; sub?: string }[];
  left?: { label: string; value: string };
  right?: { label: string; value: string };
  stats?: { value: string; label: string; color?: string }[];
  score?: number;
  plan?: string;
  price?: string;
  priceNote?: string;
  guarantee?: string;
}

export interface BioScanAdProps {
  audioFile: string;
  scenes: BioScanScene[];
  accentColor?: string;
  highlightColor?: string;
}

// ─── PALETA FIJA ─────────────────────────────────────────────────────────────

const C = {
  bg:      "#030B14",
  bg2:     "#0A1628",
  cyan:    "#00B4D8",
  cyanBr:  "#00D4FF",
  green:   "#00FF88",
  red:     "#FF4444",
  gold:    "#FFD700",
  white:   "#FFFFFF",
  muted:   "#90E0EF",
  card:    "rgba(0,180,216,0.08)",
  border:  "rgba(0,180,216,0.25)",
};

// ─── UTILIDADES ──────────────────────────────────────────────────────────────

function FadeIn({ frames }: { frames: number }) {
  const frame = useCurrentFrame();
  const op = interpolate(frame, [0, frames], [1, 0], { extrapolateRight: "clamp" });
  return <AbsoluteFill style={{ backgroundColor: "#000", opacity: op, zIndex: 99 }} />;
}

function FadeOut({ frames, total }: { frames: number; total: number }) {
  const frame = useCurrentFrame();
  const op = interpolate(frame, [total - frames, total], [0, 1], { extrapolateRight: "clamp" });
  return <AbsoluteFill style={{ backgroundColor: "#000", opacity: op, zIndex: 99 }} />;
}

function Centro({ children, pad = 44 }: { children: React.ReactNode; pad?: number }) {
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", padding: pad }}>
      <div style={{ textAlign: "center", width: "100%" }}>{children}</div>
    </AbsoluteFill>
  );
}

function GlassCard({ children, glow = false }: { children: React.ReactNode; glow?: boolean }) {
  return (
    <div style={{
      background:    glow ? "rgba(0,180,216,0.14)" : C.card,
      backdropFilter: "blur(20px)",
      borderRadius:  28,
      padding:       "36px 40px",
      border:        `1px solid ${glow ? "rgba(0,212,255,0.5)" : C.border}`,
      boxShadow:     glow ? "0 0 48px rgba(0,180,216,0.25)" : "none",
      width:         "100%",
    }}>
      {children}
    </div>
  );
}

function Scan({ progress }: { progress: number }) {
  const r = 120, circ = 2 * Math.PI * r;
  const dash = circ * progress;
  return (
    <div style={{ position: "relative", width: 280, height: 280, margin: "0 auto" }}>
      <svg width="280" height="280" viewBox="0 0 280 280">
        <circle cx="140" cy="140" r={r} fill="none" stroke="rgba(0,180,216,0.2)" strokeWidth="12" />
        <circle
          cx="140" cy="140" r={r} fill="none"
          stroke={C.cyanBr} strokeWidth="12"
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="round"
          transform="rotate(-90 140 140)"
          style={{ filter: "drop-shadow(0 0 10px #00D4FF)" }}
        />
      </svg>
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)", textAlign: "center",
      }}>
        <div style={{ fontSize: 72, fontWeight: 900, color: C.cyanBr, lineHeight: 1 }}>76</div>
        <div style={{ fontSize: 22, color: C.muted, fontWeight: 600 }}>/100</div>
        <div style={{ fontSize: 20, color: C.green, fontWeight: 700, marginTop: 4 }}>ÓPTIMO</div>
      </div>
    </div>
  );
}

// ─── ESCENAS ─────────────────────────────────────────────────────────────────

function SceneHook({ s, dur }: { s: BioScanScene; dur: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sc  = spring({ frame, fps, config: { stiffness: 80, damping: 18 } });
  const sub = interpolate(frame, [20, 40], [0, 1], { extrapolateRight: "clamp" });
  return (
    <Centro>
      <div style={{ transform: `scale(${sc})` }}>
        <div style={{ fontSize: 96, marginBottom: 20 }}>{s.emoji ?? "🔬"}</div>
        <div style={{
          fontSize: 68, fontWeight: 900, color: C.white,
          lineHeight: 1.15, textShadow: "0 4px 28px rgba(0,0,0,0.9)",
        }}>
          {s.title}
        </div>
      </div>
      {s.subtitle && (
        <div style={{
          opacity: sub, marginTop: 32,
          fontSize: 34, color: C.cyan, fontWeight: 700,
          textShadow: "0 2px 12px rgba(0,0,0,0.8)",
        }}>
          {s.subtitle}
        </div>
      )}
    </Centro>
  );
}

function SceneProblem({ s, dur }: { s: BioScanScene; dur: number }) {
  const frame = useCurrentFrame();
  const op = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });
  const y  = interpolate(frame, [0, 18], [28, 0], { extrapolateRight: "clamp" });
  return (
    <Centro>
      <div style={{ opacity: op, transform: `translateY(${y}px)` }}>
        <GlassCard>
          <div style={{ fontSize: 80, marginBottom: 18 }}>{s.emoji ?? "⚠️"}</div>
          <div style={{ fontSize: 50, fontWeight: 900, color: C.white, lineHeight: 1.2 }}>
            {s.title}
          </div>
          {s.body && (
            <div style={{ marginTop: 22, fontSize: 30, color: C.muted, lineHeight: 1.5 }}>
              {s.body}
            </div>
          )}
        </GlassCard>
      </div>
    </Centro>
  );
}

function SceneList({ s, dur }: { s: BioScanScene; dur: number }) {
  const frame = useCurrentFrame();
  const titleOp = interpolate(frame, [0, 14], [0, 1], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ justifyContent: "center", padding: "0 36px" }}>
      <div>
        {s.title && (
          <div style={{ opacity: titleOp, textAlign: "center", marginBottom: 26 }}>
            <div style={{ fontSize: 38, fontWeight: 900, color: C.cyan }}>{s.title}</div>
          </div>
        )}
        {(s.items ?? []).map(({ emoji, text, sub }, i) => {
          const delay = 10 + i * 13;
          const op = interpolate(frame, [delay, delay + 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          const x  = interpolate(frame, [delay, delay + 12], [-56, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
          return (
            <div key={i} style={{
              opacity: op, transform: `translateX(${x}px)`,
              display: "flex", alignItems: "center", gap: 18,
              background: C.card, backdropFilter: "blur(12px)",
              borderRadius: 20, padding: "16px 26px", marginBottom: 16,
              border: `1px solid ${C.border}`,
            }}>
              <span style={{ fontSize: 46 }}>{emoji}</span>
              <div>
                <div style={{ fontSize: 32, color: C.white, fontWeight: 700 }}>{text}</div>
                {sub && <div style={{ fontSize: 24, color: C.muted }}>{sub}</div>}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
}

function SceneCompare({ s, dur }: { s: BioScanScene; dur: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const leftSc  = spring({ frame, fps, config: { stiffness: 80, damping: 16 } });
  const rightSc = spring({ frame: Math.max(0, frame - 18), fps, config: { stiffness: 80, damping: 16 } });
  return (
    <AbsoluteFill style={{ justifyContent: "center", padding: "0 32px" }}>
      <div>
        {s.title && (
          <div style={{ textAlign: "center", marginBottom: 30, fontSize: 36, fontWeight: 900, color: C.muted }}>
            {s.title}
          </div>
        )}
        <div style={{ display: "flex", gap: 18 }}>
          {/* Left — Clínica */}
          <div style={{
            flex: 1, transform: `scale(${leftSc})`,
            background: "rgba(255,68,68,0.12)", borderRadius: 22,
            padding: "28px 22px", border: "1px solid rgba(255,68,68,0.35)",
            textAlign: "center",
          }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>🏥</div>
            <div style={{ fontSize: 28, color: "#FF8888", fontWeight: 700, marginBottom: 10 }}>
              {s.left?.label}
            </div>
            <div style={{ fontSize: 52, fontWeight: 900, color: C.red, lineHeight: 1 }}>
              {s.left?.value}
            </div>
          </div>
          {/* VS */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: C.muted }}>VS</div>
          </div>
          {/* Right — BioScan */}
          <div style={{
            flex: 1, transform: `scale(${rightSc})`,
            background: "rgba(0,180,216,0.14)", borderRadius: 22,
            padding: "28px 22px", border: `1px solid ${C.border}`,
            textAlign: "center",
            boxShadow: "0 0 32px rgba(0,212,255,0.2)",
          }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>📱</div>
            <div style={{ fontSize: 28, color: C.cyan, fontWeight: 700, marginBottom: 10 }}>
              {s.right?.label}
            </div>
            <div style={{ fontSize: 52, fontWeight: 900, color: C.green, lineHeight: 1 }}>
              {s.right?.value}
            </div>
          </div>
        </div>
        {s.subtitle && (
          <div style={{
            textAlign: "center", marginTop: 28,
            fontSize: 30, color: C.green, fontWeight: 700,
          }}>
            {s.subtitle}
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
}

function SceneSolution({ s, dur }: { s: BioScanScene; dur: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sc    = spring({ frame, fps, config: { stiffness: 85, damping: 18 } });
  const subOp = interpolate(frame, [22, 40], [0, 1], { extrapolateRight: "clamp" });
  return (
    <Centro>
      <div style={{ transform: `scale(${sc})` }}>
        <div style={{ fontSize: 80, marginBottom: 16 }}>{s.emoji ?? "🤖"}</div>
        <div style={{
          fontSize: 76, fontWeight: 900, color: C.cyanBr,
          letterSpacing: 2, textShadow: `0 4px 32px rgba(0,212,255,0.6)`,
        }}>
          BioScan IA
        </div>
      </div>
      <div style={{ opacity: subOp, marginTop: 28 }}>
        <GlassCard glow>
          {(s.stats ?? []).map(({ value, label, color }, i) => (
            <div key={i} style={{ marginBottom: i < (s.stats?.length ?? 1) - 1 ? 18 : 0 }}>
              <span style={{ fontSize: 56, fontWeight: 900, color: color ?? C.gold }}>{value}</span>
              <span style={{ fontSize: 28, color: C.muted, marginLeft: 10 }}>{label}</span>
            </div>
          ))}
        </GlassCard>
      </div>
    </Centro>
  );
}

function SceneProof({ s, dur }: { s: BioScanScene; dur: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const op    = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });
  const scanP = interpolate(frame, [20, 90], [0, 0.76], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ justifyContent: "center", padding: "0 36px" }}>
      <div style={{ opacity: op }}>
        <div style={{ textAlign: "center", marginBottom: 24, fontSize: 34, fontWeight: 900, color: C.cyan }}>
          {s.title ?? "Ciencia real. Resultados reales."}
        </div>
        <Scan progress={scanP} />
        <div style={{ marginTop: 24, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          {(s.items ?? []).map(({ emoji, text, sub }, i) => (
            <div key={i} style={{
              background: C.card, borderRadius: 18, padding: "14px 22px",
              border: `1px solid ${C.border}`, textAlign: "center", minWidth: 180,
            }}>
              <div style={{ fontSize: 36 }}>{emoji}</div>
              <div style={{ fontSize: 30, fontWeight: 900, color: C.green }}>{text}</div>
              {sub && <div style={{ fontSize: 20, color: C.muted }}>{sub}</div>}
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
}

function SceneCTA({ s, dur }: { s: BioScanScene; dur: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const op      = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const priceSc = spring({ frame: Math.max(0, frame - 30), fps, config: { stiffness: 65, damping: 15 } });
  const ctaSc   = spring({ frame: Math.max(0, frame - 55), fps, config: { stiffness: 110, damping: 14 } });
  const pricePulse = 1 + Math.sin((frame / fps) * Math.PI * 1.3) * 0.022;
  const scanP   = interpolate(frame, [10, 80], [0, 0.76], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{
      background: `linear-gradient(180deg, ${C.bg} 0%, #051830 100%)`,
      justifyContent: "center", alignItems: "center", padding: 32,
    }}>
      <div style={{ opacity: op, textAlign: "center", width: "100%" }}>
        <Scan progress={scanP} />
        <div style={{ marginTop: 14, fontSize: 26, color: C.muted, fontWeight: 600 }}>
          {s.plan ?? "Plan Individual"}
        </div>
        <div style={{
          fontSize: 90, fontWeight: 900, color: C.gold,
          transform: `scale(${priceSc}) scale(${pricePulse})`,
          textShadow: "0 4px 40px rgba(255,215,0,0.6)", lineHeight: 1, margin: "10px 0",
        }}>
          {s.price ?? "$5 USD"}
        </div>
        <div style={{ fontSize: 28, color: C.green, fontWeight: 700, marginBottom: 26 }}>
          {s.priceNote ?? "pago único · sin suscripción"}
        </div>
        <div style={{
          transform: `scale(${ctaSc})`,
          background: `linear-gradient(135deg, #005F7A 0%, ${C.cyan} 100%)`,
          borderRadius: 22, padding: "22px 40px",
          fontSize: 36, fontWeight: 900, color: C.white,
          boxShadow: `0 10px 44px rgba(0,180,216,0.55)`,
          border: `2px solid rgba(0,212,255,0.5)`,
          letterSpacing: 1, marginBottom: 18,
        }}>
          INICIAR MI ANÁLISIS
        </div>
        <div style={{ fontSize: 30, color: C.cyan, fontWeight: 700 }}>
          bioscanpro.net
        </div>
        {s.guarantee && (
          <div style={{
            marginTop: 16, fontSize: 22, color: C.green,
            background: "rgba(0,255,136,0.1)", borderRadius: 12,
            padding: "10px 22px", display: "inline-block",
          }}>
            ✅ {s.guarantee}
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
}

function SceneURL({ dur }: { dur: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sc      = spring({ frame, fps, config: { stiffness: 60, damping: 16 } });
  const fadeOut = interpolate(frame, [dur - 45, dur], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const scanP   = interpolate(frame, [10, 60], [0, 0.76], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{
      background: `linear-gradient(180deg, ${C.bg} 0%, ${C.bg2} 100%)`,
      justifyContent: "center", alignItems: "center",
    }}>
      <div style={{ textAlign: "center", transform: `scale(${sc})` }}>
        <Scan progress={scanP} />
        <div style={{ fontSize: 52, fontWeight: 900, color: C.cyanBr, marginTop: 24, letterSpacing: 2 }}>
          BioScan IA
        </div>
        <div style={{ fontSize: 30, color: C.muted, marginTop: 8, marginBottom: 20 }}>
          El análisis de salud que todos merecen.
        </div>
        <div style={{
          fontSize: 44, fontWeight: 900, color: C.gold, letterSpacing: 1,
          textShadow: "0 4px 24px rgba(255,215,0,0.5)",
        }}>
          bioscanpro.net
        </div>
        <div style={{ fontSize: 24, color: "#475569", marginTop: 14 }}>
          79 indicadores · 13 sistemas · 90 segundos
        </div>
      </div>
      <AbsoluteFill style={{ backgroundColor: "#000", opacity: fadeOut }} />
    </AbsoluteFill>
  );
}

// ─── MAPA DE TIPOS ────────────────────────────────────────────────────────────

const SCENE_MAP: Record<string, React.FC<{ s: BioScanScene; dur: number }>> = {
  hook:     SceneHook,
  problem:  SceneProblem,
  list:     SceneList,
  compare:  SceneCompare,
  solution: SceneSolution,
  proof:    SceneProof,
  cta:      SceneCTA,
};

// ─── COMPOSICIÓN PRINCIPAL ────────────────────────────────────────────────────

const FADE = 18;
const BG_VIDEO = "videos/background-v3.mp4";
const DIM_BY_TYPE: Record<string, number> = {
  hook: 0.50, problem: 0.58, list: 0.55,
  compare: 0.45, solution: 0.52, proof: 0.48,
  cta: 0.00, url: 0.00,
};

export function BioScanAd({ audioFile, scenes }: BioScanAdProps) {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  // Escenas dinámicas: distribuir frames uniformemente excepto url
  const urlDur = 210; // 7s
  const ctaDur = 270; // 9s
  const restCount = scenes.filter(s => s.type !== "cta" && s.type !== "url").length;
  const restDur  = Math.floor((durationInFrames - urlDur - ctaDur) / restCount);

  const built: { from: number; dur: number; scene: BioScanScene }[] = [];
  let cursor = 0;
  for (const s of scenes) {
    if (s.type === "url") continue;
    const dur = s.type === "cta" ? ctaDur : restDur;
    built.push({ from: cursor, dur, scene: s });
    cursor += dur;
  }
  const urlFrom = durationInFrames - urlDur;

  // Overlay dim según escena actual
  const curScene = built.findLast?.((b) => frame >= b.from) ?? built[0];
  const dim = DIM_BY_TYPE[curScene?.scene?.type ?? "hook"] ?? 0.50;

  const showBg = frame < urlFrom;

  return (
    <AbsoluteFill style={{ backgroundColor: C.bg }}>
      {/* Fondo de video */}
      {showBg && (
        <>
          {/* eslint-disable-next-line @remotion/warn-native-media-tag */}
          <video
            src={staticFile(BG_VIDEO)}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <AbsoluteFill style={{ backgroundColor: `rgba(3,11,20,${dim})` }} />
        </>
      )}

      {/* Audio */}
      <Audio src={staticFile(audioFile)} />

      {/* Secuencias de escenas */}
      {built.map(({ from, dur, scene }) => {
        const Comp = SCENE_MAP[scene.type];
        if (!Comp) return null;
        return (
          <Sequence key={from} from={from} durationInFrames={dur}>
            <AbsoluteFill>
              <Comp s={scene} dur={dur} />
              <FadeIn frames={FADE} />
              <FadeOut frames={FADE} total={dur} />
            </AbsoluteFill>
          </Sequence>
        );
      })}

      {/* URL final */}
      <Sequence from={urlFrom} durationInFrames={urlDur}>
        <SceneURL dur={urlDur} />
      </Sequence>

      {/* Fade in global */}
      <Sequence from={0} durationInFrames={22}>
        <AbsoluteFill style={{
          backgroundColor: "#000",
          opacity: interpolate(frame, [0, 22], [1, 0]),
        }} />
      </Sequence>
    </AbsoluteFill>
  );
}
