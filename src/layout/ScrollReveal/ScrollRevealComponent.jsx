import React from "react";
import ScrollReveal from "./ScrollRevealComponent";

const ScrollRevealComponent = () => {
  return (
    <ScrollReveal
      baseOpacity={0}
      enableBlur={true}
      baseRotation={5}
      blurStrength={10}
    >
      When does a man die? When he is hit by a bullet? No! When he suffers a
      disease? No! When he ate a soup made out of a poisonous mushroom? No! A
      man dies when he is forgotten!
    </ScrollReveal>
  );
};

export default ScrollRevealComponent;
