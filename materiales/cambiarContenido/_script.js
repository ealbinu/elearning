var bA, bB, bC;


$(function(){

  $('#modalInicio').modal('show');

  //click boton A
  $('.botonA').click(function(){
		$('.resultado').html('  <img src="http://placehold.it/200x200/336699" >  ');
	});
	
	$('.botonB').click(function(){
		$('.resultado').html('  <img src="http://placehold.it/300x200/ffdd00" >  ');
	});
	
	$('.botonC').click(function(){
		$('.resultado').html('  <img src="http://placehold.it/200x600/dd00ff" >  ');
	});
	
	
	
}); // Termina jQuery
