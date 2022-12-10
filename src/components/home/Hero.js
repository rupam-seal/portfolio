import React, { useEffect, useRef } from 'react';
import resume from '../../assets/document/resume.pdf';
import { Canvas } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="hero__section" id="about">
      <div className="hero__left-container">
        <div className="hero__about">
          <span className="hero__name">nilax seal</span>
          <span className="hero__desc">
            &lt;Web and Android Developer&gt; &lt;UI/UX Designer&gt;
          </span>
        </div>
        <div className="hero__work">
          <div className="hero__work-title-container">
            <span className="hero__work-title">Work</span>
            <div className="hero__work-title-line"></div>
          </div>
          <p className="hero__work-txt">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi, I&#39;m Rupam Seal, a self-taught
            passionate Software developer from India, currently workin as a
            Freelance Software Developer. I started learning to code when I was
            a teenager I&#39;m familiar with various programming languages,
            including Java, C++, Python, and JavaScript but I&#39;m always
            adding new skills to my repertoire.
          </p>
        </div>
        <div className="hero__resume-button">
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
            My Resume
          </a>
        </div>
      </div>
      {/* ISOMATRIC VIEW */}
      <div className="hero__right-container" id="avatar">
        <Spline scene="https://prod.spline.design/lS8fzq1TO4nqjW-u/scene.splinecode" />
      </div>
    </section>
  );
};

export default Hero;
