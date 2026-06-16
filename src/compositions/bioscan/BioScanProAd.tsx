import {
  AbsoluteFill, Audio, Sequence, OffthreadVideo, staticFile,
  useCurrentFrame, interpolate, spring, useVideoConfig,
} from "remotion";
import { THEMES, BioScanTheme, HookStyle } from "./bioscan-themes";

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

export interface BioScanProAdProps {
  audioFile: string;
  bgVideo: string;
  scenes: BioScanScene[];
  themeName?: string;
  hookStyle?: HookStyle;
  durationInFrames?: number;
}

// ─── CONTEXTO INTERNO DE TEMA ─────────────────────────────────────────────────

let _T: BioScanTheme = THEMES.cyan;

// ─── UTILIDADES ──────────────────────────────────────────────────────────────

const FADE = 18;

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
      background:     glow ? `${_T.card.replace("0.08", "0.14")}` : _T.card,
      backdropFilter: "blur(20px)",
      borderRadius:   28,
      padding:        "36px 40px",
      border:         `1px solid ${glow ? _T.accentBr + "80" : _T.border}`,
      boxShadow:      glow ? `0 0 48px ${_T.accent}40` : "none",
      width:          "100%",
    }}>
      {children}
    </div>
  );
}

function ScanRing({ progress }: { progress: number }) {
  const r = 120, circ = 2 * Math.PI * r;
  const dash = circ * progress;
  return (
    <div style={{ position: "relative", width: 280, height: 280, margin: "0 auto" }}>
      <svg width="280" height="280" viewBox="0 0 280 280">
        <circle cx="140" cy="140" r={r} fill="none" stroke={`${_T.accent}33`} strokeWidth="12" />
        <circle
          cx="140" cy="140" r={r} fill="none"
          stroke={_T.accentBr} strokeWidth="12"
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="round"
          transform="rotate(-90 140 140)"
          style={{ filter: `drop-shadow(0 0 10px ${_T.accentBr})` }}
        />
      </svg>
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)", textAlign: "center",
      }}>
        <div style={{ fontSize: 72, fontWeight: 900, color: _T.accentBr, lineHeight: 1 }}>76</div>
        <div style={{ fontSize: 22, color: _T.muted, fontWeight: 600 }}>/100</div>
        <div style={{ fontSize: 20, color: _T.green, fontWeight: 700, marginTop: 4 }}>OPTIMO</div>
      </div>
    </div>
  );
}

// ─── ESCENAS ─────────────────────────────────────────────────────────────────

function SceneHookSpring({ s }: { s: BioScanScene }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sc  = spring({ frame, fps, config: { stiffness: 80, damping: 18 } });
  const sub = interpolate(frame, [20, 40], [0, 1], { extrapolateRight: "clamp" });
  return (
    <Centro>
      <div style={{ transform: `scale(${sc})` }}>
        <div style={{ fontSize: 96, marginBottom: 20 }}>{s.emoji ?? "🔬"}</div>
        <div style={{ fontSize: 66, fontWeight: 900, color: "#FFFFFF", lineHeight: 1.15, textShadow: "0 4px 28px rgba(0,0,0,0.9)" }}>
          {s.title}
        </div>
      </div>
      {s.subtitle && (
        <div style={{ opacity: sub, marginTop: 32, fontSize: 34, color: _T.accent, fontWeight: 700, textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}>
          {s.subtitle}
        </div>
      )}
    </Centro>
  );
}

function SceneHookSlide({ s }: { s: BioScanScene }) {
  const frame = useCurrentFrame();
  const y   = interpolate(frame, [0, 28], [80, 0],  { extrapolateRight: "clamp" });
  const op  = interpolate(frame, [0, 22], [0, 1],   { extrapolateRight: "clamp" });
  const sub = interpolate(frame, [30, 50], [0, 1],  { extrapolateRight: "clamp" });
  return (
    <Centro>
      <div style={{ opacity: op, transform: `translateY(${y}px)` }}>
        <div style={{ fontSize: 96, marginBottom: 20 }}>{s.emoji ?? "⚡"}</div>
        <div style={{ fontSize: 66, fontWeight: 900, color: "#FFFFFF", lineHeight: 1.15, textShadow: "0 4px 28px rgba(0,0,0,0.9)" }}>
          {s.title}
        </div>
      </div>
      {s.subtitle && (
        <div style={{ opacity: sub, marginTop: 32, fontSize: 34, color: _T.accentBr, fontWeight: 700 }}>
          {s.subtitle}
        </div>
      )}
    </Centro>
  );
}

function SceneHookZoom({ s }: { s: BioScanScene }) {
  const frame = useCurrentFrame();
  const sc  = interpolate(frame, [0, 35], [1.35, 1.0], { extrapolateRight: "clamp" });
  const op  = interpolate(frame, [0, 18], [0, 1],      { extrapolateRight: "clamp" });
  const sub = interpolate(frame, [38, 55], [0, 1],     { extrapolateRight: "clamp" });
  return (
    <Centro>
      <div style={{ transform: `scale(${sc})`, opacity: op }}>
        <div style={{ fontSize: 96, marginBottom: 20 }}>{s.emoji ?? "🎯"}</div>
        <div style={{ fontSize: 66, fontWeight: 900, color: "#FFFFFF", lineHeight: 1.15, textShadow: `0 4px 40px ${_T.accent}99` }}>
          {s.title}
        </div>
      </div>
      {s.subtitle && (
        <div style={{ opacity: sub, marginTop: 32, fontSize: 34, color: _T.gold, fontWeight: 700 }}>
          {s.subtitle}
        </div>
      )}
    </Centro>
  );
}

function SceneProblem({ s }: { s: BioScanScene; dur: number }) {
  const frame = useCurrentFrame();
  const op = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });
  const y  = interpolate(frame, [0, 18], [28, 0], { extrapolateRight: "clamp" });
  return (
    <Centro>
      <div style={{ opacity: op, transform: `translateY(${y}px)` }}>
        <GlassCard>
          <div style={{ fontSize: 80, marginBottom: 18 }}>{s.emoji ?? "⚠️"}</div>
          <div style={{ fontSize: 48, fontWeight: 900, color: "#FFFFFF", lineHeight: 1.2 }}>
            {s.title}
          </div>
          {s.body && (
            <div style={{ marginTop: 22, fontSize: 29, color: _T.muted, lineHeight: 1.5 }}>
              {s.body}
            </div>
          )}
        </GlassCard>
      </div>
    </Centro>
  );
}

function SceneList({ s }: { s: BioScanScene; dur: number }) {
  const frame = useCurrentFrame();
  const titleOp = interpolate(frame, [0, 14], [0, 1], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ justifyContent: "center", padding: "0 36px" }}>
      <div>
        {s.title && (
          <div style={{ opacity: titleOp, textAlign: "center", marginBottom: 26 }}>
            <div style={{ fontSize: 38, fontWeight: 900, color: _T.accent }}>{s.title}</div>
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
              background: _T.card, backdropFilter: "blur(12px)",
              borderRadius: 20, padding: "16px 26px", marginBottom: 16,
              border: `1px solid ${_T.border}`,
            }}>
              <span style={{ fontSize: 46 }}>{emoji}</span>
              <div>
                <div style={{ fontSize: 32, color: "#FFFFFF", fontWeight: 700 }}>{text}</div>
                {sub && <div style={{ fontSize: 24, color: _T.muted }}>{sub}</div>}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
}

function SceneCompare({ s }: { s: BioScanScene; dur: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const leftSc  = spring({ frame, fps, config: { stiffness: 80, damping: 16 } });
  const rightSc = spring({ frame: Math.max(0, frame - 18), fps, config: { stiffness: 80, damping: 16 } });
  return (
    <AbsoluteFill style={{ justifyContent: "center", padding: "0 32px" }}>
      <div>
        {s.title && (
          <div style={{ textAlign: "center", marginBottom: 30, fontSize: 36, fontWeight: 900, color: _T.muted }}>
            {s.title}
          </div>
        )}
        <div style={{ display: "flex", gap: 18 }}>
          <div style={{
            flex: 1, transform: `scale(${leftSc})`,
            background: "rgba(239,68,68,0.12)", borderRadius: 22,
            padding: "28px 22px", border: "1px solid rgba(239,68,68,0.35)",
            textAlign: "center",
          }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>🏥</div>
            <div style={{ fontSize: 28, color: "#FF8888", fontWeight: 700, marginBottom: 10 }}>{s.left?.label}</div>
            <div style={{ fontSize: 52, fontWeight: 900, color: "#EF4444", lineHeight: 1 }}>{s.left?.value}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: _T.muted }}>VS</div>
          </div>
          <div style={{
            flex: 1, transform: `scale(${rightSc})`,
            background: _T.card, borderRadius: 22,
            padding: "28px 22px", border: `1px solid ${_T.border}`,
            textAlign: "center", boxShadow: `0 0 32px ${_T.accent}33`,
          }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>📱</div>
            <div style={{ fontSize: 28, color: _T.accent, fontWeight: 700, marginBottom: 10 }}>{s.right?.label}</div>
            <div style={{ fontSize: 52, fontWeight: 900, color: _T.green, lineHeight: 1 }}>{s.right?.value}</div>
          </div>
        </div>
        {s.subtitle && (
          <div style={{ textAlign: "center", marginTop: 28, fontSize: 30, color: _T.green, fontWeight: 700 }}>
            {s.subtitle}
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
}

function SceneSolution({ s }: { s: BioScanScene; dur: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sc    = spring({ frame, fps, config: { stiffness: 85, damping: 18 } });
  const subOp = interpolate(frame, [22, 40], [0, 1], { extrapolateRight: "clamp" });
  return (
    <Centro>
      <div style={{ transform: `scale(${sc})` }}>
        <div style={{ fontSize: 80, marginBottom: 16 }}>{s.emoji ?? "🤖"}</div>
        <div style={{ fontSize: 76, fontWeight: 900, color: _T.accentBr, letterSpacing: 2, textShadow: `0 4px 32px ${_T.accent}99` }}>
          BioScan IA
        </div>
      </div>
      <div style={{ opacity: subOp, marginTop: 28 }}>
        <GlassCard glow>
          {(s.stats ?? []).map(({ value, label, color }, i) => (
            <div key={i} style={{ marginBottom: i < (s.stats?.length ?? 1) - 1 ? 18 : 0 }}>
              <span style={{ fontSize: 56, fontWeight: 900, color: color ?? _T.gold }}>{value}</span>
              <span style={{ fontSize: 28, color: _T.muted, marginLeft: 10 }}>{label}</span>
            </div>
          ))}
        </GlassCard>
      </div>
    </Centro>
  );
}

function SceneProof({ s }: { s: BioScanScene; dur: number }) {
  const frame = useCurrentFrame();
  const op    = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });
  const scanP = interpolate(frame, [20, 90], [0, 0.76], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ justifyContent: "center", padding: "0 36px" }}>
      <div style={{ opacity: op }}>
        <div style={{ textAlign: "center", marginBottom: 24, fontSize: 34, fontWeight: 900, color: _T.accent }}>
          {s.title ?? "Ciencia real. Resultados reales."}
        </div>
        <ScanRing progress={scanP} />
        <div style={{ marginTop: 24, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          {(s.items ?? []).map(({ emoji, text, sub }, i) => (
            <div key={i} style={{
              background: _T.card, borderRadius: 18, padding: "14px 22px",
              border: `1px solid ${_T.border}`, textAlign: "center", minWidth: 180,
            }}>
              <div style={{ fontSize: 36 }}>{emoji}</div>
              <div style={{ fontSize: 30, fontWeight: 900, color: _T.green }}>{text}</div>
              {sub && <div style={{ fontSize: 20, color: _T.muted }}>{sub}</div>}
            </div>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
}

function SceneCTA({ s }: { s: BioScanScene; dur: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const op         = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const priceSc    = spring({ frame: Math.max(0, frame - 30), fps, config: { stiffness: 65, damping: 15 } });
  const ctaSc      = spring({ frame: Math.max(0, frame - 55), fps, config: { stiffness: 110, damping: 14 } });
  const pricePulse = 1 + Math.sin((frame / fps) * Math.PI * 1.3) * 0.022;
  const scanP      = interpolate(frame, [10, 80], [0, 0.76], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{
      background: `linear-gradient(180deg, ${_T.bg} 0%, ${_T.bg2} 100%)`,
      justifyContent: "center", alignItems: "center", padding: 32,
    }}>
      <div style={{ opacity: op, textAlign: "center", width: "100%" }}>
        <ScanRing progress={scanP} />
        <div style={{ marginTop: 14, fontSize: 26, color: _T.muted, fontWeight: 600 }}>{s.plan ?? "Plan Individual"}</div>
        <div style={{
          fontSize: 90, fontWeight: 900, color: _T.gold,
          transform: `scale(${priceSc}) scale(${pricePulse})`,
          textShadow: `0 4px 40px ${_T.gold}99`, lineHeight: 1, margin: "10px 0",
        }}>
          {s.price ?? "$5 USD"}
        </div>
        <div style={{ fontSize: 28, color: _T.green, fontWeight: 700, marginBottom: 26 }}>
          {s.priceNote ?? "pago unico · sin suscripcion"}
        </div>
        <div style={{
          transform: `scale(${ctaSc})`,
          background: `linear-gradient(135deg, ${_T.ctaGrad[0]} 0%, ${_T.ctaGrad[1]} 100%)`,
          borderRadius: 22, padding: "22px 40px",
          fontSize: 36, fontWeight: 900, color: "#FFFFFF",
          boxShadow: `0 10px 44px ${_T.accent}88`,
          border: `2px solid ${_T.accentBr}80`,
          letterSpacing: 1, marginBottom: 18,
        }}>
          INICIAR MI ANALISIS
        </div>
        <div style={{ fontSize: 30, color: _T.accent, fontWeight: 700 }}>bioscanpro.net</div>
        {s.guarantee && (
          <div style={{
            marginTop: 16, fontSize: 22, color: _T.green,
            background: `${_T.green}1A`, borderRadius: 12,
            padding: "10px 22px", display: "inline-block",
          }}>
            {s.guarantee}
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
      background: `linear-gradient(180deg, ${_T.bg} 0%, ${_T.bg2} 100%)`,
      justifyContent: "center", alignItems: "center",
    }}>
      <div style={{ textAlign: "center", transform: `scale(${sc})` }}>
        <ScanRing progress={scanP} />
        <div style={{ fontSize: 52, fontWeight: 900, color: _T.accentBr, marginTop: 24, letterSpacing: 2 }}>
          BioScan IA
        </div>
        <div style={{ fontSize: 30, color: _T.muted, marginTop: 8, marginBottom: 20 }}>
          El analisis de salud que todos merecen.
        </div>
        <div style={{ fontSize: 44, fontWeight: 900, color: _T.gold, letterSpacing: 1, textShadow: `0 4px 24px ${_T.gold}80` }}>
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

// ─── MAPA ESCENAS ─────────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SCENE_MAP: Record<string, React.FC<any>> = {
  problem:  SceneProblem,
  list:     SceneList,
  compare:  SceneCompare,
  solution: SceneSolution,
  proof:    SceneProof,
  cta:      SceneCTA,
};

const DIM_BY_TYPE: Record<string, number> = {
  hook: 0.50, problem: 0.58, list: 0.55,
  compare: 0.45, solution: 0.52, proof: 0.48,
  cta: 0.00, url: 0.00,
};

// ─── COMPOSICIÓN PRINCIPAL ────────────────────────────────────────────────────

export function BioScanProAd({ audioFile, bgVideo, scenes, themeName = "cyan", hookStyle = "spring" }: BioScanProAdProps) {
  _T = THEMES[themeName] ?? THEMES.cyan;

  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const urlDur     = 210;
  const ctaDur     = 270;
  const restScenes = scenes.filter(s => s.type !== "cta" && s.type !== "url");
  const restDur    = Math.floor((durationInFrames - urlDur - ctaDur) / restScenes.length);

  const built: { from: number; dur: number; scene: BioScanScene }[] = [];
  let cursor = 0;
  for (const s of scenes) {
    if (s.type === "url") continue;
    const dur = s.type === "cta" ? ctaDur : restDur;
    built.push({ from: cursor, dur, scene: s });
    cursor += dur;
  }
  const urlFrom = durationInFrames - urlDur;
  const showBg  = frame < urlFrom;

  const curScene = built.findLast((b) => frame >= b.from) ?? built[0];
  const dim = DIM_BY_TYPE[curScene?.scene?.type ?? "hook"] ?? 0.50;

  const HookComp = hookStyle === "slide" ? SceneHookSlide
                 : hookStyle === "zoom"  ? SceneHookZoom
                 : SceneHookSpring;

  return (
    <AbsoluteFill style={{ backgroundColor: _T.bg }}>
      {showBg && (
        <>
          <OffthreadVideo
            src={staticFile(bgVideo)}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            volume={0}
          />
          <AbsoluteFill style={{ backgroundColor: `rgba(0,0,0,${dim})` }} />
          <AbsoluteFill style={{ backgroundColor: `${_T.bg}${Math.round(dim * 0.6 * 255).toString(16).padStart(2,"0")}` }} />
        </>
      )}

      <Audio src={staticFile(audioFile)} />

      {built.map(({ from, dur, scene }) => {
        const Comp = scene.type === "hook" ? HookComp : SCENE_MAP[scene.type];
        if (!Comp) return null;
        return (
          <Sequence key={from} from={from} durationInFrames={dur}>
            <AbsoluteFill>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <Comp s={scene} dur={dur} {...({} as any)} />
              <FadeIn frames={FADE} />
              <FadeOut frames={FADE} total={dur} />
            </AbsoluteFill>
          </Sequence>
        );
      })}

      <Sequence from={urlFrom} durationInFrames={urlDur}>
        <SceneURL dur={urlDur} />
      </Sequence>

      <Sequence from={0} durationInFrames={22}>
        <AbsoluteFill style={{
          backgroundColor: "#000",
          opacity: interpolate(frame, [0, 22], [1, 0]),
        }} />
      </Sequence>
    </AbsoluteFill>
  );
}
