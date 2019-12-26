$(document).ready(function () {


  $(".hover1").bind('mouseenter', function() {

    var divPosition = $('#anchorPoint').offset();
    $('html, body').animate({scrollTop: divPosition.top}, 3000);


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

    var divPosition = $('#anchorPoint').offset();
    $('html, body').animate({scrollTop: divPosition.top}, 3000);


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

    $('.third').removeClass('animated fadeInDown');

    var divPosition = $('#anchorPoint').offset();
    $('html, body').animate({scrollTop: divPosition.top}, 3000);


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

    var divPosition = $('#anchorPoint').offset();
    $('html, body').animate({scrollTop: divPosition.top}, 3000);


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
