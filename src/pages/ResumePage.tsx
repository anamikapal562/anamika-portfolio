import { useEffect, useState } from "react";
import { creativeRoots, experiencePoints, profile } from "../data/content";

export function ResumePage() {
  const [pdfReady, setPdfReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(profile.resumePdf, { method: "HEAD" })
      .then((response) => {
        const type = response.headers.get("content-type") ?? "";
        if (!cancelled) setPdfReady(response.ok && type.includes("pdf"));
      })
      .catch(() => {
        if (!cancelled) setPdfReady(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <article className="sheet">
      <p className="kicker">On paper</p>
      <h1 className="sr-only">Résumé</h1>
      <div className="resume-sheet">
        <p className="resume-name">{profile.name}</p>
        <p className="resume-role">{profile.roleLine}</p>
        <p>
          {profile.location} · {profile.company}
        </p>
        <h2>Profile</h2>
        <p>
          Product designer with five years at {profile.company}, evolving from graphic
          design into user experience design for B2B fintech and banking platforms.
          I turn complicated workflows and data-heavy systems into experiences that
          are easier to understand and use.
        </p>
        <h2>Experience</h2>
        <p>
          <strong>{profile.company}</strong> — {profile.role}
        </p>
        <p>{profile.location} · Five years</p>
        <ul>
          <li>Design user-centric experiences for complex enterprise products.</li>
          <li>Moved from graphic design into product and UX design.</li>
          <li>
            Focus areas include {experiencePoints.slice(0, -1).join(", ").toLowerCase()}, and{" "}
            {experiencePoints[experiencePoints.length - 1].toLowerCase()}.
          </li>
        </ul>
        <h2>Practice</h2>
        <ul>
          <li>Product strategy, UX design, and prototyping</li>
          <li>Complex enterprise workflows in fintech and banking</li>
          <li>Design systems and visual design</li>
          <li>AI-powered experiences</li>
        </ul>
        <h2>Earlier craft</h2>
        <p>{creativeRoots.join(" · ")}</p>
        <h2>Working style</h2>
        <p>Curious, collaborative, and inclined to understand the problem before the solution.</p>
        <div className="resume-actions">
          {pdfReady ? (
            <a className="btn" href={profile.resumePdf}>
              Download PDF
            </a>
          ) : (
            <button type="button" className="btn" aria-disabled="true" disabled>
              PDF coming soon
            </button>
          )}
          <p className="hint">The sheet above is the résumé for now.</p>
        </div>
      </div>
    </article>
  );
}
