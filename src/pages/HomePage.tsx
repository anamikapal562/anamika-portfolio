import { BringSection } from "../components/BringSection";
import { CollaboratorNotes } from "../components/CollaboratorNotes";
import { HomeDesk } from "../components/HomeDesk";
import { ProjectBoard } from "../components/ProjectBoard";
import { projects } from "../data/content";
import { Link } from "../router";

export function HomePage() {
  return (
    <>
      <HomeDesk />
      <div className="home-follow">
        <section className="archive" aria-labelledby="work-heading">
          <div className="section-head">
            <h2 id="work-heading">Selected Work</h2>
            <p className="lede">A few problems I've had the chance to untangle.</p>
          </div>
          <ProjectBoard projects={projects} />
          <Link className="see-all" href="/work">
            See all work →
          </Link>
        </section>
        <BringSection />
        <CollaboratorNotes />
      </div>
    </>
  );
}
