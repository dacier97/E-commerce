const listUsuarios=()=> fetch("http://localhost:3000/usuario").then((respuesta) => respuesta.json());

export const userServices = {
  listUsuarios,
};



/*mensaje__error.style.color="red";*/

/*function validarPass() {
  let reg = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,12}$/g;
  if (!pass.value.match(reg)) {
    pass.setCustomValidity(
      "La contraseña debe comenzar con mayuscula, al menos contener un numero y tener entre 6 y 12 caracteres"
    );
  } else {
    pass.setCustomValidity("");
  }
}
pass.addEventListener("input", validarPass);*/

/*formLogin.addEventListener("submit",(e)=>{
  e.preventDefault();
  var mensajeError = [];

  if (mail.value ===null || mail.value===""){
    mensajeError.push("Ingresar Email");
  }
  if (pass.value ===null || pass.value===""){
    mensajeError.push("Ingresar Passport");
  }

  mensaje__error.innerHTML = mensajeError.join(',');
});*/
