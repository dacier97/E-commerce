/*function validarKey(evt){
  var code = (evt.which) ? evt.which : evt.keyCode;

  if(code==8 || code==36) { // backspace.
    return true;
  }else if(code>=48 && code<=57) { // is a number.
    return true;
  } else{ // other keys.
    return false;
  }
}*/

//SOLO NUMEROS
$(function(){
  $("#input-precio").keydown(function(event){
      //alert(event.keyCode);
      if((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode !==8)){
          return false;
      }
  });
});