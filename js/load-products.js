import {productServices } from "./producto-services.js";

const square = document.querySelector("[datos-square]");

square.addEventListener("dragover", (e) => {
  e.preventDefault();
  console.log("drag over");
});
square.addEventListener("dragleave", (e) => {
  e.preventDefault();
  console.log("drag leave");
});

square.addEventListener("drop", (e) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  console.log(file)
  cargueFile(file);
});

var urlImageUpload = "";

const cargueFile = (file) => {
  const docType = file.type;
  const validExtensions = ["image/jpeg", "image/jpg", "image/png"];
  if (validExtensions.includes(docType)) {
    const fileReader = new FileReader();
    fileReader.addEventListener("load", (e) => {
      const fileUrl = fileReader.result;
      const clear = document.querySelector("[data-delete]");
      urlImageUpload = fileUrl;
      square.style.backgroundImage = `url(${fileUrl})`;
      square.style.backgroundSize = "cover";
      square.style.backgroundRepeat = "no-repeat";
      square.style.backgroundPosition = "center";
      clear.style.display = "none";
    });

    fileReader.readAsDataURL(file);
  } else {
    alert("El archivo no es valido");
  }
};

const buscarImg = document.getElementById("imagen-disco");

buscarImg.addEventListener("click", importData);

function importData() {
  let input = document.createElement("input");
  input.type = "file";
  input.onchange = () => {
    const file = input.files[0];
    cargueFile(file);
  };
  input.click();
}


const formulario = document.querySelector("[data-form]");
const nombre = document.getElementById("input-nombre");
const precio = document.getElementById("input-precio");
const categoriaPrincipal = document.getElementById("categoria-Principal");
const descripcion = document.getElementById("input-descripcion");
const sendBtn = document.getElementById("sendBtn");

function validarNombre() {
  let reg = /(^\S+\w.*)/g;
  if (nombre.value == "") {
    nombre.setCustomValidity("El nombre del producto no puede estar vacío");
  } else if (!nombre.value.match(reg)) {
    nombre.setCustomValidity(
      "El nombre del producto no puede empezar con un espacio en blanco"
    );
  } else if (nombre.value.match(reg)) {
    nombre.setCustomValidity("");
  }
}
nombre.addEventListener("focus", validarNombre);

precio.addEventListener("blur", () => {
  /*alert("Input field lost focus.");*/
  if (precio.value != "") {
    var valor = precio.value;
    valor = valor.replace(",", ".");
    valor = parseFloat(valor);
    valor = valor.toLocaleString("ES-ar");
    precio.value = valor;
  }
});


formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  if (urlImageUpload == "") {
    alert("Adjunte una imagen");
  }

  if (
    nombre.value != "" &&
    precio.value != "" &&
    descripcion.value != "" &&
    urlImageUpload != ""
  ) {
    productServices
      .productNew(
        nombre.value,
        precio.value,
        descripcion.value,
        urlImageUpload,
        categoriaPrincipal.options[categoriaPrincipal.selectedIndex].text
      )
      .then(() => {
        document.location.href = "/agregado-producto.html";
      })
      .catch((err) => alert("Ocurrió un error"));
  }
});
