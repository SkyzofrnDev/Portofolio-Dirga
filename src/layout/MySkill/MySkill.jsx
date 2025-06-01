import React from "react";
import { CardSkill, MovingCardComponent } from "../../components";

const tools = [
  { img: "/Icons/AdobeIluslator.svg", quote: "Adobe Illustrator", hoverColor: "#3b82f6" },
  { img: "/Icons/Canva.svg", quote: "Canva", hoverColor: "#3b82f6" },
  { img: "/Icons/Css.svg", quote: "Css" },
  { img: "/Icons/cursor.png", quote: "Cursor" },
  { img: "/Icons/Figma.svg", quote: "Figma" },
  { img: "/Icons/Framer.svg", quote: "Framer" },
  { img: "/Icons/Golang.svg", quote: "Golang" },
  { img: "/Icons/Gpt.svg", quote: "OpenAI" },
  { img: "/Icons/Html.svg", quote: "Html" },
  { img: "/Icons/Js.svg", quote: "Js" },
  { img: "/Icons/Laravel.svg", quote: "Laravel" },
  { img: "/Icons/Mongo.svg", quote: "Mongo" },
  { img: "/Icons/MySql.svg", quote: "MySql" },
  { img: "/Icons/Postges.svg", quote: "Postges" },
  { img: "/Icons/React.svg", quote: "React" },
  { img: "/Icons/Tailwind.svg", quote: "Tailwind" },
  { img: "/Icons/Vite.svg", quote: "Vite" },
  { img: "/Icons/VsCode.svg", quote: "VsCode" },
];

const ShinyText = ({ disabled, className, animationDuration, text }) => {
  return (
    <div
      className={`text-[#1a50ffbb] bg-clip-text inline-block ${
        disabled ? "" : "animate-shine"
      } ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 60%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        animationDuration: animationDuration,
      }}
    >
      {text}
    </div>
  );
};

const MySkill = () => {
  return (
    <div className="pt-56 pb-26 bg-[#0b0b0d] text-white px-4">
      <div className="justify-between items-end">
        <div className="uppercase">My Skills</div>
        <div className="h-fit flex items-center justify-center">
          <MovingCardComponent items={tools} direction="right" speed="slow" />
        </div>
      </div>
    </div>
  );
};

export default MySkill;
