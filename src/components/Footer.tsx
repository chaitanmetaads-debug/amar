import { HeartPulse, Phone, Mail, MapPin, ExternalLink, CalendarDays } from 'lucide-react';
import { CLINIC_INFO, CLINIC_IMAGES } from '../data/clinicData';

interface FooterProps {
  setActivePage: (page: string) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  const handleLinkClick = (pageId: string) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home Care', id: 'home' },
    { name: 'About Our Team', id: 'about' },
    { name: 'Consult Doctors', id: 'doctors' },
    { name: 'Medical Services', id: 'services' },
    { name: 'Contact & Location', id: 'contact' },
  ];

  const servicesList = [
    { name: 'General Surgery', id: 'general-surgery' },
    { name: 'Proctology Care', id: 'proctology-treatment' },
    { name: 'Piles / Hemorrhoids', id: 'piles-treatment' },
    { name: 'Fissure Cure', id: 'fissure-treatment' },
    { name: 'Fistula Laser Care', id: 'fistula-treatment' },
    { name: 'Preventive Health', id: 'preventive-health' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 font-sans border-t border-slate-800">
      
      {/* Upper Footer section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Column 1: Clinic Intro */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="bg-white px-3 py-1.5 rounded-xl border border-slate-700/50 w-fit shrink-0">
              <img 
                src={CLINIC_IMAGES.logo} 
                alt="Samarth Multispeciality Clinic Logo" 
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-base leading-none uppercase tracking-tight">Samarth</span>
              <span className="text-[10px] font-extrabold text-emerald-400 tracking-wider uppercase mt-1">Multispecialist Clinic</span>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            State-of-the-art proctology and general healthcare led by Gold Medalist surgeon Dr. Amar Shinde & Dr. Shruti Shinde. Bringing advanced healing with absolute precision and safety.
          </p>
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-800 flex items-start gap-3">
            <HeartPulse className="text-emerald-400 mt-1 shrink-0" size={18} />
            <div>
              <span className="block text-white font-semibold text-xs">Hygiene Protocol Score</span>
              <span className="text-slate-400 text-xs">100% sterile, hospital-grade sanitized.</span>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-bold text-sm tracking-wide uppercase border-l-2 border-blue-500 pl-3">
            Quick Navigation
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleLinkClick(link.id)}
                  className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer text-left focus:outline-none flex items-center gap-1.5"
                >
                  <span className="text-blue-500 font-bold">›</span>
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Medical Services Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-bold text-sm tracking-wide uppercase border-l-2 border-blue-500 pl-3">
            Medical Services
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            {servicesList.map((srv, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer text-left focus:outline-none flex items-center gap-1.5"
                >
                  <span className="text-emerald-400 font-bold">✓</span>
                  {srv.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact details */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-bold text-sm tracking-wide uppercase border-l-2 border-blue-500 pl-3">
            Contact Support
          </h3>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="text-blue-500 shrink-0 mt-1" size={18} />
              <div>
                <span className="block text-white font-semibold text-xs">Clinic Address:</span>
                <span className="text-slate-400 leading-relaxed text-xs">
                  {CLINIC_INFO.address}
                </span>
                <a 
                  href={CLINIC_INFO.googleMapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 mt-1.5 font-medium transition-colors"
                >
                  Get Directions <ExternalLink size={11} />
                </a>
              </div>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="text-emerald-400 shrink-0" size={18} />
              <div>
                <span className="block text-slate-400 text-xs">Phone (24/7):</span>
                <a href={`tel:${CLINIC_INFO.phone}`} className="text-white font-semibold hover:text-emerald-400 transition-colors">
                  {CLINIC_INFO.phoneFormatted}
                </a>
              </div>
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="text-blue-400 shrink-0" size={18} />
              <div>
                <span className="block text-slate-400 text-xs">Email Desk:</span>
                <a href={`mailto:${CLINIC_INFO.email}`} className="text-white font-medium hover:text-blue-400 transition-colors text-xs break-all">
                  {CLINIC_INFO.email}
                </a>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Lower Footer Bottom Bar */}
      <div className="bg-slate-950/80 py-6 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <p className="text-slate-500">
              &copy; {new Date().getFullYear()} <strong>Samarth Multispeciality Clinic</strong>. All rights reserved. Registered medical practitioners in proctology and general practice.
            </p>
          </div>
          <div className="flex items-center gap-6 text-slate-400">
            <button onClick={() => handleLinkClick('contact')} className="hover:text-white flex items-center gap-1">
              <CalendarDays size={13} className="text-emerald-400" /> Appointment System
            </button>
            <span>|</span>
            <span className="text-slate-500">Moshi, Pune, Maharashtra</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
