import React from 'react';
import { Link } from 'react-router-dom';

import { FaArrowRight } from 'react-icons/fa';

import { motion } from 'framer-motion';

// ANIMATION VARIANTS
const containerVariant = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const childVariants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const HomeWorksItem = ({ projects, title }) => {
  const project_card = projects.slice(0, 10).map((project, index) => {
    console.log('---------------------');
    return (
      <motion.div
        variants={containerVariant}
        viewport={{ once: true }}
        initial="initial"
        whileInView="animate"
        className="project__card"
        key={index}
      >
        <motion.div
          variants={childVariants}
          className="project__card-img-container"
        >
          <img src={project.image} alt="" className="project__card-img" />
          <div className="project__hover-bg">
            <Link
              to={`/works/${title}/${index}`}
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
        </motion.div>
        <motion.div
          variants={childVariants}
          className="project__card-txt-container"
        >
          <span className="project__card-title">{project.title}</span>
          <span className="project__card-desc">{project.desc}</span>
        </motion.div>
        <motion.div variants={childVariants} className="project__card-tag-list">
          {project.tags.map((tag, index) => {
            return (
              <div className="project__card-tag" key={index}>
                <p className="project__card-tag-txt">{tag}</p>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    );
  });
  return <>{project_card}</>;
};

export default HomeWorksItem;
