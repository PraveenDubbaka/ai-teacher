export interface Parent {
  id: string;
  name: string;
  email: string;
  avatar: string;
  plan: "Free" | "Starter" | "Premium" | "Family" | "School" | "Enterprise";
}

export interface Child {
  id: string;
  name: string;
  age: number;
  grade: string;
  readingLevel: string;
  vocabulary: number;
  learningScore: number;
  curiosityIndex: number;
  streak: number;
  favoriteSubjects: string[];
  favoritePersonality: string;
  achievements: string[];
}

export interface Device {
  id: string;
  name: string;
  type: "Speaker" | "Teddy Bear" | "Robot" | "Night Lamp" | "Clock" | "Travel Device" | "Family Speaker";
  battery: number;
  wifi: "Excellent" | "Good" | "Fair" | "Offline";
  firmware: string;
  assignedChildId: string;
  status: "Online" | "Sleeping" | "Updating" | "Offline";
  lastWakeWordTest: string;
}

export interface LearningMetric {
  day: string;
  score: number;
  questions: number;
  vocabulary: number;
  stories: number;
  homework: number;
}

export interface SafetyAlert {
  id: string;
  childId: string;
  severity: "Low" | "Medium" | "High";
  category: "Sensitive Questions" | "Emotional Alerts" | "Bullying Detection" | "Unsafe Requests" | "Night Activity";
  summary: string;
  timestamp: string;
  reviewed: boolean;
}

export interface StoryPack {
  id: string;
  title: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  premium: boolean;
}

export interface Invoice {
  id: string;
  date: string;
  amount: number;
  status: "Paid" | "Pending" | "Failed";
  method: "Credit Card" | "Apple Pay" | "Google Pay" | "PayPal";
}
