import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [copied, setCopied] = useState(false);
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
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="relative py-16 px-4 sm:px-8 lg:px-12 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-sky-600/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto">
        {/* Crisp Header */}
        <div className="text-left max-w-2xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/25 text-[11px] font-semibold text-sky-400 mb-2.5">
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Let&apos;s Discuss <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">Opportunities & Projects</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            Open for software engineering roles, collaborations, and technical discussions.
          </p>
        </div>

        {/* Compact 2-Column Contact Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column (Direct Contact & Socials) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 glass-card p-6 rounded-2xl border border-sky-500/15 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Direct Contact
              </h3>

              <div className="mt-4 space-y-3">
                {/* Email with 1-click copy */}
                <div className="p-3 rounded-xl bg-white/[0.03] border border-sky-500/15 flex items-center justify-between gap-2 group">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[10px] text-slate-400 font-medium">Email</div>
                      <a
                        href="mailto:192004gupta@gmail.com"
                        className="text-xs font-semibold text-slate-200 group-hover:text-sky-300 truncate block transition"
                      >
                        192004gupta@gmail.com
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="px-2 py-1 rounded-md bg-white/[0.06] hover:bg-sky-500/20 text-slate-300 hover:text-sky-300 transition text-[11px] shrink-0 cursor-pointer"
                    title="Copy Email"
                  >
                    {copied ? (
                      <span className="text-emerald-400 font-bold">Copied!</span>
                    ) : (
                      <span>Copy</span>
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-medium">Location</div>
                    <div className="text-xs font-semibold text-slate-200">NIT Jalandhar, Punjab, India</div>
                  </div>
                </div>

                {/* Status */}
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs text-emerald-300 font-medium">
                    Typically responds within 24 hours.
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-5 pt-4 border-t border-white/[0.06] flex gap-2">
              <a
                href="https://www.linkedin.com/in/diya-gupta-19b946282"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 rounded-xl bg-white/[0.04] hover:bg-blue-600/30 border border-white/10 hover:border-blue-500 text-slate-300 hover:text-white transition flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider"
              >
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/gdiya2004"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 rounded-xl bg-white/[0.04] hover:bg-sky-600/30 border border-white/10 hover:border-sky-500 text-slate-300 hover:text-white transition flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider"
              >
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column (Compact Direct Message Form) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card p-6 rounded-2xl border border-sky-500/15"
          >
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="mt-3.5 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 text-xs transition"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 text-xs transition"
                  />
                </div>
              </div>

              <div>
                <textarea
                  rows="3"
                  required
                  placeholder="Hi Diya, I'd like to connect regarding..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 text-xs transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl gradient-btn-cyan text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-sky-500/25 hover:scale-[1.01] active:scale-[0.99] transition duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                {submitted ? (
                  <span className="flex items-center gap-1.5 text-emerald-200">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Message Prepared!
                  </span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

        {/* Minimal Footer */}
        <footer className="mt-14 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-white">DIYA GUPTA</span>
            <span>•</span>
            <span>NIT JALANDHAR</span>
          </div>

          <div>
            © {new Date().getFullYear()} Diya Gupta. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="px-3 py-1.5 rounded-full bg-white/[0.05] hover:bg-sky-500/20 border border-white/10 hover:border-sky-500/40 text-slate-300 hover:text-white transition flex items-center gap-1 text-[11px] font-bold cursor-pointer"
          >
            <span>Back to top ↑</span>
          </button>
        </footer>
      </div>
    </section>
  );
};

export default Contact;