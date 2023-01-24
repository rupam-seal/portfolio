import React from 'react';
import { GiJetPack } from 'react-icons/gi';
import {
  AiOutlineGithub,
  AiFillDribbbleCircle,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { TiThMenu } from 'react-icons/ti';
import Theme from './Theme';
import { link } from '../../data/SocialData';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

// ANIMATION VARIANTS
const containerVariant = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const Topbar = () => {
  /* Open when someone clicks on the span element */
  function openMenu() {
    document.getElementById('myNav').style.height = '100vh';
  }

  return (
    <>
      <div className="topbar__layer"></div>
      <div className="topbar">
        <div className="topbar__container">
          {/* logo */}
          <motion.div
            variants={containerVariant}
            initial="initial"
            animate="animate"
            className="topbar__logo-container"
          >
            <Link to={'/'} className="topbar__logo-container">
              <span>
                <GiJetPack className="topbar__logo-img" />
              </span>
              <span className="topbar__logo-txt">rupam</span>
            </Link>
          </motion.div>

          <div className="topbar__right">
            {/* social icons */}
            <motion.div
              className="topbar__social-container"
              variants={containerVariant}
              initial="initial"
              animate="animate"
            >
              <motion.a href={link.github} variants={iconVariants}>
                <AiOutlineGithub className="topbar__social-icon" />
              </motion.a>
              <motion.a href={link.dribble} variants={iconVariants}>
                <AiFillDribbbleCircle className="topbar__social-icon" />
              </motion.a>
              <motion.a href={link.linkedin} variants={iconVariants}>
                <AiFillLinkedin className="topbar__social-icon" />
              </motion.a>
              <motion.a href={link.twitter} variants={iconVariants}>
                <AiFillTwitterCircle className="topbar__social-icon" />
              </motion.a>
            </motion.div>

            {/* expandable menu */}
            <div className="topbar__theme">
              <Theme />
            </div>
            <div className="topbar__menu" onClick={openMenu}>
              <TiThMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
