/**
 * Sheikh Md Aarif Al Zubair - Resume Data Source of Truth (Updated)
 */

export const personalInfo = {
  name: "Sheikh Md Aarif Al Zubair",
  title: "Autonomous UAV, RL & Embedded Robotics Engineer",
  subtitle: "First-Principles Deep Learning & Edge Hardware Systems",
  email: "skmd.aarif5391@gmail.com",
  phone: "+91 99102 24613",
  location: "New Delhi / Phagwara, India",
  github: "https://github.com/skmdaarif",
  githubHandle: "skmdaarif",
  linkedin: "https://linkedin.com/in/sheikh-md-aarif-al-zubair-a290b337a",
  bio: "Computer Science engineer with strong expertise in Autonomous Systems, Reinforcement Learning & First-Principles Neural Networks combined with Embedded Robotics, Microcontrollers (ESP32) & C++/Python Engineering. Research intern at IIT Delhi under Prof. Brejesh Lall & Dr. Shoaib M. Nasti.",
  stats: [
    { label: "B.Tech CSE CGPA (LPU)", value: 9.80, suffix: "", isDecimal: true },
    { label: "College Hackathon Finalist", value: 15, prefix: "#", suffix: " (50+ Teams)" },
    { label: "LeetCode Complex Algos", value: 20, suffix: "+" },
    { label: "IIT Delhi UAV Research", value: "Intern", isText: true, subtext: "Prof. Brejesh Lall Lab" }
  ]
};

export const researchExperience = {
  institution: "Indian Institute of Technology Delhi",
  role: "Research Intern – Autonomous UAV Trajectory Optimization (Prof. Brejesh Lall & Dr. Shoaib M. Nasti)",
  period: "Jun 2026 – Jul 2026",
  certificate: "Verified Certificate Awarded",
  highlights: [
    {
      title: "Multi-Layer Perceptron (MLP) From First Principles (1.11 × 10⁻⁸ MSE)",
      desc: "Implemented an MLP from scratch in Python/NumPy (N = 40,401 samples) across 7 mathematical topographies, achieving 1.11 × 10⁻⁸ MSE and validating gradients via finite-difference checking (< 10⁻⁷ relative error)."
    },
    {
      title: "Scalable Benchmarking & Regularization Suite",
      desc: "Engineered a scalable benchmarking framework incorporating 80/20 splits, Adam optimization, gradient clipping, L₂ regularization, and learning rate schedulers across 9 hyperparameter configurations."
    },
    {
      title: "11 Discrete & Model-Based RL Agents",
      desc: "Evaluated 11 tabular, eligibility trace, and model-based RL agents (Dyna-Q+, Prioritized Sweeping min-heap queues, Double Q-Learning) on discrete MDPs, benchmarking TD-error variance and convergence."
    },
    {
      title: "Autonomous UAV Swarms Literature Synthesis",
      desc: "Authored a literature review synthesizing Goal-Conditioned RL (GCRL), POMDP belief reconstruction under electronic warfare (EW) jamming, and MAPPO continuous policy gradients for autonomous UAV swarms."
    }
  ],
  tech: ["Python", "NumPy", "Gymnasium", "Dyna-Q+", "Prioritized Sweeping", "Double Q-Learning", "GCRL", "MAPPO Swarms", "Finite-Difference Checking"]
};

export const projects = [
  {
    id: "password-generator",
    title: "Secure Password Generator (CLI + GUI)",
    category: "Desktop & Cryptography",
    period: "Mar 2026 – Apr 2026",
    summary: "Cross-platform desktop password generation software supporting both command-line interface (CLI) and Tkinter GUI. Built with Python's native CSPRNG secrets module for high-entropy randomization.",
    bullets: [
      "Engineered a cross-platform desktop password generation tool supporting both Command Line Interface (CLI) and Tkinter Graphical User Interface (GUI).",
      "Implemented cryptographically secure password generation logic utilizing Python’s native secrets module for robust entropy generation.",
      "Automated multi-platform production application builds for Linux, Windows, and macOS operating systems via GitHub Actions CI/CD pipelines.",
      "Packaged standalone distribution binaries using PyInstaller and deployed a public-facing project landing page hosted on GitHub Pages."
    ],
    tech: ["Python", "Tkinter", "PyInstaller", "GitHub Actions", "CI/CD", "Git", "GitHub Pages"],
    metrics: [
      { label: "Entropy Standard", val: "CSPRNG (secrets)" },
      { label: "CI/CD Targets", val: "Linux, Win, macOS" },
      { label: "Deployment", val: "PyInstaller & GH Pages" }
    ],
    github: "https://github.com/skmdaarif"
  },
  {
    id: "environmental-rover",
    title: "Semi-Autonomous Environmental Surveillance & Fire Response Rover",
    category: "Robotics, Edge AI & IoT",
    period: "Feb 2026 – Mar 2026",
    summary: "Embedded robotic rover on ESP32 executing real-time navigation, environmental sensing, Mahalanobis multivariate anomaly detection, tri-directional IR flame localization, and active fire suppression payloads.",
    bullets: [
      "Architected a low-cost embedded robotic rover on a single ESP32 microcontroller coordinating real-time navigation, environmental sensing, and active suppression payloads.",
      "Integrated multi-sensor array acquiring PM1.0, PM2.5, PM10 particulate matter, volatile organic compounds (VOCs), temperature, and humidity, implementing Mahalanobis distance covariance-aware statistical algorithms for real-time anomaly detection.",
      "Implemented directional flame localization using a tri-directional IR sensor array coupled with real-time sensor fusion logic for target tracking.",
      "Transmitted continuous atmospheric telemetry and anomaly alerts over Wi-Fi to a Blynk IoT cloud server for remote visualization.",
      "Engineered active fire response payload featuring a MOSFET-switched water pump and PWM servo-controlled oscillatory spray mechanism with automated safety state-transitions.",
      "Designed robust hardware power management using LM2596 buck converter regulation, IRF540N MOSFET switches, and flyback diode snubbers to prevent voltage spikes under load."
    ],
    tech: ["Embedded C++", "ESP32", "Statistical Modeling (Mahalanobis Distance)", "PMS7003", "MQ135", "DHT22", "IR Flame Sensors", "Blynk IoT", "Wi-Fi", "PWM", "MOSFET Circuitry", "LM2596"],
    metrics: [
      { label: "Microcontroller", val: "ESP32 Dual-Core" },
      { label: "Sensors", val: "PMS7003, MQ135, DHT22, IR Flame" },
      { label: "Anomaly Metric", val: "Mahalanobis Covariance" }
    ],
    github: null
  },
  {
    id: "home-automation",
    title: "Smart Home Automation System",
    category: "Smart Hardware & IoT",
    period: "Apr 2025 – Jun 2025",
    summary: "WiFi-enabled home automation hardware system for remote appliance management over mobile application dashboards, integrating relay modules with Blynk IoT cloud infrastructure.",
    bullets: [
      "Developed a WiFi-enabled home automation system for remote appliance control via a mobile application.",
      "Integrated relay modules with Blynk IoT for real-time device management and continuous state feedback.",
      "Implemented communication between embedded hardware and mobile interface over local networks and internet interfaces."
    ],
    tech: ["Embedded C++", "Internet of Things", "ESP32", "Blynk IoT", "Relay Systems"],
    metrics: [
      { label: "Microcontroller", val: "ESP32 32-bit" },
      { label: "Protocol", val: "WiFi / Blynk IoT" },
      { label: "Hardware Interface", val: "Multi-Channel Relay" }
    ],
    github: null
  }
];

export const skillsData = [
  { name: "Python", category: "languages", level: "Expert", desc: "NumPy, Secrets, Tkinter, PyInstaller, First-principles ML", badge: "CodeTantra Certified" },
  { name: "C++ & C", category: "languages", level: "Advanced", desc: "ESP32 firmware, PWM, sensor fusion, memory management", badge: "NeoColab Certified" },
  { name: "Kotlin, JS & SQL", category: "languages", level: "Proficient", desc: "Android Studio apps, interactive frontend, PostgreSQL", badge: "Full-Stack Ready" },
  { name: "Reinforcement Learning", category: "ml", level: "Specialized", desc: "Q-Learning, DQN, Dyna-Q+, Prioritized Sweeping, Double Q", badge: "IIT Delhi Lab" },
  { name: "Neural Networks (MLP)", category: "ml", level: "Advanced", desc: "MLP from scratch, Finite-difference (<10⁻⁷), 1.11×10⁻⁸ MSE", badge: "First-Principles" },
  { name: "Statistical Anomaly Detection", category: "ml", level: "Advanced", desc: "Mahalanobis distance covariance modeling for IoT", badge: "Edge AI" },
  { name: "ESP32 & Arduino", category: "embedded", level: "Specialized", desc: "Firmware, Arduino IDE, Blynk IoT, Wi-Fi telemetry", badge: "Hardware IoT" },
  { name: "Sensors & Actuators", category: "embedded", level: "Advanced", desc: "MQ135, DHT22, PMS7003, IR Flame, Motor Control", badge: "Robotics Telemetry" },
  { name: "Power Circuits & MOSFETs", category: "embedded", level: "Advanced", desc: "LM2596 buck regulation, IRF540N switches, snubbers", badge: "Hardware Design" },
  { name: "Web & Backend", category: "web", level: "Proficient", desc: "FastAPI, PostgreSQL, HTML5, CSS3, REST APIs", badge: "Backend DB" },
  { name: "Tools, CAD & IEEE Docs", category: "tools", level: "Comprehensive", desc: "GitHub CI/CD, SolidWorks, AutoCAD, IEEE Documentation", badge: "Udemy Certified" }
];

export const education = [
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology – Computer Science and Engineering",
    period: "Aug 2025 – Present",
    location: "Phagwara, Punjab",
    score: "CGPA: 9.80 / 10.0",
    isPrimary: true
  },
  {
    institution: "C. R. Oasis Convent Sr Sec School",
    degree: "Senior Secondary Education (Class XII)",
    period: "Apr 2022 – Mar 2024",
    location: "New Delhi, India",
    score: "Percentage: 71%"
  },
  {
    institution: "Dhruva Public School",
    degree: "Secondary Education (Class X)",
    period: "Apr 2020 – Mar 2022",
    location: "New Delhi, India",
    score: "Percentage: 92%"
  }
];

export const certifications = [
  { name: "Python Programming Certification", issuer: "CodeTantra", date: "Jan 2026" },
  { name: "Complete Git & GitHub Bootcamp", issuer: "Udemy", date: "Dec 2025" },
  { name: "C Programming Certification", issuer: "NeoColab", date: "Jun 2026" }
];

export const achievements = [
  {
    title: "Top 15 College Hackathon Finalist",
    desc: "Ranked Top 15 among 50+ participating teams in a university-level hackathon with an innovative web solution prototype."
  },
  {
    title: "LeetCode Data Structures & Algorithms",
    desc: "Solved 20+ complex algorithmic challenges across Linked Lists, Binary Search, and Heaps."
  }
];
