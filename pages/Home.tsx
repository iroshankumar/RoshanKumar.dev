import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Approach from '../components/Approach';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Approach />
      <Contact />
    </>
  );
};

export default Home;