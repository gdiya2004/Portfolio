import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoMarquee from "./components/LogoMarquee";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative min-h-screen bg-[#081225] text-slate-100 selection:bg-sky-500 selection:text-white font-sans antialiased">
      {/* Top Floating Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Unified Hero & Spotlight with User Photo & Integrated Stats */}
        <Hero />
        
        {/* Technology Marquee Ribbon */}
        <LogoMarquee />

        {/* Technical Services & Expertise */}
        <Services />

        {/* Recent Projects Showcase */}
        <Projects />

        {/* Career & Leadership Experience */}
        <Experience />

        {/* Contact Hub & Footer */}
        <Contact />
      </main>
    </div>
  );
}

export default App;