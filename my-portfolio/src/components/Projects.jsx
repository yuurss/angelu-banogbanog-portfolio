import React from "react";

const projects = [
  { title: "Portfolio Website", description: "My personal portfolio built with React & TailwindCSS", link: "#" },
  { title: "E-commerce App", description: "A full-stack online store with React & Node.js", link: "#" },
  { title: "Blog Platform", description: "A modern blog platform built with Next.js", link: "#" },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-600 font-semibold hover:underline"
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
