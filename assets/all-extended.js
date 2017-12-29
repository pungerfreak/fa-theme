jQuery(function($) {
  // var left = $('.slick--left-svg');
  // var next = $('.slick--next-svg');
  // $('.product-images-slider').slick('unslick');
  // $('.product-images-slider').slick({
  //   dots: true
  // });

  // left.appendTo('.slick-prev');
  // next.appendTo('.slick-next');

  $('.slider-for').slick('unslick');
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    centerMode: true,
    focusOnSelect: true,
    arrows: false
  });
});
