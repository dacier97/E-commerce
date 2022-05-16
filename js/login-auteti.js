
function log(){

const passw = 1234;
const user = "admin@gmail.com";

if(document.formulario.password.value == passw && document.formulario.login.value == user){

  window.location.href = "agregarP.html"

  /*const store = document.querySelector(".head-nav__btn");
  store.getElementsByTagName("button").innerHTML = "Salir";
  store.querySelector(".head-nav__btn").innerHTML = "Salir";
  console.log(document.querySelector(".head-nav__btn").innerHTML);
  var el = document.querySelector(".head-nav__btn");
  el.textContent = "Salir!!";*/
  
 
  /*changeBtn();*/
  
}else{

  alert("intentar de nuevo");
}
}

/*function changeBtn (){

allproductos.html.getElementById("cambio").classList.add(".change");
 document.getElementById("cambio").classList.add(".change");
  window.location.href.innerHTML = "allproductos.html"
  const  btnlogin = document.querySelector(".head-nav__btn");
  btnlogin.innerText = "Salirr";
  

}
addEventListener("click", (evento) => {
  btnlogin.href = "login.html";*/


