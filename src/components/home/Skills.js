import React from 'react';
import { technologies } from '../../data/Technologies';

const skills = () => {
  const skills = technologies.map((skill, index) => {
    return (
      <div className="second__skill-container" key={index}>
        <span className="second__skill-title">{skill.title}</span>
        <div className="second__skill-list">
          {skill.items.map((item, index) => {
            return (
              <div className="skill-card" key={index}>
                <i className={item.icon} id="second__skill-icon"></i>
                <span className="second__skill-name">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  console.log(skills);

  return (
    <section className="section" id="skills">
      <div className="section__title-container">
        <span className="section__title">Skills</span>
        <div className="section__title-line"></div>
      </div>
      <div className="second__skill">{skills}</div>
    </section>
  );
};

export default skills;
