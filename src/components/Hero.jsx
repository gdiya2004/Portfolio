import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "MERN Developer..",
  "Machine Learning Enthusiast..",
  "Microsoft Intern 2026.."
];
const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    let i = 0;
    const current = roles[index];

    const interval = setInterval(() => {
      setText(current.slice(0, i + 1));
      i++;

      if (i === current.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % roles.length);
          setText("");
        }, 1200);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-6 text-center relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full top-20 left-1/2 -translate-x-1/2"></div>

      <div className="relative z-10">
        {/* Heading */}
       <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1]"
>
  Hi, I'm{" "}
  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
    Diya Gupta 
  </span>
</motion.h1>

        {/* Typing Role */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-2xl md:text-3xl font-semibold text-gray-300 min-h-[48px]"        >
          {text}
          <span className="animate-pulse">|</span>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed"
        >
          I build scalable web applications, explore cloud technologies, and
          strive to create impactful digital experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-10 flex gap-8 md:gap-10 justify-center"        >
          <a
            href="#projects"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-2xl text-white font-medium transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-500 hover:border-purple-500 rounded-2xl text-gray-300 hover:text-white transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;