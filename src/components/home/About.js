import React from 'react';

const About = () => {
  return (
    <section class="footer" id="contact">
      <div class="footer__top">
        <span class="footer__title">Let's Talk</span>
        <div class="footer__email-container">
          <span class="email__title">Drop a mail</span>
          <span class="email">cypharlink@gmail.com</span>
        </div>
        <div class="footer__social">
          <div class="footer__social-title">On Web</div>
          <div class="footer__social-list">
            <a
              href="https://github.com/cypharlink"
              target="_blank"
              class="fa fa-github social"
            ></a>
            <a
              href="https://dribbble.com/dev_cyphar"
              target="_blank"
              class="fa fa-dribbble social"
            ></a>
            <a
              href="https://www.linkedin.com/in/rupam-seal-364539239/"
              target="_blank"
              class="fa fa-linkedin social"
            ></a>
            <a
              href="https://twitter.com/cypharlink"
              target="_blank"
              class="fa fa-twitter social"
            ></a>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <span class="made">
          Made with <span class="heart">&#x2764;</span> in 2022
        </span>
        <span class="copyright">
          &#169; 2022 CypharLink. All Rights Reserved.
        </span>
      </div>
    </section>
  );
};

export default About;
