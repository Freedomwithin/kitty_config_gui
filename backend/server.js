const express = require('express');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const cors = require('cors');
const schema = require('./kitty-schema');

const app = express();
app.use(express.json());
app.use(cors());

const frontendPath = path.resolve(__dirname, '../frontend/public');
app.use(express.static(frontendPath));

const KITTY_CONF_PATH = path.join(process.env.HOME, '.config/kitty/kitty.conf');

// Serve schema to frontend
app.get('/api/schema', (req, res) => {
  res.json({ success: true, data: schema });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// Dynamic Font Discovery
app.get('/api/fonts', (req, res) => {
  exec('fc-list :spacing=100 family | cut -d: -f1 | sort -u', (error, stdout) => {
    if (error) return res.status(500).json({ success: false, error: error.message });
    const fonts = stdout.split('\n')
      .map(f => f.trim())
      .filter(f => f && !f.includes(',') && !f.includes('-') && !f.includes('_'));
    res.json({ success: true, data: fonts });
  });
});

const parseConfig = (configText) => {
  const extract = (key, fallback) => {
    const regex = new RegExp(`^#?\\s*${key}\\s+(.+)$`, 'm');
    const match = configText.match(regex);
    return match ? match[1].trim() : fallback;
  };

  const result = {};
  Object.values(schema.categories).forEach(category => {
    Object.entries(category.settings).forEach(([key, setting]) => {
      result[key] = extract(key, setting.default);
    });
  });
  return result;
};

app.get('/api/config', (req, res) => {
  try {
    if (!fs.existsSync(KITTY_CONF_PATH)) return res.json({ success: true, data: {} });
    const rawConfig = fs.readFileSync(KITTY_CONF_PATH, 'utf8');
    res.json({ success: true, data: parseConfig(rawConfig) });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/select-all', (req, res) => {
  exec('kitty @ select-text --all', (error) => {
    if (error) return res.status(500).json({ success: false, error: error.message });
    res.json({ success: true });
  });
});

app.post('/api/config', (req, res) => {
  const newSettings = req.body;
  try {
    if (fs.existsSync(KITTY_CONF_PATH)) {
      const dateStr = new Date().toISOString().replace(/[:.]/g, '-');
      const backupPath = `${KITTY_CONF_PATH}.bak_${dateStr}`;
      fs.copyFileSync(KITTY_CONF_PATH, backupPath);
      console.log(`[Backup Created] ${backupPath}`);
    }

    let configText = fs.existsSync(KITTY_CONF_PATH) ? fs.readFileSync(KITTY_CONF_PATH, 'utf8') : '';
    
    for (const [key, value] of Object.entries(newSettings)) {
      const regex = new RegExp(`^#?\\s*${key}\\s+.*$`, 'm');
      const replacement = `${key} ${value}`;
      
      if (configText.match(regex)) {
        configText = configText.replace(regex, replacement);
      } else {
        configText += `\n${replacement}`;
      }
    }
    
    fs.writeFileSync(KITTY_CONF_PATH, configText.trim() + '\n', 'utf8');
    exec('pkill -USR1 kitty', (error) => {
      if (error) console.warn('Could not reload kitty:', error.message);
    });
    
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = 3040;
app.listen(PORT, () => {
  console.log(`\n[Kitty Config GUI] Service Active`);
  console.log(`Access at: http://localhost:${PORT}\n`);
});