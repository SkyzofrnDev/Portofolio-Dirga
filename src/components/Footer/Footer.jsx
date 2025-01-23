import React from "react";

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
        <div className="flex items-center ">
          <p className="mb-5 underline underline-offset-[6px]">Email Me</p>
          <img src="/Arrow.svg" alt="" />
        </div>
        <p>Whatsapp Me</p>
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
