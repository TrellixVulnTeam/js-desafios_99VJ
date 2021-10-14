function disableButton(buttonIDParam){

  button = document.getElementById(buttonIDParam);
  
  if (!(button.classList.contains(`btn-disabled`))){
    button.disabled = "true";
    button.classList.add(`btn-disabled`);
  }

}

function enableButton(buttonIDParam){

  button = document.getElementById(buttonIDParam);
  
  if (button.classList.contains(`btn-disabled`)){
    button.disabled = "";
    button.classList.remove(`btn-disabled`);
  }

}

function setBotonesRepartirCartas(){

  const todosLosBotones = document.querySelectorAll(`.button`);

  for (x = 0 ; x < todosLosBotones.length ; x ++){

    switch (todosLosBotones[x].id){
      case `btn-repartir-cartas`:
        disableButton(todosLosBotones[x].id);
        break;
      case `btn-retirarse`:
        enableButton(todosLosBotones[x].id);
        break;
      case `btn-nuevo-juego`:
        enableButton(todosLosBotones[x].id);
        break;
      case `btn-truco`:
        enableButton(todosLosBotones[x].id);
        break;
      case `btn-retruco`:
        disableButton(todosLosBotones[x].id);
        break;
      case `btn-vale-4`:
        disableButton(todosLosBotones[x].id);
        break;
      case `btn-envido`:
        enableButton(todosLosBotones[x].id);
        break;
      case `btn-real-envido`:
        enableButton(todosLosBotones[x].id);
        break;
      case `btn-falta-envido`:
        enableButton(todosLosBotones[x].id);
        break;

    }

  }

}

function setBotonesNuevoJuego(){
  
  const todosLosBotones = document.querySelectorAll(`.button`);

  for (x = 0 ; x < todosLosBotones.length ; x ++){

    if(todosLosBotones[x].id == `btn-repartir-cartas`){
      enableButton(todosLosBotones[x].id);
    }else{
      disableButton(todosLosBotones[x].id);
    }

  }

}

function setBotonesTruco(){
  disableButton(`btn-envido`);
  disableButton(`btn-real-envido`);
  disableButton(`btn-falta-envido`);
  disableButton(`btn-truco`);
  enableButton(`btn-retruco`);
}

function setBotonesRetruco(){
  disableButton(`btn-retruco`);
  enableButton(`btn-vale-4`);
}

function setBotonesVale4(){
  disableButton(`btn-vale-4`);
}



function setBotonesRealEnvido(){
  disableButton(`btn-envido`);
}

function setBotonesFaltaEnvido(){
  disableButton(`btn-envido`);
  disableButton(`btn-real-envido`);
}



