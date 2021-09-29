

// funcion que calcula el importe total final, sumando el interes y el IVA
// recibe el importe ingresado por el usuario, el % de interes y si se pide con IVA o no.
const calcularFinanciación = (importeParam, interesParam, conIVAParam) => {
  
  // guarda en una variable el importe para calcular posteriormente
  let importeAPagar = importeParam;
  
  if (conIVAParam){

    // agrega el IVA
    importeAPagar = importeAPagar * 1.21;
 
  }

  // calcula el interes en dinero (la funcion recibe %)
  let interes = importeAPagar * (interesParam / 100);
  
  // suma el interes
  importeAPagar = importeAPagar + interes;

  return importeAPagar;

}

const calcularIVA = (importeParam) => {
  let iva = importeParam * 0.21;
  return iva;
}




let importeIngresado;
let cantidadCuotas;
let valorCuota;
let importeFinal;
let interesCuotas;
let valid = true;

// ingreso del importe
do{
  importeIngresado = Number(prompt("Ingrese el importe a pagar:"));

  if (isNaN(importeIngresado) || importeIngresado <= 0){
    valid = false;
    alert(`Ingrese un importe válido.`);
  }else{
    valid = true;
  }

}while(!valid);


// ingreso de cantidad de cuotas
do{
  cantidadCuotas = Number(prompt("Ingrese cantidad de cuotas."))

  switch (cantidadCuotas){
    case 1:
      interesCuotas=0;
      valid = true;
      break;
    case 2:
      interesCuotas=3;
      valid = true;
      break;
    case 3:
      interesCuotas=5;
      valid = true;
      break;
    case 6:
      interesCuotas=9;
      valid = true;
      break;
    case 12:
      interesCuotas=15;
      valid = true;
      break;
    default:
      valid = false;
      alert(`Seleccione cantidad de cuotas: 1, 2, 3, 6 o 12.`)
  }
}while(!valid);


let TotalFinanciacionConIVA=calcularFinanciación(importeIngresado, interesCuotas, true);
let TotalFinanciacionSinIVA=calcularFinanciación(importeIngresado, interesCuotas, false);
let iva = calcularIVA(TotalFinanciacionSinIVA);

// print de resultados
document.write(`-------------------------------------------------------------<br>`);
document.write(`Importe SIN IVA: AR$ ${importeIngresado}<br>`);
document.write(`Cantidad de cuotas: ${cantidadCuotas} cuotas.   (Interés: %${interesCuotas}) <br>`);

document.write(`-------------------------------------------------------------<br>`);
document.write(`<u>SUBTOTALES</u><br>`);
document.write(`TOTAL Financiado: AR$ ${TotalFinanciacionSinIVA}<br>`);
document.write(`IVA (% 21): AR$ ${iva}<br>`);
document.write(`-------------------------------------------------------------<br>`);
document.write(`TOTAL: AR$ ${TotalFinanciacionConIVA}<br>`);
document.write(`-------------------------------------------------------------<br><br>`);
document.write(`<b>Refresca el explorador para volver a calcular...</b>`);