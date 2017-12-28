$(document).ready(function(){

	function portfolio() {
		portfolioitem($(".portfolio-box"));
		portfolioNav();
	}
    var portfolioBox = $('#portfolio-details-box');
	function portfolioitem(e){

		$('.portfolio-details', e).on( "click", function() {
			var portfolioItemUrl = $(this).attr("href")+"?"+(new Date()).getTime();
			$('#portfolio-prev, #portfolio-next').show();
			var projectId = $(this).attr("href").substr(38, 40);
			if(projectId == 1) {
            	$('#portfolio-next').hide();
			}
            if(projectId == 8) {
                $('#portfolio-prev').hide();
            }
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
            $('#portfolio-prev, #portfolio-next').show();
            var projectId = $(".projectNextUrl").attr("href").substr(38, 40);
            console.log(projectId);
            if(projectId == 1) {
                $('#portfolio-next').hide();
            }
            if(projectId == 8) {
                $('#portfolio-prev').hide();
            }
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
            $('#portfolio-prev, #portfolio-next').show();
            var projectId = $(".projectPrevUrl").attr("href").substr(38, 40);
            console.log(projectId);
            if(projectId == 1) {
                $('#portfolio-next').hide();
            }
            if(projectId == 8) {
                $('#portfolio-prev').hide();
            }
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
