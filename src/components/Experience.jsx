import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineering Intern (Upcoming)",
    company: "Microsoft",
    duration: "May 2026 – July 2026",
    description:
      "Selected for Microsoft Software Engineering Internship 2026. Will work on scalable systems and cloud-based solutions using modern technologies.",
    tech: ["Azure", "Cloud", "Full Stack"],
  },
   {
    role: "Internship Representative",
    company: "IT Department, NIT Jalandhar",
    duration: "Jun 2025 – Present",
    description:
      "Acting as a bridge between students and faculty for internship-related communication, ensuring smooth coordination and information flow.",
    tech: ["Communication", "Coordination"],
  },
  {
    role: "Co-Lead",
    company: "Cybernauts Community, NIT Jalandhar",
    duration: "Aug 2024 – Present",
    description:
      "Leading technical initiatives and managing community-driven projects. Coordinated events, workshops, and collaborated with teams to enhance student engagement.",
    tech: ["Leadership", "Team Management", "Event Handling"],
  },
 
  {
    role: "Core Member",
    company: "Super Quant Coders, NIT Jalandhar",
    duration: "Jan 2024 – Jun 2024",
    description:
      "Contributed to coding initiatives and collaborative problem-solving activities, strengthening data structures and algorithmic skills.",
    tech: ["DSA", "Problem Solving"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-20 flex items-center justify-center"
    >
      <div className="max-w-5xl w-full text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Experience &{" "}
          <span className="text-purple-500">Leadership</span>
        </motion.h2>

        {/* Timeline */}
        <div className="mt-16 relative border-l border-white/20">

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="mb-12 ml-6 text-left"
            >
              {/* Dot */}
              <span className="absolute w-4 h-4 bg-purple-500 rounded-full -left-2.5 border border-white"></span>

              {/* Card */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-purple-400/40 transition-all duration-300">

                <h3 className="text-xl font-semibold text-purple-400">
                  {exp.role}
                </h3>

                <p className="text-gray-300 mt-1 text-sm">
                  {exp.company} • {exp.duration}
                </p>

                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  {exp.description}
                </p>

                {/* Tech Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;