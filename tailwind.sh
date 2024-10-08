#!/bin/bash
case "$1" in
    watch)
      bun run tailwindcss -i ./tailwind.styles.css -o ./docs/assets/css/app.css --watch --minify
      ;;
    *)
      bun run tailwindcss -i ./tailwind.styles.css -o ./docs/assets/css/app.css --minify
      ;;
esac
