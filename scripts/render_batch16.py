"""
render_batch16.py -- Renderiza los 10 videos del Batch 16 (copies 151-160).
Salida: D:/500 videos bioscan/
"""
import subprocess, sys, os, shutil
from pathlib import Path

BASE   = Path(__file__).parent.parent
OUT    = Path(r"D:\500 videos bioscan")
NPX    = "npx.cmd" if os.name == "nt" else "npx"

VIDEOS = [
    {"n": "151", "id": "BioScan151", "voz": "es-ES-AlvaroNeural"},
    {"n": "152", "id": "BioScan152", "voz": "es-CL-LorenzoNeural"},
    {"n": "153", "id": "BioScan153", "voz": "es-CO-GonzaloNeural"},
    {"n": "154", "id": "BioScan154", "voz": "es-MX-JorgeNeural"},
    {"n": "155", "id": "BioScan155", "voz": "es-ES-AlvaroNeural"},
    {"n": "156", "id": "BioScan156", "voz": "es-CL-LorenzoNeural"},
    {"n": "157", "id": "BioScan157", "voz": "es-CO-GonzaloNeural"},
    {"n": "158", "id": "BioScan158", "voz": "es-MX-JorgeNeural"},
    {"n": "159", "id": "BioScan159", "voz": "es-ES-AlvaroNeural"},
    {"n": "160", "id": "BioScan160", "voz": "es-CL-LorenzoNeural"},
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
    rc, _, err = run([sys.executable, str(BASE / "scripts" / "gen_tts_batch16.py")])
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
log(f"\n=== BATCH 16 -- {datetime.now().strftime('%Y-%m-%d %H:%M')} ===")

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

print(f"\n[DONE] Batch 16 completo. Revisa D:\\500 videos bioscan\\")
