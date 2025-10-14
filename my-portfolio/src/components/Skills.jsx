import React from "react";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 85 },
  { name: "TailwindCSS", level: 80 },
  { name: "Node.js", level: 70 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-lg font-medium">{skill.name}</span>
              <span className="text-lg font-medium">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 h-4 rounded-full">
              <div
                className="bg-blue-600 h-4 rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
