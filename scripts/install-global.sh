# Install desktop file with proper paths
install_desktop_file() {
    local install_dir="$1"
    local desktop_file="$install_dir/kitty_config.desktop"
    
    # Create desktop file with correct path
    cat > "$desktop_file" << EOF
[Desktop Entry]
Name=Kitty Config Engine
Comment=Graphical Configuration for Kitty Terminal
Exec=$install_dir/start_kitty_config_gui.sh
Icon=preferences-system
Terminal=false
Type=Application
Categories=Settings;System;
StartupNotify=true
Keywords=terminal;config;settings;kitty;customize;
Version=2.0.0
EOF
    
    chmod +x "$desktop_file"
    
    # Install to applications directory
    mkdir -p ~/.local/share/applications
    cp "$desktop_file" ~/.local/share/applications/
    
    # Update icon cache if possible
    if command -v update-desktop-database &> /dev/null; then
        update-desktop-database ~/.local/share/applications/
    fi
}