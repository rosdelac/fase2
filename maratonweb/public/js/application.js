$(document).ready(function() 
{
  $("#start_form").hide();
  $("#question").hide();
  $("#historyquestions").hide();
  $("#sportsquestions").hide();
  $("#filmquestions").hide();
  $("#musicquestions").hide();
  $("#scorescreen").hide();
  $("#registerform").hide();
  $("#loginform").hide();

  $("#start_form").submit(function(event) 
  {
    event.preventDefault();
    $("#start_form").slideUp();
    $("#question").slideDown();   
  });

  $("#historybutton").click(function(event) 
  {
    event.preventDefault();
    $.post('/decks/history',function(response) 
    {
      $("#question").slideUp();
      $("#historyquestions").html(response);
      $("#scorescreen").slideUp();
      $("#sportsquestions").slideUp();
      $("#historyquestions").slideToggle(); 
    }); 
  });

  $("#sportsbutton").click(function(event) 
  {
    event.preventDefault();
    $.post('/decks/sports',function(response) 
    {
      $("#sportsquestions").html(response);
      $("#scorescreen").slideUp();
      $("#historyquestions").slideUp();
      $("#filmquestions").slideUp();
      $("#musicquestions").slideUp();
      $("#sportsquestions").slideToggle(); 
    });      
  });

  $("#filmsbutton").click(function(event) 
  {
    event.preventDefault();
    $.post('/decks/films',function(response) 
    {
      $("#filmquestions").html(response);
      $("#scorescreen").slideUp();
      $("#sportsquestions").slideUp();
      $("#historyquestions").slideUp();
      $("#musicquestions").slideUp();
      $("#filmquestions").slideToggle(); 
    }); 
  });

  $("#musicbutton").click(function(event) 
  {
    event.preventDefault();
    $.post('/decks/music',function(response) 
    {
      $("#musicquestions").html(response);
      $("#sportsquestions").slideUp();
      $("#historyquestions").slideUp();
      $("#filmquestions").slideUp();
      $("#musicquestions").slideToggle(); 
    }); 
  });
 
  $("body").on("submit", "#historyform", function(event) 
  {
    event.preventDefault();
    var cadena = $(this).serialize();
    $.post('/round/results/history', cadena, function(response) 
    {
      $("#historyquestions").slideUp();
      $("#sportsquestions").slideUp();
      $("#filmquestions").slideUp();
      $("#musicquestions").slideUp();
      $("#scorescreen").html(response);
      $("#scorescreen").slideDown();
    }); 
  });

  $("body").on("submit", "#sportsform", function(event) 
  {
    event.preventDefault();
    var cadena = $(this).serialize();
    $.post('/round/results/sports', cadena, function(response) 
    {
      $("#historyquestions").slideUp();
      $("#sportsquestions").slideUp();
      $("#filmquestions").slideUp();
      $("#musicquestions").slideUp();
      $("#scorescreen").html(response);
      $("#scorescreen").slideDown();
    }); 
  });

  $("body").on("submit", "#filmsform", function(event) 
  {
    event.preventDefault();
    var cadena = $(this).serialize();
    $.post('/round/results/films', cadena, function(response) 
    {
      $("#scorescreen").html(response);
      $("#historyquestions").slideUp();
      $("#sportsquestions").slideUp();
      $("#filmquestions").slideUp();
      $("#musicuestions").slideUp();
      $("#scorescreen").slideDown();
    }); 
  });

  $("body").on("submit", "#musicform", function(event) 
  {
    event.preventDefault();
    var cadena = $(this).serialize();
    $.post('/round/results/music', cadena, function(response) 
    {
      $("#scorescreen").html(response);
      $("#historyquestions").slideUp();
      $("#sportsquestions").slideUp();
      $("#filmquestions").slideUp();
      $("#musicquestions").slideUp();
      $("#scorescreen").slideDown();
    }); 
  });

  $("body").on("submit", "#register_form", function(event) 
  {
    event.preventDefault();
     $("#register_form").slideUp();
     $("#registerform").slideToggle();
    
  });

  $("body").on("submit", "#account_form", function(event) 
  {
    event.preventDefault();
    var cadena = $(this).serialize();
    $.post('/user/accreated', cadena, function(response) 
    {
      $("#accountcreated").html(response);
      $("#registerform").slideUp();
      $("#accountcreated").slideDown();
    }); 
  });

  $("body").on("click", "#login_button", function(event) 
  {
    event.preventDefault();
     $("#register_form").slideUp();
     $("#accountcreated").slideUp();
     $("#loginform").slideToggle();
  }); 

  $("body").on("submit", "#login_form", function(event) 
  {
    event.preventDefault();
    var cadena = $(this).serialize();
    console.log(cadena);
    $.post('/user/authenticate', cadena, function(response) 
    {
      console.log(response);
      if(response === "true"){
        $("#loginform").slideUp();
        $("#start_form").slideDown();
      }
      else
      {
        alert("Wrong email or password")
      }
    }); 
  });

  $("body").on("click", "#playagain_button", function(event) 
  {
    event.preventDefault();
     $("#scorescreen").slideUp();
     $("#question").slideDown();
  });

  $("body").on("click", "#homepagebutton", function(event) 
  {
    event.preventDefault();
    $("#loginform").slideUp();
    $("#registerform").slideUp();
    $("#register_form").slideDown();
  });

});

