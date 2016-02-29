$(document).ready(function() {
	Share = {
		vkontakte: function(purl, ptitle, pimg, text) {
			url  = 'http://vkontakte.ru/share.php?';
			url += 'url='          + encodeURIComponent(purl);
			url += '&title='       + encodeURIComponent(ptitle);
			url += '&description=' + encodeURIComponent(text);
			url += '&image='       + encodeURIComponent(pimg);
			url += '&noparse=true';
			Share.popup(url);
		},
		facebook: function(purl, ptitle, pimg, text) {
			url  = 'http://www.facebook.com/sharer.php?s=100';
			url += '&p[title]='     + encodeURIComponent(ptitle);
			url += '&p[summary]='   + encodeURIComponent(text);
			url += '&p[url]='       + encodeURIComponent(purl);
			url += '&p[images][0]=' + encodeURIComponent(pimg);
			Share.popup(url);
		},
		googlePlus: function (purl) {
			url = 'https://plus.google.com/share?url='			
			url = + encodeURIComponent(purl);
		},

		popup: function(url) {
			window.open(url,'','toolbar=0,status=0,width=626,height=436');
		}
	};
	/* site decoration */
		$('#okEmail').click(function() {
			if($('#email').val() != '') {
				var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.[a-z0-9-]/i;
				if(pattern.test($('#email').val())){
					alert('Верно');
				} else {
					alert('Не верно');
				}
			} else {
				alert('Поле email не должно быть пустым');
			}
		});
	/* slider */
	$('.carousel_content').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2500,
		appendDots: $('.carousel_nav'),
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 1153,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
						{
				breakpoint: 500,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: false
				}
			},
		]
	});
}); 