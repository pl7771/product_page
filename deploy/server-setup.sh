#!/usr/bin/env bash
# One-time server setup for Alibaba Cloud Linux 3.
# Run on the server as root, from the repo root:
#   bash deploy/server-setup.sh
set -euo pipefail

APP_DIR=/var/www/hbshandao
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "==> Node.js 22"
if ! command -v node >/dev/null 2>&1 || [[ "$(node -p "process.versions.node.split('.')[0]")" -lt 22 ]]; then
  curl -fsSL https://rpm.nodesource.com/setup_22.x | bash -
  dnf install -y nodejs
fi
node -v
npm -v

echo "==> PM2"
if ! command -v pm2 >/dev/null 2>&1; then
  npm install -g pm2
fi

echo "==> rsync (optional, for manual deploys)"
dnf install -y rsync

echo "==> App directories"
mkdir -p "$APP_DIR/server/data"
chmod 755 "$APP_DIR" "$APP_DIR/server" "$APP_DIR/server/data"

echo "==> nginx site config"
if [[ -f /etc/nginx/conf.d/default.conf ]]; then
  mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.bak
fi
cp "$SCRIPT_DIR/nginx/hbshandao.conf" /etc/nginx/conf.d/hbshandao.conf
nginx -t
systemctl enable nginx
systemctl reload nginx

echo "==> PM2 startup on boot"
pm2 startup systemd -u root --hp /root | tail -1 | bash || true

echo ""
echo "Done. Next:"
echo "  1. Optional: copy articles.db to $APP_DIR/server/data/"
echo "  2. Merge to main and push — GitHub Actions will deploy"
echo "  3. Open http://YOUR_SERVER_IP"
