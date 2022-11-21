import React from 'react';

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
          <div class="nav__theme">
            <img src="" class="nav__theme-icon" alt="" id="theme-icon" />
            <input type="checkbox" class="nav__theme-checkbox" />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
