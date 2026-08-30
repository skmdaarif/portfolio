#!/usr/bin/env bash
echo "Starting V1_Vanilla on http://localhost:3001 ..."
cd "$(dirname "$0")/V1_Vanilla" || exit 1
python3 -m http.server 3001
