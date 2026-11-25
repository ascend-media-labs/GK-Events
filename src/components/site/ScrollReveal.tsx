import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/** Cards = direct children of grids, or of any element marked `data-reveal-group`. */
const ITEM_SELECTOR = ".grid > *, [data-reveal-group] > *";
const EASE = "cubic-bezier(0.2, 0.7, 0.2, 1)";
/** Elements that have already been revealed; they never animate again. */
const revealed = new WeakSet<Element>();

/**
 * Site-wide scroll animations, done with the Web Animations API so no classes or
 * attributes are written to React-owned DOM (no hydration mismatches, and the
 * elements' own hover transitions are untouched):
 * - every top-level <section> in <main> except the first (the page hero) slides in,
 *   alternating left-to-right and right-to-left;
 * - every card inside those sections fades up on its own, staggered by its
 *   position in the row.
 * Each animation is created paused at its first frame and played when the
 * element enters the viewport.
 */
export function ScrollReveal() {
  const key = useRouterState({ select: (s) => `${s.location.pathname}|${s.status}` });

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    if (!("animate" in Element.prototype)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const pending = new Map<Element, Animation>();

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          pending.get(e.target)?.play();
          revealed.add(e.target);
          pending.delete(e.target);
          io.unobserve(e.target);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    );

    const prepare = (el: Element, keyframes: Keyframe[], options: KeyframeAnimationOptions) => {
      if (revealed.has(el) || pending.has(el)) return;
      const anim = el.animate(keyframes, { fill: "backwards", easing: EASE, ...options });
      anim.pause();
      pending.set(el, anim);
      io.observe(el);
    };

    const raf = requestAnimationFrame(() => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>("main section")).filter(
        (s) => !s.parentElement?.closest("section"),
      );

      sections.forEach((s, i) => {
        if (i === 0) return;
        // Skip anything already scrolled past (e.g. back-navigation restored scroll).
        if (s.getBoundingClientRect().bottom < 0) return;

        const dx = i % 2 === 1 ? -56 : 56;
        prepare(
          s,
          [
            { opacity: 0, transform: `translate3d(${dx}px, 0, 0)` },
            { opacity: 1, transform: "none" },
          ],
          { duration: 800 },
        );

        const items = Array.from(s.querySelectorAll<HTMLElement>(ITEM_SELECTOR)).filter(
          (el) => el.offsetParent !== null,
        );
        const itemSet = new Set(items);
        for (const el of items) {
          // Only the outermost card animates; nested grids inside a card don't.
          let p = el.parentElement;
          let nested = false;
          while (p && p !== s) {
            if (itemSet.has(p)) { nested = true; break; }
            p = p.parentElement;
          }
          if (nested) continue;
          const index = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
          prepare(
            el,
            [
              { opacity: 0, transform: "translate3d(0, 28px, 0) scale(0.97)" },
              { opacity: 1, transform: "none" },
            ],
            { duration: 700, delay: 150 + (index % 4) * 110 },
          );
        }
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      // Never leave anything hidden: drop animations that haven't played yet.
      pending.forEach((a) => a.cancel());
      pending.clear();
    };
  }, [key]);

  return null;
}
