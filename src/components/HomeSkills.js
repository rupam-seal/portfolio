import React from 'react';
import { technologies } from '../data/TechnologyData';

import { motion } from 'framer-motion';

// ANIMATION VARIANTS
const containerVariant = {
  initial: {
    opacity: 0,
    y: -10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
};

const HomeSkills = () => {
  const skills = technologies.map((skill, index) => {
    return (
      <motion.div
        variants={containerVariant}
        viewport={{ once: true }}
        initial="initial"
        whileInView="animate"
        className="second__skill-container"
        key={index}
      >
        <span className="second__skill-title">{skill.title}</span>
        <div className="second__skill-list">
          {skill.items.map((item, index) => {
            return (
              <div className="skill-card" key={index}>
                <i className={item.icon} id="second__skill-icon"></i>
                <span className="second__skill-name">{item.name}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    );
  });

  console.log(skills);

  return (
    <section className="section" id="skills">
      <div className="section__title-container">
        <span className="section__title">Skills</span>
        <div className="section__title-line"></div>
      </div>
      <div className="second__skill">{skills}</div>
    </section>
  );
};

export default HomeSkills;
