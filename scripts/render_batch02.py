"""
render_batch02.py -- Renderiza los 10 videos del Batch 02 (copies 011-020).
Salida: D:\500 videos bioscan\
Verifica TTS -> TypeScript -> Render uno a uno con gate.
"""
import subprocess, sys, os, shutil
from pathlib import Path

BASE   = Path(__file__).parent.parent
OUT    = Path(r"D:\500 videos bioscan")
NPX    = "npx.cmd" if os.name == "nt" else "npx"

VIDEOS = [
    {"n": "011", "id": "BioScan011", "voz": "es-ES-AlvaroNeural"},
    {"n": "012", "id": "BioScan012", "voz": "es-CL-LorenzoNeural"},
    {"n": "013", "id": "BioScan013", "voz": "es-CO-GonzaloNeural"},
    {"n": "014", "id": "BioScan014", "voz": "es-MX-JorgeNeural"},
    {"n": "015", "id": "BioScan015", "voz": "es-ES-AlvaroNeural"},
    {"n": "016", "id": "BioScan016", "voz": "es-CL-LorenzoNeural"},
    {"n": "017", "id": "BioScan017", "voz": "es-CO-GonzaloNeural"},
    {"n": "018", "id": "BioScan018", "voz": "es-MX-JorgeNeural"},
    {"n": "019", "id": "BioScan019", "voz": "es-ES-AlvaroNeural"},
    {"n": "020", "id": "BioScan020", "voz": "es-CL-LorenzoNeural"},
]

DONE_FILE = OUT / "_progreso.txt"
CHROME    = r"C:\Users\ADMIN\AppData\Local\remotion\chrome-headless-shell-win64\chrome-headless-shell.exe"

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

# -- GATE 1: Audios TTS generados ---------------------------------------------
print("\n[STEP 1] Verificando audios TTS...")
missing = [v for v in VIDEOS if not (BASE / "public" / "audio" / f"bioscan-{v['n']}.mp3").exists()]
if missing:
    print(f"  Faltan {len(missing)} audios. Generando...")
    rc, _, err = run([sys.executable, str(BASE / "scripts" / "gen_tts_batch02.py")])
    gate("Generacion TTS", rc == 0, err[-300:] if err else "")
else:
    print(f"  [OK] Todos los 10 audios encontrados")

# -- GATE 2: TypeScript check --------------------------------------------------
print("\n[STEP 2] Verificando TypeScript...")
rc, out, err = run([NPX, "tsc", "--noEmit"], cwd=str(BASE))
gate("TypeScript check", rc == 0, (err or out)[-500:])

# -- STEP 3: Render uno a uno --------------------------------------------------
from datetime import datetime
log(f"\n=== BATCH 02 -- {datetime.now().strftime('%Y-%m-%d %H:%M')} ===")

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

    # Copiar al destino final
    shutil.copy2(str(tmp_out), str(mp4_out))
    size_mb = mp4_out.stat().st_size / (1024 * 1024)
    log(f"[OK]   {mp4_name} -- {size_mb:.1f} MB")

print(f"\n[DONE] Batch 02 completo. Revisa D:\\500 videos bioscan\\")
