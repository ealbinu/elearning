var bA, bB, bC;


$(function(){

  $('#modalInicio').modal('show');

  //Comienza Click
  $('.botonA, .botonB, .botonC').click(function(){
    //Visual
    $(this).toggleClass('btn-default');
    $(this).toggleClass('btn-success');
    $(this).children('span').toggleClass('glyphicon-remove');
    $(this).children('span').toggleClass('glyphicon-ok');
    //Funcional
    if( $('.botonA').is('.btn-success') ){
      bA = true;
    } else {bA = false;}
    if( $('.botonB').is('.btn-success') ){
      bB = true;
    } else {bB = false;}
    if( $('.botonC').is('.btn-success') ){
      bC = true;
    } else {bC = false;}




    //RESULTADO
    if(bA){
      $('.resultado').html('boton A');
    }
    if(bB){
      $('.resultado').html('boton B');
    }
    if(bC){
      $('.resultado').html('boton C');
    }
    if(bA && bB){
      $('.resultado').html('boton A y B');
    }
    if(bB && bC){
      $('.resultado').html('boton B y C');
    }
    if(bA && bC){
      $('.resultado').html('boton A y C');
    }
    if(bA && bB && bC){
      $('.resultado').html('boton A, B y C');
    }
    if(!bA && !bB && !bC){
      $('.resultado').html('Nada');
    }
  });//Termina click
}); // Termina jQuery
