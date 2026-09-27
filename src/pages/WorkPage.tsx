import { projects } from "../data/content";
import { Link } from "../router";

export function WorkPage() {
  return (
    <article className="sheet">
      <p className="kicker">The practice</p>
      <h1>Work</h1>
      <p className="lede">
        Five years at Zeta, designing inside B2B fintech and banking products. These
        studies describe the problems and the way I work. The frames are placeholders
        until the project visuals can be shared.
      </p>
      <ol className="work-list">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link className="work-item" href={`/work/${project.slug}`}>
              <img src={project.cover.src} alt={project.cover.alt} />
              <div>
                <p className="study-index">{project.index}</p>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
                <ul className="tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </article>
  );
}
