import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

const ProjectDesign = () => {
  return (
    <section className="bg-[#0b0b0d] px-5 pb-24 lg:px-24 text-white">
      <div className=" lg:flex justify-between items-end ">
        <div className="uppercase">
          <p className="font-semibold text-sm md:text-3xl">My Design Work</p>
          <p className="font-bold text-4xl md:text-5xl xl:text-6xl md:mt-5 lg:mt-10">
            My <span className="text-[#1299F5]">Expertise</span>{" "}
            <p>at a Glance</p>
          </p>
        </div>
        <div className="">
          <p className="text-sm md:text-xl mt-2 lg:mt-0 ">
            Explore the skills that define my professional{" "}
            <p>journey and drive my accomplishments.</p>
          </p>
          <div className="flex mt-5">
            <p className="font-semibold mr-5 text-xl">DISCOVER ME</p>
            <img src="/Arrow.svg" alt=""  loading="lazy" />
          </div>
        </div>
      </div>
      <div className=" max-w-full ">
        <Link
          heading="About"
          subheading="Learn what we do here"
          imgSrc="https://raw.githubusercontent.com/citrahlzh/citrahlzh/refs/heads/main/citrahlzh.jpg"
          href="#"
        />
        <Link
          heading="Clients"
          subheading="We work with great people"
          imgSrc="https://raw.githubusercontent.com/citrahlzh/citrahlzh/refs/heads/main/citrahlzh.jpg"
          href="#"
        />
        <Link
          heading="Portfolio"
          subheading="Our work speaks for itself"
          imgSrc="https://raw.githubusercontent.com/citrahlzh/citrahlzh/refs/heads/main/citrahlzh.jpg"
          href="#"
        />
        <Link
          heading="Careers"
          subheading="We want cool people"
          imgSrc="https://raw.githubusercontent.com/citrahlzh/citrahlzh/refs/heads/main/citrahlzh.jpg"
          href="#"
        />
        <Link
          heading="Fun"
          subheading="In case you're bored"
          imgSrc="https://raw.githubusercontent.com/citrahlzh/citrahlzh/refs/heads/main/citrahlzh.jpg"
          href="#"
        />
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        {/* Custom SVG arrow instead of react-icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-8 h-8 text-neutral-50"
        >
          <path
            fill="currentColor"
            d="M12.293 5.707a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 11-1.414-1.414L16.586 13H4a1 1 0 110-2h12.586l-4.293-4.293a1 1 0 010-1.414z"
          />
        </svg>
      </motion.div>
    </motion.a>
  );
};

export default ProjectDesign;
