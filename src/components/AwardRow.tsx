import { useEffect, useRef, useState } from "react";
import type { Award } from "@/data/awards";

export function AwardRow({ award }: { award: Award }) {
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 1024px)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const onMove = (e: React.MouseEvent) => {
    if (!enabled) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => enabled && setHovered(true)}
      onMouseLeave={() => enabled && setHovered(false)}
      onMouseMove={onMove}
      className={`group relative border-b border-border transition-colors duration-300 ${
        enabled && hovered ? "bg-primary text-primary-foreground" : "bg-background text-foreground"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 items-start px-6 md:px-10 py-7 md:py-8">
        {/* Logo + Title row on mobile */}
        <div className="flex items-center gap-4 md:col-span-2 md:block">
          <div
            className={`w-20 h-16 md:w-full md:h-auto md:aspect-[4/3] shrink-0 rounded-md overflow-hidden ${
              enabled && hovered ? "ring-1 ring-primary-foreground/20" : ""
            }`}
          >
            <img
              src={award.logoImage}
              alt={`${award.group} badge`}
              width={512}
              height={512}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="md:hidden text-xl font-extrabold uppercase leading-tight tracking-tight">
            {award.group}
          </h2>
        </div>

        {/* Title (desktop) */}
        <div className="hidden md:block md:col-span-3">
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase leading-tight tracking-tight">
            {award.group}
          </h2>
        </div>

        {/* Categories + Awards: side-by-side on mobile too */}
        <div className="grid grid-cols-[1fr_auto] gap-4 md:contents">
          <div className="md:col-span-4">
            <p className={`text-[10px] md:text-xs uppercase tracking-wider mb-2 md:mb-3 ${hovered ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
              Category
            </p>
            <ul className="space-y-1.5 text-sm md:text-[15px]">
              {award.categories.map((c, i) => (
                <li key={i}>{c.name}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className={`text-[10px] md:text-xs uppercase tracking-wider mb-2 md:mb-3 ${hovered ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
              Awards
            </p>
            <ul className="space-y-1.5 text-sm md:text-[15px] text-right md:text-left">
              {award.categories.map((c, i) => (
                <li key={i}>{c.result}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Year (desktop only — mobile shows it in section header) */}
        <div className="hidden md:block md:col-span-1 md:text-right">
          <span className="text-lg font-bold">{award.year}</span>
        </div>
      </div>

      {/* Floating tilted hover image */}
      <img
        src={award.hoverImage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute z-10 w-64 h-80 object-cover rounded-xl shadow-2xl transition-all duration-300 ease-out"
        style={{
          left: pos.x - 128,
          top: pos.y - 160,
          opacity: hovered ? 1 : 0,
          transform: `rotate(${hovered ? -6 : 0}deg) scale(${hovered ? 1 : 0.85})`,
        }}
      />
    </div>
  );
}