export const personalInfo = {
  name: 'Prem Sai Munagala',
  shortName: 'Prem Sai',
  title: 'Cyber Security Analyst & Python Developer',
  tagline:
    'Defending digital assets through advanced Ethical Hacking and VAPT, Systems defense, and Custom Python Security automation.',
  email: 'munagalapremsai@gmail.com',
  phone: '+91 74168 88675',
  linkedin: 'https://www.linkedin.com/in/prem-sai-munagala-a0257b414/',
  github: 'https://github.com/munagalapremsai',
  location: 'Vadodara, Gujarat, India',
  resumeUrl: '/resume.pdf',
  status: '4th Year B.Tech Student · Open to Opportunities',
}

export const aboutText = `I am a Cyber Security Analyst & Python Developer skilled in Ethical Hacking, VAPT, systems defense, and threat analysis. I specialize in building custom Python automation tools to identify vulnerabilities, streamline security workflows, and proactively secure digital assets against modern threats.`

export const education = [
  {
    degree: 'B.Tech — Computer Science & Engineering (Cyber Security)',
    institution: 'Parul Institute of Engineering and Technology',
    location: 'Vadodara, Gujarat',
    period: 'July 2023 – June 2027',
    score: 'CGPA: 6.72 / 10.0',
    highlight: 'Currently in 4th Year',
    description:
      'Focused engineering curriculum covering advanced cybersecurity methodologies, cryptography, network security, web application security, and secure software development.',
  },
  {
    degree: 'Intermediate (12th Standard)',
    institution: 'SR Junior College, Pidthapolur',
    location: 'Nellore, Andhra Pradesh',
    period: '2019 – 2021',
    score: 'Score: 66.6% (666 / 1000)',
    highlight: null,
    description: 'Higher Secondary Education in the MPC stream (Mathematics, Physics, Chemistry).',
  },
  {
    degree: 'SSC (10th Standard)',
    institution: 'SRI VBR EM High School, Dhanalakshmi Puram',
    location: 'Andhra Pradesh',
    period: '2018 – 2019',
    score: 'GPA: 10.0 / 10.0',
    highlight: 'Perfect Score',
    description: 'Secondary School Certificate with perfect grades across all subjects.',
  },
]

export const experience = [
  {
    role: 'Ethical Hacking & Penetration Testing Intern',
    company: 'Parul Institute of Engineering and Technology',
    location: 'Vadodara, Gujarat',
    period: 'January 2026 – March 2026',
    points: [
      'Conducted comprehensive web application penetration testing, identifying critical OWASP Top 10 vulnerabilities (including SQLi and XSS) and defining mitigation roadmaps.',
      'Designed threat models and orchestrated architectural security reviews for multi-tier microservices to prevent privilege escalation.',
      'Engineered secure full-stack web applications utilizing Python, NumPy, Pandas, and Oracle SQL following strict MVC design patterns.',
      'Built and integrated robust RESTful APIs, securing them against common API vulnerabilities (broken authorization, rate limits).',
    ],
  },
]

export const projects = [
  {
    title: 'Email Security Gateway with Threat Intelligence & Digital Forensics',
    subtitle: 'Enterprise-Grade Email Threat Detection System',
    tags: ['Python', 'Flask', 'Chrome Extension', 'VirusTotal API', 'SQLite', 'REST API'],
    description:
      'Architected an Enterprise Email Security Gateway to overcome limitations of traditional rule-based spam filters against zero-day phishing and Business Email Compromise attacks.',
    highlights: [
      'Built a custom Chrome extension for endpoint data acquisition from webmail interfaces, securely transmitting message metrics via API.',
      'Developed a multi-layered Python & Flask backend parsing headers to validate SPF, DKIM, and DMARC protocols.',
      'Isolated Indicators of Compromise (domains, URLs, attachment hashes) and cross-referenced against global threat feeds via VirusTotal V3 API.',
      'Implemented a modular Risk-Scoring Algorithm automating Safe, Suspicious, or Malicious verdicts.',
      'Designed a Forensics-by-Design framework with asynchronous SQLite repository for immutable Chain of Custody logging.',
    ],
    featured: true,
  },
  {
    title: 'Automated Vulnerability Scanner & Reconnaissance Tool',
    subtitle: 'Python-based Host Port Scanner & CVE Mapper',
    tags: ['Python', 'Socket API', 'Vulnerability Databases', 'JSON', 'Multi-threading'],
    description:
      'Developed a lightweight Python tool designed to automate host discovery, scan ports for running services, and query external vulnerability databases to map service versions to known CVEs.',
    highlights: [
      'Implemented a multi-threaded TCP connect scanner capable of scanning 1000+ ports in under 15 seconds.',
      'Parsed service banners to identify server versions (e.g., Apache, SSH) and automated REST requests to fetch CVE lists.',
      'Generated clean, audit-ready reports detailing discovered vulnerabilities categorized by CVSS severity.',
    ],
    featured: false,
  },
  {
    title: 'Secure JWT-Based API Gateway with Rate Limiting',
    subtitle: 'Defensive API Shield & Access Controller',
    tags: ['Python', 'FastAPI', 'Redis', 'JWT', 'Docker'],
    description:
      'Engineered a secure API Gateway that acts as a reverse proxy, handling authentication, routing, and defense mechanisms for microservices.',
    highlights: [
      'Designed stateless user authentication utilizing signed JSON Web Tokens (JWT) with secure key rotation.',
      'Built a Redis-backed sliding-window rate limiter to defend endpoints from brute-force attacks and DDoS attempts.',
      'Structured request validation filters to clean inputs, effectively blocking SQL injection and cross-site scripting patterns before reaching backend services.',
    ],
    featured: false,
  },
]

export const skills = {
  languages: ['Python', 'C', 'HTML5 & CSS3', 'JavaScript (ES6+)', 'Bootstrap', 'Oracle SQL'],
  frameworks: ['Django', 'Flask', 'FastAPI', 'NumPy', 'Pandas', 'Matplotlib'],
  tools: ['VS Code', 'PyCharm', 'Git', 'GitHub', 'Linux', 'Burp Suite'],
  security: [
    'Penetration Testing',
    'OWASP Top 10',
    'Threat Modeling',
    'Ethical Hacking',
    'SPF/DKIM/DMARC',
    'Digital Forensics',
    'Network Security',
  ],
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
