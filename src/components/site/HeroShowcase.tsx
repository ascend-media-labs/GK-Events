import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { waLink } from "@/data/site";

export function HeroShowcase() {
  return (
    <section className="relative w-full pt-3 pb-4 sm:pt-4 sm:pb-6 bg-white" aria-label="Hero">
      <div className="max-w-[1288px] mx-auto px-4 sm:px-6">
        {/* Main Hero Card with 3D Pedestal Staging */}
        <div
          className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-slate-200/70 shadow-[0_20px_40px_rgba(0,0,0,0.05)] flex items-center justify-start p-6 sm:p-9 lg:p-11"
          style={{
            minHeight: "clamp(410px, 54vh, 480px)",
            background: "#eef5ff url('/images/hero-pedestal.webp') 60% 54% / cover no-repeat",
          }}
        >
          {/* Subtle responsive fade on small screens so text stays readable over the image */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#eef5ff]/95 via-[#eef5ff]/80 to-transparent lg:hidden pointer-events-none" />

          {/* Hero Content Shell */}
          <div className="relative z-10 flex flex-col items-start gap-2.5 sm:gap-3 w-full lg:w-[46%] max-w-[560px]">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#eff6ff]/95 text-blue-700 text-xs sm:text-[13px] font-bold tracking-wide border border-blue-200/70 shadow-xs mb-1">
              Premium AV Rentals
            </div>

            {/* Signature Headline with hand-drawn SVG highlights */}
            <h1 className="font-display text-[2.2rem] sm:text-[2.7rem] md:text-[3.2rem] lg:text-[3.5rem] font-extrabold text-slate-900 leading-[1.05] tracking-tight max-w-[12ch]">
              “Professional{" "}
              <span className="relative inline-block text-emerald-600 px-2.5">
                AV equipment
                <svg
                  className="pointer-events-none absolute -inset-x-2.5 -inset-y-1.5 w-[calc(100%+20px)] h-[calc(100%+12px)]"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M5,50 C5,15 95,15 95,50 C95,85 8,85 5,55 C4,35 12,25 22,22"
                    stroke="#10b981"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>{" "}
              for Rent —<br />
              delivered &amp;<br />
              <span className="relative inline-block text-blue-600 pb-1">
                setup
                <svg
                  className="pointer-events-none absolute -bottom-1.5 -left-1 w-[104%] h-2.5"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M 2,8 C 30,5 70,9 98,6"
                    stroke="#2563eb"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              ”
            </h1>

            {/* Action CTAs */}
            <div className="flex items-center gap-3.5 pt-2">
              <Button
                asChild
                className="rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-5 text-sm sm:text-base shadow-[0_4px_14px_rgba(37,99,235,0.28)] transition-all hover:scale-105 active:scale-95"
              >
                <a
                  href={waLink("Hi GK Events, I'd like to book AV equipment for my event.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Book Now
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-2xl bg-white hover:bg-slate-50 text-slate-900 border border-slate-300/80 font-semibold px-7 py-5 text-sm sm:text-base shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow transition-all hover:scale-105 active:scale-95"
              >
                <Link to="/equipment">
                  View Equipment
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
