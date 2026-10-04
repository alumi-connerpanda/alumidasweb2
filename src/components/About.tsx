import React from 'react';
import { COMPANY_DETAILS } from '../data/companyData';
import { MapPin, Phone, MessageSquare, Mail, Award, Check } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-construction-lines relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual & Trust Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
              <img
                src="/src/assets/images/hero_architectural_aluminium_1791129172749.jpg"
                alt="ALU MIDAS fabrication works"
                className="w-full aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-6 bg-white border-t border-slate-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0B1340]">
                    Established Heritage
                  </div>
                  <a
                    href={COMPANY_DETAILS.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 px-2 py-0.5 rounded border border-amber-200 transition-colors inline-flex items-center gap-1"
                    title="Open Homagama location in Google Maps"
                  >
                    <span>Homagama, Sri Lanka</span>
                    <MapPin className="w-3 h-3 text-[#0B1340]" />
                  </a>
                </div>
                <div className="text-xl font-extrabold text-slate-900 mb-1">
                  ALU MIDAS (PVT) LTD
                </div>
                <div className="text-xs text-slate-500">
                  Aluminium Fabrication & Architectural Solutions
                </div>
              </div>
            </div>

            {/* Inset Credential Badge (Unboxed text with border, no fake percentage) */}
            <div className="mt-4 p-4 bg-white border border-slate-200 rounded-lg flex items-center gap-4">
              <div className="w-12 h-12 rounded bg-[#0B1340] text-[#FFCD00] flex items-center justify-center font-extrabold text-lg shrink-0">
                25+
              </div>
              <div className="text-xs text-slate-700">
                <div className="font-bold text-slate-900 text-sm">Years of Field Experience</div>
                <div>Serving residential & commercial projects in Homagama and across Sri Lanka</div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7">
            <div className="text-xs font-bold text-[#0B1340] uppercase tracking-wider mb-2">
              About Our Company
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
              Dedicated to Practical Engineering & Refined Finishes
            </h2>

            <p className="text-base text-slate-700 leading-relaxed mb-4">
              <strong>ALU MIDAS (PVT) LTD</strong> is an established aluminium fabrication and architectural solutions company headquartered in Homagama, Sri Lanka. Over 25+ years, we have built a respected reputation working side-by-side with homeowners, builders, and architects.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              While we are not an architecture firm or engineering consultancy, we serve as the vital technical fabrication partner who brings architectural concepts into solid, functional reality. We evaluate drawings for buildability, select appropriate manufacturer-specified profile systems, and execute installations that respect both aesthetic intent and everyday durability.
            </p>

            {/* Core Tenets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-start gap-2.5 text-xs text-slate-700 bg-white p-3 rounded border border-slate-200/70">
                <Check className="w-4 h-4 text-[#0B1340] shrink-0 mt-0.5" />
                <span>25+ years of practical hands-on fabrication</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700 bg-white p-3 rounded border border-slate-200/70">
                <Check className="w-4 h-4 text-[#0B1340] shrink-0 mt-0.5" />
                <span>Collaboration with architects & designers</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700 bg-white p-3 rounded border border-slate-200/70">
                <Check className="w-4 h-4 text-[#0B1340] shrink-0 mt-0.5" />
                <span>Manufacturer-specified profile standards</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-700 bg-white p-3 rounded border border-slate-200/70">
                <Check className="w-4 h-4 text-[#0B1340] shrink-0 mt-0.5" />
                <span>Responsive after-service support</span>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
              <a
                href={`tel:${COMPANY_DETAILS.phoneTel}`}
                className="inline-flex items-center gap-2 hover:text-[#0B1340] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#0B1340]" />
                <span className="tabular-nums">{COMPANY_DETAILS.phone}</span>
              </a>
              <span className="text-slate-300">·</span>
              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-emerald-700 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp: {COMPANY_DETAILS.whatsapp}</span>
              </a>
              <span className="text-slate-300">·</span>
              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="inline-flex items-center gap-2 hover:text-[#0B1340] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#0B1340]" />
                <span>{COMPANY_DETAILS.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
