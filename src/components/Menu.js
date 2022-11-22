import React from 'react';

const Menu = () => {
  return (
    <>
      {/* The overlay */}
      <div id="myNav" class="menu">
        <div class="menu__btn-container">
          logo
          <div class="topbar__logo-container">
            <img src="" id="menu-logo-icon" alt="" class="topbar__logo-img" />
            <span class="topbar__logo-txt">RupamSeal</span>
          </div>
          <button onclick="closeMenu()" class="menu__menu-container">
            <span onclick="closeMenu()" class="menu__menu-line"></span>
            <span onclick="closeMenu()" class="menu__menu-txt">
              CLOSE
            </span>
          </button>
        </div>

        {/* Overlay content */}
        <div class="menu__list">
          <div class="menu__txt-container">
            <span class="menu__num">01</span>
            <a class="menu__txt" href="#">
              ABOUT
            </a>
            <div class="menu__line"></div>
          </div>
          <div class="menu__txt-container">
            <span class="menu__num">02</span>
            <a class="menu__txt" href="#">
              PROJECTS
            </a>
            <div class="menu__line"></div>
          </div>
          <div class="menu__txt-container">
            <span class="menu__num">03</span>
            <a class="menu__txt" href="#">
              SKILLS
            </a>
            <div class="menu__line"></div>
          </div>
          <div class="menu__txt-container">
            <span class="menu__num">04</span>
            <a class="menu__txt" href="#">
              CONTACT
            </a>
            <div class="menu__line"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
