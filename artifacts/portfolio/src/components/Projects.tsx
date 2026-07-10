import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  slug: string;
  tag: string;
  title: string;
  category: string;
  desc: string;
  duration: string;
  stack: string[];
  fullDesc1: string;
  fullDesc2: string;
  milestone: string;
  keyFeature: string;
  problem: string;
  challenge: string;
  github?: string;
  liveDemo?: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    slug: "safepath-ai",
    tag: "[BUILD-01]",
    title: "SafePathAI",
    category: "IoT Child Safety Wearable",
    desc: "AI-enabled child-safety pendant with GPS, motion detection, and ML-based risk scoring — offline SMS alerts to parents on abnormal patterns.",
    duration: "Completed Jan 2026",
    stack: ["ESP32", "GPS", "GSM", "MPU6050", "Node.js", "React"],
    fullDesc1: "SafePathAI is an IoT wearable designed to keep children safe in unsupervised outdoor environments. The device combines a GPS module for real-time location tracking, an MPU6050 accelerometer for fall/motion detection, and a GSM module for offline emergency alerts — working even without internet.",
    fullDesc2: "An ML risk-scoring layer analyzes motion patterns to distinguish normal movement from distress indicators, triggering parent alerts only when the threshold is crossed. A React dashboard provides live map tracking. Won Genesis Hackathon 2026.",
    milestone: "Won Genesis Hackathon 2026 — Overall 2nd Prize & Domain 1st Prize at SRMEEC, Chennai.",
    keyFeature: "Offline SMS/call alerts via GSM + ML risk scoring from accelerometer data.",
    problem: "Children in unsupervised outdoor environments have no reliable, real-time safety alert system.",
    challenge: "Integrating hardware sensor telemetry with low-latency dashboard under hackathon time pressure.",
    github: "https://github.com/Madhan310301/safepathAI",
  },
  {
    id: 2,
    slug: "sarvajeevaid",
    tag: "[BUILD-02]",
    title: "SarvaJeevaID",
    category: "National Identity Platform",
    desc: "Concept-stage national citizen ID system linking healthcare, education, and employment records — with offline QR cards and DPDP Act-compliant consent controls.",
    duration: "Completed Oct 2025",
    stack: ["Node.js", "React", "TypeScript", "PostgreSQL", "Redis", "BullMQ", "AWS S3"],
    fullDesc1: "SarvaJeevaID is a concept-stage Integrated Life Tracking System — one lifelong citizen ID that links healthcare, education, and employment records. It features offline-first QR cards for areas with no connectivity, and dropout detection alerts to flag at-risk citizens before they fall through the cracks.",
    fullDesc2: "The architecture uses Redis + BullMQ for async job processing, PostgreSQL for relational data integrity, and AWS S3 for document storage. Consent management is built to DPDP Act compliance standards, giving citizens granular control over who accesses their data.",
    milestone: "Functional multi-role platform with real-time sync and DPDP Act-compliant consent layer.",
    keyFeature: "Offline-first QR citizen cards with blockchain-style consent audit trail.",
    problem: "Citizen records are siloed across departments — no single source of truth for a person's life records.",
    challenge: "Designing a RBAC schema that stays performant under concurrent multi-department access patterns.",
    github: "https://github.com/Madhan310301/SarvaJeevaID",
  },
  {
    id: 3,
    slug: "habiai",
    tag: "[BUILD-03]",
    title: "HabiAI",
    category: "AI Habit Tracker",
    desc: "AI-powered daily habit tracker that analyzes streaks and behavior patterns, sending smart nudges and adjusting reminders based on completion history.",
    duration: "Completed 2025",
    stack: ["React Native", "Node.js", "MongoDB", "OpenAI API"],
    fullDesc1: "HabiAI goes beyond simple streak tracking — it uses the OpenAI API to analyze your habit completion patterns over time, learning when you're most likely to skip and proactively sending nudges before you do.",
    fullDesc2: "Reminders are dynamically adjusted based on behavioral history rather than fixed schedules. Built with React Native for cross-platform mobile use and Node.js + MongoDB for the backend, it delivers a personalized accountability loop for daily routines.",
    milestone: "Adaptive reminder engine successfully reduces habit skip rate in user testing.",
    keyFeature: "AI-driven nudge system that learns and adapts from individual habit completion history.",
    problem: "Static reminder apps ignore behavioral patterns, leading to notification fatigue and abandonment.",
    challenge: "Tuning the OpenAI prompt to generate contextually relevant (not generic) motivational nudges.",
    github: "https://github.com/Madhan310301/Habit_Tracker",
  },
  {
    id: 4,
    slug: "agrigrade",
    tag: "[BUILD-04]",
    title: "AgriGrade",
    category: "AI Agricultural Grader",
    desc: "CNN-based computer vision grader classifying tender coconuts and turmeric into quality grades from images — ~94–97% test accuracy.",
    duration: "Completed 2025",
    stack: ["Python", "TensorFlow", "Keras", "OpenCV", "MobileNetV2", "Flask"],
    fullDesc1: "AgriGrade is a computer vision system that classifies tender coconuts (and turmeric) into Premium, Standard, or Reject quality grades from images. Built on MobileNetV2 fine-tuned with TensorFlow/Keras, it achieves 94–97% test accuracy on held-out batches.",
    fullDesc2: "A Flask web interface allows farmers or grading stations to upload a photo and get instant classification results with confidence scores. OpenCV preprocessing handles lighting normalization and background removal before inference.",
    milestone: "Achieved 94–97% test accuracy on held-out agricultural image datasets.",
    keyFeature: "MobileNetV2-based CNN with Flask web interface for instant on-site grading.",
    problem: "Manual agricultural grading is slow, inconsistent, and requires expert labour at every stage.",
    challenge: "Building a robust model that generalizes across varied lighting, angles, and produce sizes.",
    github: "https://github.com/Madhan310301/AgriGradeAI",
  },
  {
    id: 5,
    slug: "renoai",
    tag: "[BUILD-05]",
    title: "RenoAI",
    category: "AI Home Renovation Agent",
    desc: "Conversational AI agent turning natural-language renovation requests into design visualizations, cost estimates, and material recommendations.",
    duration: "Completed 2025",
    stack: ["Python", "LangChain", "GPT-4o", "Stable Diffusion XL", "ControlNet", "FastAPI", "FAISS"],
    fullDesc1: "RenoAI is a multi-turn conversational agent that takes a natural-language renovation brief and returns rendered design visualizations using Stable Diffusion XL + ControlNet image-to-image generation.",
    fullDesc2: "A RAG pipeline grounded on a material/product catalog (FAISS vector store) powers the cost estimation (XGBoost regressor) and material recommendation engine. FastAPI serves the backend; users chat their way to a full renovation plan.",
    milestone: "End-to-end pipeline from text prompt to rendered room visualization + cost breakdown.",
    keyFeature: "ControlNet-guided image-to-image generation from room photos + XGBoost cost estimator.",
    problem: "Home renovation planning is expensive, slow, and hard to visualize before committing to a contractor.",
    challenge: "Grounding LLM suggestions in real product catalog data to prevent hallucinated cost estimates.",
    github: "https://github.com/Madhan310301/RenoAI",
  },
  {
    id: 6,
    slug: "docuai",
    tag: "[BUILD-06]",
    title: "DocuAI",
    category: "AI Document Reader",
    desc: "AI document assistant that ingests PDFs and scanned docs, answers questions via RAG, and highlights key clauses and data points.",
    duration: "Completed 2025",
    stack: ["Python", "PyMuPDF", "Tesseract OCR", "LangChain", "GPT-4", "FastAPI"],
    fullDesc1: "DocuAI ingests PDFs and scanned documents using PyMuPDF for digital PDFs and Tesseract OCR for scanned pages, then builds a LangChain RAG pipeline over the extracted text with GPT-4 as the QA backbone.",
    fullDesc2: "Users can ask natural-language questions and get precise, cited answers. The system also auto-generates document summaries and highlights critical clauses for legal, financial, and research documents.",
    milestone: "Accurate RAG-based QA over 100+ page PDFs with source-highlighted responses.",
    keyFeature: "Hybrid OCR + vector retrieval pipeline for both digital and scanned document querying.",
    problem: "Reading and extracting specific information from long, dense PDFs is time-consuming and error-prone.",
    challenge: "Handling scanned PDF quality variance and maintaining citation accuracy across chunked embeddings.",
    github: "https://github.com/Madhan310301/Docu-AI",
  },
  {
    id: 7,
    slug: "healai",
    tag: "[BUILD-07]",
    title: "HealAI",
    category: "Decentralized Healthcare Platform",
    desc: "Blockchain-based healthcare platform storing encrypted patient records on IPFS with on-chain consent management and federated-learning diagnostics.",
    duration: "Completed Jun 2025",
    stack: ["Solidity", "Ethereum", "IPFS", "AES-256", "Python", "React.js"],
    fullDesc1: "HealAI is a decentralized healthcare data platform where patient records are AES-256 encrypted and stored on IPFS, with only the content hash anchored on-chain via Ethereum smart contracts. Patients hold sovereign control over who accesses their data.",
    fullDesc2: "On-chain consent management means every access request is an auditable blockchain transaction. A federated-learning layer enables hospitals to collaboratively improve diagnostic models without sharing raw patient data.",
    milestone: "25% reduction in API latency vs. baseline centralized architecture in benchmarks.",
    keyFeature: "Patient-sovereign consent via Ethereum smart contracts + federated ML diagnostics.",
    problem: "Centralized healthcare databases expose patient data to breaches and remove patient agency.",
    challenge: "Synchronizing edge model inference with on-chain consent state without gas cost explosion.",
    github: "https://github.com/Madhan310301/MediChainAI",
  },
  {
    id: 8,
    slug: "nexusai",
    tag: "[BUILD-08]",
    title: "NexusAI",
    category: "AI Personal Assistant",
    desc: "Multi-purpose AI personal assistant handling scheduling, reminders, voice queries, and task automation via agent orchestration.",
    duration: "Completed 2025",
    stack: ["Python", "LangChain", "GPT-4", "Whisper", "FastAPI", "Vector DB"],
    fullDesc1: "NexusAI is a unified personal AI assistant built on LangChain's agent orchestration framework. It handles scheduling, reminders, voice queries (Whisper STT), and task automation through tool-calling — routing requests to the right tool automatically.",
    fullDesc2: "A vector DB memory layer gives NexusAI persistent context across sessions, so it remembers your preferences, past tasks, and ongoing projects. FastAPI serves the backend with a lightweight web interface for chat and voice input.",
    milestone: "Multi-modal assistant with persistent cross-session memory and 5+ integrated tools.",
    keyFeature: "LangChain tool-calling agent with Whisper voice input and persistent vector memory.",
    problem: "Existing personal assistants lose context between sessions and lack deep task automation.",
    challenge: "Designing a tool-routing agent that doesn't hallucinate tool selection on ambiguous user inputs.",
    github: "https://github.com/Madhan310301/NexusAI",
  },
  {
    id: 9,
    slug: "predmaintain",
    tag: "[BUILD-09]",
    title: "PredMaintain",
    category: "Predictive Maintenance System",
    desc: "ML system fusing vibration, temperature, and acoustic sensor data into a Machine Health Index with fault classification and anomaly detection.",
    duration: "Completed Dec 2024",
    stack: ["Python", "Scikit-learn", "TensorFlow", "XGBoost", "Kafka", "InfluxDB", "Grafana"],
    fullDesc1: "PredMaintain is an industrial IoT predictive maintenance system that fuses vibration, temperature, and acoustic sensor streams into a unified Machine Health Index. LSTM autoencoders detect subtle multivariate anomalies that threshold alarms miss.",
    fullDesc2: "XGBoost classifies fault types; Kafka handles real-time sensor ingestion; InfluxDB stores time-series data; and Grafana dashboards give maintenance teams live visibility. SHAP-based explainability surfaces the root cause for each flagged anomaly.",
    milestone: "Reduced simulated machine downtime by 20% compared to threshold-based baseline.",
    keyFeature: "LSTM autoencoder anomaly detection + SHAP root cause explainability for maintenance teams.",
    problem: "Reactive industrial maintenance causes costly unplanned downtime from failures that were predictable.",
    challenge: "Building an interpretable model that non-ML maintenance engineers can trust and act on.",
    github: "https://github.com/Madhan310301/PredMaintain",
  },
  {
    id: 10,
    slug: "rm-online-app",
    tag: "[BUILD-10]",
    title: "RM Online App",
    category: "Client Pharmacy System",
    desc: "Live client-deployed pharmacy ordering app with prescription upload, medicine inventory, cart checkout, and admin order management.",
    duration: "Completed Mar 2025",
    stack: ["React", "React Native", "Node.js", "Express", "MongoDB", "Razorpay"],
    fullDesc1: "RM Online App is a production pharmacy management system custom-built for a real client. It digitizes the complete operational pipeline — prescription upload, medicine search, inventory management, cart checkout with Razorpay integration, and order tracking.",
    fullDesc2: "A dual-interface system serves both staff (rugged POS dashboard with inventory deduction on sale) and customers (mobile-responsive ordering portal). The system is currently live and managing the client's daily pharmacy operations.",
    milestone: "Deployed to a real pharmacy client — currently managing live daily operations.",
    keyFeature: "End-to-end customer ordering portal with real-time inventory sync and Razorpay checkout.",
    problem: "Small pharmacies lack affordable custom digital systems integrating inventory, billing, and ordering.",
    challenge: "Ensuring data integrity between concurrent live inventory updates and simultaneous billing transactions.",
    github: "https://github.com/Madhan310301/RM-App",
  },
  {
    id: 11,
    slug: "fintech",
    tag: "[BUILD-11]",
    title: "FinTech",
    category: "AI Financial Coach",
    desc: "AI financial advisor analyzing spending/income patterns, grading financial health, and generating personalized savings/investment recommendations.",
    duration: "Completed Aug 2025",
    stack: ["Python", "Scikit-learn", "XGBoost", "NLP Transformers", "Flask", "React"],
    fullDesc1: "FinTech is an AI-driven personal finance platform that goes beyond tracking to active coaching. It ingests transaction history, applies XGBoost-based credit-risk-style scoring to grade financial health, and generates NLP-driven personalized recommendations.",
    fullDesc2: "A transformer NLP layer converts spending pattern insights into human-readable advisory reports. The supervised ML model predicts future expense patterns with 85%+ accuracy, enabling proactive rather than reactive financial decisions.",
    milestone: "Achieved 85%+ accuracy on personal expense prediction model in testing.",
    keyFeature: "XGBoost financial health grader + NLP report generation for personalized investment advice.",
    problem: "Most financial apps report spending but don't predict future behavior or advise on investments.",
    challenge: "Training a generalizable ML model on sparse, noisy personal financial transaction data.",
    github: "https://github.com/Madhan310301/Auditly",
  },
  {
    id: 12,
    slug: "people-watcher",
    tag: "[BUILD-12]",
    title: "People Watcher",
    category: "AI Crowd Management",
    desc: "Computer vision crowd monitoring system using YOLOv8 + DeepSORT on CCTV feeds to estimate density and trigger real-time overcrowding alerts.",
    duration: "Completed 2025",
    stack: ["Python", "OpenCV", "YOLOv8", "DeepSORT", "Flask", "Grafana"],
    fullDesc1: "People Watcher is a real-time crowd monitoring system that processes CCTV video feeds using YOLOv8 object detection and DeepSORT multi-object tracking to count, track, and analyze crowd density across zones.",
    fullDesc2: "When density exceeds configurable thresholds, the system flags overcrowding zones and triggers real-time alerts for event security or public space management teams. Grafana dashboards provide live and historical crowd flow analytics.",
    milestone: "Real-time crowd density monitoring with sub-second alert latency on live CCTV feeds.",
    keyFeature: "YOLOv8 + DeepSORT tracking pipeline with zone-based density threshold alerting.",
    problem: "Manual crowd monitoring at large events fails to detect dangerous density build-ups in time.",
    challenge: "Maintaining accurate person counts in occluded, overlapping crowd scenes at high density.",
    github: "https://github.com/Madhan310301/People-Watcher",
  },
  {
    id: 13,
    slug: "nutrilensai",
    tag: "[BUILD-13]",
    title: "NutriLensAI",
    category: "AI Calorie Calculator",
    desc: "Snap-a-photo calorie estimator — classifies food from an image, estimates portion, and returns instant calorie/macro breakdown.",
    duration: "Completed 2025",
    stack: ["Python", "PyTorch", "TensorFlow", "CNN", "Nutrition API", "FastAPI", "React"],
    fullDesc1: "NutriLensAI lets users photograph their meal and instantly receive a full calorie and macro breakdown. A fine-tuned CNN food classifier (PyTorch/TensorFlow) identifies food items; a portion size estimator infers weight from image geometry.",
    fullDesc2: "Classified items are mapped to a nutrition database API for precise calorie/protein/carb/fat values. A React frontend provides the camera interface and real-time nutrition card display. Designed for seamless integration into health and fitness apps.",
    milestone: "Accurate multi-food classification from a single meal photo with macro breakdown.",
    keyFeature: "CNN food classifier + portion size estimator feeding into a live nutrition database API.",
    problem: "Manual calorie logging is tedious and inaccurate — most people don't track meals consistently.",
    challenge: "Estimating portion sizes from 2D photos without depth information for reliable calorie counts.",
    github: "https://github.com/Madhan310301/NutriLensAI",
  },
  {
    id: 14,
    slug: "memoai",
    tag: "[BUILD-14]",
    title: "MemoAI",
    category: "AI Diary Writer",
    desc: "AI diary companion that expands short notes or voice snippets into fully written, natural-language journal entries with reflection prompts.",
    duration: "Completed 2025",
    stack: ["Python", "GPT LLM", "Whisper", "Flask", "Next.js"],
    fullDesc1: "MemoAI is an AI journaling assistant that takes bullet-point notes or voice recordings and expands them into fully written, natural-language diary entries — preserving the user's tone while adding structure, context, and emotional reflection.",
    fullDesc2: "Whisper handles optional voice input transcription; a GPT-based LLM performs the expansion with tone-matching prompts; and reflection prompts are automatically inserted to encourage deeper journaling. Built with Flask backend and Next.js frontend.",
    milestone: "Tone-preserving journal expansion from 3-word voice notes to full diary entries.",
    keyFeature: "Tone-matched LLM expansion with automatic reflection prompt insertion.",
    problem: "People want to journal but lack the time or energy to write fully formed entries every day.",
    challenge: "Preserving the user's unique voice and tone across LLM expansion without it sounding generic.",
    github: "https://github.com/Madhan310301/DiaryAlchemist",
  },
  {
    id: 15,
    slug: "neurodot",
    tag: "[BUILD-15]",
    title: "NeuroDot",
    category: "AI Braille Detector",
    desc: "Offline camera-based Braille recognition system — detects raised dot patterns from images, decodes to text, and reads aloud via pyttsx3.",
    duration: "Completed 2025",
    stack: ["Python", "OpenCV", "CNN (custom)", "pyttsx3", "rule-based correction"],
    fullDesc1: "NeuroDot is a zero-external-API Braille recognition system built under a strict offline-first constraint. A custom CNN trained on Braille dot patterns processes camera images, detects the raised-dot grid, and decodes it to text characters.",
    fullDesc2: "A rule-based correction layer fixes common misclassifications from poor lighting or angle variance. pyttsx3 reads the decoded text aloud offline, making it fully usable without internet — critical for accessibility tools in low-connectivity regions.",
    milestone: "Fully offline Braille-to-speech pipeline with zero external API dependency.",
    keyFeature: "Offline CNN Braille decoder + pyttsx3 text-to-speech with rule-based error correction.",
    problem: "Visually impaired individuals in low-connectivity areas lack accessible digital Braille reading tools.",
    challenge: "Building a robust dot-pattern detector that works on varied surfaces, lighting, and camera angles.",
    github: "https://github.com/Madhan310301/VisionX",
  },
  {
    id: 16,
    slug: "drakozu",
    tag: "[BUILD-16]",
    title: "DrakoZu",
    category: "Custom T-Shirt E-Commerce",
    desc: "E-commerce platform for custom printed T-shirts with design preview, catalog browsing, Razorpay checkout, and order management.",
    duration: "Completed 2024",
    stack: ["Next.js", "Node.js", "MongoDB", "Firebase", "Razorpay", "Cloudinary"],
    fullDesc1: "DrakoZu is a full-featured e-commerce site for custom printed T-shirts. Customers can browse the design catalog, upload their own artwork (Cloudinary storage), preview it on a T-shirt mockup, select size/color, and complete checkout via Razorpay.",
    fullDesc2: "An order management dashboard gives admins visibility into orders, print queue status, and shipping. Firebase handles real-time order status notifications. Next.js SSR ensures fast catalog page loads and good SEO for the storefront.",
    milestone: "Full e-commerce funnel from design upload to Razorpay checkout live and functional.",
    keyFeature: "Custom design upload + live T-shirt mockup preview with Cloudinary + Razorpay checkout.",
    problem: "Small custom T-shirt businesses lack affordable digital storefronts with design preview tools.",
    challenge: "Real-time design overlay rendering on product mockups without perceptible UI lag.",
    // No public repo, no liveDemo
  },
  {
    id: 17,
    slug: "satbridge",
    tag: "[BUILD-17]",
    title: "SatBridge",
    category: "Cross-Modal Satellite Retrieval",
    desc: "Cross-modal SAR–optical satellite image retrieval system — given a SAR image, retrieves matching optical scenes via learned embeddings + FAISS search.",
    duration: "Completed 2026",
    stack: ["Python", "PyTorch", "ResNet18", "FAISS", "FastAPI", "Next.js"],
    fullDesc1: "SatBridge is a cross-modal retrieval system trained on the SEN1-2 dataset (~75K SAR–optical image pairs). A dual-encoder architecture (ResNet18 backbones) learns a shared embedding space where SAR and optical images of the same scene are close in vector distance.",
    fullDesc2: "FAISS powers sub-second approximate nearest-neighbor search across the 75K-pair index. A FastAPI backend and Next.js frontend serve the retrieval UI. Built for BAH 2026 Grand Finale — the system bridges the modality gap between radar and visual satellite imagery.",
    milestone: "Built for BAH 2026 Grand Finale — cross-modal retrieval over 75K SAR–optical pairs.",
    keyFeature: "Dual-encoder shared embedding space for SAR↔optical retrieval via FAISS similarity search.",
    problem: "SAR and optical satellite images of the same scene look completely different — retrieving matches is non-trivial.",
    challenge: "Aligning SAR and optical feature spaces in a shared embedding without paired training data at inference.",
    github: "https://github.com/Madhan310301/isro-bah",
  },
  {
    id: 18,
    slug: "amh-hostel-app",
    tag: "[BUILD-18]",
    title: "AMH Hostel App",
    category: "Hostel Room Booking Platform",
    desc: "Hostel room booking platform with availability search, payment flow, student profile management, and admin occupancy dashboard.",
    duration: "Completed 2024",
    stack: ["React", "Flutter", "Node.js", "MongoDB", "Razorpay"],
    fullDesc1: "AMH Hostel App digitalizes the end-to-end hostel booking process for students. It provides real-time room availability search, booking and payment via Razorpay, and a student profile system that stores booking history and documents.",
    fullDesc2: "The admin panel gives hostel management visibility into occupancy rates, pending payments, check-in/check-out schedules, and complaint tracking. Built with React for web and Flutter for mobile, sharing a common Node.js + MongoDB backend.",
    milestone: "Full booking-to-payment flow live with admin occupancy management dashboard.",
    keyFeature: "Real-time room availability system with Razorpay payment integration and admin panel.",
    problem: "Manual hostel room allocation is error-prone, opaque, and slow for both students and management.",
    challenge: "Preventing double-booking under concurrent room selection without distributed locking overhead.",
    // No public repo
  },
  {
    id: 19,
    slug: "civicpulse",
    tag: "[BUILD-19]",
    title: "CivicPulse",
    category: "AI Civic Reporting Platform",
    desc: "Hyperlocal civic issue reporting platform — citizens report potholes and garbage with photo + location; Gemini classifies and routes to authorities.",
    duration: "Completed 2026",
    stack: ["Next.js 14", "Gemini 1.5 Flash", "Firebase", "Cloud Run"],
    fullDesc1: "CivicPulse is a hyperlocal civic issue reporting platform where citizens photograph and geolocate problems (potholes, garbage dumps, broken streetlights) directly from their phone. Gemini 1.5 Flash automatically classifies the issue type and urgency.",
    fullDesc2: "Classified reports are routed to the relevant municipal authority with priority scoring. Built solo in ~1 week for the Vibe2Ship hackathon using Next.js 14, Firebase for real-time data, and Cloud Run for serverless scalability.",
    milestone: "Solo-built in ~1 week for Vibe2Ship hackathon — fully deployable civic reporting pipeline.",
    keyFeature: "Gemini 1.5 Flash auto-classification and authority routing from citizen photo + GPS.",
    problem: "Citizens have no easy, structured way to report and track local civic issues to the right authority.",
    challenge: "Building a reliable authority-routing layer without a complete, accurate municipal department API.",
    github: "https://github.com/Madhan310301/CivicPulse",
  },
  {
    id: 20,
    slug: "portfolio",
    tag: "[BUILD-20]",
    title: "Madhan Kumar Portfolio",
    category: "Personal Portfolio Website",
    desc: "This portfolio — a cinematic dark-theme site with animated skills visualizer, 20-project navigator, education flight trajectory, and interactive contact form.",
    duration: "Ongoing 2026",
    stack: ["React", "Vite", "TypeScript", "Framer Motion", "Recharts", "Tailwind CSS"],
    fullDesc1: "This very site — built as a cinematic, dark-space themed portfolio to showcase 20+ projects, skills, credentials, and the complete engineering journey from SSLC to B.Tech. Every section is a custom-designed interactive experience.",
    fullDesc2: "Features include a Recharts skills visualizer (Bar/Donut/Spider tabs), a 20-project orbit navigator with scoped scroll/keyboard/swipe navigation, an education flight trajectory with Framer Motion rocket animation, and a Nebula particle background.",
    milestone: "Full cinematic portfolio with 7 interactive sections live and deployed.",
    keyFeature: "Recharts skills visualizer, Framer Motion education trajectory, 20-project case-study navigator.",
    problem: "Static PDF resumes don't convey the depth, variety, and personality behind a developer's work.",
    challenge: "Designing interactive data visualizations and animations that feel cinematic without sacrificing performance.",
    liveDemo: "/",
  },
];

const SCROLL_THRESHOLD = 80;

const Projects: React.FC = () => {
  const [activeId, setActiveId] = useState(1);
  const [direction, setDirection] = useState(1);

  const sectionRef = useRef<HTMLElement>(null);
  const listContainerRef = useRef<HTMLDivElement>(null);
  const activeIdRef = useRef(activeId);
  const touchStartRef = useRef({ x: 0, y: 0 });

  /* ── scroll-jack state refs (must be refs, not state, for event handlers) ── */
  const isLockedRef = useRef(false);       // is page scroll currently locked?
  const scrollAccRef = useRef(0);          // accumulated wheel delta
  const cooldownRef = useRef(false);       // prevents re-entry flicker at boundary
  const cooldownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastNavTimeRef = useRef(0);        // debounce rapid-fire nav

  // Keep ref in sync with state
  useEffect(() => {
    activeIdRef.current = activeId;
  }, [activeId]);

  /* ── helpers ─────────────────────────────────────────────────────────────── */

  /** Lock page scroll by hiding overflow on documentElement */
  const lockScroll = () => {
    if (isLockedRef.current) return;
    isLockedRef.current = true;
    document.documentElement.style.overflow = 'hidden';
  };

  /** Unlock page scroll */
  const unlockScroll = () => {
    if (!isLockedRef.current) return;
    isLockedRef.current = false;
    scrollAccRef.current = 0;
    document.documentElement.style.overflow = '';
  };

  /** Navigate to a specific project index with direction animation */
  const navigateTo = (id: number) => {
    const clamped = Math.max(1, Math.min(PROJECTS.length, id));
    if (clamped === activeIdRef.current) return;
    const now = Date.now();
    if (now - lastNavTimeRef.current < 180) return; // debounce 180ms
    lastNavTimeRef.current = now;
    setDirection(clamped > activeIdRef.current ? 1 : -1);
    setActiveId(clamped);
  };

  /** Release the lock and set a cooldown so we don't re-lock immediately */
  const releaseWithCooldown = () => {
    unlockScroll();
    cooldownRef.current = true;
    if (cooldownTimerRef.current) clearTimeout(cooldownTimerRef.current);
    cooldownTimerRef.current = setTimeout(() => {
      cooldownRef.current = false;
    }, 600);
  };

  /* ── IntersectionObserver: engage lock when section is ~fully in view ──── */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (cooldownRef.current) return; // don't re-engage during cooldown

        if (entry.isIntersecting && entry.intersectionRatio > 0.85) {
          // Section is nearly fully visible — snap it into view and lock
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setTimeout(() => {
            if (!cooldownRef.current) lockScroll();
          }, 350);
        }
      },
      { threshold: [0.85] }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  /* ── Wheel handler: intercept scroll while locked ─────────────────────── */
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isLockedRef.current) return;

      e.preventDefault();
      scrollAccRef.current += e.deltaY;

      const curr = activeIdRef.current;

      if (scrollAccRef.current >= SCROLL_THRESHOLD) {
        scrollAccRef.current = 0;
        if (curr >= PROJECTS.length) {
          // At last project, scrolling down → release
          releaseWithCooldown();
          return;
        }
        navigateTo(curr + 1);
      } else if (scrollAccRef.current <= -SCROLL_THRESHOLD) {
        scrollAccRef.current = 0;
        if (curr <= 1) {
          // At first project, scrolling up → release
          releaseWithCooldown();
          return;
        }
        navigateTo(curr - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  /* ── Touch handlers: same logic for swipe on mobile ───────────────────── */
  useEffect(() => {
    let touchStartY = 0;
    let touchAccY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (!isLockedRef.current) return;
      touchStartY = e.touches[0].clientY;
      touchAccY = 0;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isLockedRef.current) return;
      e.preventDefault();

      const deltaY = touchStartY - e.touches[0].clientY;
      touchStartY = e.touches[0].clientY;
      touchAccY += deltaY;

      const curr = activeIdRef.current;

      if (touchAccY >= SCROLL_THRESHOLD) {
        touchAccY = 0;
        if (curr >= PROJECTS.length) {
          releaseWithCooldown();
          return;
        }
        navigateTo(curr + 1);
      } else if (touchAccY <= -SCROLL_THRESHOLD) {
        touchAccY = 0;
        if (curr <= 1) {
          releaseWithCooldown();
          return;
        }
        navigateTo(curr - 1);
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  /* ── Keyboard navigation (arrows, Page Down/Up) ───────────────────────── */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLockedRef.current) return;

      if (['ArrowRight', 'ArrowDown', 'PageDown'].includes(e.key)) {
        e.preventDefault();
        const curr = activeIdRef.current;
        if (curr >= PROJECTS.length) {
          releaseWithCooldown();
          return;
        }
        navigateTo(curr + 1);
      } else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        const curr = activeIdRef.current;
        if (curr <= 1) {
          releaseWithCooldown();
          return;
        }
        navigateTo(curr - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  /* ── Synchronize active project from URL hash ─────────────────────────── */
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project=')) {
        const slug = hash.replace('#project=', '');
        const project = PROJECTS.find(p => p.slug === slug);
        if (project && project.id !== activeIdRef.current) {
          navigateTo(project.id);
          // Scroll section into view + lock
          sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setTimeout(() => lockScroll(), 400);
        }
      }
    };

    // Check initial hash on mount
    const hash = window.location.hash;
    if (hash.startsWith('#project=')) {
      const slug = hash.replace('#project=', '');
      const project = PROJECTS.find(p => p.slug === slug);
      if (project) {
        setTimeout(() => {
          setActiveId(project.id);
          sectionRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' });
          setTimeout(() => lockScroll(), 200);
        }, 150);
      }
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  /* ── Auto-scroll active node into view in side list ───────────────────── */
  useEffect(() => {
    const list = listContainerRef.current;
    if (!list) return;

    const activeEl = list.querySelector(`[data-project-id="${activeId}"]`) as HTMLElement;
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeId]);

  /* ── Cleanup on unmount ───────────────────────────────────────────────── */
  useEffect(() => {
    return () => {
      unlockScroll();
      if (cooldownTimerRef.current) clearTimeout(cooldownTimerRef.current);
    };
  }, []);

  /* ── Card swipe on mobile (horizontal swipe on the card itself) ──────── */
  const handleCardTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleCardTouchEnd = (e: React.TouchEvent) => {
    const dx = touchStartRef.current.x - e.changedTouches[0].clientX;
    const dy = Math.abs(touchStartRef.current.y - e.changedTouches[0].clientY);
    if (Math.abs(dx) > 50 && Math.abs(dx) > dy) {
      if (dx > 0) navigateTo(activeId + 1);
      else navigateTo(activeId - 1);
    }
  };

  /* ── Click handler for node list and prev/next buttons ────────────────── */
  const handleNodeClick = (id: number) => {
    navigateTo(id);
    // If not locked yet, scroll section into view and lock
    if (!isLockedRef.current) {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => lockScroll(), 400);
    }
  };

  /* ── Derived values ───────────────────────────────────────────────────── */
  const activeProject = PROJECTS.find(p => p.id === activeId) ?? PROJECTS[0];
  const isFirst = activeId === 1;
  const isLast  = activeId === PROJECTS.length;

  const variants = {
    enter:  (dir: number) => ({ opacity: 0, x: dir > 0 ? 30 : -30 }),
    center: { opacity: 1, x: 0 },
    exit:   (dir: number) => ({ opacity: 0, x: dir > 0 ? -30 : 30 }),
  };

  return (
    <section
      className="relative py-24"
      id="projects"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-panel w-full"
        >
          {/* Section Header */}
          <div className="mb-8">
            <div className="font-mono text-sm text-primary mb-2">// LAUNCHED MISSIONS</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">PROJECT LOG</h2>
            <p className="text-xs font-mono text-white/30 mt-2 hidden md:block">
              scroll · ←→ arrow keys · or click a node to navigate projects
            </p>
            <p className="text-xs font-mono text-white/30 mt-2 md:hidden">
              swipe the card or tap a node to navigate
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

            {/* ── LEFT: Case Study Card ── */}
            <div className="w-full lg:w-[70%] flex flex-col">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeProject.id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="hud-bracket bg-card p-6 md:p-8 border-2 border-white/10 hover:border-primary/50 transition-colors shadow-lg flex-1"
                  onTouchStart={handleCardTouchStart}
                  onTouchEnd={handleCardTouchEnd}
                >
                  {/* Tag + source buttons */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="font-mono text-primary font-bold">{activeProject.tag}</div>
                    <div className="flex gap-2">
                      {activeProject.github && (
                        <a
                          href={activeProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 border border-white/15 text-white/70 text-xs font-bold rounded-full hover:border-white/40 hover:text-white transition-colors"
                        >
                          <Github size={12} /> SOURCE
                        </a>
                      )}
                      {activeProject.liveDemo && (
                        <a
                          href={activeProject.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 border border-primary/30 text-primary text-xs font-bold rounded-full hover:bg-primary/20 transition-colors"
                        >
                          <ExternalLink size={12} /> LIVE DEMO
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                    {activeProject.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">{activeProject.desc}</p>

                  {/* Duration + Stack */}
                  <div className="mb-8 pb-8 border-b border-white/10">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div>
                        <div className="font-mono text-xs text-white/40 mb-1">// DURATION</div>
                        <div className="text-sm text-white">{activeProject.duration}</div>
                      </div>
                      <div className="sm:ml-8">
                        <div className="font-mono text-xs text-white/40 mb-1">// STACK_CORE</div>
                        <div className="flex flex-wrap gap-1.5">
                          {activeProject.stack.map(tech => (
                            <span key={tech} className="text-xs bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white/70">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Full description */}
                  <div className="space-y-3 text-muted-foreground mb-8 text-sm md:text-base leading-relaxed">
                    <p>{activeProject.fullDesc1}</p>
                    <p>{activeProject.fullDesc2}</p>
                  </div>

                  {/* Detail panels */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-[#0f0f15] border border-white/5 p-4 rounded text-sm">
                      <div className="font-mono text-xs text-primary mb-2">// MILESTONE</div>
                      <p className="text-white/90">{activeProject.milestone}</p>
                    </div>
                    <div className="bg-[#0f0f15] border border-white/5 p-4 rounded text-sm">
                      <div className="font-mono text-xs text-primary mb-2">// KEY FEATURE</div>
                      <p className="text-white/90">{activeProject.keyFeature}</p>
                    </div>
                    <div className="bg-[#0f0f15] border border-white/5 p-4 rounded text-sm">
                      <div className="font-mono text-xs text-orange-500 mb-2">// PROBLEM</div>
                      <p className="text-white/90">{activeProject.problem}</p>
                    </div>
                    <div className="bg-[#0f0f15] border border-white/5 p-4 rounded text-sm">
                      <div className="font-mono text-xs text-orange-500 mb-2">// CHALLENGE</div>
                      <p className="text-white/90">{activeProject.challenge}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* ── Counter + Prev / Next ── */}
              <div className="flex items-center justify-between mt-4 px-1">
                <button
                  onClick={() => handleNodeClick(activeId - 1)}
                  disabled={isFirst}
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-mono rounded-lg border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all disabled:opacity-25 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={14} /> PREV
                </button>

                <div className="font-mono text-sm text-white/40 tabular-nums">
                  <span className="text-white/70">{String(activeId).padStart(2, '0')}</span>
                  <span className="mx-1.5 text-white/20">/</span>
                  {String(PROJECTS.length).padStart(2, '0')}
                </div>

                <button
                  onClick={() => handleNodeClick(activeId + 1)}
                  disabled={isLast}
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-mono rounded-lg border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all disabled:opacity-25 disabled:cursor-not-allowed"
                >
                  NEXT <ChevronRight size={14} />
                </button>
              </div>
            </div>

            {/* ── RIGHT: Node Navigator (no independent scrollbar) ── */}
            <div className="hidden lg:flex lg:w-[30%] flex-col">
              <div className="bg-[#0f0f15] p-4 rounded-t border border-white/10 border-b-0">
                <p className="font-mono text-xs text-white/50 leading-relaxed">
                  // {PROJECTS.length} missions logged
                </p>
              </div>

              <div
                ref={listContainerRef}
                className="flex-1 bg-card border border-white/10 rounded-b overflow-y-auto no-scrollbar pointer-events-auto"
                style={{ maxHeight: '550px' }}
                onWheel={(e) => e.stopPropagation()} // prevent list scroll from leaking to window
              >
                <div className="relative p-2">
                  {/* Vertical rail */}
                  <div className="absolute left-[22px] top-4 bottom-4 w-[2px] bg-white/5 pointer-events-none" />

                  <div className="flex flex-col gap-0.5 relative">
                    {PROJECTS.map((project) => {
                      const isActive = activeId === project.id;
                      return (
                        <button
                          key={project.id}
                          data-project-id={project.id}
                          onClick={() => handleNodeClick(project.id)}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-left w-full cursor-pointer ${
                            isActive
                              ? 'bg-white/5 border border-primary/30 shadow-[0_0_12px_rgba(225,29,72,0.12)]'
                              : 'hover:bg-white/5 border border-transparent'
                          }`}
                        >
                          {/* Node dot */}
                          <div className={`relative flex-shrink-0 w-4 h-4 rounded-full border-2 transition-all z-10 ${
                            isActive ? 'border-primary bg-primary' : 'border-white/20 bg-card'
                          }`}>
                            {isActive && (
                              <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-40" />
                            )}
                          </div>

                          {/* Label */}
                          <div className="min-w-0">
                            <div className={`font-semibold text-sm truncate transition-colors ${
                              isActive ? 'text-white' : 'text-white/50'
                            }`}>
                              {project.title}
                            </div>
                            <div className="text-[10px] text-white/30 truncate mt-0.5">
                              {project.category}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
