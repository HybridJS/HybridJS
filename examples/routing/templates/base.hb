doctype html
html(lang="en")
	head
		title
		script(src="hybrid.js")
		script
			hybrid.controllers['eins']
			hybrid.init();
	body
		.navbar
			.container
		.container
			+routing-view