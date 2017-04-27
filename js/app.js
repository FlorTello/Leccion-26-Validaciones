window.addEventListener('load',validar);

function validar(){
  var textnombre = document.getElementById('textnombre');
  textnombre.addEventListener('blur',validarNombre);
}

function validarNombre(){
  var ExpReg = /([A-Z]{1}[a-z]+)/g;
  if(ExpReg.test(this.value) == false){
    console.log(this.parentNode);
      this.parentNode.appendChild(mostrarSpan("Error"));
      this.focus();
  }
}

function mostrarSpan(mensaje){
  var span = document.createElement('span');
  span.innerHTML = mensaje;
  return mensaje;
}
