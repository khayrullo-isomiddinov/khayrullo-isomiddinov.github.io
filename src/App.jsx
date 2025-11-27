import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Experience from './components/experience';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;