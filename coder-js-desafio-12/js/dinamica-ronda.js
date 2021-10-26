// chequea que mano se esta jugando
function checkManoActual(){

      let mesaPC = JSON.parse(localStorage.getItem('cartasMesaPC'));
      let mesaJugador = JSON.parse(localStorage.getItem('cartasMesaJugador'));
      let manoActual = localStorage.getItem('manoActual');

      // si jugaron los 2 primera o los 2 segundas (osea largo>0 de las mesas)
      if((mesaJugador.length == mesaPC.length) && 
      (mesaJugador.length > 0 && mesaPC.length > 0)){

        switch (manoActual){
          // de primera a segunda,
          case `primera`:
            manoActual = `segunda`;
            console.log('se cambia de MANO ACTUAL a SEGUNDA');
            break;
            // o de segunda a tercera
          case `segunda`:
            manoActual = `tercera`;
            console.log('se cambia de MANO ACTUAL a TERCERA');
            break;
        }
        
        localStorage.setItem('manoActual', manoActual);

      }     
}
// indica de quien es el turno
function checkQuienJuega(){
  
  let deQuienEsPrimera = localStorage.getItem('deQuienEsPrimera');
  let deQuienEsSegunda = localStorage.getItem('deQuienEsSegunda');

  

  let mesaJugador = JSON.parse(localStorage.getItem('cartasMesaJugador'));
  let mesaPC = JSON.parse(localStorage.getItem('cartasMesaPC'));
  

  if (mesaPC == undefined){
    mesaPC = [];
  }

  if (mesaJugador == undefined){
    mesaJugador = [];
  }

  let quienEsMano = localStorage.getItem('quienEsMano');

  let quienJuega = localStorage.getItem('quienJuega');
  

  // si todavia no jugaron cartas, juega el que es mano
  if (mesaJugador.length == 0 && mesaPC.length == 0){
    
    if (quienEsMano == 'jugador') {
      quienJuega = 'jugador';
    }else{
      quienJuega = 'PC';
    }
    
    // si jugo el jugador en primera y no la PC
  }else if(mesaJugador.length == 1 && mesaPC.length == 0){
    
    quienJuega = 'PC';
    
    // si jugo la PC en primera y no el JUGADOR
  }else if(mesaJugador.length == 0 && mesaPC.length == 1){
    
    
    quienJuega = 'jugador';

  // si estan para pasar a SEGUNDA, juega quien gano primera
  }else if (mesaJugador.length == 1 && mesaPC.length == 1){

    if  (deQuienEsPrimera == 'jugador'){
      quienJuega = 'jugador';
    }else{
      quienJuega = 'PC';
    }
  
  // si ya jugó segunda PC, pero no JUGADOR
  }else if(mesaJugador.length == 1 && mesaPC.length == 2){
    quienJuega = 'jugador';
  
    // si ya jugó segunda JUGADOR, pero no PC
  }else if(mesaJugador.length == 2 && mesaPC.length == 1){
    quienJuega = 'PC';

    // si estan para pasar a TERCERA, juega quien gano segunda
  }else if (mesaJugador.length == 2 && mesaPC.length == 2){
    
    if  (deQuienEsSegunda == 'jugador'){
      quienJuega = 'jugador';
    }else{
      quienJuega = 'PC';
    }
    
  // si ya jugó tercera PC, pero no jugador
  }else if(mesaJugador.length == 2 && mesaPC.length == 3){
    quienJuega = 'jugador';

  // si ya jugó tecera JUGADOR, pero no PC
  }else if(mesaJugador.length == 3 && mesaPC.length == 2){
    quienJuega = 'PC';
    
  }

  // escribe en el localstorage de quien es el turno
  localStorage.setItem('quienJuega', quienJuega);
  console.log(`es el turno de ${quienJuega}`);
  

  // si quien juega es la PC, llama a la funcion PCJuegaCarta()
  if (quienJuega=='PC'){
    console.log('juega PC!');
    PCJugarCarta();
  }

}

// verifica quien gana cada mano
function checkGanadorManos(){
  
  let mesaJugador = JSON.parse(localStorage.getItem('cartasMesaJugador'));
  let mesaPC = JSON.parse(localStorage.getItem('cartasMesaPC'));
  let ganadorMano='nadie';

  // se puede ganar en segunda minimo
  // si jugaron la misma cantidad de cartas y 2 o mas
  if(mesaPC.length == mesaJugador.length && mesaJugador.length >= 1){
    

    if (mesaPC[mesaPC.length-1].valor > mesaJugador[mesaJugador.length-1].valor){
      
      ganadorMano = 'PC';
      
    }else if (mesaPC[mesaPC.length-1].valor < mesaJugador[mesaJugador.length-1].valor){

      ganadorMano = 'jugador';
    
    } else {

      ganadorMano = 'parda';

    }
    
    switch (mesaPC.length){
  
      case 1:
        localStorage.setItem('deQuienEsPrimera', ganadorMano);
        console.log(`primera es de ${ganadorMano}`);
        break;
      
      case 2:
        localStorage.setItem('deQuienEsSegunda', ganadorMano);
        console.log(`segunda es de ${ganadorMano}`);
        break;
      
      case 3:
        localStorage.setItem('deQuienEsTercera', ganadorMano);
        console.log(`tercera es de ${ganadorMano}`);
        break;
      
  
    }
    
  }


}
// indica si alguien ganó la ronda
function checkGanadorRonda(){

  let deQuienEsPrimera = localStorage.getItem('deQuienEsPrimera');
  let deQuienEsSegunda = localStorage.getItem('deQuienEsSegunda');
  let deQuienEsTercera = localStorage.getItem('deQuienEsTercera');

  // si alguien ganó primera y segunda
  if (deQuienEsSegunda != 'nadie' && deQuienEsSegunda == deQuienEsPrimera){

    return deQuienEsPrimera;

  // si primera parda y alguien gano segunda, ese es el ganador
  } else if (deQuienEsPrimera == 'parda' && deQuienEsSegunda != 'nadie'){

    return deQuienEsSegunda;

  // si primera parda y segunda parda y se jugo tercera (!='nadie')
  }else if (deQuienEsPrimera == 'parda' && deQuienEsSegunda == 'parda' &&
  deQuienEsTercera != 'nadie'){

    // si tercera no es parda, gana quien gano tercera
    if(deQuienEsTercera != 'parda'){

      return deQuienEsTercera;
    
    // sino, si tercera es parda, gana quien es mano
    }else if (deQuienEsPrimera == 'parda'){

      let quienEsMano = localStorage.getItem('quienEsMano');
      return quienEsMano;
    
    }

  } else {

    return 'nadie';
    
  }



}
