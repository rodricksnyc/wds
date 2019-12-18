$(document).ready(function () {



  // resizeDiv();
  // window.onresize = function(event) {
  //     resizeDiv();
  // }
  // function resizeDiv() {
  //     vpw = $(window).width();
  //     vph = $(window).height();
  //     $('#wrapper').css({'height': vph + 'px'});
  // }


  $("#first").on('mouseenter', function() {


    console.log("entering")

    $('.first').addClass('animated slideOutUp')

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



  });

//   $(".one").on('mouseleave' , function() {
//
//     console.log("leaving")
//
//     setTimeout(function() {
//
//       $('.first').removeClass('animated slideOutUp');
//
//     }, 700)
//
//     setTimeout(function() {
//         $('.first').removeClass('animated slideOutUp');
//       $('.first').addClass('animated slideInDown');
//     },1000)
//
// setTimeout(function() {
//       $('.first').removeClass('animated slideInDown');
//
//     },1400)
//
//     setTimeout(function() {
//       $('#clicked0 .box').addClass('transparent').removeClass('animated slideInUp');
//       $('#clicked2 .box').addClass('transparent').removeClass('animated flipInX');
//       $('#clicked3 .box').addClass('transparent').removeClass('animated flipInX');
//       $('#clicked4 .box').addClass('transparent').removeClass('animated tada');
//
//     },300)
//
//   })



  $("#second").mouseenter(function() {

      $('.second').addClass('animated slideOutUp')


    setTimeout(function() {
      $('#clicked66 .box').removeClass('transparent').addClass('animated slide-both infinite slow')
    },500)

    // setTimeout(function() {
    // const slideFade = (elem) => {
    //    const fade = { opacity: 0, transition: 'opacity .5s' };
    //    elem.css(fade).addClass('animated slideOutUp slower')
    //    }
    //
    // slideFade($('.abso44'));
    // },1900)
    //
    // setTimeout(function() {
    //   $('.abso444').removeClass('transparent').addClass('animated fadeInUp')
    //
    // },1980)

    $("#all").mousemove(function(e) {
      parallaxIt(e, ".phone", 15);

    });

    function parallaxIt(e, target, movement) {
      var $this = $("#all");
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;

      TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement
      });
    }

  })

// $(".two").mouseleave(function() {
//
//
//       $('.second').removeClass('animated slideOutUp');
//       $('.second').addClass('animated slideInDown');
//
//
//     setTimeout(function() {
//       $('.second').removeClass('animated slideInDown');
//     }, 900)
//
//     setTimeout(function() {
//       $('#clicked66 .box').addClass('transparent').removeClass('animated slide-both infinite slow')
//     },300)
//
//     $("#all").mousemove(function(e) {
//       parallaxIt(e, ".phone", 0);
//
//     });
//
//     function parallaxIt(e, target, movement) {
//       var $this = $("#all");
//       var relX = e.pageX - $this.offset().left;
//       var relY = e.pageY - $this.offset().top;
//
//       TweenMax.to(target, 1, {
//         x: (relX - $this.width() / 2) / $this.width() * movement,
//         y: (relY - $this.height() / 2) / $this.height() * movement
//       });
//     }
//
//   })
//
//
  $("#third").mouseenter(function() {

      $('.third').addClass('animated slideOutUp')


  })

//   $(".three").mouseleave(function() {
//
//       $('.third').removeClass('animated slideOutUp');
//       $('.third').addClass('animated slideInDown');
//
//
//     setTimeout(function() {
//       $('.third').removeClass('animated slideInDown');
//     }, 900)
//
//   })
//
//
  $("#fourth").mouseenter(function() {

      $('.fourth').addClass('animated slideOutUp');

      setTimeout(function() {
            $('#clicked11 .box').removeClass('transparent').addClass('animated flicker-in-1')
      },800)

      setTimeout(function() {
            $('#clicked12 .box').removeClass('transparent').addClass('animated slit-in-vertical')
      },0)

  })
//
//   $(".four").mouseleave(function() {
//
//       $('.fourth').removeClass('animated slideOutUp');
//       $('.fourth').addClass('animated slideInDown');
//
//
//     setTimeout(function() {
//       $('.fourth').removeClass('animated slideInDown');
//     }, 900)
//
//   })



})
