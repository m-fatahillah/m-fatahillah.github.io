# Developer Portfolio — Static SPA (Single Page Application)

Website portofolio developer modern, minimalis, dan responsif dengan palet warna dingin terkurasi (**Slate Charcoal & Sierra Blue**), arsitektur modular (*content-driven*), serta siap dideploy langsung ke **GitHub Pages** atau **Vercel** tanpa backend.

---

## 🎨 Palet Warna & Desain
- **Background Utama:** Charcoal Slate pekat (`#0c0f14` / `#0f141c`) dengan ambient radial lighting.
- **Card & Container:** Dark Slate halus (`#161b22`) dengan border dingin tipis (`#26303d`).
- **Aksen Utama:** Sierra Blue / Muted Glacier (`#8da4b8`), hover state (`#a3b8cc`).
- **Teks Utama:** Off-white bersih / Chalk (`#f5f6f8` untuk heading, `#d0d5dd` untuk deskripsi).
- **Teks Muted:** Cool Slate abu-abu redup (`#7d8a9a`).
- **Glow & Border Hover:** Sierra Blue transparan tipis (`rgba(141, 164, 184, 0.25)`).
- **Tipografi:** *Plus Jakarta Sans* untuk hierarki utama dan *JetBrains Mono* untuk badge, tag, dan metadata.

---

## 📁 Struktur Proyek (Content-Driven Architecture)
```text
web profile/
│
├── index.html            # File HTML statis utama (UI & renderer modular)
├── data/
│   └── portfolio.js      # PUSAT DATA: profil, bio, skills, dan projects
└── README.md             # Panduan penggunaan & deployment
```

### Cara Memperbarui Konten (Tanpa Mengedit HTML):
Cukup buka file `data/portfolio.js` dan ubah nilai pada objek konfigurasi:
- **`profile`**: Mengubah nama, peran, bio, email, tautan sosial, dan angka statistik.
- **`skillCategories`**: Menambah/mengubah kategori keahlian dan daftar badge teknologi.
- **`projects`**: Menambah/mengubah daftar portofolio (kategori, judul, deskripsi, tag, tautan demo & GitHub).
- **`contact`**: Menyesuaikan pesan penutup dan teks copyright.

---

## 🚀 Panduan Deployment

### 1. GitHub Pages (Gratis & Cepat)
1. Buat repositori baru di GitHub (misal: `portfolio` atau `<username>.github.io`).
2. Push file `index.html`, `data/`, dan asset ke branch `main`.
3. Buka **Settings** repositori > **Pages**.
4. Pada bagian **Build and deployment**, pilih Source: **Deploy from a branch** (Branch: `main` / root).
5. Klik **Save**. Website Anda akan langsung aktif di `https://<username>.github.io/<repo-name>/`.

### 2. Vercel
1. Install Vercel CLI (`npm i -g vercel`) atau import repo langsung dari dashboard [vercel.com](https://vercel.com).
2. Jalankan perintah `vercel` di root folder proyek ini.
3. Karena ini 100% static HTML, Vercel akan langsung mendeteksi dan menerbitkannya dalam hitungan detik.

### 3. Laragon / Local Preview
Buka browser dan akses:
```text
http://localhost/web%20profile/
```
Atau cukup klik dua kali file `index.html` di File Explorer.

---

## ✨ Fitur Utama
- **100% Responsif & Mobile-First:** Grid otomatis 1 kolom di HP dan 2 kolom di tablet/desktop (`grid-cols-1 md:grid-cols-2`), tanpa horizontal scroll atau teks terpotong.
- **Floating Glassmorphism Navbar:** Desain pill melayang dengan smooth-scroll `#about`, `#skills`, `#projects`, `#contact`, menu drawer mobile, serta indikator pulsing `Available for work`.
- **Copy-to-Clipboard Interaktif:** Tombol "Salin Email" dengan tooltip pop-up *"Tersalin!"* otomatis selama 2 detik.
- **Active Scrollspy:** Navigasi otomatis menandai section yang aktif saat halaman digulir.
- **GPU-Accelerated Smooth Hover:** Transisi kartu menggunakan `transform` dan `opacity` (durasi 200–300ms) sehingga ringan dan hemat baterai di HP.
