
let mazo = [];

class Naipe{

  // recibe el numero de la carta y el numero del palo 
  constructor(numeroParam, paloParam){

    this.numero=numeroParam;
    
    switch (paloParam){
      case 0:
        this.palo="espada";
        break;
      case 1:
        this.palo="basto";
        break;
      case 2:
        this.palo="oro";
        break;
      case 3:
        this.palo="copa";
        break;
    }

    // establece el valor de la carta
    switch(numeroParam){

      case 1:
        if (this.palo == "espada"){
          this.valor == 14;
        } else if (this.palo == "basto"){
          this.valor == 13;
        } else {
          this.valor == 8;
        }
        break;

      case 7:
        if(this.palo == "espada"){
          this.valor == 12;
        }else if(this.palo == "oro"){
          this.valor == 11;
        }else{
          this.valor == 4;
        }
        break;

      case 3:
        this.valor == 10;
        break;
      case 2:
        this.valor == 9;
        break;
      case 12:
        this.valor == 7;
        break;
      case 11:
        this.valor == 6;
        break;
      case 10:
        this.valor == 5;
        break;
      case 6:
        this.valor == 3;
        break;
      case 5:
        this.valor == 2;
        break;
      case 4:
        this.valor == 1;
        break;
    }

  }
  
}

  // funcion randomEntre
  randomEntre = (min, max) => Math.random() * (max - min) + min;
  
  // borro contenido del p donde imprimo
  let pPrint = document.getElementById('p-print');
  
  pPrint.textContent = "";
  
  // ADD de todas las cartas al mazo
  
  // palos
  for (let i = 0; i<=3;i++){
    
    // numeros
    for(let j = 1; j<=12;j++){
      
      // agrega excepto 8s y 9s
      if (j!=8 && j!=9){
        
        let NuevaCarta = new Naipe(j, i);
        
        mazo.push(NuevaCarta);
        
      }
      
    }
  }
  
  console.log("MAZO INICIALIZADO");
  console.table(mazo);
  

function ordenarMenorMayor(){
  for (let i=0 ; i<mazo.length-1; i++){
    for (let j=i+1; j<mazo.length;j++){
      if (mazo[i].numero>mazo[j].numero){
        let swap = mazo[i];
        mazo[i]=mazo[j];
        mazo[j]=swap;
      }
    }
  }
  console.log("MAZO ORDENADO DE MENOR A MAYOR:");
  console.table(mazo);

}

function ordenarMayorMenor(){
  for (let i=0 ; i<mazo.length-1; i++){
    for (let j=i+1; j<mazo.length;j++){
      if (mazo[i].numero>mazo[j].numero){
        let swap = mazo[i];
        mazo[i]=mazo[j];
        mazo[j]=swap;
      }
    }
  }
  
  console.log("MAZO ORDENADO DE MAYOR A MENOR:");
  console.table(mazo);
}

function ordenarPalo(){
  let espadas = [];
  let bastos = [];
  let oros = [];
  let copas = [];
  
  for (let i=0 ; i<mazo.length; i++){

    switch (mazo[i].palo){
      case "espada":
        espadas.push(mazo[i]);
        break;
      case "basto":
        bastos.push(mazo[i]);
        break;
      case "oro":
        oros.push(mazo[i]);
        break;
      case "copa":
        copas.push(mazo[i]);
        break;
    }
    
  }

  mazo = [];

  for (let i = 0 ; i < espadas.length ; i++){
    mazo.push(espadas[i]);
  }

  for (let i = 0 ; i < bastos.length ; i++){
    mazo.push(bastos[i]);
  }

  for (let i = 0 ; i < oros.length ; i++){
    mazo.push(oros[i]);
  }

  for (let i = 0 ; i < copas.length ; i++){
    mazo.push(copas[i]);
  }
  
  console.log("MAZO ORDENADO POR PALO:");
  console.table(mazo);
}




let btnOrdenarMenorMayor = document.getElementById("btn-ordenar-menor-mayor");
let btnOrdenarMayorMenor = document.getElementById("btn-ordenar-mayor-menor");
let btnOrdenarPalo = document.getElementById("btn-ordenar-palo");

  

  btnOrdenarMenorMayor.addEventListener('click', function(){
    ordenarMenorMayor();
  });

  btnOrdenarMayorMenor.addEventListener('click', function(){
    ordenarMayorMenor();
  });
  
  btnOrdenarPalo.addEventListener('click', function(){
    ordenarPalo();
  });

  
  
  









