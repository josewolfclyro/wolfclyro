
import React from "react";
import PicPerfil from "../../assets/picperfill.png";
import Logo from "../../assets/logo.png";
import iconos from "../../assets/react.png";
import iconos2 from "../../assets/python.png";
import iconos3 from "../../assets/java.png";
import iconos4 from "../../assets/tail.png";
import iconos5 from "../../assets/html.png";
import iconos6 from "../../assets/css.png";
import iconos7 from "../../assets/kotlin.png";
import cv from "./../../assets/cv.pdf";
import porta from "../../assets/printporta.jpg"

export default function Hero() {
  const handleEmailClick = () => {
    navigator.clipboard.writeText("josewolf2324@gmail.com");
    alert("Correo copiado al portapapeles.");
  };
  return (
    <main>
      <section id="Home">
        {/* texto y descripcion  */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-screen">
          <div className="pt-10 pl-4 flex flex-col items-center md:items-start">
            <img
              src={Logo}
              alt="Logo"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-2xl"
            />{" "}
            <h1 className="text-sm md:text-lg max-w-md font-bold text-black mt-4 text-center md:text-left">
              Hola, soy Jose un programador en proceso de crecimiento,
              apasionado por la tecnología y el aprendizaje constante. Cada día
              doy un paso más en mi desarrollo profesional, con un enfoque
              especial en ciberseguridad y el uso de tecnologías como ReactJs,
              React Native y Python. Me motiva construir soluciones prácticas,
              seguras y modernas, siempre buscando mejorar mis habilidades y
              mantenerme actualizado con las últimas tendencias del desarrollo.
            </h1>
          </div>
          {/* foto de perfil */}
          <div className="pt-10 flex flex-col md:flex-row justify-items-end pr-5 gap-20">
            <aside className="bg-black text-white p-2 md:p-4 rounded-lg w-full md:max-w-sm font-mono">
              <div className="flex justify-between items-center">
                <div className="flex space-x-2 text-red-500">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-sm">bash</p>
              </div>
              <div class="mt-4">
                <p class="text-green-400">
                  Estas son algunas de las tecnologias que utilizo
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4  items-center ">
                  <img
                    src={iconos}
                    alt="ReactJs"
                    className=" w-8 h-8 rounded-full object-cover"
                  />
                  <p>
                    react/
                    <br />
                    native/
                    <br /> electron/
                  </p>
                  <img
                    src={iconos2}
                    alt="python"
                    className=" w-8 h-8 rounded-full object-cover"
                  />
                  <p> Python </p>
                  <img
                    src={iconos3}
                    alt="java"
                    className=" w-8 h-8 rounded-full object-cover"
                  />
                  <p> JavaScript </p>
                  <img
                    src={iconos4}
                    alt="tailwind"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <p> Tailwind </p>
                  <img
                    src={iconos5}
                    alt="HTML"
                    className=" w-8 h-8 rounded-full object-cover"
                  />
                  <p className="text-lg"> Html </p>
                  <img
                    src={iconos6}
                    alt="css"
                    className="w-8 h-8 rounded-full object-cover "
                  />
                  <p className="text-lg"> css </p>
                  <img
                    src={iconos7}
                    alt="kotlin"
                    className="w-8 h-8 rounded-full object-cover "
                  />
                  <p className="text-lg"> kotlin </p>
                </div>
              </div>
            </aside>
            <div class="w-96 px-6 py-6  text-center bg-black rounded-lg lg:mt-0 xl:px-10 ml-4 ">
              <div class="space-y-4 xl:space-y-6">
                <img
                  class="mx-auto rounded-full h-36 w-36"
                  src={PicPerfil}
                  alt="author avatar"
                />
                <div class="space-y-2">
                  <div class="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
                    <h3 class="text-white">Jose Ruiz</h3>
                    <p class="text-green-400 font-mono">Dev en desarrollor</p>
                    <div class="flex justify-center mt-5 space-x-5">
                      <a
                        href="https://www.instagram.com/josesixx20/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-block text-gray-400"
                      >
                        <span class="sr-only">Instagram</span>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 448 512"
                          class="w-10 h-10 text-gray-400 hover:text-gray-100"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </a>
                      <a
                        href="https://github.com/josewolfclyro"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-block text-gray-400"
                      >
                        <span class="sr-only">GitHub</span>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 496 512"
                          class="w-10 h-10 text-gray-400 hover:text-gray-100"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/wolfclyro/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-block text-gray-400"
                      >
                        <span class="sr-only">Linkedin</span>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 448 512"
                          class="w-10 h-10 text-gray-400 hover:text-gray-100"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                        </svg>
                      </a>
                    </div>

                    <div className="flex flex-col gap-4">
                      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg
                          class="fill-current w-4 h-4 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                        </svg>
                        <a href={cv}  target="_blank" rel="noopener noreferrer"> 
                        <span>Ver cv pdf</span>
                        </a>
                      </button>
                      <button  class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded flex items-center justify-center gap-2 text-center" onClick={handleEmailClick}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <a>
                        <span>Email</span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contacto"></section>
      <section id="Proyectos" className="text-gray-600 body-font">
  <h1 className="text-black font-bold text-2xl text-center">Proyectos</h1>
  <div className="container px-6 py-24 mx-auto">
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <img 
            alt="content"
            className="hover:text-[#070707] transition-transform hover:scale-110 transform inline-block duration-300 object-cover object-center h-full w-full"
            src={porta}
          />
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
          Portafolio
        </h2>
        <p className="leading-relaxed text-base">
          Proyecto de portafolio propio.
        </p>

        {/* Contenedor de los íconos alineados */}
        <div className="flex justify-center items-center gap-4 mt-4">
          <img src={iconos} alt="Icono 1" className="w-10 h-10" />
          <img src={iconos4} alt="Icono 2" className="w-10 h-10" />
        </div>

        <a
          href="https://github.com/josewolfclyro/wolfclyro"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button className="flex items-center gap-2 mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
            <i className="bi bi-github"></i>
            Repositorio
          </button>
        </a>
      </div>
    </div>
  </div>
</section>
<footer className="text-gray-600 body-font bg-white">
  <div className="container px-5 py-8 mx-auto flex flex-col sm:flex-row items-center justify-between">
    
    {/* Logo */}
    <a href="#Home" className="flex items-center text-gray-900 mb-4 sm:mb-0">
      <img 
        src={Logo} 
        alt="logo" 
        className="w-[100px] hover:scale-110 transition-transform duration-300" 
      />
    </a>

    {/* Texto de copyright */}
    <p className="text-sm text-gray-500 text-center sm:text-left">
      © 2025 Jose Ruiz
    </p>

    {/* Íconos sociales */}
    <div className="flex justify-center sm:justify-start gap-4 mt-4 sm:mt-0">
      
      {/* Instagram */}
      <a
        href="https://www.instagram.com/josesixx20/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-gray-800 transition-colors"
      >
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/wolfclyro"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-gray-800 transition-colors"
      >
        <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/josewolfclyro"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-gray-800 transition-colors"
      >
        <svg
          fill="currentColor"
          viewBox="0 0 496 512"
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6... (truncado para brevedad)" />
        </svg>
      </a>
    </div>
  </div>
</footer>


    </main>
  );
}