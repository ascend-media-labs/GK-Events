import type React from "react";

export function DjStageTruss() {
  return (
    <div className="relative w-full overflow-hidden select-none z-30" aria-hidden="true">
      {/* ── METALLIC DJ STAGE TRUSS RIG ── */}
      <div className="relative w-full bg-gradient-to-b from-[#181926] via-[#10111d] to-[#070811] pt-1 pb-2 border-b border-amber-500/20 shadow-md">
        
        {/* Overhead Steel Truss Cross-Bracing Graphic */}
        <div className="absolute inset-x-0 top-0 h-1.5 bg-[repeating-linear-gradient(45deg,#2e314d,#2e314d_8px,#141524_8px,#141524_16px)] opacity-70 border-b border-white/10" />

        {/* 5 DJ Moving-Head Fixture Mounts */}
        <div className="max-w-[1288px] mx-auto px-4 sm:px-8 flex items-center justify-around sm:justify-between pt-1">
          
          {/* Light 1: Amber Gold */}
          <div className="relative flex flex-col items-center">
            <div className="h-2 w-3.5 rounded-t bg-slate-700 border-t border-slate-500" />
            <div className="h-3.5 w-6 sm:h-4 sm:w-7 rounded-full bg-gradient-to-b from-slate-800 to-slate-950 border border-amber-400/90 shadow-[0_0_14px_rgba(245,158,11,0.9)] flex items-center justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-ping" />
            </div>
          </div>

          {/* Light 2: Electric Cyan */}
          <div className="relative flex flex-col items-center">
            <div className="h-2 w-3.5 rounded-t bg-slate-700 border-t border-slate-500" />
            <div className="h-3.5 w-6 sm:h-4 sm:w-7 rounded-full bg-gradient-to-b from-slate-800 to-slate-950 border border-cyan-400/90 shadow-[0_0_14px_rgba(6,182,212,0.9)] flex items-center justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
            </div>
          </div>

          {/* Light 3: Center Royal Magenta / Laser */}
          <div className="relative flex flex-col items-center">
            <div className="h-2.5 w-4 rounded-t bg-slate-700 border-t border-slate-500" />
            <div className="h-4 w-7 sm:h-4.5 sm:w-8 rounded-full bg-gradient-to-b from-slate-800 to-slate-950 border border-pink-400/90 shadow-[0_0_18px_rgba(236,72,153,0.95)] flex items-center justify-center">
              <span className="h-2 w-2 rounded-full bg-pink-400 animate-ping" />
            </div>
          </div>

          {/* Light 4: Royal Violet */}
          <div className="relative flex flex-col items-center">
            <div className="h-2 w-3.5 rounded-t bg-slate-700 border-t border-slate-500" />
            <div className="h-3.5 w-6 sm:h-4 sm:w-7 rounded-full bg-gradient-to-b from-slate-800 to-slate-950 border border-purple-400/90 shadow-[0_0_14px_rgba(168,85,247,0.9)] flex items-center justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-ping" />
            </div>
          </div>

          {/* Light 5: Sunset Orange / Gold */}
          <div className="relative flex flex-col items-center">
            <div className="h-2 w-3.5 rounded-t bg-slate-700 border-t border-slate-500" />
            <div className="h-3.5 w-6 sm:h-4 sm:w-7 rounded-full bg-gradient-to-b from-slate-800 to-slate-950 border border-orange-400/90 shadow-[0_0_14px_rgba(249,115,22,0.9)] flex items-center justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-ping" />
            </div>
          </div>

        </div>
      </div>

      {/* ── ANIMATED STAGE SPOTLIGHT BEAMS (SWAYING CONICAL RAYS) ── */}
      <div className="pointer-events-none absolute inset-x-0 top-full h-44 sm:h-64 overflow-hidden select-none z-10 opacity-60">
        
        {/* Beam 1: Amber Cone */}
        <div
          className="anim-dj-beam-1 absolute top-0 left-[8%] sm:left-[12%] w-36 sm:w-60 h-44 sm:h-64"
          style={{
            background: "linear-gradient(180deg, rgba(245,158,11,0.5) 0%, rgba(245,158,11,0.12) 40%, transparent 85%)",
            clipPath: "polygon(48% 0%, 52% 0%, 100% 100%, 0% 100%)",
          }}
        />

        {/* Beam 2: Cyan Cone */}
        <div
          className="anim-dj-beam-2 absolute top-0 left-[28%] sm:left-[32%] w-32 sm:w-56 h-44 sm:h-64"
          style={{
            background: "linear-gradient(180deg, rgba(6,182,212,0.45) 0%, rgba(6,182,212,0.1) 40%, transparent 85%)",
            clipPath: "polygon(48% 0%, 52% 0%, 100% 100%, 0% 100%)",
          }}
        />

        {/* Beam 3: Magenta Center Laser Cone */}
        <div
          className="anim-dj-beam-3 absolute top-0 left-1/2 -translate-x-1/2 w-40 sm:w-72 h-48 sm:h-72"
          style={{
            background: "linear-gradient(180deg, rgba(236,72,153,0.5) 0%, rgba(236,72,153,0.12) 45%, transparent 88%)",
            clipPath: "polygon(48% 0%, 52% 0%, 100% 100%, 0% 100%)",
          }}
        />

        {/* Beam 4: Royal Violet Cone */}
        <div
          className="anim-dj-beam-4 absolute top-0 right-[28%] sm:right-[32%] w-32 sm:w-56 h-44 sm:h-64"
          style={{
            background: "linear-gradient(180deg, rgba(168,85,247,0.45) 0%, rgba(168,85,247,0.1) 40%, transparent 85%)",
            clipPath: "polygon(48% 0%, 52% 0%, 100% 100%, 0% 100%)",
          }}
        />

        {/* Beam 5: Sunset Orange Cone */}
        <div
          className="anim-dj-beam-5 absolute top-0 right-[8%] sm:right-[12%] w-36 sm:w-60 h-44 sm:h-64"
          style={{
            background: "linear-gradient(180deg, rgba(249,115,22,0.5) 0%, rgba(249,115,22,0.12) 40%, transparent 85%)",
            clipPath: "polygon(48% 0%, 52% 0%, 100% 100%, 0% 100%)",
          }}
        />

      </div>
    </div>
  );
}
