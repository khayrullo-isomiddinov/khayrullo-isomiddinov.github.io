import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { LangContext } from './context/AppContext';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Experience from './components/experience';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import SocialSidebar from './components/SocialSidebar';

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState('en');

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header isDark={isDark} setIsDark={setIsDark} />
        <SocialSidebar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </ThemeProvider>
    </LangContext.Provider>
  );
};

export default App;
