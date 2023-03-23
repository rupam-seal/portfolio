import React, { Suspense } from 'react';
import resume from '../assets/document/resume.pdf';

import { motion } from 'framer-motion';
import { MutatingDots } from 'react-loader-spinner';

import Blob from './Blob';

// ANIMATION VARIANTS
const containerVariant = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
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

const HomeHero = () => {
  const blob = <Blob />;

  return (
    <section className="hero__section" id="about">
      <motion.div
        className="hero__left"
        variants={containerVariant}
        initial="initial"
        animate="animate"
      >
        <div className="hero__about">
          <motion.span variants={childVariants} className="hero__name">
            NilaX Seal
          </motion.span>
          <motion.span variants={childVariants} className="hero__desc">
            &lt;Web and Android Developer&gt; &lt;UI/UX Designer&gt;
          </motion.span>
        </div>
        <motion.div className="hero__work" variants={childVariants}>
          <div className="section__title-container">
            <span className="section__title">About me</span>
            <div className="section__title-line"></div>
          </div>
          <p className="hero__work-txt">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi, I&#39;m Rupam Seal, a self-taught
            passionate Software developer from India, currently workin as a
            Freelance Software Developer. I started learning to code when I was
            a teenager I&#39;m familiar with various programming languages,
            including Java, C++, Python, and JavaScript but I&#39;m always
            adding new skills to my repertoire.
          </p>
        </motion.div>
        <motion.div variants={childVariants} className="hero__resume-button">
          <div className="hero__resume-download">
            <a
              rel="noreferrer"
              target="_blank"
              href={resume}
              id="hero__resume-download-txt"
            >
              Download
            </a>
          </div>
          <a className="hero__resume-txt" href={resume}>
            Resume
          </a>
        </motion.div>
      </motion.div>
      {/* ISOMATRIC VIEW */}
      <div className="hero__right" id="avatar">
        <Suspense
          fallback={
            <div>
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
            </div>
          }
        >
          {blob}
        </Suspense>
      </div>
    </section>
  );
};

export default HomeHero;
