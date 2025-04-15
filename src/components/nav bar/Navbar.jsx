import React, { useState } from "react";
import logo from "../../assets/logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed -top-5 left-0 w-full bg-gray-50/60 backdrop-blur-sm shadow-md z-50 !opacity-70">
      <div className="flex justify-between items-center sm:px-12 sm:py-6 px-3 py-2">
        {/* Logo y Nombre */}
        <div className="flex items-center space-x-3">
          <a href="#Home">
            <img
              src={logo}
              alt="logo"
              className="w-[100px] hover:text-[#070707] transition-transform hover:scale-110 transform inline-block duration-300"
            />
          </a>
        </div>

        {/* Botón de menú hamburguesa */}
        <button onClick={toggleMenu}>
          <svg
            className="md:hidden w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navegación entre páginas */}
        <div className="hidden md:flex flex-grow justify-center">
          <ul className="flex sm:space-x-8 space-x-4">
            {navbarLinks.map((links) => (
              <li key={links.id}>
                <a
                  className="hover:text-[#616060] transition-transform hover:scale-110 transform inline-block duration-300 font-bold"
                  href={links.link}
                >
                  {links.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Botones de redes sociales */}
        <div className="hidden md:block">
          <ul className="sm:text-2xl flex space-x-4">
            {navbarRedes.map((links) => (
              <li key={links.id}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#A6A6A6] transition-transform hover:scale-110 transform inline-block duration-300"
                  href={links.link}
                >
                  <i className={links.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Menú hamburguesa */}
      <div
        className={`md:hidden absolute w-full transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex-col px-4 py-4 bg-white">
          {navbarLinks.map((links) => (
            <li key={links.id} className="py-2 text-center font-bold">
              <a
                className="hover:text-[#A6A6A6] transition-transform hover:scale-110 transform inline-block duration-300"
                href={links.link}
              >
                {links.title}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex justify-center gap-4 px-4 py-4 border-t border-white bg-white">
          {navbarRedes.map((links) => (
            <li key={links.id}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:text-[#A6A6A6] transition-transform hover:scale-110 transform inline-block duration-300"
                href={links.link}
              >
                <i className={links.icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const navbarRedes = [
  {
    id: 1,
    title: "Instagram",
    link: "https://www.instagram.com/josesixx20/",
    icon: "bi bi-instagram",
  },
  {
    id: 2,
    title: "LinkedIn",
    link: "http://www.linkedin.com/in/wolfclyro",
    icon: "bi bi-linkedin",
  },
  {
    id: 3,
    title: "GitHub",
    link: "https://github.com/josewolfclyro",
    icon: "bi bi-github",
  },
];

const navbarLinks = [
  {
    id: 1,
    title: "Home",
    link: "#Home",
  },
  {
    id: 2,
    title: "contacto",
    link: "#contacto",
  },
  {
    id: 3,
    title: "Proyectos",
    link: "#Proyectos",
  },
];
