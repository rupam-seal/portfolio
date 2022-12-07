import React from 'react';
import {
  AiOutlineGithub,
  AiFillDribbbleCircle,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { link } from '../../utils/SocialLink';

const Contact = () => {
  return (
    <section className="footer" id="contact">
      <div className="footer__top">
        <div className="footer__left">
          <span className="footer__title">Let's Talk</span>
          <div className="footer__email-container">
            <span className="email__title">Drop a mail</span>
            <span className="email">rupam.seal.00.00@gmail.com</span>
          </div>
        </div>
        <div className="footer__social">
          <span className="footer__social-title">On Web</span>
          <div className="footer__social-list">
            <a href={link.github}>
              <AiOutlineGithub className="social" />
            </a>
            <a href={link.dribble}>
              <AiFillDribbbleCircle className="social" />
            </a>
            <a href={link.linkedin}>
              <AiFillLinkedin className="social" />
            </a>
            <a href={link.twitter}>
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
          &#169; {new Date().getFullYear()} rupamseal. All Rights Reserved.
        </span>
      </div>
    </section>
  );
};

export default Contact;
