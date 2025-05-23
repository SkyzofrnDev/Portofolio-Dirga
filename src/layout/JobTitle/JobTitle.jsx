import React from "react";
import { TextSlider } from "../../components";

const JobTitle = () => {
  return (
    <div className="bg-white text-black">
      <div className="py-5">
        <TextSlider defaultVelocity={2} numRows={1}>
          <div className="flex gap-5 items-center">
            UI UX{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 96 96"
              fill="none"
              className="w-8 h-8 sm:w-10 sm:h-16 md:w-20"
            >
              <circle cx="47.6133" cy="47.6134" r="47.6133" fill="#0b0b0d" />
              <path
                d="M48.2237 19.5338L39.7332 39.9553L17.0919 47.6134L39.7332 55.2715L48.2237 75.693L56.7142 55.2715L79.3554 47.6134L56.7142 39.9553L48.2237 19.5338Z"
                fill="white"
              />
            </svg>{" "}
            FRONT END DEV{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 96 96"
              fill="none"
              className="w-8 h-8 sm:w-10 sm:h-16 md:w-20"
            >
              <circle cx="47.6133" cy="47.6134" r="47.6133" fill="#0b0b0d" />
              <path
                d="M48.2237 19.5338L39.7332 39.9553L17.0919 47.6134L39.7332 55.2715L48.2237 75.693L56.7142 55.2715L79.3554 47.6134L56.7142 39.9553L48.2237 19.5338Z"
                fill="white"
              />
            </svg>{" "}
            BACKEND{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 96 96"
              fill="none"
              className="w-8 h-8 sm:w-10 sm:h-16 md:w-20"
            >
              <circle cx="47.6133" cy="47.6134" r="47.6133" fill="#0b0b0d" />
              <path
                d="M48.2237 19.5338L39.7332 39.9553L17.0919 47.6134L39.7332 55.2715L48.2237 75.693L56.7142 55.2715L79.3554 47.6134L56.7142 39.9553L48.2237 19.5338Z"
                fill="white"
              />
            </svg>
          </div>
        </TextSlider>
      </div>
    </div>
  );
};

export default JobTitle;
