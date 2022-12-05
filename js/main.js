(function ($) {
"use strict";
// TOP Menu Sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 100) {
        $("#sticky-header").removeClass("sticky");
        $('#back-top').fadeIn(500);
	} else {
        $("#sticky-header").addClass("sticky");
        $('#back-top').fadeIn(500);
	}
});


$(document).ready(function(){

$('.popup-with-form a').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});


var menu = $('#navigation');
if(menu.length){
	menu.slicknav({
		prependTo: ".mobile_menu",
		closedSymbol: '+',
		openedSymbol:'-'
	});
};


    $('body').fadeIn(200);


// review-active
$('.slider_active').owlCarousel({
    loop:true,
    margin:0,
    items:1,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    nav:false,
    dots:false,
    autoplaySpeed: 1000,
    animateOut: 'fadeOut',
});

$('.expert__slider').owlCarousel({
  loop:true,
  margin:30,
items:1,
autoplay:true,
dots:false,
autoplayHoverPause: true,
autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      767:{
          items:2,
          nav:false
      },
      992:{
          items:3
      },
      1200:{
          items:4
      },
      1500:{
          items:4
      }
  }
});


});
})(jQuery);	