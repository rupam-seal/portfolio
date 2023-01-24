import React, { useEffect, useState } from 'react';
import { MutatingDots } from 'react-loader-spinner';
import { motion } from 'framer-motion';

// const Spline = React.lazy(() => import('@splinetool/react-spline'));

import Spline from '@splinetool/react-spline';

const blobVariants = {
  initial: {
    scale: 0,
    opacity: 0,
    rotate: 120,
  },
  animate: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
    },
  },
};

const Blob = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsDisplayed(true);
    }, 1000);
  }, []);

  return (
    // {window.innerWidth <= 820 ? <Blob /> : <Blob />}
    // Da7j8Jp7yKj-itxF
    // lS8fzq1TO4nqjW-u
    <>
      {isDisplayed == true ? (
        <motion.div
          variants={blobVariants}
          initial="initial"
          animate="animate"
          className="hero__right"
        >
          <Spline scene="https://prod.spline.design/lS8fzq1TO4nqjW-u/scene.splinecode" />
        </motion.div>
      ) : (
        <MutatingDots
          height="100"
          width="100"
          color="#b390fe"
          secondaryColor="#fdff96"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
    </>
  );
};

export default Blob;
