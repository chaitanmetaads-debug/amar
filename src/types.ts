export interface Doctor {
  id: string;
  name: string;
  title: string;
  qualification: string;
  specialties: string[];
  experience: string;
  regNo: string;
  bio: string;
  certifications?: string[];
  image: string;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  category: 'surgery' | 'general' | 'specialized';
  iconName: string; // Used to dynamic map to Lucide icons
  details: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  treatment?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Appointment {
  id: string;
  patientName: string;
  phone: string;
  email?: string;
  doctor: string;
  service: string;
  date: string;
  timeSlot: string;
  notes?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface Statistic {
  label: string;
  value: string;
  suffix: string;
  iconName: string;
}
