import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, X, ChevronDown } from "lucide-react";
import navPerson from "@/assets/nav-person.jpg";
import { smoothScrollTo } from "@/lib/smooth-scroll";

type MenuItem = { label: string; href: string };
type Menu = { label: string; items: MenuItem[]; cta: { label: string; href: string } };

const MENUS: Menu[] = [
  {
    label: "Services",
    cta: { label: "All Services", href: "#" },
    items: [
      { label: "Search Engine Optimisation", href: "#" },
      { label: "Paid Search", href: "#" },
      { label: "Paid Social Media & Creative", href: "#" },
      { label: "CRM & Marketing Automation", href: "#" },
      { label: "Data & Analytics", href: "#" },
    ],
  },
  {
    label: "Work",
    cta: { label: "All Work", href: "#" },
    items: [
      { label: "Case Studies", href: "#" },
      { label: "Testimonials", href: "#" },
      { label: "Awards", href: "#" },
    ],
  },
  {
    label: "About Us",
    cta: { label: "Meet the Team", href: "#" },
    items: [
      { label: "Our Story", href: "#" },
      { label: "Our Team", href: "#" },
      { label: "Employee Ownership", href: "#" },
      { label: "Wolfgang Reforest", href: "#" },
    ],
  },
  {
    label: "Insights",
    cta: { label: "All Insights", href: "#" },
    items: [
      { label: "Blog & Insights", href: "#" },
      { label: "News", href: "#" },
      { label: "Events & Webinars", href: "#" },
    ],
  },
  {
    label: "Careers",
    cta: { label: "Join Us", href: "#" },
    items: [
      { label: "Job Openings", href: "#" },
      { label: "Life at Wolfgang", href: "#" },
      { label: "Graduate Scheme", href: "#" },
    ],
  },
];

export function NavMenu() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(null), 180);
  };
  const openMenu = (label: string) => {
    cancelClose();
    setOpen(label);
  };

  useEffect(() => {
    setMounted(true);
    return () => cancelClose();
  }, []);

  return (
    <div
      className="relative"
    >
      {/* Desktop nav */}
      <nav className="hidden lg:flex items-center gap-8 text-primary-foreground text-sm">
        {MENUS.map((m) => (
          <button
            key={m.label}
            type="button"
            onMouseEnter={() => openMenu(m.label)}
            onMouseLeave={scheduleClose}
            onFocus={() => openMenu(m.label)}
            className={`relative inline-block py-1 transition-opacity after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-current after:origin-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-out hover:after:origin-left hover:after:scale-x-100 ${
              open === m.label ? "after:origin-left after:scale-x-100" : ""
            }`}
          >
            {m.label}
          </button>
        ))}
      </nav>

      {/* Mobile/tablet hamburger */}
      <button
        type="button"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((v) => !v)}
        className="lg:hidden relative flex items-center justify-center w-11 h-11 rounded-full border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
      >
        <span className="relative block w-5 h-5">
          <span
            className={`absolute left-0 right-0 top-1/2 h-[2px] bg-current transition-transform duration-300 ease-out ${
              mobileOpen ? "rotate-45" : "-translate-y-[4px]"
            }`}
          />
          <span
            className={`absolute left-0 right-0 top-1/2 h-[2px] bg-current transition-transform duration-300 ease-out ${
              mobileOpen ? "-rotate-45" : "translate-y-[4px]"
            }`}
          />
        </span>
      </button>

      {/* Mobile/tablet full-screen overlay — portaled to body to escape any
          transformed ancestor (the header uses translate-y for show/hide). */}
      {mounted &&
        createPortal(
          <div
        className={`lg:hidden fixed left-0 right-0 top-0 z-40 bg-primary text-primary-foreground shadow-2xl transition-all duration-300 ease-out origin-top ${
          mobileOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-2"
        }`}
        role="dialog"
        aria-modal="true"
      >
        {/* Top bar with logo + close */}
        <div className="flex items-center justify-between px-6 md:px-12 py-6">
          <span className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground text-primary font-black text-lg leading-none">
              W
            </span>
            <span className="leading-none">
              <span className="block font-black text-xl tracking-tight">WOLFGANG</span>
              <span className="block text-[11px] font-light tracking-[0.2em] mt-0.5">digital</span>
            </span>
          </span>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="relative flex items-center justify-center w-11 h-11 rounded-full border border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            <span className="relative block w-5 h-5">
              <span
                className={`absolute left-0 right-0 top-1/2 h-[2px] bg-current transition-transform duration-300 ease-out ${
                  mobileOpen ? "rotate-45" : "-translate-y-[4px]"
                }`}
              />
              <span
                className={`absolute left-0 right-0 top-1/2 h-[2px] bg-current transition-transform duration-300 ease-out ${
                  mobileOpen ? "-rotate-45" : "translate-y-[4px]"
                }`}
              />
            </span>
          </button>
        </div>

        <div className="max-h-[calc(100vh-88px)] overflow-y-auto px-6 md:px-12 pb-10">
          <ul className="divide-y divide-primary-foreground/20">
            {MENUS.map((m) => {
              const expanded = mobileExpanded === m.label;
              return (
                <li key={m.label}>
                  <button
                    type="button"
                    onClick={() =>
                      setMobileExpanded((cur) => (cur === m.label ? null : m.label))
                    }
                    className="w-full flex items-center justify-between py-6 text-3xl md:text-4xl font-black uppercase tracking-tight"
                  >
                    <span>{m.label}</span>
                    <ChevronDown
                      className={`w-6 h-6 transition-transform duration-300 ${
                        expanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      expanded
                        ? "grid-rows-[1fr] opacity-100 pb-4"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="space-y-3 pl-1">
                        {m.items.map((item) => (
                          <li key={item.label}>
                            <a
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-2 text-lg text-primary-foreground/85 hover:text-accent transition-colors"
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                        <li>
                          <a
                            href={m.cta.href}
                            onClick={() => setMobileOpen(false)}
                            className="inline-block mt-2 rounded-full bg-accent text-accent-foreground px-5 py-2 text-sm font-medium"
                          >
                            {m.cta.label}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="mt-10 pt-8 border-t border-primary-foreground/20 flex items-center justify-between gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setMobileOpen(false);
                setTimeout(() => smoothScrollTo("contact", { duration: 1600, offset: 80 }), 320);
              }}
              className="rounded-full border border-primary-foreground text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              Contact Us
            </a>
            <img
              src={navPerson}
              alt=""
              aria-hidden="true"
              className="w-11 h-11 rounded-full object-cover ring-2 ring-primary-foreground/40"
            />
          </div>
        </div>
          </div>,
          document.body,
        )}

      {/* Dropdown panel */}
      <div
        className={`hidden lg:block fixed left-0 right-0 top-[88px] z-20 px-6 md:px-12 pt-10 pb-12 bg-background text-foreground shadow-2xl rounded-b-[2rem] md:rounded-b-[3rem] transition-all duration-300 ease-out ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Items */}
          <div>
            {MENUS.map((m) =>
              open === m.label ? (
                <div key={m.label} className="animate-in fade-in duration-300">
                  <ul className="divide-y divide-border border-t border-border">
                    {m.items.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="group flex items-center justify-between py-5 text-2xl md:text-[28px] font-black text-primary hover:opacity-70 transition-opacity"
                        >
                          <span>{item.label}</span>
                          <span className="shrink-0 w-10 h-10 rounded-full border border-primary/60 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                            <ArrowUpRight className="w-4 h-4" />
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={m.cta.href}
                    className="inline-block mt-8 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    {m.cta.label}
                  </a>
                </div>
              ) : null,
            )}
          </div>

          {/* Image */}
          <div className="hidden md:block">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-secondary">
              <img
                src={navPerson}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}