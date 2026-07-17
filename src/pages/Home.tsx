import { motion } from 'motion/react';
import { 
  Award, ShieldCheck, Activity, HeartPulse, Heart, Users, 
  Smile, CheckCircle, Calendar, Phone, MessageCircle, 
  ArrowRight, Star, MapPin, ChevronDown, Check, Sparkles, Clock 
} from 'lucide-react';
import { CLINIC_INFO, SERVICES, DOCTORS, TESTIMONIALS, FAQS, STATISTICS, CLINIC_IMAGES } from '../data/clinicData';
import { useState } from 'react';

interface HomeProps {
  setActivePage: (page: string) => void;
}

export default function Home({ setActivePage }: HomeProps) {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const featuredServices = SERVICES.slice(0, 5); // General, Proctology, Piles, Fissure, Fistula

  // Icon mapper helper
  const getIcon = (name: string, className = "text-blue-600") => {
    switch (name) {
      case 'Award': return <Award className={className} size={24} />;
      case 'CheckCircle': return <CheckCircle className={className} size={24} />;
      case 'Smile': return <Smile className={className} size={24} />;
      case 'ShieldCheck': return <ShieldCheck className={className} size={24} />;
      case 'Stethoscope': return <Activity className={className} size={24} />;
      case 'Activity': return <Activity className={className} size={24} />;
      case 'HeartPulse': return <HeartPulse className={className} size={24} />;
      case 'Flame': return <Activity className={className} size={24} />; // fallback
      case 'Layers': return <Activity className={className} size={24} />; // fallback
      case 'Heart': return <Heart className={className} size={24} />;
      case 'Users': return <Users className={className} size={24} />;
      default: return <HeartPulse className={className} size={24} />;
    }
  };

  const handleBookNow = () => {
    setActivePage('contact');
    window.location.hash = 'contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLearnMore = () => {
    setActivePage('services');
    window.location.hash = 'services';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDoctorClick = () => {
    setActivePage('doctors');
    window.location.hash = 'doctors';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50 font-sans min-h-screen text-slate-900 selection:bg-blue-700 selection:text-white">
      
      {/* 1. Full-Screen Hero Banner */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        
        {/* Background Image with Elegant Blue Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={CLINIC_IMAGES.heroBanner}
            alt="Samarth Multispeciality Clinic Premium Facilities"
            className="w-full h-full object-cover object-center scale-105 filter brightness-[0.35] blur-[1px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/75" />
        </div>

        {/* Content Panel */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 py-1.5 px-4 rounded-full text-xs font-semibold tracking-wide self-center lg:self-start backdrop-blur-md"
              >
                <Sparkles size={14} className="text-emerald-400" />
                7+ Years of Award-Winning Surgical Care
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
              >
                {CLINIC_INFO.tagline}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0"
              >
                {CLINIC_INFO.subheading}
              </motion.p>

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mt-4"
              >
                <button
                  onClick={handleBookNow}
                  id="hero-book-btn"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-bold shadow-lg shadow-blue-500/20 hover:scale-102 hover:shadow-xl hover:shadow-emerald-500/10 active:scale-98 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar size={18} />
                  Book Appointment
                </button>
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  id="hero-call-btn"
                  className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/10 hover:bg-white/25 text-white font-semibold border border-white/20 hover:border-white/40 transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-md"
                >
                  <Phone size={16} />
                  Call Support
                </a>
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsapp.replace('+', '')}?text=Hi Samarth Multispeciality Clinic, I want to book an appointment.`}
                  target="_blank"
                  rel="noreferrer"
                  id="hero-whatsapp-btn"
                  className="w-full sm:w-auto px-7 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </motion.div>
            </div>

            {/* Right Booking Card / Highlight Banner */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 w-full max-w-md mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl text-white font-sans">
                <h3 className="text-xl font-bold tracking-tight mb-2 flex items-center gap-2 text-white">
                  <Activity size={20} className="text-emerald-400 animate-pulse" />
                  Clinic Hours & Location
                </h3>
                <p className="text-slate-300 text-sm mb-6">
                  Experience hygienic medical standards in the heart of Moshi, Pune.
                </p>

                <div className="flex flex-col gap-4">
                  <div className="flex gap-3 bg-slate-900/40 p-3.5 rounded-2xl border border-white/5">
                    <Calendar className="text-blue-400 mt-1" size={18} />
                    <div>
                      <span className="block text-xs text-slate-400 uppercase font-bold">Consultation Days</span>
                      <span className="text-sm font-semibold text-white">Monday - Saturday</span>
                    </div>
                  </div>

                  <div className="flex gap-3 bg-slate-900/40 p-3.5 rounded-2xl border border-white/5">
                    <Clock className="text-emerald-400 mt-1" size={18} />
                    <div>
                      <span className="block text-xs text-slate-400 uppercase font-bold">Timings</span>
                      <span className="text-sm font-semibold text-white">10:00 AM - 1:30 PM</span>
                      <span className="block text-sm font-semibold text-white">5:30 PM - 9:00 PM</span>
                    </div>
                  </div>

                  <div className="flex gap-3 bg-slate-900/40 p-3.5 rounded-2xl border border-white/5">
                    <MapPin className="text-orange-400 mt-1" size={18} />
                    <div>
                      <span className="block text-xs text-slate-400 uppercase font-bold">Address</span>
                      <span className="text-sm text-slate-200">Alandi Moshi Road, Pune</span>
                      <a 
                        href={CLINIC_INFO.googleMapsLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-blue-300 hover:underline flex items-center gap-1 mt-1 font-medium"
                      >
                        Navigate on Google Maps <ArrowRight size={10} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex justify-between items-center text-xs">
                  <span className="text-slate-300 font-medium">Need immediate consultation?</span>
                  <a href={`tel:${CLINIC_INFO.phone}`} className="text-emerald-400 font-extrabold hover:underline">
                    {CLINIC_INFO.phoneFormatted}
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Stat Counter Widgets */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATISTICS.map((stat, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5 p-4 bg-white border border-slate-200 rounded-2xl hover:border-blue-400 hover:shadow-sm transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  {getIcon(stat.iconName, "text-blue-700")}
                </div>
                <div className="text-center sm:text-left">
                  <span className="block text-2xl font-bold text-blue-900 tracking-tight leading-none">
                    {stat.value}{stat.suffix}
                  </span>
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mt-1 block">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Clinic Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image grid representing clinical professionalism */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-emerald-100 rounded-3xl -z-10" />
              <img 
                src={CLINIC_IMAGES.aboutStory}
                alt="Samarth Multispeciality Clinic Exterior Facade"
                className="w-full h-80 md:h-[400px] object-cover rounded-3xl shadow-xl border border-slate-200"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur shadow-lg p-4 rounded-2xl max-w-[180px] border border-slate-100">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-amber-500 font-bold">★</span>
                  <span className="text-xs font-bold">Gold Medalist</span>
                </div>
                <span className="text-[11px] text-slate-500 leading-tight block">
                  Top general surgery standards guaranteed.
                </span>
              </div>
            </div>

            {/* Right clinical narrative */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-xs font-bold text-blue-600 tracking-widest uppercase">
                Welcome to Samarth Multispeciality Clinic
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                7+ Years of Uncompromising Medical Excellence and Patient Safety
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                Founded with a vision to provide specialized, reliable, and compassionate healthcare, <strong>Samarth Multispeciality Clinic</strong> has emerged as a premium clinic center in Pune. Under the direction of our renowned clinical professionals, we focus on cutting-edge therapies that prioritize rapid relief and complete recovery.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm">
                We believe in architectural hygiene and safety, treating each patient like family. We pride ourselves on offering modern laser-based surgical options for proctology alongside customized preventive medical care.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">✓</div>
                  State of the art Laser Therapy
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">✓</div>
                  Highly hygienic & sterile Minor OT
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">✓</div>
                  Comprehensive Patient Tracking
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">✓</div>
                  Affordable consultations and medicine
                </div>
              </div>

              <div className="flex gap-4 items-center mt-4">
                <button
                  onClick={() => setActivePage('about')}
                  className="px-6 py-3 rounded-xl bg-blue-50 text-blue-700 font-bold hover:bg-blue-100 text-sm transition-all duration-200 cursor-pointer flex items-center gap-2"
                >
                  Read Our Story
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Doctor Highlights */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-3 mb-12">
            <span className="text-xs font-bold text-blue-700 tracking-widest uppercase bg-blue-50 px-2.5 py-1 rounded border border-blue-100 self-center">
              Our Medical Leaders
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900 tracking-tight leading-tight">
              Consult with Award-Winning & Qualified Clinicians
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Our clinic brings combined general surgery proficiency and expert family medicine care, backed by official national certifications and clinical registries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {DOCTORS.map((doc) => (
              <div key={doc.id} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-200 flex flex-col h-full group hover:border-blue-400 transition-all">
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-blue-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-sm">
                    {doc.experience} Experience
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-3 flex-grow">
                  <div>
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest block">
                      {doc.id === 'dr-amar' ? 'Surgeon & Proctologist' : 'Physician'}
                    </span>
                    <h3 className="text-lg font-bold text-blue-900 mt-0.5">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500">
                      {doc.title}
                    </p>
                  </div>
                  
                  <div className="text-[10px] text-slate-400 border-b border-slate-100 pb-2">
                    Registration Number: <strong>{doc.regNo}</strong>
                  </div>

                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                    {doc.bio}
                  </p>

                  <div className="flex flex-col gap-1.5 mt-auto pt-3 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-700">Areas of Competence:</span>
                    <div className="flex flex-wrap gap-1">
                      {doc.specialties.slice(0, 3).map((spec, sidx) => (
                        <span key={sidx} className="bg-slate-50 text-slate-600 text-[9px] font-semibold px-2 py-0.5 rounded border border-slate-200">
                          {spec}
                        </span>
                      ))}
                      {doc.specialties.length > 3 && (
                        <span className="text-[9px] text-blue-600 font-bold self-center px-1">
                          +{doc.specialties.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={handleDoctorClick}
                    className="w-full mt-3 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-700 hover:text-white text-blue-700 font-bold text-xs transition-all duration-200 flex items-center justify-center gap-1"
                  >
                    View Doctor Portfolio
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Featured Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 mb-10">
            <div>
              <span className="text-xs font-bold text-blue-700 tracking-widest uppercase bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100">
                Care & Treatment Specialties
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900 tracking-tight leading-tight mt-2">
                Featured Clinical Treatments
              </h2>
            </div>
            <button
              onClick={handleLearnMore}
              className="text-blue-700 hover:text-blue-900 font-bold text-sm flex items-center gap-1 mt-2 md:mt-0 transition-colors"
            >
              Browse All 10 Services <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((srv, idx) => (
              <div 
                key={srv.id} 
                className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex flex-col gap-3.5 hover:border-blue-400 hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-base group-hover:bg-blue-700 group-hover:text-white transition-colors">
                  ⚡
                </div>
                <div>
                  <h3 className="text-base font-bold text-blue-900 tracking-tight leading-snug">
                    {srv.title}
                  </h3>
                  <span className="inline-block bg-emerald-50 text-emerald-700 text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded border border-emerald-100 mt-1">
                    {srv.category}
                  </span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {srv.shortDesc}
                </p>
                
                <ul className="flex flex-col gap-1 text-xs text-slate-600 border-t border-slate-100 pt-2.5 mt-auto">
                  {srv.details.slice(0, 2).map((det, didx) => (
                    <li key={didx} className="flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold shrink-0">✓</span>
                      <span>{det}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleLearnMore}
                  className="mt-3 pt-2.5 border-t border-slate-100 text-blue-700 hover:text-blue-950 font-bold text-xs flex items-center gap-1 text-left w-full transition-colors"
                >
                  Learn More Treatment Details <ArrowRight size={10} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-slate-900" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest">
                Our Clinic Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Why Patients Put Their Absolute Trust in Us
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Choosing the right clinic represents a decision to trust. At Samarth Multispeciality Clinic, we ensure your healthcare experience is seamless, highly sterile, pain-free, and exceptionally skilled.
              </p>
              
              <div className="mt-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-400/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <span className="block font-bold text-sm text-white">Advanced Safety Protocols</span>
                  <span className="text-xs text-slate-400">Class 100 sterile environment in Moshi.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 font-bold text-xs">01</div>
                <div>
                  <h4 className="font-bold text-sm text-white">7+ Years Experience</h4>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">Providing surgical precision and specialized family check-ups since inception.</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 font-bold text-xs">02</div>
                <div>
                  <h4 className="font-bold text-sm text-white">Gold Medalist Surgeon</h4>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">Dr. Amar Shinde holds top-level surgeon accolades and gold standard medical training.</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 font-bold text-xs">03</div>
                <div>
                  <h4 className="font-bold text-sm text-white">Hygienic Environment</h4>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">Advanced sanitization measures and continuous sterile monitoring cycles.</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 font-bold text-xs">04</div>
                <div>
                  <h4 className="font-bold text-sm text-white">Modern Laser Equipment</h4>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">Equipped with painless high-precision diode laser capabilities for proctology.</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 font-bold text-xs">05</div>
                <div>
                  <h4 className="font-bold text-sm text-white">Affordable Healthcare</h4>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">Pristine clinical expertise without heavy corporate hospital bills.</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 font-bold text-xs">06</div>
                <div>
                  <h4 className="font-bold text-sm text-white">Patient Satisfaction</h4>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">Over 5,000 satisfied patients across Pune, Pimpri, and Alandi sectors.</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 8. Patient Testimonials & Google Reviews Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-3 mb-12">
            <span className="text-xs font-bold text-blue-700 tracking-widest uppercase bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100 self-center">
              Healing Stories
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900 tracking-tight leading-tight">
              What Our Recovered Patients Say
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              We measure our clinic success in healthy smiles and active, pain-free lives. Read actual feedback from treated patient profiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <div 
                key={t.id} 
                className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex flex-col gap-3.5 relative hover:border-blue-300 hover:shadow-md transition-all duration-300"
              >
                <div className="absolute top-6 right-6 text-slate-100 font-serif text-6xl leading-none pointer-events-none select-none">
                  “
                </div>
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic z-10">
                  "{t.comment}"
                </p>
                
                <div className="flex items-center justify-between border-t border-slate-100 pt-3 mt-auto">
                  <div>
                    <span className="block text-sm font-bold text-blue-900">{t.name}</span>
                    <span className="text-[10px] text-slate-400">{t.date}</span>
                  </div>
                  {t.treatment && (
                    <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-3 py-1 rounded-full border border-emerald-100">
                      {t.treatment}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Google Reviews Banner */}
          <div className="mt-12 bg-emerald-50/50 border border-slate-200 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center border border-slate-200">
                <span className="text-xl font-bold text-[#4285F4]">G</span>
              </div>
              <div>
                <span className="block font-bold text-blue-900 text-base leading-tight">Google Ratings & Reviews</span>
                <span className="text-xs text-slate-500">Average rating: <strong className="text-slate-800">4.9 / 5.0 Stars</strong> based on verified clinical checks.</span>
              </div>
            </div>
            <a 
              href={CLINIC_INFO.googleMapsLink} 
              target="_blank" 
              rel="noreferrer"
              className="px-5 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-all flex items-center gap-1.5 shadow-sm"
            >
              Write a Google Review <ArrowRight size={12} />
            </a>
          </div>

        </div>
      </section>

      {/* 9. Appointment Call-To-Action Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Schedule Your Certified Clinical Slot Today
          </h2>
          <p className="text-blue-100 max-w-2xl text-xs sm:text-sm font-light leading-relaxed">
            Take a decisive step toward health and complete recovery. Fill out our simple slot booking form or connect immediately with our frontdesk operator on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <button
              onClick={handleBookNow}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-blue-700 hover:bg-slate-50 font-extrabold text-sm shadow transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              Book Consultation Now
            </button>
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 10. Frequently Asked Questions (FAQ) Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center flex flex-col gap-3 mb-16">
            <span className="text-xs font-bold text-blue-600 tracking-widest uppercase">
              Have Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-sm">
              Read quick clinical answers regarding consultation, appointment steps, location details, and proctology treatments.
            </p>
          </div>

          <div className="flex flex-col gap-4 font-sans">
            {FAQS.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'border-blue-400 bg-blue-50/30 shadow-sm' 
                      : 'border-slate-200 bg-white hover:bg-slate-50/50 hover:border-blue-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex justify-between items-center gap-4 focus:outline-none cursor-pointer"
                    id={`faq-btn-${faq.id}`}
                  >
                    <span className="font-bold text-slate-800 text-sm sm:text-base">
                      {faq.question}
                    </span>
                    <span className={`p-1 rounded-lg bg-slate-100 text-slate-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-blue-100 text-blue-600' : ''}`}>
                      <ChevronDown size={18} />
                    </span>
                  </button>

                  <div 
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? 'max-h-60 border-t border-slate-100' : 'max-h-0'
                    }`}
                  >
                    <div className="p-5 text-slate-600 text-xs sm:text-sm leading-relaxed bg-white">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
