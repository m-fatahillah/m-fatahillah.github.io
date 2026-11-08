/**
 * PORTFOLIO DATA CONFIGURATION
 * Verified production repositories from https://github.com/m-fatahillah and team capstones.
 * M. Fatahillah Athabrani • Informatics Engineering, Politeknik Negeri Malang (POLINEMA)
 */
window.PORTFOLIO_DATA = {
  profile: {
    name: "M. Fatahillah Athabrani",
    handle: "m-fatahillah",
    badge: "Available for 2026 Opportunities",
    headlinePrefix: "Hey, I'm",
    typewriterRoles: [
      "Sign.L (Flutter & TensorFlow Lite)",
      "Backend Systems (Lab IVSS)",
      "Full-Stack Web (Vue 3 & Laravel)",
      "Interactive Geospatial GIS (Koze-Kost)"
    ],
    bio: "Informatics Engineering student at State Polytechnic of Malang (POLINEMA). Currently co-engineering Sign.L (an on-device ML sign language learning platform), the IVSS Lab management system as a Backend Developer, and the Koze-Kost discovery web app — passionate about real-world software craft.",
    location: "Malang, Indonesia (WIB • UTC+7)",
    email: "fatahcrown789@gmail.com",
    githubUrl: "https://github.com/m-fatahillah",
    linkedinUrl: "https://linkedin.com/in/m-fatahillah",
    resumeUrl: "#",
    metrics: [
      { value: "Sign.L", label: "Active Mobile ML" },
      { value: "Lab IVSS", label: "Backend Developer" },
      { value: "Koze-Kost", label: "Full-Stack Web" }
    ],
    terminalPreview: {
      user: "fatahillah@polinema-node",
      cmd: "fatahillah --status --active-projects",
      output: [
        "PBL-S5-Sign.L       [ACTIVE • Flutter • TFLite • Real-Time Camera • Gamification]",
        "pbl-lab-ivss        [Backend Dev • PHP 8.2 • PostgreSQL • Docker • AI Vector Search]",
        "koze-kost-project   [Full-Stack • Vue 3 • Inertia.js • Laravel • Leaflet Maps]"
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
    "Flutter", "Dart", "TensorFlow Lite", "PHP 8.2", "Laravel", 
    "Vue.js 3", "Inertia.js", "PostgreSQL", "Docker", "Nginx", 
    "Leaflet Maps", "Provider", "Python", "Scikit-Learn", "Git"
  ],

  about: {
    sectionNum: "01 / ABOUT ME",
    heading: "Engineering Intelligent & Scalable Multiplatform Systems",
    quote: "Building real-time on-device ML mobile apps, robust backend services, and geospatial web platforms.",
    body: "I am an Informatics Engineering student at State Polytechnic of Malang (POLINEMA). My active engineering focus centers on building Sign.L (an on-device TensorFlow Lite computer vision learning app in Flutter), architecting relational PostgreSQL backend services for the IVSS Laboratory platform, and developing modern full-stack web applications with Vue 3 and Laravel.",
    highlights: [
      { title: "Mobile & Edge ML (Sign.L)", desc: "Integrating tflite_flutter, real-time camera processing, and Duolingo-style gamification." },
      { title: "Backend Architecture (Lab IVSS)", desc: "PostgreSQL schemas, RBAC multi-role authorization, and Dockerized Nginx services." },
      { title: "Full-Stack & GIS (Koze-Kost)", desc: "Vue 3, Inertia.js, and Laravel backends with interactive Leaflet geospatial mapping." }
    ]
  },

  expertise: {
    sectionNum: "02 / EXPERTISE",
    heading: "Core Competence & Technical Stack",
    subheading: "Verified technologies actively deployed in live capstone projects and production environments.",
    categories: [
      {
        id: "mobile-ml",
        title: "Mobile & On-Device ML",
        description: "Developing cross-platform Flutter applications powered by on-device TensorFlow Lite models and real-time camera inference.",
        tags: ["Flutter", "Dart", "tflite_flutter", "Camera Stream", "Provider (Modified MVC)", "Lottie Gamification"]
      },
      {
        id: "backend",
        title: "Backend & Database Engineering",
        description: "Structuring secure relational databases, custom MVC architectures, multi-role RBAC, and containerized microservices.",
        tags: ["PHP 8.2", "PostgreSQL", "Laravel 11", "MySQL", "RBAC Security", "REST APIs", "OpenAI Embeddings"]
      },
      {
        id: "web-gis",
        title: "Full-Stack Web & GIS",
        description: "Developing modern reactive single-page applications with Inertia.js, Vue 3, and interactive geospatial mapping.",
        tags: ["Vue.js 3", "Inertia.js", "Tailwind CSS v4", "Leaflet Maps", "Zod", "Vite"]
      },
      {
        id: "devops-tools",
        title: "DevOps & Engineering Tools",
        description: "Ensuring containerized reproducibility, automated unit testing, and collaborative git workflow hygiene.",
        tags: ["Docker", "Docker Compose", "Nginx", "Git & GitHub", "PHPUnit", "Postman", "Linux / Bash"]
      }
    ]
  },

  timeline: {
    sectionNum: "03 / TIMELINE",
    heading: "Engineering Milestones & Active Capstones",
    subheading: "A timeline of delivered software platforms, laboratory systems, and active team collaborations.",
    items: [
      {
        period: "2025 — Present (Active)",
        role: "Mobile Software Developer — Sign.L Project",
        organization: "PBL Semester 5 Capstone, POLINEMA",
        location: "Malang, East Java",
        summary: "Co-developing an interactive sign language learning mobile application featuring on-device TensorFlow Lite gesture classification and gamification.",
        points: [
          "Engineered user authentication, registration, password recovery, and secure credential handling flows in Flutter.",
          "Implemented Modified MVC architecture (Thin Controller + Service Layer) using Provider for decoupled state management.",
          "Integrated camera preprocessing pipelines with tflite_flutter for low-latency on-device gesture recognition.",
          "Constructed engaging gamification loops with Lottie animations, celebratory confetti feedbacks, and level progress tracking."
        ]
      },
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
      }
    ]
  },

  showcase: {
    sectionNum: "04 / SHOWCASE",
    heading: "Featured Engineering Projects",
    subheading: "Active production capstones and standalone repositories — click 'Repository Source' to explore the code.",
    projects: [
      {
        id: "pbl-s5-signl",
        title: "Sign.L — Interactive Sign Language ML Learning",
        badge: "ACTIVE CAPSTONE • FLUTTER + TFLITE + GAMIFICATION",
        tagline: "Duolingo-Style Mobile App with On-Device Camera Gesture Inference",
        description: "An interactive mobile application designed to gamify sign language learning. Utilizes on-device TensorFlow Lite inference and real-time camera streams to validate user hand gestures with zero cloud latency. Structured under a Modified MVC architecture (Thin Controller + Service Layer) via Provider, featuring interactive Lottie feedback animations, XP progression, and secure authentication flows.",
        metrics: "On-Device TFLite Inference • Modified MVC • Lottie Gamification",
        tags: ["Flutter", "Dart", "tflite_flutter", "Camera Stream", "Provider", "Lottie", "Gamification"],
        codeUrl: "https://github.com/furalmiqbadi/PBL-S5-Sign.L",
        demoUrl: "https://github.com/furalmiqbadi/PBL-S5-Sign.L"
      },
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
