  import React, { useEffect, useState } from "react";
  import Photo from "../assets/Photo.png";

  export default function Home() {
    const words = ["DATA ANALYST", ""];

    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      const currentWord = words[index];

      const handleTyping = () => {
        if (!isDeleting) {
          if (charIndex < currentWord.length) {
            setText(currentWord.slice(0, charIndex + 1));
            setCharIndex((prev) => prev + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1200);
          }
        } else {
          if (charIndex > 0) {
            setText(currentWord.slice(0, charIndex - 1));
            setCharIndex((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
          }
        }
      };

      const speed = isDeleting ? 60 : 100;
      const timer = setTimeout(handleTyping, speed);

      return () => clearTimeout(timer);
    }, [charIndex, isDeleting, index]);

    return (
      <section id="home" className="w-full min-h-screen text-white flex flex-col md:flex-row items-center justify-center px-10 pt-15 py-10 pb-0">

        {/* LEFT TEXT */}
        <div className="flex-1 flex flex-col items-start text-left gap-6  md:pl-20 md:-mt-20">
          <p className="text-lg md:text-xl">
            Hey, I am{" "}
            <span className="text-orange-300 font-semibold">
              Krishna Yadav
            </span>
          </p>

          {/* Smooth Typewriter */}
          <p className="text-lg md:text-xl"> I AM </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight h-20">
            {text}
           <span className="border-r-4 border-orange-400 animate-pulse ml-1"></span>
          </h1>
          <p className="text-gray-300 max-w-md">Experienced in data cleaning, data analysis, and dashboard creation using tools like Excel, SQL, Python, and Power BI to support business decision-making.</p>
        </div>
        

        {/* RIGHT IMAGE */}
        <div className="flex-1 w-full mt-10 md:mt-8 flex justify-center">
          <img
            src={Photo}
            alt="Profile"
            className="w-full h-auto max-h-[800px] object-contain"
          />
        </div>

        

      </section>
    );
  }
