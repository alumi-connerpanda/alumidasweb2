import React, { useState } from 'react';
import { GALLERY_ITEMS, ProjectItem, COMPANY_DETAILS } from '../data/companyData';
import { Maximize2, X, ExternalLink, ArrowUpRight } from 'lucide-react';

interface GalleryProps {
  onOpenQuote: () => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenQuote }) => {
  const [selectedItem, setSelectedItem] = useState<ProjectItem | null>(null);

  const handleFacebookPreview = () => {
    window.open(COMPANY_DETAILS.facebookUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="gallery" className="py-20 bg-construction-lines relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-[#0B1340] uppercase tracking-wider mb-2">
              Portfolio & Fabrication
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Our Work
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Showcasing practical craftsmanship across architectural aluminium installations, doors, windows, glass partitions, facades, and ceiling systems. Click any card below to view details.
            </p>
          </div>

          {/* Highlighted 'Preview Worksite Photo' Button leading to official Facebook */}
          <div className="shrink-0">
            <button
              onClick={handleFacebookPreview}
              className="inline-flex items-center gap-2.5 px-6 py-3 text-xs sm:text-sm font-bold text-[#0B1340] bg-[#FFCD00] hover:bg-[#ffda33] active:scale-[0.99] border-2 border-[#0B1340] rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
              title="View actual project updates and worksite photographs on our official Facebook page"
            >
              <span>Preview Worksite Photo</span>
              <ExternalLink className="w-4 h-4 text-[#0B1340]" />
            </button>
          </div>
        </div>

        {/* Project Card Grid (Clean Card Design with Image and Topic) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-white border border-slate-200/90 rounded-xl overflow-hidden cursor-pointer hover:border-[#0B1340]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              {/* Card Image */}
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-md">
                    <Maximize2 className="w-4 h-4 text-[#0B1340]" />
                  </div>
                </div>
              </div>

              {/* Card Topic and Summary */}
              <div className="p-5 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0B1340] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0B1340]">
                  <span>Click to view details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pop-up Window for Card Details */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Full Image */}
              <div className="bg-slate-950 flex items-center justify-center max-h-[65vh] overflow-hidden">
                <img
                  src={selectedItem.imageSrc}
                  alt={selectedItem.title}
                  className="max-h-[65vh] w-auto max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Modal Details Bar */}
              <div className="p-6 bg-white border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0B1340] mb-1">
                    Project Fabrication Details
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">{selectedItem.title}</h4>
                  <p className="text-xs text-slate-600 mt-1 max-w-lg leading-relaxed">
                    {selectedItem.summary}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setSelectedItem(null);
                      onOpenQuote();
                    }}
                    className="px-4 py-2.5 text-xs font-bold text-white bg-[#0B1340] hover:bg-[#15236b] rounded transition-colors whitespace-nowrap cursor-pointer shadow-xs"
                  >
                    Inquire About Similar Work
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default Gallery;
