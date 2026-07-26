const projects = [
  // --- GOOGLE DRIVE PORTFOLIOS (NEW CREATIVE SKILLSETS) ---
  {
    title: 'Meme Account Admin (Mr. Garbage)',
    url: 'https://drive.google.com/drive/folders/16NDhmqz54x062vo6gMBS5GTErYp_rsC5?usp=drive_link',
    driveId: '16NDhmqz54x062vo6gMBS5GTErYp_rsC5',
    category: 'creative',
    description: 'Pengalaman mengelola akun hiburan Mr. Garbage dengan mengubah ide/komentar netizen menjadi konten visual (meme/komik) viral berinteraksi tinggi.'
  },
  {
    title: 'Beginner Comic Illustrator Portfolio',
    url: 'https://drive.google.com/drive/folders/1wzPqL64XXezoN61tKUVPLUDIkTvSwFBm?usp=drive_link',
    driveId: '1wzPqL64XXezoN61tKUVPLUDIkTvSwFBm',
    category: 'creative',
    description: 'Koleksi komik strip orisinal, desain karakter, dan visual storytelling penarik interaksi dua arah dengan audiens.'
  },
  {
    title: 'Aspiring 2D Animator (Body Mechanics)',
    url: 'https://drive.google.com/drive/folders/1u-tQA6Pv2G7V0j9-BBxX_rPQya40f2rk?usp=drive_link',
    driveId: '1u-tQA6Pv2G7V0j9-BBxX_rPQya40f2rk',
    category: 'creative',
    description: 'Portofolio animasi 2D berfokus pada penguatan fondasi gerakan (12 Principles of Animation), Body Mechanics, dan Fluidity.'
  },
  {
    title: 'Junior Creative Designer Portfolio',
    url: 'https://drive.google.com/drive/folders/1X-at_Fsao37EeZjLA65MDO7Sc5KZpp0t?usp=drive_link',
    driveId: '1X-at_Fsao37EeZjLA65MDO7Sc5KZpp0t',
    category: 'creative',
    description: 'Desain grafis komersial (F&B) dan desain korporat fungsional berkepekaan visual tinggi.'
  },
  {
    title: 'Junior Multimedia Designer & Visual Artist',
    url: 'https://drive.google.com/drive/folders/1_MmADBU63MDlhpoGINYnQz7yJrBUe6fN?usp=drive_link',
    driveId: '1_MmADBU63MDlhpoGINYnQz7yJrBUe6fN',
    category: 'creative',
    description: 'Eksplorasi gaya visual Generalist, mulai dari estetika retro Pixel Art, Flat Design, hingga Fotografi Arsitektur.'
  },
  {
    title: 'Video Editor & PNGTuber Asset Creator',
    url: 'https://drive.google.com/drive/folders/174V-fH3mk1-m9gNxNyZMZ9_3QYAPY2zY?usp=drive_link',
    driveId: '174V-fH3mk1-m9gNxNyZMZ9_3QYAPY2zY',
    category: 'creative',
    description: 'Siklus produksi lengkap video \'Faceless Channel\': penulisan naskah, desain karakter & aset PNGTuber, hingga editing video dinamis.'
  },

  // --- ORIGINAL PROJECTS (arielrifkycahyadi.github.io) ---
  {
    title: 'Macneo by MadeAI',
    url: 'https://arielrifkycahyadi.github.io/neomac-by-madeai/',
    category: 'tools',
    description: 'Pengalaman web futuristik Macneo yang terinspirasi karya MadeAI dengan nuansa warna modern dan minimal.'
  },
  {
    title: 'Artriel Art Gallery',
    url: 'https://arielrifkycahyadi.github.io/artriel-art-gallery',
    category: 'interactive',
    description: 'Galeri seni Artriel yang menampilkan karya visual dengan antarmuka yang elegan dan responsif.'
  },
  {
    title: 'Xiaomi Pricelist by MadeAI',
    url: 'https://harga-mi-madeai.lovable.app',
    category: 'tools',
    description: 'Tampilan daftar harga ponsel Xiaomi yang rapi, bersih, dan efisien untuk membantu pencarian produk.'
  },
  {
    title: 'Play Kalimba with MadeAI',
    url: 'https://kalimba-madeai-learn.lovable.app',
    category: 'interactive',
    description: 'Aplikasi interaktif untuk belajar dan memainkan instrumen Kalimba virtual secara intuitif.'
  },
  {
    title: 'MadeAI Sky Seer',
    url: 'https://madeai-sky.lovable.app',
    category: 'tools',
    description: 'Antarmuka langit eksplorasi data secara visual yang tenang, halus, dan imersif.'
  },
  {
    title: 'Nuklir Power untuk Indonesia',
    url: 'https://energi-nu-madeai.lovable.app',
    category: 'learning',
    description: 'Platform edukasi tentang potensi energi nuklir bagi ketahanan energi nasional.'
  },
  {
    title: 'MadeAI Leetcoder Learning',
    url: 'https://ai.studio/apps/a0d8329e-40ee-4caf-b132-0c35599f1982?fullscreenApplet=true',
    category: 'learning',
    description: 'Prototipe interaktif pembelajaran algoritma dan penyelesaian kode bagi pengembang.'
  },
  {
    title: 'Album Keluarga Ariel',
    url: 'https://usmansidar.lovable.app',
    category: 'lifestyle',
    description: 'Aplikasi web galeri foto dan kenangan hangat keluarga besar Ariel.'
  },
  {
    title: 'Sosmed Kit Concept',
    url: 'https://arielcobakonek.lovable.app',
    category: 'tools',
    description: 'Eksplorasi konsep dan purwarupa kit media sosial modern.'
  },
  {
    title: 'Buku Resep MadeAI',
    url: 'https://nasgormadeai.lovable.app',
    category: 'lifestyle',
    description: 'Resep nasi goreng khas MadeAI dikemas dalam estetika desain modern.'
  },
  {
    title: 'Web Kucing Jalanan Makassar',
    url: 'https://ariel-cats-makassar.lovable.app',
    category: 'learning',
    description: 'Platform dokumentasi, aksi kepedulian, dan kisah kucing jalanan di Makassar.'
  },
  {
    title: 'Bugis WebApp by MadeAI',
    url: 'https://bugis-bersama-madeai.lovable.app',
    category: 'learning',
    description: 'Menjembatani kebudayaan luhur Bugis dengan fungsionalitas digital modern.'
  },
  {
    title: 'Laporan Tentara Indonesia',
    url: 'https://madeaisoldier.lovable.app',
    category: 'learning',
    description: 'Visualisasi modern laporan kemanusiaan tentara perdamaian Indonesia di Timur Tengah.'
  },
  {
    title: 'NikahYukk',
    url: 'https://ai.studio/apps/0d48c1a5-f5e1-45c4-9cf7-862d377709d6?fullscreenApplet=true',
    category: 'lifestyle',
    description: 'Aplikasi edukasi persiapan pranikah dan pemahaman kehidupan pernikahan.'
  },
  {
    title: 'Ayo Pulih Patah Hati',
    url: 'https://ai.studio/apps/c95862e7-65d6-4700-95dc-8c6ab6d35df7?fullscreenApplet=true',
    category: 'lifestyle',
    description: 'Pendamping digital berisi kutipan dan latihan mental pemulihan diri dari patah hati.'
  },
  {
    title: 'Prototype Deteksi Asap Rokok',
    url: 'https://ai.studio/apps/33906306-9ac8-4e23-b955-a4a6e007a625?fullscreenApplet=true',
    category: 'tools',
    description: 'Prototipe penelitian deteksi asap berbasis kecerdasan buatan untuk menjaga kesehatan udara.'
  },
  {
    title: 'Trend Negeri Hub',
    url: 'https://madeaitrendswork.lovable.app',
    category: 'tools',
    description: 'Dasbor pemantau tren dinamika isu nasional secara visual.'
  },
  {
    title: 'Beda Kodok dan Katak',
    url: 'https://frog-toad-difference-gxdx.bolt.host',
    category: 'learning',
    description: 'Media presentasi ilmiah dan interaktif mengenai perbedaan kodok dan katak.'
  },

  // --- ARTRIEL-ARCH.GITHUB.IO PROJECTS ---
  {
    title: '3D Training with Ariel',
    url: 'https://artriel-arch.github.io/3d=training-with-ariel.html',
    category: 'interactive',
    description: 'Simulasi dan latihan visual 3D interaktif yang interaktif dan dinamis.'
  },
  {
    title: 'Ambil Keterampilanmu',
    url: 'https://artriel-arch.github.io/ambil-keterampilanmu.html',
    category: 'learning',
    description: 'Rekomendasi terstruktur untuk mengukur dan meningkatkan keterampilan profesional.'
  },
  {
    title: 'Anies Baswedan: Educated Politician',
    url: 'https://artriel-arch.github.io/anies-baswedan-educated-polician.html',
    category: 'learning',
    description: 'Analisis mendalam mengenai profil kepemimpinan politik berbasis edukasi.'
  },
  {
    title: 'Anxious-Avoidant Relationship',
    url: 'https://artriel-arch.github.io/anxious-avoidant-relationship-dijelaskan-oleh-ariel.html',
    category: 'lifestyle',
    description: 'Penjelasan psikologis dinamika hubungan cemas-menghindar (Anxious-Avoidant).'
  },
  {
    title: 'Ayo Disiplin Gini Caranya',
    url: 'https://artriel-arch.github.io/ayo-disiplin-gini-caranya-diajar-ariel.html',
    category: 'lifestyle',
    description: 'Langkah praktis melatih fokus dan membangun kedisiplinan hidup dari Ariel.'
  },
  {
    title: 'Baca Buku Guys',
    url: 'https://artriel-arch.github.io/baca-buku-guys.html',
    category: 'learning',
    description: 'Rekomendasi literatur pilihan untuk memperluas cakrawala berpikir anak muda.'
  },
  {
    title: 'Bawa Mobil Simulator',
    url: 'https://artriel-arch.github.io/bawa-mobil.html',
    category: 'interactive',
    description: 'Simulasi belajar menyetir mobil dengan kendali keyboard interaktif.'
  },
  {
    title: 'Belajar dari 0 dengan Ariel',
    url: 'https://artriel-arch.github.io/belajar-dari-0-dengan-ariel.html',
    category: 'learning',
    description: 'Kurikulum panduan belajar terarah mengenai kecerdasan buatan, seni, dan kepenulisan.'
  },
  {
    title: 'Belajar Kalimba Bareng Ariel',
    url: 'https://artriel-arch.github.io/belajar-main-kalimba-bareng-ariel.html',
    category: 'interactive',
    description: 'Instruksi memainkan lagu dengan alat musik Kalimba lewat visual yang menarik.'
  },
  {
    title: 'Bulukumba Info',
    url: 'https://artriel-arch.github.io/bulukumba-info-ariel.html',
    category: 'learning',
    description: 'Pusat informasi adat, wisata, dan budaya khas Kabupaten Bulukumba.'
  },
  {
    title: 'Cara Telinga Mendengar',
    url: 'https://artriel-arch.github.io/cara-telinga-mendengar-ariel.html',
    category: 'learning',
    description: 'Presentasi fisiologi organ pendengaran manusia dalam merespons getaran suara.'
  },
  {
    title: 'Cek Kesehatan Ariel',
    url: 'https://artriel-arch.github.io/check-kesehatan-ariel.html',
    category: 'tools',
    description: 'Aplikasi sederhana screening kesehatan mandiri untuk memantau kondisi fisik.'
  },
  {
    title: 'Delulu is Solulu',
    url: 'https://artriel-arch.github.io/delulu-is-solulu-ariel.html',
    category: 'lifestyle',
    description: 'Menyalurkan manifestasi delusi positif menjadi langkah pemecahan masalah.'
  },
  {
    title: 'Fenomena Kedai Berdekatan',
    url: 'https://artriel-arch.github.io/fenomena-kedai-berdekatan.html',
    category: 'learning',
    description: 'Visualisasi teori lokasi bersaing (Hotelling Law) pada penempatan kedai makan.'
  },
  {
    title: 'Friend Zone Guide',
    url: 'https://artriel-arch.github.io/friend-zone-ariel.html',
    category: 'lifestyle',
    description: 'Analisis relasi pertemanan romantis dan cara keluar dari jebakan friend-zone.'
  },
  {
    title: 'Git & Kecerdasan Sosial',
    url: 'https://artriel-arch.github.io/git-kecerdasan-sosial-dijelaskan.html',
    category: 'learning',
    description: 'Analogi unik kecerdasan emosional dan sosial menggunakan perintah dasar Git.'
  },
  {
    title: 'Hidroponik Shop',
    url: 'https://artriel-arch.github.io/hidroponik-shop-ariel.html',
    category: 'tools',
    description: 'Purwarupa antarmuka belanja perlengkapan tanaman hidroponik modern.'
  },
  {
    title: 'Intermittent Fasting Anak Kos',
    url: 'https://artriel-arch.github.io/intermitten-fasting-anak-kos-ala-ariel.html',
    category: 'lifestyle',
    description: 'Metode berpuasa berkala yang efisien, sehat, ramah kantong anak kos.'
  },
  {
    title: 'Jam Analog Cantik',
    url: 'https://artriel-arch.github.io/jam-analog.html',
    category: 'tools',
    description: 'Simulasi jam dinding analog menggunakan jarum berputar berbasis waktu sistem.'
  },
  {
    title: 'Karl Marx Dijelaskan Kembali',
    url: 'https://artriel-arch.github.io/karl-marx-dijelaskan-lagi.html',
    category: 'learning',
    description: 'Ulasan ringkas materi dialektika materialisme dan teori kritis Karl Marx.'
  },
  {
    title: 'Katrol Lift Simulator',
    url: 'https://artriel-arch.github.io/katrollift.html',
    category: 'interactive',
    description: 'Simulator fisika gaya tegangan tali pada sistem katrol lift pengangkat beban.'
  },
  {
    title: 'Kerja 9 to 5 Survival Guide',
    url: 'https://artriel-arch.github.io/kerja-9-to-5.html',
    category: 'lifestyle',
    description: 'Panduan bertahan dan menyeimbangkan karir kantoran dengan kesehatan mental.'
  },
  {
    title: 'Konsep Kekuatan Islam',
    url: 'https://artriel-arch.github.io/konsep-kekuatan-islam.html',
    category: 'learning',
    description: 'Eksplorasi nilai kepemimpinan, persatuan, dan moralitas dalam ajaran Islam.'
  },
  {
    title: 'Mencuri Layaknya Seniman',
    url: 'https://artriel-arch.github.io/mencuri-layaknya-seniman.html',
    category: 'lifestyle',
    description: 'Bagaimana meniru secara kreatif tanpa melakukan plagiarisme dari para kreator lain.'
  },
  {
    title: 'Mesin M-Shape Polymath',
    url: 'https://artriel-arch.github.io/mesin-mshape-polymath-ariel.html',
    category: 'tools',
    description: 'Sistem analisis untuk melatih spesialisasi ganda di berbagai bidang keahlian.'
  },
  {
    title: 'Mind Palace Builder',
    url: 'https://artriel-arch.github.io/mind-palace-ariel.html',
    category: 'tools',
    description: 'Alat bantu menata ingatan menggunakan rute lokasi ruang fisik imajiner.'
  },
  {
    title: 'Otak Manusia Dijelaskan',
    url: 'https://artriel-arch.github.io/otak-manusia-dijelaskan.html',
    category: 'learning',
    description: 'Penjelasan peta lobus otak dan hubungannya dengan perilaku manusia.'
  },
  {
    title: 'Panda Interactive Page',
    url: 'https://artriel-arch.github.io/panda.html',
    category: 'interactive',
    description: 'Desain web interaktif bertema panda dengan animasi CSS.'
  },
  {
    title: 'Parenting Gen Alpha',
    url: 'https://artriel-arch.github.io/parenting-genAlpha.html',
    category: 'lifestyle',
    description: 'Metodologi mendidik anak kelahiran generasi Alpha yang dikelilingi teknologi.'
  },
  {
    title: 'Pesan Ayah',
    url: 'https://artriel-arch.github.io/pesan-ayah-ariel.html',
    category: 'lifestyle',
    description: 'Nasihat-nasihat kebijaksanaan hidup yang menguatkan hati dari sang ayah.'
  },
  {
    title: 'Postal Mail Simulator',
    url: 'https://artriel-arch.github.io/postal.html',
    category: 'tools',
    description: 'Simulasi sistem alamat surat menyurat dan logistik pengiriman.'
  },
  {
    title: 'Power Law Distribution',
    url: 'https://artriel-arch.github.io/power-law.html',
    category: 'learning',
    description: 'Pemahaman konsep ketimpangan distribusi statistik hukum pangkat di masyarakat.'
  },
  {
    title: 'Rumus Cari Jodoh',
    url: 'https://artriel-arch.github.io/rumus-matematika-cari-jodoh.html',
    category: 'lifestyle',
    description: 'Menghitung kemungkinan menemukan pasangan ideal lewat parameter matematika.'
  },
  {
    title: 'Sabun Aril Shop',
    url: 'https://artriel-arch.github.io/sabunaril.html',
    category: 'tools',
    description: 'Katalog toko sabun kecantikan herbal buatan rumahan.'
  },
  {
    title: 'Simulasi Kasir Toko',
    url: 'https://artriel-arch.github.io/simulasi-kasir-ariel.html',
    category: 'interactive',
    description: 'Game edukasi mencatat belanjaan dan menghitung kembalian uang.'
  },
  {
    title: 'Simulasi Distribusi Power Law',
    url: 'https://artriel-arch.github.io/simulasi-power-law.html',
    category: 'interactive',
    description: 'Simulator eksperimental model persebaran kekayaan secara acak.'
  },
  {
    title: 'Sketch Journaling',
    url: 'https://artriel-arch.github.io/sketch-journaling-ariel.html',
    category: 'learning',
    description: 'Inspirasi mendokumentasikan keseharian dalam paduan tulisan dan sketsa gambar.'
  },
  {
    title: 'Soremu Sore yang Bagus',
    url: 'https://artriel-arch.github.io/soremu-sore-yang-bagus.html',
    category: 'lifestyle',
    description: 'Karya eksperimental visual tentang keindahan senja penenang kepenatan.'
  },
  {
    title: 'Tante J & Kopi Sianida',
    url: 'https://artriel-arch.github.io/tante-j-dan-kopi-sianida.html',
    category: 'interactive',
    description: 'Permainan teka-teki misteri pemecahan kasus meja kafe kopi bersianida.'
  },
  {
    title: 'Traktor Sawah',
    url: 'https://artriel-arch.github.io/traktor.html',
    category: 'interactive',
    description: 'Simulasi mengemudikan traktor pembajak sawah sederhana.'
  },
  {
    title: 'Trik Otak Jadi Disiplin',
    url: 'https://artriel-arch.github.io/trick-otak-jadi-disiplin.html',
    category: 'lifestyle',
    description: 'Psikologi peretasan motivasi otak agar cepat terbiasa dengan disiplin harian.'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = projects;
}
