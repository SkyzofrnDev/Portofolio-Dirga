import React from "react";

const TransButton = (props) => {
  return (
    <div className="min-w-72 text-center py-2 rounded-full poppins tracking-wider border-2 border-[#1e1e1e]">
      {props.name}
    </div>
  );
};

export default TransButton;
