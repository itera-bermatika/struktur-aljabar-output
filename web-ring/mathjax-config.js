/* Aset tetap lokal dan mengikuti subdirektori GitHub Pages. */
(() => {
 const assets=new URL('vendor/',document.currentScript.src).href;
 window.MathJax={
  loader:{load:['a11y/assistive-mml'],paths:{mathjax:assets+'mathjax',fonts:assets,'mathjax-stix2':assets+'mathjax-stix2-font'}},
  output:{font:'mathjax-stix2',fontPath:assets+'mathjax-stix2-font'},
  svg:{fontCache:'local'},
  tex:{inlineMath:[['\\(','\\)']],displayMath:[['\\[','\\]']],processEscapes:true},
  options:{enableEnrichment:false,enableSpeech:false,enableBraille:false,menuOptions:{settings:{enrich:false,speech:false,braille:false,assistiveMml:true}}},
  startup:{typeset:false,pageReady(){document.documentElement.dataset.mathjaxVersion=window.MathJax.version;document.dispatchEvent(new Event('ring-mathjax-ready'));return Promise.resolve();}}
 };
})();
