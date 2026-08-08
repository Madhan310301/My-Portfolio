export interface Project {
  id: string;
  num: string;
  title: string;
  category: string;
  desc: string;
  gradient: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "sarvajeevaid",
    num: "01",
    title: "SarvaJeevaID",
    category: "Full Stack / AI Animal ID",
    desc: "Unified biometric digital identification and health registry platform for stray animals with automated QR tracking.",
    gradient: "linear-gradient(135deg, #0a0a2e, #1a1a4e)",
    stack: ["React", "TypeScript", "Node.js", "Python", "Supabase"],
    githubUrl: "https://github.com/Madhan310301/SarvaJeevaID"
  },
  {
    id: "safeguard-ai",
    num: "02",
    title: "SafeGuard AI",
    category: "IoT / AI Safety Wearable",
    desc: "Child-safety IoT wearable combining ESP32C3 hardware, GPS tracking, GSM emergency alerts, and a React/Supabase parent dashboard. Built in 24 hrs.",
    gradient: "linear-gradient(135deg, #0a1a0a, #0d3d1a)",
    stack: ["ESP32-C3", "C++", "React", "Supabase", "Twilio GSM"],
    githubUrl: "https://github.com/Madhan310301/SafeGuard-AI"
  },
  {
    id: "ai-cloud-edge-healthcare",
    num: "03",
    title: "AI Cloud-Edge Healthcare",
    category: "AI / Edge Computing",
    desc: "Low-latency edge inference system for IoT medical sensors with cloud failover and real-time patient telemetry monitoring.",
    gradient: "linear-gradient(135deg, #0a1a2e, #0d2a4a)",
    stack: ["Python", "TensorFlow Lite", "Raspberry Pi", "FastAPI", "MQTT"],
    githubUrl: "https://github.com/Madhan310301"
  },
  {
    id: "tender-coconut-grader",
    num: "04",
    title: "Tender Coconut Grader",
    category: "Computer Vision / AgTech",
    desc: "Acoustic and computer vision quality grading model estimating water content and sweetness levels non-destructively.",
    gradient: "linear-gradient(135deg, #1a1200, #3d2d00)",
    stack: ["Python", "OpenCV", "YOLOv8", "PyTorch", "Streamlit"],
    githubUrl: "https://github.com/Madhan310301"
  },
  {
    id: "ml-machine-health-tracker",
    num: "05",
    title: "ML Machine Health Tracker",
    category: "Predictive Maintenance / ML",
    desc: "Vibration and acoustic sensor telemetry analyzer predicting industrial motor failure up to 48 hours in advance.",
    gradient: "linear-gradient(135deg, #1a0a0a, #3d1010)",
    stack: ["Python", "Scikit-learn", "XGBoost", "Flask", "InfluxDB"],
    githubUrl: "https://github.com/Madhan310301"
  },
  {
    id: "ai-financial-coach",
    num: "06",
    title: "AI Financial Coach",
    category: "AI / FinTech",
    desc: "Personal finance intelligence agent analyzing spending habits, calculating credit-risk health scores, and offering automated savings plans.",
    gradient: "linear-gradient(135deg, #0a1a0a, #1a3a1a)",
    stack: ["React", "Python", "XGBoost", "NLP Transformers", "FastAPI"],
    githubUrl: "https://github.com/Madhan310301/Auditly"
  },
  {
    id: "ai-home-renovation",
    num: "07",
    title: "AI Home Renovation Agent",
    category: "AI / Spatial Vision",
    desc: "Generative spatial design agent transforming 2D interior room photos into 3D material estimates and renovation cost breakdowns.",
    gradient: "linear-gradient(135deg, #1a1000, #2a1800)",
    stack: ["Next.js", "Three.js", "Stable Diffusion API", "TailwindCSS"],
    githubUrl: "https://github.com/Madhan310301"
  },
  {
    id: "ai-progress-tracker",
    num: "08",
    title: "AI Progress Tracker",
    category: "AI / Productivity Analytics",
    desc: "Computer vision and activity telemetry logger summarizing daily engineering work and tracking skill mastery metrics.",
    gradient: "linear-gradient(135deg, #0a0a1a, #15153d)",
    stack: ["React", "TypeScript", "Python", "PostgreSQL", "Recharts"],
    githubUrl: "https://github.com/Madhan310301"
  },
  {
    id: "ai-document-reader",
    num: "09",
    title: "AI Document Reader",
    category: "AI / OCR & RAG",
    desc: "Local-first OCR and RAG search engine querying complex PDF medical reports and engineering schematics in sub-second latency.",
    gradient: "linear-gradient(135deg, #001a1a, #003535)",
    stack: ["Python", "LangChain", "ChromaDB", "LlamaIndex", "FastAPI"],
    githubUrl: "https://github.com/Madhan310301"
  },
  {
    id: "ai-personal-assistant",
    num: "10",
    title: "AI Personal Assistant",
    category: "AI / Autonomous Voice Agent",
    desc: "Voice-operated desktop agent managing calendar tasks, system automation scripts, and contextual web queries using local LLMs.",
    gradient: "linear-gradient(135deg, #1a0a1a, #350035)",
    stack: ["Python", "Whisper", "Ollama LLM", "PyQt5", "SpeechSynthesis"],
    githubUrl: "https://github.com/Madhan310301"
  },
  {
    id: "safepath-ai",
    num: "11",
    title: "SafePath AI",
    category: "Mobile / Navigation Safety",
    desc: "Crowdsourced night-time safety map algorithm recommending optimal routes based on street light density and crime statistics.",
    gradient: "linear-gradient(135deg, #001a00, #003300)",
    stack: ["React Native", "Mapbox API", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/Madhan310301/SafePath-AI"
  },
  {
    id: "raghavendra-medicals",
    num: "12",
    title: "Raghavendra Medicals",
    category: "Full Stack / Production Client System",
    desc: "Deployed pharmacy management portal for a real medical store featuring digital billing, prescription uploads, inventory sync, and Razorpay checkout.",
    gradient: "linear-gradient(135deg, #1a1a00, #2a2a00)",
    stack: ["React", "Node.js", "Express", "MongoDB", "Razorpay"],
    githubUrl: "https://github.com/Madhan310301/RM-App"
  }
];
