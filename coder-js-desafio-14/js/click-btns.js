// Click - btn-truco
$('#btn-truco').click(function() {
  setBotonesTruco();
});
// Click - btn-retruco
$('#btn-retruco').click(function() {
  setBotonesRetruco();
});

// Click - btn-vale-4
$('#btn-vale-4').click(function() {
  setBotonesVale4();
});

// Click - btn-real-envido
$('#btn-real-envido').click(function(){
  setBotonesRealEnvido();
});

// Click - btn-falta-envido
$('#btn-falta-envido').click(function(){
  setBotonesFaltaEnvido();
});

// Click - btn-nuevo-juego
$('#btn-nuevo-juego').click(function(){
  storageInfoInit();
  generarNombrePC();
  
  setBotonesNuevoJuego();
  mostrarCartasInit();
  mostrarPuntos();
});

// Click - btn-repartir-cartas
$('#btn-repartir-cartas').click(function(){
  repartirCartas();
  mostrarCartasRepartidas();
  setBotonesRepartirCartas();
  disableButton('btn-repartir-cartas');
});

// Click en carta-jugador-1, 2, 3
for (let x = 1 ; x <= 3 ; x ++ ){

  $(`#carta-jugador-${x}`).click(function(){

      // juega la carta, la pasa del
      // array mano al array mesa
      jugarCartaJugador(this.src);
      
      // muestra la mesa del jugador
      mostrarMesa('jugador');

      // deshabilita la carta jugada
      disableCard(this.id);

      checkGanadorManos();

      if (checkGanadorRonda() == 'nadie'){
        checkManoActual();
        checkQuienJuega();
      }else{
        alert (`GANADOR DE LA RONDA: ${checkGanadorRonda()}`);
        setBotonesNuevoJuego();
        mostrarCartasInit();
      }      

  });
  
}









