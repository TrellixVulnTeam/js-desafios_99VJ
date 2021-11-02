mostrarPuntos();

function sumarPuntos(aQuienParam, cantidadPuntosParam){

  if (aQuienParam == 'jugador'){
    
    let puntosJugador = JSON.parse(localStorage.getItem('puntosJugador'));

    if(!(puntosJugador==0 && cantidadPuntosParam == -1)){
      puntosJugador = puntosJugador + cantidadPuntosParam;
    }
    
    localStorage.setItem('puntosJugador', JSON.stringify(puntosJugador));
    
    console.log(`puntos Jugador: ${puntosJugador}`);

    checkDisableButtonsPuntos();
 
  }else if (aQuienParam == 'PC'){
    
    let puntosPC = JSON.parse(localStorage.getItem('puntosPC'));

    if(!(puntosPC == 0 && cantidadPuntosParam == -1)){
      puntosPC = puntosPC + cantidadPuntosParam;
    }
    
    localStorage.setItem('puntosPC', JSON.stringify(puntosPC));
    
    console.log(`puntos PC: ${puntosPC}`);



    if (puntosPC == 30){
      disableButton('btn-sumar-puntos-pc');
    }else{
      enableButton('btn-sumar-puntos-pc');
    }
    
    checkDisableButtonsPuntos();


  }

}

function mostrarPuntos(){

   // lee puntos del jugador
   let puntosJugador = JSON.parse(localStorage.getItem('puntosJugador'));

   // recorro los td-puntos y los de imagenes
    for ( let x = 1 ; x <= 6 ; x++){
      let tdPuntosJugador = document.getElementById(`td-puntos-${x}-jugador`);
      if (tdPuntosJugador.childElementCount > 0){
        tdPuntosJugador.removeChild(tdPuntosJugador.childNodes[0]);
      }
    }
    
    let cuadraditosCompletosJugador = parseInt(puntosJugador / 5);

    
    // si tiene cuadraditos completos
    if (cuadraditosCompletosJugador > 0){
      
      // recorre cantidad de cuadraditos completos y agrega imagenes con 5 fosforos
      for (let x = 0 ; x <= cuadraditosCompletosJugador-1 ; x++){
        
        let IMGfosforo = document.createElement('img');
        IMGfosforo.style.height = '40px';
        IMGfosforo.style.width = '40px';
        IMGfosforo.src = `/matches/matches-5.png`;
        
        
        
        let tdPuntosJugador = document.getElementById(`td-puntos-${x+1}-jugador`);
        tdPuntosJugador.appendChild(IMGfosforo);
        
      }
      
    }
    
    // luego de colorcar los cuadraditos completos, 
    // coloca el resto, si lo tiene, en el td siguiente al ultimo completo
    let fosforosRestoJugador = puntosJugador % 5;
    
    if(fosforosRestoJugador > 0){
      
      let IMGfosforosResto = document.createElement('img');
      IMGfosforosResto.style.height = '40px';
      IMGfosforosResto.style.width = '40px';
      IMGfosforosResto.src = `/matches/matches-${fosforosRestoJugador}.png`;
      
      let tdResto = document.getElementById(`td-puntos-${cuadraditosCompletosJugador+1}-jugador`);
      tdResto.appendChild(IMGfosforosResto);
      
    }

    
    
    // lee los puntos de la PC
    let puntosPC = JSON.parse(localStorage.getItem('puntosPC'));


    // recorro los td-puntos y los de imagenes
    for ( let x = 1 ; x <= 6 ; x++){
      let tdPuntosPC = document.getElementById(`td-puntos-${x}-pc`);
      if (tdPuntosPC.childElementCount > 0){
        tdPuntosPC.removeChild(tdPuntosPC.childNodes[0]);
      }
    }
    
    let cuadraditosCompletosPC = parseInt(puntosPC / 5);

    let fosforosRestoPC = puntosPC % 5;


    // si tiene cuadraditos completos
    if (cuadraditosCompletosPC > 0){
      
      // recorre cantidad de cuadraditos completos y agrega imagenes con 5 fosforos
      for (let x = 0 ; x <= cuadraditosCompletosPC-1 ; x++){
        
        let IMGfosforo = document.createElement('img');
        IMGfosforo.style.height = '40px';
        IMGfosforo.style.width = '40px';
        IMGfosforo.src = `/matches/matches-5.png`;
        
        let tdPuntosPC = document.getElementById(`td-puntos-${x+1}-pc`);
        tdPuntosPC.appendChild(IMGfosforo);
        
      }
      
    }
    
    // luego de colorcar los cuadraditos completos, 
    // coloca el resto, si lo tiene, en el td siguiente al ultimo completo
    
    if(fosforosRestoPC > 0){
      
      let IMGfosforosResto = document.createElement('img');
      IMGfosforosResto.style.height = '40px';
      IMGfosforosResto.style.width = '40px';
      IMGfosforosResto.src = `/matches/matches-${fosforosRestoPC}.png`;
      
      let tdResto = document.getElementById(`td-puntos-${cuadraditosCompletosPC+1}-pc`);
      tdResto.appendChild(IMGfosforosResto);
      
    }
    
}

