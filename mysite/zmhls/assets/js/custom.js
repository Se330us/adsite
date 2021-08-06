(function($) {
	'use strict';
	
	// Интерактив меню
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 50) {
			$('.main-navbar').addClass('menu-shrink');
		} else {
			$('.main-navbar').removeClass('menu-shrink');
		}
	});	
	
	$('.navbar-nav li a').on('click', function(e){
		let anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 50
		}, 1000);
		e.preventDefault();
	});

	$(document).on('click','.navbar-collapse.show',function(e) {
		if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
			$(this).collapse('hide');
		}
	});	


	// Слайдер
	$('.studying-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: true,
		autoplay: true,
		autoplayHoverPause: true,
		dots: false,
		navText: [
			"<i class='las la-long-arrow-alt-left'></i>",
			"<i class='las la-long-arrow-alt-right'></i>"
		]
	})
	
	// WOW JS - для анимации во время прокрутки
	new WOW().init();

	// Прелоадер (next door которая крутится при загрузке)
	jQuery(window).on('load',function(){
		jQuery(".preloader").fadeOut(500);
	});

	// Кнопка вверх
	$(window).on('scroll', function() {
        if ($(this).scrollTop() > 0) {
            $('.go-top').addClass('active');
        } else {
            $('.go-top').removeClass('active');
        }
	});	
    $(function(){
        $(window).on('scroll', function(){
            let scrolled = $(window).scrollTop();
            if (scrolled > 600) $('.go-top').addClass('active');
            if (scrolled < 600) $('.go-top').removeClass('active');
        });  
        
        $('.go-top').on('click', function() {
            $("html, body").animate({ scrollTop: "0" },  500);
        });
    });

})(jQuery);