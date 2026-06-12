#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
MAX_DIM=1200
QUALITY=60

optimize_jpeg() {
  local file="$1"
  local width
  width=$(sips -g pixelWidth "$file" 2>/dev/null | awk '/pixelWidth:/ {print $2}')
  if [[ -z "${width:-}" ]]; then
    return
  fi
  if (( width > MAX_DIM )); then
    sips -Z "$MAX_DIM" "$file" >/dev/null
  fi
  sips -s formatOptions "$QUALITY" "$file" >/dev/null 2>&1 || true
}

echo "Optimizing service images..."
while IFS= read -r -d '' file; do
  optimize_jpeg "$file"
done < <(find "$ROOT/public/services" -type f \( \
  -iname "*.jpeg" -o -iname "*.jpg" \) ! -path "*/images_to_sort/*" -print0)

echo "Creating optimized tyler.jpg..."
sips -s format jpeg -Z 600 -s formatOptions 55 \
  "$ROOT/public/tyler.webp" \
  --out "$ROOT/public/tyler.jpg" >/dev/null 2>/dev/null || \
sips -Z 600 -s formatOptions 55 "$ROOT/public/tyler.jpg" >/dev/null

echo "Creating hero.jpg..."
if [[ -f "$ROOT/public/services/shared/bmw-side.jpeg" ]]; then
  sips -Z 700 -s formatOptions 50 \
    "$ROOT/public/services/shared/bmw-side.jpeg" \
    --out "$ROOT/public/hero.jpg" >/dev/null
fi

echo "Done."
