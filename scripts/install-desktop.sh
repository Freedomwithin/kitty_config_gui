#!/bin/bash
# Install Kitty Config Engine desktop entry

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DESKTOP_FILE="$HOME/.local/share/applications/kitty_config.desktop"

cat > "$DESKTOP_FILE" << EOF
[Desktop Entry]
Name=Kitty Config Engine
Comment=Graphical Configuration for Kitty Terminal
Exec=$PROJECT_ROOT/scripts/start_kitty_config_gui.sh
Icon=$PROJECT_ROOT/assets/kitty_config_gui_icon.png
Terminal=false
Type=Application
Categories=Settings;System;
EOF

chmod +x "$DESKTOP_FILE"
echo "✅ Desktop entry installed to: $DESKTOP_FILE"