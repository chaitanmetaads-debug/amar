import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, Calendar, Clock, MessageCircle, 
  ExternalLink, CheckCircle2, AlertCircle, X, Navigation, CalendarCheck2, Trash2 
} from 'lucide-react';
import { CLINIC_INFO, DOCTORS, SERVICES } from '../data/clinicData';
import { Appointment } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    email: '',
    doctor: 'dr-amar',
    service: 'general-surgery',
    date: '',
    timeSlot: 'Morning (10:00 AM - 01:30 PM)',
    notes: ''
  });

  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [submittedAppointment, setSubmittedAppointment] = useState<Appointment | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailStatus, setEmailStatus] = useState<{ patient: boolean; clinic: boolean; simulated: boolean } | null>(null);

  // Load existing appointments from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('samarth_clinic_appointments');
      if (stored) {
        setAppointments(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load appointments from localStorage", e);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBookAppointment = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setIsSubmitting(true);
    setEmailStatus(null);

    // Validations
    if (!formData.patientName.trim()) {
      setErrorMessage('Please enter the patient\'s full name.');
      setIsSubmitting(false);
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      setIsSubmitting(false);
      return;
    }
    if (!formData.date) {
      setErrorMessage('Please select a preferred appointment date.');
      setIsSubmitting(false);
      return;
    }

    // Verify date is not in the past
    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0,0,0,0);
    if (selectedDate < today) {
      setErrorMessage('Appointment date cannot be in the past.');
      setIsSubmitting(false);
      return;
    }

    const doctorObj = DOCTORS.find(d => d.id === formData.doctor);
    const serviceObj = SERVICES.find(s => s.id === formData.service);

    const doctorName = doctorObj ? doctorObj.name : 'Dr. Amar Shinde';
    const serviceTitle = serviceObj ? serviceObj.title : 'General Consultation';

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          patientName: formData.patientName,
          phone: formData.phone,
          email: formData.email,
          doctor: doctorName,
          service: serviceTitle,
          date: formData.date,
          timeSlot: formData.timeSlot,
          notes: formData.notes,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Server rejected booking request');
      }

      const result = await response.json();
      const newAppointment = result.appointment;
      
      const updatedList = [newAppointment, ...appointments];
      setAppointments(updatedList);
      localStorage.setItem('samarth_clinic_appointments', JSON.stringify(updatedList));
      
      setSubmittedAppointment(newAppointment);
      setEmailStatus(result.emailSent);
      
      if (result.emailSent?.simulated) {
        setSuccessMessage('Appointment registered successfully! (Email parameters are not configured, simulation complete)');
      } else {
        setSuccessMessage('Appointment registered successfully! Confirmation emails dispatched to patient and clinic.');
      }
      
      // Reset form fields
      setFormData({
        patientName: '',
        phone: '',
        email: '',
        doctor: 'dr-amar',
        service: 'general-surgery',
        date: '',
        timeSlot: 'Morning (10:00 AM - 01:30 PM)',
        notes: ''
      });
    } catch (e: any) {
      setErrorMessage(e.message || 'Unable to store appointment. Please try again.');
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancelAppointment = (id: string) => {
    const confirmed = window.confirm("Are you sure you want to cancel this appointment slot?");
    if (!confirmed) return;

    try {
      const updatedList = appointments.filter(apt => apt.id !== id);
      setAppointments(updatedList);
      localStorage.setItem('samarth_clinic_appointments', JSON.stringify(updatedList));
    } catch (e) {
      console.error("Failed to cancel appointment", e);
    }
  };

  // Construct direct WhatsApp message for the submitted appointment
  const getWhatsAppConfirmationUrl = (apt: Appointment) => {
    const msg = `Hello Samarth Multispeciality Clinic, I have registered an appointment slot online via your website:\n\n` +
                `• Patient: ${apt.patientName}\n` +
                `• Doctor: ${apt.doctor}\n` +
                `• Treatment: ${apt.service}\n` +
                `• Date: ${apt.date}\n` +
                `• Session: ${apt.timeSlot}\n\n` +
                `Kindly verify and confirm the booking. Thank you!`;
    return `https://wa.me/${CLINIC_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="bg-slate-50 font-sans min-h-screen text-slate-900 pt-24 pb-16">
      
      {/* Page Header */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-3">
          <span className="text-xs font-bold text-blue-700 tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Contact & Slots
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-900 tracking-tight">
            Schedule a Consultation & Visit Our Clinic
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Reserve your clinical consultation slot instantly, call our frontdesk coordinator, or locate us easily on Alandi Moshi Road.
          </p>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Side: Contact details & Map Embed */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              {/* Clinic Info Box */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-5">
                <div>
                  <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest block">
                    Contact Details
                  </span>
                  <h3 className="text-lg font-bold text-blue-900 mt-0.5">
                    Samarth Multispeciality Clinic Desk
                  </h3>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex gap-3 items-start">
                    <MapPin className="text-blue-700 shrink-0 mt-0.5" size={18} />
                    <div>
                      <span className="block text-slate-400 text-[10px] uppercase font-bold tracking-wider">Address</span>
                      <p className="text-slate-700 text-xs leading-relaxed mt-0.5 font-medium">
                        {CLINIC_INFO.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <Phone className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <div>
                      <span className="block text-slate-400 text-[10px] uppercase font-bold tracking-wider">Phone Consultations</span>
                      <a 
                        href={`tel:${CLINIC_INFO.phone}`} 
                        className="text-blue-900 font-extrabold hover:text-blue-700 text-sm block mt-0.5"
                      >
                        {CLINIC_INFO.phoneFormatted}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <Mail className="text-blue-700 shrink-0 mt-0.5" size={18} />
                    <div>
                      <span className="block text-slate-400 text-[10px] uppercase font-bold tracking-wider">Email Desk</span>
                      <a 
                        href={`mailto:${CLINIC_INFO.email}`} 
                        className="text-slate-800 font-semibold hover:text-blue-700 text-xs block mt-0.5 break-all"
                      >
                        {CLINIC_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direct buttons */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-150">
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="py-2.5 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone size={12} /> Call Desk
                  </a>
                  <a
                    href={`https://wa.me/${CLINIC_INFO.whatsapp.replace('+', '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle size={13} /> WhatsApp
                  </a>
                </div>
              </div>

              {/* Map Embed Section */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-col gap-3">
                <div className="flex justify-between items-center px-1">
                  <span className="text-xs font-bold text-blue-900">Google Map Location</span>
                  <a
                    href={CLINIC_INFO.googleMapsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-700 hover:text-blue-900 text-xs font-bold flex items-center gap-1 transition-colors"
                  >
                    Get Directions <Navigation size={11} />
                  </a>
                </div>
                
                {/* Embed Map IFrame */}
                <div className="w-full h-72 rounded-2xl overflow-hidden border border-slate-200">
                  <iframe
                    src={CLINIC_INFO.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Samarth Multispeciality Clinic Google Map Embed"
                  />
                </div>
              </div>

            </div>

            {/* Right Side: Appointment Booking Form */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              
              {/* Interactive Booking Module */}
              <div 
                id="appointment-booking-section" 
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 scroll-mt-24"
              >
                <div>
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block">
                    Online Reservation Desk
                  </span>
                  <h3 className="text-xl font-extrabold text-blue-900 mt-1">
                    Book Your Appointment Slot
                  </h3>
                  <p className="text-slate-500 text-xs mt-1">
                    Fill in the patient specifications below to register a secure consultation slot.
                  </p>
                </div>

                {/* Success Banner */}
                {successMessage && (
                  <div className="mt-6 bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-2xl flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                    <div className="text-xs leading-relaxed">
                      <strong>Booking Confirmed!</strong> Your consultation slot has been securely logged on our clinic system. Review details on the card below.
                    </div>
                  </div>
                )}

                {/* Error Banner */}
                {errorMessage && (
                  <div className="mt-6 bg-rose-50 border border-rose-200 text-rose-800 p-4 rounded-2xl flex items-start gap-3">
                    <AlertCircle className="text-rose-500 shrink-0 mt-0.5" size={18} />
                    <div className="text-xs leading-relaxed">
                      <strong>Invalid input:</strong> {errorMessage}
                    </div>
                  </div>
                )}

                {/* Form Elements */}
                <form onSubmit={handleBookAppointment} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm font-sans">
                  
                  {/* Patient Name */}
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label htmlFor="patientName" className="font-semibold text-slate-700 text-xs uppercase tracking-wide">
                      Patient Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="patientName"
                      name="patientName"
                      required
                      value={formData.patientName}
                      onChange={handleInputChange}
                      placeholder="Enter patient name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors text-slate-800 text-sm"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="font-semibold text-slate-700 text-xs uppercase tracking-wide">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors text-slate-800 text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-semibold text-slate-700 text-xs uppercase tracking-wide">
                      Email Address <span className="text-slate-400">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors text-slate-800 text-sm"
                    />
                  </div>

                  {/* Doctor selection */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="appointment-doctor-select" className="font-semibold text-slate-700 text-xs uppercase tracking-wide">
                      Select Medical Practitioner <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="appointment-doctor-select"
                      name="doctor"
                      value={formData.doctor}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors text-slate-800 text-sm bg-white"
                    >
                      {DOCTORS.map(doc => (
                        <option key={doc.id} value={doc.id}>
                          {doc.name} ({doc.id === 'dr-amar' ? 'MS Surgery' : doc.id === 'dr-om' ? 'Pediatrician' : 'Gynaecologist'})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Service selection */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="appointment-service-select" className="font-semibold text-slate-700 text-xs uppercase tracking-wide">
                      Select Requested Service <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="appointment-service-select"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors text-slate-800 text-sm bg-white"
                    >
                      {SERVICES.map(srv => (
                        <option key={srv.id} value={srv.id}>
                          {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="date" className="font-semibold text-slate-700 text-xs uppercase tracking-wide">
                      Preferred Date <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors text-slate-800 text-sm bg-white"
                    />
                  </div>

                  {/* Preferred Time Slot */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="timeSlot" className="font-semibold text-slate-700 text-xs uppercase tracking-wide">
                      Session Time Slot <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="timeSlot"
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors text-slate-800 text-sm bg-white"
                    >
                      <option value="Morning (10:00 AM - 01:30 PM)">Morning: 10:00 AM - 1:30 PM</option>
                      <option value="Evening (05:30 PM - 09:00 PM)">Evening: 5:30 PM - 9:00 PM</option>
                    </select>
                  </div>

                  {/* Notes */}
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label htmlFor="notes" className="font-semibold text-slate-700 text-xs uppercase tracking-wide">
                      Describe Symptoms or Brief History <span className="text-slate-400">(Optional)</span>
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Explain symptoms, previous treatments, or special requests..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 transition-colors text-slate-800 text-sm resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="sm:col-span-2 pt-2">
                    <button
                      type="submit"
                      id="submit-appointment-btn"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-700 to-blue-800 text-white font-bold tracking-wide shadow-md shadow-blue-200 cursor-pointer text-center flex items-center justify-center gap-2 transition-all disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Processing Reservation...
                        </>
                      ) : (
                        "Confirm Scheduled Appointment Ticket"
                      )}
                    </button>
                  </div>

                </form>
              </div>

              {/* Submitted Appointment details Display overlay */}
              {submittedAppointment && (
                <div className="bg-[#0f2a4a] text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-blue-900/30 font-sans relative">
                  <button 
                    onClick={() => setSubmittedAppointment(null)}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg"
                  >
                    <X size={18} />
                  </button>
                  <div className="flex items-center gap-2.5 mb-4">
                    <CalendarCheck2 className="text-emerald-400" size={24} />
                    <h4 className="text-lg font-bold text-white">Your Scheduled Ticket Details:</h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
                    <div className="bg-slate-900/40 p-3 rounded-xl border border-white/5">
                      <span className="block text-slate-500 text-[10px] uppercase font-bold">Ticket ID</span>
                      <strong className="text-white text-xs">{submittedAppointment.id}</strong>
                    </div>
                    <div className="bg-slate-900/40 p-3 rounded-xl border border-white/5">
                      <span className="block text-slate-500 text-[10px] uppercase font-bold">Patient Name</span>
                      <strong className="text-white text-xs">{submittedAppointment.patientName}</strong>
                    </div>
                    <div className="bg-slate-900/40 p-3 rounded-xl border border-white/5">
                      <span className="block text-slate-500 text-[10px] uppercase font-bold">Assigned Practitioner</span>
                      <strong className="text-emerald-400 text-xs">{submittedAppointment.doctor}</strong>
                    </div>
                    <div className="bg-slate-900/40 p-3 rounded-xl border border-white/5">
                      <span className="block text-slate-500 text-[10px] uppercase font-bold">Service Category</span>
                      <strong className="text-white text-xs">{submittedAppointment.service}</strong>
                    </div>
                    <div className="bg-slate-900/40 p-3 rounded-xl border border-white/5">
                      <span className="block text-slate-500 text-[10px] uppercase font-bold">Reserved Date</span>
                      <strong className="text-white text-xs">{submittedAppointment.date}</strong>
                    </div>
                    <div className="bg-slate-900/40 p-3 rounded-xl border border-white/5">
                      <span className="block text-slate-500 text-[10px] uppercase font-bold">Preferred Session</span>
                      <strong className="text-white text-xs">{submittedAppointment.timeSlot}</strong>
                    </div>
                  </div>

                  {emailStatus && (
                    <div className="mt-4 p-4 rounded-xl bg-blue-950/40 border border-blue-800/40 text-xs">
                      <span className="block text-slate-400 text-[10px] uppercase font-bold mb-2 tracking-wider">Email Confirmation Dispatch</span>
                      <div className="flex flex-col gap-2 text-slate-300">
                        <div className="flex items-center gap-2">
                          <span className={`w-2.5 h-2.5 rounded-full ${emailStatus.simulated ? 'bg-amber-400' : emailStatus.clinic ? 'bg-emerald-400' : 'bg-rose-400'}`} />
                          <span>Clinic Desk Notification: <strong className={emailStatus.simulated ? 'text-amber-400' : emailStatus.clinic ? 'text-emerald-400' : 'text-rose-400'}>{emailStatus.simulated ? 'Simulated Dispatch' : emailStatus.clinic ? 'Dispatched Successfully' : 'Failed to send'}</strong></span>
                        </div>
                        {submittedAppointment.email && (
                          <div className="flex items-center gap-2">
                            <span className={`w-2.5 h-2.5 rounded-full ${emailStatus.simulated ? 'bg-amber-400' : emailStatus.patient ? 'bg-emerald-400' : 'bg-rose-400'}`} />
                            <span>Patient Ticket Notification (${submittedAppointment.email}): <strong className={emailStatus.simulated ? 'text-amber-400' : emailStatus.patient ? 'text-emerald-400' : 'text-rose-400'}>{emailStatus.simulated ? 'Simulated Dispatch' : emailStatus.patient ? 'Dispatched Successfully' : 'Failed to send'}</strong></span>
                          </div>
                        )}
                        {emailStatus.simulated && (
                          <p className="text-[10px] text-amber-300/80 mt-1 italic leading-relaxed">
                            * System is running in SMTP simulation mode. Configure SMTP environment variables to dispatch real production emails.
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="mt-6 p-4 rounded-xl bg-slate-900/50 border border-white/5 text-xs text-slate-400 leading-relaxed flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span>
                      <strong>Important:</strong> Connect with our clinic desk on WhatsApp to immediately coordinate and lock this slot.
                    </span>
                    <a
                      href={getWhatsAppConfirmationUrl(submittedAppointment)}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg flex items-center gap-1.5 shrink-0 transition-colors"
                    >
                      <MessageCircle size={14} /> Send WhatsApp Confirmation
                    </a>
                  </div>
                </div>
              )}

              {/* Patient Appointment Log List Tracker */}
              {appointments.length > 0 && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-4">
                  <div className="flex justify-between items-center border-b border-slate-50 pb-3">
                    <h4 className="font-extrabold text-slate-900 text-base">
                      My Scheduled Appointments Tracker ({appointments.length})
                    </h4>
                    <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-blue-100 uppercase">
                      Local Cache
                    </span>
                  </div>

                  <div className="flex flex-col gap-3 max-h-[260px] overflow-y-auto">
                    {appointments.map((apt) => (
                      <div 
                        key={apt.id} 
                        className="p-4 rounded-2xl border border-slate-100 bg-slate-50 flex items-start justify-between gap-4 font-sans text-xs"
                      >
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-800">{apt.patientName}</span>
                            <span className="text-[10px] text-slate-400">ID: {apt.id}</span>
                          </div>
                          <p className="text-slate-600">
                            Doctor: <strong className="text-slate-800 font-semibold">{apt.doctor}</strong> | Service: <strong className="text-slate-800 font-semibold">{apt.service}</strong>
                          </p>
                          <p className="text-slate-500 font-medium">
                            Date: <strong className="text-blue-600 font-semibold">{apt.date}</strong> | Session: <strong className="text-slate-700 font-semibold">{apt.timeSlot}</strong>
                          </p>
                        </div>
                        
                        <button
                          onClick={() => handleCancelAppointment(apt.id)}
                          className="p-2 rounded-lg hover:bg-rose-50 hover:text-rose-600 text-slate-400 transition-colors cursor-pointer self-center"
                          title="Cancel Appointment"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
