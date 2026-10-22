# Teori Grup — Bacaan Interaktif

Pendamping web ringkas Bab 0–13 dari **Bacaan Struktur Aljabar I: Grup**,
Tri Utomo. Draf web 0.2, 22 Oktober 2026.

Web ini mempunyai 14 bahasan, enam laboratorium, latihan dengan umpan balik,
dan catatan refleksi yang tersimpan di browser. Ia tidak menggantikan
uraian lengkap dan seluruh latihan pada PDF.

Tidak ada dependensi build atau layanan akun. Sajikan folder ini sebagai
berkas statis. Pertahankan jalur PDF pada folder induk saat memindahkan web.

MathJax 4.1.3 dan STIX Two disajikan lokal dari `vendor/`, dengan lisensi
pihak ketiga tetap disertakan. `mathjax-config.js` menyelesaikan jalur aset
relatif terhadap script sehingga bekerja di subdirektori GitHub Pages.

Notasi bacaan ditulis eksplisit dengan delimiter LaTeX pada `lessons.js`.
`notation.js` mengubah sumber tersebut menjadi wadah `data-tex` dan
merendernya melalui MathJax. Keluaran dinamis pada `labs.js` memakai sumber
LaTeX langsung. Antrian rendering mengabaikan elemen yang sudah dilepas
ketika bab atau parameter berubah. Catatan pengguna tidak ditafsirkan
sebagai LaTeX. Pilihan native select, angka tabel, dan label diagram SVG
tetap native.

Kernel dan citra hanya ditampilkan setelah syarat keterdefinisian peta
kelas residu dipenuhi. Konvensi D4 mengikuti buku: r=(1234), s=(24),
komposisi dari kanan ke kiri. Hasil perhitungan contoh tidak menggantikan
bukti matematis umum.
