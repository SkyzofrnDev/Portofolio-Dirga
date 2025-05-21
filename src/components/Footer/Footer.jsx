import React, { useState } from "react";

const SosialMedia = [
  {
    icon: "/SosialMedia/Tiktok.svg",
    alt: "Tiktok",
    link: "https://www.tiktok.com",
  },
  {
    icon: "/SosialMedia/Instagram.svg",
    alt: "Instagram",
    link: "https://www.instagram.com",
  },
  {
    icon: "/SosialMedia/X.svg",
    alt: "X / Twitter",
    link: "https://www.twitter.com",
  },
  {
    icon: "/SosialMedia/Github.svg",
    alt: "Github",
    link: "https://www.github.com",
  },
  {
    icon: "/SosialMedia/Linkedin.svg",
    alt: "Linkedin",
    link: "https://www.linkedin.com",
  },
];

const Footer = () => {
  const [showArrowEmail, setShowArrowEmail] = useState(false);
  const [showArrowWhatsapp, setShowArrowWhatsapp] = useState(false);

  return (
    <div className="text-white radio px-20 pt-20 pb-10 flex items-start gap-20 bg-[#131313]">
      <div className="uppercase font-semibold text-2xl">
        <p className="mb-5">AGUS DEV</p>
        <p>FRONT END DEVELOPER</p>
        <p>ui / ux designer </p>
        <p>software engineering</p>
      </div>
      <div>
        <p className="uppercase font-semibold text-2xl mb-5">CONTACT ME</p>
        <div className="flex items-center gap-5 mb-5">
          <p 
            className="transition-all duration-200 ease-in-out relative group"
            onMouseEnter={() => setShowArrowEmail(true)}
            onMouseLeave={() => setShowArrowEmail(false)}
          >
            Email Me
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100 origin-left"></span>
          </p>
          <img 
            src="/Arrow.svg" 
            className={`w-4 transition-opacity duration-200 ease-in-out ${showArrowEmail ? 'opacity-100' : 'opacity-0'}`} 
            alt="" 
          />
        </div>
        <div className="flex gap-5 items-center">
          <p 
            className="transition-all duration-200 ease-in-out relative group"
            onMouseEnter={() => setShowArrowWhatsapp(true)}
            onMouseLeave={() => setShowArrowWhatsapp(false)}
          >
            Whatsapp Me
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100 origin-left"></span>
          </p>
          <img 
            src="/Arrow.svg" 
            className={`w-4 transition-opacity duration-200 ease-in-out ${showArrowWhatsapp ? 'opacity-100' : 'opacity-0'}`} 
            alt="" 
          />
        </div>
      </div>
      <div>
        <p className="uppercase font-semibold text-2xl mb-5">FOLLOW ME ON</p>
        <div className="flex gap-4">
          {SosialMedia.map((media, index) => (
            <a
              key={index}
              href={media.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#282828] rounded-full w-fit"
            >
              <img src={media.icon} alt={media.alt} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
