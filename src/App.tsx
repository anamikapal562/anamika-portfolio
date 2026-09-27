import { useEffect, useRef } from "react";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { metaFor } from "./data/content";
import { AboutPage } from "./pages/AboutPage";
import { CaseStudyPage } from "./pages/CaseStudyPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ResumePage } from "./pages/ResumePage";
import { WorkPage } from "./pages/WorkPage";
import { useRouter } from "./use-router";
import "./styles/global.css";
import "./styles/home.css";
import "./styles/pages.css";

function Page() {
  const { path } = useRouter();
  const meta = metaFor(path);
  const first = useRef(true);

  useEffect(() => {
    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", meta.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector('meta[name="twitter:title"]')
      ?.setAttribute("content", meta.title);
    document
      .querySelector('meta[name="twitter:description"]')
      ?.setAttribute("content", meta.description);

    if (first.current) {
      first.current = false;
      return;
    }
    document.getElementById("content")?.focus();
  }, [path, meta.title, meta.description]);

  if (path === "/") return <HomePage />;
  if (path === "/work") return <WorkPage />;
  if (path.startsWith("/work/")) {
    return <CaseStudyPage slug={decodeURIComponent(path.slice("/work/".length))} />;
  }
  if (path === "/about") return <AboutPage />;
  if (path === "/resume") return <ResumePage />;
  if (path === "/contact") return <ContactPage />;
  return <NotFoundPage />;
}

export default function App() {
  const { path } = useRouter();
  const meta = metaFor(path);

  return (
    <div className="site">
      <a className="skip" href="#content">
        Skip to content
      </a>
      <Nav />
      <main id="content" tabIndex={-1}>
        <p className="sr-only" role="status">
          {meta.title}
        </p>
        <Page />
      </main>
      <Footer />
    </div>
  );
}
