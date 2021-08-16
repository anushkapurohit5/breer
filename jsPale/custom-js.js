// quality
var owl = $('#quality')
owl.owlCarousel({
  margin: 0,
  loop: true,
  nav: false,
  autoplaySpeed: 1e3,
  navSpeed: 1e3,
  paginationSpeed: 1e3,
  slideSpeed: 1e3,
  smartSpeed: 1e3,
  autoplay: 1e3,
  dots: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  transitionStyle: "fade",
  navigation: true,

  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})


// owl-carousel js-

$(".owl-prev").html("<img src='images/left-arrow.png'>");
$(".owl-next").html("<img src='images/right-arrow.png'>");

$("#product-secion .owl-prev").html("<img src='images/engrave/left-arrow.svg'>");
$("#product-secion .owl-next").html("<img src='images/engrave/right-arrow.svg'>");


//$( ".owl-next").html('<i class="fa fa-chevron-right"></i>');


(function ($) {
  $(document).ready(function () {
    //sticky go to top function
    var menu = document.querySelector('#nav-sticky');
    var origOffsetY = menu.offsetTop + 48;
    if ($(window).width() > 750 && $(window).width() < 1000) {
      var origOffsetY = menu.offsetTop + 48;
    } else if ($(window).width() > 640 && $(window).width() < 750) {
      var origOffsetY = menu.offsetTop + 48;
    } else if ($(window).width() < 480) {
      var origOffsetY = menu.offsetTop + 48;
    }

    function scroll() {
      if ($(window).scrollTop() > origOffsetY) {
        $('#nav-sticky').addClass('sticky');
        $('#add-mrgn-sticky').addClass('sticky1');
        $('#slider-mar').addClass('slier-mar');
      } else {
        $('#nav-sticky').removeClass('sticky');
        $('#add-mrgn-sticky').removeClass('sticky1');
        $('#slider-mar').removeClass('slier-mar');
      }
    }
    document.onscroll = scroll;


    $("#back-top").hide();
    $(function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $('#back-top').fadeIn();
        } else {
          $('#back-top').fadeOut();
        }
      });
      $('#back-top a').click(function () {
        $('body,html').animate({
          scrollTop: 0
        }, 800);
        return false;
      });
    });
    //**remve class
    $("#nav-profile-tab").click(function () {
      $("#nav-home-tab").removeClass("intro");
    });

  });


})(jQuery);
