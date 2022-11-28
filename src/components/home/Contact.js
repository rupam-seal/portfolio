import React from 'react';
import {
  AiOutlineGithub,
  AiFillDribbbleCircle,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';

const Contact = () => {
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
            <a href="https://github.com/rupam-seal">
              <AiOutlineGithub className="social" />
            </a>
            <a href="https://github.com/rupam-seal">
              <AiFillDribbbleCircle className="social" />
            </a>
            <a href="https://github.com/rupam-seal">
              <AiFillLinkedin className="social" />
            </a>
            <a href="https://github.com/rupam-seal">
              <AiFillTwitterCircle className="social" />
            </a>
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

export default Contact;
