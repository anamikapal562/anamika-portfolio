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
      <p className="kicker">
        {project.index} · {project.eyebrow}
      </p>
      <h1>{project.title}</h1>
      <p className="lede">{project.summary}</p>
      <p className="product-name">{project.productName}</p>
      <dl className="meta-row">
        {project.meta.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
      {project.outcome && <p className="outcome">{project.outcome}</p>}
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
            <figcaption>{visual.label}</figcaption>
          </figure>
        ))}
      </div>
    </article>
  );
}
