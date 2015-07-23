var contador = 0;
var respuestas = 3;

var tarjeta1;
var tarjeta2;
var valor1 = "";
var valor2 = "";



$(function(){

  $('#modalInicio').modal('show');

  //Al dar click en la tarjeta
  $('.tarjeta').click(function(){

    girarTarjeta( $(this) );


    //Obtener el valor de DATA
    var valor = $(this).attr('data');
    //Si valor1 no tiene nada:
    if(valor1==""){
      tarjeta1 = $(this);
      valor1 = valor; //Agregar valor a valor1
    } else { //Si valor1 tiene contenido:
      tarjeta2 = $(this);
      valor2 = valor; //Agregar valor a valor2
      //Comparación:
      if(valor1==valor2){
        //CORRECTO
        tarjeta1.off('click');
        tarjeta2.off('click');
        //Reset de variables de juego
        tarjeta1 = null;
        tarjeta2 = null;
        valor1 = "";
        valor2 = "";
        contador = contador+1;
      } else {
        setTimeout(function(){
          //INCORRECTO
          girarTarjeta( tarjeta1 );
          girarTarjeta( tarjeta2 );
          //Reset de variables de juego
          tarjeta1 = null;
          tarjeta2 = null;
          valor1 = "";
          valor2 = "";
        }, 1500);
      }
    }

    if(contador==respuestas){
      $('#modalFinal').modal('show');
    }

  }); //Termina .click

}); // Termina jQuery


function girarTarjeta(_this){

    //Animar el width hacia 0
    _this.animate({width:0}, function(){
      //Al terminar la animación ocultar/mostrar .frente
      _this.children('.frente').toggle();
      //Mostrar/ocultar .atras
      _this.children('.atras').toggle();
      //Animar el width hacia 140px
      _this.animate({width:'140px'});
    });

}
