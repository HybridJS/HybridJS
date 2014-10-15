var should = require('chai').should();
var template = require('../lib/template');

describe('Template Compiler', function(){
	it('should equal to the target html code', function(done){
		// Original template
		var templateString = 'html\n	head\n		title Hello World | HybridJS Test\n	body\n		div Hello <strong>World</strong>!';
		// Target html code
		var html = '<html><head><title>Hello World | HybridJS Test</title></head><body><div>Hello <strong>World</strong>!</div></body></html>';
		// Render the Template
		template.render(templateString, function(rendered){
			rendered.should.equal(html);
			done();
		});
	})
})