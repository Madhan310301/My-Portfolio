import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROJECTS = [
  {
    id: 1,
    tag: "[BUILD-01]",
    title: "SafePathAI",
    category: "IoT Child Safety Wearable",
    desc: "AI-enabled child-safety pendant with GPS, motion detection, and ML-based risk scoring — offline SMS alerts to parents on abnormal patterns.",
    duration: "Completed Jan 2026",
    stack: ["ESP32", "GPS", "GSM", "MPU6050", "Node.js", "React"],
    fullDesc1: "SafePathAI is an IoT wearable designed to keep children safe in unsupervised outdoor environments. The device combines a GPS module for real-time location tracking, an MPU6050 accelerometer for fall/motion detection, and a GSM module for offline emergency alerts — working even without internet.",
    fullDesc2: "An ML risk-scoring layer analyzes motion patterns to distinguish normal movement from distress indicators, triggering parent alerts only when the threshold is crossed. A React dashboard provides live map tracking. Won Genesis Hackathon 2026 — Overall 2nd Prize & IoT Domain 1st Prize at SRMEEC Chennai.",
    milestone: "Won Genesis Hackathon 2026 — Overall 2nd Prize & Domain 1st Prize at SRMEEC, Chennai.",
    keyFeature: "Offline SMS/call alerts via GSM + ML risk scoring from accelerometer data.",
    problem: "Children in unsupervised outdoor environments have no reliable, real-time safety alert system.",
    challenge: "Integrating hardware sensor telemetry with low-latency dashboard under hackathon time pressure."
  },
  {
    id: 2,
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
    challenge: "Designing a RBAC schema that stays performant under concurrent multi-department access patterns."
  },
  {
    id: 3,
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
    challenge: "Tuning the OpenAI prompt to generate contextually relevant (not generic) motivational nudges."
  },
  {
    id: 4,
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
    challenge: "Building a robust model that generalizes across varied lighting, angles, and produce sizes."
  },
  {
    id: 5,
    tag: "[BUILD-05]",
    title: "RenoAI",
    category: "AI Home Renovation Agent",
    desc: "Conversational AI agent turning natural-language renovation requests into design visualizations, cost estimates, and material recommendations.",
    duration: "Completed 2025",
    stack: ["Python", "LangChain", "GPT-4o", "Stable Diffusion XL", "ControlNet", "FastAPI", "FAISS"],
    fullDesc1: "RenoAI is a multi-turn conversational agent that takes a natural-language renovation brief ('turn my living room Scandinavian-minimal') and returns rendered design visualizations using Stable Diffusion XL + ControlNet image-to-image generation.",
    fullDesc2: "A RAG pipeline grounded on a material/product catalog (FAISS vector store) powers the cost estimation (XGBoost regressor) and material recommendation engine. FastAPI serves the backend; users chat their way to a full renovation plan.",
    milestone: "End-to-end pipeline from text prompt to rendered room visualization + cost breakdown.",
    keyFeature: "ControlNet-guided image-to-image generation from room photos + XGBoost cost estimator.",
    problem: "Home renovation planning is expensive, slow, and hard to visualize before committing to a contractor.",
    challenge: "Grounding LLM suggestions in real product catalog data to prevent hallucinated cost estimates."
  },
  {
    id: 6,
    tag: "[BUILD-06]",
    title: "DocuAI",
    category: "AI Document Reader",
    desc: "AI document assistant that ingests PDFs and scanned docs, answers questions via RAG, and highlights key clauses and data points.",
    duration: "Completed 2025",
    stack: ["Python", "PyMuPDF", "Tesseract OCR", "LangChain", "GPT-4", "FastAPI"],
    fullDesc1: "DocuAI ingests PDFs and scanned documents using PyMuPDF for digital PDFs and Tesseract OCR for scanned pages, then builds a LangChain RAG pipeline over the extracted text with GPT-4 as the QA backbone.",
    fullDesc2: "Users can ask natural-language questions ('What is the penalty clause in section 7?') and get precise, cited answers. The system also auto-generates document summaries and highlights critical clauses for legal, financial, and research documents.",
    milestone: "Accurate RAG-based QA over 100+ page PDFs with source-highlighted responses.",
    keyFeature: "Hybrid OCR + vector retrieval pipeline for both digital and scanned document querying.",
    problem: "Reading and extracting specific information from long, dense PDFs is time-consuming and error-prone.",
    challenge: "Handling scanned PDF quality variance and maintaining citation accuracy across chunked embeddings."
  },
  {
    id: 7,
    tag: "[BUILD-07]",
    title: "HealAI",
    category: "Decentralized Healthcare Platform",
    desc: "Blockchain-based healthcare platform storing encrypted patient records on IPFS with on-chain consent management and federated-learning diagnostics.",
    duration: "Completed Jun 2025",
    stack: ["Solidity", "Ethereum", "IPFS", "AES-256", "Python", "React.js"],
    fullDesc1: "HealAI is a decentralized healthcare data platform where patient records are AES-256 encrypted and stored on IPFS, with only the content hash anchored on-chain via Ethereum smart contracts. Patients hold sovereign control over who accesses their data.",
    fullDesc2: "On-chain consent management means every access request is an auditable blockchain transaction. A federated-learning layer enables hospitals to collaboratively improve diagnostic models without sharing raw patient data — preserving privacy at every layer.",
    milestone: "25% reduction in API latency vs. baseline centralized architecture in benchmarks.",
    keyFeature: "Patient-sovereign consent via Ethereum smart contracts + federated ML diagnostics.",
    problem: "Centralized healthcare databases expose patient data to breaches and remove patient agency.",
    challenge: "Synchronizing edge model inference with on-chain consent state without gas cost explosion."
  },
  {
    id: 8,
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
    challenge: "Designing a tool-routing agent that doesn't hallucinate tool selection on ambiguous user inputs."
  },
  {
    id: 9,
    tag: "[BUILD-09]",
    title: "PredMaintain",
    category: "Predictive Maintenance System",
    desc: "ML system fusing vibration, temperature, and acoustic sensor data into a Machine Health Index with fault classification and anomaly detection.",
    duration: "Completed Dec 2024",
    stack: ["Python", "Scikit-learn", "TensorFlow", "XGBoost", "Kafka", "InfluxDB", "Grafana"],
    fullDesc1: "PredMaintain is an industrial IoT predictive maintenance system that fuses vibration, temperature, and acoustic sensor streams into a unified Machine Health Index (MHI). LSTM autoencoders detect subtle multivariate anomalies that threshold alarms miss.",
    fullDesc2: "XGBoost classifies fault types; Kafka handles real-time sensor ingestion; InfluxDB stores time-series data; and Grafana dashboards give maintenance teams live visibility. SHAP-based explainability surfaces the root cause for each flagged anomaly.",
    milestone: "Reduced simulated machine downtime by 20% compared to threshold-based baseline.",
    keyFeature: "LSTM autoencoder anomaly detection + SHAP root cause explainability for maintenance teams.",
    problem: "Reactive industrial maintenance causes costly unplanned downtime from failures that were predictable.",
    challenge: "Building an interpretable model that non-ML maintenance engineers can trust and act on."
  },
  {
    id: 10,
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
    challenge: "Ensuring data integrity between concurrent live inventory updates and simultaneous billing transactions."
  },
  {
    id: 11,
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
    challenge: "Training a generalizable ML model on sparse, noisy personal financial transaction data."
  },
  {
    id: 12,
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
    challenge: "Maintaining accurate person counts in occluded, overlapping crowd scenes at high density."
  },
  {
    id: 13,
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
    challenge: "Estimating portion sizes from 2D photos without depth information for reliable calorie counts."
  },
  {
    id: 14,
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
    challenge: "Preserving the user's unique voice and tone across LLM expansion without it sounding generic."
  },
  {
    id: 15,
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
    challenge: "Building a robust dot-pattern detector that works on varied surfaces, lighting, and camera angles."
  },
  {
    id: 16,
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
    challenge: "Real-time design overlay rendering on product mockups without perceptible UI lag."
  },
  {
    id: 17,
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
    challenge: "Aligning SAR and optical feature spaces in a shared embedding without paired training data at inference time."
  },
  {
    id: 18,
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
    challenge: "Preventing double-booking under concurrent room selection without distributed locking overhead."
  },
  {
    id: 19,
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
    challenge: "Building a reliable authority-routing layer without a complete, accurate municipal department API."
  },
  {
    id: 20,
    tag: "[BUILD-20]",
    title: "Madhan Kumar Portfolio",
    category: "Personal Portfolio Website",
    desc: "This portfolio — a cinematic dark-theme site with animated skills visualizer, 20-project navigator, education flight trajectory, and interactive contact form.",
    duration: "Ongoing 2026",
    stack: ["React", "Vite", "TypeScript", "Framer Motion", "Recharts", "Tailwind CSS"],
    fullDesc1: "This very site — built as a cinematic, dark-space themed portfolio to showcase 20+ projects, skills, credentials, and the complete engineering journey from SSLC to B.Tech. Every section is a custom-designed interactive experience.",
    fullDesc2: "Features include a Recharts skills visualizer (Bar/Donut/Spider tabs), a 20-project orbit navigator with animated case-study cards, an education flight trajectory with Framer Motion rocket animation, and a Nebula particle background. Built with React + Vite + Framer Motion.",
    milestone: "Full cinematic portfolio with 7 interactive sections live and deployed.",
    keyFeature: "Recharts skills visualizer, Framer Motion education trajectory, 20-project case-study navigator.",
    problem: "Static PDF resumes don't convey the depth, variety, and personality behind a developer's work.",
    challenge: "Designing interactive data visualizations and animations that feel cinematic without sacrificing performance."
  }
];

const Projects: React.FC = () => {
  const [activeId, setActiveId] = useState(1);
  
  const activeProject = PROJECTS.find(p => p.id === activeId) || PROJECTS[0];

  return (
    <section className="py-24 relative" id="projects">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="font-mono text-sm text-primary mb-2">// LAUNCHED MISSIONS</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">PROJECT LOG</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Side: Featured Case Study Card */}
          <div className="lg:w-[70%]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="hud-bracket bg-card p-6 md:p-8 border-2 border-white/10 hover:border-primary/50 transition-colors shadow-lg"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="font-mono text-primary font-bold">{activeProject.tag}</div>
                  <span className="text-xs font-mono text-white/40 border border-white/10 px-3 py-1 rounded-full">{activeProject.duration}</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">{activeProject.title}</h3>
                <p className="text-xl text-muted-foreground mb-6">{activeProject.desc}</p>

                <div className="mb-8 pb-8 border-b border-white/10">
                  <div className="font-mono text-xs text-white/50 mb-2">// STACK_CORE</div>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.stack.map(tech => (
                      <span key={tech} className="text-xs bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground mb-8 text-sm md:text-base leading-relaxed">
                  <p>{activeProject.fullDesc1}</p>
                  <p>{activeProject.fullDesc2}</p>
                </div>

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
          </div>

          {/* Right Side: Vertical Orbit Navigator */}
          <div className="lg:w-[30%] flex flex-col">
            <div className="bg-[#0f0f15] p-4 rounded-t border border-white/10 border-b-0">
              <p className="font-mono text-xs text-white/60 leading-relaxed">
                // MISSION_LOG — {PROJECTS.length} builds. Select any node to load the case study.
              </p>
            </div>
            
            <div className="flex-1 bg-card border border-white/10 rounded-b overflow-y-auto" style={{ maxHeight: '640px' }}>
              {/* Vertical line connecting nodes */}
              <div className="relative p-2">
                <div className="absolute left-[22px] top-4 bottom-4 w-[2px] bg-white/5 z-0"></div>

                <div className="flex flex-col gap-1 z-10 relative">
                  {PROJECTS.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => setActiveId(project.id)}
                      className={`flex items-center gap-4 p-3 rounded-lg transition-all text-left w-full ${
                        activeId === project.id 
                          ? 'bg-white/5 border border-primary/30 shadow-[0_0_15px_rgba(225,29,72,0.15)]' 
                          : 'hover:bg-white/5 border border-transparent'
                      }`}
                    >
                      <div className={`relative flex-shrink-0 w-4 h-4 rounded-full border-2 transition-colors ${
                        activeId === project.id ? 'border-primary bg-primary' : 'border-white/20 bg-card'
                      }`}>
                        {activeId === project.id && (
                          <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-50"></div>
                        )}
                      </div>
                      <div className="min-w-0">
                        <div className={`font-bold text-sm transition-colors truncate ${activeId === project.id ? 'text-white' : 'text-white/60'}`}>
                          {project.title}
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5 truncate">{project.category}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
