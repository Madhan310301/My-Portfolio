export interface HackathonEntry {
  id: string;
  name: string;
  organizer: string;
  date: string;
  location: string;
  mode: 'Offline' | 'Virtual';
  status: 'Past' | 'Ongoing';
  result: string;
  tag: string;
  badgeType: 'winner' | 'finalist' | 'ongoing' | 'organizer';
  role: string;
  category: string;
  problemStatement: string;
  whatWeBuilt: string;
  technicalHighlights: string[];
  linkedProjectSlug?: string;
  linkedProjectTitle?: string;
  photos: string[];
  videos?: string[];
  presentationFile?: string;
  presentationType?: 'pdf' | 'pptx';
  certificateImage?: string;
  credentialId?: string;
  githubUrl?: string;
}

export const HACKATHONS_DATA: HackathonEntry[] = [
  {
    id: "genesis-2026",
    name: "Genesis Hackathon 2026",
    organizer: "Rotaract Club, Easwari Engineering College (SRMEEC), Chennai",
    date: "11/04/2026",
    location: "SRM Easwari, Chennai",
    mode: "Offline",
    status: "Past",
    result: "Overall 2nd Prize & Domain 1st Prize (IoT) — ₹7,000 Cash Award",
    tag: "🥈 2nd Place · ₹7K Prize",
    badgeType: "winner",
    role: "Team Lead & Embedded Firmware Architect",
    category: "IoT & Child Safety",
    problemStatement: "Children playing or commuting in unsupervised outdoor environments have no accessible, autonomous safety device that works reliably when cellular data is weak or smartphones are prohibited.",
    whatWeBuilt: "We engineered SafePathAI — a physical child safety pendant integrating GPS telemetry, an MPU6050 accelerometer for fall and abnormal motion detection, and an emergency GSM module that dispatches instant SOS SMS coordinates to parents without needing active internet.",
    technicalHighlights: [
      "Secured 2nd Place Among 111 competitive teams and ₹7,000 cash prize",
      "Hardware telemetry pipeline on ESP32 + MPU6050 with dual g-force & tilt thresholding",
      "Offline GSM SIM800L failover dispatcher sending GPS coordinates directly to parent phones",
      "Live React dashboard showing real-time child location tracking on Leaflet maps"
    ],
    linkedProjectSlug: "safepath-ai",
    linkedProjectTitle: "SafePathAI",
    photos: [
      "/media/hackathons/genesis-2026/genesis-8.jpg",
      "/media/hackathons/genesis-2026/genesis-5.jpg",
      "/media/hackathons/genesis-2026/genesis-1.jpg",
      "/media/hackathons/genesis-2026/genesis-2.jpg",
      "/media/hackathons/genesis-2026/genesis-4.jpg",
      "/media/hackathons/genesis-2026/genesis-7.jpg",
      "/media/hackathons/genesis-2026/genesis-6.jpg",
      "/media/hackathons/genesis-2026/genesis-3.jpg"
    ],
    videos: [],
    certificateImage: "/media/hackathons/genesis-2026/genesis-5.jpg",
    credentialId: "GENESIS_2026",
    githubUrl: "https://github.com/Madhan310301/safepathAI"
  },
  {
    id: "vmedithon-2026",
    name: "VMedithon 2026",
    organizer: "Vels Medical College & Hospital / VISTAS, Chennai",
    date: "16/09/2026",
    location: "Madurapakkam, Chennai",
    mode: "Offline",
    status: "Past",
    result: "Healthcare AI Finalist & Innovation Showcase — MediHelpAI",
    tag: "🩺 Healthcare AI Finalist",
    badgeType: "finalist",
    role: "Lead AI & Vision Systems Architect (Team DiuFounders)",
    category: "AI Healthcare & Vision Vitals",
    problemStatement: "Over 50% of pregnant women in rural and underserved communities suffer from undetected anemia, while low-income households lack affordable clinical monitoring tools for cardiovascular vitals and jaundice detection.",
    whatWeBuilt: "Engineered MediHelpAI (DiuMed) — 'A Clinic in Your Pocket: Observe, Interpret, Act'. It converts any ordinary smartphone camera into a non-invasive vital signs diagnostic station without external hardware. Delivers contact-free rPPG pulse rate extraction (Bio-Aura), lower-eyelid conjunctival anemia screening, sclera jaundice detection, and Gemini-powered clinical symptom triage with 100% offline emergency SOS dispatch.",
    technicalHighlights: [
      "Contact-free facial rPPG photoplethysmography (Bio-Aura) measuring pulse rate in seconds via smartphone camera",
      "Non-invasive anemia screening analyzing lower eyelid conjunctiva vascularity to estimate hemoglobin levels for maternal care",
      "Sclera colorimetric computer vision analyzing eye white for early bilirubin and jaundice detection",
      "On-device TensorFlow Lite and Google MediaPipe vision pipelines executing client-side with 100% offline capability",
      "Google Gemini edge assistant delivering localized symptom triage in English, Tamil, and Hindi",
      "One-tap Emergency SOS dispatcher with automated location transmission to designated contacts and emergency clinics",
      "Supports daily fitness and recovery cardio baseline tracking before and after physical exercise"
    ],
    linkedProjectSlug: "medihelpai",
    linkedProjectTitle: "MediHelpAI",
    photos: [
      "/media/hackathons/vmedithon-2026/vmedithon-2.jpg",
      "/media/hackathons/vmedithon-2026/vmedithon-1.jpg",
      "/media/hackathons/vmedithon-2026/vmedithon-3.jpg"
    ],
    videos: [
      "/media/hackathons/vmedithon-2026/vmedithon-demo-1.mp4",
      "/media/hackathons/vmedithon-2026/vmedithon-demo-2.mp4"
    ],
    presentationFile: "/media/hackathons/vmedithon-2026/diumed-presentation.pdf",
    presentationType: "pdf",
    githubUrl: "https://github.com/Madhan310301/MediHelpAI"
  },
  {
    id: "cih-2026",
    name: "Coimbatore Innovation Hackathon (CIH '26)",
    organizer: "AIC RAISE & Rathinam Global University, Coimbatore",
    date: "04/08/2026",
    location: "Rathinam College, Coimbatore",
    mode: "Offline",
    status: "Past",
    result: "Hardware Domain Finalist & Innovator Recognition",
    tag: "🚨 Hardware Finalist",
    badgeType: "finalist",
    role: "Team Code Nest — Firmware & Telemetry Lead",
    category: "Embedded IoT & Emergency Dispatch",
    problemStatement: "Over 1.19 million annual road crash fatalities worldwide often stem from delayed medical response when victims are unconscious and crash scenes have no mobile internet connectivity.",
    whatWeBuilt: "Created CrashGuard-AI — an offline-first vehicle crash detection and environmental hazard monitoring unit. Uses dual microcontrollers (ESP32-C3 + Arduino Mega) with multi-sensor validation (G-force, tilt, acoustic microphone, MQ gas/smoke), a 10-second rider cancel timer, SIM800L emergency SMS dispatch, and a Supabase Realtime rescue command room.",
    technicalHighlights: [
      "24-Hour on-site innovation challenge completed at Rathinam College campus",
      "Multi-sensor fusion (MPU6050 >4g, tilt >65°, acoustic threshold) preventing false triggers",
      "Dual-channel telemetry: direct GSM SMS with GPS coordinates + WebSocket Supabase cloud sync",
      "Live control room dashboard with real-time incident telemetry and automated hazard classification"
    ],
    linkedProjectSlug: "crashguard-ai",
    linkedProjectTitle: "CrashGuard-AI",
    photos: [
      "/media/hackathons/cih-2026/cih-2.jpg",
      "/media/hackathons/cih-2026/cih-1.jpg",
      "/media/hackathons/cih-2026/cih-4.jpg",
      "/media/hackathons/cih-2026/cih-3.jpg",
      "/media/hackathons/cih-2026/cih-5.jpg",
      "/media/hackathons/cih-2026/cih-6.jpg"
    ],
    videos: [
      "/media/hackathons/cih-2026/cih-demo-main.mp4",
      "/media/hackathons/cih-2026/cih-clip.mp4"
    ],
    certificateImage: "/media/hackathons/cih-2026/cih-2.jpg",
    githubUrl: "https://github.com/Madhan310301/CrashGaurdAI"
  },
  {
    id: "nexora-2026",
    name: "Nexora Hackathon 2k26",
    organizer: "HackHere & SNS iNnovation Hub, Coimbatore",
    date: "22/08/2026",
    location: "SNS ITHub / Virtual",
    mode: "Virtual",
    status: "Past",
    result: "Cybersecurity Domain Finalist",
    tag: "🔒 Security Finalist",
    badgeType: "finalist",
    role: "Solo Architect & Full-Stack Engineer (Team Code Nest)",
    category: "Cybersecurity & Vulnerability Management",
    problemStatement: "Security teams suffer from severe CVE alert fatigue, wasting hundreds of hours triaging vulnerabilities ranked naively by CVSS that are completely absent from their active software stack.",
    whatWeBuilt: "Built TriageCN — a 100% client-side, zero-backend vulnerability triage cockpit. It evaluates 540 bundled CVE records against 6 distinct organizational technology profiles through a deterministic three-layer funnel (Alias normalization, SemVer matching, Dice fuzzy similarity) to produce a defensible Top 5 Actionable Remediation Queue with zero network calls.",
    technicalHighlights: [
      "100% offline-first execution with zero external runtime API or live LLM dependencies",
      "Multi-signal scoring synthesizing CVSS, CISA KEV active exploitation, and FIRST EPSS probability",
      "Deterministic version boundary matching with confidence penalties for unverified versions",
      "Official pitch deck presented and live demonstration video archived"
    ],
    linkedProjectSlug: "triagecn",
    linkedProjectTitle: "TriageCN",
    photos: [
      "/media/hackathons/nexora-2026/nexora-1.jpg"
    ],
    videos: [
      "/media/hackathons/nexora-2026/nexora-triagecn-demo.mp4"
    ],
    presentationFile: "/media/hackathons/nexora-2026/nexora-triagecn-pitchdeck.pptx",
    presentationType: "pptx",
    certificateImage: "/media/hackathons/nexora-2026/nexora-1.jpg",
    githubUrl: "https://github.com/Madhan310301/TriageCN"
  },
  {
    id: "sih-2025",
    name: "Smart India Hackathon 2025 (Internal Hackathon)",
    organizer: "Ministry of Education / AICTE & BIHER, Chennai",
    date: "20/11/2025",
    location: "BIHER, Chennai",
    mode: "Offline",
    status: "Past",
    result: "Internal Finalist (74/100) â€” Missed National Slot by 1 Pt",
    tag: "ðŸŽ¯ Internal Finalist (74/100)",
    badgeType: "finalist",
    role: "Full-Stack Architect & Team Lead",
    category: "National Digital Infrastructure & Governance",
    problemStatement: "Citizen life records (health history, immunization, school credentials, higher education degrees, employment records) remain scattered across disparate state and central silos with zero unified audit trail or citizen consent mechanisms.",
    whatWeBuilt: "Engineered SarvaJeevaID â€” a concept-stage national life tracking system linking healthcare, education, and employment records under a single lifelong citizen identity. Features offline QR identity cards for zero-connectivity rural areas, dropout early-warning telemetry, and DPDP Act-compliant granular consent controls with Redis BullMQ background processing.",
    technicalHighlights: [
      "Scored 74/100 in high-intensity BIHER internal SIH evaluation, narrowly missing national finals by 1 point",
      "High-performance RBAC schema on PostgreSQL with Redis + BullMQ asynchronous event queues",
      "DPDP Act (Digital Personal Data Protection) granular consent management and auditable access logging",
      "Offline-first QR citizen verification cards with cryptographic payload hashing"
    ],
    linkedProjectSlug: "sarvajeevaid",
    linkedProjectTitle: "SarvaJeevaID",
    photos: [],
    videos: [],
    certificateImage: "",
    githubUrl: "https://github.com/Madhan310301/SarvaJeevaID"
  },
  {
    id: "isro-bah-2026",
    name: "Bharatiya Antariksh Hackathon (BAH 2026)",
    organizer: "Indian Space Research Organisation (ISRO) & Hack2skill",
    date: "01/07/2026",
    location: "National Space Track",
    mode: "Virtual",
    status: "Ongoing",
    result: "National Space Tech Track Finalist",
    tag: "ðŸš€ ISRO Space Tech",
    badgeType: "ongoing",
    role: "Core Deep Learning & System Integration Lead",
    category: "Space Tech & Computer Vision",
    problemStatement: "Synthetic Aperture Radar (SAR) and visual optical satellite imagery depict the same geographical coordinates with drastically different pixel characteristics, creating a severe cross-modal image retrieval bottleneck.",
    whatWeBuilt: "Engineered SatBridge, a cross-modal satellite retrieval platform trained on 75,000 SEN1-2 SARâ€“optical image pairs. It projects both modalities into a shared vector embedding space, enabling researchers to input cloud-penetrating SAR scans and retrieve matching visual optical scenes in sub-second latency.",
    technicalHighlights: [
      "Dual-encoder deep neural network using twin ResNet18 backbones trained with contrastive loss",
      "FAISS approximate nearest-neighbor vector indexing across 75,000 image pairs",
      "FastAPI inference server streaming matched satellite scenes with confidence ranking",
      "Built for the ISRO BAH 2026 challenge track"
    ],
    linkedProjectSlug: "satbridge",
    linkedProjectTitle: "SatBridge",
    photos: [],
    videos: [],
    certificateImage: "",
    githubUrl: "https://github.com/Madhan310301/isro-bah"
  },
  {
    id: "vibe2ship-2026",
    name: "Vibe2Ship Hackathon",
    organizer: "Coding Ninjas & Vibe2Ship Consortium",
    date: "28/06/2026",
    location: "Rapid Sprint Track",
    mode: "Virtual",
    status: "Ongoing",
    result: "Solo Rapid-Build Finalist",
    tag: "âš¡ Rapid Build Sprint",
    badgeType: "ongoing",
    role: "Solo Builder & Full-Stack Developer",
    category: "Civic Tech & AI",
    problemStatement: "Citizens lack an intuitive, low-friction channel to document municipal hazards (potholes, garbage dumps, broken lights) and route them to responsible city departments.",
    whatWeBuilt: "Shipped CivicPulse in a 1-week rapid build sprint. Citizens capture photo and GPS telemetry on their mobile browser; Gemini 1.5 Flash immediately classifies the hazard type and urgency score, streaming prioritized dispatch tickets to municipal departments via Firebase and Cloud Run.",
    technicalHighlights: [
      "Gemini 1.5 Flash multimodal image classification and severity score attribution",
      "Hyperlocal GPS geotagging with reverse geocoding on Next.js 14 frontend",
      "Real-time reactive ticket queues on Firebase with serverless Cloud Run scaling",
      "Completed in under 7 days under competitive rapid prototyping constraints"
    ],
    linkedProjectSlug: "civicpulse",
    linkedProjectTitle: "CivicPulse",
    photos: [],
    videos: [],
    certificateImage: "",
    githubUrl: "https://github.com/Madhan310301/CivicPulse"
  },
  {
    id: "redrob-india-runs-2026",
    name: "Redrob â€” INDIA.RUNS Hackathon",
    organizer: "Redrob & Hack2skill Innovation Network",
    date: "03/07/2026",
    location: "National Track",
    mode: "Virtual",
    status: "Ongoing",
    result: "Active Competitive Showcase Track",
    tag: "ðŸ›¡ï¸ National Showcase",
    badgeType: "ongoing",
    role: "System Architect & Firmware Engineer",
    category: "IoT & Public Safety Systems",
    problemStatement: "Safety wearables in developing economies face severe adoption hurdles due to high manufacturing costs, reliance on expensive cloud data subscriptions, and battery drain.",
    whatWeBuilt: "Deployed SafePathAI into the Redrob INDIA.RUNS national innovation pipeline, demonstrating ultra-low power firmware optimization, local edge thresholding on microcontrollers, and low-cost SMS telemetry.",
    technicalHighlights: [
      "Deep sleep optimization reducing idle microcontroller draw below 15mA",
      "Autonomous hardware failover triggering emergency coordinates over 2G/GSM bands",
      "Live testing across varying mobile reception corridors"
    ],
    linkedProjectSlug: "safepath-ai",
    linkedProjectTitle: "SafePathAI",
    photos: [],
    videos: [],
    certificateImage: "",
    githubUrl: "https://github.com/Madhan310301/safepathAI"
  },
  {
    id: "genai-apac-2026",
    name: "Gen AI Academy APAC Edition",
    organizer: "Google Cloud & Hack2skill",
    date: "24/06/2026",
    location: "Asia-Pacific Virtual",
    mode: "Virtual",
    status: "Ongoing",
    result: "APAC AI Innovation Track",
    tag: "ðŸ¤– GenAI APAC",
    badgeType: "ongoing",
    role: "AI Application Architect",
    category: "Generative AI & LLM Systems",
    problemStatement: "Enterprise workflows across the Asia-Pacific region require contextual generative AI systems that adhere strictly to local domain knowledge and strict data latency constraints.",
    whatWeBuilt: "Architecting a multi-agent orchestration prototype leveraging Gemini APIs and vector retrieval pipelines for automated document summarization and real-time structured knowledge synthesis.",
    technicalHighlights: [
      "Agent orchestration pipeline evaluating multiple prompt strategies",
      "Grounding LLM outputs in verified vector indexes to eliminate hallucination",
      "Interactive evaluation benchmark testing latency across regional server clusters"
    ],
    photos: [],
    videos: [],
    certificateImage: "",
    githubUrl: "https://github.com/Madhan310301"
  },
  {
    id: "et-hackathon-2026",
    name: "ET AI Hackathon 2.0",
    organizer: "The Economic Times â€” India's Biggest AI Challenge",
    date: "22/07/2026",
    location: "National Virtual",
    mode: "Virtual",
    status: "Ongoing",
    result: "National AI Challenge Sprint",
    tag: "ðŸ“ˆ Economic Times AI",
    badgeType: "ongoing",
    role: "ML Engineer & Full-Stack Builder",
    category: "Financial & Enterprise AI",
    problemStatement: "Financial intelligence tools provide retrospective reporting rather than forward-looking predictive models for business cash flow and risk exposure.",
    whatWeBuilt: "Engineered automated risk assessment workflows combining supervised machine learning with natural language generation to provide executive-level decision summaries from transaction feeds.",
    technicalHighlights: [
      "Supervised ML classification pipeline with explainable feature attribution",
      "Automated summary generator translating raw metrics into natural language briefings",
      "Zero-latency client-side visualization dashboard"
    ],
    photos: [],
    videos: [],
    certificateImage: "",
    githubUrl: "https://github.com/Madhan310301"
  },
  {
    id: "braille-vision-2026",
    name: "Braille Vision Hackathon",
    organizer: "Accessibility Tech Innovation Consortium",
    date: "01/06/2026",
    location: "Virtual Challenge",
    mode: "Virtual",
    status: "Past",
    result: "Accessibility Domain Contender",
    tag: "ðŸ‘ï¸ Vision & Accessibility",
    badgeType: "finalist",
    role: "Computer Vision & Audio Integration Lead",
    category: "Computer Vision & Assistive Tech",
    problemStatement: "Visually impaired individuals in low-resource or low-connectivity environments cannot access digital Braille translation devices due to high costs and constant cloud connectivity requirements.",
    whatWeBuilt: "Created VisionX / NeuroDot â€” a strictly offline-first Braille recognition pipeline. A lightweight custom CNN processes camera imagery to detect raised dot grids, translates patterns into plain text, and articulates them through an offline text-to-speech synthesizer.",
    technicalHighlights: [
      "100% offline computer vision pipeline with zero cloud dependencies",
      "Custom dot-pattern recognition engine handling varying paper lighting and tilt",
      "Integrated pyttsx3 offline audio synthesis for instant tactile-to-speech feedback"
    ],
    linkedProjectSlug: "neurodot",
    linkedProjectTitle: "NeuroDot (VisionX)",
    photos: [],
    videos: [],
    certificateImage: "",
    githubUrl: "https://github.com/Madhan310301/VisionX"
  },
  {
    id: "intellect-hackathon-2026",
    name: "Intellect Hackathon 2026",
    organizer: "Sri Sairam Engineering College, Chennai",
    date: "23/09/2026",
    location: "Sai Ram Engineering, Chennai",
    mode: "Offline",
    status: "Past",
    result: "Decentralized Systems Finalist Stage",
    tag: "ðŸ¥ Decentralized Tech",
    badgeType: "finalist",
    role: "Blockchain & Web3 Architect",
    category: "Decentralized Healthcare & IPFS",
    problemStatement: "Centralized hospital servers create catastrophic single points of failure for confidential patient health records, leaving patients with zero audit visibility or access control.",
    whatWeBuilt: "Engineered MediChainAI (HealAI) â€” an IPFS-anchored decentralized electronic health record platform. Encrypted medical scans are stored on decentralized nodes, while smart contracts enforce patient-sovereign consent transactions with auditable blockchain access logs.",
    technicalHighlights: [
      "AES-256 client-side payload encryption prior to IPFS distributed hash storage",
      "Smart contract access governance with time-bounded clinician authorization tokens",
      "Reduced data query overhead by 25% compared to legacy hospital database architectures"
    ],
    linkedProjectSlug: "healai",
    linkedProjectTitle: "HealAI (MediChainAI)",
    photos: [],
    videos: [],
    certificateImage: "",
    githubUrl: "https://github.com/Madhan310301/MediChainAI"
  },
  {
    id: "amd-act-ii-2026",
    name: "AMD Developer Hackathon: ACT II",
    organizer: "AMD & lablab.ai",
    date: "06/07/2026",
    location: "Global Virtual",
    mode: "Virtual",
    status: "Past",
    result: "High-Performance Compute Submission",
    tag: "âš¡ AMD Compute",
    badgeType: "finalist",
    role: "Team Code Nest â€” Performance Engineer",
    category: "Accelerated Hardware Computing",
    problemStatement: "Standard CPU inference pipelines for local deep learning models introduce unacceptable latency bottlenecks in edge computing scenarios.",
    whatWeBuilt: "Investigated hardware acceleration strategies and kernel optimizations tailored for AMD ROCm architecture, optimizing batch throughput for real-time computer vision inference.",
    technicalHighlights: [
      "ROCm / ONNX runtime profiling identifying memory bandwidth bottlenecks",
      "Model quantization and kernel tuning reducing inference cycle time",
      "Reproducible containerized test benches for accelerated edge inference"
    ],
    photos: [],
    videos: [],
    certificateImage: "",
    githubUrl: "https://github.com/Madhan310301"
  },
  {
    id: "gsa-freshers-fuse-2026",
    name: "Google Freshers Fuse & GSA Conclave",
    organizer: "Google Student Ambassadors (GSA) & BIHER, Chennai",
    date: "09/09/2026",
    location: "BIHER Auditorium, Chennai",
    mode: "Offline",
    status: "Past",
    result: "Lead Organizer & Core Platform Developer",
    tag: "ðŸŽ“ GSA Event Lead",
    badgeType: "organizer",
    role: "Google Student Ambassador (GID: 3150) & Lead Developer",
    category: "Developer Relations & Web Platforms",
    problemStatement: "Campus tech events face massive manual overhead and student frustration when verifying attendance and issuing hundreds of individualized certificates after multi-track workshops.",
    whatWeBuilt: "Engineered Certificate Generator â€” an automated high-speed credential issuance platform built for Google Freshers Fuse at BIHER. Features HTML5 Canvas coordinate calibration, dynamic name injection, live interactive preview, and instant client-side high-DPI image and PDF export.",
    technicalHighlights: [
      "High-DPI HTML5 Canvas rendering engine with responsive preview and coordinate calibration",
      "Instant attendee lookup with fallback rendering safeguards preventing text cutoff",
      "Presented live on stage to a packed auditorium of hundreds of engineering students",
      "Seamless client-side export with zero server load or database processing delay"
    ],
    linkedProjectSlug: "certificate-generator",
    linkedProjectTitle: "Certificate Generator",
    photos: [
      "/media/hackathons/gsa-fuse-2026/gsa-1.jpg",
      "/media/hackathons/gsa-fuse-2026/gsa-2.jpg",
      "/media/hackathons/gsa-fuse-2026/gsa-3.jpg"
    ],
    videos: [],
    presentationFile: "/media/hackathons/gsa-fuse-2026/gsa-conclave-presentation.pdf",
    presentationType: "pdf",
    certificateImage: "",
    credentialId: "GSA_2026",
    githubUrl: "https://github.com/Madhan310301/Certificate_Generator"
  },
  {
    id: "karnataka-police-2026",
    name: "Karnataka Police Datathon 2026",
    organizer: "Karnataka State Police Department",
    date: "2026",
    location: "Bengaluru, Karnataka",
    mode: "Offline",
    status: "Past",
    result: "Selected Challenge 02 Finalist & Technical Lead",
    tag: "ðŸ›¡ï¸ Police Datathon Finalist",
    badgeType: "finalist",
    role: "Team Leader & End-to-End System Architect",
    category: "Predictive Analytics & Law Enforcement",
    problemStatement: "Most predictive policing platforms generate static density heatmaps without providing tactical, real-time vehicle dispatch recommendations for Real-Time Crime Centers (RTCC).",
    whatWeBuilt: "Designed Drishti â€” a predictive command console that combines DBSCAN spatial clustering with Isolation Forest surge alerts, SHAP explainable AI risk attributions, and a PuLP integer programming optimizer that calculates optimal police patrol unit positions to minimize incident response times.",
    technicalHighlights: [
      "DBSCAN spatial clustering coupled with Isolation Forest temporal surge anomaly detection",
      "SHAP TreeExplainer generating transparent, natural-language risk breakdowns for dispatchers",
      "PuLP linear programming solver computing patrol placements under multi-unit constraints"
    ],
    linkedProjectSlug: "drishti",
    linkedProjectTitle: "Drishti",
    photos: [],
    videos: [],
    certificateImage: "",
    githubUrl: "https://github.com/Madhan310301/Drishti"
  }
];