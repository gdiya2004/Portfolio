import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "pulmoai",
    title: "PulmoAI – Pulmonary Nodule RAG Assistant",
    subtitle: "LangChain • Pinecone • Groq LLaMA • Flask",
    category: "ml",
    badge: "Medical AI & RAG",
    description:
      "A domain-specialized Retrieval-Augmented Generation (RAG) system for CT scan and pulmonary nodule analysis. Indexes 500+ document chunks with Pinecone vector DB and BGE embeddings with sub-second inference via Groq LLaMA.",
    tech: ["Python", "Flask", "LangChain", "Pinecone", "HuggingFace (BGE)", "Groq API"],
    github: "https://github.com/gdiya2004",
    image: "/projects/network.png",
  },
  {
    id: "servease",
    title: "ServEase | Full-Stack Service Marketplace",
    subtitle: "Next.js 16 • React 19 • Node.js • MongoDB Atlas • JWT",
    category: "fullstack",
    badge: "Marketplace & RBAC",
    description:
      "A scalable service marketplace connecting clients, vendors, and admins with RBAC authentication (JWT + bcrypt), multi-parameter search filtering, vendor workspace KPI dashboards, and automated CI/CD.",
    tech: ["Next.js 16", "React 19", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "Tailwind CSS"],
    github: "https://github.com/gdiya2004/EverVice",
    live: "https://serv-ease-omega.vercel.app/",
    image: "/projects/servease.png",
  },
  {
    id: "letsconnectx",
    title: "LetsConnectX – Real-Time Chat App",
    subtitle: "WebSockets • Redis Pub/Sub • MongoDB",
    category: "fullstack",
    badge: "Real-Time Systems",
    description:
      "A high-throughput full-stack real-time messaging platform built using WebSockets, JWT authentication, and Redis Pub/Sub for horizontal multi-server scalability.",
    tech: ["React", "TypeScript", "Node.js", "WebSockets", "Redis", "MongoDB"],
    github: "https://github.com/gdiya2004/letsconnectx",
    live: "https://letsconnectx.vercel.app",
    image: "/projects/connect.png",
  },
  {
    id: "feedsense",
    title: "FeedSense – AI Feedback Classifier",
    subtitle: "React • Python • NLP • Machine Learning",
    category: "ml",
    badge: "Machine Learning",
    description:
      "An automated customer feedback analysis platform leveraging natural language processing and machine learning to classify user feedback and visualize real-time insights.",
    tech: ["React", "Node.js", "Express", "Python", "NLP / Scikit-learn"],
    github: "https://github.com/gdiya2004/feedsense-feedback-classifier.git",
    live: "https://feedsense-feedback-classifier.vercel.app",
    image: "/projects/feedsense.png",
  },
  {
    id: "azure-storage",
    title: "Cloud File Upload System",
    subtitle: "Azure Blob Storage • Express • Node.js",
    category: "cloud",
    badge: "Azure Cloud Native",
    description:
      "Cloud-native file management system utilizing Azure Blob Storage. Implements strict MIME-type and size validation with deployment on Azure App Service.",
    tech: ["Node.js", "Express", "Azure Blob Storage", "Azure App Service"],
    github: "https://github.com/gdiya2004/CloudFileUpload",
    live: "https://fileupload-apcvdtcxf8fwbech.southeastasia-01.azurewebsites.net/",
    image: "/projects/file.png",
  },
  {
    id: "cybernauts",
    title: "Cybernauts Community Platform",
    subtitle: "JavaScript • HTML5 • CSS3 • Vercel",
    category: "fullstack",
    badge: "Community Portal",
    description:
      "Interactive responsive web portal built for NIT Jalandhar's Cybernauts technical student organization, featuring event registries and project showcases.",
    tech: ["JavaScript", "HTML5", "Modern CSS", "UI/UX", "Vercel"],
    github: "https://github.com/YatenArora05/cybernauts-new-.git",
    live: "https://cybernauts-three.vercel.app",
    image: "/projects/cybernauts.png",
  },
];

const categories = [
  { id: "all", label: "ALL" },
  { id: "fullstack", label: "FULL-STACK" },
  { id: "ml", label: "MACHINE LEARNING" },
  { id: "cloud", label: "CLOUD & AZURE" },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-8 lg:px-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-sky-600/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-700/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header matching the inspiration */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-sky-500/10 border border-sky-500/30 text-xs font-extrabold uppercase tracking-widest text-sky-400 mb-4">
              MY WORK
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight leading-[1.15]">
              RECENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">PROJECTS</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? "gradient-btn-cyan text-white shadow-md shadow-sky-500/30"
                    : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid in Exact Style of Inspiration Card Layout */}
        <motion.div
          layout
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group rounded-3xl overflow-hidden glass-card border border-sky-500/20 hover:border-sky-400/50 p-4 flex flex-col justify-between"
              >
                <div>
                  {/* Image Screen Container */}
                  <div className="relative h-56 w-full rounded-2xl overflow-hidden bg-[#060e1d] border border-white/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "/hero.png";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081225]/90 via-transparent to-transparent"></div>

                    {/* Badge Pill on Image */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#081225]/85 backdrop-blur-md text-sky-400 border border-sky-500/30">
                        {project.badge}
                      </span>
                    </div>
                  </div>

                  {/* Project Summary */}
                  <div className="pt-5 px-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-sky-400 font-medium mt-1">
                      {project.subtitle}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech stack chips */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer with Arrow Circle Button (as in inspiration) */}
                <div className="pt-6 px-2 pb-2 flex items-center justify-between gap-3 border-t border-white/[0.08] mt-5">
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-extrabold uppercase tracking-wider text-slate-300 hover:text-white flex items-center gap-1.5 transition"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      <span>Code</span>
                    </a>
                  </div>

                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-sky-500 hover:bg-sky-400 text-white flex items-center justify-center shadow-md shadow-sky-500/30 hover:scale-110 active:scale-95 transition-all"
                      title="View Live Demo"
                    >
                      <svg className="w-4 h-4 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-sky-500 text-white flex items-center justify-center transition-all hover:scale-110"
                      title="View GitHub Repository"
                    >
                      <svg className="w-4 h-4 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;