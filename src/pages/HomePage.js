import React from 'react';
import Hero from '../components/home/Hero';
import Skills from '../components/home/Skills';
import Projects from '../components/home/Works';
import Menu from '../components/common/Menu';
import LiquidObject from '../components/common/LiquidObject';
import Navigation from '../components/common/Navigation';

const HomePage = () => {
  return (
    <>
      {/* Menu */}
      <Menu />
      {/* TOPBAR SECTION */}
      <Hero />
      {/* SKILLS SECTION */}
      <Skills />
      {/* PROJECTS SECTION */}
      <Projects />
      {/* NAVIGATION SECTION */}
      <Navigation />
    </>
  );
};

export default HomePage;
