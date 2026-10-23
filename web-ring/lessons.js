/* Materi kanonis Ring 0.1. */
window.RING_LESSONS=[
  {
    "id": 1,
    "title": "Gelanggang: dua operasi yang berinteraksi",
    "lead": "Penjumlahan membawa struktur grup; perkalian menambah aturan dan membuka pertanyaan baru.",
    "prerequisites": [
      "Grup abelian dan operasi biner; ingat empat aksioma grup."
    ],
    "goals": [
      "Memeriksa aksioma ring dan membedakan sifat tambahan.",
      "Membedakan elemen satuan, unit, dan pembagi nol."
    ],
    "sections": [
      [
        "Delapan syarat, dengan ketertutupan eksplisit",
        "Gelanggang adalah himpunan tak kosong \\(R\\) dengan dua operasi. Penjumlahan memenuhi ketertutupan, asosiativitas, identitas \\(0\\), dan invers aditif; lalu ditambah komutativitas aditif. Perkalian memenuhi ketertutupan dan asosiativitas. Akhirnya berlaku dua hukum distributif: \\(a(b+c)=ab+ac\\) dan \\((a+b)c=ac+bc\\). Empat syarat pertama mengikuti konvensi jilid Grup. Syarat berikut berlaku untuk semua unsur ring yang disebut.",
        [
          "Ketertutupan aditif: \\(a+b\\in R\\) untuk semua \\(a,b\\in R\\).",
          "Asosiativitas aditif: \\((a+b)+c=a+(b+c)\\) untuk semua \\(a,b,c\\in R\\).",
          "Identitas aditif: ada \\(0\\in R\\) dengan \\(a+0=0+a=a\\) untuk semua \\(a\\in R\\).",
          "Invers aditif: setiap \\(a\\in R\\) mempunyai \\(-a\\in R\\) dengan \\(a+(-a)=(-a)+a=0\\).",
          "Komutativitas aditif: \\(a+b=b+a\\) untuk semua \\(a,b\\in R\\).",
          "Ketertutupan perkalian: \\(ab\\in R\\) untuk semua \\(a,b\\in R\\).",
          "Asosiativitas perkalian: \\((ab)c=a(bc)\\) untuk semua \\(a,b,c\\in R\\).",
          "Dua hukum distributif: \\(a(b+c)=ab+ac\\) dan \\((a+b)c=ac+bc\\) untuk semua \\(a,b,c\\in R\\)."
        ]
      ],
      [
        "Komutatif dan memiliki satuan adalah syarat terpisah",
        "Ring komutatif memenuhi \\(ab=ba\\). Ring dengan elemen satuan mempunyai \\(1_R\\) dengan \\(1_Ra=a1_R=a\\) untuk semua \\(a\\). Keduanya bukan aksioma ring umum. Ring \\(2\\mathbb Z\\) komutatif tanpa satuan; \\(M_2(\\mathbb R)\\) memiliki satuan tetapi tidak komutatif. Ring nol memiliki satuan \\(1=0\\)."
      ],
      [
        "Satuan bukan semua unit",
        "Pada ring beridentitas, unit adalah unsur \\(u\\) dengan invers dua sisi: \\(uv=vu=1\\). Satuan \\(\\mathbb Z\\) adalah \\(1\\), sedangkan unitnya \\(1,-1\\). Unsur tak nol \\(a\\) adalah pembagi nol pada ring komutatif bila ada \\(b\\ne0\\) dengan \\(ab=0\\). Definisi pembagi nol tidak memerlukan satuan."
      ],
      [
        "Menuju daerah integral dan lapangan",
        "Daerah integral adalah ring komutatif dengan \\(1\\ne0\\) tanpa pembagi nol. Lapangan adalah ring komutatif dengan \\(1\\ne0\\) yang semua unsur tak nolnya unit. Setiap lapangan daerah integral, tetapi \\(\\mathbb Z\\) bukan lapangan. Ring \\(2\\mathbb Z\\) tanpa pembagi nol tetap bukan daerah integral menurut konvensi ini."
      ]
    ],
    "worked": [
      [
        "Mengapa \\(2\\mathbb Z\\) tidak memiliki satuan?",
        [
          "Selisih dan produk bilangan genap tetap genap, sehingga operasi diwarisi menjadi ring.",
          "Jika \\(e\\) satuan internal, \\(2e=2\\). Di dalam bilangan bulat ini memberi \\(e=1\\).",
          "Tetapi \\(1\\notin2\\mathbb Z\\). Jadi satuan internal tidak ada."
        ]
      ],
      [
        "Pembagi nol dalam \\(\\mathbb Z/6\\mathbb Z\\)",
        [
          "Kelas \\(\\overline2\\) dan \\(\\overline3\\) keduanya tak nol.",
          "Produknya \\(\\overline2\\,\\overline3=\\overline6=\\overline0\\).",
          "Ring ini komutatif dengan satuan, tetapi bukan daerah integral atau lapangan."
        ]
      ]
    ],
    "proof": [
      "Bukti terpandu: perkalian dengan nol",
      [
        "Distributivitas memberi \\(a0=a(0+0)=a0+a0\\).",
        "Tambahkan invers aditif dari \\(a0\\) pada kedua sisi; diperoleh \\(a0=0\\).",
        "Gunakan \\((0+0)a=0a+0a\\) untuk membuktikan \\(0a=0\\). Satuan tidak dipakai."
      ]
    ],
    "exercises": [
      {
        "q": "Apakah \\(\\mathbb Z\\) lapangan?",
        "hint": "Periksa invers dari bilangan dua.",
        "answer": "Tidak. Persamaan \\(2x=1\\) tidak mempunyai solusi bulat."
      },
      {
        "q": "Klasifikasikan \\(2\\mathbb Z\\): komutatif, beridentitas, daerah integral?",
        "hint": "Periksa semua syarat, bukan hanya pembagi nol.",
        "answer": "Komutatif, tanpa satuan, bukan daerah integral menurut konvensi buku."
      },
      {
        "q": "Jika \\(1=0\\) pada ring beridentitas, apa akibatnya?",
        "hint": "Tulis \\(a=a1\\).",
        "answer": "Setiap \\(a=a1=a0=0\\), sehingga ring itu ring nol."
      },
      {
        "q": "Cari unit di \\(\\mathbb Z/6\\mathbb Z\\).",
        "hint": "Cari produk yang sama dengan kelas satu.",
        "answer": "Hanya \\(\\overline1,\\overline5\\), dengan \\(\\overline5^2=\\overline1\\)."
      },
      {
        "q": "Buktikan identitas perkalian unik jika ada.",
        "hint": "Kalikan dua kandidat satuan.",
        "answer": "Jika \\(e,f\\) satuan, \\(e=ef=f\\). Tidak perlu komutativitas."
      }
    ],
    "quiz": {
      "q": "Apakah ketiadaan pembagi nol saja menjamin daerah integral?",
      "choices": [
        "Ya, selalu",
        "Tidak; satuan bukan nol dan komutativitas juga diperlukan",
        "Ya, jika himpunannya tak kosong"
      ],
      "answer": 1,
      "why": "Ring \\(2\\mathbb Z\\) menunjukkan bahwa ketiadaan pembagi nol tidak menyediakan satuan."
    },
    "assessment": {
      "q": "Bandingkan \\(\\mathbb Z/4\\mathbb Z\\) dan \\(2\\mathbb Z\\) terkait satuan dan pembagi nol.",
      "answer": "Yang pertama mempunyai satuan tetapi \\(\\overline2^2=\\overline0\\). Yang kedua tanpa satuan dan tanpa pembagi nol. Keduanya bukan daerah integral.",
      "rubric": [
        "Sebutkan keberadaan satuan.",
        "Berikan saksi pembagi nol atau alasan ketiadaannya.",
        "Periksa seluruh definisi daerah integral."
      ]
    },
    "lab": "residue",
    "prompt": "Prediksikan apakah semua unsur tak nol pada suatu ring modulo mempunyai invers. Ubah modulus dan bandingkan unit dengan pembagi nol.",
    "pitfall": "Identitas aditif selalu ada. Identitas perkalian merupakan syarat tambahan; jangan menuliskannya sebelum hipotesis tersedia.",
    "time": 30,
    "pdfPage": 33
  },
  {
    "id": 2,
    "title": "Subgelanggang: mewarisi dua operasi",
    "lead": "Sebuah bagian menjadi subgelanggang karena tertutup terhadap operasi, bukan karena harus memiliki satuan.",
    "prerequisites": [
      "Definisi ring umum; kriteria subgrup aditif."
    ],
    "goals": [
      "Menggunakan kriteria selisih dan perkalian.",
      "Membedakan satuan internal dan satuan ring induk."
    ],
    "sections": [
      [
        "Kriteria subgelanggang umum",
        "Himpunan tak kosong \\(S\\subseteq R\\) adalah subgelanggang bila \\(a-b\\in S\\) dan \\(ab\\in S\\) untuk semua \\(a,b\\in S\\). Dari \\(a-a\\) diperoleh nol; dari \\(0-a\\) invers aditif; dari \\(a-(-b)\\) jumlah. Sifat asosiatif, komutatif aditif, dan distributif diwarisi dari ring induk."
      ],
      [
        "Dua makna tambahan tentang satuan",
        "Subgelanggang umum tidak perlu satuan. Jika ia memiliki satuan sendiri, sebut subgelanggang beridentitas. Satuannya belum tentu \\(1_R\\): matriks \\(\\operatorname{diag}(a,0)\\) memiliki satuan \\(\\operatorname{diag}(1,0)\\). Bila diwajibkan memuat \\(1_R\\), nyatakan syarat itu secara terpisah."
      ],
      [
        "Irisan dan pembangkitan",
        "Irisan keluarga tak kosong subgelanggang umum tetap memuat nol dan tertutup terhadap selisih serta perkalian. Maka subgelanggang yang dibangkitkan oleh \\(A\\) dapat didefinisikan sebagai irisan semua subgelanggang yang memuat \\(A\\). Pembangkitan umum berbeda dari pembangkitan yang juga diwajibkan memuat \\(1_R\\)."
      ],
      [
        "Menghubungkan dengan pemetaan",
        "Inklusi \\(S\\hookrightarrow R\\) selalu homomorfisme umum karena operasi diwarisi. Ia unital tepat ketika satuan keduanya ada dan sama. Ring \\(2\\mathbb Z\\) merupakan subgelanggang \\(\\mathbb Z\\); ketiadaan satuan internal tidak membatalkan pernyataan itu."
      ]
    ],
    "worked": [
      [
        "Subgelanggang yang dibangkitkan \\(2\\) di bilangan bulat",
        [
          "Semua subgelanggang yang memuat \\(2\\) juga memuat semua kelipatan aditifnya.",
          "Ring \\(2\\mathbb Z\\) sendiri memuat \\(2\\) dan memenuhi kriteria.",
          "Jadi pembangkitan umum memberi \\(2\\mathbb Z\\); versi yang memuat satuan memberi \\(\\mathbb Z\\)."
        ]
      ],
      [
        "Satuan internal pada \\(S=\\{\\overline0,\\overline2,\\overline4\\}\\subseteq\\mathbb Z/6\\mathbb Z\\)",
        [
          "Selisih dan produk dua kelas genap tetap genap modulo enam.",
          "Periksa \\(\\overline4\\,\\overline2=\\overline2\\) dan \\(\\overline4^2=\\overline4\\).",
          "Satuan internalnya \\(\\overline4\\), berbeda dari satuan induk \\(\\overline1\\)."
        ]
      ]
    ],
    "proof": [
      "Bukti terpandu: irisan subgelanggang",
      [
        "Setiap subgelanggang memuat nol, sehingga irisan keluarga tak kosong tidak kosong.",
        "Jika \\(a,b\\) di irisan, keduanya berada dalam setiap anggotanya. Maka \\(a-b\\) dan \\(ab\\) berada dalam setiap anggota.",
        "Keduanya di irisan. Gunakan kriteria umum; tidak perlu menyisipkan syarat satuan."
      ]
    ],
    "exercises": [
      {
        "q": "Buktikan \\(3\\mathbb Z\\) subgelanggang \\(\\mathbb Z\\).",
        "hint": "Tulis anggotanya \\(3a,3b\\).",
        "answer": "Selisih \\(3(a-b)\\) dan produk \\(9ab\\) kelipatan tiga; himpunannya memuat nol."
      },
      {
        "q": "Apakah \\(\\mathbb Z\\subseteq\\mathbb Q\\) juga ideal?",
        "hint": "Kalikan \\(1\\) dengan suatu rasional.",
        "answer": "Bukan ideal, sebab \\((1/2)1\\notin\\mathbb Z\\). Namun ini subgelanggang."
      },
      {
        "q": "Tentukan pembangkitan umum oleh \\(6,10\\) di \\(\\mathbb Z\\).",
        "hint": "Gunakan kombinasi aditif dua pembangkit.",
        "answer": "Karena \\(2=2\\cdot6-10\\), semua kelipatan dua diperoleh; semua operasi tetap genap. Hasilnya \\(2\\mathbb Z\\)."
      },
      {
        "q": "Apakah himpunan kosong subgelanggang?",
        "hint": "Periksa kriteria tak kosong.",
        "answer": "Tidak. Grup aditifnya tidak memiliki identitas."
      },
      {
        "q": "Kapan inklusi subgelanggang beridentitas unital?",
        "hint": "Bandingkan kedua satuannya.",
        "answer": "Tepat ketika \\(1_S=1_R\\); memiliki satuan sendiri belum cukup."
      }
    ],
    "quiz": {
      "q": "Apakah \\(2\\mathbb Z\\) subgelanggang \\(\\mathbb Z\\)?",
      "choices": [
        "Tidak, karena tidak memuat satu",
        "Ya, menurut kriteria umum",
        "Hanya jika operasinya diubah"
      ],
      "answer": 1,
      "why": "Ketertutupan selisih dan perkalian cukup; satuan tidak menjadi syarat umum."
    },
    "assessment": {
      "q": "Tentukan pembangkitan umum dan pembangkitan yang memuat satuan oleh \\(4,6\\) di \\(\\mathbb Z\\).",
      "answer": "Pembangkitan umum \\(2\\mathbb Z\\), sebab \\(6-4=2\\). Jika diwajibkan memuat satuan hasilnya \\(\\mathbb Z\\).",
      "rubric": [
        "Tunjukkan pembangkit dua.",
        "Buktikan ketertutupan dan minimalitas.",
        "Bedakan kedua jenis pembangkitan."
      ]
    },
    "lab": "subset",
    "prompt": "Prediksikan himpunan kelipatan suatu pembagi modulus akan membentuk subgelanggang. Periksa pula satuan internalnya.",
    "pitfall": "Simbol subgelanggang tidak otomatis berarti satuan subgelanggang sama dengan satuan induknya.",
    "time": 30,
    "pdfPage": 53
  },
  {
    "id": 3,
    "title": "Ideal: ketertutupan yang menyerap",
    "lead": "Ideal mengendalikan perkalian dengan elemen dari luar himpunan itu sendiri.",
    "prerequisites": [
      "Subgelanggang umum; subgrup aditif."
    ],
    "goals": [
      "Menguji absorpsi kiri dan kanan.",
      "Membedakan rumus ideal utama pada ring umum dan beridentitas."
    ],
    "sections": [
      [
        "Dua sisi absorpsi",
        "Ideal dua sisi \\(I\\) adalah subgrup aditif dari \\(R\\) dengan \\(ri,ir\\in I\\) untuk semua \\(r\\in R,i\\in I\\). Ideal kiri hanya mensyaratkan \\(ri\\); ideal kanan hanya \\(ir\\). Pada ring komutatif kedua syarat sama. Dalam bacaan ini kata ideal tanpa keterangan berarti ideal dua sisi."
      ],
      [
        "Ideal juga ring umum",
        "Jika \\(a,b\\in I\\), absorpsi memberi \\(ab\\in I\\). Maka setiap ideal dua sisi subgelanggang umum. Ideal tidak wajib mempunyai satuan. Sebaliknya, subgelanggang belum tentu ideal: \\(\\mathbb Z\\subseteq\\mathbb Q\\) gagal menyerap perkalian oleh \\(1/2\\)."
      ],
      [
        "Ideal utama dan peran satuan",
        "Ideal utama \\((a)\\) adalah ideal terkecil yang memuat \\(a\\). Pada ring komutatif umum, \\((a)=\\mathbb Za+Ra\\). Suku kelipatan aditif diperlukan agar pembangkit sendiri termuat. Jika ring memiliki satuan, \\(na=(n1_R)a\\), sehingga \\((a)=Ra\\)."
      ],
      [
        "Menyiapkan operasi kelas",
        "Jika \\(a\\) diganti \\(a+i\\) dan \\(b\\) diganti \\(b+j\\) dengan \\(i,j\\in I\\), selisih produk adalah \\(aj+ib+ij\\). Absorpsi dari dua sisi memastikan selisih ini berada dalam ideal. Inilah mekanisme yang memungkinkan ring kuosien."
      ]
    ],
    "worked": [
      [
        "Ideal \\(4\\mathbb Z\\) di \\(\\mathbb Z\\)",
        [
          "Selisih dua kelipatan empat kembali kelipatan empat.",
          "Untuk \\(r\\in\\mathbb Z\\), \\(r(4k)=4(rk)\\) dan \\((4k)r=4(kr)\\).",
          "Absorpsi terpenuhi dari kedua sisi. Satuan internal tidak diperlukan."
        ]
      ],
      [
        "Ideal kiri yang bukan ideal kanan",
        [
          "Di sini \\(E_{ij}\\) adalah matriks yang entri pada baris \\(i\\), kolom \\(j\\) bernilai satu dan semua entri lain nol.",
          "Di \\(M_2(\\mathbb R)\\), ambil \\(L\\) berupa matriks yang kolom keduanya nol.",
          "Mengalikan matriks sebarang dari kiri tetap menghasilkan kolom kedua nol.",
          "Namun \\(E_{11}\\in L\\) dan \\(E_{11}E_{12}=E_{12}\\notin L\\). Jadi ini bukan ideal dua sisi."
        ]
      ]
    ],
    "proof": [
      "Bukti terpandu: ideal yang memuat satuan",
      [
        "Asumsikan \\(R\\) beridentitas dan \\(1_R\\in I\\).",
        "Untuk setiap \\(r\\in R\\), absorpsi memberi \\(r=r1_R\\in I\\).",
        "Maka \\(I=R\\). Jangan memakai langkah ini pada ring yang satuannya belum tersedia."
      ]
    ],
    "exercises": [
      {
        "q": "Buktikan \\(\\{0\\}\\) dan \\(R\\) ideal.",
        "hint": "Gunakan sifat produk dengan nol dan ketertutupan ring.",
        "answer": "Keduanya subgrup aditif dan menyerap perkalian dari kedua sisi."
      },
      {
        "q": "Tentukan \\((2)\\) dalam ring \\(2\\mathbb Z\\).",
        "hint": "Gunakan kelipatan aditif, bukan hanya produk.",
        "answer": "\\((2)=2\\mathbb Z\\), sementara \\(R2=4\\mathbb Z\\)."
      },
      {
        "q": "Buktikan irisan dua ideal adalah ideal.",
        "hint": "Periksa selisih dan absorpsi pada keduanya.",
        "answer": "Irisan memuat nol; selisih dan perkalian dari kiri/kanan tetap berada pada kedua ideal."
      },
      {
        "q": "Jika ideal di ring beridentitas memuat unit \\(u\\), tunjukkan ia seluruh ring.",
        "hint": "Kalikan dengan invers unit.",
        "answer": "\\(u^{-1}u=1\\in I\\), sehingga \\(r=r1\\in I\\) untuk semua \\(r\\)."
      },
      {
        "q": "Apakah subgelanggang \\(\\{\\operatorname{diag}(a,0)\\}\\) ideal di \\(M_2(\\mathbb R)\\)?",
        "hint": "Coba \\(E_{21}E_{11}\\).",
        "answer": "Tidak: produk tersebut \\(E_{21}\\), yang bukan matriks diagonal dalam himpunan itu."
      }
    ],
    "quiz": {
      "q": "Ideal dua sisi pada ring umum selalu…",
      "choices": [
        "mempunyai satuan yang sama",
        "merupakan subgelanggang umum",
        "merupakan lapangan"
      ],
      "answer": 1,
      "why": "Absorpsi menjamin ketertutupan perkalian internal; tidak menjamin satuan atau invers."
    },
    "assessment": {
      "q": "Bandingkan ideal utama \\((4)\\) pada \\(\\mathbb Z\\) dan pada \\(2\\mathbb Z\\).",
      "answer": "Keduanya \\(4\\mathbb Z\\). Pada ring kedua, rumus produk saja memberi \\(R4=8\\mathbb Z\\), sehingga perlu suku \\(\\mathbb Z4\\).",
      "rubric": [
        "Nyatakan ring induk.",
        "Gunakan rumus yang sesuai.",
        "Jelaskan mengapa pembangkit harus termuat."
      ]
    },
    "lab": "subset",
    "prompt": "Bandingkan himpunan kelipatan di ring modulo: ketertutupan internal, absorpsi, dan satuan internal adalah tiga pemeriksaan berbeda.",
    "pitfall": "Ideal bukan sekadar subgelanggang; perkalian harus menyerap semua anggota ring induk.",
    "time": 30,
    "pdfPage": 85
  },
  {
    "id": 4,
    "title": "Ring kuosien: operasi pada kelas",
    "lead": "Pilihan wakil boleh berubah; hasil operasi pada kelas harus tetap sama.",
    "prerequisites": [
      "Ideal dua sisi; koset aditif dan relasi ekuivalensi."
    ],
    "goals": [
      "Membuktikan operasi kuosien tidak bergantung pada wakil.",
      "Menghitung kelas dan mengenali identitas kuosien."
    ],
    "sections": [
      [
        "Kapan dua wakil menyatakan kelas sama?",
        "Definisikan \\(a\\sim b\\) jika \\(a-b\\in I\\). Karena ideal subgrup aditif, relasi ini ekuivalensi. Kelas \\(a+I\\) adalah koset aditif. Kesamaan \\(a+I=b+I\\) setara dengan \\(a-b\\in I\\), bukan dengan kesamaan wakil."
      ],
      [
        "Dua operasi yang ingin diturunkan",
        "Tetapkan \\((a+I)+(b+I)=(a+b)+I\\) dan \\((a+I)(b+I)=ab+I\\). Rumus ini baru menjadi operasi pada kelas setelah dibuktikan tidak bergantung pada wakil. Sifat absorpsi adalah bagian penting pembuktian perkalian."
      ],
      [
        "Aksioma diwarisi, satuan bersyarat",
        "Ring \\(R/I\\) terbentuk untuk ring umum dan ideal dua sisi. Identitas aditifnya kelas \\(I\\); invers dari \\(a+I\\) adalah \\(-a+I\\). Jika \\(R\\) memiliki satuan, satuan kuosien \\(1_R+I\\). Jika \\(I=R\\), kuosien ring nol. Tanpa satuan induk, jangan otomatis menulis \\(1_R+I\\)."
      ],
      [
        "Peta proyeksi",
        "Pemetaan \\(\\pi:R\\to R/I\\), \\(a\\mapsto a+I\\), adalah homomorfisme umum surjektif dengan inti \\(I\\). Bila satuan induk tersedia, proyeksi unital terhadap satuan kuosien. Kuosien bukan sekadar memilih sebagian elemen: ia mengidentifikasi elemen yang berbeda sebesar unsur ideal."
      ]
    ],
    "worked": [
      [
        "Menghitung pada \\(\\mathbb Z/(4)\\)",
        [
          "Kelas dapat diwakili \\(0,1,2,3\\).",
          "\\((3+(4))+(2+(4))=5+(4)=1+(4)\\).",
          "\\((3+(4))(2+(4))=6+(4)=2+(4)\\). Wakil lain memberi kelas sama."
        ]
      ],
      [
        "Kuosien tanpa satuan: \\(2\\mathbb Z/4\\mathbb Z\\)",
        [
          "Ada dua kelas, diwakili \\(0\\) dan \\(2\\).",
          "Semua produk kelas nol karena produk dua bilangan genap kelipatan empat.",
          "Kelas \\(2\\) tak nol tidak bisa dipertahankan oleh perkalian dengan elemen mana pun. Kuosien ini bukan lapangan."
        ]
      ]
    ],
    "proof": [
      "Bukti terpandu: perkalian sah",
      [
        "Ambil wakil lain \\(a\\prime=a+i\\), \\(b\\prime=b+j\\) dengan \\(i,j\\in I\\).",
        "Hitung \\(a\\prime b\\prime-ab=aj+ib+ij\\).",
        "Ketiga suku di ideal oleh absorpsi dan ketertutupan aditif. Maka kedua produk mewakili kelas sama."
      ]
    ],
    "exercises": [
      {
        "q": "Kapan \\(7+(3)=1+(3)\\)?",
        "hint": "Periksa selisih \\(7-1\\).",
        "answer": "Benar karena selisihnya enam, anggota \\(3\\mathbb Z\\)."
      },
      {
        "q": "Apa identitas aditif \\(R/I\\)?",
        "hint": "Gunakan kelas nol.",
        "answer": "Kelas \\(I=0+I\\); bukan selalu himpunan satu elemen."
      },
      {
        "q": "Hitung \\(\\overline4\\,\\overline5\\) dalam \\(\\mathbb Z/6\\mathbb Z\\).",
        "hint": "Reduksi produk modulo enam.",
        "answer": "Hasilnya \\(\\overline2\\)."
      },
      {
        "q": "Apa \\(R/R\\)?",
        "hint": "Semua wakil mempunyai kelas sama.",
        "answer": "Ring nol: hanya satu kelas dan semua operasi menghasilkan kelas itu."
      },
      {
        "q": "Mengapa ideal kiri saja tidak cukup untuk rumus produk kelas?",
        "hint": "Lihat dua suku campuran pada bukti.",
        "answer": "Dibutuhkan \\(aj\\) dan \\(ib\\) berada dalam ideal; yang kedua menuntut absorpsi dari kanan."
      }
    ],
    "quiz": {
      "q": "Kapan pemeriksaan wakil selesai?",
      "choices": [
        "Setelah memilih wakil terkecil",
        "Setelah menunjukkan semua perubahan wakil memberi kelas hasil sama",
        "Setelah tabel berisi beberapa contoh"
      ],
      "answer": 1,
      "why": "Keterdefinisian memerlukan argumen untuk semua perubahan wakil, bukan satu daftar contoh."
    },
    "assessment": {
      "q": "Jelaskan mengapa kuosien \\(2\\mathbb Z/6\\mathbb Z\\) berbeda dari \\(2\\mathbb Z/4\\mathbb Z\\) terkait satuan.",
      "answer": "Kuosien pertama berorde tiga dan satuannya kelas \\(4\\), sebab \\(4(2k)-2k=6k\\). Kuosien kedua berorde dua dengan produk nol dan tanpa satuan.",
      "rubric": [
        "Jangan menganggap satuan induk tersedia.",
        "Periksa kandidat satuan pada seluruh kelas.",
        "Bedakan kedua perkalian."
      ]
    },
    "lab": "quotient",
    "prompt": "Pilih pembagi \\(d\\) dari modulus \\(n\\), bentuk ideal kelipatan \\(d\\), dan prediksikan tabel ring kuosien.",
    "pitfall": "Banyaknya kelas yang prima tidak cukup untuk menjamin lapangan tanpa memeriksa struktur perkalian dan satuan.",
    "time": 30,
    "pdfPage": 115
  },
  {
    "id": 5,
    "title": "Homomorfisme: inti, citra, dan isomorfisme",
    "lead": "Dua operasi dipertahankan; pemeliharaan satuan perlu disebut sebagai syarat tambahan.",
    "prerequisites": [
      "Ring, ideal, dan ring kuosien."
    ],
    "goals": [
      "Memisahkan homomorfisme umum dan unital.",
      "Menggunakan inti dan citra untuk menjelaskan Teorema Isomorfisme Pertama."
    ],
    "sections": [
      [
        "Dua persamaan penentu",
        "Peta \\(\\varphi:R\\to S\\) homomorfisme umum bila \\(\\varphi(a+b)=\\varphi(a)+\\varphi(b)\\) dan \\(\\varphi(ab)=\\varphi(a)\\varphi(b)\\). Jika keduanya beridentitas dan \\(\\varphi(1_R)=1_S\\), ia unital. Peta nol selalu homomorfisme umum, tetapi tidak unital menuju ring bukan nol."
      ],
      [
        "Inti dan citra",
        "Inti \\(\\ker\\varphi=\\{a:\\varphi(a)=0\\}\\) ideal dua sisi: untuk \\(a\\) di inti, \\(\\varphi(ra)=\\varphi(r)0=0\\), dan serupa dari kanan. Citra \\(\\operatorname{Im}\\varphi\\) subgelanggang umum. Injektivitas setara dengan inti nol."
      ],
      [
        "Satuan citra",
        "Jika \\(R\\) mempunyai satuan, \\(e=\\varphi(1_R)\\) satuan bagi citra dan memenuhi \\(e^2=e\\). Ia tidak harus satuan seluruh kodomain. Contoh \\(q\\mapsto(q,0)\\) ke \\(\\mathbb Q\\times\\mathbb Q\\) memiliki \\(e=(1,0)\\) alih-alih \\((1,1)\\). Bila peta surjektif, satuan citra menjadi satuan kodomain."
      ],
      [
        "Teorema Isomorfisme Pertama",
        "Untuk homomorfisme umum berlaku \\(R/\\ker\\varphi\\cong\\operatorname{Im}\\varphi\\). Peta isomorfismenya \\(a+\\ker\\varphi\\mapsto\\varphi(a)\\). Kesamaan kelas tepat menyatakan kesamaan nilai peta. Teorema ini tidak memerlukan satuan."
      ],
      [
        "Mengapa syarat peta kelas residu demikian?",
        "Untuk \\(\\overline x\\mapsto\\overline{kx}\\) dari \\(\\mathbb Z/n\\mathbb Z\\) ke \\(\\mathbb Z/m\\mathbb Z\\), mengganti wakil \\(x\\) dengan \\(x+n\\) tidak mengubah hasil tepat ketika \\(m\\mid kn\\). Jika syarat ini terpenuhi, peta aditif. Selisih antara hasil kali citra dan citra hasil kali adalah \\((k^2-k)xy\\) modulo \\(m\\); jadi syarat \\(k^2\\equiv k\\pmod m\\) cukup untuk semua pasangan dan perlu dengan memilih \\(x=y=1\\). Unital memerlukan \\(k\\equiv1\\pmod m\\). Ketiga pemeriksaan ini berbeda."
      ]
    ],
    "worked": [
      [
        "Reduksi dari \\(\\mathbb Z\\) ke \\(\\mathbb Z/6\\mathbb Z\\)",
        [
          "Peta \\(a\\mapsto\\overline a\\) mempertahankan jumlah, produk, dan satuan.",
          "Intinya \\(6\\mathbb Z\\); citranya seluruh kodomain.",
          "Teorema isomorfisme memberi \\(\\mathbb Z/6\\mathbb Z\\cong\\operatorname{Im}\\varphi\\)."
        ]
      ],
      [
        "Mengapa \\(\\overline x\\mapsto\\overline{3x}\\) dari \\(\\mathbb Z/6\\mathbb Z\\) ke dirinya homomorfisme umum?",
        [
          "Kesamaan wakil tidak mengubah nilai karena \\(6\\mid3\\cdot6\\).",
          "Peta aditif; untuk produk perlu \\(3^2\\equiv3\\pmod6\\), dan ini benar.",
          "Citranya \\(\\{\\overline0,\\overline3\\}\\), intinya kelas genap, tetapi peta tidak unital terhadap satuan induk."
        ]
      ]
    ],
    "proof": [
      "Bukti terpandu: injektif tepat ketika inti nol",
      [
        "Jika peta injektif dan \\(\\varphi(a)=0=\\varphi(0)\\), maka \\(a=0\\).",
        "Jika inti nol dan \\(\\varphi(a)=\\varphi(b)\\), maka \\(\\varphi(a-b)=0\\).",
        "Jadi \\(a-b=0\\), lalu \\(a=b\\). Hanya struktur aditif diperlukan untuk langkah ini."
      ]
    ],
    "exercises": [
      {
        "q": "Apakah peta nol mempertahankan perkalian?",
        "hint": "Bandingkan \\(0\\) dan \\(0\\cdot0\\).",
        "answer": "Ya. Untuk ring umum ia homomorfisme, meskipun biasanya tidak unital."
      },
      {
        "q": "Apa inti peta nol \\(R\\to S\\)?",
        "hint": "Semua elemen dipetakan ke mana?",
        "answer": "Seluruh \\(R\\)."
      },
      {
        "q": "Jika homomorfisme dari lapangan nonnol, mengapa injektif?",
        "hint": "Ideal lapangan hanya nol dan seluruh lapangan.",
        "answer": "Inti tidak mungkin seluruh lapangan karena peta nonnol; jadi inti nol."
      },
      {
        "q": "Berikan peta injektif yang tidak surjektif.",
        "hint": "Gunakan inklusi \\(\\mathbb Z\\to\\mathbb Q\\).",
        "answer": "Inklusi itu injektif dan unital, tetapi tidak mencapai \\(1/2\\)."
      },
      {
        "q": "Buktikan \\(\\varphi(-a)=-\\varphi(a)\\).",
        "hint": "Terapkan peta pada jumlah dengan invers.",
        "answer": "Dari \\(\\varphi(0)=0\\) dan \\(\\varphi(a)+\\varphi(-a)=0\\), gunakan keunikan invers aditif."
      }
    ],
    "quiz": {
      "q": "Peta nonnol dari lapangan ke ring umum selalu…",
      "choices": [
        "unital terhadap satuan kodomain",
        "injektif",
        "surjektif"
      ],
      "answer": 1,
      "why": "Inti ideal lapangan dan tidak seluruh lapangan, sehingga nol. Satuan citra belum tentu satuan kodomain."
    },
    "assessment": {
      "q": "Analisis \\(\\varphi:\\mathbb Z/4\\mathbb Z\\to\\mathbb Z/2\\mathbb Z\\), \\(\\overline x\\mapsto\\overline x\\).",
      "answer": "Peta sah, unital, dan surjektif. Intinya \\(\\{\\overline0,\\overline2\\}\\); kuosien domain oleh inti isomorfik dengan \\(\\mathbb Z/2\\mathbb Z\\).",
      "rubric": [
        "Periksa wakil.",
        "Tentukan inti dan citra.",
        "Sebutkan teorema yang menghubungkan keduanya."
      ]
    },
    "lab": "hom",
    "prompt": "Untuk peta \\(\\overline x\\mapsto\\overline{kx}\\), prediksikan tiga pemeriksaan: wakil, perkalian, dan satuan.",
    "pitfall": "Peta aditif belum tentu homomorfisme ring. Syarat pemeliharaan perkalian tetap harus diperiksa.",
    "time": 30,
    "pdfPage": 139
  },
  {
    "id": 6,
    "title": "Daerah integral dan lapangan",
    "lead": "Pembatalan, invers, dan struktur ideal menunjukkan tiga tingkat kekuatan yang berbeda.",
    "prerequisites": [
      "Pembagi nol, unit, ideal, dan homomorfisme."
    ],
    "goals": [
      "Memeriksa seluruh hipotesis daerah integral dan lapangan.",
      "Membedakan kuosien oleh ideal dan lapangan pecahan."
    ],
    "sections": [
      [
        "Pembatalan tidak menyediakan invers",
        "Dalam daerah integral, \\(a\\ne0\\) dan \\(ab=ac\\) memberi \\(a(b-c)=0\\), sehingga \\(b=c\\). Tetapi persamaan \\(ax=b\\) belum tentu mempunyai solusi. Di \\(\\mathbb Z\\), \\(2x=1\\) tidak terpecahkan. Jika daerah integral hingga, perkalian oleh unsur tak nol injektif lalu surjektif; setiap unsur tak nol mempunyai invers."
      ],
      [
        "Karakteristik yang tidak bergantung pada satuan",
        "Pada ring umum, karakteristik adalah bilangan positif terkecil \\(n\\) dengan \\(na=0\\) untuk semua \\(a\\), atau nol bila tidak ada. Untuk ring beridentitas, ini setara dengan \\(n1_R=0\\). Karakteristik daerah integral atau lapangan adalah nol atau prima: bila \\(n=rs\\) komposit, \\((r1)(s1)=0\\) bertentangan dengan minimalitas \\(n\\) dan ketiadaan pembagi nol."
      ],
      [
        "Ideal prima dan maksimal",
        "Pada ring komutatif, ideal sejati \\(P\\) prima bila \\(ab\\in P\\) memberi \\(a\\in P\\) atau \\(b\\in P\\). Ideal sejati \\(M\\) maksimal bila tidak ada ideal di antaranya dan seluruh ring. Untuk ring komutatif beridentitas, \\(R/P\\) daerah integral tepat ketika \\(P\\) prima, dan \\(R/M\\) lapangan tepat ketika \\(M\\) maksimal. Tanpa satuan, karakterisasi ini dapat gagal."
      ],
      [
        "Membangun lapangan pecahan",
        "Untuk daerah integral \\(D\\), pasangan \\((a,b)\\) dengan \\(b\\ne0\\) disetarakan oleh \\((a,b)\\sim(c,d)\\) bila \\(ad=bc\\). Kelasnya ditulis \\(a/b\\). Jumlahnya \\((ad+bc)/(bd)\\) dan produknya \\(ac/(bd)\\). Penyebut tak nol karena \\(D\\) tanpa pembagi nol. Peta \\(a\\mapsto a/1\\) menyisipkan \\(D\\) ke lapangan \\(\\operatorname{Frac}(D)\\). Konstruksi ini berbeda dari ring kuosien \\(R/I\\)."
      ]
    ],
    "worked": [
      [
        "Membandingkan dua ideal pada \\(\\mathbb Z\\)",
        [
          "Ideal \\((0)\\) prima karena \\(\\mathbb Z\\) tanpa pembagi nol, tetapi bukan maksimal: \\((0)\\subsetneq(2)\\subsetneq\\mathbb Z\\).",
          "Ideal \\((5)\\) maksimal karena kuosiennya lapangan \\(\\mathbb F_5\\).",
          "Jadi prima tidak selalu maksimal."
        ]
      ],
      [
        "Pecahan dari bilangan bulat",
        [
          "Pasangan \\((2,3)\\) dan \\((4,6)\\) setara karena \\(2\\cdot6=3\\cdot4\\).",
          "Jumlah \\(2/3+1/6=(12+3)/18=5/6\\).",
          "Invers dari kelas \\(2/3\\) ialah \\(3/2\\); penyisipan bilangan bulat mengirim \\(a\\) ke \\(a/1\\)."
        ]
      ]
    ],
    "proof": [
      "Bukti terpandu: daerah integral hingga adalah lapangan",
      [
        "Untuk \\(a\\ne0\\), peta \\(x\\mapsto ax\\) injektif oleh pembatalan.",
        "Domain hingga membuat peta injektif ini surjektif.",
        "Maka \\(1\\) ada pada citra, sehingga \\(ab=1\\) untuk suatu \\(b\\). Komutativitas memberi invers dua sisi."
      ]
    ],
    "exercises": [
      {
        "q": "Mengapa \\(2\\mathbb Z\\) bukan daerah integral?",
        "hint": "Periksa satuan.",
        "answer": "Ia tidak memiliki elemen satuan internal, walaupun tanpa pembagi nol."
      },
      {
        "q": "Apa karakteristik \\(\\mathbb Z/6\\mathbb Z\\)?",
        "hint": "Cari kelipatan terkecil dari \\(\\overline1\\) yang nol.",
        "answer": "Enam. Ring ini bukan daerah integral, sehingga karakteristiknya boleh komposit."
      },
      {
        "q": "Apakah \\((0)\\) maksimal di \\(\\mathbb Q\\)?",
        "hint": "Periksa ideal lapangan.",
        "answer": "Ya. Hanya ada ideal nol dan seluruh lapangan, dan ideal nol sejati."
      },
      {
        "q": "Mengapa transitivitas relasi pecahan memerlukan tanpa pembagi nol?",
        "hint": "Dari \\(ad=bc\\) dan \\(cf=de\\), peroleh \\(d(af-be)=0\\).",
        "answer": "Karena \\(d\\ne0\\), boleh dibatalkan sehingga \\(af=be\\)."
      },
      {
        "q": "Berikan maksimal yang tidak prima jika satuan tidak diasumsikan.",
        "hint": "Gunakan \\(4\\mathbb Z\\) di \\(2\\mathbb Z\\).",
        "answer": "Kuosien aditif berorde dua membuat ideal itu maksimal; tetapi \\(2\\cdot2\\in4\\mathbb Z\\) dan kedua faktor bukan anggota ideal."
      }
    ],
    "quiz": {
      "q": "Untuk teorema maksimal tepat ketika kuosien lapangan, ring induk pada bacaan ini harus…",
      "choices": [
        "komutatif beridentitas",
        "sekadar tak kosong",
        "tanpa invers aditif"
      ],
      "answer": 0,
      "why": "Hipotesis komutatif beridentitas serta ideal sejati memastikan struktur kuosien mempunyai satuan bukan nol dan invers yang diperlukan."
    },
    "assessment": {
      "q": "Bandingkan \\(\\mathbb Z/(3)\\) dan \\(\\operatorname{Frac}(\\mathbb Z)\\).",
      "answer": "Yang pertama lapangan hingga berkarakteristik tiga dan mengidentifikasi kelipatan tiga dengan nol. Yang kedua \\(\\mathbb Q\\), tak hingga, berkarakteristik nol, serta memuat salinan injektif \\(\\mathbb Z\\).",
      "rubric": [
        "Bedakan identifikasi kelas dan penambahan invers penyebut.",
        "Nyatakan karakteristik.",
        "Nyatakan injektivitas peta asal."
      ]
    },
    "lab": "fraction",
    "prompt": "Prediksikan hasil penjumlahan atau perkalian dua pecahan, lalu bandingkan representasi hasil dan kelas yang disederhanakan.",
    "pitfall": "Daerah integral dan lapangan selalu memiliki satuan bukan nol. Jangan menyamakan lapangan pecahan dengan sembarang ring kuosien.",
    "time": 30,
    "pdfPage": 173
  },
  {
    "id": 7,
    "title": "Divisibilitas, Euclid, PID, dan UFD",
    "lead": "Pembagian bersisa menghubungkan perhitungan pembagi bersama dengan ideal dan faktorisasi.",
    "prerequisites": [
      "Daerah integral, unit, dan ideal utama."
    ],
    "goals": [
      "Menghitung Euclid dan identitas Bézout.",
      "Membaca arah implikasi antarstruktur."
    ],
    "sections": [
      [
        "Divisibilitas dan asosiasi",
        "Dalam daerah integral \\(D\\), \\(a\\mid b\\) berarti \\(b=ac\\) untuk suatu \\(c\\in D\\). Dua unsur berasosiasi jika berbeda sebesar faktor unit. Pembagi bersama terbesar membagi kedua unsur dan dibagi oleh setiap pembagi bersama. Keunikannya hanya sampai asosiasi; terbesar tidak mengacu pada urutan numerik."
      ],
      [
        "Fungsi Euclid",
        "Konvensi kita memakai \\(\\delta:D\\setminus\\{0\\}\\to\\mathbb Z_{>0}\\) dengan \\(\\delta(a)\\le\\delta(ab)\\) untuk \\(a,b\\ne0\\). Untuk pembagi \\(a\\ne0\\), ada \\(b=qa+r\\) dengan \\(r=0\\) atau \\(\\delta(r)<\\delta(a)\\). Pada bilangan bulat gunakan nilai mutlak; pada polinomial atas lapangan gunakan derajat ditambah satu."
      ],
      [
        "Dari Euclid ke PID",
        "Pilih unsur tak nol berukuran Euclid terkecil dalam ideal tak nol. Sisa pembagian setiap anggota ideal oleh unsur ini tetap dalam ideal. Minimalitas membuat sisa nol, sehingga ideal tersebut utama. Maka daerah Euclid adalah PID, yaitu daerah integral yang setiap idealnya utama."
      ],
      [
        "Faktorisasi",
        "Unsur prima tak nol dan bukan unit membagi salah satu faktor setiap produk yang dibaginya. Unsur tak tereduksi tak nol dan bukan unit hanya terfaktor dengan salah satu faktor unit. Prima mengakibatkan tak tereduksi; di PID keduanya ekuivalen. PID mengakibatkan UFD. Keunikan faktorisasi berarti unik sampai urutan dan asosiasi, bukan unik secara literal."
      ]
    ],
    "worked": [
      [
        "Euclid pada \\(30,18\\)",
        [
          "\\(30=18+12\\) dan \\(18=12+6\\).",
          "\\(12=2\\cdot6+0\\), jadi pembagi bersama terbesar positifnya enam.",
          "Substitusi balik memberi \\(6=2\\cdot18-30\\)."
        ]
      ],
      [
        "Ideal \\((6,10)\\)",
        [
          "Semua kombinasi \\(6r+10s\\) genap.",
          "Karena \\(2=2\\cdot6-10\\), dua berada dalam ideal.",
          "Dua inklusi memberikan \\((6,10)=(2)\\)."
        ]
      ]
    ],
    "proof": [
      "Bukti terpandu: prima mengakibatkan tak tereduksi",
      [
        "Jika \\(p=ab\\) dan \\(p\\) prima, ia membagi \\(a\\) atau \\(b\\).",
        "Jika \\(a=pc\\), substitusi memberi \\(p=pcb\\). Batalkan \\(p\\ne0\\) untuk memperoleh \\(1=cb\\).",
        "Maka \\(b\\) unit. Kasus lainnya memberi \\(a\\) unit."
      ]
    ],
    "exercises": [
      {
        "q": "Hitung pembagi bersama terbesar \\(42,30\\).",
        "hint": "Jalankan pembagian bersisa.",
        "answer": "\\(42=30+12\\), \\(30=2\\cdot12+6\\), \\(12=2\\cdot6\\). Hasilnya enam."
      },
      {
        "q": "Apakah \\(-6\\) juga pembagi bersama terbesar \\(30,18\\)?",
        "hint": "Gunakan asosiasi.",
        "answer": "Ya, karena berbeda dari enam dengan unit minus satu."
      },
      {
        "q": "Mengapa derajat ditambah satu dipakai sebagai fungsi Euclid?",
        "hint": "Kodomainnya positif.",
        "answer": "Konstanta tak nol berderajat nol, sehingga penambahan satu memastikan nilai positif."
      },
      {
        "q": "Buktikan lapangan merupakan PID.",
        "hint": "Daftar semua idealnya.",
        "answer": "Ideal lapangan hanya \\((0)\\) dan \\((1)\\), sehingga semuanya utama."
      },
      {
        "q": "Apa arti unik dalam UFD?",
        "hint": "Perhatikan unit dan urutan.",
        "answer": "Setelah permutasi faktor, faktor yang berpasangan berasosiasi dan banyak faktor sama."
      }
    ],
    "quiz": {
      "q": "Apakah UFD langsung mengakibatkan PID?",
      "choices": [
        "Ya",
        "Tidak; arah itu tidak tersedia",
        "Ya jika ada satuan"
      ],
      "answer": 1,
      "why": "UFD mengatur faktorisasi unsur, sementara PID mengatur semua ideal. Jangan membalik implikasi."
    },
    "assessment": {
      "q": "Tuliskan pembagi bersama terbesar \\(35,15\\) sebagai kombinasi keduanya.",
      "answer": "\\(35=2\\cdot15+5\\) dan \\(15=3\\cdot5\\), sehingga \\(5=35-2\\cdot15\\).",
      "rubric": [
        "Tulis pembagian.",
        "Temukan sisa tak nol terakhir.",
        "Periksa identitas."
      ]
    },
    "lab": "euclid",
    "prompt": "Prediksikan hasil Euclid dan identitas Bézout sebelum menampilkan langkah pembagian.",
    "pitfall": "Rantai Euclid menuju PID menuju UFD tidak boleh dibalik tanpa alasan tambahan.",
    "time": 30,
    "pdfPage": 211
  },
  {
    "id": 8,
    "title": "Polinomial: koefisien, derajat, evaluasi",
    "lead": "Polinomial formal dan fungsi yang dihasilkannya perlu dibedakan.",
    "prerequisites": [
      "Ring komutatif beridentitas, daerah integral, dan lapangan."
    ],
    "goals": [
      "Menghitung operasi koefisien.",
      "Memakai hipotesis derajat dan pembagian yang tepat."
    ],
    "sections": [
      [
        "Objek formal",
        "Polinomial \\(a_0+a_1x+\\cdots+a_nx^n\\) ditentukan oleh koefisien dengan hanya berhingga banyak yang tak nol. Ring koefisien pada bab ini komutatif beridentitas, sehingga simbol \\(x\\) sebagai polinomial berkoefisien satu dan istilah monik tersedia. Kesamaan polinomial berarti kesamaan semua koefisien."
      ],
      [
        "Operasi dan derajat",
        "Penjumlahan dilakukan per pangkat; koefisien produk ialah \\(c_k=\\sum_{i+j=k}a_i b_j\\). Atas daerah integral, derajat produk polinomial tak nol adalah jumlah derajat. Atas ring dengan pembagi nol koefisien utama dapat lenyap: \\((2x)(2x)=0\\) pada \\((\\mathbb Z/4\\mathbb Z)[x]\\). Polinomial nol tidak diberi derajat bilangan bulat biasa."
      ],
      [
        "Pembagian",
        "Atas lapangan, untuk \\(g\\ne0\\) ada \\(f=qg+r\\), dengan \\(r=0\\) atau \\(\\deg r<\\deg g\\). Penghilangan suku utama membutuhkan invers koefisien utama pembagi. Pada ring komutatif beridentitas umum, prosedur juga berlaku bila koefisien utama pembagi unit. Tidak semua pembagi tak nol memenuhi syarat."
      ],
      [
        "Evaluasi dan akar",
        "Evaluasi \\(f\\mapsto f(a)\\) homomorfisme unital pada ring komutatif beridentitas. Teorema faktor: \\(f(a)=0\\) tepat ketika \\(x-a\\mid f\\). Atas lapangan, polinomial tak nol berderajat \\(n\\) mempunyai paling banyak \\(n\\) akar. Polinomial nol dikecualikan."
      ]
    ],
    "worked": [
      [
        "Dua polinomial, satu fungsi di \\(\\mathbb F_2\\)",
        [
          "Polinomial \\(x^2+x\\) tidak nol sebagai objek formal.",
          "Nilainya pada nol dan satu sama-sama nol.",
          "Jadi fungsi evaluasinya sama dengan fungsi nol, walaupun polinomialnya berbeda."
        ]
      ],
      [
        "Pembagian di \\(\\mathbb F_2[x]\\)",
        [
          "Bagi \\(x^3+1\\) dengan \\(x+1\\).",
          "Pengurangan sama dengan penjumlahan dalam karakteristik dua.",
          "Hasilnya \\(x^3+1=(x+1)(x^2+x+1)\\) dengan sisa nol."
        ]
      ]
    ],
    "proof": [
      "Bukti terpandu: teorema faktor",
      [
        "Pembagian oleh polinomial monik memberi \\(f=(x-a)q+r\\), dengan sisa konstanta.",
        "Evaluasi pada \\(a\\) menghasilkan \\(f(a)=r\\).",
        "Jadi evaluasi nol tepat ketika sisa nol."
      ]
    ],
    "exercises": [
      {
        "q": "Hitung \\((x+1)^2\\) dalam \\(\\mathbb F_2[x]\\).",
        "hint": "Dua menjadi nol.",
        "answer": "Hasilnya \\(x^2+1\\)."
      },
      {
        "q": "Apa derajat produk polinomial tak nol atas lapangan?",
        "hint": "Periksa koefisien utama.",
        "answer": "Jumlah derajat, karena produk koefisien utama tidak nol."
      },
      {
        "q": "Apakah \\(x/2\\) anggota \\(\\mathbb Z[x]\\)?",
        "hint": "Periksa koefisien.",
        "answer": "Tidak; koefisien satu per dua bukan bilangan bulat."
      },
      {
        "q": "Bisakah membagi \\(x\\) oleh \\(2\\) di \\(\\mathbb Z[x]\\) dengan syarat sisa seperti atas lapangan?",
        "hint": "Derajat sisa harus kurang dari nol.",
        "answer": "Tidak. Sisa harus nol, sedangkan \\(x=2q\\) tidak mempunyai solusi di ring itu."
      },
      {
        "q": "Mengapa \\(F[x]\\) daerah integral jika \\(F\\) lapangan?",
        "hint": "Gunakan koefisien utama.",
        "answer": "Produk dua polinomial tak nol memiliki koefisien utama tak nol, sehingga produknya tak nol."
      }
    ],
    "quiz": {
      "q": "Apakah polinomial dan fungsi polinomial selalu sama?",
      "choices": [
        "Ya",
        "Tidak; pada lapangan hingga fungsi evaluasi dapat sama",
        "Hanya jika monik"
      ],
      "answer": 1,
      "why": "Polinomial \\(x^2+x\\) dan nol berbeda tetapi memberi fungsi sama di \\(\\mathbb F_2\\)."
    },
    "assessment": {
      "q": "Tentukan sisa \\(x^3+x+1\\) dibagi \\(x+1\\) di \\(\\mathbb F_2[x]\\).",
      "answer": "Sisanya \\(f(1)=1+1+1=1\\), sehingga bukan faktor.",
      "rubric": [
        "Gunakan teorema sisa.",
        "Hitung modulo dua.",
        "Nyatakan apakah pembagian habis."
      ]
    },
    "lab": "polynomial",
    "prompt": "Prediksikan pembagian dan evaluasi polinomial di lapangan dua unsur.",
    "pitfall": "Derajat produk dan prosedur pembagian memerlukan hipotesis pada ring koefisien.",
    "time": 30,
    "pdfPage": 247
  },
  {
    "id": 9,
    "title": "Faktorisasi dan ketaktereduksian",
    "lead": "Uji tanpa akar kuat pada derajat kecil, tetapi bukan uji universal.",
    "prerequisites": [
      "Unit, derajat, pembagian, dan akar polinomial."
    ],
    "goals": [
      "Menguji derajat dua dan tiga.",
      "Menghubungkan ketaktereduksian dengan kuosien lapangan."
    ],
    "sections": [
      [
        "Definisi",
        "Polinomial berderajat positif di \\(F[x]\\) tak tereduksi bila setiap faktorisasi \\(f=gh\\) memuat faktor konstanta tak nol, yaitu unit. Konstanta tak nol bukan tak tereduksi. Setiap polinomial tak nol atas lapangan berasosiasi dengan polinomial monik."
      ],
      [
        "Uji derajat dua atau tiga",
        "Pada kedua derajat ini, tereduksi tepat ketika mempunyai akar pada lapangan koefisien. Jika terfaktor dengan dua derajat positif, salah satunya pasti linear. Pada derajat empat atau lebih, kedua faktor dapat mempunyai derajat paling sedikit dua; tanpa akar belum cukup."
      ],
      [
        "Sebutkan lapangan koefisien",
        "Polinomial \\(x^2+1\\) tak tereduksi atas \\(\\mathbb R\\), tetapi tereduksi atas \\(\\mathbb C\\) menjadi \\((x-i)(x+i)\\). Sifat ini tidak ditentukan oleh tulisan polinomial saja."
      ],
      [
        "Menghasilkan lapangan",
        "Karena \\(F[x]\\) PID, ideal \\((p)\\) untuk polinomial tak konstan maksimal tepat ketika \\(p\\) tak tereduksi. Jadi \\(F[x]/(p)\\) lapangan tepat ketika \\(p\\) tak tereduksi. Inilah hubungan penting faktorisasi dengan konstruksi lapangan."
      ]
    ],
    "worked": [
      [
        "Uji \\(x^2+x+1\\) atas \\(\\mathbb F_2\\)",
        [
          "Nilai pada nol adalah satu.",
          "Nilai pada satu juga satu.",
          "Tidak ada akar; derajat dua membuatnya tak tereduksi."
        ]
      ],
      [
        "Tanpa akar tetapi tereduksi",
        [
          "\\((x^2+x+1)^2=x^4+x^2+1\\) di lapangan dua unsur.",
          "Nilai polinomial derajat empat itu pada nol dan satu keduanya satu.",
          "Namun bentuk kuadratnya sudah menunjukkan faktorisasi menjadi dua faktor berderajat positif."
        ]
      ]
    ],
    "proof": [
      "Bukti terpandu: uji akar derajat kecil",
      [
        "Akar menghasilkan faktor linear melalui teorema faktor.",
        "Sebaliknya, dua faktor positif yang jumlah derajatnya dua atau tiga harus memuat faktor linear.",
        "Faktor linear atas lapangan memberi akar pada lapangan itu."
      ]
    ],
    "exercises": [
      {
        "q": "Faktorkan \\(x^2+1\\) di \\(\\mathbb F_2[x]\\).",
        "hint": "Coba akar satu.",
        "answer": "\\(x^2+1=(x+1)^2\\)."
      },
      {
        "q": "Apakah polinomial linear tak tereduksi?",
        "hint": "Jumlah derajat dua faktor positif.",
        "answer": "Ya; dua faktor positif akan memberi derajat paling sedikit dua."
      },
      {
        "q": "Uji \\(x^3+x+1\\) di \\(\\mathbb F_2[x]\\).",
        "hint": "Uji nol dan satu.",
        "answer": "Keduanya memberi satu; derajat tiga, sehingga tak tereduksi."
      },
      {
        "q": "Mengapa konstanta tak nol bukan tak tereduksi?",
        "hint": "Ingat syarat bukan unit.",
        "answer": "Ia unit di ring polinomial atas lapangan."
      },
      {
        "q": "Kapan \\(F[x]/(p)\\) lapangan untuk \\(p\\) tak konstan?",
        "hint": "Gunakan ideal maksimal pada PID.",
        "answer": "Tepat ketika \\(p\\) tak tereduksi di \\(F[x]\\)."
      }
    ],
    "quiz": {
      "q": "Tanpa akar pada derajat empat menjamin tak tereduksi?",
      "choices": [
        "Ya",
        "Tidak; mungkin hasil kali dua kuadrat",
        "Ya pada lapangan hingga"
      ],
      "answer": 1,
      "why": "Faktor tidak harus linear pada derajat empat."
    },
    "assessment": {
      "q": "Apakah \\(\\mathbb F_2[x]/(x^3+x+1)\\) lapangan dan berapa banyak elemennya?",
      "answer": "Ya: kubiknya tanpa akar. Wakil berderajat kurang dari tiga memberi delapan pilihan koefisien.",
      "rubric": [
        "Uji semua unsur lapangan koefisien.",
        "Gunakan derajat tiga.",
        "Hitung banyak wakil."
      ]
    },
    "lab": "polynomial",
    "prompt": "Bandingkan uji akar dan pencarian faktor di lapangan dua unsur.",
    "pitfall": "Tanpa akar hanya langsung cukup pada derajat dua atau tiga; selalu sebut lapangan koefisien.",
    "time": 30,
    "pdfPage": 279
  },
  {
    "id": 10,
    "title": "Ekstensi lapangan: menambahkan akar",
    "lead": "Akar baru membawa ruang vektor, polinomial minimal, dan aturan reduksi.",
    "prerequisites": [
      "Kuosien polinomial tak tereduksi; dasar ruang vektor."
    ],
    "goals": [
      "Membaca derajat ekstensi sebagai dimensi.",
      "Menghitung pada ekstensi sederhana."
    ],
    "sections": [
      [
        "Lapangan di dalam lapangan",
        "Ekstensi \\(E/F\\) berarti \\(F\\) sublapangan \\(E\\) dengan satuan sama. Lapangan \\(E\\) ruang vektor atas \\(F\\); derajat \\([E:F]\\) adalah dimensinya dan boleh tak hingga. Ini bukan selisih banyaknya elemen."
      ],
      [
        "Aljabar dan polinomial minimal",
        "Unsur \\(\\alpha\\) aljabar bila memenuhi suatu polinomial tak nol atas \\(F\\). Polinomial monik berderajat terkecil yang menolkan unsur itu disebut polinomial minimal dan tak tereduksi. Unsur tanpa polinomial demikian disebut transendental."
      ],
      [
        "Konstruksi kuosien",
        "Jika \\(p\\) monik tak tereduksi berderajat \\(n\\), lapangan \\(F[x]/(p)\\) memuat kelas \\(\\alpha\\) dari \\(x\\) dengan \\(p(\\alpha)=0\\). Setiap unsur mempunyai wakil unik berderajat kurang dari \\(n\\). Jadi \\(1,\\alpha,\\ldots,\\alpha^{n-1}\\) basis dan derajat ekstensi adalah \\(n\\)."
      ],
      [
        "Aturan menara",
        "Untuk \\(F\\subseteq K\\subseteq E\\) dengan derajat berhingga, \\([E:F]=[E:K][K:F]\\). Mengalikan anggota basis dari dua tingkat menghasilkan basis bagi keseluruhan. Rumus ini tentang dimensi, bukan jumlah akar yang ditulis."
      ]
    ],
    "worked": [
      [
        "Lapangan \\(\\mathbb Q(\\sqrt2)\\)",
        [
          "\\(x^2-2\\) tak tereduksi atas rasional: jika pecahan tersederhana kuadratnya dua, pembilang dan penyebut akan sama-sama genap.",
          "Setiap unsur berbentuk \\(a+b\\sqrt2\\) dengan koefisien rasional.",
          "Basisnya \\(1,\\sqrt2\\); sederhanakan produk dengan relasi kuadrat akar dua sama dengan dua."
        ]
      ],
      [
        "Invers pada ekstensi kuadrat",
        [
          "Kalikan \\(a+b\\sqrt2\\ne0\\) dengan sekawan \\(a-b\\sqrt2\\).",
          "Produknya \\(a^2-2b^2\\ne0\\); jika nol, akar dua akan rasional kecuali kedua koefisien nol.",
          "Inversnya \\((a-b\\sqrt2)/(a^2-2b^2)\\)."
        ]
      ]
    ],
    "proof": [
      "Bukti terpandu: polinomial minimal tak tereduksi",
      [
        "Andaikan polinomial minimal terfaktor dengan dua faktor berderajat positif lebih kecil.",
        "Evaluasi pada akar memberi produk nol dalam lapangan.",
        "Salah satu faktor menolkan akar; normalisasi monik bertentangan dengan minimalitas derajat."
      ]
    ],
    "exercises": [
      {
        "q": "Hitung \\((1+\\sqrt2)(3-\\sqrt2)\\).",
        "hint": "Kembangkan dan reduksi.",
        "answer": "Hasilnya \\(1+2\\sqrt2\\)."
      },
      {
        "q": "Cari invers \\(1+\\sqrt2\\).",
        "hint": "Gunakan sekawan.",
        "answer": "\\(\\sqrt2-1\\)."
      },
      {
        "q": "Berapa \\([\\mathbb C:\\mathbb R]\\)?",
        "hint": "Gunakan basis satu dan unit imajiner.",
        "answer": "Dua dengan basis \\(1,i\\)."
      },
      {
        "q": "Derajat dua tingkat menara adalah dua dan tiga. Berapa derajat keseluruhan?",
        "hint": "Kalikan derajat berhingga.",
        "answer": "Enam."
      },
      {
        "q": "Mengapa setiap polinomial yang menolkan unsur belum tentu minimal?",
        "hint": "Bandingkan dengan kuadrat suatu polinomial penol.",
        "answer": "Polinomial penol dapat mempunyai derajat lebih besar; minimal harus monik dan berderajat terkecil."
      }
    ],
    "quiz": {
      "q": "Derajat ekstensi berarti…",
      "choices": [
        "banyak unsur baru",
        "dimensi sebagai ruang vektor",
        "derajat sembarang polinomial penol"
      ],
      "answer": 1,
      "why": "Gunakan dimensi atau derajat polinomial minimal pada ekstensi sederhana aljabar."
    },
    "assessment": {
      "q": "Hitung kuadrat dan invers \\(2+\\sqrt2\\).",
      "answer": "Kuadrat \\(6+4\\sqrt2\\); invers \\((2-\\sqrt2)/2\\).",
      "rubric": [
        "Reduksi kuadrat akar.",
        "Gunakan sekawan.",
        "Periksa produk dengan invers."
      ]
    },
    "lab": "extension",
    "prompt": "Prediksikan hasil perkalian pasangan koefisien pada ekstensi akar dua.",
    "pitfall": "Satuan sublapangan harus sama; istilah subgelanggang beridentitas saja belum mencukupi untuk sublapangan.",
    "time": 30,
    "pdfPage": 315
  },
  {
    "id": 11,
    "title": "Lapangan hingga: pangkat prima",
    "lead": "Karakteristik dan dimensi menentukan banyak unsur, sementara polinomial mengatur operasinya.",
    "prerequisites": [
      "Kuosien polinomial dan ekstensi lapangan."
    ],
    "goals": [
      "Menjelaskan orde pangkat prima.",
      "Menghitung operasi lapangan empat unsur."
    ],
    "sections": [
      [
        "Mengapa pangkat prima?",
        "Lapangan hingga mempunyai karakteristik prima \\(p\\) dan memuat sublapangan prima \\(\\mathbb F_p\\). Sebagai ruang vektor berdimensi \\(n\\), setiap unsur mempunyai \\(n\\) koefisien, masing-masing dengan \\(p\\) pilihan. Jadi ordonya \\(p^n\\)."
      ],
      [
        "Empat unsur",
        "Kuosien \\(\\mathbb F_2[x]/(x^2+x+1)\\) adalah lapangan. Dengan \\(\\alpha\\) kelas dari \\(x\\), berlaku \\(\\alpha^2=\\alpha+1\\). Elemennya \\(0,1,\\alpha,\\alpha+1\\). Ini berbeda dari ring modulo empat."
      ],
      [
        "Grup perkalian",
        "Unsur tak nol lapangan berorde \\(q\\) membentuk grup berorde \\(q-1\\). Lagrange memberi \\(a^{q-1}=1\\) untuk \\(a\\ne0\\), sehingga semua unsur memenuhi \\(a^q=a\\). Kesiklikan grup perkalian merupakan teorema tambahan; ia tidak mengikuti Lagrange saja. Rujukan pengayaan tersedia di Bab 11 PDF."
      ],
      [
        "Orde sama, struktur berbeda",
        "Di lapangan empat unsur setiap unsur memenuhi \\(a+a=0\\). Di ring modulo empat, kelas satu berorde aditif empat dan kelas dua pembagi nol. Kesamaan banyak unsur tidak memastikan isomorfisme ring."
      ]
    ],
    "worked": [
      [
        "Invers \\(\\alpha\\)",
        [
          "Gunakan \\(\\alpha^2=\\alpha+1\\).",
          "\\(\\alpha(\\alpha+1)=\\alpha^2+\\alpha=1\\).",
          "Jadi \\(\\alpha\\) dan \\(\\alpha+1\\) saling invers."
        ]
      ],
      [
        "Mengapa tidak ada lapangan enam unsur?",
        [
          "Orde lapangan hingga harus pangkat satu prima.",
          "Enam mempunyai dua faktor prima berbeda.",
          "Maka ring modulo enam bukan contoh lapangan."
        ]
      ]
    ],
    "proof": [
      "Bukti terpandu: persamaan pangkat",
      [
        "Kasus nol langsung memenuhi \\(a^q=a\\).",
        "Untuk unsur tak nol, Lagrange pada grup perkalian memberi \\(a^{q-1}=1\\).",
        "Kalikan dengan \\(a\\)."
      ]
    ],
    "exercises": [
      {
        "q": "Hitung \\(\\alpha+(\\alpha+1)\\).",
        "hint": "Karakteristik dua.",
        "answer": "Satu."
      },
      {
        "q": "Apa invers \\(\\alpha+1\\)?",
        "hint": "Hitung produk dengan akar.",
        "answer": "\\(\\alpha\\)."
      },
      {
        "q": "Bangun lapangan sembilan unsur.",
        "hint": "Cari kuadrat tanpa akar di lapangan tiga.",
        "answer": "\\(\\mathbb F_3[x]/(x^2+1)\\); kuadrat unsur lapangan tiga hanya nol atau satu, jadi polinomial ini tanpa akar."
      },
      {
        "q": "Apa karakteristik lapangan delapan unsur?",
        "hint": "Tulis \\(8=2^3\\).",
        "answer": "Dua."
      },
      {
        "q": "Mengapa Lagrange saja tidak menjamin grup siklik?",
        "hint": "Gunakan grup Klein.",
        "answer": "Orde setiap unsur membagi orde grup, tetapi tidak ada unsur berorde empat dalam grup Klein."
      }
    ],
    "quiz": {
      "q": "Apakah lapangan empat unsur sama dengan ring modulo empat?",
      "choices": [
        "Ya",
        "Tidak; struktur dan pembagi nol berbeda",
        "Ya setelah mengganti label"
      ],
      "answer": 1,
      "why": "Ring modulo empat memiliki pembagi nol, lapangan tidak."
    },
    "assessment": {
      "q": "Hitung \\(\\alpha^3\\) dan \\(\\alpha^4\\).",
      "answer": "Hasilnya satu dan \\(\\alpha\\), memakai relasi kuadrat dan karakteristik dua.",
      "rubric": [
        "Gunakan relasi.",
        "Hitung modulo dua.",
        "Hubungkan dengan persamaan pangkat."
      ]
    },
    "lab": "finite",
    "prompt": "Prediksikan tabel perkalian lapangan empat unsur dan bandingkan dengan modulo empat.",
    "pitfall": "Lapangan berorde pangkat prima tidak dihitung dengan perkalian modulo pangkat prima itu.",
    "time": 30,
    "pdfPage": 361
  },
  {
    "id": 12,
    "title": "Aplikasi: paritas dan pemeriksaan kesalahan",
    "lead": "Model aljabar memberi jaminan tertentu, sekaligus batas yang perlu dipahami.",
    "prerequisites": [
      "Lapangan dua unsur dan penjumlahan modulo dua."
    ],
    "goals": [
      "Menghitung bit paritas.",
      "Membedakan deteksi dan koreksi kesalahan."
    ],
    "sections": [
      [
        "Bit sebagai unsur lapangan",
        "Pada \\(\\mathbb F_2\\), penjumlahan adalah XOR dan \\(1+1=0\\). Untuk pesan \\(b_1,\\ldots,b_k\\), pilih bit paritas \\(p=b_1+\\cdots+b_k\\) agar jumlah seluruh kata berkode nol."
      ],
      [
        "Jaminan deteksi",
        "Perubahan ganjil banyak bit mengubah jumlah kata sebesar satu, sehingga terdeteksi. Perubahan genap banyak bit dapat tetap memberi jumlah nol. Hasil pemeriksaan bukan penentu lokasi bit yang berubah."
      ],
      [
        "Representasi polinomial",
        "Bit dapat dipakai sebagai koefisien di \\(\\mathbb F_2[x]\\). Sisa pembagian oleh polinomial tetap menghasilkan pemeriksaan aljabar. Ini mengantar ke kode siklik dan CRC; jaminan pola kesalahan yang dideteksi bergantung pada pembagi dan memerlukan bukti tersendiri."
      ],
      [
        "Model tidak melebihi hipotesis",
        "Tabel eksperimen memberi hasil pada pesan yang diuji. Bukti umum dapat memakai linearitas: jika kata diterima \\(r=c+e\\), jumlahnya adalah jumlah kata asal ditambah jumlah pola kesalahan. Lolos suatu pemeriksaan tidak menjamin semua jenis kesalahan tidak terjadi."
      ]
    ],
    "worked": [
      [
        "Mengode pesan \\(1,0,1,1\\)",
        [
          "Jumlah pesan dalam lapangan dua unsur adalah satu.",
          "Tambahkan bit paritas satu; kata terkirim \\(1,0,1,1,1\\) berjumlah nol.",
          "Satu perubahan bit membuat jumlah menjadi satu."
        ]
      ],
      [
        "Dua perubahan dapat lolos",
        [
          "Mulai dari kata \\(1,0,1,1,1\\).",
          "Ubah dua bit pertama sehingga menjadi \\(0,1,1,1,1\\).",
          "Jumlah tetap nol, walaupun pesan berubah."
        ]
      ]
    ],
    "proof": [
      "Bukti terpandu: perubahan ganjil terdeteksi",
      [
        "Tulis kata diterima \\(r=c+e\\).",
        "Jumlah bit \\(c\\) nol; jumlah bit \\(e\\) satu untuk berat ganjil.",
        "Linearitas memberi jumlah bit diterima satu, sehingga pemeriksaan gagal."
      ]
    ],
    "exercises": [
      {
        "q": "Bit paritas pesan \\(1,1,0,0\\)?",
        "hint": "Jumlahkan modulo dua.",
        "answer": "Nol."
      },
      {
        "q": "Dapatkah paritas menentukan lokasi satu kesalahan?",
        "hint": "Coba dua lokasi berbeda.",
        "answer": "Tidak. Semua perubahan satu bit memberi hasil pemeriksaan satu."
      },
      {
        "q": "Apakah tiga perubahan bit terdeteksi?",
        "hint": "Ganjil atau genap?",
        "answer": "Ya, karena ganjil."
      },
      {
        "q": "Apakah empat perubahan bit selalu terdeteksi?",
        "hint": "Jumlah empat satu modulo dua.",
        "answer": "Tidak; paritas tunggal memberi nol."
      },
      {
        "q": "Apa manfaat model \\(r=c+e\\)?",
        "hint": "Pisahkan kata asal dan kesalahan.",
        "answer": "Hasil pemeriksaan hanya bergantung pada pola kesalahan karena linearitas."
      }
    ],
    "quiz": {
      "q": "Jika paritas lolos, apakah pesan pasti benar?",
      "choices": [
        "Ya",
        "Tidak; perubahan genap bisa lolos",
        "Ya jika pesan pendek"
      ],
      "answer": 1,
      "why": "Paritas tunggal tidak mendeteksi semua pola kesalahan."
    },
    "assessment": {
      "q": "Berikan dua pola kesalahan berbeda yang memberi hasil pemeriksaan sama dan tidak nol.",
      "answer": "Ubah hanya posisi pertama atau hanya posisi kedua. Keduanya memberi hasil satu tetapi lokasi berbeda.",
      "rubric": [
        "Pilih lokasi berbeda.",
        "Hitung paritas.",
        "Jelaskan keterbatasan lokasi."
      ]
    },
    "lab": "parity",
    "prompt": "Prediksikan hasil perubahan satu dan dua bit; centang posisi yang diubah untuk menguji dugaan.",
    "pitfall": "Deteksi berbeda dari koreksi. Pemeriksaan yang lolos tidak menjamin pesan bebas kesalahan.",
    "time": 30,
    "pdfPage": 389
  },
  {
    "id": 13,
    "title": "Sintesis: memilih hipotesis yang tepat",
    "lead": "Hubungkan struktur dengan contoh pembeda dan alasan yang dapat dipertanggungjawabkan.",
    "prerequisites": [
      "Bab 1–12; kembali ke prasyarat bila suatu hubungan belum jelas."
    ],
    "goals": [
      "Menyusun implikasi beserta contoh penyangkal arah balik.",
      "Memilih teorema berdasarkan hipotesis lengkap."
    ],
    "sections": [
      [
        "Peta struktur",
        "Lapangan mengakibatkan daerah integral. Daerah Euclid mengakibatkan PID, lalu UFD, lalu daerah integral. Setiap lapangan juga daerah Euclid: pilih fungsi konstan satu pada unsur tak nol dan pembagian dengan sisa nol. Ring komutatif beridentitas belum tentu daerah integral."
      ],
      [
        "Dua mesin konstruksi",
        "Kuosien \\(R/I\\) mengidentifikasi unsur yang selisihnya dalam ideal. Lapangan pecahan \\(\\operatorname{Frac}(D)\\) menambahkan invers penyebut melalui penyisipan injektif. Ekstensi \\(F[x]/(p)\\) memakai kuosien dan ketaktereduksian untuk memperoleh akar baru dalam lapangan."
      ],
      [
        "Periksa sebelum menerapkan",
        "Apakah satuan ada dan bukan nol? Apakah perkalian komutatif atau absorpsi perlu dua sisi? Apakah ideal sejati, peta nonnol, atau polinomial tak nol telah dinyatakan? Menghilangkan syarat ini dapat membuat kesimpulan salah."
      ],
      [
        "Contoh, dugaan, dan bukti",
        "Untuk membuktikan klaim umum, gunakan unsur sebarang dan hipotesis. Untuk menyangkal klaim, satu contoh sah cukup. Pemeriksaan lengkap domain hingga membuktikan sifat untuk domain itu, tetapi bukan otomatis untuk semua modulus atau semua ring."
      ]
    ],
    "worked": [
      [
        "Dua cara memperoleh lapangan",
        [
          "\\(\\mathbb Z/(5)\\) lapangan karena idealnya maksimal.",
          "\\(\\operatorname{Frac}(\\mathbb Z)=\\mathbb Q\\) memuat bilangan bulat secara injektif.",
          "Peta pertama berinti \\(5\\mathbb Z\\), sedangkan peta kedua berinti nol."
        ]
      ],
      [
        "Hipotesis hilang pada homomorfisme lapangan",
        [
          "Klaim: semua homomorfisme dari lapangan injektif.",
          "Peta nol adalah homomorfisme umum yang tidak injektif.",
          "Tambahkan syarat nonnol; inti lalu tidak mungkin seluruh lapangan."
        ]
      ]
    ],
    "proof": [
      "Bukti terpandu: lapangan adalah daerah Euclid",
      [
        "Tetapkan \\(\\delta(a)=1\\) untuk semua \\(a\\ne0\\).",
        "Nilai fungsi pada \\(a\\) dan \\(ab\\) sama, sehingga sifat monoton terpenuhi.",
        "Untuk \\(a\\ne0\\), pilih \\(q=ba^{-1}\\) dan sisa nol pada \\(b=qa+r\\)."
      ]
    ],
    "exercises": [
      {
        "q": "Ring komutatif tanpa pembagi nol yang bukan daerah integral?",
        "hint": "Periksa satuan.",
        "answer": "\\(2\\mathbb Z\\)."
      },
      {
        "q": "Daerah integral bukan lapangan?",
        "hint": "Periksa invers dua.",
        "answer": "\\(\\mathbb Z\\)."
      },
      {
        "q": "Ring beridentitas tetapi tidak komutatif?",
        "hint": "Gunakan matriks.",
        "answer": "\\(M_2(\\mathbb R)\\); \\(E_{11}E_{12}\\ne E_{12}E_{11}\\)."
      },
      {
        "q": "Ideal prima bukan maksimal?",
        "hint": "Gunakan ideal nol pada bilangan bulat.",
        "answer": "\\((0)\\) dalam \\(\\mathbb Z\\)."
      },
      {
        "q": "Ring empat unsur yang bukan lapangan?",
        "hint": "Cari pembagi nol.",
        "answer": "\\(\\mathbb Z/4\\mathbb Z\\), sebab kelas dua kuadratnya nol."
      }
    ],
    "quiz": {
      "q": "Sebelum membalik implikasi teorema, apa yang diperlukan?",
      "choices": [
        "Cukup satu contoh pendukung",
        "Bukti arah balik atau contoh pembeda",
        "Semua panah otomatis ekuivalen"
      ],
      "answer": 1,
      "why": "Contoh pendukung tidak membuktikan klaim umum; contoh penyangkal yang sah dapat menggugurkannya."
    },
    "assessment": {
      "q": "Benarkah ring hingga berorde prima selalu lapangan dalam konvensi umum?",
      "answer": "Salah. Grup aditif \\(\\mathbb Z/2\\mathbb Z\\) dengan perkalian selalu nol adalah ring dua unsur tanpa satuan, bukan lapangan.",
      "rubric": [
        "Nyatakan kedua operasi.",
        "Periksa aksioma ring.",
        "Tunjukkan ketiadaan satuan."
      ]
    },
    "lab": "residue",
    "prompt": "Bandingkan beberapa ring modulo. Ubah temuan menjadi argumen atau contoh penyangkal dengan hipotesis jelas.",
    "pitfall": "Eksperimen membantu menemukan pola; ia tidak menggantikan bukti untuk seluruh kelas ring.",
    "time": 30,
    "pdfPage": 425
  }
];
