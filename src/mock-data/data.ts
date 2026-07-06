import { Child, Device, Invoice, LearningMetric, Parent, SafetyAlert, StoryPack } from "@/types/domain";

export const parent: Parent = {
  id: "parent-1",
  name: "Priya Dubbaka",
  email: "priya@heyteacher.app",
  avatar: "PD",
  plan: "Family",
};

export const children: Child[] = [
  {
    id: "child-1",
    name: "Aarav",
    age: 8,
    grade: "Grade 3",
    readingLevel: "Level N",
    vocabulary: 1420,
    learningScore: 91,
    curiosityIndex: 88,
    streak: 23,
    favoriteSubjects: ["Science", "Space", "Animals"],
    favoritePersonality: "Explorer",
    achievements: ["100 Questions Club", "7 Day Streak", "Vocabulary Sprinter"],
  },
  {
    id: "child-2",
    name: "Maya",
    age: 6,
    grade: "Grade 1",
    readingLevel: "Level J",
    vocabulary: 890,
    learningScore: 84,
    curiosityIndex: 92,
    streak: 15,
    favoriteSubjects: ["Stories", "Friendship", "Math"],
    favoritePersonality: "Teacher",
    achievements: ["Story Listener", "Kind Communicator", "Math Explorer"],
  },
];

export const devices: Device[] = [
  { id: "dev-1", name: "Kitchen Nest", type: "Family Speaker", battery: 100, wifi: "Excellent", firmware: "3.2.9", assignedChildId: "child-1", status: "Online", lastWakeWordTest: "Pass" },
  { id: "dev-2", name: "Starlight Teddy", type: "Teddy Bear", battery: 72, wifi: "Good", firmware: "3.2.8", assignedChildId: "child-2", status: "Sleeping", lastWakeWordTest: "Pass" },
  { id: "dev-3", name: "Roadtrip Buddy", type: "Travel Device", battery: 43, wifi: "Fair", firmware: "3.1.4", assignedChildId: "child-1", status: "Online", lastWakeWordTest: "Pass" },
  { id: "dev-4", name: "Study Robot", type: "Robot", battery: 87, wifi: "Excellent", firmware: "3.3.0", assignedChildId: "child-2", status: "Updating", lastWakeWordTest: "Pending" },
];

export const weeklyLearning: LearningMetric[] = [
  { day: "Mon", score: 76, questions: 18, vocabulary: 26, stories: 1, homework: 1 },
  { day: "Tue", score: 82, questions: 23, vocabulary: 34, stories: 2, homework: 1 },
  { day: "Wed", score: 79, questions: 21, vocabulary: 29, stories: 1, homework: 2 },
  { day: "Thu", score: 86, questions: 27, vocabulary: 39, stories: 2, homework: 2 },
  { day: "Fri", score: 89, questions: 33, vocabulary: 44, stories: 2, homework: 1 },
  { day: "Sat", score: 92, questions: 36, vocabulary: 47, stories: 3, homework: 0 },
  { day: "Sun", score: 90, questions: 29, vocabulary: 41, stories: 2, homework: 0 },
];

export const safetyAlerts: SafetyAlert[] = [
  { id: "sa-1", childId: "child-1", severity: "Medium", category: "Sensitive Questions", summary: "Asked about wildfire news impact.", timestamp: "2026-07-03T19:10:00Z", reviewed: false },
  { id: "sa-2", childId: "child-2", severity: "Low", category: "Night Activity", summary: "2 bedtime story requests after quiet hours.", timestamp: "2026-07-04T03:20:00Z", reviewed: true },
  { id: "sa-3", childId: "child-1", severity: "High", category: "Bullying Detection", summary: "Conversation included school conflict language.", timestamp: "2026-07-04T16:45:00Z", reviewed: false },
];

export const storyPacks: StoryPack[] = [
  { id: "sp-1", title: "Galaxy Quest Adventures", category: "Space", price: 9.99, rating: 4.9, reviews: 4112, premium: true },
  { id: "sp-2", title: "Bedtime Forest Friends", category: "Bedtime", price: 4.99, rating: 4.8, reviews: 1954, premium: false },
  { id: "sp-3", title: "Math Pirates Challenge", category: "Math Packs", price: 7.99, rating: 4.7, reviews: 1387, premium: true },
  { id: "sp-4", title: "Dino Science Lab", category: "Science Packs", price: 8.99, rating: 4.9, reviews: 2264, premium: true },
];

export const invoices: Invoice[] = [
  { id: "INV-2406-884", date: "2026-06-01", amount: 29, status: "Paid", method: "Apple Pay" },
  { id: "INV-2405-761", date: "2026-05-01", amount: 29, status: "Paid", method: "Credit Card" },
  { id: "INV-2404-645", date: "2026-04-01", amount: 29, status: "Paid", method: "PayPal" },
];

export const notifications = [
  "Aarav unlocked the Vocabulary Sprinter badge.",
  "Firmware 3.3.0 is available for Study Robot.",
  "New recommendation: Ocean Ecosystems Story Pack.",
  "Teacher note: Maya improved subtraction fluency.",
];

export const personalities = [
  { name: "Scientist", style: "Evidence-first and hypothesis driven", age: "7-12" },
  { name: "Teacher", style: "Patient and curriculum-aligned", age: "5-10" },
  { name: "Explorer", style: "Curious and adventure-led", age: "6-11" },
  { name: "Astronaut", style: "Mission-based problem solving", age: "7-12" },
  { name: "Robot", style: "Structured and logic friendly", age: "6-12" },
  { name: "Pirate", style: "Gamified quests and riddles", age: "6-10" },
  { name: "Wizard", style: "Imaginative and metaphor rich", age: "6-11" },
  { name: "Princess", style: "Story-led confidence building", age: "5-9" },
  { name: "Historian", style: "Context and cause-effect narratives", age: "8-12" },
  { name: "Musician", style: "Rhythm and memory techniques", age: "5-10" },
  { name: "Animal Expert", style: "Nature and empathy-centered", age: "5-11" },
];

export const dashboardSummary = {
  todayLearningMinutes: 72,
  weeklyLearningMinutes: 438,
  monthlyLearningMinutes: 1820,
  currentStreak: 23,
  learningScore: 89,
  questionsAsked: 221,
  vocabularyLearned: 260,
  homeworkCompleted: 14,
  storiesRead: 19,
};
