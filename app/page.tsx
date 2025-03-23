import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="main-container">
     <Hero />
     <About />
     <Education />
     <Skills />
     <Projects />
     <Contact />
    </div>
  );
}
