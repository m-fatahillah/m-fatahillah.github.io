/**
 * PORTFOLIO DATA CONFIGURATION
 * Real projects curated from https://github.com/m-fatahillah
 * Featuring standalone software engineering projects & architectures.
 */
window.PORTFOLIO_DATA = {
  profile: {
    name: "M. Fatahillah Athabrani",
    handle: "m-fatahillah",
    badge: "Available for 2026 Opportunities",
    headlinePrefix: "Hey, I'm",
    typewriterRoles: [
      "Full-Stack Web (Vue 3 & Laravel)",
      "Flutter Clean Architecture",
      "Interactive Geospatial Maps",
      "Machine Learning & Vision Pipelines"
    ],
    bio: "Software Engineer based in Indonesia. Specializing in modern full-stack web platforms with Vue 3 and Laravel, Clean Architecture mobile applications in Flutter, and analytical machine learning pipelines — focused on delivering resilient, user-centric digital products.",
    location: "Malang, Indonesia (WIB • UTC+7)",
    email: "fatahcrown789@gmail.com",
    githubUrl: "https://github.com/m-fatahillah",
    linkedinUrl: "https://linkedin.com/in/m-fatahillah",
    resumeUrl: "#",
    metrics: [
      { value: "Koze-Kost", label: "Flagship Web App" },
      { value: "4+", label: "Core Architectures" },
      { value: "Full-Stack", label: "Web & Mobile Focus" }
    ],
    terminalPreview: {
      user: "fatahillah@dev-node",
      cmd: "fatahillah --list-projects --featured",
      output: [
        "koze-kost-project   [Vue 3 • Inertia.js • Laravel • Leaflet Maps • AI Chat]",
        "cleanarch-mobile    [Flutter • Riverpod DI • SOLID • Firebase FCM • Offline-First]",
        "creditcluster-ai    [Scikit-Learn • K-Means • DBSCAN • Silhouette Validated]",
        "visionfilter-cv     [OpenCV • Spatial Convolutions • Normalized CDF Histograms]"
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
    "Vue.js 3", "Inertia.js", "Laravel", "Leaflet Maps", "Flutter", 
    "Dart", "Riverpod", "Python", "OpenCV", "Scikit-Learn", 
    "Tailwind CSS", "MySQL", "PostgreSQL", "Docker", "Git"
  ],

  about: {
    sectionNum: "01 / ABOUT ME",
    heading: "Engineering High-Impact Digital Solutions",
    quote: "Blending modern full-stack web development with clean-architecture mobile systems and machine learning pipelines.",
    body: "I am a Software Engineer dedicated to crafting robust digital products. My core focus lies in modern full-stack development using Vue 3 and Laravel (Inertia.js stack), building mobile apps adhering strictly to SOLID Clean Architecture principles in Flutter, and developing analytical computer vision and machine learning models in Python.",
    highlights: [
      { title: "Full-Stack Web Engineering", desc: "Vue 3, Inertia.js, and Laravel backends with interactive Leaflet mapping." },
      { title: "Mobile Clean Architecture", desc: "Feature-First 3-layer mobile design with Riverpod DI, FCM, and offline caching." },
      { title: "Data & Computer Vision", desc: "Unsupervised customer credit clustering and mathematical OpenCV image processing." }
    ]
  },

  expertise: {
    sectionNum: "02 / EXPERTISE",
    heading: "Core Competence & Technical Stack",
    subheading: "A verified toolkit applied directly across production-ready web platforms and mobile architectures.",
    categories: [
      {
        id: "web",
        title: "Full-Stack Web Development",
        description: "Building responsive, reactive single-page applications and secure API backends.",
        tags: ["Vue.js 3", "Inertia.js", "Laravel 11", "Tailwind CSS v4", "Leaflet Maps", "Zod", "REST APIs"]
      },
      {
        id: "mobile",
        title: "Mobile App Architecture",
        description: "Structuring scalable multiplatform Flutter applications with decoupled business logic.",
        tags: ["Flutter", "Dart", "Clean Architecture", "Riverpod DI", "Firebase FCM", "Offline Storage"]
      },
      {
        id: "ai-vision",
        title: "Machine Learning & Vision",
        description: "Implementing clustering models and performing digital image processing algorithms.",
        tags: ["Python", "Scikit-Learn", "OpenCV", "NumPy", "Pandas", "Matplotlib", "Jupyter"]
      },
      {
        id: "devops-tools",
        title: "DevOps & Engineering Tools",
        description: "Ensuring containerized reproducibility, rigorous testing suites, and git workflow hygiene.",
        tags: ["Docker", "Docker Compose", "Git & GitHub", "PHPUnit", "Postman", "Linux / Bash"]
      }
    ]
  },

  timeline: {
    sectionNum: "03 / TIMELINE",
    heading: "Engineering Milestones & Project Delivery",
    subheading: "A timeline of delivered software platforms, architectural designs, and team collaborations.",
    items: [
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
        organization: "Mobile Systems Engineering",
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
    subheading: "Standalone projects scanned directly from my GitHub — click 'Repository Source' to explore the code.",
    projects: [
      {
        id: "koze-kost",
        title: "Koze-Kost — Smart Property & Boarding Platform",
        badge: "FEATURED • VUE 3 + LARAVEL + LEAFLET",
        tagline: "All-in-One Boarding House Discovery with AI Chat & Geospatial Maps",
        description: "A modern full-stack accommodation portal connecting boarding house seekers, property owners, and administrators. Powered by Vue.js 3 (Inertia.js), Laravel backend, Tailwind CSS v4, and Leaflet interactive map rendering. Features AI chat accommodations recommendations, real-time owner-seeker communication, facility management, and password recovery workflows.",
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
      },
      {
        id: "visionfilter-pcvk",
        title: "VisionFilter — Image Processing & Convolution Engine",
        badge: "COMPUTER VISION • OPENCV",
        tagline: "Spatial Filtering, Cumulative Distribution Function & Histograms",
        description: "Computational computer vision and digital image processing pipeline built in Python with OpenCV and NumPy. Implements customized spatial convolutions, edge enhancement filters, multi-channel histogram equalizations, and normalized Cumulative Distribution Function (CDF) curve evaluations on image datasets.",
        metrics: "Zero-Difference Validation • Normalized CDF Curves",
        tags: ["Python", "OpenCV", "NumPy", "Computer Vision", "Google Colab"],
        codeUrl: "https://github.com/m-fatahillah/PCVK26_15_FATAH",
        demoUrl: "https://github.com/m-fatahillah/PCVK26_15_FATAH"
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
