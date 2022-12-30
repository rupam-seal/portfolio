import React from 'react';
import { posts } from '../../data/Posts';

const projects = () => {
  const project = posts.map((post, index) => {
    return (
      <div className="project__card" key={index}>
        <div className="project__card-img-container">
          <img src={post.image} alt="" className="project__card-img" />
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
          <span className="project__card-title">{post.title}</span>
          <span className="project__card-desc">{post.desc}</span>
        </div>
        <div className="project__card-tag-list">
          {post.tags.map((tag, index) => {
            return (
              <div className="project__card-tag" key={index}>
                <p className="project__card-tag-txt">{tag}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  });
  return (
    <section className="project__section" id="projects">
      <div className="project__title">
        <div className="project__title-container">
          <span className="project__title">Projects</span>
          <div className="project__title-line"></div>
        </div>
      </div>
      <div className="project__card-list">{project}</div>
    </section>
  );
};

export default projects;
