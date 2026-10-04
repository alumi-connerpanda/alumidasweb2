import React from 'react';
import { FinishOption } from '../data/companyData';
import { X, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

interface FinishDetailModalProps {
  finish: FinishOption | null;
  onClose: () => void;
  onOpenContact: (title?: string) => void;
}

export const FinishDetailModal: React.FC<FinishDetailModalProps> = ({
  finish,
  onClose,
  onOpenContact,
}) => {
  if (!finish) return null;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello ALU MIDAS, I would like to inquire about doors/windows with ${finish.name} (${finish.subtitle}) finish.`
    );
    window.open(`https://wa.me/94772186710?text=${text}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col"
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

        {/* Window/Door Sample Image Preview */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-950 overflow-hidden">
          <img
            src={finish.sampleImage}
            alt={finish.sampleTitle}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1340]/90 via-transparent to-black/20" />

          {/* Floating Sample Tag */}
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <div className="flex items-center gap-2 mb-1.5">
              <span
                className="w-3.5 h-3.5 rounded-full border border-white/60 shadow-xs"
                style={{ backgroundColor: finish.colorCode }}
              />
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                Aluminium Finish Sample Preview
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              {finish.name}
            </h3>
            <p className="text-xs text-slate-200 mt-0.5">
              {finish.sampleTitle}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Finish Category</span>
              <div className="text-sm font-bold text-slate-900">{finish.subtitle}</div>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Standard</span>
              <div className="text-xs font-semibold text-[#0B1340]">Manufacturer-Specified</div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-[#0B1340] uppercase tracking-wider mb-1.5">
              Finish Performance & Aesthetic Details
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {finish.description}
            </p>
          </div>

          <div className="p-3 bg-amber-50/60 border border-amber-200/70 rounded-lg flex items-start gap-2.5 text-xs text-amber-900">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              Real physical powder-coated and anodized finish samples are available for tactile inspection at our Homagama workshop or during on-site consultations.
            </span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Applicable to custom doors, windows, and architectural framing.
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleWhatsApp}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded transition-colors cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>Inquire via WhatsApp</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenContact(`Finish Inquiry: ${finish.name}`);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-bold text-white bg-[#0B1340] hover:bg-[#15236b] rounded transition-colors cursor-pointer"
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
export default FinishDetailModal;
