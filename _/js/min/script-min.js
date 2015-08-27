$(function(){
  //Iniciar funcionamiento de tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // cwqOL4LsQryNA-Joen-QCiequYWRGCae

  var api = 'https://api.mongolab.com/api/1/databases/elearning';
  var col = '/collections/usuarios';
  var key = '?apiKey=cwqOL4LsQryNA-Joen-QCiequYWRGCae';


$('#formularioRegistro').submit(function(e){
  e.preventDefault(); //Detener acciones del formulario
  var pass1 = $('#registro_password').val(); //Obtener valor
  var pass2 = $('#registro_password2').val(); //Obtener valor
  if(pass1 == pass2){ //Comparar valores
    //REGISTRAR : Conectarse con base de datos y añadir item
    $.ajax({
      url: api+col+key,
      type: "POST",
      data : JSON.stringify({
        Nombre: $('#registro_nombre').val(),
        Usuario: $('#registro_usuario').val(),
        Pass: $('#registro_password').val()
      }),
      contentType : "application/json"
    }).done(function(msg){
      console.log(msg);
    });
  } // Cierra comparación pass1==pass2
}); //Cierra submit

}); //Cierra jQuery


