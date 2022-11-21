import React from 'react';
import { FaBeer } from 'react-icons/fa';

const Topbar = () => {
  return (
    <div class="topbar">
      {/* logo */}
      <div class="topbar__logo-container">
        <img id="logo-icon" src="" alt="" class="topbar__logo-img" />
        <span class="topbar__logo-txt">RupamSeal</span>
      </div>

      <div class="topbar__right">
        {/* social icons */}
        <div class="topbar__social-container">
          <a
            href="https://github.com/cypharlink"
            target="_blank"
            class="fa fa-github topbar__social-icon"
          ></a>
          <a
            href="https://dribbble.com/dev_cyphar"
            target="_blank"
            class="fa fa-dribbble topbar__social-icon"
          ></a>
          <a
            href="https://www.linkedin.com/in/rupam-seal-364539239/"
            target="_blank"
            class="fa fa-linkedin topbar__social-icon"
          ></a>
          <a
            href="https://twitter.com/cypharlink"
            target="_blank"
            class="fa fa-twitter topbar__social-icon"
          ></a>
        </div>

        {/* expandable menu */}
        <button onclick="openMenu()" class="topbar__menu-container">
          <span onclick="openMenu()" class="topbar__menu-line"></span>
          <span onclick="openMenu()" class="topbar__menu-txt">
            MENU
          </span>
        </button>
      </div>
    </div>
  );
};

export default Topbar;
