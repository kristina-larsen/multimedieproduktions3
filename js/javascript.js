
//Burgermenu Størrelsen
function openNav(){
  document.getElementById("mynav").style.width = "50%";
}
function closeNav(){ /*javascript til at lukke menuen når der trykkes på x */
  document.getElementById("mynav").style.width = "0%";
}


$( document ).ready(function() {

  var width = 380;  // Størrelsen på billederne, i pixels
  var animationSpeed = 500;  // Hastigheden de rykker sig ved, i milisekunder
  var currentSlide = 1;


//Her bestemmes den width som der den flytter på slides når pilen klikkes, den siger at hvis sidens width er mindre end 765, vil slide rykke 280 px og større end 765 med 380 px
  if($(window).width() < 765)
{
   width = 280;
} else {
   width = 380;
}

//Slide videoer række 1
  var $slider1 = $('#slider1');
  var $slideContainer1 = $slider1.find('.slides1');
  var $slides1 = $slideContainer1.find('.slide1');
  // Styre hvad der sker nå der trykkes på pilen til højre
  $('.control_next1').click(function () {
    $slideContainer1.animate({'margin-left': '-='+width}, animationSpeed, function () {
      currentSlide++;
        if (currentSlide === $slides1.length-9) {
          currentSlide = 1;
          $slideContainer1.css('margin-left', 0);
        }
      });
    });
    // Styre hvad der sker ved tryk på pilen til venstre
  $('.control_prev1').click(function () {
    $slideContainer1.animate({'margin-left': '+='+width},
    animationSpeed, function () {
      currentSlide--;
        if (currentSlide === -3) {
          currentSlide = 1;
          $slideContainer1.css('margin-left', -1230);
        }
      });
    });

          //Slide videoer række 2
          var $slider2 = $('#slider2');
          var $slideContainer2 = $slider2.find('.slides2');
          var $slides2 = $slideContainer2.find('.slide2');
    // Styre hvad der sker nå der trykkes på pilen til højre
    $('.control_next2').click(function () {
      $slideContainer2.animate({'margin-left': '-='+width},
      animationSpeed, function () {
        currentSlide++;
          if (currentSlide === $slides2.length-9) {
            currentSlide = 1;
            $slideContainer2.css('margin-left', 0);
          }
        });
      });
      // Styre hvad der sker ved tryk på pilen til venstre
    $('.control_prev2').click(function () {
      $slideContainer2.animate({'margin-left': '+='+width},
      animationSpeed, function () {
        currentSlide--;
          if (currentSlide === -3) {
            currentSlide = 1;
            $slideContainer2.css('margin-left', -1230);
          }
        });
      });

          //Slide videoer række 3
          var $slider3 = $('#slider3');
          var $slideContainer3 = $slider3.find('.slides3');
          var $slides3 = $slideContainer3.find('.slide3');
      // Styre hvad der sker nå der trykkes på pilen til højre
      $('.control_next3').click(function () {
        $slideContainer3.animate({'margin-left': '-='+width}, animationSpeed, function () {
          currentSlide++;
            if (currentSlide === $slides3.length-9) {
              currentSlide = 1;
              $slideContainer3.css('margin-left', 0);
            }
          });
        });
        // Styre hvad der sker ved tryk på pilen til venstre
      $('.control_prev3').click(function () {
        $slideContainer3.animate({'margin-left': '+='+width}, animationSpeed, function () {
          currentSlide--;
            if (currentSlide === -3) {
              currentSlide = 1;
              $slideContainer3.css('margin-left', -1230);
            }
          });
        });

          //Slide videoer række 4
          var $slider4 = $('#slider4');
          var $slideContainer4 = $slider4.find('.slides4');
          var $slides4 = $slideContainer4.find('.slide4');
        // Styre hvad der sker nå der trykkes på pilen til højre
        $('.control_next4').click(function () {
          $slideContainer4.animate({'margin-left': '-='+width}, animationSpeed, function () {
            currentSlide++;
              if (currentSlide === $slides4.length-9) {
                currentSlide = 1;
                $slideContainer4.css('margin-left', 0);
              }
            });
          });
          // Styre hvad der sker ved tryk på pilen til venstre
        $('.control_prev4').click(function () {
          $slideContainer4.animate({'margin-left': '+='+width}, animationSpeed, function () {
            currentSlide--;
              if (currentSlide === -3) {
                currentSlide = 1;
                $slideContainer4.css('margin-left', -1230);
              }
            });
          });

          //Slide videoer række 5

          var $slider5 = $('#slider5');
          var $slideContainer5 = $slider5.find('.slides5');
          var $slides5 = $slideContainer5.find('.slide5');
          // Styre hvad der sker nå der trykkes på pilen til højre
          $('.control_next5').click(function () {
            $slideContainer5.animate({'margin-left': '-='+width}, animationSpeed, function () {
              currentSlide++;
                if (currentSlide === $slides5.length-9) {
                  currentSlide = 1;
                  $slideContainer5.css('margin-left', 0);
                }
              });
            });
            // Styre hvad der sker ved tryk på pilen til venstre
          $('.control_prev5').click(function () {
            $slideContainer5.animate({'margin-left': '+='+width}, animationSpeed, function () {
              currentSlide--;
                if (currentSlide === -3) {
                  currentSlide = 1;
                  $slideContainer5.css('margin-left', -1230);
                }
              });
            });

});//slider slut
