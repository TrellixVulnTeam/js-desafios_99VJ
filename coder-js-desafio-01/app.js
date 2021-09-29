/* Disclaimer: Voy a corregir redundancias y algunas convenciones. 
A nivel operativo, esta correcto pero se hace incomodo a la lectura
*/

// Que hayas usado camelCase para las variables es un re 10. Pero el nombre de la variable es poco descriptivo.
let opValid = true;
let res = 0;

// En este caso se entiende por contexto pero concurris al mismo error. Podrias ser mejor firstNumber, numer1, etc.
let n1 = Number(prompt("Ingresá numero 1:"));
let n2 = Number(prompt("Ingresá numero 2:"));

//El mensaje por prompt marea un poco. 
//Es a gusto pero te podrias haber servido del DOM para expresar el mensaje, aprovechando que el conocimiento esta.
//Mismo caso del nombre, podrias haber puesto operation y se entendia barbaro.
let op = prompt("Ingresá s para sumar - r para restar - m para multiplicar - d para dividir.");

//operationStr
let opStr = "";

// en este caso los if, es a criterio y no los veo incorrectos. La convencion dicta por cuestiones de rendimiento
//al momento de detectar un error si es vital para el flujo de la app que se retorne error e interrumpa el funcionamiento.
if (Number(n1)!=n1){
  document.write ("Error: Numero 1 inválido!. <br>");
  opValid=false;
}
//podrias haber anidado ambos if quedando asi: 
/* 
 if (Number(n1)!=n1 || Number(n2)!=n2 ) o si lo quisieras, con else if(Number(n2)!=n2) 

 aca podrias englobar el funcionamiento ideal, y en el else imprimir el error.
 entiendo que queres saber cual es el factor que causa error. Pero por eso aclaro que es por convencion.
*/

if (Number(n2)!=n2){
  document.write ("Error: Numero 2 inválido!. <br>");
  opValid=false;
}
//Veo super optimo, el uso de switch para operaciones!! 
switch (op){
  
    case "s":
      res = n1 + n2;
      opStr = "+"
    break;
      
    case "r":
      res = n1 - n2;
      opStr = "-"
    break;
    
    case "m":
      res = n1 * n2;
      opStr = "*"
    break;

    case "d":
      res = n1 / n2;
      opStr = "/"
    break;

    default:
      document.write ("Error: Operación inválida!. <br>");
      opValid=false;
} 

// En el caso de valor true, es reduntante. 
//quedaria: if(opValid)
if (opValid!=false){
  document.write ("Cálculo efectuado: " + n1 + " " + opStr + " " + n2 + " = " + res + "<br>");
}

document.write ("Refrescá la página para volver a operar!." + "<br>");

/* Ultimo comentario, como aclaracion. El codigo esta excelente!! aprovecho que se ve que tenes ganas y conocimiento
para hacer estos comentarios, asi exprimis mas el curso. Pero vas de 10. 
*/

