import { Doctor, Service, Testimonial, FAQ, Statistic } from '../types';

export const CLINIC_INFO = {
  name: "Samarth Multispeciality Clinic",
  tagline: "Expert Surgical & Healthcare Services You Can Trust",
  subheading: "Providing compassionate, safe, and advanced medical care with personalized treatment for every patient.",
  phone: "+91 8830899644",
  phoneFormatted: "+91 88308 99644",
  whatsapp: "+91 8830899644",
  email: "amarshindeams@gmail.com",
  address: "Alandi Moshi Road, Opposite Gajanan Maharaj Sansthan, PIN 412105",
  addressShort: "Moshi, Pune",
  googleMapsLink: "https://maps.app.goo.gl/JNYbW3qm2VYN4d149?g_st=awb",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.272183842107!2d73.88219517592476!3d18.65179506516625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c75a409f5385%3A0xcfe0cb99df857d42!2sSamarth%20Clinic!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
  experienceYears: 7,
  openHours: "Mon - Sat: 10:00 AM - 1:30 PM, 5:30 PM - 9:00 PM | Sunday: Closed",
  emergencyPhone: "+91 8830899644"
};

export const CLINIC_IMAGES = {
  logo: "/src/assets/images/samarth_logo_1784276624148.jpg",
  heroBanner: "/src/assets/images/clinic_hero_banner_1784268815546.jpg",
  treatmentRoom: "/src/assets/images/clinic_treatment_room_1784268832172.jpg",
  doctorDrAmar: "/src/assets/images/dr_amar_shinde_enhanced_1784277810443.jpg", // Professional enhanced photo matching exact physical look
  doctorDrShruti: "/src/assets/images/dr_shruti_shinde_new_enhanced_1784279065273.jpg", // Professional enhanced photo matching exact physical look
  doctorDrOm: "/src/assets/images/dr_om_narwade_enhanced_1784278115154.jpg", // Professional enhanced photo matching exact physical look
  aboutStory: "/src/assets/images/samarth_clinic_exterior_1784277325748.jpg", // Real clinic exterior photo provided by user
  clinicExterior: "/src/assets/images/samarth_clinic_exterior_1784277325748.jpg" // Dedicated reference
};

export const STATISTICS: Statistic[] = [
  { label: "Years of Experience", value: "7", suffix: "+", iconName: "Award" },
  { label: "Successful Procedures", value: "1500", suffix: "+", iconName: "CheckCircle" },
  { label: "Happy Patients", value: "5000", suffix: "+", iconName: "Smile" },
  { label: "Sanitization Score", value: "100", suffix: "%", iconName: "ShieldCheck" }
];

export const DOCTORS: Doctor[] = [
  {
    id: "dr-amar",
    name: "Dr. Amar Shinde",
    title: "M.S. General Surgeon (ISM) & Proctologist",
    qualification: "M.S. General Surgery (ISM), Proctology Specialist",
    specialties: [
      "General Surgery",
      "Proctology Treatment",
      "Piles (Hemorrhoids) Surgery",
      "Fissure in Ano",
      "Fistula in Ano",
      "Minor Surgical Procedures",
      "Laparoscopic Consultation"
    ],
    experience: "7+ Years",
    regNo: "I-92408 A",
    certifications: [
      "Gold Medalist in Surgery",
      "ACLS Certified (Advanced Cardiovascular Life Support)",
      "BLS Certified (Basic Life Support)"
    ],
    bio: "Dr. Amar Shinde is a highly skilled, gold medalist general surgeon and proctologist with over 7 years of specialized medical practice. Renowned for his surgical precision and patient-first approach, Dr. Shinde utilizes advanced laser and minimally invasive techniques for fast recovery from piles, fissures, fistulas, and other surgical conditions. He is committed to bringing top-tier medical excellence and safety standards to Samarth Multispeciality Clinic.",
    image: CLINIC_IMAGES.doctorDrAmar
  },
  {
    id: "dr-shruti",
    name: "Dr. Shruti Shinde",
    title: "Obstetrics & Gynaecology Specialist (स्त्रीरोग व प्रसूती तज्ज्ञ)",
    qualification: "M.D. (Ayu.), C.G.O.",
    specialties: [
      "Infertility Management",
      "Pregnancy Care & Antenatal Services",
      "PCOS & Hormonal Health",
      "Menopause Care",
      "D & C Procedures",
      "Ayurvedic Garbhasanskar",
      "Women's Reproductive Health",
      "Preventive Gynecological Care"
    ],
    experience: "6+ Years",
    regNo: "I-99858 A",
    bio: "Dr. Shruti Shinde is an experienced and compassionate women's healthcare specialist dedicated to providing comprehensive care for women at every stage of life. She combines modern gynecological practices with principles of Ayurveda to deliver safe, personalized, and holistic treatment.",
    image: CLINIC_IMAGES.doctorDrShruti
  },
  {
    id: "dr-om",
    name: "Dr. Om Narwade",
    title: "Pediatric Specialist (बालरोगतज्ज्ञ)",
    qualification: "B.A.M.S., D.C.H.",
    specialties: [
      "Infant & Child Healthcare",
      "Common Childhood Illnesses",
      "Growth & Development Monitoring",
      "Vaccinations & Immunization",
      "Preventive Child Care",
      "Adolescent Health Counseling"
    ],
    experience: "5+ Years",
    regNo: "I-102435 B",
    bio: "Dr. Om Narwade is a dedicated Pediatric Specialist committed to providing compassionate and comprehensive healthcare for infants, children, and adolescents. He focuses on accurate diagnosis, preventive care, growth monitoring, vaccinations, and the treatment of common childhood illnesses, ensuring every child receives safe and personalized medical care in a friendly and comfortable environment.",
    image: CLINIC_IMAGES.doctorDrOm
  }
];

export const SERVICES: Service[] = [
  {
    id: "general-surgery",
    title: "General Surgery",
    shortDesc: "Expert surgical care for major, minor, and advanced laser/laparoscopic therapeutic conditions.",
    longDesc: "Samarth Multispeciality Clinic provides world-class General Surgical consultation and intervention. Led by Dr. Amar Shinde (Gold Medalist Surgeon), we focus on modern, minimally invasive surgeries that reduce patient discomfort, risk of complications, and post-surgery hospitalization times.",
    category: "surgery",
    iconName: "Stethoscope",
    details: [
      "Pre-surgical evaluations and detailed consultations",
      "Advanced laparoscopic/keyhole and laser guidance",
      "Safe, sterile post-operative recovery monitoring",
      "Experienced management of emergency surgical symptoms"
    ]
  },
  {
    id: "proctology-treatment",
    title: "Proctology Treatment",
    shortDesc: "Specialized, modern treatments for colon, rectal, and anal tract conditions with quick recovery.",
    longDesc: "Our proctology unit offers expert diagnostic screening and surgical interventions for conditions of the anal and rectal regions. Utilizing modern laser techniques, patients experience significantly lower blood loss and can return to standard activities much sooner.",
    category: "surgery",
    iconName: "Activity",
    details: [
      "Laser and radiofrequency therapy for rectal disorders",
      "Hemorrhoidal artery ligation and customized interventions",
      "Pain-free treatments with high success outcomes",
      "Personalized lifestyle and dietary rehabilitation counseling"
    ]
  },
  {
    id: "piles-treatment",
    title: "Piles (Hemorrhoids) Treatment",
    shortDesc: "Advanced pain-free therapies and micro-surgeries for grade I to IV hemorrhoids.",
    longDesc: "Piles treatment is handled with complete privacy and premium clinical standards. We use state-of-the-art procedures (infrared coagulation, laser ablation, or band ligation) based on severity, targeting quick relief from bleeding, pain, and discomfort.",
    category: "surgery",
    iconName: "HeartPulse",
    details: [
      "Accurate staging of hemorrhoidal symptoms",
      "Laser hemorrhoidoplasty (LHP) for painless treatment",
      "Completely bloodless, stitchless outpatient procedures",
      "Short 30-minute procedure with immediate discharge"
    ]
  },
  {
    id: "fissure-treatment",
    title: "Fissure Treatment",
    shortDesc: "Comprehensive medical and surgical therapy for painful anal fissures with zero pain.",
    longDesc: "An anal fissure is a small tear that causes extreme discomfort. Our clinic provides prompt healing solutions ranging from advanced medical creams and diet modifications to advanced, painless sphincterotomy or laser interventions for long-term chronic fissure relief.",
    category: "surgery",
    iconName: "Flame",
    details: [
      "Non-surgical medical management and symptom relief",
      "Lateral internal sphincterotomy (LIS) for chronic cases",
      "Laser-assisted painless fissure ablation",
      "Prevention of recurrence with specialized colon health guidance"
    ]
  },
  {
    id: "fistula-treatment",
    title: "Fistula Treatment",
    shortDesc: "Specialized, high-precision treatment including LIFT and laser ablation for anal fistula.",
    longDesc: "Treating anal fistulas requires extreme surgical expertise to prevent recurrence and preserve sphincter control. Dr. Amar Shinde specializes in advanced procedures like Fistula Laser Closure (FiLaC) and LIFT, which boast excellent outcomes.",
    category: "surgery",
    iconName: "Layers",
    details: [
      "FiLaC (Fistula Laser Closure) - state-of-the-art treatment",
      "Surgical fistulotomy and seton placement options",
      "Zero risk of sphincter damage and incontinence",
      "Advanced tissue imaging & post-operative tracking"
    ]
  },
  {
    id: "medical-consultation",
    title: "Medical Consultation",
    shortDesc: "Expert clinical evaluation and diagnosis for common medical and lifestyle diseases.",
    longDesc: "Under the care of Dr. Shruti Shinde (M.D.), our clinical consultation provides diagnostic depth for a vast array of general ailments, lifestyle illnesses, and health concerns. We listen carefully and construct structured wellness strategies.",
    category: "general",
    iconName: "Heart",
    details: [
      "Comprehensive systemic medical check-ups",
      "Hypertension, diabetes, and thyroid management",
      "Prescriptions and diagnostic lab-test correlations",
      "Holistic wellness strategies and medication monitoring"
    ]
  },
  {
    id: "family-healthcare",
    title: "Family Healthcare",
    shortDesc: "Compassionate, patient-centered clinical care for all age groups, children to seniors.",
    longDesc: "We provide comprehensive health coverage for your entire family. From childhood vaccinations and growth checks to geriatric support and acute illness treatments, we ensure a warm, comfortable clinical relationship.",
    category: "general",
    iconName: "Users",
    details: [
      "Pediatric development and healthcare guidance",
      "Adult routine physicals and vaccination support",
      "Geriatric lifestyle management and gentle therapeutic care",
      "All-year family health coordination and screening plans"
    ]
  },
  {
    id: "preventive-health",
    title: "Preventive Health Check-up",
    shortDesc: "Comprehensive screening packages designed to catch and prevent illness early.",
    longDesc: "Prevention is better than cure. Our clinical health-check panels assess vital parameters including kidney, liver, cardiovascular, and blood metrics to ensure that minor health changes are identified before they turn critical.",
    category: "general",
    iconName: "Shield",
    details: [
      "Custom screening packages for different age tiers",
      "Cardiac risk profile assessments",
      "Comprehensive lab markers analysis",
      "Empathetic physician review and guidance sessions"
    ]
  },
  {
    id: "minor-surgery",
    title: "Minor Surgery",
    shortDesc: "In-clinic sterile procedures for cysts, lipomas, abscesses, and wound management.",
    longDesc: "Samarth Multispeciality Clinic houses a modern minor-surgical suite for immediate daycare treatments. From drainage of painful abscesses and excision of lipomas/sebaceous cysts to stitch-ups under local anesthesia, our hygiene standard is absolute.",
    category: "specialized",
    iconName: "Scissors",
    details: [
      "Lipoma, sebaceous cyst, and corn removals",
      "Sterile dressing, abscess incisions, and drainages",
      "Biopsy tissue collections with fully documented pathology",
      "Pain-free stitch techniques under local anesthesia"
    ]
  },
  {
    id: "follow-up-care",
    title: "Follow-up Care",
    shortDesc: "Structured monitoring and rehabilitation tracking for quick post-procedure recovery.",
    longDesc: "Our medical commitment doesn't end in the surgical room. We offer meticulous follow-up tracks, dressing updates, and healing scans to make sure you return to absolute vigor under direct surgeon oversight.",
    category: "specialized",
    iconName: "RefreshCw",
    details: [
      "Regular surgical wound reviews and dressing adjustments",
      "Nutritional and digestive therapy monitoring",
      "On-call physician query support during active healing",
      "Free 1-week digital health checkpoint post-treatment"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Rajesh Gaikwad",
    rating: 5,
    comment: "I was suffering from severe pain due to a fistula for over a year. Dr. Amar Shinde operated on me using laser surgery. The whole procedure was painless and I got discharged within hours! Truly a life-changing experience. The clinic is incredibly hygienic.",
    date: "June 14, 2026",
    treatment: "Laser Fistula Surgery"
  },
  {
    id: "t2",
    name: "Sunita Deshmukh",
    rating: 5,
    comment: "Excellent care by Dr. Shruti Shinde. She diagnosed my chronic diabetes and hypertension with so much patience and designed a wonderful treatment and diet plan. My parameters are perfectly normal now. Highly recommend Samarth Multispeciality Clinic!",
    date: "May 28, 2026",
    treatment: "Diabetes & Hypertension Management"
  },
  {
    id: "t3",
    name: "Milind Kulkarni",
    rating: 5,
    comment: "I got a minor sebaceous cyst removed at Samarth Multispeciality Clinic. I was nervous about pain, but Dr. Amar Shinde performed it under local anesthesia, talking through the process to ease my anxiety. The stitching is seamless, no scar left. Highly professional!",
    date: "April 10, 2026",
    treatment: "Sebaceous Cyst Excision"
  },
  {
    id: "t4",
    name: "Archana Patil",
    rating: 5,
    comment: "We take our entire family to Dr. Shruti Shinde. She is very approachable, warm, and highly skilled. She never over-prescribes medicines and always focuses on healthy lifestyle remedies. The clinic is beautiful and modern.",
    date: "July 02, 2026",
    treatment: "Family Preventive Health Check"
  }
];

export const FAQS: FAQ[] = [
  {
    id: "faq1",
    question: "How do I book an appointment?",
    answer: "You can book an appointment easily by using our online Appointment Form on the contact page, clicking the 'Book Appointment' button in the menu, calling us directly at +91 8830899644, or sending us a message on WhatsApp. We will confirm your slot instantly.",
    category: "General"
  },
  {
    id: "faq2",
    question: "What are your consultation timings?",
    answer: "Samarth Multispeciality Clinic is open Monday through Saturday: Morning Session: 10:00 AM - 1:30 PM, Evening Session: 5:30 PM - 9:00 PM. We are closed on Sundays except for pre-scheduled surgical emergencies.",
    category: "General"
  },
  {
    id: "faq3",
    question: "Do you treat piles and fissure?",
    answer: "Yes, Dr. Amar Shinde is a gold medalist general surgeon and proctologist who specializes in modern, painless laser treatments for Piles (hemorrhoids), Fissures, and Fistulas. Most proctology procedures are done on a daycare basis, allowing you to go home on the same day.",
    category: "Treatments"
  },
  {
    id: "faq4",
    question: "Where is the clinic located?",
    answer: "Our clinic is located at Alandi Moshi Road, Opposite Gajanan Maharaj Sansthan, Moshi, Pune, PIN 412105. You can find our precise location embedded on the interactive map on our Contact page or click 'Get Directions' to open Google Maps.",
    category: "Location"
  },
  {
    id: "faq5",
    question: "Are minors or pediatric surgical consultations available?",
    answer: "Yes, we treat patient profiles of all age groups. Dr. Shruti Shinde handles pediatric and family healthcare while Dr. Amar Shinde evaluates and handles minor pediatric surgical issues, ensuring clean, empathetic, and gentle treatment.",
    category: "Treatments"
  },
  {
    id: "faq6",
    question: "What hygiene protocols are followed at Samarth Multispeciality Clinic?",
    answer: "We maintain 100% strict hospital-grade sanitization. All surgical instruments undergo rigorous autoclave sterilization. The consulting chambers, minor OT, and patient rooms are sanitized continuously throughout the day to ensure zero contamination risk.",
    category: "Safety"
  }
];
