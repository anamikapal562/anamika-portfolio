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
    </footer>
  );
}
