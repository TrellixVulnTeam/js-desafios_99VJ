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
  ManoJugador1.push(CartaRobada1);
  
  
  // JUGADOR 2:
  
  // indice random aleatorio
  let random2 = randomEntre(0, Mazo.length-1);
  
  // quito del mazo esa carta y la guardo en una variable
  let CartaRobada2 = Mazo.splice(random2, 1);

  // agrego esa carta a la mano del jugador2
  ManoJugador2.push(CartaRobada2);
  
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










