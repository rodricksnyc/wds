$(document).ready(function () {

setTimeout(function() {
  $('.abso6').removeClass('transparent').addClass('animated slide-both infinite slow')
},300)

setTimeout(function() {
  $('.abso00').removeClass('transparent').addClass('animated slideInUp')
},300)

setTimeout(function() {
  $('.abso1').removeClass('transparent').addClass('animated flipInX')
},600)

setTimeout(function() {
  $('.abso3').removeClass('transparent').addClass('animated flipInX')
},1000)

setTimeout(function() {
  $('.abso2').removeClass('transparent').addClass('animated tada')
},1300)

setTimeout(function() {
const slideFade = (elem) => {
   const fade = { opacity: 0, transition: 'opacity .5s' };
   elem.css(fade).addClass('animated slideOutUp slower')
   }

slideFade($('.abso44'));
},1900)

setTimeout(function() {
  $('.abso444').removeClass('transparent').addClass('animated fadeInUp')

},1980)



$(".hero-img-container").mousemove(function(e) {
  // parallaxIt(e, ".abso0", -8);
  // parallaxIt(e, ".abso00", 3);
  // parallaxIt(e, ".abso4", -9);
  parallaxIt(e, ".abso7", 15);

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
