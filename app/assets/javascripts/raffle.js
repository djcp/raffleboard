$(function(){
  $('.ticket').click(function(e){
    e.preventDefault();
    // So - this click should PUT to TicketsController#update and 
    // recalculate font size based on the number of elements remaining.
    //
    // We could keep track of this via JS, or simple do a JSON request
    // against RafflesController#show

    $(this).addClass('hidden');

  });

});
