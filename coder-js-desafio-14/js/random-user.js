function generarNombrePC(){
  
  let nombrePC;

  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      nombrePC = `${data.results[0].name.first} ${data.results[0].name.last}`
      console.log(nombrePC);
      localStorage.setItem('nombrePC', nombrePC);
      mostrarNombrePC();
    }
  });


}

function mostrarNombrePC(){

  let nombrePC = localStorage.getItem('nombrePC');
  console.log(nombrePC);

  $('#h2-nombre-pc').html(nombrePC);

}