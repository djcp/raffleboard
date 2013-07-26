$(function(){

  function negotiateContainerSize(){
    var pixelArea = $('.raffle').width() * $('.raffle').height();
    var nodeCount = $('.raffle').attr('data-ticket-total');
    var visibleNodes = $('.raffle .ticket:visible').length;
    var allAvailableArea = pixelArea / visibleNodes;
    var availableAreaSide = Math.sqrt(allAvailableArea);
    return availableAreaSide - 4
    // var marginArea = (4 * availableAreaSide)
    // var allMarginArea = (marginArea * 2) - 16

    // var sideWithoutMargin = Math.sqrt(allAvailableArea - allMarginArea) 
    // var borderArea = (2 * sideWithoutMargin)
    // var allBorderArea = (borderArea * 4) - 16
    // return Math.sqrt(allAvailableArea - allMarginArea - allBorderArea)
  }

  function updateContainerSize(){
    var containerSize = negotiateContainerSize();
    $('.raffle .ticket').css({height: containerSize,
                              width: containerSize} );
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
        updateContainerSize();
      },
      success: function(data, status, jqxhr){
        $(node).addClass('hidden');
      }
    });
  });

  updateContainerSize();
});
