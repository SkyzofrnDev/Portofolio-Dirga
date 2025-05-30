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

const Portfolio = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smooth: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <FollowingCursor />
      <div className="bg-[url('/Background.png')] bg-cover">
        <Navbar />
        <Herosection />
        <About />
        <JobTitle />
        <Certificate />
        <MySkill />
        {/* <MyProject /> */}
        <MyProject2/>
        <Journey />
        <ProjectDesign />
        <Qoute>
          Unlock your true potential. Believe, take action, and achieve
          greatness, because you are unstoppable.
        </Qoute>
        <Footer2/>
        <Copyright />
      </div>
    </>
  );
};

export default Portfolio;