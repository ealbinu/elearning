var contador = 0;
var respuestas = 12;
var correctas = 0;
var errores = 0;

$(function(){

  $('#modalInicio').modal('show');

  $('.ejercicio button').click(function(){
    contador = contador+1;

    console.log(contador);
  });



});
