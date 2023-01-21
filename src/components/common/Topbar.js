import React, { useEffect } from 'react';
import { GiJetPack } from 'react-icons/gi';
import {
  AiOutlineGithub,
  AiFillDribbbleCircle,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { TiThMenu } from 'react-icons/ti';
import Theme from './Theme';
import { link } from '../../data/SocialData';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Topbar = () => {
  /* Open when someone clicks on the span element */
  function openMenu() {
    document.getElementById('myNav').style.height = '100vh';
  }

  return (
    <>
      <div className="topbar__layer"></div>
      <div className="topbar">
        <div className="topbar__container">
          {/* logo */}
          <Link to={'/'} className="topbar__logo-container">
            <GiJetPack className="topbar__logo-img" />
            <span className="topbar__logo-txt">NilaX</span>
          </Link>

          <div className="topbar__right">
            {/* social icons */}
            <div className="topbar__social-container">
              <a href={link.github}>
                <AiOutlineGithub className="topbar__social-icon" />
              </a>
              <a href={link.dribble}>
                <AiFillDribbbleCircle className="topbar__social-icon" />
              </a>
              <a href={link.linkedin}>
                <AiFillLinkedin className="topbar__social-icon" />
              </a>
              <a href={link.twitter}>
                <AiFillTwitterCircle className="topbar__social-icon" />
              </a>
            </div>

            {/* expandable menu */}
            <div className="topbar__theme">
              <Theme />
            </div>
            <div className="topbar__menu" onClick={openMenu}>
              <TiThMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
