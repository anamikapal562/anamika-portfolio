import { strengths } from "../data/content";

export function BringSection() {
  return (
    <section className="bring" aria-labelledby="bring-heading">
      <h2 id="bring-heading">What I bring to the table</h2>
      <ul>
        {strengths.map((item) => (
          <li key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
