import React, { Suspense, useEffect, useState } from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';
import card from '../../assets/posts/robox.png';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Card = () => {
  useEffect(() => {
    // basic idea is as follows:
    // measure the mouse's distance from center of the image and apply a transform rotateX and rotateY of between -5deg and 5deg accordingly

    const image = document.querySelector('.tilt');

    image.addEventListener('mousemove', (event) => {
      const { top, bottom, left, right } = event.target.getBoundingClientRect();

      const middleX = (right - left) / 2;
      const middleY = (bottom - top) / 2;

      const clientX = event.clientX;
      const clientY = event.clientY;

      const offsetX = (clientX - middleX) / middleX;
      const offsetY = (middleY - clientY) / middleY;

      event.target.style.transform = `perspective(1000px) rotateY(${
        offsetX * 5
      }deg) rotateX(${offsetY * 5}deg) scale3d(1, 1, 1)`;
    });
  });

  return (
    <div className="card" id="card">
      <div className="detail__container">
        <div className="name__container">
          <Link to={'/'}>
            <span className="detail__link">Works</span>
          </Link>
          <IoIosArrowForward />
          <span className="detail__name">Cointra</span>
        </div>
        <span className="detail__detail">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;imo is a image
          classification website where user can upload images and it will
          classify images into their respective category \remarkably powerful
          layout mode. When we truly understand how it works, we can build
          dynamic layouts that respond automatically, rearranging themselves
          as-needed.
        </span>
      </div>
      <img src={card} className="card__img tilt" />
    </div>
  );
};

export default Card;
