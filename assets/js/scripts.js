$(document).ready(function(){
	// header scroll
	$(window).scroll(function(){
        var scrollvalu=$(this).scrollTop();
        if(scrollvalu>100){
          $('.header_area_nav').addClass('fixedclass');
        }else{
           $('.header_area_nav').removeClass('fixedclass');
        }
       })

	



	//    mobile menu side show
	$(".mobile_bars").click(function(){
		$(".header_area_nav").toggleClass("sideShow_menu");
	  });


	// readMore start
	$('.read_more_btn1 a').click(function(){
		$('.read_more1 p').slideToggle(500);

		return false
	});

	$('.read_more_btn2 a').click(function(){
		$('.read_more2 p').slideToggle(500);

		return false
	});
	$('.read_more_btn3 a').click(function(){
		$('.read_more3 p').slideToggle(500);

		return false
	});
	
	$('.read_more_btn4 a').click(function(){
		$('.read_more4 p').slideToggle(500);

		return false
	});
	$('.read_more_btn5 a').click(function(){
		$('.read_more5 p').slideToggle(500);

		return false
	});
	
	$('.read_more_btn6 a').click(function(){
		$('.read_more6 p').slideToggle(500);

		return false
	});
// readMore End




// project popup
// 	$('.floowPlanPopup').magnificPopup({
// 		type: 'image',
// 		zoom: {
// 			enabled: true,
// 			duration: 300,
// 			easing: 'ease-in-out',
// 			opener: function(element) {
// 				return element.find('img');
// 			}
// 		}
//    }) 

//    gallery popup
$('.gallery_popup').magnificPopup({
	type: 'image',
	gallery:{
		enabled:true
	  }
})

$('.toggle_download_btn').magnificPopup({
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

$('.toggle_download_btn2').magnificPopup({
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





$('.table_popup_youtube').magnificPopup({
	disableOn: 700,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,

	fixedContentPos: false
});





});


$(document).ready(function () {
	var isDraggableInitialized = false;

	// Initialize Magnific Popup
	$('.floowPlanPopup').magnificPopup({
		type: 'image',
		closeOnContentClick: false,  // Disable closing on image click
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom',
		image: {
			verticalFit: true,
			titleSrc: function (item) {
				return item.el.attr('title') + '<small>by Author</small>';
			}
		},
		zoom: {
			enabled: true,
			duration: 300,
			opener: function (element) {
				return element.find('img');
			}
		},
		callbacks: {
			open: function () {
				// Add custom zoom controls to the popup
				var customControls = '<div class="custom-controls">' +
					'<span class="zoom-in"><i class="fas fa-plus"></i></span>' +
					'<span class="zoom-out"><i class="fas fa-minus"></i></span>' +
					'</div>';
				$(customControls).appendTo('.mfp-container');

				// Initialize custom zoom controls
				$('.zoom-in').click(function (e) {
					e.stopPropagation();
					zoomIn();
				});

				$('.zoom-out').click(function (e) {
					e.stopPropagation();
					zoomOut();
				});

				// Initialize draggable behavior only if not already initialized
				if (!isDraggableInitialized) {
					// Make the image draggable using jQuery UI
					var $mfpContent = $('.mfp-content');
					$mfpContent.draggable({
						start: function (event, ui) {
							var $container = $(this).parent();
							var containerWidth = $container.width();
							var containerHeight = $container.height();
							var elementWidth = $(this).width();
							var elementHeight = $(this).height();

							// Set the containment dynamically based on image and container dimensions
							$(this).draggable('option', 'containment', [
								-(elementWidth - containerWidth), // left
								0, // top
								0, // right
								-(elementHeight - containerHeight) // bottom
							]);
						},
						cursor: 'move'
					});

					isDraggableInitialized = true;
				}
			}
		}
	});

	function zoomIn() {
		var img = $('.mfp-with-zoom img');
		var currentScale = parseFloat(img.css('transform').split(',')[3]) || 1;
		img.css('transform', 'scale(' + (currentScale + 0.2) + ')');
	}

	function zoomOut() {
		var img = $('.mfp-with-zoom img');
		var currentScale = parseFloat(img.css('transform').split(',')[3]) || 1;
		img.css('transform', 'scale(' + (currentScale - 0.2) + ')');
	}
});