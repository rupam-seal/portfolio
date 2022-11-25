import React from 'react';
import { FaBeer } from 'react-icons/fa';

const Topbar = () => {
  return (
    <div className="topbar">
      {/* logo */}
      <div className="topbar__logo-container">
        <img id="logo-icon" src="" alt="" className="topbar__logo-img" />
        <span className="topbar__logo-txt">RupamSeal</span>
      </div>

      <div className="topbar__right">
        {/* social icons */}
        <div className="topbar__social-container">
          <a
            href="https://github.com/cypharlink"
            target="_blank"
            className="fa fa-github topbar__social-icon"
          ></a>
          <a
            href="https://dribbble.com/dev_cyphar"
            target="_blank"
            className="fa fa-dribbble topbar__social-icon"
          ></a>
          <a
            href="https://www.linkedin.com/in/rupam-seal-364539239/"
            target="_blank"
            className="fa fa-linkedin topbar__social-icon"
          ></a>
          <a
            href="https://twitter.com/cypharlink"
            target="_blank"
            className="fa fa-twitter topbar__social-icon"
          ></a>
        </div>

        {/* expandable menu */}
        <button onclick="openMenu()" className="topbar__menu-container">
          <span onclick="openMenu()" className="topbar__menu-line"></span>
          <span onclick="openMenu()" className="topbar__menu-txt">
            MENU
          </span>
        </button>
      </div>
    </div>
  );
};

export default Topbar;
