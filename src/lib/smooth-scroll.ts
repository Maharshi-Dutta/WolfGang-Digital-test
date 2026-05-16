// Custom smooth-scroll with adjustable duration + easing.
// Native CSS `scroll-behavior: smooth` ignores both, so we animate manually.

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export function smoothScrollTo(
  targetId: string,
  opts: { duration?: number; offset?: number; easing?: (t: number) => number } = {},
) {
  const el = document.getElementById(targetId);
  if (!el) return;

  const { duration = 1400, offset = 0, easing = easeInOutCubic } = opts;
  const startY = window.scrollY;
  const endY = el.getBoundingClientRect().top + window.scrollY - offset;
  const distance = endY - startY;
  const startTime = performance.now();

  const step = (now: number) => {
    const elapsed = now - startTime;
    const t = Math.min(1, elapsed / duration);
    window.scrollTo(0, startY + distance * easing(t));
    if (t < 1) requestAnimationFrame(step);
    else history.replaceState(null, "", `#${targetId}`);
  };
  requestAnimationFrame(step);
}
