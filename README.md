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
