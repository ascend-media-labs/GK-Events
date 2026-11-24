import { Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight, PhoneCall } from "lucide-react";
import { contact } from "@/data/site";

// Refined logo-inspired palette: Imperial Gold, Sapphire Blue, Ruby Red, Emerald Green
const LOGO_LIGHT_COLORS = [
  { fill: "#D97706", shadow: "0 0 3px #D97706, 0 0 6px rgba(217, 119, 6, 0.4)" },  // Imperial Gold
  { fill: "#2563EB", shadow: "0 0 3px #2563EB, 0 0 6px rgba(37, 99, 235, 0.4)" },  // Royal Sapphire Blue
  { fill: "#DC2626", shadow: "0 0 3px #DC2626, 0 0 6px rgba(220, 38, 38, 0.4)" },  // Ruby Red
  { fill: "#F59E0B", shadow: "0 0 3px #F59E0B, 0 0 6px rgba(245, 158, 11, 0.4)" },  // Champagne Gold
  { fill: "#059669", shadow: "0 0 3px #059669, 0 0 6px rgba(5, 150, 105, 0.4)" },  // Emerald
  { fill: "#D97706", shadow: "0 0 3px #D97706, 0 0 6px rgba(217, 119, 6, 0.4)" },  // Gold
];

function MicroFairyLights() {
  const bulbCount = 30;

  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 h-2 overflow-visible select-none"
      aria-hidden="true"
    >
      <style>{`
        @keyframes gentleFairyGlow {
          0%, 100% {
            opacity: 1;
            filter: brightness(1.1) drop-shadow(0 0 2px currentColor);
            transform: scale(1);
          }
          50% {
            opacity: 0.65;
            filter: brightness(0.85) drop-shadow(0 0 1px currentColor);
            transform: scale(0.92);
          }
        }
      `}</style>

      {/* Ultra-delicate Champagne Wire */}
      <svg
        className="absolute top-0 left-0 h-1.5 w-full"
        preserveAspectRatio="none"
        viewBox="0 0 1200 8"
        fill="none"
      >
        <path
          d="M0,1 Q20,6 40,1 Q60,6 80,1 Q100,6 120,1 Q140,6 160,1 Q180,6 200,1 Q220,6 240,1 Q260,6 280,1 Q300,6 320,1 Q340,6 360,1 Q380,6 400,1 Q420,6 440,1 Q460,6 480,1 Q500,6 520,1 Q540,6 560,1 Q580,6 600,1 Q620,6 640,1 Q660,6 680,1 Q700,6 720,1 Q740,6 760,1 Q780,6 800,1 Q820,6 840,1 Q860,6 880,1 Q900,6 920,1 Q940,6 960,1 Q980,6 1000,1 Q1020,6 1040,1 Q1060,6 1080,1 Q1100,6 1120,1 Q1140,6 1160,1 Q1180,6 1200,1"
          stroke="rgba(217, 119, 6, 0.28)"
          strokeWidth="0.75"
        />
      </svg>

      {/* Dainty Micro-Jewel Bulbs */}
      <div className="relative flex w-full justify-around px-2 sm:px-6">
        {Array.from({ length: bulbCount }).map((_, idx) => {
          const color = LOGO_LIGHT_COLORS[idx % LOGO_LIGHT_COLORS.length] ?? LOGO_LIGHT_COLORS[0]!;
          const isDeep = idx % 2 === 1;
          const animDelay = ((idx * 0.18) % 2.6).toFixed(2);
          const animDuration = (2.2 + ((idx * 0.25) % 1.2)).toFixed(2);

          return (
            <div
              key={idx}
              className="relative flex flex-col items-center"
              style={{
                transform: `translateY(${isDeep ? "1.5px" : "0px"})`,
              }}
            >
              {/* Micro socket cap */}
              <div className="h-[1px] w-[2.5px] rounded-t-xs bg-slate-400" />

              {/* Smaller Dainty Bulb with Soft Subtle Glow */}
              <div
                className="relative h-1.5 w-1 rounded-full"
                style={{
                  backgroundColor: color.fill,
                  boxShadow: color.shadow,
                  animation: `gentleFairyGlow ${animDuration}s ease-in-out infinite`,
                  animationDelay: `${animDelay}s`,
                }}
              >
                <div className="absolute inset-x-[1px] top-[1px] h-[2px] rounded-full bg-white/90 blur-[0.1px]" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function AnnouncementBar() {
  return (
    <aside
      aria-label="Announcement"
      className="relative z-40 w-full border-b border-amber-500/20 bg-amber-50/50 backdrop-blur-md transition-all duration-300"
    >
      {/* Hanging Micro Fairy Lights Garland */}
      <MicroFairyLights />

      <div className="container-x relative flex min-h-[28px] items-center justify-center py-1 pt-1.5 sm:min-h-[30px] sm:py-1 sm:pt-2">
        {/* Main Content */}
        <div className="mx-auto flex flex-wrap items-center justify-center gap-x-2.5 gap-y-0.5 text-center text-[11px] sm:text-xs">
          {/* Refined Glass Badge in Logo Primary Gold */}
          <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-100/70 px-2 py-0.5 font-bold tracking-wider text-amber-800 shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            <Sparkles className="h-2.5 w-2.5 text-amber-600" />
            <span className="uppercase text-[9px] sm:text-[10px] tracking-widest font-extrabold">Special Offer</span>
          </span>

          {/* Announcement Copy */}
          <span className="font-medium text-slate-800">
            Book <span className="font-bold text-slate-950">Stage Lighting, LED Walls & Audio</span> —
            <span className="text-amber-700 font-extrabold"> Get Up to 15% OFF</span>
          </span>

          {/* Luxury CTA & Phone */}
          <div className="inline-flex items-center gap-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 font-bold text-amber-700 underline-offset-4 transition-colors hover:text-amber-900 hover:underline"
            >
              <span>Book Dates</span>
              <ArrowRight className="h-3 w-3 transition-transform hover:translate-x-0.5" />
            </Link>

            <span className="hidden text-slate-300 sm:inline" aria-hidden="true">•</span>

            <a
              href={contact.phoneHref}
              className="hidden items-center gap-1 font-semibold text-slate-600 transition-colors hover:text-amber-700 sm:inline-flex"
            >
              <PhoneCall className="h-2.5 w-2.5 text-amber-600" />
              <span>{contact.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Fine Golden Divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
    </aside>
  );
}
