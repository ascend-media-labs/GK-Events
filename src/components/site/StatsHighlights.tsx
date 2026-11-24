import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  decimalPlaces?: number | undefined;
}

const STATS_DATA: StatItem[] = [
  { value: 500, suffix: "+", label: "Events served" },
  { value: 5, suffix: "", label: "Cities covered" },
  { value: 20, suffix: "+", label: "Equipment types" },
  { value: 4.8, suffix: "★", label: "Average rating", decimalPlaces: 1 },
];

function AnimatedStat({
  value,
  suffix,
  decimalPlaces = 0,
  isVisible,
}: {
  value: number;
  suffix: string;
  decimalPlaces?: number | undefined;
  isVisible: boolean;
}) {
  const [currentVal, setCurrentVal] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCurrentVal(0);
      return;
    }

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCurrentVal(value);
      return;
    }

    let start: number | null = null;
    const duration = 1400;
    let animId: number;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const val = eased * value;
      setCurrentVal(val);

      if (progress < 1) {
        animId = requestAnimationFrame(step);
      } else {
        setCurrentVal(value);
      }
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isVisible, value]);

  const displayString = decimalPlaces > 0 ? currentVal.toFixed(decimalPlaces) : Math.round(currentVal).toString();

  return (
    <span className="tabular-nums tracking-tight">
      {displayString}
      <span className="font-extrabold">{suffix}</span>
    </span>
  );
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
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-8 sm:py-12"
      aria-label="Our track record"
    >
      <div className="max-w-[1288px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS_DATA.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center rounded-[24px] sm:rounded-[28px] border border-slate-200/80 bg-white p-6 sm:p-8 text-center shadow-[0_8px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-blue-600 leading-none">
                <AnimatedStat
                  value={item.value}
                  suffix={item.suffix}
                  decimalPlaces={item.decimalPlaces}
                  isVisible={isVisible}
                />
              </div>
              <p className="mt-2.5 sm:mt-3 text-sm sm:text-base font-medium text-slate-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
