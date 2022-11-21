import React from 'react';

const projects = () => {
  return (
    <section class="project__section" id="projects">
      <div class="project__title">
        <div class="project__title-container">
          <span class="project__title">Projects</span>
          <div class="project__title-line"></div>
        </div>
      </div>
      <div class="project__card-list">
        <div class="project__card">
          <div class="project__card-img-container">
            <img src="" alt="" class="project__card-img" />
            <div class="project__hover-bg"></div>
            <div class="project__hover-reaveal">
              <div class="project__hover-view">
                <a class="project__hover-view-txt" href="" target="_blank">
                  View Source
                </a>
              </div>
              <div class="project__hover-seperator"></div>
              <div class="project__hover-live">
                <a class="project__hover-live-txt" href="" target="_blank">
                  Live Site
                </a>
              </div>
            </div>
          </div>
          <div class="project__card-txt-container">
            <span class="project__card-title"></span>
            <span class="project__card-desc"></span>
          </div>
          <div class="project__card-tag-list">
            <div class="project__card-tag">
              <p class="project__card-tag-txt"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default projects;
