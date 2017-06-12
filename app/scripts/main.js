(function() {

  var bg = new Image();
  var current_photo = 0;

  $('header').fadeIn('slow').addClass('animated fadeIn');

  $('nav ul li').each(function(i, item) {
    $(item).delay(800 + i*600).fadeIn().addClass('animated slideInDown');
  });


  $('.title').click(function() {
    location.reload();
  });

  $('.menu-item.about').click(function() {
    $('body').removeClass('bg-main').addClass('bg-white');

    $('section').hide();
    $('section.about').delay(400).fadeIn('slow');
  });

  $('.menu-item.cv').click(function() {
    $('body').removeClass('bg-main').addClass('bg-wall');

    $('section').hide();
    $('section.cv').delay(400).fadeIn('slow');
  });

  $('.menu-item.photography').click(function() {
    $('body').removeClass('bg-main').addClass('bg-white');

    $('section').hide();
    $('html').css('background', 'white');
    $('section.photos').delay(400).fadeIn('slow');
    $('.photos img').eq(current_photo).show();
    // $('.photos img').each(function(i, el) {
    //   $(el).delay(600 + 400 * i).fadeIn('slow');
    // });

  });

  $('.photos img').click(function() {
    $('.photos img').eq(current_photo).hide();
    current_photo = current_photo + 1;
    $('.photos img').eq(current_photo).show();
  });


  function loadBackground() {
    if (!!bg.src) {
      $("body").css("background-image", bg.src);
      return;
    }

    bg.onload = function() {
      $("body").css("background-image", "url(http://www.solidbackgrounds.com/images/2560x1440/2560x1440-white-solid-color-background.jpg)");
    }
    bg.src = "../images/background-wall.jpg";
  }

})();
