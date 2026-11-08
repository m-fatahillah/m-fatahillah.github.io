/**
 * PORTFOLIO DATA CONFIGURATION
 * Real projects curated from https://github.com/m-fatahillah and team collaborations.
 * Authentic engineering credentials • Polinema Informatics Engineering
 */
window.PORTFOLIO_DATA = {
  profile: {
    name: "M. Fatahillah Athabrani",
    handle: "m-fatahillah",
    badge: "Available for 2026 Opportunities",
    headlinePrefix: "Hey, I'm",
    typewriterRoles: [
      "Backend Systems (Lab IVSS)",
      "Full-Stack Web (Vue 3 & Laravel)",
      "Flutter Clean Architecture",
      "AI Vector Search & Pipelines"
    ],
    bio: "Informatics Engineering student at State Polytechnic of Malang (POLINEMA). Backend Developer on the Intelligent Vision & Smart System (IVSS) Lab platform and full-stack developer on Koze-Kost — specializing in scalable database architectures, AI-integrated workflows, and Clean Architecture mobile apps.",
    location: "Malang, Indonesia (WIB • UTC+7)",
    email: "fatahcrown789@gmail.com",
    githubUrl: "https://github.com/m-fatahillah",
    linkedinUrl: "https://linkedin.com/in/m-fatahillah",
    resumeUrl: "#",
    metrics: [
      { value: "Lab IVSS", label: "Backend Developer" },
      { value: "Koze-Kost", label: "Full-Stack Web" },
      { value: "CleanArch", label: "Flutter Mobile" }
    ],
    terminalPreview: {
      user: "fatahillah@polinema-node",
      cmd: "fatahillah --list-projects --production",
      output: [
        "pbl-lab-ivss        [Backend Dev • PHP 8.2 • PostgreSQL • Docker • AI Vector Search]",
        "koze-kost-project   [Full-Stack • Vue 3 • Inertia.js • Laravel • Leaflet Maps]",
        "cleanarch-mobile    [Flutter • Riverpod DI • SOLID • Firebase FCM • Offline-First]",
        "creditcluster-ai    [Python • Scikit-Learn • K-Means • DBSCAN • Silhouette Validated]"
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
    "PHP 8.2", "PostgreSQL", "Laravel", "Vue.js 3", "Inertia.js", 
    "Docker", "Nginx", "Flutter", "Dart", "Riverpod", 
    "Python", "OpenCV", "Scikit-Learn", "Leaflet Maps", "Git"
  ],

  about: {
    sectionNum: "01 / ABOUT ME",
    heading: "Backend Engineering & Multiplatform Systems",
    quote: "Building reliable backend services, AI-augmented management platforms, and clean-architecture mobile software.",
    body: "I am an Informatics Engineering student at State Polytechnic of Malang (POLINEMA) with proven experience as a Backend Developer on enterprise-grade academic platforms. My core competence spans designing scalable relational schemas in PostgreSQL, building authenticated multi-role APIs, containerizing stacks with Docker & Nginx, and engineering responsive mobile apps adhering strictly to SOLID Clean Architecture.",
    highlights: [
      { title: "Backend & Systems Architecture", desc: "Engineered core database schemas, RBAC multi-role auth, and API integrations for Lab IVSS." },
      { title: "Full-Stack Web & GIS", desc: "Vue 3, Inertia.js, and Laravel backends with interactive Leaflet mapping in Koze-Kost." },
      { title: "Mobile Clean Architecture", desc: "Feature-First 3-layer mobile design with Riverpod DI, FCM, and offline caching in Flutter." }
    ]
  },

  expertise: {
    sectionNum: "02 / EXPERTISE",
    heading: "Core Competence & Technical Stack",
    subheading: "Verified technologies actively used in production systems and enterprise laboratory platforms.",
    categories: [
      {
        id: "backend",
        title: "Backend & Database Engineering",
        description: "Structuring secure relational databases, custom MVC architectures, multi-role RBAC, and containerized microservices.",
        tags: ["PHP 8.2", "PostgreSQL", "Laravel 11", "MySQL", "RBAC Security", "REST APIs", "OpenAI Embeddings"]
      },
      {
        id: "web",
        title: "Full-Stack Web & GIS",
        description: "Developing modern reactive single-page applications with Inertia.js, Vue 3, and interactive geospatial mapping.",
        tags: ["Vue.js 3", "Inertia.js", "Tailwind CSS v4", "Leaflet Maps", "Zod", "Vite"]
      },
      {
        id: "mobile",
        title: "Mobile App Architecture",
        description: "Structuring scalable multiplatform Flutter applications with decoupled business logic and centralized DI.",
        tags: ["Flutter", "Dart", "Clean Architecture", "Riverpod DI", "Firebase FCM", "Offline Storage"]
      },
      {
        id: "devops-ai",
        title: "DevOps & Machine Learning",
        description: "Managing containerized deployments, automated testing suites, and unsupervised clustering algorithms.",
        tags: ["Docker", "Docker Compose", "Nginx", "Git & GitHub", "Python", "Scikit-Learn", "PHPUnit"]
      }
    ]
  },

  timeline: {
    sectionNum: "03 / TIMELINE",
    heading: "Engineering Milestones & Project Delivery",
    subheading: "A timeline of delivered software platforms, laboratory systems, and team collaborations.",
    items: [
      {
        period: "2025 — Present",
        role: "Backend Developer — Lab IVSS Information System",
        organization: "Intelligent Vision & Smart System (IVSS) Lab, POLINEMA",
        location: "Malang, East Java",
        summary: "Co-engineered the comprehensive laboratory management platform for the IVSS Laboratory at State Polytechnic of Malang.",
        points: [
          "Structured relational database models and schema migrations in PostgreSQL for research, publications, and multi-role users.",
          "Connected and synchronized all dashboard modules (admin, news, training, and research galleries) with live database pipelines.",
          "Implemented Role-Based Access Control (RBAC) supporting Admin Lab, Admin Berita, Lab Members, and Students.",
          "Configured containerized multi-service deployment with Docker, Nginx, and environment isolation."
        ]
      },
      {
        period: "2025 — Present",
        role: "Full-Stack Developer — Koze-Kost Project",
        organization: "Koze-Kost Engineering Team",
        location: "Malang, East Java",
        summary: "Co-developed an all-in-one boarding house discovery and management platform utilizing Vue 3, Inertia.js, Laravel, and Leaflet interactive maps.",
        points: [
          "Architected and styled the responsive Landing Page and dynamic FAQ showcase module.",
          "Implemented email-configured password recovery and secure authentication notification flows.",
          "Built full facility management (CRUD) integration and property exploration features.",
          "Integrated Leaflet geospatial maps for location-based accommodation discovery."
        ]
      },
      {
        period: "2024 — 2025",
        role: "Mobile Software Engineer — Clean Architecture",
        organization: "Mobile Systems Engineering, POLINEMA",
        location: "Malang, East Java",
        summary: "Engineered scalable multiplatform Flutter applications structured under strict SOLID principles and decoupled layer separation.",
        points: [
          "Developed Feature-First 3-layer Clean Architecture (Domain, Data, Presentation) with Riverpod DI.",
          "Implemented push notification pipelines with Firebase Cloud Messaging (FCM) and token management.",
          "Conducted unit testing and widget testing verification across independent state layers."
        ]
      }
    ]
  },

  showcase: {
    sectionNum: "04 / SHOWCASE",
    heading: "Featured Engineering Projects",
    subheading: "Production platforms and standalone repositories — click 'Repository Source' to explore the code.",
    projects: [
      {
        id: "pbl-lab-ivss",
        title: "Sistem Informasi Laboratorium IVSS",
        badge: "BACKEND DEV • PHP 8.2 + POSTGRESQL + DOCKER",
        tagline: "Intelligent Vision & Smart System Lab Management & Research Hub",
        description: "Comprehensive web management and research information system for the Intelligent Vision and Smart System (IVSS) Laboratory at POLINEMA. Features a Smart Research & Publication Hub, multi-tier Role-Based Access Control (Admin Lab, Admin Berita, Anggota Lab, Mahasiswa), digital approval workflows, Google Scholar synchronization, and AI Supervisor Recommendations via OpenAI vector embeddings.",
        metrics: "PostgreSQL Database • Multi-Role RBAC • Dockerized Nginx • AI Vector Search",
        tags: ["PHP 8.2", "PostgreSQL", "Custom MVC", "Docker", "Nginx", "OpenAI Embeddings", "Tailwind CSS"],
        codeUrl: "https://github.com/Atherizz/pbl-lab-ivss",
        demoUrl: "https://github.com/Atherizz/pbl-lab-ivss"
      },
      {
        id: "koze-kost",
        title: "Koze-Kost — Smart Property & Boarding Platform",
        badge: "FULL-STACK • VUE 3 + LARAVEL + LEAFLET",
        tagline: "All-in-One Boarding House Discovery with AI Chat & Geospatial Maps",
        description: "Modern full-stack accommodation portal connecting boarding house seekers, property owners, and administrators. Powered by Vue.js 3 (Inertia.js), Laravel backend, Tailwind CSS v4, and Leaflet interactive map rendering. Features AI chat accommodations recommendations, real-time owner-seeker communication, facility management, and password recovery workflows.",
        metrics: "Interactive Leaflet Maps • AI Chatbot Assistant • Inertia.js Stack",
        tags: ["Vue.js 3", "Laravel 11", "Inertia.js", "Leaflet Maps", "Tailwind CSS v4", "Docker", "Zod"],
        codeUrl: "https://github.com/m-fatahillah/koze-kost-project",
        demoUrl: "https://github.com/m-fatahillah/koze-kost-project"
      },
      {
        id: "cleanarch-mobile",
        title: "CleanArch Mobile — Enterprise Mobile Suite",
        badge: "FLUTTER • CLEAN ARCHITECTURE",
        tagline: "Feature-First Architecture with SOLID Principles, Riverpod DI & FCM",
        description: "Production-ready cross-platform mobile architecture built with Flutter & Dart under strict SOLID principles. Implements a decoupled 3-tier architecture (Domain, Data, Presentation), centralized Riverpod dependency injection, Firebase Cloud Messaging (FCM) notifications, offline-first local persistence, and unit/widget test coverage.",
        metrics: "SOLID Principles • Riverpod DI • Unit & Widget Tested",
        tags: ["Flutter", "Dart", "Riverpod", "Clean Architecture", "Firebase FCM", "Offline-First"],
        codeUrl: "https://github.com/m-fatahillah/244107020121-mobile-course",
        demoUrl: "https://github.com/m-fatahillah/244107020121-mobile-course"
      },
      {
        id: "creditcluster-ml",
        title: "CreditCluster — Customer Behavioral Segmentation",
        badge: "MACHINE LEARNING • UNSUPERVISED",
        tagline: "Credit Card Analytics via K-Means, DBSCAN & Agglomerative Models",
        description: "An unsupervised machine learning research pipeline analyzing financial customer credit card behavioral patterns. Implements and compares K-Means, DBSCAN (with Elbow Method parameter optimization), and Agglomerative Hierarchical Clustering, evaluated through Silhouette Scores and Davies-Bouldin Index (DBI) metrics.",
        metrics: "Silhouette Score & DBI Validated • Multi-Model Evaluation",
        tags: ["Python", "Scikit-Learn", "K-Means", "DBSCAN", "Pandas", "Matplotlib"],
        codeUrl: "https://github.com/m-fatahillah/Machine-Learning-M.Fatahillah-Athabrani-244107020121",
        demoUrl: "https://github.com/m-fatahillah/Machine-Learning-M.Fatahillah-Athabrani-244107020121"
      }
    ]
  },

  contact: {
    sectionNum: "05 / CONTACT",
    heading: "Let's Connect & Build",
    subheading: "Have an opportunity, an engineering challenge, or a project to discuss? Feel free to reach out directly.",
    email: "fatahcrown789@gmail.com",
    footerCopy: "© 2026 M. Fatahillah Athabrani. All Rights Reserved. Engineered with clean architecture & quiet aesthetics."
  }
};
