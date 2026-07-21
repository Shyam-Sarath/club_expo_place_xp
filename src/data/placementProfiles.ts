export interface PlacementProfile {
  id: string;
  departmentId: string;
  company: string;
  companyLogo: string; // Brand emoji or initial icon
  companyColor: string;
  role: string;
  experience: number; // YOE (0 = Fresher)
  location: string;
  employmentType: "Full Time" | "Hybrid" | "Remote" | "International Relocation";
  skills: string[];
  actualCTC: number; // in LPA (e.g. 48.5, 110)
  difficulty: "Easy" | "Medium" | "Hard";
  tier: "FAANG / Big Tech" | "High-Growth Unicorn" | "Core Industrial" | "Global MNC" | "Leading Startup";
  isGolden?: boolean;
  insights: string[];
}

// Master dataset of 304+ profiles (16 per department for all 19 VIT Chennai departments)
export const PLACEMENT_PROFILES: PlacementProfile[] = [
  // ==========================================
  // 1. COMPUTER SCIENCE & ENGINEERING (CSE) - 16 PROFILES
  // ==========================================
  {
    id: "cse-1",
    departmentId: "cse",
    company: "Google",
    companyLogo: "🔍",
    companyColor: "#4285F4",
    role: "Senior Software Engineer",
    experience: 4,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["Java", "Distributed Systems", "Kubernetes", "React", "Node.js"],
    actualCTC: 48.5,
    difficulty: "Easy",
    tier: "FAANG / Big Tech",
    insights: [
      "✓ Google pays top-of-market base and heavy RSU equity components.",
      "✓ 4 years of hands-on distributed systems expertise commands Tier 1 pay.",
      "✓ Kubernetes and cloud-native architecture skills are in high demand.",
      "✓ Bangalore compensation tier includes premium location allowances."
    ]
  },
  {
    id: "cse-2",
    departmentId: "cse",
    company: "Meta",
    companyLogo: "♾️",
    companyColor: "#0668E1",
    role: "Staff Infrastructure Engineer",
    experience: 6,
    location: "Seattle, USA (Relocation)",
    employmentType: "International Relocation",
    skills: ["C++20", "Kernel Hacking", "Distributed Storage", "gRPC", "eBPF"],
    actualCTC: 110.0,
    difficulty: "Hard",
    tier: "FAANG / Big Tech",
    isGolden: true,
    insights: [
      "✓ International US transfer package converted to INR equivalent (1.1 CR).",
      "✓ Low-level C++ kernel optimization is exceptionally rare and high-value.",
      "✓ Substantial annual RSU grant refreshers from Meta.",
      "✓ Top-tier performance rating during campus recruitment."
    ]
  },
  {
    id: "cse-3",
    departmentId: "cse",
    company: "Atlassian",
    companyLogo: "🔷",
    companyColor: "#0052CC",
    role: "Backend Software Engineer",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Remote",
    skills: ["Java", "Spring Boot", "Kafka", "AWS", "DynamoDB"],
    actualCTC: 34.0,
    difficulty: "Medium",
    tier: "High-Growth Unicorn",
    insights: [
      "✓ Atlassian offers industry-leading remote work stipends and competitive base pay.",
      "✓ High equity allocation for early-career hires.",
      "✓ Microservices and Kafka event-driven experience boosted offer grade."
    ]
  },
  {
    id: "cse-4",
    departmentId: "cse",
    company: "Uber",
    companyLogo: "🚗",
    companyColor: "#000000",
    role: "Systems Software Engineer",
    experience: 3,
    location: "Hyderabad, India",
    employmentType: "Full Time",
    skills: ["Go", "Distributed Databases", "Redis", "Docker", "Envoy"],
    actualCTC: 42.0,
    difficulty: "Medium",
    tier: "FAANG / Big Tech",
    insights: [
      "✓ Uber Tech Center Hyderabad offers premium software engineering packages.",
      "✓ Expertise in high-throughput Go services.",
      "✓ Strong performance in system design rounds."
    ]
  },
  {
    id: "cse-5",
    departmentId: "cse",
    company: "Stripe",
    companyLogo: "💳",
    companyColor: "#635BFF",
    role: "Full Stack Engineer",
    experience: 1,
    location: "Remote (India)",
    employmentType: "Remote",
    skills: ["Ruby", "TypeScript", "React", "PostgreSQL", "GraphQL"],
    actualCTC: 38.0,
    difficulty: "Hard",
    tier: "High-Growth Unicorn",
    insights: [
      "✓ Stripe's global compensation benchmarking provides high remote pay.",
      "✓ Financial infrastructure compliance expertise.",
      "✓ Impressive open-source contributions prior to hiring."
    ]
  },
  {
    id: "cse-6",
    departmentId: "cse",
    company: "Zoho",
    companyLogo: "⚡",
    companyColor: "#E42526",
    role: "Member Technical Staff",
    experience: 0,
    location: "Chennai, India",
    employmentType: "Full Time",
    skills: ["Java", "Algorithms", "C++", "MySQL"],
    actualCTC: 8.5,
    difficulty: "Easy",
    tier: "Leading Startup",
    insights: [
      "✓ Standard campus entry-level CTC for freshers at Zoho Chennai campus.",
      "✓ Excellent learning culture and product ownership opportunities.",
      "✓ No bond required with rapid annual salary progression."
    ]
  },
  {
    id: "cse-7",
    departmentId: "cse",
    company: "Infosys",
    companyLogo: "ℹ️",
    companyColor: "#007CC3",
    role: "Systems Engineer Specialist",
    experience: 0,
    location: "Mysore, India",
    employmentType: "Full Time",
    skills: ["Python", "SQL", "Web Development"],
    actualCTC: 6.2,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ HackWithInfy competition top tier qualifier role.",
      "✓ Higher CTC tier compared to standard mass recruiter offers.",
      "✓ Comprehensive training at Mysore Global Education Center."
    ]
  },
  {
    id: "cse-8",
    departmentId: "cse",
    company: "Cred",
    companyLogo: "💳",
    companyColor: "#000000",
    role: "Backend Engineer",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Kotlin", "Spring", "Redis", "Kafka", "AWS"],
    actualCTC: 32.0,
    difficulty: "Medium",
    tier: "High-Growth Unicorn",
    insights: [
      "✓ Cred offers high fixed base pay with attractive joining bonuses.",
      "✓ High consumer scale architecture experience required.",
      "✓ Strong algorithmic problem solving background."
    ]
  },
  {
    id: "cse-9",
    departmentId: "cse",
    company: "Microsoft",
    companyLogo: "🪟",
    companyColor: "#00A4EF",
    role: "Software Engineer II",
    experience: 3,
    location: "Hyderabad, India",
    employmentType: "Hybrid",
    skills: ["C#", ".NET Core", "Azure", "CosmosDB", "React"],
    actualCTC: 44.0,
    difficulty: "Medium",
    tier: "FAANG / Big Tech",
    insights: [
      "✓ Microsoft IDC Hyderabad offers high base salary plus Azure stock grants.",
      "✓ 3 YOE promotion to Level 61 / SE2.",
      "✓ Core cloud services contribution."
    ]
  },
  {
    id: "cse-10",
    departmentId: "cse",
    company: "Amazon",
    companyLogo: "📦",
    companyColor: "#FF9900",
    role: "Software Development Engineer I",
    experience: 0,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Java", "Data Structures", "AWS Lambda", "DynamoDB"],
    actualCTC: 29.5,
    difficulty: "Easy",
    tier: "FAANG / Big Tech",
    insights: [
      "✓ Standard SDE-1 fresher package including sign-on bonus year 1 & 2.",
      "✓ 5-15-40-40 vested stock schedule.",
      "✓ Direct campus hire via VIT placement drive."
    ]
  },
  {
    id: "cse-11",
    departmentId: "cse",
    company: "Swiggy",
    companyLogo: "🛵",
    companyColor: "#FC8019",
    role: "Software Engineer - II",
    experience: 3,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["Go", "Microservices", "Elasticsearch", "Redis"],
    actualCTC: 36.0,
    difficulty: "Medium",
    tier: "High-Growth Unicorn",
    insights: [
      "✓ Swiggy's high-scale hyper-local delivery logistics platform experience.",
      "✓ High base component with annual performance bonuses.",
      "✓ Experience handling peak order volume spikes."
    ]
  },
  {
    id: "cse-12",
    departmentId: "cse",
    company: "Flipkart",
    companyLogo: "🛍️",
    companyColor: "#2874F0",
    role: "UI Engineer - II",
    experience: 3,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["React", "Next.js", "TypeScript", "Web Vitals", "PWA"],
    actualCTC: 33.0,
    difficulty: "Medium",
    tier: "High-Growth Unicorn",
    insights: [
      "✓ Flipkart frontend engineers command top compensation for e-commerce scale.",
      "✓ Deep web performance optimization and rendering expertise.",
      "✓ ESOP equity package included."
    ]
  },
  {
    id: "cse-13",
    departmentId: "cse",
    company: "Cognizant",
    companyLogo: "🌐",
    companyColor: "#0033A0",
    role: "Programmer Analyst",
    experience: 0,
    location: "Chennai, India",
    employmentType: "Full Time",
    skills: ["Java", "SQL", "HTML/CSS"],
    actualCTC: 4.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Entry level mass IT service package for freshers.",
      "✓ On-job training and client project assignment.",
      "✓ Standard industry benchmark for mass recruiters."
    ]
  },
  {
    id: "cse-14",
    departmentId: "cse",
    company: "Freshworks",
    companyLogo: "🍃",
    companyColor: "#00C269",
    role: "Product Engineer",
    experience: 1,
    location: "Chennai, India",
    employmentType: "Hybrid",
    skills: ["Ruby on Rails", "Ember.js", "AWS", "MySQL"],
    actualCTC: 16.5,
    difficulty: "Easy",
    tier: "High-Growth Unicorn",
    insights: [
      "✓ SaaS company based in Chennai with international exposure.",
      "✓ Good blend of ESOPs and competitive base pay.",
      "✓ Fast-paced feature delivery lifecycle."
    ]
  },
  {
    id: "cse-15",
    departmentId: "cse",
    company: "Goldman Sachs",
    companyLogo: "🏛️",
    companyColor: "#7399C6",
    role: "Engineering Associate",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Java", "C++", "Financial Systems", "Kafka", "PostgreSQL"],
    actualCTC: 38.0,
    difficulty: "Hard",
    tier: "Global MNC",
    insights: [
      "✓ Investment bank offering premium quantitative and software engineering pay.",
      "✓ Significant year-end discretionary cash bonus.",
      "✓ Low-latency trading systems experience."
    ]
  },
  {
    id: "cse-16",
    departmentId: "cse",
    company: "TCS",
    companyLogo: "🏢",
    companyColor: "#111111",
    role: "Digital Innovator",
    experience: 0,
    location: "Pune, India",
    employmentType: "Full Time",
    skills: ["Python", "Cloud Basics", "Data Structures"],
    actualCTC: 7.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ TCS Digital competitive examination tier offer.",
      "✓ Double the compensation of standard Ninja profiles.",
      "✓ Faster track to technical lead roles."
    ]
  },

  // ==========================================
  // 2. CSE (AI & MACHINE LEARNING) - 16 PROFILES
  // ==========================================
  {
    id: "aiml-1",
    departmentId: "aiml",
    company: "NVIDIA",
    companyLogo: "🟢",
    companyColor: "#76B900",
    role: "Machine Learning Engineer",
    experience: 2,
    location: "Pune, India",
    employmentType: "Hybrid",
    skills: ["PyTorch", "CUDA", "TensorRT", "C++", "LLM Inference"],
    actualCTC: 38.0,
    difficulty: "Hard",
    tier: "FAANG / Big Tech",
    insights: [
      "✓ NVIDIA chip & AI software dominance drives massive stock grants and high base pay.",
      "✓ CUDA parallel programming skills command a 40%+ market premium.",
      "✓ LLM acceleration and optimization specialization."
    ]
  },
  {
    id: "aiml-2",
    departmentId: "aiml",
    company: "OpenAI / Partner",
    companyLogo: "🤖",
    companyColor: "#10A37F",
    role: "AI Research Scientist",
    experience: 4,
    location: "San Francisco, USA (Remote)",
    employmentType: "Remote",
    skills: ["PyTorch", "Transformers", "RLHF", "Distributed Training", "Python"],
    actualCTC: 105.0,
    difficulty: "Hard",
    tier: "High-Growth Unicorn",
    isGolden: true,
    insights: [
      "✓ Frontier AI research compensation with global US dollar remote equity.",
      "✓ Specialized experience in Transformer fine-tuning & RLHF.",
      "✓ Top-tier paper publications in NeurIPS / ICLR."
    ]
  },
  {
    id: "aiml-3",
    departmentId: "aiml",
    company: "Apple",
    companyLogo: "🍎",
    companyColor: "#A2AAAD",
    role: "Core ML Engineer",
    experience: 3,
    location: "Hyderabad, India",
    employmentType: "Hybrid",
    skills: ["CoreML", "Swift", "Python", "Computer Vision", "On-Device ML"],
    actualCTC: 46.0,
    difficulty: "Hard",
    tier: "FAANG / Big Tech",
    insights: [
      "✓ Apple Hyderabad R&D team provides top tier base salary and RSU stock.",
      "✓ On-device neural engine optimization expertise.",
      "✓ High bar for software craftsmanship and privacy-first AI."
    ]
  },
  {
    id: "aiml-4",
    departmentId: "aiml",
    company: "Samsung R&D",
    companyLogo: "📱",
    companyColor: "#1428A0",
    role: "Applied AI Researcher",
    experience: 1,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["TensorFlow", "Computer Vision", "OpenCV", "Python", "C++"],
    actualCTC: 22.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Samsung PRISM research program direct campus converter.",
      "✓ Specialized mobile camera AI algorithm development.",
      "✓ Competitive patent creation incentives."
    ]
  },
  {
    id: "aiml-5",
    departmentId: "aiml",
    company: "Fractal Analytics",
    companyLogo: "📊",
    companyColor: "#002B49",
    role: "AI Consultant",
    experience: 0,
    location: "Mumbai, India",
    employmentType: "Full Time",
    skills: ["Python", "Scikit-Learn", "NLP", "SQL", "Tableau"],
    actualCTC: 12.5,
    difficulty: "Easy",
    tier: "Leading Startup",
    insights: [
      "✓ Pure-play AI analytics firm offering strong fresher learning curve.",
      "✓ Exposure to enterprise client AI deployments.",
      "✓ Fast annual promotion cycle."
    ]
  },
  {
    id: "aiml-6",
    departmentId: "aiml",
    company: "Qualcomm",
    companyLogo: "📡",
    companyColor: "#3253DC",
    role: "AI Systems Engineer",
    experience: 3,
    location: "Hyderabad, India",
    employmentType: "Full Time",
    skills: ["Snapdragon Neural Processing", "C++", "PyTorch", "Quantization"],
    actualCTC: 31.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Mobile SOC AI accelerator compiler development.",
      "✓ Neural network model quantization & pruning.",
      "✓ Excellent benefits and hardware lab infrastructure."
    ]
  },
  {
    id: "aiml-7",
    departmentId: "aiml",
    company: "Tiger Analytics",
    companyLogo: "🐯",
    companyColor: "#E05A47",
    role: "Data Scientist - ML",
    experience: 0,
    location: "Chennai, India",
    employmentType: "Hybrid",
    skills: ["Python", "Pandas", "XGBoost", "Deep Learning"],
    actualCTC: 9.5,
    difficulty: "Easy",
    tier: "Leading Startup",
    insights: [
      "✓ Chennai AI analytics startup with strong campus recruitment presence.",
      "✓ Practical machine learning pipeline building.",
      "✓ Good starter CTC for ML specialization."
    ]
  },
  {
    id: "aiml-8",
    departmentId: "aiml",
    company: "Amazon Web Services",
    companyLogo: "☁️",
    companyColor: "#FF9900",
    role: "Applied Scientist I",
    experience: 1,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["SageMaker", "Python", "Deep Learning", "PyTorch", "AWS"],
    actualCTC: 36.0,
    difficulty: "Hard",
    tier: "FAANG / Big Tech",
    insights: [
      "✓ Applied Scientist track at AWS pays significantly higher than SDE-1.",
      "✓ Strong mathematical & statistical foundation tested in interviews.",
      "✓ Generative AI product deployment."
    ]
  },
  {
    id: "aiml-9",
    departmentId: "aiml",
    company: "Microsoft",
    companyLogo: "🪟",
    companyColor: "#00A4EF",
    role: "AI Engineer - Copilot Team",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["LangChain", "Vector DBs", "Azure OpenAI", "Python", "C#"],
    actualCTC: 39.0,
    difficulty: "Medium",
    tier: "FAANG / Big Tech",
    insights: [
      "✓ Core Copilot integration engineering team.",
      "✓ High demand for LLM orchestration and RAG system architecture.",
      "✓ Top equity grant allocation."
    ]
  },
  {
    id: "aiml-10",
    departmentId: "aiml",
    company: "Bosch",
    companyLogo: "⚙️",
    companyColor: "#EA1D25",
    role: "Autonomous Driving ML Engineer",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Computer Vision", "LiDAR Fusion", "C++", "ROS", "PyTorch"],
    actualCTC: 18.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Automotive AI safety critical software development.",
      "✓ Sensor fusion and perception stack building.",
      "✓ German MNC stability and research funding."
    ]
  },
  {
    id: "aiml-11",
    departmentId: "aiml",
    company: "Mu Sigma",
    companyLogo: "∑",
    companyColor: "#0088CC",
    role: "Decision Scientist",
    experience: 0,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["R", "Python", "SQL", "Statistics"],
    actualCTC: 5.0,
    difficulty: "Easy",
    tier: "Leading Startup",
    insights: [
      "✓ Traditional analytics entry level placement offer.",
      "✓ Includes 3-year service agreement structure.",
      "✓ Intensive data literacy bootcamp."
    ]
  },
  {
    id: "aiml-12",
    departmentId: "aiml",
    company: "InMobi",
    companyLogo: "📲",
    companyColor: "#EC1C24",
    role: "Machine Learning Scientist",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["AdTech AI", "Click-Through Prediction", "Spark", "Python"],
    actualCTC: 28.0,
    difficulty: "Medium",
    tier: "High-Growth Unicorn",
    insights: [
      "✓ Real-time ad bidding ML algorithms processing billions of requests.",
      "✓ High performance engineering requirements.",
      "✓ Competitive stock options."
    ]
  },
  {
    id: "aiml-13",
    departmentId: "aiml",
    company: "Adobe",
    companyLogo: "🔴",
    companyColor: "#FF0000",
    role: "Research Engineer - Firefly ML",
    experience: 1,
    location: "Noida, India",
    employmentType: "Hybrid",
    skills: ["Diffusion Models", "PyTorch", "C++", "Computer Graphics"],
    actualCTC: 33.5,
    difficulty: "Hard",
    tier: "FAANG / Big Tech",
    insights: [
      "✓ Generative AI media creation model team.",
      "✓ Adobe R&D Noida branch offers tier-1 MNC compensation.",
      "✓ High publication bonus rewards."
    ]
  },
  {
    id: "aiml-14",
    departmentId: "aiml",
    company: "Accenture",
    companyLogo: "🅰️",
    companyColor: "#A100FF",
    role: "AI & Automation Associate",
    experience: 0,
    location: "Hyderabad, India",
    employmentType: "Full Time",
    skills: ["Python", "Automation Anywhere", "NLP Basics"],
    actualCTC: 4.8,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Enterprise AI workflow implementation role.",
      "✓ Standard IT services consulting fresher tier.",
      "✓ Wide exposure across global enterprise clients."
    ]
  },
  {
    id: "aiml-15",
    departmentId: "aiml",
    company: "Ola Electric",
    companyLogo: "🛵",
    companyColor: "#000000",
    role: "Battery AI Diagnostics Engineer",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Time Series ML", "Python", "BMS Analytics", "IoT Data"],
    actualCTC: 20.0,
    difficulty: "Medium",
    tier: "High-Growth Unicorn",
    insights: [
      "✓ EV telemetry predictive maintenance ML algorithms.",
      "✓ Fast growing domestic EV manufacturing ecosystem.",
      "✓ High ownership environment."
    ]
  },
  {
    id: "aiml-16",
    departmentId: "aiml",
    company: "Intel",
    companyLogo: "💻",
    companyColor: "#0071C5",
    role: "OpenVINO AI Optimization Eng",
    experience: 3,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["C++", "OpenVINO", "Deep Learning Compiler", "X86 Assembly"],
    actualCTC: 27.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Intel neural network software optimization stack.",
      "✓ Hardware-software co-design skills.",
      "✓ Solid engineering benefits package."
    ]
  },

  // ==========================================
  // 3. CSE (DATA SCIENCE) - 16 PROFILES
  // ==========================================
  {
    id: "ds-1",
    departmentId: "ds",
    company: "Walmart Global Tech",
    companyLogo: "🛒",
    companyColor: "#0071DC",
    role: "Senior Data Scientist",
    experience: 4,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["Python", "Spark", "Supply Chain Forecasting", "SQL", "GCP"],
    actualCTC: 41.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Walmart Tech pays silicon valley grade salaries in Bangalore.",
      "✓ Multi-billion dollar supply chain optimization impact.",
      "✓ Massive petabyte-scale data infrastructure."
    ]
  },
  {
    id: "ds-2",
    departmentId: "ds",
    company: "JPMorgan Chase",
    companyLogo: "🏦",
    companyColor: "#1172BA",
    role: "Quantitative Analytics Associate",
    experience: 2,
    location: "Mumbai, India",
    employmentType: "Full Time",
    skills: ["Quantitative Finance", "Python", "Stochastic Calculus", "SQL"],
    actualCTC: 35.0,
    difficulty: "Hard",
    tier: "Global MNC",
    insights: [
      "✓ Wall Street investment banking analytics team.",
      "✓ High mathematical modeling rigor required.",
      "✓ Substantial year-end performance incentive."
    ]
  },
  {
    id: "ds-3",
    departmentId: "ds",
    company: "McKinsey & Company",
    companyLogo: "📈",
    companyColor: "#051C2C",
    role: "Data Science Specialist",
    experience: 3,
    location: "Gurgaon, India",
    employmentType: "Hybrid",
    skills: ["Python", "Predictive Modeling", "Executive Storytelling", "SQL"],
    actualCTC: 38.5,
    difficulty: "Hard",
    tier: "Global MNC",
    insights: [
      "✓ QuantumBlack data science arm of McKinsey.",
      "✓ Premium management consulting compensation structure.",
      "✓ International client travel perks."
    ]
  },
  {
    id: "ds-4",
    departmentId: "ds",
    company: "Paytm",
    companyLogo: "📱",
    companyColor: "#002E6D",
    role: "Data Engineer II",
    experience: 2,
    location: "Noida, India",
    employmentType: "Full Time",
    skills: ["PySpark", "Airflow", "Snowflake", "Kafka", "Hive"],
    actualCTC: 21.0,
    difficulty: "Medium",
    tier: "High-Growth Unicorn",
    insights: [
      "✓ High velocity fintech payment transaction log processing.",
      "✓ Real-time streaming pipeline architecture.",
      "✓ Competitive base salary package."
    ]
  },
  {
    id: "ds-5",
    departmentId: "ds",
    company: "LatentView Analytics",
    companyLogo: "📊",
    companyColor: "#1B365D",
    role: "Analyst - Data Science",
    experience: 0,
    location: "Chennai, India",
    employmentType: "Full Time",
    skills: ["SQL", "Python", "PowerBI", "Statistics"],
    actualCTC: 7.8,
    difficulty: "Easy",
    tier: "Leading Startup",
    insights: [
      "✓ Chennai-based pure data analytics company campus hire.",
      "✓ Solid foundation in business intelligence and reporting.",
      "✓ Steady annual increments."
    ]
  },
  {
    id: "ds-6",
    departmentId: "ds",
    company: "PayPal",
    companyLogo: "🅿️",
    companyColor: "#003087",
    role: "Risk Data Scientist",
    experience: 3,
    location: "Chennai, India",
    employmentType: "Hybrid",
    skills: ["Fraud Detection ML", "Python", "Hadoop", "SQL", "SAS"],
    actualCTC: 29.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ PayPal Chennai Technology Center fraud intelligence division.",
      "✓ High stakes real-time transaction risk scoring.",
      "✓ Stock options and comprehensive wellness benefits."
    ]
  },
  {
    id: "ds-7",
    departmentId: "ds",
    company: "TCS",
    companyLogo: "🏢",
    companyColor: "#111111",
    role: "Data Analyst",
    experience: 0,
    location: "Chennai, India",
    employmentType: "Full Time",
    skills: ["SQL", "Excel", "Python Basics"],
    actualCTC: 3.6,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Standard mass recruiter entry level salary benchmark.",
      "✓ Entry level reporting & data entry automation.",
      "✓ Initial stepping stone into IT sector."
    ]
  },
  {
    id: "ds-8",
    departmentId: "ds",
    company: "Target India",
    companyLogo: "🎯",
    companyColor: "#CC0000",
    role: "Lead Data Scientist",
    experience: 5,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["Python", "Demand Forecasting", "A/B Testing", "Spark"],
    actualCTC: 45.0,
    difficulty: "Hard",
    tier: "Global MNC",
    insights: [
      "✓ Target US retail global capability center in Bangalore.",
      "✓ Senior grade leadership role overseeing pricing optimization.",
      "✓ Excellent work-life balance culture."
    ]
  },
  {
    id: "ds-9",
    departmentId: "ds",
    company: "ZS Associates",
    companyLogo: "📊",
    companyColor: "#005587",
    role: "Decision Analytics Associate",
    experience: 0,
    location: "Pune, India",
    employmentType: "Full Time",
    skills: ["Python", "SQL", "Tableau", "Pharma Analytics"],
    actualCTC: 13.2,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Top healthcare analytics consulting firm campus offer.",
      "✓ Generous joining bonus and relocation assistance.",
      "✓ Structured career progression path."
    ]
  },
  {
    id: "ds-10",
    departmentId: "ds",
    company: "PhonePe",
    companyLogo: "🟣",
    companyColor: "#5F259F",
    role: "Senior Data Engineer",
    experience: 3,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Spark", "Scala", "Kafka", "ClickHouse", "Presto"],
    actualCTC: 37.0,
    difficulty: "Medium",
    tier: "High-Growth Unicorn",
    insights: [
      "✓ Processing over 40% of India's UPI payments digital data trail.",
      "✓ High throughput ClickHouse real-time analytics engine.",
      "✓ Competitive equity ESOP liquidity events."
    ]
  },
  {
    id: "ds-11",
    departmentId: "ds",
    company: "Fractal Analytics",
    companyLogo: "📊",
    companyColor: "#002B49",
    role: "Senior Data Scientist",
    experience: 3,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["Python", "NLP", "Time Series", "MLOps"],
    actualCTC: 24.0,
    difficulty: "Medium",
    tier: "Leading Startup",
    insights: [
      "✓ Client-facing data science consulting lead.",
      "✓ MLOps automated model deployment experience.",
      "✓ Consistent performance bonuses."
    ]
  },
  {
    id: "ds-12",
    departmentId: "ds",
    company: "American Express",
    companyLogo: "💳",
    companyColor: "#006FCF",
    role: "Credit Risk Analytics Manager",
    experience: 4,
    location: "Gurgaon, India",
    employmentType: "Hybrid",
    skills: ["Python", "Logistic Regression", "Risk Modeling", "SQL"],
    actualCTC: 33.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ AmEx Gurgaon Risk R&D hub package.",
      "✓ Credit default prediction accuracy models.",
      "✓ Top employee perks and financial bonuses."
    ]
  },
  {
    id: "ds-13",
    departmentId: "ds",
    company: "Wipro",
    companyLogo: "🟢",
    companyColor: "#000000",
    role: "Project Engineer - Data",
    experience: 0,
    location: "Hyderabad, India",
    employmentType: "Full Time",
    skills: ["Python", "SQL", "PowerBI"],
    actualCTC: 4.2,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Entry level IT service data role.",
      "✓ Client project shadow period.",
      "✓ Standard mass hiring salary structure."
    ]
  },
  {
    id: "ds-14",
    departmentId: "ds",
    company: "Tiger Analytics",
    companyLogo: "🐯",
    companyColor: "#E05A47",
    role: "Lead Data Engineer",
    experience: 4,
    location: "Chennai, India",
    employmentType: "Hybrid",
    skills: ["PySpark", "Databricks", "AWS Glue", "Python"],
    actualCTC: 28.0,
    difficulty: "Medium",
    tier: "Leading Startup",
    insights: [
      "✓ Modern cloud data lakehouse architecture expertise.",
      "✓ Leading 5-member data engineering pod.",
      "✓ High growth tech environment."
    ]
  },
  {
    id: "ds-15",
    departmentId: "ds",
    company: "Razorpay",
    companyLogo: "🟦",
    companyColor: "#0C2340",
    role: "Data Scientist - Merchant Risk",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Graph Neural Networks", "Python", "Fraud Analytics", "SQL"],
    actualCTC: 27.5,
    difficulty: "Medium",
    tier: "High-Growth Unicorn",
    insights: [
      "✓ Graph neural network anomaly detection on payment networks.",
      "✓ High valuation unicorn equity options.",
      "✓ Energetic startup engineering culture."
    ]
  },
  {
    id: "ds-16",
    departmentId: "ds",
    company: "Deloitte",
    companyLogo: "🟢",
    companyColor: "#86BC25",
    role: "Consultant - Data & AI",
    experience: 2,
    location: "Hyderabad, India",
    employmentType: "Hybrid",
    skills: ["GCP Dataflow", "BigQuery", "Python", "SQL"],
    actualCTC: 15.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Deloitte US-India office consulting role.",
      "✓ Enterprise cloud migration projects.",
      "✓ Standard big 4 accounting & consulting CTC band."
    ]
  },

  // ==========================================
  // 4. CSE (CYBER SECURITY) - 16 PROFILES
  // ==========================================
  {
    id: "cyber-1",
    departmentId: "cyber",
    company: "CrowdStrike",
    companyLogo: "🦅",
    companyColor: "#FF0000",
    role: "Cloud Security Architect",
    experience: 4,
    location: "Pune, India",
    employmentType: "Remote",
    skills: ["Go", "Kubernetes Security", "eBPF", "AWS IAM", "Threat Hunting"],
    actualCTC: 46.0,
    difficulty: "Hard",
    tier: "High-Growth Unicorn",
    insights: [
      "✓ CrowdStrike cybersecurity leader pays tier-1 global remote salaries.",
      "✓ Low-level eBPF kernel event monitoring expertise.",
      "✓ High RSU equity grant valuation."
    ]
  },
  {
    id: "cyber-2",
    departmentId: "cyber",
    company: "Palo Alto Networks",
    companyLogo: "🛡️",
    companyColor: "#FA4616",
    role: "Security Research Engineer",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["Vulnerability Analysis", "Reverse Engineering", "C++", "Assembly"],
    actualCTC: 35.0,
    difficulty: "Hard",
    tier: "Global MNC",
    insights: [
      "✓ World's largest cybersecurity firm R&D lab in Bangalore.",
      "✓ Zero-day exploit research and malware analysis capability.",
      "✓ Generous joining bonus and stock options."
    ]
  },
  {
    id: "cyber-3",
    departmentId: "cyber",
    company: "FireEye / Trellix",
    companyLogo: "🔥",
    companyColor: "#D32F2F",
    role: "Penetration Testing Specialist",
    experience: 1,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["OSCP Certified", "Metasploit", "BurpSuite", "Python"],
    actualCTC: 18.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Offensive OSCP industry certification boosted starting salary.",
      "✓ Red team penetration testing for fortune 500 targets.",
      "✓ High demand skill set."
    ]
  },
  {
    id: "cyber-4",
    departmentId: "cyber",
    company: "Cisco Systems",
    companyLogo: "🔌",
    companyColor: "#1BA0D7",
    role: "InfoSec Engineer II",
    experience: 3,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["Network Security", "Firewalls", "Python", "SIEM", "Splunk"],
    actualCTC: 27.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Cisco Bangalore R&D center cybersecurity division.",
      "✓ Enterprise network infrastructure defense.",
      "✓ Great employee benefits and ESOP program."
    ]
  },
  {
    id: "cyber-5",
    departmentId: "cyber",
    company: "KPMG",
    companyLogo: "🟦",
    companyColor: "#00338D",
    role: "Cyber Risk Consultant",
    experience: 0,
    location: "Gurgaon, India",
    employmentType: "Full Time",
    skills: ["ISO 27001", "Compliance", "Vulnerability Scanning", "SQL"],
    actualCTC: 9.2,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Big 4 accounting firm cyber advisory campus hire.",
      "✓ Governance, risk and compliance audit focus.",
      "✓ Solid brand value for early career."
    ]
  },
  {
    id: "cyber-6",
    departmentId: "cyber",
    company: "Qualys",
    companyLogo: "🛡️",
    companyColor: "#ED1C24",
    role: "Security Software Engineer",
    experience: 2,
    location: "Pune, India",
    employmentType: "Hybrid",
    skills: ["Java", "C++", "Vulnerability Management Engine", "Linux"],
    actualCTC: 20.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Cloud security platform vulnerability scanner development.",
      "✓ High performance backend C++ backend systems.",
      "✓ Annual performance stock grants."
    ]
  },
  {
    id: "cyber-7",
    departmentId: "cyber",
    company: "Wipro",
    companyLogo: "🟢",
    companyColor: "#000000",
    role: "Cyber Security Analyst",
    experience: 0,
    location: "Chennai, India",
    employmentType: "Full Time",
    skills: ["SOC Monitoring", "Splunk", "Log Analysis"],
    actualCTC: 4.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ 24/7 Security Operations Center shift role.",
      "✓ Standard IT services fresher salary band.",
      "✓ Practical incident response exposure."
    ]
  },
  {
    id: "cyber-8",
    departmentId: "cyber",
    company: "Cloudflare",
    companyLogo: "☁️",
    companyColor: "#F38020",
    role: "Systems Security Engineer",
    experience: 3,
    location: "Remote (India)",
    employmentType: "Remote",
    skills: ["Rust", "DDoS Mitigation", "BGP", "Linux Networking"],
    actualCTC: 48.0,
    difficulty: "Hard",
    tier: "High-Growth Unicorn",
    isGolden: true,
    insights: [
      "✓ Cloudflare global edge infrastructure security team.",
      "✓ Rust systems programming expertise commands top tier pay.",
      "✓ High value US dollar equity grants."
    ]
  },
  {
    id: "cyber-9",
    departmentId: "cyber",
    company: "EY (Ernst & Young)",
    companyLogo: "🟨",
    companyColor: "#FFE600",
    role: "Cyber Threat Analyst",
    experience: 1,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["SIEM", "Incident Response", "Python", "Forensics"],
    actualCTC: 11.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ EY Global Delivery Services cybersecurity unit.",
      "✓ Threat hunting and digital forensics practice.",
      "✓ Client facing consulting exposure."
    ]
  },
  {
    id: "cyber-10",
    departmentId: "cyber",
    company: "Zscaler",
    companyLogo: "☁️",
    companyColor: "#0072CE",
    role: "Zero Trust Security Engineer",
    experience: 2,
    location: "Chandigarh / Remote",
    employmentType: "Remote",
    skills: ["C", "Linux Kernel", "Zero Trust Architecture", "TCP/IP"],
    actualCTC: 30.0,
    difficulty: "Medium",
    tier: "High-Growth Unicorn",
    insights: [
      "✓ Zscaler zero trust network access pioneer.",
      "✓ Low-level socket programming and packet inspection.",
      "✓ Rapidly growing US stock options."
    ]
  },
  {
    id: "cyber-11",
    departmentId: "cyber",
    company: "Darktrace",
    companyLogo: "👁️",
    companyColor: "#111111",
    role: "AI Security Specialist",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["Unsupervised ML", "Network Anomaly Detection", "Python"],
    actualCTC: 24.0,
    difficulty: "Medium",
    tier: "Leading Startup",
    insights: [
      "✓ Autonomous response cyber AI technology.",
      "✓ Fusion of machine learning with network packet inspection.",
      "✓ Fast-paced technical role."
    ]
  },
  {
    id: "cyber-12",
    departmentId: "cyber",
    company: "IBM",
    companyLogo: "🔵",
    companyColor: "#052FAD",
    role: "QRadar Security Engineer",
    experience: 1,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Python", "SIEM Architecture", "Linux", "Regex"],
    actualCTC: 12.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ IBM Security division campus offer.",
      "✓ Enterprise Security Information & Event Management platform development.",
      "✓ Good foundational enterprise training."
    ]
  },
  {
    id: "cyber-13",
    departmentId: "cyber",
    company: "Infosys",
    companyLogo: "ℹ️",
    companyColor: "#007CC3",
    role: "Cyber Security Specialist",
    experience: 0,
    location: "Pune, India",
    employmentType: "Full Time",
    skills: ["Ethical Hacking", "Python", "Web Security"],
    actualCTC: 6.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Specialist Programmer cyber track offer.",
      "✓ Higher CTC than standard systems engineer.",
      "✓ Direct assignment to client security teams."
    ]
  },
  {
    id: "cyber-14",
    departmentId: "cyber",
    company: "Synopsys",
    companyLogo: "⚡",
    companyColor: "#5B2C6F",
    role: "Application Security Consultant",
    experience: 3,
    location: "Noida, India",
    employmentType: "Hybrid",
    skills: ["SAST/DAST", "Code Audit", "Java", "DevSecOps"],
    actualCTC: 26.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Static & Dynamic security analysis software tools division.",
      "✓ DevSecOps CI/CD pipeline integration expertise.",
      "✓ Strong stock purchase plan perks."
    ]
  },
  {
    id: "cyber-15",
    departmentId: "cyber",
    company: "TCS",
    companyLogo: "🏢",
    companyColor: "#111111",
    role: "Assistant System Engineer - Security",
    experience: 0,
    location: "Chennai, India",
    employmentType: "Full Time",
    skills: ["Identity Access Management", "Active Directory"],
    actualCTC: 3.8,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Enterprise IAM policy administration.",
      "✓ Entry level service company package.",
      "✓ Broad client infrastructure exposure."
    ]
  },
  {
    id: "cyber-16",
    departmentId: "cyber",
    company: "Check Point Software",
    companyLogo: "🏁",
    companyColor: "#EC008C",
    role: "Malware Research Engineer",
    experience: 3,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Reverse Engineering", "IDA Pro", "Ghidra", "C++", "Assembly"],
    actualCTC: 32.0,
    difficulty: "Hard",
    tier: "Global MNC",
    insights: [
      "✓ Israeli cybersecurity giant's R&D hub in India.",
      "✓ Deep binary disassembly and ransomware dissecting skills.",
      "✓ High salary benchmark for reverse engineers."
    ]
  },

  // ==========================================
  // 5. CSE (AI & ROBOTICS) - 16 PROFILES
  // ==========================================
  {
    id: "airobotics-1",
    departmentId: "airobotics",
    company: "Tesla",
    companyLogo: "🚗",
    companyColor: "#CC0000",
    role: "Autopilot Perception Engineer",
    experience: 3,
    location: "Austin, USA (Relocation)",
    employmentType: "International Relocation",
    skills: ["C++17", "ROS2", "Computer Vision", "TensorRT", "Sensor Fusion"],
    actualCTC: 98.0,
    difficulty: "Hard",
    tier: "FAANG / Big Tech",
    isGolden: true,
    insights: [
      "✓ Tesla Optimus & Autopilot AI vision team recruitment.",
      "✓ Real-time C++ robotics kinodynamics expertise.",
      "✓ Substantial Tesla equity grant allocation."
    ]
  },
  {
    id: "airobotics-2",
    departmentId: "airobotics",
    company: "GreyOrange",
    companyLogo: "🍊",
    companyColor: "#FF6600",
    role: "Robotics Motion Planning Eng",
    experience: 2,
    location: "Gurgaon, India",
    employmentType: "Full Time",
    skills: ["ROS", "C++", "SLIM/SLAM", "Trajectory Optimization", "Python"],
    actualCTC: 26.0,
    difficulty: "Medium",
    tier: "High-Growth Unicorn",
    insights: [
      "✓ Autonomous warehouse robotics fleet software developer.",
      "✓ SLAM mapping and multi-robot navigation routing algorithms.",
      "✓ High domestic robotics compensation standard."
    ]
  },
  {
    id: "airobotics-3",
    departmentId: "airobotics",
    company: "Boston Dynamics / Hyundai R&D",
    companyLogo: "🐕",
    companyColor: "#002C5F",
    role: "Control Systems Engineer",
    experience: 4,
    location: "Hyderabad, India",
    employmentType: "Hybrid",
    skills: ["Matlab/Simulink", "C++", "Quadruped Kinematics", "MPC"],
    actualCTC: 38.0,
    difficulty: "Hard",
    tier: "Global MNC",
    insights: [
      "✓ Advanced legged robotics locomotion research.",
      "✓ Model Predictive Control (MPC) algorithm tuning.",
      "✓ High precision hardware-in-the-loop testing experience."
    ]
  },
  {
    id: "airobotics-4",
    departmentId: "airobotics",
    company: "Addverb Technologies",
    companyLogo: "🤖",
    companyColor: "#00529B",
    role: "Autonomous Mobile Robot (AMR) Eng",
    experience: 1,
    location: "Noida, India",
    employmentType: "Full Time",
    skills: ["ROS2", "LiDAR SLAM", "Python", "Embedded C++"],
    actualCTC: 14.5,
    difficulty: "Easy",
    tier: "Leading Startup",
    insights: [
      "✓ Reliance-backed industrial warehouse robotics maker.",
      "✓ Rapidly growing factory automation demand in India.",
      "✓ Strong hardware-software integration exposure."
    ]
  },
  {
    id: "airobotics-5",
    departmentId: "airobotics",
    company: "Qualcomm",
    companyLogo: "📡",
    companyColor: "#3253DC",
    role: "Drone Autonomy Engineer",
    experience: 2,
    location: "Hyderabad, India",
    employmentType: "Hybrid",
    skills: ["Flight Controllers", "PX4", "C++", "Computer Vision"],
    actualCTC: 28.5,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Qualcomm Robotics RB5 platform development.",
      "✓ Edge AI vision processing on autonomous drones.",
      "✓ Strong stock bonus components."
    ]
  },
  {
    id: "airobotics-6",
    departmentId: "airobotics",
    company: "ABB Robotics",
    companyLogo: "⚙️",
    companyColor: "#FF0000",
    role: "Industrial Arm Automation Eng",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["ABB RAPID", "PLC", "RobotStudio", "Python"],
    actualCTC: 16.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Swiss automation MNC's R&D hub in Bangalore.",
      "✓ 6-axis articulated robot cell programming.",
      "✓ Stable manufacturing automation sector compensation."
    ]
  },
  {
    id: "airobotics-7",
    departmentId: "airobotics",
    company: "Ather Energy",
    companyLogo: "⚡",
    companyColor: "#111111",
    role: "Vehicle Control Unit (VCU) Eng",
    experience: 1,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Embedded C", "CAN Bus", "AutoSAR", "Matlab"],
    actualCTC: 15.0,
    difficulty: "Easy",
    tier: "High-Growth Unicorn",
    insights: [
      "✓ Smart electric scooter control software lead.",
      "✓ Fast-paced product iterations and telemetry software.",
      "✓ Competitive stock options."
    ]
  },
  {
    id: "airobotics-8",
    departmentId: "airobotics",
    company: "Fanuc India",
    companyLogo: "🟡",
    companyColor: "#FFCC00",
    role: "Robotics System Integrator",
    experience: 0,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Roboguide", "C++", "PLC Programming"],
    actualCTC: 7.2,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ World leader in CNC machines and industrial robots.",
      "✓ Direct placement entry level field automation engineer.",
      "✓ Strong mechanical-electrical hardware training."
    ]
  },
  {
    id: "airobotics-9",
    departmentId: "airobotics",
    company: "KUKA Robotics",
    companyLogo: "🟠",
    companyColor: "#FF6600",
    role: "Mechatronics Systems Engineer",
    experience: 3,
    location: "Pune, India",
    employmentType: "Full Time",
    skills: ["KRL (KUKA Robot Language)", "EtherCAT", "Safety PLC", "C++"],
    actualCTC: 21.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ German industrial robotics pioneer.",
      "✓ Automotive assembly line automation deployments.",
      "✓ On-site factory floor commissioning bonuses."
    ]
  },
  {
    id: "airobotics-10",
    departmentId: "airobotics",
    company: "IdeaForge",
    companyLogo: "🛸",
    companyColor: "#003366",
    role: "UAV Software Engineer",
    experience: 1,
    location: "Mumbai, India",
    employmentType: "Full Time",
    skills: ["ArduPilot", "C++", "Embedded Linux", "GCS"],
    actualCTC: 13.5,
    difficulty: "Easy",
    tier: "Leading Startup",
    insights: [
      "✓ India's pioneer defense drone manufacturer.",
      "✓ Autonomous flight path navigation algorithm design.",
      "✓ Public listed startup share options."
    ]
  },
  {
    id: "airobotics-11",
    departmentId: "airobotics",
    company: "Intuitive Surgical",
    companyLogo: "🩺",
    companyColor: "#004B87",
    role: "Surgical Robotics Engineer",
    experience: 3,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["Haptics", "Sub-millimeter Kinematics", "C++", "Real-Time OS"],
    actualCTC: 44.0,
    difficulty: "Hard",
    tier: "Global MNC",
    insights: [
      "✓ Da Vinci surgical robot maker's India engineering center.",
      "✓ Extremely high precision safety critical motion software.",
      "✓ Top US MNC healthcare tech compensation package."
    ]
  },
  {
    id: "airobotics-12",
    departmentId: "airobotics",
    company: "L&T Technology Services",
    companyLogo: "🏗️",
    companyColor: "#005A9C",
    role: "Robotics Software Trainee",
    experience: 0,
    location: "Mysore, India",
    employmentType: "Full Time",
    skills: ["C++", "Python", "ROS Basics"],
    actualCTC: 5.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Mass R&D service provider entry offer.",
      "✓ Client robotics R&D outsourcing project.",
      "✓ Good foundational training program."
    ]
  },
  {
    id: "airobotics-13",
    departmentId: "airobotics",
    company: "Siemens",
    companyLogo: "⚡",
    companyColor: "#009999",
    role: "Digital Twin & Robotics Specialist",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["Siemens Tecnomatix", "C++", "Physics Engine", "Simulations"],
    actualCTC: 19.5,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Factory floor digital twin simulation software.",
      "✓ High fidelity kinematics modeling.",
      "✓ Stable European corporate perks."
    ]
  },
  {
    id: "airobotics-14",
    departmentId: "airobotics",
    company: "Caterpillar",
    companyLogo: "🚜",
    companyColor: "#FFCD00",
    role: "Autonomous Mining Machinery Eng",
    experience: 3,
    location: "Chennai, India",
    employmentType: "Full Time",
    skills: ["Heavy Machinery Autonomy", "ROS", "GPS/GNSS SLAM", "C++"],
    actualCTC: 23.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Caterpillar Chennai R&D center off-highway autonomous haul truck program.",
      "✓ High reliability rugged outdoor autonomy software.",
      "✓ Excellent retirement & work life benefits."
    ]
  },
  {
    id: "airobotics-15",
    departmentId: "airobotics",
    company: "Cognex Corporation",
    companyLogo: "👁️",
    companyColor: "#F37023",
    role: "Vision Guided Robotics Engineer",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Pattern Recognition", "C++", "Industrial Cameras", "3D Vision"],
    actualCTC: 22.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ 3D industrial camera machine vision systems lead.",
      "✓ Sub-millimeter inspection algorithm design.",
      "✓ Competitive equity share purchase plan."
    ]
  },
  {
    id: "airobotics-16",
    departmentId: "airobotics",
    company: "TCS Innovation Labs",
    companyLogo: "🏢",
    companyColor: "#111111",
    role: "Robotics Research Associate",
    experience: 0,
    location: "Kolkata, India",
    employmentType: "Full Time",
    skills: ["Python", "ROS", "OpenCV"],
    actualCTC: 7.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ TCS R&D lab dedicated research track.",
      "✓ Higher pay scale than TCS Ninja/Digital standard roles.",
      "✓ Focus on patent publishing and prototype building."
    ]
  },

  // ==========================================
  // 6. IT & SOFTWARE ENGINEERING - 16 PROFILES
  // ==========================================
  {
    id: "it-1",
    departmentId: "it",
    company: "Oracle Cloud",
    companyLogo: "🔴",
    companyColor: "#F80000",
    role: "Principal Infrastructure Engineer",
    experience: 5,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["Java", "OCI Cloud", "Terraform", "Distributed Storage", "Go"],
    actualCTC: 52.0,
    difficulty: "Hard",
    tier: "FAANG / Big Tech",
    insights: [
      "✓ Oracle Cloud Infrastructure (OCI) core team high base pay & RSUs.",
      "✓ Large scale multi-tenant cloud control plane development.",
      "✓ 5 YOE promo to Principal level."
    ]
  },
  {
    id: "it-2",
    departmentId: "it",
    company: "Salesforce",
    companyLogo: "☁️",
    companyColor: "#00A1E0",
    role: "MTS Software Engineer",
    experience: 2,
    location: "Hyderabad, India",
    employmentType: "Hybrid",
    skills: ["Apex", "Java", "React", "Kafka", "Microservices"],
    actualCTC: 36.5,
    difficulty: "Medium",
    tier: "FAANG / Big Tech",
    insights: [
      "✓ Salesforce Hyderabad R&D center tier 1 compensation package.",
      "✓ Generous wellness allowance, educational reimbursement & RSUs.",
      "✓ High throughput CRM platform engineering."
    ]
  },
  {
    id: "it-3",
    departmentId: "it",
    company: "PayPal",
    companyLogo: "🅿️",
    companyColor: "#003087",
    role: "Software Engineer - Payments",
    experience: 1,
    location: "Chennai, India",
    employmentType: "Hybrid",
    skills: ["Node.js", "Java", "GraphQL", "Docker", "MongoDB"],
    actualCTC: 26.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ PayPal Chennai Technology Center campus offer.",
      "✓ High security payment gateway transaction flow.",
      "✓ Great starter package for fresh software engineers."
    ]
  },
  {
    id: "it-4",
    departmentId: "it",
    company: "Red Hat / IBM",
    companyLogo: "🎩",
    companyColor: "#EE0000",
    role: "OpenShift DevOps Engineer",
    experience: 3,
    location: "Pune, India",
    employmentType: "Remote",
    skills: ["Kubernetes", "Go", "Ansible", "Linux Systems", "CI/CD"],
    actualCTC: 29.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Open-source Linux enterprise powerhouse compensation.",
      "✓ High demand for upstream Kubernetes & container orchestration skills.",
      "✓ 100% remote flexibility."
    ]
  },
  {
    id: "it-5",
    departmentId: "it",
    company: "Capgemini",
    companyLogo: "🔷",
    companyColor: "#0070AD",
    role: "Senior Consultant",
    experience: 4,
    location: "Mumbai, India",
    employmentType: "Full Time",
    skills: ["Java", "Spring Boot", "Angular", "Oracle DB"],
    actualCTC: 16.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ European IT consulting major senior role progression.",
      "✓ Banking enterprise software maintenance project.",
      "✓ Standard IT services consulting salary benchmark."
    ]
  },
  {
    id: "it-6",
    departmentId: "it",
    company: "Postman",
    companyLogo: "🚀",
    companyColor: "#FF6C37",
    role: "Backend Platform Engineer",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Remote",
    skills: ["Node.js", "Go", "AWS", "API Protocol Buffers", "Redis"],
    actualCTC: 35.0,
    difficulty: "Medium",
    tier: "High-Growth Unicorn",
    insights: [
      "✓ India's premier API development platform unicorn.",
      "✓ High equity stock options value growth.",
      "✓ Developer tooling focus."
    ]
  },
  {
    id: "it-7",
    departmentId: "it",
    company: "ServiceNow",
    companyLogo: "⚡",
    companyColor: "#293E40",
    role: "Software Quality Engineer",
    experience: 1,
    location: "Hyderabad, India",
    employmentType: "Hybrid",
    skills: ["Java", "Selenium", "Cypress", "JavaScript", "REST APIs"],
    actualCTC: 22.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Enterprise workflow platform automation test suite developer.",
      "✓ High starting salary for QA engineering track.",
      "✓ Great company rating on Glassdoor."
    ]
  },
  {
    id: "it-8",
    departmentId: "it",
    company: "Mindtree / LTIMindtree",
    companyLogo: "🌳",
    companyColor: "#008A00",
    role: "Software Engineer",
    experience: 0,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Java", "React", "SQL"],
    actualCTC: 5.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Campus placement entry offer for IT graduates.",
      "✓ Full stack development training program.",
      "✓ Annual performance review path."
    ]
  },
  {
    id: "it-9",
    departmentId: "it",
    company: "Twilio",
    companyLogo: "📲",
    companyColor: "#F22F46",
    role: "Cloud Communications Engineer",
    experience: 3,
    location: "Remote (India)",
    employmentType: "Remote",
    skills: ["Java", "SIP Protocols", "WebRTC", "Kafka", "AWS"],
    actualCTC: 42.0,
    difficulty: "Hard",
    tier: "High-Growth Unicorn",
    insights: [
      "✓ Global cloud communications leader.",
      "✓ WebRTC real-time audio/video streaming expertise.",
      "✓ High USD stock grant valuation."
    ]
  },
  {
    id: "it-10",
    departmentId: "it",
    company: "Mindtickle",
    companyLogo: "🎯",
    companyColor: "#FF4A00",
    role: "Frontend Engineer II",
    experience: 2,
    location: "Pune, India",
    employmentType: "Hybrid",
    skills: ["React", "TypeScript", "Redux Toolkit", "Webpack", "CSS Modules"],
    actualCTC: 28.0,
    difficulty: "Medium",
    tier: "High-Growth Unicorn",
    insights: [
      "✓ SaaS sales enablement platform unicorn in Pune.",
      "✓ Deep web client architecture & micro-frontends.",
      "✓ Attractive ESOP grants."
    ]
  },
  {
    id: "it-11",
    departmentId: "it",
    company: "HCL Technologies",
    companyLogo: "🏢",
    companyColor: "#0055A5",
    role: "Software Engineer",
    experience: 0,
    location: "Noida, India",
    employmentType: "Full Time",
    skills: ["C#", ".NET", "SQL Server"],
    actualCTC: 4.2,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Standard entry level hiring band for service provider.",
      "✓ Initial bench shadow phase before project mapping.",
      "✓ Broad client exposure."
    ]
  },
  {
    id: "it-12",
    departmentId: "it",
    company: "Zeta",
    companyLogo: "💳",
    companyColor: "#6C5CE7",
    role: "Banking Platform Engineer",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Java", "Microservices", "PostgreSQL", "Kafka", "Kubernetes"],
    actualCTC: 33.0,
    difficulty: "Medium",
    tier: "High-Growth Unicorn",
    insights: [
      "✓ Direct-to-bank cloud core processing platform unicorn.",
      "✓ High concurrency low latency transaction handling.",
      "✓ Top pay structure among Indian fintechs."
    ]
  },
  {
    id: "it-13",
    departmentId: "it",
    company: "Cisco Systems",
    companyLogo: "🔌",
    companyColor: "#1BA0D7",
    role: "Software Engineer I",
    experience: 0,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Python", "Networking Basics", "C++", "Linux"],
    actualCTC: 20.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Direct campus recruit offer for IT graduates at Cisco Bangalore.",
      "✓ Outstanding joining bonus and stock options.",
      "✓ Premium work environment."
    ]
  },
  {
    id: "it-14",
    departmentId: "it",
    company: "Nagarro",
    companyLogo: "🌐",
    companyColor: "#333333",
    role: "Associate Staff Engineer",
    experience: 1,
    location: "Gurgaon, India",
    employmentType: "Hybrid",
    skills: ["Java", "Spring", "Angular", "Azure"],
    actualCTC: 11.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Digital engineering services firm with non-hierarchical culture.",
      "✓ Solid learning path for modern web technologies.",
      "✓ Work from anywhere policy."
    ]
  },
  {
    id: "it-15",
    departmentId: "it",
    company: "Thoughtworks",
    companyLogo: "💡",
    companyColor: "#F37023",
    role: "Application Consultant",
    experience: 2,
    location: "Chennai, India",
    employmentType: "Hybrid",
    skills: ["XP Practices", "TDD", "Pair Programming", "Java", "React"],
    actualCTC: 18.5,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Global software consultancy famed for Extreme Programming (XP).",
      "✓ High code quality standards and agile methodology emphasis.",
      "✓ Thoughtworks Chennai office culture."
    ]
  },
  {
    id: "it-16",
    departmentId: "it",
    company: "NTT Data",
    companyLogo: "🌐",
    companyColor: "#006699",
    role: "Software Systems Associate",
    experience: 0,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Java", "MySQL", "JavaScript"],
    actualCTC: 4.8,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Japanese IT services conglomerate campus tier.",
      "✓ Reliable corporate benefits and training.",
      "✓ Client project rollout experience."
    ]
  },

  // ==========================================
  // 7. ELECTRONICS & COMMUNICATION (ECE) - 16 PROFILES
  // ==========================================
  {
    id: "ece-1",
    departmentId: "ece",
    company: "Qualcomm",
    companyLogo: "📡",
    companyColor: "#3253DC",
    role: "Modem Systems Engineer",
    experience: 3,
    location: "Hyderabad, India",
    employmentType: "Full Time",
    skills: ["5G NR Protocols", "C++", "Matlab", "DSP", "ARM Architecture"],
    actualCTC: 34.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Qualcomm 5G cellular modem R&D center in Hyderabad.",
      "✓ Deep wireless physical layer protocol development.",
      "✓ Industry leader semiconductor salary tier."
    ]
  },
  {
    id: "ece-2",
    departmentId: "ece",
    company: "Texas Instruments",
    companyLogo: "💎",
    companyColor: "#CC0000",
    role: "Analog Applications Engineer",
    experience: 1,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Analog Circuit Design", "Spice Simulation", "PCB Layout", "LabVIEW"],
    actualCTC: 25.5,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ TI Bangalore campus direct placement tier 1 offer.",
      "✓ Power management IC and precision signal chain expertise.",
      "✓ High retention rate and semiconductor stock grants."
    ]
  },
  {
    id: "ece-3",
    departmentId: "ece",
    company: "Apple",
    companyLogo: "🍎",
    companyColor: "#A2AAAD",
    role: "RF Systems Engineer",
    experience: 4,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["RF Circuit Design", "Ansys HFSS", "Antenna Tuning", "Board Design"],
    actualCTC: 58.0,
    difficulty: "Hard",
    tier: "FAANG / Big Tech",
    isGolden: true,
    insights: [
      "✓ Custom iPhone wireless chip antenna R&D team.",
      "✓ Rare high-frequency RF electromagnetic simulation skills.",
      "✓ Top equity RSU component in the semiconductor industry."
    ]
  },
  {
    id: "ece-4",
    departmentId: "ece",
    company: "MediaTek",
    companyLogo: "📱",
    companyColor: "#F58220",
    role: "Baseband Firmware Engineer",
    experience: 2,
    location: "Noida, India",
    employmentType: "Full Time",
    skills: ["C", "RTOS", "LTE/5G MAC Layer", "Debugging Lauterbach"],
    actualCTC: 21.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ MediaTek Dimensity smartphone chip modem firmware development.",
      "✓ Solid technical foundation in embedded C & wireless standards.",
      "✓ Steady annual bonus payouts."
    ]
  },
  {
    id: "ece-5",
    departmentId: "ece",
    company: "Ericsson",
    companyLogo: "📶",
    companyColor: "#002561",
    role: "Telecom Network Engineer",
    experience: 0,
    location: "Gurgaon, India",
    employmentType: "Full Time",
    skills: ["5G RAN", "Linux", "Python", "Networking Protocols"],
    actualCTC: 7.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Swedish telecommunications giant entry level placement.",
      "✓ Deployment of 5G telecom tower infrastructure.",
      "✓ Great international Mobility options."
    ]
  },
  {
    id: "ece-6",
    departmentId: "ece",
    company: "NXP Semiconductors",
    companyLogo: "🔌",
    companyColor: "#FF8200",
    role: "Automotive Radar Engineer",
    experience: 3,
    location: "Noida, India",
    employmentType: "Hybrid",
    skills: ["Radar Signal Processing", "Matlab", "Embedded C", "CAN/LIN"],
    actualCTC: 26.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Automotive 77GHz millimeter wave radar sensor chip set team.",
      "✓ ADAS safety feature development.",
      "✓ High stability European chipmaker."
    ]
  },
  {
    id: "ece-7",
    departmentId: "ece",
    company: "Broadcom",
    companyLogo: "📡",
    companyColor: "#CC0000",
    role: "Silicon Validation Engineer",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Python Automation", "Oscilloscopes", "PCIe Protocols", "C"],
    actualCTC: 30.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Broadcom high speed enterprise switch silicon validation lab.",
      "✓ PCIe Gen5 & 400G Ethernet hardware testing.",
      "✓ Broadcom stock growth grants."
    ]
  },
  {
    id: "ece-8",
    departmentId: "ece",
    company: "Reliance Jio",
    companyLogo: "📶",
    companyColor: "#0A2540",
    role: "5G Infrastructure Engineer",
    experience: 1,
    location: "Navi Mumbai, India",
    employmentType: "Full Time",
    skills: ["Open RAN", "Linux", "Python", "Fiber Networks"],
    actualCTC: 9.5,
    difficulty: "Easy",
    tier: "Leading Startup",
    insights: [
      "✓ Indigenous 5G stack rollout engineering team.",
      "✓ Hands on experience with nation-wide network deployment.",
      "✓ Good stepping stone for core telecom engineers."
    ]
  },
  {
    id: "ece-9",
    departmentId: "ece",
    company: "Keysight Technologies",
    companyLogo: "📊",
    companyColor: "#FF0000",
    role: "RF Test & Measurement Eng",
    experience: 2,
    location: "Gurgaon, India",
    employmentType: "Full Time",
    skills: ["Spectrum Analyzers", "Python Test Automation", "GPIB", "RF Specs"],
    actualCTC: 17.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ World's leading electronic measurement equipment maker.",
      "✓ Calibration and automated test system creation.",
      "✓ Stable work-life balance."
    ]
  },
  {
    id: "ece-10",
    departmentId: "ece",
    company: "Samsung Semiconductor",
    companyLogo: "📱",
    companyColor: "#1428A0",
    role: "Exynos System Architect",
    experience: 4,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["SOC Architecture", "C++", "SystemC", "ARM AMBA"],
    actualCTC: 42.0,
    difficulty: "Hard",
    tier: "Global MNC",
    insights: [
      "✓ Samsung Exynos mobile SOC architecture design group.",
      "✓ High-level SystemC performance modeling.",
      "✓ Top semiconductor pay band in Bangalore."
    ]
  },
  {
    id: "ece-11",
    departmentId: "ece",
    company: "Tata Elxsi",
    companyLogo: "🏎️",
    companyColor: "#005596",
    role: "Embedded Hardware Engineer",
    experience: 0,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["PCB Schematic Capture", "C", "Microcontrollers"],
    actualCTC: 5.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Automotive & broadcast R&D services company placement offer.",
      "✓ Hardware board bringing up experience.",
      "✓ Solid foundation for fresh ECE engineers."
    ]
  },
  {
    id: "ece-12",
    departmentId: "ece",
    company: "Analog Devices (ADI)",
    companyLogo: "🔌",
    companyColor: "#000000",
    role: "Signal Processing Engineer",
    experience: 3,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["DSP Algorithms", "C", "Matlab", "Verilog Basics"],
    actualCTC: 29.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Precision analog & digital signal processing hardware design.",
      "✓ High margin chip product lines.",
      "✓ Generous Employee Stock Purchase Plan (ESPP)."
    ]
  },
  {
    id: "ece-13",
    departmentId: "ece",
    company: "Bosch Automotive",
    companyLogo: "⚙️",
    companyColor: "#EA1D25",
    role: "Sensor Systems Specialist",
    experience: 1,
    location: "Coimbatore, India",
    employmentType: "Full Time",
    skills: ["MEMS Sensors", "CAN Protocol", "Embedded C", "Multimeter/Scope"],
    actualCTC: 11.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Automotive MEMS accelerometer and gyro sensor testing.",
      "✓ Bosch Coimbatore R&D hub location perk.",
      "✓ Long term job security."
    ]
  },
  {
    id: "ece-14",
    departmentId: "ece",
    company: "Tejas Networks",
    companyLogo: "🌐",
    companyColor: "#00529B",
    role: "Optical Network Hardware Eng",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["DWDM/OTN", "FPGA", "Board Design", "High Speed Signals"],
    actualCTC: 16.0,
    difficulty: "Easy",
    tier: "Leading Startup",
    insights: [
      "✓ Tata Group telecom equipment manufacturer.",
      "✓ Fiber optic backbone optical hardware design.",
      "✓ Rapid domestic infrastructure growth boost."
    ]
  },
  {
    id: "ece-15",
    departmentId: "ece",
    company: "Nokia R&D",
    companyLogo: "🇫🇮",
    companyColor: "#124191",
    role: "Cloud RAN Protocol Developer",
    experience: 2,
    location: "Chennai, India",
    employmentType: "Hybrid",
    skills: ["C++", "5G NR Stack", "Linux Systems", "Wireshark"],
    actualCTC: 18.5,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Nokia Chennai Global R&D center 5G team.",
      "✓ High performance protocol stack programming.",
      "✓ Good work life balance culture."
    ]
  },
  {
    id: "ece-16",
    departmentId: "ece",
    company: "Infosys",
    companyLogo: "ℹ️",
    companyColor: "#007CC3",
    role: "Systems Engineer - Hardware Services",
    experience: 0,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["C Programming", "Linux Basics"],
    actualCTC: 4.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Entry level IT service role for ECE graduates.",
      "✓ Hardware testing outsourcing team.",
      "✓ Standard mass hiring entry salary."
    ]
  },

  // ==========================================
  // 8. ECE (VLSI DESIGN) - 16 PROFILES
  // ==========================================
  {
    id: "vlsi-1",
    departmentId: "vlsi",
    company: "NVIDIA",
    companyLogo: "🟢",
    companyColor: "#76B900",
    role: "VLSI ASIC Design Engineer",
    experience: 3,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["Verilog", "SystemVerilog", "ASIC Synthesis", "Static Timing Analysis", "PCIe"],
    actualCTC: 48.0,
    difficulty: "Hard",
    tier: "FAANG / Big Tech",
    isGolden: true,
    insights: [
      "✓ GPU silicon tapeout engineering team pays massive stock grants & base.",
      "✓ Advanced 3nm/4nm process node STA and synthesis expertise.",
      "✓ Premium VLSI domain compensation."
    ]
  },
  {
    id: "vlsi-2",
    departmentId: "vlsi",
    company: "Intel",
    companyLogo: "💻",
    companyColor: "#0071C5",
    role: "Physical Design Engineer",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Synopsys ICC2", "Cadence Innovus", "Floorplanning", "CTS", "DRC/LVS"],
    actualCTC: 31.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Intel Xeon server CPU physical layout & closure.",
      "✓ High demand for Cadence Innovus / Synopsys EDA tool expertise.",
      "✓ Solid retirement & equity purchase options."
    ]
  },
  {
    id: "vlsi-3",
    departmentId: "vlsi",
    company: "Qualcomm",
    companyLogo: "📡",
    companyColor: "#3253DC",
    role: "Design Verification (DV) Engineer",
    experience: 1,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["UVM (Universal Verification Methodology)", "SystemVerilog", "Assertion-Based Verification"],
    actualCTC: 28.5,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Snapdragon SOC IP block verification.",
      "✓ UVM methodology proficiency commands immediate 25L+ starting offers.",
      "✓ High hiring volume in Bangalore."
    ]
  },
  {
    id: "vlsi-4",
    departmentId: "vlsi",
    company: "Synopsys",
    companyLogo: "⚡",
    companyColor: "#5B2C6F",
    role: "R&D Engineer - EDA Tools",
    experience: 2,
    location: "Noida, India",
    employmentType: "Hybrid",
    skills: ["C++", "Data Structures", "EDA Algorithms", "VLSI CAD"],
    actualCTC: 27.0,
    difficulty: "Hard",
    tier: "Global MNC",
    insights: [
      "✓ Synopsys algorithm team developing static timing analysis software.",
      "✓ Fusion of computer science algorithms with chip physics.",
      "✓ Excellent technical learning graph."
    ]
  },
  {
    id: "vlsi-5",
    departmentId: "vlsi",
    company: "Cadence Design Systems",
    companyLogo: "📐",
    companyColor: "#EE2A24",
    role: "Application Engineer - VLSI",
    experience: 1,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Cadence Virtuoso", "Custom IC Layout", "DRC", "Analog Mixed Signal"],
    actualCTC: 22.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Support semiconductor client chip design houses.",
      "✓ Direct campus recruit placement tier.",
      "✓ High stock appreciation benefits."
    ]
  },
  {
    id: "vlsi-6",
    departmentId: "vlsi",
    company: "AMD",
    companyLogo: "🔴",
    companyColor: "#ED1C24",
    role: "DFTV (Design For Test) Engineer",
    experience: 3,
    location: "Hyderabad, India",
    employmentType: "Hybrid",
    skills: ["Scan Insertion", "ATPG", "JTAG", "SystemVerilog", "Tcl Scripting"],
    actualCTC: 35.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ AMD Ryzen & EPYC silicon testability engineering.",
      "✓ High fault coverage ATPG pattern generation.",
      "✓ Heavy AMD RSU stock component."
    ]
  },
  {
    id: "vlsi-7",
    departmentId: "vlsi",
    company: "Micron Technology",
    companyLogo: "💾",
    companyColor: "#00529B",
    role: "DRAM Memory Design Engineer",
    experience: 0,
    location: "Hyderabad, India",
    employmentType: "Full Time",
    skills: ["Verilog", "Memory Architecture", "Spice", "CMOS Design"],
    actualCTC: 18.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Micron Hyderabad memory R&D center fresher offer.",
      "✓ HBM3e high bandwidth memory circuit design.",
      "✓ Rapid career growth in memory expansion."
    ]
  },
  {
    id: "vlsi-8",
    departmentId: "vlsi",
    company: "Wipro VLSI",
    companyLogo: "🟢",
    companyColor: "#000000",
    role: "VLSI Verification Trainee",
    experience: 0,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Verilog", "C++", "Digital Logic"],
    actualCTC: 6.8,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Wipro semiconductor services division training track.",
      "✓ Client EDA tool access and IP verification.",
      "✓ Solid entry point into semiconductor domain."
    ]
  },
  {
    id: "vlsi-9",
    departmentId: "vlsi",
    company: "Marvell Semiconductor",
    companyLogo: "📡",
    companyColor: "#003366",
    role: "RTL Design Engineer",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["SystemVerilog", "RTL Coding", "Ethernet PHY", "AXI Protocol"],
    actualCTC: 30.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Marvell data center connectivity chip design.",
      "✓ High speed bus interface RTL architecture.",
      "✓ Competitive equity share program."
    ]
  },
  {
    id: "vlsi-10",
    departmentId: "vlsi",
    company: "ARM",
    companyLogo: "💪",
    companyColor: "#0091BD",
    role: "CPU Core Verification Engineer",
    experience: 4,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["ARMv9 Architecture", "UVM", "Formal Verification", "SystemVerilog"],
    actualCTC: 44.0,
    difficulty: "Hard",
    tier: "FAANG / Big Tech",
    insights: [
      "✓ World-standard ARM Cortex CPU core formal verification.",
      "✓ Extremely prestigious VLSI resume credential.",
      "✓ Top-tier UK/US multinational pay benchmark."
    ]
  },
  {
    id: "vlsi-11",
    departmentId: "vlsi",
    company: "Microchip Technology",
    companyLogo: "🔬",
    companyColor: "#E31837",
    role: "FPGA Design Engineer",
    experience: 1,
    location: "Chennai, India",
    employmentType: "Full Time",
    skills: ["VHDL", "Verilog", "Microchip Libero", "Timing Closure"],
    actualCTC: 14.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Microchip Chennai design center campus hire.",
      "✓ Aerospace and defense grade rad-hard FPGA design.",
      "✓ Great local work stability."
    ]
  },
  {
    id: "vlsi-12",
    departmentId: "vlsi",
    company: "Tessolve Semiconductor",
    companyLogo: "🔬",
    companyColor: "#1B365D",
    role: "DFT / Physical Design Engineer",
    experience: 1,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Tcl Scripting", "Innovus", "Scan Compression", "STIL"],
    actualCTC: 10.5,
    difficulty: "Easy",
    tier: "Leading Startup",
    insights: [
      "✓ India's premier semiconductor test & design service house.",
      "✓ Hands on exposure to real silicon tapeouts.",
      "✓ Rapid learning environment."
    ]
  },
  {
    id: "vlsi-13",
    departmentId: "vlsi",
    company: "Sankalp Semiconductor",
    companyLogo: "⚡",
    companyColor: "#F37023",
    role: "Analog Layout Engineer",
    experience: 2,
    location: "Hubli / Bangalore",
    employmentType: "Full Time",
    skills: ["Cadence Virtuoso Layout", "FinFET DRC", "Matching", "Parasitic Extraction"],
    actualCTC: 13.0,
    difficulty: "Easy",
    tier: "Leading Startup",
    insights: [
      "✓ HCL group analog layout service division.",
      "✓ FinFET physical design matching & DRC rules.",
      "✓ Good practical foundation."
    ]
  },
  {
    id: "vlsi-14",
    departmentId: "vlsi",
    company: "Cirrus Logic",
    companyLogo: "🔊",
    companyColor: "#000000",
    role: "Mixed Signal IC Engineer",
    experience: 3,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["Audio CODEC IC", "Cadence Spectre", "Verilog-AMS", "ADC/DAC"],
    actualCTC: 33.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Precision high fidelity audio DAC/ADC chip design for smartphones.",
      "✓ Specialized low power analog circuit engineering.",
      "✓ Excellent pay & equity grants."
    ]
  },
  {
    id: "vlsi-15",
    departmentId: "vlsi",
    company: "STMicroelectronics",
    companyLogo: "⚡",
    companyColor: "#00205B",
    role: "Silicon IP Verification Engineer",
    experience: 2,
    location: "Greater Noida, India",
    employmentType: "Full Time",
    skills: ["SystemVerilog", "Microcontroller IP", "UVM Basics", "Perl"],
    actualCTC: 17.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ European semiconductor leader ST Noida campus.",
      "✓ STM32 microcontroller IP block verification.",
      "✓ European work culture and perks."
    ]
  },
  {
    id: "vlsi-16",
    departmentId: "vlsi",
    company: "L&T Technology Services",
    companyLogo: "🏗️",
    companyColor: "#005A9C",
    role: "VLSI Design Trainee",
    experience: 0,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Digital Logic", "Verilog Basics", "Tcl"],
    actualCTC: 5.2,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Entry level semiconductor services hiring path.",
      "✓ Client project shadow period.",
      "✓ Foundation training in RTL & verification."
    ]
  },

  // ==========================================
  // 9. ECE (EMBEDDED SYSTEMS) - 16 PROFILES
  // ==========================================
  {
    id: "embedded-1",
    departmentId: "embedded",
    company: "Bosch Global Software",
    companyLogo: "⚙️",
    companyColor: "#EA1D25",
    role: "Senior Embedded Linux Architect",
    experience: 4,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["Yocto Project", "Linux Kernel Drivers", "C", "C++17", "CAN AutoSAR"],
    actualCTC: 32.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Bosch Automotive Steering & Cockpit software division.",
      "✓ Yocto custom Linux BSP distribution building.",
      "✓ Top automotive tier 1 vendor pay."
    ]
  },
  {
    id: "embedded-2",
    departmentId: "embedded",
    company: "Qualcomm",
    companyLogo: "📡",
    companyColor: "#3253DC",
    role: "Embedded Firmware Engineer",
    experience: 2,
    location: "Hyderabad, India",
    employmentType: "Full Time",
    skills: ["ARM Cortex-M", "Embedded C", "SPI/I2C/UART", "FreeRTOS", "Debugger Lauterbach"],
    actualCTC: 29.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Qualcomm IoT low power connectivity microcontroller firmware.",
      "✓ Bare metal C & FreeRTOS scheduling mastery.",
      "✓ Substantial annual stock refresher."
    ]
  },
  {
    id: "embedded-3",
    departmentId: "embedded",
    company: "Continental Automotive",
    companyLogo: "🏎️",
    companyColor: "#FFA500",
    role: "AutoSAR Software Engineer",
    experience: 3,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["AutoSAR Classic", "Vector DaVinci", "CANoe", "Embedded C"],
    actualCTC: 22.5,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ German automotive tier 1 leader Continental.",
      "✓ High demand for Vector DaVinci AutoSAR tool experience.",
      "✓ Excellent international job rotation options."
    ]
  },
  {
    id: "embedded-4",
    departmentId: "embedded",
    company: "Tesla",
    companyLogo: "🚗",
    companyColor: "#CC0000",
    role: "Firmware Integration Engineer",
    experience: 3,
    location: "Palo Alto, USA (Relocation)",
    employmentType: "International Relocation",
    skills: ["C", "C++", "RTOS", "CAN Bus", "Hardware Debugging"],
    actualCTC: 94.0,
    difficulty: "Hard",
    tier: "FAANG / Big Tech",
    isGolden: true,
    insights: [
      "✓ Tesla US vehicle firmware integration team.",
      "✓ High pressure rapid deployment bug fixing.",
      "✓ Generous US Tesla stock grants."
    ]
  },
  {
    id: "embedded-5",
    departmentId: "embedded",
    company: "Microchip Technology",
    companyLogo: "🔬",
    companyColor: "#E31837",
    role: "Embedded Software Developer",
    experience: 0,
    location: "Chennai, India",
    employmentType: "Full Time",
    skills: ["C", "PIC Microcontrollers", "MPLAB X", "Peripherals"],
    actualCTC: 14.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Direct campus hire at Microchip Chennai.",
      "✓ Microcontroller peripheral driver stack creation.",
      "✓ Outstanding work culture rating."
    ]
  },
  {
    id: "embedded-6",
    departmentId: "embedded",
    company: "KPIT Technologies",
    companyLogo: "🚗",
    companyColor: "#00529B",
    role: "Automotive Software Trainee",
    experience: 0,
    location: "Pune, India",
    employmentType: "Full Time",
    skills: ["Embedded C", "MATLAB Simulink", "CAN Basics"],
    actualCTC: 6.2,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Pure-play automotive software services firm.",
      "✓ Intensive 3-month embedded software academy training.",
      "✓ Steady career progression."
    ]
  },
  {
    id: "embedded-7",
    departmentId: "embedded",
    company: "Honeywell",
    companyLogo: "✈️",
    companyColor: "#EE3124",
    role: "Avionics Software Engineer",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["DO-178C Standard", "C", "Ada", "Real-Time Systems"],
    actualCTC: 18.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Aerospace safety critical flight control system software.",
      "✓ Strict DO-178C compliance testing procedures.",
      "✓ High job security."
    ]
  },
  {
    id: "embedded-8",
    departmentId: "embedded",
    company: "Ather Energy",
    companyLogo: "⚡",
    companyColor: "#111111",
    role: "BMS Firmware Specialist",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Embedded C", "Battery Management System", "State of Charge Algorithm", "CAN"],
    actualCTC: 21.0,
    difficulty: "Medium",
    tier: "High-Growth Unicorn",
    insights: [
      "✓ Electric vehicle battery safety algorithm firmware.",
      "✓ Direct hardware bench testing and validation.",
      "✓ ESOP stock package."
    ]
  },
  {
    id: "embedded-9",
    departmentId: "embedded",
    company: "Garmin",
    companyLogo: "⌚",
    companyColor: "#007CC3",
    role: "Wearables Firmware Engineer",
    experience: 1,
    location: "Remote (India)",
    employmentType: "Remote",
    skills: ["Embedded C", "BLE (Bluetooth Low Energy)", "Sensor Hubs", "Power Optimization"],
    actualCTC: 24.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Smartwatch GPS and heart-rate sensor firmware.",
      "✓ Micro-amp level power saving algorithms.",
      "✓ US MNC remote hiring model."
    ]
  },
  {
    id: "embedded-10",
    departmentId: "embedded",
    company: "Schneider Electric",
    companyLogo: "🟢",
    companyColor: "#3DCD58",
    role: "Smart Grid Firmware Engineer",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Modbus/BACnet", "Embedded C++", "RTOS", "Energy Metering"],
    actualCTC: 16.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Industrial IoT energy meter device firmware.",
      "✓ French energy management leader R&D center.",
      "✓ Solid healthcare and retirement benefits."
    ]
  },
  {
    id: "embedded-11",
    departmentId: "embedded",
    company: "Tata Elxsi",
    companyLogo: "🏎️",
    companyColor: "#005596",
    role: "Embedded Systems Engineer",
    experience: 1,
    location: "Trivandrum, India",
    employmentType: "Full Time",
    skills: ["Embedded C", "Linux", "Device Drivers"],
    actualCTC: 8.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Tata Elxsi Trivandrum embedded center of excellence.",
      "✓ Medical device firmware client projects.",
      "✓ Pleasant campus environment."
    ]
  },
  {
    id: "embedded-12",
    departmentId: "embedded",
    company: "L&T Technology Services",
    companyLogo: "🏗️",
    companyColor: "#005A9C",
    role: "Embedded Engineer",
    experience: 0,
    location: "Mysore, India",
    employmentType: "Full Time",
    skills: ["C Programming", "Microcontrollers", "Protocols"],
    actualCTC: 4.8,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Off-shore embedded services for industrial clients.",
      "✓ Entry level fresher salary benchmark.",
      "✓ Good hands-on lab equipment exposure."
    ]
  },
  {
    id: "embedded-13",
    departmentId: "embedded",
    company: "Texas Instruments",
    companyLogo: "💎",
    companyColor: "#CC0000",
    role: "MCU System Software Engineer",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["MSP430 / C2000", "Embedded C", "Driver Development", "RTOS"],
    actualCTC: 27.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ TI C2000 digital power microcontroller SDK development.",
      "✓ High efficiency assembly & C compilation.",
      "✓ Top rank chipmaker compensation."
    ]
  },
  {
    id: "embedded-14",
    departmentId: "embedded",
    company: "NXP Semiconductors",
    companyLogo: "🔌",
    companyColor: "#FF8200",
    role: "i.MX BSP Software Engineer",
    experience: 3,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["Linux Board Support Package", "U-Boot", "Device Trees", "C"],
    actualCTC: 25.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ NXP i.MX application processor Linux kernel enablement.",
      "✓ Bootloader and U-Boot porting expertise.",
      "✓ European MNC stability."
    ]
  },
  {
    id: "embedded-15",
    departmentId: "embedded",
    company: "Whirlpool R&D",
    companyLogo: "🏠",
    companyColor: "#F48020",
    role: "Smart Appliance Embedded Developer",
    experience: 1,
    location: "Pondicherry, India",
    employmentType: "Full Time",
    skills: ["C", "STM32", "WiFi/BLE Firmware", "Touch Interfaces"],
    actualCTC: 10.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Smart home IoT appliance controller development.",
      "✓ Low cost high reliability embedded design.",
      "✓ Great local location benefits."
    ]
  },
  {
    id: "embedded-16",
    departmentId: "embedded",
    company: "Visteon",
    companyLogo: "🏎️",
    companyColor: "#E31B23",
    role: "Cockpit Domain Controller Engineer",
    experience: 2,
    location: "Chennai, India",
    employmentType: "Full Time",
    skills: ["QNX Hypervisor", "Embedded C++", "OpenGL ES", "CAN"],
    actualCTC: 15.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Automotive digital instrument cluster software.",
      "✓ QNX real-time operating system experience.",
      "✓ Visteon Chennai R&D facility offer."
    ]
  },

  // ==========================================
  // 10. ELECTRICAL & ELECTRONICS (EEE) - 16 PROFILES
  // ==========================================
  {
    id: "eee-1",
    departmentId: "eee",
    company: "Schneider Electric",
    companyLogo: "🟢",
    companyColor: "#3DCD58",
    role: "Power Systems Lead Engineer",
    experience: 4,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["ETAP", "Power Electronics", "Protection Relays", "High Voltage Switchgear"],
    actualCTC: 28.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Schneider Electric global grid digital transformation team.",
      "✓ Substation protection & SCADA automation expertise.",
      "✓ Premium energy sector compensation."
    ]
  },
  {
    id: "eee-2",
    departmentId: "eee",
    company: "Siemens Energy",
    companyLogo: "⚡",
    companyColor: "#009999",
    role: "HVDC Systems Engineer",
    experience: 3,
    location: "Gurgaon, India",
    employmentType: "Full Time",
    skills: ["PSCAD", "MATLAB Simulink", "High Voltage Direct Current", "Converter Design"],
    actualCTC: 24.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ German energy giant's HVDC transmission line design unit.",
      "✓ Large scale renewable grid integration.",
      "✓ Stable European corporate compensation."
    ]
  },
  {
    id: "eee-3",
    departmentId: "eee",
    company: "ABB Power Grids / Hitachi Energy",
    companyLogo: "⚡",
    companyColor: "#FF0000",
    role: "Smart Grid Automation Engineer",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["IEC 61850", "Substation Automation", "SCADA", "PLC"],
    actualCTC: 18.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Hitachi Energy digital substation integration lead.",
      "✓ Standard IEC 61850 protocol expertise.",
      "✓ Global travel opportunities for commissioning."
    ]
  },
  {
    id: "eee-4",
    departmentId: "eee",
    company: "L&T Electrical & Automation",
    companyLogo: "🏗️",
    companyColor: "#005A9C",
    role: "Graduate Engineer Trainee (GET)",
    experience: 0,
    location: "Mumbai, India",
    employmentType: "Full Time",
    skills: ["Power Distribution", "Switchgear", "CAD", "Electrical Safety"],
    actualCTC: 6.8,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ Premier core engineering GET recruitment program.",
      "✓ Structured 1-year rotation across manufacturing & R&D.",
      "✓ Highly prestigious core EEE campus offer."
    ]
  },
  {
    id: "eee-5",
    departmentId: "eee",
    company: "Texas Instruments",
    companyLogo: "💎",
    companyColor: "#CC0000",
    role: "Power Management IC (PMIC) Eng",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Buck-Boost Converters", "Spice Simulation", "PCB", "High Frequency Power"],
    actualCTC: 27.5,
    difficulty: "Hard",
    tier: "Global MNC",
    insights: [
      "✓ High efficiency SMPS & DC-DC power supply chip design.",
      "✓ Rare power electronics semiconductor R&D profile.",
      "✓ Top stock options."
    ]
  },
  {
    id: "eee-6",
    departmentId: "eee",
    company: "Tata Power",
    companyLogo: "⚡",
    companyColor: "#005596",
    role: "Renewable Energy Project Manager",
    experience: 2,
    location: "Mumbai, India",
    employmentType: "Full Time",
    skills: ["Solar PV System Design", "PVSyst", "Grid Connection", "BESS"],
    actualCTC: 12.5,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ Tata Power Solar utility scale solar farm setup.",
      "✓ Battery Energy Storage Systems (BESS) integration.",
      "✓ Strong Tata group brand & stability."
    ]
  },
  {
    id: "eee-7",
    departmentId: "eee",
    company: "Ather Energy",
    companyLogo: "⚡",
    companyColor: "#111111",
    role: "Motor Drive Hardware Engineer",
    experience: 1,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Inverter Design", "SiC/GaN MOSFETs", "PCB Layout", "Thermal Management"],
    actualCTC: 17.0,
    difficulty: "Medium",
    tier: "High-Growth Unicorn",
    insights: [
      "✓ EV high power inverter hardware design.",
      "✓ Next-gen Silicon Carbide (SiC) semiconductor switching.",
      "✓ Ather ESOP options."
    ]
  },
  {
    id: "eee-8",
    departmentId: "eee",
    company: "NTPC Limited",
    companyLogo: "🏭",
    companyColor: "#004B8D",
    role: "Executive Trainee - Electrical",
    experience: 0,
    location: "Singrauli, India",
    employmentType: "Full Time",
    skills: ["Power Plant Engineering", "Transformers", "Generators"],
    actualCTC: 16.0,
    difficulty: "Hard",
    tier: "Core Industrial",
    insights: [
      "✓ Maharatna PSU campus recruitment via GATE / campus test.",
      "✓ Exceptional medical, housing allowance, and job security.",
      "✓ Government pay scale structure."
    ]
  },
  {
    id: "eee-9",
    departmentId: "eee",
    company: "Alstom",
    companyLogo: "🚆",
    companyColor: "#002060",
    role: "Railway Traction Power Engineer",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Traction Inverters", "25kV AC Grid", "Catinary Systems", "Matlab"],
    actualCTC: 15.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ French multinational rail transport leader.",
      "✓ Metro & Vande Bharat electrical traction motor power.",
      "✓ Good international assignment avenues."
    ]
  },
  {
    id: "eee-10",
    departmentId: "eee",
    company: "Cummins India",
    companyLogo: "⚡",
    companyColor: "#CC0000",
    role: "Generator Control Systems Eng",
    experience: 1,
    location: "Pune, India",
    employmentType: "Full Time",
    skills: ["Diesel Alternators", "PLC", "Deep Sea Controllers", "CAN"],
    actualCTC: 10.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Global power generator equipment giant.",
      "✓ Paralleling switchgear and microgrid synchronization.",
      "✓ Stable manufacturing environment."
    ]
  },
  {
    id: "eee-11",
    departmentId: "eee",
    company: "Danfoss",
    companyLogo: "❄️",
    companyColor: "#E2001A",
    role: "Variable Frequency Drive (VFD) Eng",
    experience: 3,
    location: "Chennai, India",
    employmentType: "Full Time",
    skills: ["Field Oriented Control (FOC)", "DSP", "AC Motor Drives", "C"],
    actualCTC: 21.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Danish industrial VFD motor drive maker in Chennai Oragadam.",
      "✓ FOC motor control software algorithm development.",
      "✓ High technical retention."
    ]
  },
  {
    id: "eee-12",
    departmentId: "eee",
    company: "Reliance Power / New Energy",
    companyLogo: "☀️",
    companyColor: "#0A2540",
    role: "Green Hydrogen Electrical Lead",
    experience: 2,
    location: "Jamnagar, India",
    employmentType: "Full Time",
    skills: ["Electrolyzer Power Supply", "DC Rectifiers", "Grid Integration"],
    actualCTC: 14.0,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ Reliance Jamnagar Gigafactory green hydrogen project.",
      "✓ Megawatt scale DC rectifier electrical infrastructure.",
      "✓ High growth green energy domain."
    ]
  },
  {
    id: "eee-13",
    departmentId: "eee",
    company: "Havells India",
    companyLogo: "💡",
    companyColor: "#D32F2F",
    role: "R&D Engineer - Smart Switchgear",
    experience: 1,
    location: "Noida, India",
    employmentType: "Full Time",
    skills: ["MCB/MCCB Design", "Arc Interruption", "Testing", "SolidWorks"],
    actualCTC: 8.5,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ Domestic electrical consumer brand leader.",
      "✓ Low voltage circuit breaker product design.",
      "✓ Reliable domestic career path."
    ]
  },
  {
    id: "eee-14",
    departmentId: "eee",
    company: "Eaton Corporation",
    companyLogo: "⚡",
    companyColor: "#005596",
    role: "UPS Power Architecture Engineer",
    experience: 2,
    location: "Pune, India",
    employmentType: "Hybrid",
    skills: ["3-Phase UPS", "DSP Controller", "Power Quality Analysis"],
    actualCTC: 16.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Eaton Pune R&D center data center UPS design.",
      "✓ 3-phase high power factor correction circuits.",
      "✓ Good US MNC corporate benefits."
    ]
  },
  {
    id: "eee-15",
    departmentId: "eee",
    company: "Crompton Greaves",
    companyLogo: "🌀",
    companyColor: "#003366",
    role: "Electrical Machine Design Eng",
    experience: 0,
    location: "Bhopal, India",
    employmentType: "Full Time",
    skills: ["Ansys Maxwell", "BLDC Motor Design", "Electromagnetics"],
    actualCTC: 6.2,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ Energy efficient BLDC motor electromagnetic modeling.",
      "✓ Fresher core industry placement.",
      "✓ Practical factory test bench training."
    ]
  },
  {
    id: "eee-16",
    departmentId: "eee",
    company: "TCS",
    companyLogo: "🏢",
    companyColor: "#111111",
    role: "System Engineer - Plant Automation",
    experience: 0,
    location: "Chennai, India",
    employmentType: "Full Time",
    skills: ["PLC", "SCADA Basics", "C"],
    actualCTC: 3.6,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ TCS industrial automation service unit for EEE graduates.",
      "✓ Service sector entry level benchmark.",
      "✓ Client plant shadowing opportunity."
    ]
  },

  // ==========================================
  // 11. ELECTRONICS & COMPUTER (ECM) - 16 PROFILES
  // ==========================================
  {
    id: "ecm-1",
    departmentId: "ecm",
    company: "Intel",
    companyLogo: "💻",
    companyColor: "#0071C5",
    role: "Computer Architecture Engineer",
    experience: 3,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["C++", "SystemC", "x86/RISC-V", "Gem5 Simulator", "Cache Coherency"],
    actualCTC: 38.0,
    difficulty: "Hard",
    tier: "FAANG / Big Tech",
    insights: [
      "✓ Intel Core/Xeon microarchitecture performance simulator team.",
      "✓ Rare combination of low-level C++ & CPU hardware pipeline design.",
      "✓ Top semiconductor pay band."
    ]
  },
  {
    id: "ecm-2",
    departmentId: "ecm",
    company: "Samsung R&D",
    companyLogo: "📱",
    companyColor: "#1428A0",
    role: "SOC Driver & Middleware Lead",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Android HAL", "C++", "Linux Kernel", "Vulkan API", "GPU Drivers"],
    actualCTC: 28.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Mobile graphics & camera hardware abstraction layer (HAL).",
      "✓ Intersection of hardware registers & Android middleware.",
      "✓ High performance bonus payouts."
    ]
  },
  {
    id: "ecm-3",
    departmentId: "ecm",
    company: "Qualcomm",
    companyLogo: "📡",
    companyColor: "#3253DC",
    role: "System-on-Chip (SOC) Software Eng",
    experience: 1,
    location: "Hyderabad, India",
    employmentType: "Full Time",
    skills: ["C", "ARM Assembly", "Power Management Firmware", "JTAG"],
    actualCTC: 26.5,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Snapdragon SOC low-power sleep modes software driver.",
      "✓ ECM graduates favored for dual HW-SW interdisciplinary grasp.",
      "✓ Great stock grant incentives."
    ]
  },
  {
    id: "ecm-4",
    departmentId: "ecm",
    company: "AMD",
    companyLogo: "🔴",
    companyColor: "#ED1C24",
    role: "RISC-V Firmware Developer",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["RISC-V ISA", "C", "Assembly", "Verilog Basics", "Spike Simulator"],
    actualCTC: 29.0,
    difficulty: "Hard",
    tier: "Global MNC",
    insights: [
      "✓ Next gen open-source RISC-V co-processor firmware team.",
      "✓ Emerging hardware standard commands high compensation.",
      "✓ Substantial AMD stock grants."
    ]
  },
  {
    id: "ecm-5",
    departmentId: "ecm",
    company: "Western Digital",
    companyLogo: "💽",
    companyColor: "#000000",
    role: "SSD Controller Firmware Eng",
    experience: 1,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["NVMe Protocol", "PCIe", "Embedded C", "NAND Flash Management"],
    actualCTC: 20.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Enterprise data center NVMe SSD controller firmware.",
      "✓ High durability flash translation layer (FTL) algorithms.",
      "✓ Solid hardware-software hybrid profile."
    ]
  },
  {
    id: "ecm-6",
    departmentId: "ecm",
    company: "L&T Technology Services",
    companyLogo: "🏗️",
    companyColor: "#005A9C",
    role: "Embedded Software Trainee",
    experience: 0,
    location: "Mysore, India",
    employmentType: "Full Time",
    skills: ["C", "C++", "Linux Basics"],
    actualCTC: 4.8,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Service provider entry level offer.",
      "✓ Client hardware-software integration team.",
      "✓ Initial learning platform."
    ]
  },
  {
    id: "ecm-7",
    departmentId: "ecm",
    company: "Sony R&D",
    companyLogo: "🎮",
    companyColor: "#000000",
    role: "PlayStation Audio Systems Eng",
    experience: 3,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["C++", "DSP", "Spatial Audio", "Real-Time Processing", "ARM"],
    actualCTC: 35.0,
    difficulty: "Hard",
    tier: "Global MNC",
    isGolden: true,
    insights: [
      "✓ Sony PlayStation 3D audio DSP software engine.",
      "✓ High mathematical signal processing + C++ optimization.",
      "✓ Rare premium consumer electronics offer."
    ]
  },
  {
    id: "ecm-8",
    departmentId: "ecm",
    company: "Bosch",
    companyLogo: "⚙️",
    companyColor: "#EA1D25",
    role: "IoT Edge Computing Engineer",
    experience: 1,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["C++", "MQTT", "Embedded Linux", "Docker", "Python"],
    actualCTC: 14.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Industrial IoT edge gateway device software.",
      "✓ Containerized edge applications on ARM Linux.",
      "✓ Bosch employment stability."
    ]
  },
  {
    id: "ecm-9",
    departmentId: "ecm",
    company: "Honeywell",
    companyLogo: "✈️",
    companyColor: "#EE3124",
    role: "Embedded Software Engineer",
    experience: 2,
    location: "Hyderabad, India",
    employmentType: "Full Time",
    skills: ["C++", "RTOS", "UART/SPI", "Python Testing"],
    actualCTC: 16.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Honeywell building management system smart controllers.",
      "✓ Good foundational embedded C++ exposure.",
      "✓ Great health & life insurance perks."
    ]
  },
  {
    id: "ecm-10",
    departmentId: "ecm",
    company: "Texas Instruments",
    companyLogo: "💎",
    companyColor: "#CC0000",
    role: "Embedded Systems Applications Eng",
    experience: 0,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["C", "ARM Microcontrollers", "TI SimpleLink SDK", "BLE"],
    actualCTC: 24.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ TI Bangalore direct fresher placement tier.",
      "✓ Wireless microcontroller SDK development.",
      "✓ High stock bonus allocation."
    ]
  },
  {
    id: "ecm-11",
    departmentId: "ecm",
    company: "TCS",
    companyLogo: "🏢",
    companyColor: "#111111",
    role: "Digital Software Developer",
    experience: 0,
    location: "Kochi, India",
    employmentType: "Full Time",
    skills: ["Python", "C++", "SQL"],
    actualCTC: 7.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ TCS Digital competitive examination qualifier.",
      "✓ Higher pay grade than standard Ninja offers.",
      "✓ Assignment to high tech client R&D teams."
    ]
  },
  {
    id: "ecm-12",
    departmentId: "ecm",
    company: "Dell Technologies",
    companyLogo: "💻",
    companyColor: "#007DB8",
    role: "BIOS / UEFI Firmware Engineer",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["EDKII", "UEFI", "C", "x86 Architecture", "ACPI"],
    actualCTC: 22.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Dell Latitude/Alienware laptop motherboard BIOS development.",
      "✓ Low level x86 startup C code.",
      "✓ Competitive corporate perks."
    ]
  },
  {
    id: "ecm-13",
    departmentId: "ecm",
    company: "Tata Elxsi",
    companyLogo: "🏎️",
    companyColor: "#005596",
    role: "Infotainment Software Engineer",
    experience: 1,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Qt/QML", "C++", "Linux", "CAN Protocol"],
    actualCTC: 9.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Automotive touch screen dashboard GUI development.",
      "✓ C++ Qt framework expertise.",
      "✓ Good initial springboard for automotive tech."
    ]
  },
  {
    id: "ecm-14",
    departmentId: "ecm",
    company: "Seagate Technology",
    companyLogo: "💽",
    companyColor: "#6CBE45",
    role: "Drive Electronics Engineer",
    experience: 2,
    location: "Pune, India",
    employmentType: "Full Time",
    skills: ["Embedded C", "Servo Control", "DSP", "Hard Drive Firmware"],
    actualCTC: 17.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ High capacity enterprise hard drive servo motor control.",
      "✓ Specialized mechanical-electrical-software co-design.",
      "✓ Stable US MNC package."
    ]
  },
  {
    id: "ecm-15",
    departmentId: "ecm",
    company: "Wipro",
    companyLogo: "🟢",
    companyColor: "#000000",
    role: "Project Engineer - Embedded",
    experience: 0,
    location: "Chennai, India",
    employmentType: "Full Time",
    skills: ["C", "Data Structures", "Linux"],
    actualCTC: 4.2,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Entry level IT service offer for ECM graduates.",
      "✓ Client project shadow phase.",
      "✓ Mass recruiter salary benchmark."
    ]
  },
  {
    id: "ecm-16",
    departmentId: "ecm",
    company: "Keysight Technologies",
    companyLogo: "📊",
    companyColor: "#FF0000",
    role: "Embedded Software Developer",
    experience: 3,
    location: "Manesar, India",
    employmentType: "Full Time",
    skills: ["C++", "Linux Kernel", "PCIe Drivers", "GUI Development"],
    actualCTC: 25.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Oscilloscope & signal generator OS instrument kernel.",
      "✓ High-throughput instrumentation software.",
      "✓ Great employee work life balance."
    ]
  },

  // ==========================================
  // 12. MECHANICAL ENGINEERING - 16 PROFILES
  // ==========================================
  {
    id: "mech-1",
    departmentId: "mech",
    company: "Tesla",
    companyLogo: "🚗",
    companyColor: "#CC0000",
    role: "Manufacturing Design Engineer",
    experience: 5,
    location: "Austin, USA (Relocation)",
    employmentType: "International Relocation",
    skills: ["CATIA V6", "GD&T", "Gigacasting", "DFM/DFA", "Finite Element Analysis"],
    actualCTC: 92.0,
    difficulty: "Hard",
    tier: "FAANG / Big Tech",
    isGolden: true,
    insights: [
      "✓ Tesla Texas Gigafactory structural vehicle casting team.",
      "✓ High complexity aluminium alloy die-casting design.",
      "✓ Premium international US salary converted to INR equivalent."
    ]
  },
  {
    id: "mech-2",
    departmentId: "mech",
    company: "Boeing",
    companyLogo: "✈️",
    companyColor: "#0033A0",
    role: "Aerospace Structural Engineer",
    experience: 3,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Ansys Nastran/Patran", "Composites Design", "CATIA", "Fatigue Analysis"],
    actualCTC: 28.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Boeing India Engineering & Technology Center (BIETC) Bangalore.",
      "✓ Commercial airplane carbon composite wing structural stress calculations.",
      "✓ Outstanding global aerospace industry pay."
    ]
  },
  {
    id: "mech-3",
    departmentId: "mech",
    company: "Airbus",
    companyLogo: "🛫",
    companyColor: "#00205B",
    role: "Flight Physics Engineer",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["Computational Fluid Dynamics (CFD)", "OpenFOAM", "Python", "Aerodynamics"],
    actualCTC: 22.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Airbus India R&D wing aerodynamic CFD simulations.",
      "✓ High performance computing fluid dynamics modeling.",
      "✓ Top European aerospace corporate culture."
    ]
  },
  {
    id: "mech-4",
    departmentId: "mech",
    company: "Schlumberger (SLB)",
    companyLogo: "🛢️",
    companyColor: "#002D62",
    role: "Field Mechanical Engineer",
    experience: 1,
    location: "Mumbai / Offshore",
    employmentType: "Full Time",
    skills: ["Subsea Hydraulics", "Drilling Mechanical Equipment", "High Pressure Vessels"],
    actualCTC: 35.0,
    difficulty: "Hard",
    tier: "Global MNC",
    insights: [
      "✓ Offshore oilfield Services field engineer role.",
      "✓ Demanding physical & technical offshore rotation rig environment.",
      "✓ High hazard field allowance bonus."
    ]
  },
  {
    id: "mech-5",
    departmentId: "mech",
    company: "L&T Heavy Engineering",
    companyLogo: "🏗️",
    companyColor: "#005A9C",
    role: "Graduate Engineer Trainee (GET)",
    experience: 0,
    location: "Hazira, Gujarat",
    employmentType: "Full Time",
    skills: ["SolidWorks", "Pressure Vessel Code ASME Section VIII", "Welding Engineering"],
    actualCTC: 6.8,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ India's premier core heavy engineering GET program.",
      "✓ Manufacturing nuclear reactors & defense submarine hulls.",
      "✓ Highly respected industrial engineering entry benchmark."
    ]
  },
  {
    id: "mech-6",
    departmentId: "mech",
    company: "Tata Motors",
    companyLogo: "🚘",
    companyColor: "#005596",
    role: "Vehicle Body Structures Specialist",
    experience: 2,
    location: "Pune, India",
    employmentType: "Full Time",
    skills: ["LS-DYNA", "Crash Simulation", "NX CAD", "Sheet Metal Design"],
    actualCTC: 14.5,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ Tata Motors ERC Pune crash test simulation team.",
      "✓ 5-star BNCAP safety rating structural optimization.",
      "✓ Strong Tata group stability and benefits."
    ]
  },
  {
    id: "mech-7",
    departmentId: "mech",
    company: "Mahindra & Mahindra",
    companyLogo: "🚙",
    companyColor: "#E31837",
    role: "Powertrain Design Engineer",
    experience: 2,
    location: "Chennai, India",
    employmentType: "Full Time",
    skills: ["GT-Power", "Thermodynamics", "Engine Calibration", "Creo Parametric"],
    actualCTC: 12.8,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ Mahindra Research Valley (MRV) Chennai flagship center.",
      "✓ mStallion / mHawk engine mechanical design.",
      "✓ Excellent campus environment."
    ]
  },
  {
    id: "mech-8",
    departmentId: "mech",
    company: "Daimler Truck India",
    companyLogo: "🚛",
    companyColor: "#000000",
    role: "Chassis Systems Engineer",
    experience: 3,
    location: "Chennai, India",
    employmentType: "Hybrid",
    skills: ["Creo", "Structural Analysis", "Suspension Dynamics", "FMEA"],
    actualCTC: 18.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ BharatBenz commercial vehicle chassis engineering.",
      "✓ Heavy duty axle & suspension fatigue design.",
      "✓ German automotive MNC salary scale."
    ]
  },
  {
    id: "mech-9",
    departmentId: "mech",
    company: "Maruti Suzuki",
    companyLogo: "🚗",
    companyColor: "#003399",
    role: "Assistant Manager - R&D",
    experience: 0,
    location: "Gurgaon, India",
    employmentType: "Full Time",
    skills: ["CATIA V5", "GD&T", "Automotive Assembly"],
    actualCTC: 10.5,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ India's largest passenger vehicle maker campus recruitment.",
      "✓ High initial salary band for fresh mechanical graduates.",
      "✓ Great brand name on CV."
    ]
  },
  {
    id: "mech-10",
    departmentId: "mech",
    company: "ExxonMobil",
    companyLogo: "🛢️",
    companyColor: "#FF0000",
    role: "Machinery Reliability Engineer",
    experience: 3,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Vibration Analysis", "Turbomachinery", "Rotating Equipment", "Root Cause Analysis"],
    actualCTC: 26.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ ExxonMobil Bangalore Technology Center oil refinery support.",
      "✓ Gas turbine and centrifugal compressor reliability modeling.",
      "✓ Top pay in energy sector."
    ]
  },
  {
    id: "mech-11",
    departmentId: "mech",
    company: "General Electric (GE)",
    companyLogo: "⚙️",
    companyColor: "#005596",
    role: "Gas Turbine Aerothermal Engineer",
    experience: 3,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["Ansys CFX", "Thermal Stress", "Turbine Blade Cooling", "Heat Transfer"],
    actualCTC: 24.5,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ GE John F Welch Technology Centre (JFWTC) Bangalore.",
      "✓ High temperature aero-thermal Blade cooling design.",
      "✓ Prestigious core mechanical R&D lab."
    ]
  },
  {
    id: "mech-12",
    departmentId: "mech",
    company: "Caterpillar",
    companyLogo: "🚜",
    companyColor: "#FFCD00",
    role: "Design Engineer - Structures",
    experience: 1,
    location: "Chennai, India",
    employmentType: "Full Time",
    skills: ["Creo", "Abaqus", "FEA Structural", "Weldments"],
    actualCTC: 13.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Heavy earthmoving machinery boom & frame CAD design.",
      "✓ Structural durability finite element analysis.",
      "✓ Caterpillar global training."
    ]
  },
  {
    id: "mech-13",
    departmentId: "mech",
    company: "Royal Enfield",
    companyLogo: "🏍️",
    companyColor: "#D32F2F",
    role: "Motorcycle Chassis CAD Engineer",
    experience: 1,
    location: "Chennai, India",
    employmentType: "Full Time",
    skills: ["SolidWorks", "Rigidity Testing", "Proto Building"],
    actualCTC: 8.8,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ Royal Enfield Tech Centre Chennai (UK-India co-design).",
      "✓ Hands on riding vehicle dynamic testing.",
      "✓ Passionate motorcycle enthusiast work culture."
    ]
  },
  {
    id: "mech-14",
    departmentId: "mech",
    company: "Saint-Gobain",
    companyLogo: "🧱",
    companyColor: "#0066B3",
    role: "Process Maintenance Engineer",
    experience: 0,
    location: "Sriperumbudur, Tamil Nadu",
    employmentType: "Full Time",
    skills: ["Predictive Maintenance", "Pneumatics", "Hydraulics"],
    actualCTC: 6.2,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ French glass manufacturing giant float glass plant.",
      "✓ Continuous manufacturing process maintenance.",
      "✓ Subsidized housing and food allowances."
    ]
  },
  {
    id: "mech-15",
    departmentId: "mech",
    company: "Godrej & Boyce",
    companyLogo: "🏢",
    companyColor: "#E31E24",
    role: "Tooling & Die Engineer",
    experience: 2,
    location: "Mumbai, India",
    employmentType: "Full Time",
    skills: ["Injection Mold Design", "AutoCAD", "CNC Machining", "Toolroom"],
    actualCTC: 9.5,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ Precision press tool and plastic injection mold building.",
      "✓ Mumbai Vikhroli campus location.",
      "✓ Traditional Indian manufacturing stability."
    ]
  },
  {
    id: "mech-16",
    departmentId: "mech",
    company: "TCS",
    companyLogo: "🏢",
    companyColor: "#111111",
    role: "System Engineer - Mechanical PLM",
    experience: 0,
    location: "Pune, India",
    employmentType: "Full Time",
    skills: ["Siemens Teamcenter PLM", "CAD Conversion"],
    actualCTC: 3.6,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Mechanical PLM product lifecycle management software service team.",
      "✓ Mass recruiter entry salary for non-IT branches.",
      "✓ IT service conversion path."
    ]
  },

  // ==========================================
  // 13. MECHANICAL (ELECTRIC VEHICLES) - 16 PROFILES
  // ==========================================
  {
    id: "ev-1",
    departmentId: "ev",
    company: "Lucid Motors",
    companyLogo: "⚡",
    companyColor: "#000000",
    role: "Battery Thermal Systems Architect",
    experience: 4,
    location: "San Jose, USA (Relocation)",
    employmentType: "International Relocation",
    skills: ["Ansys Fluent", "Cooling Plate Design", "Phase Change Materials", "Lithium Thermal Runaway"],
    actualCTC: 96.0,
    difficulty: "Hard",
    tier: "High-Growth Unicorn",
    isGolden: true,
    insights: [
      "✓ Luxury EV maker battery pack thermal architecture lead.",
      "✓ Prevention of thermal runaway propagation in ultra-fast charging.",
      "✓ Silicon Valley equity RSUs."
    ]
  },
  {
    id: "ev-2",
    departmentId: "ev",
    company: "Ather Energy",
    companyLogo: "⚡",
    companyColor: "#111111",
    role: "Senior Battery Pack Structural Eng",
    experience: 3,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["Ansys Mechanical", "Battery Enclosure IP67", "Vibration Shock Testing", "SolidWorks"],
    actualCTC: 24.0,
    difficulty: "Medium",
    tier: "High-Growth Unicorn",
    insights: [
      "✓ Ather 450X aluminium die-cast battery pack enclosure structural safety.",
      "✓ IP67 ingress and crash protection compliance.",
      "✓ High valuation ESOP equity options."
    ]
  },
  {
    id: "ev-3",
    departmentId: "ev",
    company: "Ola Electric",
    companyLogo: "🛵",
    companyColor: "#000000",
    role: "Motor Powertrain Mechanical Eng",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["IPM Synchronous Motors", "Stator Cooling", "Gearbox Design", "Creo"],
    actualCTC: 21.0,
    difficulty: "Medium",
    tier: "High-Growth Unicorn",
    insights: [
      "✓ Ola Futurefactory Krishnagiri electric motor drivetrain setup.",
      "✓ High RPM reduction gearbox mechanical endurance.",
      "✓ Fast-paced startup environment."
    ]
  },
  {
    id: "ev-4",
    departmentId: "ev",
    company: "Mercedes-Benz R&D India",
    companyLogo: "⭐",
    companyColor: "#000000",
    role: "EQ Series EV Chassis Engineer",
    experience: 3,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["Heavy EV Weight Distribution", "Air Suspension", "CATIA V6", "FEA"],
    actualCTC: 27.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ MBRDI Bangalore high-end EQS electric vehicle platform team.",
      "✓ Structural integration of underbody heavy battery packs.",
      "✓ Premium German MNC salary benchmark."
    ]
  },
  {
    id: "ev-5",
    departmentId: "ev",
    company: "Rivian / Partner",
    companyLogo: "🏔️",
    companyColor: "#E25C1D",
    role: "EV Drivetrain CAD Specialist",
    experience: 2,
    location: "Remote (India)",
    employmentType: "Remote",
    skills: ["SolidWorks", "Electric Drive Unit (EDU)", "GD&T", "DFM"],
    actualCTC: 38.0,
    difficulty: "Hard",
    tier: "High-Growth Unicorn",
    insights: [
      "✓ Electric adventure truck drive unit housing designer.",
      "✓ Remote USD compensation structure.",
      "✓ Specialized EV mechanical engineering niche."
    ]
  },
  {
    id: "ev-6",
    departmentId: "ev",
    company: "Mahindra Electric",
    companyLogo: "🚙",
    companyColor: "#E31837",
    role: "EV Thermal Management Engineer",
    experience: 1,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Heat Exchangers", "Chiller Loops", "GT-SUITE", "Refrigerants"],
    actualCTC: 13.5,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ Mahindra Born Electric SUV liquid cooling circuit design.",
      "✓ Direct campus recruit placement offer.",
      "✓ Rapidly growing domestic EV division."
    ]
  },
  {
    id: "ev-7",
    departmentId: "ev",
    company: "TVS Motor (EV Division)",
    companyLogo: "🏍️",
    companyColor: "#003399",
    role: "EV Frame & Packaging Engineer",
    experience: 1,
    location: "Hosur, Tamil Nadu",
    employmentType: "Full Time",
    skills: ["Spaceframe Design", "CATIA", "FEA Stress Analysis"],
    actualCTC: 10.5,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ TVS iQube electric scooter platform development.",
      "✓ Hosur plant manufacturing center.",
      "✓ Good hands-on field testing."
    ]
  },
  {
    id: "ev-8",
    departmentId: "ev",
    company: "Tata Passenger Electric Mobility",
    companyLogo: "⚡",
    companyColor: "#005596",
    role: "GEN-3 EV Platform Specialist",
    experience: 2,
    location: "Pune, India",
    employmentType: "Full Time",
    skills: ["Flat Skateboard Architecture", "Aluminum Extrusions", "NX CAD"],
    actualCTC: 16.0,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ Tata Avinya / Curvv EV skateboard platform structural design.",
      "✓ Dominant domestic EV car market leader.",
      "✓ Strong Tata career stability."
    ]
  },
  {
    id: "ev-9",
    departmentId: "ev",
    company: "Simple Energy",
    companyLogo: "⚡",
    companyColor: "#FF3300",
    role: "Battery Module Design Engineer",
    experience: 0,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Cell Tab Busbar Welding", "Nickel Strip Thermal", "CAD"],
    actualCTC: 9.0,
    difficulty: "Easy",
    tier: "Leading Startup",
    insights: [
      "✓ High energy density 2-wheeler removable battery module.",
      "✓ Hands on battery assembly prototyping.",
      "✓ Early stage startup stock options."
    ]
  },
  {
    id: "ev-10",
    departmentId: "ev",
    company: "Bosch Electromobility",
    companyLogo: "⚙️",
    companyColor: "#EA1D25",
    role: "eAxle Mechanical Engineer",
    experience: 3,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Integrated eAxle Housing", "Gear Wear Analysis", "Creo", "ANSYS"],
    actualCTC: 22.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Integrated motor + inverter + transmission single unit eAxle.",
      "✓ High power density design.",
      "✓ Bosch global mobility division perks."
    ]
  },
  {
    id: "ev-11",
    departmentId: "ev",
    company: "Ultraviolette Automotive",
    companyLogo: "⚡",
    companyColor: "#00E5FF",
    role: "High Performance EV Chassis Eng",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Trellis Frame CAD", "Monoshock Linkage Kinematics", "SolidWorks"],
    actualCTC: 17.5,
    difficulty: "Medium",
    tier: "Leading Startup",
    insights: [
      "✓ F77 electric sports motorcycle high-speed structural stability.",
      "✓ Aerospace inspired lightweight design principles.",
      "✓ Passionate motorcycle engineering team."
    ]
  },
  {
    id: "ev-12",
    departmentId: "ev",
    company: "Exide Leclanché Energy",
    companyLogo: "🔋",
    companyColor: "#CC0000",
    role: "Lithium-ion Pack Assembly Lead",
    experience: 1,
    location: "Prantij, Gujarat",
    employmentType: "Full Time",
    skills: ["Prismatic Cell Stacking", "BMS Connector Mechanical", "Testing"],
    actualCTC: 8.8,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ Large scale lithium battery Gigafactory production line.",
      "✓ Practical manufacturing automation exposure.",
      "✓ Steady battery sector growth."
    ]
  },
  {
    id: "ev-13",
    departmentId: "ev",
    company: "Dana TM4",
    companyLogo: "⚙️",
    companyColor: "#003366",
    role: "Electric Motor Mechanical CAD Eng",
    experience: 2,
    location: "Pune, India",
    employmentType: "Full Time",
    skills: ["Rotor Lamination Stamping", "Shaft Torsional FEA", "Creo"],
    actualCTC: 14.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Canadian electric motor manufacturer Pune technical center.",
      "✓ High torque commercial vehicle EV motors.",
      "✓ Stable MNC employment."
    ]
  },
  {
    id: "ev-14",
    departmentId: "ev",
    company: "KPIT Technologies",
    companyLogo: "🚗",
    companyColor: "#00529B",
    role: "EV Digital Twin Mechanical Eng",
    experience: 1,
    location: "Pune, India",
    employmentType: "Full Time",
    skills: ["Amesim", "Modelica", "EV Powertrain Simulation"],
    actualCTC: 9.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Multi-domain physical system simulation.",
      "✓ Virtual prototyping for European automaker clients.",
      "✓ Good learning platform."
    ]
  },
  {
    id: "ev-15",
    departmentId: "ev",
    company: "Greaves Electric Mobility",
    companyLogo: "🛵",
    companyColor: "#008000",
    role: "EV Product Quality Specialist",
    experience: 0,
    location: "Ranipet, Tamil Nadu",
    employmentType: "Full Time",
    skills: ["Vehicle Dynamics", "Quality Audits", "GD&T Inspection"],
    actualCTC: 6.0,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ Ranipet EV mega-plant assembly line quality inspection.",
      "✓ Fresher entry level manufacturing package.",
      "✓ Hands on vehicle testing track experience."
    ]
  },
  {
    id: "ev-16",
    departmentId: "ev",
    company: "L&T Technology Services",
    companyLogo: "🏗️",
    companyColor: "#005A9C",
    role: "EV CAD Modeling Trainee",
    experience: 0,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["CATIA V5", "Unigraphics NX"],
    actualCTC: 4.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Offshore mechanical drafting for overseas EV OEM clients.",
      "✓ Service company entry benchmark.",
      "✓ Initial CAD modeling software training."
    ]
  },

  // ==========================================
  // 14. MECHATRONICS ENGINEERING - 16 PROFILES
  // ==========================================
  {
    id: "mechatronics-1",
    departmentId: "mechatronics",
    company: "ASML",
    companyLogo: "🔬",
    companyColor: "#00A3E0",
    role: "Sub-Nanometer Precision Mechatronics Specialist",
    experience: 4,
    location: "Veldhoven, Netherlands (Relocation)",
    employmentType: "International Relocation",
    skills: ["Piezo Actuators", "Nanopositioning", "Matlab/Simulink", "C++", "Optomechatronics"],
    actualCTC: 108.0,
    difficulty: "Hard",
    tier: "Global MNC",
    isGolden: true,
    insights: [
      "✓ World's sole EUV lithography machine maker ASML in Netherlands.",
      "✓ Sub-nanometer semiconductor wafer stage motion positioning.",
      "✓ Ultra-high international EU compensation & expat tax incentives."
    ]
  },
  {
    id: "mechatronics-2",
    departmentId: "mechatronics",
    company: "Festo",
    companyLogo: "⚙️",
    companyColor: "#0099CC",
    role: "Cyber-Physical Automation Lead",
    experience: 3,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["IO-Link Protocols", "Pneumatic Servo Valves", "PLC Codesys", "Python"],
    actualCTC: 22.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ German industrial pneumatic automation giant Festo.",
      "✓ Smart Industry 4.0 digitised pneumatic valves.",
      "✓ Excellent technical R&D culture."
    ]
  },
  {
    id: "mechatronics-3",
    departmentId: "mechatronics",
    company: "Rockwell Automation",
    companyLogo: "🔴",
    companyColor: "#CC0000",
    role: "Industrial Control Systems Eng",
    experience: 2,
    location: "Noida, India",
    employmentType: "Hybrid",
    skills: ["Allen-Bradley ControlLogix", "Structured Text", "FactoryTalk HMI", "EtherNet/IP"],
    actualCTC: 18.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ US automation leader's India development lab.",
      "✓ Allen-Bradley PLC firmware & HMI software.",
      "✓ Stable corporate benefits."
    ]
  },
  {
    id: "mechatronics-4",
    departmentId: "mechatronics",
    company: "Addverb Technologies",
    companyLogo: "🤖",
    companyColor: "#00529B",
    role: "Robotics System Integration Lead",
    experience: 2,
    location: "Noida, India",
    employmentType: "Full Time",
    skills: ["AS/RS Cranes", "PLC", "Python", "ROS", "Sensor Integration"],
    actualCTC: 16.0,
    difficulty: "Easy",
    tier: "Leading Startup",
    insights: [
      "✓ Automated Storage & Retrieval System (AS/RS) mechanical-electrical integration.",
      "✓ Reliance group warehouse automation deployment.",
      "✓ Fast growth tech environment."
    ]
  },
  {
    id: "mechatronics-5",
    departmentId: "mechatronics",
    company: "Honeywell Process Solutions",
    companyLogo: "✈️",
    companyColor: "#EE3124",
    role: "DCS & SCADA Systems Engineer",
    experience: 1,
    location: "Pune, India",
    employmentType: "Full Time",
    skills: ["Distributed Control Systems", "Experion PKS", "Modbus", "PLC"],
    actualCTC: 12.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Heavy oil refinery and power plant automated DCS systems.",
      "✓ Honeywell process control division.",
      "✓ Strong foundational industrial software training."
    ]
  },
  {
    id: "mechatronics-6",
    departmentId: "mechatronics",
    company: "Bosch Rexroth",
    companyLogo: "⚙️",
    companyColor: "#EA1D25",
    role: "Hydraulic Motion Control Engineer",
    experience: 3,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Proportional Valves", "Hydraulic Servo Drives", "PLC", "Matlab"],
    actualCTC: 20.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ High force industrial hydraulic motion control.",
      "✓ Steel mill & heavy press hydraulic automation.",
      "✓ Bosch group employment security."
    ]
  },
  {
    id: "mechatronics-7",
    departmentId: "mechatronics",
    company: "Schneider Automation",
    companyLogo: "🟢",
    companyColor: "#3DCD58",
    role: "PLC Firmware Engineer",
    experience: 1,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Modicon PLC", "IEC 61131-3", "C++", "Ethernet/IP"],
    actualCTC: 14.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Modicon programmable logic controller RTOS firmware.",
      "✓ Direct campus recruit placement offer.",
      "✓ Solid European MNC salary & benefits."
    ]
  },
  {
    id: "mechatronics-8",
    departmentId: "mechatronics",
    company: "Murata Machinery",
    companyLogo: "🏭",
    companyColor: "#E4002B",
    role: "Textile Automation Engineer",
    experience: 0,
    location: "Coimbatore, India",
    employmentType: "Full Time",
    skills: ["Servo Motors", "PLC", "Optoelectronic Sensors"],
    actualCTC: 7.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Japanese high speed automated spinning & winding machinery.",
      "✓ Direct mechatronics field engineer placement.",
      "✓ Great practical hardware training."
    ]
  },
  {
    id: "mechatronics-9",
    departmentId: "mechatronics",
    company: "Mitsubishi Electric",
    companyLogo: "🔴",
    companyColor: "#FF0000",
    role: "Factory Automation Application Eng",
    experience: 2,
    location: "Gurgaon, India",
    employmentType: "Full Time",
    skills: ["MELSEC PLC", "iQ Platform", "GX Works", "Servo Drives"],
    actualCTC: 13.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Japanese automation giant's India support center.",
      "✓ High precision CNC & industrial robot integration.",
      "✓ Reliable corporate perks."
    ]
  },
  {
    id: "mechatronics-10",
    departmentId: "mechatronics",
    company: "Fanuc India",
    companyLogo: "🟡",
    companyColor: "#FFCC00",
    role: "CNC Servo Systems Specialist",
    experience: 1,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Fanuc CNC Controller", "Ladder Logic", "Encoders", "PM Motors"],
    actualCTC: 10.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Multi-axis CNC milling machine motion control.",
      "✓ Factory floor commissioning experience.",
      "✓ High market demand for Fanuc certified specialists."
    ]
  },
  {
    id: "mechatronics-11",
    departmentId: "mechatronics",
    company: "TATA Steel",
    companyLogo: "🏢",
    companyColor: "#005596",
    role: "Manager - Automation & Instrumentation",
    experience: 2,
    location: "Jamshedpur, India",
    employmentType: "Full Time",
    skills: ["Rolling Mill SCADA", "Pyrometers", "Laser Gauges", "PLC"],
    actualCTC: 14.8,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ Jamshedpur integrated steel plant hot strip mill automation.",
      "✓ High temperature harsh environment instrumentation.",
      "✓ Outstanding Tata Steel township amenities."
    ]
  },
  {
    id: "mechatronics-12",
    departmentId: "mechatronics",
    company: "Omron Automation",
    companyLogo: "🔵",
    companyColor: "#005BAC",
    role: "Vision & Safety Control Specialist",
    experience: 1,
    location: "Chennai, India",
    employmentType: "Full Time",
    skills: ["Sysmac Studio", "Safety Light Curtains", "Omron FH Vision"],
    actualCTC: 9.2,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Machine safety compliance and automated visual inspection.",
      "✓ Automotive tier 1 supplier factory installations.",
      "✓ Good career progression."
    ]
  },
  {
    id: "mechatronics-13",
    departmentId: "mechatronics",
    company: "Beckhoff Automation",
    companyLogo: "🔴",
    companyColor: "#E30613",
    role: "TwinCAT Control Software Engineer",
    experience: 2,
    location: "Pune, India",
    employmentType: "Hybrid",
    skills: ["TwinCAT 3", "EtherCAT Protocol", "PC-Based Control", "C++"],
    actualCTC: 17.5,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ German PC-based high speed EtherCAT industrial control.",
      "✓ Microsecond level hard real-time synchronization.",
      "✓ Niche high value automation skills."
    ]
  },
  {
    id: "mechatronics-14",
    departmentId: "mechatronics",
    company: "L&T Construction",
    companyLogo: "🏗️",
    companyColor: "#005A9C",
    role: "Heavy Equipment Automation Trainee",
    experience: 0,
    location: "Kanchipuram, India",
    employmentType: "Full Time",
    skills: ["Hydraulic Control", "CAN Bus", "PLC"],
    actualCTC: 6.5,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ Tunnel Boring Machine (TBM) electro-hydraulic control.",
      "✓ Infrastructure mega-project GET placement.",
      "✓ Strong core engineering training."
    ]
  },
  {
    id: "mechatronics-15",
    departmentId: "mechatronics",
    company: "Endress+Hauser",
    companyLogo: "📊",
    companyColor: "#0083CA",
    role: "Flow Instrumentation Specialist",
    experience: 1,
    location: "Aurangabad, India",
    employmentType: "Full Time",
    skills: ["Coriolis Mass Flowmeters", "HART Protocol", "Calibration"],
    actualCTC: 8.8,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Swiss process measurement instrument leader.",
      "✓ Chemical & pharma process sensor calibration.",
      "✓ Stable European MNC culture."
    ]
  },
  {
    id: "mechatronics-16",
    departmentId: "mechatronics",
    company: "Infosys",
    companyLogo: "ℹ️",
    companyColor: "#007CC3",
    role: "Systems Engineer - Smart Manufacturing",
    experience: 0,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Python", "IoT Edge", "SQL"],
    actualCTC: 4.2,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Industry 4.0 digital transformation service unit.",
      "✓ IT service company fresher entry tier.",
      "✓ Cloud IoT platform onboarding training."
    ]
  },

  // ==========================================
  // 15. CIVIL ENGINEERING - 16 PROFILES
  // ==========================================
  {
    id: "civil-1",
    departmentId: "civil",
    company: "Arcadis",
    companyLogo: "🏗️",
    companyColor: "#FF6600",
    role: "Senior BIM Structural Architect",
    experience: 4,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["Revit Structural", "Tekla Structures", "Dynamo Scripting", "ETABS"],
    actualCTC: 24.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Dutch global design & consultancy firm Arcadis in Bangalore.",
      "✓ High-rise skyscraper structural BIM 3D modeling.",
      "✓ Top multinational civil engineering compensation."
    ]
  },
  {
    id: "civil-2",
    departmentId: "civil",
    company: "L&T Construction",
    companyLogo: "🏗️",
    companyColor: "#005A9C",
    role: "Post-Graduate Executive Trainee (PGET)",
    experience: 0,
    location: "Chennai, India",
    employmentType: "Full Time",
    skills: ["STAAD Pro", "Primavera P6", "Concrete Technology", "Quantity Surveying"],
    actualCTC: 7.5,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ L&T Construction HQ Chennai premier GET/PGET campus offer.",
      "✓ Iconic bullet train & mega-bridge project rotations.",
      "✓ Gold standard entry for civil engineers in India."
    ]
  },
  {
    id: "civil-3",
    departmentId: "civil",
    company: "AECOM",
    companyLogo: "🏙️",
    companyColor: "#000000",
    role: "Bridge Infrastructure Lead",
    experience: 3,
    location: "Gurgaon, India",
    employmentType: "Hybrid",
    skills: ["MIDAS Civil", "Prestressed Concrete", "AASHTO Codes", "AutoCAD"],
    actualCTC: 21.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ American infrastructure giant AECOM India design office.",
      "✓ Cable-stayed and segmental bridge FEA structural analysis.",
      "✓ US MNC package and international projects."
    ]
  },
  {
    id: "civil-4",
    departmentId: "civil",
    company: "Arup",
    companyLogo: "📐",
    companyColor: "#E20613",
    role: "Façade & Structural Engineer",
    experience: 2,
    location: "Mumbai, India",
    employmentType: "Full Time",
    skills: ["Rhino/Grasshopper", "Finite Element Structural", "Wind Tunnel Analysis"],
    actualCTC: 18.0,
    difficulty: "Hard",
    tier: "Global MNC",
    insights: [
      "✓ Famed UK structural engineering consultancy Arup (Sydney Opera House fame).",
      "✓ Complex non-linear parametric structural design.",
      "✓ High prestige global consulting brand."
    ]
  },
  {
    id: "civil-5",
    departmentId: "civil",
    company: "Shapoorji Pallonji",
    companyLogo: "🏢",
    companyColor: "#002B49",
    role: "Project Planning Engineer",
    experience: 2,
    location: "Mumbai, India",
    employmentType: "Full Time",
    skills: ["MS Project", "Primavera P6", "Cost Estimation", "Site Execution"],
    actualCTC: 11.5,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ 150+ year old premier construction conglomerate.",
      "✓ Commercial high-rise real estate project execution.",
      "✓ Solid site allowance perks."
    ]
  },
  {
    id: "civil-6",
    departmentId: "civil",
    company: "WSP Global",
    companyLogo: "🌉",
    companyColor: "#CC0000",
    role: "Geotechnical Design Engineer",
    experience: 2,
    location: "Noida, India",
    employmentType: "Hybrid",
    skills: ["PLAXIS 2D/3D", "Deep Foundation Design", "Slope Stability", "Soil Mechanics"],
    actualCTC: 16.5,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Canadian engineering consultancy WSP Global Noida center.",
      "✓ Tunneling & deep pile foundation finite element modeling.",
      "✓ Stable global consultancy work."
    ]
  },
  {
    id: "civil-7",
    departmentId: "civil",
    company: "Tata Consulting Engineers (TCE)",
    companyLogo: "🏢",
    companyColor: "#005596",
    role: "Structural Design Trainee",
    experience: 0,
    location: "Mumbai, India",
    employmentType: "Full Time",
    skills: ["STAAD Pro", "RCC Design IS 456", "Steel Structures IS 800"],
    actualCTC: 6.2,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ Tata group engineering consultancy division campus hire.",
      "✓ Power plant & industrial plant structural design.",
      "✓ Excellent Tata corporate work culture."
    ]
  },
  {
    id: "civil-8",
    departmentId: "civil",
    company: "Jacobs Engineering",
    companyLogo: "💧",
    companyColor: "#003366",
    role: "Water & Environmental Engineer",
    experience: 3,
    location: "Hyd, India",
    employmentType: "Hybrid",
    skills: ["WaterGEMs", "SEWERGems", "Hydraulics", "ArcGIS"],
    actualCTC: 19.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ US fortune 500 engineering leader Jacobs.",
      "✓ Municipal water distribution network modeling for US cities.",
      "✓ Top environmental engineering salary scale."
    ]
  },
  {
    id: "civil-9",
    departmentId: "civil",
    company: "JLL (Jones Lang LaSalle)",
    companyLogo: "🏙️",
    companyColor: "#E31837",
    role: "Project Management Consultant",
    experience: 1,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Corporate Real Estate", "Contract Admin FIDIC", "Quality Assurance"],
    actualCTC: 12.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ World's top commercial real estate services firm.",
      "✓ Client side IT park fitout construction oversight.",
      "✓ Great corporate networking opportunities."
    ]
  },
  {
    id: "civil-10",
    departmentId: "civil",
    company: "AFCONS Infrastructure",
    companyLogo: "🌉",
    companyColor: "#004B87",
    role: "Tunneling Site Engineer",
    experience: 2,
    location: "Jammu & Kashmir",
    employmentType: "Full Time",
    skills: ["NATM Tunneling", "Shotcreting", "Rock Mechanics", "Surveying"],
    actualCTC: 13.5,
    difficulty: "Medium",
    tier: "Core Industrial",
    insights: [
      "✓ Shapoorji Pallonji group infrastructure arm.",
      "✓ Himalayan rail tunnel & bridge project site posting.",
      "✓ High hardship field location allowance."
    ]
  },
  {
    id: "civil-11",
    departmentId: "civil",
    company: "CBRE",
    companyLogo: "🏢",
    companyColor: "#003F2D",
    role: "Cost Management Specialist",
    experience: 1,
    location: "Gurgaon, India",
    employmentType: "Full Time",
    skills: ["Quantity Surveying", "CostX", "Value Engineering", "Excel"],
    actualCTC: 9.8,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Global real estate consulting pioneer.",
      "✓ Commercial building budget auditing & vendor negotiation.",
      "✓ Professional corporate environment."
    ]
  },
  {
    id: "civil-12",
    departmentId: "civil",
    company: "Godrej Properties",
    companyLogo: "🏢",
    companyColor: "#E31E24",
    role: "Assistant Planning Manager",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Pre-construction Planning", "Primavera P6", "RERA Compliance"],
    actualCTC: 14.0,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ Premium residential real estate developer.",
      "✓ RERA timeline enforcement and vendor scheduling.",
      "✓ Strong Godrej brand heritage."
    ]
  },
  {
    id: "civil-13",
    departmentId: "civil",
    company: "Mott MacDonald",
    companyLogo: "🌉",
    companyColor: "#E2001A",
    role: "Highway & Traffic Engineer",
    experience: 2,
    location: "Noida, India",
    employmentType: "Hybrid",
    skills: ["OpenRoads Designer", "VISSIM Traffic Simulation", "Pavement Design"],
    actualCTC: 15.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Employee-owned UK engineering & management consultancy.",
      "✓ Expressways & smart city traffic flow modeling.",
      "✓ Excellent work life balance rating."
    ]
  },
  {
    id: "civil-14",
    departmentId: "civil",
    company: "Sobha Developers",
    companyLogo: "🏰",
    companyColor: "#000000",
    role: "Site QA/QC Engineer",
    experience: 0,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Concrete Cube Testing", "Workmanship Inspection", "AutoCAD"],
    actualCTC: 5.5,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ Backward integrated luxury real estate builder.",
      "✓ Strict German quality standards on site.",
      "✓ Hands on civil construction exposure."
    ]
  },
  {
    id: "civil-15",
    departmentId: "civil",
    company: "RITES Limited",
    companyLogo: "🚆",
    companyColor: "#003399",
    role: "Graduate Engineer Trainee - Civil",
    experience: 0,
    location: "Gurgaon, India",
    employmentType: "Full Time",
    skills: ["Railway Track Design", "Surveying", "AutoCAD"],
    actualCTC: 14.0,
    difficulty: "Hard",
    tier: "Core Industrial",
    insights: [
      "✓ Indian Railways Miniratna PSU campus placement / GATE.",
      "✓ Railway infrastructure consulting & inspection.",
      "✓ High PSU job security and Perks."
    ]
  },
  {
    id: "civil-16",
    departmentId: "civil",
    company: "TCS",
    companyLogo: "🏢",
    companyColor: "#111111",
    role: "System Engineer - GIS Services",
    experience: 0,
    location: "Hyderabad, India",
    employmentType: "Full Time",
    skills: ["ArcGIS", "QGIS", "Python Basics"],
    actualCTC: 3.6,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Geographic Information Systems (GIS) software service division.",
      "✓ Standard IT services entry package for civil graduates.",
      "✓ Digital mapping project onboarding."
    ]
  },

  // ==========================================
  // 16. CHEMICAL ENGINEERING - 16 PROFILES
  // ==========================================
  {
    id: "chem-1",
    departmentId: "chem",
    company: "ExxonMobil",
    companyLogo: "🛢️",
    companyColor: "#FF0000",
    role: "Refinery Process Modeling Engineer",
    experience: 3,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["Aspen HYSYS", "Petrochemical Distillation", "Heat Exchanger Networks", "PINCH Analysis"],
    actualCTC: 32.0,
    difficulty: "Hard",
    tier: "Global MNC",
    insights: [
      "✓ ExxonMobil Bangalore R&D center process simulation team.",
      "✓ Crude distillation unit energy optimization using Aspen HYSYS.",
      "✓ Industry leading chemical engineering package."
    ]
  },
  {
    id: "chem-2",
    departmentId: "chem",
    company: "Reliance Industries (RIL)",
    companyLogo: "🛢️",
    companyColor: "#0A2540",
    role: "Graduate Engineer Trainee - Process",
    experience: 0,
    location: "Jamnagar, Gujarat",
    employmentType: "Full Time",
    skills: ["Fluid Dynamics", "Reaction Kinetics", "P&ID Diagrams", "Process Safety"],
    actualCTC: 9.5,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ World's largest single-site petroleum refinery Jamnagar RIL GET offer.",
      "✓ Premier core chemical engineering campus recruitment.",
      "✓ Free housing township and top medical coverage."
    ]
  },
  {
    id: "chem-3",
    departmentId: "chem",
    company: "Shell India",
    companyLogo: "🐚",
    companyColor: "#FFD500",
    role: "Process Catalysis Research Eng",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["Heterogeneous Catalysis", "Aspen Plus", "Chemical Reactor Design", "Lab Scale Pilot"],
    actualCTC: 24.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Shell Technology Centre Bangalore (STCB) R&D hub.",
      "✓ Decarbonization and bio-fuel catalytic reactor design.",
      "✓ Anglo-Dutch MNC compensation & stock plans."
    ]
  },
  {
    id: "chem-4",
    departmentId: "chem",
    company: "Unilever / HUL",
    companyLogo: "🧴",
    companyColor: "#1F36C7",
    role: "Supply Chain Chemical Process Lead",
    experience: 3,
    location: "Mumbai, India",
    employmentType: "Full Time",
    skills: ["FMCG Emulsion Processing", "Scale-Up Pilot", "SAP APO", "Six Sigma"],
    actualCTC: 28.5,
    difficulty: "Medium",
    tier: "Global MNC",
    isGolden: true,
    insights: [
      "✓ Hindustan Unilever management trainee / process lead scale.",
      "✓ Soap & detergent chemical spray drying scale-up.",
      "✓ Top consumer goods salary & performance bonuses."
    ]
  },
  {
    id: "chem-5",
    departmentId: "chem",
    company: "BASF Chemical",
    companyLogo: "🧪",
    companyColor: "#004A96",
    role: "Polymer Technical Service Eng",
    experience: 2,
    location: "Mumbai, India",
    employmentType: "Full Time",
    skills: ["Polyurethane Chemistry", "Rheology", "Formulation", "Client Pilot"],
    actualCTC: 16.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ World's largest chemical producer BASF German MNC.",
      "✓ Automotive specialty plastics formulation development.",
      "✓ Stable European corporate perks."
    ]
  },
  {
    id: "chem-6",
    departmentId: "chem",
    company: "UOP Honeywell",
    companyLogo: "🔥",
    companyColor: "#EE3124",
    role: "Petrochemical Technology Specialist",
    experience: 2,
    location: "Gurgaon, India",
    employmentType: "Hybrid",
    skills: ["Fluid Catalytic Cracking (FCC)", "Process Licensing", "Aspen", "P&ID"],
    actualCTC: 20.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Honeywell UOP process licensing technology pioneer.",
      "✓ Refinery process unit commissioning & startup support.",
      "✓ Excellent international assignment exposure."
    ]
  },
  {
    id: "chem-7",
    departmentId: "chem",
    company: "Linde Engineering",
    companyLogo: "❄️",
    companyColor: "#005596",
    role: "Cryogenic Process Engineer",
    experience: 2,
    location: "Vadodara, India",
    employmentType: "Full Time",
    skills: ["Air Separation Units", "LNG Liquefaction", "Unisim", "Thermodynamics"],
    actualCTC: 15.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ World leader in industrial gases & cryogenic engineering.",
      "✓ Liquefied natural gas & industrial oxygen plant process design.",
      "✓ Stable German corporate environment."
    ]
  },
  {
    id: "chem-8",
    departmentId: "chem",
    company: "Dr. Reddy's Laboratories",
    companyLogo: "💊",
    companyColor: "#5E2750",
    role: "API Process Development Eng",
    experience: 1,
    location: "Hyderabad, India",
    employmentType: "Full Time",
    skills: ["Active Pharmaceutical Ingredients (API)", "Crystallization", "Scale-Up", "cGMP"],
    actualCTC: 10.5,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ Pharmaceutical API batch reactor chemical process optimization.",
      "✓ FDA compliant cGMP pilot plant trials.",
      "✓ Direct campus recruit offer."
    ]
  },
  {
    id: "chem-9",
    departmentId: "chem",
    company: "Technip Energies",
    companyLogo: "🏗️",
    companyColor: "#003366",
    role: "Process Piping & Instrumentation Eng",
    experience: 1,
    location: "Chennai, India",
    employmentType: "Full Time",
    skills: ["SmartPlant P&ID", "Aspen HYSYS", "Hydraulic Sizing", "Safety Valves"],
    actualCTC: 11.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ French EPC engineering consultancy Technip Chennai center.",
      "✓ Green hydrogen & ethylene plant FEED process engineering.",
      "✓ Good foundational training."
    ]
  },
  {
    id: "chem-10",
    departmentId: "chem",
    company: "Grasim / Aditya Birla Chemical",
    companyLogo: "🏢",
    companyColor: "#AA272F",
    role: "Assistant Manager - Operations",
    experience: 2,
    location: "Nagda, Madhya Pradesh",
    employmentType: "Full Time",
    skills: ["Chlor-Alkali Process", "Caustic Soda Evaporation", "DCS", "HAZOP"],
    actualCTC: 12.0,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ Aditya Birla Group chemical manufacturing plant.",
      "✓ HAZOP hazard and operability safety studies.",
      "✓ Subsidized colony living."
    ]
  },
  {
    id: "chem-11",
    departmentId: "chem",
    company: "DOW Chemical",
    companyLogo: "🧪",
    companyColor: "#E31837",
    role: "R&D Scientist - Specialty Chemicals",
    experience: 3,
    location: "Mumbai, India",
    employmentType: "Hybrid",
    skills: ["Polymer Synthesis", "NMR/GC-MS", "Product Development", "MFI"],
    actualCTC: 22.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ US chemical titan Dow R&D center in Navi Mumbai.",
      "✓ Packaging adhesive & specialty resin development.",
      "✓ Excellent US MNC pay structure."
    ]
  },
  {
    id: "chem-12",
    departmentId: "chem",
    company: "Subsea 7 / Petrofac",
    companyLogo: "🛢️",
    companyColor: "#002D62",
    role: "Offshore Process Systems Eng",
    experience: 3,
    location: "Mumbai, India",
    employmentType: "Full Time",
    skills: ["FPSO Topsides", "Gas Separation", "Flare Stack Sizing", "HYSYS"],
    actualCTC: 25.0,
    difficulty: "Hard",
    tier: "Global MNC",
    insights: [
      "✓ Floating Production Storage and Offloading (FPSO) process design.",
      "✓ High pressure oil-gas-water 3-phase separator sizing.",
      "✓ Offshore project allowances."
    ]
  },
  {
    id: "chem-13",
    departmentId: "chem",
    company: "Thermax Limited",
    companyLogo: "🔥",
    companyColor: "#006633",
    role: "Boiler & Water Treatment Eng",
    experience: 0,
    location: "Pune, India",
    employmentType: "Full Time",
    skills: ["Ion Exchange Chemistry", "Reverse Osmosis", "Boiler Chemistry"],
    actualCTC: 6.5,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ Indian energy and environment engineering major campus offer.",
      "✓ Industrial effluent treatment plant design.",
      "✓ Good starter role for chemical graduates."
    ]
  },
  {
    id: "chem-14",
    departmentId: "chem",
    company: "AstraZeneca",
    companyLogo: "💊",
    companyColor: "#830051",
    role: "Chemical Technology Transfer Specialist",
    experience: 2,
    location: "Chennai, India",
    employmentType: "Full Time",
    skills: ["Tech Transfer", "Reaction Kinetics", "Cleanroom Standards", "Validation"],
    actualCTC: 17.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Global pharmaceutical giant's Chennai GPEC technology center.",
      "✓ Lab to commercial plant chemical process transfer.",
      "✓ High corporate stability."
    ]
  },
  {
    id: "chem-15",
    departmentId: "chem",
    company: "Coromandel International",
    companyLogo: "🌱",
    companyColor: "#006600",
    role: "Fertilizer Process Engineer",
    experience: 1,
    location: "Vizag, India",
    employmentType: "Full Time",
    skills: ["Phosphoric Acid Plant", "Granulation", "Scrubber Efficiency"],
    actualCTC: 8.2,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ Murugappa Group fertilizer plant Vizag.",
      "✓ Phosphatic fertilizer process mass-energy balance.",
      "✓ Core industrial career path."
    ]
  },
  {
    id: "chem-16",
    departmentId: "chem",
    company: "Cognizant",
    companyLogo: "🌐",
    companyColor: "#0033A0",
    role: "Process Data Analyst - Pharma",
    experience: 0,
    location: "Chennai, India",
    employmentType: "Full Time",
    skills: ["SQL", "Excel", "Pharma Domain Basics"],
    actualCTC: 4.2,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ IT service life sciences business unit.",
      "✓ Mass recruiter entry salary for non-CS branches.",
      "✓ Client batch record data auditing."
    ]
  },

  // ==========================================
  // 17. BIOTECHNOLOGY - 16 PROFILES
  // ==========================================
  {
    id: "biotech-1",
    departmentId: "biotech",
    company: "Pfizer R&D",
    companyLogo: "🧬",
    companyColor: "#0093D0",
    role: "Senior Bioprocess Engineer",
    experience: 4,
    location: "Chennai, India",
    employmentType: "Hybrid",
    skills: ["Bioreactor Scale-Up", "CHO Cell Culture", "HPLC", "mRNA Purification"],
    actualCTC: 28.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Pfizer Global Drug Development Center at IIT Madras Research Park Chennai.",
      "✓ Recombinant protein biomanufacturing scale-up expertise.",
      "✓ Top biopharma MNC compensation benchmark in India."
    ]
  },
  {
    id: "biotech-2",
    departmentId: "biotech",
    company: "Biocon Biologics",
    companyLogo: "🧪",
    companyColor: "#00529B",
    role: "Downstream Processing Specialist",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Tangential Flow Filtration (TFF)", "Chromatography FPLC", "cGMP", "Lyophilization"],
    actualCTC: 14.5,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ India's pioneer biopharmaceutical company Biocon Bangalore campus.",
      "✓ Monoclonal antibody (mAb) biosimilar purification.",
      "✓ Highly prestigious domestic biotech offer."
    ]
  },
  {
    id: "biotech-3",
    departmentId: "biotech",
    company: "Novo Nordisk",
    companyLogo: "🩸",
    companyColor: "#001E62",
    role: "Bioinformatics Scientist",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["Python", "RNA-Seq Analysis", "NGS Pipelines", "R", "Bioconductor"],
    actualCTC: 22.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Danish insulin & GLP-1 healthcare giant Novo Nordisk Bangalore R&D.",
      "✓ Next Generation Sequencing (NGS) genomic data analysis.",
      "✓ European healthcare MNC perks and salary scale."
    ]
  },
  {
    id: "biotech-4",
    departmentId: "biotech",
    company: "Genentech / Roche",
    companyLogo: "🧬",
    companyColor: "#0066CC",
    role: "Cell Line Development Engineer",
    experience: 3,
    location: "South San Francisco, USA (Relocation)",
    employmentType: "International Relocation",
    skills: ["CRISPR Gene Editing", "FACS", "Single Cell Cloning", "Bioreactor"],
    actualCTC: 88.0,
    difficulty: "Hard",
    tier: "FAANG / Big Tech",
    isGolden: true,
    insights: [
      "✓ World premier biotech pioneer Genentech San Francisco relocation.",
      "✓ High-throughput CHO host cell line engineering.",
      "✓ Substantial US dollar salary & equity options."
    ]
  },
  {
    id: "biotech-5",
    departmentId: "biotech",
    company: "Syngene International",
    companyLogo: "🔬",
    companyColor: "#003366",
    role: "Research Associate - Discovery Biology",
    experience: 0,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["ELISA", "Western Blotting", "Cell Culture", "Flow Cytometry"],
    actualCTC: 6.5,
    difficulty: "Easy",
    tier: "Leading Startup",
    insights: [
      "✓ Biocon group CRO (Contract Research Organization) campus offer.",
      "✓ Assaying target validation for global pharma clients.",
      "✓ Great foundational lab skill building."
    ]
  },
  {
    id: "biotech-6",
    departmentId: "biotech",
    company: "Serum Institute of India",
    companyLogo: "💉",
    companyColor: "#005A9C",
    role: "Vaccine Fermentation Officer",
    experience: 1,
    location: "Pune, India",
    employmentType: "Full Time",
    skills: ["1000L Bioreactor", "Bacterial Fermentation", "Sterilization CIP/SIP"],
    actualCTC: 9.0,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ World's largest vaccine manufacturer by volume in Pune.",
      "✓ Bulk commercial vaccine antigen production.",
      "✓ Good employee stability."
    ]
  },
  {
    id: "biotech-7",
    departmentId: "biotech",
    company: "Novartis",
    companyLogo: "💊",
    companyColor: "#E25A28",
    role: "Biostatistician",
    experience: 1,
    location: "Hyderabad, India",
    employmentType: "Hybrid",
    skills: ["SAS Programming", "Clinical Trial Phase I-III", "R", "CDISC Standards"],
    actualCTC: 16.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Swiss pharma leader Novartis Hyderabad development center.",
      "✓ Statistical analysis plan for international drug trials.",
      "✓ Great work life balance."
    ]
  },
  {
    id: "biotech-8",
    departmentId: "biotech",
    company: "Thermo Fisher Scientific",
    companyLogo: "🧪",
    companyColor: "#CC0000",
    role: "Field Application Specialist",
    experience: 1,
    location: "Mumbai, India",
    employmentType: "Full Time",
    skills: ["qPCR Systems", "Mass Spectrometry", "Customer Troubleshooting"],
    actualCTC: 11.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ World leader in serving science lab instruments.",
      "✓ High-end PCR & mass spec troubleshooting for research institutes.",
      "✓ Travel incentives and commissions."
    ]
  },
  {
    id: "biotech-9",
    departmentId: "biotech",
    company: "Bharat Biotech",
    companyLogo: "💉",
    companyColor: "#008000",
    role: "Quality Control Officer - Virology",
    experience: 1,
    location: "Hyderabad, India",
    employmentType: "Full Time",
    skills: ["Plaque Assay", "Inactivation Testing", "Biosafety Level 3 (BSL-3)"],
    actualCTC: 8.0,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ Covaxin vaccine developer Hyderabad facility.",
      "✓ High security BSL-3 laboratory operations.",
      "✓ Practical virology training."
    ]
  },
  {
    id: "biotech-10",
    departmentId: "biotech",
    company: "AstraZeneca R&D",
    companyLogo: "💊",
    companyColor: "#830051",
    role: "Omics Data Scientist",
    experience: 3,
    location: "Chennai, India",
    employmentType: "Hybrid",
    skills: ["Python", "Single Cell RNA-Seq", "Machine Learning in Genomics"],
    actualCTC: 25.0,
    difficulty: "Hard",
    tier: "Global MNC",
    insights: [
      "✓ Precision oncology genomic target discovery division.",
      "✓ Artificial intelligence applied to multi-omics datasets.",
      "✓ Top pay for bioinformatics specialization."
    ]
  },
  {
    id: "biotech-11",
    departmentId: "biotech",
    company: "Sartorius Stedim",
    companyLogo: "🧫",
    companyColor: "#FFCC00",
    role: "Single-Use Bioprocess Specialist",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Flexact Bioreactors", "Membrane Filtration", "Bioprocess Validation"],
    actualCTC: 15.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ German bioprocess equipment leader Sartorius.",
      "✓ Single-use bag bioreactor design and validation.",
      "✓ Stable European MNC culture."
    ]
  },
  {
    id: "biotech-12",
    departmentId: "biotech",
    company: "Reliance Life Sciences",
    companyLogo: "🧬",
    companyColor: "#0A2540",
    role: "Executive - Plasma Proteins",
    experience: 0,
    location: "Navi Mumbai, India",
    employmentType: "Full Time",
    skills: ["Cohn Fractionation", "Immunoglobulin Purification", "cGMP"],
    actualCTC: 6.2,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ Reliance Group life science unit Dhirubhai Ambani Life Science Centre.",
      "✓ Human blood plasma proteins bioprocessing.",
      "✓ Good fresher stepping stone."
    ]
  },
  {
    id: "biotech-13",
    departmentId: "biotech",
    company: "Biological E. Limited",
    companyLogo: "💉",
    companyColor: "#003366",
    role: "Production Executive",
    experience: 1,
    location: "Hyderabad, India",
    employmentType: "Full Time",
    skills: ["Autoclave Validation", "Filling Line Aseptic", "CIP/SIP"],
    actualCTC: 7.2,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ Major pediatric vaccine manufacturer.",
      "✓ Sterile liquid filling and freeze dryer lyophilizer operation.",
      "✓ Reliable domestic pharma career."
    ]
  },
  {
    id: "biotech-14",
    departmentId: "biotech",
    company: "MedGenome",
    companyLogo: "🧬",
    companyColor: "#1B365D",
    role: "Genomics Analyst",
    experience: 1,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Variant Calling", "GATK Pipeline", "Rare Disease Genomics"],
    actualCTC: 10.0,
    difficulty: "Easy",
    tier: "Leading Startup",
    insights: [
      "✓ India's premier clinical genetic testing laboratory.",
      "✓ Whole exome sequencing diagnostic reporting.",
      "✓ Fast-paced genomics startup culture."
    ]
  },
  {
    id: "biotech-15",
    departmentId: "biotech",
    company: "Lupin Biotech",
    companyLogo: "💊",
    companyColor: "#D32F2F",
    role: "QA Executive - Biologics",
    experience: 2,
    location: "Pune, India",
    employmentType: "Full Time",
    skills: ["Batch Release Documentation", "Deviation CAPA", "Audit Readiness"],
    actualCTC: 9.5,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ Lupin Pune biomanufacturing facility.",
      "✓ Strict US FDA regulatory audit compliance.",
      "✓ Solid domestic pharma benefits."
    ]
  },
  {
    id: "biotech-16",
    departmentId: "biotech",
    company: "TCS",
    companyLogo: "🏢",
    companyColor: "#111111",
    role: "System Engineer - Healthcare Informatics",
    experience: 0,
    location: "Kolkata, India",
    employmentType: "Full Time",
    skills: ["Python", "SQL", "HL7/FHIR Protocol"],
    actualCTC: 3.6,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Healthcare IT interoperability project for US hospital networks.",
      "✓ Mass recruiter entry salary for biotech branch.",
      "✓ Transition into health-tech IT consulting."
    ]
  },

  // ==========================================
  // 18. BIOMEDICAL ENGINEERING - 16 PROFILES
  // ==========================================
  {
    id: "biomed-1",
    departmentId: "biomed",
    company: "Medtronic",
    companyLogo: "🫀",
    companyColor: "#002554",
    role: "Senior Cardiac Device R&D Engineer",
    experience: 4,
    location: "Hyderabad, India",
    employmentType: "Hybrid",
    skills: ["Pacemaker Firmware", "Biocompatible Materials", "ISO 13485", "Embedded C"],
    actualCTC: 32.0,
    difficulty: "Hard",
    tier: "Global MNC",
    insights: [
      "✓ World's largest medical device company Medtronic R&D hub Hyderabad.",
      "✓ Implantable cardiac pacemaker sensor firmware & lead biocompatibility.",
      "✓ Industry leader healthcare MNC package."
    ]
  },
  {
    id: "biomed-2",
    departmentId: "biomed",
    company: "GE HealthCare",
    companyLogo: "🩺",
    companyColor: "#5E2750",
    role: "MRI Systems Reconstruction Specialist",
    experience: 3,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["C++", "Fourier Transform Reconstruction", "DICOM Standard", "GPU CUDA"],
    actualCTC: 29.5,
    difficulty: "Hard",
    tier: "Global MNC",
    insights: [
      "✓ GE Healthcare John F Welch Tech Centre Bangalore flagship lab.",
      "✓ Real-time magnetic resonance image (MRI) k-space reconstruction algorithms.",
      "✓ High stock options and healthcare benefits."
    ]
  },
  {
    id: "biomed-3",
    departmentId: "biomed",
    company: "Siemens Healthineers",
    companyLogo: "🩻",
    companyColor: "#EB780A",
    role: "CT Scanner Embedded Software Eng",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["C++", "RTOS", "Radiation X-Ray Control", "CANbus Medical"],
    actualCTC: 22.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ Siemens Healthineers Bangalore medical imaging hub.",
      "✓ Sub-millimeter CT gantry rotation motion control.",
      "✓ European MNC stability and culture."
    ]
  },
  {
    id: "biomed-4",
    departmentId: "biomed",
    company: "Philips Healthcare",
    companyLogo: "💙",
    companyColor: "#0B5ED7",
    role: "Patient Monitor Algorithm Lead",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["ECG Signal Processing", "SpO2 Filters", "Python", "C++"],
    actualCTC: 20.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Philips Innovation Campus (PIC) Bangalore ICU monitoring division.",
      "✓ Vital sign arrhythmia detection algorithm development.",
      "✓ Great work life balance ratings."
    ]
  },
  {
    id: "biomed-5",
    departmentId: "biomed",
    company: "Stryker",
    companyLogo: "🦴",
    companyColor: "#FFB81C",
    role: "Orthopedic Implant CAD Engineer",
    experience: 2,
    location: "Gurgaon, India",
    employmentType: "Full Time",
    skills: ["Creo", "Titanium 3D Printing", "ISO 14971 Risk", "FEA Joint Stress"],
    actualCTC: 18.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Stryker Global Technology Center Gurgaon.",
      "✓ Total knee replacement 3D printed porous titanium implants.",
      "✓ US medical MNC compensation scale."
    ]
  },
  {
    id: "biomed-6",
    departmentId: "biomed",
    company: "Abbott Laboratories",
    companyLogo: "🩸",
    companyColor: "#0072CE",
    role: "Continuous Glucose Monitor Specialist",
    experience: 1,
    location: "Mumbai, India",
    employmentType: "Full Time",
    skills: ["Subcutaneous Sensor", "BLE Telemetry", "FDA 510(k)", "Python"],
    actualCTC: 15.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ FreeStyle Libre CGM sensor technical support & quality.",
      "✓ Direct campus recruit placement offer.",
      "✓ High growth diabetes care market segment."
    ]
  },
  {
    id: "biomed-7",
    departmentId: "biomed",
    company: "Boston Scientific",
    companyLogo: "🫀",
    companyColor: "#003366",
    role: "Stent Quality & Regulatory Eng",
    experience: 1,
    location: "Gurgaon, India",
    employmentType: "Full Time",
    skills: ["Coronary Stents", "CE Mark Documentation", "CAPA", "Materials"],
    actualCTC: 14.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Drug-eluting stent manufacturing & regulatory filing.",
      "✓ Boston Scientific Gurgaon R&D center.",
      "✓ Excellent medical insurance coverage."
    ]
  },
  {
    id: "biomed-8",
    departmentId: "biomed",
    company: "Trivitron Healthcare",
    companyLogo: "🔬",
    companyColor: "#E31837",
    role: "Field Service Biomedical Engineer",
    experience: 0,
    location: "Chennai, India",
    employmentType: "Full Time",
    skills: ["Ultrasound Calibration", "Dialysis Maintenance", "Multimeter"],
    actualCTC: 5.5,
    difficulty: "Easy",
    tier: "Leading Startup",
    insights: [
      "✓ Indian medical device manufacturing pioneer Chennai.",
      "✓ Hospital radiology & ICU equipment preventive maintenance.",
      "✓ Practical field hands-on experience."
    ]
  },
  {
    id: "biomed-9",
    departmentId: "biomed",
    company: "Agilent Technologies",
    companyLogo: "📊",
    companyColor: "#008542",
    role: "Clinical Pathology Software Eng",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["C# .NET", "Automated Slide Staining", "Image Analysis", "SQL"],
    actualCTC: 19.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Agilent cancer diagnostic instrument software.",
      "✓ Automated tissue slide image processing.",
      "✓ Stable US MNC work culture."
    ]
  },
  {
    id: "biomed-10",
    departmentId: "biomed",
    company: "Mindray Medical",
    companyLogo: "🩺",
    companyColor: "#CC0000",
    role: "Patient Monitor Application Specialist",
    experience: 1,
    location: "Delhi NCR, India",
    employmentType: "Full Time",
    skills: ["Anesthesia Workstations", "ICU Setup", "Doctor Training"],
    actualCTC: 9.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Fast growing global medical device manufacturer.",
      "✓ Hospital OT and ICU equipment setup.",
      "✓ Sales performance bonus incentives."
    ]
  },
  {
    id: "biomed-11",
    departmentId: "biomed",
    company: "Apollo Hospitals Tech",
    companyLogo: "🏥",
    companyColor: "#006699",
    role: "Clinical Engineer Lead",
    experience: 2,
    location: "Chennai, India",
    employmentType: "Full Time",
    skills: ["Hospital Asset Management", "JCI Accreditation", "Safety Audits"],
    actualCTC: 8.5,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ Apollo Hospitals flagship Chennai clinical engineering team.",
      "✓ NABH & JCI international healthcare safety compliance.",
      "✓ Hospital management career track."
    ]
  },
  {
    id: "biomed-12",
    departmentId: "biomed",
    company: "Johnson & Johnson MedTech",
    companyLogo: "🩹",
    companyColor: "#D51900",
    role: "Surgical Robotics Support Eng",
    experience: 3,
    location: "Mumbai, India",
    employmentType: "Full Time",
    skills: ["Ethicon Surgery Tools", "Robotic Arm Assist", "Surgeon Training"],
    actualCTC: 24.0,
    difficulty: "Medium",
    tier: "Global MNC",
    insights: [
      "✓ J&J MedTech laparoscopic surgical robotics division.",
      "✓ Direct operating theater surgeon assistance during trial runs.",
      "✓ Premium J&J benefits."
    ]
  },
  {
    id: "biomed-13",
    departmentId: "biomed",
    company: "B. Braun Medical",
    companyLogo: "💉",
    companyColor: "#007A33",
    role: "Infusion Pump Firmware Engineer",
    experience: 1,
    location: "New Delhi, India",
    employmentType: "Full Time",
    skills: ["Embedded C", "Peristaltic Dosing", "ISO 60601", "IEC 62304"],
    actualCTC: 11.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ German medical giant's smart IV infusion pump software.",
      "✓ High accuracy micro-liter medication dosing safety.",
      "✓ Good European MNC stability."
    ]
  },
  {
    id: "biomed-14",
    departmentId: "biomed",
    company: "Perfint Healthcare",
    companyLogo: "🎯",
    companyColor: "#003366",
    role: "Robotics Biopsy Navigation Engineer",
    experience: 1,
    location: "Chennai, India",
    employmentType: "Full Time",
    skills: ["CT Guided Needle Navigation", "C++", "OpenCV Medical"],
    actualCTC: 10.0,
    difficulty: "Easy",
    tier: "Leading Startup",
    insights: [
      "✓ Chennai startup developing CT-guided cancer biopsy robots.",
      "✓ Sub-millimeter needle positioning software.",
      "✓ Hands on innovative medical tech."
    ]
  },
  {
    id: "biomed-15",
    departmentId: "biomed",
    company: "Terumo Penpol",
    companyLogo: "🩸",
    companyColor: "#00A651",
    role: "Blood Bag & Centrifuge R&D Eng",
    experience: 0,
    location: "Trivandrum, India",
    employmentType: "Full Time",
    skills: ["Polymer Biocompatibility", "Sterile Welding", "Testing"],
    actualCTC: 5.8,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Japanese Terumo group blood bag manufacturing unit Trivandrum.",
      "✓ Fresher entry level biomedical offer.",
      "✓ Stable manufacturing environment."
    ]
  },
  {
    id: "biomed-16",
    departmentId: "biomed",
    company: "Wipro GE Healthcare",
    companyLogo: "⚙️",
    companyColor: "#005596",
    role: "Biomedical Systems Trainee",
    experience: 0,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["X-Ray Assembly", "Testing", "Python Basics"],
    actualCTC: 4.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Joint venture manufacturing plant Bangalore.",
      "✓ Production line assembly & quality testing shadow.",
      "✓ Entry level benchmark for fresh biomedical graduates."
    ]
  },

  // ==========================================
  // 19. FASHION TECH & AUTOMATION - 16 PROFILES
  // ==========================================
  {
    id: "fashion-1",
    departmentId: "fashion",
    company: "Nike Digital",
    companyLogo: "✔️",
    companyColor: "#000000",
    role: "Footwear 3D Generative Design Specialist",
    experience: 3,
    location: "Remote (India)",
    employmentType: "Remote",
    skills: ["Grasshopper Parametric", "Rhino 3D", "TPE Cushioning", "3D Knitting"],
    actualCTC: 36.0,
    difficulty: "Hard",
    tier: "Global MNC",
    isGolden: true,
    insights: [
      "✓ Nike Innovation Kitchen 3D printed sole cushioning parametric design.",
      "✓ Computational geometry applied to ergonomic athletic footwear.",
      "✓ Top tier international USD remote salary package."
    ]
  },
  {
    id: "fashion-2",
    departmentId: "fashion",
    company: "Myntra / Flipkart",
    companyLogo: "🛍️",
    companyColor: "#FF3F6C",
    role: "Virtual Fitting Room Tech Lead",
    experience: 3,
    location: "Bangalore, India",
    employmentType: "Hybrid",
    skills: ["Clo3D", "3D Avatar Simulation", "Three.js", "Python", "Computer Vision"],
    actualCTC: 31.0,
    difficulty: "Medium",
    tier: "High-Growth Unicorn",
    insights: [
      "✓ Myntra AR virtual try-on digital twin drape engine.",
      "✓ Real-time fabric gravity deformation and tension rendering.",
      "✓ High equity stock grant value."
    ]
  },
  {
    id: "fashion-3",
    departmentId: "fashion",
    company: "Aditya Birla Fashion & Retail (ABFRL)",
    companyLogo: "👔",
    companyColor: "#B8232A",
    role: "Smart Factory Automation Manager",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Automated Fabric Spreading", "Lectra Vector Cutters", "RFID Tracking", "Lean"],
    actualCTC: 16.5,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ Louis Philippe / Van Heusen automated garment plant.",
      "✓ CNC laser cutting & RFID automated bundle tracking.",
      "✓ Reliable domestic brand career track."
    ]
  },
  {
    id: "fashion-4",
    departmentId: "fashion",
    company: "Shahi Exports",
    companyLogo: "🧵",
    companyColor: "#003366",
    role: "Garment Production Automation Eng",
    experience: 1,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Juki Sewing Automation", "Time-Motion Study", "Line Balancing", "ERP"],
    actualCTC: 8.5,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ India's largest apparel exporter campus recruitment.",
      "✓ Automated robotic sewing station layout.",
      "✓ Great practical textile machinery exposure."
    ]
  },
  {
    id: "fashion-5",
    departmentId: "fashion",
    company: "Zara / Inditex Tech",
    companyLogo: "🖤",
    companyColor: "#000000",
    role: "Fast Fashion Supply Chain Analyst",
    experience: 2,
    location: "Gurgaon, India",
    employmentType: "Hybrid",
    skills: ["Demand Forecasting", "Python", "SQL", "RFID Inventory Automation"],
    actualCTC: 21.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Spanish retail fashion giant Inditex India office.",
      "✓ 15-day design-to-store ultra-fast supply chain analytics.",
      "✓ European retail MNC perks."
    ]
  },
  {
    id: "fashion-6",
    departmentId: "fashion",
    company: "Lectra Software",
    companyLogo: "✂️",
    companyColor: "#CC0000",
    role: "Pattern CAD Software Consultant",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Lectra Modaris 3D", "Automated Marker Making", "Fabric Nesting ML"],
    actualCTC: 14.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ French CAD/CAM technology maker for fashion industry.",
      "✓ Machine learning algorithms for zero-waste fabric nesting.",
      "✓ Stable French MNC employment."
    ]
  },
  {
    id: "fashion-7",
    departmentId: "fashion",
    company: "Reliance Retail Fashion",
    companyLogo: "🛍️",
    companyColor: "#0A2540",
    role: "Smart Textile Technologist",
    experience: 1,
    location: "Mumbai, India",
    employmentType: "Full Time",
    skills: ["Conductive Yarns", "Phase Change Fabrics", "Textile Physical Testing"],
    actualCTC: 11.0,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ Reliance Trends / Ajio tech-textile R&D lab.",
      "✓ Moisture-wicking and antimicrobial fiber coatings.",
      "✓ Solid domestic retail compensation."
    ]
  },
  {
    id: "fashion-8",
    departmentId: "fashion",
    company: "Browzwear",
    companyLogo: "👚",
    companyColor: "#7B2CBF",
    role: "3D Digital Garment Developer",
    experience: 1,
    location: "Remote (India)",
    employmentType: "Remote",
    skills: ["V-Stitcher", "Loties", "PBR Texture Mapping", "Substance Painter"],
    actualCTC: 18.0,
    difficulty: "Easy",
    tier: "High-Growth Unicorn",
    insights: [
      "✓ Pioneer in 3D fashion design and digital sampling software.",
      "✓ Physically based rendering (PBR) realistic fabric textures.",
      "✓ 100% remote job perk."
    ]
  },
  {
    id: "fashion-9",
    departmentId: "fashion",
    company: "Arvind Limited",
    companyLogo: "👖",
    companyColor: "#1B365D",
    role: "Sustainable Dyeing Process Lead",
    experience: 2,
    location: "Ahmedabad, India",
    employmentType: "Full Time",
    skills: ["Waterless Indigo Dyeing", "Supercritical CO2", "Effluent Zero Discharge"],
    actualCTC: 10.0,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ India's denim pioneer Arvind Mills Ahmedabad.",
      "✓ Eco-friendly waterless denim indigo dyeing innovation.",
      "✓ Long term textile manufacturing career."
    ]
  },
  {
    id: "fashion-10",
    departmentId: "fashion",
    company: "Avery Dennison",
    companyLogo: "🏷️",
    companyColor: "#D32F2F",
    role: "Apparel RFID Tagging Architect",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["UHF RFID Inlays", "Encoder Automation", "Supply Chain Traceability"],
    actualCTC: 15.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ World leader in smart labels and packaging.",
      "✓ High speed RFID tag encoding machinery for global brands.",
      "✓ Stable US MNC work culture."
    ]
  },
  {
    id: "fashion-11",
    departmentId: "fashion",
    company: "Gokaldas Exports",
    companyLogo: "👚",
    companyColor: "#003366",
    role: "Industrial Engineering Executive",
    experience: 0,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Standard Allowed Minutes (SAM)", "GSD Method", "Workstation Layout"],
    actualCTC: 5.8,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ Leading apparel manufacturer campus placement.",
      "✓ General Sewing Data (GSD) motion study optimization.",
      "✓ Factory floor management entry."
    ]
  },
  {
    id: "fashion-12",
    departmentId: "fashion",
    company: "Lululemon / Partner",
    companyLogo: "🧘‍♀️",
    companyColor: "#D31334",
    role: "Athletic Wear Quality Lead",
    experience: 2,
    location: "Bangalore, India",
    employmentType: "Full Time",
    skills: ["Four-Way Stretch Testing", "Seam Bond Strength", "ISO Fabric Standards"],
    actualCTC: 17.0,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Canadian activewear giant sourcing office.",
      "✓ Ultrasonic seam welding quality audits.",
      "✓ Great brand discounts and wellness perks."
    ]
  },
  {
    id: "fashion-13",
    departmentId: "fashion",
    company: "Coats Group",
    companyLogo: "🧵",
    companyColor: "#0072CE",
    role: "Thread Chemical Formulation Eng",
    experience: 1,
    location: "Madurai, Tamil Nadu",
    employmentType: "Full Time",
    skills: ["High Tenacity Filament", "Lubrication Coatings", "Dye House Automation"],
    actualCTC: 9.2,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ World's leading industrial thread manufacturer UK MNC.",
      "✓ High-speed automated embroidery thread lubricity.",
      "✓ Subsidized corporate perks."
    ]
  },
  {
    id: "fashion-14",
    departmentId: "fashion",
    company: "TCS",
    companyLogo: "🏢",
    companyColor: "#111111",
    role: "System Engineer - Retail Tech",
    experience: 0,
    location: "Chennai, India",
    employmentType: "Full Time",
    skills: ["Python", "SQL", "E-Commerce Basics"],
    actualCTC: 3.6,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ TCS retail and consumer goods domain onboarding.",
      "✓ Mass recruiter entry salary benchmark.",
      "✓ IT service conversion for fashion tech graduates."
    ]
  },
  {
    id: "fashion-15",
    departmentId: "fashion",
    company: "Kewal Kiran Clothing (Killer)",
    companyLogo: "👖",
    companyColor: "#000000",
    role: "Merchandising Automation Officer",
    experience: 1,
    location: "Mumbai, India",
    employmentType: "Full Time",
    skills: ["Costing ERP", "Fabric Sourcing", "Vendor Management"],
    actualCTC: 7.8,
    difficulty: "Easy",
    tier: "Core Industrial",
    insights: [
      "✓ Killer Jeans maker Kewal Kiran Mumbai office.",
      "✓ Automated seasonal collection range planning.",
      "✓ Good domestic brand training."
    ]
  },
  {
    id: "fashion-16",
    departmentId: "fashion",
    company: "Gerber Technology / Lectra",
    companyLogo: "✂️",
    companyColor: "#003399",
    role: "Automated Cutting Machine Engineer",
    experience: 2,
    location: "Gurgaon, India",
    employmentType: "Full Time",
    skills: ["CNC Knife Calibration", "Vacuum Conveyor", "Servo Drives"],
    actualCTC: 12.5,
    difficulty: "Easy",
    tier: "Global MNC",
    insights: [
      "✓ Automated multi-ply conveyor cutting machine maintenance.",
      "✓ Factory floor technical support for major exporters.",
      "✓ Reliable field service role."
    ]
  }
];
