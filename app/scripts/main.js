(function() {

  var bg = new Image();
  var current_photo = 0;


  $('header').fadeIn('slow').addClass('animated fadeIn');

  $('.menu-item').each(function(i, item) {
    $(item).delay(800 + i * 600).fadeIn().addClass('animated slideInDown');
  });

  $('.title').click(function() {
    location.reload();
  });


  $('.menu-item.about > a').click(function() {
    $('.menu-item a').removeClass('active');
    $(this).addClass('active');
    $('body').removeClass('bg-main').addClass('bg-white');

    $('section').hide();
    $('section.about').delay(400).fadeIn('slow');
  });

  $('.menu-item.cv > a').click(function() {
    $('.menu-item a').removeClass('active');
    $(this).addClass('active');
    $('body').removeClass('bg-main').addClass('bg-wall');

    $('section').hide();
    $('section.cv').delay(400).fadeIn('slow');
  });

  $('.menu-item.photography > a').click(function() {
    if ($(this).hasClass('opened')) {
      $('.menu-item a').removeClass('active');
      $('.sub-menu-item').each(function(i, item) {
        $(item).fadeOut();
      });
      $(this).removeClass('opened');
    } else {
      $(this).addClass('active');
      $('.sub-menu-item').each(function(i, item) {
        $(item).fadeIn().addClass('animated slideInDown');
      });
      $(this).addClass('opened');
    }
  });

  $('.sub-menu-item a').click(function() {
    $('.sub-menu-item a').removeClass('active');
    $(this).addClass('active');

    var category = $(this).attr('data-filter');

    $('.photos').hide();
    $('.photos.' + category).show();
    $('.photos.' + category).fotorama({
      width: 600,
      ratio: "6/4",
      minwidth: 200,
      maxwidth: 600,
      minheight: 300,
      maxheight: 400,
      allowfullscreen: true,
      fit: "contain",
      nav: false,
      transition: "slide",
      clicktransition: "crossfade"
    });

    $('body').removeClass('bg-main').addClass('bg-white');
    $('section').hide();
    $('section.gallery').delay(400).fadeIn('slow');
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
