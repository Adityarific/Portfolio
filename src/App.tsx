import About from "./components/About";
import Contact from "./components/Contact";


import TechWheel from "./components/TechWheel";
import Projects from "./components/Projects";
import { useCallback, useState } from "react";
import { useGsapReveal } from "./hooks/useGsapReveal";
import "./App.css";
import Preloader from "./components/Preloader";
import FluidCursor from "./components/FluidCursor";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useGsapReveal();
  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && (
        <Preloader onComplete={handleLoadingComplete} />
      )}

      {!isLoading && <FluidCursor />}

      <main className="portfolio">
        <nav className="navbar">
          <a href="#" className="logo">ADITYA®</a>

          <span className="nav-role">
            AI ENGINEER & DEVELOPER
          </span>

          <a
            href="mailto:your-email@example.com"
            className="contact"
            data-cursor-label="CONTACT"
            data-magnetic
          >
            LET'S TALK ↗
          </a>
        </nav>

        <section className="hero">
          <div className="hero-meta">
            <span>PORTFOLIO — 2026</span>
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          <div className="hero-title">
            <h1>BUILDING</h1>
            <h1>
              INTELLIGENCE<span className="dot">.</span>
            </h1>
            <h1 className="outline">ENGINEERING</h1>
            <h1 className="outline">EXPERIENCES.</h1>
          </div>

          <div className="hero-bottom">
            <p>
              I BUILD AI SYSTEMS, AGENTS
              <br />
              AND INTELLIGENT EXPERIENCES.
            </p>

            <a
              href="#work"
              className="scroll-link"
              data-cursor-label="EXPLORE"
              data-magnetic
            >
              SCROLL TO EXPLORE ↓
            </a>
          </div>
        </section>
        <About />
        <Projects />
        <TechWheel />
        <Contact />
      </main>
    </>
  );
}

export default App;
