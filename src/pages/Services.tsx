import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Activity, 
  Heart, 
  Users, 
  ShieldCheck, 
  Scissors, 
  Check, 
  Calendar, 
  Sparkles, 
  Stethoscope, 
  Zap, 
  Phone, 
  MessageSquare, 
  MapPin, 
  ArrowRight,
  Shield,
  Clock,
  ThumbsUp,
  Droplets,
  RotateCcw,
  Plus
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface ServicesProps {
  setActivePage: (page: string) => void;
}

export default function Services({ setActivePage }: ServicesProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleBookService = (srvTitle: string) => {
    setActivePage('contact');
    window.location.hash = 'contact';
    
    setTimeout(() => {
      const selectElem = document.getElementById('appointment-service-select') as HTMLSelectElement;
      if (selectElem) {
        let val = 'medical-consultation';
        const lowerTitle = srvTitle.toLowerCase();
        if (lowerTitle.includes('laser') || lowerTitle.includes('piles') || lowerTitle.includes('fistula') || lowerTitle.includes('fissure') || lowerTitle.includes('anorectal')) {
          val = 'piles-treatment'; // standard proctology selection
        } else if (lowerTitle.includes('surgery')) {
          val = 'general-surgery';
        }
        selectElem.value = val;
        selectElem.dispatchEvent(new Event('change', { bubbles: true }));
      }
      const formSection = document.getElementById('appointment-booking-section');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  // WhatsApp helper
  const getWhatsAppUrl = () => {
    const text = encodeURIComponent("Hi Samarth Multispeciality Clinic, I would like to inquire about your medical and surgical services and book an appointment.");
    return `https://wa.me/${CLINIC_INFO.whatsapp.replace('+', '')}?text=${text}`;
  };

  return (
    <div className="bg-slate-50 font-sans min-h-screen text-slate-900 pt-24 pb-16">
      
      {/* Page Header */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-3">
          <span className="text-xs font-bold text-blue-700 tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100 flex items-center gap-1">
            <Sparkles size={12} className="text-blue-600 animate-pulse" /> Our Services
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900 tracking-tight leading-tight">
            Comprehensive Medical & Surgical Services
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl leading-relaxed">
            From expert family general healthcare to pain-free, state-of-the-art laser proctology procedures, we provide trusted diagnostic and therapeutic solutions.
          </p>
        </div>
      </section>

      {/* Main Services Categories */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: General Medicine */}
          <div 
            className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            onMouseEnter={() => setHoveredCard('general')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-inner group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <Stethoscope size={24} />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-emerald-600 uppercase tracking-wider block">
                    जनरल सुविधा
                  </span>
                  <h3 className="text-xl font-bold text-blue-900">General Medicine</h3>
                </div>
              </div>
              
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                Personalized, thorough consulting, diagnosis, and treatment plan guidance for standard health complaints, infections, and chronic lifestyle syndromes.
              </p>

              {/* Checklist Grid */}
              <div className="border-t border-slate-100 pt-5">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Consultation & Treatments</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                  {[
                    "Cold & Cough",
                    "Asthma & Respiratory",
                    "Children's Health",
                    "Skin Diseases",
                    "Dengue & Malaria",
                    "Typhoid",
                    "Stomach & Digestive",
                    "Acidity & Gastric Problems",
                    "Kidney & Urinary",
                    "High Blood Pressure",
                    "Thyroid Disorders",
                    "Diabetes Management",
                    "Anaemia (Low Hb)"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                      <span className="text-emerald-500 mt-0.5 shrink-0 font-extrabold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-emerald-600">Daily OPD Available</span>
              <button 
                onClick={() => handleBookService('General Medicine')}
                className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 cursor-pointer transition-colors"
              >
                Book General Consultation <ArrowRight size={13} />
              </button>
            </div>
          </div>

          {/* Card 2: Anorectal Disorders */}
          <div 
            className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            onMouseEnter={() => setHoveredCard('anorectal')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 shadow-inner group-hover:bg-rose-600 group-hover:text-white transition-colors duration-300">
                  <Activity size={24} />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-rose-600 uppercase tracking-wider block">
                    गुदरोग विकार
                  </span>
                  <h3 className="text-xl font-bold text-blue-900">Anorectal Disorders</h3>
                </div>
              </div>

              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                Durable, highly confidential diagnostics and treatments for painful anorectal and pelvic area tracts with advanced daycare clinical relief.
              </p>

              {/* Checklist */}
              <div className="border-t border-slate-100 pt-5">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Diagnostic & Treatment Scope</h4>
                <ul className="flex flex-col gap-2.5">
                  {[
                    { title: "Piles (Hemorrhoids)", desc: "Advanced relief from bleeding and painful tissue swelling." },
                    { title: "Fistula", desc: "Expert tract closures and healing guidance." },
                    { title: "Fissure", desc: "Soothing medical care and painless direct interventions." },
                    { title: "Pilonidal Sinus", desc: "In-depth cleanouts for chronic back cysts." },
                    { title: "Ksharasutra Treatment", desc: "Time-tested, reliable ayurvedic medicated thread therapy." },
                    { title: "Injection Sclerotherapy", desc: "Immediate shrinking of early stage hemorrhoids." }
                  ].map((item, index) => (
                    <li key={index} className="flex gap-2.5 items-start text-xs text-slate-600">
                      <span className="text-rose-500 mt-0.5 shrink-0 font-extrabold">✓</span>
                      <div>
                        <strong className="text-blue-950 block">{item.title}</strong>
                        <span className="text-slate-500 text-[11px] block mt-0.5 leading-snug">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-rose-600">Completely Private Checkups</span>
              <button 
                onClick={() => handleBookService('Anorectal Disorders')}
                className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 cursor-pointer transition-colors"
              >
                Inquire Specialist Care <ArrowRight size={13} />
              </button>
            </div>
          </div>

          {/* Card 3: General Surgery */}
          <div 
            className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            onMouseEnter={() => setHoveredCard('surgery')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Scissors size={24} />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-wider block">
                    सर्जन्स सेवा
                  </span>
                  <h3 className="text-xl font-bold text-blue-900">General Surgery</h3>
                </div>
              </div>

              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                Premium surgical intervention led by Gold Medalist Dr. Amar Shinde, ensuring standard hospital hygiene, sterile suites, and optimized pre/post-op tracks.
              </p>

              {/* Checklist */}
              <div className="border-t border-slate-100 pt-5">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Surgical Competencies</h4>
                <ul className="flex flex-col gap-3">
                  {[
                    { title: "Hernia Surgery", desc: "Anatomical repair with durable, biocompatible meshes." },
                    { title: "Appendix (Appendectomy)", desc: "Quick relief for acute and chronic appendix inflammations." },
                    { title: "Hydrocele", desc: "Highly sterile, outpatient drainage and sac procedures." },
                    { title: "Breast Disorders", desc: "Expert diagnostic screening and excision of benign lumps." },
                    { title: "Various Benign Tumours & Lumps", desc: "Painless removal of lipomas, cysts, or hard skin lumps." },
                    { title: "Gallbladder Diseases", desc: "Surgical evaluation for stones, polyps, and therapeutic relief." }
                  ].map((item, index) => (
                    <li key={index} className="flex gap-2.5 items-start text-xs text-slate-600">
                      <span className="text-blue-500 mt-0.5 shrink-0 font-extrabold">✓</span>
                      <div>
                        <strong className="text-blue-950 block">{item.title}</strong>
                        <span className="text-slate-500 text-[11px] block mt-0.5 leading-snug">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-blue-600">Sterile OT Facilities</span>
              <button 
                onClick={() => handleBookService('General Surgery')}
                className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 cursor-pointer transition-colors"
              >
                Consult Dr. Amar Shinde <ArrowRight size={13} />
              </button>
            </div>
          </div>

        </div>

        {/* Premium Highlight Card: Advanced Laser Surgery */}
        <div className="bg-gradient-to-br from-blue-950 to-indigo-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden mb-20">
          {/* Decorative graphic glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Info Column */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex items-center gap-2 bg-blue-900/45 border border-blue-800/60 px-3.5 py-1.5 rounded-full w-fit">
                <Zap size={14} className="text-amber-400 animate-pulse fill-amber-400" />
                <span className="text-xs font-extrabold text-blue-200 tracking-wider uppercase">
                  Advanced Laser Surgery
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Specialized Laser Treatment
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Modern laser surgery is a game-changing advancement in proctology care. Designed for the ultimate in patient comfort, it eliminates the pain and lengthy recovery times of conventional open-wound surgeries. This advanced wavelength technology preserves muscle function and ensures stellar recovery.
              </p>
              
              <div className="grid grid-cols-2 gap-3 mt-4 text-xs font-semibold text-slate-200">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full shrink-0" />
                  <span>No Painful Stitches</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full shrink-0" />
                  <span>Minimal Tissue Damage</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full shrink-0" />
                  <span>Zero Recurrence Risk</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full shrink-0" />
                  <span>Same-Day Discharge</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Highlights Grid */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-4">
              <h3 className="text-xs font-bold text-blue-300 uppercase tracking-widest border-b border-white/10 pb-2">
                Laser Interventions For:
              </h3>
              
              <div className="flex flex-col gap-3">
                {[
                  { name: "Piles (Hemorrhoids)", desc: "Controlled laser shrinking with instant recovery." },
                  { name: "Fistula (Bhagandar)", desc: "FiLaC laser fiber closure with high accuracy." },
                  { name: "Fissure", desc: "Painless direct laser healing of painful anal tears." },
                  { name: "Pilonidal Sinus", desc: "Precise cyst tract ablation under zero discomfort." }
                ].map((laserSrv, idx) => (
                  <div key={idx} className="flex gap-3 items-start hover:bg-white/5 p-2 rounded-xl transition-colors">
                    <span className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5 border border-blue-500/10">
                      0{idx+1}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-tight">{laserSrv.name}</h4>
                      <p className="text-slate-400 text-[11px] mt-0.5">{laserSrv.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => handleBookService('Laser Surgery')}
                className="mt-2 w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Sparkles size={13} />
                Inquire Laser Treatment
              </button>
            </div>
          </div>
        </div>

      </section>

      {/* Benefits of Laser Treatment Section */}
      <section className="py-16 bg-white border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col items-center gap-2">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100 flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-blue-600" /> Clinic Safety Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900 tracking-tight mt-1">
              Benefits of Laser Treatment
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              Why leading medical associations and patients recommend advanced laser proctology over traditional painful surgical methods.
            </p>
          </div>

          {/* Premium cards for benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Benefit 1 */}
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex gap-4 items-start hover:border-blue-400 hover:bg-white transition-all duration-300 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100/50">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">Day Care Procedure</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed mt-1">
                  Same-day discharge. Walk home on your own feet within hours of surgery.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex gap-4 items-start hover:border-blue-400 hover:bg-white transition-all duration-300 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100/50">
                <Activity size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">Faster Recovery</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed mt-1">
                  Accelerated tissue restoration, letting you get back to your office job instantly.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex gap-4 items-start hover:border-blue-400 hover:bg-white transition-all duration-300 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-100/50">
                <Droplets size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">Minimal Blood Loss</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed mt-1">
                  Laser sealing of capillaries ensures zero bleeding risks and total peace of mind.
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex gap-4 items-start hover:border-blue-400 hover:bg-white transition-all duration-300 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100/50">
                <Plus size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">Less Pain</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed mt-1">
                  No scalpel incisions, meaning almost absolute zero post-surgery pain logs.
                </p>
              </div>
            </div>

            {/* Benefit 5 */}
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex gap-4 items-start hover:border-blue-400 hover:bg-white transition-all duration-300 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100/50">
                <ThumbsUp size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">Minimal Discomfort</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed mt-1">
                  No painful morning dressings, heavy packing, or continuous diagnostic worry.
                </p>
              </div>
            </div>

            {/* Benefit 6 */}
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex gap-4 items-start hover:border-blue-400 hover:bg-white transition-all duration-300 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100/50">
                <Shield size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">Highly Effective</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed mt-1">
                  Extremely precise depth focus. Far superior performance over open cuts.
                </p>
              </div>
            </div>

            {/* Benefit 7 */}
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex gap-4 items-start hover:border-blue-400 hover:bg-white transition-all duration-300 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 border border-orange-100/50">
                <Calendar size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">Minimal Rest Needed</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed mt-1">
                  Requires only 3 to 4 days of simple rest before full resume of active lifestyles.
                </p>
              </div>
            </div>

            {/* Benefit 8 */}
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex gap-4 items-start hover:border-blue-400 hover:bg-white transition-all duration-300 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 border border-teal-100/50">
                <RotateCcw size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">Very Low Recurrence</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed mt-1">
                  Complete laser sterilization of tissue minimizes recurrence to near zero.
                </p>
              </div>
            </div>

          </div>

          <div className="mt-10 p-4 rounded-2xl bg-blue-50 border border-blue-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
            <span className="text-xs text-blue-800 font-semibold text-center sm:text-left">
              Want to see if you qualify for laser-based daycare surgery?
            </span>
            <button 
              onClick={() => handleBookService('Laser Surgery')}
              className="px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-full cursor-pointer transition-colors"
            >
              Get Free Expert Evaluation
            </button>
          </div>

        </div>
      </section>

      {/* Call To Action Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6 relative z-10">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/50 border border-emerald-900/60 px-3 py-1 rounded-full">
            Expert Treatment
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Get Expert Surgical Care Today
          </h2>
          
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed">
            Book your consultation with <strong className="text-white">Dr. Amar Shinde</strong> for advanced laser surgery, general surgery, and comprehensive healthcare services. Receive absolute confidentiality and compassionate diagnostics.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-4 w-full">
            
            {/* Book Appointment Button */}
            <button
              onClick={() => handleBookService('General')}
              className="px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs transition-all shadow-lg shadow-emerald-900/25 flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
            >
              <Calendar size={14} />
              Book Appointment
            </button>

            {/* Call Now Button */}
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 text-blue-950 font-extrabold text-xs transition-all shadow-md flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Phone size={14} className="text-blue-700" />
              Call Now ({CLINIC_INFO.phoneFormatted})
            </a>

            {/* WhatsApp Button */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-full bg-emerald-600/30 hover:bg-emerald-600/40 border border-emerald-500/20 text-emerald-400 font-extrabold text-xs transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <MessageSquare size={14} className="fill-emerald-400/25" />
              WhatsApp Us
            </a>

            {/* Get Directions Button */}
            <a
              href={CLINIC_INFO.googleMapsLink}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 font-extrabold text-xs transition-all border border-slate-700/50 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <MapPin size={14} className="text-blue-400" />
              Get Directions
            </a>

          </div>

          <p className="text-[10px] text-slate-400 font-semibold mt-4">
            * Complete patient confidentiality assured | Autoclaved clinical hygiene | 7+ years of clinical excellence
          </p>

        </div>
      </section>

    </div>
  );
}
