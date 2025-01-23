import React, { useRef, useEffect } from "react";
import BlockMini from "../Block/BlockMini";
import "./Style.css"

const TransBTClick = ({ width, isExpanding }) => {
  return (
    <div 
      className="relative border-4 flex items-center poppins border-[#1e1e1e] px-5 h-16"
      style={{ 
        width: width ? `${width}px` : '200px',
        minWidth: '200px',
        transition: 'all 0.3s ease-out'
      }}
    >
      <p className="tracking-wide whitespace-nowrap ">DEV OPS</p>
      <div className="absolute bottom-[2.8rem] right-[-0.8rem]">
        <BlockMini/>
      </div>
      <div className="absolute top-[3.1rem] right-[-0.8rem]">
        <BlockMini/>
      </div>
      <div className="relative bottom-[1.8rem] right-[11.6rem]">
        <BlockMini/>
      </div>
      <div className="relative top-[1.8rem] right-[12.72rem]">
        <BlockMini/>
      </div>
    </div>
  );
};

export default TransBTClick;
