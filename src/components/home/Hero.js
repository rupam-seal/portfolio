import React from 'react';

const hero = () => {
  return (
    <section class="hero__section" id="about">
      <div class="hero__left-container">
        <div class="hero__about">
          <span class="hero__name">rupam seal</span>
          <span class="hero__desc">
            &lt;Web and Android Developer&gt; &lt;UI/UX Designer&gt;
          </span>
        </div>
        <div class="hero__work">
          <div class="hero__work-title-container">
            <span class="hero__work-title">Work</span>
            <div class="hero__work-title-line"></div>
          </div>
          <p class="hero__work-txt">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi, I&#39;m Rupam Seal, a self-taught
            passionate Software developer from India, currently workin as a
            Freelance Software Developer. I started learning to code when I was
            a teenager I&#39;m familiar with various programming languages,
            including Java, C++, Python, and JavaScript but I&#39;m always
            adding new skills to my repertoire.
          </p>
        </div>
        <div class="hero__resume-button">
          <div class="hero__resume-download">
            <a target="_blank" href="" id="hero__resume-download-txt">
              Download
            </a>
          </div>
          <a class="hero__resume-txt" href="#">
            My Resume
          </a>
        </div>
      </div>
      {/* ISOMATRIC VIEW */}
      <div class="hero__right-container" id="avatar"></div>
    </section>
  );
};

export default hero;
