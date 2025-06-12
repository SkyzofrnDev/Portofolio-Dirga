import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Navbar, Footer2, Copyright, FollowingCursor } from "../../components";
import {
  About,
  HeroResponsive,
  Herosection,
  JobTitle,
  Journey,
  MyProject2,
  MySkill,
  ProjectDesign,
  Qoute,
} from "../../layout";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Sink Lenis scroll into ScrollTrigger
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length ? lenis.scrollTo(value) : window.scrollY;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    // Update ScrollTrigger on scroll
    lenis.on("scroll", ScrollTrigger.update);
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleScroll = (target) => {
    const el = document.querySelector(target);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 100, behavior: "smooth" });
    }
  };

  return (
    <>
      <FollowingCursor />
      <div className="bg-[url('/Background.png')] bg-cover">
        <Navbar onScrollTo={handleScroll} />
        {/* <Herosection /> */}
        <HeroResponsive/>
        <div id="ABOUT" className="scroll-mt-36">
          <About />
        </div>
        <div className="bg-[#0b0b0d]">
          
        <JobTitle />
        <div id="PROJECT">
          <MyProject2 />
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
          <Footer2 />
        </div>
        <Copyright />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
