$(function() {
  $('.reviews__wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: true,
    prevArrow: '<div class="arrow arrow-prev"></div>',
    nextArrow: '<div class="arrow"></div>',
    autoplay: true,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      },
    ]
  })
  $('.header__btn').on('click', () => {
    $('.header__btn').toggleClass('open')
    $('.over').toggleClass('open')
    $('.header__mobile').toggleClass('open')
  })
  $('.header__list-link').on('click', () => {
    $('.header__btn').removeClass('open')
    $('.over').removeClass('open')
    $('.header__mobile').removeClass('open')
  })
  $('.over').on('click', () => {
    $('.header__btn').removeClass('open')
    $('.over').removeClass('open')
    $('.header__mobile').removeClass('open')
  })
})

const popup = new Phopup('.top-popup', {
  opener: '.top__content-btn',
})