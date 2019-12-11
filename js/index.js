$(document).ready(function () {

setTimeout(function() {
  $('.abso6').addClass('animated slide-both infinite slow')
},0)


$(".hero-img-container").mousemove(function(e) {
  // parallaxIt(e, ".abso0", -8);
  // parallaxIt(e, ".abso00", 3);
  parallaxIt(e, ".abso4", -8);
  parallaxIt(e, ".abso7", 8);

});

function parallaxIt(e, target, movement) {
  var $this = $(".hero-img-container");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}


})
