$(document).ready(function(){
	// Mobile Menu
	$('.mobile_bars').click(function(){
		$('.header_area_nav').slideToggle(1000);

		return false
	});

	// Banner Carousel
	// $('.banner_carousel').owlCarousel({
	// 	items:1,
	// 	loop:true,
	// 	nav:true,
	// 	dots:true,
	// 	autoplay:true,
	// });
	$('.floowPlanPopup').magnificPopup({
		type: 'image',
		gallery:{
		   enabled:true
		 }
   })





});