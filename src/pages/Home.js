import React from 'react';
import Hero from '../components/home/Hero';
import Skills from '../components/home/Skills';
import Projects from '../components/home/Projects';
import About from '../components/home/About';
import Topbar from '../components/Topbar';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div className="main__container">
      {/* TOPBAR SECTION */}
      <Topbar />
      {/* HERO SECTION */}
      <Hero />
      {/* SKILLS SECTION */}
      <Skills />
      {/* PROJECTS SECTION */}
      <Projects />
      {/* ABOUT SECTION */}
      <About />
      {/* NAVIGATION SECTION */}
      <Navigation />
    </div>
  );
};

export default Home;
