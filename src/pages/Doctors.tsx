import { motion } from 'motion/react';
import { 
  Award, 
  ShieldCheck, 
  GraduationCap, 
  Briefcase, 
  FileText, 
  Check, 
  Calendar, 
  Heart, 
  Sparkles, 
  CheckCircle, 
  Users, 
  ThumbsUp, 
  Activity, 
  Scissors, 
  Zap,
  Target,
  Smile,
  ShieldAlert,
  Phone
} from 'lucide-react';
import { DOCTORS, CLINIC_INFO, CLINIC_IMAGES } from '../data/clinicData';

interface DoctorsProps {
  setActivePage: (page: string) => void;
}

export default function Doctors({ setActivePage }: DoctorsProps) {
  const handleBookWithDoctor = (docName: string) => {
    setActivePage('contact');
    window.location.hash = 'contact';
    // Small timeout to allow state to settle, then auto-fill or scroll
    setTimeout(() => {
      const selectElem = document.getElementById('appointment-doctor-select') as HTMLSelectElement;
      if (selectElem) {
        selectElem.value = docName === 'Dr. Amar Shinde' ? 'dr-amar' : docName === 'Dr. Om Narwade' ? 'dr-om' : 'dr-shruti';
        // Trigger a synthetic change event to update react state if needed
        selectElem.dispatchEvent(new Event('change', { bubbles: true }));
      }
      const formSection = document.getElementById('appointment-booking-section');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <div className="bg-slate-50 font-sans min-h-screen text-slate-900 pt-24 pb-16">
      
      {/* Page Header */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-3">
          <span className="text-xs font-bold text-blue-700 tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Medical Directors
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-900 tracking-tight">
            Meet Our Expert Surgeons & Physicians
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Registered medical practitioners with advanced training, proven clinical excellence, and state-of-the-art diagnostic protocols.
          </p>
        </div>
      </section>

      {/* Primary Featured Surgeon - Dr. Amar Shinde */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Profile Card Header */}
        <div className="mb-8">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-blue-700 mb-2 flex items-center gap-1.5">
            <Sparkles size={14} className="animate-pulse" /> Clinic Founder & Lead Surgeon
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full" />
        </div>

        {/* Dr. Amar Shinde - Advanced Medical Profile */}
        <div className="bg-white rounded-3xl shadow-md border border-slate-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 hover:border-blue-400 transition-all duration-350 group mb-16">
          
          {/* Column 1: Photograph, Stats & Core Highlights */}
          <div className="lg:col-span-5 bg-gradient-to-b from-blue-50 to-white p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-150">
            
            <div className="flex flex-col items-center text-center">
              {/* Image Frame with premium accents */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg shadow-blue-100/60 mb-6 group-hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src={CLINIC_IMAGES.doctorDrAmar} 
                  alt="Dr. Amar Shinde" 
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gold Medal Badge Seal */}
                <div className="absolute bottom-2 right-2 bg-amber-500 text-white p-2 rounded-full shadow-md border-2 border-white flex items-center justify-center" title="Surgery Gold Medalist">
                  <Award size={18} fill="currentColor" />
                </div>
              </div>

              {/* Title Header */}
              <h3 className="text-2xl font-black text-blue-900 leading-tight">Dr. Amar Shinde</h3>
              <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mt-1 bg-blue-50/70 border border-blue-100 px-3 py-1 rounded-full">
                M.S. General Surgeon (ISM)
              </p>
              <p className="text-xs font-semibold text-slate-500 mt-2 flex items-center justify-center gap-1">
                <GraduationCap size={15} className="text-blue-600" />
                M.S. Gen. Surgery, Consultant Proctologist
              </p>

              {/* Medical Registration Details */}
              <div className="mt-4 px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-sm text-[11px] text-slate-600 flex items-center gap-1.5 justify-center">
                <FileText size={13} className="text-slate-400" />
                <span>MCI Reg No: <strong className="text-blue-900 font-bold">I-92408 A</strong></span>
              </div>
            </div>

            {/* Quick Stats Grid Dashboard */}
            <div className="grid grid-cols-3 gap-2.5 mt-8 border-t border-slate-200/80 pt-6">
              <div className="bg-white p-3 rounded-xl border border-slate-150 text-center flex flex-col justify-center shadow-sm">
                <span className="text-lg sm:text-xl font-black text-blue-700 block leading-none">7+</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tight mt-1">Years Exp</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-150 text-center flex flex-col justify-center shadow-sm">
                <span className="text-lg sm:text-xl font-black text-emerald-600 block leading-none">1500+</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tight mt-1">Laser Ops</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-150 text-center flex flex-col justify-center shadow-sm">
                <span className="text-lg sm:text-xl font-black text-amber-500 block leading-none">Gold</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tight mt-1">Medalist</span>
              </div>
            </div>

          </div>

          {/* Column 2: Detailed Specialties, Credentials, and Bio */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col gap-6 justify-between bg-white">
            
            {/* Bio Segment */}
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-emerald-50 text-emerald-700 text-[10px] font-extrabold tracking-wider px-2.5 py-1 rounded-full border border-emerald-100 flex items-center gap-1">
                  <ShieldCheck size={12} className="text-emerald-600" /> ACLS & BLS Certified
                </span>
                <span className="bg-blue-50 text-blue-700 text-[10px] font-extrabold tracking-wider px-2.5 py-1 rounded-full border border-blue-100">
                  Anorectal Laser Surgery Specialist
                </span>
              </div>
              
              <h4 className="font-extrabold text-blue-900 text-[10px] uppercase tracking-wider mb-2">Surgical Director Overview</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Dr. Amar Shinde is a highly regarded, gold medalist General Surgeon and Proctologist who has pioneered painless, minimally invasive daycare procedures in Moshi and Pune. He offers custom-tailored laser protocols for rapid rehabilitation, assuring maximum comfort, zero recurrence, and minimal post-surgical downtime.
              </p>
            </div>

            {/* Specialized Surgical Expertise Grids */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-4 border-t border-b border-slate-150">
              
              {/* Anorectal Laser (Specialized Piles Care) */}
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider flex items-center gap-1.5 bg-blue-50/50 py-1 px-2.5 rounded-lg border border-blue-100/60 w-fit">
                  <Activity size={12} /> Laser Proctology (Piles Specialist)
                </span>
                <ul className="flex flex-col gap-1.5 text-xs text-slate-600 pl-1 mt-1">
                  <li className="flex gap-2 items-center">
                    <span className="text-emerald-500 text-sm font-black">✓</span>
                    <span>Piles / Hemorrhoids <strong className="text-blue-900">Specialist</strong></span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <span className="text-emerald-500 text-sm font-black">✓</span>
                    <span>Fissure Treatment</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <span className="text-emerald-500 text-sm font-black">✓</span>
                    <span>Fistula Laser Ablation</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <span className="text-emerald-500 text-sm font-black">✓</span>
                    <span>Pilonidal Sinus</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <span className="text-emerald-500 text-sm font-black">✓</span>
                    <span>Other Complex Anorectal Diseases</span>
                  </li>
                </ul>
              </div>

              {/* General Daycare Surgical Expertise */}
              <div className="flex flex-col gap-2">
                <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5 bg-emerald-50/50 py-1 px-2.5 rounded-lg border border-emerald-100/60 w-fit">
                  <Scissors size={12} /> General Surgical Expertise
                </span>
                <ul className="grid grid-cols-2 gap-1.5 text-xs text-slate-600 pl-1 mt-1">
                  <li className="flex gap-1.5 items-center">
                    <span className="text-blue-600 text-xs font-black">•</span>
                    <span>Appendix Surgery</span>
                  </li>
                  <li className="flex gap-1.5 items-center">
                    <span className="text-blue-600 text-xs font-black">•</span>
                    <span>Hernia Repair</span>
                  </li>
                  <li className="flex gap-1.5 items-center">
                    <span className="text-blue-600 text-xs font-black">•</span>
                    <span>Abdominal Tumor</span>
                  </li>
                  <li className="flex gap-1.5 items-center">
                    <span className="text-blue-600 text-xs font-black">•</span>
                    <span>Lipoma Excision</span>
                  </li>
                  <li className="flex gap-1.5 items-center">
                    <span className="text-blue-600 text-xs font-black">•</span>
                    <span>Sebaceous Cyst</span>
                  </li>
                  <li className="flex gap-1.5 items-center">
                    <span className="text-blue-600 text-xs font-black">•</span>
                    <span>Fibroadenoma</span>
                  </li>
                  <li className="flex gap-1.5 items-center">
                    <span className="text-blue-600 text-xs font-black">•</span>
                    <span>Ganglion Cyst</span>
                  </li>
                  <li className="flex gap-1.5 items-center">
                    <span className="text-blue-600 text-xs font-black">•</span>
                    <span>Phimosis Surgery</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Certifications & Action Footer */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col gap-1 align-left w-full sm:w-auto">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Clinical Standards</span>
                <span className="text-xs text-emerald-700 font-bold flex items-center gap-1">
                  <ShieldCheck size={14} className="text-emerald-600" />
                  ACLS, BLS Certified | Gold Medal Surgeon
                </span>
              </div>
              
              <button
                onClick={() => handleBookWithDoctor('Dr. Amar Shinde')}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-xs transition-all shadow-md shadow-blue-200 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Calendar size={13} />
                Book Consultation with Dr. Amar
              </button>
            </div>

          </div>

        </div>

        {/* Why Choose Dr. Amar Shinde Section */}
        <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl mb-16 relative overflow-hidden">
          
          {/* Decorative graphic background pattern */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
          
          <div className="text-center max-w-2xl mx-auto mb-10 flex flex-col items-center gap-2">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-900/40 px-3 py-1 rounded-full border border-blue-800/60">
              Why Choose Dr. Amar Shinde
            </span>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight mt-1 text-white">
              Uncompromising Surgical Excellence & Daycare Care
            </h3>
            <p className="text-slate-400 text-xs">
              Every surgical step is designed around absolute patient comfort, safety, and modern diagnostic parameters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Core point 1 */}
            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col gap-3 hover:bg-white/10 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-blue-600/30 text-blue-400 flex items-center justify-center shrink-0">
                <Award size={18} />
              </div>
              <div>
                <h5 className="font-bold text-sm text-white">Gold Medalist Surgeon</h5>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  Recognized with clinical gold medal honors in surgical technique and medical diagnostics.
                </p>
              </div>
            </div>

            {/* Core point 2 */}
            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col gap-3 hover:bg-white/10 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-emerald-600/30 text-emerald-400 flex items-center justify-center shrink-0">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h5 className="font-bold text-sm text-white">7+ Years Active Practice</h5>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  Proven clinical experience managing complex and recurrent anorectal surgeries.
                </p>
              </div>
            </div>

            {/* Core point 3 */}
            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col gap-3 hover:bg-white/10 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-amber-600/30 text-amber-400 flex items-center justify-center shrink-0">
                <Zap size={18} />
              </div>
              <div>
                <h5 className="font-bold text-sm text-white">Advanced Laser Experts</h5>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  Painless laser treatments delivering minimal bleeding, no stitches, and rapid daily recovery.
                </p>
              </div>
            </div>

            {/* Core point 4 */}
            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col gap-3 hover:bg-white/10 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-purple-600/30 text-purple-400 flex items-center justify-center shrink-0">
                <Heart size={18} />
              </div>
              <div>
                <h5 className="font-bold text-sm text-white">Patient-Centered Care</h5>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  Absolute confidentiality, custom treatment guidelines, and dedicated free follow-up tracks.
                </p>
              </div>
            </div>

          </div>

          {/* Quick list why details */}
          <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
            <div className="flex gap-2 items-start">
              <span className="text-emerald-400 font-extrabold text-sm shrink-0">✓</span>
              <span><strong>ACLS & BLS Certified:</strong> Operating under rigorous hospital critical care life-support standards.</span>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-emerald-400 font-extrabold text-sm shrink-0">✓</span>
              <span><strong>Modern Surgical Techniques:</strong> Advanced medical daycare suite allowing 30-min procedures with same-day clinical discharge.</span>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-emerald-400 font-extrabold text-sm shrink-0">✓</span>
              <span><strong>Accurate Diagnoses:</strong> Personalized symptom checkups and direct, clear patient counseling under zero bias.</span>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-emerald-400 font-extrabold text-sm shrink-0">✓</span>
              <span><strong>Trusted by Hundreds of Patients:</strong> High safety logs with over 1,500 successfully closed surgical procedures in Pune region.</span>
            </div>
          </div>

        </div>

        {/* Doctor 2: Dr. Shruti Shinde */}
        <div className="mb-6">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-rose-700 mb-2 flex items-center gap-1.5">
            <Sparkles size={14} className="animate-pulse" /> Obstetrics & Gynaecology (स्त्रीरोग व प्रसूती तज्ज्ञ)
          </h2>
          <div className="h-1 w-20 bg-rose-500 rounded-full" />
        </div>

        {/* Dr. Shruti Shinde - Medical Profile */}
        <div className="bg-white rounded-3xl shadow-md border border-slate-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 hover:border-rose-400 transition-all duration-350 group">
          
          {/* Column 1: Photograph & Registration */}
          <div className="lg:col-span-5 bg-gradient-to-b from-rose-50/40 to-white p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-150">
            
            <div className="flex flex-col items-center text-center">
              {/* Image Frame with premium pink/rose accents */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg shadow-rose-50 mb-6 group-hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src={CLINIC_IMAGES.doctorDrShruti} 
                  alt="Dr. Shruti Shinde" 
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Title Header */}
              <h3 className="text-2xl font-black text-slate-900 leading-tight">Dr. Shruti Shinde</h3>
              <p className="text-xs font-bold text-rose-700 uppercase tracking-wider mt-1 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full">
                Obstetrics & Gynaecology Specialist
              </p>
              
              {/* Qualification badges */}
              <div className="flex flex-wrap gap-1.5 justify-center mt-2.5">
                <span className="text-[10px] font-extrabold bg-rose-50 text-rose-700 border border-rose-100 px-2.5 py-1 rounded-md">M.D. (Ayu.)</span>
                <span className="text-[10px] font-extrabold bg-blue-50 text-blue-700 border border-blue-100 px-2.5 py-1 rounded-md">C.G.O.</span>
              </div>

              <p className="text-[11px] font-semibold text-slate-500 mt-2 flex items-center justify-center gap-1">
                <GraduationCap size={15} className="text-rose-600" />
                Diploma in Obstetrics & Gynaecology
              </p>

              {/* Medical Registration Details */}
              <div className="mt-4 px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-sm text-[11px] text-slate-600 flex items-center gap-1.5 justify-center">
                <FileText size={13} className="text-slate-400" />
                <span>MCI Reg No: <strong className="text-rose-800 font-bold">I-99858 A</strong></span>
              </div>
            </div>

            {/* Quick Stats Grid Dashboard */}
            <div className="grid grid-cols-2 gap-2.5 mt-8 border-t border-rose-200/40 pt-6">
              <div className="bg-white p-3 rounded-xl border border-slate-150 text-center flex flex-col justify-center shadow-sm">
                <span className="text-lg sm:text-xl font-black text-rose-700 block leading-none">6+</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tight mt-1">Years Experience</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-150 text-center flex flex-col justify-center shadow-sm">
                <span className="text-lg sm:text-xl font-black text-blue-800 block leading-none">1500+</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tight mt-1">Healthy Deliveries</span>
              </div>
            </div>

          </div>

          {/* Column 2: Biography & Areas of Practice */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col gap-6 justify-between bg-white">
            
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-rose-50 text-rose-700 text-[10px] font-extrabold tracking-wider px-2.5 py-1 rounded-full border border-rose-100 flex items-center gap-1">
                  <Heart size={12} className="text-rose-600 animate-pulse" /> Women's Health Specialist
                </span>
                <span className="bg-blue-50 text-blue-700 text-[10px] font-extrabold tracking-wider px-2.5 py-1 rounded-full border border-blue-100">
                  Ayurvedic Garbhasanskar
                </span>
              </div>
              
              <h4 className="font-extrabold text-rose-900 text-[10px] uppercase tracking-wider mb-2">About Doctor</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
                <strong>Dr. Shruti Shinde</strong> is an experienced and compassionate women's healthcare specialist dedicated to providing comprehensive care for women at every stage of life. She combines modern gynecological practices with the principles of Ayurveda to deliver safe, personalized, and holistic treatment.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                She specializes in <strong>Infertility Management</strong>, helping couples achieve their dream of parenthood through individualized treatment plans and expert guidance. She provides complete <strong>Pregnancy Care</strong>, including antenatal check-ups, maternal health monitoring, nutritional counseling, and postnatal support. Furthermore, Dr. Shinde has extensive expertise in <strong>PCOS and Hormonal Disorders</strong>, <strong>Menopause Care</strong>, and specialized <strong>Ayurvedic Garbhasanskar</strong> programs for the complete physical and mental well-being of mother and baby.
              </p>
            </div>

            {/* Specialties and diagnostic competencies */}
            <div className="py-4 border-t border-b border-slate-150 flex flex-col gap-2">
              <h4 className="font-extrabold text-slate-800 text-[10px] uppercase tracking-wider">Areas of Expertise</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 mt-1">
                <div className="flex gap-2 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  <span>Infertility Management & Counseling</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  <span>Pregnancy Care & Antenatal Services</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  <span>PCOS & Hormonal Health Treatment</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  <span>Comprehensive Menopause Care</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  <span>D & C Procedures (Precision and Safety)</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  <span>Ayurvedic Garbhasanskar Programs</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  <span>Women's Reproductive & Hormonal Health</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  <span>Preventive Gynecological Care & Screenings</span>
                </div>
              </div>
            </div>

            {/* Action Footer */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <span className="text-[11px] text-slate-500 font-semibold flex items-center gap-1.5">
                <Heart size={12} className="text-rose-500 animate-pulse" />
                Providing Compassionate Women's Care Daily
              </span>
              
              <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="w-full sm:w-auto px-5 py-3 rounded-full bg-slate-50 hover:bg-slate-100 text-blue-950 font-extrabold text-xs transition-all border border-slate-200 flex items-center justify-center gap-1.5"
                >
                  <Phone size={13} className="text-blue-700" />
                  Call Now
                </a>
                <button
                  onClick={() => handleBookWithDoctor('Dr. Shruti Shinde')}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs transition-all shadow-md shadow-rose-100 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Calendar size={13} />
                  Book Appointment
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Doctor 3: Dr. Om Narwade */}
        <div className="mt-16 mb-6">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-blue-700 mb-2 flex items-center gap-1.5">
            <Sparkles size={14} className="animate-pulse" /> Pediatric & Child Development Specialist
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full" />
        </div>

        {/* Dr. Om Narwade - Medical Profile */}
        <div className="bg-white rounded-3xl shadow-md border border-slate-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 hover:border-blue-400 transition-all duration-350 group mb-16">
          
          {/* Column 1: Photograph & Registration */}
          <div className="lg:col-span-5 bg-gradient-to-b from-blue-50/50 to-white p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-150">
            
            <div className="flex flex-col items-center text-center">
              {/* Image Frame with premium accents */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg shadow-blue-50 mb-6 group-hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src={CLINIC_IMAGES.doctorDrOm} 
                  alt="Dr. Om Narwade" 
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Title Header */}
              <h3 className="text-2xl font-black text-slate-900 leading-tight">Dr. Om Narwade</h3>
              <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mt-1 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Pediatric Specialist (बालरोगतज्ज्ञ)
              </p>
              
              {/* Qualification badges */}
              <div className="flex gap-2 mt-2.5">
                <span className="text-[10px] font-extrabold bg-blue-50 text-blue-700 border border-blue-100 px-2.5 py-1 rounded-md">B.A.M.S.</span>
                <span className="text-[10px] font-extrabold bg-blue-50 text-blue-700 border border-blue-100 px-2.5 py-1 rounded-md">D.C.H.</span>
              </div>

              <p className="text-xs font-semibold text-slate-500 mt-2 flex items-center justify-center gap-1">
                <GraduationCap size={15} className="text-blue-600" />
                Diploma in Child Health (D.C.H.)
              </p>

              {/* Medical Registration Details */}
              <div className="mt-4 px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-sm text-[11px] text-slate-600 flex items-center gap-1.5 justify-center">
                <FileText size={13} className="text-slate-400" />
                <span>MCI Reg No: <strong className="text-blue-800 font-bold">I-102435 B</strong></span>
              </div>
            </div>

            {/* Quick Stats Grid Dashboard */}
            <div className="grid grid-cols-2 gap-2.5 mt-8 border-t border-blue-200/50 pt-6">
              <div className="bg-white p-3 rounded-xl border border-slate-150 text-center flex flex-col justify-center shadow-sm">
                <span className="text-lg sm:text-xl font-black text-blue-700 block leading-none">5+</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tight mt-1">Years Experience</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-150 text-center flex flex-col justify-center shadow-sm">
                <span className="text-lg sm:text-xl font-black text-emerald-600 block leading-none">3000+</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tight mt-1">Happy Children</span>
              </div>
            </div>

          </div>

          {/* Column 2: Biography & Areas of Practice */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col gap-6 justify-between bg-white">
            
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-blue-50 text-blue-700 text-[10px] font-extrabold tracking-wider px-2.5 py-1 rounded-full border border-blue-100 flex items-center gap-1">
                  <Smile size={12} className="text-blue-600" /> Child Friendly Environment
                </span>
                <span className="bg-emerald-50 text-emerald-700 text-[10px] font-extrabold tracking-wider px-2.5 py-1 rounded-full border border-emerald-100">
                  Growth & Vaccination Expert
                </span>
              </div>
              
              <h4 className="font-extrabold text-blue-900 text-[10px] uppercase tracking-wider mb-2">Pediatrician Overview</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Dr. Om Narwade is a dedicated Pediatric Specialist committed to providing compassionate and comprehensive healthcare for infants, children, and adolescents. He focuses on accurate diagnosis, preventive care, growth monitoring, vaccinations, and the treatment of common childhood illnesses, ensuring every child receives safe and personalized medical care in a friendly and comfortable environment.
              </p>
            </div>

            {/* Specialties and pediatric competencies */}
            <div className="py-4 border-t border-b border-slate-150 flex flex-col gap-2">
              <h4 className="font-extrabold text-slate-800 text-[10px] uppercase tracking-wider">Clinical Competency Focus</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 mt-1">
                <div className="flex gap-2 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Infants & Child Healthcare Consultation</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Routine Vaccinations & Immunization Slots</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Growth, Nutrition & Development Monitoring</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Treatment of Common Childhood Infections</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Asthma, Allergy & Respiratory Treatments</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Adolescent Physical Guidance & Counseling</span>
                </div>
              </div>
            </div>

            {/* Action Footer */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <span className="text-[11px] text-slate-500 font-semibold flex items-center gap-1.5">
                <Heart size={12} className="text-blue-500 animate-pulse" />
                Providing Gentle Pediatric Care Daily
              </span>
              
              <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="w-full sm:w-auto px-5 py-3 rounded-full bg-slate-50 hover:bg-slate-100 text-blue-950 font-extrabold text-xs transition-all border border-slate-200 flex items-center justify-center gap-1.5"
                >
                  <Phone size={13} className="text-blue-700" />
                  Call Now
                </a>
                <button
                  onClick={() => handleBookWithDoctor('Dr. Om Narwade')}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-xs transition-all shadow-md shadow-blue-100 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Calendar size={13} />
                  Book Appointment
                </button>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Hospital-Grade Safety Measures Banner */}
      <section className="py-12 bg-white border-t border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-3">
          <ShieldCheck className="text-emerald-600" size={32} />
          <h3 className="font-extrabold text-blue-900 text-base">Verified Medical Practice Standards</h3>
          <p className="text-slate-500 text-xs leading-relaxed max-w-xl">
            Our medical practitioners adhere strictly to standard clinical checkups, sanitization scores, and surgical guidelines mapped under state medical council laws. All diagnostic charts are fully protected under complete patient-physician confidentiality.
          </p>
        </div>
      </section>

    </div>
  );
}
