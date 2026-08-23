import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    id: "servease",
    title: "ServEase | Event & Wedding Marketplace",
    subtitle: "Next.js 16 • React 19 • Node.js • MongoDB Atlas • JWT",
    description:
      "A full-stack multi-vendor marketplace connecting clients, vendors, and admins with RBAC authentication, multi-parameter search, and vendor KPI workspaces.",
    image: "/projects/servease.png",
    live: "https://serv-ease-omega.vercel.app/",
    github: "https://github.com/gdiya2004/EverVice",
  },
  {
    number: "02",
    id: "pulmoai",
    title: "PulmoAI – Pulmonary Nodule RAG Assistant",
    subtitle: "Python • LangChain • Pinecone • Groq LLaMA • Flask",
    description:
      "Domain-specialized RAG system for CT scan & nodule analysis. Indexes 500+ document chunks using Pinecone vector DB and BGE embeddings with sub-second inference.",
    image: "/projects/network.png",
    github: "https://github.com/gdiya2004",
  },
  {
    number: "03",
    id: "letsconnectx",
    title: "LetsConnectX – Real-Time Chat Platform",
    subtitle: "React • TypeScript • WebSockets • Redis Pub/Sub",
    description:
      "High-throughput real-time messaging platform built using WebSockets, JWT authentication, and Redis Pub/Sub for horizontal multi-server scaling.",
    image: "/projects/connect.png",
    live: "https://letsconnectx.vercel.app",
    github: "https://github.com/gdiya2004/letsconnectx",
  },
  {
    number: "04",
    id: "feedsense",
    title: "FeedSense – AI Feedback Classifier",
    subtitle: "React • Python • NLP • Machine Learning",
    description:
      "Automated customer feedback analysis platform leveraging natural language processing and ML to classify sentiment and visualize real-time insights.",
    image: "/projects/feedsense.png",
    live: "https://feedsense-feedback-classifier.vercel.app",
    github: "https://github.com/gdiya2004/feedsense-feedback-classifier.git",
  },
  {
    number: "05",
    id: "azure-storage",
    title: "Azure Cloud File Upload System",
    subtitle: "Azure Blob Storage • Express • Node.js",
    description:
      "Cloud-native file management platform leveraging Microsoft Azure Blob Storage with strict MIME validation and automated container scaling.",
    image: "/projects/file.png",
    live: "https://fileupload-apcvdtcxf8fwbech.southeastasia-01.azurewebsites.net/",
    github: "https://github.com/gdiya2004/CloudFileUpload",
  },
  {
    number: "06",
    id: "cybernauts",
    title: "Cybernauts Community Portal",
    subtitle: "Full-Stack • Community Platform",
    description:
      "Campus tech platform empowering 500+ student developers with hackathon registration, workshops, and project showcases.",
    image: "/projects/cybernauts.png",
    github: "https://github.com/gdiya2004",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-8 lg:px-12 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-purple-600/10 blur-[160px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-indigo-500/10 border border-indigo-500/25 text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3">
            FEATURED PROJECTS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Some of My <span className="gradient-text-purple">Recent Work</span>
          </h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* 3-Column Numbered Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="dark-card overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Card Image Container with Number Watermark */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0e1322] border-b border-white/[0.08]">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/projects/evervice.png";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111625] via-transparent to-transparent opacity-80"></div>
                  
                  {/* Number Watermark */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0a0d14]/80 backdrop-blur-md border border-white/10 text-xs font-mono font-extrabold text-indigo-400">
                    {proj.number}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-indigo-400/90 font-medium mt-1">
                    {proj.subtitle}
                  </p>
                  <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              </div>

              {/* Bottom Action Links */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/[0.06]">
                {proj.live ? (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 group/btn"
                  >
                    <span>View Project</span>
                    <span className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform">↗</span>
                  </a>
                ) : (
                  <span className="text-xs text-slate-500 font-medium">Internal Project</span>
                )}

                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-slate-400 hover:text-white flex items-center gap-1"
                  >
                    <span>Code</span>
                    <span>↗</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;