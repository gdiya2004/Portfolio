import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("192004gupta@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const mailtoUrl = `mailto:192004gupta@gmail.com?subject=${encodeURIComponent(
      `Portfolio Connection from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
      setShowForm(false);
    }, 4000);
  };

  return (
    <section id="contact" className="relative pt-20 pb-12 px-4 sm:px-8 lg:px-12 overflow-hidden bg-grid-dark">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 blur-[160px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* 3-Column Bottom Layout Matching Reference Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1: Let's Work Together */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="dark-card p-7 flex flex-col justify-between"
          >
            <div>
              <div className="text-[11px] font-bold text-indigo-400 uppercase tracking-widest mb-3">
                LET&apos;S WORK TOGETHER
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Have a project or opportunity in mind?
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                I&apos;m always open to discussing new engineering roles, scalable web projects, and software collaborations.
              </p>
            </div>

            <div className="mt-6">
              <button
                onClick={() => setShowForm(!showForm)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white gradient-btn-purple flex items-center gap-2 cursor-pointer shadow-md shadow-indigo-500/20"
              >
                <span>{showForm ? "Close Form" : "Get In Touch"}</span>
                <span>↗</span>
              </button>
            </div>
          </motion.div>

          {/* Card 2: Spotlight Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="dark-card p-7 flex flex-col justify-between border-indigo-500/20"
          >
            <div>
              {/* Quote Icon */}
              <div className="text-3xl text-indigo-400 font-serif leading-none mb-3">
                &ldquo;
              </div>
              <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                Engineered a DNS telemetry framework for Microsoft Defender on iOS with Bloom filters, achieving a 10⁻⁷ false-positive rate and benchmarking system performance trade-offs.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-indigo-400/40 bg-indigo-950/40">
                <img src="/diya.jpg" alt="Diya Gupta" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Diya Gupta</div>
                <div className="text-[10px] text-indigo-400 font-medium">Software Engineering Intern @ Microsoft</div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Follow Me & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="dark-card p-7 flex flex-col justify-between"
          >
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                FOLLOW ME
              </div>

              {/* Social Icon Pills */}
              <div className="flex items-center gap-2.5 mb-6">
                <a
                  href="https://github.com/gdiya2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#1a2138] border border-white/10 hover:border-indigo-500/40 text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-105"
                  aria-label="GitHub"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/diya-gupta-19b946282"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#1a2138] border border-white/10 hover:border-indigo-500/40 text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-105"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xl bg-[#1a2138] border border-white/10 hover:border-indigo-500/40 text-xs font-semibold text-slate-300 hover:text-white transition cursor-pointer"
                >
                  {copied ? <span className="text-emerald-400">Copied!</span> : <span>Copy Email</span>}
                </button>
              </div>

              {/* Direct Info */}
              <div className="space-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="text-indigo-400">✉</span>
                  <a href="mailto:192004gupta@gmail.com" className="text-slate-300 hover:text-white transition">
                    192004gupta@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-indigo-400">📍</span>
                  <span className="text-slate-300">NIT Jalandhar, Punjab, India</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Expandable Message Form */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-8 dark-card p-6 max-w-2xl mx-auto border-indigo-500/30"
          >
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Send Direct Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0d14] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 text-xs transition"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0d14] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 text-xs transition"
                />
              </div>
              <textarea
                rows="3"
                required
                placeholder="Message details..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0d14] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 text-xs transition resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl gradient-btn-purple text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-indigo-500/20 cursor-pointer"
              >
                {submitted ? "Message Prepared! Opening Email Client..." : "Send Message ↗"}
              </button>
            </form>
          </motion.div>
        )}

        {/* Global Footer */}
        <footer className="mt-20 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Diya Gupta. All rights reserved.
          </div>
          <div>
            Made with <span className="text-red-400">❤️</span> by Diya
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;