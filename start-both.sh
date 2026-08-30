#!/usr/bin/env bash
PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "=========================================================="
echo "🚀 Launching Both Portfolios Side-by-Side for Comparison"
echo "=========================================================="
echo "🟢 V1_Vanilla:    http://localhost:3001"
echo "⚛️  V2_React-Vite: http://localhost:3002"
echo "=========================================================="

# Start V1 on Port 3001
(cd "$PROJECT_DIR/V1_Vanilla" && python3 -m http.server 3001) &
PID_V1=$!

# Start V2 on Port 3002
if command -v npm &> /dev/null; then
  (cd "$PROJECT_DIR/V2_React-Vite" && npm run dev) &
  PID_V2=$!
else
  (cd "$PROJECT_DIR/V2_React-Vite" && python3 -m http.server 3002) &
  PID_V2=$!
fi

# Clean exit on Ctrl+C
trap "echo 'Stopping servers...'; kill $PID_V1 $PID_V2 2>/dev/null; exit" INT TERM EXIT

wait
