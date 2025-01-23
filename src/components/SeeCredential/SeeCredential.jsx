import React from "react";
import "./Style.css";

const SeeCredential = () => {
  return (
    <div className="see-credential">
      <span className="text text-white font-semibold text-lg">SEE CREDENTIAL</span>
      <div className="text-white ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="rotate-45"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path
              stroke-dasharray="20"
              stroke-dashoffset="20"
              d="M12 21l0 -17.5"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.2s"
                values="20;0"
              />
            </path>
            <path
              stroke-dasharray="12"
              stroke-dashoffset="12"
              d="M12 3l7 7M12 3l-7 7"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.2s"
                dur="0.2s"
                values="12;0"
              />
            </path>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default SeeCredential;
