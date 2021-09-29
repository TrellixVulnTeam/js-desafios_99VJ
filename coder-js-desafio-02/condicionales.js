function invertirPalabra (palabra) {
  // La funcion invertir palabra devuelve el string que toma
  // invertido simétricamente.

  let output ="";
  const ultimaPosicion = palabra.length -1;

  // recorro la palabra desde la ultima posición hasta la primera
  // y voy concatenando en una variable de salida caracter por caracter
  for (let i=ultimaPosicion; i>-1; i--){
    output=output+ palabra.slice(i, i+1);
    console.log(output);
  }

  return(output);
}

// ----------------------------------------------------

function quitarEspacios(palabra){

  let output ="";
  const ultimaPosicion = palabra.length -1;

  // recorro el string caracter por caracter
  // y solo concateno a la variable de salida 
  // cuando no se trata de un " "

  for (let i=0; i<=ultimaPosicion;i++) {

    if (palabra.slice(i, i+1) != " "){
      output = output + palabra.slice(i, i+1);
    }

  }

  return(output);
}

// ----------------------------------------------------

let palabra = prompt("Ingrese una palabra para saber si es palíndroma:");

// paso todo a lowercase para evitar diferencias entre letras lowercase y uppercase al recorrer con las funciones el string
palabra=palabra.toLowerCase();

// almaceno la palabra sin espacios
let palabraSinEspacios = quitarEspacios(palabra);

// verifico si no me ingresó nada
if (palabraSinEspacios == ""){

  document.write("ERROR!: Ingresá una palabra válida.<br>");

}else{
  
  // si el usuario ingresa una frase...
  if (palabra != palabraSinEspacios){
    palabra = palabraSinEspacios;
    document.write("Ingresaste una frase.<br>");
  }else{
    document.write ("Ingresaste una sola palabra.<br>")
  }
  
  // si la palabra invertida es igual a la palabra sin invertir
  // entonces, es palíndroma! =).
  if (invertirPalabra(palabra) == palabra){
    document.write("Es palíndroma.<br>");
  }else{
    document.write("No es palíndroma.<br>");
  }

}

document.write("<br>Refrescá la página para volver a intentarlo.");