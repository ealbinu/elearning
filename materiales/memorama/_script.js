var correctas = 0;

var valor1 = "";
var valor2 = "";

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


    //Obtener el valor de DATA
    var valor = $(this).attr('data');
    //Si valor1 no tiene nada:
    if(valor1==""){
      valor1 = valor; //Agregar valor a valor1
    } else { //Si valor1 tiene contenido:
      valor2 = valor; //Agregar valor a valor2
      //Comparación:
      if(valor1==valor2){
        //CORRECTO
      } else {
        //INCORRECTO
      }
    }




  });

});
