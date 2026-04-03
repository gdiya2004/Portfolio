import { motion } from "framer-motion";

const skills = [
  {
    title: "Languages",
    items: ["C", "C++", "Python", "JavaScript"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "MySQL"],
  },
  {
    title: "Tools, Cloud & DevOps",
    items: ["GitHub", "Postman", "MongoDB Atlas", "Azure","Streamlit","Docker"],
  },
  {
    title: "Core Subjects",
    items: ["DSA", "OOP", "DBMS", "OS", "CN"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          My <span className="text-purple-500">Skills</span>
        </motion.h2>

        <div className="mt-12 space-y-10">

          {/* First Row (3 cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {skills.slice(0, 3).map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-6 w-[280px] sm:w-[300px] mx-auto rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:scale-105 hover:border-purple-400/40 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-purple-400 text-center">
                  {skill.title}
                </h3>

                <ul className="mt-4 space-y-2 text-gray-300 text-center">
                  {skill.items.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Second Row (2 centered cards) */}
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            {skills.slice(3).map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-6 w-[280px] sm:w-[300px] rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:scale-105 hover:border-purple-400/40 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-purple-400 text-center">
                  {skill.title}
                </h3>

                <ul className="mt-4 space-y-2 text-gray-300 text-center">
                  {skill.items.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;