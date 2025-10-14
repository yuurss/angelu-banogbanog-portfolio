import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Boss!</h1>
      <p className="text-xl mb-8">I build modern web experiences with React & TailwindCSS</p>
      <a
        href="#projects"
        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
