window.addEventListener('load',validar);
var inputs = document.getElementsByTagName('input');

function validar(){
  inputs[0].addEventListener('blur',validarNombre);
  inputs[1].addEventListener('blur',validarNombre);
  inputs[7].addEventListener('blur',validarPassword);
}

function validarNombre(){
  var ExpReg = /[a-zA-Z][a-zA-Z]+/g;
  if(ExpReg.test(this.value) == true){
    console.log(this.parentNode);
      var nuevo = this.value.split(' ').map((e,i) =>  e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()).join(' ');
      this.value = this.value.replace(this.value,nuevo)
  }
  else{
    this.focus();
  }
}
function validarPassword(){
  if(this === inputs[6]){
    return true;
  }
  else{
    alert("Las contraseñas no coinciden");
    return false;
  }
}
