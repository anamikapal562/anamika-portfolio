import { careerPath, careerSpan } from "../data/content";

export function CareerPath() {
  return (
    <section className="path" aria-labelledby="path-heading">
      <div className="path-head">
        <h2 id="path-heading">How the work evolved</h2>
        <p>{careerSpan}</p>
      </div>
      <ol>
        {careerPath.map((step, index) => (
          <li key={step.title}>
            {step.year ? <p className="path-year">{step.year}</p> : <p className="path-year">Then</p>}
            <h3>{step.title}</h3>
            <p>{step.detail}</p>
            {index < careerPath.length - 1 && <span className="path-arrow" aria-hidden="true">↓</span>}
          </li>
        ))}
      </ol>
    </section>
  );
}
