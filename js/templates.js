
if ($('.menu-buttons-floating-list span li').hasClass('active')) {
  console.log('hi fucker')
  $(this).css('background','white')
}

$('.flip-card').on('mouseenter', function() {
$('.newWrapper4').css('background', 'linear-gradient(90deg, rgba(255,255,255,0.9290091036414566) 10%, rgba(228,246,245,0.8869922969187675) 65%, rgba(167,203,216,1) 100%)')

})

$('.flip-card').on('mouseleave', function() {
$('.newWrapper4').css('background', 'linear-gradient(90deg, rgba(255,255,255,0.773546918767507) 39%, rgba(232,245,246,0.9626225490196079) 75%, rgba(217,230,237,0.9850315126050421) 100%)')

})

$('.strips .lightBlueBox').on('mouseenter', function() {
$(this).find('.hangRight').css('visibility', 'visible')
 $(this).find('h1.navy.smaller').css('color', 'white')
})

$('.strips .lightBlueBox').on('mouseleave', function() {
$(this).find('.hangRight').css('visibility', 'hidden')
$('.strips h1.navy.smaller').css('color', '#07477c')
})




var color = '#bdeae6';
var maxParticles = 80;


function templates() {
particlesJS('particles-templates', {
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
      'value': 5,
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

templates();
