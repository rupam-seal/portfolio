import React, { useEffect } from 'react';

const LiquidObject = () => {
  useEffect(() => {
    let cursor = document.querySelector('.liquid-object');
    let mouseX = 0;
    let mouseY = 0;

    let cursorX = 0;
    let cursorY = 0;

    let speed = 0.04;

    function animate() {
      let distX = mouseX - cursorX;
      let distY = mouseY - cursorY;

      cursorX = cursorX + distX * speed;
      cursorY = cursorY + distY * speed;

      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';

      requestAnimationFrame(animate);
    }

    animate();

    document.addEventListener('mousemove', (event) => {
      cursor.style.opacity = 0.5;
      mouseX = event.pageX;
      mouseY = event.pageY;
    });

    document.addEventListener('wheel', (event) => {
      cursor.style.opacity = 0.5;
      mouseX = event.pageX;
      mouseY = event.pageY;
    });
  }, []);

  return (
    <>
      <div className="background-layer"></div>
      <div className="liquid-object"></div>
      <div id="cursor"></div>
    </>
  );
};

export default LiquidObject;
