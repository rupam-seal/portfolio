import React, { useEffect } from 'react';
import Theme from './common/Theme';

import { motion, useScroll } from 'framer-motion';

// ANIMATION VARIANTS
const containerVariant = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const Navigation = () => {
  useEffect(() => {
    // ========== RIGHT FIXED NAVBAR ==========
    // set the right margin of navbar
    // with respect to the body margin

    // we can get the margin by substracting
    // window width with maincontainer width

    // (margin => windowWidth - mainContainerWidth)

    // Than we have to divide margin by 10 so
    // that we can get margin in rem

    // (marginInRem => margin/10)

    // now the right margin is half of marginInRem

    // (marginRight => marginInRem/2)

    // default margin
    marginRight(1000);

    window.addEventListener(
      'resize',
      function (event) {
        let windowWidth = window.innerWidth;
        // if widow width is equal or less than
        // mainContainer width we can set margin
        // right 2 rem
        if (windowWidth < 1050) {
          windowWidth = window.innerWidth;
          const nav = document.getElementById('nav');
          nav.style.marginRight = 2 + 'rem';
        } else {
          // default margin
          marginRight(1000);
        }
        console.log(
          'windowWidth=' +
            windowWidth +
            '----' +
            'containerWidth=' +
            this.document.querySelector('.main__container').clientWidth
        );
        // if (windowWidth <= 600) {
        //   var w = window.innerWidth;
        //   const mainWidth = document.querySelector(".main__container");
        //   // console.log(w);
        //   // console.log(mainWidth);
        //   mainWidth.style.width = w / 10 - 5 + "rem";
        //   // console.log(
        //   //   "<=600" + "w-w" + windowWidth + "------" + "w-m " + w / 10 - 5 + "rem"
        //   // );
        // }
      },
      []
    );

    function marginRight(containerWidth) {
      var windowWidth = window.innerWidth;
      const nav = document.getElementById('nav');
      nav.style.marginRight = (windowWidth - containerWidth) / 10 / 2 + 'rem';
      // console.log((((w-880)/10)/2)+'rem')
    }
    document.addEventListener('wheel', (event) => {
      const scrollableHeight =
        window.document.body.scrollHeight - window.innerHeight;
      const LINE_MAX_WIDTH = 32;
      if (scrollableHeight <= 0) return 0;
      const progress = document.getElementById('line');
      progress.style.width = `${
        (LINE_MAX_WIDTH * ((window.scrollY / scrollableHeight) * 100)) / 100
      }rem`;
      console.log(
        `${
          (LINE_MAX_WIDTH * ((window.scrollY / scrollableHeight) * 100)) / 100
        }rem`
      );
    });
  });

  return (
    <>
      <nav className="nav" id="nav">
        <motion.div className="line" id="line"></motion.div>
        <motion.ul
          variants={containerVariant}
          initial="initial"
          animate="animate"
          className="nav__list"
        >
          <motion.li variants={iconVariants}>
            <a className="nav__item" href="#contact">
              contact
            </a>
          </motion.li>
          <motion.li variants={iconVariants}>
            <a className="nav__item" href="#projects">
              works
            </a>
          </motion.li>
          <motion.li variants={iconVariants}>
            <a className="nav__item" href="#skills">
              skills
            </a>
          </motion.li>
          <motion.li variants={iconVariants}>
            <a className="nav__item" href="#about">
              about
            </a>
          </motion.li>

          <motion.li variants={iconVariants} whileTap={{ scale: 0.8 }}>
            <Theme />
          </motion.li>
        </motion.ul>
      </nav>
    </>
  );
};

export default Navigation;
