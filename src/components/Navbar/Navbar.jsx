import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ onScrollTo }) => {
  const desktopMenuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const menu = desktopMenuRef.current;
      if (!menu) return;

      if (width >= 1024) {
        menu.classList.remove("hidden");
        menu.classList.add("flex");
      } else {
        menu.classList.remove("flex");
        menu.classList.add("hidden");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (id) => {
    onScrollTo(id);
    setIsMenuOpen(false); // close after click
  };

  const handleOverlayClick = (e) => {
    // close only if clicking outside the <ul>
    if (e.target.id === "mobileOverlay") {
      setIsMenuOpen(false);
    }
  };

  const navLinks = (
    <>
      <li className="cursor-pointer" onClick={() => handleLinkClick("#ABOUT")}>
        ABOUT
      </li>
      <li
        className="cursor-pointer"
        onClick={() => handleLinkClick("#PROJECT")}
      >
        PROJECT
      </li>
      <li className="cursor-pointer" onClick={() => handleLinkClick("#SKILL")}>
        SKILL
      </li>
      <li
        className="cursor-pointer"
        onClick={() => handleLinkClick("#EXPERIENCE")}
      >
        EXPERIENCE
      </li>
      <li
        className="cursor-pointer"
        onClick={() => handleLinkClick("#CONTACT")}
      >
        CONTACT
      </li>
    </>
  );

  return (
    <div className="flex justify-center mx-16">
      <div className="fixed z-50 w-full lg:w-[92%] max-w-full twcen text-white px-5 pt-4 lg:pt-5 py-4 bg-[#0b0b0d] lg:rounded-b-3xl text-xl lg:text-3xl justify-between flex overflow-hidden">
        <div className="flex items-center">
          <p className="">AGUSDEV</p>
        </div>
        <div ref={desktopMenuRef} className="hidden ">
          <ul className="flex gap-16 text-[1.5rem]">{navLinks}</ul>
        </div>
        <div
          className="lg:hidden justify-center rounded-sm cursor-pointer flex items-center relative z-50"
          onClick={handleToggleMenu}
        >
          <div className="w-10 h-10 flex bg-[#1e1e1e] justify-center rounded-sm cursor-pointer  items-center flex-col  relative">
            <span
              className={`absolute w-6 h-[2px] bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 top-5.5" : "top-3"
              }`}
            />
            <span
              className={`absolute w-6 h-[2px] bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "top-5"
              }`}
            />
            <span
              className={`absolute w-6 h-[2px] bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 top-7.5" : "top-7"
              }`}
            />
          </div>
        </div>

        <div
          id="mobileOverlay"
          onClick={handleOverlayClick}
          className={`fixed top-0 left-0 w-full h-screen bg-black/80 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 z-40 transition-all duration-500 ease-in-out ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <ul
            className="flex flex-col items-center justify-center h-full gap-8 text-2xl text-white transition-transform duration-500 ease-in-out">
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
