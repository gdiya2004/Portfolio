import { motion } from "framer-motion";

const techPartners = [
  { name: "MICROSOFT", role: "Internship 2026" },
  { name: "REACT.JS", role: "Frontend" },
  { name: "NODE.JS", role: "Backend" },
  { name: "AZURE CLOUD", role: "Infrastructure" },
  { name: "MONGODB", role: "Database" },
  { name: "NEXT.JS", role: "Full-Stack" },
  { name: "DOCKER", role: "DevOps" },
  { name: "PYTHON", role: "Machine Learning" },
  { name: "REDIS", role: "Pub/Sub Systems" },
  { name: "C++", role: "DSA & Core" },
];

const LogoMarquee = () => {
  return (
    <div className="w-full py-8 border-y border-sky-500/10 bg-[#060e1d]/80 backdrop-blur-md overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#081225] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#081225] to-transparent z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex items-center gap-12 whitespace-nowrap"
        >
          {[...techPartners, ...techPartners, ...techPartners].map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity select-none"
            >
              <div className="w-2 h-2 rounded-full bg-sky-400"></div>
              <span className="text-sm font-extrabold tracking-widest text-white uppercase">
                {tech.name}
              </span>
              <span className="text-[10px] text-sky-400/80 uppercase tracking-wider font-mono">
                / {tech.role}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoMarquee;
