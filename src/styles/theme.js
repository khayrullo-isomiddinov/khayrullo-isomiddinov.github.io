// theme.js
const theme = {
    colors: {
      background: '#0f0f23',       // Deep dark blue-black
      backgroundSecondary: '#1a1a2e', // Slightly lighter for cards
      text: '#e4e4e7',             // Soft white for readability
      textSecondary: '#a1a1aa',    // Muted text
      accent: '#8b5cf6',           // Modern purple accent
      accentHover: '#7c3aed',      // Darker purple for hovers
      border: '#27272a',           // Subtle borders
      shadow: '#000000',           // Deep shadow
      // For mobile menus and overlays
      mobileMenuBg: 'rgba(15, 15, 35, 0.98)',
      mobileMenuText: '#e4e4e7',
      overlay: 'rgba(0, 0, 0, 0.75)',
      cardBg: '#1a1a2e',
      cardHover: '#252538',
    },
    fontSizes: {
      xs: '0.8rem',
      sm: '1rem',
      md: '1.2rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '3rem',
    },
    transitions: {
      default: 'all 0.3s ease-in-out',
      hover: 'color 0.2s ease-in-out, background 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    },
    shadows: {
      card: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
      hover: '0 10px 15px -3px rgba(139, 92, 246, 0.3), 0 4px 6px -2px rgba(139, 92, 246, 0.2)',
      header: '0 1px 3px rgba(0, 0, 0, 0.4)',
      modal: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    },
    animations: {
      fadeIn: 'fadeIn 0.8s ease-out forwards',
      glow: 'glow 1.5s ease-in-out infinite',
      pulse: 'pulse 2s infinite ease-in-out',
    },
    breakpoints: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  };
  
  export default theme;
  