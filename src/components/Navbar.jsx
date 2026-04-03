import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for sticky style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#020617]/90 backdrop-blur-lg border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-white">Diya</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`transition ${
                active === link.id
                  ? "text-purple-500"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          className="hidden md:block bg-gradient-to-r from-purple-500 to-indigo-500 px-5 py-2 rounded-full text-white hover:scale-105 transition"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#020617] px-6 pb-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className={`transition ${
                active === link.id
                  ? "text-purple-500"
                  : "text-gray-400"
              }`}
            >
              {link.name}
            </a>
          ))}

          <a
            href="C:\Users\19200\Downloads\DiyaGupta_Dev.pdf"
            className="bg-purple-600 px-4 py-2 rounded-full text-center"
          >
            Resume
          </a>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;