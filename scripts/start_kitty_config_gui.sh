#!/bin/bash
# Kitty Config GUI - Launcher

# 1. Kill any existing instances to prevent port/file conflicts
pkill -f "node backend/server.js"

# 2. Navigate to the project root directory
cd "$(dirname "$0")"

# 3. Start the Node.js backend in the background
# Output is redirected to a hidden log file for troubleshooting
nohup node backend/server.js > .gui_log.txt 2>&1 &

# 4. Wait for the server to initialize (approx 1 second)
sleep 1

# 5. Open the dashboard in the system default web browser
xdg-open http://localhost:3040