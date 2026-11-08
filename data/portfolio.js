/**
 * PORTFOLIO DATA CONFIGURATION
 * Tone of Voice: Technical, confident, metric-driven, matching the style of caesariannn.npd-agency.org
 */
window.PORTFOLIO_DATA = {
  profile: {
    name: "M. Fatahillah",
    handle: "m-fatahillah",
    badge: "Available for 2026 Opportunities",
    headlinePrefix: "Hey, I'm",
    typewriterRoles: [
      "Backend Architectures",
      "Computer Vision & Edge AI",
      "High-Throughput Data Pipelines",
      "Robust REST & WebSocket APIs"
    ],
    bio: "Software Engineer based in Indonesia. Specializing in engineering reliable, highly scalable backend software alongside automated data pipelines and computer vision systems — building high-impact products that solve concrete, real-world problems.",
    location: "Indonesia (WIB • UTC+7)",
    email: "fatahcrown789@gmail.com",
    githubUrl: "https://github.com/m-fatahillah",
    linkedinUrl: "https://linkedin.com/in/m-fatahillah",
    resumeUrl: "#",
    metrics: [
      { value: "15+", label: "Engineered Projects" },
      { value: "3+", label: "Years Tech Experience" },
      { value: "99.9%", label: "Uptime Focus" }
    ],
    terminalPreview: {
      user: "fatahillah@dev-node",
      cmd: "fatahillah --status --focus",
      output: [
        "Core Stack: Laravel • Python • PostgreSQL • TensorFlow Lite",
        "Architecture: Microservices • Star-Schema ETL • Edge Inference",
        "Status: Active Dev Cycle • Open for Collaborations"
      ]
    }
  },

  navigation: [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Expertise", href: "#expertise", id: "expertise" },
    { label: "Timeline", href: "#timeline", id: "timeline" },
    { label: "Showcase", href: "#showcase", id: "showcase" },
    { label: "Contact", href: "#contact", id: "contact" }
  ],

  marqueeTech: [
    "Laravel", "PHP 8.x", "Python", "PostgreSQL", "Pentaho PDI", 
    "TensorFlow Lite", "OpenCV", "MediaPipe", "Docker", "Git", 
    "MySQL", "Filament Admin", "RESTful APIs", "Linux / Bash"
  ],

  about: {
    sectionNum: "01 / ABOUT ME",
    heading: "Engineering Reliable & Scalable Systems",
    quote: "Bridging robust backend engineering with practical computer vision and automated data intelligence.",
    body: "I am a Software Engineer with deep interest in backend system architecture, dimensional data warehouse pipelines, and real-time computer vision applications. I focus on developing clean, testable, and highly resilient applications that withstand real-world production loads without unnecessary infrastructure overhead.",
    highlights: [
      { title: "Backend Architecture", desc: "Crafting scalable REST APIs, authentication security, and modular service patterns." },
      { title: "ETL & Data Warehousing", desc: "Star-schema dimensional modeling and automated scheduled pipelines." },
      { title: "Computer Vision & Edge AI", desc: "Deploying on-device landmark recognition with minimal inference latency." }
    ]
  },

  expertise: {
    sectionNum: "02 / EXPERTISE",
    heading: "Core Competence & Technical Stack",
    subheading: "Technologies and architectural patterns battle-tested in real production environments.",
    categories: [
      {
        id: "backend",
        title: "Backend & Systems",
        description: "Writing highly modular service logic, structuring secure relational databases, and microservices server nodes.",
        tags: ["Laravel", "PHP 8+", "Filament Admin", "REST APIs", "WebSockets", "Auth & RBAC"]
      },
      {
        id: "data",
        title: "Databases & Data Pipelines",
        description: "Designing star-schema dimensional warehouses, automated ETL pipelines, and high-throughput query optimization.",
        tags: ["PostgreSQL", "MySQL", "Pentaho PDI (Kettle)", "Star Schema", "Supabase", "SQL"]
      },
      {
        id: "ai",
        title: "Computer Vision & AI",
        description: "Implementing edge-inference neural networks, real-time landmark tracking, and lightweight models without heavy GPU overhead.",
        tags: ["Python", "TensorFlow Lite", "MediaPipe", "OpenCV", "Edge Inference"]
      },
      {
        id: "devops",
        title: "DevOps & Software Quality",
        description: "Applying rigorous software quality benchmarks (ISO/IEC 25010), automated testing, and containerized production workflows.",
        tags: ["Git & GitHub", "Docker", "Linux / Bash", "Postman", "PHPUnit", "JMeter SQA"]
      }
    ]
  },

  timeline: {
    sectionNum: "03 / TIMELINE",
    heading: "Career Roadmap & Engineering Milestones",
    subheading: "A track record of technical delivery and architectural problem-solving.",
    items: [
      {
        period: "2025 — Present",
        role: "Backend & Intelligent Systems Developer",
        organization: "Independent R&D & Client Solutions",
        location: "Indonesia",
        summary: "Architected modular RESTful services and engineered automated ETL pipelines for high-volume transactions, coupled with edge computer vision integration.",
        points: [
          "Developed modular backend engines using Laravel 11 and Filament Admin with strict type safety.",
          "Designed real-time hand gesture recognition system achieving 45+ FPS on standard client devices.",
          "Engineered dimensional star-schema models and automated scheduled batch ETL pipelines with Pentaho PDI."
        ]
      },
      {
        period: "2024 — 2025",
        role: "Software Quality & Web Engineer",
        organization: "Academic & Enterprise Projects",
        location: "Indonesia",
        summary: "Delivered web management platforms with full-lifecycle software quality assurance audits aligned with ISO/IEC 25010 standards.",
        points: [
          "Implemented comprehensive unit test suites using PHPUnit, ensuring high functional suitability coverage.",
          "Conducted concurrency stress testing and load auditing using Apache JMeter (simulating 500+ concurrent requests).",
          "Hardened API endpoints against common OWASP vulnerabilities and structured role-based access control."
        ]
      }
    ]
  },

  showcase: {
    sectionNum: "04 / SHOWCASE",
    heading: "Engineered Projects & Technical Case Studies",
    subheading: "Production-grade applications built for real performance, scalability, and impact.",
    projects: [
      {
        id: "gesturesign-ai",
        title: "GestureSign AI",
        badge: "REAL-TIME 45+ FPS",
        tagline: "Gamified Indonesian Sign Language Recognition System",
        description: "Interactive real-time sign language gesture recognition running on-device inference via TensorFlow Lite and MediaPipe. Eliminates expensive cloud GPU dependencies and trims network latency under 40ms, coupled with an educational scoring engine.",
        metrics: "45+ FPS on-device feed • Latency <40ms",
        tags: ["TensorFlow Lite", "Python", "OpenCV", "MediaPipe", "WebSockets"],
        codeUrl: "https://github.com/m-fatahillah",
        demoUrl: "#"
      },
      {
        id: "transact-etl",
        title: "TransactETL Data Warehouse",
        badge: "ETL PIPELINE • 1.2M+ ROWS",
        tagline: "Automated Enterprise Transaction Ingestion Architecture",
        description: "Multidimensional star-schema data warehouse engineered to unify heterogeneous high-volume transactional logs. Automated recurring ETL workflows via Pentaho Data Integrator into PostgreSQL, accelerating business intelligence aggregations by 82%.",
        metrics: "1.2M rows/batch • 82% faster query aggregation",
        tags: ["PostgreSQL", "Pentaho PDI", "Star Schema", "SQL", "Cron Automation"],
        codeUrl: "https://github.com/m-fatahillah",
        demoUrl: "#"
      },
      {
        id: "estate-core",
        title: "EstateCore Platform",
        badge: "SQA AUDITED • ISO/IEC 25010",
        tagline: "Modular Property Marketplace with Strict Quality Assurance",
        description: "Full-stack property management platform built on Laravel 11 and Filament Admin. Formally audited against ISO/IEC 25010 quality standards across Functional Suitability (100% PHPUnit passing rate), Performance Efficiency (<320ms avg response), and Security.",
        metrics: "100% test pass rate • <320ms response at 500 CCU",
        tags: ["Laravel 11", "Filament Admin", "MySQL", "PHPUnit", "Apache JMeter"],
        codeUrl: "https://github.com/m-fatahillah",
        demoUrl: "#"
      }
    ]
  },

  contact: {
    sectionNum: "05 / CONTACT",
    heading: "Let's Connect & Build",
    subheading: "Have an opportunity, an architectural challenge, or a project to discuss? Feel free to reach out directly.",
    email: "fatahcrown789@gmail.com",
    footerCopy: "© 2026 M. Fatahillah. All Rights Reserved. Engineered with clean architecture & quiet aesthetics."
  }
};
