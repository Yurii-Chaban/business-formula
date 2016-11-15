// for main menu mobile
$(function () {
    $('.hidden-menu li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
            $(this).addClass('hidden-menu-active');
        }
    });
});

// for main menu desctop
$(function () {
    $('.overlay ul li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
            $(this).addClass('desctop-menu-active');
        }
    });
});

// for footer menu
$(function () {
    $('.footer-main-menu li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
            $(this).addClass('footer-menu-active');
        }
    });
});

// for services menu
$(function () {
    $('.footer-services-menu li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
            $(this).addClass('services-item-active');
        }
    });
});


// for slider in Home page
var swiper_main = new Swiper('.swiper-container-home-page', {
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    simulateTouch: true,
    centeredSlides: true,
    autoplay: 3500,
    speed: 1000,
    watchSlidesProgress: true,
    autoplayDisableOnInteraction: false
});

// DESCTOP MENU
$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
  $('#toggle').parents('.inside-page-header').css('padding: 0;')
});


// FOR SLIDER MORE 
$('.center').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
          breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ],
nextArrow: '<i class="fa fa-long-arrow-right"></i>',
prevArrow: '<i class="fa fa-long-arrow-left"></i>',
});
// for annation scroll
$(document).ready(function() {
   $('a[href="#"]').bind('click', function(e) {
  e.preventDefault(); //prevent the "normal" behaviour which would be a "hard" jump
       
  var target = $(this).attr("href"); //Get the target
      
  // perform animated scrolling by getting top-position of target-element and set it as scroll target
  $('html, body').stop().animate({ scrollTop: $(target).offset().top }, 1000, function() {
       location.hash = target;  //attach the hash (#jumptarget) to the pageurl
  });
      
  return false;
   });
});