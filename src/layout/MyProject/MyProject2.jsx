import React from "react";
import { FollowingMenu, ShinyTextComponent } from "../../components";
const demoItems = [
  {
    link: "/",
    text: "Portfolio AgusDev",
    image: "/Project/AgusDev.png",
  },
  {
    link: "#",
    text: "The Unwanted PErson",
    image: "/Project/Unwanted.png",
  },
  {
    link: "#",
    text: "Website RPL",
    image: "/Project/WebRpl.png",
  },
  {
    link: "https://clev.io/LCGNAI2025/kategorismk/Dirga%20Hardeka%20Agustiantara%20%26%20Rivandra%20Abhista%20Adam%C2%A0Prassaya-SMKN%201%20CIBINONG/",
    text: "BOGOR REBORN",
    image: "/Project/BogorReborn.png",
  },  {
    link: "https://clev.io/LCGNAI2025/kategorismk/Dirga%20Hardeka%20Agustiantara%20%26%20Rivandra%20Abhista%20Adam%C2%A0Prassaya-SMKN%201%20CIBINONG/",
    text: "VISTA NUSA",
    image: "/Project/VistaNusa.png",
  },
];

const MyProject2 = () => {
  return (
    <div className="px-5 lg:px-20 bg-[#0b0b0d] pt-44 text-white">
      <div className="xl:flex justify-between mb-20">
        <p className="font-bold text-5xl text-white/70">
          <ShinyTextComponent text="MY PROJECT" disabled={false} speed={3}/>
        </p>
        <p className="w-2/3 lg:text-xl xl:text-2xl mt-10 xl:mt-0">
          This Is My Complete Project ( gatau sotau jir )
        </p>
      </div>
    <div style={{ height: "600px", position: "relative" }}>
      <FollowingMenu items={demoItems} />
    </div>
    </div>
  );
};

export default MyProject2;
