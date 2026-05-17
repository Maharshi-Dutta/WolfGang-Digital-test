import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { NavMenu } from "@/components/NavMenu";
import { HeroSection } from "@/components/HeroSection";
import { AwardsSection } from "@/components/AwardsSection";
import { ContactSection } from "@/components/ContactSection";
import { InsightsCarousel } from "@/components/InsightsCarousel";
import { ConversationCTA } from "@/components/ConversationCTA";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowRight } from "lucide-react";
import navPerson from "@/assets/nav-person.jpg";
import wolfgangLogo from "@/assets/wolfgang-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Our Awards | Wolfgang Digital" },
      {
        name: "description",
        content:
          "Six-time best global large agency, delivering award-winning strategy, creativity, and performance worldwide.",
      },
    ],
  }),
});

function Index() {
  const [insightFilter, setInsightFilter] = useState<"Blogs" | "News">("Blogs");
  const [headerState, setHeaderState] = useState<"top" | "show" | "hide">("top");

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY;
        if (y < 80) {
          setHeaderState("top");
        } else if (delta > 6) {
          setHeaderState("hide");
        } else if (delta < -6) {
          setHeaderState("show");
        }
        lastY = y;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-12 py-4 md:py-6 transition-all duration-300 ease-out ${
          headerState === "top"
            ? "translate-y-0 bg-transparent"
            : headerState === "show"
              ? "translate-y-0 bg-primary/95 backdrop-blur-md shadow-lg"
              : "-translate-y-full bg-primary/95 backdrop-blur-md"
        }`}
      >
        <a
          href="/"
          aria-label="Wolfgang Digital"
          className="relative z-40 inline-flex items-center text-primary-foreground"
        >
          <img
            src={wolfgangLogo}
            alt="Wolfgang Digital"
            width={160}
            height={40}
            className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 ease-out hover:translate-x-2"
          />
        </a>
        <NavMenu />
        <div className="relative z-40 hidden lg:flex items-center gap-3 group/contact">
          <a
            href="#contact"
            className="rounded-full border border-primary-foreground/40 text-primary-foreground pl-5 pr-5 py-2 text-sm flex items-center overflow-hidden transition-colors duration-300 group-hover/contact:bg-primary-foreground group-hover/contact:text-primary"
          >
            <span className="inline-flex items-center max-w-0 opacity-0 -translate-x-1 transition-all duration-300 ease-out group-hover/contact:max-w-[24px] group-hover/contact:opacity-100 group-hover/contact:translate-x-0 group-hover/contact:mr-2">
              <ArrowRight className="w-4 h-4" />
            </span>
            <span>Contact Us</span>
          </a>
          <img
            src={navPerson}
            alt="Contact a team member"
            width={40}
            height={40}
            loading="lazy"
            className="w-10 h-10 rounded-full object-cover ring-2 ring-primary-foreground/40 transition-transform duration-300 group-hover/contact:scale-110"
          />
        </div>
      </header>

      {/* Hero */}
      <HeroSection />

      <AwardsSection />

      <ContactSection />

      {/* Latest News & Insights */}
      <InsightsCarousel
        insightFilter={insightFilter}
        setInsightFilter={setInsightFilter}
      />

      <ConversationCTA />
      <SiteFooter />
    </main>
  );
}
