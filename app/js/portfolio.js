$(document).ready(function(){

	function portfolio() {
		portfolioitem($(".portfolio-box"));
		portfolioNav();
	}

	function portfolioitem(e){
		var portfolioBox = $('#portfolio-details-box');
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

            portfolioBox.animate({opacity:0}, 400,function(){

                portfolioBox.load(portfolioItemUrl,function(){
					$('.flexslider').flexslider({animation: "fade",controlNav:false});
			  });

                portfolioBox.animate({opacity:1},400);
			});


			$('.portfolio-wrapper').slideUp(200, function(){
			  $('.portfolio-loading').delay(200).animate({ "opacity": "0" }, 100,function(){
				$('.portfolio-loading').css("display","none");
			  });
			  portfolioBox.css('visibility', 'visible');}).delay(800).slideDown(400,function(){
				portfolioBox.animate({opacity:1}, 400);
			  });
			return false;
		});

	}

	function portfolioNav() {
		$('#portfolio-next').on( "click", function() {
			var portfolioItemNextUrl = $(".projectNextUrl").attr("href")+"?"+(new Date()).getTime();
			portfolioBox.animate({opacity:0}, 400,function(){
			  $("#portfolio-details-box").load(portfolioItemNextUrl,function(){
				$('.flexslider').flexslider({animation: "fade",controlNav:false});
			  });
			  portfolioBox.animate({opacity:1},400);
			});
		  return false;
		});

		$('#portfolio-prev').on( "click", function() {
			var portfolioItemPrevUrl = $(".projectPrevUrl").attr("href")+"?"+(new Date()).getTime();
			portfolioBox.animate({opacity:0}, 400,function(){
			  $("#portfolio-details-box").load(portfolioItemPrevUrl,function(){
				$('.flexslider').flexslider({animation: "fade",controlNav:false});
			  });
			  portfolioBox.animate({opacity:1},400);
			});
			return false;
		});

		$('#portfolio-close').on( "click", function() {
		  $('.portfolio-wrapper').slideUp(400, function(){
			  portfolioBox.empty();
		  });
		  return false;
		});
	}


portfolio();

	});
