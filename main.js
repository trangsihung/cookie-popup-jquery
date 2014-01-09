cookie_popup = (function() {
	if ($.cookie('cookie_popup') == undefined) {
		$('.cookie-popup-wrap').fadeIn(600);
		$.cookie('cookie_popup',true,{ expires: 30 });
	};

	$('#closepopup').click(function (e) {
		e.preventDefault();
		$('.cookie-popup-wrap').fadeOut(600);
	});
});

setTimeout(function() {
	cookie_popup();
}, 5000);

$(window).scroll(function(){
	if($(this).scrollTop() > 100){
		cookie_popup();
	}
});