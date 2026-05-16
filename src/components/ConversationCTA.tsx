import navPerson from "@/assets/nav-person.jpg";
import teamHero from "@/assets/team-celebration.jpg";

export function ConversationCTA() {
  return (
    <section className="relative w-full overflow-hidden">
      <img
        src={teamHero}
        alt="Wolfgang Digital team in conversation"
        width={1600}
        height={700}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative px-6 md:px-12 pt-32 md:pt-48 pb-16 md:pb-20">
        <div className="border-t border-white/40 mb-8" />
        <div className="flex items-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-xs font-bold tracking-[0.25em] text-white uppercase">
            Let's Start a Conversation
          </span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <h2 className="text-accent text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.95] max-w-5xl">
            What will world-leading look like for you?
          </h2>
          <div className="flex flex-col items-start lg:items-end gap-4 shrink-0">
            <p className="text-white text-sm md:text-base max-w-sm lg:text-right">
              Partner with a 6x Best Global Agency Winner that's as invested in your growth as you are.
            </p>
            <div className="flex items-center gap-3">
              <a href="#contact" className="rounded-full border border-white text-white px-6 py-2.5 text-sm font-medium hover:bg-white hover:text-primary transition-colors">
                Get in Touch
              </a>
              <img
                src={navPerson}
                alt="Contact a team member"
                width={40}
                height={40}
                loading="lazy"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-white/60"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}