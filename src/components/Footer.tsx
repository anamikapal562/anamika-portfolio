import { Link } from "../router";

export function Footer() {
  return (
    <footer className="site-footer">
      <p>Anamika Pal · Bangalore, India</p>
      <p>
        <Link href="/work">Work</Link>
        {" · "}
        <Link href="/about">About</Link>
        {" · "}
        <Link href="/contact">Contact</Link>
      </p>
    </footer>
  );
}
