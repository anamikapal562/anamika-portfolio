import { useEffect, useState, type AnchorHTMLAttributes, type MouseEvent, type ReactNode } from "react";
import { RouterContext, normalize, useRouter } from "./use-router";

export function Router({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(() => normalize(window.location.pathname));

  useEffect(() => {
    const onPop = () => setPath(normalize(window.location.pathname));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = (to: string) => {
    const next = normalize(to);
    if (next === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    window.history.pushState({}, "", next);
    setPath(next);
    window.scrollTo(0, 0);
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>{children}</RouterContext.Provider>
  );
}

function isCurrent(path: string, href: string) {
  if (href === "/") return path === "/";
  return path === href || path.startsWith(`${href}/`);
}

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
  markCurrent?: boolean;
};

export function Link({
  href,
  children,
  markCurrent = true,
  onClick,
  ...rest
}: LinkProps) {
  const { navigate, path } = useRouter();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }
    if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#")) {
      return;
    }
    event.preventDefault();
    navigate(href);
  };

  return (
    <a
      href={href}
      {...rest}
      aria-current={markCurrent && isCurrent(path, href) ? "page" : undefined}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
