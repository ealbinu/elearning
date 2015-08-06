
$(function(){

  $('#modalInicio').modal('show');

  var material = new Popcorn.HTMLYouTubeVideoElement('#video');
  material.src= "https://www.youtube.com/watch?v=PLLQK9la6Go";
  material = new Popcorn(material);


}); // Termina jQuery
