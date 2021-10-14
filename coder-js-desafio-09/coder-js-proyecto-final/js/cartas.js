// clase Naipe: 
class Naipe{

  // .numero = numero de la carta
  // .palo="palo de la carta"
  // .valor = number, cuanto mayor mas fuerte

  // recibe el numero de la carta y el numero del palo 
  constructor(numeroParam, paloParam){

    // establece el numero de la carta
    this.numero=numeroParam;

    // establece el palo de la carta
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
      case -1:
        this.palo = "ninguno"
        break;
    }

    // establece el valor de la carta
    switch(numeroParam){

      case 1:
        if (this.palo == "espada"){
          this.valor = 14;
        } else if (this.palo == "basto"){
          this.valor = 13;
        } else {
          this.valor = 8;
        }
        break;

      case 7:
        if(this.palo == "espada"){
          this.valor = 12;
        }else if(this.palo == "oro"){
          this.valor = 11;
        }else{
          this.valor = 4;
        }
        break;

      case 3:
        this.valor = 10;
        break;
      case 2:
        this.valor = 9;
        break;
      case 12:
        this.valor = 7;
        break;
      case 11:
        this.valor = 6;
        break;
      case 10:
        this.valor = 5;
        break;
      case 6:
        this.valor = 3;
        break;
      case 5:
        this.valor = 2;
        break;
      case 4:
        this.valor = 1;
        break;
      default:
        this.valor = 0;
        break;
    }

    this.path = `/cards/${this.numero}${this.palo}.jpg`

  }

}

// funcion randomEntre
randomEntre = (min, max) => Math.random() * (max - min) + min;

function jugarCartaJugador(pathParam){

    
    // busca la mano y la mesa del jugador en el storage
    let manoJugador = JSON.parse(localStorage.getItem('cartasManoJugador'));
    let mesaJugador = JSON.parse(localStorage.getItem('cartasMesaJugador'));
    
    // recorre la mano del jugador
    for ( x = 0 ; x < manoJugador.length ; x++ ){
      
      let posIni = (pathParam.length - manoJugador[x].path.length);

      let nombreArchivoEnPath = pathParam.slice(posIni, pathParam.length);

      if (nombreArchivoEnPath == manoJugador[x].path){

        let cartaJugada = manoJugador.splice(x,1);

        mesaJugador.push(cartaJugada[0]);

      }
    }

    // muestro como quedan los vectores
    console.log(`mano jugador`);
    console.table(manoJugador);
    console.log(`mesa jugador`);
    console.table(mesaJugador);

    // guarda nuevamente la información en el storage
    localStorage.setItem('cartasManoJugador', JSON.stringify(manoJugador));
    localStorage.setItem('cartasMesaJugador', JSON.stringify(mesaJugador));

}

function mostrarMesa(deQuienParam){

  // mostrar MESA de JUGADOR
  if (deQuienParam == 'jugador'){

    let cartasMesaJugadorr = JSON.parse(localStorage.getItem('cartasMesaJugador'));

    for (let x = 0 ; x < cartasMesaJugadorr.length ; x++){
      
      let cartasMesaJugador = JSON.parse(localStorage.getItem('cartasMesaJugador'));

      let idCardMesa = `carta-mesa-jugador-${x+1}`;
      
      let cardMesa = document.getElementById(idCardMesa);
      
      cardMesa.src = cartasMesaJugador[x].path;
      
    }

  }

}

// reparte las cartas 
function repartirCartas(){
  
  //inicializacion vectores de objetos Naipe
  let mazo = [];
  let manoPC = [];
  let mesaPC = [];
  let manoJugador = [];
  let mesaJugador =[];
  
  inicializarMazo(mazo);

  // repartirCartas()
  for (i=0; i<3; i++){

    // PC :

    // indice random aleatorio
    let random1 = randomEntre(0, mazo.length-1);
    
    // quito del mazo esa carta y la guardo en una variable
    let CartaRobada1 = mazo.splice(random1, 1);

    // agrego esa carta a la mano del PC
    // especifico [0] ya que .splice devuelve un array
    manoPC.push(CartaRobada1[0]);


    // JUGADOR:
    
    // indice random aleatorio
    let random2 = randomEntre(0, mazo.length-1);
    
    // quito del mazo esa carta y la guardo en una variable
    let CartaRobada2 = mazo.splice(random2, 1);

    // agrego esa carta a la mano del jugador2
    // especifico [0] ya que .splice devuelve un array
    manoJugador.push(CartaRobada2[0]);
    
  }

  // guarda en el storage el mazo y las manos:
  localStorage.setItem('cartasManoJugador', JSON.stringify(manoJugador));
  localStorage.setItem('cartasManoPC', JSON.stringify(manoPC));



  animateCard(true, "true");

}

// agrega las 40 cartas al mazo (btn-repartir-cartas)
function inicializarMazo(mazoParam){

  // agrega todas las cartas al mazo

  // palos del 0 al 3
  for (let i = 0; i<=3;i++){
    
    // numeros del 1 al 12
    for(let j = 1; j<=12;j++){

      // excepto 8s y 9s
      if (j!=8 && j!=9){
        
        // instancia la nueva carta
        let NuevaCarta = new Naipe(j, i);

        // agrega la nueva carta al mazo
        mazoParam.push(NuevaCarta);

      }
      
    }

  }

}

// muestra las cartas repartidas (btn-repartir-cartas)
function mostrarCartasRepartidas(){

  for(let x = 0; x < 3; x++){
    
    let cartasManoJugador=JSON.parse(localStorage.getItem('cartasManoJugador'));

    // construye el id del IMG utilizando el indice del for
    let idIMG = `carta-jugador-${x+1}`;
    // toma cada tag IMG
    let imgCartaJugador = document.getElementById(idIMG);
    // muestra la imagen tomando el path del objeto
    imgCartaJugador.src = cartasManoJugador[x].path;

    console.table(cartasManoJugador[x]);
  }

}

// muestra dorsos en todas las cartas (btn-nuevo-juego)
function mostrarCartasInit(){
  for (let i = 1 ; i <= 3 ; i++){

    let IMGcartaMesa = document.getElementById(`carta-mesa-jugador-${i}`);
    let IMGcartaJugador = document.getElementById(`carta-jugador-${i}`);
    let IMGcartaPC = document.getElementById(`carta-pc-${i}`);

    IMGcartaMesa.src= "/cards/dorso-alpha.png";
    IMGcartaJugador.src = "/cards/dorso.jpg"
    IMGcartaPC.src = "/cards/dorso.jpg"

  }

  animateCard(false, true);
}

// asigna/quita clase que anima el hover de las cartas
function animateCard(animateParam, todasParam, idCardParam){
 
  if (todasParam){

    for (let x = 1 ; x <= 3 ; x ++ ){

      let IMGcartaJugador = document.getElementById(`carta-jugador-${x}`);
      
      if(animateParam){
        if (!(IMGcartaJugador.classList.contains(`section-img-card-animate`))){
          IMGcartaJugador.classList.add(`section-img-card-animate`);
        }
      }else{
        if (IMGcartaJugador.classList.contains(`section-img-card-animate`)){
          IMGcartaJugador.classList.remove(`section-img-card-animate`);
        }
      }

    }
  
  }else{

    let IMGcartaJugador = document.getElementById(idCardParam);

    if(animateParam){
      if (!(IMGcartaJugador.classList.contains(`section-img-card-animate`))){
        IMGcartaJugador.classList.add(`section-img-card-animate`);
      }
    }else{
      if (IMGcartaJugador.classList.contains(`section-img-card-animate`)){
        IMGcartaJugador.classList.remove(`section-img-card-animate`);
      }
    }

  }

}

function disableCard(idIMGParam){

  const IMGcard = document.getElementById(idIMGParam);

  IMGcard.disabled = "true";
  IMGcard.src = "/cards/dorso-alpha.png"

  animateCard(false, false, idIMGParam);
  

}








