'use strict';

var Compiler = module.exports = function Compiler(string, options) {
	// Init by paramters
	this.options = options;
	this.lines = string.split("\n");
	// Init starting values
	this.currentLine = 0;
	this.previousTabs = -1;
	this.tagChain = [];
}

Compiler.prototype = {
	compile: function(callback) {
		// Init code buffer
		this.buf = [];
		this.buf.push('var o = [];')
		// Start line compiling
		this.linesLength = this.lines.length;
		while (this.currentLine < this.linesLength) {
			this.processLine();
			this.currentLine++;
		}
		// Close and returing buffer
		this.buf.push('return o.join("")');
		// Callback
		callback(this.buf.join(''));
	},
	processLine: function() {
		// Split line by tabs and content
		var line = this.lines[this.currentLine].split(/^(\t+|\s\s\s\s+)/);
		// Get tabs length
		this.tabs = line[1] != undefined ? line[1].match(/(\t|\s\s\s\s)/ig).length : 0;
		console.log(this.tabs + 'p: ' + this.previousTabs);
		// Get line content
		var content = line[2] || line[0];
		// Split content
		content = content.split(/^([a-z]+) /);
		// Get tag name
		this.tagName = content[1] || content[0];
		// Get tag content
		this.tagContent = content[2] || '';
		// Check line
		if (this.tabs === this.previousTabs + 1) {
			// Current tag in prevoius tag
			// Add current tag name to the tag chain
			this.tagChain.push(this.tagName);
			// Add output to buffer
			this.buf.push('o.push("<' + this.tagName + '>' + this.tagContent + '");');
		} else if (this.tabs === this.previousTabs) {
			// Current tag beside brevious tag
			// Cache the length of the tag chain for better performance
			var tagChainLength = this.tagChain.length;
			// Close previous tag in the output
			this.buf.push('o.push("</' + this.tagChain[tagChainLength - 1] + '>");');
			// replace last tag in tag chain by current
			this.tagChain[tagChainLength - 1] = this.tagName;
			// Add current output to buffer
			this.buf.push('o.push("<' + this.tagName + '>' + this.tagContent + '");');
		} else if (this.tabs < this.previousTabs) {
			// Current tag unter previous tag
			// Close prevoius tags
			this.closeTags();
			// Add current tag name to the tag chain
			this.tagChain.push(this.tagName);
			// Add output to buffer
			this.buf.push('o.push("<' + this.tagName + '>' + this.tagContent + '");');
			// close 
		} else {
			throw new Error('HybridJS templates: Wrong line ident')
		}
		// If last line
		if (this.currentLine >= this.linesLength - 1 ) {
			// Close latest tags
			this.closeTags();
		}
		// Set previous tabs
		this.previousTabs = this.tabs;
	},
	closeTags: function() {
		// Cache the length of the tag chain for better performance
		var tagChainLength = this.tagChain.length;
		// Close previous tags in the output
		for (var i = 0; i <= this.tabs; i++) {
			this.buf.push('o.push("</' + this.tagChain[tagChainLength - 1 - i] + '>");');
			this.tagChain.pop();
		}
	},
	processContent: function() {
		
	}
}