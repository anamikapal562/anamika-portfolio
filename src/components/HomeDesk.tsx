import { useEffect, useRef } from "react";
import {
  experiencePoints,
  focusItems,
  hobbies,
  practiceAreas,
  profile,
} from "../data/content";
import { Link } from "../router";
import { HobbyIllustration } from "./HobbyIllustration";
import { BangaloreMark, FolderGlyph, Paperclip, Pin } from "./Icons";

function DeskHobby({ place }: { place: (typeof hobbies)[number]["place"] }) {
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

export function HomeDesk() {
  const deskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const desk = deskRef.current;
    if (!desk) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(pointer: fine)");
    const wide = window.matchMedia("(min-width: 1120px)");

    const canMove = () => !reduced.matches && fine.matches && wide.matches;

    const onMove = (event: PointerEvent) => {
      if (!canMove()) return;
      const rect = desk.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      desk.style.setProperty("--px", x.toFixed(3));
      desk.style.setProperty("--py", y.toFixed(3));
    };

    const onLeave = () => {
      desk.style.setProperty("--px", "0");
      desk.style.setProperty("--py", "0");
    };

    desk.addEventListener("pointermove", onMove);
    desk.addEventListener("pointerleave", onLeave);
    return () => {
      desk.removeEventListener("pointermove", onMove);
      desk.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div className="desk-wrap">
      <div className="desk-glow" aria-hidden="true" />
      <div className="desk" ref={deskRef}>
        <svg className="doodles" viewBox="0 0 1140 860" aria-hidden="true">
          <path
            d="M250 150c70 20 90 40 150 28"
            fill="none"
            stroke="#e36a24"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path d="M392 168l10 12 14-18" fill="none" stroke="#e36a24" strokeWidth="1.6" />
          <path
            d="M900 150c-60 30-90 48-140 40"
            fill="none"
            stroke="#e36a24"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path d="M768 198l-8 12-16-10" fill="none" stroke="#e36a24" strokeWidth="1.6" />
          <path d="M300 620c40-30 70-36 110-20" fill="none" stroke="#c44712" strokeWidth="1.4" />
          <circle cx="180" cy="40" r="3" fill="#e36a24" />
          <path d="M980 520l8 8-8 8" fill="none" stroke="#2f5d45" strokeWidth="1.4" />
        </svg>

        <div className="piece piece-id">
          <div className="shift">
            <article className="scrap id-card" aria-labelledby="profile-name">
              <Pin />
              <span className="tape tape-left" aria-hidden="true" />
              <div className="id-photo">
                <img src={profile.portrait.src} alt={profile.portrait.alt} />
              </div>
              <h1 id="profile-name">{profile.name}</h1>
              <p className="id-role">{profile.role}</p>
              <div className="id-rule" aria-hidden="true" />
              <p className="id-tagline">{profile.tagline}</p>
            </article>
            <DeskHobby place="hero" />
          </div>
        </div>

        <div className="piece piece-left">
          <div className="left-stack">
            <div className="stack-focus">
              <div className="shift">
                <div className="bob">
                  <article className="scrap focus-card" aria-labelledby="focus-heading">
                    <span className="tape tape-left" aria-hidden="true" />
                    <span className="holes" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                    </span>
                    <h2 id="focus-heading">Currently focused on →</h2>
                    <ul className="focus-list">
                      {focusItems.map((item) => (
                        <li key={item}>
                          <span className="tick" aria-hidden="true">
                            ✓
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </div>
              <DeskHobby place="focus" />
            </div>

            <div className="stack-folders">
              <div className="shift">
                <article className="scrap desktop-card" aria-labelledby="design-heading">
                  <header className="desktop-bar">
                    <span className="dots" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                    </span>
                    <h2 id="design-heading">What I design?</h2>
                  </header>
                  <div className="folders">
                    {practiceAreas.map((area) => {
                      const inner = (
                        <>
                          <FolderGlyph tone={area.tone} />
                          <span>{area.label}</span>
                        </>
                      );
                      return area.slug ? (
                        <Link key={area.label} className="folder" href={`/work/${area.slug}`}>
                          {inner}
                        </Link>
                      ) : (
                        <div key={area.label} className="folder">
                          {inner}
                        </div>
                      );
                    })}
                  </div>
                </article>
              </div>
              <DeskHobby place="design" />
            </div>
          </div>
        </div>

        <div className="piece piece-stamp">
          <div className="shift">
            <div className="bob">
              <p className="float-label note-font">Based in</p>
              <article className="scrap stamp" aria-label="Based in Bangalore, India">
                <div className="stamp-inner">
                  <div className="postmark">BLR</div>
                  <BangaloreMark />
                  <p>
                    <span className="place-country">India</span>
                    <span className="place-city">Bangalore</span>
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="piece piece-exp">
          <div className="shift">
            <div className="note-stack">
              <div className="note-back" aria-hidden="true" />
              <article className="scrap note-front" aria-labelledby="exp-heading">
                <Paperclip />
                <h2 id="exp-heading">
                  Experience <span className="spark">✦</span>
                </h2>
                <p className="years">{profile.years}</p>
                <ul className="note-list">
                  {experiencePoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
