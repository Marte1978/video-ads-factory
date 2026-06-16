"""
render_batch01.py — Renderiza los 10 videos del Batch 01 (copies 001-010).
Salida: D:\500 videos bioscan\
Verifica TTS → TypeScript → Render uno a uno con gate.
"""
import subprocess, sys, os, shutil
from pathlib import Path

BASE   = Path(__file__).parent.parent
OUT    = Path(r"D:\500 videos bioscan")
NPX    = "npx.cmd" if os.name == "nt" else "npx"

VIDEOS = [
    {"n": "001", "id": "BioScan001", "voz": "es-CO-GonzaloNeural"},
    {"n": "002", "id": "BioScan002", "voz": "es-MX-JorgeNeural"},
    {"n": "003", "id": "BioScan003", "voz": "es-ES-AlvaroNeural"},
    {"n": "004", "id": "BioScan004", "voz": "es-CL-LorenzoNeural"},
    {"n": "005", "id": "BioScan005", "voz": "es-CO-GonzaloNeural"},
    {"n": "006", "id": "BioScan006", "voz": "es-MX-JorgeNeural"},
    {"n": "007", "id": "BioScan007", "voz": "es-ES-AlvaroNeural"},
    {"n": "008", "id": "BioScan008", "voz": "es-CL-LorenzoNeural"},
    {"n": "009", "id": "BioScan009", "voz": "es-CO-GonzaloNeural"},
    {"n": "010", "id": "BioScan010", "voz": "es-MX-JorgeNeural"},
]

DONE_FILE = OUT / "_progreso.txt"

def log(msg: str):
    print(msg)
    with open(DONE_FILE, "a", encoding="utf-8") as f:
        f.write(msg + "\n")

def gate(label: str, ok: bool, detail: str = ""):
    if not ok:
        msg = f"[FALLO] {label}" + (f": {detail}" if detail else "")
        print(msg, file=sys.stderr)
        sys.exit(1)
    print(f"[OK]   {label}")

def run(cmd, cwd=None):
    r = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="replace", cwd=cwd)
    return r.returncode, r.stdout, r.stderr

OUT.mkdir(parents=True, exist_ok=True)

# ── GATE 1: Audios TTS generados ─────────────────────────────────────────────
print("\n[STEP 1] Verificando audios TTS...")
missing = [v for v in VIDEOS if not (BASE / "public" / "audio" / f"bioscan-{v['n']}.mp3").exists()]
if missing:
    print(f"  Faltan {len(missing)} audios. Generando...")
    rc, _, err = run([sys.executable, str(BASE / "scripts" / "gen_tts_batch01.py")])
    gate("Generación TTS", rc == 0, err[-300:] if err else "")
else:
    print(f"  [OK] Todos los 10 audios encontrados")

# ── GATE 2: TypeScript check ──────────────────────────────────────────────────
print("\n[STEP 2] Verificando TypeScript...")
rc, out, err = run([NPX, "tsc", "--noEmit"], cwd=str(BASE))
gate("TypeScript check", rc == 0, (err or out)[-500:])

# ── GATE 3: Render uno a uno ──────────────────────────────────────────────────
print("\n[STEP 3] Renderizando 10 videos...")
log(f"\n=== BATCH 01 — {__import__('datetime').datetime.now().strftime('%Y-%m-%d %H:%M')} ===")

done = []
failed = []

for v in VIDEOS:
    n     = v["n"]
    comp  = v["id"]
    voz   = v["voz"]
    fname = f"{n}_bioscan_{voz}.mp4"
    out_tmp = BASE / "output" / "bioscan" / fname
    out_final = OUT / fname

    print(f"\n  [{n}/010] {comp} — {voz}")

    if out_final.exists():
        print(f"  [SKIP] Ya existe: {fname}")
        done.append(fname)
        log(f"[SKIP] {fname}")
        continue

    out_tmp.parent.mkdir(parents=True, exist_ok=True)

    rc, stdout, stderr = run([
        NPX, "remotion", "render",
        comp,
        str(out_tmp),
        "--concurrency=1",
        "--log=error",
    ], cwd=str(BASE))

    if rc != 0:
        print(f"  [FALLO] {comp}: {stderr[-300:]}")
        failed.append(fname)
        log(f"[FALLO] {fname}")
        continue

    # Verificar duración mínima
    size = out_tmp.stat().st_size if out_tmp.exists() else 0
    gate(f"Tamaño {fname}", size > 5_000_000, f"{size/1e6:.1f}MB < 5MB")

    # Copiar a carpeta final
    shutil.copy2(str(out_tmp), str(out_final))
    done.append(fname)
    log(f"[OK]   {fname} — {size/1e6:.1f} MB")
    print(f"  [OK]  -> {out_final}")

# ── Resumen ───────────────────────────────────────────────────────────────────
print(f"\n{'='*60}")
print(f"BATCH 01 COMPLETADO")
print(f"  Videos OK:     {len(done)}/10")
print(f"  Videos FALLO:  {len(failed)}/10")
print(f"  Carpeta:       {OUT}")
if done:
    print(f"\n  Producidos:")
    for f in done: print(f"    [OK] {f}")
if failed:
    print(f"\n  Fallidos:")
    for f in failed: print(f"    [X]  {f}")
