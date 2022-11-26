import React, { useEffect } from 'react';
import Theme from './Theme';

const Navigation = () => {
  useEffect(() => {
    // ========== RIGHT FIXED NAVBAR ==========
    // set the right margin of navbar
    // with respect to the body margin

    // we can get the margin by substracting
    // window width with maincontainer width

    // (margin => windowWidth - mainContainerWidth)

    // Than we have to divide margin by 10 so
    // that we can get margin in rem

    // (marginInRem => margin/10)

    // now the right margin is half of marginInRem

    // (marginRight => marginInRem/2)

    // default margin
    marginRight(1000);

    window.addEventListener(
      'resize',
      function (event) {
        var windowWidth = window.innerWidth;
        // if widow width is equal or less than
        // mainContainer width we can set margin
        // right 2 rem
        if (windowWidth < 1050) {
          var windowWidth = window.innerWidth;
          const nav = document.getElementById('nav');
          nav.style.marginRight = 2 + 'rem';
        } else {
          // default margin
          marginRight(1000);
        }
        console.log(
          'windowWidth=' +
            windowWidth +
            '----' +
            'containerWidth=' +
            this.document.querySelector('.main__container').clientWidth
        );
        // if (windowWidth <= 600) {
        //   var w = window.innerWidth;
        //   const mainWidth = document.querySelector(".main__container");
        //   // console.log(w);
        //   // console.log(mainWidth);
        //   mainWidth.style.width = w / 10 - 5 + "rem";
        //   // console.log(
        //   //   "<=600" + "w-w" + windowWidth + "------" + "w-m " + w / 10 - 5 + "rem"
        //   // );
        // }
      },
      []
    );

    function marginRight(containerWidth) {
      var windowWidth = window.innerWidth;
      const nav = document.getElementById('nav');
      nav.style.marginRight = (windowWidth - containerWidth) / 10 / 2 + 'rem';
      // console.log((((w-880)/10)/2)+'rem')
    }
  });
  return (
    <nav className="nav" id="nav">
      <ul className="nav__list">
        <li>
          <a className="nav__item" href="#contact">
            contact
          </a>
        </li>
        <li>
          <a className="nav__item" href="#projects">
            projects
          </a>
        </li>
        <li>
          <a className="nav__item" href="#skills">
            skills
          </a>
        </li>
        <li>
          <a className="nav__item" href="#about">
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
