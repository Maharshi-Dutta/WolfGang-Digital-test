import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import blogRetail from "@/assets/blog-retail.jpg";
import blogChatgpt from "@/assets/blog-chatgpt.jpg";
import blogAiAds from "@/assets/blog-ai-ads.jpg";
import blogRoas from "@/assets/blog-roas.jpg";
import blogSeo from "@/assets/blog-seo.jpg";
import blogSocial from "@/assets/blog-social.jpg";
import blogCrm from "@/assets/blog-crm.jpg";
import blogPpc from "@/assets/blog-ppc.jpg";

const INSIGHTS = [
  {
    image: blogAiAds,
    author: "Brendan Almack",
    initials: "BA",
    read: "5 min",
    title: "AI, Automation & Ads: The Big Announcements from Google Marketing Live",
    type: "Blogs",
  },
  {
    image: blogRetail,
    author: "Brendan Almack",
    initials: "BA",
    read: "4 min",
    title: "The Online Retail Report - 19% Growth for Retailers Online in 2025",
    type: "Blogs",
  },
  {
    image: blogChatgpt,
    author: "Brendan Almack",
    initials: "BA",
    read: "3 min",
    title: "Why Retailers Shouldn't Ignore ChatGPT This Golden Quarter",
    type: "Blogs",
  },
  {
    image: blogRoas,
    author: "Otavio Dias",
    initials: "OD",
    read: "4 min",
    title: "Beyond ROAS: How Gross Profit Optimisation Is Reshaping Google Ads",
    type: "Blogs",
  },
  {
    image: blogSeo,
    author: "Alan Coleman",
    initials: "AC",
    read: "6 min",
    title: "How to Win in the Age of AI Search: A Practical SEO Playbook",
    type: "Blogs",
  },
  {
    image: blogSocial,
    author: "Sarah Stack",
    initials: "SS",
    read: "4 min",
    title: "Paid Social in 2025: Creative Strategies That Actually Convert",
    type: "Blogs",
  },
  {
    image: blogCrm,
    author: "Niamh O'Brien",
    initials: "NO",
    read: "5 min",
    title: "Lifecycle Marketing: Turning First-Time Buyers into Loyal Fans",
    type: "Blogs",
  },
  {
    image: blogPpc,
    author: "Conor Lynch",
    initials: "CL",
    read: "5 min",
    title: "Performance Max Unpacked: What's Working for Retailers Right Now",
    type: "Blogs",
  },
  {
    image: blogRetail,
    author: "Wolfgang Digital",
    initials: "WD",
    read: "3 min",
    title: "Wolfgang Wins Best Global Large Agency for the Sixth Time",
    type: "News",
  },
];

export function InsightsCarousel({
  insightFilter,
  setInsightFilter,
}: {
  insightFilter: "Blogs" | "News";
  setInsightFilter: (v: "Blogs" | "News") => void;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });
  const [selected, setSelected] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const visibleInsights = INSIGHTS.filter((p) => p.type === insightFilter);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="px-6 md:px-12">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
            Insights
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.95] text-primary">
            Latest News
            <br />& Insights
          </h2>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground mr-1">Filter by</span>
            {(["Blogs", "News"] as const).map((opt) => (
              <button
                key={opt}
                onClick={() => setInsightFilter(opt)}
                className={`rounded-full border border-primary px-5 py-2 text-sm transition-colors ${
                  insightFilter === opt
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="overflow-hidden pl-6 md:pl-12" ref={emblaRef}>
        <div className="flex gap-6">
          {visibleInsights.map((p) => (
            <article
              key={p.title}
              className="group relative shrink-0 basis-[85%] sm:basis-[55%] md:basis-[38%] lg:basis-[31%] aspect-[4/5] rounded-2xl overflow-hidden bg-primary cursor-pointer"
            >
              <img
                src={p.image}
                alt={p.title}
                width={800}
                height={1024}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="flex items-center gap-2 bg-black/40 backdrop-blur rounded-full pl-1 pr-3 py-1">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                    {p.initials}
                  </span>
                  <span className="text-xs text-white">{p.author}</span>
                </span>
                <span className="bg-black/40 backdrop-blur rounded-full px-3 py-1 text-xs text-white">
                  ⏱ {p.read}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-4">
                <h3 className="text-white text-lg md:text-xl font-bold leading-tight">
                  {p.title}
                </h3>
                <span className="shrink-0 w-10 h-10 rounded-full border border-white/70 flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-12 mt-10 flex flex-wrap items-center justify-between gap-4 md:gap-6">
        <button className="order-1 rounded-full border border-primary text-primary px-6 py-2.5 text-sm font-medium whitespace-nowrap hover:bg-primary hover:text-primary-foreground transition-colors">
          View all {insightFilter}
        </button>
        <div className="order-3 md:order-2 w-full md:w-auto flex items-center justify-center gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                selected === i ? "w-8 bg-accent" : "w-6 bg-primary/30"
              }`}
            />
          ))}
        </div>
        <div className="order-2 md:order-3 flex items-center gap-3">
          <button
            aria-label="Previous"
            onClick={() => emblaApi?.scrollPrev()}
            className="w-11 h-11 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            aria-label="Next"
            onClick={() => emblaApi?.scrollNext()}
            className="w-11 h-11 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}