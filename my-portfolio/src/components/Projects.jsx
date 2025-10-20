import React from "react";
import { FaDesktop, FaReact, FaPhp, FaNodeJs, FaDatabase, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";
import portfolioImg from "../assets/images/project1.jpg";
import ecommerceImg from "../assets/images/project2.jpg";
import timelineImg from "../assets/images/project3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      image: portfolioImg,
      languages: [
        { name: "React", icon: <FaReact className="text-sky-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
      ],
    },
    {
      title: "Hurb E-Commerce Website",
      image: ecommerceImg,
      languages: [
        { name: "React", icon: <FaReact className="text-sky-500" /> },
        { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      ],
    },
    {
      title: "Memory Timeline Website",
      image: timelineImg,
      languages: [
        { name: "React", icon: <FaReact className="text-sky-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="py-12 sm:py-0 px-6 bg-gradient-to-r from-indigo-500 to-teal-400 text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-2xl shadow-md overflow-hidden w-72"
            >
              <div className="relative bg-gray-200 p-4 flex justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg w-full h-40 object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg mb-3">{project.title}</h3>
                <div className="flex justify-center flex-wrap gap-2">
                  {project.languages.map((lang, i) => (
                    <div key={i} className="flex items-center gap-1 text-sm">
                      {lang.icon}
                      <span className="text-gray-700">{lang.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
