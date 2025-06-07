import React from "react";
import {motion}from "framer-motion"
const DURATION = 0.35;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  const text = typeof children === "string" ? children : String(children);

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-6xl md:text-7xl lg:text-8xl"
      style={{ lineHeight: 0.85 }}
    >
      <div>
        {text.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0 text-[#1b63ff]">
        {text.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export const RevealLinks = () => {
  return (
    <section className="">
      <FlipLink href="#">Twitter</FlipLink>
      <FlipLink href="#">Linkedin</FlipLink>
      <FlipLink href="#">Facebook</FlipLink>
      <FlipLink href="#">Instagram</FlipLink>
    </section>
  );
};
const Footer2 = () => {
  return (
    <div className="text-white radio px-10 lg:px-20 pt-20 pb-10 2xl:flex items-start gap-20 bg-[#0b0b0d] h-fit">
      <div className="uppercase font-semibold text-2xl">
        <p className="mb-5"> - AGUS DEV</p>
        <RevealLinks />
      </div>
      <div>
        <p className="uppercase font-semibold text-2xl mb-5 mt-10 2xl:mt-0" > - CONTACT ME</p>
        <FlipLink href="#">WHATSAPP</FlipLink>
        <FlipLink href="#">EMAIl</FlipLink>
      </div>
    </div>
  );
};

export default Footer2;
