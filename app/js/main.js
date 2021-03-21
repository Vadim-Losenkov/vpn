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
  $('.header__login-signin').on('click', () => {
    $('.header__btn').removeClass('open')
    $('.over').removeClass('open')
    $('.header__mobile').removeClass('open')
  })
  $('.header__login-signup').on('click', () => {
    $('.header__btn').removeClass('open')
    $('.over').removeClass('open')
    $('.header__mobile').removeClass('open')
  })
  
  
  $('.top__content-btn').magnificPopup({
    type: 'inline',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
        beforeOpen: function () {
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });
  $('.header__login-signin').magnificPopup({
    type: 'inline',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
        beforeOpen: function () {
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });
  $('.header__login-signup').magnificPopup({
    type: 'inline',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
        beforeOpen: function () {
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });
  $('.product__item-btn').magnificPopup({
    type: 'inline',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
        beforeOpen: function () {
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });
  $('.reviews__banner-btn').magnificPopup({
    type: 'inline',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
        beforeOpen: function () {
            this.st.mainClass = this.st.el.attr('data-effect');
        }
    },
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });
})
