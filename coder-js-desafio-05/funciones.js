// FUNCION DIVISORES
// devuelve los divisores del numeroParametro como array
let divisores = (numeroParam) => {
  let output = [];

  // recorro desde 1 hasta la mitad del numero ingresado 
  // en busca de divisores (luego de la mitad no hay divisores enteros)

  for (let i = 1; i<=(numeroParam/2); i++){
    if (numeroParam % i == 0){
      output.push(i);
    }
  }

  output.push(numeroParam);

  return output;
  
}

// FUNCION DIVISORES EN COMUN
// indica los divisores en comun de dos numeros comparando su lista de divisores
const divisoresEnComun = (divisoresNumero1Param, divisoresNumero2Param) =>{
  
  let output = [];
  let divisoresNumero1 = [];
  let divisoresNumero2 = [];
  
  for (let i = 0 ; i <= divisoresNumero1Param.length-1 ; i++){

    for (let j = 0 ; j <= divisoresNumero2Param.length-1 ; j++){

      if(divisoresNumero1Param[i] == divisoresNumero2Param[j]){

        output.push(divisoresNumero1Param[i]);

      }

    }

  }

  return output;

}

// FUNCION NUMERO PRIMO
// devuelve True / False
const numeroPrimo = (listaDivisoresParam) =>{
  
  let output = false;

  // si tiene  2 divisores es primo (1 y si mismo) 
  if(listaDivisoresParam.length == 2){
    output = true;
  }

  return output;

}


// ingreso de numeros con validación

let numero1=0;
let numero2=0;
let valid = true;

do{

  numero1 = Number(prompt("Ingrese Numero entero 1:"));
  numero2 = Number(prompt("Ingrese Numero entero 2:"));

  if (isNaN(numero1) || isNaN(numero2) || numero1 == 0 || numero2 == 0 ||
  Math.trunc(numero1)!=numero1 || Math.trunc(numero2) != numero2){
    valid=false;
    alert(`Ingrese por favor dos números enteros.`);
  }else{  
    valid =true;
  }

}while (!valid);

// variables
let listaDivisores1 = [];
let listaDivisores2 = [];
let listaDivisoresComunes = [];
let esNumeroPrimo1 = false;
let esNumeroPrimo2 = false;

// calculos con funciones
listaDivisores1 = divisores (numero1);
listaDivisores2 = divisores (numero2);
listaDivisoresComunes = divisoresEnComun(listaDivisores1, listaDivisores2);
esNumeroPrimo1 = numeroPrimo(listaDivisores1);
esNumeroPrimo2 = numeroPrimo(listaDivisores2);

// print de resultados
document.write(`<br>`);
document.write(`RESULTADOS`);
document.write(`<br>`);
document.write(`<br>`);
document.write(`Divisores de ${numero1}: ${listaDivisores1}. <br>`);
document.write(`Divisores de ${numero2}: ${listaDivisores2}. <br>`);
document.write(`<br>`);
document.write(`Divisores en común entre ${numero1} y ${numero2}: ${listaDivisoresComunes}. <br>`);
document.write(`<br>`);

if(esNumeroPrimo1){
  document.write(`${numero1} es un número primo.<br>`);
}else{
  document.write(`${numero1} no es un número primo.<br>`);
}

if(esNumeroPrimo2){
  document.write(`${numero2} es un número primo.<br>`);
}else{
  document.write(`${numero2} no es un número primo.<br>`);
}

document.write(`<b><br>Refrescá el explorador para volver a comenzar.<b>`)
