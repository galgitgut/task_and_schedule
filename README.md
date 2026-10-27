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