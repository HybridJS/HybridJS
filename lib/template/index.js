var Compiler = require('./compiler');

exports.Compiler = Compiler;

// Compile a string
exports.compile = function(str, options, callback) {
	// Paramters
	if (options == undefined) {
		options = {};
	} else if (typeof options == 'function') {
		callback = options;
		options = {};
	}
	// Setup the compiler
	var compiler = new Compiler(str, options);
	// Start the compiling
	compiler.compile(function(result) {
		callback(new Function(result));
	});
}

// Render a string
exports.render = function(str, options, callback) {
	// Paramters
	if (typeof options == 'function') {
		callback = options;
		options = undefined;
	}
	// Compile string to function
	exports.compile(str, options, function(fn) {
		// And render the function now
		callback(fn());
	})
}