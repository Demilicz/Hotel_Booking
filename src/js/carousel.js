import  $ from 'jquery';

$(function() {

  $('.about__slider').slick({
    draggable: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          draggable: true
        }
      }
    ]
  });
});