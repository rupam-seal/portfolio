import React, { useState } from 'react';

import Spline from '@splinetool/react-spline';
import { useMobileSize } from '../hooks/useMobileSize';
import { motion } from 'framer-motion';

const Blob = ({}) => {
  const isMobileSize = useMobileSize();

  // console.log(isMobileSize);

  return (
    <motion.div className="hero__right" initial="initial" animate="animate">
      {isMobileSize ? (
        <Spline scene="https://prod.spline.design/0IKTgKhk5YpBoZjL/scene.splinecode" />
      ) : (
        <Spline scene="https://prod.spline.design/A6fJevXqO10jol-l/scene.splinecode" />
      )}
    </motion.div>
  );
};

export default Blob;
