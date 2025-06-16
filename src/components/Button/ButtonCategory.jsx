import React, { useState } from "react";
import "./ButtonCategory.css";

const ButtonCategory = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [clickedButton, setClickedButton] = useState(null);

  const buttons = [
    { id: 1, title: "FRONTEND", icon: "/WebsiteIcon.svg" },
    { id: 2, title: "BACKEND", icon: "/System.svg" },
    { id: 3, title: "DATA ANALYTIC", icon: "/Data.svg" },
    { id: 4, title: "WEB DEVELOPMENT", icon: "/Internet.svg" },
  ];

  const handleButtonClick = (id) => {
    setActiveButton(id);
    setClickedButton(id);
    setTimeout(() => setClickedButton(null), 500); 
  };

  return (
    <div className="flex flex-wrap gap-5">
      {buttons.map((button) => (
        <button
          className={`button border-2 border-white rounded-full poppins text-white flex px-5 py-2 gap-2 items-center ${
            activeButton === button.id ? "active" : ""
          }`}
          key={button.id}
          onClick={() => handleButtonClick(button.id)}
        >
          <span
            className={`ripple ${clickedButton === button.id ? "animate" : ""}`}
          />
          <img src={button.icon} alt={button.title}  loading="lazy" />
          <span className="text-lg">{button.title}</span>
        </button>
      ))}
    </div>
  );
};

export default ButtonCategory;
