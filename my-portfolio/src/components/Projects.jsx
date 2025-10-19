import React from "react";
import { FaDesktop } from "react-icons/fa";
import portfolioImg from "../assets/images/project1.jpg";
import ecommerceImg from "../assets/images/project2.jpg";
import timelineImg from "../assets/images/project3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      image: portfolioImg,
      languages: "React, Tailwind CSS, JavaScript",
    },
    {
      title: "E-Commerce Website",
      image: ecommerceImg,
      languages: "React, PHP, Node.js, Tailwind CSS, MySQL",
    },
    {
      title: "Timeline Project",
      image: timelineImg,
      languages: "HTML, CSS, JavaScript",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-r from-indigo-500 to-teal-400 text-white"
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
                <FaDesktop className="text-4xl text-indigo-500 absolute top-3 left-3" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg w-full h-40 object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-sm text-gray-700">{project.languages}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
