$(document).ready(function () {

$(".newWrapper").addClass('newClass');
$(".newWrapper2").addClass('newClass');

$(".newWrapper3").addClass('newClass');

$('a[href^="#slideDown"]').on('click', function(event) {

$(".newWrapper").removeClass('newClass')
  var target = $(this.getAttribute('href'));

  if( target.length ) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 1600);

  }



    var color = '#bdeae6';
    var maxParticles = 80;


  function draw() {
    particlesJS('particles-js', {
      'particles': {
        'number': {
          'value': maxParticles,
          'density': {
            'enable': true,
            'value_area': (maxParticles * 10) * 2
          }
        },
        'color': {
          'value': color
        },
        'shape': {
          'type': 'circle',
          'stroke': {
            'width': 0,
            'color': '#000000'
          },
          'polygon': {
            'nb_sides': 5
          },
        },
        'opacity': {
          'value': 1,
          'random': false,
          'anim': {
            'enable': false,
            'speed': 1,
            'opacity_min': 1,
            'sync': false
          }
        },
        'size': {
          'value': 4,
          'random': true,
          'anim': {
            'enable': false,
            'speed': 40,
            'size_min': 0.1,
            'sync': false
          }
        },
        'line_linked': {
          'enable': true,
          'distance': 300,
          'color': color,
          'opacity': 1,
          'width': 1
        },
        'move': {
          'enable': true,
          'speed': 2,
          'direction': 'none',
          'random': false,
          'straight': false,
          'out_mode': 'out',
          'bounce': false,
          'attract': {
            'enable': false,
            'rotateX': 600,
            'rotateY': 1200
          }
        }
      },
      'interactivity': {
        'detect_on': 'canvas',
        'events': {
          'onhover': {
            'enable': true,
            'mode': 'grab'
          },
          'onclick': {
            'enable': true,
            'mode': 'push'
          },
          'resize': true
        },
        'modes': {
          'grab': {
            'distance': 140,
            'line_linked': {
              'opacity': 1
            }
          },
          'bubble': {
            'distance': 400,
            'size': 40,
            'duration': 2,
            'opacity': 8,
            'speed': 3
          },
          'repulse': {
            'distance': 200,
            'duration': 0.4
          },
          'push': {
            'particles_nb': 4
          },
          'remove': {
            'particles_nb': 2
          }
        }
      },
      'retina_detect': true

    })

  }

  draw();



})

$('a[href^="#slideDown2"]').on('click', function(event) {

$(".newWrapper2").removeClass('newClass')
var target = $(this.getAttribute('href'));

if( target.length ) {
  event.preventDefault();
  $('html, body').stop().animate({
    scrollTop: target.offset().top
  }, 1600);

}
})


$('a[href^="#slideDown3"]').on('click', function(event) {

$(".newWrapper3").removeClass('newClass')
var target = $(this.getAttribute('href'));

if( target.length ) {
  event.preventDefault();
  $('html, body').stop().animate({
    scrollTop: target.offset().top
  }, 1600);

}
setTimeout(function() {

  var eTop = $(".newWrapper3").offset().top;
    $(document).scrollTop(eTop);
    var eHeight = $(".newWrapper3").height();
    var eBottom = eTop + eHeight - $(window).height();
    $(document).on("scroll", function(e){
        var windowScrollTop = $(window).scrollTop();
        if(windowScrollTop < eTop){
            console.log("not allowed");
            $(document).scrollTop(eTop);
        }
        else if(windowScrollTop > eBottom){
            $(document).scrollTop(eBottom);
        }
        else{
            console.log("allowed");
        }
    });


}, 800)
setTimeout(function() {
$('section .fixed-container').css('position', 'fixed')
}, 1500)


})


  $(".hover1").bind('mouseenter', function() {

    if (window.innerHeight < 900) {
      var divPosition = $('#anchorPoint').offset();
      $('html, body').animate({scrollTop: divPosition.top}, 1500);
    }




    setTimeout(function() {
      $('.one .stickyWords').animate({
        'padding-top' : 0,
        'margin-top' :'-5em'
      },800)


      $('.one .stickyArrow').animate({
        'padding-top' : '10em'

      },900);

    }, 600);


    setTimeout(function() {
          $('.one .stickyArrow').animate({
            'padding-left' : '7em'
          },600);
      }, 700)


    setTimeout(function() {
      $('.first').addClass('animated fadeOutUp slow');
    }, 400)

    setTimeout(function() {
      $('#clicked0 .box').removeClass('transparent').addClass('animated slideInUp')
    },1200)

    setTimeout(function() {
      $('#clicked2 .box').removeClass('transparent').addClass('animated flipInX')
    },1500)

    setTimeout(function() {
      $('#clicked3 .box').removeClass('transparent').addClass('animated flipInX')
    },1900)

    setTimeout(function() {
      $('#clicked4 .box').removeClass('transparent').addClass('animated tada')
    },2200)


    $(this).one('mouseleave' , function() {

      setTimeout(function() {
        $('.one .stickyWords').animate({
          'padding-top' : '9em',
          'margin-top' :'0em'
        },500);

        $('.one .stickyArrow').animate({
          'padding-top' : '30em'

        },500);
      }, 600)

      setTimeout(function() {
          $('.one .stickyArrow').animate({
              'padding-left' : '6em'
            },600);
        }, 700)

      setTimeout(function() {
        $('.first').removeClass('animated fadeOutUp slow');
        $('.first').addClass('animated fadeInDown');
      }, 200)

      setTimeout(function() {

        $('.first').removeClass('animated fadeInDown');
      },1500)

      setTimeout(function() {
        $('#clicked0 .box').addClass('transparent').removeClass('animated slideInUp');
        $('#clicked2 .box').addClass('transparent').removeClass('animated flipInX');
        $('#clicked3 .box').addClass('transparent').removeClass('animated flipInX');
        $('#clicked4 .box').addClass('transparent').removeClass('animated tada');

      },2000)

    })

  });


  $(".hover2").bind('mouseenter' , function() {


    // $('.whatIsThis').fadeOut('slow');

  if (window.innerHeight < 900) {
    var divPosition = $('#anchorPoint').offset();
    $('html, body').animate({scrollTop: divPosition.top}, 1500);

  }


    setTimeout(function() {
      $('.two .stickyWords').animate({
        'padding-top' : 0,
        'margin-top' :'-5em'
      },800)

      $('.two .stickyArrow').animate({
        'padding-top' : '10em'

      },900);
    }, 600);

    setTimeout(function() {
        $('.two .stickyArrow').animate({
            'padding-left' : '7em'
          },600);
      }, 700)

    setTimeout(function() {
      $('.second').addClass('animated fadeOutUp slow');
    }, 400)


    setTimeout(function() {
      $('#clicked66 .box').addClass('animated slide-both slow')
    },1200)


    $("body").mousemove(function(e) {
      parallaxIt(e, ".phone", 25);

    });

    function parallaxIt(e, target, movement) {
      var $this = $("body");
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;

      TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement
      });
    }


    $(this).one('mouseleave', function() {

      // if($('.one').is(':hover') || $('.four').is(':hover')) {
            // $('.whatIsThis').delay(500).fadeIn('slow');
       // }

       // if(!$('.three').is(':hover') && !$('.two').is(':hover')) {
       //       $('.whatIsThis').delay(500).fadeIn('slow');
       //  }

      setTimeout(function() {
        $('.two .stickyWords').animate({
          'padding-top' : '9em',
          'margin-top' :'0em'
        },500);

        $('.two .stickyArrow').animate({
          'padding-top' : '30em'

        },500);
      }, 600)

      setTimeout(function() {
          $('.two .stickyArrow').animate({
              'padding-left' : '4em'
            },600);
        }, 700)

      setTimeout(function() {
        $('.second').removeClass('animated fadeOutUp slow');
        $('.second').addClass('animated fadeInDown');
      }, 200)

      setTimeout(function() {
        $('.second').removeClass('animated fadeInDown');
      },1500)

      setTimeout(function() {
        $('#clicked66 .box').removeClass('animated slide-both slow')
      },1200)

    })

  })



  $(".hover3").bind('mouseenter' , function() {

    // $('.whatIsThis').fadeOut('slow');

    $('.third').removeClass('animated fadeInDown');

  if (window.innerHeight < 900) {
    var divPosition = $('#anchorPoint').offset();
    $('html, body').animate({scrollTop: divPosition.top}, 1500);

  }


    setTimeout(function() {
      $('.three .stickyWords').animate({
        'padding-top' : 0,
        'margin-top' :'-5em'
      },800);

      $('.three .stickyArrow').animate({
        'padding-top' : '10em'

      },900);

    }, 600)

    setTimeout(function() {
        $('.three .stickyArrow').animate({
            'padding-left' : '7em'
          },600);
      }, 700)

    setTimeout(function() {
      $('.third').addClass('animated fadeOutUp slow');
    }, 400)

    setTimeout(function() {
      $('#clicked8 .box').removeClass('transparent').addClass('animated tilt-in-fwd-tr')
    },1200)

    setTimeout(function() {
      $('#clicked88 .box').removeClass('transparent').addClass('animated bounce-in-top')
    },2000)


    $(this).one('mouseleave', function() {

      // if($('.one').is(':hover') || $('.four').is(':hover')) {
            // $('.whatIsThis').delay(500).fadeIn('slow');
       // }

       // if(!$('.two').is(':hover') && !$('.three').is(':hover')) {
       //       $('.whatIsThis').delay(500).fadeIn('slow');
       //  }

      setTimeout(function() {
        $('.three .stickyWords').animate({
          'padding-top' : '9em',
          'margin-top' :'0em'
        },500);

        $('.three .stickyArrow').animate({
          'padding-top' : '30em'

        },500);

      }, 600)

      setTimeout(function() {
          $('.three .stickyArrow').animate({
              'padding-left' : '4em'
            },600);
        }, 700)


      setTimeout(function() {
        $('.third').removeClass('animated fadeOutUp slow');
        $('.third').addClass('animated fadeInDown');
      }, 200)

      setTimeout(function() {
        $('.third').removeClass('animated fadeInDown');
      },1500)


      setTimeout(function() {
        $('#clicked8 .box').addClass('transparent').removeClass('animated tilt-in-fwd-tr')
      },1800)

      setTimeout(function() {
        $('#clicked88 .box').addClass('transparent').removeClass('animated bounce-in-top')
      },1800)
    })

  })



  $(".hover4").bind('mouseenter', function() {

    if (window.innerHeight < 900) {
    var divPosition = $('#anchorPoint').offset();
    $('html, body').animate({scrollTop: divPosition.top}, 1500);

  }


    setTimeout(function() {
      $('.four .stickyWords').animate({
        'padding-top' : 0,
        'margin-top' :'-5em'
      },800);

      $('.four .stickyArrow').animate({
        'padding-top' : '10em'

      },900);

    }, 600)

    setTimeout(function() {
        $('.four .stickyArrow').animate({
            'padding-left' : '7em',
          },600);
      }, 900)

    setTimeout(function() {
      $('.fourth').addClass('animated fadeOutUp slow');
    }, 400)

    setTimeout(function() {
      $('#clicked11 .box').removeClass('transparent').addClass('animated flicker-in-1')
    },1200)

    setTimeout(function() {
      $('#clicked12 .box').removeClass('transparent').addClass('animated slit-in-vertical')
    },500)



    $(this).one('mouseleave', function() {

      setTimeout(function() {
        $('.four .stickyWords').animate({
          'padding-top' : '9em',
          'margin-top' :'0em'
        },500);

        $('.four .stickyArrow').animate({
          'padding-top' : '30em'

        },500);

      }, 600)

      setTimeout(function() {
          $('.four .stickyArrow').animate({
              'padding-left' : '4em'
            },600);
        }, 700)

      setTimeout(function() {
        $('.fourth').removeClass('animated fadeOutUp slow');
        $('.fourth').addClass('animated fadeInDown');
      }, 200)

      setTimeout(function() {
        $('.fourth').removeClass('animated fadeInDown');
      },1500)

      setTimeout(function() {
        $('#clicked11 .box').addClass('transparent').removeClass('animated flicker-in-1')
      },1800)

      setTimeout(function() {
        $('#clicked12 .box').addClass('transparent').removeClass('animated slit-in-vertical')
      },1800)

    })

  })



})
