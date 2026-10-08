# Aplikasi Drilling CBT TKA - PKK / KWU SMK Negeri 1 Giritontro 2026
### Dikembangkan oleh PM_Dev (prihmardoyo_developer)
> **PROGRAM TEST / DRILLING INTERNAL** • Standar Muatan & Matriks Asesmen Pusmendik Kemendikdasmen RI 2026

Aplikasi web simulasi Tes Kompetensi Akademik (TKA) kejuruan **Produk atau Projek Kreatif dan Kewirausahaan (PKK / KWU)** SMK dan MAK berbasis web statis yang siap diunggah ke **GitHub Pages**.

---

## 🌟 Fitur Utama Sesuai Kebutuhan Drilling

1. **Tampilan Otentik Pusmendik Kemendikdasmen:**
   - Header resmi Tut Wuri Handayani, PUSMENDIK, dan tagline `#JUJUR,GEMBIRA`.
   - Timer hitung mundur dengan warna peringatan (*warning/danger*).
   - Pengatur ukuran huruf aksesibilitas (`A-`, `A`, `A+`).
   - Format 3 ragam soal resmi:
     - **Pilihan Ganda Biasa (1 pilihan)**
     - **Pilihan Ganda Kompleks (MCMA - centang > 1)**
     - **Kategori (Tabel Pernyataan Benar / Salah)**
   - Tombol navigasi bawah khas Pusmendik: `SOAL SEBELUMNYA` (navy), `RAGU-RAGU` (kuning centang), dan `SOAL BERIKUTNYA` / `SELESAI`.

2. **Tahan Reload / Refresh Halaman:**
   - Semua jawaban yang dipilih, status ragu-ragu, nomor soal aktif, dan sisa waktu tersimpan otomatis secara *real-time* di `localStorage`.
   - Jika siswa tidak sengaja me-refresh halaman atau browser HP tertutup, ujian akan langsung dipulihkan pada soal dan jawaban terakhir.

3. **Panel Soal (Lompat Soal 1 s.d. 30):**
   - Panel laci (*drawer flyout*) dengan grid 30 tombol nomor soal:
     - 🟦 **Biru Tua**: Sudah dijawab.
     - 🟨 **Kuning**: Ragu-ragu.
     - ⬜ **Putih**: Belum dijawab.
     - 🟡 **Border Emas**: Soal yang sedang aktif.

4. **15 Hari • 2 Sesi / Hari • 30 Soal / Sesi (Total 900 Butir Unik):**
   - Struktur drilling mencakup seluruh 13 submateri dari 2 elemen utama BSKAP/Pusmendik (Kegiatan Produksi, Pemasaran, Distribusi, dan Pengelolaan Usaha).

5. **Akses Bebas Fleksibel & KKM 70%:**
   - **Bebas Pilih Sesi**: Siswa dapat memilih hari apapun (Hari 1 s.d. 15) atau sesi manapun secara langsung tanpa harus menyelesaikan sesi sebelumnya terlebih dahulu.
   - Dilengkapi tombol navigasi **📂 Buka Semua Hari / 📁 Tutup Semua Hari** untuk memudahkan eksplorasi.
   - Nilai dihitung otomatis dalam skala 0 - 100 dengan standar KKM 70%.
   - **Jika Nilai < 70%**: Nilai ditandai remedial (opsional), siswa dapat mengulang sesi atau melanjutkan belajar ke sesi lain.
   - **Jika Nilai >= 70%**: Sesi dinyatakan tuntas (bintang 1–3) dan siswa berhak mencetak sertifikat kelulusan sesi.

6. **Sertifikat Kelulusan Digital (Bisa Dicetak / PDF):**
   - Siswa yang lulus KKM berhak membuka dan mencetak Sertifikat Kelulusan resmi lengkap dengan nama, NISN, skor, nomor registrasi unik, dan cap stempel kelulusan.

7. **Kunci Jawaban & Pembahasan Lengkap Pasca Submit:**
   - Menampilkan perbandingan jawaban siswa vs kunci resmi.
   - Pembahasan konsep mendalam dan mudah dipahami anak SMK.
   - Dilengkapi *"Tips Cepat"* (trik mengingat konsep bisnis & kewirausahaan).
   - Filter interaktif: *Semua Soal*, *Belum Tepat / Kosong*, dan *Jawaban Benar*.

8. **Penyimpanan Lokal (100% Mobile Friendly & Bebas Kuota Server):**
   - Tidak memerlukan database server atau login rumit.
   - Seluruh data siswa dan riwayat kelulusan tersimpan aman di memori perangkat masing-masing (`localStorage`).
   - Dilengkapi tombol **"Salin Rekap Nilai untuk Dikirim ke Guru via WhatsApp"**.

---

## 📋 Cakupan Elemen & Matriks Asesmen Pusmendik (13 Submateri)

### Elemen A: Kegiatan Produksi, Pemasaran, dan Distribusi
1. **Pengembangan Desain Produk:** Analisis desain produk dan prosedur pengembangannya.
2. **Pengembangan Desain Kemasan & Label:** Evaluasi desain kemasan, estetika, dan ketentuan label wajib (komposisi, tanggal kedaluwarsa, izin edar P-IRT / BPOM).
3. **Pengembangan Prototipe Produk:** Tahapan mockup, working prototype, dan pengujian kelayakan.
4. **Perencanaan & Biaya Produksi:** Perhitungan Biaya Tetap (FC), Biaya Variabel (VC), Biaya Total, HPP, dan margin harga jual.
5. **Proses Produksi:** Metode dan alur proses produksi massal, routing lembar kerja, dan SOP.
6. **Pengemasan Produk:** Kemasan primer, sekunder, tersier, dan kemasan ramah lingkungan.
7. **Pengendalian Mutu Produk (QC):** Standarisasi, titik kendali kritis (CCP), dan inspeksi mutu.
8. **Pemasaran Produk:** Bauran pemasaran 4P/7P, strategi STP, dan digital marketing (SEO, sosmed, live shopping).
9. **Distribusi Produk:** Saluran langsung, tidak langsung, dan manajemen rantai pasok.

### Elemen B: Pengelolaan Usaha
10. **Analisis Peluang Usaha:** Riset pasar, validasi peluang, dan analisis SWOT (Strengths, Weaknesses, Opportunities, Threats).
11. **Proposal Usaha:** Struktur proposal (profil, rencana operasional, rencana pemasaran, dan rencana keuangan).
12. **Pelaporan Keuangan:** Analisis Titik Impas (Break-Even Point / BEP Unit & Rupiah), Laporan Laba Rugi, Arus Kas (Cash Flow), dan Neraca sederhana.
13. **Hak atas Kekayaan Intelektual (HaKI):** Paten, Merek Dagang, Hak Cipta, Rahasia Dagang, Desain Industri, dan penyelesaian sengketa hukum.

---

## 🚀 Cara Mengunggah ke GitHub Pages (Gratis & Cepat)

1. Buka [GitHub](https://github.com/) dan buat repository baru (misal: `tka-kwu`).
2. Di folder komputer Anda, jalankan perintah git:
   ```bash
   git init
   git add .
   git commit -m "Inisialisasi Aplikasi Drilling TKA PKK / KWU"
   git branch -M main
   git remote add origin https://github.com/USERNAME-ANDA/NAMA-REPO.git
   git push -u origin main
   ```
3. Buka repository Anda di GitHub:
   - Klik tab **Settings** ➔ pilih menu **Pages** di sebelah kiri.
   - Pada bagian **Build and deployment** > **Branch**, pilih `main` dan folder `/(root)`.
   - Klik tombol **Save**.
4. Dalam 1-2 menit, website Anda sudah aktif di:
   `https://USERNAME-ANDA.github.io/NAMA-REPO/`
5. Bagikan tautan tersebut kepada seluruh siswa Anda!

---

## 💻 Cara Menjalankan di Komputer Lokal

Jika ingin mencoba secara lokal:
- Buka PowerShell di folder ini, lalu jalankan:
  ```powershell
  python -m http.server 8080
  ```
- Buka browser dan akses: `http://localhost:8080`

---
*Pengembang: PM_Dev (prihmardoyo_developer) • SMK Negeri 1 Giritontro 2026*
