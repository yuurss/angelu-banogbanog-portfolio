import React from "react";
import profileImage from "../assets/images/profile.jpg";

const Hero = () => {
          const downloadResume = () => {
          fetch('/angelu-banogbanog-portfolio/resume.pdf')
            .then(response => response.blob()) 
            .then(blob => {
              const url = window.URL.createObjectURL(blob) 
              const a = document.createElement('a')       
              a.href = url
              a.download = 'Angelu_Banogbanog_Resume.pdf'
              document.body.appendChild(a)
              a.click()                               
              a.remove()                                 
              window.URL.revokeObjectURL(url)             
              alert('Download has started!')  
            })
        }
  return (
        <section
      id="hero"
      className="min-h-[60vh] flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-teal-400 text-white py-20 sm:py-20 px-4"

    >
      {/* Profile Image */}
      <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl">
        <img
          src={profileImage}
          alt="Angelu Banogbanog"
          className="w-full h-full object-cover object-center -translate-y-0"
        />
        {/* ↑ Moved the image slightly up inside the circle so shoulders are visible while keeping hair visible */}
      </div>

      {/* Name */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-center">
        Hi, I'm Angelu!
      </h1>

      {/* Resume-style tagline */}
      <p className="text-base sm:text-lg md:text-xl mb-4 text-center font-medium">
        Full-Stack Developer
      </p>

      {/* Short description */}
      <p className="text-sm sm:text-base md:text-lg mb-8 text-justify sm:text-center max-w-2xl">
        Currently studying BS Information Technology. Passionate about building responsive and modern web applications, and creating interactive experiences for users.
      </p>


      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
            onClick={downloadResume}
            className="px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-400 transition"
          >
            Download Resume
        </button>

      </div>
    </section>
  );
};

export default Hero;
