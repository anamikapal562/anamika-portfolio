import type { Project } from "../data/content";
import { Link } from "../router";

function Motif({ motif }: { motif: Project["motif"] }) {
  if (motif === "pipeline") {
    return (
      <ol className="pipeline" aria-hidden="true">
        <li>Browser</li>
        <li>Analysis</li>
        <li>Findings</li>
        <li>Tickets</li>
      </ol>
    );
  }
  if (motif === "handoff") {
    return (
      <p className="handoff" aria-hidden="true">
        <span>Assessor</span>
        <i />
        <span>Handoff</span>
        <i />
        <span>Assessor</span>
      </p>
    );
  }
  if (motif === "unify") {
    return <p className="unify">Fragmented workflows, one platform</p>;
  }
  return <p className="unify">Credit, inside the UPI flow</p>;
}

export function ProjectBoard({ projects }: { projects: Project[] }) {
  return (
    <ol className="project-board">
      {projects.map((project) => (
        <li key={project.slug} className={`layout-${project.layout}`}>
          <Link className={`project-card tone-${project.tone}`} href={`/work/${project.slug}`}>
            <div className="project-visual">
              <img src={project.cover.src} alt={project.cover.alt} />
              <span className="view-case">View case study →</span>
            </div>
            <div className="project-body">
              <p className="project-index">
                <span>{project.index}</span>
                <span className="project-eyebrow">{project.eyebrow}</span>
              </p>
              <p className="project-kicker">{project.kicker}</p>
              <h3>{project.title}</h3>
              <p className="product-name">{project.productName}</p>
              <Motif motif={project.motif} />
              <p className="project-summary">{project.summary}</p>
              {project.outcome && <p className="outcome">{project.outcome}</p>}
              <ul className="tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <dl className="project-meta">
                {project.meta.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Link>
        </li>
      ))}
    </ol>
  );
}
