/**
 * PORTFOLIO DATA CONFIGURATION
 * Edit this file to update your portfolio content without touching the HTML structure.
 * Ready for static hosting (GitHub Pages, Vercel, Netlify).
 */
window.PORTFOLIO_DATA = {
  profile: {
    initials: "FP",
    brandName: "fatah.dev",
    name: "Fatah Pratama",
    role: "Software Engineer & Intelligent Systems Enthusiast",
    statusBadge: "Available for work",
    collaborationStatus: "Open to Collaborations & Roles",
    bio: "Fokus pada perancangan arsitektur web yang tangguh, rekayasa backend berperforma tinggi, pipeline integrasi data terotomatisasi, serta implementasi machine learning cerdas untuk menjawab tantangan dunia nyata.",
    email: "fatah.pratama@example.com",
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    metrics: [
      { value: "03+", label: "Tahun Pengalaman" },
      { value: "15+", label: "Proyek Selesai" },
      { value: "99.9%", label: "Uptime Mindset" }
    ]
  },

  navigation: [
    { label: "// about", href: "#about", section: "about" },
    { label: "// skills", href: "#skills", section: "skills" },
    { label: "// projects", href: "#projects", section: "projects" },
    { label: "// contact", href: "#contact", section: "contact" }
  ],

  skillCategories: [
    {
      id: "backend",
      num: "01 // Core",
      icon: "server",
      title: "Backend & Frameworks",
      description: "Pondasi logika bisnis modular, scalable, dan aman dengan arsitektur microservices dan monolitik modern.",
      tags: ["Laravel", "PHP 8.x", "Filament Admin", "REST APIs"]
    },
    {
      id: "database",
      num: "02 // Data",
      icon: "database",
      title: "Database & Data Pipeline",
      description: "Desain skema data relasional, pemodelan dimensional star-schema, dan otomasi alur ETL terintegrasi.",
      tags: ["PostgreSQL", "MySQL", "Pentaho PDI", "Supabase"]
    },
    {
      id: "ai",
      num: "03 // AI",
      icon: "cpu",
      title: "AI & Vision Systems",
      description: "Implementasi computer vision interaktif, ekstraksi koordinat gesture, dan inferensi model on-device yang ringan.",
      tags: ["OpenCV", "TensorFlow Lite", "Python", "Computer Vision Models"]
    },
    {
      id: "tools",
      num: "04 // Ops",
      icon: "terminal",
      title: "Tools & Workflow",
      description: "Lingkungan kerja kontainerisasi, pengujian API terstruktur, version control teratur, dan ekosistem Linux.",
      tags: ["Git", "Docker", "Postman", "Linux"]
    }
  ],

  projects: [
    {
      id: "gesture-sign-ai",
      category: "Computer Vision / Sign Language AI",
      title: "GestureSign AI — Sistem Pengenalan Isyarat Gamifikasi",
      description: "Sistem interaktif pengenalan gesture bahasa isyarat real-time berbasis TensorFlow Lite dan MediaPipe on-device dengan modul gamifikasi edukatif untuk mempercepat akselerasi pembelajaran bahasa isyarat secara presisi.",
      tags: ["TensorFlow Lite", "Python", "OpenCV", "MediaPipe", "WebSockets"],
      demoUrl: "#",
      codeUrl: "https://github.com",
      featured: true
    },
    {
      id: "transact-etl",
      category: "Data Warehouse & ETL Pipeline",
      title: "TransactETL — Enterprise Data Warehouse Architecture",
      description: "Arsitektur star-schema dimensional dan pipeline otomatisasi integrasi data transaksi berskala jutaan baris memakai Pentaho Data Integrator (Kettle) dan PostgreSQL untuk analitik bisnis komprehensif.",
      tags: ["Pentaho PDI", "PostgreSQL", "Star Schema", "ETL Automation", "SQL"],
      demoUrl: "#",
      codeUrl: "https://github.com",
      featured: false
    },
    {
      id: "estate-core-sqa",
      category: "Marketplace & SQA ISO/IEC 25010",
      title: "EstateCore — Property Management & SQA Audited Platform",
      description: "Platform web manajemen properti dengan arsitektur backend kokoh (Laravel & Filament) yang divalidasi pengujian kualitas komprehensif standar ISO/IEC 25010: Functional Suitability, Performance, dan Security.",
      tags: ["Laravel", "Filament Admin", "MySQL", "PHPUnit", "ISO/IEC 25010"],
      demoUrl: "#",
      codeUrl: "https://github.com",
      featured: false
    }
  ],

  contact: {
    badge: "Let's Connect",
    headline: "Tertarik Berkolaborasi atau Diskusi Proyek?",
    description: "Saya selalu terbuka untuk diskusi mengenai arsitektur backend, otomasi data pipeline, implementasi computer vision, atau peluang kerja sama baru.",
    directEmailLabel: "Direct Email:",
    footerCopyright: "© 2026 Fatah Pratama. Minimal, modern & quiet engineering.",
    footerNote: "Static SPA • GitHub Pages & Vercel Ready"
  }
};

