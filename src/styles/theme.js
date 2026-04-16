// theme.js
const theme = {
  colors: {
    background:          '#07070f',
    backgroundSecondary: '#07070f',
    surface:             '#0f0f1f',
    surfaceHover:        '#141432',
    text:                '#eaeaf5',
    textSecondary:       '#7070a0',
    accent:              '#8b5cf6',
    accentHover:         '#7c3aed',
    accentGlow:          'rgba(139, 92, 246, 0.18)',
    accentDim:           'rgba(139, 92, 246, 0.08)',
    border:              'rgba(255, 255, 255, 0.07)',
    borderAccent:        'rgba(139, 92, 246, 0.28)',
    overlay:             'rgba(0, 0, 0, 0.84)',
    // Legacy aliases kept for header / any untouched component
    cardBg:              '#0f0f1f',
    cardHover:           '#141432',
    mobileMenuBg:        'rgba(7, 7, 15, 0.97)',
    shadow:              '#000',
  },
  fonts: {
    body: "'Plus Jakarta Sans', system-ui, sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  shadows: {
    card:   '0 2px 12px rgba(0,0,0,0.5)',
    hover:  '0 12px 48px rgba(139, 92, 246, 0.18)',
    header: '0 1px 0 rgba(255,255,255,0.05)',
    modal:  '0 40px 100px rgba(0,0,0,0.78)',
  },
  transitions: {
    default: 'all 0.25s ease',
    hover:   'color 0.2s ease, background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};

export default theme;
