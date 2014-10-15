HybridJS
========

(In development) Experimental JavaScript web framework and template engine, similar to AngularJS, but allow hybrid rendering on server (with Node.js) and client side.

This framework is still under development, and should not be used for production use. If you want to help in the creation of web frameworks, please contact me.

## Planned features

* Template engine similar to [Jade](http://jade-lang.com), [Haml](http://haml.info) and [Emblem.js](http://emblemjs.com)
* Server and client side rendering and routing
* Client side two-way data binding similar to AngularJS, Ember.js or Kockout.js
  * (If possible) on the base of the native `Object.observe` (like in the future AngularJS 2.0), with a dirty-checking fallback for older browsers (like the current AngularJS 1.x)
    * maybe with [Watchtower.js](https://github.com/angular/watchtower.js/)?
  * (Alternatively, if not possible) with a getters and setters (like Ember.js, Kockout.js or Backbone.js)
* Internationalisation support
  * maybe with [i18next](http://i18next.com)?
* Client to server communication via AJAX or WebSocket
  * WebSocket communication via [Socket.io](https://github.com/Automattic/socket.io) or [SockJS](https://github.com/sockjs/sockjs-node)?

## Technical realization

* The server compiles the template into an executable function (as in Jade).
* When a page call, the previously compiled function generates the HTML document.
* If the client supports JavaScript, a JavaScript file will be loaded, which contains all the code needed for client-side rendering.
* The client can now take care of the rendering, and only needs to retrieve the necessary data from the server.
* All necessary raw template segments are passed through `data-` attributes in the DOM.

## Technical implementation details

* Client side DOM manipulation via [jQuery](http://jquery.com)
* Integrated [jQuery Lite](https://docs.angularjs.org/api/ng/function/angular.element) version for use without an external dependency (like in AngularJS)

## Used libraries (in progress)

### Server side
* [Express](http://expressjs.com/)
* [Chai](http://chaijs.com/)

### Client side
* [jQuery](http://jquery.com)