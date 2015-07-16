var correctas = 0;
$(function(){

  $('#modalInicio').modal('show');

  $('#info_x5F_gris').click(function(){
    $(this).hide();
  });


  //Al dar click en el boton1
  $('.boton1').click(function(){
    //ocultar todos los paneles
    $('.infografia .panel').hide();
    //Mostrar el panel correspondiente
    $('.texto1').slideDown();
  });
  //Al dar click en el boton2
  $('.boton2').click(function(){
    //ocultar todos los paneles
    $('.infografia .panel').hide();
    //Mostrar el panel correspondiente
    $('.texto2').slideDown();
  });
  //Al dar click en el boton3
  $('.boton3').click(function(){
    //ocultar todos los paneles
    $('.infografia .panel').hide();
    //Mostrar el panel correspondiente
    $('.texto3').slideDown();
  });

});
