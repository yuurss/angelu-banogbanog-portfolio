import React from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TailwindCSS",
  "Node.js",
  "Git & GitHub"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
