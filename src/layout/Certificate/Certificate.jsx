import React from "react";
import { ButtonCattegory, SeeCredential } from "../../components";
import "./Style.css";
import certificateData from "./dataCertificate.json";

const Certificate = () => {
  const renderCertificate = (cert) => {
    switch (cert.type) {
      case "large-left":
        return (
          <a href={cert.link} key={cert.id} className={cert.className}>
            <div className="absolute mt-80 ml-5">
              <SeeCredential />
            </div>
            <img
              className="w-full h-full bg-black rounded-[1rem] rounded-tr-[5rem]"
              src={cert.image}
              alt={`Certificate ${cert.id}`}
            />
          </a>
        );

      case "large-right":
        return (
          <a href={cert.link} key={cert.id} className={cert.className}>
            <div className="absolute right-28 mt-80 ml-5">
              <SeeCredential />
            </div>
            <img
              className="h-96 w-full bg-yellow-50 rounded-[1rem] rounded-tr-[5rem] rounded-bl-[5rem]"
              src={cert.image}
              alt={`Certificate ${cert.id}`}
            />
          </a>
        );

      default:
        return null;
    }
  };

  const renderSmallCertificates = () => {
    const smallCerts = certificateData.filter(cert => 
      cert.type === "small-top" || cert.type === "small-bottom"
    );

    return (
      <div className="flex flex-col w-1/4 gap-y-5">
        {smallCerts.map(cert => (
          <a href={cert.link} key={cert.id} className={`${cert.className} h-full`}>
            <div className={` mt-32
               absolute ml-2 ` }>
              <SeeCredential />
            </div>
            <img
              className={`${
                cert.type === "small-top" 
                  ? "rounded-[1rem] rounded-tl-[2rem]" 
                  : "rounded-[1rem]"
              } w-full h-full bg-green-50`}
              src={cert.image}
              alt={`Certificate ${cert.id}`}
            />
          </a>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-[#131313] px-20 pt-36">
      <div className="flex items-center">
        <div className="Radio mr-36 text-white text-5xl font-bold uppercase text-nowrap text-justify tracking-wide">
          <p className="">Exploring the Milestones</p>
          <p>
            of My
            <span className="text-[#2A51D7]"> Success</span>
          </p>
          <p className="font-normal capitalize text-white text-2xl twcen mt-5">
            Reflecting on My Path to Excellence
          </p>
        </div>
        <div className="">
          <ButtonCattegory />
        </div>
      </div>
      <div className="pt-30 flex gap-5 mt-16">
        {renderCertificate(certificateData.find(cert => cert.type === "large-left"))}
        {renderSmallCertificates()}
        {renderCertificate(certificateData.find(cert => cert.type === "large-right"))}
      </div>
    </div>
  );
};

export default Certificate;