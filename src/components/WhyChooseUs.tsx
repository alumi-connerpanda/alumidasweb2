import React from 'react';
import { WHY_CHOOSE_US_POINTS } from '../data/companyData';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-construction-lines relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold text-[#0B1340] uppercase tracking-wider mb-2">
            Why ALU MIDAS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Built on Integrity, Technical Discipline & Proven Systems
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Our reputation has been built over 25+ years in Homagama by putting quality workmanship and long-term reliability ahead of rapid, mass-volume output.
          </p>
        </div>

        {/* 8 Distinctive Key Strengths in Asymmetric Bento / Refined Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_POINTS.map((item) => (
            <div
              key={item.number}
              className="p-6 bg-slate-50/70 border border-slate-200 rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono font-bold text-[#0B1340] mb-3">
                  {item.number}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-200/60 text-[11px] font-semibold text-slate-500">
                ALU MIDAS Standard
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
