import React from "react";
import profileImage from "../assets/images/profile.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-start items-center bg-gradient-to-r from-indigo-500 to-teal-400 text-white pt-24 px-4"
    >
      <div className="w-40 h-40 sm:w-52 md:w-64 sm:h-52 md:h-65 mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl">
        <img
          src={profileImage}
          alt="Angelu Banogbanog"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">
        Hi, I'm Angelu!
      </h1>
      <p className="text-base sm:text-lg md:text-xl mb-8 text-center px-4 md:px-0">
        I build modern web experiences with React & TailwindCSS
      </p>
      <a
        href="#projects"
        className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
