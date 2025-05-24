import { useState, useEffect } from "react";
import { ButtonCattegory, SeeCredential } from "../../components";
import "./Style.css";
import certificateData from "./dataCertificate.json";

const Certificate = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1150);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1150);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const renderCertificate = (cert) => {
    if (!cert) return null;

    const isRight = cert.type === "large-right";
    const imageClass =
      cert.type === "large-left"
        ? "rounded-[1rem] rounded-tr-[5rem]"
        : "rounded-[1rem] rounded-tr-[5rem] rounded-bl-[5rem]";

    return (
      <a
        href={cert.link}
        key={cert.id}
        className={`${cert.className} relative group overflow-hidden`}
      >
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

        {/* Title Centered */}
        <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white text-3xl leading-relaxed font-semibold text-center px-4">
            {cert.title}
          </h3>
        </div>

        {/* See Credential Button */}
        <div className={`absolute ${isRight ? "right-28" : "ml-5"} mt-80 z-30`}>
          <SeeCredential />
        </div>

        {/* Image */}
        <img
          className={`w-full h-full bg-black ${imageClass}`}
          src={cert.image}
          alt={`Certificate ${cert.id}`}
        />
      </a>
    );
  };

  const renderSmallCertificates = () => {
    const smallCerts = certificateData.filter(
      (cert) => cert.type === "small-top" || cert.type === "small-bottom"
    );

    return (
      <div className="flex flex-col w-1/4 gap-y-5">
        {smallCerts.map((cert) => (
          <a
            href={cert.link}
            key={cert.id}
            className={`${cert.className} h-full relative group overflow-hidden`}
          >
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

            {/* Title Centered */}
            <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-3xl leading-relaxed font-semibold text-center px-4">
                {cert.title}
              </h3>
            </div>

            {/* See Credential */}
            <div className="absolute mt-32 ml-2 z-30">
              <SeeCredential />
            </div>

            {/* Image */}
            <img
              className={`${
                cert.type === "small-top"
                  ? "rounded-[1rem] rounded-tl-[2rem]"
                  : "rounded-[1rem]"
              } w-full h-44`}
              src={cert.image}
              alt={`Certificate ${cert.id}`}
            />
          </a>
        ))}
      </div>
    );
  };

  const renderMobileCertificates = () => {
    return (
      <div className="flex flex-col gap-5 mt-10">
        {certificateData.map((cert) => (
          <a
            href={cert.link}
            key={cert.id}
            className="relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

            {/* Title Centered */}
            <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-3xl leading-relaxed font-semibold text-center px-4">
                {cert.title}
              </h3>
            </div>
            <div className="absolute bottom-4 left-4 z-30">
              <SeeCredential />
            </div>
            <img
              className="w-full h-56 rounded-2xl bg-gray-800"
              src={cert.image}
              alt={`Certificate ${cert.id}`}
            />
          </a>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-[#0b0b0d] px-6 sm:px-10 xl:px-20 pt-36">
      <div className="flex flex-col 2xl:flex-row 2xl:items-center">
        <div className="Radio mr-0 2xl:mr-36 text-white text-4xl sm:text-5xl font-bold uppercase tracking-wide">
          <p>Exploring the Milestones</p>
          <p>
            of My <span className="text-[#2A51D7]">Success</span>
          </p>
          <p className="font-normal capitalize text-white text-xl sm:text-2xl mt-5">
            Reflecting on My Path to Excellence
          </p>
        </div>
        <div className="mt-10 2xl:mt-0">
          <ButtonCattegory />
        </div>
      </div>

      {isDesktop ? (
        <div className="flex gap-5 mt-16">
          {renderCertificate(
            certificateData.find((cert) => cert.type === "large-left")
          )}
          {renderSmallCertificates()}
          {renderCertificate(
            certificateData.find((cert) => cert.type === "large-right")
          )}
        </div>
      ) : (
        renderMobileCertificates()
      )}
    </div>
  );
};

export default Certificate;
