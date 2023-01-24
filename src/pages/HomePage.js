import React from 'react';
import Hero from '../components/HomeHero';
import Skills from '../components/HomeSkills';
import Projects from '../components/HomeWorks';
import Menu from '../components/common/Menu';
import HomeNavigation from '../components/HomeNavigation';
import LiquidObject from '../components/common/LiquidObject';

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
      <HomeNavigation />
      {/* Liquid Object */}
      <LiquidObject />
    </>
  );
};

export default HomePage;
