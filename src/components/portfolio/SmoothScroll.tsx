export function SmoothScroll() {
  // Keep native scrolling: it is compositor-driven, responsive on touch devices,
  // and avoids a permanent requestAnimationFrame loop on animation-heavy pages.
  return null;
}
