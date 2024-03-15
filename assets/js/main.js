$(function () {
  ("use strict");
  //sticky-header
  var header = $("#header");
  $(window).scrollTop() >= header.height()
    ? header.addClass("sticky-header").fadeIn("fast")
    : header.removeClass("sticky-header");
  $(window).scroll(function () {
    //if condition
    $(window).scrollTop() >= header.height()
      ? header.addClass("sticky-header").fadeIn("fast")
      : header.removeClass("sticky-header");
  });
  /* active link */
  $("#header .menuLinks li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // toggle menu
  $("#mobile-header .toggle-menu").click(function () {
    $(".overlay").css({ transform: "scaleX(1)", });
    if ( $('body').hasClass('rtl') ) {
      $("#mobile-header #main-menu").animate({"left": '0'});
    } else{
      $("#mobile-header #main-menu").animate({"right": '0'});
    }
    $('body').addClass("stop-scroll");
  });

  $(".overlay").click(function () {
    $(this).removeAttr("style");
    if ( $('body').hasClass('rtl') ) { 
      $("#mobile-header #main-menu").animate({"left": '-200px'});
    } else{
      $("#mobile-header #main-menu").animate({"right": '-200px'});
    }
    $('body').removeClass("stop-scroll");
  });

  $('.password-show').click(function(){
    let passwordInput = $(this).closest('.form-input').find('input');
    if(passwordInput.attr('type') == 'password'){
        $(this).html('').append(`<i class="far fa-eye-slash"></i>`);
        passwordInput.attr('type', 'text');
    }
    else {
        $(this).html('').append(`<i class="far fa-eye"></i>`);
        passwordInput.attr('type', 'password');
    }
  })

  //click to scroll top
  const scrollButton = $('#scrollTop');
  scrollButton.click(function () {
    $('html,body').animate({
        scrollTop: 0
    }, 500);
  });

  let langVal = $('body').hasClass('rtl') ? true : false; 

  $("#banner .banner-carousel").owlCarousel({
    rtl: langVal,
    items: 1,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    navText: ["<span><i class='fas fa-chevron-left'></i></span>","<span><i class='fas fa-chevron-right'></i></span>"],
  });

  $("#specific-offers .specific-offers-carousel, #latest-offers .specific-offers-carousel").owlCarousel({
    rtl: langVal,
    dots: false,
    nav: false,
    loop: false,
    autoplay: true,
    autoplayHoverPause: true,
    margin: 20,
    navText: ["<span><i class='fas fa-chevron-left'></i></span>","<span><i class='fas fa-chevron-right'></i></span>"],
    responsive: {
      0: {
          items: 2.5,
      },
      576: {
          items: 2.5,
      },
      768: {
          items: 3.5,
      },
      992: {
          items: 5.5,
      },
    },
  });

  $(".second-banner-carousel").owlCarousel({
    rtl: langVal,
    items: 1,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    navText: ["<span><i class='fas fa-chevron-left'></i></span>","<span><i class='fas fa-chevron-right'></i></span>"],
  });

  /* Initialize animation on scroll */
  function initiateAnimation() {
    AOS.init({
      delay: 200, 
      duration: 900, 
      easing: 'ease',
      once: true,
    });
  }
  initiateAnimation();
});  