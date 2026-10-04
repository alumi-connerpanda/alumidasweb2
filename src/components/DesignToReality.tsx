import React from 'react';
import { PenTool, CheckCircle, ArrowRight, ShieldCheck, Ruler, Wrench } from 'lucide-react';

interface DesignToRealityProps {
  onOpenQuote: () => void;
}

export const DesignToReality: React.FC<DesignToRealityProps> = ({ onOpenQuote }) => {
  const steps = [
    {
      step: '01',
      title: 'Site Inspection & Design Consultation',
      description:
        'We provide complimentary on-site technical inspections, consult directly with clients and project architects, and review drawings to formulate accurate project quotations.',
      icon: PenTool,
    },
    {
      step: '02',
      title: 'Practical System Evaluation',
      description:
        'We evaluate safety, wind resistance, structural practicality, and weatherproofing, mapping your design to proven, manufacturer-specified aluminium systems.',
      icon: ShieldCheck,
    },
    {
      step: '03',
      title: 'Precision Workshop Fabrication',
      description:
        'Using safe, approved production techniques, profiles are accurately cut, mitred, joined, and finished to exact millimeter dimensions in our Homagama workshop.',
      icon: Ruler,
    },
    {
      step: '04',
      title: 'Reliable Site Installation',
      description:
        'Our experienced team handles on-site mounting, alignment, sealing, and testing to ensure effortless operation and clean architectural lines that last.',
      icon: Wrench,
    },
  ];

  return (
    <section className="py-20 bg-construction-lines relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Core Message */}
          <div className="lg:col-span-5">
            <div className="text-xs font-bold text-[#0B1340] uppercase tracking-wider mb-2">
              Design to Reality
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
              Your Design.{' '}
              <span className="text-[#0B1340]">Our Craftsmanship.</span>
            </h2>

            <p className="text-base text-slate-700 font-medium leading-relaxed mb-4">
              Bring us your idea, drawing or architectural concept. We work with you to develop a practical solution using reliable, manufacturer-specified aluminium systems and suitable materials.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              We listen to the client, understand the design intent, and carefully consider safety, functionality, durability and long-term reliability before turning the concept into a finished installation.
            </p>

            {/* Crucial Distinguishing Highlight Card */}
            <div className="p-4 bg-slate-50 border-l-4 border-[#0B1340] rounded-r-md text-xs text-slate-800 leading-relaxed mb-8">
              <span className="font-bold text-[#0B1340]">Please Note:</span> Custom does not mean custom-made aluminium profiles. It means custom-designed solutions built using proven, manufacturer-specified systems.
            </div>

            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2.5 px-6 py-3 text-xs font-bold text-white bg-[#0B1340] hover:bg-[#15236b] active:scale-[0.99] rounded transition-all shadow-xs cursor-pointer"
            >
              <span>Discuss Your Architectural Drawing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Column: 4-Step Process Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {steps.map((st, index) => {
              const IconComp = st.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-slate-50 border border-slate-200 rounded-lg relative hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/50">
                      Step {st.step}
                    </span>
                    <IconComp className="w-5 h-5 text-[#0B1340]" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{st.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{st.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default DesignToReality;
