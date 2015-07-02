$(function(){

  $('#modalInicio').modal('show');

  //Ocultar ejercicio2
  $('#ejercicio2').hide();

  // ARRASTRABLE
  $('.drag[data="error"]').draggable({revert:"valid"});
  $('.drag[data="ok"]').draggable({revert:"invalid"});
  //
  $('#drop').droppable({
    drop: function(event, ui){
      //Obtenemos el valor data del objeto arrastrable
      var objeto = ui.draggable.attr('data');
      //checamos el valor data del objeto con una palabra
      if(objeto=='ok'){
        //Si es OK añadimos una alerta
        $('#drop').after('<div class="alert alert-success">CORRECTO</div>');
        //Mostrar el ejercicio 2
        $('#ejercicio2').slideDown(600);
      } else {
        //Si no es ok otra alerta
        $('#drop').after('<div class="alert alert-danger">INCORRECTO</div>');
      }
      //Luego de crear las alertas se aplica un fadeout para borrarlas
      $('.alert').fadeOut(1500);
    }
  });

});
