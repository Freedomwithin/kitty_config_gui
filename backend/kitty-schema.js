// backend/kitty-schema.js
module.exports = {
  categories: {
    'Font & Text': {
      icon: '🔤',
      description: 'Control the appearance of text in your terminal',
      settings: {
        font_family: {
          type: 'font-select',
          label: 'Font Family',
          default: 'Victor Mono',
          description: 'The primary typeface used for all terminal text. Choose a monospace font for best results.'
        },
        font_size: {
          type: 'number',
          label: 'Font Size',
          default: 11.0,
          min: 6,
          max: 36,
          step: 0.5,
          description: 'Base font size in points. Larger values make text easier to read but reduce visible content.'
        },
        bold_font: {
          type: 'font-select',
          label: 'Bold Font',
          default: 'auto',
          description: 'Font used when text is displayed in bold. Set to "auto" to use the primary font family.'
        },
        italic_font: {
          type: 'font-select',
          label: 'Italic Font',
          default: 'auto',
          description: 'Font used for italic text styling. Set to "auto" to use the primary font family.'
        },
        bold_italic_font: {
          type: 'font-select',
          label: 'Bold Italic Font',
          default: 'auto',
          description: 'Font used for text that is both bold and italic. Set to "auto" to use the primary font family.'
        },
        font_features: {
          type: 'text',
          label: 'OpenType Features',
          default: '',
          description: 'Advanced typography features like "ss01" for stylistic alternates, "calt" for contextual alternates, or "liga" for ligatures.'
        },
        adjust_line_height: {
          type: 'range',
          label: 'Line Height Multiplier',
          default: 1.0,
          min: 0.8,
          max: 2.0,
          step: 0.05,
          description: 'Adjusts the vertical spacing between lines of text. Higher values create more breathing room.'
        },
        adjust_column_width: {
          type: 'range',
          label: 'Column Width Multiplier',
          default: 1.0,
          min: 0.8,
          max: 1.5,
          step: 0.05,
          description: 'Adjusts the horizontal spacing between characters. Useful for fonts that need character width tuning.'
        }
      }
    },
    'Colors & Appearance': {
      icon: '🎨',
      description: 'Customize the color scheme of your terminal. Each color plays a specific role in the terminal display.',
      settings: {
        foreground: {
          type: 'color',
          label: 'Default Text Color',
          default: '#00f0ff',
          description: 'Primary color for all standard text output. This is the color you see for most terminal commands and outputs.'
        },
        background: {
          type: 'color',
          label: 'Terminal Background',
          default: '#050505',
          description: 'The base background color of the terminal window. Dark colors help reduce eye strain during long sessions.'
        },
        selection_background: {
          type: 'color',
          label: 'Selection Background',
          default: '#26265e',
          description: 'Background color applied to text that you have selected/highlighted in the terminal.'
        },
        selection_foreground: {
          type: 'color',
          label: 'Selection Text Color',
          default: '#ffffff',
          description: 'Text color for content that has been selected/highlighted in the terminal.'
        },
        color0: { 
          type: 'color', 
          label: 'Black (Color 0)', 
          default: '#000000',
          description: 'The standard black color in the 16-color palette. Used by programs that request color 0.'
        },
        color1: { 
          type: 'color', 
          label: 'Red (Color 1)', 
          default: '#ff0000',
          description: 'Standard red in the 16-color palette. Often used for errors, warnings, or important alerts.'
        },
        color2: { 
          type: 'color', 
          label: 'Green (Color 2)', 
          default: '#00ff00',
          description: 'Standard green in the 16-color palette. Frequently used for success messages, file permissions, and git status.'
        },
        color3: { 
          type: 'color', 
          label: 'Yellow (Color 3)', 
          default: '#ffff00',
          description: 'Standard yellow in the 16-color palette. Used for warnings, notes, and some syntax highlighting.'
        },
        color4: { 
          type: 'color', 
          label: 'Blue (Color 4)', 
          default: '#0080ff',
          description: 'Standard blue in the 16-color palette. Often used for directory names, links, and user information.'
        },
        color5: { 
          type: 'color', 
          label: 'Magenta (Color 5)', 
          default: '#bc00ff',
          description: 'Standard magenta in the 16-color palette. Used for hostnames, file types, and some Vim syntax elements.'
        },
        color6: { 
          type: 'color', 
          label: 'Cyan (Color 6)', 
          default: '#00cdcd',
          description: 'Standard cyan in the 16-color palette. Often used for paths, environment variables, and command prompts.'
        },
        color7: { 
          type: 'color', 
          label: 'White (Color 7)', 
          default: '#e5e5e5',
          description: 'Standard white in the 16-color palette. Used for default text in some applications and shell prompts.'
        },
        color8: { 
          type: 'color', 
          label: 'Bright Black (Color 8)', 
          default: '#666666',
          description: 'Bright version of black in the 16-color palette. Used for muted or less important text elements.'
        },
        color9: { 
          type: 'color', 
          label: 'Bright Red (Color 9)', 
          default: '#ff3333',
          description: 'Bright version of red. Used for critical errors, dangerous operations, or high-priority alerts.'
        },
        color10: { 
          type: 'color', 
          label: 'Bright Green (Color 10)', 
          default: '#33ff33',
          description: 'Bright version of green. Used for successful operations, completion messages, and positive status.'
        },
        color11: { 
          type: 'color', 
          label: 'Bright Yellow (Color 11)', 
          default: '#ffff33',
          description: 'Bright version of yellow. Used for important warnings, deprecated functions, and attention-grabbing notes.'
        },
        color12: { 
          type: 'color', 
          label: 'Bright Blue (Color 12)', 
          default: '#3333ff',
          description: 'Bright version of blue. Used for emphasized information, active links, and key user interface elements.'
        },
        color13: { 
          type: 'color', 
          label: 'Bright Magenta (Color 13)', 
          default: '#cc33ff',
          description: 'Bright version of magenta. Used for special highlighting, matching parentheses, and some syntax highlighting.'
        },
        color14: { 
          type: 'color', 
          label: 'Bright Cyan (Color 14)', 
          default: '#33ffff',
          description: 'Bright version of cyan. Used for important paths, special variables, and progress indicators.'
        },
        color15: { 
          type: 'color', 
          label: 'Bright White (Color 15)', 
          default: '#ffffff',
          description: 'Bright version of white. Used for the brightest text elements, often for emphasis or high contrast.'
        },
        cursor_color: {
          type: 'color',
          label: 'Cursor Color',
          default: '#00f0ff',
          description: 'The color of the blinking cursor that shows your current typing position in the terminal.'
        },
        cursor_text_color: {
          type: 'color',
          label: 'Cursor Text Color',
          default: '#050505',
          description: 'The color of text characters when the cursor is positioned over them. This inverts or changes the text color at the cursor position.'
        },
        url_color: {
          type: 'color',
          label: 'URL Highlight Color',
          default: '#0087bd',
          description: 'Color used to highlight clickable URLs when detected in terminal output. Makes web links stand out.'
        },
        wayland_titlebar_color: {
          type: 'color',
          label: 'Wayland Titlebar Color',
          default: '#000000',
          description: 'Color of the window titlebar when running under Wayland display server. Only visible on Wayland systems.'
        }
      }
    },
    'Window & Layout': {
      icon: '🪟',
      description: 'Configure how the terminal window looks and behaves on your desktop',
      settings: {
        window_padding_width: {
          type: 'text',
          label: 'Window Padding',
          default: '0',
          description: 'Space between the terminal text and the window edges. Format: "left right top bottom" (e.g., "30 50 30 450") or a single value for all sides.'
        },
        window_margin_width: {
          type: 'text',
          label: 'Window Margin',
          default: '0',
          description: 'Space outside the terminal window border. Format: "left right top bottom" or a single value.'
        },
        remember_window_size: {
          type: 'boolean',
          label: 'Remember Window Size',
          default: true,
          description: 'When enabled, Kitty remembers your window size between launches and restores it automatically.'
        },
        initial_window_width: {
          type: 'number',
          label: 'Default Window Width',
          default: 1000,
          min: 400,
          max: 3000,
          description: 'The width of the terminal window when first launched, in pixels.'
        },
        initial_window_height: {
          type: 'number',
          label: 'Default Window Height',
          default: 600,
          min: 300,
          max: 2000,
          description: 'The height of the terminal window when first launched, in pixels.'
        },
        resize_draw_strategy: {
          type: 'select',
          label: 'Resize Drawing Strategy',
          default: 'size',
          options: ['size', 'scale', 'none'],
          description: '"size": Redraw at new size. "scale": Scale existing content. "none": Don\'t redraw during resize.'
        },
        resize_in_steps: {
          type: 'boolean',
          label: 'Resize in Character Steps',
          default: false,
          description: 'When enabled, window resizes in increments of character cells rather than pixels. Prevents text distortion.'
        },
        hide_window_decorations: {
          type: 'boolean',
          label: 'Hide Window Decorations',
          default: false,
          description: 'Remove the title bar, minimize/maximize buttons, and window border for a cleaner, frameless look.'
        },
        background_opacity: {
          type: 'range',
          label: 'Window Opacity',
          default: 0.85,
          min: 0.0,
          max: 1.0,
          step: 0.05,
          description: 'Controls the transparency of the terminal window. 1.0 = fully opaque, 0.0 = fully transparent.'
        },
        background_tint: {
          type: 'color',
          label: 'Background Tint Color',
          default: '#000000',
          description: 'A color to blend with the transparent background. This creates a colored tint effect when opacity is less than 1.0.'
        },
        dynamic_background_opacity: {
          type: 'boolean',
          label: 'Dynamic Opacity',
          default: false,
          description: 'When enabled, terminal opacity changes based on whether the window is active (focused) or inactive.'
        },
        inactive_text_alpha: {
          type: 'range',
          label: 'Inactive Window Text Alpha',
          default: 1.0,
          min: 0.3,
          max: 1.0,
          step: 0.05,
          description: 'Text opacity when the window is not in focus. Lower values make text fade when switching to other apps.'
        }
      }
    },
    'Cursor & Selection': {
      icon: '✏️',
      description: 'Customize how the cursor behaves and how text selection works',
      settings: {
        cursor: {
          type: 'select',
          label: 'Cursor Style',
          default: 'block',
          options: ['block', 'beam', 'underline'],
          description: 'Shape of the cursor: "block" = filled rectangle, "beam" = vertical line (like in text editors), "underline" = horizontal line.'
        },
        cursor_shape: {
          type: 'select',
          label: 'Cursor Shape (Alias)',
          default: 'block',
          options: ['block', 'beam', 'underline'],
          description: 'Alternative name for cursor style. Changes the visual appearance of the cursor.'
        },
        cursor_blink_interval: {
          type: 'number',
          label: 'Cursor Blink Speed',
          default: 0.5,
          min: 0.1,
          max: 2.0,
          step: 0.1,
          description: 'How fast the cursor blinks, in seconds between blinks. Lower values = faster blinking.'
        },
        cursor_stop_blinking_after: {
          type: 'number',
          label: 'Stop Blinking After Inactivity',
          default: 2.0,
          min: 0.5,
          max: 10.0,
          step: 0.5,
          description: 'Cursor stops blinking after this many seconds of keyboard/mouse inactivity. Set to 0 to never stop.'
        },
        cursor_trail: {
          type: 'number',
          label: 'Cursor Trail Length',
          default: 5,
          min: 0,
          max: 20,
          description: 'Number of ghost cursor positions to show behind the cursor. Creates a trail effect when moving. 0 = no trail.'
        },
        copy_on_select: {
          type: 'boolean',
          label: 'Copy on Selection',
          default: true,
          description: 'When enabled, any text you select in the terminal is automatically copied to the clipboard without pressing Ctrl+C.'
        },
        strip_trailing_spaces: {
          type: 'boolean',
          label: 'Strip Trailing Spaces When Copying',
          default: true,
          description: 'Removes trailing whitespace from the end of lines when copying text to the clipboard.'
        },
        select_by_word_characters: {
          type: 'text',
          label: 'Word Selection Characters',
          default: '@-./_~?&=%+#',
          description: 'Characters that are considered part of a "word" for double-click selection. Add or remove characters as needed.'
        },
        rectangle_select_modifiers: {
          type: 'text',
          label: 'Rectangle Selection Modifier',
          default: 'ctrl+alt',
          description: 'Keyboard modifier keys to use for rectangular text selection (selecting a block of text rather than line-based).'
        }
      }
    },
    'Scrolling & Performance': {
      icon: '⚡',
      description: 'Control how Kitty handles scrolling, buffer management, and performance optimization',
      settings: {
        scrollback_lines: {
          type: 'number',
          label: 'Scrollback Buffer Size',
          default: 10000,
          min: 1000,
          max: 100000,
          step: 1000,
          description: 'Maximum number of lines to keep in memory for scrolling back. Higher values use more RAM but allow longer history.'
        },
        scrollback_pager: {
          type: 'text',
          label: 'Scrollback Pager Command',
          default: 'less -R',
          description: 'Command used to view scrollback buffer (e.g., "less", "more", "bat"). Use "-R" to preserve colors.'
        },
        scrollback_pager_history_size: {
          type: 'number',
          label: 'Pager History Size',
          default: 0,
          description: 'Number of lines to keep in the pager\'s history buffer. 0 = unlimited (use with caution on limited memory).'
        },
        wheel_scroll_multiplier: {
          type: 'number',
          label: 'Mouse Wheel Scroll Speed',
          default: 5.0,
          min: 1.0,
          max: 20.0,
          step: 0.5,
          description: 'Number of lines to scroll per mouse wheel tick. Higher values = faster scrolling.'
        },
        touch_scroll_multiplier: {
          type: 'number',
          label: 'Touchpad Scroll Speed',
          default: 1.0,
          min: 0.5,
          max: 5.0,
          step: 0.5,
          description: 'Scroll speed multiplier specifically for touchpad input. Adjust if touchpad scrolling feels too fast or slow.'
        },
        repaint_delay: {
          type: 'number',
          label: 'Screen Repaint Delay (ms)',
          default: 10,
          min: 1,
          max: 100,
          description: 'Minimum time between screen redraws. Lower values = smoother updates but more CPU usage. Higher values = less CPU but potentially choppier.'
        },
        input_delay: {
          type: 'number',
          label: 'Input Processing Delay (ms)',
          default: 3,
          min: 1,
          max: 50,
          description: 'Time to wait for additional input before rendering. Lower values = more responsive but higher CPU usage.'
        },
        sync_to_monitor: {
          type: 'boolean',
          label: 'Sync to Monitor Refresh Rate',
          default: true,
          description: 'Ties rendering to your monitor\'s refresh rate, reducing screen tearing. Uses slightly more CPU.'
        },
        fast_data_detection: {
          type: 'boolean',
          label: 'Fast Data Detection Mode',
          default: true,
          description: 'Detects when data is flowing quickly and reduces CPU usage by batching updates. Improves performance during rapid output.'
        }
      }
    },
    'Keyboard & Mouse': {
      icon: '⌨️',
      description: 'Configure keyboard shortcuts, mouse behavior, and URL handling',
      settings: {
        mouse_hide_wait: {
          type: 'number',
          label: 'Auto-Hide Mouse Delay',
          default: 2.0,
          min: 0.5,
          max: 10.0,
          step: 0.5,
          description: 'Time in seconds before the mouse cursor automatically hides when not moving. Set to 0 to never hide.'
        },
        url_style: {
          type: 'select',
          label: 'URL Underline Style',
          default: 'dotted',
          options: ['none', 'solid', 'dotted', 'dashed'],
          description: 'How detected URLs are underlined: "none" = no underline, "solid" = continuous line, "dotted" = dots, "dashed" = dashes.'
        },
        open_url_modifiers: {
          type: 'text',
          label: 'Open URL Modifier Keys',
          default: 'ctrl+shift',
          description: 'Modifier keys to hold while clicking a URL to open it. Format: "ctrl", "shift", "alt", or combinations like "ctrl+shift".'
        },
        open_url_with: {
          type: 'text',
          label: 'Open URL Command',
          default: 'default',
          description: 'Command to open URLs. Set to "default" for system browser. Custom: "firefox", "google-chrome", "xdg-open", etc.'
        },
        clipboard_control: {
          type: 'select',
          label: 'Clipboard Access Control',
          default: 'write-primary',
          options: ['write-primary', 'write-clipboard', 'no', 'write-primary write-clipboard'],
          description: '"write-primary": Access primary selection (middle-click). "write-clipboard": Access clipboard. "no": Block clipboard access. "write-primary write-clipboard": Allow both.'
        },
        allow_remote_control: {
          type: 'boolean',
          label: 'Allow Remote Control',
          default: false,
          description: 'Enables control via "kitty @ [command]" from the shell. Useful for automation but has security implications.'
        },
        enable_audio_bell: {
          type: 'boolean',
          label: 'Enable Audio Bell',
          default: true,
          description: 'Plays a system beep sound when the terminal bell is triggered (e.g., via Ctrl+G or error notifications).'
        },
        visual_bell_duration: {
          type: 'number',
          label: 'Visual Bell Duration',
          default: 0.3,
          min: 0.1,
          max: 1.0,
          step: 0.05,
          description: 'Duration in seconds of the visual flash when the terminal bell triggers. Set to 0 to disable visual bell.'
        },
        macos_option_as_alt: {
          type: 'boolean',
          label: 'macOS: Option as Alt',
          default: true,
          description: 'On macOS, treat the Option key as the Alt key in the terminal. Useful for keyboard shortcuts.'
        },
        macos_cmd_for_ctrl: {
          type: 'boolean',
          label: 'macOS: Cmd as Ctrl',
          default: false,
          description: 'On macOS, remap the Command key to function as Control. Great for muscle memory if coming from other OSes.'
        }
      }
    },
    'Terminal Behavior': {
      icon: '💻',
      description: 'Control how the terminal starts, runs, and integrates with your shell environment',
      settings: {
        shell_integration: {
          type: 'select',
          label: 'Shell Integration Mode',
          default: 'no-rc',
          options: ['no-rc', 'enabled', 'disabled'],
          description: '"enabled": Enable advanced shell features (PS1, prompts, etc.). "no-rc": Load without .rc files. "disabled": Turn off all shell integration.'
        },
        shell: {
          type: 'text',
          label: 'Shell Command',
          default: '.',
          description: 'The shell command to launch in the terminal. Leave as "." for the system default shell (bash/zsh/fish).'
        },
        env: {
          type: 'text',
          label: 'Environment Variables',
          default: '',
          description: 'Set environment variables for the terminal session. Format: "VAR1=value1 VAR2=value2" (space-separated).'
        },
        login_shell: {
          type: 'boolean',
          label: 'Start as Login Shell',
          default: false,
          description: 'When enabled, the shell starts as a login shell (-l), loading login-specific config files (~/.bash_profile, ~/.zprofile, etc.).'
        },
        confirm_os_exit: {
          type: 'boolean',
          label: 'Confirm Before Closing',
          default: false,
          description: 'Shows a confirmation dialog when trying to close the terminal window with active processes running.'
        },
        close_on_child_death: {
          type: 'boolean',
          label: 'Close When Child Process Exits',
          default: false,
          description: 'Automatically closes the terminal window when the main child process (shell) terminates.'
        },
        allow_dark_theme_variant: {
          type: 'boolean',
          label: 'Prefer Dark Theme Variant',
          default: true,
          description: 'When the system theme changes, prefer the dark variant of Kitty\'s theme for better consistency.'
        },
        macos_show_window_title: {
          type: 'boolean',
          label: 'macOS: Show Window Title',
          default: true,
          description: 'Display the terminal title in the macOS window title bar. Disable for a cleaner appearance.'
        },
        macos_secondary_screen: {
          type: 'select',
          label: 'macOS: Secondary Screen Position',
          default: 'default',
          options: ['default', 'same', 'top', 'bottom', 'left', 'right'],
          description: 'Where new windows open relative to the main window. "default": system default, "same": same screen, directional: specific side.'
        }
      }
    },
    'Advanced & Experimental': {
      icon: '🔬',
      description: 'Advanced settings for power users. These may have performance or compatibility implications.',
      settings: {
        underline_style: {
          type: 'select',
          label: 'Underline Style',
          default: 'curly',
          options: ['none', 'straight', 'curly', 'dashed', 'dotted'],
          description: 'Style of underlines when text is underlined: "none": no underline, "straight": simple line, "curly": wavy, "dashed": dashes, "dotted": dots.'
        },
        box_drawing_blocks: {
          type: 'select',
          label: 'Box Drawing Style',
          default: 'curly',
          options: ['curly', 'square', 'round', 'sharp'],
          description: 'Style of box drawing characters used in terminal UIs (like ncurses). "curly": rounded corners, "square": blocky, "round": circular, "sharp": very sharp.'
        },
        configure_between_launches: {
          type: 'boolean',
          label: 'Reload Config Between Launches',
          default: true,
          description: 'When enabled, Kitty reloads the configuration file each time a new terminal window is opened.'
        },
        editor: {
          type: 'text',
          label: 'Default Editor',
          default: '.',
          description: 'Default text editor to use for Kitty\'s internal commands. "." uses your system default editor.'
        },
        icat: {
          type: 'text',
          label: 'Image Display Command',
          default: 'kitty +kitten icat',
          description: 'Command used by Kitty to display images inline. Used by the "icat" kitten for image previews.'
        },
        unicode_character_width: {
          type: 'number',
          label: 'Unicode Character Width',
          default: 2,
          min: 0,
          max: 4,
          description: 'Width to display Unicode characters. 0 = auto-detect, 1 = single width, 2 = double width. Adjust if Unicode looks wrong.'
        }
      }
    }
  }
};