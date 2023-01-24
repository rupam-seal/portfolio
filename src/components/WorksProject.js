import React, { useEffect } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';

import { projects } from '../data/WorkData';

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
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const Card = () => {
  useEffect(() => {
    // basic idea is as follows:
    // measure the mouse's distance from center of the image and apply a transform rotateX and rotateY of between -5deg and 5deg accordingly

    const image = document.querySelector('.tilt');

    image.addEventListener('mousemove', (event) => {
      const { top, bottom, left, right } = event.target.getBoundingClientRect();

      const middleX = (right - left) / 2;
      const middleY = (bottom - top) / 2;

      const clientX = event.clientX;
      const clientY = event.clientY;

      const offsetX = (clientX - middleX) / middleX;
      const offsetY = (middleY - clientY) / middleY;

      event.target.style.transform = `perspective(1000px) rotateY(${
        offsetX * 5
      }deg) rotateX(${offsetY * 5}deg) scale3d(1, 1, 1)`;
    });
  });

  const { title, id } = useParams();

  const item = projects[title].project[id];

  return (
    <motion.div
      className="card"
      id="card"
      variants={containerVariant}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={childVariants} className="detail__container">
        <div className="name__container">
          <Link to={'/'}>
            <span className="detail__link">Works</span>
          </Link>
          <IoIosArrowForward />
          <span className="detail__name">{item.title}</span>
        </div>
        <span className="detail__detail">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.desc}
        </span>
      </motion.div>
      <motion.img
        variants={childVariants}
        src={item.image}
        alt=""
        className="card__img tilt"
      ></motion.img>
    </motion.div>
  );
};

export default Card;
