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
    var fontSize = negotiateFontSize();
    $('.raffle .ticket').css('fontSize', fontSize);
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
        updateFontSize();
      },
      success: function(data, status, jqxhr){
        $(node).toggle(300);
      }
    });
  });

  updateFontSize();
});
