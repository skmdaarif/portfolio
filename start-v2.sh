#!/usr/bin/env bash
cd "$(dirname "$0")/V2_React-Vite" || exit 1

if command -v npm &> /dev/null; then
  echo "🚀 Node.js & npm detected. Starting Vite React server on port 3002..."
  if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
  fi
  npm run dev
else
  echo "⚠️ Node.js/npm is not installed on this system."
  echo "💡 Starting standalone React server on http://localhost:3002 via Python..."
  echo "👉 (To use full Vite dev server, run: sudo pacman -S nodejs npm)"
  python3 -m http.server 3002
fi
