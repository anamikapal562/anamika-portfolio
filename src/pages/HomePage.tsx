import { projects } from "../data/content";
import { HomeDesk } from "../components/HomeDesk";
import { Link } from "../router";

export function HomePage() {
  return (
    <>
      <HomeDesk />
      <section className="archive" aria-labelledby="work-heading">
        <div className="archive-head">
          <p className="note-font">filed under work</p>
          <h2 id="work-heading">Selected work</h2>
          <p>
            The desk is the personality. The studies are the practice — complex products,
            clearer decisions.
          </p>
        </div>
        <ol className="archive-list">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link className="study-card" href={`/work/${project.slug}`}>
                <img src={project.cover.src} alt={project.cover.alt} />
                <div className="study-copy">
                  <p className="study-index">{project.index}</p>
                  <h3>{project.title}</h3>
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
      </section>
    </>
  );
}
