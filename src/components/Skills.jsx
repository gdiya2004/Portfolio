import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend & DB" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "core", label: "Core CS & DSA" },
];

const skillGroups = [
  {
    category: "frontend",
    title: "Frontend Engineering",
    description: "Creating responsive, accessible, and fluid user interfaces",
    iconBg: "bg-purple-50 text-purple-600 border-purple-200",
    icon: (
      <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "Next.js", level: "Proficient" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "HTML5 & Modern CSS", level: "Advanced" },
      { name: "Framer Motion", level: "Proficient" },
    ],
  },
  {
    category: "backend",
    title: "Backend & Data Architecture",
    description: "Developing robust APIs, real-time channels, and database schemas",
    iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200",
    icon: (
      <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "MongoDB & Mongoose", level: "Advanced" },
      { name: "MySQL", level: "Proficient" },
      { name: "WebSockets", level: "Proficient" },
      { name: "Redis (Pub/Sub)", level: "Intermediate" },
      { name: "RESTful APIs", level: "Advanced" },
      { name: "JWT Authentication", level: "Advanced" },
    ],
  },
  {
    category: "cloud",
    title: "Cloud, Tools & Deployment",
    description: "Deploying and managing distributed cloud infrastructure and tools",
    iconBg: "bg-cyan-50 text-cyan-600 border-cyan-200",
    icon: (
      <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    skills: [
      { name: "Microsoft Azure (Blob / App Service)", level: "Proficient" },
      { name: "Docker", level: "Intermediate" },
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Postman API Testing", level: "Advanced" },
      { name: "Streamlit", level: "Proficient" },
      { name: "Render & Vercel", level: "Advanced" },
    ],
  },
  {
    category: "core",
    title: "Languages & Core Computer Science",
    description: "Strong theoretical foundations, problem-solving, and clean code",
    iconBg: "bg-pink-50 text-pink-600 border-pink-200",
    icon: (
      <svg className="w-5 h-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: [
      { name: "C++ (DSA)", level: "Advanced" },
      { name: "Python (ML/Scripting)", level: "Advanced" },
      { name: "C", level: "Proficient" },
      { name: "Data Structures & Algorithms", level: "600+ Solved" },
      { name: "Object-Oriented Programming (OOP)", level: "Strong" },
      { name: "Database Management (DBMS)", level: "Strong" },
      { name: "Operating Systems (OS)", level: "Strong" },
      { name: "Computer Networks (CN)", level: "Strong" },
    ],
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredGroups =
    activeTab === "all"
      ? skillGroups
      : skillGroups.filter((group) => group.category === activeTab);

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-100/50 blur-[130px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-100/50 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-purple-700 uppercase tracking-widest mb-3"
          >
            Technical Arsenal
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            Skills & <span className="gradient-text">Technologies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 text-base sm:text-lg"
          >
            A comprehensive overview of programming languages, libraries, databases, and development tooling.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === cat.id
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/20 scale-105"
                  : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-sm"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Filtered Cards Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredGroups.map((group, idx) => (
              <motion.div
                key={group.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="glass-card p-6 sm:p-7 rounded-3xl border border-slate-200/90 flex flex-col justify-between hover:border-purple-300"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${group.iconBg}`}>
                      {group.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{group.title}</h3>
                      <p className="text-xs text-slate-500">{group.description}</p>
                    </div>
                  </div>

                  {/* Skills Tag Cloud */}
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="group flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-purple-50/70 border border-slate-200/80 hover:border-purple-200 transition-all duration-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-purple-950">
                          {skill.name}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-white text-slate-500 font-mono border border-slate-200/60 shadow-xs">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>{group.skills.length} core competencies</span>
                  <span className="text-purple-700 font-semibold">Production Ready</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;