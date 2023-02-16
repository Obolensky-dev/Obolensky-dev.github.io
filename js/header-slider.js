/* Скрипт для запуска OwlCarusele в шапке станицы*/

jQuery(document).ready(function($){

var header_slider = $('#about-slider');
header_slider.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    touchDrag: false,
    mouseDrag: false,
    dots: false,
  });
var header_slider_2 = $('#about-slider-2');
header_slider_2.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    touchDrag: false,
    mouseDrag: false,
    dots: false,
  });


});



