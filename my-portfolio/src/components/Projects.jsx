import React from "react";
import { FaDesktop } from "react-icons/fa";
import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      image: project1,
      description:
        "A personal portfolio website built to showcase my projects, skills, and background using modern frontend technologies.",
      languages: ["React", "TailwindCSS", "JavaScript", "Vite"],
    },
    {
      title: "E-Commerce Website",
      image: project2,
      description:
        "A full-stack e-commerce platform with dynamic product listings, shopping cart, and user authentication, built using PHP for backend and MySQL for database.",
      languages: [
        "React",
        "PHP",
        "MySQL",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "REST API",
        "JWT Authentication",
      ],
    },
    {
      title: "Timeline App",
      image: project3,
      description:
        "An interactive timeline app that allows users to view and organize events with smooth transitions and responsive design.",
      languages: ["React", "JavaScript", "TailwindCSS", "Framer Motion"],
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-r from-indigo-500 to-teal-400 text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition"
            >
              {/* Desktop frame icon */}
              <div className="relative bg-gray-200 flex justify-center items-center py-2">
                <FaDesktop className="text-gray-600 text-4xl" />
              </div>

              {/* Project image inside the desktop “screen” */}
              <div className="relative bg-black p-2">
                <div className="overflow-hidden rounded-md">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-md hover:scale-105 transition"
                  />
                </div>
              </div>

              {/* Project details */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-indigo-600">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Languages used */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {project.languages.map((lang, i) => (
                    <span
                      key={i}
                      className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {lang}
                    </span>
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
