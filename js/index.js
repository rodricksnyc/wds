$(document).ready(function () {


$("#first").mouseenter(function() {

  setTimeout(function() {
    $('.first').addClass('animated slideOutUp')
  },0)


setTimeout(function() {
  $('#clicked0 .box').removeClass('transparent').addClass('animated slideInUp')
},300)

setTimeout(function() {
  $('#clicked2 .box').removeClass('transparent').addClass('animated flipInX')
},600)

setTimeout(function() {
  $('#clicked3 .box').removeClass('transparent').addClass('animated flipInX')
},1000)

setTimeout(function() {
  $('#clicked4 .box').removeClass('transparent').addClass('animated tada')
},1300)


})

$(".second", ".third", ".fourth").mouseenter(function() {
    setTimeout(function() {
      $('.first').removeClass('animated slideOutUp').addClass('animated slideInDown')
    },0)


  setTimeout(function() {
    $('#clicked0 .box').addClass('transparent').removeClass('animated slideInUp');
    $('#clicked2 .box').addClass('transparent').removeClass('animated flipInX');
    $('#clicked3 .box').addClass('transparent').removeClass('animated flipInX');
    $('#clicked4 .box').addClass('transparent').removeClass('animated tada');

  },300)
})



// $("#second").mouseenter(function() {
//
//
//   setTimeout(function() {
//     $('.second').addClass('animated slideOutUp')
//   },0)
//
//   setTimeout(function() {
//     $('#clicked66 .box').removeClass('transparent').addClass('animated slide-both infinite slow')
//   },500)
//
// // setTimeout(function() {
// // const slideFade = (elem) => {
// //    const fade = { opacity: 0, transition: 'opacity .5s' };
// //    elem.css(fade).addClass('animated slideOutUp slower')
// //    }
// //
// // slideFade($('.abso44'));
// // },1900)
// //
// // setTimeout(function() {
// //   $('.abso444').removeClass('transparent').addClass('animated fadeInUp')
// //
// // },1980)
//
// $("#all").mousemove(function(e) {
//   parallaxIt(e, ".phone", 15);
//
// });
//
// function parallaxIt(e, target, movement) {
//   var $this = $("#all");
//   var relX = e.pageX - $this.offset().left;
//   var relY = e.pageY - $this.offset().top;
//
//   TweenMax.to(target, 1, {
//     x: (relX - $this.width() / 2) / $this.width() * movement,
//     y: (relY - $this.height() / 2) / $this.height() * movement
//   });
// }
//
// })



})
