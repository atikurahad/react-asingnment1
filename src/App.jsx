import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Hero from './components/Hero';
import Service from './components/Service';

const App = () => {
  return (
    <>
      <Header />
      <Hero/>
      <About />
      <Service/>
      <Footer/>

    </>
  );
}

export default App;
