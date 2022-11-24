import React from 'react';

const About = () => {
  return (
    <section className="footer" id="contact">
      <div className="footer__top">
        <span className="footer__title">Let's Talk</span>
        <div className="footer__email-container">
          <span className="email__title">Drop a mail</span>
          <span className="email">cypharlink@gmail.com</span>
        </div>
        <div className="footer__social">
          <div className="footer__social-title">On Web</div>
          <div className="footer__social-list">
            <a
              href="https://github.com/cypharlink"
              target="_blank"
              className="fa fa-github social"
            ></a>
            <a
              href="https://dribbble.com/dev_cyphar"
              target="_blank"
              className="fa fa-dribbble social"
            ></a>
            <a
              href="https://www.linkedin.com/in/rupam-seal-364539239/"
              target="_blank"
              className="fa fa-linkedin social"
            ></a>
            <a
              href="https://twitter.com/cypharlink"
              target="_blank"
              className="fa fa-twitter social"
            ></a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span className="made">
          Made with <span className="heart">&#x2764;</span> in 2022
        </span>
        <span className="copyright">
          &#169; 2022 CypharLink. All Rights Reserved.
        </span>
      </div>
    </section>
  );
};

export default About;
