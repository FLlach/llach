function iniciarApp(){navegacionFija(),crearGaleria(),scrollNav()}function navegacionFija(){const e=document.querySelector(".header"),t=document.querySelector(".sobre-festival");window.addEventListener("scroll",()=>{t.getBoundingClientRect().bottom<0?e.classList.add("fijo"):e.classList.remove("fijo")})}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));const scrollNav=()=>{document.querySelectorAll(".navegacion-principal a").forEach(e=>{e.addEventListener("click",e=>{e.preventDefault();const t=e.target.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth"})})})};function mostrarImagen(e){const t=document.createElement("picture");t.innerHTML=`\n        <source srcset="build/img/grande/${e}.avif" type="image/avif">\n        <source srcset="build/img//grande${e}" type="image/webp">\n        <img loadin="lazy" width="200" height="300" src="build/img/grande/${e}.jpg" alt="imagen vocalista">\n        `;const n=document.createElement("div");n.appendChild(t),n.classList.add("overlay");const i=document.createElement("P");i.textContent="X",i.classList.add("btn-cerrar"),n.onclick=()=>{n.remove();document.querySelector("body").classList.remove("fijar-body")},i.onclick=function(){n.remove();document.querySelector("body").classList.remove("fijar-body")},n.appendChild(i);const c=document.querySelector("body");c.appendChild(n),c.classList.add("fijar-body")}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=12;t++){const n=document.createElement("picture");n.innerHTML=`\n        <source srcset="build/img/thumb/${t}.avif" type="image/avif">\n        <source srcset="build/img//thumb${t}" type="image/webp">\n        <img loadin="lazy" width="200" height="300" src="build/img/thumb/${t}.jpg" alt="imagen vocalista">\n        `,n.onclick=function(){mostrarImagen(t)},e.appendChild(n)}}
//# sourceMappingURL=app.js.map
