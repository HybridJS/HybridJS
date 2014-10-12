HybridJS
========

(In development) Experimental JavaScript web framework and template engine, similar to AngularJS, but allow hybrid rendering on server (with Node.js) and client side.

This framework is still under development, and should not be used for production use. If you want to help in the creation of web frameworks, please contact me.

## Planned features:

* Template engine similar to Jade, Haml and Emblem.js
* Server and client side rendering and routing
* Client side two-way data binding similar to AngularJS, Ember.js or Kockout.js
  * (If possible) on the base of the native `Object.observe` (like in the future AngularJS 2.0), with a dirty-checking fallback for older browsers (like the current AngularJS 1.x)
    * maybe with Watchtower.js?
  * (Alternatively, if not possible) with a getters and setters (like Ember.js, Kockout.js or Backbone.js)
* Internationalisation support
  * maybe with i18next?
* Client to server communication via AJAX or WebSocket
  * WebSocket communication via [Socket.io](https://github.com/Automattic/socket.io) or [SocketJS](https://github.com/sockjs/sockjs-node)?

## Technical realization

* client side DOM manipulation via jQuery
* integrated jQuery Lite version for use without an external dependency (like in AngularJS)
