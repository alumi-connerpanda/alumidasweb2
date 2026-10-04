import React from 'react';
import { ShieldCheck, Layers, Ruler, CheckCircle2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

export const Overview: React.FC = () => {
  return (
    <section id="overview" className="py-20 bg-construction-lines relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-[#0B1340] uppercase tracking-wider mb-2">
            Company Overview
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
            25+ Years of Proven Aluminium Fabrication & Architectural Solutions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Based in Homagama, Sri Lanka, <strong>ALU MIDAS (PVT) LTD</strong> brings over two and a half decades of hands-on technical craftsmanship to residential, commercial, and architectural projects. Our guiding principle is simple and uncompromising: <em>Quality over quantity</em>.
          </p>
        </div>

        {/* Distinctive Clarity Card: What Custom Means at ALU MIDAS */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 sm:p-8 mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#FFCD00]" />
          <div className="max-w-4xl">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Our Technical Standard
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              Manufacturer-Specified Systems. Safe, Reliable Execution.
            </h3>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-6">
              We fabricate using certified, manufacturer-specified aluminium profile systems and approved production standards. We provide tailored, custom-built architectural solutions for your space, while strictly adhering to proven structural systems.
            </p>

            <div className="pt-4 border-t border-slate-200/80">
              <div className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">
                How we define "Custom" at ALU MIDAS:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="flex items-start gap-2.5 text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#0B1340] shrink-0 mt-0.5" />
                  <span>Custom doors and window configurations</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#0B1340] shrink-0 mt-0.5" />
                  <span>Custom architectural layouts & openings</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#0B1340] shrink-0 mt-0.5" />
                  <span>Precise millimeter-accurate dimensions</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#0B1340] shrink-0 mt-0.5" />
                  <span>Combinations of manufacturer-specified profiles</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#0B1340] shrink-0 mt-0.5" />
                  <span>Collaborative solutions with clients & architects</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#0B1340] shrink-0 mt-0.5" />
                  <span>Safety, wind-load & durability assessments</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Strengths of our Operating Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
            <div className="w-10 h-10 rounded bg-[#0B1340]/5 flex items-center justify-center text-[#0B1340] mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Safety & Durability</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              We never compromise structural integrity for shortcut solutions. Every frame, track, fastener, and glass fixing is chosen to endure weather and daily operation reliably.
            </p>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
            <div className="w-10 h-10 rounded bg-[#0B1340]/5 flex items-center justify-center text-[#0B1340] mb-4">
              <Ruler className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Architectural Accuracy</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Clean mitred joints, seamless corner seals, smooth-gliding tracks, and flush finishes. We take pride in the subtle millimeter details that define high-calibre architectural work.
            </p>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
            <div className="w-10 h-10 rounded bg-[#0B1340]/5 flex items-center justify-center text-[#0B1340] mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Architect Collaboration</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              We welcome complex architectural drawings and concepts. When a design requires practical refinement, we propose the closest viable alternative to preserve the aesthetic intent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Overview;
