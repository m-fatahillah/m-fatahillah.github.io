import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

void main() {
  runApp(const PortfolioApp());
}

class PortfolioApp extends StatelessWidget {
  const PortfolioApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Fatah Pratama — Software Engineer Portfolio',
      debugShowCheckedModeBanner: false,
      theme: ThemeData.dark().copyWith(
        scaffoldBackgroundColor: const Color(0xFF0C0F14),
        colorScheme: const ColorScheme.dark(
          primary: Color(0xFF8DA4B8),
          surface: Color(0xFF161B22),
        ),
      ),
      home: const PortfolioHomePage(),
    );
  }
}

class PortfolioHomePage extends StatefulWidget {
  const PortfolioHomePage({super.key});

  @override
  State<PortfolioHomePage> createState() => _PortfolioHomePageState();
}

class _PortfolioHomePageState extends State<PortfolioHomePage> {
  final ScrollController _scrollController = ScrollController();
  final GlobalKey _aboutKey = GlobalKey();
  final GlobalKey _skillsKey = GlobalKey();
  final GlobalKey _projectsKey = GlobalKey();
  final GlobalKey _contactKey = GlobalKey();

  String _copiedText = 'Salin Email';
  bool _isCopied = false;

  void _scrollTo(GlobalKey key) {
    final context = key.currentContext;
    if (context != null) {
      Scrollable.ensureVisible(
        context,
        duration: const Duration(milliseconds: 600),
        curve: Curves.easeInOutCubic,
      );
    }
  }

  void _copyEmail() {
    Clipboard.setData(const ClipboardData(text: 'fatah.pratama@example.com'));
    setState(() {
      _copiedText = 'Tersalin!';
      _isCopied = true;
    });

    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        backgroundColor: const Color(0xFF161B22),
        shape: RoundedRectangleBorder(
          side: const BorderSide(color: Color(0xFF8DA4B8), width: 0.8),
          borderRadius: BorderRadius.circular(10),
        ),
        behavior: SnackBarBehavior.floating,
        width: 260,
        content: const Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.check_circle_outline, color: Color(0xFF8DA4B8), size: 18),
            SizedBox(width: 8),
            Text(
              'Email berhasil disalin!',
              style: TextStyle(
                color: Color(0xFFF5F6F8),
                fontFamily: 'monospace',
                fontSize: 12,
              ),
            ),
          ],
        ),
        duration: const Duration(seconds: 2),
      ),
    );

    Future.delayed(const Duration(seconds: 2), () {
      if (mounted) {
        setState(() {
          _copiedText = 'Salin Email';
          _isCopied = false;
        });
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final isMobile = screenWidth < 700;
    final isCompactNav = screenWidth < 850;

    return Scaffold(
      body: Stack(
        children: [
          // Background ambient gradient
          Positioned.fill(
            child: Container(
              decoration: const BoxDecoration(
                color: Color(0xFF0C0F14),
                gradient: RadialGradient(
                  center: Alignment(0, -0.9),
                  radius: 1.1,
                  colors: [
                    Color(0x188DA4B8),
                    Color(0xFF0C0F14),
                  ],
                ),
              ),
            ),
          ),

          // Scrollable content
          SingleChildScrollView(
            controller: _scrollController,
            padding: EdgeInsets.symmetric(
              horizontal: isMobile ? 16.0 : 36.0,
              vertical: isMobile ? 90.0 : 110.0,
            ),
            child: Center(
              child: ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: 960),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    // 1. HERO SECTION
                    Container(key: _aboutKey),
                    _buildHeroSection(isMobile),
                    const SizedBox(height: 70),

                    // 2. TECH STACK SECTION
                    Container(key: _skillsKey),
                    _buildSkillsSection(isMobile),
                    const SizedBox(height: 70),

                    // 3. FEATURED PROJECTS SECTION
                    Container(key: _projectsKey),
                    _buildProjectsSection(isMobile),
                    const SizedBox(height: 70),

                    // 4. CONTACT SECTION
                    Container(key: _contactKey),
                    _buildContactSection(isMobile),
                    const SizedBox(height: 50),

                    // FOOTER
                    _buildFooter(isMobile),
                  ],
                ),
              ),
            ),
          ),

          // FLOATING NAVBAR (Pill Glassmorphism)
          Positioned(
            top: 14,
            left: 12,
            right: 12,
            child: Center(
              child: ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: 820),
                child: _buildFloatingNavbar(isMobile, isCompactNav),
              ),
            ),
          ),
        ],
      ),
    );
  }

  // --- FLOATING NAVBAR ---
  Widget _buildFloatingNavbar(bool isMobile, bool isCompactNav) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
      decoration: BoxDecoration(
        color: const Color(0xFF161B22).withAlpha(225),
        borderRadius: BorderRadius.circular(999),
        border: Border.all(color: const Color(0xFF26303D), width: 1),
        boxShadow: const [
          BoxShadow(
            color: Colors.black54,
            blurRadius: 16,
            offset: Offset(0, 6),
          ),
        ],
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          // Logo / Monogram
          InkWell(
            onTap: () => _scrollTo(_aboutKey),
            borderRadius: BorderRadius.circular(999),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Container(
                  width: 28,
                  height: 28,
                  decoration: BoxDecoration(
                    color: const Color(0xFF1A202C),
                    shape: BoxShape.circle,
                    border: Border.all(color: const Color(0xFF26303D)),
                  ),
                  child: const Center(
                    child: Text(
                      'FP',
                      style: TextStyle(
                        color: Color(0xFF8DA4B8),
                        fontSize: 11,
                        fontWeight: FontWeight.bold,
                        fontFamily: 'monospace',
                      ),
                    ),
                  ),
                ),
                if (!isMobile) ...[
                  const SizedBox(width: 8),
                  const Text(
                    'fatah.dev',
                    style: TextStyle(
                      color: Color(0xFFF5F6F8),
                      fontSize: 13,
                      fontFamily: 'monospace',
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ],
              ],
            ),
          ),

          // Desktop Nav Links
          if (!isCompactNav)
            Flexible(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                mainAxisSize: MainAxisSize.min,
                children: [
                  _navButton('// about', () => _scrollTo(_aboutKey)),
                  _navButton('// skills', () => _scrollTo(_skillsKey)),
                  _navButton('// projects', () => _scrollTo(_projectsKey)),
                  _navButton('// contact', () => _scrollTo(_contactKey)),
                ],
              ),
            ),

          // Status Badge: Available for work
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 4),
            decoration: BoxDecoration(
              color: const Color(0xFF8DA4B8).withAlpha(28),
              borderRadius: BorderRadius.circular(999),
              border: Border.all(color: const Color(0xFF8DA4B8).withAlpha(60)),
            ),
            child: const Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Icon(Icons.circle, size: 7, color: Color(0xFF8DA4B8)),
                SizedBox(width: 5),
                Text(
                  'Available',
                  style: TextStyle(
                    color: Color(0xFFF5F6F8),
                    fontSize: 11,
                    fontFamily: 'monospace',
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _navButton(String label, VoidCallback onTap) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 2),
      child: TextButton(
        onPressed: onTap,
        style: TextButton.styleFrom(
          foregroundColor: const Color(0xFF7D8A9A),
          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
          minimumSize: Size.zero,
          tapTargetSize: MaterialTapTargetSize.shrinkWrap,
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
        ),
        child: Text(
          label,
          style: const TextStyle(fontSize: 11, fontFamily: 'monospace'),
        ),
      ),
    );
  }

  // --- HERO SECTION ---
  Widget _buildHeroSection(bool isMobile) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // Status Capsule
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
          decoration: BoxDecoration(
            color: const Color(0xFF161B22),
            borderRadius: BorderRadius.circular(999),
            border: Border.all(color: const Color(0xFF26303D)),
          ),
          child: const Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(Icons.circle, size: 6, color: Color(0xFF8DA4B8)),
              SizedBox(width: 8),
              Text(
                'Open to Collaborations & Roles',
                style: TextStyle(
                  color: Color(0xFF8DA4B8),
                  fontSize: 12,
                  fontFamily: 'monospace',
                ),
              ),
            ],
          ),
        ),
        const SizedBox(height: 18),

        // Headline
        Text(
          'Fatah Pratama',
          style: TextStyle(
            color: const Color(0xFFF5F6F8),
            fontSize: isMobile ? 32 : 44,
            fontWeight: FontWeight.w800,
            letterSpacing: -1.0,
            height: 1.1,
          ),
        ),
        const SizedBox(height: 10),
        Text(
          'Software Engineer & Intelligent Systems Enthusiast',
          style: TextStyle(
            color: const Color(0xFF8DA4B8),
            fontSize: isMobile ? 17 : 22,
            fontWeight: FontWeight.w600,
            letterSpacing: -0.3,
          ),
        ),
        const SizedBox(height: 16),

        // 2-3 Line Description
        ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 680),
          child: const Text(
            'Fokus pada perancangan arsitektur web yang tangguh, rekayasa backend berperforma tinggi, pipeline integrasi data terotomatisasi, serta implementasi machine learning cerdas untuk menjawab tantangan dunia nyata.',
            style: TextStyle(
              color: Color(0xFFD0D5DD),
              fontSize: 14,
              height: 1.6,
              fontWeight: FontWeight.w300,
            ),
          ),
        ),
        const SizedBox(height: 24),

        // Metrics Highlight Row
        Wrap(
          spacing: 10,
          runSpacing: 10,
          children: [
            _buildMetricBadge('03+', 'Tahun Pengalaman'),
            _buildMetricBadge('15+', 'Proyek Selesai'),
            _buildMetricBadge('99.9%', 'Uptime Mindset'),
          ],
        ),
        const SizedBox(height: 26),

        // CTA Buttons
        Wrap(
          spacing: 12,
          runSpacing: 12,
          children: [
            ElevatedButton.icon(
              onPressed: () => _scrollTo(_projectsKey),
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color(0xFF8DA4B8),
                foregroundColor: const Color(0xFF0C0F14),
                padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 13),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                elevation: 4,
              ),
              icon: const Icon(Icons.arrow_downward, size: 16),
              label: const Text(
                'Lihat Proyek',
                style: TextStyle(fontWeight: FontWeight.w700, fontSize: 13),
              ),
            ),
            OutlinedButton.icon(
              onPressed: () => _scrollTo(_contactKey),
              style: OutlinedButton.styleFrom(
                foregroundColor: const Color(0xFFF5F6F8),
                side: const BorderSide(color: Color(0xFF26303D)),
                padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 13),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
              ),
              icon: const Icon(Icons.send_outlined, size: 16, color: Color(0xFF8DA4B8)),
              label: const Text(
                'Hubungi Saya / CV',
                style: TextStyle(fontWeight: FontWeight.w600, fontSize: 13),
              ),
            ),
          ],
        ),
      ],
    );
  }

  Widget _buildMetricBadge(String value, String label) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
      decoration: BoxDecoration(
        color: const Color(0xFF161B22).withAlpha(180),
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: const Color(0xFF26303D)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: [
          Text(
            value,
            style: const TextStyle(
              color: Color(0xFF8DA4B8),
              fontSize: 16,
              fontWeight: FontWeight.bold,
              fontFamily: 'monospace',
            ),
          ),
          const SizedBox(height: 2),
          Text(
            label,
            style: const TextStyle(
              color: Color(0xFF7D8A9A),
              fontSize: 11,
              fontFamily: 'monospace',
            ),
          ),
        ],
      ),
    );
  }

  // --- SKILLS SECTION ---
  Widget _buildSkillsSection(bool isMobile) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _buildSectionHeader(
          tag: 'Capability Matrix',
          title: 'Core Tech Stack & Tools',
          subtitle: 'Kombinasi teknologi yang diuji dalam lingkungan produksi untuk keandalan arsitektur dan efisiensi eksekusi.',
        ),
        const SizedBox(height: 22),
        LayoutBuilder(
          builder: (context, constraints) {
            final cardWidth = constraints.maxWidth < 620 ? constraints.maxWidth : (constraints.maxWidth - 16) / 2;
            return Wrap(
              spacing: 16,
              runSpacing: 16,
              children: [
                SizedBox(
                  width: cardWidth,
                  child: _buildSkillCard(
                    icon: Icons.dns_outlined,
                    number: '01 // Core',
                    title: 'Backend & Frameworks',
                    description: 'Pondasi logika bisnis modular, scalable, dan aman dengan arsitektur modern.',
                    tags: ['Laravel', 'PHP 8.x', 'Filament Admin', 'REST APIs'],
                  ),
                ),
                SizedBox(
                  width: cardWidth,
                  child: _buildSkillCard(
                    icon: Icons.storage_outlined,
                    number: '02 // Data',
                    title: 'Database & Data Pipeline',
                    description: 'Desain skema data relasional, pemodelan star-schema, dan otomasi alur ETL.',
                    tags: ['PostgreSQL', 'MySQL', 'Pentaho PDI', 'Supabase'],
                  ),
                ),
                SizedBox(
                  width: cardWidth,
                  child: _buildSkillCard(
                    icon: Icons.psychology_outlined,
                    number: '03 // AI',
                    title: 'AI & Vision Systems',
                    description: 'Implementasi computer vision interaktif, gesture tracking, dan inferensi on-device.',
                    tags: ['OpenCV', 'TensorFlow Lite', 'Python', 'Computer Vision'],
                  ),
                ),
                SizedBox(
                  width: cardWidth,
                  child: _buildSkillCard(
                    icon: Icons.terminal_outlined,
                    number: '04 // Ops',
                    title: 'Tools & Environment',
                    description: 'Lingkungan kontainerisasi, pengujian API terstruktur, version control teratur.',
                    tags: ['Git & GitHub', 'Docker', 'Postman', 'Linux / Bash'],
                  ),
                ),
              ],
            );
          },
        ),
      ],
    );
  }

  Widget _buildSkillCard({
    required IconData icon,
    required String number,
    required String title,
    required String description,
    required List<String> tags,
  }) {
    return Container(
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        color: const Color(0xFF161B22),
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: const Color(0xFF26303D)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Wrap(
            alignment: WrapAlignment.spaceBetween,
            crossAxisAlignment: WrapCrossAlignment.center,
            spacing: 8,
            runSpacing: 6,
            children: [
              Container(
                padding: const EdgeInsets.all(7),
                decoration: BoxDecoration(
                  color: const Color(0xFF8DA4B8).withAlpha(25),
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Icon(icon, color: const Color(0xFF8DA4B8), size: 18),
              ),
              Text(
                number,
                style: const TextStyle(
                  color: Color(0xFF7D8A9A),
                  fontSize: 11,
                  fontFamily: 'monospace',
                ),
              ),
            ],
          ),
          const SizedBox(height: 12),
          Text(
            title,
            style: const TextStyle(
              color: Color(0xFFF5F6F8),
              fontSize: 15,
              fontWeight: FontWeight.bold,
            ),
          ),
          const SizedBox(height: 6),
          Text(
            description,
            style: const TextStyle(
              color: Color(0xFF7D8A9A),
              fontSize: 12,
              height: 1.4,
            ),
          ),
          const SizedBox(height: 14),
          const Divider(color: Color(0xFF26303D), height: 1),
          const SizedBox(height: 10),
          Wrap(
            spacing: 6,
            runSpacing: 6,
            children: tags.map((t) => _buildPillTag(t)).toList(),
          ),
        ],
      ),
    );
  }

  // --- FEATURED PROJECTS ---
  Widget _buildProjectsSection(bool isMobile) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _buildSectionHeader(
          tag: 'Selected Works',
          title: 'Featured Projects',
          subtitle: 'Arsitektur nyata yang memecahkan problem data, machine learning, dan skalabilitas web.',
        ),
        const SizedBox(height: 22),
        _buildProjectCard(
          badge: 'Computer Vision / Sign Language AI',
          status: '2026 // Production',
          title: 'GestureSign AI — Sistem Pengenalan Isyarat Gamifikasi',
          description:
              'Platform interaktif pengenalan gesture bahasa isyarat real-time dengan inferensi on-device berbasis TensorFlow Lite. Dirancang dengan modul gamifikasi edukatif untuk mempercepat kurva pembelajaran bahasa isyarat secara presisi.',
          tags: ['TensorFlow Lite', 'Python', 'OpenCV', 'MediaPipe', 'WebSockets'],
          isWide: true,
        ),
        const SizedBox(height: 16),
        LayoutBuilder(
          builder: (context, constraints) {
            final cardWidth = constraints.maxWidth < 620 ? constraints.maxWidth : (constraints.maxWidth - 16) / 2;
            return Wrap(
              spacing: 16,
              runSpacing: 16,
              children: [
                SizedBox(
                  width: cardWidth,
                  child: _buildProjectCard(
                    badge: 'Data Warehouse & ETL',
                    status: 'OLAP Pipeline',
                    title: 'TransactData Warehouse & ETL',
                    description:
                        'Perancangan skema star-schema dan pipeline otomatisasi ekstraksi-transformasi data transaksi volume tinggi memakai Pentaho PDI dan PostgreSQL.',
                    tags: ['Pentaho PDI', 'PostgreSQL', 'Star Schema', 'Cron'],
                    isWide: false,
                  ),
                ),
                SizedBox(
                  width: cardWidth,
                  child: _buildProjectCard(
                    badge: 'Full Stack & SQA',
                    status: 'ISO 25010',
                    title: 'EstateCore Marketplace Platform',
                    description:
                        'Platform manajemen properti dan marketplace berarsitektur backend modular yang divalidasi uji mutu software standar ISO/IEC 25010.',
                    tags: ['Laravel', 'Filament', 'PHPUnit', 'JMeter SQA'],
                    isWide: false,
                  ),
                ),
              ],
            );
          },
        ),
      ],
    );
  }

  Widget _buildProjectCard({
    required String badge,
    required String status,
    required String title,
    required String description,
    required List<String> tags,
    required bool isWide,
  }) {
    return Container(
      padding: EdgeInsets.all(isWide ? 22 : 18),
      decoration: BoxDecoration(
        color: const Color(0xFF161B22),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: const Color(0xFF26303D)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Wrap(
            alignment: WrapAlignment.spaceBetween,
            crossAxisAlignment: WrapCrossAlignment.center,
            spacing: 8,
            runSpacing: 6,
            children: [
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 4),
                decoration: BoxDecoration(
                  color: const Color(0xFF8DA4B8).withAlpha(28),
                  borderRadius: BorderRadius.circular(999),
                  border: Border.all(color: const Color(0xFF8DA4B8).withAlpha(50)),
                ),
                child: Text(
                  badge,
                  style: const TextStyle(
                    color: Color(0xFF8DA4B8),
                    fontSize: 11,
                    fontFamily: 'monospace',
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ),
              Text(
                status,
                style: const TextStyle(
                  color: Color(0xFF7D8A9A),
                  fontSize: 11,
                  fontFamily: 'monospace',
                ),
              ),
            ],
          ),
          const SizedBox(height: 12),
          Text(
            title,
            style: TextStyle(
              color: const Color(0xFFF5F6F8),
              fontSize: isWide ? 19 : 16,
              fontWeight: FontWeight.bold,
              letterSpacing: -0.3,
            ),
          ),
          const SizedBox(height: 8),
          Text(
            description,
            style: const TextStyle(
              color: Color(0xFFD0D5DD),
              fontSize: 12.5,
              height: 1.5,
              fontWeight: FontWeight.w300,
            ),
          ),
          const SizedBox(height: 14),
          Wrap(
            spacing: 6,
            runSpacing: 6,
            children: tags.map((t) => _buildPillTag(t)).toList(),
          ),
          const SizedBox(height: 16),
          const Divider(color: Color(0xFF26303D), height: 1),
          const SizedBox(height: 10),
          const Wrap(
            spacing: 16,
            runSpacing: 6,
            children: [
              Text(
                'Live Demo ↗',
                style: TextStyle(
                  color: Color(0xFFF5F6F8),
                  fontSize: 11.5,
                  fontFamily: 'monospace',
                  fontWeight: FontWeight.w600,
                ),
              ),
              Text(
                'GitHub ↗',
                style: TextStyle(
                  color: Color(0xFF7D8A9A),
                  fontSize: 11.5,
                  fontFamily: 'monospace',
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  // --- CONTACT SECTION ---
  Widget _buildContactSection(bool isMobile) {
    return Container(
      padding: EdgeInsets.all(isMobile ? 20 : 32),
      decoration: BoxDecoration(
        color: const Color(0xFF161B22).withAlpha(245),
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: const Color(0xFF26303D)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Row(
            children: [
              Icon(Icons.circle, size: 7, color: Color(0xFF8DA4B8)),
              SizedBox(width: 8),
              Text(
                "LET'S CONNECT",
                style: TextStyle(
                  color: Color(0xFF8DA4B8),
                  fontSize: 11,
                  fontFamily: 'monospace',
                  letterSpacing: 1.0,
                ),
              ),
            ],
          ),
          const SizedBox(height: 12),
          Text(
            'Tertarik Berkolaborasi atau Diskusi Proyek?',
            style: TextStyle(
              color: const Color(0xFFF5F6F8),
              fontSize: isMobile ? 22 : 28,
              fontWeight: FontWeight.w800,
              letterSpacing: -0.5,
            ),
          ),
          const SizedBox(height: 8),
          const Text(
            'Saya selalu terbuka untuk diskusi mengenai arsitektur backend, otomasi data pipeline, implementasi computer vision, atau peluang kerja sama baru.',
            style: TextStyle(
              color: Color(0xFFD0D5DD),
              fontSize: 13.5,
              height: 1.6,
              fontWeight: FontWeight.w300,
            ),
          ),
          const SizedBox(height: 20),
          Wrap(
            spacing: 10,
            runSpacing: 10,
            children: [
              OutlinedButton.icon(
                onPressed: () {},
                style: OutlinedButton.styleFrom(
                  foregroundColor: const Color(0xFFD0D5DD),
                  side: const BorderSide(color: Color(0xFF26303D)),
                  padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                ),
                icon: const Icon(Icons.code, size: 15, color: Color(0xFF8DA4B8)),
                label: const Text('GitHub', style: TextStyle(fontSize: 12)),
              ),
              OutlinedButton.icon(
                onPressed: () {},
                style: OutlinedButton.styleFrom(
                  foregroundColor: const Color(0xFFD0D5DD),
                  side: const BorderSide(color: Color(0xFF26303D)),
                  padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                ),
                icon: const Icon(Icons.link, size: 15, color: Color(0xFF8DA4B8)),
                label: const Text('LinkedIn', style: TextStyle(fontSize: 12)),
              ),
              ElevatedButton.icon(
                onPressed: _copyEmail,
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xFF8DA4B8).withAlpha(45),
                  foregroundColor: const Color(0xFFA3B8CC),
                  elevation: 0,
                  side: const BorderSide(color: Color(0xFF8DA4B8), width: 0.8),
                  padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                ),
                icon: Icon(_isCopied ? Icons.check : Icons.copy, size: 13),
                label: Text(
                  _copiedText,
                  style: const TextStyle(fontSize: 12, fontFamily: 'monospace', fontWeight: FontWeight.bold),
                ),
              ),
            ],
          ),
          const SizedBox(height: 16),
          const Text(
            'Direct Email: fatah.pratama@example.com',
            style: TextStyle(
              color: Color(0xFF7D8A9A),
              fontSize: 11.5,
              fontFamily: 'monospace',
            ),
          ),
        ],
      ),
    );
  }

  // --- FOOTER ---
  Widget _buildFooter(bool isMobile) {
    return Column(
      children: [
        const Divider(color: Color(0xFF26303D), height: 1),
        const SizedBox(height: 20),
        Wrap(
          alignment: WrapAlignment.spaceBetween,
          crossAxisAlignment: WrapCrossAlignment.center,
          spacing: 12,
          runSpacing: 8,
          children: const [
            Text(
              '© 2026 Fatah Pratama. Minimal, modern & quiet engineering.',
              style: TextStyle(
                color: Color(0xFF7D8A9A),
                fontSize: 11,
                fontFamily: 'monospace',
              ),
            ),
            Text(
              'Cross-Platform Ready',
              style: TextStyle(
                color: Color(0xFF7D8A9A),
                fontSize: 11,
                fontFamily: 'monospace',
              ),
            ),
          ],
        ),
      ],
    );
  }

  // --- REUSABLE HELPERS ---
  Widget _buildSectionHeader({
    required String tag,
    required String title,
    required String subtitle,
  }) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          children: [
            const Icon(Icons.circle, size: 6, color: Color(0xFF8DA4B8)),
            const SizedBox(width: 8),
            Text(
              tag.toUpperCase(),
              style: const TextStyle(
                color: Color(0xFF8DA4B8),
                fontSize: 11,
                fontFamily: 'monospace',
                letterSpacing: 1.0,
              ),
            ),
          ],
        ),
        const SizedBox(height: 8),
        Text(
          title,
          style: const TextStyle(
            color: Color(0xFFF5F6F8),
            fontSize: 24,
            fontWeight: FontWeight.w800,
            letterSpacing: -0.4,
          ),
        ),
        const SizedBox(height: 6),
        Text(
          subtitle,
          style: const TextStyle(
            color: Color(0xFF7D8A9A),
            fontSize: 13,
            fontWeight: FontWeight.w300,
          ),
        ),
      ],
    );
  }

  Widget _buildPillTag(String label) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
      decoration: BoxDecoration(
        color: const Color(0xFF1A202C),
        borderRadius: BorderRadius.circular(6),
        border: Border.all(color: const Color(0xFF26303D)),
      ),
      child: Text(
        label,
        style: const TextStyle(
          color: Color(0xFFD0D5DD),
          fontSize: 11,
          fontFamily: 'monospace',
        ),
      ),
    );
  }
}
