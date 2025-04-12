import React from "react";
import PicPerfil from "/Users/jose/react-cv-app/src/assets/picperfill.png";
import Logo from "/Users/jose/react-cv-app/src/assets/logo.png";
import iconos from "/Users/jose/react-cv-app/src/assets/react.png";
import iconos2 from "/Users/jose/react-cv-app/src/assets/python.png";
import iconos3 from "/Users/jose/react-cv-app/src/assets/java.png";
import iconos4 from "/Users/jose/react-cv-app/src/assets/tail.png";
import iconos5 from "/Users/jose/react-cv-app/src/assets/html.png";
import iconos6 from "/Users/jose/react-cv-app/src/assets/css.png";
import iconos7 from "/Users/jose/react-cv-app/src/assets/kotlin.png";

export default function Hero() {
  return (
    <main>
      <section id="Home">
        {/* texto y descripcion  */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-screen">
          <div className="pt-10 pl-4 ">
            <img
              src={Logo}
              alt="Logo"
              className=" w-40 h-40 rounded-full object-cover shadow-2xl  "
            />{" "}
            <p className=" text-lg max-w-md font-mono text-gray-800 mt-4">
              Hola, soy Jose un programador en proceso de crecimiento,
              apasionado por la tecnología y el aprendizaje constante. Cada día
              doy un paso más en mi desarrollo profesional, con un enfoque
              especial en ciberseguridad y el uso de tecnologías como React,
              React Native y Python. Me motiva construir soluciones prácticas,
              seguras y modernas, siempre buscando mejorar mis habilidades y
              mantenerme actualizado con las últimas tendencias del desarrollo.
            </p>
          </div>
          {/* foto de perfil */}
          <div className="pt-30 flex justify-items-end pr-5 gap-20">
            <aside class=" bg-black text-white p-4  rounded-lg w-full max-w-sm  font-mono">
              <div class="flex justify-between items-center">
                <div class="flex space-x-2 text-red-500">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p class="text-sm">bash</p>
              </div>
              <div class="mt-4">
                <p class="text-green-400">
                  Estas son algunas de las tecnologias que utilizo
                </p>
                <div className="grid grid-cols-2 gap-4  items-center ">
                  <img
                    src={iconos}
                    alt="react"
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
                  className="w-40 h-40 rounded-full object-cover shadow-lg mt-20 cursor-pointer"
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
