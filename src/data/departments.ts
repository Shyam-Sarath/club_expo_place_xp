export interface Department {
  id: string;
  name: string;
  shortCode: string;
  iconName: string;
  color: string;
  accentGradient: string;
  description: string;
}

export const DEPARTMENTS: Department[] = [
  {
    id: "cse",
    name: "Computer Science & Engineering",
    shortCode: "CSE",
    iconName: "Code2",
    color: "#6D5DF6",
    accentGradient: "from-[#6D5DF6] to-[#7C3AED]",
    description: "Core algorithms, software architecture, full-stack, and high-scale systems."
  },
  {
    id: "aiml",
    name: "CSE (AI & Machine Learning)",
    shortCode: "AI & ML",
    iconName: "BrainCircuit",
    color: "#00E5FF",
    accentGradient: "from-[#00E5FF] to-[#3B82F6]",
    description: "Deep learning models, neural networks, natural language processing, and computer vision."
  },
  {
    id: "ds",
    name: "CSE (Data Science)",
    shortCode: "Data Science",
    iconName: "Database",
    color: "#10B981",
    accentGradient: "from-[#10B981] to-[#059669]",
    description: "Big data analytics, predictive modeling, data pipelines, and quantitative intelligence."
  },
  {
    id: "cyber",
    name: "CSE (Cyber Security)",
    shortCode: "Cyber Security",
    iconName: "ShieldAlert",
    color: "#F43F5E",
    accentGradient: "from-[#F43F5E] to-[#E11D48]",
    description: "Penetration testing, cryptography, cloud security architecture, and threat intelligence."
  },
  {
    id: "airobotics",
    name: "CSE (AI & Robotics)",
    shortCode: "AI & Robotics",
    iconName: "Bot",
    color: "#EC4899",
    accentGradient: "from-[#EC4899] to-[#DB2777]",
    description: "Autonomous agents, ROS, sensor fusion, kinodynamics, and computer vision."
  },
  {
    id: "it",
    name: "Information Technology & Software",
    shortCode: "IT",
    iconName: "Laptop",
    color: "#8B5CF6",
    accentGradient: "from-[#8B5CF6] to-[#6D5DF6]",
    description: "Enterprise tech, cloud computing, DevOps, microservices, and IT infrastructure."
  },
  {
    id: "ece",
    name: "Electronics & Communication Engg",
    shortCode: "ECE",
    iconName: "Cpu",
    color: "#F59E0B",
    accentGradient: "from-[#F59E0B] to-[#D97706]",
    description: "Signal processing, wireless communication, RF systems, and semiconductor engineering."
  },
  {
    id: "vlsi",
    name: "ECE (VLSI Design)",
    shortCode: "VLSI",
    iconName: "Microchip",
    color: "#3B82F6",
    accentGradient: "from-[#3B82F6] to-[#1D4ED8]",
    description: "ASIC/FPGA chip design, RTL verification, physical design, and silicon tapeout."
  },
  {
    id: "embedded",
    name: "ECE (Embedded Systems)",
    shortCode: "Embedded",
    iconName: "CircuitBoard",
    color: "#14B8A6",
    accentGradient: "from-[#14B8A6] to-[#0D9488]",
    description: "RTOS kernel development, microcontrollers, IoT firmware, and automotive ECUs."
  },
  {
    id: "eee",
    name: "Electrical & Electronics Engg",
    shortCode: "EEE",
    iconName: "Zap",
    color: "#EAB308",
    accentGradient: "from-[#EAB308] to-[#CA8A04]",
    description: "Power electronics, smart grids, renewable energy systems, and high voltage drive."
  },
  {
    id: "ecm",
    name: "Electronics & Computer Engg",
    shortCode: "ECM",
    iconName: "Radio",
    color: "#06B6D4",
    accentGradient: "from-[#06B6D4] to-[#0891B2]",
    description: "Intersection of computer architecture, network protocols, and embedded hardware."
  },
  {
    id: "mech",
    name: "Mechanical Engineering",
    shortCode: "Mechanical",
    iconName: "Wrench",
    color: "#EF4444",
    accentGradient: "from-[#EF4444] to-[#B91C1C]",
    description: "CAD/CAM, thermodynamics, structural mechanics, fluid dynamics, and aerospace."
  },
  {
    id: "ev",
    name: "Mechanical (Electric Vehicles)",
    shortCode: "EV Tech",
    iconName: "BatteryCharging",
    color: "#84CC16",
    accentGradient: "from-[#84CC16] to-[#65A30D]",
    description: "EV powertrains, battery management systems (BMS), thermal dynamics, and motor drives."
  },
  {
    id: "mechatronics",
    name: "Mechatronics Engineering",
    shortCode: "Mechatronics",
    iconName: "Cog",
    color: "#A855F7",
    accentGradient: "from-[#A855F7] to-[#7E22CE]",
    description: "Industrial automation, PLC/SCADA, pneumatics, hydraulic control, and cyber-physical systems."
  },
  {
    id: "civil",
    name: "Civil Engineering",
    shortCode: "Civil",
    iconName: "Building2",
    color: "#F97316",
    accentGradient: "from-[#F97316] to-[#C2410C]",
    description: "Structural engineering, BIM, smart infrastructure, transportation, and geotechnical design."
  },
  {
    id: "chem",
    name: "Chemical Engineering",
    shortCode: "Chemical",
    iconName: "FlaskConical",
    color: "#06B6D4",
    accentGradient: "from-[#06B6D4] to-[#0284C7]",
    description: "Process engineering, petrochemicals, pharmaceuticals, reaction engineering, and catalysis."
  },
  {
    id: "biotech",
    name: "Biotechnology",
    shortCode: "Biotech",
    iconName: "Dna",
    color: "#10B981",
    accentGradient: "from-[#10B981] to-[#047857]",
    description: "Genetic engineering, bioinformatics, bioprocess technology, and molecular diagnostics."
  },
  {
    id: "biomed",
    name: "Biomedical Engineering",
    shortCode: "Biomedical",
    iconName: "HeartPulse",
    color: "#E11D48",
    accentGradient: "from-[#E11D48] to-[#BE123C]",
    description: "Medical instrumentation, bio-sensors, neural prosthetics, and healthcare imaging."
  },
  {
    id: "fashion",
    name: "Fashion Tech & Automation",
    shortCode: "Fashion Tech",
    iconName: "Sparkles",
    color: "#D946EF",
    accentGradient: "from-[#D946EF] to-[#A21CAF]",
    description: "Smart textiles, 3D garment simulation, sustainable supply chain, and retail automation."
  }
];
