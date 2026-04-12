import { motion } from "framer-motion";

const projects = [
  {
    title: "FeedSense",
    description:
      "A feedback analysis platform that classifies user feedback using machine learning and visualizes insights in real-time.",
    tech: ["React", "Node.js", "Express", "Python"],
    github: "https://github.com/gdiya2004/feedsense-feedback-classifier.git",
    live: "https://feedsense-feedback-classifier.vercel.app",
    image: "projects/feedsense.png", // put image in public/projects
    
  },
  {
    title: "EverVice",
    description:
      "A MERN platform connecting users with verified service providers, reducing manual search effort by 50%.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/gdiya2004/IIITUNA.git",
    image: "projects/evervice.png",
  },
  {
    title: "Cybernauts Website",
    description:
      "An interactive community website with responsive UI and smooth scrolling effects to enhance engagement.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/YatenArora05/cybernauts-new-.git",
    live: "https://cybernauts-three.vercel.app",
    image: "projects/cybernauts.png",
  },
  {
  title: "Network Security ML Pipeline",
  description:
    "Designed a modular ML pipeline for network intrusion detection with stages for data ingestion, validation, transformation, and model training, improving maintainability and scalability of the system.",
  tech: ["Python", "ML Pipeline", "Scikit-learn", "Pandas", "NumPy"],
  github: "https://github.com/gdiya2004/NetworkSecurity.git",

  image: "/projects/network.png",
},
{
  title: "LetsConnectX – Real-Time Scalable Chat App",
  description:
    "Developed a full-stack real-time chat application using WebSockets with JWT-based authentication and Redis Pub/Sub for scalable multi-server communication. Implemented room-based messaging, message persistence using MongoDB, and deployed the system on Vercel and Render.",
  tech: ["React", "TypeScript", "Node.js", "WebSocket", "Redis", "MongoDB", "JWT"],
  github: "https://github.com/gdiya2004/letsconnectx", // update if needed
  live:"https://letsconnectx.vercel.app",
  image: "/projects/image.png",
}
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          My <span className="text-purple-500">Projects</span>
        </motion.h2>

        {/* Grid */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-lg hover:scale-105 hover:border-purple-400/40 transition-all duration-300"
            >

              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                {/* <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                /> */}
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        console.log("FAILED:", project.image);
                    }}
                    />
              </div>

              {/* Content */}
              <div className="p-6 text-left">

                <h3 className="text-xl font-semibold text-purple-400">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-4">

                    {/* GitHub */}
                    <a
                        href={project.github}
                        target="_blank"
                        className="text-sm px-4 py-2 border border-gray-500 rounded-lg hover:border-purple-400 transition"
                    >
                        GitHub
                    </a>

                    {/* Live Demo (conditional) */}
                    {project.live && (
                        <a
                        href={project.live}
                        target="_blank"
                        className="text-sm px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white hover:scale-105 transition"
                        >
                        Live Demo
                        </a>
                    )}

                    </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;