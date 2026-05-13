  // TechSkills.jsx
  import React from "react";

  const skills = [
    { name: "Programming Languages", percent: 60, description: "Python , JavaScript , HTML" },
    { name: "Desktop Support Engineer", percent: 70, description: "CSS, React.js, Node.js, Tickting, Tailwind CSS, Networking" },
    { name: "Data Analysis & Visualization", percent: 85, description: "Pandas, NumPy, Matplotlib, Advanced Excel" },
    { name: "Database", percent: 70, description: "MySQL, MongoDB" },
    { name: "Design & Editing", percent: 60, description: "Canva, Adobe Photoshop" },
  ];

  const CircularProgress = ({ percent }) => {
    const radius = 40;
    const stroke = 6;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percent / 100) * circumference;

    return (
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#e5e7eb" // Tailwind gray-200
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#3b82f6" // Tailwind blue-500
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="white"
          className="text-sm font-semibold text-white "
        >
          {percent}%
        </text>
      </svg>
    );
  };

  export default function Skills() {
    return (
      <section
      id="skills"
      className="px-4 py-10 md:py-16 md:px-16 ">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl text-white font-bold mb-2">SKILLS</h1>
          <p className="text-white">
            My process is as creative as the design itself
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <CircularProgress percent={skill.percent} />
              <h1 className="mt-3 text-white text-xl font-bold">{skill.name}</h1>
              <p className="mt-1 text-white text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
