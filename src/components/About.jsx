import { motion } from "framer-motion";

const stats = [
  { value: "600+", label: "DSA Solved", sub: "LeetCode & GFG" },
  { value: "Rank 2", label: "NIT Jalandhar", sub: "IT Department Merit" },
  { value: "Microsoft", label: "SWE Intern", sub: "Noida, India" },
];

const About = () => {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-8 lg:px-12 overflow-hidden">
      {/* Soft background ambient blurs */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-sky-600/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-700/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column (Photo Card with Circular Wireframe Background Accent) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          {/* Circular Wireframe Ripple Graphic behind photo */}
          <div className="absolute -left-12 -bottom-12 w-64 h-64 sm:w-80 sm:h-80 rounded-full wireframe-rings pointer-events-none -z-10 opacity-70"></div>
          <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full hero-lines-pattern pointer-events-none -z-10 opacity-60"></div>

          {/* Photo Card Container */}
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden glass-card border-2 border-sky-400/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
            <img
              src="/hero.png"
              alt="Diya Gupta - About"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/projects/evervice.png";
              }}
            />
            {/* Subtle Gradient Shade */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#081225]/80 via-transparent to-transparent"></div>

            {/* Bottom floating badge */}
            <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#081225]/90 backdrop-blur-md border border-sky-500/30">
              <div className="text-xs font-extrabold text-sky-400 uppercase tracking-widest">
                Software Engineer
              </div>
              <div className="text-sm font-bold text-white mt-0.5">
                Diya Gupta • NIT Jalandhar
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column (Text, Stats & CTA matching the inspiration) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 text-left"
        >
          {/* Mini Badge Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-sky-500/10 border border-sky-500/30 text-xs font-extrabold uppercase tracking-widest text-sky-400 mb-4">
            ABOUT ME
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight leading-[1.15]">
            I AM AVAILABLE FOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300">
              FULL-STACK & CLOUD PROJECTS
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            I’m a B.Tech Information Technology student at <strong className="text-white">NIT Jalandhar (Rank 2 in IT Department)</strong> and an <strong className="text-sky-300">Incoming Software Engineering Intern at Microsoft (Summer 2026)</strong>.
          </p>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            With hands-on experience in full-stack MERN & Next.js architectures, Azure cloud storage & services, real-time WebSockets with Redis Pub/Sub, and machine learning pipelines, I focus on building high-reliability digital solutions with clean, maintainable code.
          </p>

          {/* Stats Box Grid in Exact Style of Inspiration */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#0b172e]/80 border border-sky-500/20 backdrop-blur-md">
            {stats.map((stat, i) => (
              <div key={i} className="text-left border-r last:border-none border-white/10 pr-2">
                <div className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-1">
                  <span>{stat.value}</span>
                  <span className="text-sky-400 text-sm font-bold">▶</span>
                </div>
                <div className="text-xs font-bold text-slate-200 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Action */}
          <div className="mt-9">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white gradient-btn-cyan shadow-lg shadow-sky-500/30 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <span>GET IN TOUCH</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;