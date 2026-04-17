// theme.js

const shared = {
  fonts: {
    body: "'Plus Jakarta Sans', system-ui, sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  transitions: {
    default: 'all 0.25s ease',
    hover: 'color 0.2s ease, background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};

export const darkTheme = {
  ...shared,
  isDark: true,
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
    cardBg:              '#0f0f1f',
    cardHover:           '#141432',
    mobileMenuBg:        'rgba(7, 7, 15, 0.97)',
    shadow:              '#000',
  },
  shadows: {
    card:   '0 2px 12px rgba(0,0,0,0.5)',
    hover:  '0 12px 48px rgba(139, 92, 246, 0.18)',
    header: '0 1px 0 rgba(255,255,255,0.05)',
    modal:  '0 40px 100px rgba(0,0,0,0.78)',
  },
};

export const lightTheme = {
  ...shared,
  isDark: false,
  colors: {
    background:          '#f5f5fc',
    backgroundSecondary: '#ededf8',
    surface:             '#ffffff',
    surfaceHover:        '#f0f0fa',
    text:                '#12121e',
    textSecondary:       '#5a5a80',
    accent:              '#7c3aed',
    accentHover:         '#6d28d9',
    accentGlow:          'rgba(124, 58, 237, 0.14)',
    accentDim:           'rgba(124, 58, 237, 0.07)',
    border:              'rgba(0, 0, 0, 0.08)',
    borderAccent:        'rgba(124, 58, 237, 0.25)',
    overlay:             'rgba(0, 0, 0, 0.5)',
    cardBg:              '#ffffff',
    cardHover:           '#f0f0fa',
    mobileMenuBg:        'rgba(245, 245, 252, 0.97)',
    shadow:              'rgba(0,0,0,0.12)',
  },
  shadows: {
    card:   '0 2px 12px rgba(0,0,0,0.07)',
    hover:  '0 12px 48px rgba(124, 58, 237, 0.12)',
    header: '0 1px 0 rgba(0,0,0,0.07)',
    modal:  '0 40px 100px rgba(0,0,0,0.22)',
  },
};

// Default export kept for any legacy import
export default darkTheme;
