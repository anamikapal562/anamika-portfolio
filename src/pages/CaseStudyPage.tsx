import { projectBySlug } from "../data/content";
import { Link } from "../router";
import { NotFoundPage } from "./NotFoundPage";

export function CaseStudyPage({ slug }: { slug: string }) {
  const project = projectBySlug(slug);
  if (!project) return <NotFoundPage />;

  return (
    <article className="sheet">
      <Link className="back-link" href="/work">
        ← All work
      </Link>
      <p className="kicker">Study {project.index}</p>
      <h1>{project.title}</h1>
      <p className="lede">{project.summary}</p>
      <dl className="meta-row">
        <div>
          <dt>Role</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt>Context</dt>
          <dd>{project.context}</dd>
        </div>
        <div>
          <dt>Focus</dt>
          <dd>{project.focus}</dd>
        </div>
      </dl>
      <figure className="case-hero">
        <img src={project.cover.src} alt={project.cover.alt} />
      </figure>
      <div className="prose">
        {project.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets && (
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
      <div className="visual-grid">
        {project.visuals.map((visual) => (
          <figure key={visual.src}>
            <img src={visual.src} alt={visual.alt} />
            <figcaption>{visual.label} — placeholder visual</figcaption>
          </figure>
        ))}
      </div>
    </article>
  );
}
