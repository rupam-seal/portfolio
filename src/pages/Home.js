import React from 'react';
import Hero from '../components/home/Hero';
import Skills from '../components/home/Skills';
import Projects from '../components/home/Projects';
import Navigation from '../components/common/Navigation';
import Menu from '../components/common/Menu';
import LiquidObject from '../components/common/LiquidObject';

const Home = () => {
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
      {/* Liquid Object */}
      <LiquidObject />
    </>
  );
};

export default Home;
