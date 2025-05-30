import React from "react";
import { MovingCardComponent } from "../../components";

const testimonials = [
  {
    img : "/Icons/Figma.svg",
    quote:
      "Figma",
  },
];

function Test() {
  return (
    <div className="h-screen flex items-center justify-center bg-white dark:bg-black">
      <MovingCardComponent
        items={testimonials}
        direction="right"
        speed="speed"
      />
    </div>
  );
}

export default Test;
