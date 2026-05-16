# Wolfgang Digital — Awards Page Recreation

A React technical assessment recreating the [Wolfgang Digital Awards page](https://www.wolfgangdigital.com/awards/).

**🔴 Live Demo:** [https://test.maharshidutta000.workers.dev/](https://test.maharshidutta000.workers.dev/)  
**📁 GitHub:** [https://github.com/Maharshi-Dutta/WolfGang-Digital-test](https://github.com/Maharshi-Dutta/WolfGang-Digital-test)

---

## Original vs Clone

### Hero Section

| Original | Clone |
|---|---|
| ![Original Hero](https://cdn.craft.cloud/019bb305-cbff-7138-bff5-e8fd056893a9/assets/images/Global-Search-Awards/003_awards_global-search-awards_freddieg_2025_54874290098_o.jpg?width=600&quality=80&fit=cover) | ![Clone Hero](https://test.maharshidutta000.workers.dev/assets/team-celebration-B_y3jrXk.jpg) |
| wolfgangdigital.com/awards | test.maharshidutta000.workers.dev |

### Award Rows with Hover Interaction

| Original | Clone |
|---|---|
| ![Original Award Row](https://cdn.craft.cloud/019bb305-cbff-7138-bff5-e8fd056893a9/assets/images/Awards/GSMA26_Winner_Colour-768x258.png?width=600&quality=80&fit=cover) | ![Clone Award Badge](https://test.maharshidutta000.workers.dev/assets/award-gsa-ViO0qIRz.jpg) |
| Floating image follows cursor on hover | Floating image follows cursor on hover ✅ |

### Insights Carousel

| Original | Clone |
|---|---|
| Blogs / News filter tabs | Blogs / News filter tabs ✅ |
| Embla Carousel with prev/next controls | Embla Carousel with prev/next controls ✅ |
| Pagination dot indicators | Pagination dot indicators ✅ |

---

## How to Run

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v18 or above).

```bash
node --version
```

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/Maharshi-Dutta/WolfGang-Digital-test.git
cd WolfGang-Digital-test

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open your browser at **http://localhost:8080**

### Production Build

```bash
npm run build
```

---

## Libraries & Tools

| Library | Purpose |
|---|---|
| **React 19** | UI component framework |
| **TypeScript** | Type safety across all components |
| **TanStack Start** | SSR-capable React framework with file-based routing |
| **TanStack Router** | Client-side routing via `createFileRoute` |
| **Tailwind CSS v4** | Utility-first styling with oklch design tokens |
| **shadcn/ui** | Radix UI component primitives |
| **Embla Carousel** | Insights section carousel with touch support |
| **Lucide React** | Icon library |
| **Vite** | Build tool and dev server |
| **Cloudflare Workers** | Production deployment |

---

## Project Structure

```
src/
├── assets/                   # Images — award logos, blog thumbnails, hero
├── components/
│   ├── AwardRow.tsx          # Single award row + cursor-tracking hover image
│   ├── AwardsSection.tsx     # Filter dropdown + grouped awards list
│   ├── ContactSection.tsx    # "Ready to own your category" + contact form
│   ├── ConversationCTA.tsx   # "Let's start a conversation" full-bleed CTA
│   ├── HeroSection.tsx       # Full-bleed hero with "OUR AWARDS" heading
│   ├── InsightsCarousel.tsx  # Embla carousel with working Blogs/News filter
│   ├── NavMenu.tsx           # Desktop dropdown + mobile overlay navigation
│   └── SiteFooter.tsx        # Newsletter form, nav columns, marquee animation
├── data/
│   └── awards.ts             # Typed Award data with derived AWARD_GROUPS
├── routes/
│   ├── __root.tsx            # HTML shell + meta tags + QueryClientProvider
│   └── index.tsx             # Page composition + scroll-aware sticky header
└── styles.css                # Tailwind config + oklch colour tokens
```

---

## Key Implementation Details

### Award Group Filter
Awards are filtered using `useMemo` — recomputes only when the selected group changes. Award groups are derived dynamically from the data using `Array.from(new Set(...))` rather than being hardcoded.

```ts
const filtered = useMemo(
  () => AWARDS.filter((a) => group === "All" || a.group === group),
  [group],
);
```

### Hover Interaction
`AwardRow` tracks mouse position using `onMouseMove` and updates a floating image element using CSS `transform: translate()`. The effect uses `requestAnimationFrame` for smooth 60fps tracking.

### Scroll-Aware Header
The sticky header uses a delta-based scroll detection pattern — it hides when scrolling down by more than 6px and reappears when scrolling up, preventing flicker on small scroll movements.

### Insights Filter
The `InsightsCarousel` filters the `INSIGHTS` array by type (`"Blogs" | "News"`) before rendering. Embla Carousel is re-initialised via `emblaApi.reInit()` when the filter changes so the pagination dots update correctly.

---

## Features

- Filter awards by group (e.g. Global Search Awards) across both 2024 and 2025
- Hover interaction — floating award image tracks cursor position in real time
- Scroll-aware sticky header — hides on scroll down, reappears on scroll up
- Insights carousel with working Blogs/News filter
- Responsive layout with full-screen mobile navigation overlay
- Static hardcoded data — no backend or API required
