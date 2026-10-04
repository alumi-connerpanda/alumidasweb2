import React, { useState, useEffect } from 'react';
import AluMidasLogo from './AluMidasLogo';
import { COMPANY_DETAILS } from '../data/companyData';
import { Phone, MessageSquare, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: (serviceTitle?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5'
            : 'bg-white border-b border-slate-200 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Brand Zone (Single clean brand element) */}
          <a
            href="#home"
            className="flex items-center gap-2 group transition-opacity hover:opacity-95"
            aria-label="ALU MIDAS (PVT) LTD Home"
          >
            <AluMidasLogo height={42} />
          </a>

          {/* Zone 2: 4-6 Clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 hover:text-[#0B1340] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F5B800] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${COMPANY_DETAILS.phoneTel}`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-[#0B1340] transition-colors py-2 px-3 rounded-md hover:bg-slate-100"
              title="Call ALU MIDAS"
            >
              <Phone className="w-3.5 h-3.5 text-[#0B1340]" />
              <span className="tabular-nums">{COMPANY_DETAILS.phone}</span>
            </a>

            <button
              onClick={() => onOpenQuote()}
              className="px-4 py-2.5 text-xs font-bold text-white bg-[#0B1340] hover:bg-[#15236b] active:scale-[0.99] rounded transition-all shadow-sm hover:shadow whitespace-nowrap cursor-pointer"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-[#0B1340] focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-slate-900/60 backdrop-blur-xs md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="fixed top-0 right-0 bottom-0 w-72 bg-white shadow-xl p-6 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="pb-6 border-b border-slate-100 flex items-center justify-between">
                <AluMidasLogo height={32} />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-slate-500 hover:text-slate-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-semibold text-slate-800 hover:text-[#0B1340] py-2 border-b border-slate-50"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-[#0B1340] bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                WhatsApp: {COMPANY_DETAILS.whatsapp}
              </a>

              <a
                href={`tel:${COMPANY_DETAILS.phoneTel}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded transition-colors"
              >
                <Phone className="w-4 h-4 text-[#0B1340]" />
                Call: {COMPANY_DETAILS.phone}
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 text-xs font-bold text-white bg-[#0B1340] hover:bg-[#15236b] rounded shadow-sm text-center"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Navbar;
