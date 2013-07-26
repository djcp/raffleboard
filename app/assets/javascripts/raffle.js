$(function(){

  function negotiateFontSize(){
    var pixelArea = $('.raffle').width() * $('.raffle').height();
    var nodeCount = $('.raffle').attr('data-ticket-total');
    var visibleNodes = $('.raffle .ticket:visible').length;
    var nodeAvailableArea = pixelArea / visibleNodes;
    var borderWidth = 4;

    var height = Math.sqrt(nodeAvailableArea - borderWidth);
    var fontSize = height / 2.8;

    return fontSize;
  }

  function updateFontSize(){
    var fontSize = negotiateFontSize();
    $('.raffle .ticket').css('fontSize', fontSize);
  }

  $('.ticket').click(function(e){
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
        $(node).addClass('hidden');
      }
    });
  });

  updateFontSize();
});
