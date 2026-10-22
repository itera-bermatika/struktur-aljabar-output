/* Notasi ditulis sebagai LaTeX eksplisit; catatan pengguna tidak diproses. */
window.GROUP_LESSONS=[
  {
    "id": 0,
    "title": "Mengapa struktur aljabar?",
    "part": "Melihat pola",
    "time": 8,
    "lead": "Objeknya boleh berbeda. Aturan interaksinya bisa mempunyai pola yang sama.",
    "goals": [
      "Membedakan hasil perhitungan dan sifat operasi",
      "Mengenali peran contoh, dugaan, dan bukti"
    ],
    "sections": [
      [
        "Dari hasil menuju aturan",
        "Mengetahui \\(2 + 3 = 5\\) adalah satu perhitungan. Mengetahui bahwa penjumlahan bilangan bulat bersifat asosiatif adalah pernyataan tentang semua pilihan tiga bilangan bulat. Struktur aljabar mengajak kita memperhatikan aturan seperti ini, bukan hanya hasil pada beberapa input."
      ],
      [
        "Bentuk berbeda, peran serupa",
        "Pada penjumlahan, \\(0\\) tidak mengubah bilangan. Pada perkalian matriks, matriks identitas tidak mengubah matriks lain. Pada komposisi fungsi, fungsi identitas memainkan peran serupa. Abstraksi menghubungkan peran-peran itu tanpa menyatakan objeknya sama."
      ],
      [
        "Contoh mengarahkan, bukti menjamin",
        "Beberapa contoh dapat mendukung dugaan universal, tetapi belum membuktikannya. Satu contoh tandingan yang sah cukup untuk membantah klaim universal. Pemeriksaan lengkap seluruh kasus dalam himpunan hingga dapat menjadi bukti untuk himpunan tersebut."
      ],
      [
        "Jalur baca",
        "Bab \\(1\\) menyediakan bahasa himpunan, pemetaan, dan operasi. Definisi formal grup muncul pada Bab \\(2\\). Kita kemudian bergerak menuju subgrup, koset, homomorfisme, kuosien, dan isomorfisme. Coba laboratorium, jelaskan pola, lalu bandingkan dengan alasan matematis."
      ]
    ],
    "example": "Peta \\(f: \\mathbb{Z} \\to  2\\mathbb{Z}, f(n) = 2n\\), mempertahankan penjumlahan dan bijektif. Dengan rumus sama tetapi kodomain \\(\\mathbb{Z}\\), peta itu tidak surjektif. Kodomain ikut menentukan sifat pemetaan.",
    "pitfall": "Objek yang memiliki sifat mirip belum tentu isomorfik. Kesimpulan isomorfisme memerlukan peta bijektif yang mempertahankan operasi.",
    "lab": "operation",
    "prompt": "Ubah penjumlahan menjadi perkalian semua kelas residu. Apakah setiap elemen masih mempunyai invers?",
    "quiz": {
      "q": "Lima contoh memenuhi suatu klaim universal. Apa yang dapat disimpulkan?",
      "choices": [
        "Klaim itu pasti terbukti",
        "Dugaan mendapat dukungan, tetapi belum terbukti",
        "Klaim itu pasti salah"
      ],
      "answer": 1,
      "why": "Pemeriksaan sebagian kasus tidak mencakup seluruh objek yang dimaksud. Bukti harus menjangkau semua kasus dalam hipotesis."
    }
  },
  {
    "id": 1,
    "title": "Himpunan, pemetaan, dan operasi",
    "part": "Bahasa dasar",
    "time": 10,
    "lead": "Sebelum memeriksa aturan, tentukan dahulu objek dan arah pemetaannya.",
    "goals": [
      "Membedakan domain, kodomain, dan citra",
      "Menjelaskan operasi biner dan arah komposisi"
    ],
    "sections": [
      [
        "Operasi adalah pemetaan",
        "Operasi biner pada himpunan \\(A\\) adalah pemetaan \\(A \\times  A \\to  A\\). Setiap pasangan terurut harus memperoleh tepat satu hasil dalam \\(A\\). Ketertertutupan menjadi bagian dari syarat tersebut; pembagian bukan operasi biner pada \\(\\mathbb{Z}\\) karena hasilnya tidak selalu bilangan bulat dan pembagian oleh nol tidak terdefinisi."
      ],
      [
        "Domain, kodomain, citra",
        "Untuk \\(f: A \\to  B, A\\) adalah domain dan \\(B\\) kodomain. Citra \\(f\\) adalah semua nilai \\(f(a)\\) yang benar-benar tercapai. Injektif berarti input berbeda mempunyai output berbeda; surjektif berarti seluruh kodomain tercapai. Peta bijektif memenuhi keduanya."
      ],
      [
        "Komposisi dari kanan",
        "Dalam \\((f \\circ  g)(x) = f(g(x)), g\\) dijalankan terlebih dahulu. Kita memakai arah yang sama ketika mengalikan permutasi. Komposisi juga memerlukan kecocokan domain dan kodomain."
      ],
      [
        "Mengelompokkan dengan relasi",
        "Relasi ekuivalensi bersifat refleksif, simetris, dan transitif. Kelas-kelasnya membentuk partisi: setiap elemen berada di tepat satu kelas. Gagasan ini akan muncul kembali ketika koset mengelompokkan elemen grup."
      ]
    ],
    "example": "Pada \\(\\mathbb{Z}_{6}\\), aturan \\([a] + [b] = [a + b]\\) memberi operasi biner. Mengganti wakil \\(1\\) dengan \\(7\\) tidak mengubah kelas hasil karena selisihnya kelipatan \\(6\\).",
    "pitfall": "Citra bukan sinonim kodomain. Output yang tidak tercapai tetap boleh menjadi anggota kodomain.",
    "lab": "hom",
    "prompt": "Bandingkan daftar output dengan semua anggota kodomain. Uji kapan aturan pada kelas residu benar-benar sah.",
    "quiz": {
      "q": "Surjektivitas \\(f: A \\to  B\\) berarti…",
      "choices": [
        "Setiap anggota \\(B\\) mempunyai sedikitnya satu prapeta",
        "Setiap anggota \\(A\\) mempunyai dua output",
        "Semua anggota \\(A\\) dipetakan ke satu nilai"
      ],
      "answer": 0,
      "why": "Surjektivitas berbicara tentang seluruh kodomain \\(B\\). Setiap \\(b \\in  B\\) harus sama dengan \\(f(a)\\) untuk suatu \\(a \\in  A\\)."
    }
  },
  {
    "id": 2,
    "title": "Grup",
    "part": "Bahasa dasar",
    "time": 12,
    "lead": "Satu operasi. Tiga aksioma di atas operasi biner: asosiatif, identitas, dan invers.",
    "goals": [
      "Memeriksa aksioma grup dengan asumsi jelas",
      "Membedakan grup dan grup abelian"
    ],
    "sections": [
      [
        "Definisi yang mengikat contoh",
        "Grup adalah himpunan tak kosong \\(G\\) dengan operasi biner yang asosiatif, mempunyai identitas dua sisi \\(e\\), dan setiap \\(a\\) mempunyai invers dua sisi \\(a^{-1}\\). Komutativitas tidak disyaratkan. Jika \\(ab = ba\\) untuk semua \\(a\\) dan \\(b\\), grup disebut abelian."
      ],
      [
        "Identitas dan invers itu unik",
        "Jika \\(e\\) dan \\(f\\) sama-sama identitas, maka \\(e = ef = f\\). Jika \\(b\\) dan \\(c\\) sama-sama invers \\(a\\), maka \\(b = b(ac) = (ba)c = c\\). Asosiativitas memungkinkan kita memindah pengelompokan; kita tidak menukar urutan faktor."
      ],
      [
        "Pembatalan mempunyai alasan",
        "Dari \\(ab = ac\\), kalikan kedua sisi di kiri dengan \\(a^{-1}\\) untuk memperoleh \\(b = c\\). Dari \\(ba = ca\\), kalikan di kanan. Argumen ini memerlukan invers dan asosiativitas; jangan menerapkan pembatalan begitu saja pada struktur yang belum terbukti grup."
      ],
      [
        "Contoh dan noncontoh",
        "\\(\\mathbb{Z}\\) dengan penjumlahan adalah grup abelian. \\(\\mathbb{Z}\\) dengan perkalian bukan grup: \\(0\\) tidak memiliki invers perkalian, dan kebanyakan bilangan bulat lain juga tidak. Semua matriks real invertibel berukuran tetap membentuk grup dengan perkalian, yang umumnya tidak abelian."
      ]
    ],
    "example": "Di \\(\\mathbb{Z}_{6}\\) dengan penjumlahan, identitasnya \\(0\\). Invers \\(2\\) adalah \\(4\\) karena \\(2 + 4 \\equiv  0 (\\mod  6)\\). Notasi invers aditif adalah \\(-2\\); ini bukan kebalikan pecahan \\(\\frac{1}{2}\\).",
    "pitfall": "Adanya identitas dan invers saja belum cukup jika asosiativitas belum diketahui. Aturan juga harus merupakan operasi biner pada himpunan yang dipilih.",
    "lab": "operation",
    "prompt": "Cari identitas dan invers pada tiga jenis operasi. Bedakan semua kelas residu dengan himpunan unit.",
    "quiz": {
      "q": "Sifat mana yang bukan syarat wajib setiap grup?",
      "choices": [
        "Asosiatif",
        "Setiap elemen mempunyai invers",
        "Komutatif"
      ],
      "answer": 2,
      "why": "Grup yang juga komutatif disebut abelian. Permutasi dan matriks invertibel menyediakan contoh grup nonabelian."
    }
  },
  {
    "id": 3,
    "title": "Subgrup",
    "part": "Bagian dari struktur",
    "time": 10,
    "lead": "Bagian sebuah grup menjadi subgrup jika aturan grup tetap berlaku di dalamnya.",
    "goals": [
      "Menggunakan kriteria subgrup tak kosong",
      "Menghasilkan subgrup dari satu elemen"
    ],
    "sections": [
      [
        "Subhimpunan dengan operasi yang sama",
        "\\(H \\subseteq  G\\) disebut subgrup jika \\(H\\) sendiri merupakan grup dengan operasi dari \\(G\\). Kita tidak bebas mengganti operasi. Asosiativitas diwarisi dari \\(G\\), tetapi identitas, ketertertutupan, dan invers harus tetap tinggal di \\(H\\)."
      ],
      [
        "Kriteria satu langkah",
        "Untuk subhimpunan tak kosong \\(H\\) dari grup \\(G\\), cukup memeriksa bahwa \\(ab^{-1} \\in  H\\) untuk semua \\(a,b \\in  H\\). Mengambil \\(a = b\\) menghasilkan identitas; memakai identitas memberi invers; gabungan langkah itu memberi ketertertutupan."
      ],
      [
        "Bahasa aditif",
        "Pada grup aditif, kriterianya menjadi \\(a - b \\in  H\\). Contohnya, selisih dua kelipatan \\(3\\) tetap kelipatan \\(3\\), sehingga \\(3\\mathbb{Z}\\) adalah subgrup \\(\\mathbb{Z}\\). Syarat tak kosong tetap diperlukan."
      ],
      [
        "Subgrup yang dibangkitkan",
        "Subgrup \\(\\langle a\\rangle\\) memuat semua pangkat bulat \\(a\\), atau semua kelipatan bulat \\(a\\) dalam notasi aditif. Di \\(\\mathbb{Z}_{n}\\), daftar kelipatan \\(a\\) modulo \\(n\\) akhirnya kembali ke \\(0\\). Bukan hanya kelipatan pertama yang perlu diperhatikan."
      ]
    ],
    "example": "Dalam \\(\\mathbb{Z}_{12}, \\langle 4\\rangle  = \\{0,4,8\\}\\). Penjumlahan dan invers tetap berada di dalamnya. Himpunan \\(\\{0,4\\}\\) bukan subgrup karena \\(4 + 4 = 8\\) tidak termasuk.",
    "pitfall": "Subhimpunan yang memuat identitas belum tentu subgrup. Bahkan jika semua elemennya punya invers di grup induk, invers itu belum tentu ada di subhimpunan.",
    "lab": "coset",
    "prompt": "Ubah generator dan prediksi anggota subgrup sebelum melihat kelas-kelasnya.",
    "quiz": {
      "q": "Untuk \\(H \\subseteq  G\\), kriteria \\(ab^{-1} \\in  H\\) cukup jika…",
      "choices": [
        "\\(H\\) tak kosong",
        "\\(H\\) mempunyai tepat dua anggota",
        "\\(G\\) harus komutatif"
      ],
      "answer": 0,
      "why": "Tak kosong diperlukan untuk memulai argumen dan menghasilkan identitas. Kriteria berlaku juga pada grup nonabelian."
    }
  },
  {
    "id": 4,
    "title": "Grup siklik dan orde",
    "part": "Bagian dari struktur",
    "time": 11,
    "lead": "Mengulangi satu elemen dapat menghasilkan seluruh grup, atau hanya sebagian.",
    "goals": [
      "Membedakan orde grup dan orde elemen",
      "Menghitung orde elemen pada \\(\\mathbb{Z}_{n}\\)"
    ],
    "sections": [
      [
        "Dari satu generator",
        "Grup \\(G\\) siklik jika \\(G = \\langle a\\rangle\\) untuk suatu \\(a\\). Setiap elemen dapat ditulis sebagai pangkat bulat \\(a\\). Grup siklik selalu abelian karena pangkat dari elemen yang sama memenuhi \\(a^{j}a^{k} = a^{j+k}\\). Kebalikannya tidak selalu benar."
      ],
      [
        "Berapa kali sampai identitas?",
        "Orde elemen \\(a\\) adalah bilangan bulat positif terkecil \\(k\\) dengan \\(a^{k} = e\\), bila ada. Jika tidak ada, \\(\\operatorname{ord}(a) = \\infty\\). Dalam notasi aditif, kita mencari \\(k\\) terkecil dengan \\(ka = 0\\). Orde identitas adalah \\(1\\), bukan \\(0\\)."
      ],
      [
        "Rumus pada kelas residu",
        "Dalam \\(\\mathbb{Z}_{n}\\) dengan penjumlahan, \\(\\operatorname{ord}([a]) = \\frac{n}{\\gcd(n,a)}\\). Elemen \\([a]\\) membangkitkan seluruh \\(\\mathbb{Z}_{n}\\) tepat ketika \\(\\gcd (n,a) = 1\\). Perhatikan bahwa ini orde aditif, bukan orde perkalian kelas tersebut."
      ],
      [
        "Hingga dan tak hingga",
        "\\(\\mathbb{Z}\\) dibangkitkan oleh \\(1\\) dan juga \\(-1\\); kedua elemen itu berorde tak hingga. Sebaliknya, grup tak hingga dapat memiliki elemen berorde hingga. Jangan menyamakan ukuran seluruh grup dengan orde setiap elemennya."
      ]
    ],
    "example": "Di \\(\\mathbb{Z}_{12}\\), kelipatan \\(8\\) adalah \\(0,8,4\\), lalu kembali ke \\(0\\). Jadi \\(\\operatorname{ord}([8]) = 3 = \\frac{12}{\\gcd(12,8)}\\). Subgrup yang dibangkitkan \\(8\\) sama dengan yang dibangkitkan \\(4\\).",
    "pitfall": "Tidak semua elemen grup siklik adalah generator. Pada \\(\\mathbb{Z}_{12}\\), elemen \\(1\\) membangkitkan grup, tetapi \\(4\\) hanya membangkitkan tiga elemen.",
    "lab": "coset",
    "prompt": "Bandingkan generator \\(1, 4\\), dan \\(8\\) pada modulus \\(12\\). Jelaskan hubungan banyak anggota dan \\(\\gcd\\).",
    "quiz": {
      "q": "Berapa orde \\([8]\\) pada grup aditif \\(\\mathbb{Z}_{12}\\)?",
      "choices": [
        "\\(8\\)",
        "\\(3\\)",
        "\\(12\\)"
      ],
      "answer": 1,
      "why": "\\(\\frac{12}{\\gcd(12,8)} = 12/4 = 3\\). Tiga kali \\(8\\) adalah \\(24\\), yang sama dengan \\(0\\) modulo \\(12\\)."
    }
  },
  {
    "id": 5,
    "title": "Grup permutasi",
    "part": "Melihat grup bekerja",
    "time": 12,
    "lead": "Susunan ulang menjadi operasi yang dapat dihitung, dibalik, dan dibandingkan.",
    "goals": [
      "Mengomposisikan permutasi dari kanan ke kiri",
      "Mengenali identitas, invers, dan ketidakkomutatifan"
    ],
    "sections": [
      [
        "Permutasi adalah bijeksi",
        "Permutasi suatu himpunan adalah bijeksi dari himpunan itu ke dirinya sendiri. Semua permutasi \\(\\{1,\\ldots ,n\\}\\) membentuk \\(S_{n}\\) dengan komposisi. Identitas tidak memindahkan titik; invers mengembalikan setiap titik ke asal."
      ],
      [
        "Membaca notasi siklus",
        "Siklus \\((123)\\) berarti \\(1 \\mapsto  2, 2 \\mapsto  3, 3 \\mapsto  1\\). Titik yang tidak ditulis tetap. Dalam produk \\(\\sigma \\tau\\), terapkan \\(\\tau\\) lebih dahulu, kemudian \\(\\sigma\\). Urutan penulisan ini harus konsisten sepanjang perhitungan."
      ],
      [
        "Mengapa tidak komutatif?",
        "Untuk \\(\\sigma  = (12)\\) dan \\(\\tau  = (23), \\sigma \\tau  = (123)\\), sedangkan \\(\\tau \\sigma  = (132)\\). Satu pasangan berbeda sudah membuktikan \\(S_{3}\\) nonabelian. Ini bukan berarti setiap pasangan permutasi selalu gagal komutatif."
      ],
      [
        "Siklus lepas dan orde",
        "Siklus-siklus lepas bekerja pada titik berbeda sehingga saling komutatif. Orde produk siklus lepas adalah KPK panjang siklusnya. Identitas mempunyai orde \\(1\\). Siklus satu titik biasanya tidak ditulis."
      ]
    ],
    "example": "\\(\\sigma  = (12)\\) menukar \\(1\\) dan \\(2\\), sedangkan \\(\\tau  = (23)\\) menukar \\(2\\) dan \\(3\\). Untuk menghitung \\(\\sigma \\tau (1)\\), ikuti \\(1\\) —\\(\\tau \\to  1\\) —\\(\\sigma \\to  2\\). Lakukan langkah yang sama untuk setiap titik.",
    "pitfall": "Notasi \\(\\sigma \\tau\\) tidak berarti mengerjakan \\(\\sigma\\) dahulu. Jangan menganggap kedua faktor dapat ditukar hanya karena masing-masing bijektif.",
    "lab": "permutation",
    "prompt": "Bandingkan \\(\\sigma \\tau\\) dan \\(\\tau \\sigma\\). Gunakan jejak satu titik untuk menjelaskan perbedaannya.",
    "quiz": {
      "q": "Dalam \\(\\sigma \\tau\\), permutasi yang dijalankan pertama adalah…",
      "choices": [
        "\\(\\sigma\\)",
        "\\(\\tau\\)",
        "Boleh mana saja"
      ],
      "answer": 1,
      "why": "Buku dan web ini memakai \\(\\sigma \\tau  = \\sigma  \\circ  \\tau\\). Faktor kanan bekerja lebih dahulu."
    }
  },
  {
    "id": 6,
    "title": "Simetri dan grup dihedral",
    "part": "Melihat grup bekerja",
    "time": 12,
    "lead": "Rotasi dan refleksi persegi memberi delapan transformasi dengan aturan yang terukur.",
    "goals": [
      "Menghubungkan simetri bidang dengan permutasi titik sudut",
      "Menggunakan konvensi \\(|D_{n}| = 2n\\)"
    ],
    "sections": [
      [
        "Transformasi yang mempertahankan bangun",
        "Simetri bidang adalah isometri bidang yang membawa bangun ke dirinya sendiri. Komposisi dan invers mempertahankan sifat itu. Untuk poligon beraturan, simetri ditentukan oleh perpindahan titik sudut sehingga dapat direpresentasikan sebagai permutasi."
      ],
      [
        "Konvensi dihedral",
        "\\(D_{n}\\) menyatakan grup simetri poligon beraturan \\(n\\) sisi, \\(n \\ge  3\\), dengan \\(2n\\) elemen. Jika \\(r\\) adalah rotasi dasar dan \\(s\\) refleksi, setiap elemen berbentuk \\(r^{k}\\) atau \\(sr^{k}\\) untuk \\(0 \\le  k \\lt  n\\)."
      ],
      [
        "Hubungan yang menentukan hitungan",
        "Kita mempunyai \\(r^{n} = e, s^{2} = e\\), dan \\(srs = r^{-1}\\). Hubungan terakhir menjelaskan mengapa urutan rotasi dan refleksi penting. Membalik orientasi mengubah arah rotasi."
      ],
      [
        "Persegi yang kita gunakan",
        "Label \\(1\\) berada di kanan, \\(2\\) di atas, \\(3\\) di kiri, dan \\(4\\) di bawah. Rotasi berlawanan arah jarum jam \\(r = (1234)\\), dan refleksi horizontal \\(s = (24)\\). Produk \\(sr\\) berarti rotasi \\(r\\) lalu refleksi \\(s\\)."
      ]
    ],
    "example": "\\(D_{4}\\) mempunyai empat rotasi dan empat refleksi. \\(r\\) berorde \\(4\\); \\(r^{2}\\) berorde \\(2\\); semua refleksi berorde \\(2\\). Jadi orde grup \\(8\\) tidak berarti setiap elemennya berorde \\(8\\).",
    "pitfall": "Sebagian buku memakai \\(D_{2n}\\) untuk grup berorde \\(2n\\). Bandingkan konvensinya sebelum memakai rumus dari sumber lain.",
    "lab": "dihedral",
    "prompt": "Pilih \\(r, s, sr\\), dan \\(rs\\). Lacak posisi setiap label dan bandingkan urutannya.",
    "quiz": {
      "q": "Dengan konvensi buku ini, banyak elemen \\(D_{5}\\) adalah…",
      "choices": [
        "\\(5\\)",
        "\\(10\\)",
        "\\(25\\)"
      ],
      "answer": 1,
      "why": "\\(D_{n}\\) memiliki \\(n\\) rotasi dan \\(n\\) refleksi, sehingga \\(|D_{5}| = 2 \\times  5 = 10\\)."
    }
  },
  {
    "id": 7,
    "title": "Koset dan partisi grup",
    "part": "Mengelompokkan elemen",
    "time": 12,
    "lead": "Subgrup mengelompokkan seluruh grup ke bagian-bagian sama besar.",
    "goals": [
      "Membentuk koset dan menghitung indeks",
      "Membedakan himpunan koset dan grup kuosien"
    ],
    "sections": [
      [
        "Menggeser sebuah subgrup",
        "Jika \\(H \\le  G\\), koset kiri \\(aH = \\{ah : h \\in  H\\}\\). Dalam notasi aditif, \\(a + H = \\{a + h : h \\in  H\\}\\). Sebuah koset tidak harus subgrup; hanya koset \\(H\\) sendiri yang memuat identitas."
      ],
      [
        "Sama atau terpisah",
        "Dua koset kiri dari subgrup yang sama selalu identik atau saling lepas. Kriterianya \\(aH = bH\\) tepat ketika \\(b^{-1}a \\in  H\\). Setiap elemen grup berada pada salah satu koset, sehingga koset-koset membentuk partisi \\(G\\)."
      ],
      [
        "Ukuran dan indeks",
        "Peta \\(h \\mapsto  ah\\) adalah bijeksi \\(H \\to  aH\\), jadi semua koset mempunyai ukuran yang sama dengan \\(H\\). Banyak koset disebut indeks \\([G:H]\\). Pada grup hingga, \\(|G| = [G:H] |H|\\)."
      ],
      [
        "Kiri dan kanan",
        "Koset kanan \\(Ha\\) memakai perkalian dari sisi berbeda. Pada grup abelian, \\(aH = Ha\\). Pada grup umum, kesamaan ini untuk semua \\(a\\) justru menjadi syarat normalitas yang akan dipakai membangun grup kuosien."
      ]
    ],
    "example": "Pada \\(\\mathbb{Z}_{12}, H = \\langle 4\\rangle  = \\{0,4,8\\}\\). Kosetnya \\(\\{0,4,8\\}, \\{1,5,9\\}, \\{2,6,10\\}\\), dan \\(\\{3,7,11\\}\\). Ada empat koset, masing-masing berisi tiga elemen.",
    "pitfall": "Menulis \\(G/H\\) belum otomatis memberikan operasi grup. Normalitas diperlukan untuk operasi koset standar.",
    "lab": "coset",
    "prompt": "Perhatikan bahwa setiap elemen muncul tepat sekali dalam daftar koset. Apakah setiap koset memuat \\(0\\)?",
    "quiz": {
      "q": "Jika \\(|G| = 24\\) dan \\(|H| = 6\\), indeks \\([G:H]\\) adalah…",
      "choices": [
        "\\(4\\)",
        "\\(6\\)",
        "\\(18\\)"
      ],
      "answer": 0,
      "why": "\\(24 = [G:H] \\times  6\\). Karena itu indeksnya \\(4\\)."
    }
  },
  {
    "id": 8,
    "title": "Teorema Lagrange",
    "part": "Mengelompokkan elemen",
    "time": 10,
    "lead": "Pembagian ukuran memberi batas yang kuat, tetapi tidak semua kebalikannya benar.",
    "goals": [
      "Memakai hipotesis hingga secara tepat",
      "Membedakan syarat perlu dan jaminan keberadaan"
    ],
    "sections": [
      [
        "Teorema dan alasannya",
        "Jika \\(G\\) grup hingga dan \\(H \\le  G\\), maka \\(|H|\\) membagi \\(|G|\\). Alasannya bukan kebetulan aritmetika: koset mempartisi \\(G\\) menjadi \\([G:H]\\) bagian yang masing-masing berisi \\(|H|\\) elemen."
      ],
      [
        "Orde elemen",
        "Terapkan Lagrange pada subgrup \\(\\langle a\\rangle\\). Karena \\(|\\langle a\\rangle | = \\operatorname{ord}(a)\\), orde elemen membagi orde grup hingga. Dengan demikian \\(a\\) pangkat \\(|G|\\) adalah identitas. Hipotesis hingga tidak boleh dibuang dari pembagian kardinalitas ini."
      ],
      [
        "Kasus orde prima",
        "Jika \\(|G| = p\\) prima, elemen \\(a \\ne  e\\) memiliki orde yang membagi \\(p\\) dan bukan \\(1\\). Jadi \\(\\operatorname{ord}(a) = p\\), sehingga \\(G = \\langle a\\rangle\\). Setiap grup berorde prima adalah siklik."
      ],
      [
        "Jangan membalik implikasi",
        "Jika \\(d\\) membagi \\(|G|\\), Lagrange saja tidak menjamin adanya elemen berorde \\(d\\). Misalnya semua elemen nonidentitas grup empat Klein berorde \\(2\\); grup itu berorde \\(4\\), tetapi tidak mempunyai elemen berorde \\(4\\)."
      ]
    ],
    "example": "Grup berorde \\(12\\) hanya dapat mempunyai elemen berorde \\(1,2,3,4,6\\), atau \\(12\\) menurut Lagrange. Daftar ini adalah calon yang diizinkan, bukan daftar elemen yang pasti ada.",
    "pitfall": "Jika \\(G\\) tak hingga, rumus pembagian bilangan \\(|G|/|H|\\) dalam bentuk hingga tidak dapat langsung dipakai. Indeks tetap dapat didefinisikan sebagai banyak koset.",
    "lab": "operation",
    "prompt": "Pada unit modulo \\(12\\), hitung kuadrat setiap elemen. Apakah grup berorde \\(4\\) ini memiliki elemen berorde \\(4\\)?",
    "quiz": {
      "q": "\\(d\\) membagi \\(|G|\\). Apa yang dijamin oleh Lagrange saja?",
      "choices": [
        "Pasti ada elemen berorde \\(d\\)",
        "Pasti ada subgrup berorde \\(d\\)",
        "Belum ada jaminan keberadaan untuk setiap \\(d\\)"
      ],
      "answer": 2,
      "why": "Teorema memberi arah dari subgrup atau elemen yang ada menuju pembagi orde grup. Kebalikannya memerlukan hasil lain atau dapat gagal."
    }
  },
  {
    "id": 9,
    "title": "Homomorfisme grup",
    "part": "Menghubungkan struktur",
    "time": 12,
    "lead": "Peta yang mempertahankan operasi memperlihatkan bagian struktur yang tetap terbaca.",
    "goals": [
      "Memeriksa homomorfisme dan keterdefinisian aturan",
      "Menghitung kernel dan citra"
    ],
    "sections": [
      [
        "Pelestarian operasi",
        "Homomorfisme \\(\\varphi : G \\to  H\\) memenuhi \\(\\varphi (ab) = \\varphi (a)\\varphi (b)\\) untuk semua \\(a,b \\in  G\\). Operasi pada kedua ruas dapat berbeda bentuk. Dari sifat ini dapat dibuktikan bahwa identitas dipetakan ke identitas dan invers dipetakan ke invers."
      ],
      [
        "Kernel dan citra",
        "Kernel adalah \\(\\{g \\in  G : \\varphi (g) = e_{H}\\}\\), sebuah subgrup domain. Citra adalah \\(\\{\\varphi (g) : g \\in  G\\}\\), sebuah subgrup kodomain. Keduanya mempunyai definisi berbeda meskipun dalam contoh tertentu dapat sama sebagai himpunan."
      ],
      [
        "Dua tes yang berbeda",
        "Homomorfisme injektif tepat ketika kernelnya trivial. Surjektivitas berarti citra sama dengan kodomain. Kernel trivial saja belum cukup untuk menyebut peta itu isomorfisme."
      ],
      [
        "Aturan di grup siklik",
        "Aturan \\(\\varphi ([x]_{m}) = [kx]_{n}\\) sah tepat ketika \\(n\\) membagi \\(km\\). Sebab \\([m]_{m} = [0]_{m}\\) harus mempunyai citra yang sama. Jika syarat ini terpenuhi, pelestarian penjumlahan mengikuti distribusi \\(k(x + y) = kx + ky\\)."
      ]
    ],
    "example": "\\(\\varphi : \\mathbb{Z}_{12} \\to  \\mathbb{Z}_{6}, \\varphi ([x]) = [2x]\\), sah karena \\(6\\) membagi \\(24\\). Kernel \\(\\{0,3,6,9\\}\\); citra \\(\\{0,2,4\\}\\). Peta ini tidak injektif dan tidak surjektif ke seluruh \\(\\mathbb{Z}_{6}\\).",
    "pitfall": "Daftar output untuk wakil \\(0,\\ldots ,m-1\\) belum membuktikan aturan pada kelas residu sah. Wakil \\(x\\) dan \\(x+m\\) harus memberi kelas citra yang sama.",
    "lab": "hom",
    "prompt": "Coba \\(m=12, n=6, k=2\\); kemudian \\(m=3, n=4, k=1\\). Jelaskan mengapa kasus kedua gagal sebelum membahas kernel.",
    "quiz": {
      "q": "Kernel suatu homomorfisme trivial. Kesimpulan yang benar adalah…",
      "choices": [
        "Peta injektif",
        "Peta pasti surjektif",
        "Peta pasti isomorfisme ke kodomain"
      ],
      "answer": 0,
      "why": "Kernel trivial setara dengan injektivitas. Untuk isomorfisme ke kodomain, surjektivitas tetap diperlukan."
    }
  },
  {
    "id": 10,
    "title": "Normalitas dan grup kuosien",
    "part": "Menghubungkan struktur",
    "time": 12,
    "lead": "Operasi pada kelas hanya sah jika pemilihan wakil tidak mengubah hasilnya.",
    "goals": [
      "Menjelaskan peran normalitas",
      "Membedakan anggota grup asal dan koset sebagai elemen kuosien"
    ],
    "sections": [
      [
        "Subgrup normal",
        "\\(N \\le  G\\) normal jika \\(gN = Ng\\) untuk semua \\(g \\in  G\\). Bentuk ekuivalennya adalah \\(gNg^{-1} = N\\). Semua subgrup grup abelian normal, tetapi pada grup nonabelian perlu pemeriksaan tersendiri."
      ],
      [
        "Mengapa wakil penting?",
        "Kita ingin mendefinisikan \\((aN)(bN) = abN\\). Jika memilih \\(a'\\) dalam \\(aN\\) dan \\(b'\\) dalam \\(bN\\), hasil \\(a'b'N\\) harus tetap \\(abN\\). Normalitas adalah syarat yang menjamin operasi koset standar ini terdefinisi dengan baik."
      ],
      [
        "Elemen kuosien adalah koset",
        "Identitas \\(G/N\\) adalah \\(N\\), bukan satu elemen \\(e\\) dari \\(G\\). Invers \\(aN\\) adalah \\(a^{-1}N\\). Jika \\(G\\) hingga, \\(|G/N| = [G:N]\\). Jangan mencampur jumlah anggota sebuah koset dengan jumlah koset."
      ],
      [
        "Kernel selalu normal",
        "Jika \\(n\\) ada di kernel \\(\\varphi\\), maka \\(\\varphi (gng^{-1}) = \\varphi (g)e\\varphi (g)^{-1} = e\\). Jadi konjugasi mempertahankan kernel. Karena itu \\(G/\\ker  \\varphi\\) dapat dibentuk untuk setiap homomorfisme."
      ]
    ],
    "example": "Di \\(\\mathbb{Z}_{12}, N = \\langle 4\\rangle\\) normal karena grupnya abelian. Kuosien mempunyai empat elemen berupa koset \\(N, 1+N, 2+N\\), dan \\(3+N\\). Penjumlahan koset mengikuti penjumlahan wakil modulo empat.",
    "pitfall": "Koset \\(\\{1,5,9\\}\\) dalam contoh bukan subgrup \\(\\mathbb{Z}_{12}\\), tetapi menjadi satu elemen yang sah pada grup kuosien.",
    "lab": "coset",
    "prompt": "Baca setiap baris berwarna sebagai satu elemen kuosien. Hitung ukuran koset dan jumlah koset secara terpisah.",
    "quiz": {
      "q": "Identitas grup kuosien \\(G/N\\) adalah…",
      "choices": [
        "Koset \\(N\\)",
        "Elemen \\(a\\) sembarang dari \\(G\\)",
        "Jumlah seluruh wakil koset"
      ],
      "answer": 0,
      "why": "\\(N\\) adalah koset identitas dan memenuhi \\(N(aN) = aN = (aN)N\\)."
    }
  },
  {
    "id": 11,
    "title": "Isomorfisme",
    "part": "Menghubungkan struktur",
    "time": 12,
    "lead": "Struktur yang sama memerlukan korespondensi yang tepat, bukan hanya ukuran yang cocok.",
    "goals": [
      "Membedakan isomorfisme dari kesamaan orde",
      "Mengikuti peta dari kuosien menuju citra"
    ],
    "sections": [
      [
        "Definisi",
        "Isomorfisme adalah homomorfisme bijektif. Jika ada isomorfisme \\(G \\to  H\\), kita menulis \\(G \\cong  H\\). Elemen, operasi, dan hasilnya saling bersesuaian; bentuk konkret kedua grup boleh berbeda."
      ],
      [
        "Apa yang dipertahankan?",
        "Isomorfisme mempertahankan orde elemen, sifat siklik, dan komutativitas. Perbedaan salah satu sifat ini dapat membuktikan dua grup tidak isomorfik. Kesamaan beberapa sifat belum otomatis membuktikan adanya isomorfisme."
      ],
      [
        "Teorema Isomorfisme Pertama",
        "Untuk \\(\\varphi : G \\to  H\\) homomorfisme, berlaku \\(G/\\ker  \\varphi  \\cong  \\operatorname{Im} \\varphi\\). Peta terinduksinya membawa koset \\(g \\ker  \\varphi\\) ke \\(\\varphi (g)\\). Kesamaan koset tepat menangkap kapan dua elemen domain mempunyai nilai citra sama."
      ],
      [
        "Empat hal yang diperiksa",
        "Peta dari kuosien harus sah terhadap pergantian wakil, mempertahankan operasi, injektif, dan surjektif ke citra. Targetnya \\(\\operatorname{Im} \\varphi\\), yang mungkin lebih kecil daripada \\(H\\). Jika \\(\\varphi\\) surjektif, barulah target itu seluruh \\(H\\)."
      ]
    ],
    "example": "Untuk \\(\\varphi : \\mathbb{Z}_{12} \\to  \\mathbb{Z}_{6}, [x] \\mapsto  [2x]\\), kernel berisi empat elemen dan citra tiga elemen. Maka kuosien \\(\\mathbb{Z}_{12}/\\ker  \\varphi\\) berorde \\(3\\) dan isomorfik dengan \\(\\{0,2,4\\}\\), bukan dengan seluruh \\(\\mathbb{Z}_{6}\\).",
    "pitfall": "Jika satu calon pemetaan gagal menjadi isomorfisme, kedua grup belum tentu tidak isomorfik. Mungkin ada pemetaan lain yang berhasil.",
    "lab": "hom",
    "prompt": "Bandingkan jumlah koset kernel dan jumlah anggota citra. Hubungkan setiap koset dengan satu nilai output.",
    "quiz": {
      "q": "Target umum dalam \\(G/\\ker  \\varphi  \\cong  \\ldots\\) adalah…",
      "choices": [
        "Seluruh kodomain tanpa syarat",
        "Citra \\(\\varphi\\)",
        "Kernel \\(\\varphi\\)"
      ],
      "answer": 1,
      "why": "Peta terinduksi selalu surjektif ke citra. Citra sama dengan kodomain hanya jika \\(\\varphi\\) sendiri surjektif."
    }
  },
  {
    "id": 12,
    "title": "Aplikasi teori grup",
    "part": "Menggunakan teori",
    "time": 12,
    "lead": "Mulai dari objek dan transformasi yang diizinkan, lalu pilih teori yang sesuai.",
    "goals": [
      "Mengklasifikasikan konfigurasi dengan simetri",
      "Membedakan konfigurasi dan grup transformasinya"
    ],
    "sections": [
      [
        "Model sebelum teorema",
        "Dalam aplikasi, tentukan objek, operasi, dan transformasi yang diizinkan. Membolehkan seluruh permutasi dapat memberi klasifikasi berbeda dari hanya membolehkan simetri geometri. Asumsi model memengaruhi jawaban."
      ],
      [
        "Dua merah dan dua biru",
        "Ada enam pilihan dua posisi merah pada empat titik sudut persegi. Di bawah \\(D_{4}\\), konfigurasi terbagi menjadi dua kelas: merah bertetangga dan merah berhadapan. Simetri mempertahankan jarak, sehingga sisi tidak dapat berubah menjadi diagonal."
      ],
      [
        "Memindahkan warna dengan benar",
        "Jika \\(c\\) menyimpan warna pada setiap posisi, warna baru di posisi \\(j\\) berasal dari posisi \\(g^{-1}(j)\\). Jadi \\(T_{g}(c)\\) pada posisi \\(j\\) adalah \\(c\\) pada posisi \\(g^{-1}(j)\\). Dengan konvensi ini \\(T_{g} \\circ  T_{h} = T_{gh}\\)."
      ],
      [
        "Contoh lain",
        "Unit modulo \\(12\\) adalah \\(\\{1,5,7,11\\}\\) dengan perkalian. Setiap elemen nonidentitas berorde \\(2\\). Matriks geser \\(\\begin{pmatrix}1&k\\\\0&1\\end{pmatrix}\\) untuk \\(k \\in  \\mathbb{Z}\\) membentuk grup yang isomorfik dengan \\(\\mathbb{Z}\\) melalui parameter \\(k\\); ini contoh grup tak hingga."
      ]
    ],
    "example": "Jika \\(c = (M,M,B,B)\\), satu rotasi \\(r\\) menghasilkan \\((B,M,M,B)\\). Pasangan merah tetap bertetangga. Jika seluruh \\(S_{4}\\) diizinkan, keenam konfigurasi berada dalam satu kelas.",
    "pitfall": "Kumpulan konfigurasi warna bukan otomatis grup. Yang membentuk grup di sini adalah transformasi yang bekerja padanya.",
    "lab": "color",
    "prompt": "Pilih pasangan merah dan terapkan semua simetri. Bandingkan orbit berukuran \\(4\\) dengan orbit berukuran \\(2\\).",
    "quiz": {
      "q": "Berapa kelas konfigurasi dua merah dua biru di bawah \\(D_{4}\\)?",
      "choices": [
        "\\(1\\)",
        "\\(2\\)",
        "\\(6\\)"
      ],
      "answer": 1,
      "why": "Dua jenisnya adalah merah bertetangga dan merah berhadapan. Rotasi menghubungkan konfigurasi dalam masing-masing jenis."
    }
  },
  {
    "id": 13,
    "title": "Sintesis teori grup",
    "part": "Menggunakan teori",
    "time": 12,
    "lead": "Pilih alat dari bentuk masalah, lalu periksa hipotesis sebelum menarik kesimpulan.",
    "goals": [
      "Menghubungkan konsep dalam satu rantai alasan",
      "Mengenali kesimpulan yang lebih kuat daripada data"
    ],
    "sections": [
      [
        "Peta strategi",
        "Pertanyaan tentang satu elemen mengarah ke subgrup siklik dan orde. Pertanyaan tentang ukuran grup hingga mengarah ke koset dan Lagrange. Pertanyaan tentang pemetaan mengarah ke kernel, citra, dan Teorema Isomorfisme Pertama."
      ],
      [
        "Ukuran tidak menentukan semuanya",
        "Subgrup berorde sama dan berindeks sama dapat berbeda sifat normalitasnya. Pada \\(\\mathbb{Z}_{24}\\), subgrup \\(\\langle 4\\rangle\\) berorde \\(6\\) dan berindeks \\(4\\) serta normal. Pada \\(S_{4}\\), subgrup yang menetapkan titik \\(4\\) berorde \\(6\\) dan berindeks \\(4\\) tetapi tidak normal."
      ],
      [
        "Peta penggandaan lagi",
        "Peta \\(f: \\mathbb{Z} \\to  \\mathbb{Z}, f(n)=2n\\), memiliki kernel trivial tetapi bukan isomorfisme ke seluruh \\(\\mathbb{Z}\\) karena tidak surjektif. Kedua grup domain dan kodomain tetap isomorfik melalui identitas. Kegagalan satu peta bukan bukti ketidakisomorfikan grup."
      ],
      [
        "Membaca hasil eksplorasi",
        "Laboratorium memeriksa keluarga contoh kecil. Gunakan hasilnya untuk membuat dugaan dan mencari contoh tandingan, lalu susun bukti untuk klaim umum. Coba tulis hubungan: homomorfisme → kernel normal → kuosien → citra."
      ]
    ],
    "example": "Kembali ke \\(\\varphi : \\mathbb{Z}_{12} \\to  \\mathbb{Z}_{6}, [x] \\mapsto  [2x]\\). Syarat keterdefinisian terpenuhi; kernel berorde \\(4\\); ada \\(3\\) koset kernel; citra berorde \\(3\\). Kuosien dan citra dihubungkan oleh peta yang mengirim setiap koset ke nilai \\(\\varphi\\) pada wakilnya.",
    "pitfall": "“Orde sama”, “kernel trivial”, dan “hasil contoh cocok” adalah tiga informasi berbeda. Masing-masing hanya memberi kesimpulan sesuai hipotesisnya.",
    "lab": "hom",
    "prompt": "Tentukan terlebih dahulu apakah peta sah. Setelah itu jelaskan kernel, citra, jumlah koset, dan target isomorfismenya dengan kata-kata sendiri.",
    "quiz": {
      "q": "Dua grup berorde sama. Kesimpulan yang sah adalah…",
      "choices": [
        "Keduanya pasti isomorfik",
        "Masih perlu memeriksa struktur atau membangun isomorfisme",
        "Keduanya pasti siklik"
      ],
      "answer": 1,
      "why": "\\(\\mathbb{Z}_{4}\\) dan grup empat Klein sama-sama berorde \\(4\\), tetapi yang kedua tidak mempunyai elemen berorde \\(4\\). Jadi kesamaan orde belum cukup."
    }
  }
];
