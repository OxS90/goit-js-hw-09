var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("7Y9D8");document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".form");function n(e,n){return new Promise(((t,o)=>{const i=Math.random()>.3;setTimeout((()=>{i?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}e.addEventListener("submit",(function(t){t.preventDefault();const o=parseInt(e.elements.delay.value,10),r=parseInt(e.elements.step.value,10),l=parseInt(e.elements.amount.value,10);for(let e=1;e<=l;e++){n(e,o+(e-1)*r).then((({position:e,delay:n})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${n}ms`)})).catch((({position:e,delay:n})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${n}ms`)}))}}))}));
//# sourceMappingURL=03-promises.8f07f4cd.js.map
