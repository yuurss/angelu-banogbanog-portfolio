import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gray-50 text-gray-800 flex justify-center items-center"
    >
      <div className="max-w-5xl text-center md:text-left leading-relaxed">
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-8 text-center">
          About Me
        </h2>

        <div className="bg-white shadow-lg rounded-2xl p-8 md:p-12">
          <p className="text-base sm:text-lg md:text-xl mb-6">
            I'm <span className="font-semibold">Angelu L. Banogbanog</span>, 23 years old, currently studying
            <span className="font-semibold"> BS Information Technology</span>.  
            I am passionate about web development and enjoy creating interactive and modern web experiences that blend creativity with functionality.
          </p>

          <p className="text-base sm:text-lg md:text-xl mb-6">
            I specialize in building responsive web applications using{" "}
            <span className="font-semibold text-indigo-600">React</span> and{" "}
            <span className="font-semibold text-indigo-600">TailwindCSS</span>.  
            I also have experience with{" "}
            <span className="font-semibold text-teal-600">JavaScript</span>,{" "}
            <span className="font-semibold text-teal-600">TypeScript</span>,{" "}
            <span className="font-semibold text-teal-600">Node.js</span>,{" "}
            <span className="font-semibold text-teal-600">PHP</span>, and{" "}
            <span className="font-semibold text-teal-600">Java</span>.  
            I’m continuously learning new technologies to become a well-rounded full-stack developer.
          </p>

          <p className="text-base sm:text-lg md:text-xl">
            My goal is to craft seamless user experiences and write clean, efficient code that transforms ideas into reality through technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
  