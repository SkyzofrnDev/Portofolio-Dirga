import React from "react";
import { FollowingMenu, ShinyTextComponent } from "../../components";
const demoItems = [
  {
    link: "#",
    text: "Portfolio AgusDev",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    link: "#",
    text: "The Unwanted PErson",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    link: "#",
    text: "Web RPL",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    link: "#",
    text: "BOGOR REBORN",
    image: "https://picsum.photos/600/400?random=4",
  },
];

const MyProject2 = () => {
  return (
    <div className="px-20 bg-[#0b0b0d] pt-44 text-white">
      <div className="xl:flex justify-between mb-20">
        <p className="font-bold text-5xl text-white/70">
          <ShinyTextComponent text="MY PROJECT" disabled={false} speed={3}/>
        </p>
        <p className="w-2/3 lg:text-xl xl:text-2xl mt-10 xl:mt-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita id
          repudiandae quibusdam, totam earum harum? temporibus!
        </p>
      </div>
    <div style={{ height: "600px", position: "relative" }}>
      <FollowingMenu items={demoItems} />
    </div>
    </div>
  );
};

export default MyProject2;
