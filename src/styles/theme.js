// theme.js
const theme = {
    colors: {
      background: '#0a192f',       // Dark navy
      text: '#ccd6f6',             // Light blue/gray for readability
      accent: '#64ffda',           // Bright teal accent
      hover: '#52e3c2',            // Slightly darker teal for hovers
      border: '#112240',           // Darker blue for borders
      shadow: '#020c1b',           // Shadow color
      // For mobile menus and overlays
      mobileMenuBg: 'rgba(17, 34, 64, 0.95)',
      mobileMenuText: '#ccd6f6',
      overlay: 'rgba(0, 0, 0, 0.5)',
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
      card: '0 4px 20px rgba(0, 0, 0, 0.25)',
      hover: '0 8px 30px rgba(100, 255, 218, 0.4)',
      header: '0 2px 10px rgba(0,0,0,0.2)',
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
  