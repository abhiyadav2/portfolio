    import React from "react";
    import AboutImg from "../assets/Aboutphoto.png";

    export default function About() {
      return (
        <section
          id="about"
          className="w-full min-h-screen text-white flex items-center px-6 md:px-16 py-0"
        >
          <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center gap-10">

            {/* LEFT TEXT */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                About Me
              </h2>

              <p className="text-sm md:text-base leading-7 text-gray-300">
                Hi, I am Krishna Yadav, a passionate Web Developer & Graphic Designer. 
                I started my journey in 2022 and have always been inspired to create 
                modern, clean, and fast digital experiences. Over the years, 
                I enhanced my skills in HTML, CSS, JavaScript, React, Python, and modern UI/UX design.
                <br /><br />
                After completing several professional courses and multiple real-world projects,
                I started my freelancing career with dedication and consistency. 
                I always aim to deliver high-quality work and build long-term professional relationships.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex-1 flex justify-center">
              <img
                src={AboutImg}
                alt="About Illustration"
                className="w-full max-w-[600px] h-auto object-contain"
              />
            </div>
          </div>
        </section>
      );
    }
