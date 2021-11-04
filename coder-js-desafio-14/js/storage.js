function storageCheck(){
  if (localStorage.length == 0) {
    return false;
  }else{
    return true;
  }
}

function storageInfoInit(){

  localStorage.clear();

  let cartasManoJugador = [];
  let cartasManoPC = [];
  let cartasMesaJugador = [];
  let cartasMesaPC = [];

  // vectores de objeto Naipe, manos y mesas, de JUGADOR y PC
  localStorage.setItem(`cartasManoJugador`, JSON.stringify(cartasManoJugador));
  localStorage.setItem(`cartasMesaJugador`, JSON.stringify(cartasMesaJugador));
  localStorage.setItem(`cartasManoPC`, JSON.stringify(cartasManoPC));
  localStorage.setItem(`cartasMesaPC`, JSON.stringify(cartasMesaPC));
  
  // indica quien empieza a jugar
  localStorage.setItem(`quienEsMano`, `jugador`);

  // status de cantos
  localStorage.setItem(`cantoPrimero`, `no cantado`);
  localStorage.setItem(`cantoSegundo`, `no cantado`);

  // status de quien gano cada mano
  localStorage.setItem(`deQuienEsPrimera`, `nadie`);
  localStorage.setItem(`deQuienEsSegunda`, `nadie`);
  localStorage.setItem(`deQuienEsTercera`, `nadie`);
  localStorage.setItem(`deQuienEsLaRonda`, `nadie`);

  // puntos
  localStorage.setItem(`puntosJugador`, 0);
  localStorage.setItem(`puntosPC`, 0);
  localStorage.setItem(`nombrePC`, "");

  // indica de quien es el turno actual
  localStorage.setItem(`quienJuega`, `jugador`);
  
  // indica la mano actual que se esté jugando (primera, segunda o tercera)
  localStorage.setItem(`manoActual`, `primera`);

}



