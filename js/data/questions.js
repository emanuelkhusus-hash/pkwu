/**
 * BANK SOAL LENGKAP & SISTEM PENGACAKAN STANDAR PUSMENDIK / PM_DEV
 * Produk atau Projek Kreatif dan Kewirausahaan (PKK / KWU) SMK Kelas XII
 * Standar Resmi Kemendikdasmen RI 2026
 *
 * FITUR UTAMA:
 * 1. 30 Soal unik per sesi (20 PG, 5 PGK MCMA, 5 PGK Benar/Salah).
 * 2. Distribusi kunci jawaban acak merata (A, B, C, D, E).
 * 3. PGK MCMA bervariasi luas (AC, BDE, AD, BCE, AB, CDE, dll).
 * 4. PGK Tabel Benar/Salah bervariasi luas (B-B-S, S-B-S, S-S-B, B-S-B, B-S-S, S-B-B).
 * 5. Seluruh 13 Sub-materi Pusmendik (Peluang Usaha, Desain Produk, Kemasan & Label, Prototipe,
 *    Biaya Produksi & HPP, Alur Produksi, Pengemasan, QC Mutu, Pemasaran 4P/Digital,
 *    Saluran Distribusi, Proposal Usaha, BEP & Laporan Keuangan, serta HaKI).
 * 6. Dilengkapi Pembahasan mendalam & Tips Cepat untuk mode belajar siswa.
 */

const KWU_MASTER_QUESTIONS = [
  // ================= 1. ANALISIS PELUANG USAHA & RISET PASAR =================
  {
    category: "peluang_usaha",
    type: "pg",
    stimulus: "Seorang siswa SMK mengamati banyaknya pekerja kantoran di sekitar sekolah yang kesulitan mendapatkan sarapan sehat dan praktis saat jam sibuk pagi hari.",
    question: "Sumber inspirasi peluang usaha yang paling mendasari munculnya ide usaha sarapan sehat tersebut adalah...",
    correctText: "Kebutuhan dan masalah nyata yang belum terselesaikan di lingkungan sekitar",
    distractors: [
      "Perubahan kebijakan moneter pemerintah pusat",
      "Ketersediaan modal pinjaman bank berskala besar",
      "Tren mode fesyen internasional di media sosial",
      "Keinginan meniru usaha waralaba tanpa modifikasi"
    ],
    explanation: "Peluang usaha yang paling kuat dan berkelanjutan umumnya lahir dari identifikasi masalah (pain point) atau kebutuhan nyata konsumen di lingkungan sekitar yang belum terpenuhi secara optimal.",
    quickTip: "Peluang usaha terbaik = Menjawab kebutuhan/masalah nyata konsumen sekitar."
  },
  {
    category: "peluang_usaha",
    type: "pg",
    stimulus: "Sebelum meluncurkan produk minuman herbal kekinian dalam kemasan botol, tim wirausaha siswa SMK menyebarkan kuesioner daring dan membagikan sampel gratis ke 50 responden target.",
    question: "Tujuan utama pelaksanaan riset pasar awal tersebut adalah untuk...",
    correctText: "Memvalidasi minat target pasar, preferensi rasa, dan daya beli konsumen sebelum produksi massal",
    distractors: [
      "Menghabiskan anggaran kas usaha yang tersisa di awal periode",
      "Memaksa calon konsumen menandatangani kontrak pembelian berjangka",
      "Memperoleh izin edar resmi dari Kementerian Kesehatan secara instan",
      "Menghindari kewajiban membayar pajak penghasilan usaha rintisan"
    ],
    explanation: "Riset pasar awal dan uji sampel berfungsi memvalidasi kecocokan produk dengan pasar (product-market fit), mengukur daya beli, dan mengumpulkan saran perbaikan sebelum risiko investasi modal besar dilakukan.",
    quickTip: "Riset pasar = Validasi minat, kebutuhan rasa/fitur, dan daya beli sebelum produksi massal."
  },
  {
    category: "peluang_usaha",
    type: "pg",
    stimulus: "Dalam analisis SWOT, usaha katering sehat 'SMK Boga' mencatat bahwa 'harga bahan baku organik segar sering berfluktuasi tajam akibat cuaca ekstrem'.",
    question: "Faktor fluktuasi harga bahan baku akibat cuaca tersebut dalam matriks SWOT dikategorikan sebagai...",
    correctText: "Threats (Ancaman eksternal)",
    distractors: [
      "Strengths (Kekuatan internal)",
      "Weaknesses (Kelemahan internal)",
      "Opportunities (Peluang eksternal)",
      "Capabilities (Kapabilitas tim)"
    ],
    explanation: "Cuaca ekstrem dan kenaikan harga pasar bahan baku berasal dari luar kendali internal manajemen usaha, sehingga diklasifikasikan sebagai Ancaman (Threats) dari lingkungan eksternal.",
    quickTip: "Faktor eksternal yang merugikan/berisiko = Threats (Ancaman)."
  },
  {
    category: "peluang_usaha",
    type: "pg",
    stimulus: "Hasil analisis internal menunjukkan bengkel perakitan IoT siswa SMK memiliki keunggulan 'menguasai teknologi pemrograman mikrokontroler terbaru yang belum dimiliki pesaing lokal'.",
    question: "Dalam analisis SWOT, keunggulan teknis yang dimiliki oleh tim internal ini merupakan...",
    correctText: "Strengths (Kekuatan internal)",
    distractors: [
      "Weaknesses (Kelemahan internal)",
      "Opportunities (Peluang eksternal)",
      "Threats (Ancaman eksternal)",
      "Trends (Tren pasar luar)"
    ],
    explanation: "Keahlian teknologi, kompetensi SDM, dan keunggulan peralatan yang berada di bawah kendali internal usaha merupakan Strengths (Kekuatan internal).",
    quickTip: "Keunggulan kompetitif internal = Strengths (Kekuatan)."
  },

  // ================= 2. DESAIN PRODUK & PENGEMBANGAN =================
  {
    category: "desain_produk",
    type: "pg",
    stimulus: "Sebuah kelompok usaha kreatif merancang dudukan laptop (laptop stand) portabel berbahan kayu ergonomis.",
    question: "Faktor 'ergonomi' dalam perancangan produk kreatif tersebut berkaitan erat dengan...",
    correctText: "Kenyamanan, keamanan, dan kesesuaian fisik produk terhadap postur tubuh pengguna saat beraktivitas",
    distractors: [
      "Tingkat kemewahan merek dan prestise status sosial pembeli",
      "Jumlah diskon harga yang dapat diberikan kepada pembeli borongan",
      "Kecepatan pengiriman barang melalui jasa kurir ekspres",
      "Kombinasi warna mencolok semata tanpa memedulikan bentuk fisik"
    ],
    explanation: "Ergonomi adalah ilmu yang menyelaraskan dimensi dan fungsi produk dengan karakteristik fisik serta kenyamanan tubuh manusia guna meminimalkan kelelahan dan risiko cedera.",
    quickTip: "Ergonomi = Kenyamanan, keamanan, dan keselarasan produk dengan tubuh manusia."
  },
  {
    category: "desain_produk",
    type: "pg",
    stimulus: "Dalam tahapan pengembangan desain produk industri kreatif, desainer biasanya membuat gambar sketsa ide kasar (sketching), lalu dilanjutkan dengan rendering 3D digital.",
    question: "Tahapan alur perancangan yang dilakukan tepat setelah konsep desain 3D disetujui (approved) sebelum produksi massal adalah...",
    correctText: "Pembuatan prototipe / sampel kerja pertama untuk pengujian fungsi nyata",
    distractors: [
      "Peluncuran promosi iklan besar-besaran di televisi nasional",
      "Penjualan saham perdana ke bursa efek pasar modal",
      "Pemusnahan seluruh bahan baku lama di gudang penyimpanan",
      "Pembagian dividen laba bersih kepada para pemegang saham"
    ],
    explanation: "Setelah desain 3D disetujui, langkah esensial berikutnya adalah prototyping (pembuatan sampel purwarupa) untuk menguji dimensi, kekuatan, dan fungsi mekanis secara riil.",
    quickTip: "Alur desain: Ide ➔ Sketsa ➔ CAD 3D Disetujui ➔ Pembuatan Prototipe ➔ Produksi."
  },

  // ================= 3. DESAIN KEMASAN & REGULASI LABEL =================
  {
    category: "kemasan_label",
    type: "pg",
    stimulus: "Produk keripik pisang aneka rasa dipasarkan dalam kemasan standing pouch berbahan aluminium foil dengan ziplock.",
    question: "Fungsi utama pemilihan bahan aluminium foil kedap udara pada kemasan makanan ringan tersebut adalah...",
    correctText: "Melindungi kerenyahan produk dari paparan uap air, oksigen, dan sinar matahari langsung",
    distractors: [
      "Membuat kemasan transparan agar isi produk dapat terlihat dari luar",
      "Menurunkan biaya produksi hingga bernilai nol rupiah",
      "Menggantikan fungsi bumbu perasa alami pada makanan ringan",
      "Memudahkan kemasan hancur larut di dalam minyak goreng panas"
    ],
    explanation: "Aluminium foil merupakan barrier material terbaik yang kedap terhadap uap air (moisture barrier), oksigen (pencegah oksidasi/tengik), dan paparan cahaya langsung, sehingga memperpanjang masa simpan (shelf life).",
    quickTip: "Aluminium foil = Pelindung kuat dari oksigen, uap air, & cahaya agar tidak cepat tengik/alot."
  },
  {
    category: "kemasan_label",
    type: "pg",
    stimulus: "Berdasarkan regulasi Badan Pengawas Obat dan Makanan (BPOM) serta UU Perlindungan Konsumen di Indonesia, setiap produk pangan olahan kemasan wajib memuat informasi label yang jujur.",
    question: "Informasi label yang WAJIB dicantumkan pada kemasan produk pangan olahan untuk menjamin keamanan konsumen adalah...",
    correctText: "Nama produk, daftar komposisi bahan, berat bersih (netto), tanggal kedaluwarsa, dan nomor izin edar (P-IRT / BPOM)",
    distractors: [
      "Foto seluruh karyawan pabrik dan riwayat pendidikan pendiri",
      "Target keuntungan bersih per tahun dan daftar pemasok rahasia",
      "Prediksi cuaca saat proses pemasakan dan zodiak pembuat makanan",
      "Nomor rekening pribadi pemilik usaha dan kata sandi rekening bank"
    ],
    explanation: "Label pangan wajib memuat: nama produk, komposisi (ingredien), berat bersih/netto, nama & alamat produsen/distributor, tanggal kedaluwarsa (exp date), kode produksi, serta legalitas izin edar (P-IRT/BPOM MD/ML).",
    quickTip: "Label pangan wajib: Nama produk, komposisi, netto, izin edar (PIRT/BPOM), & Expire Date."
  },

  // ================= 4. PEMBUATAN & PENGUJIAN PROTOTIPE =================
  {
    category: "prototipe",
    type: "pg",
    stimulus: "Kelompok wirausaha rekayasa membuat prototipe alat penyiram tanaman otomatis berbasis sensor kelembaban tanah. Pada uji coba hari ke-3, pompa air menyala terus menerus meskipun tanah sudah sangat basah.",
    question: "Tindakan rekayasa dan perbaikan yang paling tepat dilakukan oleh tim wirausaha adalah...",
    correctText: "Mengkalibrasi ulang nilai ambang batas (threshold) sensor dan memeriksa keandalan kode logika mikrokontroler",
    distractors: [
      "Langsung menjual alat ke konsumen dengan memberi potongan harga besar",
      "Mengganti seluruh jenis tanaman di kebun dengan tanaman kaktus kering",
      "Membuang seluruh komponen alat ke tempat sampah dan menutup usaha",
      "Menyiram air manual setiap jam tanpa menggunakan modul rangkaian"
    ],
    explanation: "Tujuan prototyping adalah menemukan kegagalan fungsi (fail early). Saat sensor membaca salah, solusinya adalah kalibrasi ambang batas resistansi/tegangan sensor dan debugging algoritma pengendali.",
    quickTip: "Fungsi uji prototipe = Menemukan bug/kerusakan lebih awal untuk dikalibrasi dan disempurnakan."
  },
  {
    category: "prototipe",
    type: "pg",
    stimulus: "Dalam dunia industri manufaktur dan kriya, prototipe dibedakan menjadi visual mockup dan working prototype (sampel kerja).",
    question: "Karakteristik utama dari sebuah 'working prototype' dibandingkan sekadar mockup visual adalah...",
    correctText: "Mampu beroperasi dan mendemonstrasikan fungsi teknis kerja produk seperti barang sesungguhnya",
    distractors: [
      "Hanya berupa cetakan poster 2 dimensi tanpa bentuk fisik",
      "Dibuat dari bahan lilin atau busa yang tidak bisa dialiri listrik/daya",
      "Tidak memiliki fungsi mekanis dan hanya digunakan untuk sesi foto pajangan",
      "Hanya memuat daftar perkiraan harga tanpa adanya benda nyata"
    ],
    explanation: "Working prototype dibuat tidak hanya untuk melihat wujud visualnya, tetapi juga diuji keandalan mekanis, elektrik, dan performa kerjanya dalam kondisi mendekati produk akhir.",
    quickTip: "Working prototype = Purwarupa fungsional yang benar-benar bisa dioperasikan."
  },

  // ================= 5. PERENCANAAN & PROSES PRODUKSI =================
  {
    category: "proses_produksi",
    type: "pg",
    stimulus: "Sebuah unit produksi garmen SMK menerima pesanan 500 stel seragam kerja yang harus diselesaikan dalam waktu 10 hari kerja. Rata-rata kapasitas jahit per penjahit adalah 5 stel per hari.",
    question: "Jumlah minimal tenaga penjahit yang harus dialokasikan agar pesanan selesai tepat waktu adalah...",
    correctText: "10 orang penjahit",
    distractors: [
      "5 orang penjahit",
      "25 orang penjahit",
      "50 orang penjahit",
      "2 orang penjahit"
    ],
    explanation: "Kebutuhan per hari = 500 stel / 10 hari = 50 stel/hari. Jika 1 penjahit menghasilkan 5 stel/hari, maka dibutuhkan: 50 / 5 = 10 orang penjahit.",
    quickTip: "Kapasitas harian = Total target / Jumlah hari. Jumlah tenaga = Target harian / Output per orang."
  },
  {
    category: "proses_produksi",
    type: "pg",
    stimulus: "Pada lini perakitan lampu LED hemat energi, stasiun kerja perakitan casing mampu memproses 60 unit/jam, namun stasiun pengujian kelistrikan hanya mampu memproses 25 unit/jam.",
    question: "Kondisi terhambatnya aliran produksi pada stasiun pengujian kelistrikan tersebut dikenal dengan istilah...",
    correctText: "Bottleneck (leher botol)",
    distractors: [
      "Break-Even Point (titik impas)",
      "Continuous Improvement (Kaizen)",
      "Return on Investment (laba modal)",
      "Economies of Scale (skala ekonomi)"
    ],
    explanation: "Bottleneck adalah titik hambatan dalam suatu lini proses produksi di mana kapasitas stasiun tersebut paling lambat dibandingkan stasiun lainnya, sehingga membatasi kapasitas keseluruhan sistem.",
    quickTip: "Titik paling lambat yang menghambat aliran produksi keseluruhan = Bottleneck."
  },

  // ================= 6. PENGEMASAN PRODUK =================
  {
    category: "pengemasan",
    type: "pg",
    stimulus: "Dalam hierarki pengemasan produk sabun herbal alami: sabun dibungkus langsung dengan plastik biodegradabel, dimasukkan ke dalam kotak karton kecil bercetak merek, lalu 50 kotak kecil dimasukkan ke dalam kardus gelombang besar.",
    question: "Kardus gelombang besar yang memuat 50 kotak kecil untuk mempermudah penanganan transportasi pengiriman disebut sebagai...",
    correctText: "Kemasan Tersier",
    distractors: [
      "Kemasan Primer",
      "Kemasan Sekunder",
      "Kemasan Konsumen",
      "Kemasan Inti"
    ],
    explanation: "Kemasan primer bersentuhan langsung dengan produk (plastik biodegradabel); kemasan sekunder melindungi kemasan primer (kotak karton kecil); kemasan tersier menyatukan banyak unit untuk distribusi/logistik (kardus besar).",
    quickTip: "Primer = Kontak langsung; Sekunder = Wadah satuan/display; Tersier = Kardus logistik/grosir."
  },

  // ================= 7. PENGENDALIAN MUTU PRODUK (QC) =================
  {
    category: "pengendalian_mutu",
    type: "pg",
    stimulus: "Departemen Quality Control (QC) di pabrik roti siswa SMK melakukan pemeriksaan bahan baku tepung terigu yang baru tiba dari pemasok untuk memastikan tidak ada kutu, bau apek, atau kelembaban berlebih.",
    question: "Aktivitas pengendalian mutu pada tahap penerimaan bahan baku tersebut merupakan bentuk dari...",
    correctText: "Incoming Inspection (Inspeksi bahan baku masuk)",
    distractors: [
      "Final Inspection (Inspeksi barang jadi akhir)",
      "In-Process Inspection (Inspeksi selama proses berjalan)",
      "Customer Aftersales Audit (Audit purna jual)",
      "Post-Mortem Evaluation (Evaluasi setelah kebangkrutan)"
    ],
    explanation: "Incoming inspection dilakukan sebelum bahan baku masuk lini produksi untuk memastikan mutu bahan mentah memenuhi standar toleransi dan mencegah kegagalan produksi sejak awal.",
    quickTip: "Inspeksi saat bahan tiba dari pemasok = Incoming Quality Inspection."
  },
  {
    category: "pengendalian_mutu",
    type: "pg",
    stimulus: "Dari 1.000 unit botol minuman kopi susu yang diproduksi hari ini, bagian QC menemukan 20 botol dengan tutup miring bocor dan 10 botol dengan label terbalik.",
    question: "Tingkat persentase cacat produk (defect rate) pada produksi hari tersebut adalah sebesar...",
    correctText: "3,0%",
    distractors: [
      "0,3%",
      "30,0%",
      "2,0%",
      "1,5%"
    ],
    explanation: "Total cacat = 20 + 10 = 30 botol. Defect rate = (Jumlah cacat / Total produksi) x 100% = (30 / 1.000) x 100% = 3,0%.",
    quickTip: "Defect rate = (Total produk cacat / Total produksi) x 100%."
  },

  // ================= 8. BIAYA PRODUKSI, HPP & HARGA JUAL =================
  {
    category: "biaya_hpp",
    type: "pg",
    stimulus: "Usaha pembuatan tas kanvas mengeluarkan biaya: kain kanvas Rp3.000.000, resleting dan benang Rp500.000, upah jahit borongan Rp1.500.000, serta sewa tempat workshop tetap Rp1.000.000 per bulan.",
    question: "Pengeluaran sewa tempat workshop sebesar Rp1.000.000 per bulan tersebut diklasifikasikan sebagai...",
    correctText: "Fixed Cost (Biaya Tetap)",
    distractors: [
      "Variable Cost (Biaya Variabel)",
      "Direct Material Cost (Biaya Bahan Baku Langsung)",
      "Direct Labor Cost (Biaya Tenaga Kerja Langsung)",
      "Marginal Cost (Biaya Marginal)"
    ],
    explanation: "Biaya tetap (Fixed Cost) adalah pengeluaran yang besarnya tidak berubah (konstan) berapapun volume produk yang dihasilkan pada periode tertentu, seperti sewa tempat dan penyusutan aset.",
    quickTip: "Biaya yang nominalnya tetap meski volume produksi naik atau turun = Fixed Cost."
  },
  {
    category: "biaya_hpp",
    type: "pg",
    stimulus: "Unit wirausaha memproduksi 200 botol sirup bunga telang. Total biaya produksi yang dihabiskan adalah Rp1.600.000. Pemilik menginginkan laba (mark-up margin) sebesar 25% dari HPP.",
    question: "Harga Pokok Produksi (HPP) per botol dan Harga Jual per botol yang tepat adalah...",
    correctText: "HPP Rp8.000 dan Harga Jual Rp10.000",
    distractors: [
      "HPP Rp10.000 dan Harga Jual Rp12.500",
      "HPP Rp8.000 dan Harga Jual Rp8.250",
      "HPP Rp16.000 dan Harga Jual Rp20.000",
      "HPP Rp4.000 dan Harga Jual Rp5.000"
    ],
    explanation: "HPP per botol = Rp1.600.000 / 200 = Rp8.000. Margin laba 25% = 25% x Rp8.000 = Rp2.000. Harga Jual = Rp8.000 + Rp2.000 = Rp10.000.",
    quickTip: "HPP/unit = Total Biaya / Jumlah Unit. Harga Jual = HPP + (Margin % x HPP)."
  },

  // ================= 9. BAURAN PEMASARAN & DIGITAL MARKETING =================
  {
    category: "pemasaran",
    type: "pg",
    stimulus: "Dalam strategi bauran pemasaran (Marketing Mix 4P), produsen kerajinan anyaman bambu memilih membuka stan di kawasan wisata candi yang ramai dikunjungi wisatawan luar kota.",
    question: "Keputusan penentuan lokasi penjualan strategis tersebut berkaitan dengan unsur bauran pemasaran...",
    correctText: "Place (Saluran Distribusi / Tempat)",
    distractors: [
      "Product (Produk)",
      "Price (Harga)",
      "Promotion (Promosi)",
      "Packaging (Pengemasan)"
    ],
    explanation: "Unsur 'Place' (tempat/distribusi) mencakup lokasi penjualan, kenyamanan akses konsumen, saluran perantara, dan ketersediaan stok produk di titik temu pelanggan.",
    quickTip: "Lokasi penjualan fisik atau saluran akses pembeli = Place."
  },
  {
    category: "pemasaran",
    type: "pg",
    stimulus: "Sebuah toko daring siswa SMK mengoptimalkan judul produk, deskripsi kata kunci, dan testimoni agar tokonya muncul di urutan teratas mesin pencarian Google dan marketplace.",
    question: "Upaya optimasi kemunculan tautan di halaman pertama mesin pencarian secara organik tanpa iklan berbayar disebut...",
    correctText: "Search Engine Optimization (SEO)",
    distractors: [
      "Pay-Per-Click Advertising (PPC)",
      "Direct Mail Marketing",
      "Cold Calling Telemarketing",
      "Above-the-Line Billboard Advertising"
    ],
    explanation: "SEO (Search Engine Optimization) adalah serangkaian teknik mengoptimalkan konten situs atau etalase toko digital agar mendapat peringkat teratas di mesin pencari secara organik (bebas biaya iklan per klik).",
    quickTip: "Peringkat atas mesin pencari secara organik gratis = SEO."
  },

  // ================= 10. SALURAN DISTRIBUSI =================
  {
    category: "distribusi",
    type: "pg",
    stimulus: "Pengrajin batik khas daerah menjual kain batiknya langsung kepada konsumen akhir melalui website toko daring resmi milik sendiri tanpa melalui toko grosir atau agen perantara.",
    question: "Bentuk saluran distribusi yang diterapkan oleh pengrajin batik tersebut adalah...",
    correctText: "Saluran Distribusi Langsung (Zero-Level Channel)",
    distractors: [
      "Saluran Distribusi Satu Tingkat (One-Level Channel)",
      "Saluran Distribusi Dua Tingkat (Wholesaler to Retailer)",
      "Saluran Distribusi Waralaba Internasional",
      "Saluran Distribusi Konsinyasi Multinasional"
    ],
    explanation: "Saluran langsung (Produsen ➔ Konsumen Akhir) tidak melibatkan perantara pihak ketiga, sehingga produsen memiliki kendali penuh atas harga jual, pelayanan, dan margin laba.",
    quickTip: "Produsen langsung ke Konsumen tanpa perantara = Saluran Distribusi Langsung."
  },

  // ================= 11. PROPOSAL USAHA & PITCHING =================
  {
    category: "proposal_usaha",
    type: "pg",
    stimulus: "Pada halaman depan proposal usaha bisnis rintisan siswa SMK, selalu dicantumkan bagian 'Ringkasan Eksekutif' (Executive Summary).",
    question: "Fungsi pokok dari bagian Ringkasan Eksekutif dalam sebuah proposal usaha adalah...",
    correctText: "Memberikan gambaran singkat namun menyeluruh mengenai konsep bisnis, keunggulan, peluang pasar, dan kebutuhan investasi kepada pembaca",
    distractors: [
      "Memuat seluruh biodata keluarga lengkap para pekerja dan catatan medis",
      "Menyajikan fotokopi seluruh nota kuitansi belanja harian usaha",
      "Menjelaskan tata tertib jam masuk dan jam pulang kerja harian karyawan",
      "Menjadi tempat melampirkan surat penolakan kredit dari bank pemberi pinjaman"
    ],
    explanation: "Executive summary adalah rangkuman esensial proposal yang dibaca pertama kali oleh calon investor atau mitra bisnis guna menilai kelayakan proyek secara ringkas dan menarik.",
    quickTip: "Ringkasan Eksekutif = Pintu gerbang proposal yang merangkum inti peluang & potensi bisnis."
  },

  // ================= 12. ANALISIS BEP & KEUANGAN =================
  {
    category: "keuangan_bep",
    type: "pg",
    stimulus: "Usaha jus buah segar memiliki Biaya Tetap (FC) sebesar Rp600.000 per bulan. Biaya Variabel (VC) per gelas adalah Rp4.000, dan Harga Jual (P) per gelas adalah Rp10.000.",
    question: "Volume penjualan minimal dalam unit agar usaha jus buah tersebut mencapai Titik Impas (Break-Even Point / BEP Unit) adalah...",
    correctText: "100 gelas",
    distractors: [
      "60 gelas",
      "150 gelas",
      "600 gelas",
      "40 gelas"
    ],
    explanation: "Rumus BEP Unit = FC / (P - VC) = 600.000 / (10.000 - 4.000) = 600.000 / 6.000 = 100 gelas. Pada penjualan 100 gelas, usaha tidak untung dan tidak rugi.",
    quickTip: "BEP Unit = FC / (Harga Jual - Biaya Variabel per unit)."
  },
  {
    category: "keuangan_bep",
    type: "pg",
    stimulus: "Laporan Laba Rugi akhir bulan sebuah kedai kopi siswa mencatat: Pendapatan Penjualan Rp15.000.000, Harga Pokok Penjualan (HPP) Rp7.000.000, serta Beban Operasional (listrik, internet, gaji) Rp4.500.000.",
    question: "Besarnya Laba Bersih (Net Profit) yang diperoleh kedai kopi tersebut adalah...",
    correctText: "Rp3.500.000",
    distractors: [
      "Rp8.000.000",
      "Rp11.500.000",
      "Rp5.500.000",
      "Rp1.500.000"
    ],
    explanation: "Laba Kotor = Penjualan - HPP = 15.000.000 - 7.000.000 = Rp8.000.000. Laba Bersih = Laba Kotor - Beban Operasional = 8.000.000 - 4.500.000 = Rp3.500.000.",
    quickTip: "Laba Kotor = Omzet - HPP. Laba Bersih = Laba Kotor - Beban Operasional."
  },
  {
    category: "keuangan_bep",
    type: "pg",
    stimulus: "Dalam pencatatan akuntansi keuangan sederhana, neraca (balance sheet) disusun berdasarkan persamaan dasar akuntansi yang seimbang.",
    question: "Rumus persamaan dasar akuntansi yang benar pada penyusunan neraca usaha adalah...",
    correctText: "Aset (Aktiva) = Liabilitas (Kewajiban/Utang) + Ekuitas (Modal)",
    distractors: [
      "Aset = Liabilitas - Ekuitas",
      "Ekuitas = Aset + Liabilitas",
      "Liabilitas = Ekuitas + Pendapatan Bersih",
      "Aset = Pendapatan Kotor - Beban Pajak"
    ],
    explanation: "Persamaan fundamental akuntansi neraca menyatakan bahwa seluruh kekayaan (Aset) yang dimiliki perusahaan dibiayai oleh dua sumber: kewajiban kepada pihak ketiga (Liabilitas) dan modal sendiri (Ekuitas).",
    quickTip: "Aset = Liabilitas (Utang) + Ekuitas (Modal)."
  },

  // ================= 13. HAK ATAS KEKAYAAN INTELEKTUAL (HaKI) =================
  {
    category: "haki",
    type: "pg",
    stimulus: "Siswa SMK menciptakan inovasi alat perontok padi mini dengan mekanisme transmisi pedal baru yang lebih hemat energi dan belum pernah dibuat sebelumnya di dunia industri.",
    question: "Jenis perlindungan Hak atas Kekayaan Intelektual (HaKI) yang tepat diajukan untuk melindungi teknologi invensi baru tersebut adalah...",
    correctText: "Paten (Patent / Paten Sederhana)",
    distractors: [
      "Hak Cipta (Copyright)",
      "Merek Dagang (Trademark)",
      "Rahasia Dagang (Trade Secret)",
      "Desain Tata Letak Sirkuit Terpadu"
    ],
    explanation: "Paten diberikan oleh negara kepada inventor atas hasil invensinya di bidang teknologi yang mengandung langkah inventif dan dapat diterapkan dalam industri.",
    quickTip: "Invensi teknologi baru yang memiliki fungsi teknis = Paten."
  },
  {
    category: "haki",
    type: "pg",
    stimulus: "Sebuah unit usaha siswa SMK mendesain logo visual kombinasi huruf 'K-Robo' dengan ikon warna khas yang ditempelkan pada semua kemasan produk untuk membedakannya dari produk kompetitor.",
    question: "Perlindungan hukum HaKI yang melindungi logo, simbol, dan nama pengenal produk dari tindakan peniruan kompetitor adalah...",
    correctText: "Merek (Trademark / Merek Dagang)",
    distractors: [
      "Hak Paten Invensi",
      "Rahasia Dagang",
      "Desain Industri Fungsional",
      "Indikasi Geografis"
    ],
    explanation: "Merek adalah tanda berupa gambar, logo, nama, kata, atau susunan warna yang digunakan untuk membedakan barang atau jasa yang diproduksi oleh suatu entitas bisnis.",
    quickTip: "Logo, nama brand, dan simbol identitas pembeda barang = Merek Dagang."
  },
  {
    category: "haki",
    type: "pg",
    stimulus: "Perusahaan kecap kedelai legendaris menolak mempublikasikan komposisi rempah takaran rahasia yang membuat rasa kecapnya gurih khas ke lembaga publik, dan hanya menyimpannya dalam brankas pimpinan.",
    question: "Bentuk perlindungan kekayaan intelektual yang dimiliki perusahaan kecap tersebut termasuk kategori...",
    correctText: "Rahasia Dagang (Trade Secret)",
    distractors: [
      "Paten Sederhana Terbuka",
      "Hak Cipta Buku Seni",
      "Desain Industri Cetakan",
      "Sertifikasi Halal Publik"
    ],
    explanation: "Rahasia Dagang melindungi informasi bisnis/teknologi yang tidak diketahui oleh umum, memiliki nilai ekonomi, dan dijaga kerahasiaannya oleh pemiliknya tanpa kewajiban publikasi ke publik.",
    quickTip: "Formula resep atau informasi bisnis yang dirahasiakan rapat = Rahasia Dagang."
  },
  {
    category: "haki",
    type: "pg",
    stimulus: "Seorang pelaku usaha mendapati kompetitor menggunakan nama merek dan logo produknya secara persis tanpa izin (plagiarisme) hingga menimbulkan kebingungan konsumen di pasar.",
    question: "Langkah awal yang paling tepat dan profesional dilakukan oleh pemilik merek terdaftar sebelum membawa kasus ke ranah pidana pengadilan adalah...",
    correctText: "Mengirimkan surat somasi resmi disertai bukti kepemilikan sertifikat merek dari DJKI agar kompetitor menghentikan pelanggaran",
    distractors: [
      "Membuat postingan fitnah dan merusak toko fisik milik kompetitor",
      "Membayar peretas untuk merusak sistem jaringan internet kompetitor",
      "Membiarkan peniruan terjadi hingga modal usaha sendiri habis",
      "Meniru balik seluruh produk lain milik kompetitor tanpa etika"
    ],
    explanation: "Langkah legal pertama yang terukur adalah melayangkan somasi (surat peringatan hukum) yang menyertakan bukti kepemilikan sertifikat resmi DJKI guna penyelesaian damai atau penghentian pelanggaran.",
    quickTip: "Langkah pertama penanganan sengketa HaKI = Somasi resmi dengan bukti sertifikat DJKI."
  },

  // ================= BANK SOAL LANJUTAN: PELUANG, DESAIN & PRODUKSI =================
  {
    category: "peluang_usaha",
    type: "pg",
    stimulus: "Di era digital saat ini, banyak usaha konvensional beralih mengadopsi model bisnis langganan (subscription-based).",
    question: "Keuntungan utama model bisnis berlangganan bagi arus kas wirausaha pemula adalah...",
    correctText: "Memperoleh pendapatan berulang (recurring revenue) yang lebih stabil dan terprediksi setiap bulannya",
    distractors: [
      "Tidak memerlukan modal awal dan tidak membutuhkan produk nyata",
      "Menghilangkan seluruh kewajiban melayani konsumen purna jual",
      "Menjamin usaha terbebas dari segala bentuk persaingan pasar",
      "Tidak memerlukan pencatatan laporan keuangan berkala"
    ],
    explanation: "Model subscription memberikan stabilitas arus kas karena pelanggan membayar secara rutin (bulanan/tahunan), sehingga memudahkan perencanaan keuangan usaha rintisan.",
    quickTip: "Model langganan = Menghasilkan Recurring Revenue (pendapatan berulang stabil)."
  },
  {
    category: "desain_produk",
    type: "pg",
    stimulus: "Desain kemasan air mineral ramah lingkungan kini menggunakan botol plastik 100% rPET (recycled PET) tanpa label tempel plastik (label-less).",
    question: "Nilai keunggulan diferensiasi produk yang paling menonjol dari inovasi desain kemasan tersebut di mata konsumen modern adalah...",
    correctText: "Kepedulian terhadap kelestarian lingkungan hidup dan kemudahan proses daur ulang sampah",
    distractors: [
      "Mampu membuat rasa air mineral terasa manis seperti madu",
      "Kemasan dapat digunakan sebagai bahan bakar pengganti bensin",
      "Kemasan tidak akan hancur meskipun tertimpa beban 100 ton",
      "Harga jual produk otomatis menjadi sepuluh kali lipat lebih mahal"
    ],
    explanation: "Eco-friendly design memberikan nilai tambah berupa persepsi kepedulian lingkungan (green branding) yang semakin diminati konsumen berkesadaran ekologis tinggi.",
    quickTip: "Desain kemasan ramah lingkungan = Keunggulan nilai keberlanjutan (sustainability)."
  },
  {
    category: "proses_produksi",
    type: "pg",
    stimulus: "Proses produksi yang berjalan terus-menerus tanpa henti dengan mesin otomatis khusus untuk menghasilkan produk standar bervolume raksasa disebut...",
    question: "Jenis sistem produksi yang dimaksud adalah...",
    correctText: "Continuous Production (Produksi Terus-Menerus / Kontinu)",
    distractors: [
      "Intermittent Production (Produksi Terputus-Putus / Batch)",
      "Job Shop Production (Produksi Pesanan Satuan)",
      "Customized Craft Production (Produksi Kriya Manual)",
      "Speculative Trial Production (Produksi Coba-Coba)"
    ],
    explanation: "Continuous production beroperasi 24 jam dengan aliran material konstan dan standarisasi tinggi, umumnya digunakan pada industri semen, kertas, dan penyulingan minyak.",
    quickTip: "Produksi massal standar volume besar nonstop = Continuous Production."
  },
  {
    category: "biaya_hpp",
    type: "pg",
    stimulus: "Sebuah bengkel sablon kaos menerima pesanan 100 potong kaos. Biaya kain Rp40.000/kaos, tinta sablon Rp5.000/kaos, upah sablon Rp15.000/kaos. Biaya penyusutan alat sablon tetap Rp200.000.",
    question: "Berapa total biaya produksi untuk pesanan 100 potong kaos tersebut?",
    correctText: "Rp6.200.000",
    distractors: [
      "Rp6.000.000",
      "Rp5.800.000",
      "Rp7.200.000",
      "Rp4.500.000"
    ],
    explanation: "Biaya variabel per kaos = 40.000 + 5.000 + 15.000 = Rp60.000. Untuk 100 kaos = 100 x 60.000 = Rp6.000.000. Ditambah biaya tetap Rp200.000, maka total biaya = Rp6.200.000.",
    quickTip: "Total Biaya = (Biaya Variabel x Jumlah Unit) + Biaya Tetap."
  },
  {
    category: "pemasaran",
    type: "pg",
    stimulus: "Dalam bauran pemasaran jasa 7P (Product, Price, Place, Promotion, People, Process, Physical Evidence), bukti fisik keberadaan kantor yang rapi dan seragam staf yang bersih termasuk ke dalam unsur...",
    question: "Unsur bauran pemasaran yang dimaksud adalah...",
    correctText: "Physical Evidence (Bukti Fisik)",
    distractors: [
      "People (Sumber Daya Manusia)",
      "Process (Proses Layanan)",
      "Promotion (Promosi Penjualan)",
      "Place (Lokasi Distribusi)"
    ],
    explanation: "Physical evidence adalah lingkungan fisik tempat layanan disampaikan dan titik temu konsumen dengan bisnis yang mencerminkan kualitas nyata perusahaan.",
    quickTip: "Kerapian interior, seragam, dan tampilan visual tempat usaha = Physical Evidence."
  },
  {
    category: "keuangan_bep",
    type: "pg",
    stimulus: "Jika sebuah usaha memiliki Fixed Cost Rp1.000.000, Harga Jual Rp20.000, dan Variable Cost Rp15.000. Jika harga bahan baku naik sehingga Variable Cost menjadi Rp16.000 tanpa perubahan harga jual,",
    question: "Bagaimanakah dampak kenaikan biaya variabel tersebut terhadap titik impas (BEP)?",
    correctText: "BEP Unit akan meningkat, sehingga usaha harus menjual lebih banyak unit untuk balik modal",
    distractors: [
      "BEP Unit akan menurun, sehingga usaha lebih cepat untung",
      "BEP Unit tetap sama persis dan tidak mengalami perubahan",
      "BEP Unit otomatis bernilai nol rupiah tanpa perlu berjualan",
      "Biaya tetap otomatis berubah menjadi biaya variabel"
    ],
    explanation: "Margin kontribusi awal = 20.000 - 15.000 = 5.000 (BEP = 1.000.000/5.000 = 200 unit). Margin baru = 20.000 - 16.000 = 4.000 (BEP = 1.000.000/4.000 = 250 unit). BEP naik dari 200 ke 250 unit.",
    quickTip: "Kenaikan biaya variabel menekan margin kontribusi ➔ BEP Unit meningkat."
  }
];

// ================= MASTER POOL SOAL MULTI-CHOICE (PGK MCMA) =================
// Siswa dapat memilih lebih dari satu jawaban benar (Centang Kotak)

const KWU_MCMA_POOL = [
  {
    category: "peluang_swot",
    type: "pgk_mcma",
    stimulus: "Tim perintis wirausaha siswa SMK sedang melakukan analisis kelayakan usaha produk lampu hias limbah pipa PVC.",
    question: "Manakah pernyataan di bawah ini yang merupakan langkah validasi peluang usaha yang tepat dan realistis? (Pilihlah lebih dari satu jawaban benar)",
    options: [
      { text: "Melakukan survei preferensi desain dan kesediaan membayar pada calon pelanggan target", isCorrect: true },
      { text: "Menghitung estimasi modal awal dan ketersediaan bahan baku limbah pipa secara berkelanjutan", isCorrect: true },
      { text: "Langsung menyewa toko besar di pusat perbelanjaan sebelum produk selesai diuji coba", isCorrect: false },
      { text: "Mengidentifikasi kompetitor yang menjual produk serupa di marketplace online", isCorrect: true },
      { text: "Memastikan produk tidak perlu diuji keamanannya karena berasal dari barang daur ulang", isCorrect: false }
    ],
    explanation: "Validasi peluang usaha mencakup: riset kesediaan bayar konsumen, ketersediaan pasokan bahan baku secara berkelanjutan, dan pemetaan kekuatan pesaing.",
    quickTip: "Validasi usaha wajib: riset konsumen, kepastian bahan baku, dan analisa kompetitor."
  },
  {
    category: "desain_kemasan",
    type: "pgk_mcma",
    stimulus: "Desain kemasan pangan olahan yang baik harus memenuhi aspek estetika sekaligus ketentuan regulasi BPOM dan UU Pangan.",
    question: "Kriteria apa sajakah yang WAJIB dipenuhi pada kemasan produk makanan ringan bermutu? (Pilihlah lebih dari satu jawaban benar)",
    options: [
      { text: "Menggunakan bahan food grade yang aman dan tidak mencemari makanan di dalamnya", isCorrect: true },
      { text: "Mencantumkan tanggal kedaluwarsa dan nomor legalitas izin edar resmi (P-IRT / BPOM)", isCorrect: true },
      { text: "Menyertakan komposisi bahan baku penyusun secara transparan dan jujur", isCorrect: true },
      { text: "Wajib menyembunyikan informasi alergen agar semua orang tetap membeli", isCorrect: false },
      { text: "Bahan kemasan harus mudah bocor agar udara luar bisa mendinginkan makanan", isCorrect: false }
    ],
    explanation: "Kemasan makanan bermutu wajib food grade, mencantumkan izin edar, expired date, komposisi jujur, serta peringatan alergen.",
    quickTip: "Kemasan pangan wajib: Food Grade + Komposisi + Tanggal Kedaluwarsa + Izin Edar."
  },
  {
    category: "pengendalian_mutu",
    type: "pgk_mcma",
    stimulus: "Untuk menjamin mutu produk kerajinan kulit tetap konsisten sebelum dikirim ke pembeli luar negeri, perusahaan menerapkan standarisasi Quality Control (QC).",
    question: "Manakah tindakan di bawah ini yang termasuk dalam prosedur pengendalian mutu produk? (Pilihlah lebih dari satu jawaban benar)",
    options: [
      { text: "Inspeksi kerapian jahitan dan keseragaman warna permukaan bahan kulit", isCorrect: true },
      { text: "Uji kekuatan ketahanan tarik pada tali pegangan tas dengan beban standar", isCorrect: true },
      { text: "Pemisahan barang cacat (defect) dari batch produk siap kirim ke ruang perbaikan", isCorrect: true },
      { text: "Pengurangan mutu bahan baku secara diam-diam tanpa memberitahu pembeli", isCorrect: false },
      { text: "Pengabaian keluhan pelanggan yang masuk ke meja layanan konsumen", isCorrect: false }
    ],
    explanation: "Pengendalian mutu mencakup inspeksi visual, uji beban fungsional, pemisahan defect, dan penanganan ketidaksesuaian standar.",
    quickTip: "QC = Inspeksi visual + Uji kekuatan fisik + Karantina barang cacat."
  },
  {
    category: "biaya_hpp",
    type: "pgk_mcma",
    stimulus: "Dalam pembukuan biaya usaha pembuatan roti manis, terdapat berbagai macam pengeluaran operasional.",
    question: "Manakah di antara pos pengeluaran berikut yang termasuk ke dalam Biaya Variabel (Variable Cost)? (Pilihlah lebih dari satu jawaban benar)",
    options: [
      { text: "Biaya pembelian tepung terigu, gula pasir, dan ragi roti", isCorrect: true },
      { text: "Biaya pembelian plastik kemasan pembungkus satuan roti", isCorrect: true },
      { text: "Upah tenaga kerja pembuat roti dengan sistem borongan per loyang", isCorrect: true },
      { text: "Biaya sewa tempat ruko toko yang dibayar tetap setiap tahun", isCorrect: false },
      { text: "Biaya penyusutan mesin oven pemanggang roti per bulan", isCorrect: false }
    ],
    explanation: "Biaya variabel berfluktuasi sebanding dengan jumlah roti yang dibuat (tepung, gula, kemasan satuan, upah borongan). Sewa ruko dan penyusutan mesin adalah biaya tetap.",
    quickTip: "Biaya Variabel = Biaya yang jumlahnya bertambah bila produksi roti bertambah."
  },
  {
    category: "digital_marketing",
    type: "pgk_mcma",
    stimulus: "Pemasaran digital (digital marketing) saat ini menjadi tulang punggung penjualan UMKM dan wirausaha muda SMK.",
    question: "Strategi pemasaran digital apa sajakah yang efektif untuk meningkatkan penjualan produk di media sosial? (Pilihlah lebih dari satu jawaban benar)",
    options: [
      { text: "Membuat video konten kreatif yang menyorot manfaat nyata produk (storytelling)", isCorrect: true },
      { text: "Memanfaatkan fitur siaran langsung (live streaming shopping) dengan interaksi tanya-jawab", isCorrect: true },
      { text: "Memasang target audiens yang spesifik saat beriklan berbayar di media sosial", isCorrect: true },
      { text: "Melakukan spam komentar secara acak di postingan akun bisnis orang lain", isCorrect: false },
      { text: "Mengunggah foto buram tanpa keterangan harga dan tanpa informasi kontak", isCorrect: false }
    ],
    explanation: "Digital marketing modern mengandalkan storytelling edukatif, interaksi live streaming, dan penargetan iklan akurat ke target pasar spesifik.",
    quickTip: "Strategi digital sukses: Storytelling konten + Live shopping + Targeted Ads."
  },
  {
    category: "haki_legalitas",
    type: "pgk_mcma",
    stimulus: "Pemerintah Indonesia melalui Kementerian Hukum memberikan berbagai jenis hak kekayaan intelektual untuk melindungi inovator.",
    question: "Manakah klasifikasi Hak atas Kekayaan Intelektual (HaKI) berikut beserta objek perlindungannya yang BENAR? (Pilihlah lebih dari satu jawaban benar)",
    options: [
      { text: "Paten melindungi invensi teknologi baru yang dapat diterapkan dalam industri", isCorrect: true },
      { text: "Merek melindungi tanda visual, logo, dan nama pengenal komersial barang/jasa", isCorrect: true },
      { text: "Hak Cipta melindungi karya seni, lagu, buku, sinematografi, dan program komputer", isCorrect: true },
      { text: "Paten melindungi karya puisi cinta dan lukisan abstrak pemandangan", isCorrect: false },
      { text: "Merek melindungi formula ilmiah senyawa kimia baru hasil laboratorium", isCorrect: false }
    ],
    explanation: "Paten = Invensi teknologi; Merek = Logo/nama dagang; Hak Cipta = Karya seni/sastra/software; Desain Industri = Estetika bentuk 3D/2D fisik.",
    quickTip: "Paten = Teknologi; Merek = Nama/Logo; Hak Cipta = Seni/Sastra/Software."
  },
  {
    category: "proposal_keuangan",
    type: "pgk_mcma",
    stimulus: "Sebuah proposal bisnis yang profesional harus menyajikan analisis proyeksi keuangan yang sehat dan terukur.",
    question: "Indikator keuangan apa sajakah yang umum digunakan untuk mengukur kelayakan investasi usaha dalam proposal? (Pilihlah lebih dari satu jawaban benar)",
    options: [
      { text: "Break-Even Point (BEP) untuk mengetahui batas titik impas penjualan", isCorrect: true },
      { text: "Return on Investment (ROI) untuk mengetahui tingkat pengembalian laba dari modal", isCorrect: true },
      { text: "Payback Period untuk mengetahui jangka waktu kembalinya modal investasi", isCorrect: true },
      { text: "Horoskop keberuntungan tanggal kelahiran pendiri usaha", isCorrect: false },
      { text: "Jumlah pengikut akun pribadi media sosial yang tidak relevan dengan bisnis", isCorrect: false }
    ],
    explanation: "Kelayakan finansial diukur secara kuantitatif melalui BEP (titik impas), ROI (profitabilitas modal), Payback Period (kecepatan balik modal), dan Cash Flow.",
    quickTip: "Metrik kelayakan finansial: BEP + ROI + Payback Period + Cash Flow."
  }
];

// ================= MASTER POOL SOAL KATEGORI BENAR / SALAH (PGK TF) =================
// Siswa menentukan status Benar atau Salah pada tiap butir pernyataan dalam tabel

const KWU_TF_POOL = [
  {
    category: "swot_risiko",
    type: "pgk_tf",
    stimulus: "Berikut disajikan analisis kondisi usaha katering diet sehat 'Fit-Kitchen' yang didirikan siswa SMK.",
    question: "Tentukan apakah pernyataan mengenai analisis SWOT berikut BENAR atau SALAH berdasarkan konsep manajemen strategis:",
    statements: [
      { text: "Keahlian memasak higienis bersertifikasi yang dimiliki koki internal termasuk kategori Strengths (Kekuatan).", correct: "B" },
      { text: "Meningkatnya tren gaya hidup sehat di kalangan masyarakat perkotaan termasuk kategori Opportunities (Peluang).", correct: "B" },
      { text: "Tingginya harga sewa tempat ruko di pusat kota merupakan kelemahan bawaan pribadi koki.", correct: "S" }
    ],
    explanation: "Sertifikasi koki adalah kekuatan internal (Strengths). Tren masyarakat adalah peluang eksternal (Opportunities). Harga sewa ruko adalah faktor lingkungan eksternal, bukan kelemahan pribadi.",
    quickTip: "Faktor internal = S & W. Faktor eksternal lingkungan = O & T."
  },
  {
    category: "desain_prototipe",
    type: "pgk_tf",
    stimulus: "Dalam tahapan riset dan pengembangan (R&D) produk inovatif sebelum masuk tahap komersialisasi massal.",
    question: "Tentukan status BENAR atau SALAH untuk setiap pernyataan terkait tahapan prototipe berikut:",
    statements: [
      { text: "Pembuatan prototipe bertujuan untuk mengidentifikasi cacat desain sebelum mengeluarkan biaya produksi massal.", correct: "B" },
      { text: "Prototipe produk yang telah dibuat tidak perlu diuji coba karena sudah diyakini sempurna.", correct: "S" },
      { text: "Umpan balik dari calon konsumen pada tahap uji prototipe sangat berharga untuk iterasi perbaikan.", correct: "B" }
    ],
    explanation: "Tujuan utama prototyping adalah fail-early guna menghemat biaya cacat massal dan menyerap umpan balik konsumen sebelum produksi pabrikasi.",
    quickTip: "Prototipe wajib diuji coba untuk menemukan kekurangan sedini mungkin."
  },
  {
    category: "kemasan_label",
    type: "pgk_tf",
    stimulus: "Ketentuan pelabelan produk pangan olahan diatur secara ketat oleh Badan Pengawas Obat dan Makanan (BPOM RI).",
    question: "Tentukan status BENAR atau SALAH untuk setiap pernyataan mengenai regulasi label produk pangan berikut:",
    statements: [
      { text: "Pencantuman tanggal kedaluwarsa (Expired Date) bersifat sukarela dan boleh dihilangkan pada produk olahan basah.", correct: "S" },
      { text: "Nomor izin P-IRT diterbitkan oleh Dinas Kesehatan Pemerintah Daerah untuk skala industri rumah tangga.", correct: "B" },
      { text: "Bahan pangan yang berpotensi menimbulkan alergi wajib dicetak tebal pada daftar komposisi bahan.", correct: "B" }
    ],
    explanation: "Tanggal kedaluwarsa WAJIB hukumnya. P-IRT diterbitkan Dinas Kesehatan Pemda/PTSP, sedangkan alergen wajib dicetak tebal/diberi peringatan khusus.",
    quickTip: "Expired date wajib mutlak. P-IRT untuk skala rumah tangga dari Dinkes/Pemda."
  },
  {
    category: "bep_keuangan",
    type: "pgk_tf",
    stimulus: "Konsep Break-Even Point (Titik Impas) dan Laporan Keuangan dalam pengelolaan usaha wirausaha.",
    question: "Tentukan status BENAR atau SALAH untuk setiap pernyataan terkait akuntansi bisnis berikut:",
    statements: [
      { text: "Pada saat volume penjualan mencapai titik BEP, laba operasional usaha bernilai tepat nol rupiah.", correct: "B" },
      { text: "Jika harga jual produk dinaikkan sementara biaya tetap dan variabel konstan, maka BEP unit akan meningkat.", correct: "S" },
      { text: "Laporan Laba Rugi menyajikan informasi mengenai total pendapatan, beban operasional, dan hasil laba bersih.", correct: "B" }
    ],
    explanation: "Pada BEP, Laba = 0. Jika harga jual naik, selisih (P - VC) membesar, sehingga BEP Unit justru MENURUN (lebih cepat balik modal). Laporan Laba Rugi merangkum pendapatan vs beban.",
    quickTip: "Harga jual naik ➔ BEP unit turun (makin sedikit unit yang perlu dijual untuk balik modal)."
  },
  {
    category: "haki_hukum",
    type: "pgk_tf",
    stimulus: "Penerapan perlindungan Hak atas Kekayaan Intelektual (HaKI) dalam iklim usaha industri di Indonesia.",
    question: "Tentukan status BENAR atau SALAH untuk setiap pernyataan mengenai hukum HaKI berikut:",
    statements: [
      { text: "Sistem pendaftaran paten di Indonesia menganut asas First to File (siapa yang mendaftar pertama kali yang berhak).", correct: "B" },
      { text: "Menggunakan nama merek dagang terkenal milik pihak lain tanpa izin dapat dikenakan sanksi pidana dan perdata.", correct: "B" },
      { text: "Perlindungan Rahasia Dagang akan otomatis gugur jika formula rahasia tersebut didaftarkan dan diumumkan ke publik.", correct: "B" }
    ],
    explanation: "Sistem First to File memberi hak pada pendaftar pertama. Pelanggaran merek melanggar UU Merek (pidana & perdata). Jika rahasia dagang dipublikasikan terbuka, maka sifat rahasianya gugur.",
    quickTip: "First to File = Yang tercepat mendaftar diakui hukum. Rahasia dagang gugur bila dibuka umum."
  },
  {
    category: "distribusi_pemasaran",
    type: "pgk_tf",
    stimulus: "Pengelolaan saluran pemasaran dan distribusi produk inovasi kreatif ke tangan pelanggan.",
    question: "Tentukan status BENAR atau SALAH untuk setiap pernyataan terkait strategi pemasaran berikut:",
    statements: [
      { text: "Menjual melalui saluran tidak langsung (distributor/agen) dapat memperluas jangkauan wilayah pasar produk.", correct: "B" },
      { text: "Model bisnis dropshipping mewajibkan penjual menyewa gudang besar dan membeli stok barang sendiri di awal.", correct: "S" },
      { text: "Strategi penetapan harga Cost-Plus Pricing menghitung harga jual dengan menambahkan persentase laba di atas HPP.", correct: "B" }
    ],
    explanation: "Distributor memperluas jangkauan logistik. Dropshipping TIDAK memerlukan stok barang sendiri karena dikirim langsung oleh supplier. Cost-Plus Pricing menjumlahkan HPP + margin laba.",
    quickTip: "Dropshipping = Jual tanpa stok gudang sendiri. Cost-Plus = HPP + Mark-up Laba."
  }
];

// ================= FUNGSI GENERATOR 30 SOAL PER SESI BERBASIS SEED =================

function seededRandom(seed) {
  let x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

function shuffleArray(array, rng) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Menghasilkan tepat 30 butir soal unik untuk sebuah sesi:
 * - 20 Pilihan Ganda Tunggal (PG)
 * - 5 Pilihan Ganda Kompleks Multi-Answer (PGK MCMA)
 * - 5 Pilihan Ganda Kompleks Tabel Benar/Salah (PGK TF)
 */
function getQuestionsForSession(sessionId) {
  let seed = 12345;
  for (let i = 0; i < sessionId.length; i++) {
    seed += sessionId.charCodeAt(i) * (i + 13);
  }

  let rngState = seed;
  const rng = () => {
    rngState += 1;
    return seededRandom(rngState);
  };

  const shuffledPg = shuffleArray(KWU_MASTER_QUESTIONS, rng);
  const shuffledMcma = shuffleArray(KWU_MCMA_POOL, rng);
  const shuffledTf = shuffleArray(KWU_TF_POOL, rng);

  const rawList = [];

  // Masukkan 20 PG
  for (let i = 0; i < 20; i++) {
    rawList.push({ ...shuffledPg[i % shuffledPg.length], type: "pg" });
  }

  // Masukkan 5 MCMA
  for (let i = 0; i < 5; i++) {
    rawList.push({ ...shuffledMcma[i % shuffledMcma.length], type: "pgk_mcma" });
  }

  // Masukkan 5 TF
  for (let i = 0; i < 5; i++) {
    rawList.push({ ...shuffledTf[i % shuffledTf.length], type: "pgk_tf" });
  }

  // Acak urutan 30 nomor soal agar format PG, MCMA, dan TF tersebar alami
  const mixedQuestions = shuffleArray(rawList, rng);

  // Format final 30 soal
  const final30Questions = mixedQuestions.map((rawQ, index) => {
    const qNumber = index + 1;
    const qId = `${sessionId}_q${qNumber}`;

    // 1. Tipe PG Tunggal
    if (rawQ.type === "pg") {
      const allChoices = [
        { text: rawQ.correctText, isCorrect: true },
        ...rawQ.distractors.map(d => ({ text: d, isCorrect: false }))
      ];

      const shuffledChoices = shuffleArray(allChoices, rng);
      const letters = ["A", "B", "C", "D", "E"];
      let correctLetter = "A";

      const formattedOptions = shuffledChoices.map((choice, cIdx) => {
        const letter = letters[cIdx];
        if (choice.isCorrect) correctLetter = letter;
        return {
          id: letter,
          text: choice.text
        };
      });

      return {
        id: qId,
        number: qNumber,
        type: "pg",
        stimulus: rawQ.stimulus,
        question: rawQ.question,
        options: formattedOptions,
        key: correctLetter,
        explanation: rawQ.explanation,
        quickTip: rawQ.quickTip
      };
    }

    // 2. Tipe PGK MCMA (Centang > 1)
    if (rawQ.type === "pgk_mcma") {
      const shuffledOptions = shuffleArray(rawQ.options, rng);
      const letters = ["A", "B", "C", "D", "E"];
      const correctLetters = [];

      const formattedOptions = shuffledOptions.map((opt, oIdx) => {
        const letter = letters[oIdx];
        if (opt.isCorrect) correctLetters.push(letter);
        return {
          id: letter,
          text: opt.text
        };
      });

      return {
        id: qId,
        number: qNumber,
        type: "pgk_mcma",
        stimulus: rawQ.stimulus,
        question: rawQ.question,
        options: formattedOptions,
        key: correctLetters.sort(),
        explanation: rawQ.explanation,
        quickTip: rawQ.quickTip
      };
    }

    // 3. Tipe PGK TF (Kategori Tabel Benar / Salah)
    if (rawQ.type === "pgk_tf") {
      const shuffledStatements = shuffleArray(rawQ.statements, rng);
      const formattedStatements = shuffledStatements.map((st, stIdx) => ({
        id: `st${stIdx + 1}`,
        text: st.text,
        correct: st.correct
      }));

      return {
        id: qId,
        number: qNumber,
        type: "pgk_tf",
        stimulus: rawQ.stimulus,
        question: rawQ.question,
        statements: formattedStatements,
        explanation: rawQ.explanation,
        quickTip: rawQ.quickTip
      };
    }
  });

  return final30Questions;
}

if (typeof window !== "undefined") {
  window.KWU_MASTER_QUESTIONS = KWU_MASTER_QUESTIONS;
  window.KWU_MCMA_POOL = KWU_MCMA_POOL;
  window.KWU_TF_POOL = KWU_TF_POOL;
  window.getQuestionsForSession = getQuestionsForSession;
}
