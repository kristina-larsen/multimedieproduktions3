
$( document ).ready(function() {

  var width = 260;  // Størrelsen på billederne, i pixels
  var animationSpeed = 500;  // Hastigheden de rykker sig ved, i milisekunder
  var currentSlide = 1;

  var $slider = $('#slider');
  var $slideContainer = $slider.find('.slides');
  var $slides = $slideContainer.find('.slide');

  // Styre hvad der sker nå der trykkes på pilen til højre
  $('.control_next').click(function () {
    $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function () {
      currentSlide++;
        if (currentSlide === $slides.length-5) {
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
        }
      });
    });
    // Styre hvad der sker ved tryk på pilen til venstre
  $('.control_prev').click(function () {
    $slideContainer.animate({'margin-left': '+='+width}, animationSpeed, function () {
      currentSlide--;
        if (currentSlide === -4) {
          currentSlide = 2;
          $slideContainer.css('margin-left', -1300);
        }
      });
    });

});//slider slut
