import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact className="text-sky-500" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
  ];

  return (
    <section
      id="skills"
      className="py-12 sm:py-0 px-6 bg-gradient-to-r from-indigo-500 to-teal-400 text-white"
    >
      <div className="max-w-5xl mx-auto text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Skills</h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white text-gray-800 rounded-xl shadow-md p-4 w-24 sm:w-22 md:w-24"
            >
              <div className="text-3xl mb-2">{skill.icon}</div>
              <p className="font-semibold text-sm sm:text-base">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
