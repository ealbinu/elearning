var correctas = 0;

$(function(){

  $('#modalInicio').modal('show');

});

jsPlumb.bind("ready", function(){

    //Opciones de los endpoints
    var endOpciones = { isSource: true, isTarget:true }

    var endPoint1 = jsPlumb.addEndpoint(
      'conector1', {anchor:'AutoDefault'}, endOpciones);

    var endPoint2 = jsPlumb.addEndpoint(
      'conector2', {anchor:'AutoDefault'}, endOpciones);


});
