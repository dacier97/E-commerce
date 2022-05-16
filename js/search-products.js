const search = ()=>{

  const searchbox = document.getElementById("head-input__text").value.toUpperCase();
  const storeItems = document.querySelector(".productos");
  const product = document.querySelectorAll(".producto__items");
  const pname = storeItems.getElementsByTagName("h3");
  /*const pname = document.querySelectorAll(".producto__nombre");*/
 
  for (var i=0; i<pname.length; i++ ){

    let match = product[i].getElementsByTagName('h3')[0];
    if(match){
      let textValue = match.textContent || match.innerHTML
      if(textValue.toUpperCase().indexOf(searchbox)>-1){
        console.log(textValue);
        product[i].style.display = "";
      }else{
        product[i].style.display = "none";
      }
    }
  }
}
