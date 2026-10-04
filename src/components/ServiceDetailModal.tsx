import React from 'react';
import { ServiceCategory, COMPANY_DETAILS } from '../data/companyData';
import { X, Check, Phone, MessageSquare, ArrowRight } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceCategory | null;
  onClose: () => void;
  onOpenContact: (title?: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenContact,
}) => {
  if (!service) return null;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello ALU MIDAS, I would like to inquire about your ${service.title} services. Please let me know how we can proceed.`
    );
    window.open(`https://wa.me/94772186710?text=${text}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-white rounded-xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1">
          {/* Header Image */}
          <div className="relative h-64 sm:h-72 w-full bg-slate-900">
            <img
              src={service.imageSrc}
              alt={service.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1340] via-[#0B1340]/40 to-transparent" />
            <div className="absolute bottom-5 left-6 right-6 text-white">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1">
                Alu Midas Capability Details
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-xl">
                {service.subtitle}
              </p>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Description */}
            <div>
              <h4 className="text-xs font-bold text-[#0B1340] uppercase tracking-wider mb-2">
                Overview & Production Standard
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Key Points */}
            <div>
              <h4 className="text-xs font-bold text-[#0B1340] uppercase tracking-wider mb-3">
                Key Craftsmanship Highlights
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded border border-slate-200/70">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications if available */}
            {service.applications && (
              <div>
                <h4 className="text-xs font-bold text-[#0B1340] uppercase tracking-wider mb-2.5">
                  Applications & Formats
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.applications.map((app, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium text-slate-800 bg-slate-100 py-1 px-3 rounded border border-slate-200"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Glass Types if available */}
            {service.glassTypes && (
              <div>
                <h4 className="text-xs font-bold text-[#0B1340] uppercase tracking-wider mb-2.5">
                  Available Glass Types
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {service.glassTypes.map((gt, i) => (
                    <div key={i} className="text-xs text-slate-700 bg-slate-50 p-2 rounded border border-slate-200/60 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0B1340]" />
                      <span>{gt}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Ceiling Types if available */}
            {service.ceilingTypes && (
              <div>
                <h4 className="text-xs font-bold text-[#0B1340] uppercase tracking-wider mb-2.5">
                  Supported Ceiling Systems
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.ceilingTypes.map((ct, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium text-slate-800 bg-slate-100 py-1 px-3 rounded border border-slate-200"
                    >
                      {ct}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Finishes if available */}
            {service.finishes && (
              <div>
                <h4 className="text-xs font-bold text-[#0B1340] uppercase tracking-wider mb-2.5">
                  Aluminium Finish Options
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {service.finishes.map((f, i) => (
                    <div key={i} className="text-xs text-slate-700 bg-slate-50 p-2 rounded border border-slate-200/60 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Manufactured with certified, manufacturer-specified profiles.
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleWhatsApp}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Inquiry</span>
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenContact(`Inquiry: ${service.title}`);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2 text-xs font-bold text-white bg-[#0B1340] hover:bg-[#15236b] rounded transition-colors"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceDetailModal;
