"""
render_batch04.py -- Renderiza los 10 videos del Batch 04 (copies 031-040).
Salida: D:/500 videos bioscan/
"""
import subprocess, sys, os, shutil
from pathlib import Path

BASE   = Path(__file__).parent.parent
OUT    = Path(r"D:\500 videos bioscan")
NPX    = "npx.cmd" if os.name == "nt" else "npx"

VIDEOS = [
    {"n": "031", "id": "BioScan031", "voz": "es-ES-AlvaroNeural"},
    {"n": "032", "id": "BioScan032", "voz": "es-CL-LorenzoNeural"},
    {"n": "033", "id": "BioScan033", "voz": "es-MX-JorgeNeural"},
    {"n": "034", "id": "BioScan034", "voz": "es-CO-GonzaloNeural"},
    {"n": "035", "id": "BioScan035", "voz": "es-ES-AlvaroNeural"},
    {"n": "036", "id": "BioScan036", "voz": "es-CL-LorenzoNeural"},
    {"n": "037", "id": "BioScan037", "voz": "es-MX-JorgeNeural"},
    {"n": "038", "id": "BioScan038", "voz": "es-CO-GonzaloNeural"},
    {"n": "039", "id": "BioScan039", "voz": "es-ES-AlvaroNeural"},
    {"n": "040", "id": "BioScan040", "voz": "es-CL-LorenzoNeural"},
]

DONE_FILE = OUT / "_progreso.txt"
CHROME    = r"C:\Users\ADMIN\AppData\Local\remotion\chrome-headless-shell-win64\chrome-headless-shell.exe"

def log(msg: str):
    print(msg)
    with open(DONE_FILE, "a", encoding="utf-8") as f:
        f.write(msg + "\n")

def run(cmd, cwd=None):
    r = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="replace", cwd=cwd)
    return r.returncode, r.stdout, r.stderr

OUT.mkdir(parents=True, exist_ok=True)

# -- GATE 1: Audios TTS generados ---------------------------------------------
print("\n[STEP 1] Verificando audios TTS...")
missing = [v for v in VIDEOS if not (BASE / "public" / "audio" / f"bioscan-{v['n']}.mp3").exists()]
if missing:
    print(f"  Faltan {len(missing)} audios. Generando...")
    rc, _, err = run([sys.executable, str(BASE / "scripts" / "gen_tts_batch04.py")])
    if rc != 0:
        print(f"[ERROR] TTS fallo: {err[-300:]}", file=sys.stderr)
        sys.exit(1)
else:
    print(f"  [OK] Todos los 10 audios encontrados")

# -- GATE 2: TypeScript check --------------------------------------------------
print("\n[STEP 2] Verificando TypeScript...")
rc, out, err = run([NPX, "tsc", "--noEmit"], cwd=str(BASE))
if rc != 0:
    print(f"[ERROR] TypeScript: {(err or out)[-500:]}", file=sys.stderr)
    sys.exit(1)
print("  [OK] TypeScript limpio")

# -- STEP 3: Render uno a uno --------------------------------------------------
from datetime import datetime
log(f"\n=== BATCH 04 -- {datetime.now().strftime('%Y-%m-%d %H:%M')} ===")

for v in VIDEOS:
    n, comp_id, voz = v["n"], v["id"], v["voz"]
    mp4_name = f"{n}_bioscan_{voz}.mp4"
    mp4_out  = OUT / mp4_name
    tmp_out  = BASE / "output" / f"{comp_id}.mp4"

    print(f"\n[RENDER] {comp_id}...")
    cmd = [
        NPX, "remotion", "render",
        comp_id,
        str(tmp_out),
        "--concurrency=2",
        f"--browser-executable={CHROME}",
    ]
    rc, out, err = run(cmd, cwd=str(BASE))
    if rc != 0:
        log(f"[X]    {mp4_name} -- FALLO")
        print(err[-500:], file=sys.stderr)
        continue

    shutil.copy2(str(tmp_out), str(mp4_out))
    size_mb = mp4_out.stat().st_size / (1024 * 1024)
    log(f"[OK]   {mp4_name} -- {size_mb:.1f} MB")

print(f"\n[DONE] Batch 04 completo. Revisa D:\\500 videos bioscan\\")
