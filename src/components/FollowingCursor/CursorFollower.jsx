import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './Style.css';
export default function CursorFollower() {
  // Using useRef() to store the cursor element reference
  const cursorRef = useRef(null);
  // Check if it's a touch device
  const isTouchDevice = 'ontouchstart' in window;
  // useEffect() to only execute this code
  // when the HTML is ready as well as the element reference
  useEffect(() => {
    const cursor = cursorRef.current;
    // If device is touchable or cursor element
    // doesn't exist, stop here
    if (isTouchDevice || !cursor) {
      return;
    }
    // Using mousemove() to animate the element cursor
    // based on the mouse cursor position (x and y)
    window.addEventListener('mousemove', (e) => {
      const { target, x, y } = e;
      // check if the mouse cursor is over some link or button
      const isTargetLinkOrBtn =
        target?.closest('a') || target?.closest('button');
      // using the GSAP power to animate some properties
      gsap.to(cursor, {
        x: x + 3,
        y: y + 3,
        duration: 0.7,
        ease: 'power4',
        opacity: isTargetLinkOrBtn ? 0.6 : 1,
        transform: `scale(${isTargetLinkOrBtn ? 3.5 : 1})`,
      });
    });
    // Using mouseleave() to animate the element cursor
    // when the mouse cursor is moved off the page
    document.addEventListener('mouseleave', () => {
      gsap.to(cursor, {
        duration: 0.7,
        opacity: 0,
      });
    });
  }, []);
  return <div className="cursor" ref={cursorRef} />;

}