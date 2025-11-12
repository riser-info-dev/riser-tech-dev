export interface VisitorData {
  ip: string;
  location?: string;
  browser: string;
  os: string;
  device: string;
  page: string;
  referrer: string;
  userAgent: string;
  language: string;
  timezone?: string;
  timestamp: string;
}

export interface EnquiryData {
  name: string;
  email: string;
  contact: string;
  service?: string;
  message?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

