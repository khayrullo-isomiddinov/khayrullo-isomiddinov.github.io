import React from 'react';
import Header from './components/header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import theme from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;