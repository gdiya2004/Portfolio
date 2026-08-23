import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0d14] text-slate-100 selection:bg-indigo-600 selection:text-white font-sans antialiased">
      {/* Floating Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Split Hero with Purple Orb & Floating Code Card */}
        <Hero />

        {/* About Section with 2x2 Stats Grid */}
        <About />

        {/* Technologies I Master (Skills with Progress Bars) */}
        <Skills />

        {/* Some of My Recent Work (Numbered Featured Projects) */}
        <Projects />

        {/* Experience & Leadership */}
        <Experience />

        {/* 3-Box Bottom Hub & Footer */}
        <Contact />
      </main>
    </div>
  );
}

export default App;