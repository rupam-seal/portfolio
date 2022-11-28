import React from 'react';

const projects = () => {
  return (
    <section className="project__section" id="projects">
      <div className="project__title">
        <div className="project__title-container">
          <span className="project__title">Projects</span>
          <div className="project__title-line"></div>
        </div>
      </div>
      <div className="project__card-list">
        <div className="project__card">
          <div className="project__card-img-container">
            <img src="" alt="" className="project__card-img" />
            <div className="project__hover-bg"></div>
            <div className="project__hover-reaveal">
              <div className="project__hover-view">
                <a
                  rel="noreferrer"
                  className="project__hover-view-txt"
                  href="https://github.com/rupam-seal"
                  target="_blank"
                >
                  View Source
                </a>
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
            <span className="project__card-title"></span>
            <span className="project__card-desc"></span>
          </div>
          <div className="project__card-tag-list">
            <div className="project__card-tag">
              <p className="project__card-tag-txt"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default projects;
