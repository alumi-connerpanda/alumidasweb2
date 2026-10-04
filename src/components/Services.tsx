import React, { useState } from 'react';
import { SERVICES_DATA, FINISH_OPTIONS, ServiceCategory, FinishOption } from '../data/companyData';
import { ArrowUpRight, Sparkles, Eye } from 'lucide-react';
import ServiceDetailModal from './ServiceDetailModal';
import FinishDetailModal from './FinishDetailModal';

interface ServicesProps {
  onOpenQuote: (serviceTitle?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceCategory | null>(null);
  const [selectedFinish, setSelectedFinish] = useState<FinishOption | null>(null);

  return (
    <section id="services" className="py-20 bg-construction-lines relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-[#0B1340] uppercase tracking-wider mb-2">
            Specialized Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Our Architectural & Fabrication Services
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Engineered with manufacturer-specified aluminium profile systems for long-term safety, durability, and practical elegance. Click any category below to view detailed specifications.
          </p>
        </div>

        {/* 6-Card Grid Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group bg-white border border-slate-200/90 rounded-xl overflow-hidden shadow-xs hover:shadow-md hover:border-[#0B1340]/40 transition-all duration-200 flex flex-col justify-between cursor-pointer"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                <img
                  src={service.imageSrc}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1340]/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Floating Category Label */}
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-xs group-hover:bg-[#FFCD00] group-hover:text-[#0B1340] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0B1340] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-amber-800 font-medium mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0B1340]">
                  <span>View Details & Specifications</span>
                  <span className="text-[11px] text-slate-400 font-normal">Click to open</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Section: Material Refinement & Aluminium Finish Options */}
        <div className="bg-white border border-slate-200 rounded-xl p-8 sm:p-10 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div className="max-w-2xl">
              <div className="text-xs font-bold text-[#0B1340] uppercase tracking-wider mb-1.5">
                Material Refinement
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Aluminium Finish Options
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                We provide an extensive range of manufacturer-specified finishes and surface treatments. <strong>Click any finish option below</strong> to see a sample photograph of doors and windows crafted in that finish.
              </p>
            </div>

            <div className="text-xs font-semibold text-[#0B1340] bg-slate-50 border border-slate-200 px-3 py-2 rounded-md self-start sm:self-auto shrink-0 flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-[#FFCD00]" />
              <span>Click to view window/door sample</span>
            </div>
          </div>

          {/* Interactive Finish Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FINISH_OPTIONS.map((finish, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedFinish(finish)}
                className="group p-5 border border-slate-200 rounded-xl hover:border-[#0B1340]/50 hover:shadow-md transition-all bg-slate-50/50 hover:bg-white flex flex-col justify-between cursor-pointer relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span
                        className="w-6 h-6 rounded-md shadow-xs border border-black/15 shrink-0 group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: finish.colorCode }}
                      />
                      <div>
                        <div className="text-sm font-bold text-slate-900 group-hover:text-[#0B1340] transition-colors">
                          {finish.name}
                        </div>
                        <div className="text-[11px] font-medium text-slate-500">
                          {finish.subtitle}
                        </div>
                      </div>
                    </div>

                    <span className="p-1.5 rounded bg-white group-hover:bg-[#FFCD00] text-slate-400 group-hover:text-[#0B1340] transition-colors shadow-2xs">
                      <Eye className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {finish.description}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                  <span>Manufacturer-Specified</span>
                  <span className="text-[#0B1340] group-hover:underline flex items-center gap-1 font-bold">
                    <span>View Sample</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-xs text-slate-500 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Real material sample swatches available during project consultation in Homagama and onsite.</span>
          </div>
        </div>
      </div>

      {/* Pop-up Window on Service Card Click */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenContact={onOpenQuote}
      />

      {/* Pop-up Window on Finish Option Click (Displays Window/Door Sample) */}
      <FinishDetailModal
        finish={selectedFinish}
        onClose={() => setSelectedFinish(null)}
        onOpenContact={onOpenQuote}
      />
    </section>
  );
};
export default Services;
