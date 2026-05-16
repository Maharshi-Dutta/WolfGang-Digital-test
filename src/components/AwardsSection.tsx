import { useMemo, useState } from "react";
import { AWARDS, AWARD_GROUPS } from "@/data/awards";
import { AwardRow } from "@/components/AwardRow";
import { ChevronDown } from "lucide-react";

export function AwardsSection() {
  const [group, setGroup] = useState<string>("All");

  const filtered = useMemo(
    () => AWARDS.filter((a) => group === "All" || a.group === group),
    [group],
  );

  const years: (2025 | 2024)[] = [2025, 2024];

  return (
    <>
      {/* Intro + Filter */}
      <section className="px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
        <h2 className="text-3xl md:text-5xl font-black uppercase leading-[1.05] text-primary">
          Six-time best global large agency, delivering award-winning strategy, creativity, and performance worldwide.
        </h2>
        <div className="flex flex-wrap items-center gap-3 md:justify-end">
          <FilterSelect
            label="By Award"
            value={group}
            onChange={setGroup}
            options={AWARD_GROUPS}
          />
        </div>
      </section>

      {/* Awards List */}
      <section className="pb-24">
        {years.map((y) => {
          const items = filtered.filter((a) => a.year === y);
          if (items.length === 0) return null;
          return (
            <div key={y} className="mb-4">
              <div className="px-6 md:px-12 py-6">
                <span className="inline-block bg-accent text-accent-foreground rounded-full px-5 py-1.5 text-sm font-medium">
                  {y}
                </span>
              </div>
              <div className="border-t border-border">
                {items.map((a) => (
                  <AwardRow key={a.id} award={a} />
                ))}
              </div>
            </div>
          );
        })}

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-16">No awards match these filters.</p>
        )}
      </section>
    </>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none rounded-full border border-primary px-5 py-2 pr-10 text-sm bg-background text-primary hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer transition-colors min-w-[150px]"
      >
        <option value="All">{label}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-current" />
    </div>
  );
}