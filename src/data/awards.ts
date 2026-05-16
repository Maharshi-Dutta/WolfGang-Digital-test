import teamImg from "@/assets/team-celebration.jpg";
import winnerImg from "@/assets/winner-card.jpg";
import gsaLogo from "@/assets/award-gsa.jpg";
import esaLogo from "@/assets/award-esa.jpg";
import gsmaLogo from "@/assets/award-gsma.jpg";
import dmaLogo from "@/assets/award-dma.jpg";
import epmaLogo from "@/assets/award-epma.jpg";

export type Award = {
  id: string;
  year: 2024 | 2025;
  group: string;
  channel: string;
  industry: string;
  categories: { name: string; result: string }[];
  hoverImage: string;
  logoImage: string;
};

export const AWARDS: Award[] = [
  {
    id: "gsa-2025",
    year: 2025,
    group: "Global Search Awards",
    channel: "PPC",
    industry: "E-commerce",
    hoverImage: teamImg,
    logoImage: gsaLogo,
    categories: [
      { name: "Best Global Large Integrated Search Agency", result: "Winner" },
      { name: "Best Use Of Search — Retail / Ecommerce (SEO): Large", result: "Winner" },
      { name: "Best Use Of Search — Retail / Ecommerce (PPC): Large", result: "Winner" },
      { name: "Best Integrated Campaign: Large", result: "Winner" },
      { name: "Best UK SEO Campaign", result: "Winner" },
    ],
  },
  {
    id: "esa-2025",
    year: 2025,
    group: "European Search Awards",
    channel: "PPC",
    industry: "Retail",
    hoverImage: winnerImg,
    logoImage: esaLogo,
    categories: [
      { name: "Best Use Of Search — Retail / Ecommerce (PPC) (Large)", result: "Winner" },
      { name: "Best Use Of Search — Finance (SEO) (Large)", result: "Winner" },
      { name: "Best Large SEO Agency", result: "Winner" },
    ],
  },
  {
    id: "gsma-2025",
    year: 2025,
    group: "Global Social Media Awards",
    channel: "Social Media",
    industry: "Digital",
    hoverImage: teamImg,
    logoImage: gsmaLogo,
    categories: [
      { name: "Best Use Of Research", result: "Winner" },
      { name: "Best Use Of Integrated Campaign", result: "Winner" },
      { name: "Best Use Of Paid Social", result: "Winner" },
      { name: "Best Use Of AI In Social", result: "Winner" },
    ],
  },
  {
    id: "gsa-2024",
    year: 2024,
    group: "Global Search Awards",
    channel: "PPC",
    industry: "E-commerce",
    hoverImage: teamImg,
    logoImage: gsaLogo,
    categories: [
      { name: "Best Use Of Search — Retail / eCommerce (PPC)", result: "Winner" },
      { name: "Best Use Of Search — B2B (SEO)", result: "Winner" },
      { name: "Best Local Campaign (SEO)", result: "Winner" },
      { name: "Best Integrated Campaign", result: "Winner" },
      { name: "Best Global Large Integrated Search Agency", result: "Winner" },
    ],
  },
  {
    id: "dma-2024",
    year: 2024,
    group: "Digital Media Awards",
    channel: "Creative",
    industry: "Digital",
    hoverImage: winnerImg,
    logoImage: dmaLogo,
    categories: [
      { name: "Best Agency", result: "Winner" },
      { name: "Best Integrated Digital Campaign", result: "Winner" },
      { name: "Best Social Media Campaign", result: "Winner" },
    ],
  },
  {
    id: "epma-2024",
    year: 2024,
    group: "European Paid Media Awards",
    channel: "PPC",
    industry: "Retail",
    hoverImage: teamImg,
    logoImage: epmaLogo,
    categories: [
      { name: "Best Use Of TikTok Ads", result: "Winner" },
      { name: "Best Use Of Video", result: "Winner" },
    ],
  },
];

export const AWARD_GROUPS = Array.from(new Set(AWARDS.map((a) => a.group))).sort();
export const CHANNELS = Array.from(new Set(AWARDS.map((a) => a.channel))).sort();
export const INDUSTRIES = Array.from(new Set(AWARDS.map((a) => a.industry))).sort();