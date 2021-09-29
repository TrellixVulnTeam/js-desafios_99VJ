let userInput = 0;
let listaNumeros = [];
let valid = true;
let cantidadNumeros=0;

document.write (`Ingresar cantidad de elementos...<br>`);

do{

  // input: cantidad de numeros de la lista
  cantidadNumeros = Number(prompt(`¿Cuantos numeros querés a ingresar en tu LISTA DE NUMEROS:`));
  
  console.log(typeof(cantidadNumeros));
  console.log(cantidadNumeros);

  if (isNaN(cantidadNumeros) || cantidadNumeros<=1){
    alert("Ingresa un número valido (mayor a 1).");
    valid = false;
  }else{
    valid = true;
  }

}while(!valid);

document.write (`<br>`);
document.write (`CANTIDAD DE NUMEROS: ${cantidadNumeros} <br>`);
document.write (`<br>`);
document.write (`Ingresando valores...<br>`);
document.write (`<br>`);

document.write ("LISTA DE NUMEROS INGRESADA:<br>");

// INGRESO DE LOS NUMEROS

// muestra tantos prompts como cantidad de numeros desee ingresar el usuario
for (let i = 0; i<=cantidadNumeros-1;i++){
  
  do{

    // ingreso de datos
    userInput = Number(prompt(`Ingrese número ${i+1} / ${cantidadNumeros}:`));
    
    // validacion
    if (isNaN(userInput)){
      alert("Ingresa un número valido!");
      valid = false;
    }else{
      valid = true;
      listaNumeros.push(userInput);
      document.write (`${listaNumeros[i]}  `);
    }

  }while(!valid);

}

document.write (`<br>`);


// ORDENAMIENTO POR BURBUJEO

// recorre desde el primer indice hasta el anteultimo
for (var i = 0; i<=listaNumeros.length-2; i++){

  // desde el indice siguiente a i, hasta el ultimo indice
  for(var j = i+1; j<=listaNumeros.length-1; j++){

    // compara los elementos
    if (listaNumeros[i] > listaNumeros[j]){
      // swapea los valores del array
      let swap = listaNumeros[i];
      listaNumeros[i] = listaNumeros[j];
      listaNumeros[j] = swap;
    }

  }
}

// muestra la lista ordenada

document.write (`<br>`);
document.write ("LISTA DE NUMEROS ORDENADA de MENOR a MAYOR: <br>");

for (let i = 0; i<=listaNumeros.length-1;i++){
  
  document.write (`${listaNumeros[i]}  `);
  
}

document.write (`<br>`);
document.write (`<br>`);
document.write (`Refresca el navegador para comenzar nuevamente...`);

  