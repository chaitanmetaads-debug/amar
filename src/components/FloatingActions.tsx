import { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Construct standard WhatsApp redirect string
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(
    "Hello Samarth Multispeciality Clinic, I want to inquire about surgical treatments/medical consultations and book a slot."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-45 flex flex-col gap-3 font-sans items-end">
      
      {/* Floating Call Button */}
      <a
        href={`tel:${CLINIC_INFO.phone}`}
        id="floating-call-action"
        className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 group relative"
        title="Call Doctor"
      >
        <Phone size={20} className="animate-wiggle" />
        <span className="absolute right-14 bg-slate-900 text-white text-xs font-semibold py-1.5 px-3 rounded-lg shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Call: {CLINIC_INFO.phoneFormatted}
        </span>
      </a>

      {/* Floating WhatsApp Chat */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        id="floating-whatsapp-action"
        className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg hover:bg-emerald-600 transition-all duration-300 hover:scale-110 group relative"
        title="WhatsApp Consultation Desk"
      >
        <MessageCircle size={22} />
        <span className="absolute right-14 bg-slate-900 text-white text-xs font-semibold py-1.5 px-3 rounded-lg shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>

      {/* Back to Top */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          id="floating-back-to-top"
          className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center shadow-md hover:bg-slate-700 transition-all duration-300 hover:-translate-y-1"
          title="Scroll to Top"
        >
          <ArrowUp size={18} />
        </button>
      )}

    </div>
  );
}
