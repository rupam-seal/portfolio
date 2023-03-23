import React from 'react';
import HomeWorksItem from './HomeWorksItem';
import { projects } from '../data/WorkData';

const HomeWorks = () => {
  const workItem = projects.map((project, index) => {
    return (
      <section className="project__section" id="projects" key={project.title}>
        <div className="project__title">
          <div className="project__title-container">
          <div className="section__title-container">
            <span className="section__title">Works</span>
            <div className="section__title-line"></div>
          </div>
          </div>
        </div>
        <div className="project__card-list">
          <HomeWorksItem projects={projects[index].project} title={index} />
        </div>
      </section>
    );
  });
  return <>{workItem}</>;
};

export default HomeWorks;
