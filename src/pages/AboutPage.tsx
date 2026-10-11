import { CareerPath } from "../components/CareerPath";
import { profile } from "../data/content";

const practices = [
  "Product strategy",
  "UX design",
  "Complex enterprise workflows",
  "Fintech & banking products",
  "Design systems",
  "AI-powered experiences",
  "Prototyping",
  "Visual design",
];

export function AboutPage() {
  return (
    <article className="sheet">
      <p className="kicker">A short introduction</p>
      <h1>About</h1>
      <div className="about-grid">
        <aside className="about-portrait">
          <img src={profile.portrait.src} alt={profile.portrait.alt} />
        </aside>
        <div className="about-copy">
          <p>
            I’m {profile.name}, a user experience and product designer based in{" "}
            {profile.location}. For the past five years I’ve been at {profile.company},
            evolving from a graphic designer to a User Experience Designer II.
          </p>
          <p>
            I started in graphic design and moved into product and UX. That path is why
            the work can hold both things at once: a strong visual foundation, and the
            patience to untangle a complicated workflow.
          </p>
          <p>
            Most of my practice sits in B2B enterprise products, particularly complex
            fintech and banking platforms. I turn dense workflows, data-heavy systems,
            and business requirements into experiences that are easier to understand
            and use.
          </p>
          <p>
            I’m curious and collaborative. I would rather understand the problem than
            rush the solution.
          </p>
        </div>
      </div>
      <CareerPath />
      <section className="practice" aria-labelledby="practice-heading">
        <h2 id="practice-heading">What I work across</h2>
        <ul className="chips">
          {practices.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <div className="notes-row">
        <article>
          <h2>Curious</h2>
          <p>I stay with the question until the workflow, not the interface, makes sense.</p>
        </article>
        <article>
          <h2>Collaborative</h2>
          <p>The clearest products come from designing with the people who ship and use them.</p>
        </article>
        <article>
          <h2>Problem first</h2>
          <p>Visual craft matters. It arrives after the decision the screen has to support.</p>
        </article>
      </div>
    </article>
  );
}
