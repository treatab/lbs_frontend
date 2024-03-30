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
  $("#most-requested .most-requested-carousel, .related-products-carousel").owlCarousel({
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
          items: 1.5,
      },
      576: {
          items: 2.5,
      },
      768: {
          items: 3.5,
      },
      992: {
          items: 4.5,
      },
      1400: {
        items: 5.5,
      },
    },
  });

  $("#brands .brands-carousel").owlCarousel({
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
        items: 3,
      },
      576: {
        items: 4,
      },
      768: {
        items: 6,
      },
      992: {
        items: 8,
      },
      1200: {
          items: 10,
      },
    },
  });

  $(".second-banner-carousel").owlCarousel({
    rtl: langVal,
    items: 1,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    navText: ["<span><i class='fas fa-chevron-left'></i></span>","<span><i class='fas fa-chevron-right'></i></span>"],
  });

  $("#blog .blog-tabs-carousel").owlCarousel({
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
        items: 1.5,
      },
      576: {
        items: 2.5,
      },
      768: {
        items: 3.5,
      },
      992: {
        items: 4.5,
      }
    },
  });

  // verification Code
  const inputElements = [...document.querySelectorAll('input.code-input')]
  inputElements.forEach((ele, index) => {
      ele.addEventListener('keydown', (e) => {
          // if the keycode is backspace & the current field is empty
          // focus the input before the current. Then the event happens
          // which will clear the "before" input box.
          if (e.keyCode === 8 && e.target.value === '') inputElements[Math.max(0, index - 1)].focus()
      })
      ele.addEventListener('input', (e) => {
          const [first, ...rest] = e.target.value
          e.target.value = first ?? ''
          const lastInputBox = index === inputElements.length - 1
          const didInsertContent = first !== undefined
          if (didInsertContent && !lastInputBox) {
              // continue to input the rest of the string
              inputElements[index + 1].focus()
              inputElements[index + 1].value = rest.join('')
              inputElements[index + 1].dispatchEvent(new Event('input'))
          }
      })
  });

  $('#login .sign-form .send-again').click(function() {
    $(this).addClass('d-none');
    var seconds = 60;
    var countdown = setInterval(function() {
      seconds--;
      var minutes = Math.floor(seconds / 60);
      var remainingSeconds = seconds % 60;
  
      if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
      }
  
      $("#login .sign-form #timer").text(minutes + ":" + remainingSeconds);
  
      if (seconds === 0) {
        clearInterval(countdown);
        $('#login .sign-form .send-again').removeClass('d-none');
      }
    }, 1000);
  });


  if($(".rating").length != 0) {
    $(".rating").rating({
      clearButton: '',
      clearCaption: '',
      'size': 'sm',
      starCaptions: function (val) {
          return '(' + val + ')';
      }
    }); 
  };

  $('#offers #filter-btn').click(function(){
    $('#offers #filter').toggleClass('open');
  });
  $('#offers #filter .close-filter').click(function(){
    $('#offers #filter').removeClass('open');
  });
  $(".btn-wishlist").click(function(){
      $(this).toggleClass("liked");
  });

  // cart number
  $('.quantity .qtyplus').click(  function (e) {
    let $input = $(this).prev('input.qty');
    let val = parseInt($input.val());
    $input.val(val + 1).change();
  });

  $('.quantity .qtyminus').click(function (e) {
      let $input = $(this).next('input.qty');
      var val = parseInt($input.val());
      if (val > 1) 
          $input.val(val - 1).change();
  });

/*   $('.select2').select2({
      placeholder: $('.select2 option:first').attr('label'),
      minimumResultsForSearch: Infinity,
      width: '100%'
  });
 */
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