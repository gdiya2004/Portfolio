import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <p className="mt-8 text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            I’m Diya Gupta, a B.Tech IT student at NIT Jalandhar, a MERN stack developer, and a Machine Learning enthusiast. I enjoy building scalable web applications and solving real-world problems using data-driven approaches.
          </p>

          <p className="mt-4 text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            I have hands-on experience in full-stack and ML projects, and I actively practice Data Structures & Algorithms (600+ problems solved). Currently, I’m focused on system design, cloud technologies like Azure, and building impactful tech solutions.
          </p>
        <p className="mt-6 text-purple-400 font-medium">
            🎯 Microsoft Intern 2026 | 600+ DSA Problems | Rank 2 in IT Department
          </p>
        {/* Extra Highlights */}
        <div className="mt-12 grid sm:grid-cols-2 gap-6 justify-center">
          
          {[
            "🚀 MERN Stack Development",
            "☁️ Azure & Cloud Learning",
            "🧠 DSA + Problem Solving",
            "🤖 Machine Learning Projects"
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:scale-105 hover:border-purple-400/40 transition-all duration-300"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;