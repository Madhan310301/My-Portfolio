export interface ExperienceEntry {
  period: string;
  category: string;
  tag: string;
  role: string;
  bullets: string[];
}

export const EXPERIENCE_DATA: ExperienceEntry[] = [
  {
    period: "2026 — Present",
    category: "HACKATHON · SRMEEC CHENNAI",
    tag: "HACKATHON WINNER",
    role: "Genesis Hackathon Winner",
    bullets: [
      "Built SafeGuard AI end-to-end in 24 hours — combining ESP32-C3 wearable hardware, GSM alerts, and a React/Supabase parent dashboard.",
      "Pitched Shark Tank-style to an investor panel. Won Overall 2nd Prize + Domain-Wise 1st Prize."
    ]
  },
  {
    period: "2024 — Present",
    category: "CLUB LEADERSHIP · BIHER",
    tag: "CLUB LEADERSHIP",
    role: "Event Coordinator",
    bullets: [
      "Planned and ran technical workshops and hackathons for 200+ engineering students.",
      "Managed inter-batch technical events, speaker logistics, and hands-on coding bootcamps."
    ]
  },
  {
    period: "2024 — Present",
    category: "STUDENT ADMIN · BIHER CSE U24CS",
    tag: "STUDENT ADMIN",
    role: "Batch Administrator",
    bullets: [
      "Managed attendance records, mark sheets, and official department communications for 70+ students.",
      "Streamlined academic resource distribution and department record keeping."
    ]
  },
  {
    period: "2024 — Present",
    category: "FREELANCE · RAGHAVENDRA MEDICALS",
    tag: "REAL CLIENT DEVELOPER",
    role: "Real Client Developer",
    bullets: [
      "Delivered a production pharmacy management system for a real medical store.",
      "Implemented prescription uploads, live inventory deduction POS dashboard, and Razorpay checkout."
    ]
  }
];
