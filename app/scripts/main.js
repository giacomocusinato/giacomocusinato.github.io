(function() {

var bg = new Image();

$('section').hide();


$('.title').click(function() {
  location.reload();
});

$('.menu-item.about').click(function() {
  loadBackground();

  $('section').hide();
  $('section.about').delay(400).fadeIn("slow");
});

$('.menu-item.cv').click(function() {
  loadBackground();

  $('section').hide();
  $('section.cv').delay(400).fadeIn("slow");
});

function loadBackground() {
  if (!!bg.src) {
    $("body").css("background-image", bg.src);
    return;
  }

  console.log('Loading..zx: '  + bg.src);
  bg.onload = function(){
    $("body").css("background-image", "url(../images/background-wall.jpg)");
  }
  bg.src = "../images/background-wall.jpg";
}

})();
