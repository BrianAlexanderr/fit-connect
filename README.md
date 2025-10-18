# Fit&Connect

Aplikasi mobile untuk menghubungkan pegiat kebugaran, menemukan acara, komunitas, dan sesi latihan. Dibangun dengan React Native dan Expo.

---

## Fitur Utama

* **Pencarian Acara**: Menemukan dan melihat detail acara kebugaran yang akan datang.
* **Komunitas**: Bergabung dan berinteraksi dalam grup komunitas kebugaran.
* **Sesi Latihan**: Mencari dan memesan sesi latihan yang tersedia.
* **Autentikasi Pengguna**: Pendaftaran dan login pengguna menggunakan Firebase Auth.
* **Manajemen Profil Pengguna**: (Fitur potensial, berdasarkan adanya `ProfileScreen`).
* **Navigasi**: Antarmuka berbasis tab untuk navigasi yang mudah antar fitur utama.

---

## Teknologi yang Digunakan

* **Framework**: React Native, Expo
* **Bahasa**: TypeScript
* **Navigasi**: Expo Router, React Navigation (kemungkinan digunakan secara internal oleh Expo Router)
* **Autentikasi**: Firebase Authentication
* **Manajemen State**: React Context API
* **Networking**: Axios
* **Styling**: StyleSheet bawaan React Native
* **Komponen UI**: React Native core components, React Native Calendars, FontAwesome5, Ionicons

---

## Prasyarat Instalasi

Sebelum memulai, pastikan Anda telah menginstal perangkat lunak berikut:

* Node.js (versi LTS direkomendasikan)
* npm atau Yarn
* Expo CLI (`npm install -g expo-cli`)
* Git
* (Opsional) Watchman (untuk pengguna macOS)
* (Opsional) Android Studio atau Xcode untuk menjalankan di emulator/simulator

---

## Susunan Proyek
fit-connect/ 
├── app/ # Direktori utama untuk screen, komponen, layout, dan style (menggunakan Expo Router) 
│ ├── components/ # Komponen UI yang dapat digunakan kembali 
│ ├── layout/ # Komponen layout utama 
│ ├── screens/ # Screen/halaman aplikasi
│ └── styles/ # File tema atau style global 
├── assets/ # File statis seperti gambar dan font 
│ └── images/ 
├── src/ # Kode sumber non-UI (API, hooks, context, utils) 
│ ├── api/ # Fungsi untuk berinteraksi dengan backend API 
│ ├── context/ # React Context untuk manajemen state global 
│ ├── hooks/ # Custom React Hooks 
│ └── utils/ # Fungsi utilitas (validasi, konversi data, dll.) 
├── .env # (Perlu dibuat) File untuk menyimpan environment variable (API Keys, dll.) 
├── app.json # Konfigurasi Expo 
├── eas.json # Konfigurasi EAS Build 
├── package.json # Dependensi dan skrip proyek 
├── tsconfig.json # Konfigurasi TypeScript 
└── firebaseConfig.js # Konfigurasi Firebase

---

## Contoh Penggunaan / Memulai

1.  **Clone repository:**
    ```bash
    git clone <URL_REPOSITORY_ANDA>
    cd fit-connect
    ```

2.  **Install dependensi:**
    ```bash
    npm install
    # atau
    yarn install
    ```

3.  **Konfigurasi Environment Variables:**
    * Buat file `.env` di root proyek.
    * Tambahkan variabel yang diperlukan berdasarkan `firebaseConfig.js` dan `src/api/APIClient.tsx`:
        ```dotenv
        EXPO_PUBLIC_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
        EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
        EXPO_PUBLIC_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
        EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
        EXPO_PUBLIC_FIREBASE_MSG_SND_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
        EXPO_PUBLIC_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
        EXPO_PUBLIC_BASE_URL=YOUR_BACKEND_API_BASE_URL
        ```
    * Ganti `YOUR_*` dengan kredensial dan URL API Anda yang sebenarnya.

4.  **Jalankan aplikasi:**
    ```bash
    npx expo start
    ```
    * Ini akan memulai Metro bundler. Anda kemudian dapat menjalankan aplikasi di:
        * **Emulator Android**: Tekan `a` di terminal.
        * **Simulator iOS**: Tekan `i` di terminal.
        * **Perangkat fisik**: Pindai QR code menggunakan aplikasi Expo Go (Android) atau aplikasi Kamera (iOS).

---

## Kontribusi

Kontribusi sangat kami harapkan! Jika Anda ingin berkontribusi, silakan fork repository ini dan buat pull request. Pastikan untuk mengikuti pedoman kontribusi (jika ada) dan menulis kode yang bersih dan terdokumentasi.

1.  Fork repository.
2.  Buat branch fitur baru (`git checkout -b fitur/NamaFitur`).
3.  Commit perubahan Anda (`git commit -m 'Menambahkan fitur X'`).
4.  Push ke branch (`git push origin fitur/NamaFitur`).
5.  Buka Pull Request.

---

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT. Lihat file `LICENSE` untuk detail lebih lanjut (Anda perlu menambahkan file LICENSE).

```text
MIT License

Copyright (c) [Tahun] [Nama Pemilik Hak Cipta]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
