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
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiExpress,
  SiGithub,
  SiVite,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact className="text-sky-500" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
    { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "GitHub", icon: <SiGithub className="text-black" /> },
    { name: "Vite", icon: <SiVite className="text-purple-500" /> },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-r from-indigo-500 to-teal-400 text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white text-gray-800 rounded-2xl shadow-md p-6 w-32 sm:w-40 hover:scale-105 hover:shadow-xl transition"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <p className="font-semibold text-base sm:text-lg">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
