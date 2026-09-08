export interface Project {
  id: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullOverview: string;
  architecture: string;
  technologies: string[];
  category: 'Full-Stack' | 'AI / Machine Learning' | 'Systems & IoT';
  featured: boolean;
  keyFeatures: string[];
  challengesAndImplementation: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  metricsUrl?: string;
  stats?: { label: string; value: string }[];
}

export interface SkillCategory {
  name: string;
  iconName: string;
  description: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  grade?: string;
  courses: string[];
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

export const PERSONAL_INFO = {
  name: "Punith Sai",
  fullName: "Palgudi Punith Sai",
  title: "Full-Stack Developer",
  targetCompany: "Hubwise AI",
  headline: "Full-Stack Developer building practical, scalable, and user-focused web applications.",
  subtext: "Specializing in React, Python/FastAPI, Node.js, and AI integrations. Focused on delivering production-ready software with clean architecture and solid test coverage.",
  location: "India",
  email: "punithsai0607@gmail.com",
  github: "https://github.com/punithsai0607", // Replaceable placeholder if different
  linkedin: "https://linkedin.com/in/punithsai", // Replaceable placeholder
  aboutBio: [
    "I am a passionate Full-Stack Developer with hands-on experience building web applications, AI-powered advisory systems, and machine learning tools.",
    "My focus is on solving practical problems by designing resilient backend APIs, responsive frontends, and seamless database interactions. I value clean code, unit testing, automated workflows, and rapid deployment.",
    "Whether it's crafting an algorithmic financial scoring model with 100% test coverage or deploying vector-based search CLI tools, I build software that works reliably in production."
  ],
  stats: [
    { label: "Production Projects", value: "4+" },
    { label: "Backend Test Coverage", value: "100%" },
    { label: "Core Stack", value: "React & Python" },
    { label: "Target Role", value: "Full-Stack Dev" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Languages",
    iconName: "Code2",
    description: "Core programming languages for application logic & data manipulation",
    skills: [
      { name: "Java", level: 85 },
      { name: "Python", level: 90, highlight: true },
      { name: "JavaScript", level: 90, highlight: true },
      { name: "SQL", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 }
    ]
  },
  {
    name: "Frontend Development",
    iconName: "Layout",
    description: "Building responsive, modern, and high-performance UI",
    skills: [
      { name: "React", level: 90, highlight: true },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "HTML5 & Semantic Markup", level: 95 },
      { name: "CSS3 & Modern Layouts", level: 90 },
      { name: "Tailwind CSS", level: 88, highlight: true }
    ]
  },
  {
    name: "Backend Development",
    iconName: "Server",
    description: "Architecting resilient APIs, microservices, and server logic",
    skills: [
      { name: "Python / FastAPI", level: 92, highlight: true },
      { name: "Node.js / Express", level: 82 },
      { name: "Java / Spring Boot", level: 80 },
      { name: "RESTful API Design", level: 90, highlight: true }
    ]
  },
  {
    name: "Databases & Storage",
    iconName: "Database",
    description: "Relational database management, ORMs, and vector search",
    skills: [
      { name: "PostgreSQL", level: 85, highlight: true },
      { name: "MySQL", level: 82 },
      { name: "SQLite", level: 90 },
      { name: "SQLAlchemy ORM", level: 88 },
      { name: "FAISS Vector Store", level: 80 }
    ]
  },
  {
    name: "Tools & DevOps",
    iconName: "Wrench",
    description: "Developer tools, version control, AI libraries, and deployment",
    skills: [
      { name: "Git & GitHub", level: 90, highlight: true },
      { name: "Docker & Containerization", level: 82 },
      { name: "Pytest & Unit Testing", level: 90, highlight: true },
      { name: "OpenAI SDK & LangChain", level: 85, highlight: true },
      { name: "VS Code & CLI Tools", level: 95 },
      { name: "Render & Vercel Deployment", level: 88 }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "ai-money-mentor",
    title: "AI Money Mentor",
    tagline: "Production-Ready Fintech & AI Advisory Platform",
    shortDescription: "A full-stack personal finance and AI advisory application featuring live analytics, algorithmic financial health scoring, and context-aware GPT-4o advice.",
    fullOverview: "AI Money Mentor is a comprehensive personal finance platform engineered with React 19 and FastAPI. It empowers users to track itemized transactions, visualize expense breakdowns via interactive charts, measure financial stability using a deterministic 0-100 Money Health Score algorithm, and converse with a personalized AI Financial Mentor equipped with user financial context.",
    architecture: "Frontend built on React 19 and Vite communicating over REST APIs with a FastAPI (Python 3.11/3.13) backend. Powered by SQLAlchemy ORM, SQLite/PostgreSQL, PyJWT authentication, bcrypt password hashing, and OpenAI GPT-4o-mini API integration.",
    technologies: ["React 19", "FastAPI", "Python", "OpenAI GPT-4o-mini", "SQLAlchemy", "SQLite/PostgreSQL", "Recharts", "JWT Auth", "Docker", "Pytest"],
    category: "Full-Stack",
    featured: true,
    keyFeatures: [
      "🤖 AI Financial Advisory: Context-aware OpenAI chatbot analyzing live user balance, income, expenses, and recent transactions.",
      "💳 Itemized Transaction Engine: Add, filter (Income/Expense), and delete transactions with instant summary calculations.",
      "📊 Interactive Recharts Analytics: Visual representation of budget allocation and category distributions.",
      "❤️ Algorithmic Money Health Score: Explainable 0–100 scoring based on savings rates, debt ratio, and liquid reserves.",
      "🔐 Secure JWT Authentication: Bearer token auth with bcrypt hashing and strict user data isolation.",
      "🧪 100% Endpoint Test Coverage: 34 automated unit & integration tests covering auth, aggregates, security, and chatbot features."
    ],
    challengesAndImplementation: [
      "Designed a context-injection algorithm for OpenAI prompts to pass sanitized financial aggregates without exposing sensitive raw tokens.",
      "Implemented strict database transaction rollbacks and user isolation filters to prevent cross-account data leaking.",
      "Built deterministic mathematical models for the 0-100 Money Health Score with clear qualitative feedback."
    ],
    githubUrl: "https://github.com/punithsai0607/AI-Money-Mentor", // Easy to replace
    stats: [
      { label: "Backend Tests", value: "34/34 Passed (100%)" },
      { label: "AI Model", value: "GPT-4o-mini" },
      { label: "Deploy Target", value: "Render / Vercel" }
    ]
  },
  {
    id: "ai-assistant-console",
    title: "AI Assistant Console (LangChain RAG)",
    tagline: "Terminal-Based Markdown RAG Assistant with IBM Granite & Ollama",
    shortDescription: "An interactive CLI tool that parses technical markdown documentation into FAISS vector stores to perform contextual similarity retrieval and question answering.",
    fullOverview: "This project provides an intelligent command-line interface for querying custom Markdown knowledge repositories. Using LangChain and FAISS vector embeddings, it ingests markdown files, splits them into semantic chunks, and enables real-time vector search queries against local LLM models.",
    architecture: "Node.js application utilizing LangChain Core & Community packages, @langchain/ollama, FAISS vector database (faiss-node), Inquirer CLI interface, and Markdown text splitters.",
    technologies: ["Node.js", "LangChain", "IBM Granite / Ollama", "FAISS Vector DB", "JavaScript", "Inquirer CLI"],
    category: "AI / Machine Learning",
    featured: true,
    keyFeatures: [
      "📄 Automated Markdown Parsing: Ingests structured and unstructured markdown files from local folders.",
      "🔍 FAISS Vector Store Indexing: Fast vector similarity searching across document embeddings.",
      "💬 Interactive Terminal Interface: Clean prompt-driven CLI experience built with Inquirer.",
      "⚡ Local Inference Support: Integrates seamlessly with Ollama / IBM Granite for privacy-focused offline RAG."
    ],
    challengesAndImplementation: [
      "Optimized text chunking overlap ratios to maintain context boundaries across code blocks in technical documentation.",
      "Managed native FAISS bindings across node environments for low-latency similarity lookups."
    ],
    githubUrl: "https://github.com/punithsai0607/AI-assistant-Console-granite-IBM",
    stats: [
      { label: "Vector Search", value: "FAISS" },
      { label: "Framework", value: "LangChain" },
      { label: "Interface", value: "Interactive CLI" }
    ]
  },
  {
    id: "ev-adoption-forecasting",
    title: "EV Adoption Forecasting & Analytics Engine",
    tagline: "Machine Learning Time-Series Predictive Model for Regional EV Trends",
    shortDescription: "A data science pipeline analyzing historical Electric Vehicle adoption trends by county to forecast future grid load demands and growth trajectories.",
    fullOverview: "An analytical platform designed to clean, process, and model large-scale EV registration dataset records. Features predictive time-series models serialized for inference to help urban planners evaluate EV charging infrastructure demands.",
    architecture: "Python data science stack utilizing Pandas for data manipulation, Scikit-Learn for model training, Jupyter for exploration, and Pickle for model serialization.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Jupyter", "Machine Learning"],
    category: "AI / Machine Learning",
    featured: true,
    keyFeatures: [
      "📈 Time-Series Trend Modeling: Historical EV growth trajectory fitting and multi-year forecasting.",
      "🧹 Automated Data Cleaning Pipeline: Processes over 1M+ row raw dataset entries, handling missing values and outlier anomalies.",
      "🎯 Predictive Model Serialization: Exported model file (.pkl) ready for production API consumption."
    ],
    challengesAndImplementation: [
      "Handled high variance in county-level adoption velocity using normalized feature transformations.",
      "Evaluated regression models (RMSE, R² score) to select optimal hyper-parameters."
    ],
    githubUrl: "https://github.com/punithsai0607/EV-Adoption-Forecasting",
    stats: [
      { label: "Data Records", value: "1M+ Processed" },
      { label: "Stack", value: "Python ML" }
    ]
  },
  {
    id: "smart-home-iot",
    title: "Smart Home IoT Embedded System",
    tagline: "Real-Time Sensor Telemetry & Automation Microcontroller System",
    shortDescription: "An embedded hardware-software IoT system built with ESP32 microcontrollers for environmental monitoring and relay control.",
    fullOverview: "A hardware-software integration project delivering real-time telemetry from environmental sensors to an automated control system.",
    architecture: "C/C++ firmware compiled for ESP32 microcontrollers communicating over Wi-Fi/Bluetooth protocols with sensor peripherals.",
    technologies: ["C++", "ESP32 Microcontroller", "IoT Telemetry", "Embedded C", "Hardware Integration"],
    category: "Systems & IoT",
    featured: false,
    keyFeatures: [
      "🌡️ Real-Time Sensor Telemetry: Continuous monitoring of environmental metrics.",
      "⚡ Automated Relay Triggers: Dynamic actuation based on configurable threshold rules."
    ],
    challengesAndImplementation: [
      "Optimized memory footprint and power management routines on microcontrollers."
    ],
    githubUrl: "https://github.com/punithsai0607/Smart-Home-IoT-ESP32",
    stats: [
      { label: "Hardware", value: "ESP32" },
      { label: "Language", value: "C++ / Embedded" }
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "KL University",
    period: "2022 — 2026",
    location: "Andhra Pradesh, India",
    grade: "Relevant Specialization: Software Engineering & Artificial Intelligence",
    courses: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java/Python)",
      "Database Management Systems",
      "Web Technologies & REST APIs",
      "Operating Systems & Distributed Computing",
      "Machine Learning & AI Principles"
    ],
    highlights: [
      "Actively built full-stack projects combining modern React frontends with Python/FastAPI and Node backends.",
      "Completed intensive practical coursework in Data Structures, Database Systems, and Cloud Platforms."
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "Certified"
  },
  {
    title: "Cybersecurity Essentials Certification",
    issuer: "Cisco Networking Academy",
    date: "Certified"
  },
  {
    title: "Automation Business Analyst Training",
    issuer: "EduSkills / UiPath",
    date: "Certified"
  }
];
