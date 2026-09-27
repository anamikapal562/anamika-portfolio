import { BringSection } from "../components/BringSection";
import { CollaboratorNotes } from "../components/CollaboratorNotes";
import { HobbySticker } from "../components/HobbySticker";
import { HomeDesk } from "../components/HomeDesk";
import { ProjectBoard } from "../components/ProjectBoard";
import { SketchGrid } from "../components/SketchGrid";
import { projects } from "../data/content";
import { Link } from "../router";

export function HomePage() {
  return (
    <>
      <SketchGrid />
      <HomeDesk />
      <div className="home-follow">
        <section className="archive" aria-labelledby="work-heading">
          <HobbySticker hobby="painting" className="sticker sticker-work" />
          <div className="section-head">
            <h2 id="work-heading">Selected Work</h2>
            <p className="lede">A few problems I've had the chance to untangle.</p>
          </div>
          <ProjectBoard projects={projects} />
          <Link className="see-all" href="/work">
            See all work →
          </Link>
        </section>
        <div className="sticker-host">
          <HobbySticker hobby="doodling" className="sticker sticker-bring" />
          <BringSection />
        </div>
        <div className="sticker-host">
          <HobbySticker hobby="travel" className="sticker sticker-notes" />
          <CollaboratorNotes />
        </div>
      </div>
    </>
  );
}
