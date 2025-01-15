# Skrip Otomatisasi Isi Kuisioner UNPAD  
  
## Deskripsi  
Skrip ini dirancang untuk otomatisasi proses pengisian kuisioner di sistem akademik PAUS UNPAD. Skrip ini akan secara otomatis mengisi textarea dengan teks tertentu, memilih opsi radio, dan menyelesaikan proses pengisian kuisioner dengan mengklik tombol "Simpan" dan "OK" pada pop-up yang muncul.  
  
## Persyaratan  
1. **Login PAUS UNPAD:** Pastikan Anda sudah login ke sistem PAUS UNPAD.  
2. **Navigasi ke Kuisioner:** Masuk ke menu Akademik > Capaian Studi > Kemajuan Studi.  
3. **Tombol Isi Kuisioner:** Pastikan tombol "Isi Kuisioner" masih tersedia.  
  
## Cara Menggunakan  
1. **Buka DevTools:**  
   - Tekan `Ctrl + Shift + I` (Windows/Linux) atau `Cmd + Option + I` (Mac) untuk membuka DevTools.  
   - Pergi ke tab "Console".  
  
2. **Copy Skrip:**  
   - Salin skrip dari [kuis.js](https://github.com/euniversee/kuisionerv2unpad/blob/main/kuis.js).  
  
3. **Paste dan Jalankan Skrip:**  
   - Paste skrip yang telah disalin ke dalam console.  
   - Tekan `Enter` untuk menjalankan skrip.  
  
4. **Menahanan Skrip:**  
   - Jika ingin menghentikan skrip, refresh halaman dengan menekan `F5` atau menggunakan tombol refresh di browser.  
  
## Konfigurasi  
- **Penilaian 1-5:**  
  - Jika ingin mengubah penilaian dari kolom 5 menjadi kolom 1, ubah `n+4` menjadi `n` pada baris berikut:  
    ```
javascript

const radioButtons = document.querySelectorAll('tbody tr td:nth-child(n+4) input[type="radio"]');


  - Contoh untuk kolom 1:  
    ```
javascript

const radioButtons = document.querySelectorAll('tbody tr td:nth-child(n) input[type="radio"]');


  
- **Isi Teks:**  
  - Jika ingin mengubah isi teks di textarea, ubah string di variabel `textToType`:  
    ```
javascript

const textToType = "Sudah bagus";


  - Contoh untuk mengubah isi teks menjadi "Tidak Sesuai":  
    ```
javascript

const textToType = "Tidak Sesuai";
