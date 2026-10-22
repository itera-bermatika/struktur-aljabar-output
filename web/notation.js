/* Hanya sumber matematika eksplisit diproses. Input pengguna dan SVG dilewati. */
(() => {
 'use strict';
 const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function source(tex,display=false){return `<${display?'div':'span'} class="math-source ${display?'math-display':'math-inline'}" data-tex="${escape(tex)}"${display?' data-display="block"':''}>${escape(tex)}</${display?'div':'span'}>`;}
 function format(text){const re=/\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g;let out='',last=0;for(const m of String(text).matchAll(re)){out+=escape(String(text).slice(last,m.index))+source(m[1]??m[2],m[2]!==undefined);last=m.index+m[0].length;}return out+escape(String(text).slice(last));}
 let ready=false,busy=false,queued=false,observer;
 async function render(){
  if(!ready){queued=true;return;}
  if(busy){queued=true;return;}busy=true;document.documentElement.dataset.mathStatus='rendering';
  try{
   do{
    queued=false;
    const sources=[...document.querySelectorAll('.math-source[data-tex]:not([data-math-state])')].filter(n=>!n.closest('svg,textarea,input,select,[data-no-math]'));
    sources.forEach(n=>n.dataset.mathState='pending');
    for(const n of sources){
     if(!n.isConnected)continue;
     const tex=n.dataset.tex,display=n.dataset.display==='block';
     try{
      const size=parseFloat(getComputedStyle(n).fontSize)||16;
      const result=await window.MathJax.tex2svgPromise(tex,{display,em:size,ex:size/2,containerWidth:n.parentElement?.clientWidth||document.documentElement.clientWidth});
      const graphic=result.querySelector('svg');
      if(graphic)for(const dimension of ['width','height']){const value=graphic.getAttribute(dimension);if(value)graphic.style.setProperty(dimension,value,'important');}
      if(!n.isConnected||n.dataset.tex!==tex)continue;
      if(result.querySelector('[data-mml-node="merror"],mjx-merror'))throw Error('Sumber rumus tidak sah');
      observer.disconnect();n.replaceChildren(result);n.dataset.mathState='ready';observe();
     }catch(error){if(n.isConnected){n.dataset.mathState='error';n.title='Rumus belum berhasil ditampilkan: '+tex;console.error('Typesetting grup:',tex,error);}}
    }
   }while(queued);
  }finally{busy=false;document.documentElement.dataset.mathStatus=document.querySelector('.math-source[data-math-state="error"]')?'error':'ready';document.dispatchEvent(new Event('grup-notation-ready'));}
 }
 let scheduled=false;
 function schedule(){if(scheduled)return;scheduled=true;queueMicrotask(()=>{scheduled=false;render();});}
 function observe(){observer.observe(document.body,{childList:true,subtree:true});}
 function start(){observer=new MutationObserver(records=>{if(records.some(r=>[...r.addedNodes].some(n=>n.nodeType===1&&!n.closest?.('mjx-container,mjx-assistive-mml'))))schedule();});observe();schedule();}
 document.addEventListener('grup-mathjax-ready',()=>{ready=true;schedule();});
 if(window.MathJax?.startup?.promise)window.MathJax.startup.promise.then(()=>{ready=true;schedule();}).catch(()=>document.documentElement.dataset.mathStatus='unavailable');
 window.GrupNotation={inline:tex=>source(tex),display:tex=>source(tex,true),format,request:schedule};
 start();
})();
