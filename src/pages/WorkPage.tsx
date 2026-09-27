import { ProjectBoard } from "../components/ProjectBoard";
import { projects } from "../data/content";

export function WorkPage() {
  return (
    <article className="work-wrap">
      <p className="kicker">The practice</p>
      <h1 id="selected-work">Selected Work</h1>
      <p className="lede">
        Designing for complex systems, workflows and the people who use them.
      </p>
      <ProjectBoard projects={projects} />
    </article>
  );
}
