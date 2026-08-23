import { motion } from "framer-motion";

const techIcons = [
  { name: "React", icon: "⚛️", color: "#61DAFB", label: "React" },
  { name: "Next.js", icon: "▲", color: "#ffffff", label: "Next.js" },
  { name: "Node.js", icon: "🟢", color: "#68A063", label: "Node.js" },
  { name: "TypeScript", icon: "TS", color: "#3178C6", label: "TypeScript" },
  { name: "Python", icon: "🐍", color: "#FFD43B", label: "Python" },
  { name: "C++", icon: "⚡", color: "#00599C", label: "C++" },
  { name: "Azure", icon: "☁️", color: "#0089D6", label: "Azure" },
  { name: "MongoDB", icon: "🍃", color: "#47A248", label: "MongoDB" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 px-4 sm:px-8 lg:px-12 flex flex-col justify-center overflow-hidden bg-grid-dark"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-indigo-600/15 blur-[160px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/15 blur-[160px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Main 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Copy & CTAs) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-left z-10"
          >
            {/* Mini Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-indigo-500/10 border border-indigo-500/25 text-xs font-bold uppercase tracking-wider text-indigo-400 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
              SOFTWARE ENGINEERING INTERN @ MICROSOFT
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Hi, I&apos;m{" "}
              <span className="gradient-text-purple">
                Diya
              </span>
              <br />
              <span className="text-slate-100">
                I build things for the web & cloud.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
              I&apos;m an Information Technology undergraduate at <strong className="text-slate-200 font-semibold">NIT Jalandhar (Rank 2)</strong> and a <strong className="text-indigo-300 font-semibold">Software Engineering Intern at Microsoft</strong>, specializing in scalable full-stack architectures, Azure cloud services, and intelligent AI systems.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white gradient-btn-purple shadow-lg shadow-indigo-500/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <span>View My Work</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>

              <a
                href="/Microsoft_fte.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-300 hover:text-white bg-[#111625] hover:bg-[#192138] border border-white/10 hover:border-indigo-500/40 transition-all flex items-center gap-2"
              >
                <span>Download CV</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>

            {/* Technologies I Work With Strip */}
            <div className="mt-12 pt-8 border-t border-white/[0.08]">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                TECHNOLOGIES I WORK WITH
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {techIcons.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111625] border border-white/[0.08] hover:border-indigo-500/30 transition-all group"
                  >
                    <span className="text-sm">{tech.icon}</span>
                    <span className="text-xs font-semibold text-slate-300 group-hover:text-white">
                      {tech.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column (Vibrant Glowing Avatar Orb + Floating Code Card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 flex items-center justify-center relative"
          >
            {/* Dotted background accent */}
            <div className="absolute -top-10 -right-6 w-32 h-32 opacity-20 bg-[radial-gradient(#6366f1_1.5px,transparent_1.5px)] [background-size:12px_12px]"></div>

            {/* Main Portrait with Purple Glowing Orb Backdrop */}
            <div className="relative flex items-center justify-center">
              {/* Circular Gradient Glow Orb */}
              <div className="absolute w-[300px] sm:w-[360px] h-[300px] sm:h-[360px] rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-purple-800 opacity-90 blur-[10px] -z-10 animate-pulse"></div>

              {/* Photo Frame */}
              <div className="relative w-64 sm:w-76 md:w-80 aspect-[3/4] rounded-3xl overflow-hidden border-2 border-indigo-400/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)] bg-[#0d1222]">
                <img
                  src="/diya.jpg"
                  alt="Diya Gupta"
                  className="w-full h-full object-cover object-[center_18%]"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/hero.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14]/70 via-transparent to-transparent"></div>
              </div>

              {/* Floating Code Snippet Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="absolute -bottom-6 sm:-bottom-4 -right-4 sm:-right-8 code-card p-4 rounded-2xl border border-indigo-500/30 max-w-[230px] sm:max-w-[260px] text-left hidden sm:block animate-float"
              >
                {/* Code Card Top Bar */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] font-mono text-slate-400">
                  <span className="text-indigo-400 font-bold">&lt;/&gt; Code</span>
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-400/80"></span>
                    <span className="w-2 h-2 rounded-full bg-yellow-400/80"></span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400/80"></span>
                  </div>
                </div>

                {/* Code Snippet Text */}
                <pre className="text-[11px] font-mono leading-relaxed text-slate-300 overflow-x-auto">
                  <span className="text-purple-400">const</span> developer = &#123;
                  <br />
                  &nbsp;&nbsp;name: <span className="text-emerald-400">&quot;Diya&quot;</span>,
                  <br />
                  &nbsp;&nbsp;role: <span className="text-sky-300">&quot;Microsoft SWE&quot;</span>,
                  <br />
                  &nbsp;&nbsp;skills: [<span className="text-amber-300">&quot;React&quot;</span>, <span className="text-amber-300">&quot;Azure&quot;</span>],
                  <br />
                  &nbsp;&nbsp;passion: <span className="text-emerald-400">&quot;Cloud & Web&quot;</span>
                  <br />
                  &#125;;
                </pre>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;