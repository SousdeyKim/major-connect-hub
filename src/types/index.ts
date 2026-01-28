// Core types for MajorConnect

export type SatisfactionLevel = 'enjoys' | 'neutral' | 'dislikes';

export interface Major {
  id: string;
  name: string;
  nameKh?: string;
  description: string;
  overview: string;
  misconceptions: string[];
  careerPaths: string[];
  icon: string;
  category: string;
}

export interface University {
  id: string;
  name: string;
  nameKh?: string;
  location: string;
}

export interface Mentor {
  id: string;
  name: string;
  nameKh?: string;
  university: University;
  major: Major;
  yearOfStudy: number;
  academicBackground: string;
  satisfaction: SatisfactionLevel;
  rating: number;
  reviewCount: number;
  bio: string;
  availableSlots: TimeSlot[];
}

export interface TimeSlot {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

export interface MenteeInfo {
  name: string;
  email: string;
  phone: string;
}

export interface BookingType {
  type: 'paid' | 'pilot';
  pilotCode?: string;
}

export interface Session {
  id: string;
  sessionCode: string;
  mentor: Mentor;
  mentee: MenteeInfo;
  timeSlot: TimeSlot;
  bookingType: BookingType;
  status: SessionStatus;
  paymentReference?: string;
  pilotReference?: string;
  createdAt: string;
}

export type SessionStatus = 
  | 'pending_payment'
  | 'paid'
  | 'pilot_approved'
  | 'scheduled'
  | 'in_progress'
  | 'completed'
  | 'feedback_pending'
  | 'cancelled';

export interface Review {
  id: string;
  sessionId: string;
  mentorId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface BookingStep {
  number: number;
  title: string;
  description: string;
  completed: boolean;
  current: boolean;
}
