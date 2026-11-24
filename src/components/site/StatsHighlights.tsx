import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  formatCommas?: boolean | undefined;
  duration?: number | undefined;
}

const stats: StatItem[] = [
  { value: 1200, suffix: "+", label: "Events delivered", formatCommas: true, duration: 1800 },
  { value: 10, suffix: "+", label: "Years experience", duration: 1400 },
  { value: 500, suffix: "+", label: "Event equipment units", duration: 1600 },
  { value: 24, suffix: "/7", label: "Event support", duration: 1200 },
];

function AnimatedNumber({
  value,
  duration = 1600,
  formatCommas = false,
  isVisible,
}: {
  value: number;
  duration?: number | undefined;
  formatCommas?: boolean | undefined;
  isVisible: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setDisplayValue(0);
      return;
    }

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayValue(value);
      return;
    }

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.round(easedProgress * value);

      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, value, duration]);

  const formatted = formatCommas ? displayValue.toLocaleString() : displayValue.toString();

  return <span className="tabular-nums tracking-tight">{formatted}</span>;
}

export function StatsHighlights() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) {
          setIsVisible(entry.isIntersecting);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="highlights"
      ref={sectionRef}
      className="relative border-b border-slate-200/80 bg-slate-50/70 py-10 backdrop-blur-md overflow-hidden transition-colors duration-500"
    >
      {/* Subtle luxury ambient gold gradient bar at the top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/25 to-transparent" />

      {/* Subtle ambient gold radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-28 bg-amber-500/5 blur-3xl rounded-full" />

      <div className="container-x relative grid grid-cols-2 gap-8 text-center sm:gap-10 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-slate-200/80">
        {stats.map((stat) => (
          <div key={stat.label} className="group flex flex-col items-center justify-center px-4 py-2 transition-transform duration-300 hover:-translate-y-0.5">
            <div className="flex items-baseline justify-center">
              <p className="text-gold font-display text-4xl sm:text-5xl font-extrabold drop-shadow-xs">
                <AnimatedNumber
                  value={stat.value}
                  duration={stat.duration}
                  formatCommas={stat.formatCommas}
                  isVisible={isVisible}
                />
                <span className="text-amber-700 text-3xl sm:text-4xl font-extrabold ml-0.5 select-none">
                  {stat.suffix}
                </span>
              </p>
            </div>
            <p className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-600 transition-colors group-hover:text-slate-900">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Subtle bottom gradient accent */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
    </section>
  );
}
