# 🛍️ Website Toko Online - Produk Unggulan Smartwatch

Website ini merupakan proyek toko online sederhana dengan fitur lengkap seperti keranjang belanja, checkout dengan metode pembayaran, dan sistem review pelanggan.  
Dibuat oleh **Dianda Naufal Rahmanda (2025)**.

---

## 📖 Fitur Utama

### 🧩 1. Halaman Utama (`index.html`)
Menampilkan deskripsi singkat tentang toko dan daftar produk unggulan dengan tampilan menarik dan responsif.

### 🛒 2. Halaman Produk (`produk.html`)
- Menampilkan daftar produk smartwatch dalam bentuk kartu.  
- Terdapat opsi **filter harga (Belum Disortir, Termurah, Termahal)**.  
- Tombol **“Tambah ke Keranjang”** untuk menyimpan produk ke Local Storage.  
- Desain responsif agar nyaman di perangkat mobile maupun desktop.

### 💳 3. Halaman Checkout (`checkout.html`)
- Menampilkan daftar produk yang telah dimasukkan ke keranjang.  
- Menghitung total harga secara otomatis.  
- Menyediakan pilihan **metode pembayaran (QRIS / Transfer Bank)**.  
- Setelah checkout, keranjang dikosongkan secara otomatis.  
- Simulasi pembayaran dilakukan secara lokal tanpa server-side.

### ⭐ 4. Halaman Review (`review.html`)
- Pengguna yang telah membeli dapat memberikan **rating (1–5 bintang)**.  
- Dapat menulis **komentar** serta mengunggah **foto profil**.  
- Review akan muncul di halaman dengan nama dan produk yang dibeli.  
- Data tersimpan di Local Storage agar tetap tampil setelah reload.

### 💬 5. Live Chat / WhatsApp Button
- Terdapat tombol chat langsung menuju WhatsApp admin toko.  
- Bisa digunakan pelanggan untuk konsultasi produk atau konfirmasi pembayaran.

---

## ⚙️ Teknologi yang Digunakan

| Komponen | Teknologi |
|-----------|------------|
| Struktur & Konten | HTML5 |
| Desain & Tampilan | CSS3 (Tailwind + style.css) |
| Interaktivitas | JavaScript (Vanilla) |
| Backend Sederhana | PHP (untuk halaman kontak) |
| Penyimpanan Data Lokal | Local Storage |
| Ikon & Visual | Font Awesome / Lucide Icons |

---

## 📂 Struktur Folder
Toko_Online/
│
├── index.html # Halaman utama
├── fitur.html # Halaman fitur produk & sorting harga
├── produk.html # Daftar produk
├── checkout.html # Proses pembayaran
├── review.html # Sistem ulasan & rating
├── kontak.php # Formulir kontak sederhana
│
├── script.js # Logika interaktif (keranjang, checkout, review)
├── style.css # Styling dan layout utama
│
└── /images # Folder berisi gambar produk dan profil
├── produk1.png
├── produk2.png
├── profil1.jpg
└── profil2.jpg

MIT License

Copyright (c) 2025 Dianda Naufal Rahmanda

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell  
copies of the Software, and to permit persons to whom the Software is  
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included  
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR  
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL  
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER  
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING  
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER  
DEALINGS IN THE SOFTWARE.
