import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Software Engineering Intern @ Microsoft",
  "Full-Stack MERN & Next.js Developer",
  "Cloud & Distributed Systems Builder",
  "Competitive Programmer (600+ DSA)"
];

const stats = [
  { value: "600+", label: "DSA Solved", sub: "LeetCode & GFG" },
  { value: "Rank 2", label: "NIT Jalandhar", sub: "IT Department" },
  { value: "Microsoft", label: "SWE Intern", sub: "Noida, India" },
];

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];
    let timeout;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    } else {
      const delta = isDeleting ? 30 : 65;
      timeout = setTimeout(() => {
        setText((prev) =>
          isDeleting
            ? currentRole.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        );
      }, delta);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-16 px-4 sm:px-8 lg:px-12 flex flex-col justify-center overflow-hidden"
    >
      {/* Soft Ambient Background Lighting */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-sky-600/10 blur-[160px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Main 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (Clean Typography & CTAs) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-left"
          >
            {/* Clean Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-xs font-semibold text-sky-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Software Engineering Intern @ <strong>Microsoft</strong></span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-300">
                Diya Gupta
              </span>
            </h1>

            {/* Typewriter Subtitle */}
            <div className="mt-3 text-lg sm:text-xl font-medium text-slate-300 min-h-[32px] flex items-center gap-1.5">
              <span className="text-sky-400 font-mono">›</span>
              <span className="text-sky-300 font-semibold">{text}</span>
              <span className="w-0.5 h-5 bg-sky-400 inline-block animate-pulse"></span>
            </div>

            {/* Clean, Concise Bio */}
            <p className="mt-5 max-w-xl text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Information Technology student at <strong className="text-white font-semibold">NIT Jalandhar (Rank 2)</strong>.
              I engineer resilient full-stack web applications, distributed cloud services on <strong className="text-sky-300 font-semibold">Azure</strong>, and scalable telemetry architectures.
            </p>

            {/* Clean Actions & Socials */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white gradient-btn-cyan shadow-md shadow-sky-500/25 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2"
              >
                <span>View Projects</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200 hover:text-white bg-white/[0.05] hover:bg-white/10 border border-slate-700 hover:border-sky-400 transition-all duration-200"
              >
                Get In Touch
              </a>

              <a
                href="/Microsoft_fte.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-slate-700/80 hover:border-sky-400 transition-all duration-200"
              >
                Resume
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-2.5 ml-1">
                <a
                  href="https://www.linkedin.com/in/diya-gupta-19b946282"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/[0.05] hover:bg-blue-600/30 border border-white/10 hover:border-blue-400 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>

                <a
                  href="https://github.com/gdiya2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/[0.05] hover:bg-sky-500/30 border border-white/10 hover:border-sky-400 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
                  aria-label="GitHub"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Clean Portrait Card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <div className="relative w-72 sm:w-80 md:w-88 aspect-[3/4] rounded-3xl overflow-hidden glass-card border-2 border-sky-500/25 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
              <img
                src="/diya.jpg"
                alt="Diya Gupta"
                className="w-full h-full object-cover object-[center_18%] group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/hero.png";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081225]/80 via-transparent to-transparent"></div>
              
              {/* Bottom Card Footer */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-[#081225]/85 backdrop-blur-md border border-sky-500/25 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">
                    Software Engineer
                  </div>
                  <div className="text-sm font-bold text-white">
                    Diya Gupta
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                  Microsoft
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Clean 3-Column Stats Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-[#0c1b36]/60 border border-sky-500/15 backdrop-blur-md hover:border-sky-400/40 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-1.5">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-200">
                  {stat.value}
                </span>
                <span className="text-sky-400 text-xs">▶</span>
              </div>
              <div className="text-xs font-bold text-slate-200 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;