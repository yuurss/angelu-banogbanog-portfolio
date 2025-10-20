import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-12 sm:py-0 px-6 bg-gradient-to-r from-indigo-500 to-teal-400 text-white"
    >
      <div className="max-w-5xl mx-auto text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">About Me</h2>

        <p className="text-base sm:text-lg leading-relaxed text-justify sm:text-left">
          Hello! I’m Angelu Banogbanog, a passionate Full-Stack Developer currently
          pursuing a Bachelor of Science in Information Technology. I love creating
          modern and user-friendly web applications using technologies like React,
          Tailwind CSS, PHP, and Node.js. My goal is to design digital experiences
          that are both functional and visually engaging.
        </p>

        <p className="mt-6 text-base sm:text-lg leading-relaxed text-justify sm:text-left">
          Beyond coding, I continuously explore innovative tools and workflows to enhance productivity and creativity.
           I also integrate emerging technologies like AI-powered solutions (such as GPT) to support development efficiency,
            streamline ideas, and deliver smarter, more dynamic web experiences.
        </p>
      </div>
    </section>
  );
};

export default About;
