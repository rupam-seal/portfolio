import React from 'react';
import { GiJetPack } from 'react-icons/gi';
import {
  AiOutlineGithub,
  AiFillDribbbleCircle,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';

const Topbar = () => {
  /* Open when someone clicks on the span element */
  function openMenu() {
    document.getElementById('myNav').style.height = '100%';
  }
  return (
    <div className="topbar">
      {/* logo */}
      <div className="topbar__logo-container">
        <GiJetPack className="topbar__logo-img" />
        <span className="topbar__logo-txt">RupamSeal</span>
      </div>

      <div className="topbar__right">
        {/* social icons */}
        <div className="topbar__social-container">
          <a href="https://github.com/rupam-seal">
            <AiOutlineGithub className="topbar__social-icon" />
          </a>
          <a href="https://github.com/rupam-seal">
            <AiFillDribbbleCircle className="topbar__social-icon" />
          </a>
          <a href="https://github.com/rupam-seal">
            <AiFillLinkedin className="topbar__social-icon" />
          </a>
          <a href="https://github.com/rupam-seal">
            <AiFillTwitterCircle className="topbar__social-icon" />
          </a>
        </div>

        {/* expandable menu */}
        <button onClick={openMenu} className="topbar__menu-container">
          <span onClick={openMenu} className="topbar__menu-line"></span>
          <span onClick={openMenu} className="topbar__menu-txt">
            MENU
          </span>
        </button>
      </div>
    </div>
  );
};

export default Topbar;
