document.addEventListener("DOMContentLoaded", function () {


	function backToTop(){
		let button = $('.back-to-top');

		$(window).on('scroll', () => {
			if ($(this).scrollTop() >= 400) {
				button.fadeIn();
				
			} else {
				button.fadeOut();
			}
		});
		button.on('click', (e) => {

			e.preventDefault();
			$('html').animate({scrollTop:0}, 1000);
		});

	}
backToTop();
	// Custom JS
	$("#phone").mask("(999) 999-99-99");
	$("#phone2").mask("(999) 999-99-99");
	$('.mouse-icon').click(function () {
		$('html, body').animate({
			scrollTop: $('.features').offset().top
		}, 1000);

	});

	let modalnav = $('.link-ham'),
		over = $('.overline'),
		closenav = $('.closed'),
		btnNav = $('.ham-menu');

	btnNav.click(function () {
		over.show();
		$('html, body').css({
			overflow: 'hidden',
			height: '100%'
		});

	});
	modalnav.click(function(){
		over.hide();
		$('html, body').css({
			overflow: 'auto',
			height: 'auto'
		});
		
	});
	closenav.click(function () {
		over.hide();
		$('html, body').css({
			overflow: 'auto',
			height: 'auto'
		});

	});

	var wow = new WOW().init();

	var mySwiper = new Swiper('.swiper-container', {
		speed: 400,
		spaceBetween: 100,

		pagination: {
			el: '.projects-pagination',
			bulletClass: 'projects-bullet',
			bulletActiveClass: 'projects-bullet-active',
			type: 'bullets',
			clickable: true,
			progressbarOpposite: true,
		},
		autoplay: {
			delay: 4000,
		},


	});

});