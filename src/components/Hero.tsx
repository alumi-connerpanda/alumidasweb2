import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#0A1138]">
      {/* High-Fidelity Architectural Visual Backdrop with Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_architectural_aluminium_1791129172749.jpg"
          alt="ALU MIDAS architectural aluminium and glass facade"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Measured Scrim for optimal text contrast and architectural depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1340]/95 via-[#0B1340]/80 to-[#0B1340]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1340] via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-3xl">
          {/* Subtle Trust Line with Typographic Separator (Zero-Pill Discipline) */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400/90 mb-5">
            <span>Homagama, Sri Lanka</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span className="tabular-nums">25+ Years Experience</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span>Manufacturer-Specified Systems</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 text-balance">
            Elegant Aluminium.{' '}
            <span className="text-[#FFCD00]">Exceptional Craftsmanship.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed mb-10 max-w-2xl">
            Custom aluminium fabrication and architectural solutions for interior and exterior projects.
            Built with manufacturer-specified profiles and uncompromising attention to safety, fit, and long-term durability.
          </p>

          {/* CTA Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm font-bold text-[#0B1340] bg-[#FFCD00] hover:bg-[#ffda33] active:scale-[0.99] rounded transition-all shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#gallery"
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white hover:text-[#FFCD00] border border-white/30 hover:border-[#FFCD00]/70 rounded transition-all bg-white/5 hover:bg-white/10 backdrop-blur-xs whitespace-nowrap"
            >
              View Our Work
            </a>
          </div>

          {/* Core Philosophy Callout */}
          <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6 text-slate-300">
            <div>
              <div className="text-xs font-medium text-slate-400">Core Philosophy</div>
              <div className="text-base font-semibold text-white mt-1">Quality Over Quantity</div>
            </div>
            <div>
              <div className="text-xs font-medium text-slate-400">Engineering Approach</div>
              <div className="text-base font-semibold text-white mt-1">Manufacturer-Specified Systems</div>
            </div>
            <div>
              <div className="text-xs font-medium text-slate-400">Consultation & Quotes</div>
              <div className="text-base font-semibold text-white mt-1">Free Site Visits & Quotations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#overview"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-white transition-colors flex flex-col items-center gap-1"
        aria-label="Scroll to company overview"
      >
        <span className="text-[11px] tracking-wider uppercase">Explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
export default Hero;
