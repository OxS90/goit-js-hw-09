const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),d=document.body;let a;function n(){d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`}t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,a=setInterval(n,1e3)})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.44046a77.js.map
