import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20 flex items-center justify-center"
    >
      <div className="max-w-4xl w-full text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Get In <span className="text-purple-500">Touch</span>
        </motion.h2>

        {/* Subtitle */}
        <p className="mt-4 text-gray-400">
          I'm always open to opportunities, collaborations, or just a friendly chat 🚀
        </p>

        {/* Contact Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg"
        >

          {/* Email */}
          <p className="text-lg text-gray-300">
            📧 <span className="text-purple-400">192004gupta@gmail.com</span>
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/diya-gupta-19b946282"
              target="_blank"
              className="px-6 py-3 border border-gray-500 rounded-xl hover:border-purple-400 hover:text-purple-400 transition"
            >
              LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/gdiya2004"
              target="_blank"
              className="px-6 py-3 border border-gray-500 rounded-xl hover:border-purple-400 hover:text-purple-400 transition"
            >
              GitHub
            </a>

            {/* Email Button */}
            <a
              href="mailto:192004gupta@gmail.com"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white hover:scale-105 transition"
            >
              Send Email
            </a>

          </div>
        </motion.div>

        {/* Footer */}
        <p className="mt-10 text-sm text-gray-500">
          © {new Date().getFullYear()} Diya Gupta. Built with ❤️ using React & Tailwind.
        </p>

      </div>
    </section>
  );
};

export default Contact;