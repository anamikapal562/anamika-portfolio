import { HobbySticker } from "./HobbySticker";
import { profile } from "../data/content";
import { Link } from "../router";
import { useRouter } from "../use-router";

export function Footer() {
  const { path } = useRouter();

  return (
    <footer className="site-footer">
      {path === "/" && <HobbySticker hobby="cricket" className="sticker sticker-footer" />}
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
      <p className="made-with">
        I designed and built this website with two close collaborators —{" "}
        <span className="collab-mark">
          <FigmaMark />
          Figma
        </span>{" "}
        and{" "}
        <span className="collab-mark">
          <CursorMark />
          Cursor
        </span>
        .
      </p>
    </footer>
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
        d="M3.2 6.4 12 2.2l8.8 4.2v8.6L12 19.2l-8.8-4.2V6.4Zm8.1 1.2v5.1l4.4 2.1.7-1.4-3.4-1.6V7.6h-1.7Z"
      />
    </svg>
  );
}
