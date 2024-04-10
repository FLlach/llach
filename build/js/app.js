document.addEventListener("DOMContentLoaded", function(){
    iniciarApp();
});

function iniciarApp(){
    crearGaleria();
    scrollNav();
}

function scrollNav(){
    const enlaces = document.querySelectorAll(".navegacion-principal a")

    enlaces.forEach (enlace =>{
        enlace.addEventListener("click", function(e) {
            e.preventDefault();
            
            const seleccion = e.target.attributes.href.value;
            const seccion = document.querySelector(seleccion);
            seccion.scrollIntoView({ behavior: "smooth"});
        });
    });
}

function mostrarImagen(id){
    const imagen = document.createElement("picture")
    imagen.innerHTML = `
        <source srcset="build/img/grande/${id}.avif" type="image/avif">
        <source srcset="build/img//grande${id}" type="image/webp">
        <img loadin="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="imagen vocalista">
        `;
    const overlay = document.createElement("div");
    overlay.appendChild(imagen);
    overlay.classList.add("overlay");

    const cerrarFoto = document.createElement("P");
    cerrarFoto.textContent ="X";
    cerrarFoto.classList.add("btn-cerrar");
    overlay.onclick=()=>{
        overlay.remove()
        const body = document.querySelector("body");
        body.classList.remove("fijar-body")
    }
    cerrarFoto.onclick= function(){
        overlay.remove()
        const body = document.querySelector("body");
        body.classList.remove("fijar-body")
    }

    overlay.appendChild(cerrarFoto)
    
    const body = document.querySelector("body");
    body.appendChild(overlay);
    body.classList.add("fijar-body")

}

function crearGaleria(){
    const galeria = document.querySelector(".galeria-imagenes");
    for (let i =1; i <=12; i++){
        const imagen = document.createElement("picture")
        imagen.innerHTML = `
        <source srcset="build/img/thumb/${i}.avif" type="image/avif">
        <source srcset="build/img//thumb${i}" type="image/webp">
        <img loadin="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="imagen vocalista">
        `;
        imagen.onclick =function(){
            mostrarImagen(i)
        }

        galeria.appendChild(imagen)
    }
}

