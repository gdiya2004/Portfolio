import { motion } from "framer-motion";

const skills = [
  { name: "React.js & Next.js", icon: "⚛️", level: 95 },
  { name: "C++ & Algorithms", icon: "⚡", level: 95 },
  { name: "Node.js & Express", icon: "🟢", level: 90 },
  { name: "TypeScript & JavaScript", icon: "TS", level: 90 },
  { name: "Python & Machine Learning", icon: "🐍", level: 85 },
  { name: "Microsoft Azure Cloud", icon: "☁️", level: 85 },
  { name: "Tailwind CSS & UI/UX", icon: "🎨", level: 95 },
  { name: "MongoDB & MySQL", icon: "🍃", level: 90 },
  { name: "Git, Docker & CI/CD", icon: "🛠️", level: 85 },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-8 lg:px-12 overflow-hidden bg-grid-dark">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <div className="max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-indigo-500/10 border border-indigo-500/25 text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3">
            MY SKILLS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technologies I <span className="gradient-text-purple">Master</span>
          </h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* 3-Column Progress Bar Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="dark-card p-5 text-left group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-base">{skill.icon}</span>
                  <span className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {skill.name}
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-indigo-400">
                  {skill.level}%
                </span>
              </div>

              {/* Sleek Glowing Progress Bar */}
              <div className="w-full h-2 rounded-full bg-[#1c2438] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 + idx * 0.05, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400 shadow-[0_0_12px_rgba(139,92,246,0.5)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;