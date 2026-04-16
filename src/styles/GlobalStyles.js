// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.accentGlow};
    color: ${({ theme }) => theme.colors.text};
  }

  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: ${({ theme }) => theme.colors.background}; }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.accentDim};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover { background: ${({ theme }) => theme.colors.accent}60; }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.15;
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  button { font-family: inherit; cursor: pointer; }
  img    { display: block; max-width: 100%; }
`;
