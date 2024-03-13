$(function () {
  ("use strict");
  //sticky-header
  var header = $("header");
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
  $("header .menuLinks li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // toggle menu
  $("header .toggle-menu").click(function () {
    $(".overlay").css({
      transform: "scaleX(1)",
    });
    $("#main-menu").animate({"left": '0'});
    $('body').addClass("stop-scroll");
  });

  $(".overlay").click(function () {
    $(this).removeAttr("style");
    if($(window).width < 480){
      $("#main-menu").animate({"left": '-200px'});
    } else{
      $("#main-menu").animate({"left": '-300px'});
    }
    $('body').removeClass("stop-scroll");
  });

  //click to scroll top
  const scrollButton = $('#scrollTop');
  scrollButton.click(function () {
    $('html,body').animate({
        scrollTop: 0
    }, 500);
  });

  let langVal = $('body').hasClass('rtl') ? true : false; 

  $(".testimonial-carousel").owlCarousel({
    rtl: langVal,
    items: 1,
    dots: true,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    navText: ["<span><i class='fas fa-arrow-left'></i></span>","<span><i class='fas fa-arrow-right'></i></span>"],
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