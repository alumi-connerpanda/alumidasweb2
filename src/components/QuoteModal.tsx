import React from 'react';
import { COMPANY_DETAILS } from '../data/companyData';
import { X, Phone, MessageSquare, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import AluMidasLogo from './AluMidasLogo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  title = 'Get in Touch with ALU MIDAS',
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full bg-white rounded-xl shadow-2xl overflow-hidden p-6 sm:p-8 border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-4 pb-4 border-b border-slate-100">
          <div className="mb-3">
            <AluMidasLogo height={36} />
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Homagama, Sri Lanka · 25+ Years Experience · Quality Over Quantity
          </p>
        </div>

        {/* Complimentary Site Visit & Consultation Note */}
        <div className="mb-5 p-3 bg-amber-50/70 border border-amber-200/80 rounded-lg text-xs text-slate-800 flex items-start gap-2.5">
          <Clock className="w-4 h-4 text-[#0B1340] shrink-0 mt-0.5" />
          <span>
            <strong>Free Consultation & Quotes:</strong> We provide complimentary on-site technical inspections, consult directly with clients and architects, and deliver transparent project quotations.
          </span>
        </div>

        {/* Contact Details List */}
        <div className="space-y-3.5 mb-6">
          {/* Telephone */}
          <a
            href={`tel:${COMPANY_DETAILS.phoneTel}`}
            className="flex items-center justify-between p-3.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-[#0B1340] text-[#FFCD00] flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  Telephone / Direct Call
                </div>
                <div className="text-base font-bold text-slate-900 tabular-nums">
                  {COMPANY_DETAILS.phone}
                </div>
              </div>
            </div>
            <span className="text-xs font-semibold text-[#0B1340] bg-white border border-slate-200 px-3 py-1.5 rounded group-hover:bg-[#0B1340] group-hover:text-white transition-colors">
              Call Now
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href={COMPANY_DETAILS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 bg-emerald-50/50 hover:bg-emerald-50 border border-emerald-200 rounded-lg transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-800">
                  WhatsApp Messaging
                </div>
                <div className="text-base font-bold text-slate-900 tabular-nums">
                  {COMPANY_DETAILS.whatsapp}
                </div>
              </div>
            </div>
            <span className="text-xs font-semibold text-emerald-800 bg-white border border-emerald-300 px-3 py-1.5 rounded group-hover:bg-emerald-600 group-hover:text-white transition-colors flex items-center gap-1">
              <span>Chat</span>
              <ExternalLink className="w-3 h-3" />
            </span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${COMPANY_DETAILS.email}`}
            className="flex items-center justify-between p-3.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-[#0B1340] text-white flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  Email Address
                </div>
                <div className="text-sm font-bold text-slate-900 break-all">
                  {COMPANY_DETAILS.email}
                </div>
              </div>
            </div>
            <span className="text-xs font-semibold text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded group-hover:bg-[#0B1340] group-hover:text-white transition-colors">
              Send Email
            </span>
          </a>

          {/* Address / Google Maps Link */}
          <a
            href={COMPANY_DETAILS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-[#0B1340] text-[#FFCD00] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  Workshop Address
                </div>
                <div className="text-xs font-bold text-slate-900">
                  {COMPANY_DETAILS.address.line1}, {COMPANY_DETAILS.address.city}
                </div>
                <div className="text-[11px] text-slate-500">Sri Lanka</div>
              </div>
            </div>
            <span className="text-xs font-semibold text-[#0B1340] bg-white border border-slate-200 px-3 py-1.5 rounded group-hover:bg-[#0B1340] group-hover:text-white transition-colors flex items-center gap-1">
              <span>View Map</span>
              <ExternalLink className="w-3 h-3" />
            </span>
          </a>
        </div>

        {/* Operating Hours & Facebook Row */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#0B1340]" />
            <span>{COMPANY_DETAILS.workingHours}</span>
          </div>

          <a
            href={COMPANY_DETAILS.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-[#1877F2] hover:underline"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>Visit Facebook Page</span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default ContactModal;
