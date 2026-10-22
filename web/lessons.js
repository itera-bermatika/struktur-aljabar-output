/* Data kanonis web 0.7; matematika eksplisit. Edit berkas ini untuk revisi isi. */
window.GROUP_LESSONS=[
  {
    "id": 0,
    "title": "Mengapa struktur aljabar?",
    "part": "Melihat pola",
    "time": 20,
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
      ],
      [
        "Bekal laboratorium: sisa pembagian",
        "Sisa pembagian oleh 6 selalu salah satu dari \\(0,1,2,3,4,5\\). Penjumlahan modulo 6 berarti menjumlahkan dua bilangan lalu mengambil sisanya: \\(4+5\\equiv3\\pmod6\\). Kelas residu dan definisi formal grup dijelaskan pada Bab 1–2; laboratorium di sini merupakan pratinjau untuk mengamati pola."
      ]
    ],
    "example": "Pada penjumlahan bilangan bulat, \\(0+a=a+0=a\\). Pada perkalian bilangan bulat, \\(1\\cdot a=a\\cdot1=a\\). Angkanya berbeda, tetapi perannya sama: tidak mengubah elemen ketika dioperasikan. Kita akan menyebut peran ini identitas. Untuk menentukan identitas, operasinya harus disebutkan.",
    "pitfall": "Objek yang memiliki sifat mirip belum tentu isomorfik. Kesimpulan isomorfisme memerlukan peta bijektif yang mempertahankan operasi.",
    "lab": "operation",
    "prompt": "Prediksi apa yang berubah ketika penjumlahan modulo 6 diganti menjadi perkalian modulo 6. Identitas tetap ada, tetapi apakah setiap elemen dapat dibalik?",
    "quiz": {
      "q": "Lima contoh memenuhi suatu klaim universal. Apa yang dapat disimpulkan?",
      "choices": [
        "Klaim itu pasti terbukti",
        "Dugaan mendapat dukungan, tetapi belum terbukti",
        "Klaim itu pasti salah"
      ],
      "answer": 1,
      "why": "Pemeriksaan sebagian kasus tidak mencakup seluruh objek yang dimaksud. Bukti harus menjangkau semua kasus dalam hipotesis.",
      "feedback": [
        "Contoh yang lolos belum mencakup semua kasus; perlu alasan umum.",
        "Pemeriksaan sebagian kasus tidak mencakup seluruh objek yang dimaksud. Bukti harus menjangkau semua kasus dalam hipotesis.",
        "Lolosnya lima contoh tidak menyatakan klaim salah; data itu hanya mendukung dugaan."
      ]
    },
    "prerequisites": [
      "Dapat menghitung penjumlahan dan pengurangan bilangan bulat.",
      "Bersedia membedakan contoh, dugaan, dan alasan umum."
    ],
    "worked": [
      {
        "title": "Satu hitungan dan pernyataan untuk semua",
        "steps": [
          "Persamaan \\((2+3)+4=2+(3+4)\\) adalah satu pemeriksaan. Ia tidak sendirian membuktikan klaim tentang setiap tiga bilangan bulat.",
          "Sifat asosiatif penjumlahan menyatakan \\((a+b)+c=a+(b+c)\\) untuk semua bilangan bulat a,b,c. Kita boleh memakai sifat bilangan bulat yang sudah dikenal, tetapi harus membedakan sifat umum itu dari beberapa hitungan.",
          "Ketika nanti operasinya baru, sifat asosiatif perlu dibuktikan untuk aturan baru tersebut. Kemiripan simbol tidak cukup."
        ]
      },
      {
        "title": "Satu contoh tandingan cukup",
        "steps": [
          "Dugaan: pengurangan bilangan bulat asosiatif. Uji dua pengelompokan dari tiga input yang sama.",
          "\\((3-2)-1=0\\), sedangkan \\(3-(2-1)=2\\). Hasil berbeda, sehingga dugaan universal itu salah.",
          "Kita tidak perlu memeriksa seluruh bilangan bulat untuk membantah dugaan. Namun dugaan yang lolos dari beberapa tes belum otomatis terbukti."
        ]
      }
    ],
    "proof": {
      "title": "Bukti terpandu: mengapa jumlah bilangan genap tetap genap?",
      "steps": [
        "Tujuan: menunjukkan jumlah dua bilangan genap selalu genap. Jangan hanya memilih dua contoh tertentu.",
        "Ambil bilangan genap sebarang a dan b. Ada bilangan bulat m,n sehingga \\(a=2m\\) dan \\(b=2n\\).",
        "Maka \\(a+b=2m+2n=2(m+n)\\). Karena m+n bilangan bulat, bentuk ini memenuhi definisi bilangan genap.",
        "Jadi kesimpulan berlaku untuk semua pasangan genap. Pola memilih elemen sebarang lalu memakai definisi akan terus dipakai dalam teori grup."
      ]
    },
    "exercises": [
      {
        "q": "Berikan identitas untuk penjumlahan dan perkalian bilangan bulat. Jelaskan perbedaannya.",
        "hint": "Identitas mempertahankan setiap input dari kedua sisi.",
        "answer": "Penjumlahan memiliki identitas 0, perkalian memiliki identitas 1. Yang sama ialah peran mempertahankan input, bukan nilai elemennya.",
        "rubric": "Operasi disebutkan dan kedua sisi diperhatikan."
      },
      {
        "q": "Empat percobaan menunjukkan suatu aturan komutatif. Apakah itu membuktikan komutativitas pada himpunan tak hingga?",
        "hint": "Bandingkan beberapa pasangan dengan semua pasangan.",
        "answer": "Belum. Pernyataan komutatif harus berlaku untuk semua pasangan. Percobaan mendukung dugaan; bukti umum atau pemeriksaan lengkap seluruh kasus pada himpunan hingga diperlukan.",
        "rubric": "Tidak mengubah dukungan contoh menjadi bukti universal."
      },
      {
        "q": "Bantah klaim bahwa setiap bilangan bulat mempunyai kebalikan perkalian yang juga bulat.",
        "hint": "Coba elemen 2.",
        "answer": "Jika 2 mempunyai invers bilangan bulat b, harus \\(2b=1\\). Ini memerlukan \\(b=1/2\\), bukan bilangan bulat.",
        "rubric": "Satu elemen sah dalam himpunan dan alasan kegagalan inversnya."
      },
      {
        "q": "Buktikan selisih dua bilangan ganjil selalu genap.",
        "hint": "Tuliskan bentuk \\(2m+1\\) dan \\(2n+1\\).",
        "answer": "\\((2m+1)-(2n+1)=2(m-n)\\), kelipatan 2 karena m−n bilangan bulat.",
        "rubric": "Menggunakan dua bilangan ganjil sebarang."
      },
      {
        "q": "Pada bilangan bulat, apakah aturan \\(a*b=a+b+1\\) memiliki elemen yang tidak mengubah semua input?",
        "hint": "Cari e agar \\(a+e+1=a\\).",
        "answer": "Ya, \\(e=-1\\): \\(a*(-1)=a\\) dan \\((-1)*a=a\\). Identitas bergantung pada aturan operasi, bukan kebiasaan memakai 0 atau 1.",
        "rubric": "Memeriksa kedua sisi untuk input sebarang."
      }
    ],
    "reflection": "Tuliskan satu dugaan umum, satu contoh yang mendukungnya, dan alasan mengapa contoh itu belum menjadi bukti.",
    "pdfPage": 21,
    "pdfPrinted": 1,
    "goalRefs": [
      [
        2,
        3
      ],
      [
        4
      ]
    ],
    "assessment": {
      "q": "Buktikan jumlah bilangan genap dan bilangan ganjil selalu ganjil. Jelaskan mengapa dua hitungan contoh saja belum cukup.",
      "answer": "Untuk bilangan bulat m,n, \\(2m+(2n+1)=2(m+n)+1\\), bentuk bilangan ganjil. Bentuk umum menjangkau semua pasangan, sedangkan contoh hanya pasangan tertentu.",
      "rubric": [
        "Gunakan dua input sebarang.",
        "Jelaskan bentuk bilangan ganjil."
      ]
    }
  },
  {
    "id": 1,
    "title": "Himpunan, pemetaan, dan operasi",
    "part": "Bahasa dasar",
    "time": 30,
    "lead": "Sebelum memeriksa aturan, tentukan dahulu objek dan arah pemetaannya.",
    "goals": [
      "Membedakan aturan fungsi dan aturan yang bukan fungsi",
      "Menentukan domain, kodomain, citra, dan sifat bijektif",
      "Memeriksa ketertutupan serta keterdefinisian operasi",
      "Menggunakan relasi ekuivalensi untuk membentuk kelas"
    ],
    "sections": [
      [
        "Himpunan dan pasangan terurut",
        "Himpunan mengumpulkan objek yang anggotanya dapat ditentukan. Notasi \\(x\\in A\\) berarti \\(x\\) anggota \\(A\\); \\(H\\subseteq A\\) berarti setiap anggota \\(H\\) juga anggota \\(A\\). Pasangan terurut \\((a,b)\\) memperhatikan urutan: \\((1,2)\\ne(2,1)\\). Produk Kartesius \\(A\\times B\\) memuat semua pasangan dengan komponen pertama di \\(A\\) dan kedua di \\(B\\). Jika \\(A=\\{0,1\\}\\), maka \\(A\\times A=\\{(0,0),(0,1),(1,0),(1,1)\\}\\). Inilah daftar seluruh input bagi operasi dua masukan pada \\(A\\)."
      ],
      [
        "Fungsi harus memberi tepat satu hasil",
        "Fungsi \\(f:A\\to B\\) memberikan tepat satu anggota \\(B\\) kepada setiap anggota \\(A\\). Input yang tidak memperoleh hasil membuat aturan gagal menjadi fungsi pada domain itu; dua hasil berbeda untuk input yang sama juga tidak diperbolehkan. Beberapa input boleh mempunyai hasil sama. Domain adalah \\(A\\), kodomain adalah \\(B\\), dan citra adalah \\(f(A)=\\{f(a):a\\in A\\}\\). Kodomain ditetapkan dalam definisi; citra diperoleh dari hasil yang benar-benar tercapai."
      ],
      [
        "Injektif, surjektif, dan bijektif",
        "Injektif berarti \\(f(a)=f(b)\\) mengakibatkan \\(a=b\\). Untuk membuktikan tidak injektif, cukup cari dua input berbeda yang hasilnya sama. Surjektif berarti setiap \\(y\\) dalam kodomain mempunyai prapeta: ada \\(x\\) di domain dengan \\(f(x)=y\\). Satu anggota kodomain yang tidak tercapai membantah surjektivitas. Bijektif berarti injektif sekaligus surjektif. Mengganti kodomain dapat mengubah surjektivitas meskipun rumusnya tetap."
      ],
      [
        "Komposisi dan fungsi identitas",
        "Untuk \\(f:A\\to B\\) dan \\(g:B\\to C\\), komposisi \\(g\\circ f:A\\to C\\) didefinisikan oleh \\((g\\circ f)(x)=g(f(x))\\). Kerjakan faktor kanan dahulu. Jika \\(f(x)=x+1\\) dan \\(g(x)=2x\\) pada bilangan bulat, maka \\((g\\circ f)(x)=2x+2\\), sedangkan \\((f\\circ g)(x)=2x+1\\). Jadi komposisi umumnya tidak komutatif. Fungsi identitas \\(\\operatorname{id}_A(x)=x\\) tidak mengubah input. Pada himpunan dengan lebih dari satu elemen, fungsi identitas bukan fungsi konstan."
      ],
      [
        "Operasi biner dan ketertutupan",
        "Operasi biner pada \\(A\\) adalah fungsi \\(*:A\\times A\\to A\\). Artinya, setiap pasangan input mempunyai tepat satu hasil dan hasil itu kembali ke \\(A\\). Syarat terakhir disebut ketertutupan. Pada \\(\\mathbb Z\\), pengurangan tertutup; pada \\(\\mathbb N_0=\\{0,1,2,\\ldots\\}\\), aturan yang sama tidak tertutup karena \\(1-2=-1\\notin\\mathbb N_0\\). Pembagian pada \\(\\mathbb Z\\) juga bermasalah: pembagian oleh nol tidak terdefinisi dan \\(1/2\\notin\\mathbb Z\\). Buku ini tetap mencantumkan ketertutupan sebagai aksioma pertama grup, diikuti asosiativitas, identitas, dan invers."
      ],
      [
        "Relasi ekuivalensi dan kelas residu",
        "Relasi ekuivalensi harus refleksif, simetris, dan transitif. Untuk bilangan bulat, \\(a\\sim b\\) jika \\(3\\mid(a-b)\\) adalah contoh: \\(3\\mid(a-a)\\); jika \\(3\\mid(a-b)\\), maka \\(3\\mid(b-a)\\); dan jika \\(3\\mid(a-b)\\) serta \\(3\\mid(b-c)\\), maka \\(3\\mid(a-c)\\). Kelas \\([0],[1],[2]\\) mengumpulkan bilangan dengan sisa pembagian sama. Setiap bilangan berada di tepat satu kelas, sehingga kelas-kelas ini mempartisi \\(\\mathbb Z\\). Simbol \\([1]=[4]\\) menyatakan kesamaan kelas, bukan kesamaan bilangan bulat."
      ],
      [
        "Mengapa pilihan wakil tidak boleh mengubah hasil?",
        "Untuk menjumlahkan kelas modulo \\(3\\), kita ingin memakai \\([a]+[b]=[a+b]\\). Jika \\(a'=a+3u\\) dan \\(b'=b+3v\\), maka \\(a'+b'=(a+b)+3(u+v)\\). Jadi \\([a'+b']=[a+b]\\). Aturan tidak bergantung pada pilihan wakil. Memeriksa beberapa contoh membantu, tetapi argumen dengan \\(u,v\\in\\mathbb Z\\) inilah yang menjangkau semua wakil."
      ]
    ],
    "example": "Pada \\(\\mathbb{Z}_{6}\\), aturan \\([a] + [b] = [a + b]\\) memberi operasi biner. Mengganti wakil \\(1\\) dengan \\(7\\) tidak mengubah kelas hasil karena selisihnya kelipatan \\(6\\).",
    "pitfall": "Citra bukan sinonim kodomain. Output yang tidak tercapai tetap boleh menjadi anggota kodomain.",
    "lab": "hom",
    "prompt": "Kasus baru: pada domain \\(\\{-1,0,1\\}\\), prediksi citra \\(f(x)=2x\\) jika kodomainnya \\(\\{-2,-1,0,1,2\\}\\). Apakah injektif dan surjektif? Lalu prediksi perubahan jika kodomain dipersempit menjadi \\(\\{-2,0,2\\}\\).",
    "quiz": {
      "q": "Surjektivitas \\(f: A \\to  B\\) berarti…",
      "choices": [
        "Setiap anggota \\(B\\) mempunyai sedikitnya satu prapeta",
        "Setiap anggota \\(A\\) mempunyai dua output",
        "Semua anggota \\(A\\) dipetakan ke satu nilai"
      ],
      "answer": 0,
      "why": "Surjektivitas berbicara tentang seluruh kodomain \\(B\\). Setiap \\(b \\in  B\\) harus sama dengan \\(f(a)\\) untuk suatu \\(a \\in  A\\).",
      "feedback": [
        "Surjektivitas berbicara tentang seluruh kodomain \\(B\\). Setiap \\(b \\in  B\\) harus sama dengan \\(f(a)\\) untuk suatu \\(a \\in  A\\).",
        "Dua output berbeda untuk satu input justru menggagalkan definisi fungsi.",
        "Peta konstan dapat gagal surjektif jika kodomain memiliki nilai lain."
      ]
    },
    "prerequisites": [
      "Dapat menentukan apakah sebuah objek anggota suatu himpunan.",
      "Dapat menghitung bilangan bulat dan sisa pembagian sederhana."
    ],
    "worked": [
      {
        "title": "Rumus sama, kodomain berbeda",
        "steps": [
          "Ambil \\(A=\\{-1,0,1\\}\\), \\(B=\\{0,1,2\\}\\), dan \\(f:A\\to B\\), \\(f(x)=x^2\\).",
          "Hitung seluruh hasil: \\(f(-1)=1\\), \\(f(0)=0\\), \\(f(1)=1\\). Jadi citranya \\(\\{0,1\\}\\).",
          "Tidak injektif karena \\(-1\\ne1\\), tetapi keduanya menuju \\(1\\). Tidak surjektif ke \\(B\\) karena \\(2\\) tidak tercapai.",
          "Jika kodomain diganti menjadi \\(\\{0,1\\}\\), aturan menjadi surjektif, tetapi tetap tidak injektif. Karena itu ia belum bijektif."
        ]
      },
      {
        "title": "Pemeriksaan operasi pada himpunan hingga",
        "steps": [
          "Pada \\(A=\\{0,1\\}\\), tetapkan \\(a*b\\) sebagai sisa pembagian \\(a+b\\) oleh \\(2\\).",
          "Seluruh pasangan menghasilkan \\(0*0=0\\), \\(0*1=1\\), \\(1*0=1\\), dan \\(1*1=0\\).",
          "Aturan terdefinisi tunggal dan setiap hasil di \\(A\\), sehingga merupakan operasi biner. Penjumlahan biasa pada \\(A\\) bukan operasi biner karena \\(1+1=2\\notin A\\)."
        ]
      }
    ],
    "proof": {
      "title": "Bukti terpandu: komposisi fungsi injektif",
      "steps": [
        "Asumsi: \\(f:A\\to B\\) dan \\(g:B\\to C\\) injektif. Tujuan: \\(g\\circ f\\) injektif.",
        "Ambil sembarang \\(x,y\\in A\\) dan andaikan \\((g\\circ f)(x)=(g\\circ f)(y)\\).",
        "Artinya \\(g(f(x))=g(f(y))\\). Karena \\(g\\) injektif, diperoleh \\(f(x)=f(y)\\).",
        "Karena \\(f\\) injektif, diperoleh \\(x=y\\). Ini tepat syarat injektivitas \\(g\\circ f\\). Perhatikan bahwa dua asumsi dipakai pada dua langkah berbeda."
      ]
    },
    "exercises": [
      {
        "q": "Misalkan a,b,0,1 adalah empat simbol berbeda. Tuliskan semua anggota \\(\\{a,b\\}\\times\\{0,1\\}\\). Apakah \\((0,a)\\) termasuk?",
        "hint": "Perhatikan himpunan asal komponen pertama dan kedua.",
        "answer": "Anggotanya \\((a,0),(a,1),(b,0),(b,1)\\). Pasangan \\((0,a)\\) tidak termasuk.",
        "rubric": "Empat pasangan lengkap dan urutan komponen benar."
      },
      {
        "q": "Apakah \\(f:\\mathbb Z\\to\\mathbb Z\\), \\(f(n)=2n+1\\), injektif dan surjektif?",
        "hint": "Untuk injektif, mulai dari \\(2a+1=2b+1\\). Untuk surjektif, periksa apakah \\(0\\) tercapai.",
        "answer": "Injektif: persamaan itu memberi \\(a=b\\). Tidak surjektif karena \\(2n+1=0\\) memerlukan \\(n=-1/2\\notin\\mathbb Z\\). Citranya semua bilangan bulat ganjil.",
        "rubric": "Ada argumen injektivitas dan saksi kodomain yang tidak tercapai."
      },
      {
        "q": "Dengan \\(f(x)=x^2\\) dan \\(g(x)=x+1\\) pada \\(\\mathbb R\\), hitung \\((f\\circ g)(2)\\) dan \\((g\\circ f)(2)\\).",
        "hint": "Tuliskan fungsi yang bekerja dahulu.",
        "answer": "\\(f(g(2))=f(3)=9\\), sedangkan \\(g(f(2))=g(4)=5\\).",
        "rubric": "Urutan pengerjaan dan kedua hasil benar."
      },
      {
        "q": "Apakah \\(a*b=a+b+1\\) merupakan operasi biner pada \\(\\mathbb Z\\)? Bagaimana pada \\(\\{0,1\\}\\)?",
        "hint": "Pisahkan keterdefinisian dari ketertutupan.",
        "answer": "Pada \\(\\mathbb Z\\), jumlah dua bilangan bulat ditambah satu tetap bilangan bulat dan tunggal. Pada \\(\\{0,1\\}\\), gagal tertutup: \\(1*1=3\\).",
        "rubric": "Alasan umum pada bilangan bulat dan satu contoh tandingan pada himpunan kecil."
      },
      {
        "q": "Buktikan bahwa komposisi dua fungsi surjektif \\(f:A\\to B\\), \\(g:B\\to C\\) juga surjektif.",
        "hint": "Mulai dari \\(c\\in C\\) sembarang. Cari \\(b\\), kemudian \\(a\\).",
        "answer": "Ambil \\(c\\in C\\). Surjektivitas \\(g\\) memberi \\(b\\in B\\) dengan \\(g(b)=c\\). Surjektivitas \\(f\\) memberi \\(a\\in A\\) dengan \\(f(a)=b\\). Maka \\((g\\circ f)(a)=c\\).",
        "rubric": "Mulai dari anggota kodomain sebarang dan gunakan kedua asumsi secara berurutan."
      }
    ],
    "reflection": "Berikan satu contoh aturan yang tidak terdefinisi pada seluruh domain dan satu contoh aturan yang terdefinisi tetapi tidak tertutup. Jelaskan perbedaannya.",
    "pdfPage": 41,
    "pdfPrinted": 21,
    "goalRefs": [
      [
        2,
        "E"
      ],
      [
        2,
        "E"
      ],
      [
        4
      ],
      [
        "E"
      ]
    ],
    "assessment": {
      "q": "Periksa apakah f(n)=2n dari Z ke himpunan bilangan bulat genap bijektif. Lalu buktikan relasi \\(a\\sim b\\iff4\\mid(a-b)\\) pada Z merupakan relasi ekuivalensi dan sebutkan kelas sisanya.",
      "answer": "Peta injektif karena 2a=2b memberi a=b, dan surjektif ke bilangan genap dari definisinya. Relasi refleksif karena \\(4\\mid0\\), simetris karena pembagi selisih juga membagi negatifnya, transitif karena selisih dijumlahkan. Kelas sisanya [0],[1],[2],[3] modulo 4.",
      "rubric": [
        "Perhatikan kodomain peta.",
        "Periksa tiga sifat relasi, bukan hanya daftar kelas."
      ]
    }
  },
  {
    "id": 2,
    "title": "Grup",
    "part": "Bahasa dasar",
    "time": 35,
    "lead": "Satu operasi pada himpunan tak kosong. Empat aksioma: ketertutupan, asosiativitas, identitas, dan invers.",
    "goals": [
      "Memeriksa aksioma grup dengan asumsi jelas",
      "Membedakan grup dan grup abelian"
    ],
    "sections": [
      [
        "Definisi yang mengikat contoh",
        "Grup adalah pasangan \\((G,*)\\), dengan \\(G\\) himpunan tak kosong dan \\(*\\) satu operasi biner, yang memenuhi empat aksioma berikut secara berurutan."
      ],
      [
        "Empat aksioma grup",
        "Periksa empat aksioma berikut pada himpunan tak kosong dan operasi yang ditetapkan:",
        [
          "Ketertutupan: untuk setiap \\(a,b\\in G\\), berlaku \\(a*b\\in G\\).",
          "Asosiativitas: untuk setiap \\(a,b,c\\in G\\), berlaku \\((a*b)*c=a*(b*c)\\).",
          "Identitas: ada \\(e\\in G\\) sehingga \\(e*a=a*e=a\\) untuk semua \\(a\\in G\\).",
          "Invers: untuk setiap \\(a\\in G\\), ada \\(a^{-1}\\in G\\) sehingga \\(a*a^{-1}=a^{-1}*a=e\\)."
        ]
      ],
      [
        "Konvensi dan grup abelian",
        "Ketertutupan sudah tercakup dalam definisi operasi biner \\(*:G\\times G\\to G\\), tetapi tetap dicantumkan sebagai aksioma pertama sesuai konvensi buku ini. Komutativitas merupakan syarat tambahan: jika \\(a*b=b*a\\) untuk semua \\(a,b\\in G\\), grup disebut abelian."
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
    "example": "Pada \\(\\mathbb{Z}_{6}\\) dengan penjumlahan: (1) jumlah dua kelas tetap kelas dalam \\(\\mathbb{Z}_{6}\\); (2) asosiativitas diwarisi dari penjumlahan bilangan bulat; (3) identitasnya \\([0]\\); (4) invers \\([a]\\) adalah \\([-a]\\). Misalnya, invers \\([2]\\) adalah \\([4]\\) karena \\(2+4\\equiv0\\pmod{6}\\). Invers aditif ini bukan kebalikan pecahan \\(\\frac12\\).",
    "pitfall": "Periksa keempat aksioma pada himpunan dan operasi yang sama: ketertutupan, asosiativitas, identitas, dan invers. Identitas dan invers saja belum cukup. Komutativitas tidak diwajibkan untuk setiap grup.",
    "lab": "operation",
    "prompt": "Periksa empat aksioma pada setiap pilihan operasi. Amati mengapa semua kelas residu dengan perkalian dapat gagal menjadi grup, sedangkan himpunan unit membentuk grup.",
    "quiz": {
      "q": "Sifat mana yang bukan syarat wajib setiap grup?",
      "choices": [
        "Asosiatif",
        "Setiap elemen mempunyai invers",
        "Komutatif"
      ],
      "answer": 2,
      "why": "Empat aksioma grup adalah ketertutupan, asosiativitas, identitas, dan invers. Komutativitas merupakan syarat tambahan bagi grup abelian. Permutasi dan matriks invertibel menyediakan contoh grup nonabelian.",
      "feedback": [
        "Asosiativitas adalah aksioma kedua grup.",
        "Invers setiap elemen adalah aksioma keempat grup.",
        "Empat aksioma grup adalah ketertutupan, asosiativitas, identitas, dan invers. Komutativitas merupakan syarat tambahan bagi grup abelian. Permutasi dan matriks invertibel menyediakan contoh grup nonabelian."
      ]
    },
    "prerequisites": [
      "Memahami operasi biner dan ketertutupan dari Bab 1.",
      "Dapat membedakan pernyataan untuk semua elemen dan satu contoh tandingan."
    ],
    "worked": [
      {
        "title": "Memeriksa empat aksioma untuk operasi baru",
        "steps": [
          "Pada \\(\\mathbb Z\\), tetapkan \\(a*b=a+b+1\\). Himpunannya tak kosong dan aturan memberi tepat satu hasil.",
          "Ketertutupan: \\(a+b+1\\in\\mathbb Z\\) untuk setiap \\(a,b\\in\\mathbb Z\\).",
          "Asosiativitas: \\((a*b)*c=a+b+c+2=a*(b*c)\\). Kedua pengelompokan dihitung, bukan diasumsikan dari simbol bintang.",
          "Identitas: dari \\(a*e=a\\), diperoleh \\(e=-1\\). Periksa kedua sisi: \\(a*(-1)=a\\) dan \\((-1)*a=a\\).",
          "Invers: \\(a*b=-1\\) memberi \\(b=-a-2\\in\\mathbb Z\\). Juga \\(b*a=-1\\). Maka setiap elemen mempunyai invers dua sisi, sehingga sistem ini grup. Identitasnya bukan \\(0\\)."
        ]
      },
      {
        "title": "Tiga kegagalan yang berbeda",
        "steps": [
          "Pada \\(\\{0,1\\}\\) dengan penjumlahan biasa, ketertutupan gagal karena \\(1+1=2\\). Karena itu pasangan tersebut bukan grup.",
          "Pada \\(\\mathbb Z\\) dengan pengurangan, ketertutupan terpenuhi tetapi asosiativitas gagal: \\((3-2)-1=0\\), sedangkan \\(3-(2-1)=2\\).",
          "Pada \\(\\mathbb N_0\\) dengan penjumlahan, ketertutupan, asosiativitas, dan identitas \\(0\\) terpenuhi. Namun \\(1\\) tidak mempunyai invers aditif di \\(\\mathbb N_0\\). Satu kegagalan sudah cukup untuk menyimpulkan bukan grup."
        ]
      }
    ],
    "proof": {
      "title": "Bukti terpandu: identitas dan invers unik",
      "steps": [
        "Jika \\(e\\) dan \\(f\\) sama-sama identitas dua sisi, maka \\(ef=f\\) karena \\(e\\) identitas, dan \\(ef=e\\) karena \\(f\\) identitas. Jadi \\(e=f\\).",
        "Sekarang andaikan \\(b\\) dan \\(c\\) merupakan invers dua sisi dari \\(a\\). Tujuannya menunjukkan \\(b=c\\), bukan sekadar menunjukkan keduanya memenuhi persamaan yang sama.",
        "Hitung \\(b=be=b(ac)=(ba)c=ec=c\\). Langkah pengelompokan memakai asosiativitas; dua langkah berikutnya memakai \\(ac=e\\) dan \\(ba=e\\).",
        "Jadi invers setiap elemen unik. Pembuktian tidak menukar urutan faktor dan tetap berlaku pada grup nonabelian. Keunikan adalah hasil turunan, bukan aksioma kelima."
      ]
    },
    "exercises": [
      {
        "q": "Periksa empat aksioma untuk \\((2\\mathbb Z,+)\\).",
        "hint": "Tuliskan elemen sebagai \\(2m\\) dan \\(2n\\).",
        "answer": "Tidak kosong karena memuat \\(0\\). Tertutup sebab \\(2m+2n=2(m+n)\\); asosiativitas diwarisi dari bilangan bulat; identitas \\(0\\in2\\mathbb Z\\); invers \\(-2m=2(-m)\\) tetap di himpunan.",
        "rubric": "Prasyarat tak kosong dan keempat aksioma disebut dengan alasan."
      },
      {
        "q": "Apakah \\((\\mathbb R\\setminus\\{0\\},\\cdot)\\) grup? Apakah hasilnya berubah jika \\(0\\) dimasukkan?",
        "hint": "Bedakan identitas perkalian dan elemen nol.",
        "answer": "Tanpa nol: hasil kali tetap tak nol, perkalian asosiatif, identitas \\(1\\), invers \\(1/a\\) untuk setiap \\(a\\ne0\\). Dengan nol: syarat invers gagal karena \\(0b\\ne1\\) untuk semua \\(b\\).",
        "rubric": "Keempat syarat untuk sistem pertama dan saksi kegagalan sistem kedua."
      },
      {
        "q": "Pada \\(\\mathbb Z\\), operasi \\(a*b=a+b-3\\). Tentukan identitas dan invers \\(a\\), lalu periksa asosiativitas.",
        "hint": "Identitas harus memenuhi \\(a*e=a\\). Invers harus menghasilkan identitas tersebut.",
        "answer": "Identitas \\(3\\). Invers \\(a\\) adalah \\(6-a\\), sebab \\(a*(6-a)=3=(6-a)*a\\). Kedua pengelompokan memberi \\(a+b+c-6\\). Ketertutupan juga berlaku, sehingga ini grup.",
        "rubric": "Hasil operasi dengan invers sama dengan 3, bukan 0."
      },
      {
        "q": "Buktikan hukum pembatalan kiri: dalam grup, \\(ab=ac\\) mengakibatkan \\(b=c\\).",
        "hint": "Kalikan di kiri dengan \\(a^{-1}\\); tuliskan alasan pengelompokan.",
        "answer": "Dari \\(ab=ac\\), diperoleh \\(a^{-1}(ab)=a^{-1}(ac)\\). Asosiativitas memberi \\((a^{-1}a)b=(a^{-1}a)c\\), sehingga \\(eb=ec\\) dan \\(b=c\\).",
        "rubric": "Mengalikan pada sisi yang sama dan memakai asosiativitas serta identitas."
      },
      {
        "q": "Buktikan \\((ab)^{-1}=b^{-1}a^{-1}\\). Mengapa urutan faktor dibalik?",
        "hint": "Periksa kandidat pada kedua sisi hasil kali ab.",
        "answer": "\\((ab)(b^{-1}a^{-1})=a(bb^{-1})a^{-1}=e\\) dan \\((b^{-1}a^{-1})(ab)=b^{-1}(a^{-1}a)b=e\\). Keunikan invers memberi kesimpulan. Urutan dibalik agar faktor yang saling invers berdampingan; tidak diasumsikan komutatif.",
        "rubric": "Kedua hasil kali diperiksa; tidak menukar faktor tanpa alasan."
      }
    ],
    "reflection": "Untuk operasi a*b=a+b+1 pada bilangan bulat, jelaskan mengapa invers a bukan -a. Kaitkan jawaban dengan identitas operasi tersebut.",
    "pdfPage": 63,
    "pdfPrinted": 43,
    "goalRefs": [
      [
        1,
        2,
        3,
        "E"
      ],
      [
        "E"
      ]
    ],
    "assessment": {
      "q": "Pada Z, tentukan apakah \\(a*b=a+b+2\\) membentuk grup abelian. Periksa empat aksioma secara berurutan.",
      "answer": "Tertutup di Z. Kedua pengelompokan memberi a+b+c+4. Identitas −2 dan invers a adalah −a−4, keduanya diperiksa pada dua sisi. Komutatif karena penjumlahan bilangan bulat komutatif.",
      "rubric": [
        "Ketertutupan, asosiativitas, identitas, invers harus muncul.",
        "Komutativitas adalah pemeriksaan tambahan."
      ]
    }
  },
  {
    "id": 3,
    "title": "Subgrup",
    "part": "Bagian dari struktur",
    "time": 35,
    "lead": "Bagian sebuah grup menjadi subgrup jika aturan grup tetap berlaku di dalamnya.",
    "goals": [
      "Menggunakan kriteria subgrup tak kosong",
      "Menghasilkan subgrup dari satu elemen"
    ],
    "sections": [
      [
        "Subhimpunan dengan operasi yang sama",
        "\\(H \\subseteq  G\\) disebut subgrup jika \\(H\\) sendiri merupakan grup dengan operasi dari \\(G\\). Kita tidak bebas mengganti operasi. Asosiativitas diwarisi dari \\(G\\), tetapi identitas, ketertutupan, dan invers harus tetap tinggal di \\(H\\)."
      ],
      [
        "Kriteria satu langkah",
        "Untuk subhimpunan tak kosong \\(H\\) dari grup \\(G\\), cukup memeriksa bahwa \\(ab^{-1} \\in  H\\) untuk semua \\(a,b \\in  H\\). Mengambil \\(a = b\\) menghasilkan identitas; memakai identitas memberi invers; gabungan langkah itu memberi ketertutupan."
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
    "prompt": "Kasus baru: di grup aditif \\(\\mathbb Z_{15}\\), prediksi anggota subgrup yang dibangkitkan \\([6]\\). Tuliskan jejak kelipatan hingga kembali ke nol sebelum membuka laboratorium.",
    "quiz": {
      "q": "Untuk \\(H \\subseteq  G\\), kriteria \\(ab^{-1} \\in  H\\) cukup jika…",
      "choices": [
        "\\(H\\) tak kosong",
        "\\(H\\) mempunyai tepat dua anggota",
        "\\(G\\) harus komutatif"
      ],
      "answer": 0,
      "why": "Tak kosong diperlukan untuk memulai argumen dan menghasilkan identitas. Kriteria berlaku juga pada grup nonabelian.",
      "feedback": [
        "Tak kosong diperlukan untuk memulai argumen dan menghasilkan identitas. Kriteria berlaku juga pada grup nonabelian.",
        "Banyak anggota dua bukan syarat kriteria satu langkah.",
        "Kriteria subgrup juga berlaku pada grup nonabelian."
      ]
    },
    "prerequisites": [
      "Memahami empat aksioma grup dan invers dua sisi.",
      "Dapat menggunakan notasi subhimpunan serta elemen sebarang."
    ],
    "worked": [
      {
        "title": "Subgrup aditif dengan kriteria selisih",
        "steps": [
          "Ambil \\(H=3\\mathbb Z\\subseteq\\mathbb Z\\). Tidak kosong karena \\(0=3\\cdot0\\in H\\).",
          "Ambil sembarang \\(a,b\\in H\\). Ada \\(m,n\\in\\mathbb Z\\) sehingga \\(a=3m\\), \\(b=3n\\).",
          "Maka \\(a-b=3(m-n)\\in H\\). Kriteria selisih memberi \\(H\\le(\\mathbb Z,+)\\). Menguji hanya \\(3-6\\) belum cukup; bentuk \\(3m-3n\\) menjangkau semua pasangan."
        ]
      },
      {
        "title": "Contoh subgrup di grup nonabelian",
        "steps": [
          "Dalam \\(S_3\\), ambil \\(H=\\{e,(12)\\}\\). Notasi \\((12)\\) menukar 1 dan 2 serta membiarkan 3 tetap. Melakukan pertukaran dua kali mengembalikan setiap titik, sehingga \\((12)^2=e\\).",
          "Tidak kosong, dan semua produk tetap di \\(H\\): \\(ee=e\\), \\(e(12)=(12)e=(12)\\), \\((12)(12)=e\\).",
          "Asosiativitas diwarisi dari komposisi di \\(S_3\\). Identitas \\(e\\) ada di \\(H\\); invers \\(e\\) adalah \\(e\\), invers \\((12)\\) adalah \\((12)\\). Maka \\(H\\) subgrup. Kita belum memerlukan normalitas atau koset."
        ]
      }
    ],
    "proof": {
      "title": "Bukti terpandu: kriteria subgrup satu langkah",
      "steps": [
        "Asumsi: \\(G\\) grup, \\(\\varnothing\\ne H\\subseteq G\\), dan \\(ab^{-1}\\in H\\) untuk semua \\(a,b\\in H\\). Tujuan: \\(H\\) grup dengan operasi yang dibatasi dari \\(G\\).",
        "Karena \\(H\\) tak kosong, pilih \\(h\\in H\\). Gunakan syarat pada \\(a=b=h\\): \\(hh^{-1}=e\\in H\\). Ini alasan syarat tak kosong diperlukan.",
        "Untuk sembarang \\(b\\in H\\), gunakan \\(e,b\\in H\\): \\(eb^{-1}=b^{-1}\\in H\\). Jadi setiap invers tetap di \\(H\\).",
        "Untuk sembarang \\(a,b\\in H\\), kita sudah tahu \\(b^{-1}\\in H\\). Terapkan syarat pada \\(a,b^{-1}\\): \\(a(b^{-1})^{-1}=ab\\in H\\). Jadi ketertutupan terpenuhi.",
        "Asosiativitas diwarisi dari \\(G\\). Identitas \\(e\\) dan invers yang ditemukan memenuhi persamaan dua sisi karena operasinya sama. Keempat aksioma terpenuhi, jadi \\(H\\le G\\).",
        "Sebaliknya, jika \\(H\\le G\\), maka \\(H\\) tak kosong; untuk \\(a,b\\in H\\), invers \\(b^{-1}\\) dan hasil kali \\(ab^{-1}\\) berada di \\(H\\). Maka kriteria merupakan kesetaraan, bukan hanya satu arah."
      ]
    },
    "exercises": [
      {
        "q": "Buktikan \\(5\\mathbb Z\\le(\\mathbb Z,+)\\) menggunakan kriteria satu langkah.",
        "hint": "Mulai dengan ketak-kosongan, kemudian ambil dua kelipatan sebarang.",
        "answer": "\\(0\\in5\\mathbb Z\\). Jika \\(a=5m,b=5n\\), maka \\(a-b=5(m-n)\\in5\\mathbb Z\\). Jadi kriteria selisih terpenuhi.",
        "rubric": "Tidak cukup menguji satu pasangan kelipatan."
      },
      {
        "q": "Apakah \\(H=\\{0,2,4\\}\\) subgrup dari grup aditif \\(\\mathbb Z_6\\)?",
        "hint": "Hitung modulo 6, bukan penjumlahan bilangan bulat tanpa reduksi.",
        "answer": "Ya. Tidak kosong; semua elemen adalah kelipatan 2 modulo 6 dan selisih dua kelipatan 2 tetap demikian. Identitas 0, invers 0 adalah 0, invers 2 adalah 4, invers 4 adalah 2.",
        "rubric": "Sebutkan operasi modulo 6 dan alasan untuk semua pasangan."
      },
      {
        "q": "Himpunan bilangan ganjil apakah subgrup dari \\((\\mathbb Z,+)\\)?",
        "hint": "Cari kegagalan identitas atau ketertutupan.",
        "answer": "Bukan. Identitas 0 tidak ganjil; juga \\(1+1=2\\) bukan ganjil. Salah satu alasan sudah cukup.",
        "rubric": "Ada kegagalan syarat grup pada operasi yang dimaksud."
      },
      {
        "q": "Mengapa syarat \\(ab^{-1}\\in H\\) untuk semua \\(a,b\\in H\\) tidak cukup jika \\(H\\) boleh kosong?",
        "hint": "Apa arti pernyataan untuk semua pasangan jika tidak ada pasangan?",
        "answer": "Pada himpunan kosong tidak ada pasangan yang membantah syarat, sehingga pernyataan universal itu benar secara vakum. Namun himpunan kosong tidak memuat identitas dan bukan grup.",
        "rubric": "Bedakan kebenaran vakum dan keberadaan elemen identitas."
      },
      {
        "q": "Buktikan jika \\(H,K\\le G\\), maka \\(H\\cap K\\le G\\). Apakah gabungan selalu subgrup?",
        "hint": "Identitas ada di irisan. Untuk gabungan, coba \\(2\\mathbb Z\\) dan \\(3\\mathbb Z\\).",
        "answer": "\\(e\\in H\\cap K\\). Jika \\(a,b\\in H\\cap K\\), maka \\(ab^{-1}\\) ada di kedua subgrup, jadi di irisan. Untuk gabungan tidak selalu: \\(2,3\\in2\\mathbb Z\\cup3\\mathbb Z\\), tetapi \\(2+3=5\\) tidak berada di gabungan.",
        "rubric": "Bukti irisan memakai elemen sebarang; bantahan gabungan memakai satu saksi sah."
      }
    ],
    "reflection": "Dalam bukti kriteria subgrup, jelaskan urutan memperoleh identitas, invers, lalu ketertutupan. Mengapa tidak boleh memakai ketertutupan sebelum membuktikannya?",
    "pdfPage": 87,
    "pdfPrinted": 67,
    "goalRefs": [
      [
        1,
        2,
        4,
        5
      ],
      [
        2,
        "E"
      ]
    ],
    "assessment": {
      "q": "Di grup aditif \\(\\mathbb Z_{12}\\), periksa \\(H=\\{0,3,6,9\\}\\) dengan kriteria selisih. Tentukan satu generator H dan jelaskan mengapa syarat tak kosong tidak boleh dihapus.",
      "answer": "H memuat 0; selisih dua kelipatan 3 tetap kelipatan 3 modulo 12. Generatornya [3] atau [9]. Syarat pada pasangan dari himpunan kosong benar secara vakum, tetapi himpunan kosong bukan grup.",
      "rubric": [
        "Gunakan argumen untuk semua pasangan.",
        "Bedakan kebenaran universal dengan keberadaan identitas."
      ]
    }
  },
  {
    "id": 4,
    "title": "Grup siklik dan orde",
    "part": "Bagian dari struktur",
    "time": 40,
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
      ],
      [
        "Bekal latihan: operasi pada pasangan",
        "Pada \\(\\mathbb Z\\times\\mathbb Z_2\\), anggotanya pasangan \\((n,[a]_2)\\). Operasi penjumlahan komponen didefinisikan oleh \\((n,[a]_2)+(m,[b]_2)=(n+m,[a+b]_2)\\). Identitasnya \\((0,[0]_2)\\), inversnya \\((-n,[-a]_2)\\), ketertutupan dan asosiativitas berlaku pada masing-masing komponen. Jadi ini grup. Grup empat Klein dapat didefinisikan sebagai \\(\\mathbb Z_2\\times\\mathbb Z_2\\) dengan operasi yang sama; tiga elemen nonidentitasnya berorde 2. Grup \\(U(8)\\) memberi realisasi lain dari struktur ini, melalui pasangan generator \\([3]\\) dan \\([5]\\)."
      ],
      [
        "Mengapa faktor relatif prima boleh dicoret?",
        "Langkah rumus orde memakai fakta berikut: jika \\(\\gcd(u,v)=1\\) dan \\(u\\mid kv\\), maka \\(u\\mid k\\). Identitas Bézout memberi bilangan bulat p,q dengan \\(pu+qv=1\\). Kalikan dengan k: \\(k=pku+qkv\\). Kedua suku di kanan habis dibagi u, sehingga k juga habis dibagi u. Fakta ini menjelaskan langkah relatif prima dalam bukti, bukan pencoretan sembarang."
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
      "why": "\\(\\frac{12}{\\gcd(12,8)} = 12/4 = 3\\). Tiga kali \\(8\\) adalah \\(24\\), yang sama dengan \\(0\\) modulo \\(12\\).",
      "feedback": [
        "Wakil 8 bukan ukuran orde kelas [8].",
        "\\(\\frac{12}{\\gcd(12,8)} = 12/4 = 3\\). Tiga kali \\(8\\) adalah \\(24\\), yang sama dengan \\(0\\) modulo \\(12\\).",
        "Orde elemen tidak harus sama dengan orde seluruh grup."
      ]
    },
    "prerequisites": [
      "Memahami subgrup yang dibangkitkan dan notasi pangkat.",
      "Dapat menghitung FPB; untuk bukti rumus orde, pahami bahwa jika dua bilangan relatif prima dan salah satunya membagi hasil kali, ia membagi faktor lainnya."
    ],
    "worked": [
      {
        "title": "Menghitung orde dan seluruh generator",
        "steps": [
          "Dalam grup aditif \\(\\mathbb Z_{18}\\), jejak kelipatan 6 ialah \\(0,6,12,0\\). Jadi \\(\\langle[6]\\rangle=\\{[0],[6],[12]\\}\\) dan orde [6] adalah 3.",
          "Untuk [5], \\(\\gcd(18,5)=1\\), sehingga orde [5] adalah 18. Semua generator \\(\\mathbb Z_{18}\\) adalah kelas dari \\(1,5,7,11,13,17\\), yaitu wakil yang relatif prima dengan 18.",
          "Generator subgrup kecil tidak harus generator grup induk. Kelas [6] membangkitkan subgrup berorde 3, tetapi tidak membangkitkan seluruh \\(\\mathbb Z_{18}\\)."
        ]
      },
      {
        "title": "Abelian tidak selalu siklik",
        "steps": [
          "Unit modulo 8 adalah \\(U(8)=\\{[1],[3],[5],[7]\\}\\) dengan perkalian. Perkalian kelas residu komutatif, sehingga grup ini abelian.",
          "Kuadrat setiap elemen nonidentitas adalah [1]: \\(3^2\\equiv5^2\\equiv7^2\\equiv1\\pmod8\\). Jadi setiap elemen nonidentitas berorde 2.",
          "Jika grup berorde 4 ini siklik, generatornya harus berorde 4. Tidak ada elemen demikian. Maka grup abelian ini tidak siklik, meskipun semua grup siklik memang abelian."
        ]
      }
    ],
    "proof": {
      "title": "Bukti terpandu: rumus orde di grup aditif \\(\\mathbb Z_{n}\\)",
      "steps": [
        "Ambil \\(n\\ge1\\) dan kelas [a]. Orde [a] adalah bilangan positif terkecil k dengan \\(ka\\equiv0\\pmod n\\), atau setara \\(n\\mid ka\\).",
        "Tuliskan \\(d=\\gcd(n,a)\\), \\(n=dn'\\), \\(a=da'\\), dengan \\(\\gcd(n',a')=1\\). Maka \\(n\\mid ka\\) setara dengan \\(n'\\mid ka'\\).",
        "Karena \\(n'\\) dan \\(a'\\) relatif prima, \\(n'\\mid ka'\\) mengakibatkan \\(n'\\mid k\\). Sebaliknya jika \\(n'\\) membagi k, maka n membagi ka.",
        "Jadi k positif terkecil ialah \\(n'\\), sehingga \\(\\operatorname{ord}([a])=n/d\\). Khusus a=0, d=n dan ordenya 1.",
        "Kelas [a] membangkitkan seluruh \\(\\mathbb Z_{n}\\) tepat ketika ordenya n, yaitu tepat ketika \\(\\gcd(n,a)=1\\). Ini orde untuk penjumlahan, bukan untuk perkalian."
      ]
    },
    "exercises": [
      {
        "q": "Tentukan orde [10] dan subgrup yang dibangkitkannya di \\(\\mathbb Z_{15}\\).",
        "hint": "Hitung FPB atau daftar kelipatan sampai kembali ke nol.",
        "answer": "Ordenya \\(15/\\gcd(15,10)=3\\). Subgrupnya \\(\\{[0],[10],[5]\\}\\).",
        "rubric": "Operasi aditif dan pengulangan pertama ke nol benar."
      },
      {
        "q": "Daftarkan semua generator \\(\\mathbb Z_{10}\\).",
        "hint": "Cari wakil yang relatif prima dengan 10.",
        "answer": "Kelas [1], [3], [7], [9]. Masing-masing berorde 10.",
        "rubric": "Daftar lengkap, tanpa kelas yang memiliki FPB lebih dari 1."
      },
      {
        "q": "Buktikan setiap grup siklik abelian.",
        "hint": "Tulis dua elemen sebagai \\(a^i,a^j\\).",
        "answer": "Jika \\(G=\\langle a\\rangle\\), setiap \\(x,y\\) berbentuk \\(a^i,a^j\\) untuk bilangan bulat i,j. Maka \\(xy=a^{i+j}=a^{j+i}=yx\\).",
        "rubric": "Dua elemen sebarang, bukan hanya generator dan identitas."
      },
      {
        "q": "Dalam grup siklik berorde 12 dengan generator a, tentukan orde \\(a^4\\) dan \\(a^8\\).",
        "hint": "Eksponen dihitung modulo 12.",
        "answer": "Keduanya berorde 3: \\(12/\\gcd(12,4)=3\\) dan \\(12/\\gcd(12,8)=3\\). Keduanya membangkitkan subgrup yang sama, \\(\\{e,a^4,a^8\\}\\).",
        "rubric": "Jangan menyamakan orde elemen dengan eksponennya."
      },
      {
        "q": "Berikan grup tak hingga yang memiliki elemen berorde hingga selain identitas.",
        "hint": "Pertimbangkan pasangan bilangan bulat dan kelas modulo 2.",
        "answer": "Pada \\(\\mathbb Z\\times\\mathbb Z_2\\) dengan penjumlahan komponen, elemen \\((0,[1])\\) berorde 2. Grup tak hingga karena pasangan \\((n,[0])\\) berbeda untuk setiap bilangan bulat n.",
        "rubric": "Operasi serta alasan kedua sifat dijelaskan."
      }
    ],
    "reflection": "Bandingkan orde grup, orde elemen, dan ukuran subgrup yang dibangkitkan. Berikan satu contoh ketiganya tidak semuanya sama.",
    "pdfPage": 111,
    "pdfPrinted": 91,
    "goalRefs": [
      [
        1,
        4,
        5
      ],
      [
        1,
        2,
        4,
        "E"
      ]
    ],
    "assessment": {
      "q": "Dalam grup aditif \\(\\mathbb Z_{20}\\), tentukan orde [6], subgrup yang dibangkitkannya, dan apakah [6] membangkitkan seluruh grup.",
      "answer": "Orde \\(20/\\gcd(20,6)=10\\). Subgrupnya seluruh kelas genap, sebanyak 10 anggota. [6] bukan generator \\(\\mathbb Z_{20}\\) yang mempunyai 20 anggota.",
      "rubric": [
        "Hitung FPB dan orde.",
        "Bedakan generator subgrup dengan generator seluruh grup."
      ]
    }
  },
  {
    "id": 5,
    "title": "Grup permutasi",
    "part": "Melihat grup bekerja",
    "time": 40,
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
      "why": "Buku dan web ini memakai \\(\\sigma \\tau  = \\sigma  \\circ  \\tau\\). Faktor kanan bekerja lebih dahulu.",
      "feedback": [
        "Dalam komposisi στ, faktor kanan τ bekerja dahulu.",
        "Buku dan web ini memakai \\(\\sigma \\tau  = \\sigma  \\circ  \\tau\\). Faktor kanan bekerja lebih dahulu.",
        "Urutan tidak bebas; dua urutan dapat memberi hasil berbeda."
      ]
    },
    "prerequisites": [
      "Memahami bijeksi, komposisi, invers, dan orde elemen.",
      "Mengingat bahwa faktor kanan bekerja dahulu dalam produk permutasi."
    ],
    "worked": [
      {
        "title": "Komposisi dengan jejak setiap titik",
        "steps": [
          "Dalam \\(S_{3}\\), ambil \\(\\sigma=(12)\\), \\(\\tau=(23)\\). Untuk \\(\\sigma\\tau\\), titik 1 melewati \\(1\\to1\\to2\\); titik 2 melewati \\(2\\to3\\to3\\); titik 3 melewati \\(3\\to2\\to1\\).",
          "Jadi \\(\\sigma\\tau=(123)\\). Pada urutan sebaliknya, \\(\\tau\\sigma=(132)\\). Kedua hasil berbeda.",
          "Satu pasangan ini cukup membuktikan \\(S_{3}\\) nonabelian. Pernyataan itu tidak berarti tidak ada dua permutasi yang komutatif: setiap permutasi tetap komutatif dengan identitas."
        ]
      },
      {
        "title": "Dari tabel ke siklus lepas, invers, dan orde",
        "steps": [
          "Ambil permutasi dengan \\(1\\mapsto3,3\\mapsto4,4\\mapsto1\\), \\(2\\mapsto5,5\\mapsto2\\), dan \\(6\\mapsto6\\).",
          "Mulai dari 1 dan ikuti sampai kembali: didapat (134). Titik terkecil yang belum dipakai adalah 2, memberi (25); 6 tetap. Jadi \\(\\sigma=(134)(25)\\).",
          "Invers membalik setiap siklus: \\(\\sigma^{-1}=(143)(25)\\). Siklus lepas boleh ditukar karena bekerja pada titik berbeda.",
          "Ordenya \\(\\operatorname{KPK}(3,2)=6\\). Pangkat harus mengembalikan kedua siklus sekaligus; panjang siklus tidak dijumlahkan."
        ]
      }
    ],
    "proof": {
      "title": "Bukti terpandu: orde produk siklus lepas",
      "steps": [
        "Misalkan \\(\\sigma=c_1\\cdots c_t\\), dengan siklus-siklus lepas berpanjang \\(m_1,\\ldots,m_t\\). Siklus lepas saling komutatif, sebab masing-masing menetapkan titik yang dipindahkan siklus lainnya.",
        "Karena itu \\(\\sigma^k=c_1^k\\cdots c_t^k\\). Pada titik-titik siklus berpanjang \\(m_i\\), semua titik kembali tepat ketika \\(m_i\\) membagi k.",
        "Maka \\(\\sigma^k=e\\) tepat ketika setiap \\(m_i\\) membagi k. Kita harus mencari satu k yang bekerja untuk seluruh siklus sekaligus.",
        "Bilangan positif terkecil yang memenuhi syarat tersebut ialah KPK panjang siklus. Jadi itulah orde permutasi. Identitas berorde 1; titik tetap tidak mengubah KPK."
      ]
    },
    "exercises": [
      {
        "q": "Hitung \\((123)(12)\\) dari kanan ke kiri.",
        "hint": "Lacak titik 1,2,3 secara terpisah.",
        "answer": "Titik 1 menuju 3, titik 3 menuju 1, dan titik 2 tetap. Hasilnya (13).",
        "rubric": "Jejak memakai urutan faktor yang benar."
      },
      {
        "q": "Tentukan invers dan orde \\((1234)(56)\\).",
        "hint": "Kedua siklus lepas; panjangnya 4 dan 2.",
        "answer": "Inversnya \\((1432)(56)\\); orde \\(\\operatorname{KPK}(4,2)=4\\).",
        "rubric": "Membalik siklus tanpa menjumlahkan panjang."
      },
      {
        "q": "Apakah \\((12)(34)=(34)(12)\\)? Apakah ini membuktikan \\(S_{4}\\) abelian?",
        "hint": "Siklus lepas merupakan satu kasus khusus.",
        "answer": "Kedua produk sama karena siklus lepas. Ini tidak membuktikan \\(S_{4}\\) abelian; pasangan (12),(23) dalam \\(S_{4}\\) tetap tidak komutatif.",
        "rubric": "Tidak menggeneralisasi dari satu pasangan."
      },
      {
        "q": "Berikan permutasi di \\(S_{5}\\) berorde 6.",
        "hint": "Gabungkan siklus lepas berpanjang 3 dan 2.",
        "answer": "\\((123)(45)\\) berorde KPK(3,2)=6. Masing-masing siklus memakai titik berbeda.",
        "rubric": "Permutasi memakai paling banyak lima titik dan ordenya benar."
      },
      {
        "q": "Buktikan \\((\\sigma\\tau)^{-1}=\\tau^{-1}\\sigma^{-1}\\) tanpa mengasumsikan komutativitas.",
        "hint": "Periksa komposisi kandidat invers pada kedua sisi.",
        "answer": "\\((\\sigma\\tau)(\\tau^{-1}\\sigma^{-1})=e\\) dan \\((\\tau^{-1}\\sigma^{-1})(\\sigma\\tau)=e\\), dengan asosiativitas dan pembatalan pasangan invers yang berdampingan. Keunikan invers memberi kesimpulan.",
        "rubric": "Tidak menukar faktor; kedua sisi menghasilkan identitas."
      }
    ],
    "reflection": "Tuliskan jejak semua titik pada satu produk permutasi. Jelaskan mengapa hasil untuk satu titik saja belum menentukan seluruh permutasi.",
    "pdfPage": 139,
    "pdfPrinted": 119,
    "goalRefs": [
      [
        1,
        "E"
      ],
      [
        2,
        3,
        5,
        "E"
      ]
    ],
    "assessment": {
      "q": "Hitung \\((124)(23)\\) di \\(S_{4}\\). Tentukan invers serta orde hasilnya dengan jejak setiap titik.",
      "answer": "Jejak memberi 1→2, 2→3, 3→4, 4→1, sehingga hasil (1234). Invers (1432), orde 4.",
      "rubric": [
        "Faktor kanan bekerja dahulu.",
        "Jejak mencakup seluruh empat titik."
      ]
    }
  },
  {
    "id": 6,
    "title": "Simetri dan grup dihedral",
    "part": "Melihat grup bekerja",
    "time": 40,
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
    "prompt": "Dalam kontrol \\(D_{4}\\), gunakan label \\(r,s,sr\\) dan \\(sr^3\\). Label terakhir sama dengan \\(rs\\), karena \\(rs=sr^{-1}=sr^3\\). Prediksi hasil dua urutan \\(r\\circ s\\) dan \\(s\\circ r\\), lalu lacak tiap titik.",
    "quiz": {
      "q": "Dengan konvensi buku ini, banyak elemen \\(D_{5}\\) adalah…",
      "choices": [
        "\\(5\\)",
        "\\(10\\)",
        "\\(25\\)"
      ],
      "answer": 1,
      "why": "\\(D_{n}\\) memiliki \\(n\\) rotasi dan \\(n\\) refleksi, sehingga \\(|D_{5}| = 2 \\times  5 = 10\\).",
      "feedback": [
        "\\(D_{n}\\) berarti grup berorde 2n pada konvensi buku ini.",
        "\\(D_{n}\\) memiliki \\(n\\) rotasi dan \\(n\\) refleksi, sehingga \\(|D_{5}| = 2 \\times  5 = 10\\).",
        "Jumlah simetri bukan kuadrat banyak sisi."
      ]
    },
    "prerequisites": [
      "Dapat menghitung permutasi dan membedakan posisi tetap dengan label yang berpindah.",
      "Memahami pangkat, invers, dan konvensi \\(D_{n}\\) berorde 2n."
    ],
    "worked": [
      {
        "title": "Relasi dihedral sebagai perhitungan titik",
        "steps": [
          "Pada persegi berlabel kanan-atas-kiri-bawah, ambil \\(r=(1234)\\), \\(s=(24)\\). Pada srs, jalankan s, lalu r, lalu s.",
          "Titik 1 menuju \\(1\\to1\\to2\\to4\\); titik 2 menuju \\(2\\to4\\to1\\to1\\); titik 3 menuju \\(3\\to3\\to4\\to2\\); titik 4 menuju \\(4\\to2\\to3\\to3\\).",
          "Hasilnya \\((1432)=r^{-1}\\). Refleksi membalik arah rotasi. Jadi \\(srs=r^{-1}\\) merupakan hubungan geometris yang dapat dilacak, bukan aturan hafalan tanpa alasan."
        ]
      },
      {
        "title": "Mengalikan bentuk normal",
        "steps": [
          "Gunakan \\(r^4=e\\), \\(s^2=e\\), dan \\(r^is=sr^{-i}\\). Dalam \\(D_{4}\\), hitung \\((sr^2)(sr)\\).",
          "\\((sr^2)(sr)=s(r^2s)r=s(sr^{-2})r=r^{-1}=r^3\\). Hasil kali dua refleksi dapat berupa rotasi.",
          "Sebaliknya \\((sr)(sr^2)=r\\). Jadi urutan memengaruhi hasil. Pangkat r direduksi modulo 4 setelah penjumlahan atau pengurangan eksponen."
        ]
      }
    ],
    "proof": {
      "title": "Bukti terpandu: aturan produk dihedral",
      "steps": [
        "Dari \\(srs=r^{-1}\\), mengalikan di kiri dengan s memberi \\(rs=sr^{-1}\\). Mengulang hubungan ini, serta memakai invers untuk eksponen negatif, memberi \\(r^is=sr^{-i}\\) untuk semua bilangan bulat i.",
        "Produk dua rotasi ialah \\(r^ir^j=r^{i+j}\\). Produk rotasi dengan refleksi berbentuk \\(r^i(sr^j)=sr^{j-i}\\).",
        "Produk refleksi dengan rotasi ialah \\((sr^i)r^j=sr^{i+j}\\). Produk dua refleksi ialah \\((sr^i)(sr^j)=r^{j-i}\\).",
        "Semua eksponen dihitung modulo n dalam \\(D_{n}\\). Bentuk hasil selalu rotasi atau refleksi, sehingga aturan ini juga memperlihatkan ketertutupan bentuk normal.",
        "Setiap refleksi \\(sr^i\\) berkuadrat e menurut rumus terakhir, dan bukan identitas karena membalik orientasi. Maka ordenya 2. Rotasi \\(r^i\\) dapat mempunyai orde lain."
      ]
    },
    "exercises": [
      {
        "q": "Hitung \\(r^3(sr)\\) dalam \\(D_{4}\\).",
        "hint": "Gunakan \\(r^i(sr^j)=sr^{j-i}\\).",
        "answer": "\\(r^3(sr)=sr^{-2}=sr^2\\).",
        "rubric": "Reduksi eksponen modulo 4 benar."
      },
      {
        "q": "Hitung \\((sr^2)(sr^4)\\) dalam \\(D_{5}\\).",
        "hint": "Produk dua refleksi menghasilkan rotasi.",
        "answer": "\\((sr^2)(sr^4)=r^{4-2}=r^2\\).",
        "rubric": "Konvensi refleksi sr^i konsisten."
      },
      {
        "q": "Tentukan invers \\(r^k\\) dan \\(sr^k\\) dalam \\(D_{n}\\).",
        "hint": "Gunakan hasil kali dengan kandidat invers.",
        "answer": "Invers rotasi adalah \\(r^{-k}\\); refleksi merupakan invers dirinya sendiri karena \\((sr^k)^2=e\\).",
        "rubric": "Memeriksa hasil kali dengan identitas."
      },
      {
        "q": "Buktikan rotasi-rotasi saja membentuk subgrup \\(D_{n}\\).",
        "hint": "Gunakan kriteria \\(ab^{-1}\\).",
        "answer": "Himpunan rotasi memuat e. Untuk \\(a=r^i,b=r^j\\), diperoleh \\(ab^{-1}=r^{i-j}\\), masih rotasi. Kriteria subgrup berlaku.",
        "rubric": "Ketak-kosongan dan semua pasangan sebarang ditangani."
      },
      {
        "q": "Apakah semua elemen \\(D_{4}\\) berorde 2 karena semua refleksinya berorde 2?",
        "hint": "Periksa rotasi seperempat putaran.",
        "answer": "Tidak. r berorde 4, \\(r^2\\) berorde 2, e berorde 1; semua refleksi berorde 2. Kesimpulan tentang refleksi tidak mencakup semua elemen.",
        "rubric": "Memberikan saksi yang membantah klaim universal."
      }
    ],
    "reflection": "Jelaskan aturan hasil kali dua refleksi dari relasi \\(srs=r^{-1}\\). Bandingkan hasil ketika urutannya dibalik.",
    "pdfPage": 167,
    "pdfPrinted": 147,
    "goalRefs": [
      [
        1,
        2,
        3,
        4,
        "E"
      ],
      [
        "E"
      ]
    ],
    "assessment": {
      "q": "Dalam \\(D_{5}\\), hitung \\((sr)(sr^3)\\), tentukan orde hasilnya, dan banyak elemen \\(D_{5}\\).",
      "answer": "Produk ialah \\(r^{3-1}=r^2\\), berorde 5 karena \\(\\gcd(5,2)=1\\). \\(D_{5}\\) mempunyai 10 elemen.",
      "rubric": [
        "Pakai bentuk sr^i secara konsisten.",
        "Bedakan orde hasil dengan orde grup."
      ]
    }
  },
  {
    "id": 7,
    "title": "Koset dan partisi grup",
    "part": "Mengelompokkan elemen",
    "time": 40,
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
    "prompt": "Kasus baru di \\(S_3\\): ambil \\(H=\\{e,(12)\\}\\), tetapi sekarang \\(a=(23)\\). Prediksi dan hitung \\(aH\\) serta \\(Ha\\) sebelum membuka hasil. Jelaskan apakah kesamaan ukuran sudah cukup untuk menyamakan kedua himpunan.",
    "quiz": {
      "q": "Jika \\(|G| = 24\\) dan \\(|H| = 6\\), indeks \\([G:H]\\) adalah…",
      "choices": [
        "\\(4\\)",
        "\\(6\\)",
        "\\(18\\)"
      ],
      "answer": 0,
      "why": "\\(24 = [G:H] \\times  6\\). Karena itu indeksnya \\(4\\).",
      "feedback": [
        "\\(24 = [G:H] \\times  6\\). Karena itu indeksnya \\(4\\).",
        "Enam adalah ukuran subgrup, bukan jumlah koset.",
        "Indeks diperoleh dengan pembagian ukuran, bukan pengurangan."
      ]
    },
    "prerequisites": [
      "Memahami subgrup, invers, dan arah komposisi permutasi.",
      "Dapat membaca himpunan yang ditulis dengan syarat keanggotaan."
    ],
    "worked": [
      {
        "title": "Koset yang sama meskipun wakil berbeda",
        "steps": [
          "Pada grup aditif \\(\\mathbb Z_{12}\\), ambil \\(H=\\{0,4,8\\}\\). Koset \\(1+H=\\{1,5,9\\}\\).",
          "Wakil 5 memberi \\(5+H=\\{5,9,1\\}\\), yaitu himpunan yang sama. Alasannya \\(5-1=4\\in H\\). Urutan penulisan anggota tidak mengubah himpunan.",
          "Wakil 2 memberi \\(2+H=\\{2,6,10\\}\\), terpisah dari koset pertama. Empat koset mempartisi 12 elemen menjadi bagian berukuran 3, sehingga indeksnya 4.",
          "Koset \\(1+H\\) bukan subgrup: ia tidak memuat identitas 0. Menjumlahkan 1 dan 1 juga menghasilkan 2 di luar koset tersebut."
        ]
      },
      {
        "title": "Koset kiri dan kanan yang berbeda di \\(S_{3}\\)",
        "steps": [
          "Gunakan komposisi dari kanan ke kiri, \\(H=\\{e,(12)\\}\\), dan \\(a=(13)\\).",
          "Koset kiri \\(aH=\\{a, a(12)\\}=\\{(13),(123)\\}\\). Misalnya \\((13)(12)\\) mengirim \\(1\\to2\\to3\\to1\\).",
          "Koset kanan \\(Ha=\\{a,(12)a\\}=\\{(13),(132)\\}\\). Jadi \\(aH\\ne Ha\\), meskipun keduanya mempunyai dua anggota.",
          "Koset-koset kiri sesama kiri tetap sama atau terpisah. Pernyataan ini tidak berarti sebuah koset kiri dan sebuah koset kanan selalu sama atau terpisah: kedua himpunan di atas beririsan di \\((13)\\), tetapi tidak sama."
        ]
      }
    ],
    "proof": {
      "title": "Bukti terpandu: koset mempartisi grup",
      "steps": [
        "Misalkan \\(H\\le G\\). Setiap \\(g\\in G\\) berada di \\(gH\\), sebab \\(e\\in H\\) dan \\(g=ge\\). Jadi gabungan koset kiri mencakup seluruh \\(G\\).",
        "Jika \\(aH\\) dan \\(bH\\) beririsan, pilih \\(x=ah_1=bh_2\\), dengan \\(h_1,h_2\\in H\\). Maka \\(a=bh_2h_1^{-1}\\).",
        "Untuk sembarang \\(ah\\in aH\\), kita mempunyai \\(ah=b(h_2h_1^{-1}h)\\in bH\\), karena \\(H\\) tertutup terhadap invers dan hasil kali. Jadi \\(aH\\subseteq bH\\).",
        "Menukar peran a dan b memberi inklusi sebaliknya. Maka dua koset kiri yang beririsan pasti sama; jika tidak sama, keduanya terpisah.",
        "Peta \\(f:H\\to aH\\), \\(f(h)=ah\\), bijektif: jika \\(ah=ak\\), pembatalan memberi \\(h=k\\); dan setiap anggota \\(aH\\) memang berbentuk \\(ah\\). Jadi semua koset berukuran sama dengan \\(H\\).",
        "Untuk grup hingga, partisi ini memberi \\(|G|=[G:H]|H|\\). Pembuktian partisi dan bijeksi tidak memerlukan grup hingga; rumus hitungan bilangan bulat digunakan ketika grupnya hingga."
      ]
    },
    "exercises": [
      {
        "q": "Daftarkan koset \\(H=\\{0,3,6\\}\\) di \\(\\mathbb Z_9\\) dan indeksnya.",
        "hint": "Berhenti ketika semua elemen sudah tercakup; jangan menghitung ulang koset yang sama.",
        "answer": "Kosetnya \\(\\{0,3,6\\}\\), \\(\\{1,4,7\\}\\), \\(\\{2,5,8\\}\\). Indeks 3; masing-masing koset mempunyai 3 anggota.",
        "rubric": "Daftar tanpa pengulangan dan mencakup seluruh grup."
      },
      {
        "q": "Buktikan \\(aH=bH\\) tepat ketika \\(b^{-1}a\\in H\\).",
        "hint": "Untuk arah pertama gunakan \\(a\\in aH=bH\\). Untuk arah balik tulis \\(a=bh_0\\).",
        "answer": "Jika sama, \\(a=bh_0\\) untuk suatu \\(h_0\\in H\\), sehingga \\(b^{-1}a=h_0\\in H\\). Sebaliknya jika \\(a=bh_0\\), maka \\(aH=bh_0H=bH\\), sebab \\(h_0H=H\\).",
        "rubric": "Kedua arah dibuktikan; faktor invers berada pada sisi yang benar."
      },
      {
        "q": "Pada contoh \\(S_3\\) di atas, hitung \\((12)H\\) dan bandingkan dengan \\(H\\).",
        "hint": "Kalikan \\((12)\\) dengan setiap anggota H.",
        "answer": "\\((12)H=\\{(12),e\\}=H\\). Wakil koset boleh berbeda tanpa menghasilkan koset baru.",
        "rubric": "Menganggap koset sebagai himpunan, bukan wakil tunggal."
      },
      {
        "q": "Buktikan bahwa koset kiri \\(aH\\) memuat e tepat ketika \\(a\\in H\\).",
        "hint": "Dari \\(e=ah\\), selesaikan untuk a.",
        "answer": "Jika \\(e=ah\\), maka \\(a=h^{-1}\\in H\\). Jika \\(a\\in H\\), maka \\(a^{-1}\\in H\\) dan \\(e=aa^{-1}\\in aH\\). Akibatnya satu-satunya koset kiri yang dapat menjadi subgrup ialah H sendiri.",
        "rubric": "Dua arah dan penggunaan invers di H jelas."
      },
      {
        "q": "Buktikan bahwa \\(2\\mathbb Z\\) mempunyai dua koset di \\(\\mathbb Z\\), meskipun kedua himpunannya tak hingga.",
        "hint": "Pisahkan bilangan genap dan ganjil.",
        "answer": "Setiap bilangan berbentuk 2k atau 2k+1. Kosetnya \\(2\\mathbb Z\\) dan \\(1+2\\mathbb Z\\), yang terpisah dan mencakup semua bilangan bulat. Indeksnya 2; tidak diperoleh dengan membagi dua simbol tak hingga.",
        "rubric": "Kelengkapan dan keterpisahan kelas dijelaskan."
      }
    ],
    "reflection": "Jelaskan mengapa kesamaan banyak anggota aH dan Ha tidak membuktikan kesamaan kedua himpunan. Gunakan saksi dari \\(S_{3}\\).",
    "pdfPage": 197,
    "pdfPrinted": 177,
    "goalRefs": [
      [
        1,
        2,
        3,
        4,
        5,
        "E"
      ],
      [
        "E"
      ]
    ],
    "assessment": {
      "q": "Di \\(\\mathbb Z_{16}\\), ambil H=\\(\\langle[4]\\rangle\\). Hitung indeksnya, bandingkan 1+H dengan 5+H, dan jelaskan mengapa daftar koset saja belum merupakan definisi operasi grup kuosien.",
      "answer": "H={0,4,8,12}; indeks 4. Kedua koset sama dengan {1,5,9,13}. Untuk menyebut grup kuosien, operasi koset harus ditetapkan dan sah; syarat normalitas dibahas lengkap pada Bab 10.",
      "rubric": [
        "Bandingkan himpunan, bukan wakilnya.",
        "Pisahkan himpunan koset dari struktur grup."
      ]
    }
  },
  {
    "id": 8,
    "title": "Teorema Lagrange",
    "part": "Mengelompokkan elemen",
    "time": 40,
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
      "why": "Teorema memberi arah dari subgrup atau elemen yang ada menuju pembagi orde grup. Kebalikannya memerlukan hasil lain atau dapat gagal.",
      "feedback": [
        "Lagrange tidak menjamin elemen untuk setiap pembagi.",
        "Keberadaan subgrup untuk setiap pembagi juga bukan kesimpulan Lagrange saja.",
        "Teorema memberi arah dari subgrup atau elemen yang ada menuju pembagi orde grup. Kebalikannya memerlukan hasil lain atau dapat gagal."
      ]
    },
    "prerequisites": [
      "Memahami partisi oleh koset dan bijeksi H ke aH.",
      "Memahami orde elemen dan subgrup siklik."
    ],
    "worked": [
      {
        "title": "Membatasi kemungkinan orde",
        "steps": [
          "Jika G berorde 18 dan H subgrup, \\(|H|\\) harus membagi 18. Calonnya \\(1,2,3,6,9,18\\).",
          "Untuk elemen a, subgrup yang dibangkitkannya mempunyai ukuran sama dengan orde a. Jadi daftar yang sama membatasi orde elemen.",
          "Daftar ini belum menyatakan setiap calon pasti muncul sebagai orde elemen. Bahkan pada grup siklik, adanya semua calon memakai informasi tambahan tentang generator, bukan Lagrange saja."
        ]
      },
      {
        "title": "Grup berorde prima dan kegagalan kebalikan",
        "steps": [
          "Jika \\(|G|=7\\) dan \\(a\\ne e\\), orde a membagi 7 dan bukan 1, sehingga orde a adalah 7. Maka a membangkitkan G.",
          "Sekarang perhatikan U(8), grup unit modulo 8 berorde 4. Semua elemen nonidentitasnya berorde 2.",
          "Bilangan 4 membagi orde grup, tetapi tidak ada elemen berorde 4. Ini membantah kebalikan yang menyatakan setiap pembagi pasti menjadi orde suatu elemen. Ia bukan contoh bantahan untuk keberadaan subgrup berorde 4, karena seluruh U(8) adalah subgrup dirinya sendiri."
        ]
      }
    ],
    "proof": {
      "title": "Bukti terpandu: Teorema Lagrange dan akibatnya",
      "steps": [
        "Asumsi: G grup hingga dan H subgrup. Koset-koset kiri H mempartisi G, jadi setiap anggota G dihitung tepat sekali.",
        "Peta \\(h\\mapsto ah\\) bijektif dari H ke aH. Karena itu setiap koset berisi \\(|H|\\) elemen.",
        "Jika ada m koset, maka \\(|G|=m|H|\\). Dengan \\(m=[G:H]\\), diperoleh \\(|H|\\mid|G|\\). Hipotesis hingga memungkinkan persamaan hitungan bilangan bulat ini.",
        "Ambil \\(H=\\langle a\\rangle\\). Maka \\(\\operatorname{ord}(a)\\mid|G|\\). Jika \\(|G|=q\\operatorname{ord}(a)\\), maka \\(a^{|G|}=(a^{\\operatorname{ord}(a)})^q=e\\).",
        "Jika orde grup p prima, setiap elemen nonidentitas memiliki orde p, sehingga grup siklik. Arah penalarannya dari subgrup atau elemen yang ada menuju pembagi; jangan membaliknya tanpa teorema lain."
      ]
    },
    "exercises": [
      {
        "q": "Misalkan G grup hingga berorde 24 dan H subgrup berorde 6. Berapa indeks H, berapa anggota setiap kosetnya, dan apa kemungkinan orde elemen yang berada dalam H?",
        "hint": "Gunakan partisi koset untuk indeks; terapkan Lagrange pada grup H untuk orde elemennya.",
        "answer": "Indeksnya \\(24/6=4\\). Setiap koset berisi 6 elemen. Untuk \\(a\\in H\\), orde a membagi 6, jadi calonnya \\(1,2,3,6\\); ini bukan jaminan bahwa semua calon muncul.",
        "rubric": "Membedakan banyak koset, ukuran koset, dan orde elemen; tidak memerlukan normalitas."
      },
      {
        "q": "Dapatkah grup berorde 15 memiliki elemen berorde 6?",
        "hint": "Periksa pembagian 6 terhadap 15.",
        "answer": "Tidak. Orde elemen harus membagi 15, sedangkan 6 tidak membagi 15.",
        "rubric": "Menggunakan hipotesis hingga dan arah Lagrange yang benar."
      },
      {
        "q": "Buktikan grup berorde 11 siklik.",
        "hint": "Pilih satu elemen selain identitas.",
        "answer": "Ada a≠e karena grup mempunyai 11 elemen. Ordenya membagi 11 dan bukan 1, jadi 11. Maka subgrup yang dibangkitkan a memiliki seluruh 11 elemen dan sama dengan G.",
        "rubric": "Menjelaskan mengapa ordenya bukan 1."
      },
      {
        "q": "Apakah \\(a^{12}=e\\) menjamin orde a adalah 12?",
        "hint": "Orde terkecil dapat lebih kecil.",
        "answer": "Tidak. Identitas sendiri memenuhi persamaan itu dengan orde 1; elemen berorde 2,3,4,6 juga dapat memenuhinya. Yang dapat disimpulkan ialah orde a membagi 12.",
        "rubric": "Bedakan suatu eksponen yang bekerja dengan eksponen positif terkecil."
      },
      {
        "q": "Buktikan jika a berorde m dan \\(a^k=e\\), maka m membagi k untuk k positif.",
        "hint": "Gunakan pembagian \\(k=qm+r\\), \\(0\\le r<m\\).",
        "answer": "\\(e=a^k=(a^m)^qa^r=a^r\\). Jika r positif, ini bertentangan dengan minimalitas m. Jadi r=0 dan m membagi k.",
        "rubric": "Menggunakan minimalitas orde, bukan mengasumsikan kesimpulan."
      }
    ],
    "reflection": "Jelaskan perbedaan pembatasan kemungkinan orde dan jaminan keberadaan elemen. Berikan contoh pembagi orde grup yang tidak menjadi orde elemen.",
    "pdfPage": 229,
    "pdfPrinted": 209,
    "goalRefs": [
      [
        1,
        2,
        3,
        5,
        "E"
      ],
      [
        4,
        "E"
      ]
    ],
    "assessment": {
      "q": "G grup berorde 28 dan H subgrup berorde 7. Tentukan indeks H serta kemungkinan orde elemen nonidentitas di H. Apakah ini sendiri membuktikan G siklik?",
      "answer": "Indeksnya 4. Setiap elemen nonidentitas H berorde 7 karena ordenya membagi 7 dan bukan 1. Belum membuktikan G siklik: tidak diperoleh elemen berorde 28.",
      "rubric": [
        "Terapkan Lagrange pada grup yang tepat.",
        "Jangan menyimpulkan lebih dari yang dibuktikan."
      ]
    }
  },
  {
    "id": 9,
    "title": "Homomorfisme grup",
    "part": "Menghubungkan struktur",
    "time": 40,
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
      "why": "Kernel trivial setara dengan injektivitas. Untuk isomorfisme ke kodomain, surjektivitas tetap diperlukan.",
      "feedback": [
        "Kernel trivial setara dengan injektivitas. Untuk isomorfisme ke kodomain, surjektivitas tetap diperlukan.",
        "Kernel trivial menguji injektivitas, bukan surjektivitas.",
        "Isomorfisme ke kodomain juga memerlukan surjektivitas."
      ]
    },
    "prerequisites": [
      "Memahami fungsi, injektif/surjektif, dan operasi grup.",
      "Dapat memakai identitas, invers, dan kriteria subgrup."
    ],
    "worked": [
      {
        "title": "Menghitung kernel dan citra dari definisi",
        "steps": [
          "Tetapkan \\(\\varphi:\\mathbb Z_{12}\\to\\mathbb Z_6\\), \\(\\varphi([x]_{12})=[2x]_6\\). Jika wakil berubah menjadi \\(x+12t\\), hasil berubah sebesar 24t, kelipatan 6. Jadi aturan sah.",
          "Untuk setiap x,y, \\(\\varphi([x]+[y])=[2(x+y)]_6=[2x]_6+[2y]_6\\). Maka aturan adalah homomorfisme.",
          "Kernel menyelesaikan \\(2x\\equiv0\\pmod6\\), yaitu x kelipatan 3. Di domain didapat \\(\\ker\\varphi=\\{[0],[3],[6],[9]\\}\\).",
          "Hasil yang tercapai hanya \\([0],[2],[4]\\), semuanya tercapai. Jadi citra berukuran 3, kernel berukuran 4, peta tidak injektif dan tidak surjektif ke seluruh kodomain."
        ]
      },
      {
        "title": "Contoh di luar kelas residu: determinan",
        "steps": [
          "Ambil \\(GL_2(\\mathbb R)\\), grup matriks real invertibel, dan grup perkalian \\(\\mathbb R^{\\times}\\) bilangan real tak nol. Peta determinan memenuhi \\(\\det(AB)=\\det(A)\\det(B)\\), sehingga homomorfisme. Identitas domain adalah matriks \\(I\\); identitas kodomain adalah bilangan \\(1\\).",
          "Kernel adalah matriks invertibel dengan determinan 1, bukan matriks dengan determinan 0. Sebagai contoh \\(\\begin{pmatrix}1&t\\\\0&1\\end{pmatrix}\\) berada dalam kernel untuk semua real t.",
          "Peta surjektif: untuk setiap real \\(r\\ne0\\), matriks diagonal \\(\\begin{pmatrix}r&0\\\\0&1\\end{pmatrix}\\) mempunyai determinan r. Tidak injektif karena kernel memuat banyak matriks selain I.",
          "Contoh ini memakai sifat determinan dari aljabar linear. Bila belum mempelajarinya, fokus dahulu pada contoh kelas residu; sifat hasil kali determinan adalah prasyarat, bukan sesuatu yang dibuktikan di sini."
        ]
      }
    ],
    "proof": {
      "title": "Bukti terpandu: identitas, invers, dan kernel trivial",
      "steps": [
        "Asumsi: \\(\\varphi:G\\to H\\) homomorfisme. Dari \\(\\varphi(e_G)=\\varphi(e_Ge_G)=\\varphi(e_G)\\varphi(e_G)\\), pembatalan di H memberi \\(\\varphi(e_G)=e_H\\).",
        "Selanjutnya \\(\\varphi(a)\\varphi(a^{-1})=\\varphi(aa^{-1})=e_H\\), dan urutan sebaliknya juga menghasilkan \\(e_H\\). Keunikan invers memberi \\(\\varphi(a^{-1})=\\varphi(a)^{-1}\\).",
        "Kernel tak kosong karena memuat \\(e_G\\). Untuk a,b dalam kernel, \\(\\varphi(ab^{-1})=\\varphi(a)\\varphi(b)^{-1}=e_H\\), sehingga \\(ab^{-1}\\) tetap dalam kernel. Maka kernel subgrup G.",
        "Jika \\(\\varphi\\) injektif dan a dalam kernel, maka \\(\\varphi(a)=e_H=\\varphi(e_G)\\), sehingga \\(a=e_G\\). Jadi kernel trivial.",
        "Sebaliknya, andaikan \\(\\ker\\varphi=\\{e_G\\}\\) dan \\(\\varphi(a)=\\varphi(b)\\). Maka \\(\\varphi(ab^{-1})=e_H\\), sehingga \\(ab^{-1}=e_G\\) dan \\(a=b\\). Jadi peta injektif.",
        "Tidak ada langkah yang menyatakan citra sama dengan kodomain. Injektivitas dan surjektivitas adalah dua pemeriksaan berbeda."
      ]
    },
    "exercises": [
      {
        "q": "Apakah \\(f:\\mathbb Z\\to\\mathbb Z\\), \\(f(n)=n+1\\), homomorfisme aditif?",
        "hint": "Bandingkan hasil pada identitas atau hitung f(a+b).",
        "answer": "Bukan: \\(f(0)=1\\ne0\\). Juga \\(f(a+b)=a+b+1\\), sedangkan \\(f(a)+f(b)=a+b+2\\). Bijektivitas saja tidak menjamin pelestarian operasi.",
        "rubric": "Ada persamaan homomorfisme yang gagal."
      },
      {
        "q": "Untuk \\(f:\\mathbb Z\\to\\mathbb Z\\), \\(f(n)=3n\\), tentukan kernel, citra, injektif, surjektif.",
        "hint": "Identitas kedua grup adalah 0.",
        "answer": "Homomorfisme karena \\(3(a+b)=3a+3b\\). Kernel \\(\\{0\\}\\), citra \\(3\\mathbb Z\\); injektif, tetapi tidak surjektif karena 1 tidak tercapai.",
        "rubric": "Citra dibedakan dari kodomain."
      },
      {
        "q": "Apakah \\([x]_8\\mapsto[3x]_6\\) sah?",
        "hint": "Bandingkan wakil 0 dan 8 dari kelas yang sama.",
        "answer": "Ya: \\(6\\mid3\\cdot8\\). Pergantian x menjadi x+8t mengubah hasil sebesar 24t, kelipatan 6. Kernel \\(\\{[0],[2],[4],[6]\\}\\), citra \\(\\{[0],[3]\\}\\).",
        "rubric": "Buktikan keterdefinisian untuk semua pergantian wakil, bukan satu pasangan saja."
      },
      {
        "q": "Buktikan citra homomorfisme merupakan subgrup kodomain.",
        "hint": "Tuliskan dua elemen citra sebagai \\(\\varphi(a),\\varphi(b)\\).",
        "answer": "Citra memuat \\(e_H=\\varphi(e_G)\\). Jika \\(u=\\varphi(a),v=\\varphi(b)\\), maka \\(uv^{-1}=\\varphi(ab^{-1})\\) masih dalam citra. Kriteria subgrup berlaku.",
        "rubric": "Ketak-kosongan dan kriteria untuk dua elemen sebarang ditunjukkan."
      },
      {
        "q": "Aturan \\([x]_4\\mapsto[x]_6\\) tampak memberi empat output. Mengapa belum boleh disebut homomorfisme?",
        "hint": "Wakil 0 dan 4 menyatakan kelas sama di domain.",
        "answer": "Wakil 0 memberi \\([0]_6\\), tetapi wakil 4 memberi \\([4]_6\\), yang berbeda. Aturan tidak terdefinisi pada kelas. Daftar hasil dari satu pilihan wakil tidak memperbaiki kegagalan ini.",
        "rubric": "Saksi dua wakil kelas sama dengan hasil kelas berbeda."
      }
    ],
    "reflection": "Jelaskan perbedaan tiga pemeriksaan: aturan sah pada kelas, pelestarian operasi, dan bijektivitas. Berikan contoh kegagalan salah satunya.",
    "pdfPage": 253,
    "pdfPrinted": 233,
    "goalRefs": [
      [
        1,
        3,
        5,
        "E"
      ],
      [
        2,
        3,
        "E"
      ]
    ],
    "assessment": {
      "q": "Periksa \\([x]_{10}\\mapsto[3x]_{15}\\). Tentukan keterdefinisian, kernel, citra, injektivitas dan surjektivitas.",
      "answer": "Sah karena 15 membagi 30; pelestarian penjumlahan mengikuti distribusi. Kernel {[0],[5]}, citra {[0],[3],[6],[9],[12]}; tidak injektif dan tidak surjektif ke \\(\\mathbb Z_{15}\\).",
      "rubric": [
        "Periksa aturan pada kelas sebelum menghitung kernel.",
        "Sebutkan kodomain saat menilai surjektivitas."
      ]
    }
  },
  {
    "id": 10,
    "title": "Normalitas dan grup kuosien",
    "part": "Menghubungkan struktur",
    "time": 45,
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
        "Identitas \\(G/N\\) adalah \\(N\\), bukan satu elemen \\(e\\) dari \\(G\\). Invers \\(aN\\) adalah \\(a^{-1}N\\). Jika \\(G\\) hingga, \\(|G/N| = [G:N]\\). Jangan mencampur jumlah anggota sebuah koset dengan jumlah koset. Setelah operasi terdefinisi dengan baik, empat aksioma diperiksa: \\((aN)(bN)=(ab)N\\in G/N\\) memberi ketertutupan, asosiativitas diwarisi dari \\(G\\), identitasnya \\(N\\), dan inversnya \\(a^{-1}N\\)."
      ],
      [
        "Kernel selalu normal",
        "Jika \\(n\\) ada di kernel \\(\\varphi\\), maka \\(\\varphi (gng^{-1}) = \\varphi (g)e\\varphi (g)^{-1} = e\\). Jadi konjugasi mempertahankan kernel. Karena itu \\(G/\\ker  \\varphi\\) dapat dibentuk untuk setiap homomorfisme."
      ]
    ],
    "example": "Di \\(\\mathbb{Z}_{12}, N = \\langle 4\\rangle\\) normal karena grupnya abelian. Kuosien mempunyai empat elemen berupa koset \\(N, 1+N, 2+N\\), dan \\(3+N\\). Penjumlahan koset mengikuti penjumlahan wakil modulo empat.",
    "pitfall": "Koset \\(\\{1,5,9\\}\\) dalam contoh bukan subgrup \\(\\mathbb{Z}_{12}\\), tetapi menjadi satu elemen yang sah pada grup kuosien.",
    "lab": "coset",
    "prompt": "Bandingkan \\(H=\\{e,(12)\\}\\) dan \\(A_3=\\{e,(123),(132)\\}\\) di \\(S_{3}\\). Prediksi subgrup mana yang koset kiri dan kanannya selalu sama. Untuk H, coba kalikan koset H dengan (13)H memakai dua wakil berbeda dari H.",
    "quiz": {
      "q": "Identitas grup kuosien \\(G/N\\) adalah…",
      "choices": [
        "Koset \\(N\\)",
        "Elemen \\(a\\) sembarang dari \\(G\\)",
        "Jumlah seluruh wakil koset"
      ],
      "answer": 0,
      "why": "\\(N\\) adalah koset identitas dan memenuhi \\(N(aN) = aN = (aN)N\\).",
      "feedback": [
        "\\(N\\) adalah koset identitas dan memenuhi \\(N(aN) = aN = (aN)N\\).",
        "Elemen kuosien adalah koset; elemen a dari G bukan identitas kuosien.",
        "Identitas merupakan satu koset, bukan jumlah wakil."
      ]
    },
    "prerequisites": [
      "Memahami koset kiri/kanan dari Bab 7 dan homomorfisme dari Bab 9.",
      "Dapat menghitung komposisi di \\(S_{3}\\) dari kanan ke kiri."
    ],
    "worked": [
      {
        "title": "Mengapa operasi pada koset dapat gagal?",
        "steps": [
          "Ambil \\(H=\\{e,h\\}\\), dengan \\(h=(12)\\), dan \\(a=(13)\\). Kita mencoba aturan \\((xH)(yH)=(xy)H\\).",
          "Pada koset pertama H, wakil e dan h menyatakan koset yang sama. Dengan wakil e, hasil \\(H\\cdot aH\\) adalah \\(aH=\\{(13),(123)\\}\\).",
          "Dengan wakil h, hasilnya \\((ha)H\\). Karena \\(ha=(132)\\), koset ini adalah \\(\\{(132),(23)\\}\\), berbeda dari aH.",
          "Jadi perkalian percobaan bergantung pada wakil. Kegagalannya terjadi sebelum pemeriksaan empat aksioma: aturan itu belum mendefinisikan operasi pada himpunan koset."
        ]
      },
      {
        "title": "Kuosien sah dengan dua elemen",
        "steps": [
          "Ambil \\(N=A_3=\\{e,(123),(132)\\}\\). Ini subgrup: ditutup oleh komposisi dan invers, dengan identitas e. Koset lainnya \\(tN=\\{(12),(13),(23)\\}\\), dengan \\(t=(12)\\).",
          "Ada tepat dua koset kiri dan dua koset kanan: N sendiri dan komplemennya. Karena itu koset kiri dan kanan sama untuk setiap wakil; N normal.",
          "Pada kuosien, \\(N\\cdot N=N\\), \\(N\\cdot tN=tN\\cdot N=tN\\), dan \\((tN)(tN)=t^2N=N\\). Ini tabel grup berorde 2.",
          "Identitas kuosien adalah himpunan N, bukan permutasi e saja. Setiap elemen kuosien di sini merupakan koset berisi tiga permutasi."
        ]
      }
    ],
    "proof": {
      "title": "Bukti terpandu: normalitas dan operasi koset",
      "steps": [
        "Andaikan \\(N\\trianglelefteq G\\). Ambil \\(aN=a'N\\) dan \\(bN=b'N\\). Ada \\(n_1,n_2\\in N\\) sehingga \\(a'=an_1\\), \\(b'=bn_2\\).",
        "Maka \\(a'b'=an_1bn_2=ab(b^{-1}n_1b)n_2\\). Normalitas memberi \\(b^{-1}n_1b\\in N\\), sehingga faktor sesudah ab berada di N. Jadi \\(a'b'N=abN\\): hasil tidak bergantung pada wakil.",
        "Sebaliknya, jika aturan \\((aN)(bN)=abN\\) tidak bergantung pada wakil, maka untuk \\(n\\in N\\), wakil e dan n dari N harus memberi \\(gN=ngN\\). Kriteria koset memberi \\(g^{-1}ng\\in N\\). Berlaku untuk semua g dan n, sehingga \\(g^{-1}Ng\\subseteq N\\); mengganti g dengan inversnya memberi kesamaan. Jadi N normal.",
        "Setelah operasi sah, himpunan koset tak kosong karena memuat N. Ketertutupan: \\((aN)(bN)=abN\\in G/N\\). Asosiativitas mengikuti \\((ab)c=a(bc)\\) di G.",
        "Identitas: \\(N(aN)=(aN)N=aN\\). Invers: \\((aN)(a^{-1}N)=N=(a^{-1}N)(aN)\\). Keempat aksioma terpenuhi.",
        "Normalitas bukan syarat tambahan yang dapat diabaikan setelah menghitung ukuran. Ia memastikan bahwa aturan operasi standar pada koset benar-benar sah."
      ]
    },
    "exercises": [
      {
        "q": "Mengapa setiap subgrup grup abelian normal?",
        "hint": "Bandingkan ah dan ha untuk anggota h dalam subgrup.",
        "answer": "Untuk setiap a dan h, \\(ah=ha\\). Karena itu himpunan \\(aH=\\{ah:h\\in H\\}\\) sama dengan \\(Ha\\) untuk setiap a.",
        "rubric": "Pernyataan berlaku untuk semua a, bukan satu wakil."
      },
      {
        "q": "Buat tabel kuosien \\(\\mathbb Z_{12}/\\langle4\\rangle\\).",
        "hint": "Gunakan wakil 0,1,2,3; jumlah wakil direduksi modulo 4 pada daftar koset.",
        "answer": "Dengan \\(C_i=i+H\\), aturan operasinya \\(C_i+C_j=C_{i+j\\bmod4}\\). Identitas \\(C_0\\); invers \\(C_1\\) adalah \\(C_3\\).",
        "rubric": "Tabel memuat koset sebagai elemen, bukan anggota tunggal H.",
        "answerTable": {
          "caption": "Tabel penjumlahan koset pada latihan 10.2",
          "headers": [
            "+",
            "\\(C_0\\)",
            "\\(C_1\\)",
            "\\(C_2\\)",
            "\\(C_3\\)"
          ],
          "rows": [
            [
              "\\(C_0\\)",
              "\\(C_0\\)",
              "\\(C_1\\)",
              "\\(C_2\\)",
              "\\(C_3\\)"
            ],
            [
              "\\(C_1\\)",
              "\\(C_1\\)",
              "\\(C_2\\)",
              "\\(C_3\\)",
              "\\(C_0\\)"
            ],
            [
              "\\(C_2\\)",
              "\\(C_2\\)",
              "\\(C_3\\)",
              "\\(C_0\\)",
              "\\(C_1\\)"
            ],
            [
              "\\(C_3\\)",
              "\\(C_3\\)",
              "\\(C_0\\)",
              "\\(C_1\\)",
              "\\(C_2\\)"
            ]
          ]
        }
      },
      {
        "q": "Buktikan kernel homomorfisme selalu normal.",
        "hint": "Untuk \\(k\\in\\ker\\varphi\\), hitung \\(\\varphi(gkg^{-1})\\).",
        "answer": "\\(\\varphi(gkg^{-1})=\\varphi(g)e_H\\varphi(g)^{-1}=e_H\\). Jadi \\(g(\\ker\\varphi)g^{-1}\\subseteq\\ker\\varphi\\); mengganti g dengan inversnya memberi inklusi sebaliknya. Kernel sudah subgrup, sehingga normal.",
        "rubric": "Sertakan alasan kesamaan, tidak berhenti pada satu inklusi."
      },
      {
        "q": "Dalam contoh H di \\(S_{3}\\), apakah kesamaan \\(eH=(12)H\\) menjamin e dan (12) sama sebagai permutasi?",
        "hint": "Bedakan wakil dengan himpunan koset.",
        "answer": "Tidak. e menetapkan semua titik, sedangkan (12) menukar dua titik. Keduanya berbeda, tetapi berada dalam koset H yang sama. Justru perbedaan wakil inilah yang dipakai menguji keterdefinisian operasi.",
        "rubric": "Bedakan kesamaan elemen asal dan kesamaan koset."
      },
      {
        "q": "Jika \\(|G|=30\\), N normal, dan \\(|N|=5\\), berapa elemen G/N? Apakah data itu membuktikan G/N siklik?",
        "hint": "Lagrange menghitung ukuran, bukan seluruh struktur operasi.",
        "answer": "Kuosien mempunyai \\(30/5=6\\) elemen. Data ini saja tidak membuktikan siklik: grup berorde 6 dapat siklik atau nonabelian seperti \\(S_{3}\\).",
        "rubric": "Tidak menyimpulkan struktur hanya dari ukuran."
      }
    ],
    "reflection": "Jelaskan dengan dua wakil dari koset yang sama mengapa H={e,(12)} tidak menghasilkan grup kuosien \\(S_{3}\\)/H dengan operasi standar.",
    "pdfPage": 285,
    "pdfPrinted": 265,
    "challenges": [
      {
        "title": "Tantangan setelah mempelajari normalitas",
        "q": "Jika \\(|G|=24\\) dan \\(|H|=6\\), apakah ukuran ini menjamin H normal?",
        "hint": "Di \\(S_4\\), periksa subgrup penetap titik 4 dan konjugasi oleh \\((14)\\).",
        "answer": "Tidak. Subgrup penetap titik 4 berorde 6, tetapi memuat \\((12)\\) sedangkan konjugasinya \\((14)(12)(14)=(24)\\) tidak menetapkan titik 4. Jadi subgrup ini tidak normal.",
        "rubric": "Contoh memakai ukuran yang tepat dan memperlihatkan satu konjugat yang keluar."
      }
    ],
    "goalRefs": [
      [
        1,
        3,
        "E"
      ],
      [
        2,
        4,
        "E"
      ]
    ],
    "assessment": {
      "q": "Di \\(S_{3}\\), ambil H={e,(23)} dan a=(12). Bandingkan aH dengan Ha. Apakah operasi koset standar memberikan grup \\(S_{3}\\)/H?",
      "answer": "\\(aH=\\{(12),(123)\\}\\), sedangkan \\(Ha=\\{(12),(132)\\}\\). Berbeda, jadi H tidak normal dan operasi koset standar tidak sah.",
      "rubric": [
        "Komposisi dari kanan ke kiri.",
        "Kesimpulan didasarkan pada perbedaan himpunan."
      ]
    }
  },
  {
    "id": 11,
    "title": "Isomorfisme",
    "part": "Menghubungkan struktur",
    "time": 45,
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
      "why": "Peta terinduksi selalu surjektif ke citra. Citra sama dengan kodomain hanya jika \\(\\varphi\\) sendiri surjektif.",
      "feedback": [
        "Target umum ialah citra; seluruh kodomain hanya jika peta surjektif.",
        "Peta terinduksi selalu surjektif ke citra. Citra sama dengan kodomain hanya jika \\(\\varphi\\) sendiri surjektif.",
        "Kernel adalah subgrup domain yang dikuosienkan, bukan target peta terinduksi."
      ]
    },
    "prerequisites": [
      "Memahami kernel normal dan operasi grup kuosien.",
      "Dapat membuktikan fungsi sah, homomorfisme, injektif, dan surjektif."
    ],
    "worked": [
      {
        "title": "Membangun isomorfisme secara lengkap",
        "steps": [
          "Ambil \\((\\mathbb Z,+)\\) dan grup matriks \\(U=\\{A_k:k\\in\\mathbb Z\\}\\), dengan \\(A_k=\\begin{pmatrix}1&k\\\\0&1\\end{pmatrix}\\). Tetapkan \\(f(k)=A_k\\).",
          "Perkalian memberi \\(A_kA_l=A_{k+l}\\). Maka U tertutup; asosiativitas diwarisi dari matriks; identitas \\(A_0\\) dan invers \\(A_k\\) adalah \\(A_{-k}\\). Jadi U grup.",
          "Peta f sah dan mempertahankan operasi karena \\(f(k+l)=A_{k+l}=A_kA_l=f(k)f(l)\\).",
          "Jika \\(f(k)=f(l)\\), entri kanan atas memberi k=l, sehingga injektif. Setiap anggota U memang \\(A_k\\) untuk suatu bilangan bulat k, sehingga surjektif. Jadi \\(\\mathbb Z\\cong U\\). Kesamaan struktur ditunjukkan oleh peta dan operasinya, bukan penampilan objek."
        ]
      },
      {
        "title": "Menghubungkan tiga koset dengan tiga nilai citra",
        "steps": [
          "Kembali ke \\(\\varphi:\\mathbb Z_{12}\\to\\mathbb Z_6\\), \\([x]\\mapsto[2x]\\). Kernel \\(K=\\{0,3,6,9\\}\\). Koset-kosetnya K, 1+K, 2+K.",
          "Peta terinduksi memberi \\(K\\mapsto[0]_6\\), \\(1+K\\mapsto[2]_6\\), \\(2+K\\mapsto[4]_6\\). Misalnya wakil 1 dan 4 dari 1+K sama-sama menghasilkan kelas 2 modulo 6.",
          "Periksa operasi: \\((1+K)+(1+K)=2+K\\), yang menuju kelas 4; hasil yang sama diperoleh dari \\([2]_6+[2]_6=[4]_6\\). Pembuktian umum tidak cukup dengan satu pasangan dan diberikan di bawah.",
          "Tiga koset berkorespondensi bijektif dengan citra \\(\\{[0],[2],[4]\\}\\). Target ini bukan seluruh \\(\\mathbb Z_{6}\\). Maka kuosien isomorfik dengan citra, bukan otomatis dengan kodomain."
        ]
      }
    ],
    "proof": {
      "title": "Bukti terpandu: Teorema Isomorfisme Pertama",
      "steps": [
        "Misalkan \\(\\varphi:G\\to H\\) homomorfisme dan \\(K=\\ker\\varphi\\). Kernel normal, sehingga G/K merupakan grup. Tetapkan \\(\\overline\\varphi:G/K\\to\\operatorname{Im}\\varphi\\) dengan \\(\\overline\\varphi(gK)=\\varphi(g)\\).",
        "Sah terhadap wakil: jika \\(gK=hK\\), maka \\(h^{-1}g\\in K\\). Jadi \\(\\varphi(h)^{-1}\\varphi(g)=e_H\\), sehingga \\(\\varphi(g)=\\varphi(h)\\). Maka satu koset tidak memperoleh dua nilai berbeda.",
        "Homomorfisme: definisi operasi kuosien memberi \\(\\overline\\varphi((gK)(hK))=\\varphi(gh)\\). Sifat homomorfisme awal memberi \\(\\varphi(gh)=\\varphi(g)\\varphi(h)\\). Definisi peta terinduksi memberi \\(\\varphi(g)\\varphi(h)=\\overline\\varphi(gK)\\overline\\varphi(hK)\\). Jadi operasi dipertahankan.",
        "Injektif: jika \\(\\overline\\varphi(gK)=\\overline\\varphi(hK)\\), maka \\(\\varphi(h^{-1}g)=e_H\\). Jadi \\(h^{-1}g\\in K\\), dan \\(gK=hK\\).",
        "Surjektif ke citra: setiap \\(y\\in\\operatorname{Im}\\varphi\\) berbentuk \\(y=\\varphi(g)\\) untuk suatu g. Koset gK memetakan ke y. Tidak diperlukan asumsi bahwa setiap anggota kodomain H tercapai.",
        "Keempat pemeriksaan selesai. Karena peta terinduksi merupakan homomorfisme bijektif, \\(G/\\ker\\varphi\\cong\\operatorname{Im}\\varphi\\). Tidak diasumsikan grup hingga."
      ]
    },
    "exercises": [
      {
        "q": "Bangun isomorfisme dari \\((\\mathbb Z,+)\\) ke \\((2\\mathbb Z,+)\\).",
        "hint": "Gunakan f(n)=2n dan perhatikan kodomainnya.",
        "answer": "\\(f(n)=2n\\). Pelestarian operasi mengikuti \\(2(a+b)=2a+2b\\). Injektif karena 2a=2b memberi a=b; surjektif karena setiap anggota \\(2\\mathbb Z\\) berbentuk 2n. Invers fungsi memetakan 2n ke n.",
        "rubric": "Peta, pelestarian operasi, injektif, dan surjektif semuanya diperiksa."
      },
      {
        "q": "Mengapa \\(\\mathbb Z_4\\) tidak isomorfik dengan grup empat Klein?",
        "hint": "Bandingkan orde elemen, bukan hanya orde grup.",
        "answer": "\\(\\mathbb Z_{4}\\) mempunyai elemen berorde 4. Pada grup empat Klein setiap elemen nonidentitas berorde 2. Isomorfisme mempertahankan orde elemen, sehingga tidak mungkin ada isomorfisme.",
        "rubric": "Gunakan sifat yang dipertahankan oleh setiap isomorfisme."
      },
      {
        "q": "Untuk \\(\\varphi:\\mathbb Z\\to\\mathbb Z_5\\), \\(n\\mapsto[n]_5\\), tentukan kernel dan peta terinduksi.",
        "hint": "Kernel memuat bilangan yang kelasnya nol.",
        "answer": "Kernel \\(5\\mathbb Z\\) dan citra seluruh \\(\\mathbb Z_{5}\\). Peta \\(n+5\\mathbb Z\\mapsto[n]_5\\) merupakan isomorfisme \\(\\mathbb Z/5\\mathbb Z\\to\\mathbb Z_5\\). Kesamaan wakil modulo 5 memastikan keterdefinisian.",
        "rubric": "Bedakan kelas di kuosien domain dengan nilai pada kodomain; sebutkan target."
      },
      {
        "q": "Buktikan bahwa isomorfisme mempertahankan orde elemen hingga.",
        "hint": "Gunakan \\(f(a^m)=f(a)^m\\) dan injektivitas untuk arah balik.",
        "answer": "Jika orde a adalah m, maka \\(f(a)^m=e\\), sehingga orde f(a) membagi m. Jika \\(f(a)^k=e\\), maka \\(f(a^k)=f(e)\\), sehingga injektivitas memberi \\(a^k=e\\). Jadi bilangan positif terkecil pada kedua sisi sama.",
        "rubric": "Dua arah diperlukan untuk kesamaan orde; satu arah saja belum cukup."
      },
      {
        "q": "Jika satu calon bijeksi antara dua grup gagal mempertahankan operasi, apakah kedua grup pasti tidak isomorfik?",
        "hint": "Bedakan kegagalan satu peta dan ketidakadaan semua peta yang mungkin.",
        "answer": "Tidak. Misalnya \\(f:\\mathbb Z\\to\\mathbb Z\\), f(n)=n+1, bijektif tetapi bukan homomorfisme aditif. Kedua grup tetap isomorfik melalui identitas. Untuk membuktikan tidak isomorfik, diperlukan alasan yang menyingkirkan semua calon, misalnya perbedaan orde elemen.",
        "rubric": "Kesimpulan tidak melampaui informasi tentang satu calon peta."
      }
    ],
    "reflection": "Tuliskan empat pemeriksaan peta terinduksi dalam Teorema Isomorfisme Pertama. Jelaskan mengapa targetnya citra dan kapan dapat diganti seluruh kodomain.",
    "pdfPage": 309,
    "pdfPrinted": 289,
    "goalRefs": [
      [
        1,
        2,
        4,
        5
      ],
      [
        3,
        "E"
      ]
    ],
    "assessment": {
      "q": "Untuk \\([x]_{16}\\mapsto[2x]_8\\), tentukan kernel, citra, dan target tepat isomorfisme dari kuosien kernel.",
      "answer": "Aturan sah karena 8 membagi 32. Kernel {[0],[4],[8],[12]}, citra {[0],[2],[4],[6]}. Kuosien mempunyai 4 elemen dan isomorfik ke citra, bukan ke seluruh \\(\\mathbb Z_{8}\\). Peta terinduksi x+K↦\\([2x]_{8}\\) perlu diperiksa sah, homomorfisme, injektif dan surjektif ke citra.",
      "rubric": [
        "Bedakan domain, kuosien, citra dan kodomain.",
        "Jelaskan empat pemeriksaan peta terinduksi."
      ]
    }
  },
  {
    "id": 12,
    "title": "Aplikasi teori grup",
    "part": "Menggunakan teori",
    "time": 40,
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
      "why": "Dua jenisnya adalah merah bertetangga dan merah berhadapan. Rotasi menghubungkan konfigurasi dalam masing-masing jenis.",
      "feedback": [
        "Rotasi tidak mengubah pasangan bertetangga menjadi berhadapan.",
        "Dua jenisnya adalah merah bertetangga dan merah berhadapan. Rotasi menghubungkan konfigurasi dalam masing-masing jenis.",
        "Enam adalah jumlah konfigurasi berlabel sebelum dikelompokkan."
      ]
    },
    "prerequisites": [
      "Memahami \\(D_{4}\\) sebagai transformasi persegi dan arah komposisi.",
      "Dapat membedakan objek yang dipindahkan dari transformasinya."
    ],
    "worked": [
      {
        "title": "Menyusun model dua merah dan dua biru",
        "steps": [
          "Objeknya pewarnaan empat posisi sudut persegi dengan tepat dua merah dan dua biru. Memilih dua posisi merah memberi 6 konfigurasi.",
          "Transformasi yang diperbolehkan adalah delapan simetri \\(D_{4}\\). Dua konfigurasi dianggap sama jika salah satunya diperoleh dari yang lain melalui transformasi ini.",
          "Pasangan merah bertetangga mempunyai 4 kemungkinan posisi dan semuanya terhubung oleh rotasi. Pasangan merah berhadapan mempunyai 2 kemungkinan dan juga terhubung oleh rotasi.",
          "Isometri mempertahankan jarak. Jarak antartitik merah yang bertetangga adalah panjang sisi, sedangkan yang berhadapan panjang diagonal. Karena berbeda, kedua jenis tidak dapat disatukan oleh \\(D_{4}\\). Jadi ada tepat dua kelas."
        ]
      },
      {
        "title": "Mengubah transformasi mengubah klasifikasi",
        "steps": [
          "Pada segitiga, tempatkan tiga warna berbeda: merah, biru, hitam. Ada 6 susunan pada tiga posisi berlabel.",
          "Jika hanya rotasi yang diperbolehkan, setiap susunan terhubung dengan dua rotasinya. Ada dua kelas berisi tiga susunan, dibedakan oleh urutan warna mengelilingi segitiga.",
          "Jika refleksi juga diperbolehkan, orientasi urutan dapat dibalik; dua kelas tersebut menyatu menjadi satu kelas di bawah \\(D_{3}\\).",
          "Jumlah kelas bergantung pada objek dan transformasi yang diizinkan. Klaim dua susunan sama harus selalu menyebut aturan kesamaannya."
        ]
      }
    ],
    "proof": {
      "title": "Bukti terpandu: orbit membentuk kelas ekuivalensi",
      "steps": [
        "Jika suatu grup G bekerja pada objek X, tuliskan \\(g\\cdot x\\) untuk hasil transformasi. Syaratnya \\(e\\cdot x=x\\) dan \\((gh)\\cdot x=g\\cdot(h\\cdot x)\\). Untuk simetri geometri, kedua syarat mengikuti komposisi transformasi.",
        "Definisikan x∼y jika \\(y=g\\cdot x\\) untuk suatu g. Relasi refleksif karena identitas membawa x ke dirinya sendiri.",
        "Jika \\(y=g\\cdot x\\), maka \\(x=g^{-1}\\cdot y\\), sehingga relasi simetris. Keberadaan invers transformasi dipakai di sini.",
        "Jika \\(y=g\\cdot x\\) dan \\(z=h\\cdot y\\), maka \\(z=(hg)\\cdot x\\), sehingga relasi transitif. Urutan produk mengikuti transformasi yang bekerja dahulu.",
        "Jadi kelas-kelas relasinya mempartisi X. Kelas dari x disebut orbitnya. Yang membentuk grup adalah transformasi; X tidak harus mempunyai operasi grup."
      ]
    },
    "exercises": [
      {
        "q": "Mengapa ada enam pewarnaan dua merah dua biru pada empat posisi berlabel?",
        "hint": "Daftarkan pasangan posisi merah.",
        "answer": "Pasangannya \\(\\{1,2\\},\\{1,3\\},\\{1,4\\},\\{2,3\\},\\{2,4\\},\\{3,4\\}\\). Setelah merah dipilih, dua posisi lain otomatis biru.",
        "rubric": "Tidak menghitung urutan pemilihan dua posisi sebagai konfigurasi baru."
      },
      {
        "q": "Jika seluruh \\(S_{4}\\) diizinkan pada empat posisi, berapa orbit pewarnaan dua merah dua biru?",
        "hint": "Permutasi bebas tidak harus mempertahankan jarak geometri.",
        "answer": "Satu orbit. Setiap pasangan posisi merah dapat dikirim ke pasangan lainnya oleh suatu permutasi; dua posisi biru dipasangkan dengan sisa posisi.",
        "rubric": "Menyebut perubahan grup transformasi dari \\(D_{4}\\) ke \\(S_{4}\\)."
      },
      {
        "q": "Apakah empat konfigurasi merah bertetangga membentuk subgrup \\(D_{4}\\)?",
        "hint": "Bandingkan jenis objeknya.",
        "answer": "Tidak sebagai himpunan tersebut: anggotanya konfigurasi warna, bukan transformasi \\(D_{4}\\). Orbit adalah subhimpunan ruang konfigurasi, bukan otomatis subgrup grup transformasi.",
        "rubric": "Membedakan objek dan transformasi, bukan sekadar menghitung empat anggota."
      },
      {
        "q": "Buktikan jika y berada pada orbit x, maka orbit y sama dengan orbit x.",
        "hint": "Tulis \\(y=g\\cdot x\\), gunakan g dan inversnya.",
        "answer": "Setiap \\(h\\cdot y=(hg)\\cdot x\\) berada pada orbit x. Sebaliknya \\(x=g^{-1}\\cdot y\\) memberi inklusi balik. Maka kedua orbit sama.",
        "rubric": "Menunjukkan kedua inklusi."
      },
      {
        "q": "Pada segitiga tiga warna berbeda, mengapa tidak ada rotasi bukan identitas yang menetapkan sebuah susunan?",
        "hint": "Setiap rotasi bukan identitas memindahkan semua posisi.",
        "answer": "Rotasi tersebut membawa setiap posisi ke posisi lain yang warnanya berbeda. Karena tiga warna berbeda, susunan berubah. Maka orbit rotasi mempunyai tiga susunan berbeda.",
        "rubric": "Alasan bergantung pada warna yang berbeda, bukan hanya bentuk segitiga."
      }
    ],
    "reflection": "Pilih satu persoalan klasifikasi. Sebutkan objek, transformasi yang diperbolehkan, dan satu sifat yang dipertahankan transformasi itu.",
    "pdfPage": 335,
    "pdfPrinted": 315,
    "goalRefs": [
      [
        1,
        2,
        4,
        5,
        "E"
      ],
      [
        3,
        "E"
      ]
    ],
    "assessment": {
      "q": "Pada empat sudut persegi, tempatkan satu merah dan tiga biru. Berapa orbit di bawah \\(D_{4}\\)? Apakah konfigurasi-konfigurasinya otomatis subgrup \\(D_{4}\\)?",
      "answer": "Ada 4 konfigurasi, semuanya terhubung oleh rotasi, jadi satu orbit. Anggotanya konfigurasi, bukan transformasi; tidak otomatis merupakan subgrup \\(D_{4}\\).",
      "rubric": [
        "Sebutkan objek dan transformasi.",
        "Tunjukkan semua konfigurasi terhubung."
      ]
    }
  },
  {
    "id": 13,
    "title": "Sintesis teori grup",
    "part": "Menggunakan teori",
    "time": 45,
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
      "why": "\\(\\mathbb{Z}_{4}\\) dan grup empat Klein sama-sama berorde \\(4\\), tetapi yang kedua tidak mempunyai elemen berorde \\(4\\). Jadi kesamaan orde belum cukup.",
      "feedback": [
        "Kesamaan orde grup belum menyediakan homomorfisme bijektif.",
        "\\(\\mathbb{Z}_{4}\\) dan grup empat Klein sama-sama berorde \\(4\\), tetapi yang kedua tidak mempunyai elemen berorde \\(4\\). Jadi kesamaan orde belum cukup.",
        "Grup berorde sama tidak harus semuanya siklik."
      ]
    },
    "prerequisites": [
      "Memahami orde, koset, kernel/citra, normalitas, dan isomorfisme.",
      "Dapat memeriksa hipotesis sebelum memakai suatu teorema."
    ],
    "worked": [
      {
        "title": "Satu masalah melewati beberapa konsep",
        "steps": [
          "Tetapkan \\(\\varphi:\\mathbb Z_{18}\\to\\mathbb Z_{12}\\), \\([x]\\mapsto[2x]\\). Aturan sah karena \\(12\\mid2\\cdot18\\). Pelestarian penjumlahan mengikuti distribusi.",
          "Kernel menyelesaikan \\(2x\\equiv0\\pmod{12}\\), sehingga \\(K=\\{[0],[6],[12]\\}\\). Citra ialah enam kelas genap \\(\\{[0],[2],[4],[6],[8],[10]\\}\\).",
          "Kernel normal karena merupakan kernel homomorfisme. Ada \\(18/3=6\\) koset kernel; wakilnya dapat dipilih 0,1,2,3,4,5.",
          "Teorema Isomorfisme Pertama memberi \\(\\mathbb Z_{18}/K\\cong\\operatorname{Im}\\varphi\\). Peta koset \\(x+K\\mapsto[2x]_{12}\\) harus dibedakan dari peta awal.",
          "Citra juga siklik berorde 6 dengan generator \\([2]_{12}\\). Jadi kuosien isomorfik dengan \\(\\mathbb Z_{6}\\). Ia bukan seluruh \\(\\mathbb Z_{12}\\) karena peta awal tidak surjektif."
        ]
      },
      {
        "title": "Menolak isomorfisme dengan informasi yang tepat",
        "steps": [
          "Bandingkan grup aditif \\(\\mathbb Z_8\\) dan \\(\\mathbb Z_4\\times\\mathbb Z_2\\), keduanya berorde 8. Kesamaan ukuran saja belum menentukan isomorfisme.",
          "\\(\\mathbb Z_{8}\\) mempunyai elemen [1] berorde 8. Pada grup hasil kali, empat kali setiap pasangan adalah identitas karena komponen pertama modulo 4 dan kedua modulo 2.",
          "Jadi tidak ada elemen berorde 8 pada grup hasil kali. Isomorfisme mempertahankan orde elemen, sehingga kedua grup tidak isomorfik. Tidak perlu mencoba semua bijeksi satu per satu."
        ]
      }
    ],
    "proof": {
      "title": "Bukti terpandu: membaca serat homomorfisme sebagai koset",
      "steps": [
        "Misalkan \\(\\varphi:G\\to H\\) homomorfisme dan \\(K=\\ker\\varphi\\). Untuk g tertentu, serat di \\(\\varphi(g)\\) ialah himpunan semua x dengan \\(\\varphi(x)=\\varphi(g)\\).",
        "Jika \\(\\varphi(x)=\\varphi(g)\\), maka \\(\\varphi(g^{-1}x)=e_H\\), sehingga \\(g^{-1}x\\in K\\). Jadi \\(x\\in gK\\).",
        "Sebaliknya jika \\(x=gk\\) untuk k dalam K, maka \\(\\varphi(x)=\\varphi(g)\\varphi(k)=\\varphi(g)\\). Jadi serat itu tepat gK.",
        "Untuk grup hingga, setiap serat tak kosong mempunyai ukuran \\(|K|\\). Nilai-nilai berbeda dalam citra memberikan serat-serat terpisah yang mempartisi domain. Maka \\(|G|=|K|\\,|\\operatorname{Im}\\varphi|\\).",
        "Persamaan ukuran ini sesuai dengan Teorema Isomorfisme Pertama, tetapi kesamaan ukuran saja bukan bukti adanya isomorfisme; peta terinduksi dan operasinya tetap harus diperiksa."
      ]
    },
    "exercises": [
      {
        "q": "Untuk \\([x]_{15}\\mapsto[2x]_{10}\\), tentukan keterdefinisian, kernel, citra, dan ukuran kuosien kernel.",
        "hint": "Periksa 10 membagi 30, lalu selesaikan 2x=0 modulo 10.",
        "answer": "Aturan sah dan homomorfisme. Kernel \\(\\{[0],[5],[10]\\}\\), citra lima kelas genap di \\(\\mathbb Z_{10}\\), ukuran kuosien 5. Peta tidak injektif dan tidak surjektif ke \\(\\mathbb Z_{10}\\).",
        "rubric": "Jangan menyebut kernel sebelum memastikan aturan sah."
      },
      {
        "q": "G berorde 21 dan a elemen bukan identitas. Daftarkan orde a yang mungkin menurut Lagrange.",
        "hint": "Gunakan pembagi positif 21 dan singkirkan orde 1.",
        "answer": "Calonnya 3,7,21. Daftar ini tidak menjamin semua calon ada dalam setiap grup berorde 21.",
        "rubric": "Membedakan kemungkinan dan keberadaan."
      },
      {
        "q": "Sebuah homomorfisme dari grup berorde 24 mempunyai citra berorde 6. Berapa ukuran kernel dan setiap serat tak kosong?",
        "hint": "Gunakan partisi domain oleh koset kernel.",
        "answer": "Ukuran kernel 4 dan setiap serat tak kosong berukuran 4. Anggota kodomain di luar citra mempunyai serat kosong.",
        "rubric": "Kesimpulan serat diberi syarat tak kosong."
      },
      {
        "q": "Apakah kernel trivial dan ukuran domain sama dengan kodomain menjamin isomorfisme? Nyatakan asumsi yang diperlukan.",
        "hint": "Bedakan himpunan hingga dari tak hingga.",
        "answer": "Untuk homomorfisme antara dua grup hingga berorde sama, ya: kernel trivial memberi injektif, lalu kesamaan ukuran hingga memberi surjektif. Untuk grup tak hingga tidak cukup: \\(n\\mapsto2n\\) dari Z ke Z mempunyai kernel trivial tetapi tidak surjektif.",
        "rubric": "Menyebut homomorfisme dan hipotesis hingga."
      },
      {
        "q": "Tuliskan rencana bukti bahwa dua grup tertentu isomorfik, lalu bandingkan dengan rencana membuktikan keduanya tidak isomorfik.",
        "hint": "Satu konstruksi cukup untuk keberadaan; kegagalan satu konstruksi tidak membuktikan ketidakadaan.",
        "answer": "Untuk isomorfik: tentukan peta dengan domain/kodomain tepat, buktikan sah, melestarikan operasi, injektif, dan surjektif. Untuk tidak isomorfik: cari sifat yang dipertahankan setiap isomorfisme tetapi berbeda pada kedua grup, misalnya orde elemen atau komutativitas.",
        "rubric": "Rencana mencakup operasi, tidak berhenti pada korespondensi jumlah anggota."
      }
    ],
    "reflection": "Pilih satu latihan lintas konsep. Tulis hipotesis, alat yang dipilih, dan kesimpulan yang benar-benar didukung; sebutkan satu kesimpulan yang belum dapat ditarik.",
    "pdfPage": 357,
    "pdfPrinted": 337,
    "goalRefs": [
      [
        1,
        3,
        4,
        "E"
      ],
      [
        2,
        4,
        5,
        "E"
      ]
    ],
    "assessment": {
      "q": "Untuk \\([x]_{21}\\mapsto[2x]_7\\), susun rantai: aturan sah → kernel → normalitas → kuosien → isomorfisme.",
      "answer": "7 membagi 42, jadi aturan sah dan aditif. Kernel {[0],[7],[14]}, citra seluruh \\(\\mathbb Z_{7}\\). Kernel normal, kuosien mempunyai 7 elemen, dan x+K↦\\([2x]_{7}\\) memberi isomorfisme ke \\(\\mathbb Z_{7}\\). Peta awal surjektif tetapi tidak injektif.",
      "rubric": [
        "Setiap panah mempunyai alasan.",
        "Jangan menyamakan peta awal dengan peta terinduksi."
      ]
    }
  }
];
