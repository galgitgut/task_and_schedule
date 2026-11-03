# Jadwal Malika Kean🐾

Aplikasi jadwal harian + poin + hadiah untuk anak SD. Tema hewan lucu.
- **Untuk:** 1 keluarga (2 ortu + beberapa anak), HP masing-masing
- **Backend:** Firebase Firestore + Anonymous Auth
- **Offline:** Ya (cache otomatis), sync saat online
- **Hosting:** GitHub Pages (gratis)

## File yang dibutuhkan
- `index.html` — aplikasi lengkap
- `firestore.rules` — aturan keamanan Firestore
- `README.md` — dokumen ini

## Setup Firebase (sekali saja)

1. **Buat project:** https://console.firebase.google.com → Add project → disable Analytics → Create.
2. **Daftarkan Web App:** klik ikon `</>` di overview → nickname bebas → **jangan** aktifkan Hosting → Register app → **salin `firebaseConfig`**.
3. **Aktifkan Anonymous Auth:** Build → Authentication → Get started → Sign-in method → Anonymous → Enable → Save.
4. **Aktifkan Firestore:** Build → Firestore Database → Create database → **Location: asia-southeast2 (Jakarta)** → **Production mode** → Create. (Lokasi permanen, tidak bisa diubah.)
5. **Pasang Rules:** Firestore → tab Rules → hapus semua → paste isi `firestore.rules` → **Publish**.

## Isi `firebaseConfig` ke `index.html`

Cari di bagian atas `<script type="module">`:

```js
const firebaseConfig = {
  apiKey: "GANTI",
  authDomain: "GANTI.firebaseapp.com",
  projectId: "GANTI",
  storageBucket: "GANTI.appspot.com",
  messagingSenderId: "GANTI",
  appId: "GANTI"
};
## Pembaruan v2.1 (Nov 2026)
- **Poin manual:** tab Anak → tombol **±** → Bonus atau Kurangi poin, dengan alasan yang terlihat oleh anak. Poin tidak bisa dikurangi sampai di bawah 0.
- **Tugas berulang:** saat menambah atau mengedit tugas, isi "Boleh dikerjakan berapa kali sehari" (1–10). Tugas lama tetap 1 kali.
- **Mode gelap:** tombol 🌙/☀️ di pojok atas, atau tab Lain → Tampilan (Terang / Gelap / Ikuti HP). Disimpan per HP.
- **Rekap mingguan:** tab 📊 Rekap untuk orang tua (bisa mundur ke minggu sebelumnya). Anak bisa melihat ringkasan minggu ini di tab Poin.
- Firestore Rules tidak perlu diubah.

## Pembaruan v2.2 (Nov 2026)
- **Refresh tidak lagi kembali ke halaman awal:** app melanjutkan ke halaman dan tab terakhir (orang tua atau anak).
- **Kembali ke halaman awal otomatis** bila app tidak disentuh selama 5 menit (baik saat terbuka maupun ditinggal). Lamanya bisa diubah di `IDLE_MS` dalam `index.html`.
- **Tombol kembali (back) HP:** menutup jendela yang sedang terbuka, atau kembali ke layar sebelumnya. Di layar utama muncul "Yakin mau keluar?"; tekan kembali sekali lagi untuk benar-benar keluar.

## Pembaruan v2.3
- Harga hadiah bisa sampai 6 digit (maks 999.999 poin), dan angka besar ditampilkan dengan titik ribuan (250.000).

## Pembaruan v2.4 (Nov 2026)
- **Hari Ini lebih hidup:** jadwal tampil sebagai kartu. Kegiatan yang sedang berlangsung disorot ("Sekarang"), yang sudah lewat dibuat redup, dan ada hitung mundur ke kegiatan berikutnya ("25 menit lagi: Mengaji"). Tampilan diperbarui otomatis tiap 30 detik.
- **Tugas di jadwal:** saat menambah atau mengedit tugas, isi "Jam muncul di Hari Ini" (opsional). Tugas tampil di jadwal Hari Ini pada jam tersebut dengan tombol **Selesai**. Tugas tanpa jam tampil di bagian "Tugas Hari Ini".
- **Setujui Semua:** di tab Setujui, satu tombol menyetujui semua tugas yang menunggu (muncul jika ada 2 atau lebih).
- **Streak 🔥 dan 14 lencana hewan 🏅:** streak bertambah setiap hari yang punya minimal 1 tugas disetujui. Lencana terbuka berdasarkan jumlah tugas, streak terpanjang, total poin, tukar hadiah pertama, dan misi keluarga. Ada di tab Poin, dan anak mendapat notifikasi saat membuka lencana baru.
- **Target tabungan 🎯:** anak memilih hadiah impian di tab Hadiah ("Jadikan target"), lalu muncul progress bar beserta perkiraan hari. Orang tua juga bisa memasangnya lewat tab Anak → ✎.
- **Misi keluarga 🤝:** tab Hadiah (orang tua) → Buat Misi. Isinya target poin bersama untuk semua anak. Semua poin tugas dan bonus sejak misi dimulai ikut dihitung, **tanpa mengurangi saldo**. Setelah tercapai, orang tua menekan "Tandai Selesai".
- Data baru disimpan sebagai field di dokumen yang sudah ada: `tasks.time`, `children.goalRewardId`, `families.mission`, dan `families.missionHistory`. Tidak ada koleksi baru.
- **Catatan Rules:** jika Firestore Rules melarang HP anak mengubah dokumen `children`, anak tidak bisa memilih target sendiri. App akan menampilkan pesan agar orang tua yang memasangnya.

## Ikon aplikasi
- `favicon.svg`, `favicon-32.png` (tab browser), `apple-touch-icon.png` (ikon saat "Tambahkan ke Layar Utama"), `icon-192.png` & `icon-512.png` (cadangan untuk PWA). Semua file ikon harus ada di folder yang sama dengan `index.html`.
