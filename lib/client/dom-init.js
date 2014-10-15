$(function() {
	'use strict';
	
	$('[data-hb-controller]').each(function(elem, index) {
		var attributes = elem.attributes;
		var name = elem.attr('hb-controller');
	});
	$('[hb-show]').each(function(elem, index) {
		elem.attr('hb-show');
	});
});