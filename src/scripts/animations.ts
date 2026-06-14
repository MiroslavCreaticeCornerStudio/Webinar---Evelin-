import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const root = document.documentElement;
const mm = gsap.matchMedia();

// Animations run only when the user hasn't asked for reduced motion. When that
// query stops matching (or never matches), matchMedia reverts everything and the
// `.gsap-ready` class is removed so all content is shown, static.
mm.add("(prefers-reduced-motion: no-preference)", () => {
  root.classList.add("gsap-ready");

  // Hero entrance — gentle staggered rise on page load.
  const heroEls = gsap.utils.toArray<HTMLElement>("[data-hero]");
  if (heroEls.length) {
    gsap.fromTo(
      heroEls,
      { autoAlpha: 0, y: 24 },
      { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.09, delay: 0.15 }
    );
  }

  // Single-element scroll reveals — fade + rise once, when scrolled into view.
  gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 28 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      }
    );
  });

  // Grouped reveals — the container's [data-reveal-item] children stagger in.
  gsap.utils.toArray<HTMLElement>("[data-reveal-stagger]").forEach((group) => {
    const items = gsap.utils.toArray<HTMLElement>("[data-reveal-item]", group);
    if (!items.length) return;
    gsap.fromTo(
      items,
      { autoAlpha: 0, y: 28 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: { trigger: group, start: "top 85%", once: true },
      }
    );
  });

  // Trigger positions can shift once web fonts settle — recalc when they're ready.
  if (document.fonts?.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }

  return () => {
    root.classList.remove("gsap-ready");
  };
});
