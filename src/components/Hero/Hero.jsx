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

export default function Hero() {
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
            <h1 className="text-base md:text-lg max-w-md font-bold text-gray-800 mt-4 text-center md:text-left">
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
          <div className="pt-30 flex justify-items-end pr-5 gap-20">
            <aside className="bg-black text-white p-4 rounded-lg w-full max-w-sm font-mono">
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
                <div className="grid grid-cols-2 gap-4  items-center ">
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
            <div className="text-center">
              <div className="relative group inline-block">
                <img
                  src={PicPerfil}
                  alt="Foto de perfil"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg mt-20 cursor-pointer"
                />
                <p className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xl font-bold text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Jose Ruiz
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contacto"> contacto </section>
      <section id="Proyectos"> proyectos </section>
    </main>
  );
}
