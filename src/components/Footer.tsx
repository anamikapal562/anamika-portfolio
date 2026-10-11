import { profile } from "../data/content";
import { Link } from "../router";

export function Footer() {
  return (
    <footer className="site-footer">
      <section className="closing" aria-labelledby="closing-heading">
        <h2 id="closing-heading">Have a complex problem to untangle?</h2>
        <p className="note-font">Let's talk.</p>
        <ul>
          <li>
            <a href={`mailto:${profile.email}`}>Email</a>
          </li>
          <li>
            {profile.linkedin ? (
              <a href={profile.linkedin}>LinkedIn</a>
            ) : (
              <span className="pending-link" title="LinkedIn URL to be added">
                LinkedIn
              </span>
            )}
          </li>
          <li>
            <Link href="/resume">Resume</Link>
          </li>
        </ul>
        <p className="closing-place">{profile.location}</p>
      </section>
      <div className="footer-bar">
        <p>Anamika Pal · {profile.location}</p>
        <p>
          <Link href="/work">Work</Link>
          {" · "}
          <Link href="/about">About</Link>
          {" · "}
          <Link href="/contact">Contact</Link>
        </p>
      </div>
      <Signature />
    </footer>
  );
}

function Signature() {
  return (
    <section className="signature" aria-labelledby="signature-heading">
      <div className="signature-layout">
        <div className="signature-copy">
          <div className="maker-stamps">
            <div className="maker-stamp" style={{ rotate: "-2deg" }}>
              <span>Figma</span>
              <FigmaMark />
            </div>
            <div className="maker-stamp" style={{ rotate: "2.5deg" }}>
              <span>Cursor</span>
              <CursorMark />
            </div>
          </div>
          <p>I designed and built this website with two close collaborators</p>
          <h2 id="signature-heading">Figma and Cursor</h2>
        </div>
        <p className="signoff" aria-hidden="true">
          <span>Design for people</span>
          Design for
          <br />
          Love <span className="signoff-heart">♥</span>
        </p>
      </div>
      <button
        className="to-top"
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span aria-hidden="true">⌃</span> Scroll to Top
      </button>
    </section>
  );
}

function FigmaMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 38 57" aria-hidden="true">
      <path fill="#f24e1e" d="M19 19V0H9.5a9.5 9.5 0 0 0 0 19H19Z" />
      <path fill="#a259ff" d="M19 0h9.5a9.5 9.5 0 0 1 0 19H19V0Z" />
      <path fill="#ff7262" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z" />
      <path fill="#1abcfe" d="M19 19h9.5a9.5 9.5 0 0 1 0 19H19V19Z" />
      <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 0 9.5 57 9.5 9.5 0 0 0 19 47.5V38H9.5A9.5 9.5 0 0 0 0 47.5Z" />
    </svg>
  );
}

function CursorMark() {
  return (
    <svg className="brand-mark brand-mark-cursor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.2 5.6 12 2.4l7.8 3.2v7.8L12 17.6 4.2 14.4V5.6Zm7 1.5v4.6l3.7 1.6.8-1.5-2.8-1.2V7.1h-1.7Z"
      />
    </svg>
  );
}
