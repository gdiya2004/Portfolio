import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    id: "microsoft",
    role: "Software Engineering Intern",
    company: "Microsoft",
    duration: "June 2026 – July 2026",
    location: "Noida, India",
    type: "industry",
    featured: true,
    summary: "Engineered a high-efficiency DNS telemetry & Bloom filter framework for Microsoft Defender on iOS.",
    details: [
      "Developed a DNS telemetry framework for Microsoft Defender on iOS, enabling DNS hostname visibility through the EDR pipeline and SOC Advanced Hunting.",
      "Built a Bloom filter-based telemetry solution, achieving a 10⁻⁷ false-positive rate and reducing DNS payload size significantly.",
      "Benchmarked CPU, memory, battery, and network usage across raw DNS and Bloom filter approaches to quantify performance trade-offs.",
      "Evaluated Per-App VPN, Device-Wide VPN, and Control Filter architectures across security visibility, telemetry quality, scalability, and performance.",
    ],
    tech: ["iOS Telemetry", "Bloom Filters", "Microsoft Defender", "EDR Pipeline", "Per-App VPN"],
  },
  {
    id: "cybernauts",
    role: "Co-Lead",
    company: "Cybernauts Community, NIT Jalandhar",
    duration: "Aug 2024 – Present",
    location: "NIT Jalandhar, India",
    type: "leadership",
    featured: false,
    summary: "Leading technical operations and community initiatives for over 500+ campus developers.",
    details: [
      "Leading technical operations and community projects, empowering 500+ campus developers.",
      "Organized coding competitions, tech talks, and full-stack workshops to foster collaborative peer learning.",
      "Collaborating across multidisciplinary teams to design community portals and developer resources.",
    ],
    tech: ["Leadership", "Team Management", "Event Strategy", "Technical Mentorship"],
  },
  {
    id: "it-rep",
    role: "Internship Representative",
    company: "Department of IT, NIT Jalandhar",
    duration: "Jun 2025 – Present",
    location: "NIT Jalandhar, India",
    type: "leadership",
    featured: false,
    summary: "Primary bridge between faculty and students for corporate recruitment and internships.",
    details: [
      "Serving as the primary communication bridge between IT faculty and students for corporate placements and internship drives.",
      "Facilitating seamless information flow, schedule management, and candidate preparation assistance for campus recruiters.",
    ],
    tech: ["Operations", "Coordination", "Stakeholder Communication", "Public Relations"],
  },
];

const Experience = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-8 lg:px-12 overflow-hidden bg-grid-dark">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-indigo-500/10 border border-indigo-500/25 text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3">
            CAREER & JOURNEY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & <span className="gradient-text-purple">Leadership</span>
          </h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Compact Timeline Cards with Expand-on-Hover */}
        <div className="space-y-4">
          {experiences.map((exp) => {
            const isHovered = hoveredId === exp.id;

            return (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredId(exp.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setHoveredId(isHovered ? null : exp.id)}
                className={`dark-card p-6 cursor-pointer transition-all duration-300 ${
                  exp.featured
                    ? isHovered
                      ? "border-indigo-500/60 bg-[#131a2e] shadow-[0_10px_35px_rgba(99,102,241,0.2)]"
                      : "border-indigo-500/30 bg-[#101526]"
                    : isHovered
                    ? "border-indigo-500/40 bg-[#131929]"
                    : "border-white/[0.08]"
                }`}
              >
                {/* Top Row: Title, Company, Location, Duration */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      {exp.featured && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-indigo-600 text-white shadow-sm flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                      <span className="font-bold text-indigo-400">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="px-3 py-1 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-semibold text-slate-300 shrink-0">
                      📅 {exp.duration}
                    </div>
                    <div className="text-indigo-400 text-xs font-bold shrink-0 hidden sm:block">
                      {isHovered ? "▲" : "▼"}
                    </div>
                  </div>
                </div>

                {/* Summary (always visible) */}
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Expanded Detailed Breakdown on hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-indigo-500/20 space-y-2.5">
                        {exp.details.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                            <span className="text-indigo-400 mt-0.5 text-xs">▶</span>
                            <p className="leading-relaxed">{point}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Tech Chips */}
                <div className="mt-4 pt-3.5 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-indigo-400/80 uppercase tracking-wider">
                    {isHovered ? "Full Breakdown" : "Hover / Tap for details"}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;