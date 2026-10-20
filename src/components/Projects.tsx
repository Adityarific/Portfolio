
import { projects } from "../data/projects";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects-section" id="work">
      <div className="projects-heading">
        <span className="section-label">01 / SELECTED WORK</span>
        <span className="projects-count">04 PROJECTS — 2026</span>
      </div>

      <div className="projects-intro">
        <h2>
          Ideas into
          <br />
          <span>intelligence.</span>
        </h2>
        <p>
          A collection of systems, experiments, and ideas
          exploring the intersection of AI and engineering.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
         
      <article
        className="project-card"
        key={project.number}
        style={
          { "--project-accent": project.accent } as React.CSSProperties
        }
        
        onPointerMove={(event) => {
          if (
            event.pointerType !== "mouse" ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ) {
            return;
          }

          const card = event.currentTarget;
          const rect = card.getBoundingClientRect();

          const percentX = (event.clientX - rect.left) / rect.width;
          const percentY = (event.clientY - rect.top) / rect.height;

          const rotateY = (percentX - 0.5) * 25;
          const rotateX = (0.5 - percentY) * 25;

          card.style.setProperty("--light-x", `${percentX * 100}%`);
          card.style.setProperty("--light-y", `${percentY * 100}%`);

          card.style.setProperty("--parallax-x", `${(percentX - 0.5) * 12}px`);
          card.style.setProperty("--parallax-y", `${(percentY - 0.5) * 12}px`);

          card.style.setProperty("--orbit-rotate-x", `${rotateX}deg`);
          card.style.setProperty("--orbit-rotate-y", `${rotateY}deg`);
        }}

        
        onPointerLeave={(event) => {
          const card = event.currentTarget;

          card.style.setProperty("--light-x", "78%");
          card.style.setProperty("--light-y", "45%");
          card.style.setProperty("--parallax-x", "0px");
          card.style.setProperty("--parallax-y", "0px");
          card.style.setProperty("--orbit-rotate-x", "0deg");
          card.style.setProperty("--orbit-rotate-y", "0deg");
        }}

      >

            <div className="project-topline">
              <span>{project.number} / {project.category}</span>
              <span>{project.year}</span>
            </div>

            <div className="project-main">
              <div className="project-copy">
                <p className="project-subtitle">{project.subtitle}</p>

                <h3>
                  {project.title.split("\n").map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GITHUB ↗
                    </a>
                  ) : (
                    <span className="project-link-placeholder">
                      GITHUB LINK COMING SOON
                    </span>
                  )}

                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      LIVE DEMO ↗
                    </a>
                  )}
                </div>
              </div>

              
            <div className="project-visual" aria-hidden="true">
              <div className="visual-grid" />
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="visual-orbit orbit-three" />

              <div className="visual-core">
                <span>{project.number}</span>
              </div>

              <div className="visual-satellite satellite-one" />
              <div className="visual-satellite satellite-two" />

              <span className="visual-caption">
                {project.category}
              </span>
            </div>

            </div>

            <div className="project-bottomline">
              <span>ADITYA® — AI ENGINEERING</span>
              <span>SCROLL TO EXPLORE ↓</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
