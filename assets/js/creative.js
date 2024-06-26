/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */


(function($) {

    "use strict"; // Start of use strict
    var topOffset = 0;

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      animateScroll (this);
    });

    function animateScroll(element)
    {
        if (location.pathname.replace(/^\//, '') == element.pathname.replace(/^\//, '') && location.hostname == element.hostname) {

          var target = $(element.hash);

          var navbarMenuHeight = $('#navbar-links').height();
          target = target.length ? target : $('[name=' + element.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top - navbarMenuHeight - topOffset) 
            }, 1000, "easeInOutExpo");
            return false;
          }
        }
    }

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '#mainNav',
        offset: $(window).height()/2
    })

    // Closes the Responsive Menu on Menu Item Click
    $('#navbar-links ul li a').click(function() {
      $('#navbar-links').collapse('hide')
    });

    $('.docsearchBottom').click(function() {
      $('#navbar-links').collapse('hide')
    });

    //Animate scroll to FeaturesMenu when switching sticky menu
    $('a[data-toggle="pill"]').on('show.bs.tab', function (e) {
      
      const offset = -40;
      const target = $("#Features").offset().top + offset;
      
      $('html, body').animate({
        scrollTop: (target) 
      }, 1000, "easeOutExpo");
    })

    //Swiper slider
    const swiper = new Swiper('.swiper', {
      loop: true,
      slidesPerView: 1,
      centeredSlides: false,
      // Disable preloading of all images
      preloadImages: false,
      // Enable lazy loading
      lazy: true,

      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },

      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    

})(jQuery); // End of use strict
