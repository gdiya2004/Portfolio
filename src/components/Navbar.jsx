import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "HOME", id: "home" },
  { name: "EXPERTISE", id: "services" },
  { name: "PROJECTS", id: "projects" },
  { name: "EXPERIENCE", id: "experience" },
  { name: "CONTACT", id: "contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 200;
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActive(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 py-4">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? "glass-panel shadow-[0_10px_35px_rgba(0,0,0,0.5)] px-6 py-3 border border-sky-500/20"
            : "bg-transparent px-4 py-2"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center font-extrabold text-white text-sm shadow-md shadow-sky-500/30 group-hover:scale-105 transition-transform">
              D.
            </div>
            <span className="font-extrabold text-white tracking-wider text-base sm:text-lg uppercase">
              DIYA <span className="text-sky-400">GUPTA</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`text-xs font-bold tracking-widest transition-colors duration-200 relative py-1 ${
                    isActive
                      ? "text-sky-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-400 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white gradient-btn-cyan shadow-md shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              LET&apos;S TALK
            </a>
            <a
              href="/Microsoft_fte.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white border border-slate-700 hover:border-sky-400 transition-all duration-200"
            >
              RESUME
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white transition"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-2 p-5 rounded-2xl glass-panel border border-sky-500/20 shadow-2xl flex flex-col gap-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-xs font-bold tracking-wider transition flex items-center justify-between ${
                  active === link.id
                    ? "bg-sky-500/20 text-sky-300 border border-sky-500/30"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span>{link.name}</span>
                {active === link.id && (
                  <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                )}
              </a>
            ))}

            <div className="pt-3 border-t border-white/10 flex gap-2">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex-1 py-3 text-center rounded-xl gradient-btn-cyan text-white text-xs font-bold uppercase tracking-wider"
              >
                LET&apos;S TALK
              </a>
              <a
                href="/Microsoft_fte.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex-1 py-3 text-center rounded-xl bg-white/5 border border-slate-700 text-white text-xs font-bold uppercase tracking-wider"
              >
                RESUME
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;