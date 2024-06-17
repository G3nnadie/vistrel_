$(document).ready(function () {

  // Menu mobail
  $('.navbar-toggle').on('click', function() {
    $(this).toggleClass('active');
    $('.nav').slideToggle( 200, function() {});
  });

  // Open form
  $('.information-form-js').on('click', function() {
    $('.information__item--text').hide();
    $('.information__item--form').fadeIn(200);
  });

  $('.back--js').on('click', function(e) {
    e.preventDefault();
    $('.information__item--form').hide();
    $('.information__item--text').fadeIn(200);
  });

  $('.tabs__item').not(':first').hide();
  $('.tabs__nav-item').click(function() {
    $('.tabs__nav-item').removeClass('active').eq($(this).index()).addClass('active');
    $('.tabs__item').hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass('active');

  // Hero sl
  var swiper1 = new Swiper(".hero__sl", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-hero",
      prevEl: ".swiper-button-prev-hero",
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  // Team sl
  var swiper1 = new Swiper(".team__sl", {
    spaceBetween: 20,
    slidesPerView: 'auto',
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next-team",
      prevEl: ".swiper-button-prev-team",
    },
    breakpoints: {
      1600: {
        slidesPerView: 4,
      },
    },
  });

  // Team sl inner
  var swiper1 = new Swiper(".team__sl-inner", {
    spaceBetween: 20,
    slidesPerView: 'auto',
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next-team",
      prevEl: ".swiper-button-prev-team",
    },
    breakpoints: {
      1600: {
        slidesPerView: 5,
      },
    },
  });

});