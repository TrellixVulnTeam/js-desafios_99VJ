

let inputPisos = document.getElementById('input-pisos');
inputPisos.addEventListener('change', function(){
  validarIngresoPisos();
  btnEnabled();
});


let inputCabecera = document.getElementById('input-cabecera');
inputCabecera.addEventListener('change', function(){
  validarIngresoCabecera();
  btnEnabled();
});

let btnInicio = document.getElementById('btn-inicio');
btnInicio.addEventListener('click', function(){
  limpiarDiv();
  generarTartaglia(inputPisos.value, inputCabecera.value);
});