import { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock, ShieldCheck, CalendarRange } from 'lucide-react';
import { CLINIC_INFO, CLINIC_IMAGES } from '../data/clinicData';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export default function Navbar({ activePage, setActivePage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Doctors', id: 'doctors' },
    { name: 'Services', id: 'services' },
    { name: 'Contact & Map', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setActivePage(id);
    window.location.hash = id;
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Top Contact & Hour Bar */}
      <div className="bg-gradient-to-r from-[#0f2a4a] to-[#1e4e8c] text-white text-xs py-2 px-4 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 border-b border-blue-900/30 font-sans">
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4">
          <a href={`tel:${CLINIC_INFO.phone}`} className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
            <Phone size={13} className="text-emerald-400" />
            <span className="font-medium">Call Support:</span> {CLINIC_INFO.phoneFormatted}
          </a>
          <div className="hidden md:flex items-center gap-1.5">
            <Clock size={13} className="text-blue-300" />
            <span className="text-blue-200">{CLINIC_INFO.openHours}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-emerald-400 font-medium">
            <ShieldCheck size={14} />
            <span>ISO 9001:2015 Certified Clinic</span>
          </div>
        </div>
      </div>

      {/* Main High Density Navigation */}
      <nav className={`w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md border-b border-slate-200 py-2.5' 
          : 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo Brand area */}
          <button 
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 group cursor-pointer text-left focus:outline-none"
            id="nav-logo"
          >
            <img 
              src={CLINIC_IMAGES.logo} 
              alt="Samarth Multispeciality Clinic Logo" 
              className="h-11 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-102 rounded-lg"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="text-blue-900 font-black text-base md:text-lg leading-none uppercase tracking-tight">
                Samarth
              </span>
              <span className="text-emerald-600 font-extrabold text-[10px] md:text-xs leading-none tracking-wider uppercase mt-1">
                Multispecialist Clinic
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 font-sans">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  id={`nav-link-${link.id}`}
                  className={`relative py-1 text-sm font-semibold transition-colors cursor-pointer ${
                    activePage === link.id
                      ? 'text-blue-700 font-bold'
                      : 'text-slate-600 hover:text-blue-700'
                  }`}
                >
                  {link.name}
                  {activePage === link.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-700 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* High Density Call and Book CTA Buttons */}
            <div className="flex items-center gap-3">
              <a href={`tel:${CLINIC_INFO.phone}`} className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold border border-emerald-100 flex items-center gap-1.5 transition-colors hover:bg-emerald-100/50">
                <span>{CLINIC_INFO.phoneFormatted}</span>
              </a>
              <button
                onClick={() => handleLinkClick('contact')}
                id="nav-book-appointment-btn"
                className="px-5 py-2 bg-blue-700 text-white rounded-full text-xs font-bold shadow-lg shadow-blue-200 hover:bg-blue-800 transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer"
              >
                <CalendarRange size={14} />
                Book Appointment
              </button>
            </div>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              className="p-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-100/50 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xl py-4 px-6 flex flex-col gap-4 font-sans animate-fadeIn">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                id={`mobile-nav-link-${link.id}`}
                className={`py-2 text-left text-base font-medium transition-colors ${
                  activePage === link.id
                    ? 'text-blue-600 font-bold border-l-2 border-blue-600 pl-2'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleLinkClick('contact')}
              id="mobile-nav-book-btn"
              className="mt-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium text-center shadow-md flex items-center justify-center gap-2"
            >
              <CalendarRange size={18} />
              Book Appointment
            </button>
            <div className="pt-4 border-t border-slate-100 text-xs text-slate-400 flex flex-col gap-1">
              <span className="font-semibold text-slate-500">Emergency Support:</span>
              <a href={`tel:${CLINIC_INFO.phone}`} className="text-blue-600 font-medium text-sm">
                {CLINIC_INFO.phoneFormatted}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
