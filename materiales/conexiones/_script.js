var correctas = 0;

$(function(){
  $('#modalInicio').modal('show');
});

jsPlumb.bind("ready", function(){

  //Opciones de los endpoints
  var endOpciones = {
    isSource: true,
    isTarget:true,
    connectorStyle: { lineWidth:20, strokeStyle: '#fffd00' },
    beforeDrop: function(params){
      alert('soltado!');
      alert(params.sourceId);
      alert(params.targetId);
    }
  }

  var endPoint1 = jsPlumb.addEndpoint(
    'conector1', {anchor:'Right'}, endOpciones);
  var endPoint2 = jsPlumb.addEndpoint(
    'conector2', {anchor:'Left'}, endOpciones);

});
