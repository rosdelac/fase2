$(document).ready(function() { 
  // Tu código va aquí
  var count1 = 0;
  var count2 = 0;
  var p1 = false;
  var p2 = false;
  start();

  $("#start_btn").click(function(){
      var id = $("#Player1 .active");
      var idd = $("#Player2 .active");
      move2(idd);
      move(id);                
  });
 

  function start() {
    for (var i = 0; i < 90; i++) 
    {
      $('#Player1').append("<td></td>");
      $('#Player2').append("<td></td>");
    }
    $('#Player1').append("<td id='finalline'></td>");
    $('#Player2').append("<td id='finalline'></td>");
    for (var i = 0; i < 9; i++) 
    {
      $('#Player1').append("<td></td>");
      $('#Player2').append("<td></td>");
    }
  }


  function move(id) {
    count1 = count1 + 1;
  if (count1 > 90 && count2 > 90) {
    finish();
  }
  if (p1 == true && p2 == true) {
    finish();
  }
  if (count1 > 100 || p1 === true) { return; }
  id.removeClass('active');
  id.next().addClass('active');
  wait();
  }

  function wait() {
    setTimeout(function(){ 
      var id = $("#Player1 .active");
      move(id); 
      }, 10);

  }

  function move2(id) {
    count2 = count2 + 1;
  if (count1 > 90 && count2 > 90) {
    finish();
  }
  if (p1 == true && p2 == true) {
    finish();
  }
  if (count2 > 100 || p2 === true) { return; }
  id.removeClass('active').addClass('inactive');
  id.next().addClass('active');
  wait2();
  }

  function wait2() {
    setTimeout(function(){ 
      var idd = $("#Player2 .active");
      move2(idd); 
      }, 10);
  }

  $(document).keypress(function(e) {
    if(e.which == 122) {
        p1 = true;
    }
    else 
    {
      if(e.which == 109)
      {
        p2 = true;
      }
    }
  });

  function finish(){
    if (p1 == true && p2 == true) {
      if (count1 > 90 && count2 > 90) {
        $('#resultado').html("Ambos perdieron");
        $("#Player1 td").not(".active").not("#finalline").css("background-color", "gray");
        $("#Player2 td").not(".active").not("#finalline").css("background-color", "gray");
      }
      else  
        if(count1 > count2)
        {
         $('#resultado').html("Jugador 1 gano");
         $("#Player1 td").not(".active").not("#finalline").css("background-color", "green");
         $("#Player2 td").not(".active").not("#finalline").css("background-color", "gray");
        }
      else 
      
        if(count2 > count1)
        {
         $('#resultado').html("Jugador 2 gano");
         $("#Player2 td").not(".active").not("#finalline").css("background-color", "green");
         $("#Player1 td").not(".active").not("#finalline").css("background-color", "gray");
        }   
    }
  }

});