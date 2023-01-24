import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/WorkData';

import { FaArrowRight } from 'react-icons/fa';

import { motion } from 'framer-motion';

// ANIMATION VARIANTS
const containerVariant = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const HomeWorks = () => {
  const project_card = projects.slice(0, 6).map((project, index) => {
    return (
      <motion.div
        variants={containerVariant}
        viewport={{ once: true }}
        initial="initial"
        whileInView="animate"
        className="project__card"
        key={index}
      >
        <div className="project__card-img-container">
          <img src={project.image} alt="" className="project__card-img" />
          <div className="project__hover-bg">
            <Link
              to={`/works/${project.title}`}
              className="project__hover-icon"
            >
              <FaArrowRight />
            </Link>
          </div>
          <div className="project__hover-reaveal">
            <div className="project__hover-view">
              <Link
                className="project__hover-view-txt"
                to={`/posts/${project.title}`}
              >
                View Source
              </Link>
            </div>
            <div className="project__hover-seperator"></div>
            <div className="project__hover-live">
              <a
                rel="noreferrer"
                className="project__hover-live-txt"
                href="https://github.com/rupam-seal"
                target="_blank"
              >
                Live Site
              </a>
            </div>
          </div>
        </div>
        <div className="project__card-txt-container">
          <span className="project__card-title">{project.title}</span>
          <span className="project__card-desc">{project.desc}</span>
        </div>
        <div className="project__card-tag-list">
          {project.tags.map((tag, index) => {
            return (
              <div className="project__card-tag" key={index}>
                <p className="project__card-tag-txt">{tag}</p>
              </div>
            );
          })}
        </div>
      </motion.div>
    );
  });
  return (
    <section className="project__section" id="projects">
      <div className="project__title">
        <div className="project__title-container">
          <span className="project__title">Projects</span>
          <div className="project__title-line"></div>
        </div>
      </div>
      <div className="project__card-list">{project_card}</div>
    </section>
  );
};

export default HomeWorks;
