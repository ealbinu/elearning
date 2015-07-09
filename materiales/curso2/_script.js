var contador = 0;
var respuestas = 12;
var correctas = 0;
var errores = 0;

$(function(){

  $('#modalInicio').modal('show');

  $('.ejercicio button').click(function(){

    contador = contador+1;

    var data = $(this).attr('data');

    if(data == "punto"){
      correctas = correctas+1;
    } else if(data=="medio"){
      correctas = correctas+0.5;
    } else if(data=="pierde"){
      errores = errores+1;
    }

    $('.correctas').html(correctas);
    $('.errores').html(errores);

    if(contador == respuestas){
      $('#modalFinal').modal('show');
    }

    console.log(data);
    console.log(contador);
  });



});
