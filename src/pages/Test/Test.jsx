import React from "react";
import { MovingCardComponent } from "../../components";

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times...",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote: "To be, or not to be, that is the question...",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged...",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael...",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

function Test() {
  return (
    <div className="h-screen flex items-center justify-center bg-white dark:bg-black">
      <MovingCardComponent
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

export default Test;
