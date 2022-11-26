import React from 'react';
import Hero from '../components/home/Hero';
import Skills from '../components/home/Skills';
import Projects from '../components/home/Projects';
import Contact from '../components/home/Contact';
import Topbar from '../components/Topbar';
import Navigation from '../components/Navigation';
import Menu from '../components/Menu';
import LiquidObject from '../components/home/LiquidObject';

const Home = () => {
  return (
    <div className="main__container">
      {/* Menu */}
      <Menu />
      {/* TOPBAR SECTION */}
      <Topbar />
      {/* HERO SECTION */}
      <Hero />
      {/* SKILLS SECTION */}
      <Skills />
      {/* PROJECTS SECTION */}
      <Projects />
      {/* ABOUT SECTION */}
      <Contact />
      {/* NAVIGATION SECTION */}
      <Navigation />
      {/* Liquid Object */}
      <LiquidObject />
    </div>
  );
};

export default Home;
