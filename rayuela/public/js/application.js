$(document).ready(function() { 
  var count1 = 0;
  var count2 = 0;
  var p1 = false;
  var p2 = false;
  var name1 = "";
  var name2 = "";
  var score1 = 0;
  var score2 = 0;

  $('#restart_btn').hide();
  $('#maingame').hide();
  $('#marcador').hide();
  

  $("body").on( "submit", "#nameform", function(event) {
    event.preventDefault();
    var name1 = $('#playerone').val();
    var name2 = $('#playertwo').val();
    start(name1,name2);
    $('#maingame').show();
    $('#nameform').hide();
  });

  $("#start_btn").click(function(){
      var id = $("#Player1 .active");
      var idd = $("#Player2 .active");
      timer();
      setTimeout(function(){
      move2(idd);
      }, 3000);
      setTimeout(function(){
      move(id);
      }, 3000);
      $("#start_btn").hide();
      $("#restart_btn").show();                 
  });

  $("#restart_btn").click(function(){
      var name1 = $('#playerone').val();
      var name2 = $('#playertwo').val();
      count1 = 0;
      count2 = 0;
      p1 = false;
      p2 = false;
      start(name1,name2 );
      var id = $("#Player1 .active");
      var idd = $("#Player2 .active");
      timer();
      setTimeout(function(){
      move2(idd);
      }, 3000);
      setTimeout(function(){
      move(id);
      }, 3000);                
  });

  function timer(){
    var counter = 3;
    var interval = setInterval(function() {
    $('#timer').html(counter); // Display 'counter' wherever you want to display it.
    counter--;
    if (counter <= 0) {
        $('#timer').html('<p>GO!</p>'); // Display a login box
        clearInterval(interval);
    }
    }, 1000);}  
 
  function start(name1,name2) {
      $('#Player1').html("<td id='player1'><strong>"+name1+"</strong></td>");
      $('#Player2').html('<td id="player2"><strong>'+name2+'</strong></td>');
      $('#Player1').append("<td class='active'></td>");
      $('#Player2').append("<td class='active'></td>");
      $('#scoreone').html('<p>'+name1+': '+score1+'</p>');
      $('#scoretwo').html('<p>'+name2+': '+score2+'</p>');
      $('#marcador').show();



    for (var i = 0; i < 89; i++) 
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

  function checkcount(){
    if (count1 > 90 && count2 > 90) {
      finish();
    }
  }

  function move(id) {
    count1 = count1 + 1;
  if (count1 > 90 || count2 > 90) {
    finish();
  }
  if (p1 == true && p2 == true) {
    finish();
  }
  if (count1 > 100 || p1 === true) { return; }
  id.removeClass('active');
  id.next().addClass('active');
  checkcount();
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
  if (count1 > 90 || count2 > 90) {
    finish();
  }
  if (p1 == true && p2 == true) {
    finish();
  }
  if (count2 > 100 || p2 === true) { return; }
  id.removeClass('active').addClass('inactive');
  id.next().addClass('active');
  checkcount();
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
    if ((p1 == true && p2 == true) || (count1 >= 91 || count2 >= 91)) {
      if (count1 > 90 && count2 > 90) {
        $('#resultado').html("Ambos perdieron");
        $("#Player1 td").not(".active").not("#finalline").css("background-color", "gray");
        $("#Player2 td").not(".active").not("#finalline").css("background-color", "gray");
        resetgame();
      }
      else  
        if(count1 < 90 && count1 > count2)
        {
         $('#resultado').html("Jugador 1 gano");
         $("#Player1 td").not(".active").not("#finalline").css("background-color", "green");
         $("#Player2 td").not(".active").not("#finalline").css("background-color", "gray");
         score1++;
         resetgame();
        }
      else 
      
        if(count2 <= 90 && count2 > count1)
        {
         $('#resultado').html("Jugador 2 gano");
         $("#Player2 td").not(".active").not("#finalline").css("background-color", "green");
         $("#Player1 td").not(".active").not("#finalline").css("background-color", "gray");
         score2++;
         resetgame();
        } 

      else 
      
        if(count1 < 90 && count2 >= 91)
        {
         $('#resultado').html("Jugador 1 gano");
         $("#Player1 td").not(".active").not("#finalline").css("background-color", "green");
         $("#Player2 td").not(".active").not("#finalline").css("background-color", "gray");
         score1++;
         resetgame();
        }

      else 
      
        if(count2 < 90 && count1 >= 91)
        {
         $('#resultado').html("Jugador 2 gano");
         $("#Player2 td").not(".active").not("#finalline").css("background-color", "green");
         $("#Player1 td").not(".active").not("#finalline").css("background-color", "gray");
         score2++;
         resetgame();
        }   
    }
  }

});