import React, { useEffect } from 'react';

const LiquidObject = () => {
  useEffect(() => {
    // Mouse follow liquid object animation
    // const cursor = document.querySelector('.liquid-object');
    // let mouseMovementStoppedTimer;
    // const mouseMovementStopped = function () {
    //   cursor.style.opacity = 0;
    // };

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

      const cursor = document.querySelector('.liquid-object');
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';

      requestAnimationFrame(animate);
    }

    animate();

    document.addEventListener('mousemove', (event) => {
      mouseX = event.pageX;
      mouseY = event.pageY;
      // // Make the cursor visible immediately
      // cursor.style.opacity = 0.45;

      // // Change position of cursor only when mousemove is detected
      // setTimeout(() => {
      //     // Change cursor position using translate, clientX & clientY
      //     cursor.style.transform =  `translate(${event.clientX}px, ${event.clientY}px)`;
      // }, 100);

      // clearTimeout(mouseMovementStoppedTimer);
      // mouseMovementStoppedTimer = setTimeout(mouseMovementStopped, 800);
    });
  }, []);

  return (
    <>
      <div className="background-layer"></div>
      <div className="liquid-object"></div>
    </>
  );
};

export default LiquidObject;
