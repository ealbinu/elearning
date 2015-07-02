$(function(){

  $('#modalInicio').modal('show');

  // ARRASTRABLE
  $('.drag').draggable();
  //
  $('#drop').droppable({
    drop: function(event, ui){
      var objeto = ui.draggable.attr('data');
      alert(objeto);
    }
  });

});
