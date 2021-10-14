function storageCheck(){
  if (localStorage.length == 0) {
    return false;
  }else{
    return true;
  }
}

function storageInfoInit(){

  localStorage.clear();

  localStorage.setItem(`manoActual`, 1);
  localStorage.setItem(`cantoPrimero`, `no cantado`);
  localStorage.setItem(`cantoSegundo`, `no cantado`);

  let cartasManoJugador = [];
  let cartasManoPC = [];
  let cartasMesaJugador = [];
  let cartasMesaPC = [];

  localStorage.setItem(`cartasManoJugador`, JSON.stringify(cartasManoJugador));
  localStorage.setItem(`cartasMesaJugador`, JSON.stringify(cartasMesaJugador));
  localStorage.setItem(`cartasManoPC`, JSON.stringify(cartasManoPC));
  localStorage.setItem(`cartasMesaPC`, JSON.stringify(cartasMesaPC));

  localStorage.setItem(`quienEsMano`, `jugador`);
  localStorage.setItem(`quienEsPie`, `PC`);
  localStorage.setItem(`puntosJugador`, 0);
  localStorage.setItem(`puntosPC`, 0);

}

