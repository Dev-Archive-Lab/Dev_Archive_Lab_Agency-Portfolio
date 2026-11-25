import React from 'react';
import { COMPANY_INFO } from '../../data/company';

export default function ToolsMarquee() {
  const toolsList = COMPANY_INFO.tools;

  return (
    <section className="py-14 border-y border-white/10 bg-surface-subtle/70 overflow-hidden relative">
      {/* Edge gradient mask for smooth fade out */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-slateText-dim">
          Modern Frameworks, Cloud Platforms &amp; Automation Engines
        </span>
      </div>

      {/* Infinite Marquee Track (doubled for seamless loop) */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-4 sm:gap-6">
        {[...toolsList, ...toolsList].map((tool, index) => (
          <div
            key={`${tool.name}-${index}`}
            className="flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-surface-card border border-white/10 hover:border-cyanAccent/40 hover:bg-surface-elevated transition-colors shrink-0 shadow-sm group select-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyanAccent group-hover:bg-gold transition-colors" />
            <span className="text-sm font-semibold text-white tracking-tight">
              {tool.name}
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-white/5 text-slateText-dim group-hover:text-cyanAccent transition-colors">
              {tool.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
