
$( document ).ready(function() {

  var width = 410;  // Størrelsen på billederne, i pixels
  var animationSpeed = 500;  // Hastigheden de rykker sig ved, i milisekunder
  var currentSlide = 1;

  var $slider = $('#slider');
  var $slideContainer = $slider.find('.slides');
  var $slides = $slideContainer.find('.slide');

  // Styre hvad der sker nå der trykkes på pilen til højre
  $('.control_next').click(function () {
    $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function () {
      currentSlide++;
        if (currentSlide === $slides.length-9) {
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
        }
      });
    });
    // Styre hvad der sker ved tryk på pilen til venstre
  $('.control_prev, .control_prev2').click(function () {
    $slideContainer.animate({'margin-left': '+='+width}, animationSpeed, function () {
      currentSlide--;
        if (currentSlide === -3) {
          currentSlide = 1;
          $slideContainer.css('margin-left', -1230);
        }
      });
    });

});//slider slut

function openNav(){
  document.getElementById("mynav").style.width = "50%";
}
function closeNav(){ /*javascript til at lukke menuen når der trykkes på x */
  document.getElementById("mynav").style.width = "0%";
}
