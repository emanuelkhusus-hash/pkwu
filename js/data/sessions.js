/**
 * REGISTRY 30 SESI DRILLING TKA PRODUK ATAU PROJEK KREATIF DAN KEWIRAUSAHAAN (PKK / KWU)
 * SMK DAN MAK KELAS XII (15 HARI x 2 SESI)
 * Sesuai Standar Muatan & Matriks Asesmen Pusmendik Kemendikdasmen RI 2026
 * 
 * Cakupan Elemen:
 * 1. Elemen A: Kegiatan Produksi, Pemasaran, dan Distribusi (9 Submateri)
 * 2. Elemen B: Pengelolaan Usaha (4 Submateri)
 */

const TKA_SESSIONS = [
  // ================= DAY 1: ANALISIS PELUANG USAHA & RISET PASAR =================
  {
    id: "s01",
    day: 1,
    sessionNum: 1,
    code: "H01-S1",
    title: "Identifikasi Peluang Usaha & Riset Pasar Produk Kreatif",
    category: "Pengelolaan Usaha",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: null,
    description: "Menganalisis sumber inspirasi peluang usaha, tren kebutuhan konsumen, riset pasar sederhana, dan validasi ide bisnis siswa SMK."
  },
  {
    id: "s02",
    day: 1,
    sessionNum: 2,
    code: "H01-S2",
    title: "Analisis SWOT & Manajemen Risiko Bisnis Pemula",
    category: "Pengelolaan Usaha",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s01",
    description: "Membedah Kekuatan (Strengths), Kelemahan (Weaknesses), Peluang (Opportunities), dan Ancaman (Threats) serta mitigasi risiko usaha rintisan."
  },

  // ================= DAY 2: PENGEMBANGAN DESAIN PRODUK =================
  {
    id: "s03",
    day: 2,
    sessionNum: 1,
    code: "H02-S1",
    title: "Konsep & Karakteristik Desain Produk Kreatif SMK",
    category: "Kegiatan Produksi",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s02",
    description: "Menganalisis fungsi estetika, fungsi utilitas/ergonomi, kebaruan, dan diferensiasi produk kreatif hasil karya kejuruan SMK."
  },
  {
    id: "s04",
    day: 2,
    sessionNum: 2,
    code: "H02-S2",
    title: "Prosedur & Alur Kerja Pengembangan Desain Produk",
    category: "Kegiatan Produksi",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s03",
    description: "Menjelaskan alur perancangan produk mulai dari sketsa ide (sketching), studi kelayakan teknis, detail engineering, hingga approval desain."
  },

  // ================= DAY 3: DESAIN KEMASAN & REGULASI LABEL =================
  {
    id: "s05",
    day: 3,
    sessionNum: 1,
    code: "H03-S1",
    title: "Fungsi, Estetika & Ketentuan Regulasi Kemasan Produk",
    category: "Kegiatan Produksi",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s04",
    description: "Mengevaluasi fungsi protektif dan promosi kemasan, kesesuaian bahan kemas, serta daya tarik visual (tipografi, warna, dan proporsi)."
  },
  {
    id: "s06",
    day: 3,
    sessionNum: 2,
    code: "H03-S2",
    title: "Mini Boss 1: Peluang Pasar, Desain Produk & Regulasi Label (PIRT/BPOM)",
    category: "Mini Boss Challenge",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s05",
    description: "Uji penalaran integrasi analisis SWOT peluang usaha, kriteria desain inovatif, dan pemenuhan regulasi label wajib (komposisi, kedaluwarsa, izin edar)."
  },

  // ================= DAY 4: PEMBUATAN & PENGUJIAN PROTOTIPE PRODUK =================
  {
    id: "s07",
    day: 4,
    sessionNum: 1,
    code: "H04-S1",
    title: "Tahapan Pembuatan Prototipe Produk (Mockup & Working Sample)",
    category: "Kegiatan Produksi",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s06",
    description: "Memahami konsep proof-of-concept, pembuatan mockup visual, working model / sampel fungsional sebelum masuk tahap produksi massal."
  },
  {
    id: "s08",
    day: 4,
    sessionNum: 2,
    code: "H04-S2",
    title: "Pengujian Kelayakan, Fungsi & Uji Pasar Prototipe",
    category: "Kegiatan Produksi",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s07",
    description: "Metode pengujian teknis prototipe (uji beban, ketahanan, sensoris rasa), umpan balik konsumen awal (focus group), dan iterasi penyempurnaan."
  },

  // ================= DAY 5: PERENCANAAN & ALUR PROSES PRODUKSI =================
  {
    id: "s09",
    day: 5,
    sessionNum: 1,
    code: "H05-S1",
    title: "Perencanaan Produksi Massal & Alokasi Sumber Daya",
    category: "Kegiatan Produksi",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s08",
    description: "Menghitung kapasitas produksi, kebutuhan bahan baku langsung, ketersediaan tenaga kerja, jam kerja mesin, dan penjadwalan kerja (Gantt chart)."
  },
  {
    id: "s10",
    day: 5,
    sessionNum: 2,
    code: "H05-S2",
    title: "Metode & Alur Kerja Proses Produksi Produk Kreatif",
    category: "Kegiatan Produksi",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s09",
    description: "Menganalisis alur continuous vs intermittent production, routing lembar kerja, perakitan, standarisasi SOP mesin, dan efisiensi lini produksi."
  },

  // ================= DAY 6: PENGEMASAN & PROTEKSI PRODUK =================
  {
    id: "s11",
    day: 6,
    sessionNum: 1,
    code: "H06-S1",
    title: "Teknik Pengemasan Produk Pangan & Non-Pangan",
    category: "Kegiatan Produksi",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s10",
    description: "Teknik kemasan primer, sekunder, tersier, pengemasan vakum, kemasan biodegradable/eco-friendly, serta proteksi produk selama penyimpanan."
  },
  {
    id: "s12",
    day: 6,
    sessionNum: 2,
    code: "H06-S2",
    title: "Mini Boss 2: Evaluasi Terpadu Prototipe, Alur Produksi & Pengemasan",
    category: "Mini Boss Challenge",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s11",
    description: "Studi kasus integrasi pengujian prototipe, hambatan bottleneck pada lintasan produksi, dan penentuan material kemasan paling efisien."
  },

  // ================= DAY 7: PENGENDALIAN MUTU PRODUK (QUALITY CONTROL) =================
  {
    id: "s13",
    day: 7,
    sessionNum: 1,
    code: "H07-S1",
    title: "Standarisasi & Prosedur Pengendalian Mutu (Quality Control)",
    category: "Kegiatan Produksi",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s12",
    description: "Penerapan standar SNI/ISO, titik kendali kritis (Critical Control Point), inspeksi bahan baku masuk, in-process inspection, dan final check."
  },
  {
    id: "s14",
    day: 7,
    sessionNum: 2,
    code: "H07-S2",
    title: "Analisis Cacat Produk (Defect Rate) & Perbaikan Mutu Berkelanjutan",
    category: "Kegiatan Produksi",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s13",
    description: "Menganalisis penyebab cacat barang (metode 5 Mengapa / Diagram Tulang Ikan Ishikawa), persentase defect, dan tindakan korektif Kaizen."
  },

  // ================= DAY 8: PERHITUNGAN BIAYA PRODUKSI & HPP =================
  {
    id: "s15",
    day: 8,
    sessionNum: 1,
    code: "H08-S1",
    title: "Struktur Biaya Usaha: Biaya Tetap (FC) & Biaya Variabel (VC)",
    category: "Kegiatan Produksi",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s14",
    description: "Klasifikasi unsur biaya tetap (sewa, penyusutan mesin), biaya variabel (bahan baku, upah borongan), dan biaya overhead pabrik (BOP)."
  },
  {
    id: "s16",
    day: 8,
    sessionNum: 2,
    code: "H08-S2",
    title: "Penetapan Harga Pokok Produksi (HPP) & Margin Keuntungan",
    category: "Kegiatan Produksi",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s15",
    description: "Rumus perhitungan HPP per unit, metode Cost-Plus Pricing, Mark-up Pricing, dan strategi penetapan harga jual produk bersaing di pasar."
  },

  // ================= DAY 9: STRATEGI BAURAN PEMASARAN (MARKETING MIX) =================
  {
    id: "s17",
    day: 9,
    sessionNum: 1,
    code: "H09-S1",
    title: "Strategi Bauran Pemasaran (4P / 7P) & STP Produk Kreatif",
    category: "Pemasaran Produk",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s16",
    description: "Menerapkan Segmentasi Pasar, Targeting, Positioning (STP) serta bauran Product, Price, Place, Promotion (ditambah People, Process, Physical Evidence)."
  },
  {
    id: "s18",
    day: 9,
    sessionNum: 2,
    code: "H09-S2",
    title: "Pemasaran Digital, Media Sosial, & Konten Kreatif",
    category: "Pemasaran Produk",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s17",
    description: "Pemanfaatan marketplace, copywriting, social media marketing (Instagram/TikTok Shop), Search Engine Optimization (SEO), dan live streaming penjualan."
  },

  // ================= DAY 10: SALURAN DISTRIBUSI & LOGISTIK PENJUALAN =================
  {
    id: "s19",
    day: 10,
    sessionNum: 1,
    code: "H10-S1",
    title: "Saluran Distribusi Langsung, Tidak Langsung & Rantai Pasok",
    category: "Distribusi Produk",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s18",
    description: "Memilih rute distribusi barang (produsen ke konsumen langsung vs grosir/retailer), strategi kemitraan agen, dropshipping, dan manajemen pergudangan."
  },
  {
    id: "s20",
    day: 10,
    sessionNum: 2,
    code: "H10-S2",
    title: "Mini Boss 3: Evaluasi Terpadu QC, HPP, Pemasaran & Saluran Distribusi",
    category: "Mini Boss Challenge",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s19",
    description: "Studi kasus integrasi kalkulasi HPP, efisiensi rantai pasok distribusi, kepuasan pembeli dari mutu produk, dan eksekusi kampanye promosi digital."
  },

  // ================= DAY 11: PENYUSUNAN PROPOSAL USAHA KREATIF =================
  {
    id: "s21",
    day: 11,
    sessionNum: 1,
    code: "H11-S1",
    title: "Struktur Proposal Usaha: Profil, Rencana Operasi & Pemasaran",
    category: "Pengelolaan Usaha",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s20",
    description: "Menyusun kerangka proposal usaha standar: ringkasan eksekutif, visi misi, analisis pasar sasaran, operasional harian, dan struktur organisasi tim."
  },
  {
    id: "s22",
    day: 11,
    sessionNum: 2,
    code: "H11-S2",
    title: "Rencana Keuangan Proposal Usaha & Teknik Pitching Investor",
    category: "Pengelolaan Usaha",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s21",
    description: "Penyusunan proyeksi modal awal, estimasi pengembalian modal (ROI / Payback Period), dan penyusunan slide presentasi (pitch deck) yang meyakinkan."
  },

  // ================= DAY 12: ANALISIS BEP & LAPORAN LABA RUGI =================
  {
    id: "s23",
    day: 12,
    sessionNum: 1,
    code: "H12-S1",
    title: "Analisis Titik Impas / Break-Even Point (BEP Unit & Rupiah)",
    category: "Pengelolaan Usaha",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s22",
    description: "Perhitungan matematis BEP Unit: FC / (P - VC) dan BEP Rupiah: FC / (1 - (VC/P)) untuk mengetahui batas volume penjualan agar usaha tidak rugi."
  },
  {
    id: "s24",
    day: 12,
    sessionNum: 2,
    code: "H12-S2",
    title: "Penyusunan Laporan Laba Rugi Sederhana Usaha Siswa",
    category: "Pengelolaan Usaha",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s23",
    description: "Format laporan laba rugi: Pendapatan Penjualan, HPP, Laba Kotor, Beban Operasional (Beban Penjualan & Administrasi), dan perolehan Laba Bersih."
  },

  // ================= DAY 13: ARUS KAS & NERACA KEUANGAN SEDERHANA =================
  {
    id: "s25",
    day: 13,
    sessionNum: 1,
    code: "H13-S1",
    title: "Penyusunan Laporan Arus Kas (Cash Flow) & Neraca Usaha",
    category: "Pengelolaan Usaha",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s24",
    description: "Arus kas masuk (cash in), arus kas keluar (cash out), saldo kas akhir, serta persamaan dasar neraca keuangan: Aset = Kewajiban + Ekuitas Modal."
  },
  {
    id: "s26",
    day: 13,
    sessionNum: 2,
    code: "H13-S2",
    title: "Mini Boss 4: Evaluasi Terpadu Proposal Usaha, BEP & Laporan Finansial",
    category: "Mini Boss Challenge",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s25",
    description: "Pemecahan masalah finansial komprehensif: simulasi kenaikan harga bahan baku terhadap BEP, penyesuaian cash flow, dan evaluasi kelayakan modal."
  },

  // ================= DAY 14: HAK ATAS KEKAYAAN INTELEKTUAL (HaKI) =================
  {
    id: "s27",
    day: 14,
    sessionNum: 1,
    code: "H14-S1",
    title: "Perlindungan Hak Cipta, Merek Dagang & Paten Produk Inovasi",
    category: "Pengelolaan Usaha",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s26",
    description: "Membedakan lingkup Hak Cipta (karya seni/tulisan), Merek Dagang (logo/nama brand), Paten (invensi teknologi), dan prosedur pendaftaran ke DJKI."
  },
  {
    id: "s28",
    day: 14,
    sessionNum: 2,
    code: "H14-S2",
    title: "Desain Industri, Rahasia Dagang & Penanganan Sengketa HaKI",
    category: "Pengelolaan Usaha",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s27",
    description: "Perlindungan bentuk 3D/2D desain industri, perlindungan resep/formula rahasia dagang, serta langkah hukum menghadapi plagiarisme merek dan produk tiruan."
  },

  // ================= DAY 15: SIMULASI TRY-OUT KOMPREHENSIF NASIONAL =================
  {
    id: "s29",
    day: 15,
    sessionNum: 1,
    code: "H15-S1",
    title: "Simulasi Komprehensif TKA PKK / KWU Paket A (Elemen A & B Lintas Bab)",
    category: "Simulasi Komprehensif",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s28",
    description: "Uji coba komprehensif 30 butir soal acak standar Pusmendik mencakup seluruh tahapan desain, produksi, QC, promosi, BEP, dan legalitas HaKI."
  },
  {
    id: "s30",
    day: 15,
    sessionNum: 2,
    code: "H15-S2",
    title: "Final Boss Exam: Uji Kompetensi Kelulusan Nasional TKA PKK SMK 2026",
    category: "Final Boss Exam",
    questionCount: 30,
    durationMinutes: 25,
    passingGrade: 70,
    prerequisiteId: "s29",
    description: "Tahap evaluasi puncak akhir seluruh kompetensi PKK SMK: Soal penalaran tingkat tinggi (HOTS Level 3), studi kasus industri nyata, penentuan sertifikasi kelulusan."
  }
];

if (typeof window !== "undefined") {
  window.TKA_SESSIONS = TKA_SESSIONS;
}
