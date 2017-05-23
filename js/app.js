(function($) {

	$(".proof__item a").hover(function() {
		$(this).addClass("add-delay");
	}, function() {
		$(this).removeClass("add-delay");
	});

})(jQuery);