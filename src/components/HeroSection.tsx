import teamHero from "@/assets/team-celebration.jpg";

export function HeroSection() {
  return (
    <section className="relative h-[60vh] min-h-[320px] w-full overflow-hidden rounded-b-[2rem] md:rounded-b-[3rem]">
      <img
        src={teamHero}
        alt="Wolfgang Digital team celebrating an award win"
        width={1280}
        height={800}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative h-full flex items-center justify-center px-6 pt-26">
        <h1 className="text-white text-[18vw] md:text-[12vw] lg:text-[5vw] font-black tracking-tight leading-none drop-shadow-lg text-center">
          OUR AWARDS
        </h1>
      </div>
    </section>
  );
}