import { BringSection } from "../components/BringSection";
import { CollaboratorNotes } from "../components/CollaboratorNotes";
import { HomeDesk } from "../components/HomeDesk";
import { HobbyIllustration } from "../components/HobbyIllustration";
import { ProjectBoard } from "../components/ProjectBoard";
import { hobbies, projects } from "../data/content";
import { Link } from "../router";
import { ContactForm } from "./ContactPage";

function HobbySpot({ place }: { place: "work" | "about" | "contact" }) {
  const hobby = hobbies.find((item) => item.place === place);
  if (!hobby) return null;
  return (
    <HobbyIllustration
      className={`hobby-spot spot-${place}`}
      hobby={hobby.hobby}
      label={hobby.label}
      illustration={hobby.illustration}
      rotation={hobby.rotation}
    />
  );
}

export function HomePage() {
  return (
    <>
      <HomeDesk />
      <div className="home-follow">
        <section className="archive" aria-labelledby="work-heading">
          <HobbySpot place="work" />
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
        <section className="home-personal" aria-labelledby="personal-heading">
          <HobbySpot place="about" />
          <p className="kicker">Outside the pixels</p>
          <h2 id="personal-heading">A bit more of the person</h2>
          <p>
            Away from the screen I keep a few small rituals: basketball, swimming, painting,
            doodling, cricket, and always planning the next trip.
          </p>
          <p>
            That same curiosity is in the work. I started in graphic design, and I still care
            about hierarchy, illustration, and visual storytelling.
          </p>
          <Link className="see-all" href="/about">
            Read the longer note →
          </Link>
        </section>
        <section className="home-contact" aria-labelledby="contact-heading">
          <HobbySpot place="contact" />
          <p className="kicker">Say hello</p>
          <h2 id="contact-heading">Contact</h2>
          <p className="lede">
            If you are shaping a complex product and want it to feel clearer, I would like to
            hear about it.
          </p>
          <ContactForm />
        </section>
      </div>
    </>
  );
}
