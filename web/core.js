/* Perhitungan murni; bisa diperiksa dengan Node tanpa browser. */
(function(root){
 'use strict';
 const mod=(a,n)=>((a%n)+n)%n;
 function gcd(a,b){while(b){[a,b]=[b,a%b];}return Math.abs(a);}
 function generated(n,a){const out=[];let x=0;do{out.push(x);x=mod(x+a,n);}while(x!==0);return out;}
 function cosets(n,a){const h=generated(n,a),seen=new Set(),out=[];for(let x=0;x<n;x++){if(seen.has(x))continue;const c=h.map(y=>mod(x+y,n)).sort((a,b)=>a-b);c.forEach(y=>seen.add(y));out.push({rep:x,values:c});}return {h:h.sort((a,b)=>a-b),cosets:out};}
 const identity=[0,1,2,3];
 const compose=(p,q)=>q.map(x=>p[x]);
 const inverse=p=>p.map((_,i)=>p.indexOf(i));
 function perms(xs){if(!xs.length)return [[]];return xs.flatMap((x,i)=>perms(xs.filter((_,j)=>i!==j)).map(p=>[x,...p]));}
 function power(p,k){let x=p.map((_,i)=>i);for(let i=0;i<k;i++)x=compose(p,x);return x;}
 const r=[1,2,3,0],s=[0,3,2,1];
 const dihedral=Array.from({length:8},(_,i)=>i<4?power(r,i):compose(s,power(r,i-4)));
 const act=(p,c)=>inverse(p).map(i=>c[i]);
 function hom(m,n,k){const valid=mod(m*k,n)===0;return {valid,table:Array.from({length:m},(_,x)=>mod(k*x,n)),kernel:valid?Array.from({length:m},(_,x)=>x).filter(x=>mod(k*x,n)===0):[],image:valid?[...new Set(Array.from({length:m},(_,x)=>mod(k*x,n)))].sort((a,b)=>a-b):[]};}
 function operation(n,kind){const elems=Array.from({length:n},(_,i)=>i).filter(x=>kind!=='units'||gcd(x,n)===1);const op=(a,b)=>mod(kind==='add'?a+b:a*b,n);const id=elems.find(e=>elems.every(a=>op(e,a)===a&&op(a,e)===a));const inverses=elems.map(a=>({a,b:elems.find(b=>op(a,b)===id&&op(b,a)===id)}));return {elems,table:elems.map(a=>elems.map(b=>op(a,b))),id,inverses,group:id!==undefined&&inverses.every(x=>x.b!==undefined)};}
 const api={mod,gcd,generated,cosets,compose,inverse,perms,power,r,s,dihedral,act,hom,operation};
 if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.GroupMath=api;
})(typeof globalThis!=='undefined'?globalThis:this);
