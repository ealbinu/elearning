var correctas = 0;
$(function(){

  $('#modalInicio').modal('show');

  //Al dar click en la tarjeta
  $('.tarjeta').click(function(){
    //Animar el width hacia 0
    $(this).animate({width:0}, function(){
      //Al terminar la animación ocultar/mostrar .frente
      $(this).children('.frente').toggle();
      //Mostrar/ocultar .atras
      $(this).children('.atras').toggle();
      //Animar el width hacia 140px
      $(this).animate({width:'140px'});
    });



  });

});
