import React from 'react';
import AluMidasLogo from './AluMidasLogo';
import { COMPANY_DETAILS } from '../data/companyData';
import { Phone, MessageSquare, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#08103A] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-2">
            <div className="bg-white/95 p-2 rounded inline-block mb-4 shadow-xs">
              <AluMidasLogo height={38} />
            </div>
            <div className="text-sm font-semibold text-white tracking-tight">
              {COMPANY_DETAILS.name}
            </div>
            <div className="text-xs text-[#FFCD00] font-medium mt-1">
              {COMPANY_DETAILS.tagline}
            </div>
            <p className="mt-4 text-xs text-slate-400 leading-relaxed max-w-sm">
              Aluminium fabrication and architectural solutions for interior and exterior applications. Working with manufacturer-specified profiles and safe, dependable production standards.
            </p>
            {/* Facebook Link Placeholder */}
            <div className="mt-5">
              <a
                href={COMPANY_DETAILS.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors"
                aria-label="ALU MIDAS Facebook Page"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Follow on Facebook</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#overview" className="hover:text-white transition-colors">Overview</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Our Work</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About ALU MIDAS</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact / Quote</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Capabilities */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Solutions
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Aluminium Fabrication</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Doors & Windows</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Glass Solutions</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Cladding & Facades</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Ceiling Works</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Interior & Exterior</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Direct Contact
            </div>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#FFCD00] shrink-0 mt-0.5" />
                <a href={`tel:${COMPANY_DETAILS.phoneTel}`} className="hover:text-white transition-colors tabular-nums">
                  {COMPANY_DETAILS.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <a
                  href={COMPANY_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors tabular-nums"
                >
                  WhatsApp: {COMPANY_DETAILS.whatsapp}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#FFCD00] shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-white transition-colors break-all">
                  {COMPANY_DETAILS.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#FFCD00] shrink-0 mt-0.5" />
                <a
                  href={COMPANY_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  title="Open in Google Maps"
                >
                  {COMPANY_DETAILS.address.line1},<br />
                  {COMPANY_DETAILS.address.city}, Sri Lanka.
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Quiet Bottom Legal Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Homagama, Sri Lanka</span>
            <span>·</span>
            <span>Quality Over Quantity</span>
            <span>·</span>
            <span>25+ Years Experience</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
