import React from 'react';
import { COMPANY_DETAILS } from '../data/companyData';
import { Phone, MessageSquare, Mail, MapPin, Clock, ExternalLink, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
  onOpenContactModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenContactModal }) => {
  return (
    <section id="contact" className="py-20 bg-construction-lines relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-[#0B1340] uppercase tracking-wider mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Contact & Location Details
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Reach out directly by phone, WhatsApp, or email. We are ready to review your architectural drawings, discuss custom dimensions, or arrange on-site consultations in Homagama and surrounding areas.
          </p>
        </div>

        {/* Polished Commitment Banner */}
        <div className="mb-10 p-5 bg-white border border-slate-200/90 rounded-xl shadow-2xs flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-lg bg-[#FFCD00] text-[#0B1340] flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#0B1340]">
              Client & Architect Consultation
            </div>
            <p className="text-sm font-semibold text-slate-900 mt-0.5">
              We provide complimentary on-site technical inspections, collaborative consultations with clients and architects, and transparent project quotations —{' '}
              <button
                type="button"
                onClick={onOpenContactModal}
                className="underline font-bold text-[#0B1340] hover:text-[#15236b] cursor-pointer inline"
              >
                contact us
              </button>{' '}
              to schedule a visit or discuss your requirements.
            </p>
          </div>
        </div>

        {/* 4 Direct Contact Cards - Location Card is fully interactive and opens Google Maps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {/* Telephone */}
          <a
            href={`tel:${COMPANY_DETAILS.phoneTel}`}
            className="p-6 bg-white border border-slate-200/90 rounded-xl hover:border-[#0B1340] hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#0B1340]/5 text-[#0B1340] flex items-center justify-center mb-4 group-hover:bg-[#0B1340] group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Telephone
              </div>
              <div className="text-lg font-extrabold text-slate-900 mt-1 tabular-nums">
                {COMPANY_DETAILS.phone}
              </div>
              <p className="text-xs text-slate-500 mt-1.5">Direct line for fabrication inquiries</p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 text-xs font-bold text-[#0B1340] flex items-center gap-1.5">
              <span>Click to Call</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={COMPANY_DETAILS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-white border border-emerald-200/90 rounded-xl hover:border-emerald-600 hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                WhatsApp
              </div>
              <div className="text-lg font-extrabold text-slate-900 mt-1 tabular-nums">
                {COMPANY_DETAILS.whatsapp}
              </div>
              <p className="text-xs text-slate-500 mt-1.5">Instant chat & photo sharing</p>
            </div>
            <div className="mt-5 pt-3 border-t border-emerald-100 text-xs font-bold text-emerald-700 flex items-center gap-1.5">
              <span>Chat on WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${COMPANY_DETAILS.email}`}
            className="p-6 bg-white border border-slate-200/90 rounded-xl hover:border-[#0B1340] hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#0B1340]/5 text-[#0B1340] flex items-center justify-center mb-4 group-hover:bg-[#0B1340] group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Email
              </div>
              <div className="text-sm font-extrabold text-slate-900 mt-1 break-all">
                {COMPANY_DETAILS.email}
              </div>
              <p className="text-xs text-slate-500 mt-1.5">Send drawings, specifications & RFQs</p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 text-xs font-bold text-[#0B1340] flex items-center gap-1.5">
              <span>Send Email</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>

          {/* Location Card - Opens Google Map on click */}
          <a
            href={COMPANY_DETAILS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-white border border-[#0B1340]/30 hover:border-[#0B1340] rounded-xl hover:shadow-md transition-all group flex flex-col justify-between cursor-pointer"
            title="Open Homagama workshop location in Google Maps"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#FFCD00] text-[#0B1340] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Location
              </div>
              <div className="text-sm font-bold text-slate-900 mt-1 leading-snug">
                {COMPANY_DETAILS.address.line1}
              </div>
              <p className="text-xs text-slate-500 mt-0.5">Homagama, Sri Lanka</p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 text-xs font-bold text-[#0B1340] flex items-center gap-1.5">
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>

        {/* Detailed Location & Social Details Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Interactive Map Card */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs flex flex-col justify-between">
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#0B1340]" />
                  <h3 className="text-lg font-bold text-slate-900">
                    Workshop & Office Location
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                  Homagama
                </span>
              </div>

              <div className="text-sm text-slate-700 leading-relaxed mb-6">
                <strong className="text-slate-900">{COMPANY_DETAILS.name}</strong>
                <br />
                {COMPANY_DETAILS.address.line1},
                <br />
                {COMPANY_DETAILS.address.city}, Sri Lanka.
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-600 mb-6 bg-slate-50 p-3 rounded border border-slate-200">
                <Clock className="w-4 h-4 text-[#0B1340] shrink-0" />
                <span>Working Hours: {COMPANY_DETAILS.workingHours}</span>
              </div>

              {/* Direct Google Maps Action Button */}
              <a
                href={COMPANY_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 text-xs font-bold text-white bg-[#0B1340] hover:bg-[#15236b] rounded-lg shadow-xs transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#FFCD00]" />
                <span>Open in Google Maps (Get Directions)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: Architect Collaboration & Official Facebook Links */}
          <div className="lg:col-span-5 space-y-6">
            {/* Architect Drawing Submission */}
            <div className="p-6 sm:p-8 bg-[#0B1340] text-white rounded-xl shadow-xs">
              <div className="text-xs font-bold text-[#FFCD00] uppercase tracking-wider mb-2">
                Architectural Inquiries
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Share Drawings for Review
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                We work directly with architects and homeowners across Sri Lanka. Send your drawings (PDF / DWG) or concept sketches for practical buildability and manufacturer-specified system recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${COMPANY_DETAILS.email}?subject=Architectural%20Drawing%20Submission%20-%20ALU%20MIDAS`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-[#0B1340] bg-[#FFCD00] hover:bg-[#ffda33] rounded transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Drawings</span>
                </a>
                <a
                  href={COMPANY_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Send via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Official Facebook Page Card */}
            <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-xs flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Official Facebook Page</div>
                  <p className="text-xs text-slate-500">View real worksite updates and ongoing fabrications</p>
                </div>
              </div>
              <a
                href={COMPANY_DETAILS.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-[#1877F2] hover:bg-[#166fe5] rounded transition-colors"
              >
                <span>Visit Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
