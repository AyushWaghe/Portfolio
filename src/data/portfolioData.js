export const profile = {
  name: "Ayush Waghe",
  title: "Java Backend Engineer",
  subtitle: "Spring Boot, React and Applied AI",
  email: "ayushwaghe23@gmail.com",
  phone: "+91 9561518432",
  location: "Mumbai, India",
  github: "https://github.com/AyushWaghe/",
  linkedin: "https://www.linkedin.com/in/ayush-waghe-033658303/",
  resume: "/resume/Ayush_Waghe_Resume.pdf",
  summary:
    "Systems Engineer at Tata Consultancy Services with hands-on experience in Java backend systems, automation frameworks, Spring Boot applications, event-driven services, and AI-enabled financial platforms."
};

export const navItems = ["About", "Skills", "Experience", "Projects", "Certifications", "Contact"];

export const education = [
  {
    institution: "Vellore Institute of Technology, Vellore",
    qualification: "Computer Science and Engineering",
    result: "CGPA 8.7, 2025"
  },
  {
    institution: "City Pride Junior College, Pune",
    qualification: "Class XII",
    result: "87% - Maharashtra State Board, 2021"
  },
  {
    institution: "City Pride School",
    qualification: "Class X",
    result: "95% - CBSE, 2019"
  }
];

export const skills = {
  Languages: [
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/java/java-original.svg", symbol: "Coffee" },
    { name: "SQL", symbol: "Database" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/javascript/javascript-original.svg", symbol: "Braces" }
  ],
  Backend: [
    { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/spring/spring-original.svg", symbol: "Leaf" },
    { name: "Spring MVC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/spring/spring-original.svg", symbol: "Route" },
    { name: "Spring Security", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/spring/spring-original.svg", symbol: "ShieldCheck" },
    { name: "Spring AI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/spring/spring-original.svg", symbol: "BrainCircuit" },
    { name: "Hibernate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/hibernate/hibernate-original.svg", symbol: "Database" },
    { name: "JPA", symbol: "Database" },
    { name: "REST APIs", symbol: "Braces" },
    { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/apachekafka/apachekafka-original.svg", symbol: "Radio" }
  ],
  Frontend: [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/react/react-original.svg", symbol: "Atom" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/html5/html5-original.svg", symbol: "Code" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/css3/css3-original.svg", symbol: "Palette" },
    { name: "Responsive UI", symbol: "PanelsTopLeft" }
  ],
  "Data & AI": [
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/postgresql/postgresql-original.svg", symbol: "Database" },
    { name: "Qdrant", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/qdrant/qdrant-original.svg", symbol: "Database" },
    { name: "RAG", symbol: "BrainCircuit" },
    { name: "Hybrid Retrieval", symbol: "Network" },
    { name: "BM25", symbol: "Search" },
    { name: "Vector Search", symbol: "ScanSearch" },
    { name: "LLM Integration", symbol: "Brain" }
  ],
  Tools: [
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/docker/docker-original.svg", symbol: "Boxes" },
    { name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/maven/maven-original.svg", symbol: "Package" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/git/git-original.svg", symbol: "GitBranch" },
    { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/githubactions/githubactions-original.svg", symbol: "Workflow" },
    { name: "JUnit", symbol: "CircleCheck" },
    { name: "Micrometer", symbol: "Gauge" },
    { name: "Actuator", symbol: "Activity" }
  ],
  Fundamentals: [
    { name: "Data Structures", symbol: "Blocks" },
    { name: "Algorithms", symbol: "Workflow" },
    { name: "OOP", symbol: "Boxes" },
    { name: "DBMS", symbol: "Database" },
    { name: "Operating Systems", symbol: "MonitorCog" },
    { name: "Computer Networks", symbol: "Network" }
  ]
};

export const experience = [
  {
    company: "Tata Consultancy Services",
    role: "Systems Engineer",
    period: "July 2025 - Present",
    place: "Mumbai",
    expandable: true,
    points: [
      "Architected and enhanced a modular Java framework supporting ~20K test cases per module execution, improving reusability, scalability, and maintainability through a structured component design.",
      "Optimized framework execution by implementing configurable batch-based Excel I/O (default batch size: 50), reducing number of I/O file operations and decreasing overall test execution time by approximately 40%.",
      "Abstracted test operations into reusable action and validation components with clear separation of concerns, reducing new test-case implementation to only locator configuration and action/validation mapping, thus cutting development time for ~100 test cases by 55%.",
      "Improved framework reliability by implementing configurable retry mechanism for test failures and Excel data-integrity safeguards, including pre-execution file-lock detection and rotating backups for corruption prevention and recovery.",
      "Developed GitHub Actions workflows to automate Maven builds and module-level test execution, with configurable test parameters and automated collection of test reports and execution artifacts."
    ],
    stack: ["Java", "Maven", "GitHub Actions", "JUnit", "Automation"]
  },
  {
    company: "Samsung Research Institute",
    role: "Research Intern",
    period: "August 2023 - December 2023",
    place: "Bangalore",
    points: [
      "Engineered a TensorFlow-based computer vision solution for detecting ghost artifacts in HDR images as part of Samsung PRISM.",
      "Evaluated and optimized the detection pipeline to improve reliability across diverse HDR image datasets."
    ],
    stack: ["TensorFlow", "Computer Vision", "HDR Imaging", "Research"]
  }
];

export const extracurricularExperience = [
  {
    company: "Terra VIT (Toastmasters Club)",
    role: "Secretary",
    period: "Aug 2023 - Dec 2023",
    points: [
      "Maintained club documents and organized records for meetings and board activities.",
      "Recorded minutes of each meeting to keep members informed of discussions and decisions.",
      "Assisted board members in planning initiatives to support the club's growth."
    ]
  },
  {
    company: "Vellore Institute of Technology (Riviera cultural festival - Events department)",
    role: "Volunteer",
    period: "Jan 2023 - Feb 2023",
    points: [
      "Supported the Events department during VIT's Riviera cultural festival.",
      "Assisted with event preparation and on-site coordination.",
      "Collaborated with the events team during festival activities."
    ]
  },
  {
    company: "Pimpri Toastmasters Club",
    role: "Treasurer",
    period: "Jan 2022 - Jul 2022",
    place: "Pune District, Maharashtra, India",
    points: [
      "Managed club expenses and handled bills to maintain sufficient funds.",
      "Conducted audits and presented financial findings to club members.",
      "Received the Best Treasurer Award for the term."
    ]
  }
];

export const projects = {
  "Development Projects": [
    {
      title: "Savings Saga",
      type: "Java Backend Application",
      description: "Personal finance management application with transaction tracking, budgets, recurring bills, analytics, goals, secure APIs, and event-driven reminders.",
      details: ["Built 15+ REST endpoints with JWT, HttpOnly cookies, Spring Security, Kafka reminders, scheduled bill processing, PostgreSQL optimization, and Caffeine caching."],
      stack: ["Spring Boot", "React", "PostgreSQL", "Kafka", "Docker"],
      imageSrc: "/projects/savings-saga/demo-thumbnail.png",
      imageAlt: "Savings Saga demo thumbnail",
      demo: {
        embedUrl: "https://drive.google.com/file/d/1VtPAgJUMQ-ZqncYKFMX7WmbqydAxUZYI/preview",
        watchUrl: "https://drive.google.com/file/d/1VtPAgJUMQ-ZqncYKFMX7WmbqydAxUZYI/view?usp=sharing"
      },
      detailsPath: "/projects/savings-saga"
    },
    {
      title: "FinGuru",
      type: "AI-Enabled Financial Platform",
      description: "Spring AI-powered assistant for transaction analysis, bill-management actions, and document Q&A using a production-oriented RAG pipeline.",
      details: ["Designed hybrid BM25 and vector retrieval with Qdrant, metadata filtering, reranking, async retrieval, dynamic chunking, and evaluation metrics."],
      stack: ["Spring AI", "Spring Boot", "PostgreSQL", "Qdrant", "RAG"],
      image: "FG",
      detailsPath: "/projects/fin-guru"
    }
  ],
  "AI/ML Projects": [
    {
      title: "HDR Ghost Artifact Detection",
      type: "Computer Vision Research",
      description: "TensorFlow-based detection pipeline for identifying ghost artifacts in HDR image data during Samsung PRISM research work.",
      details: [],
      stack: ["TensorFlow", "Computer Vision", "HDR", "Python"],
      image: "CV"
    }
  ],
  Patents: [
    {
      title: "Real-time HDR Ghost Artifact Detection and Inpainting for Safety Systems",
      type: "Published Indian Patent Application",
      description: "Co-inventor on a published Indian patent application focused on real-time HDR ghost artifact detection and inpainting for safety systems.",
      details: ["Application No. 202541118358."],
      stack: ["Patent", "Computer Vision", "HDR Imaging"],
      image: "IP"
    }
  ],
  Publications: [
    {
      title: "Banana Plant Health Analysis",
      type: "Scientific Reports, Nature Portfolio",
      description: "Peer-reviewed research publication on machine learning techniques for banana plant health analysis.",
      details: [],
      stack: ["Machine Learning", "Research", "Scientific Reports"],
      imageSrc: "/projects/banana-plant-health.png",
      imageAlt: "Banana plants growing in a field"
    }
  ]
};

export const certifications = [
  {
    title: "The Complete 2024 Web Development Bootcamp",
    issuer: "Udemy",
    date: "Issued Apr 15, 2024",
    category: "Courses & Programs",
    preview: "/certificates/web-development-bootcamp-preview.jpg",
    document: "/certificates/web-development-bootcamp.pdf"
  },
  {
    title: "Python for Machine Learning & Data Science Masterclass",
    issuer: "Udemy",
    date: "Issued Jan 1, 2024",
    category: "Courses & Programs",
    preview: "/certificates/python-ml-masterclass-preview.jpg",
    document: "/certificates/python-ml-masterclass.pdf"
  },
  {
    title: "MERN Full Stack Internship Program (ETHNUS)",
    issuer: "ETHNUS",
    date: "Issued Dec 8, 2023",
    category: "Courses & Programs",
    preview: "/certificates/ethnus-internship-preview.jpg",
    document: "/certificates/ethnus-internship.pdf"
  },
  {
    title: "Innovation, Business Models and Entrepreneurship",
    issuer: "NPTEL",
    date: "Issued Oct 2022",
    category: "Courses & Programs",
    preview: "/certificates/nptel-innovation-business-models.jpg",
    document: "/certificates/nptel-innovation-business-models.jpg"
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "Issued Feb 2, 2024 | Expires Feb 2, 2027",
    category: "Professional Certification",
    preview: "/certificates/aws-cloud-practitioner-preview.jpg",
    document: "/certificates/aws-cloud-practitioner.pdf"
  }
];
