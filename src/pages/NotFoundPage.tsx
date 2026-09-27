import { Link } from "../router";

export function NotFoundPage() {
  return (
    <article className="missing">
      <p className="kicker">Misfiled</p>
      <h1>This page isn’t on the desk.</h1>
      <p className="lede">The note you asked for isn’t here. The rest of the workspace is.</p>
      <p>
        <Link href="/">Back to the desk</Link>
      </p>
    </article>
  );
}
