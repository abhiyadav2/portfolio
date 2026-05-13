import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import Photo from "../assets/Photo1.jpg";
import Resume from "../assets/Resume.pdf";
import Name from "../assets/Name.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* BACKGROUND VIDEO */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-50 blur-[2px]"
          src="https://static.videezy.com/system/resources/previews/000/052/400/original/2020_May_4K_0002.mp4"
        />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img
              src={Photo}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover border border-white/30"
            />
            <img
              src={Name}
              alt="Logo"
              className="h-10 md:h-20 object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 text-white">
            {menuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 rounded-full border border-white/20 hover:border-orange-400 hover:text-orange-400 transition cursor-pointer"
              >
                {item.label}
              </li>
            ))}

            {/* Download Resume */}
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-orange-500 transition text-white"
            >
              <Download size={18} /> Resume
            </a>
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-black/60 backdrop-blur-xl mt-4 p-4 rounded-xl border border-white/10">
            <ul className="flex flex-col gap-4 text-white">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className="px-4 py-2 border border-white/20 rounded-lg hover:border-orange-400 cursor-pointer"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </li>
              ))}

              {/* Download Resume Mobile */}
              <a
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-orange-500"
              >
                <Download size={18} /> Resume
              </a>
            </ul>
          </div>
        )}
      </nav>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/8269185071"
        target="_blank"
        className="fixed bottom-4 right-4 z-50"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-12 h-12"
        />
      </a>

      {/* Scroll To Top */}
      {isVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 left-4 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-300 z-50"
        >
          ▲
        </button>
      )}
    </>
  );
}
