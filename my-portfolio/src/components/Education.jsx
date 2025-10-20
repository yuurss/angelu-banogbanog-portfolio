import React from "react";

const education = [
  { degree: "BS Information Technology", school: "Cebu Technologiacl University", year: "2026 Graduated" },
  { degree: "Senior High School Diploma", school: "LNHS-Extension Don Bosco Campus", year: "2019-2021" }
];

const Education = () => {
  return (
    <section id="education" className="py-12 sm:py-0 px-6 bg-gradient-to-r from-indigo-500 to-teal-400 text-white">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-white">Education</h2>
      <div className="flex flex-col gap-6">
        {education.map((edu, idx) => (
          <div key={idx} className="p-4 bg-gray-50 rounded shadow">
            <h3 className="font-semibold text-indigo-600">{edu.degree}</h3>
            <p className="text-gray-700">{edu.school}</p>
            <span className="text-gray-500 text-sm">{edu.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
