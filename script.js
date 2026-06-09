// SÈNTRI mockup — minimal, dependency-free interactions.

// 1) Header gets a hairline border once the page scrolls.
const head = document.getElementById("head");
const onScroll = () => head.classList.toggle("is-stuck", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// 2) Scroll-reveal: fade/slide elements in as they enter the viewport.
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Hero content lives at the bottom of a tall hero — reveal it immediately on
// load (staggered) instead of waiting for it to scroll into view.
const heroReveals = document.querySelectorAll(".hero .reveal");
requestAnimationFrame(() => heroReveals.forEach((el) => el.classList.add("is-in")));

const reveals = [...document.querySelectorAll(".reveal")].filter(
  (el) => !el.closest(".hero")
);

if (reduce || !("IntersectionObserver" in window)) {
  reveals.forEach((el) => el.classList.add("is-in"));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  reveals.forEach((el) => io.observe(el));
}
