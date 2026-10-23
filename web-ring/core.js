/* Perhitungan eksak pada domain hingga kecil; tanpa pustaka jaringan. */
(function(root){
'use strict';
const mod=(a,n)=>((a%n)+n)%n;
function gcd(a,b){a=Math.abs(a);b=Math.abs(b);while(b)[a,b]=[b,a%b];return a;}
const range=n=>Array.from({length:n},(_,i)=>i);
function residue(n){const e=range(n),units=e.filter(a=>e.some(b=>mod(a*b,n)===mod(1,n))),zero=e.filter(a=>a!==0&&e.some(b=>b!==0&&mod(a*b,n)===0));return {e,units,zero,field:n>1&&units.length===n-1,add:e.map(a=>e.map(b=>mod(a+b,n))),mul:e.map(a=>e.map(b=>mod(a*b,n)))};}
function subset(n,d){if(n%d!==0)throw Error('Pembagi harus membagi modulus');const e=range(n).filter(a=>a%d===0),has=x=>e.includes(x),closed=e.every(a=>e.every(b=>has(mod(a-b,n))&&has(mod(a*b,n)))),ideal=e.every(a=>range(n).every(r=>has(mod(a*r,n))&&has(mod(r*a,n)))),identity=e.find(a=>e.every(b=>mod(a*b,n)===b&&mod(b*a,n)===b));return {e,closed,ideal,identity};}
function quotient(n,d){const ideal=subset(n,d);return {ideal:ideal.e,classes:range(d).map(a=>range(n).filter(x=>mod(x-a,d)===0)),...residue(d)};}
function hom(n,m,k){const well=mod(n*k,m)===0,multiplicative=mod(k*k-k,m)===0,valid=well&&multiplicative;const values=range(n).map(a=>mod(k*a,m));return {well,multiplicative,valid,unital:valid&&mod(k,m)===1,values,kernel:valid?range(n).filter(a=>values[a]===0):[],image:valid?[...new Set(values)].sort((a,b)=>a-b):[]};}
function euclid(a,b){let r=a,s=b,x=1,y=0,u=0,v=1;const steps=[];while(s){const q=Math.floor(r/s),rem=r-q*s;steps.push({a:r,b:s,q,r:rem});[r,s]=[s,rem];[x,u]=[u,x-q*u];[y,v]=[v,y-q*v];}return {g:r,x,y,steps};}
const degree=a=>a===0?-Infinity:31-Math.clz32(a);
function pmul(a,b){let r=0;while(b){if(b&1)r^=a;a<<=1;b>>>=1;}return r;}
function pdiv(a,b){if(!b)throw Error('Pembagi tidak boleh nol');let q=0,r=a;while(r&&degree(r)>=degree(b)){const d=degree(r)-degree(b);q^=1<<d;r^=b<<d;}return {q,r};}
function peval(a,x){let r=0;for(let i=degree(a);i>=0;i--)r=(r*x+((a>>i)&1))%2;return r;}
function pfactor(a){if(degree(a)<1)return null;for(let d=1;d<=Math.floor(degree(a)/2);d++)for(let b=1<<d;b<(1<<(d+1));b++)if(pdiv(a,b).r===0)return [b,pdiv(a,b).q];return null;}
function ptex(a){if(!a)return '0';const terms=[];for(let i=degree(a);i>=0;i--)if((a>>i)&1)terms.push(i===0?'1':i===1?'x':`x^{${i}}`);return terms.join('+');}
function fraction(a,b,c,d,op){if(!b||!d)throw Error('Penyebut tidak boleh nol');const n=op==='add'?a*d+c*b:a*c,den=b*d,g=gcd(n,den),sign=den<0?-1:1;return {n,den,reducedN:sign*n/g,reducedD:sign*den/g};}
function extension(a,b,c,d){return {a:a*c+2*b*d,b:a*d+b*c,norm:a*a-2*b*b};}
const f4add=(a,b)=>a^b,f4mul=(a,b)=>pdiv(pmul(a,b),7).r;
function parity(message,errors){const data=range(4).map(i=>(message>>(3-i))&1),p=data.reduce((a,b)=>a^b,0),coded=[...data,p],received=coded.map((b,i)=>b^(errors.includes(i)?1:0));return {coded,received,syndrome:received.reduce((a,b)=>a^b,0),weight:errors.length};}
const api={mod,gcd,range,residue,subset,quotient,hom,euclid,degree,pmul,pdiv,peval,pfactor,ptex,fraction,extension,f4add,f4mul,parity};
if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.RingMath=api;
})(globalThis);
