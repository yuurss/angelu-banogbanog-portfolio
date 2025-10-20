import React from "react";
import ctuLogo from "../assets/images/ctu-logo.png";
import lnhsLogo from "../assets/images/db-logo.png";

const education = [
  {
    degree: "BS Information Technology",
    school: "Cebu Technological University - Danao Campus",
    year: "Expected Graduation: 2026",
    logo: ctuLogo,
  },
  {
    degree: "Senior High School Diploma",
    school: "LNHS-Extension Don Bosco Campus",
    year: "2019 - 2021",
    logo: lnhsLogo,
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-12 sm:py-0 px-6 bg-gradient-to-r from-indigo-500 to-teal-400 text-white"
    >
      <div className="max-w-5xl mx-auto text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          Education
        </h2>

        <div className="flex flex-col space-y-6 w-full">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-xl shadow-md p-6 w-full flex flex-col sm:flex-row justify-between items-center"
            >
              {/* Left side — text details */}
              <div className="text-center sm:text-left mb-4 sm:mb-0 sm:max-w-[80%]">
                <h3 className="text-lg font-semibold mb-1">{edu.school}</h3>
                <p className="text-base text-gray-700">{edu.degree}</p>
                <p className="text-sm text-gray-500 mt-1">{edu.year}</p>
              </div>

              {/* Right side — logo */}
              <div className="flex justify-center sm:justify-end w-20 h-20">
                <img
                  src={edu.logo}
                  alt={`${edu.school} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
