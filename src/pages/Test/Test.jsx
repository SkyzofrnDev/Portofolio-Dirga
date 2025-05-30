import React from "react";
import { MovingCardComponent } from "../../components";

const tools = [
  { img: "/Icons/AdobeIluslator.svg", quote: "Adobebelluslator" },
  { img: "/Icons/Canva.svg", quote: "Canva" },
  { img: "/Icons/Css.svg", quote: "Css" },
  { img: "/Icons/Cursor.svg", quote: "Cursor" },
  { img: "/Icons/Figma.svg", quote: "Figma" },
  { img: "/Icons/Framer.svg", quote: "Framer" },
  { img: "/Icons/Golang.svg", quote: "Golang" },
  { img: "/Icons/Gpt.svg", quote: "Gpt" },
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


function Test() {
  return (
    <div className="h-screen flex items-center justify-center bg-white dark:bg-black">
      <MovingCardComponent
        items={tools}
        direction="right"
        speed="speed"
      />
    </div>
  );
}

export default Test;
