"""
deploy-vps.py
Deploy Video Ads Factory al VPS via SSH (paramiko).
Instala Node.js (si no existe), clona/actualiza el repo, PM2 y nginx.
"""

import paramiko
import time
import sys

VPS_HOST = '178.18.247.193'
VPS_USER = 'root'
VPS_PASS = '4YJYSs5L9E5OhoUi'
REPO_URL = 'https://github.com/Marte1978/video-ads-factory.git'
APP_DIR  = '/root/video-ads-factory'
APP_PORT = 4895
DOMAIN   = 'ads.webfactoryrd.com'

def run(ssh, cmd, desc=''):
    print(f'\n>> {desc or cmd[:60]}')
    stdin, stdout, stderr = ssh.exec_command(cmd, timeout=300)
    out = stdout.read().decode()
    err = stderr.read().decode()
    if out.strip(): print(out.strip())
    if err.strip(): print('[stderr]', err.strip()[:300])
    return out, err

def main():
    print(f'[*] Conectando a {VPS_HOST}...')
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect(VPS_HOST, username=VPS_USER, password=VPS_PASS, timeout=30)
    print('[OK] Conectado')

    # 1. Instalar Node.js 20 si no existe
    out, _ = run(ssh, 'node --version 2>/dev/null || echo MISSING', 'Verificar Node.js')
    if 'MISSING' in out or 'v1' in out:
        run(ssh, 'curl -fsSL https://deb.nodesource.com/setup_20.x | bash -', 'Instalar Node.js 20 (setup)')
        run(ssh, 'apt-get install -y nodejs', 'Instalar Node.js 20')
    else:
        print(f'   Node.js ya instalado: {out.strip()}')

    # 2. Instalar PM2 globalmente si no existe
    out, _ = run(ssh, 'pm2 --version 2>/dev/null || echo MISSING', 'Verificar PM2')
    if 'MISSING' in out:
        run(ssh, 'npm install -g pm2', 'Instalar PM2')

    # 3. Instalar Chromium para Remotion
    out, _ = run(ssh, 'which chromium-browser 2>/dev/null || which chromium 2>/dev/null || echo MISSING', 'Verificar Chromium')
    if 'MISSING' in out:
        run(ssh, 'apt-get install -y chromium-browser 2>/dev/null || apt-get install -y chromium 2>/dev/null || true', 'Instalar Chromium')

    # 4. Clonar o actualizar repo
    out, _ = run(ssh, f'ls {APP_DIR} 2>/dev/null || echo MISSING', 'Verificar repo existente')
    if 'MISSING' in out:
        run(ssh, f'git clone {REPO_URL} {APP_DIR}', 'Clonar repo')
    else:
        run(ssh, f'cd {APP_DIR} && git pull origin master', 'Actualizar repo')

    # 5. Crear carpetas necesarias y npm install
    run(ssh, f'mkdir -p {APP_DIR}/public/audio {APP_DIR}/public/preview {APP_DIR}/out', 'Crear carpetas')
    run(ssh, f'cd {APP_DIR} && npm install --production', 'npm install')

    # 6. Arrancar/reiniciar con PM2
    out, _ = run(ssh, 'pm2 list 2>/dev/null', 'Listar procesos PM2')
    if 'video-ads-factory' in out:
        run(ssh, f'cd {APP_DIR} && pm2 reload video-ads-factory', 'Recargar PM2')
    else:
        run(ssh, f'cd {APP_DIR} && PORT={APP_PORT} pm2 start ecosystem.config.js', 'Arrancar PM2')
    run(ssh, 'pm2 save', 'Guardar PM2')
    run(ssh, 'pm2 startup systemd -u root --hp /root 2>/dev/null | tail -1 | bash 2>/dev/null || true', 'PM2 startup')

    # 7. Configurar nginx
    nginx_conf = f"""server {{
    listen 80;
    server_name {DOMAIN};

    client_max_body_size 50M;

    location / {{
        proxy_pass http://127.0.0.1:{APP_PORT};
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 300s;
        proxy_send_timeout 300s;
    }}
}}"""
    # Escribir archivo nginx
    run(ssh, f"echo '{nginx_conf}' > /etc/nginx/sites-available/video-ads-factory", 'Escribir config nginx')
    run(ssh, 'ln -sf /etc/nginx/sites-available/video-ads-factory /etc/nginx/sites-enabled/video-ads-factory', 'Activar site nginx')
    run(ssh, 'nginx -t', 'Verificar nginx config')
    run(ssh, 'systemctl reload nginx', 'Recargar nginx')

    # 8. Verificar que el proceso está UP
    time.sleep(2)
    out, _ = run(ssh, f'curl -s http://127.0.0.1:{APP_PORT}/ | head -c 100', 'Verificar panel responde')

    print(f'\n[DONE] Deploy completado')
    print(f'   Panel VPS: http://127.0.0.1:{APP_PORT}')
    print(f'   Dominio:   http://{DOMAIN}  (DNS pendiente)')

    ssh.close()

if __name__ == '__main__':
    main()
