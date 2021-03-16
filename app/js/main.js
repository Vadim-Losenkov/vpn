$(function() {
  $('.reviews__wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: true,
    prevArrow: '<div class="arrow arrow-prev"></div>',
    nextArrow: '<div class="arrow"></div>',
    autoplay: true
  })
})