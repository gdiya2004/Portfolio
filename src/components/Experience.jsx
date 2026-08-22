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
    tech: ["iOS Telemetry", "Bloom Filters", "Microsoft Defender", "EDR Pipeline", "Per-App VPN", "Performance Benchmarking"],
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
  {
    id: "sqc",
    role: "Core Member",
    company: "Super Quant Coders, NIT Jalandhar",
    duration: "Jan 2024 – Jun 2024",
    location: "NIT Jalandhar, India",
    type: "leadership",
    featured: false,
    summary: "Spearheaded algorithmic problem-solving drives and peer competitive coding sessions.",
    details: [
      "Contributed to competitive programming sessions, algorithmic problem-solving drives, and peer code reviews.",
      "Practiced and discussed complex algorithms in dynamic programming, graph theory, and advanced data structures.",
    ],
    tech: ["Data Structures & Algorithms", "C++", "Competitive Coding", "Peer Reviews"],
  },
];

const Experience = () => {
  const [filter, setFilter] = useState("all");
  const [hoveredId, setHoveredId] = useState(null);

  const filtered =
    filter === "all"
      ? experiences
      : experiences.filter((exp) => exp.type === filter);

  return (
    <section id="experience" className="relative py-28 px-4 sm:px-8 lg:px-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-sky-600/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-700/10 blur-[140px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-sky-500/10 border border-sky-500/30 text-xs font-extrabold uppercase tracking-widest text-sky-400 mb-4">
            CAREER & JOURNEY
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight leading-[1.15]">
            EXPERIENCE & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">LEADERSHIP</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Hover over any experience card to reveal detailed project contributions and technical impact.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {[
            { id: "all", label: "ALL" },
            { id: "industry", label: "INDUSTRY ROLES" },
            { id: "leadership", label: "LEADERSHIP & COMMUNITY" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                filter === tab.id
                  ? "gradient-btn-cyan text-white shadow-md shadow-sky-500/30"
                  : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Compact Timeline Cards with Expand-on-Hover */}
        <div className="mt-10 space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((exp) => {
              const isHovered = hoveredId === exp.id;

              return (
                <motion.div
                  key={exp.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  onMouseEnter={() => setHoveredId(exp.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setHoveredId(isHovered ? null : exp.id)}
                  className={`relative rounded-2xl p-5 sm:p-6 transition-all duration-300 cursor-pointer ${
                    exp.featured
                      ? isHovered
                        ? "bg-gradient-to-br from-sky-950/70 via-[#0b1b36] to-[#070f1e] border-2 border-sky-400/60 shadow-[0_12px_40px_rgba(56,189,248,0.25)]"
                        : "bg-gradient-to-br from-sky-950/40 via-[#0b172e] to-[#070f1e] border-2 border-sky-400/40 shadow-md"
                      : isHovered
                      ? "glass-card border-sky-400/40 bg-[#0d1e3d]/80 shadow-lg"
                      : "glass-card border-sky-500/15"
                  }`}
                >
                  {/* Top Row: Title, Company, Location, and Duration */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          {exp.role}
                        </h3>
                        {exp.featured && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-sky-500 text-white shadow-sm flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                            Featured
                          </span>
                        )}
                      </div>

                      <div className="mt-1 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-300">
                        <span className="font-bold text-sky-400">{exp.company}</span>
                        <span>•</span>
                        <span className="text-slate-400">{exp.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="px-3 py-1 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-semibold text-slate-300 shrink-0">
                        📅 {exp.duration}
                      </div>
                      <div className="text-sky-400 text-xs font-bold shrink-0 hidden sm:block">
                        {isHovered ? "▲" : "▼"}
                      </div>
                    </div>
                  </div>

                  {/* Summary (always visible) */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Additional Detailed Breakdown revealed smoothly on hover */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-sky-500/20 space-y-2.5">
                          {exp.details.map((point, pIdx) => (
                            <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                              <span className="text-sky-400 mt-0.5 text-xs">▶</span>
                              <p className="leading-relaxed">{point}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Tech Chips */}
                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-300 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-sky-400/80 uppercase tracking-wider">
                      {isHovered ? "Showing Full Breakdown" : "Hover for details"}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Experience;