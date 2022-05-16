/*boton del menu busqueda en versión movil*/
let botonBusqueda = document.querySelector(".head-nav__lupa");
/*barra de busqueda*/
let barraBusqueda = document.querySelector(".head-form");

botonBusqueda.addEventListener("click", () => {
    barraBusqueda.classList.toggle("head-outside")
});