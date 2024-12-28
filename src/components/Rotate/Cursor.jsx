import React from "react";

const Cursor = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="35"
        viewBox="0 0 34 35"
        fill="none"
      >
        <g filter="url(#filter0_d_212_100)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.9997 14.0004L4.99969 4.00037L10.203 28.0004L16.5611 18.5211L27.9997 14.5004L26.9997 14.0004Z"
            fill="#1299F5"
          />
          <path
            d="M27.2233 13.5532L27.215 13.549L27.2066 13.5452L5.2066 3.54518L4.30005 3.13312L4.51105 4.10631L9.71438 28.1063L9.96346 29.2552L10.6183 28.2789L16.8838 18.9376L28.1655 14.9721L29.2786 14.5808L28.2233 14.0532L27.2233 13.5532Z"
            stroke="white"
            stroke-miterlimit="16"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_212_100"
            x="0.600403"
            y="0.265869"
            width="32.9572"
            height="34.2441"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_212_100"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_212_100"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <div className="relative -top-1 bg-[#1299F5] ml-5 tracking-wide text-white rounded-lg px-3 border-2 border-white twcen text-base">
        DIRGA'S
      </div>
    </div>
  );
};

export default Cursor;
