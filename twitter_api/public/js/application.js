$(document).ready(function() {
  $('#loadingDiv').hide();

  $('body').on('submit','#form1',function(event) {
    event.preventDefault();
    var cadena = $(this).serialize();
    $.post('/fetch',cadena,function(data)
    {       
      console.log(data);
      $('#tws').html(data);
      
    });
      $('#tws').html('<img src="/Loading_icon.gif"></img>');
  });



  // $('#loadingDiv')
  //   .hide()  // Hide it initially
  //   .ajaxStart(function() {
  //       $(this).show();
  //   })
  //   .ajaxStop(function() {
  //       $(this).hide();
  //   });

});
