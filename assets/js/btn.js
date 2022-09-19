var $btn = $('.more');

$btn.on('click', function() {
  $(this).addClass('load');
  
  setTimeout(function() {
    $('.more').removeClass('load');
  }, 4000);
});