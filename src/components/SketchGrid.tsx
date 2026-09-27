import { useEffect, useRef } from "react";

export function SketchGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    document.body.classList.add("home-canvas");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const onMove = (event: PointerEvent | MouseEvent) => {
      if (reduced.matches) return;
      grid.style.setProperty("--gx", `${event.clientX}px`);
      grid.style.setProperty("--gy", `${event.clientY}px`);
      grid.classList.add("is-lit");
    };

    const onLeave = () => {
      grid.classList.remove("is-lit");
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      document.body.classList.remove("home-canvas");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <div className="sketch-grid" ref={gridRef} aria-hidden="true" />;
}
