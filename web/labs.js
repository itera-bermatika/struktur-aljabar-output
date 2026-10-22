/* Presentasi LaTeX eksplisit untuk laboratorium; algoritma tetap di core.js. */
const dNames=['e','r','r²','r³','s','sr','sr²','sr³'];
const dTex=['e','r','r^{2}','r^{3}','s','sr','sr^{2}','sr^{3}'];
const cycleTex=p=>cycle(p).replace(/ /g,'\\,');
function operationLab(host,id){
 host.innerHTML=`<div class="controls">${control('op-n','Modulus n',range(2,12),id===8?12:6)}${control('op-kind','Himpunan dan operasi',[['add','Semua kelas · penjumlahan'],['multiply','Semua kelas · perkalian'],['units','Hanya unit · perkalian']],id===8?'units':'add')}</div><div id="op-result" aria-live="polite"></div>`;
 function update(){
  const n=+$('#op-n').value,kind=$('#op-kind').value,d=C.operation(n,kind),missing=d.inverses.filter(x=>x.b===undefined).map(x=>x.a);
  $('#op-result').innerHTML=`<div class="result-banner ${d.group?'good':'warn'}"><strong>${d.group?'Membentuk grup':'Belum membentuk grup'}</strong><span>Himpunan ${I(texSet(d.elems))}; operasi ${kind==='add'?'penjumlahan':'perkalian'} modulo ${I(String(n))}.</span></div>${table([tm(kind==='add'?'+':'\\times'),...d.elems],d.table.map((r,i)=>[d.elems[i],...r]),'Tabel operasi: pilih baris a, lalu kolom b')}
  <ol class="axiom-checks" aria-label="Pemeriksaan empat aksioma grup"><li><strong>Ketertutupan:</strong> terpenuhi; setiap hasil pada tabel kembali ke himpunan yang dipilih.</li><li><strong>Asosiativitas:</strong> terpenuhi; operasi kelas residu mewarisi sifat ini dari bilangan bulat.</li><li><strong>Identitas:</strong> ${d.id===undefined?'tidak ada':I(String(d.id))+' merupakan identitas dua sisi'}.</li><li><strong>Invers:</strong> ${missing.length?'gagal; tidak setiap elemen mempunyai invers dua sisi':'terpenuhi; setiap elemen mempunyai invers dua sisi'}.</li></ol><p>Himpunan yang dipilih tak kosong. Alasan ketertutupan dan asosiativitas dijelaskan di bawah tabel.</p><div class="facts"><div><small>IDENTITAS</small><strong>${d.id===undefined?'Tidak ada':I(String(d.id))}</strong></div><div><small>BANYAK ELEMEN</small><strong>${d.elems.length}</strong></div><div><small>INVERS DUA SISI</small><strong>${missing.length?'Tidak semua':'Semua ada'}</strong></div></div><p>${missing.length?'Elemen tanpa invers: '+I(texSet(missing))+'. Jadi aksioma invers gagal.':'Pasangan invers: '+d.inverses.map(x=>I(`${x.a}\\leftrightarrow ${x.b}`)).join('; ')+'.'}</p><details><summary>Mengapa tertutup dan asosiatif?</summary><p>Penjumlahan dan perkalian kelas residu mewarisi asosiativitas dari bilangan bulat. Keduanya tertutup pada semua kelas. Pada unit, hasil kali dua unit kembali unit karena jika ${I('a')} dan ${I('b')} memiliki invers, maka ${I('b^{-1}a^{-1}')} adalah invers ${I('ab')}. Pemeriksaan invers pada tabel membantu membedakan himpunan unit dari semua kelas.</p></details>`;
 }
 $('#op-n').onchange=update;$('#op-kind').onchange=update;update();
}
function cosetLab(host,id){
 let a=4;host.innerHTML=`<div class="controls">${control('coset-n','Modulus n',range(2,18),12)}<span id="generator-control"></span></div><div id="coset-result" aria-live="polite"></div>`;
 function generator(){const n=+$('#coset-n').value;a=Math.min(a,n-1);$('#generator-control').innerHTML=control('coset-a','Generator a',range(0,n-1),a);$('#coset-a').onchange=()=>{a=+$('#coset-a').value;update();};update();}
 function update(){
  const n=+$('#coset-n').value,d=C.cosets(n,a),g=C.gcd(n,a);
  if(id===3||id===4){$('#coset-result').innerHTML=`${math(String.raw`H=\langle ${a}\rangle=${texSet(d.h)}`)}<p>Jejak kelipatan mulai dari identitas:</p>${math([...C.generated(n,a),0].join('\\to '))}<p>Setelah kembali ke ${I('0')}, pola berulang. Ada ${d.h.length} anggota berbeda. Bandingkan hasil penjumlahan dua anggota dan invers setiap anggota dengan daftar ${I('H')}.</p><p>${id===4?'Banyak anggota ini sama dengan orde generator.':'Koset dan indeks akan dipelajari pada Bab 7; saat ini fokus pada subgrup yang dibangkitkan.'}</p>`;return;}
  $('#coset-result').innerHTML=`${math(String.raw`H=\langle ${a}\rangle=${texSet(d.h)}`)}<div class="facts"><div><small>ORDE ELEMEN ${I('a')}</small><strong>${d.h.length}</strong></div><div><small>UKURAN ${I('H')}</small><strong>${d.h.length}</strong></div><div><small>INDEKS</small><strong>${d.cosets.length}</strong></div></div><div class="cosets">${d.cosets.map(c=>`<div class="coset"><strong>${I(`${c.rep}+H`)}</strong><span>${c.values.map(v=>`<b>${v}</b>`).join('')}</span></div>`).join('')}</div><p>Jumlah elemen: ${I(`${n}=${d.cosets.length}\\times ${d.h.length}`)} (${d.cosets.length} koset, masing-masing ${d.h.length} elemen).</p>${math(String.raw`\operatorname{ord}([${a}])=\frac{${n}}{\gcd(${n},${a})}=\frac{${n}}{${g}}=${d.h.length}`)}<p>Karena ${I(String.raw`\mathbb{Z}_{${n}}`)} abelian, ${I('H')} normal. Grup kuosien mempunyai <strong>${d.cosets.length} elemen berupa koset</strong>, bukan ${d.h.length}.</p><details><summary>Jejak kelipatan dan operasi kuosien</summary><p>Mulai dari identitas:</p>${math([...C.generated(n,a),0].join('\\to '))}<p>Pada kuosien:</p>${math('(x+H)+(y+H)=(x+y)+H')}<p>Contoh: ${I('(1+H)+(1+H)=2+H')}, yang mungkin sama dengan koset lain di daftar.</p></details>`;
 }
 $('#coset-n').onchange=generator;generator();
}
function homLab(host,id){
 host.innerHTML=`<div class="controls">${control('hom-m','Domain ℤₘ: m',range(2,18),12)}${control('hom-n','Kodomain ℤₙ: n',range(2,18),6)}${control('hom-k','Pengali k',range(0,17),2)}</div><div id="hom-result" aria-live="polite"></div>`;
 function update(){
  const m=+$('#hom-m').value,n=+$('#hom-n').value,k=+$('#hom-k').value,d=C.hom(m,n,k);
  if(!d.valid){$('#hom-result').innerHTML=`<div class="result-banner warn"><strong>Aturan pada kelas residu belum sah.</strong><span>${I(String.raw`${n}\nmid ${k}\cdot ${m}=${k*m}`)}.</span></div><p>Wakil ${I('0')} dan ${I(String(m))} menyatakan elemen yang sama pada ${I(String.raw`\mathbb{Z}_{${m}}`)}, tetapi aturan memberi ${I('[0]')} dan ${I(`[${C.mod(k*m,n)}]`)} pada ${I(String.raw`\mathbb{Z}_{${n}}`)}. Hasil bergantung pada wakil. Karena itu kita tidak menyebut daftar output ini kernel atau citra homomorfisme.</p>`;return;}
  const kernelCosets=C.cosets(m,d.kernel.length===1?0:d.kernel[1]);
  $('#hom-result').innerHTML=`<div class="result-banner good"><strong>Homomorfisme sah</strong><span>${I(String.raw`${n}\mid ${k*m}`)}.</span></div>${math(String.raw`\varphi:\mathbb{Z}_{${m}}\to\mathbb{Z}_{${n}},\qquad [x]_{${m}}\mapsto[${k}x]_{${n}}`)}${table([tm(String.raw`x\in\mathbb{Z}_{${m}}`),tm(String.raw`\varphi(x)\in\mathbb{Z}_{${n}}`)],d.table.map((y,x)=>[x,y]),'Nilai pemetaan untuk setiap elemen domain')}<div class="set-results"><div><h3>Kernel</h3><p>${I(texSet(d.kernel))}</p><small>Elemen domain yang menuju identitas.</small></div><div><h3>Citra</h3><p>${I(texSet(d.image))}</p><small>Nilai kodomain yang tercapai.</small></div></div><p><strong>${d.kernel.length===1?'Injektif':'Tidak injektif'}</strong> karena kernel ${d.kernel.length===1?'trivial':'tidak trivial'}. <strong>${d.image.length===n?'Surjektif':'Tidak surjektif'}</strong> karena citra ${d.image.length===n?'sama dengan':'lebih kecil daripada'} kodomain.</p>${id>=11?`<details open><summary>Dari koset kernel menuju citra</summary>${table(['Koset kernel',tm(String.raw`\varphi(x)`)],kernelCosets.cosets.map(c=>[tm(texSet(c.values)),C.mod(k*c.rep,n)]),'Setiap koset kernel memiliki tepat satu nilai citra')}${math(String.raw`\frac{${m}}{${d.kernel.length}}=${kernelCosets.cosets.length}=|\operatorname{Im}\varphi|`)}<p>Jumlah koset kernel sama dengan jumlah elemen citra. Peta yang membawa setiap koset ke nilai bersamanya merupakan isomorfisme ke citra.</p></details>`:''}`;
 }
 ['hom-m','hom-n','hom-k'].forEach(s=>$('#'+s).onchange=update);update();
}
function permutationLab(host){
 const ps=C.perms([0,1,2]);host.innerHTML=`<div class="controls">${control('sigma','Permutasi σ',ps.map((p,i)=>[i,cycle(p)]),2)}${control('tau','Permutasi τ',ps.map((p,i)=>[i,cycle(p)]),1)}</div><div id="perm-result" aria-live="polite"></div>`;
 function update(){
  const p=ps[+$('#sigma').value],q=ps[+$('#tau').value],pq=C.compose(p,q),qp=C.compose(q,p),same=pq.every((x,i)=>x===qp[i]);
  $('#perm-result').innerHTML=`${math(String.raw`\sigma\tau=${cycleTex(pq)},\qquad \tau\sigma=${cycleTex(qp)}`)}${table([tm('x'),tm('\\tau(x)'),tm('\\sigma(\\tau(x))'),tm('\\sigma(x)'),tm('\\tau(\\sigma(x))')],[0,1,2].map(i=>[i+1,q[i]+1,pq[i]+1,p[i]+1,qp[i]+1]),'Ikuti jalur kanan lebih dahulu')}<p class="result-banner ${same?'good':'warn'}">${same?'Pasangan ini komutatif.':'Pasangan ini tidak komutatif: '+I('\\sigma\\tau\\ne\\tau\\sigma')+'.'}</p><p>Invers ${I('\\sigma')} adalah ${I(cycleTex(C.inverse(p)))}; invers ${I('\\tau')} adalah ${I(cycleTex(C.inverse(q)))}. Identitas ${I('e')} membiarkan semua titik tetap.</p>`;
 }
 $('#sigma').onchange=update;$('#tau').onchange=update;update();
}
function square(p,colors){
 const pts=[[260,150],[150,40],[40,150],[150,260]],pre=C.inverse(p);
 return `<svg class="square" viewBox="0 0 300 300" role="img" aria-label="Persegi: posisi 1 kanan, 2 atas, 3 kiri, 4 bawah. Label asal bergerak mengikuti transformasi."><polygon points="260,150 150,40 40,150 150,260" fill="none" stroke="currentColor" stroke-width="2"/>${pts.map(([x,y],i)=>`<g><circle cx="${x}" cy="${y}" r="23" fill="${colors?(colors[pre[i]]==='M'?'#aa4f37':'#17647a'):'#123c45'}"/><text x="${x}" y="${y+5}" text-anchor="middle" fill="white" font-size="17">${colors?colors[pre[i]]:pre[i]+1}</text><text x="${x+(x===260?33:x===40?-33:0)}" y="${y+(y===40?-30:y===260?40:5)}" text-anchor="middle" fill="currentColor" font-size="12">${i+1}</text></g>`).join('')}</svg>`;
}
function dihedralLab(host){
 host.innerHTML=`<div class="controls">${control('d-first','Transformasi g',dNames.map((x,i)=>[i,x]),1)}${control('d-second','Transformasi h (bekerja dahulu)',dNames.map((x,i)=>[i,x]),4)}</div><div id="d-result" aria-live="polite"></div>`;
 function update(){
  const g=C.dihedral[+$('#d-first').value],h=C.dihedral[+$('#d-second').value],p=C.compose(g,h),rev=C.compose(h,g),idx=C.dihedral.findIndex(q=>q.every((x,i)=>x===p[i]));
  $('#d-result').innerHTML=`<div class="diagram-row"><div><h3>Sebelum</h3>${square([0,1,2,3])}</div><div><h3>Sesudah ${I(`gh=${dTex[idx]}`)}</h3>${square(p)}</div></div>${table(['Label asal','Setelah '+tm('h'),'Setelah '+tm('g\\circ h')],[0,1,2,3].map(i=>[i+1,h[i]+1,p[i]+1]),'Tabel perpindahan titik sudut')}${math(`gh=${cycleTex(p)},\\qquad hg=${cycleTex(rev)}`)}<p>${p.every((x,i)=>x===rev[i])?'Untuk pasangan ini, hasilnya sama.':'Untuk pasangan ini, urutan menghasilkan transformasi berbeda.'}</p><p>Angka kecil di luar titik adalah posisi tetap. Angka putih di dalam titik adalah label asal yang berpindah. Konvensi ${I('r=(1\\,2\\,3\\,4)')}, ${I('s=(2\\,4)')}.</p>`;
 }
 $('#d-first').onchange=update;$('#d-second').onchange=update;update();
}
function colorLab(host){
 const cs=[];for(let i=0;i<4;i++)for(let j=i+1;j<4;j++)cs.push(Array.from({length:4},(_,k)=>k===i||k===j?'M':'B'));
 host.innerHTML=`<div class="controls">${control('color-pair','Posisi awal merah',cs.map((c,i)=>[i,setText(c.flatMap((x,j)=>x==='M'?[j+1]:[]))]),0)}${control('color-g','Transformasi',dNames.map((x,i)=>[i,x]),1)}</div><div id="color-result" aria-live="polite"></div>`;
 const vector=c=>'('+c.map(x=>'\\mathrm{'+x+'}').join(',')+')';
 function update(){
  const c=cs[+$('#color-pair').value],g=C.dihedral[+$('#color-g').value],orbit=[...new Set(C.dihedral.map(p=>C.act(p,c).join('')))];
  $('#color-result').innerHTML=`<div class="diagram-row"><div><h3>Sebelum</h3>${square([0,1,2,3],c)}</div><div><h3>Sesudah transformasi</h3>${square(g,c)}</div></div>${math(vector(c)+'\\longmapsto '+vector(C.act(g,c)))}<p>Orbit konfigurasi ini berisi <strong>${orbit.length} konfigurasi</strong>. Merah ${orbit.length===4?'bertetangga':'berhadapan'}.</p><div class="orbit-list">${orbit.map(s=>`<span>${I(vector([...s]))}</span>`).join('')}</div><p>Ada dua orbit ${I('D_4')}: empat konfigurasi merah bertetangga dan dua konfigurasi merah berhadapan. Jika semua permutasi ${I('S_4')} diizinkan, keenamnya menjadi satu orbit.</p><p>M = merah; B = biru. Perbedaan selalu diberi huruf agar tidak bergantung pada warna. Urutan vektor mengikuti posisi 1,2,3,4.</p>`;
 }
 $('#color-pair').onchange=update;$('#color-g').onchange=update;update();
}

function mappingLab(host){
 host.innerHTML=`<div class="controls">${control('map-rule','Aturan pada domain {−1,0,1}',[['square','Kuadrat'],['shift','Tambah satu']],'square')}${control('map-target','Kodomain',[['small','{0,1}'],['large','{0,1,2}']],'large')}</div><div id="map-result" aria-live="polite"></div>`;
 function update(){const domain=[-1,0,1],target=$('#map-target').value==='small'?[0,1]:[0,1,2],values=domain.map(x=>$('#map-rule').value==='square'?x*x:x+1),valid=values.every(x=>target.includes(x)),image=[...new Set(values)].sort(),injective=image.length===domain.length,surjective=target.every(x=>image.includes(x));
 $('#map-result').innerHTML=table([tm('x'),tm('f(x)')],domain.map((x,i)=>[x,values[i]]),'Setiap input dan hasilnya')+`<p>Domain ${I(texSet(domain))}; kodomain ${I(texSet(target))}; hasil yang diperoleh ${I(texSet(image))}.</p>`+(valid?`<p><strong>Fungsi sah.</strong> ${injective?'Injektif: semua input mempunyai hasil berbeda.':'Tidak injektif: input berbeda dapat mempunyai hasil sama.'} ${surjective?'Surjektif: seluruh kodomain tercapai.':'Tidak surjektif: ada anggota kodomain tidak tercapai.'}</p>`:`<p><strong>Bukan fungsi menuju kodomain yang dipilih:</strong> hasil ${I('2')} berada di luar kodomain. Perbaiki kodomain sebelum menguji injektif atau surjektif.</p>`);
 }$('#map-rule').onchange=update;$('#map-target').onchange=update;update();
}

function s3Lab(host,id){
 const G=C.perms([0,1,2]);
 host.innerHTML=`<div class="controls">${control('s3-h','Subgrup',[['reflection','H = {e,(12)}'],['normal','A₃ = {e,(123),(132)}']],id===10?'normal':'reflection')}${control('s3-a','Wakil a',G.map((x,i)=>[i,cycle(x)]),5)}</div><div id="s3-result" aria-live="polite"></div>`;
 const set=xs=>I('\\{'+xs.map(cycleTex).join(',\\;')+'\\}');
 function update(){const d=C.s3Cosets($('#s3-h').value,+$('#s3-a').value),equal=d.left.map(x=>x.join('')).sort().join('|')===d.right.map(x=>x.join('')).sort().join('|');
 let html=`<p>Operasi: komposisi; faktor kanan bekerja dahulu. Subgrup yang dipilih: ${set(d.H)}.</p><p>${I('a='+cycleTex(d.rep))}</p><div class="set-results"><div><h3>Koset kiri</h3><p>${set(d.left)}</p></div><div><h3>Koset kanan</h3><p>${set(d.right)}</p></div></div><p>Untuk wakil ini kedua koset <strong>${equal?'sama':'berbeda'}</strong>. Kesamaan pada satu wakil saja belum membuktikan kesamaan pada semua wakil.</p>${table(['Koset kiri yang berbeda','Koset kanan yang berbeda'],d.leftCosets.map((c,i)=>[tm('\\{'+c.values.map(cycleTex).join(',\\;')+'\\}'),tm('\\{'+d.rightCosets[i].values.map(cycleTex).join(',\\;')+'\\}')]),'Partisi kiri dan kanan S3; baris tidak menyatakan pasangan koset dengan wakil yang sama')}`;
 if(id===10){html+=`<p><strong>${d.normal?'Normal':'Tidak normal'}.</strong> ${d.normal?'Seluruh enam wakil memberikan koset kiri sama dengan kanan.':'Ada wakil yang koset kiri dan kanannya berbeda.'}</p>`;
 if(d.witness){const w=d.witness;html+=`<div class="caution"><h3>Dua wakil, dua hasil</h3><p>Koset pertama H dapat diwakili ${I(cycleTex(w.first))} atau ${I(cycleTex(w.alternate))}. Koset kedua diwakili ${I(cycleTex(w.second))}. Hasil percobaan perkalian adalah:</p><p>Dengan wakil pertama: ${set(w.result1)}.</p><p>Dengan wakil alternatif: ${set(w.result2)}.</p><p>Hasil berbeda untuk pasangan koset yang sama. Jadi aturan ini belum memberi operasi pada himpunan koset.</p></div>`;}
 else{html+=table(['×',...d.leftCosets.map((_,i)=>tm('C_'+i))],d.quotient.map((r,i)=>[tm('C_'+i),...r.map(x=>tm('C_'+x))]),'Tabel operasi grup kuosien S3/A3')+`<p>${I('C_0=A_3')} dan ${I('C_1=(12)A_3')}. Setiap simbol C menyatakan sebuah koset, bukan satu permutasi. Ketertutupan terlihat pada tabel, asosiativitas diwarisi dari S3, identitas C0, dan masing-masing koset adalah inversnya sendiri.</p>`;}}
 $('#s3-result').innerHTML=html;
 }$('#s3-h').onchange=update;$('#s3-a').onchange=update;update();
}
