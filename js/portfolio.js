$(document).ready(function(){

	function portfolio() {
		portfolioitem($(".portfolio-box"));
		portfolioNav();
	}

	function portfolioitem(e){
		$('.portfolio-details', e).on( "click", function() {

			var portfolioItemUrl = $(this).attr("href")+"?"+(new Date()).getTime(); 

			$('html, body').animate({ 
				scrollTop: $(".portfolio-top").offset().top - 50
			}, 400);

			$('.portfolio-loading').css(
				{ 
					"display": "block", 
					"opacity": "0"
				}
			).animate({
				"opacity": "0.6"
			}, 300);

			$('#portfolio-details-box').animate({opacity:0}, 400,function(){

			  $("#portfolio-details-box").load(portfolioItemUrl,function(){
					$('.flexslider').flexslider({animation: "fade",controlNav:false});
			  });
			  
			  $('#portfolio-details-box').animate({opacity:1},400);
			});


			$('.portfolio-wrapper').slideUp(400, function(){
			  $('.portfolio-loading').delay(800).animate({ "opacity": "0" }, 100,function(){
				$('.portfolio-loading').css("display","none");
			  });
			  $('#portfolio-details-box').css('visibility', 'visible');}).delay(800).slideDown(400,function(){
				$('#portfolio-details-box').animate({opacity:1}, 400);
			  });
			return false;
		});
		
	} 

	function portfolioNav() {
		$('#portfolio-next').on( "click", function() {
			var portfolioItemNextUrl = $(".projectNextUrl").attr("href")+"?"+(new Date()).getTime();
			$('#portfolio-details-box').animate({opacity:0}, 400,function(){
			  $("#portfolio-details-box").load(portfolioItemNextUrl,function(){
				$('.flexslider').flexslider({animation: "fade",controlNav:false});
			  });
			  $('#portfolio-details-box').animate({opacity:1},400);
			});
		  return false;
		});
		
		$('#portfolio-prev').on( "click", function() {
			var portfolioItemPrevUrl = $(".projectPrevUrl").attr("href")+"?"+(new Date()).getTime();
			$('#portfolio-details-box').animate({opacity:0}, 400,function(){
			  $("#portfolio-details-box").load(portfolioItemPrevUrl,function(){
				$('.flexslider').flexslider({animation: "fade",controlNav:false});
			  });
			  $('#portfolio-details-box').animate({opacity:1},400);
			});
			return false;
		});
		
		$('#portfolio-close').on( "click", function() {
		  $('.portfolio-wrapper').slideUp(400, function(){
			  $('#portfolio-details-box').empty();
		  });
		  return false;
		});
	}


portfolio();

	});
