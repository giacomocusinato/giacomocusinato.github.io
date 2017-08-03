(function() {

  var bg = new Image();

  $('header').fadeIn('slow').addClass('animated fadeIn');

  $('.menu-item').each(function(i, item) {
    $(item).delay(800 + i * 600).fadeIn().addClass('animated slideInDown');
  });

  $('.ref-icon').delay(3200).each(function(i, item) {
    $(item).delay(600 * i).fadeIn();
  });
  $('.ref-icon').hover(function() {
    $(this).addClass('animated pulse');
  }, function() {
    $(this).removeClass('animated pulse');
  });

  $('.title').click(function() {
    location.reload();
  });

  $('.image-container').hover(function() {
    $(this).find('.overlay').animate({
      'opacity': 0.2
    }, 600);
    $(this).find('h2').animate({
      'opacity': 0.0
    }, 600);
  }, function() {
    $(this).find('.overlay').animate({
      'opacity': 0.9
    }, 600);
    $(this).find('h2').animate({
      'opacity': 0.9
    }, 600);
  });


  $('.menu-item > a').click(function() {
    var section = $(this).attr('data-open');

    if (!section) return;

    $('.menu-item a').removeClass('active');
    $(this).addClass('active');
    $('body').removeClass('bg-main').addClass('bg-white');

    $('section').hide();
    $('section.' + section).delay(400).fadeIn('slow');
  });

  function loadBackground() {
    if (!!bg.src) {
      $('body').css('background-image', bg.src);
      return;
    }

    bg.onload = function() {
      $('body').css('background-image', 'url(http://www.solidbackgrounds.com/images/2560x1440/2560x1440-white-solid-color-background.jpg)');
    };
    bg.src = '../images/background-wall.jpg';
  }
})();
