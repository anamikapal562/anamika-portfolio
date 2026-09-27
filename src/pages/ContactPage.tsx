import { useState, type FormEvent } from "react";
import { profile } from "../data/content";

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

export function ContactPage() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const next: Errors = {};
    if (!name) next.name = "Add your name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Add a valid email so I can reply.";
    }
    if (message.length < 8) next.message = "Write a short note — a sentence is enough.";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus("");
      return;
    }
    const subject = encodeURIComponent(`Note from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    setStatus("Opening your email app with this note.");
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <article className="sheet">
      <p className="kicker">Say hello</p>
      <h1>Contact</h1>
      <p className="lede">
        If you are shaping a complex product and want it to feel clearer, I would like
        to hear about it.
      </p>
      <div className="contact-grid">
        <form className="letter" onSubmit={onSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">
              <span>Name</span>
            </label>
            <input id="name" name="name" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
            {errors.name && (
              <p id="name-error" className="field-error">
                {errors.name}
              </p>
            )}
          </div>
          <div className="field">
            <label htmlFor="email">
              <span>Email</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="field-error">
                {errors.email}
              </p>
            )}
          </div>
          <div className="field">
            <label htmlFor="message">
              <span>Note</span>
            </label>
            <textarea
              id="message"
              name="message"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="field-error">
                {errors.message}
              </p>
            )}
          </div>
          <button className="btn" type="submit">
            Send a note
          </button>
          <p className="form-status" role="status">
            {status}
          </p>
        </form>
        <aside className="contact-aside">
          <h2>Currently</h2>
          <p>
            {profile.role} at {profile.company}
          </p>
          <p>{profile.location}</p>
          <p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </aside>
      </div>
    </article>
  );
}
