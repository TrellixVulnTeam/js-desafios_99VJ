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


// declaro vectores de objetos Naipe
let Mazo = [];
let ManoJugador1 = [];
let ManoJugador2 = [];

// funcion randomEntre
randomEntre = (min, max) => Math.random() * (max - min) + min;




// ADD de todas las cartas al mazo

// palos
for (let i = 0; i<=3;i++){
  
  // numeros
  for(let j = 1; j<=12;j++){

    // agrega excepto 8s y 9s
    if (j!=8 && j!=9){
      
      let NuevaCarta = new Naipe(j, i);

      Mazo.push(NuevaCarta);

    }
    
  }

}

console.log(" ");
console.log("MAZO ENTERO:")
console.table(Mazo);

// repartida de cartas
for (i=0; i<3; i++){

  // JUGADOR 1:

  // indice random aleatorio
  let random1 = randomEntre(0, Mazo.length-1);
  
  // quito del mazo esa carta y la guardo en una variable
  let CartaRobada1 = Mazo.splice(random1, 1);
  
  // agrego esa carta a la mano del jugador1
  ManoJugador1.push(CartaRobada1[0]);
  
  
  // JUGADOR 2:
  
  // indice random aleatorio
  let random2 = randomEntre(0, Mazo.length-1);
  
  // quito del mazo esa carta y la guardo en una variable
  let CartaRobada2 = Mazo.splice(random2, 1);

  // agrego esa carta a la mano del jugador2
  ManoJugador2.push(CartaRobada2[0]);
  
}
console.log(" ");
console.log("MAZO CON CARTAS ROBADAS:")
console.table(Mazo);

console.log(" ");
console.log("MANO DEL JUGADOR 1:");
console.table(ManoJugador1);
console.log(" ");
console.log("MANO DEL JUGADOR 2:");
console.table(ManoJugador2);










