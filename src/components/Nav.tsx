import { useEffect, useRef, useState } from "react";
import { Link } from "../router";
import { useRouter } from "../use-router";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const { path } = useRouter();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === path;
  const navRef = useRef<HTMLElement>(null);

  const close = () => setOpenPath(null);

  useEffect(() => {
    if (!open) return;
    if (!window.matchMedia("(max-width: 720px)").matches) return;
    const firstLink = navRef.current?.querySelector("a");
    if (firstLink instanceof HTMLElement) firstLink.focus();
  }, [open]);

  return (
    <header
      className="nav-wrap"
      onKeyDown={(event) => {
        if (event.key === "Escape") close();
      }}
    >
      <div className="nav-bar">
        <Link href="/" className="wordmark" markCurrent={false}>
          Anamika
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpenPath(open ? null : path)}
          onKeyDown={(event) => {
            if (event.key === "Escape") close();
          }}
        >
          <i />
          <i />
          <i />
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
        <nav
          id="site-nav"
          ref={navRef}
          className={open ? "site-nav open" : "site-nav"}
          aria-label="Primary"
        >
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
