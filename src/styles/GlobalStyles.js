// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* CSS Variables for extra flexibility */
  :root {
    --transition-speed: 0.3s;
    --easing: cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Reset and box-sizing */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Base typography & smooth rendering */
  html, body {
    font-family: 'Inter', sans-serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    scroll-behavior: smooth;
    transition: background var(--transition-speed) var(--easing), color var(--transition-speed) var(--easing);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Custom text selection */
  ::selection {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.background};
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.accent};
    border-radius: 10px;
  }

  /* Global Link Styles */
  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
    position: relative;
    overflow: hidden;
    transition: color var(--transition-speed) var(--easing);
  }
  a::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.accent};
    transition: width var(--transition-speed) var(--easing);
  }
  a:hover::after {
    width: 100%;
  }

  /* Buttons with gradient backgrounds and hover effects */
  button {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.hover});
    color: ${({ theme }) => theme.colors.background};
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.shadows.card};
    transition: transform var(--transition-speed) var(--easing), box-shadow var(--transition-speed) var(--easing);
    font-weight: bold;
    text-transform: uppercase;
  }
  button:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }

  /* Headings with text-shadow and letter-spacing */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
    letter-spacing: 1px;
  }

  /* Utility classes */
  .fade-in {
    animation: fadeIn 0.8s ease-out forwards;
  }

  /* Keyframe Animations */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes glow {
    0% { box-shadow: 0 0 5px ${({ theme }) => theme.colors.accent}; }
    50% { box-shadow: 0 0 20px ${({ theme }) => theme.colors.accent}; }
    100% { box-shadow: 0 0 5px ${({ theme }) => theme.colors.accent}; }
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;
