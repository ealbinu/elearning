var correctas = 0;
$(function(){

  $('#modalInicio').modal('show');

  $('.checar').click(function(){

    var mouse = $('.inputMouse').val();
    var mouseData = $('.inputMouse').attr('data');
    var psd = $('.inputPhotoshop').val();
    var psdData = $('.inputPhotoshop').attr('data');
    var google = $('.inputGoogle').val();
    var googleData = $('.inputGoogle').attr('data');

    if(mouse==mouseData){
      correctas = correctas+1;
    } else {
      $('.inputMouse').attr('disabled', 'disabled');
    }
    if(psd==psdData){
      correctas = correctas+1;
    } else {
      $('.inputPhotoshop').attr('disabled', 'disabled');
    }
    if(google==googleData){
      correctas = correctas+1;
    } else {
      $('.inputGoogle').attr('disabled', 'disabled');
    }

    $('#modalFinal').modal('show');
    $('.correctas').html(correctas);

  });

});
