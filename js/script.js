$(document).ready(function(){
  $('.col-sm-2').hover(
    function() {
      $(this).css("opacity", 0.8);
    }, function(){
      $(this).css("opacity", 0.3)
    });
});