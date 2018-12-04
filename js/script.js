  // preloader
$(window).on('load', function () {
  $('.loader_inner').fadeOut();
  $('.loader').delay(400).fadeOut('slow');
  $('.header__name').toggleClass('header__name_animation');
});

$(document).ready(function () {

  // header height
  function heightDetect() {
    $('.header').css('min-height', $(window).height());
  }
  heightDetect();
  $(window).resize(function () {
    heightDetect();
  });
  // humburger menu
  $('.humburger__logo').click(function () {
    $(this).toggleClass('open');
    $('.menu').toggleClass('menu_active');
    $('body').toggleClass('body-fixed');
    if ($('.menu__container').is(':visible')) {
      $('.menu__container').fadeOut(600);
    } else {
      $('.menu__container').fadeIn(600);
    }
  });
  $('.menu__item').click(function () {
    $('.menu__container').fadeOut(600);
    $('.humburger__logo').removeClass('open');
    $('.menu').toggleClass('menu_active');
    $('body').toggleClass('body-fixed');
  });
  // sloww scroll
  $('.menu__item a[href^="#"], .footer__item a[href^="#"]').on('click', function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
  });

  // parallax effect
  $(window).scroll(function () {
    var scroll = $(this).scrollTop();
    $('.header__name').css({
      'transform': 'translate(0%, ' + scroll / 2.5 + '%'
    });
  });
    
  // form validation
  $('.overlay').hide();
  $('.btn').click(function(){
    $('.btn').submit(function(e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      $.ajax({
        type:"POST",
        url:"form.php",
        cache: false,
        data:  $(this).serialize()
          // Done Functions
        }).done(function(){
          $('.overlay').css('display','flex').delay(12000);
          setTimeout(function() {
            $('.mainForm').trigger("reset");
          }, 1000);
        });
      return false;
    });
  });
  $('.btn__close').click(function(){
    $('.overlay').fadeOut(300);
  });
});