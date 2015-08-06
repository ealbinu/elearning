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
      var source = params.sourceId;
      var target = params.targetId;

      switch(source){
        case 'conector1':
          if(target == 'conector2'){ alert('correcto'); }
          break;
        case 'conector2':
          if(target=='conector1'){ alert('correcto'); }
          break;
        case 'conector3':
          if(target=="conector4"){ alert('correcto'); }
          break;
        case 'connector4':
          if(target=='conector3'){ alert('correcto'); }
          break;
      }


    }
  }

  var endPoint1 = jsPlumb.addEndpoint(
    'conector1', {anchor:'Right'}, endOpciones);
  var endPoint2 = jsPlumb.addEndpoint(
    'conector2', {anchor:'Left'}, endOpciones);

});
