/**
 * PORTFOLIO DATA CONFIGURATION
 * Dikelola secara modular — mudah diedit tanpa perlu mengubah struktur HTML.
 */
window.PORTFOLIO_DATA = {
  profile: {
    name: "M. Fatahillah",
    handle: "m-fatahillah",
    avatarInitials: "MF",
    title: "Software Engineer",
    subtitle: "Backend Systems, Data Pipelines & Computer Vision",
    location: "Indonesia (WIB • UTC+7)",
    availability: "Available for roles & projects",
    bio: "Halo, saya Fatahillah. Saya seorang software engineer yang berfokus membangun layanan backend yang reliabel, otomatisasi pipeline data berskala besar, serta implementasi sistem computer vision praktis untuk menyelesaikan problem nyata.",
    email: "fatahcrown789@gmail.com",
    githubUrl: "https://github.com/m-fatahillah",
    linkedinUrl: "https://linkedin.com/in/m-fatahillah",
    resumeUrl: "#", // ganti dengan link Google Drive / PDF CV Anda jika ada
    stats: [
      { label: "Pengalaman", value: "3+ Tahun" },
      { label: "Proyek Selesai", value: "15+ Proyek" },
      { label: "Fokus Utama", value: "Backend & Data" }
    ]
  },

  navigation: [
    { label: "Tentang", href: "#about", id: "about" },
    { label: "Pengalaman", href: "#experience", id: "experience" },
    { label: "Proyek", href: "#projects", id: "projects" },
    { label: "Keahlian", href: "#skills", id: "skills" },
    { label: "Kontak", href: "#contact", id: "contact" }
  ],

  experience: [
    {
      period: "2024 — Sekarang",
      role: "Backend & Intelligent Systems Developer",
      organization: "Freelance & R&D Projects",
      description: "Merancang arsitektur API berskala menengah, membangun otomasi pipeline data ETL dengan Pentaho & PostgreSQL, serta mengimplementasikan edge-inference computer vision menggunakan TensorFlow Lite.",
      highlights: [
        "Membangun REST API modular menggunakan Laravel & Filament Admin",
        "Mengembangkan model pengenalan gesture tangan interaktif dengan performa 45+ FPS",
        "Optimasi query database relational & pemodelan data star-schema"
      ]
    },
    {
      period: "2023 — 2024",
      role: "Software Quality & Web Engineer",
      organization: "Academic & Client Projects",
      description: "Mengembangkan platform web aplikasi terintegrasi serta menerapkan pengujian jaminan mutu software (SQA) berbasis standar internasional ISO/IEC 25010.",
      highlights: [
        "Unit testing komprehensif menggunakan PHPUnit dengan code-coverage tinggi",
        "Performance testing dan load-testing concurrency menggunakan Apache JMeter",
        "Implementasi secure authentication & role-based access control (RBAC)"
      ]
    }
  ],

  projects: [
    {
      id: "gesturesign-ai",
      title: "GestureSign AI",
      tagline: "Sistem Pengenalan Isyarat Gamifikasi Real-Time",
      description: "Aplikasi pengenalan gesture bahasa isyarat interaktif menggunakan TensorFlow Lite dan MediaPipe. Menjalankan inferensi landmark tangan secara on-device di browser untuk memangkas latensi dan biaya server GPU, dipadukan modul scoring edukatif.",
      tags: ["Python", "TensorFlow Lite", "MediaPipe", "OpenCV", "WebSockets"],
      category: "Computer Vision / AI",
      githubUrl: "https://github.com/m-fatahillah",
      demoUrl: "#",
      metrics: "Inferensi 45+ FPS di perangkat standar tanpa cloud GPU"
    },
    {
      id: "transact-etl",
      title: "TransactETL Data Warehouse",
      tagline: "Pipeline ETL & Skema Dimensional Transaksi",
      description: "Perancangan arsitektur data warehouse dimensional star-schema untuk mengonsolidasikan data transaksi heterogen volume tinggi. Otomasi proses ETL berkala memakai Pentaho Data Integrator (Kettle) menuju PostgreSQL untuk analitik bisnis yang responsif.",
      tags: ["PostgreSQL", "Pentaho PDI", "Star Schema", "SQL", "ETL Automation"],
      category: "Data Engineering",
      githubUrl: "https://github.com/m-fatahillah",
      demoUrl: "#",
      metrics: "Memproses hingga 1.2M baris data per batch run"
    },
    {
      id: "estate-core",
      title: "EstateCore Platform",
      tagline: "Marketplace Properti & Audit Mutu ISO/IEC 25010",
      description: "Sistem web manajemen properti dengan arsitektur backend kokoh (Laravel & Filament). Diaudit secara formal menggunakan standar ISO/IEC 25010 mencakup Functional Suitability, Performance Efficiency, dan Security audit.",
      tags: ["Laravel 11", "Filament Admin", "MySQL", "PHPUnit", "JMeter SQA"],
      category: "Full Stack & SQA",
      githubUrl: "https://github.com/m-fatahillah",
      demoUrl: "#",
      metrics: "100% test passing rate & <320ms avg response time"
    }
  ],

  skills: {
    backend: {
      title: "Backend & Architecture",
      items: ["Laravel", "PHP 8+", "Filament Admin", "RESTful APIs", "Microservices Concepts"]
    },
    data: {
      title: "Databases & Data Pipeline",
      items: ["PostgreSQL", "MySQL", "Pentaho PDI (Kettle)", "Star Schema (OLAP)", "Supabase"]
    },
    ai: {
      title: "AI & Computer Vision",
      items: ["Python", "OpenCV", "TensorFlow Lite", "MediaPipe", "Edge Inference"]
    },
    tools: {
      title: "DevOps & Tools",
      items: ["Git & GitHub", "Docker", "Postman", "Linux / Bash", "PHPUnit", "JMeter"]
    }
  },

  contact: {
    heading: "Mari Berkolaborasi",
    subheading: "Sedang terbuka untuk peluang kerja full-time, proyek freelance, atau diskusi teknis seputar rekayasa sistem.",
    email: "fatahcrown789@gmail.com",
    footerText: "Dibuat dengan pendekatan bersih, performa tinggi & tanpa beban dependensi."
  }
};
