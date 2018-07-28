;


var $body = $('body');
var $window = $(window);
var $document = $(document);

function equalHeight(group, groupSize) {
	if (!group.length) {
		return;
	}
	groupSize = +(groupSize || 0);
	if (groupSize < 1) {
		groupSize = group.length;
	}
	let start = -groupSize, part;
	while ((part = group.slice(start += groupSize, start + groupSize)) && part.length) {
		part.outerHeight(Math.max.apply(null, $.makeArray(part.map(function () {
			return $(this).outerHeight();
		}))));
	}
}

$(function ($) {
	$window.resize(function(){
		$('.about .item-img').css('height', 'auto');
		equalHeight($('.about .item-img'), 3);
	}).resize();

	$document
			.on('click', '.mobile-nav-btn', function (e) { //show or hide mobile nav
				e.preventDefault();
				var html = $('html');
				if (html.hasClass('mobile-nav-active')) {
					html.removeClass('mobile-nav-active');
				} else {
					html.addClass('mobile-nav-active');
				}
			});

	$('.custom-scroll_js').mCustomScrollbar();

	$('.documentation-search_js').selectize({
		create: true,
		sortField: 'text'
	});
});
