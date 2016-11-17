$(document).ready(function() {
  $('#togglebtn2').hide();

  $('body').on('click','#togglebtn',function(event) {
    // alert("clicked");
    $('#navbar').animate({width: "40px"});
    $('#maincontainer').animate({marginLeft: "40px"});
    $('#linkss').css("opacity", "0");
    $('#togglebtn').hide();
    $('#togglebtn2').show();
  });

  $('body').on('click','#togglebtn2',function(event) {
    // alert("clicked");
    $('#navbar').animate({width: "150px"});
    $('#maincontainer').animate({marginLeft: "150px"});
    $('#linkss').css("opacity", "1");
    $('#togglebtn').show();
    $('#togglebtn2').hide();
  });




});