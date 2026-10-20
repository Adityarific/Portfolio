
import "./About.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-topline">
        <span>02 / ABOUT ME</span>
        <span>CURIOUS BY NATURE. ENGINEER BY CHOICE.</span>
      </div>

      <div className="about-headline">
        <h2>
          I BUILD
          <br />
          <span className="about-outline">INTELLIGENT</span>
          <br />
          THINGS<span className="about-dot">.</span>
        </h2>
      </div>

      <div className="about-content">
        <div className="about-side-label">
          <span>THE PERSON</span>
          <span>BEHIND THE SYSTEMS</span>
        </div>

        <div className="about-description">
          <p className="about-lead">
            I'm Aditya — an AI engineering enthusiast exploring
            how intelligent systems can turn complex problems
            into useful experiences.
          </p>

          <p>
            My work revolves around Generative AI, retrieval-augmented
            generation, multi-agent workflows, and local language models.
            I enjoy moving beyond demos to understand how these systems
            are built, connected, and made reliable.
          </p>

          <p>
            From experimenting with agentic research pipelines to building
            computer-vision applications, I'm constantly learning by
            designing, testing, and improving real projects.
          </p>

          <div className="about-interests">
            <span>GENERATIVE AI</span>
            <span>AGENTIC SYSTEMS</span>
            <span>RAG & RETRIEVAL</span>
            <span>LOCAL LLMs</span>
          </div>
        </div>
      </div>

      <div className="about-bottomline">
        <span>ALWAYS BUILDING. ALWAYS LEARNING.</span>
        <a href="#stack" data-cursor-label="EXPLORE" data-magnetic>
          EXPLORE MY TOOLKIT ↘
        </a>
      </div>
    </section>
  );
}
