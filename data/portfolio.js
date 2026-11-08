/**
 * PORTFOLIO DATA CONFIGURATION
 * Real projects scanned directly from https://github.com/m-fatahillah
 * Authentic engineering credentials • Polinema Informatics Engineering
 */
window.PORTFOLIO_DATA = {
  profile: {
    name: "M. Fatahillah Athabrani",
    handle: "m-fatahillah",
    badge: "Available for 2026 Opportunities",
    headlinePrefix: "Hey, I'm",
    typewriterRoles: [
      "Flutter Clean Architecture",
      "Laravel RESTful APIs",
      "Machine Learning Pipelines",
      "Computer Vision with OpenCV"
    ],
    bio: "Informatics Engineering student at State Polytechnic of Malang (POLINEMA). Specializing in mobile engineering with Clean Architecture, modular Laravel backend services, unsupervised machine learning pipelines, and digital image processing with OpenCV.",
    location: "Malang, Indonesia (WIB • UTC+7)",
    email: "fatahcrown789@gmail.com",
    githubUrl: "https://github.com/m-fatahillah",
    linkedinUrl: "https://linkedin.com/in/m-fatahillah",
    resumeUrl: "#",
    metrics: [
      { value: "33+", label: "GitHub Repositories" },
      { value: "4+", label: "Core Tech Disciplines" },
      { value: "POLINEMA", label: "Informatics Major" }
    ],
    terminalPreview: {
      user: "fatahillah@polinema-node",
      cmd: "gh repo list m-fatahillah --visibility public",
      output: [
        "244107020121-mobile-course [Flutter Clean Architecture • SOLID • Riverpod]",
        "PraktikumPWL              [Laravel 10 • Sanctum REST API • PHPUnit]",
        "Machine-Learning-...      [K-Means • DBSCAN • Agglomerative Clustering]",
        "PCVK26_15_FATAH           [OpenCV • CDF Histogram • Image Processing]"
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
    "Flutter", "Dart", "Laravel", "PHP 8.x", "Python", 
    "OpenCV", "Scikit-Learn", "PostgreSQL", "MySQL", 
    "Riverpod", "Clean Architecture", "Docker", "Git", "Linux"
  ],

  about: {
    sectionNum: "01 / ABOUT ME",
    heading: "Informatics Engineering & Multiplatform Systems",
    quote: "Building clean-architecture mobile software, modular backend APIs, and analytical machine learning pipelines.",
    body: "I am an Informatics Engineering student at State Polytechnic of Malang (POLINEMA) focusing on software engineering principles. My work revolves around implementing SOLID-driven Clean Architecture in Flutter, engineering secure REST APIs in Laravel, exploring unsupervised machine learning clustering, and developing image processing pipelines using OpenCV and Python.",
    highlights: [
      { title: "Mobile Clean Architecture", desc: "Feature-First structure with Domain, Data, Presentation layers and Riverpod DI." },
      { title: "Backend & API Security", desc: "Relational database schema modeling, Sanctum token authentication, and PHPUnit." },
      { title: "ML & Computer Vision", desc: "Clustering algorithms (K-Means, DBSCAN) and OpenCV image processing pipelines." }
    ]
  },

  expertise: {
    sectionNum: "02 / EXPERTISE",
    heading: "Core Competence & Technical Stack",
    subheading: "Verified technologies actively used in my GitHub repositories and academic capstones.",
    categories: [
      {
        id: "mobile",
        title: "Mobile App Development",
        description: "Designing enterprise mobile architectures using Flutter & Dart with strict separation of concerns.",
        tags: ["Flutter", "Dart", "Clean Architecture", "Riverpod", "Firebase FCM", "Offline-First Storage"]
      },
      {
        id: "backend",
        title: "Backend & RESTful APIs",
        description: "Structuring scalable server-side systems, relational database models, and token-based authentication.",
        tags: ["Laravel", "PHP 8.x", "Sanctum Auth", "MySQL", "PostgreSQL", "Postman Collections"]
      },
      {
        id: "ml-cv",
        title: "Machine Learning & Vision",
        description: "Building clustering models and executing digital image processing algorithms on image datasets.",
        tags: ["Python", "OpenCV", "Scikit-Learn", "NumPy", "Pandas", "Matplotlib", "Jupyter"]
      },
      {
        id: "tools",
        title: "Engineering Tools & QA",
        description: "Applying version control hygiene, automated unit testing, and containerized development.",
        tags: ["Git & GitHub", "PHPUnit", "Widget Testing", "Docker", "Linux / Bash", "Vite"]
      }
    ]
  },

  timeline: {
    sectionNum: "03 / TIMELINE",
    heading: "Academic Roadmap & Technical Milestones",
    subheading: "Continuous engineering progression and repository development at POLINEMA.",
    items: [
      {
        period: "2025 — Present",
        role: "Informatics Engineering Student & Mobile Developer",
        organization: "State Polytechnic of Malang (POLINEMA)",
        location: "Malang, East Java",
        summary: "Advanced coursework in Mobile App Engineering, Computer Vision, and Machine Learning.",
        points: [
          "Implemented 3-layer Clean Architecture (Feature-First) with centralized Riverpod Dependency Injection.",
          "Integrated Firebase Cloud Messaging (FCM), token security, and local offline-first database persistence.",
          "Constructed digital image enhancement pipelines and multi-channel histogram equalizations in OpenCV."
        ]
      },
      {
        period: "2024 — 2025",
        role: "Web & Database Systems Engineer",
        organization: "State Polytechnic of Malang (POLINEMA)",
        location: "Malang, East Java",
        summary: "Engineered web architectures, relational database management systems, and automated test pipelines.",
        points: [
          "Developed full-stack web applications and authenticated REST APIs using Laravel with Sanctum tokens.",
          "Designed normalized database schemas, relational migrations, and SQL optimizations for business entities.",
          "Conducted automated test assertions with PHPUnit and documented API endpoints in Postman collections."
        ]
      }
    ]
  },

  showcase: {
    sectionNum: "04 / SHOWCASE",
    heading: "Engineered Projects & GitHub Repositories",
    subheading: "Real projects scanned directly from my GitHub — click 'Repository Source' to inspect the code.",
    projects: [
      {
        id: "mobile-clean-architecture",
        title: "Mobile Course — Clean Architecture & Mobile Systems",
        badge: "FLUTTER • CLEAN ARCHITECTURE",
        tagline: "Feature-First Flutter Engineering with SOLID Principles & Riverpod DI",
        description: "A comprehensive Flutter engineering repository demonstrating production-ready Clean Architecture (Domain, Data, Presentation layers), SOLID principles, Riverpod centralized dependency injection, Firebase Cloud Messaging (FCM), secure local storage, and automated unit/widget test suites.",
        metrics: "SOLID Principles • Riverpod DI • Unit & Widget Tested",
        tags: ["Flutter", "Dart", "Riverpod", "Clean Architecture", "FCM", "SQLite / Hive"],
        codeUrl: "https://github.com/m-fatahillah/244107020121-mobile-course",
        demoUrl: "https://github.com/m-fatahillah/244107020121-mobile-course"
      },
      {
        id: "praktikum-pwl",
        title: "PraktikumPWL — Enterprise Laravel & REST API",
        badge: "LARAVEL 10 • SANCTUM API",
        tagline: "Modular Backend with Token Authentication, Postman Specs & PHPUnit",
        description: "Full-stack Laravel web application and RESTful API backend. Features relational database migrations across multiple entities (Users, Products, Posts, Categories, Todos), token-based Laravel Sanctum authentication, Postman API collections, and automated test verification via PHPUnit.",
        metrics: "Sanctum Auth • Postman Collection • PHPUnit Test Suite",
        tags: ["Laravel", "PHP 8.x", "Sanctum API", "MySQL", "Tailwind CSS", "PHPUnit"],
        codeUrl: "https://github.com/m-fatahillah/PraktikumPWL",
        demoUrl: "https://github.com/m-fatahillah/PraktikumPWL"
      },
      {
        id: "ml-customer-clustering",
        title: "Customer Credit Segmentation & Unsupervised ML",
        badge: "SCIKIT-LEARN • CLUSTERING",
        tagline: "Credit Card Analytics using K-Means, DBSCAN & Agglomerative Models",
        description: "An unsupervised machine learning research repository exploring customer credit card behavioral segmentation. Implements K-Means, DBSCAN (with Elbow Method parameter optimization), and Agglomerative Hierarchical Clustering, evaluated through Silhouette Scores and Davies-Bouldin Index (DBI).",
        metrics: "Silhouette Score & DBI Evaluated • DBSCAN & K-Means",
        tags: ["Python", "Scikit-Learn", "K-Means", "DBSCAN", "Pandas", "Matplotlib"],
        codeUrl: "https://github.com/m-fatahillah/Machine-Learning-M.Fatahillah-Athabrani-244107020121",
        demoUrl: "https://github.com/m-fatahillah/Machine-Learning-M.Fatahillah-Athabrani-244107020121"
      },
      {
        id: "pcvk-image-processing",
        title: "PCVK — Computer Vision & Digital Image Processing",
        badge: "OPENCV • PYTHON",
        tagline: "Spatial Filtering, Cumulative Distribution Function & Histograms",
        description: "Digital image processing and computer vision pipeline developed in Python using OpenCV and NumPy on Google Colab. Implements spatial filtering convolutions, multi-channel histogram equalizations, and normalized Cumulative Distribution Function (CDF) curve analysis on image datasets.",
        metrics: "Zero-Difference Validation • Normalized CDF Analysis",
        tags: ["Python", "OpenCV", "NumPy", "Computer Vision", "Google Colab", "Jupyter"],
        codeUrl: "https://github.com/m-fatahillah/PCVK26_15_FATAH",
        demoUrl: "https://github.com/m-fatahillah/PCVK26_15_FATAH"
      }
    ]
  },

  contact: {
    sectionNum: "05 / CONTACT",
    heading: "Let's Connect & Collaborate",
    subheading: "Have an internship opportunity, an open-source collaboration, or an engineering project? Feel free to reach out.",
    email: "fatahcrown789@gmail.com",
    footerCopy: "© 2026 M. Fatahillah Athabrani. State Polytechnic of Malang. All Rights Reserved."
  }
};
