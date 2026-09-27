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

function Summary({ text, productName }: { text: string; productName: string }) {
  const index = text.indexOf(productName);
  if (index === -1) return <p className="project-summary">{text}</p>;
  return (
    <p className="project-summary">
      {text.slice(0, index)}
      <strong>{productName}</strong>
      {text.slice(index + productName.length)}
    </p>
  );
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
              <h3>{project.title}</h3>
              <p className="project-kicker">{project.kicker}</p>
              {(project.motif === "unify" || project.motif === "consumer") && (
                <Motif motif={project.motif} />
              )}
              {project.outcome && <p className="outcome">{project.outcome}</p>}
              <Summary text={project.summary} productName={project.productName} />
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
  );
}
