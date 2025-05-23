import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextQoute = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03,
}) => {
  const containerRef = useRef(null);
  const authorRef = useRef(null);
  const lineRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split("").map((char, index) => (
      <span className="inline-block" key={index}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }, [children]);

  const splitAuthor = useMemo(() => {
    const author = "-AGUSDEV";
    return author.split("").map((char, index) => (
      <span className="inline-block" key={index}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    const authorEl = authorRef.current;
    const lineEl = lineRef.current;

    if (!el || !authorEl || !lineEl) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const charElements = el.querySelectorAll(".inline-block");
    const authorCharElements = authorEl.querySelectorAll(".inline-block");

    const animationSettings = {
      willChange: "opacity, transform",
      opacity: 0,
      yPercent: 120,
      scaleY: 3,
      scaleX: 1,
      transformOrigin: "50% 0%",
    };

    const animationTargets = {
      duration: animationDuration,
      ease: ease,
      opacity: 1,
      yPercent: 0,
      scaleY: 1,
      scaleX: 1,
      stagger: stagger,
    };

    gsap.fromTo(charElements, animationSettings, {
      ...animationTargets,
      scrollTrigger: {
        trigger: el,
        scroller,
        start: scrollStart,
        end: scrollEnd,
        scrub: true,
      },
    });

    gsap.fromTo(authorCharElements, animationSettings, {
      ...animationTargets,
      scrollTrigger: {
        trigger: authorEl,
        scroller,
        start: scrollStart,
        end: scrollEnd,
        scrub: true,
      },
    });

    gsap.fromTo(
      lineEl,
      {
        scaleX: 0,
      },
      {
        scaleX: 1,
        transformOrigin: "left center",
        ease: ease,
        duration: 5.5,
        scrollTrigger: {
          trigger: lineEl,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true,
        },
      }
    );
  }, [
    scrollContainerRef,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger,
  ]);

  return (
    <div className="bg-[#0b0b0d]">
      <div className="bg-[url('/bgqoutew.png')] bg-cover text-white w-full h-full p-10 px-16 rounded-t-[60px]">
        <p className="twcen text-9xl font-extrabold h-20">“</p>
        <h2
          ref={containerRef}
          className={`py-5 overflow-hidden text-white text-6xl uppercase radio font-semibold ${containerClassName}`}
        >
          <span
            className={`inline-block text-[3.7rem] leading-[1.5] ${textClassName}`}
          >
            {splitText}
          </span>

        </h2>
        <div className="flex justify-between items-center">
          <div
            ref={lineRef}
            className="border-2 border-white h-0 w-1/2 origin-left scale-x-0"
          ></div>
          <p className="twcen text-9xl rotate-180 font-extrabold h-20">“</p>
        </div>
        <p
          ref={authorRef}
          className="radio text-2xl font-semibold overflow-hidden"
        >
          <span className="inline-block">{splitAuthor}</span>
        </p>
      </div>
    </div>
  );
};

export default TextQoute;
