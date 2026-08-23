import { motion } from "framer-motion";

const stats = [
  {
    icon: (
      <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    value: "600+",
    label: "DSA Problems Solved",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    value: "Rank 2",
    label: "NIT Jalandhar (IT Dept)",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    value: "Microsoft",
    label: "SWE Intern (Noida)",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    value: "9.1",
    label: "B.Tech IT CGPA",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Narrative & CTA) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-indigo-500/10 border border-indigo-500/25 text-xs font-bold uppercase tracking-wider text-indigo-400 mb-4">
              ABOUT ME
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              I&apos;m passionate about creating{" "}
              <span className="gradient-text-purple">
                impactful digital solutions
              </span>
            </h2>

            <p className="mt-5 text-sm sm:text-base text-slate-400 leading-relaxed">
              With a strong algorithmic foundation (600+ DSA solved) and full-stack software development experience, I build resilient, high-performance, and user-centric applications.
            </p>

            <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
              From engineering real-time messaging backends and AI-powered medical RAG assistants to architecting DNS telemetry frameworks at Microsoft Defender, I thrive at the intersection of engineering rigor and innovation.
            </p>

            <div className="mt-8">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-200 hover:text-white bg-[#111625] hover:bg-[#192138] border border-white/10 hover:border-indigo-500/40 transition-all"
              >
                <span>Learn More About My Journey</span>
                <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right Column (2x2 Stats Grid) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="dark-card p-6 flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-indigo-500/20 transition-all">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-slate-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;