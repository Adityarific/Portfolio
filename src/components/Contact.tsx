
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-topline">
        <span>04 / GET IN TOUCH</span>
        <span>OPEN TO OPPORTUNITIES & COLLABORATIONS</span>
      </div>

      <div className="contact-heading">
        <p>HAVE A PROJECT IN MIND?</p>
        <h2>
          LET'S BUILD
          <br />
          <span>SOMETHING</span>
          <br />
          MEANINGFUL<span className="contact-dot">.</span>
        </h2>
      </div>

      <a
        className="contact-cta"
        href="mailto:adityagupta250406@gmail.com"
        data-cursor-label="EMAIL ME"
        data-magnetic
      >
        <span>LET'S TALK</span>
        <span className="contact-arrow">↗</span>
      </a>

      <div className="contact-email">
        <span>OR DROP ME AN EMAIL</span>
        <a href="mailto:adityagupta250406@gmail.com">
          adityagupta250406@gmail.com
        </a>
      </div>

      <footer className="contact-footer">
        <span>ADITYA GUPTA © {new Date().getFullYear()}</span>

        <div className="contact-socials">
          <a
            href="https://github.com/Adityarific"
            target="_blank"
            rel="noreferrer"
            data-cursor-label="VISIT"
          >
            GITHUB ↗
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-gupta-cs/"
            target="_blank"
            rel="noreferrer"
            data-cursor-label="VISIT"
          >
            LINKEDIN ↗
          </a>
        </div>

        <a href="#top" data-cursor-label="UP">
          BACK TO TOP ↑
        </a>
      </footer>
    </section>
  );
}
