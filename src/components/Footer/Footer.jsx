import React, { useState } from "react";
import { motion } from "framer-motion";

const DURATION = 0.35;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  const text = typeof children === "string" ? children : String(children);

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
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
      <div className="absolute inset-0">
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
const SosialMedia = [
  {
    icon: "/SosialMedia/Tiktok.svg",
    alt: "Tiktok",
    link: "https://www.tiktok.com/@agusasugus",
  },
  {
    icon: "/SosialMedia/Instagram.svg",
    alt: "Instagram",
    link: "https://www.instagram.com/4dirga.h",
  },
  {
    icon: "/SosialMedia/X.svg",
    alt: "X / Twitter",
    link: "https://www.twitter.com",
  },
  {
    icon: "/SosialMedia/Github.svg",
    alt: "Github",
    link: "https://github.com/SkyzofrnDev",
  },
  {
    icon: "/SosialMedia/Linkedin.svg",
    alt: "Linkedin",
    link: "https://www.linkedin.com/in/dirga-hardeka-agustiantara-7421832b8/",
  },
];

const Footer = () => {
  const [showArrowEmail, setShowArrowEmail] = useState(false);
  const [showArrowWhatsapp, setShowArrowWhatsapp] = useState(false);

  return (
    <div className="text-white radio px-20 pt-20 pb-10 flex items-start gap-20 bg-[#131313] h-fit">
      <div className="uppercase font-semibold text-2xl">
        <p className="mb-5">AGUS DEV</p>
        <RevealLinks />
      </div>
      <div>
        <p className="uppercase font-semibold text-2xl mb-5">CONTACT ME</p>
        <FlipLink href="#">WHATSAPP</FlipLink>
        <FlipLink href="#">EMAIl</FlipLink>
        {/* <div className="flex items-center gap-5 mb-5">
          <p
            className="transition-all duration-200 ease-in-out relative group"
            onMouseEnter={() => setShowArrowEmail(true)}
            onMouseLeave={() => setShowArrowEmail(false)}
          >
            Email Me
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100 origin-left"></span>
          </p>
          <img
            src="/Arrow.svg"
            className={`w-4 transition-opacity duration-200 ease-in-out ${
              showArrowEmail ? "opacity-100" : "opacity-0"
            }`}
            alt=""
          />
        </div>
        <div className="flex gap-5 items-center">
          <p
            className="transition-all duration-200 ease-in-out relative group"
            onMouseEnter={() => setShowArrowWhatsapp(true)}
            onMouseLeave={() => setShowArrowWhatsapp(false)}
          >
            Whatsapp Me
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100 origin-left"></span>
          </p>
          <img
            src="/Arrow.svg"
            className={`w-4 transition-opacity duration-200 ease-in-out ${
              showArrowWhatsapp ? "opacity-100" : "opacity-0"
            }`}
            alt=""
          />
        </div> */}
      </div>
      {/* <div>
        <p className="uppercase font-semibold text-2xl mb-5">FOLLOW ME ON</p>
        <div className="flex gap-4">
          {SosialMedia.map((media, index) => (
            <a
              key={index}
              href={media.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#282828] rounded-full w-fit"
            >
              <img src={media.icon} alt={media.alt} />
            </a>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
