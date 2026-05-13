import React from "react";

const projects = [
  {
    title: "Satyamev Transport",
    // subtitle: "Web Design, App Design",
    image: "/project1.png",
    link: "https://satyamev-transport.netlify.app/",
  },
  {
    title: "Movie Recommendation",
    // subtitle: "Web Design, App Design",
    image: "/project2.png",
    link: "https://my-moviee.netlify.app/",
  },
  
  {
    title: "Task Manager",
    // subtitle: "Web Design, App Design",
    image: "/project4.png",
    link: "https://task-manager-frontend-i45a.onrender.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-transparent px-6 md:px-16 py-16">
      {/* Heading */}
      <div>
        <p className="text-blue-400 font-semibold tracking-wide">MY WORK</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          PROJECTS
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={p.image}
              alt={p.title}
              className="rounded-xl w-full h-48 object-cover"
            />

            <h3 className="text-xl font-semibold text-white mt-4">
              {p.title}
            </h3>
            <p className="text-gray-300 text-sm">{p.subtitle}</p>

            {/* Icon button → project link */}
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mt-4 ml-auto group-hover:bg-blue-600 transition cursor-pointer"
            >
              <span className="text-white text-xl">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
