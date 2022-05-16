import { userServices } from "../services/user-services.js";

const formLogin = document.getElementById("formLogin");
const mail = document.getElementById("email");
const pass = document.getElementById("password");


formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  var valid = false;
  
   userServices.listUsuarios().then((data) => {
      data.forEach(({ email, password }) => {
        if (email == mail.value && password == pass.value) {
          valid = true;
          window.location.href = "../agregarP.html";
        }
      });
      console.log(valid);
      if (valid == false) {
        alert("La contraseña o email Incorrecto");
      }
    })
    /*.catch((err) => alert("error Catch"));*/
});