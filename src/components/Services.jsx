import { motion } from "framer-motion";

const domains = [
  {
    title: "Full-Stack Development",
    stack: "React • Next.js • Node.js • Express • MongoDB",
    summary: "Architecting responsive, end-to-end web platforms with secure JWT authentication and RESTful APIs.",
    icon: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    highlights: ["MERN Architecture", "Responsive UI", "REST & WebSocket"],
  },
  {
    title: "Cloud & Distributed Systems",
    stack: "Azure Blob • Redis Pub/Sub • WebSockets • Docker",
    summary: "Engineering cloud storage solutions, real-time message brokers, and containerized deployments.",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    highlights: ["Microsoft Azure", "Redis Pub/Sub", "Horizontal Scale"],
  },
  {
    title: "Machine Learning & AI",
    stack: "Python • Scikit-Learn • NLP • Pandas & NumPy",
    summary: "Designing automated classification models, modular data pipelines, and NLP feedback analytics.",
    icon: (
      <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    highlights: ["RAG & LLMs", "Pinecone Vector DB", "NLP Analytics"],
  },
  {
    title: "DSA & Problem Solving",
    stack: "C++ • Algorithms • 600+ Solved • DBMS & OS",
    summary: "Strong algorithmic foundations, optimized data structures, and solid core CS theory.",
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    highlights: ["600+ Problems", "C++ Mastery", "System Design"],
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-20 px-4 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Crisp Header */}
        <div className="text-left max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-xs font-semibold text-sky-400 mb-3">
            Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Core Competencies & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">Domains</span>
          </h2>
        </div>

        {/* Short & Crisp 4-Card Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {domains.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="glass-card p-6 rounded-2xl border border-sky-500/15 flex flex-col justify-between hover:border-sky-400/40 group transition-all"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>

                <h3 className="text-lg font-bold text-white mt-4 group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-sky-400/90 font-medium mt-1">
                  {item.stack}
                </p>

                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-white/[0.06] flex flex-wrap gap-1">
                {item.highlights.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-300 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
