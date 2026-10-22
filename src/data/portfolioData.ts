export interface SocialLinks {
  github: string;
  linkedin: string;
  instagram: string;
  email: string;
  whatsapp: string;
}

export interface SkillItem {
  name: string;
  category: 'languages' | 'core_cs' | 'web' | 'tools';
  iconName: string;
  level?: string; // Optional proficiency indicator (e.g. "Proficient", "Familiar", "Learning")
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problemSolved: string;
  keyFeatures: string[];
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  category: string;
}

export interface TimelineEntry {
  id: string;
  title: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  type: 'education' | 'experience' | 'milestone';
  iconType: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  iconName: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  imageUrl?: string;
  skills: string[];
}

export interface PortfolioData {
  personal: {
    fullName: string;
    firstName: string;
    lastName: string;
    tagline: string;
    primaryRole?: string;
    subtitles: string[];
    bio: string;
    detailedBio: string[];
    statusBadge: string;
    location: string;
    email: string;
    profileImage: string;
    resumeUrl: string;
    yearsOfCoding: string;
  };
  socials: SocialLinks;
  navItems: { name: string; href: string }[];
  skills: SkillItem[];
  projects: Project[];
  timeline: TimelineEntry[];
  services: ServiceItem[];
  certificates: CertificateItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    fullName: "NAUMAN NASEER",
    firstName: "NAUMAN",
    lastName: "NASEER",
    tagline: "Building strong programming foundations and creating practical projects through continuous learning.",
    primaryRole: "Computer Science Student / Python & C++ Programmer",
    subtitles: [
      "Computer Science Student",
      "Python & C++ Programmer",
      "Data Structures & OOP Enthusiast",
      "Java Developer",
    ],
    bio: "Computer Science student passionate about core programming, algorithmic problem-solving, and building practical software solutions.",
    detailedBio: [
      "I am an enthusiastic Computer Science student focused on developing strong, resilient foundations in core computing. My primary focus revolves around object-oriented programming, data structures, algorithms, and computational thinking.",
      "Currently exploring C++, Python, and Java to construct efficient command-line utilities, algorithmic simulations, and desktop and web prototypes.",
      "Beyond academic coursework, I actively engage with self-directed coding challenges, open-source architectures, and modern web application development with React and Tailwind CSS."
    ],
    statusBadge: "Available for Internships & Projects",
    location: "Pakistan",
    email: "dev.nouman.naseer@gmail.com",
    profileImage: "/pic-transparent.png",
    resumeUrl: "https://i.postimg.cc/x1cD1z6X/Nauman-naseer.png",
    yearsOfCoding: "Academic CS Journey",
  },
  socials: {
    github: "https://github.com/devnoumannaseer-ctrl",
    linkedin: "https://www.linkedin.com/in/nauman-naseer-5469873a7/?isSelfProfile=true",
    instagram: "https://www.instagram.com/naumannaseer_official?psln=MXYxb3VpYWJhcW1hdg==",
    email: "mailto:dev.nouman.naseer@gmail.com",
    whatsapp: "https://web.whatsapp.com/",
  },
  navItems: [
    { name: "About me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Timeline", href: "#experience" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact Me", href: "#contact" },
  ],
  skills: [
    // Programming Languages
    { name: "C++", category: "languages", iconName: "SiCplusplus", level: "Core Foundation", description: "Pointers, Memory Management, STL, Classes" },
    { name: "Python", category: "languages", iconName: "SiPython", level: "Proficient", description: "Scripting, Automation, Data Structures, OOP" },
    { name: "Java", category: "languages", iconName: "FaJava", level: "Core Foundation", description: "Object-Oriented Programming, Collections, Architecture" },
    { name: "C Language", category: "languages", iconName: "SiC", level: "Foundational", description: "Structured Programming, Memory, Arrays, Structs" },
    { name: "JavaScript", category: "languages", iconName: "SiJavascript", level: "Intermediate", description: "Modern ES6+, Async/Await, DOM, Events" },
    { name: "SQL", category: "languages", iconName: "SiMysql", level: "Foundational", description: "Relational queries, Joins, Aggregations, Normalization" },

    // Core Computer Science
    { name: "Data Structures", category: "core_cs", iconName: "Binary", level: "Core Foundation", description: "Arrays, Linked Lists, Trees, Stacks, Queues, Graphs" },
    { name: "Algorithms & Analysis", category: "core_cs", iconName: "Cpu", level: "Core Foundation", description: "Sorting, Searching, Recursion, Time & Space Complexity" },
    { name: "OOP Paradigm", category: "core_cs", iconName: "Layers", level: "Core Foundation", description: "Encapsulation, Inheritance, Polymorphism, Abstraction" },
    { name: "Database Design", category: "core_cs", iconName: "Database", level: "Academic", description: "Entity-Relationship schemas, normalization, constraints" },
    { name: "Operating Systems", category: "core_cs", iconName: "Terminal", level: "Fundamentals", description: "Processes, Threads, CPU scheduling, Memory Paging" },

    // Web Development
    { name: "React.js", category: "web", iconName: "SiReact", level: "Intermediate", description: "Functional components, Hooks, Virtual DOM, State" },
    { name: "Tailwind CSS", category: "web", iconName: "SiTailwindcss", level: "Intermediate", description: "Utility-first design, dark mode, responsive layouts" },
    { name: "HTML5 & CSS3", category: "web", iconName: "SiHtml5", level: "Proficient", description: "Semantic markup, modern flexbox, grid, animations" },
    { name: "RESTful APIs", category: "web", iconName: "Globe", level: "Foundational", description: "HTTP verbs, JSON payloads, client-side fetching" },

    // Tools & Platforms
    { name: "Git & GitHub", category: "tools", iconName: "SiGithub", level: "Daily Use", description: "Version control, branching, commits, repositories" },
    { name: "VS Code", category: "tools", iconName: "Code2", level: "Primary IDE", description: "Extensions, debugging, terminal workflow" },
    { name: "Linux / Bash", category: "tools", iconName: "TerminalSquare", level: "Command Line", description: "Shell scripting, file manipulation, navigation" },
    { name: "IntelliJ / PyCharm", category: "tools", iconName: "Wrench", level: "Development", description: "Java and Python development environments" },
  ],
  projects: [
    {
      id: "algo-visualizer",
      title: "Interactive Algorithm & Pathfinding Visualizer",
      subtitle: "CS Data Structures & Algorithm Simulation",
      description: "An interactive educational tool that simulates and renders Dijkstra's algorithm, A* search, and fundamental sorting routines (QuickSort, MergeSort) step-by-step with real-time speed controls.",
      problemSolved: "Abstract algorithm mechanics are difficult to grasp from static code. This tool translates pointer movements and state modifications into real-time visual feedback.",
      keyFeatures: [
        "Real-time grid pathfinding with obstacles and customizable weights",
        "Step-by-step sorting array comparisons with color-coded states",
        "Customizable array sizes, speed sliders, and wall generation",
        "Detailed time and space complexity breakdown for each method"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Data Structures", "Algorithms"],
      image: "https://images.unsplash.com/photo-1516116211227-bbc1b4395e54?auto=format&fit=crop&w=1200&q=80",
      githubUrl: "https://github.com/devnoumannaseer-ctrl",
      liveUrl: "https://github.com/devnoumannaseer-ctrl",
      featured: true,
      category: "Computer Science"
    },
    {
      id: "student-management-system",
      title: "Student Record & Academic Management System",
      subtitle: "Object-Oriented C++ & File Persistence System",
      description: "A robust console and file-driven management system engineered in C++ utilizing object-oriented principles, dynamic memory allocation, and persistent binary/text storage.",
      problemSolved: "Demonstrates production-style OOP architecture without relying on third-party frameworks, handling edge cases such as memory leak avoidance and file corruption.",
      keyFeatures: [
        "Full CRUD operations for student entities, courses, and grade calculations",
        "Clean OOP hierarchy with encapsulated classes and inheritance",
        "Persistent disk storage using file streams (ifstream / ofstream)",
        "Search by roll number, sorting by GPA, and statistical report generation"
      ],
      technologies: ["C++", "OOP", "File I/O", "Data Structures", "Memory Management"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      githubUrl: "https://github.com/devnoumannaseer-ctrl",
      liveUrl: "https://github.com/devnoumannaseer-ctrl",
      featured: true,
      category: "Systems & OOP"
    },
    {
      id: "python-automation-suite",
      title: "Python Data Processing & Automation Suite",
      subtitle: "Automated File Parsing & Analytics Toolkit",
      description: "A collection of modular Python utilities that automates data extraction from CSV/JSON datasets, performs automated validation checks, and compiles summary metrics into formatted spreadsheets.",
      problemSolved: "Eliminates repetitive manual data restructuring and validates file integrity with structured error reporting.",
      keyFeatures: [
        "Automated batch processing of multi-format data inputs",
        "Data normalization, deduplication, and anomaly detection",
        "Automated email notifications and execution logs",
        "Clean modular codebase with PEP8 standards and type hinting"
      ],
      technologies: ["Python", "Automation", "File Parsing", "Regex", "Data Analytics"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      githubUrl: "https://github.com/devnoumannaseer-ctrl",
      liveUrl: "https://github.com/devnoumannaseer-ctrl",
      featured: true,
      category: "Automation & Python"
    },
    {
      id: "premium-portfolio-hub",
      title: "Personal Developer Portfolio & Showcase",
      subtitle: "Modern Responsive Interactive Portfolio",
      description: "The very portfolio you are browsing — constructed with React, Vite, Tailwind CSS, and Framer Motion. Engineered for speed, responsive mobile fidelity, and high visual impact.",
      problemSolved: "Provides a centralized, interactive destination to display CS coursework, project architecture, verified skills, and contact channels.",
      keyFeatures: [
        "Interactive canvas particle background with physics and proximity links",
        "Live JSON / code terminal preview widget in hero",
        "Dynamic categorization filter for skills and projects",
        "Form validation with real-time feedback and direct email trigger"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
      githubUrl: "https://github.com/devnoumannaseer-ctrl",
      liveUrl: "https://github.com/devnoumannaseer-ctrl",
      featured: false,
      category: "Web Development"
    }
  ],
  services: [
    {
      id: "cpp-python-dev",
      title: "Core Software & Logic Development",
      tagline: "C++, Python, Java & Algorithmic Code",
      description: "Writing clean, structured, and modular code applying object-oriented design patterns, solid data structures, and algorithmic efficiency.",
      capabilities: [
        "Object-Oriented Programming (OOP) architectures",
        "Custom data structures and algorithmic implementations",
        "Console utilities, automation scripts, and file I/O",
        "Clean, commented, and maintainable academic and project code"
      ],
      iconName: "Code2"
    },
    {
      id: "frontend-web",
      title: "Modern Frontend Web Development",
      tagline: "Interactive, Responsive & Fast UIs",
      description: "Building responsive, mobile-first web applications using React, modern JavaScript, Tailwind CSS, and smooth animations.",
      capabilities: [
        "Component-driven React architectures",
        "Clean, aesthetic UI implementation with Tailwind CSS",
        "Cross-browser and mobile responsive optimization",
        "REST API integration and interactive state handling"
      ],
      iconName: "Layout"
    },
    {
      id: "database-systems",
      title: "Database Modeling & Querying",
      tagline: "Relational Schemas & SQL Operations",
      description: "Designing structured relational databases with optimized schemas, proper entity normalization, and reliable SQL queries.",
      capabilities: [
        "Relational schema modeling and normalization (1NF - 3NF)",
        "Writing complex SQL queries, joins, and aggregations",
        "Data consistency, constraints, and index planning",
        "Integration with backend and desktop application layers"
      ],
      iconName: "Database"
    },
    {
      id: "code-debugging",
      title: "Code Review & Logic Debugging",
      tagline: "Troubleshooting & Refactoring",
      description: "Analyzing existing codebases to identify logic bugs, memory leaks, algorithmic bottlenecks, and opportunities for structural refactoring.",
      capabilities: [
        "Memory leak tracing and pointer debugging in C++",
        "Algorithmic time complexity profiling and optimization",
        "Refactoring messy procedural scripts into clean OOP classes",
        "Writing unit test cases and boundary condition checks"
      ],
      iconName: "Bug"
    }
  ],
  timeline: [
    {
      id: "bscs-degree",
      title: "Bachelor of Science in Computer Science (BSCS)",
      institution: "Computer Science University Studies",
      period: "In Progress / Ongoing",
      location: "Pakistan",
      description: "Undergraduate Computer Science curriculum covering fundamental computing theory, systems architecture, mathematical foundations, and practical software engineering.",
      highlights: [
        "Core Coursework: Programming Fundamentals, Object-Oriented Programming, Data Structures & Algorithms",
        "Systems: Database Management Systems, Discrete Mathematics, Computer Architecture",
        "Hands-on lab assignments in C++, Python, and relational database systems"
      ],
      type: "education",
      iconType: "GraduationCap"
    },
    {
      id: "cs-foundations",
      title: "Programming Foundations & Project Development",
      institution: "Self-Directed & Academic Labs",
      period: "Foundational Milestones",
      location: "Independent Learning",
      description: "Committed to mastering core computer science principles through hands-on project creation, coding challenges, and open-source exploration.",
      highlights: [
        "Implemented classic data structures (Trees, Linked Lists, Hash Tables, Heaps) from scratch",
        "Created practical utilities in Python and C++ demonstrating memory management and OOP design",
        "Participated in collaborative coding sprints, code reviews, and Git-based project workflows"
      ],
      type: "experience",
      iconType: "Terminal"
    },
    {
      id: "web-exploration",
      title: "Modern Web Engineering Exploration",
      institution: "Independent & Project Practice",
      period: "Active Continuous Growth",
      location: "Remote / Online",
      description: "Expanding capabilities into modern frontend engineering, building accessible user interfaces and connecting frontend clients to data sources.",
      highlights: [
        "Mastered modern JavaScript (ES6+), React hooks, and component lifecycle",
        "Constructed responsive applications with Tailwind CSS and Framer Motion",
        "Version control best practices on GitHub with clean commit histories"
      ],
      type: "milestone",
      iconType: "Rocket"
    }
  ],
  certificates: [
    {
      id: "resume-credential",
      title: "Curriculum Vitae & Verified Academic Record",
      issuer: "NAUMAN NASEER - Official Document",
      date: "Current & Active",
      credentialUrl: "https://i.postimg.cc/x1cD1z6X/Nauman-naseer.png",
      imageUrl: "https://i.postimg.cc/x1cD1z6X/Nauman-naseer.png",
      skills: ["C++", "Python", "Java", "Computer Science", "OOP", "Data Structures"]
    },
    {
      id: "cs-fundamentals-cert",
      title: "Computer Science & Programming Foundations",
      issuer: "Academic & Coursework Foundations",
      date: "Verified Ongoing",
      credentialUrl: "https://github.com/devnoumannaseer-ctrl",
      skills: ["Object-Oriented Programming", "Algorithms", "Data Structures", "Problem Solving"]
    }
  ]
};
