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
  setBotonesNuevoJuego();
  mostrarCartasInit();
  storageInfoInit();
  
  checkDisableButtonsPuntos();
  mostrarPuntos();
});

// Click - btn-repartir-cartas
$('#btn-repartir-cartas').click(function(){
  console.clear();
  
  repartirCartas();
  mostrarCartasRepartidas();
  setBotonesRepartirCartas();

  disableButton('btn-repartir-cartas');
});

// Click en carta-jugador-1, 2, 3
for (let x = 1 ; x <= 3 ; x ++ ){

  $(`#carta-jugador-${x}`).click(function(){

      jugarCartaJugador(this.src);
      disableCard(this.id);
      mostrarMesa('jugador');

      checkGanadorManos();

      if (checkGanadorRonda() == 'nadie'){
        checkManoActual();
        checkQuienJuega();
      }else{
        alert (`el ganador de la ronda es el jugador es ${checkGanadorRonda()}`);
        repartirCartas();
      }

  });
  
}

// *  *  *  *  * PROVISORIO PARA 2DA ENTREGA DEL PROYECTO *  *  *  *  *

// Click btn-sumar-puntos-jugador
let btnSumarPuntosJugador = document.getElementById('btn-sumar-puntos-jugador');
btnSumarPuntosJugador.addEventListener('click', () => {
  sumarPuntos('jugador', 1);
  mostrarPuntos();
});

// Click btn-restar-puntos-jugador
let btnRestarPuntosJugador = document.getElementById('btn-restar-puntos-jugador');
btnRestarPuntosJugador.addEventListener('click', () => {
  sumarPuntos('jugador', -1);
  mostrarPuntos();
});

// Click btn-sumar-puntos-pc
let btnSumarPuntosPC = document.getElementById('btn-sumar-puntos-pc');
btnSumarPuntosPC.addEventListener('click', () => {
  sumarPuntos('PC', 1);
  mostrarPuntos();
});

// Click btn-restar-puntos-pc
let btnRestarPuntosPC = document.getElementById('btn-restar-puntos-pc');
btnRestarPuntosPC.addEventListener('click', () => {
  sumarPuntos('PC', -1);
  mostrarPuntos();
});









