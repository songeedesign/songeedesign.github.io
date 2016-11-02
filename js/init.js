jQuery(function(e){

	$(window).bind('load',function(){
   			$('#load_screen').remove();
  	})

	//데스크탑 메뉴
	$('.gnb>li>a').on('mouseover focus',function(){
		$(this).next().stop().slideDown(250);
	}).parent().on('mouseleave',function(){
		$(this).find('.submenu').stop().slideUp(250);
	})

	$('.lastc').on('blur',function(){
		$(this).parent().parent().stop().slideUp(250);
	})

	//모바일 메뉴버튼 숨기기
	var $gnb=$('.m_gnb');
	$(window).on('resize',function(){
      if($(window).width()>769){
         $gnb.hide();
      }
  	});

	//모바일 메뉴
	$('#m_menu_btn').sidr({
		side:'right'
	});

	//모바일 메뉴 아코디언
	$('.m_gnb>li>a').click(function(){
	$('.m_gnb ul:visible').slideUp(200).parent().removeClass('active');
	$(this).next(':hidden').slideDown(200).parent().addClass('active');
	})

	//메인페이지 슬라이드
		$('.main_slider').carouFredSel({
					responsive: true,
					pagination: "#mainslider_pager",
					width: '100%',
					scroll: 1,
					// scroll : { fx : "crossfade" },
					
					items: {
						width: 490,
						height: '100%',	//	optionally resize item-height
						visible: {
							min: 1,
							max: 1
						}
					},
					mousewheel: true,
					swipe: {
						onMouse: true,
						onTouch: true
					}

				});

	//게시판 슬라이드

 		$('.board_swipe_wrap').bxSlider({
 		mode: 'fade',
		auto: false,
		pause: 4000,
		controls: false,
		pagerCustom: '.board_menu'
 		})
	


	//about font color
	$(".about .about_img_1").hover(function () {
   		$(".about_title_1").css({"color" : "#66CC00"});
	}, function () {
   		$(".about_title_1").css({"color":"#2c2c2c"})
	});
	$(".about .about_img_2").hover(function () {
   		$(".about_title_2").css({"color" : "#66CC00"});
	}, function () {
   		$(".about_title_2").css({"color":"#2c2c2c"});
	})
	$(".about .about_img_3").hover(function () {
   		$(".about_title_3").css({"color" : "#66CC00"});
	}, function () {
   		$(".about_title_3").css({"color":"#2c2c2c"});
	});



	//history 슬라이드
	
 		$('.history_slider').bxSlider({
 		nextSelector: '#history_slider_next',
		prevSelector: '#history_slider_prev',
		// adaptiveHeight: true,
		auto: false,
		pause: 4000,
		pager: false,
 		})
	


	//제품 isotope
	$(window).on('load',function(){
		$grid=$('.grid').isotope();
	})
	

	$('.product_nav').on('click','button',function(){
		var filterName = $(this).data('filter');
		$grid.isotope({
			filter:filterName
		})
	})
	$('.product_nav').each( function( i, buttonGroup ) {
  	var $buttonGroup = $( buttonGroup );
  		$buttonGroup.on( 'click', 'button', function() {
		$buttonGroup.find('.is-checked').removeClass('is-checked');
    	$( this ).addClass('is-checked');
  		});
	});

	// QnA 아코디언
	$('.qna_wrap>li>a').click(function(e){
		e.preventDefault()
	$('.qna_wrap ul:visible').slideUp(200).parent().removeClass('active');
	$(this).next(':hidden').slideDown(200).parent().addClass('active');
	})

	// class slider
	$('#class_list').carouFredSel({
					responsive: true,
					prev: '#class_prev',
					next: '#class_next',
					width: '100%',
					scroll: 2,
					// scroll : { fx : "crossfade" },

					items: {
						width: 310,
						height: '86.75%',	//	optionally resize item-height
						visible: {
							min: 2,
							max: 4
						}
					},
					//mousewheel: true,
					swipe: {
						onMouse: true,
						onTouch: true
					}

	});


	// class slider
	$('.product_slider').carouFredSel({
					responsive: true,
					prev: '#product_slider_prev',
					next: '#product_slider_next',
					width: '100%',
					scroll: 2,
					// scroll : { fx : "crossfade" },

					items: {
						width: 310,
						height: '108%',	//	optionally resize item-height
						visible: {
							min: 2,
							max: 4
						}
					},
					//mousewheel: true,
					swipe: {
						onMouse: true,
						onTouch: true
					}

	});

	// scroll body to 0px on click
	$('.top').click(function(){
		$('body,html').animate({
		scrollTop: 0
		}, 500);
		return false;
		});




})