import { collaboratorNotes, type CollaboratorNote } from "../data/content";

function LinkedInMark({ href }: { href: CollaboratorNote["linkedin"] }) {
  if (href) {
    return (
      <a className="li-mark" href={href} rel="noreferrer">
        <span className="sr-only">LinkedIn</span>
        in
      </a>
    );
  }
  return (
    <span className="li-mark is-pending" title="LinkedIn URL to be added">
      <span className="sr-only">LinkedIn URL to be added</span>
      in
    </span>
  );
}

export function CollaboratorNotes() {
  return (
    <section className="notes" aria-labelledby="notes-heading">
      <div className="notes-head">
        <h2 id="notes-heading">Some Notes</h2>
        <p className="note-font">from collaborators</p>
      </div>
      <ul>
        {collaboratorNotes.map((note) => (
          <li key={note.name}>
            <article className={`collab-note paper-${note.paper}`} style={{ rotate: note.tilt }}>
              <span className="note-tape" aria-hidden="true" />
              <span className="binder-holes" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <blockquote>
                {note.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </blockquote>
              <p className="emphasis">{note.emphasis}</p>
            </article>
            <footer>
              <p>
                <strong>{note.name}</strong>
                <LinkedInMark href={note.linkedin} />
              </p>
              <p>{note.role}</p>
            </footer>
          </li>
        ))}
      </ul>
    </section>
  );
}
