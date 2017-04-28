window.addEventListener('load',validar);

function validar(){
  var textnombre = document.getElementById('textnombre');
  textnombre.addEventListener('blur',validarNombre);
}

function validarNombre(){
  // var res = str.replace(/microsoft/i, "W3Schools");
  var ExpReg = /([A-ZÁÉÍÓÚa-zñáéíóú]+[\s]*)+$/;
  if(ExpReg.test(this.value) == false){
    console.log(this.parentNode);
      // this.parentNode.appendChild(mostrarSpan("Error"));
      this.focus();
  }
  else{
    var nuevo = this.value.split(' ').map((e,i) =>  e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()).join(' ');
    console.log(nuevo);
    this.value = this.value.replace(this.value,nuevo)
  }
}

function mostrarSpan(mensaje){
  var span = document.createElement('span');
  span.innerHTML = mensaje;
  return span;
}
