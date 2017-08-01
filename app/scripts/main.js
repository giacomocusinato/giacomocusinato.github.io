(function() {

  var bg = new Image();

  $('header').fadeIn('slow').addClass('animated fadeIn');

  $('.menu-item').each(function(i, item) {
    $(item).delay(800 + i * 600).fadeIn().addClass('animated slideInDown');
  });

  $('.ref-icon').delay(2600).each(function(i, item) {
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


  // OLD PHOTO GALLERY STUFF

  // $('.menu-item.photography > a').click(function() {
  //   toggleSubMenu();
  // });
  //
  // $('.sub-menu-item a').click(function() {
  //   $('.sub-menu-item a').removeClass('active');
  //   $(this).addClass('active');
  //
  //   var category = $(this).attr('data-filter');
  //
  //   $('.photos').hide();
  //   $('.photos.' + category).show();
  //
  //   if ($(window).width() > 768) {
  //     $('.photos.' + category).fotorama({
  //       width: 600,
  //       ratio: '6/4',
  //       minwidth: 200,
  //       maxwidth: 600,
  //       minheight: 300,
  //       maxheight: 400,
  //       allowfullscreen: true,
  //       fit: 'contain',
  //       nav: false,
  //       transition: 'slide',
  //       clicktransition: 'crossfade'
  //     });
  //   } else {
  //     $('.photos.' + category).fotorama({
  //       width: '100%',
  //       ratio: '6/4',
  //       allowfullscreen: true,
  //       fit: 'contain',
  //       nav: false,
  //       transition: 'slide',
  //       clicktransition: 'crossfade'
  //     });
  //   }
  //
  //   $('body').removeClass('bg-main').addClass('bg-white');
  //   $('section').hide();
  //   $('section.gallery').delay(400).fadeIn('slow');
  // });
  //
  // function toggleSubMenu(close = false) {
  //   var selector = '.menu-item.photography > a';
  //
  //   if ($(selector).hasClass('opened') || close) {
  //     $('.menu-item a').removeClass('active');
  //     $('.sub-menu-item').each(function(i, item) {
  //       $(item).fadeOut();
  //     });
  //     $(selector).removeClass('opened');
  //   } else {
  //     $(selector).addClass('active');
  //     $('.sub-menu-item').each(function(i, item) {
  //       $(item).fadeIn().addClass('animated slideInDown');
  //     });
  //     $(selector).addClass('opened');
  //   }
  // }

})();
