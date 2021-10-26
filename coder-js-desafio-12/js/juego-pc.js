function PCJugarCarta(){

  let manoActual = localStorage.getItem('manoActual');
  let quienEsMano = localStorage.getItem('quienEsMano');
  let mesaJugador = JSON.parse(localStorage.getItem('cartasMesaJugador'));
  let manoPC = JSON.parse(localStorage.getItem('cartasManoPC'));
  let mesaPC = JSON.parse(localStorage.getItem('cartasMesaPC'));

  // juega sus cartas dependiendo que mano es
  switch(manoActual){

    // ** PRIMERA MANO **
    case 'primera':

      // si el jugador es mano, entonces ya jugo
      // toca ver si puede matar esa carta 
      if(quienEsMano == 'jugador'){
        
        // busca si tiene una carta mayor en la mano, sino => -1
        let indiceCartaMayor = PCIndiceCartaMayorA(mesaJugador[0].valor);

        // busca si tiene una carta de igual valor en la mano, sino  => -1
        let indiceCartaIgual = PCIndiceCartaIgualA(mesaJugador[0].valor);

        // SI TIENE UNA CARTA DE MAYOR VALOR ***
        if(indiceCartaMayor != -1){
          
          // quita esa carta del vector manoPC
          let cartaMayor = manoPC.splice(indiceCartaMayor, 1);
          
          // la pushea en el vector mesaPC
          mesaPC.push(cartaMayor[0]);
          
        // SI TIENE UNA CARTA DE IGUAL VALOR ***
        }else if(indiceCartaIgual != -1){
          
          // quita esa carta del vector manoPC
          let cartaIgual = manoPC.splice(indiceCartaIgual, 1);

          // la pushea al vector mesaPC
          mesaPC.push(cartaIgual[0]);

        // Si no tiene MAYOR ni IGUAL, juega la **CARTA MAS BAJA**
        }else{
          
          // quita de la mano la carta menor consultando su indice por funcion
          let cartaMenor = manoPC.splice(PCIndiceCartaMenorMano(), 1);
        
          // la pushea en el vector mesaPC
          mesaPC.push(cartaMenor[0]);
                    
        
        }
        


      // si la PC es Mano, juega la carta mas alta
      } else { 

        // quita de la mano la carta mayor consultando su indice por funcion
        let cartaMayor = manoPC.splice(PCIndiceCartaMayorMano(), 1);

        // la pushea en el vector mesaPC
        // posición 0 ya que es un array lo que devuelve splice
        mesaPC.push(cartaMayor[0]);

      }

      break;

    // ** SEGUNDA MANO **
    case 'segunda':

      // ¿Quien gano primera mano?
      let deQuienEsPrimera = localStorage.getItem('deQuienEsPrimera');

      // Si primera mano es *PARDA*, juega la mas alta
      if (deQuienEsPrimera == 'parda'){
        
        // la quita del array manoPC
        let cartaMasAlta = manoPC.splice(PCIndiceCartaMayorMano(), 1);
        
        // y lo agrega en el array mesaPC
        mesaPC.push(cartaMasAlta[0]);
        
      // Si primera mano es del *JUGADOR*, el ya jugó segunda
      }else if(deQuienEsPrimera == 'jugador'){

        // entonces PC tiene que ganar si o si

        // busca carta de valor mayor a la jugada por el Jugador en segunda
        let indiceCartaMayorA = PCIndiceCartaMayorA(mesaJugador[1].valor);

        // si tiene esa carta mayor, entonces
        if (indiceCartaMayorA != -1){

          // quita esa carta mayor de la manoPC
          let cartaMayor = manoPC.splice(PCIndiceCartaMayorA(), 1);

          // la pushea al array mesaPC
          mesaPC.push(cartaMayor[0]);
          
        // si no tiene carta mayor, al tener primera perdida
        } else {
          
          // pierde segunda también 
          alert("gana el jugador");

        }
      
      // Si primera mano es de la ** PC **
      }else if(deQuienEsPrimera == 'PC'){

        // si la carta mas alta, es mayor o igual 
        // a la que usó para ganar primera
        // tira la carta mas baja

        let indiceCartaMayor = PCIndiceCartaMayorMano();

        if (manoPC[indiceCartaMayor].valor >= mesaPC[0].valor){

          // quito la carta mas baja del array de manoPC
          let cartaMenorMano = manoPC.splice(PCIndiceCartaMenorMano(), 1);

          // lo pusheo a la mesaPC
          mesaPC.push(cartaMenorMano[0]);

        }

      }
        
        
      break;
    
    // ** TERCERA MANO **
    case 'tercera':

        let ultimaCarta = manoPC.splice(0, 1);

        // juega su ultima carta
        mesaPC.push(ultimaCarta[0]);
        
        break;
        
  }

  
  // actualiza el localstorage de mano y mesa PC
  localStorage.setItem('cartasManoPC', JSON.stringify(manoPC));
  localStorage.setItem('cartasMesaPC', JSON.stringify(mesaPC));
  
  // muestra la mesa de PC
  mostrarMesa('PC');

  if (checkGanadorRonda() == 'nadie'){
    checkGanadorManos();
    checkManoActual();
    checkQuienJuega();
  }else{
    alert (`GANADOR DE LA RONDA: ${checkGanadorRonda()}`);
    repartirCartas();
  }

}

// devuelve el indice de una carta de igual valor a la del jugador
// si no existe la carta, devuelve -1
function PCIndiceCartaIgualA(valorCartaJugadorParam){


  let indiceCartaIgual = -1;
  let valorCartaIgual = 15;

  let manoPC = JSON.parse(localStorage.getItem('cartasManoPC'));


  for (x = 0 ; x < manoPC.length ; x++){

    // si encuentra en la mano una carta mayor a la del jugador 
    // y a su vez, menor a la que ya tenia como mayor
    if(manoPC[x].valor == valorCartaJugadorParam){
      // guarda el indice
      indiceCartaIgual = x;
    }
    
  }

  // devuelve indice, si no hay carta devolvera -1
  return indiceCartaIgual;

}

// devuelve el indice de la menor carta disponible mayor a la del jugador
function PCIndiceCartaMayorA(valorCartaJugadorParam){

  let indiceCartaMayor = -1;
  let valorCartaMayor = 15;

  let manoPC = JSON.parse(localStorage.getItem('cartasManoPC'));


  for (x = 0 ; x < manoPC.length ; x++){

    // si encuentra en la mano una carta mayor o igual a la del jugador 
    // y a su vez, menor a la que ya tenia como mayor
    if(manoPC[x].valor > valorCartaJugadorParam && manoPC[x].valor < valorCartaMayor){
      // guarda el indice
      indiceCartaMayor = x;
      valorCartaMayor = manoPC[x].valor;
    }
    
  }

  // devuelve indice, si no hay carta devolvera -1
  return indiceCartaMayor;

}

// devuelve el indice de la carta de mayor valor de la mano
function PCIndiceCartaMayorMano(){
  let manoPC = JSON.parse(localStorage.getItem('cartasManoPC'));
    
    let indiceCartaMayor;
    
    for (let x  = 0 ; x < manoPC.length ; x++){
  
      // parto de 0 a comparar los valores de las cartas
      // los 4 tienen valor = 1
      let valorMayor = 0;
  
      // a medida encuentre un valor mayor actualizará 
      // de que valor se trata el indice de esa carta
      if (manoPC[x].valor > valorMayor){
        valorMayor = manoPC[x].valor;
        indiceCartaMayor = x;
      }
  
    }
  
    return indiceCartaMayor;
}

// devuelve el indice de la carta de menor valor de la mano
function PCIndiceCartaMenorMano(){
  
  let manoPC = JSON.parse(localStorage.getItem('cartasManoPC'));
  
  let indiceCartaMenor = x;
  
  for (let x  = 0 ; x < manoPC.length ; x++){

    // parto de 15 a comparar los valores de las cartas
    // (el ancho de espada tiene valor 14)
    let valorMenor = 15;

    // a medida encuentre un valor menor actualizará 
    // de que carta se trata
    if (manoPC[x].valor < valorMenor){
      valorMenor = manoPC[x].valor;
      indiceCartaMenor = x;
    }

  }

  return indiceCartaMenor;
}