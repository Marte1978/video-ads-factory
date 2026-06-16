"""
render_batch11.py -- Renderiza los 10 videos del Batch 11 (copies 101-110).
Salida: D:/500 videos bioscan/
"""
import subprocess, sys, os, shutil
from pathlib import Path

BASE   = Path(__file__).parent.parent
OUT    = Path(r"D:\500 videos bioscan")
NPX    = "npx.cmd" if os.name == "nt" else "npx"

VIDEOS = [
    {"n": "101", "id": "BioScan101", "voz": "es-CO-GonzaloNeural"},
    {"n": "102", "id": "BioScan102", "voz": "es-MX-JorgeNeural"},
    {"n": "103", "id": "BioScan103", "voz": "es-ES-AlvaroNeural"},
    {"n": "104", "id": "BioScan104", "voz": "es-CL-LorenzoNeural"},
    {"n": "105", "id": "BioScan105", "voz": "es-CO-GonzaloNeural"},
    {"n": "106", "id": "BioScan106", "voz": "es-MX-JorgeNeural"},
    {"n": "107", "id": "BioScan107", "voz": "es-ES-AlvaroNeural"},
    {"n": "108", "id": "BioScan108", "voz": "es-CL-LorenzoNeural"},
    {"n": "109", "id": "BioScan109", "voz": "es-CO-GonzaloNeural"},
    {"n": "110", "id": "BioScan110", "voz": "es-MX-JorgeNeural"},
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

print("\n[STEP 1] Verificando audios TTS...")
missing = [v for v in VIDEOS if not (BASE / "public" / "audio" / f"bioscan-{v['n']}.mp3").exists()]
if missing:
    print(f"  Faltan {len(missing)} audios. Generando...")
    rc, _, err = run([sys.executable, str(BASE / "scripts" / "gen_tts_batch11.py")])
    if rc != 0:
        print(f"[ERROR] TTS fallo: {err[-300:]}", file=sys.stderr)
        sys.exit(1)
else:
    print(f"  [OK] Todos los 10 audios encontrados")

print("\n[STEP 2] Verificando TypeScript...")
rc, out, err = run([NPX, "tsc", "--noEmit"], cwd=str(BASE))
if rc != 0:
    print(f"[ERROR] TypeScript: {(err or out)[-500:]}", file=sys.stderr)
    sys.exit(1)
print("  [OK] TypeScript limpio")

from datetime import datetime
log(f"\n=== BATCH 11 -- {datetime.now().strftime('%Y-%m-%d %H:%M')} ===")

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
        print(f"  [RETRY] Primer intento fallo. Reintentando...")
        rc, out, err = run(cmd, cwd=str(BASE))
    if rc != 0:
        log(f"[X]    {mp4_name} -- FALLO")
        print(err[-500:], file=sys.stderr)
        continue

    shutil.copy2(str(tmp_out), str(mp4_out))
    size_mb = mp4_out.stat().st_size / (1024 * 1024)
    log(f"[OK]   {mp4_name} -- {size_mb:.1f} MB")

print(f"\n[DONE] Batch 11 completo. Revisa D:\\500 videos bioscan\\")
