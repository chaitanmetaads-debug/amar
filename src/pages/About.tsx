import { motion } from 'motion/react';
import { Award, ShieldCheck, Heart, Eye, Target, CheckCircle2, Check, Sparkles, Building2 } from 'lucide-react';
import { CLINIC_INFO, CLINIC_IMAGES } from '../data/clinicData';

interface AboutProps {
  setActivePage: (page: string) => void;
}

export default function About({ setActivePage }: AboutProps) {
  const handleConsultClick = () => {
    setActivePage('doctors');
    window.location.hash = 'doctors';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50 font-sans min-h-screen text-slate-800 pt-24 pb-16">
      
      {/* Page Header */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-3">
          <span className="text-xs font-bold text-blue-700 tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            About Samarth Multispeciality Clinic
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight">
            Our Mission, Vision & Healthcare Standards
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Delivering gold-standard surgical proctology, patient safety, and comprehensive primary medicine under one hygienic roof.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative Text */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-1.5 text-emerald-600 font-bold text-xs uppercase tracking-widest">
                <Sparkles size={14} /> Established in 2019
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Dedicated to Gentle Care and Professional Integrity for over 7 Years
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                At <strong>Samarth Multispeciality Clinic</strong>, we believe that medical intervention is more than just symptom diagnosis — it is an empathetic, professional alliance to guarantee absolute long-term recovery. For over 7 years, we have provided high-precision surgical therapies and compassionate family healthcare to patients in Moshi, Alandi, and across broader Pune.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm">
                Our clinic was founded to solve a critical issue in community proctology: providing patients access to modern, state-of-the-art laser treatments for piles, fissures, and fistulas without the expensive, stressful infrastructure of large corporate hospitals. By merging Dr. Amar Shinde's award-winning surgical expertise with Dr. Shruti Shinde's comprehensive general medical practice, we supply safe, reliable results daily.
              </p>

              {/* Quality Standards list */}
              <div className="flex flex-col gap-3 mt-2 bg-white p-5 rounded-2xl border border-slate-200">
                <h4 className="font-bold text-blue-900 text-xs uppercase tracking-wide">
                  Our Uncompromising Service Commitments:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-600">
                  <li className="flex gap-2 items-center">
                    <CheckCircle2 className="text-emerald-500 shrink-0" size={16} />
                    <span>Gold Medalist clinical guidance</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <CheckCircle2 className="text-emerald-500 shrink-0" size={16} />
                    <span>Hospital-grade autoclave sanitization</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <CheckCircle2 className="text-emerald-500 shrink-0" size={16} />
                    <span>Zero compromise on patient privacy</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <CheckCircle2 className="text-emerald-500 shrink-0" size={16} />
                    <span>Post-operative home recovery support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Clinic Image displaying premium status */}
            <div className="lg:col-span-5 relative">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-16 h-16 bg-blue-100 rounded-full -z-10" />
              <img 
                src={CLINIC_IMAGES.treatmentRoom}
                alt="Samarth Multispeciality Clinic Sterile Treatment Room"
                className="w-full h-80 object-cover rounded-3xl shadow-lg border border-slate-200"
                referrerPolicy="no-referrer"
              />
              <div className="bg-slate-900 text-white rounded-2xl p-5 mt-6 border border-slate-800 flex items-start gap-4">
                <Building2 className="text-blue-400 mt-0.5 shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-sm text-white">Modern Clinical Setting</h4>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                    Designed with patient comfort in mind, our Moshi facility is highly optimized for minor outpatient surgical daycare procedures with sterile protocols.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission, Vision & Care Values */}
      <section className="py-12 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Mission */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                <Target size={20} />
              </div>
              <h3 className="text-base font-bold text-blue-900">Our Clinical Mission</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                To deliver high-precision, advanced, and minimally invasive surgical services at affordable pricing, eliminating long-term health burdens and ensuring every community patient experiences maximum comfort and speedy rehabilitation.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Eye size={20} />
              </div>
              <h3 className="text-base font-bold text-blue-900">Our Strategic Vision</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                To be recognized as the premier surgical daycare center and general health practice in Pune, renowned for adopting cutting-edge medical technologies (like diode laser ablation) with zero compromise on safety guidelines.
              </p>
            </div>

            {/* Patient Centered Care */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center">
                <Heart size={20} />
              </div>
              <h3 className="text-base font-bold text-blue-900">Patient-Centered Care</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Placing the patient at the exact epicenter of our medical efforts. From clear explanation of surgical choices and pricing to post-operative follow-up trackers and emergency calls, we align diagnostics to your comfort.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Hygiene & Safety Standards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side Content */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block">
                Safety First Protocol
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Autoclave Sterilization & 100% Hygienic Standards
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Safety represents our foundational promise. Under continuous audit, we enforce a pristine clinical setup where all surgical instruments undergo intensive physical and chemical autoclave sterilization.
              </p>

              <div className="flex flex-col gap-4 mt-2 font-sans">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs mt-0.5 shrink-0 font-bold">✓</div>
                  <div>
                    <strong className="text-slate-800 text-sm">Autoclaved Surgical Packs</strong>
                    <p className="text-slate-500 text-xs mt-0.5">All instruments are sealed and pressurized sterilized immediately prior to each minor procedure.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs mt-0.5 shrink-0 font-bold">✓</div>
                  <div>
                    <strong className="text-slate-800 text-sm">Disposable Clinical Covers</strong>
                    <p className="text-slate-500 text-xs mt-0.5">Single-use surgical drapes and procedural gloves are mandatory for every clinical examination.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs mt-0.5 shrink-0 font-bold">✓</div>
                  <div>
                    <strong className="text-slate-800 text-sm">Continuous Air & Chamber Purification</strong>
                    <p className="text-slate-500 text-xs mt-0.5">Air purification systems and physical sanitizers ensure zero risk of airborne cross-contamination.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Visual Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2">
                <Award className="text-blue-700" size={24} />
                <span className="font-bold text-sm text-blue-900">Gold Medal Quality</span>
                <span className="text-slate-500 text-xs">Dr. Amar Shinde's medical achievements guarantee surgical excellence.</span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2">
                <ShieldCheck className="text-emerald-600" size={24} />
                <span className="font-bold text-sm text-blue-900">Hygienic Rating</span>
                <span className="text-slate-500 text-xs">Audited clinical standards equivalent to top metropolitan medical rooms.</span>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2 col-span-2">
                <span className="text-emerald-700 font-bold text-[10px] uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 w-max">Clinical Compliance Check:</span>
                <span className="font-extrabold text-blue-900 text-base leading-snug">Registration-Checked Practitioners</span>
                <p className="text-slate-500 text-xs mt-1">
                  Both Dr. Amar Shinde and Dr. Shruti Shinde are fully registered with State and National Medical Councils, keeping records completely transparent.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-4">
          <h3 className="text-xl sm:text-2xl font-bold text-blue-900">
            Want to meet our expert medical directors?
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl leading-relaxed">
            Read more about their qualification credentials, medical backgrounds, and specialized surgical skillsets on our Doctors page.
          </p>
          <button
            onClick={handleConsultClick}
            className="px-6 py-2.5 rounded-full bg-blue-700 text-white font-bold text-xs hover:bg-blue-800 transition-all flex items-center gap-1.5 cursor-pointer shadow-lg shadow-blue-200"
          >
            Go to Doctors Portfolio
            <Check size={14} />
          </button>
        </div>
      </section>

    </div>
  );
}
