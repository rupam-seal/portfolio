import React from 'react';
import Theme from './Theme';

const Navigation = () => {
  return (
    <nav class="nav" id="nav">
      <ul class="nav__list">
        <li>
          <a class="nav__item" href="#contact">
            contact
          </a>
        </li>
        <li>
          <a class="nav__item" href="#projects">
            projects
          </a>
        </li>
        <li>
          <a class="nav__item" href="#skills">
            skills
          </a>
        </li>
        <li>
          <a class="nav__item" href="#about">
            about
          </a>
        </li>
        <li>
          <Theme />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
