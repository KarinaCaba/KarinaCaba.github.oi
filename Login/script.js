const temaOscuro =() =>{
    document.querySelector("body").setAttribute("data-bs-theme","dark");
   // document.querySelector("#dl-icon").setAttribute("class","dark");
}

const temaClaro=()=>{
    document.querySelector("body").setAttribute("data-bs-theme","light");
}

const cambiarTema=()=>{
    document.querySelector("body").getAttribute("data-bs-theme") === "ligth"?
    temaOscuro() : temaClaro();
}