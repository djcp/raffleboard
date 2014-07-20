$(function(){

  function negotiateFontSize(){
    var pixelArea = $('.raffle').width() * $('.raffle').height();
    var nodeCount = $('.raffle').attr('data-ticket-total');
    var visibleNodes = $('.raffle .ticket:visible').length;
    var nodeAvailableArea = pixelArea / visibleNodes;

    var height = Math.sqrt(nodeAvailableArea);
    var fontSize = height / 2.77;

    return fontSize;
  }

  function updateFontSize(){
    var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) - 20;
    var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 20;
    $('.raffle').css({'width': width, 'height': height});
    var fontSize = negotiateFontSize();
    $('.raffle .ticket').css('fontSize', fontSize);
  }

  function flashIfWinner(){
    if ($('.ticket:visible').length == 1) {
      effectOptions = {
        'effect': 'explode',
        'duration': 3000,
        'complete': function(){$(this).show()}
      };
      $('.ticket:visible').effect(effectOptions);
    }
  }

  $('.ticket:not(".admin")').click(function(e){
    e.preventDefault();

    var node = this;
    var id = $(this).attr('data-id');

    $.ajax({
      type: 'POST',
      url: '/tickets/' + id,
      dataType: 'json',
      data: {
        '_method': 'PUT',
        'ticket': {
          'drawn': true
        }
      },
      complete: function(){
        effectOptions = {
          'effect': 'fade',
          'duration': 500,
          complete: function(){
            updateFontSize();
            flashIfWinner()
          }
        }
        $(node).effect(effectOptions);
      }
    });
  });

  updateFontSize();
  flashIfWinner();
});
