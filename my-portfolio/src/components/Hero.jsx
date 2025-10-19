import React from "react";
import profileImage from "../assets/images/profile.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-start items-center bg-gradient-to-r from-indigo-500 to-teal-400 text-white pt-24 px-4"
    >
      {/* Profile Image */}
      <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 mb-4 rounded-full overflow-hidden border-4 border-white shadow-xl">
        <img
          src={profileImage}
          alt="Angelu Banogbanog"
          className="w-full h-full object-cover object-center -translate-y-1"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col items-center justify-center text-center max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1">
          Hi, I'm Angelu!
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-2 font-medium">
          Full-Stack Developer
        </p>
        <p className="text-sm sm:text-base md:text-lg mb-6 text-justify">
          Currently studying BS Information Technology. Passionate about building
          responsive and modern web applications, and creating interactive experiences
          for users.
        </p>

        <a
          href="/resume.pdf"
          download="Angelu_Banogbanog_Resume.pdf"
          className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
