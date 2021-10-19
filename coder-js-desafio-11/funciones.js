function colorRandom(){
  let r = Math.random() * 140;
  let g = Math.random() * 140;
  let b = Math.random() * 140;

  return `rgb(${r}, ${g},${b})`;
}

function validarIngresoPisos(){

  let inputContentPisos = document.getElementById('input-pisos').value;
  let pValidPisos = document.getElementById('p-validacion-pisos');
  pValidPisos.style.display = 'inline';

  if (isNaN(inputContentPisos) || inputContentPisos < 2){
    pValidPisos.style.borderBlockColor = "crimson";
    pValidPisos.style.color = "crimson";
  }else{
    pValidPisos.style.borderBlockColor = "rgb(99, 255, 179)";
    pValidPisos.style.color = "rgb(99, 255, 179)";
  }
  
}

function validarIngresoCabecera(){

  let inputContentCabecera = document.getElementById('input-cabecera').value;
  let pValidCabecera = document.getElementById('p-validacion-cabecera');
  pValidCabecera.style.display = 'inline';
  
  if (isNaN(inputContentCabecera) || inputContentCabecera < 1){
    pValidCabecera.style.borderBlockColor = "crimson";
    pValidCabecera.style.color = "crimson";
  }else{
    pValidCabecera.style.borderBlockColor = "rgb(99, 255, 179)";
    pValidCabecera.style.color = "rgb(99, 255, 179)";
  }
}

function btnEnabled(){
  let btnInicio = document.getElementById('btn-inicio');
  let inputContentCabecera = document.getElementById('input-cabecera').value;
  let inputContentPisos = document.getElementById('input-pisos').value;

  btnInicio.disabled = false;
  btnInicio.style.backgroundColor = "rgb(99, 255, 179)"

  if (isNaN(inputContentCabecera) || Number(inputContentCabecera < 1)){
    btnInicio.disabled = true;
    btnInicio.style.backgroundColor = "crimson";
  }else if(isNaN(inputContentPisos) || Number(inputContentPisos < 2)){
    btnInicio.disabled = true;
    btnInicio.style.backgroundColor = "crimson";
  }3
}

function limpiarDiv(){

  let div = document.getElementById('div-print');

  div.innerHTML="";
}

function generarTartaglia(pisosParam, cabeceraParam){

  // creo array
  let tartagliaRow = new Array();

  // toma el valor de los pisos del contenido del input
  let pisosPiramide = Number(pisosParam);

  // toma el valor de numero de cabecera del contenido del input
  let numeroCabecera = Number(cabeceraParam);


  // creo matriz
  for (let x = 0 ; x<pisosPiramide ; x++ ){
    tartagliaRow[x] = new Array();
  }

  // inicializo fila 0
  tartagliaRow[0][0]=0;
  tartagliaRow[0][1]=numeroCabecera;
  tartagliaRow[0][2]=0;


  // desarrollo tartaglia 


  // recorro filas desde la segunda (indice 1) hasta la ultima
  for (let i = 1 ; i < pisosPiramide ; i++){
    
    //instancio array NUEVA FILA
    let nuevaFila = new Array();

    // push a NUEVA FILA primer elemento = 0
    nuevaFila.push(0);

    // recorro la fila anterior ya generada - del primer indice al anteultimo
    for (let j = 0 ; j <= tartagliaRow[i-1].length-2 ; j++){

      // pusheo en mi array la suma de a pares
      nuevaFila.push(tartagliaRow[i-1][j] + tartagliaRow[i-1][j+1]);
    }

    // push a NUEVA FILA del ultimo elemento = 0
    nuevaFila.push(0);
    
    // recorro nuevaFila y pusheo elementos a la fila de la pirámide
    for (let j = 0 ; j <= nuevaFila.length-1 ; j++){
    
      tartagliaRow[i].push(nuevaFila[j]);
    
    }
    
  }

  // muestra la pirámide

  // recorro las filas del segundo elemento al ante-ultimo 
  // para no mostrar los 0s
  for (let x = 0 ; x < pisosPiramide ; x++){

    let divPrint = document.getElementById('div-print');
    let divLine = document.createElement("div");

    let bgRandomDiv = colorRandom();
    
    divPrint.appendChild(divLine);
    divLine.style.backgroundColor=bgRandomDiv;
    
    for (let y = 1 ; y <= tartagliaRow[x].length-2 ; y++){
      
      let bgRandomSpan = colorRandom();
      let spanNumber = document.createElement("span");
      spanNumber.classList.add('span-number');
      spanNumber.innerHTML = `${tartagliaRow[x][y]}`;
      spanNumber.style.backgroundColor = bgRandomSpan;
      divLine.appendChild(spanNumber);
      
    }

  }

}




