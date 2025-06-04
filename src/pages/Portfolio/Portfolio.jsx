import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Copyright, FollowingCursor, Footer, Footer2, Navbar } from "../../components";
import {
  About,
  Certificate,
  Herosection,
  JobTitle,
  Journey,
  MyProject,
  MyProject2,
  MySkill,
  ProjectDesign,
  Qoute,
} from "../../layout";

const lenis = new Lenis({
  duration: 1.8, 
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
  smooth: true,
  smoothTouch: true,
});
const Portfolio = () => {
  useEffect(() => {
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);
  const handleScroll = (target) => {
    const el = document.querySelector(target);
    if (el) {
      lenis.scrollTo(el, {
        offset: -100, 
        duration: 2, 
        easing: (t) => 1 - Math.pow(1 - t, 3), 
      });
    }
  };
  
  return (
    <>
      <FollowingCursor />
      <div className="bg-[url('/Background.png')] bg-cover">
      <Navbar onScrollTo={handleScroll} />
      <Herosection/>
        <div id="ABOUT" className="scroll-mt-36">
        <About />
        </div>
        <JobTitle />
        {/* <Certificate /> */}
        {/* <MyProject /> */}
        <div id="PROJECT">
        <MyProject2/>
        </div>
        <div id="SKILL">
        <MySkill /> 
        </div>
        <div id="EXPERIENCE">
        <Journey />
        </div>
        <ProjectDesign />
        <Qoute>
          Unlock your true potential. Believe, take action, and achieve
          greatness, because you are unstoppable.
        </Qoute>
        <div id="CONTACT">
        <Footer2/>
        </div>
        <Copyright/>
      </div>
    </>
  );
};

export default Portfolio;