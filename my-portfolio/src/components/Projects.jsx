import React from "react";

const projects = [
  { title: "Portfolio Website", description: "My personal portfolio built with React & TailwindCSS", link: "#" },
  { title: "E-commerce App", description: "A full-stack online store with React & Node.js", link: "#" },
  { title: "Blog Platform", description: "A modern blog platform built with Next.js", link: "#" },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto bg-gray-50">
      <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-center mb-12 text-indigo-600">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project) => (
          <div key={project.title} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-2 text-indigo-600">{project.title}</h3>
            <p className="mb-4 text-gray-700">{project.description}</p>
            <a
              href={project.link}
              className="text-teal-500 font-semibold hover:underline"
              target="_blank"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
