(function($) {
  "use strict"; // Start of use strict


  //scroll to the top of page on reload
  window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

  // Hide modal on opening another modal
$('.close-modal', '#portfolioModal7').click(function() {
  $('#portfolioModal1').modal('hide');
});

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 71)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Floating label headings for the contact form
  $(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });



  // Gets Video to stop once the modal is closed
    $(document).ready(function(){
        $('.modal').each(function(){
                var src = $(this).find('iframe').attr('src');
            $(this).on('click', function(){

                $(this).find('iframe').attr('src', '');
                $(this).find('iframe').attr('src', src);



            });
        });
    });

    $('.carousel').carousel({
      interval: 2000000
    });

    $('.carousel-skills').carousel({
      interval: 2000000
    });


    jQuery(window).on('load', function() {

        /*
            Stop carousel
        */
        $('.carousel').carousel('pause');

    });





})(jQuery); // End of use strict

    $('.carousel').bcSwipe({ threshold: 50 })

  // var coll = document.getElementsByClassName("collapsible");
  // var i;
  //
  // for (i = 0; i < coll.length; i++) {
  //   coll[i].addEventListener("click", function() {
  //     this.classList.toggle("active");
  //     var content = this.nextElementSibling;
  //     if (content.style.display === "block") {
  //       content.style.display = "none";
  //     } else {
  //       content.style.display = "block";
  //     }
  //   });
  // }
