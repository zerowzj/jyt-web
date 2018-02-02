/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/home/q/deploy/from/prod/wechat-20170216-142952/dist/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var P = __webpack_require__(35);
	if (!window.Promise) {
	    window.Promise = P;
	}
	Vue.prototype.$http = __webpack_require__(5);
	var VueRouter = __webpack_require__(46);
	var router = new VueRouter();
	__webpack_require__(128);
	var App = __webpack_require__(47);
	
	var SelectHospital = __webpack_require__(129);
	var SelectDept = __webpack_require__(135);
	var SelectResource = __webpack_require__(138);
	var RegisterStrategy = __webpack_require__(143);
	
	router.map({
	    '/': {
	        name: 'selectHospital',
	        component: SelectHospital
	    },
	    '/selectDept': {
	        name: 'selectDept',
	        component: SelectDept
	    },
	    '/selectResource': {
	        name: 'selectResource',
	        component: SelectResource
	    },
	    '/registerStrategy': {
	        name: 'registerStrategy',
	        component: RegisterStrategy
	    }
	});
	
	router.start(App, '#app');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
	(function (window, document, Math) {
	var rAF = window.requestAnimationFrame	||
		window.webkitRequestAnimationFrame	||
		window.mozRequestAnimationFrame		||
		window.oRequestAnimationFrame		||
		window.msRequestAnimationFrame		||
		function (callback) { window.setTimeout(callback, 1000 / 60); };
	
	var utils = (function () {
		var me = {};
	
		var _elementStyle = document.createElement('div').style;
		var _vendor = (function () {
			var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
				transform,
				i = 0,
				l = vendors.length;
	
			for ( ; i < l; i++ ) {
				transform = vendors[i] + 'ransform';
				if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
			}
	
			return false;
		})();
	
		function _prefixStyle (style) {
			if ( _vendor === false ) return false;
			if ( _vendor === '' ) return style;
			return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
		}
	
		me.getTime = Date.now || function getTime () { return new Date().getTime(); };
	
		me.extend = function (target, obj) {
			for ( var i in obj ) {
				target[i] = obj[i];
			}
		};
	
		me.addEvent = function (el, type, fn, capture) {
			el.addEventListener(type, fn, !!capture);
		};
	
		me.removeEvent = function (el, type, fn, capture) {
			el.removeEventListener(type, fn, !!capture);
		};
	
		me.prefixPointerEvent = function (pointerEvent) {
			return window.MSPointerEvent ?
				'MSPointer' + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8):
				pointerEvent;
		};
	
		me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
			var distance = current - start,
				speed = Math.abs(distance) / time,
				destination,
				duration;
	
			deceleration = deceleration === undefined ? 0.0006 : deceleration;
	
			destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
			duration = speed / deceleration;
	
			if ( destination < lowerMargin ) {
				destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
				distance = Math.abs(destination - current);
				duration = distance / speed;
			} else if ( destination > 0 ) {
				destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
				distance = Math.abs(current) + destination;
				duration = distance / speed;
			}
	
			return {
				destination: Math.round(destination),
				duration: duration
			};
		};
	
		var _transform = _prefixStyle('transform');
	
		me.extend(me, {
			hasTransform: _transform !== false,
			hasPerspective: _prefixStyle('perspective') in _elementStyle,
			hasTouch: 'ontouchstart' in window,
			hasPointer: !!(window.PointerEvent || window.MSPointerEvent), // IE10 is prefixed
			hasTransition: _prefixStyle('transition') in _elementStyle
		});
	
		/*
		This should find all Android browsers lower than build 535.19 (both stock browser and webview)
		- galaxy S2 is ok
	    - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
	    - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	   - galaxy S3 is badAndroid (stock brower, webview)
	     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	   - galaxy S4 is badAndroid (stock brower, webview)
	     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	   - galaxy S5 is OK
	     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
	   - galaxy S6 is OK
	     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
	  */
		me.isBadAndroid = (function() {
			var appVersion = window.navigator.appVersion;
			// Android browser is not a chrome browser.
			if (/Android/.test(appVersion) && !(/Chrome\/\d/.test(appVersion))) {
				var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
				if(safariVersion && typeof safariVersion === "object" && safariVersion.length >= 2) {
					return parseFloat(safariVersion[1]) < 535.19;
				} else {
					return true;
				}
			} else {
				return false;
			}
		})();
	
		me.extend(me.style = {}, {
			transform: _transform,
			transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
			transitionDuration: _prefixStyle('transitionDuration'),
			transitionDelay: _prefixStyle('transitionDelay'),
			transformOrigin: _prefixStyle('transformOrigin')
		});
	
		me.hasClass = function (e, c) {
			var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
			return re.test(e.className);
		};
	
		me.addClass = function (e, c) {
			if ( me.hasClass(e, c) ) {
				return;
			}
	
			var newclass = e.className.split(' ');
			newclass.push(c);
			e.className = newclass.join(' ');
		};
	
		me.removeClass = function (e, c) {
			if ( !me.hasClass(e, c) ) {
				return;
			}
	
			var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
			e.className = e.className.replace(re, ' ');
		};
	
		me.offset = function (el) {
			var left = -el.offsetLeft,
				top = -el.offsetTop;
	
			// jshint -W084
			while (el = el.offsetParent) {
				left -= el.offsetLeft;
				top -= el.offsetTop;
			}
			// jshint +W084
	
			return {
				left: left,
				top: top
			};
		};
	
		me.preventDefaultException = function (el, exceptions) {
			for ( var i in exceptions ) {
				if ( exceptions[i].test(el[i]) ) {
					return true;
				}
			}
	
			return false;
		};
	
		me.extend(me.eventType = {}, {
			touchstart: 1,
			touchmove: 1,
			touchend: 1,
	
			mousedown: 2,
			mousemove: 2,
			mouseup: 2,
	
			pointerdown: 3,
			pointermove: 3,
			pointerup: 3,
	
			MSPointerDown: 3,
			MSPointerMove: 3,
			MSPointerUp: 3
		});
	
		me.extend(me.ease = {}, {
			quadratic: {
				style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				fn: function (k) {
					return k * ( 2 - k );
				}
			},
			circular: {
				style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',	// Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
				fn: function (k) {
					return Math.sqrt( 1 - ( --k * k ) );
				}
			},
			back: {
				style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				fn: function (k) {
					var b = 4;
					return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
				}
			},
			bounce: {
				style: '',
				fn: function (k) {
					if ( ( k /= 1 ) < ( 1 / 2.75 ) ) {
						return 7.5625 * k * k;
					} else if ( k < ( 2 / 2.75 ) ) {
						return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
					} else if ( k < ( 2.5 / 2.75 ) ) {
						return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
					} else {
						return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
					}
				}
			},
			elastic: {
				style: '',
				fn: function (k) {
					var f = 0.22,
						e = 0.4;
	
					if ( k === 0 ) { return 0; }
					if ( k == 1 ) { return 1; }
	
					return ( e * Math.pow( 2, - 10 * k ) * Math.sin( ( k - f / 4 ) * ( 2 * Math.PI ) / f ) + 1 );
				}
			}
		});
	
		me.tap = function (e, eventName) {
			var ev = document.createEvent('Event');
			ev.initEvent(eventName, true, true);
			ev.pageX = e.pageX;
			ev.pageY = e.pageY;
			e.target.dispatchEvent(ev);
		};
	
		me.click = function (e) {
			var target = e.target,
				ev;
	
			if ( !(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName) ) {
				ev = document.createEvent('MouseEvents');
				ev.initMouseEvent('click', true, true, e.view, 1,
					target.screenX, target.screenY, target.clientX, target.clientY,
					e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
					0, null);
	
				ev._constructed = true;
				target.dispatchEvent(ev);
			}
		};
	
		return me;
	})();
	function IScroll (el, options) {
		this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
		this.scroller = this.wrapper.children[0];
		this.scrollerStyle = this.scroller.style;		// cache style for better performance
	
		this.options = {
	
			resizeScrollbars: true,
	
			mouseWheelSpeed: 20,
	
			snapThreshold: 0.334,
	
	// INSERT POINT: OPTIONS
			disablePointer : !utils.hasPointer,
			disableTouch : utils.hasPointer || !utils.hasTouch,
			disableMouse : utils.hasPointer || utils.hasTouch,
			startX: 0,
			startY: 0,
			scrollY: true,
			directionLockThreshold: 5,
			momentum: true,
	
			bounce: true,
			bounceTime: 600,
			bounceEasing: '',
	
			preventDefault: true,
			preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },
	
			HWCompositing: true,
			useTransition: true,
			useTransform: true,
			bindToWrapper: typeof window.onmousedown === "undefined"
		};
	
		for ( var i in options ) {
			this.options[i] = options[i];
		}
	
		// Normalize options
		this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';
	
		this.options.useTransition = utils.hasTransition && this.options.useTransition;
		this.options.useTransform = utils.hasTransform && this.options.useTransform;
	
		this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
		this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;
	
		// If you want eventPassthrough I have to lock one of the axes
		this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
		this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;
	
		// With eventPassthrough we also need lockDirection mechanism
		this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
		this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;
	
		this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;
	
		this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;
	
		if ( this.options.tap === true ) {
			this.options.tap = 'tap';
		}
	
		if ( this.options.shrinkScrollbars == 'scale' ) {
			this.options.useTransition = false;
		}
	
		this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;
	
	// INSERT POINT: NORMALIZATION
	
		// Some defaults
		this.x = 0;
		this.y = 0;
		this.directionX = 0;
		this.directionY = 0;
		this._events = {};
	
	// INSERT POINT: DEFAULTS
	
		this._init();
		this.refresh();
	
		this.scrollTo(this.options.startX, this.options.startY);
		this.enable();
	}
	
	IScroll.prototype = {
		version: '5.2.0',
	
		_init: function () {
			this._initEvents();
	
			if ( this.options.scrollbars || this.options.indicators ) {
				this._initIndicators();
			}
	
			if ( this.options.mouseWheel ) {
				this._initWheel();
			}
	
			if ( this.options.snap ) {
				this._initSnap();
			}
	
			if ( this.options.keyBindings ) {
				this._initKeys();
			}
	
	// INSERT POINT: _init
	
		},
	
		destroy: function () {
			this._initEvents(true);
			clearTimeout(this.resizeTimeout);
	 		this.resizeTimeout = null;
			this._execEvent('destroy');
		},
	
		_transitionEnd: function (e) {
			if ( e.target != this.scroller || !this.isInTransition ) {
				return;
			}
	
			this._transitionTime();
			if ( !this.resetPosition(this.options.bounceTime) ) {
				this.isInTransition = false;
				this._execEvent('scrollEnd');
			}
		},
	
		_start: function (e) {
			// React to left mouse button only
			if ( utils.eventType[e.type] != 1 ) {
			  // for button property
			  // http://unixpapa.com/js/mouse.html
			  var button;
		    if (!e.which) {
		      /* IE case */
		      button = (e.button < 2) ? 0 :
		               ((e.button == 4) ? 1 : 2);
		    } else {
		      /* All others */
		      button = e.button;
		    }
				if ( button !== 0 ) {
					return;
				}
			}
	
			if ( !this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated) ) {
				return;
			}
	
			if ( this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
				e.preventDefault();
			}
	
			var point = e.touches ? e.touches[0] : e,
				pos;
	
			this.initiated	= utils.eventType[e.type];
			this.moved		= false;
			this.distX		= 0;
			this.distY		= 0;
			this.directionX = 0;
			this.directionY = 0;
			this.directionLocked = 0;
	
			this.startTime = utils.getTime();
	
			if ( this.options.useTransition && this.isInTransition ) {
				this._transitionTime();
				this.isInTransition = false;
				pos = this.getComputedPosition();
				this._translate(Math.round(pos.x), Math.round(pos.y));
				this._execEvent('scrollEnd');
			} else if ( !this.options.useTransition && this.isAnimating ) {
				this.isAnimating = false;
				this._execEvent('scrollEnd');
			}
	
			this.startX    = this.x;
			this.startY    = this.y;
			this.absStartX = this.x;
			this.absStartY = this.y;
			this.pointX    = point.pageX;
			this.pointY    = point.pageY;
	
			this._execEvent('beforeScrollStart');
		},
	
		_move: function (e) {
			if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
				return;
			}
	
			if ( this.options.preventDefault ) {	// increases performance on Android? TODO: check!
				e.preventDefault();
			}
	
			var point		= e.touches ? e.touches[0] : e,
				deltaX		= point.pageX - this.pointX,
				deltaY		= point.pageY - this.pointY,
				timestamp	= utils.getTime(),
				newX, newY,
				absDistX, absDistY;
	
			this.pointX		= point.pageX;
			this.pointY		= point.pageY;
	
			this.distX		+= deltaX;
			this.distY		+= deltaY;
			absDistX		= Math.abs(this.distX);
			absDistY		= Math.abs(this.distY);
	
			// We need to move at least 10 pixels for the scrolling to initiate
			if ( timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10) ) {
				return;
			}
	
			// If you are scrolling in one direction lock the other
			if ( !this.directionLocked && !this.options.freeScroll ) {
				if ( absDistX > absDistY + this.options.directionLockThreshold ) {
					this.directionLocked = 'h';		// lock horizontally
				} else if ( absDistY >= absDistX + this.options.directionLockThreshold ) {
					this.directionLocked = 'v';		// lock vertically
				} else {
					this.directionLocked = 'n';		// no lock
				}
			}
	
			if ( this.directionLocked == 'h' ) {
				if ( this.options.eventPassthrough == 'vertical' ) {
					e.preventDefault();
				} else if ( this.options.eventPassthrough == 'horizontal' ) {
					this.initiated = false;
					return;
				}
	
				deltaY = 0;
			} else if ( this.directionLocked == 'v' ) {
				if ( this.options.eventPassthrough == 'horizontal' ) {
					e.preventDefault();
				} else if ( this.options.eventPassthrough == 'vertical' ) {
					this.initiated = false;
					return;
				}
	
				deltaX = 0;
			}
	
			deltaX = this.hasHorizontalScroll ? deltaX : 0;
			deltaY = this.hasVerticalScroll ? deltaY : 0;
	
			newX = this.x + deltaX;
			newY = this.y + deltaY;
	
			// Slow down if outside of the boundaries
			if ( newX > 0 || newX < this.maxScrollX ) {
				newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
			}
			if ( newY > 0 || newY < this.maxScrollY ) {
				newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
			}
	
			this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
			this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;
	
			if ( !this.moved ) {
				this._execEvent('scrollStart');
			}
	
			this.moved = true;
	
			this._translate(newX, newY);
	
	/* REPLACE START: _move */
	
			if ( timestamp - this.startTime > 300 ) {
				this.startTime = timestamp;
				this.startX = this.x;
				this.startY = this.y;
			}
	
	/* REPLACE END: _move */
	
		},
	
		_end: function (e) {
			if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
				return;
			}
	
			if ( this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
				e.preventDefault();
			}
	
			var point = e.changedTouches ? e.changedTouches[0] : e,
				momentumX,
				momentumY,
				duration = utils.getTime() - this.startTime,
				newX = Math.round(this.x),
				newY = Math.round(this.y),
				distanceX = Math.abs(newX - this.startX),
				distanceY = Math.abs(newY - this.startY),
				time = 0,
				easing = '';
	
			this.isInTransition = 0;
			this.initiated = 0;
			this.endTime = utils.getTime();
	
			// reset if we are outside of the boundaries
			if ( this.resetPosition(this.options.bounceTime) ) {
				return;
			}
	
			this.scrollTo(newX, newY);	// ensures that the last position is rounded
	
			// we scrolled less than 10 pixels
			if ( !this.moved ) {
				if ( this.options.tap ) {
					utils.tap(e, this.options.tap);
				}
	
				if ( this.options.click ) {
					utils.click(e);
				}
	
				this._execEvent('scrollCancel');
				return;
			}
	
			if ( this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100 ) {
				this._execEvent('flick');
				return;
			}
	
			// start momentum animation if needed
			if ( this.options.momentum && duration < 300 ) {
				momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
				momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
				newX = momentumX.destination;
				newY = momentumY.destination;
				time = Math.max(momentumX.duration, momentumY.duration);
				this.isInTransition = 1;
			}
	
	
			if ( this.options.snap ) {
				var snap = this._nearestSnap(newX, newY);
				this.currentPage = snap;
				time = this.options.snapSpeed || Math.max(
						Math.max(
							Math.min(Math.abs(newX - snap.x), 1000),
							Math.min(Math.abs(newY - snap.y), 1000)
						), 300);
				newX = snap.x;
				newY = snap.y;
	
				this.directionX = 0;
				this.directionY = 0;
				easing = this.options.bounceEasing;
			}
	
	// INSERT POINT: _end
	
			if ( newX != this.x || newY != this.y ) {
				// change easing function when scroller goes out of the boundaries
				if ( newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY ) {
					easing = utils.ease.quadratic;
				}
	
				this.scrollTo(newX, newY, time, easing);
				return;
			}
	
			this._execEvent('scrollEnd');
		},
	
		_resize: function () {
			var that = this;
	
			clearTimeout(this.resizeTimeout);
	
			this.resizeTimeout = setTimeout(function () {
				that.refresh();
			}, this.options.resizePolling);
		},
	
		resetPosition: function (time) {
			var x = this.x,
				y = this.y;
	
			time = time || 0;
	
			if ( !this.hasHorizontalScroll || this.x > 0 ) {
				x = 0;
			} else if ( this.x < this.maxScrollX ) {
				x = this.maxScrollX;
			}
	
			if ( !this.hasVerticalScroll || this.y > 0 ) {
				y = 0;
			} else if ( this.y < this.maxScrollY ) {
				y = this.maxScrollY;
			}
	
			if ( x == this.x && y == this.y ) {
				return false;
			}
	
			this.scrollTo(x, y, time, this.options.bounceEasing);
	
			return true;
		},
	
		disable: function () {
			this.enabled = false;
		},
	
		enable: function () {
			this.enabled = true;
		},
	
		refresh: function () {
			var rf = this.wrapper.offsetHeight;		// Force reflow
	
			this.wrapperWidth	= this.wrapper.clientWidth;
			this.wrapperHeight	= this.wrapper.clientHeight;
	
	/* REPLACE START: refresh */
	
			this.scrollerWidth	= this.scroller.offsetWidth;
			this.scrollerHeight	= this.scroller.offsetHeight;
	
			this.maxScrollX		= this.wrapperWidth - this.scrollerWidth;
			this.maxScrollY		= this.wrapperHeight - this.scrollerHeight;
	
	/* REPLACE END: refresh */
	
			this.hasHorizontalScroll	= this.options.scrollX && this.maxScrollX < 0;
			this.hasVerticalScroll		= this.options.scrollY && this.maxScrollY < 0;
	
			if ( !this.hasHorizontalScroll ) {
				this.maxScrollX = 0;
				this.scrollerWidth = this.wrapperWidth;
			}
	
			if ( !this.hasVerticalScroll ) {
				this.maxScrollY = 0;
				this.scrollerHeight = this.wrapperHeight;
			}
	
			this.endTime = 0;
			this.directionX = 0;
			this.directionY = 0;
	
			this.wrapperOffset = utils.offset(this.wrapper);
	
			this._execEvent('refresh');
	
			this.resetPosition();
	
	// INSERT POINT: _refresh
	
		},
	
		on: function (type, fn) {
			if ( !this._events[type] ) {
				this._events[type] = [];
			}
	
			this._events[type].push(fn);
		},
	
		off: function (type, fn) {
			if ( !this._events[type] ) {
				return;
			}
	
			var index = this._events[type].indexOf(fn);
	
			if ( index > -1 ) {
				this._events[type].splice(index, 1);
			}
		},
	
		_execEvent: function (type) {
			if ( !this._events[type] ) {
				return;
			}
	
			var i = 0,
				l = this._events[type].length;
	
			if ( !l ) {
				return;
			}
	
			for ( ; i < l; i++ ) {
				this._events[type][i].apply(this, [].slice.call(arguments, 1));
			}
		},
	
		scrollBy: function (x, y, time, easing) {
			x = this.x + x;
			y = this.y + y;
			time = time || 0;
	
			this.scrollTo(x, y, time, easing);
		},
	
		scrollTo: function (x, y, time, easing) {
			easing = easing || utils.ease.circular;
	
			this.isInTransition = this.options.useTransition && time > 0;
			var transitionType = this.options.useTransition && easing.style;
			if ( !time || transitionType ) {
					if(transitionType) {
						this._transitionTimingFunction(easing.style);
						this._transitionTime(time);
					}
				this._translate(x, y);
			} else {
				this._animate(x, y, time, easing.fn);
			}
		},
	
		scrollToElement: function (el, time, offsetX, offsetY, easing) {
			el = el.nodeType ? el : this.scroller.querySelector(el);
	
			if ( !el ) {
				return;
			}
	
			var pos = utils.offset(el);
	
			pos.left -= this.wrapperOffset.left;
			pos.top  -= this.wrapperOffset.top;
	
			// if offsetX/Y are true we center the element to the screen
			if ( offsetX === true ) {
				offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
			}
			if ( offsetY === true ) {
				offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
			}
	
			pos.left -= offsetX || 0;
			pos.top  -= offsetY || 0;
	
			pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
			pos.top  = pos.top  > 0 ? 0 : pos.top  < this.maxScrollY ? this.maxScrollY : pos.top;
	
			time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x-pos.left), Math.abs(this.y-pos.top)) : time;
	
			this.scrollTo(pos.left, pos.top, time, easing);
		},
	
		_transitionTime: function (time) {
			time = time || 0;
	
			var durationProp = utils.style.transitionDuration;
			this.scrollerStyle[durationProp] = time + 'ms';
	
			if ( !time && utils.isBadAndroid ) {
				this.scrollerStyle[durationProp] = '0.0001ms';
				// remove 0.0001ms
				var self = this;
				rAF(function() {
					if(self.scrollerStyle[durationProp] === '0.0001ms') {
						self.scrollerStyle[durationProp] = '0s';
					}
				});
			}
	
	
			if ( this.indicators ) {
				for ( var i = this.indicators.length; i--; ) {
					this.indicators[i].transitionTime(time);
				}
			}
	
	
	// INSERT POINT: _transitionTime
	
		},
	
		_transitionTimingFunction: function (easing) {
			this.scrollerStyle[utils.style.transitionTimingFunction] = easing;
	
	
			if ( this.indicators ) {
				for ( var i = this.indicators.length; i--; ) {
					this.indicators[i].transitionTimingFunction(easing);
				}
			}
	
	
	// INSERT POINT: _transitionTimingFunction
	
		},
	
		_translate: function (x, y) {
			if ( this.options.useTransform ) {
	
	/* REPLACE START: _translate */
	
				this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;
	
	/* REPLACE END: _translate */
	
			} else {
				x = Math.round(x);
				y = Math.round(y);
				this.scrollerStyle.left = x + 'px';
				this.scrollerStyle.top = y + 'px';
			}
	
			this.x = x;
			this.y = y;
	
	
		if ( this.indicators ) {
			for ( var i = this.indicators.length; i--; ) {
				this.indicators[i].updatePosition();
			}
		}
	
	
	// INSERT POINT: _translate
	
		},
	
		_initEvents: function (remove) {
			var eventType = remove ? utils.removeEvent : utils.addEvent,
				target = this.options.bindToWrapper ? this.wrapper : window;
	
			eventType(window, 'orientationchange', this);
			eventType(window, 'resize', this);
	
			if ( this.options.click ) {
				eventType(this.wrapper, 'click', this, true);
			}
	
			if ( !this.options.disableMouse ) {
				eventType(this.wrapper, 'mousedown', this);
				eventType(target, 'mousemove', this);
				eventType(target, 'mousecancel', this);
				eventType(target, 'mouseup', this);
			}
	
			if ( utils.hasPointer && !this.options.disablePointer ) {
				eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
				eventType(target, utils.prefixPointerEvent('pointermove'), this);
				eventType(target, utils.prefixPointerEvent('pointercancel'), this);
				eventType(target, utils.prefixPointerEvent('pointerup'), this);
			}
	
			if ( utils.hasTouch && !this.options.disableTouch ) {
				eventType(this.wrapper, 'touchstart', this);
				eventType(target, 'touchmove', this);
				eventType(target, 'touchcancel', this);
				eventType(target, 'touchend', this);
			}
	
			eventType(this.scroller, 'transitionend', this);
			eventType(this.scroller, 'webkitTransitionEnd', this);
			eventType(this.scroller, 'oTransitionEnd', this);
			eventType(this.scroller, 'MSTransitionEnd', this);
		},
	
		getComputedPosition: function () {
			var matrix = window.getComputedStyle(this.scroller, null),
				x, y;
	
			if ( this.options.useTransform ) {
				matrix = matrix[utils.style.transform].split(')')[0].split(', ');
				x = +(matrix[12] || matrix[4]);
				y = +(matrix[13] || matrix[5]);
			} else {
				x = +matrix.left.replace(/[^-\d.]/g, '');
				y = +matrix.top.replace(/[^-\d.]/g, '');
			}
	
			return { x: x, y: y };
		},
		_initIndicators: function () {
			var interactive = this.options.interactiveScrollbars,
				customStyle = typeof this.options.scrollbars != 'string',
				indicators = [],
				indicator;
	
			var that = this;
	
			this.indicators = [];
	
			if ( this.options.scrollbars ) {
				// Vertical scrollbar
				if ( this.options.scrollY ) {
					indicator = {
						el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
						interactive: interactive,
						defaultScrollbars: true,
						customStyle: customStyle,
						resize: this.options.resizeScrollbars,
						shrink: this.options.shrinkScrollbars,
						fade: this.options.fadeScrollbars,
						listenX: false
					};
	
					this.wrapper.appendChild(indicator.el);
					indicators.push(indicator);
				}
	
				// Horizontal scrollbar
				if ( this.options.scrollX ) {
					indicator = {
						el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
						interactive: interactive,
						defaultScrollbars: true,
						customStyle: customStyle,
						resize: this.options.resizeScrollbars,
						shrink: this.options.shrinkScrollbars,
						fade: this.options.fadeScrollbars,
						listenY: false
					};
	
					this.wrapper.appendChild(indicator.el);
					indicators.push(indicator);
				}
			}
	
			if ( this.options.indicators ) {
				// TODO: check concat compatibility
				indicators = indicators.concat(this.options.indicators);
			}
	
			for ( var i = indicators.length; i--; ) {
				this.indicators.push( new Indicator(this, indicators[i]) );
			}
	
			// TODO: check if we can use array.map (wide compatibility and performance issues)
			function _indicatorsMap (fn) {
				if (that.indicators) {
					for ( var i = that.indicators.length; i--; ) {
						fn.call(that.indicators[i]);
					}
				}
			}
	
			if ( this.options.fadeScrollbars ) {
				this.on('scrollEnd', function () {
					_indicatorsMap(function () {
						this.fade();
					});
				});
	
				this.on('scrollCancel', function () {
					_indicatorsMap(function () {
						this.fade();
					});
				});
	
				this.on('scrollStart', function () {
					_indicatorsMap(function () {
						this.fade(1);
					});
				});
	
				this.on('beforeScrollStart', function () {
					_indicatorsMap(function () {
						this.fade(1, true);
					});
				});
			}
	
	
			this.on('refresh', function () {
				_indicatorsMap(function () {
					this.refresh();
				});
			});
	
			this.on('destroy', function () {
				_indicatorsMap(function () {
					this.destroy();
				});
	
				delete this.indicators;
			});
		},
	
		_initWheel: function () {
			utils.addEvent(this.wrapper, 'wheel', this);
			utils.addEvent(this.wrapper, 'mousewheel', this);
			utils.addEvent(this.wrapper, 'DOMMouseScroll', this);
	
			this.on('destroy', function () {
				clearTimeout(this.wheelTimeout);
				this.wheelTimeout = null;
				utils.removeEvent(this.wrapper, 'wheel', this);
				utils.removeEvent(this.wrapper, 'mousewheel', this);
				utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
			});
		},
	
		_wheel: function (e) {
			if ( !this.enabled ) {
				return;
			}
	
			e.preventDefault();
	
			var wheelDeltaX, wheelDeltaY,
				newX, newY,
				that = this;
	
			if ( this.wheelTimeout === undefined ) {
				that._execEvent('scrollStart');
			}
	
			// Execute the scrollEnd event after 400ms the wheel stopped scrolling
			clearTimeout(this.wheelTimeout);
			this.wheelTimeout = setTimeout(function () {
				if(!that.options.snap) {
					that._execEvent('scrollEnd');
				}
				that.wheelTimeout = undefined;
			}, 400);
	
			if ( 'deltaX' in e ) {
				if (e.deltaMode === 1) {
					wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
					wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
				} else {
					wheelDeltaX = -e.deltaX;
					wheelDeltaY = -e.deltaY;
				}
			} else if ( 'wheelDeltaX' in e ) {
				wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
				wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
			} else if ( 'wheelDelta' in e ) {
				wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
			} else if ( 'detail' in e ) {
				wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
			} else {
				return;
			}
	
			wheelDeltaX *= this.options.invertWheelDirection;
			wheelDeltaY *= this.options.invertWheelDirection;
	
			if ( !this.hasVerticalScroll ) {
				wheelDeltaX = wheelDeltaY;
				wheelDeltaY = 0;
			}
	
			if ( this.options.snap ) {
				newX = this.currentPage.pageX;
				newY = this.currentPage.pageY;
	
				if ( wheelDeltaX > 0 ) {
					newX--;
				} else if ( wheelDeltaX < 0 ) {
					newX++;
				}
	
				if ( wheelDeltaY > 0 ) {
					newY--;
				} else if ( wheelDeltaY < 0 ) {
					newY++;
				}
	
				this.goToPage(newX, newY);
	
				return;
			}
	
			newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
			newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);
	
			this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
			this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;
	
			if ( newX > 0 ) {
				newX = 0;
			} else if ( newX < this.maxScrollX ) {
				newX = this.maxScrollX;
			}
	
			if ( newY > 0 ) {
				newY = 0;
			} else if ( newY < this.maxScrollY ) {
				newY = this.maxScrollY;
			}
	
			this.scrollTo(newX, newY, 0);
	
	// INSERT POINT: _wheel
		},
	
		_initSnap: function () {
			this.currentPage = {};
	
			if ( typeof this.options.snap == 'string' ) {
				this.options.snap = this.scroller.querySelectorAll(this.options.snap);
			}
	
			this.on('refresh', function () {
				var i = 0, l,
					m = 0, n,
					cx, cy,
					x = 0, y,
					stepX = this.options.snapStepX || this.wrapperWidth,
					stepY = this.options.snapStepY || this.wrapperHeight,
					el;
	
				this.pages = [];
	
				if ( !this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight ) {
					return;
				}
	
				if ( this.options.snap === true ) {
					cx = Math.round( stepX / 2 );
					cy = Math.round( stepY / 2 );
	
					while ( x > -this.scrollerWidth ) {
						this.pages[i] = [];
						l = 0;
						y = 0;
	
						while ( y > -this.scrollerHeight ) {
							this.pages[i][l] = {
								x: Math.max(x, this.maxScrollX),
								y: Math.max(y, this.maxScrollY),
								width: stepX,
								height: stepY,
								cx: x - cx,
								cy: y - cy
							};
	
							y -= stepY;
							l++;
						}
	
						x -= stepX;
						i++;
					}
				} else {
					el = this.options.snap;
					l = el.length;
					n = -1;
	
					for ( ; i < l; i++ ) {
						if ( i === 0 || el[i].offsetLeft <= el[i-1].offsetLeft ) {
							m = 0;
							n++;
						}
	
						if ( !this.pages[m] ) {
							this.pages[m] = [];
						}
	
						x = Math.max(-el[i].offsetLeft, this.maxScrollX);
						y = Math.max(-el[i].offsetTop, this.maxScrollY);
						cx = x - Math.round(el[i].offsetWidth / 2);
						cy = y - Math.round(el[i].offsetHeight / 2);
	
						this.pages[m][n] = {
							x: x,
							y: y,
							width: el[i].offsetWidth,
							height: el[i].offsetHeight,
							cx: cx,
							cy: cy
						};
	
						if ( x > this.maxScrollX ) {
							m++;
						}
					}
				}
	
				this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);
	
				// Update snap threshold if needed
				if ( this.options.snapThreshold % 1 === 0 ) {
					this.snapThresholdX = this.options.snapThreshold;
					this.snapThresholdY = this.options.snapThreshold;
				} else {
					this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
					this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
				}
			});
	
			this.on('flick', function () {
				var time = this.options.snapSpeed || Math.max(
						Math.max(
							Math.min(Math.abs(this.x - this.startX), 1000),
							Math.min(Math.abs(this.y - this.startY), 1000)
						), 300);
	
				this.goToPage(
					this.currentPage.pageX + this.directionX,
					this.currentPage.pageY + this.directionY,
					time
				);
			});
		},
	
		_nearestSnap: function (x, y) {
			if ( !this.pages.length ) {
				return { x: 0, y: 0, pageX: 0, pageY: 0 };
			}
	
			var i = 0,
				l = this.pages.length,
				m = 0;
	
			// Check if we exceeded the snap threshold
			if ( Math.abs(x - this.absStartX) < this.snapThresholdX &&
				Math.abs(y - this.absStartY) < this.snapThresholdY ) {
				return this.currentPage;
			}
	
			if ( x > 0 ) {
				x = 0;
			} else if ( x < this.maxScrollX ) {
				x = this.maxScrollX;
			}
	
			if ( y > 0 ) {
				y = 0;
			} else if ( y < this.maxScrollY ) {
				y = this.maxScrollY;
			}
	
			for ( ; i < l; i++ ) {
				if ( x >= this.pages[i][0].cx ) {
					x = this.pages[i][0].x;
					break;
				}
			}
	
			l = this.pages[i].length;
	
			for ( ; m < l; m++ ) {
				if ( y >= this.pages[0][m].cy ) {
					y = this.pages[0][m].y;
					break;
				}
			}
	
			if ( i == this.currentPage.pageX ) {
				i += this.directionX;
	
				if ( i < 0 ) {
					i = 0;
				} else if ( i >= this.pages.length ) {
					i = this.pages.length - 1;
				}
	
				x = this.pages[i][0].x;
			}
	
			if ( m == this.currentPage.pageY ) {
				m += this.directionY;
	
				if ( m < 0 ) {
					m = 0;
				} else if ( m >= this.pages[0].length ) {
					m = this.pages[0].length - 1;
				}
	
				y = this.pages[0][m].y;
			}
	
			return {
				x: x,
				y: y,
				pageX: i,
				pageY: m
			};
		},
	
		goToPage: function (x, y, time, easing) {
			easing = easing || this.options.bounceEasing;
	
			if ( x >= this.pages.length ) {
				x = this.pages.length - 1;
			} else if ( x < 0 ) {
				x = 0;
			}
	
			if ( y >= this.pages[x].length ) {
				y = this.pages[x].length - 1;
			} else if ( y < 0 ) {
				y = 0;
			}
	
			var posX = this.pages[x][y].x,
				posY = this.pages[x][y].y;
	
			time = time === undefined ? this.options.snapSpeed || Math.max(
				Math.max(
					Math.min(Math.abs(posX - this.x), 1000),
					Math.min(Math.abs(posY - this.y), 1000)
				), 300) : time;
	
			this.currentPage = {
				x: posX,
				y: posY,
				pageX: x,
				pageY: y
			};
	
			this.scrollTo(posX, posY, time, easing);
		},
	
		next: function (time, easing) {
			var x = this.currentPage.pageX,
				y = this.currentPage.pageY;
	
			x++;
	
			if ( x >= this.pages.length && this.hasVerticalScroll ) {
				x = 0;
				y++;
			}
	
			this.goToPage(x, y, time, easing);
		},
	
		prev: function (time, easing) {
			var x = this.currentPage.pageX,
				y = this.currentPage.pageY;
	
			x--;
	
			if ( x < 0 && this.hasVerticalScroll ) {
				x = 0;
				y--;
			}
	
			this.goToPage(x, y, time, easing);
		},
	
		_initKeys: function (e) {
			// default key bindings
			var keys = {
				pageUp: 33,
				pageDown: 34,
				end: 35,
				home: 36,
				left: 37,
				up: 38,
				right: 39,
				down: 40
			};
			var i;
	
			// if you give me characters I give you keycode
			if ( typeof this.options.keyBindings == 'object' ) {
				for ( i in this.options.keyBindings ) {
					if ( typeof this.options.keyBindings[i] == 'string' ) {
						this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
					}
				}
			} else {
				this.options.keyBindings = {};
			}
	
			for ( i in keys ) {
				this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
			}
	
			utils.addEvent(window, 'keydown', this);
	
			this.on('destroy', function () {
				utils.removeEvent(window, 'keydown', this);
			});
		},
	
		_key: function (e) {
			if ( !this.enabled ) {
				return;
			}
	
			var snap = this.options.snap,	// we are using this alot, better to cache it
				newX = snap ? this.currentPage.pageX : this.x,
				newY = snap ? this.currentPage.pageY : this.y,
				now = utils.getTime(),
				prevTime = this.keyTime || 0,
				acceleration = 0.250,
				pos;
	
			if ( this.options.useTransition && this.isInTransition ) {
				pos = this.getComputedPosition();
	
				this._translate(Math.round(pos.x), Math.round(pos.y));
				this.isInTransition = false;
			}
	
			this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;
	
			switch ( e.keyCode ) {
				case this.options.keyBindings.pageUp:
					if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
						newX += snap ? 1 : this.wrapperWidth;
					} else {
						newY += snap ? 1 : this.wrapperHeight;
					}
					break;
				case this.options.keyBindings.pageDown:
					if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
						newX -= snap ? 1 : this.wrapperWidth;
					} else {
						newY -= snap ? 1 : this.wrapperHeight;
					}
					break;
				case this.options.keyBindings.end:
					newX = snap ? this.pages.length-1 : this.maxScrollX;
					newY = snap ? this.pages[0].length-1 : this.maxScrollY;
					break;
				case this.options.keyBindings.home:
					newX = 0;
					newY = 0;
					break;
				case this.options.keyBindings.left:
					newX += snap ? -1 : 5 + this.keyAcceleration>>0;
					break;
				case this.options.keyBindings.up:
					newY += snap ? 1 : 5 + this.keyAcceleration>>0;
					break;
				case this.options.keyBindings.right:
					newX -= snap ? -1 : 5 + this.keyAcceleration>>0;
					break;
				case this.options.keyBindings.down:
					newY -= snap ? 1 : 5 + this.keyAcceleration>>0;
					break;
				default:
					return;
			}
	
			if ( snap ) {
				this.goToPage(newX, newY);
				return;
			}
	
			if ( newX > 0 ) {
				newX = 0;
				this.keyAcceleration = 0;
			} else if ( newX < this.maxScrollX ) {
				newX = this.maxScrollX;
				this.keyAcceleration = 0;
			}
	
			if ( newY > 0 ) {
				newY = 0;
				this.keyAcceleration = 0;
			} else if ( newY < this.maxScrollY ) {
				newY = this.maxScrollY;
				this.keyAcceleration = 0;
			}
	
			this.scrollTo(newX, newY, 0);
	
			this.keyTime = now;
		},
	
		_animate: function (destX, destY, duration, easingFn) {
			var that = this,
				startX = this.x,
				startY = this.y,
				startTime = utils.getTime(),
				destTime = startTime + duration;
	
			function step () {
				var now = utils.getTime(),
					newX, newY,
					easing;
	
				if ( now >= destTime ) {
					that.isAnimating = false;
					that._translate(destX, destY);
	
					if ( !that.resetPosition(that.options.bounceTime) ) {
						that._execEvent('scrollEnd');
					}
	
					return;
				}
	
				now = ( now - startTime ) / duration;
				easing = easingFn(now);
				newX = ( destX - startX ) * easing + startX;
				newY = ( destY - startY ) * easing + startY;
				that._translate(newX, newY);
	
				if ( that.isAnimating ) {
					rAF(step);
				}
			}
	
			this.isAnimating = true;
			step();
		},
		handleEvent: function (e) {
			switch ( e.type ) {
				case 'touchstart':
				case 'pointerdown':
				case 'MSPointerDown':
				case 'mousedown':
					this._start(e);
					break;
				case 'touchmove':
				case 'pointermove':
				case 'MSPointerMove':
				case 'mousemove':
					this._move(e);
					break;
				case 'touchend':
				case 'pointerup':
				case 'MSPointerUp':
				case 'mouseup':
				case 'touchcancel':
				case 'pointercancel':
				case 'MSPointerCancel':
				case 'mousecancel':
					this._end(e);
					break;
				case 'orientationchange':
				case 'resize':
					this._resize();
					break;
				case 'transitionend':
				case 'webkitTransitionEnd':
				case 'oTransitionEnd':
				case 'MSTransitionEnd':
					this._transitionEnd(e);
					break;
				case 'wheel':
				case 'DOMMouseScroll':
				case 'mousewheel':
					this._wheel(e);
					break;
				case 'keydown':
					this._key(e);
					break;
				case 'click':
					if ( this.enabled && !e._constructed ) {
						e.preventDefault();
						e.stopPropagation();
					}
					break;
			}
		}
	};
	function createDefaultScrollbar (direction, interactive, type) {
		var scrollbar = document.createElement('div'),
			indicator = document.createElement('div');
	
		if ( type === true ) {
			scrollbar.style.cssText = 'position:absolute;z-index:9999';
			indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
		}
	
		indicator.className = 'iScrollIndicator';
	
		if ( direction == 'h' ) {
			if ( type === true ) {
				scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
				indicator.style.height = '100%';
			}
			scrollbar.className = 'iScrollHorizontalScrollbar';
		} else {
			if ( type === true ) {
				scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
				indicator.style.width = '100%';
			}
			scrollbar.className = 'iScrollVerticalScrollbar';
		}
	
		scrollbar.style.cssText += ';overflow:hidden';
	
		if ( !interactive ) {
			scrollbar.style.pointerEvents = 'none';
		}
	
		scrollbar.appendChild(indicator);
	
		return scrollbar;
	}
	
	function Indicator (scroller, options) {
		this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
		this.wrapperStyle = this.wrapper.style;
		this.indicator = this.wrapper.children[0];
		this.indicatorStyle = this.indicator.style;
		this.scroller = scroller;
	
		this.options = {
			listenX: true,
			listenY: true,
			interactive: false,
			resize: true,
			defaultScrollbars: false,
			shrink: false,
			fade: false,
			speedRatioX: 0,
			speedRatioY: 0
		};
	
		for ( var i in options ) {
			this.options[i] = options[i];
		}
	
		this.sizeRatioX = 1;
		this.sizeRatioY = 1;
		this.maxPosX = 0;
		this.maxPosY = 0;
	
		if ( this.options.interactive ) {
			if ( !this.options.disableTouch ) {
				utils.addEvent(this.indicator, 'touchstart', this);
				utils.addEvent(window, 'touchend', this);
			}
			if ( !this.options.disablePointer ) {
				utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
				utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
			}
			if ( !this.options.disableMouse ) {
				utils.addEvent(this.indicator, 'mousedown', this);
				utils.addEvent(window, 'mouseup', this);
			}
		}
	
		if ( this.options.fade ) {
			this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
			var durationProp = utils.style.transitionDuration;
			this.wrapperStyle[durationProp] = utils.isBadAndroid ? '0.0001ms' : '0ms';
			// remove 0.0001ms
			var self = this;
			if(utils.isBadAndroid) {
				rAF(function() {
					if(self.wrapperStyle[durationProp] === '0.0001ms') {
						self.wrapperStyle[durationProp] = '0s';
					}
				});
			}
			this.wrapperStyle.opacity = '0';
		}
	}
	
	Indicator.prototype = {
		handleEvent: function (e) {
			switch ( e.type ) {
				case 'touchstart':
				case 'pointerdown':
				case 'MSPointerDown':
				case 'mousedown':
					this._start(e);
					break;
				case 'touchmove':
				case 'pointermove':
				case 'MSPointerMove':
				case 'mousemove':
					this._move(e);
					break;
				case 'touchend':
				case 'pointerup':
				case 'MSPointerUp':
				case 'mouseup':
				case 'touchcancel':
				case 'pointercancel':
				case 'MSPointerCancel':
				case 'mousecancel':
					this._end(e);
					break;
			}
		},
	
		destroy: function () {
			if ( this.options.fadeScrollbars ) {
				clearTimeout(this.fadeTimeout);
				this.fadeTimeout = null;
			}
			if ( this.options.interactive ) {
				utils.removeEvent(this.indicator, 'touchstart', this);
				utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
				utils.removeEvent(this.indicator, 'mousedown', this);
	
				utils.removeEvent(window, 'touchmove', this);
				utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
				utils.removeEvent(window, 'mousemove', this);
	
				utils.removeEvent(window, 'touchend', this);
				utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
				utils.removeEvent(window, 'mouseup', this);
			}
	
			if ( this.options.defaultScrollbars ) {
				this.wrapper.parentNode.removeChild(this.wrapper);
			}
		},
	
		_start: function (e) {
			var point = e.touches ? e.touches[0] : e;
	
			e.preventDefault();
			e.stopPropagation();
	
			this.transitionTime();
	
			this.initiated = true;
			this.moved = false;
			this.lastPointX	= point.pageX;
			this.lastPointY	= point.pageY;
	
			this.startTime	= utils.getTime();
	
			if ( !this.options.disableTouch ) {
				utils.addEvent(window, 'touchmove', this);
			}
			if ( !this.options.disablePointer ) {
				utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
			}
			if ( !this.options.disableMouse ) {
				utils.addEvent(window, 'mousemove', this);
			}
	
			this.scroller._execEvent('beforeScrollStart');
		},
	
		_move: function (e) {
			var point = e.touches ? e.touches[0] : e,
				deltaX, deltaY,
				newX, newY,
				timestamp = utils.getTime();
	
			if ( !this.moved ) {
				this.scroller._execEvent('scrollStart');
			}
	
			this.moved = true;
	
			deltaX = point.pageX - this.lastPointX;
			this.lastPointX = point.pageX;
	
			deltaY = point.pageY - this.lastPointY;
			this.lastPointY = point.pageY;
	
			newX = this.x + deltaX;
			newY = this.y + deltaY;
	
			this._pos(newX, newY);
	
	// INSERT POINT: indicator._move
	
			e.preventDefault();
			e.stopPropagation();
		},
	
		_end: function (e) {
			if ( !this.initiated ) {
				return;
			}
	
			this.initiated = false;
	
			e.preventDefault();
			e.stopPropagation();
	
			utils.removeEvent(window, 'touchmove', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
			utils.removeEvent(window, 'mousemove', this);
	
			if ( this.scroller.options.snap ) {
				var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);
	
				var time = this.options.snapSpeed || Math.max(
						Math.max(
							Math.min(Math.abs(this.scroller.x - snap.x), 1000),
							Math.min(Math.abs(this.scroller.y - snap.y), 1000)
						), 300);
	
				if ( this.scroller.x != snap.x || this.scroller.y != snap.y ) {
					this.scroller.directionX = 0;
					this.scroller.directionY = 0;
					this.scroller.currentPage = snap;
					this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
				}
			}
	
			if ( this.moved ) {
				this.scroller._execEvent('scrollEnd');
			}
		},
	
		transitionTime: function (time) {
			time = time || 0;
			var durationProp = utils.style.transitionDuration;
			this.indicatorStyle[durationProp] = time + 'ms';
	
			if ( !time && utils.isBadAndroid ) {
				this.indicatorStyle[durationProp] = '0.0001ms';
				// remove 0.0001ms
				var self = this;
				rAF(function() {
					if(self.indicatorStyle[durationProp] === '0.0001ms') {
						self.indicatorStyle[durationProp] = '0s';
					}
				});
			}
		},
	
		transitionTimingFunction: function (easing) {
			this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
		},
	
		refresh: function () {
			this.transitionTime();
	
			if ( this.options.listenX && !this.options.listenY ) {
				this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
			} else if ( this.options.listenY && !this.options.listenX ) {
				this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
			} else {
				this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
			}
	
			if ( this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ) {
				utils.addClass(this.wrapper, 'iScrollBothScrollbars');
				utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');
	
				if ( this.options.defaultScrollbars && this.options.customStyle ) {
					if ( this.options.listenX ) {
						this.wrapper.style.right = '8px';
					} else {
						this.wrapper.style.bottom = '8px';
					}
				}
			} else {
				utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
				utils.addClass(this.wrapper, 'iScrollLoneScrollbar');
	
				if ( this.options.defaultScrollbars && this.options.customStyle ) {
					if ( this.options.listenX ) {
						this.wrapper.style.right = '2px';
					} else {
						this.wrapper.style.bottom = '2px';
					}
				}
			}
	
			var r = this.wrapper.offsetHeight;	// force refresh
	
			if ( this.options.listenX ) {
				this.wrapperWidth = this.wrapper.clientWidth;
				if ( this.options.resize ) {
					this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
					this.indicatorStyle.width = this.indicatorWidth + 'px';
				} else {
					this.indicatorWidth = this.indicator.clientWidth;
				}
	
				this.maxPosX = this.wrapperWidth - this.indicatorWidth;
	
				if ( this.options.shrink == 'clip' ) {
					this.minBoundaryX = -this.indicatorWidth + 8;
					this.maxBoundaryX = this.wrapperWidth - 8;
				} else {
					this.minBoundaryX = 0;
					this.maxBoundaryX = this.maxPosX;
				}
	
				this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX));
			}
	
			if ( this.options.listenY ) {
				this.wrapperHeight = this.wrapper.clientHeight;
				if ( this.options.resize ) {
					this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
					this.indicatorStyle.height = this.indicatorHeight + 'px';
				} else {
					this.indicatorHeight = this.indicator.clientHeight;
				}
	
				this.maxPosY = this.wrapperHeight - this.indicatorHeight;
	
				if ( this.options.shrink == 'clip' ) {
					this.minBoundaryY = -this.indicatorHeight + 8;
					this.maxBoundaryY = this.wrapperHeight - 8;
				} else {
					this.minBoundaryY = 0;
					this.maxBoundaryY = this.maxPosY;
				}
	
				this.maxPosY = this.wrapperHeight - this.indicatorHeight;
				this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY));
			}
	
			this.updatePosition();
		},
	
		updatePosition: function () {
			var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
				y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;
	
			if ( !this.options.ignoreBoundaries ) {
				if ( x < this.minBoundaryX ) {
					if ( this.options.shrink == 'scale' ) {
						this.width = Math.max(this.indicatorWidth + x, 8);
						this.indicatorStyle.width = this.width + 'px';
					}
					x = this.minBoundaryX;
				} else if ( x > this.maxBoundaryX ) {
					if ( this.options.shrink == 'scale' ) {
						this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
						this.indicatorStyle.width = this.width + 'px';
						x = this.maxPosX + this.indicatorWidth - this.width;
					} else {
						x = this.maxBoundaryX;
					}
				} else if ( this.options.shrink == 'scale' && this.width != this.indicatorWidth ) {
					this.width = this.indicatorWidth;
					this.indicatorStyle.width = this.width + 'px';
				}
	
				if ( y < this.minBoundaryY ) {
					if ( this.options.shrink == 'scale' ) {
						this.height = Math.max(this.indicatorHeight + y * 3, 8);
						this.indicatorStyle.height = this.height + 'px';
					}
					y = this.minBoundaryY;
				} else if ( y > this.maxBoundaryY ) {
					if ( this.options.shrink == 'scale' ) {
						this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
						this.indicatorStyle.height = this.height + 'px';
						y = this.maxPosY + this.indicatorHeight - this.height;
					} else {
						y = this.maxBoundaryY;
					}
				} else if ( this.options.shrink == 'scale' && this.height != this.indicatorHeight ) {
					this.height = this.indicatorHeight;
					this.indicatorStyle.height = this.height + 'px';
				}
			}
	
			this.x = x;
			this.y = y;
	
			if ( this.scroller.options.useTransform ) {
				this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
			} else {
				this.indicatorStyle.left = x + 'px';
				this.indicatorStyle.top = y + 'px';
			}
		},
	
		_pos: function (x, y) {
			if ( x < 0 ) {
				x = 0;
			} else if ( x > this.maxPosX ) {
				x = this.maxPosX;
			}
	
			if ( y < 0 ) {
				y = 0;
			} else if ( y > this.maxPosY ) {
				y = this.maxPosY;
			}
	
			x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
			y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;
	
			this.scroller.scrollTo(x, y);
		},
	
		fade: function (val, hold) {
			if ( hold && !this.visible ) {
				return;
			}
	
			clearTimeout(this.fadeTimeout);
			this.fadeTimeout = null;
	
			var time = val ? 250 : 500,
				delay = val ? 0 : 300;
	
			val = val ? '1' : '0';
	
			this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';
	
			this.fadeTimeout = setTimeout((function (val) {
				this.wrapperStyle.opacity = val;
				this.visible = +val;
			}).bind(this, val), delay);
		}
	};
	
	IScroll.utils = utils;
	
	if ( typeof module != 'undefined' && module.exports ) {
		module.exports = IScroll;
	} else if ( true ) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () { return IScroll; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.IScroll = IScroll;
	}
	
	})(window, document, Math);


/***/ },
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var axios = __webpack_require__(5);
	var APPNAMR = 'fe_wechat',
	    MONITORURL = '/proxy/receive';
	
	function _monitorTimer(name, alias, time, path) {
	    if (!name) {
	        return;
	    }
	    axios({
	        method: 'post',
	        url: MONITORURL,
	        data: {
	            app: APPNAMR,
	            name: name,
	            alias: alias || '',
	            metricType: 'TIMER',
	            host: '__wechat',
	            tags: {
	                path: path && path
	            },
	            val: time || 1
	        }
	    });
	}
	
	function _monitorCount(name, alias, path) {
	    if (!name) {
	        return;
	    }
	    axios({
	        method: 'post',
	        url: MONITORURL,
	        data: {
	            app: APPNAMR,
	            name: name,
	            alias: alias || '',
	            metricType: 'COUNTER_DELTA',
	            host: '__wechat',
	            tags: {
	                path: path && path
	            },
	            val: 1
	        }
	    });
	}
	
	// function _monitorTimer(name, alias, times){
	
	//     var hosInfo = GlobalContext.get('hosInfo');
	
	//     if(_.isUndefined(name) || _.isUndefined(times) || !hosInfo){
	//         return;
	//     }
	
	//     PromiseAjax({
	//         url: MONITORURL,
	//         type: 'POST',
	//         dataType: 'json',
	//         contentType: 'application/json',
	//         data: {
	//             app: APPNAMR,
	//             name: name,
	//             alias: alias || '',
	//             metricType: 'TIMER',
	//             host: hosInfo && hosInfo.operatorPerson,
	//             tags: {
	//                 hosCode: hosInfo && hosInfo.hosCode
	//             },
	//             val: times
	//         }
	//     });
	// }
	
	module.exports = {
	    timer: _monitorTimer,
	    count: _monitorCount
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(7);
	var bind = __webpack_require__(8);
	var Axios = __webpack_require__(9);
	var defaults = __webpack_require__(10);
	
	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);
	
	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios.prototype, context);
	
	  // Copy context to instance
	  utils.extend(instance, context);
	
	  return instance;
	}
	
	// Create the default instance to be exported
	var axios = createInstance(defaults);
	
	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;
	
	// Factory for creating new instances
	axios.create = function create(instanceConfig) {
	  return createInstance(utils.merge(defaults, instanceConfig));
	};
	
	// Expose Cancel & CancelToken
	axios.Cancel = __webpack_require__(28);
	axios.CancelToken = __webpack_require__(29);
	axios.isCancel = __webpack_require__(25);
	
	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(30);
	
	module.exports = axios;
	
	// Allow use of default import syntax in TypeScript
	module.exports.default = axios;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var bind = __webpack_require__(8);
	
	/*global toString:true*/
	
	// utils is a library of generic helper functions non-specific to axios
	
	var toString = Object.prototype.toString;
	
	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}
	
	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}
	
	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}
	
	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}
	
	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}
	
	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}
	
	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}
	
	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}
	
	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}
	
	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}
	
	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}
	
	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}
	
	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}
	
	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}
	
	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}
	
	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  typeof document.createElement -> undefined
	 */
	function isStandardBrowserEnv() {
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined' &&
	    typeof document.createElement === 'function'
	  );
	}
	
	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don'registerbase bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }
	
	  // Force an array if not already something iterable
	  if (typeof obj !== 'object' && !isArray(obj)) {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }
	
	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}
	
	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }
	
	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}
	
	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}
	
	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim
	};


/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defaults = __webpack_require__(10);
	var utils = __webpack_require__(7);
	var InterceptorManager = __webpack_require__(22);
	var dispatchRequest = __webpack_require__(23);
	var isAbsoluteURL = __webpack_require__(26);
	var combineURLs = __webpack_require__(27);
	
	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */
	function Axios(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}
	
	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }
	
	  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
	
	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }
	
	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);
	
	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }
	
	  return promise;
	};
	
	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});
	
	module.exports = Axios;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var utils = __webpack_require__(7);
	var normalizeHeaderName = __webpack_require__(12);
	
	var PROTECTION_PREFIX = /^\)\]\}',?\n/;
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};
	
	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}
	
	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = __webpack_require__(13);
	  } else if (typeof process !== 'undefined') {
	    // For node use HTTP adapter
	    adapter = __webpack_require__(13);
	  }
	  return adapter;
	}
	
	var defaults = {
	  adapter: getDefaultAdapter(),
	
	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],
	
	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      data = data.replace(PROTECTION_PREFIX, '');
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],
	
	  timeout: 0,
	
	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',
	
	  maxContentLength: -1,
	
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};
	
	defaults.headers = {
	  common: {
	    'Accept': 'application/json, text/plain, */*'
	  }
	};
	
	utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
	  defaults.headers[method] = {};
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
	});
	
	module.exports = defaults;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 11 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don'registerbase break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn'registerbase define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn'registerbase available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn'registerbase trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn'registerbase available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn'registerbase  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(7);
	
	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var utils = __webpack_require__(7);
	var settle = __webpack_require__(14);
	var buildURL = __webpack_require__(17);
	var parseHeaders = __webpack_require__(18);
	var isURLSameOrigin = __webpack_require__(19);
	var createError = __webpack_require__(15);
	var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(20);
	
	module.exports = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;
	
	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }
	
	    var request = new XMLHttpRequest();
	    var loadEvent = 'onreadystatechange';
	    var xDomain = false;
	
	    // For IE 8/9 CORS support
	    // Only supports POST and GET calls and doesn'registerbase returns the response headers.
	    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
	    if (process.env.NODE_ENV !== 'test' &&
	        typeof window !== 'undefined' &&
	        window.XDomainRequest && !('withCredentials' in request) &&
	        !isURLSameOrigin(config.url)) {
	      request = new window.XDomainRequest();
	      loadEvent = 'onload';
	      xDomain = true;
	      request.onprogress = function handleProgress() {};
	      request.ontimeout = function handleTimeout() {};
	    }
	
	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }
	
	    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
	
	    // Set the request timeout in MS
	    request.timeout = config.timeout;
	
	    // Listen for ready state
	    request[loadEvent] = function handleLoad() {
	      if (!request || (request.readyState !== 4 && !xDomain)) {
	        return;
	      }
	
	      // The request errored out and we didn'registerbase get a response, this will be
	      // handled by onerror instead
	      // With one exception: request that using file: protocol, most browsers
	      // will return status as 0 even though it's a successful request
	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	        return;
	      }
	
	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
	        status: request.status === 1223 ? 204 : request.status,
	        statusText: request.status === 1223 ? 'No Content' : request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };
	
	      settle(resolve, reject, response);
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      var cookies = __webpack_require__(21);
	
	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
	          cookies.read(config.xsrfCookieName) :
	          undefined;
	
	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }
	
	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }
	
	    // Add withCredentials to request if needed
	    if (config.withCredentials) {
	      request.withCredentials = true;
	    }
	
	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        if (request.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }
	
	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }
	
	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }
	
	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (!request) {
	          return;
	        }
	
	        request.abort();
	        reject(cancel);
	        // Clean up request
	        request = null;
	      });
	    }
	
	    if (requestData === undefined) {
	      requestData = null;
	    }
	
	    // Send the request
	    request.send(requestData);
	  });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var createError = __webpack_require__(15);
	
	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  // Note: status is not exposed by XDomainRequest
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError(
	      'Request failed with status code ' + response.status,
	      response.config,
	      null,
	      response
	    ));
	  }
	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var enhanceError = __webpack_require__(16);
	
	/**
	 * Create an Error with the specified message, config, error code, and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 @ @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	module.exports = function createError(message, config, code, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, response);
	};


/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 @ @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
	module.exports = function enhanceError(error, config, code, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	  error.response = response;
	  return error;
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(7);
	
	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}
	
	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }
	
	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];
	
	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }
	
	      if (utils.isArray(val)) {
	        key = key + '[]';
	      }
	
	      if (!utils.isArray(val)) {
	        val = [val];
	      }
	
	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });
	
	    serializedParams = parts.join('&');
	  }
	
	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }
	
	  return url;
	};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(7);
	
	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;
	
	  if (!headers) { return parsed; }
	
	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));
	
	    if (key) {
	      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	    }
	  });
	
	  return parsed;
	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(7);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	  (function standardBrowserEnv() {
	    var msie = /(msie|trident)/i.test(navigator.userAgent);
	    var urlParsingNode = document.createElement('a');
	    var originURL;
	
	    /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	    function resolveURL(url) {
	      var href = url;
	
	      if (msie) {
	        // IE needs attribute set twice to normalize properties
	        urlParsingNode.setAttribute('href', href);
	        href = urlParsingNode.href;
	      }
	
	      urlParsingNode.setAttribute('href', href);
	
	      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	      return {
	        href: urlParsingNode.href,
	        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	        host: urlParsingNode.host,
	        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	        hostname: urlParsingNode.hostname,
	        port: urlParsingNode.port,
	        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	                  urlParsingNode.pathname :
	                  '/' + urlParsingNode.pathname
	      };
	    }
	
	    originURL = resolveURL(window.location.href);
	
	    /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	    return function isURLSameOrigin(requestURL) {
	      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	      return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	    };
	  })() :
	
	  // Non standard browser envs (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return function isURLSameOrigin() {
	      return true;
	    };
	  })()
	);


/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';
	
	// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js
	
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	
	function E() {
	  this.message = 'String contains an invalid character';
	}
	E.prototype = new Error;
	E.prototype.code = 5;
	E.prototype.name = 'InvalidCharacterError';
	
	function btoa(input) {
	  var str = String(input);
	  var output = '';
	  for (
	    // initialize result and counter
	    var block, charCode, idx = 0, map = chars;
	    // if the next str index does not exist:
	    //   change the mapping table to "="
	    //   check if d has no fractional digits
	    str.charAt(idx | 0) || (map = '=', idx % 1);
	    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
	  ) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new E();
	    }
	    block = block << 8 | charCode;
	  }
	  return output;
	}
	
	module.exports = btoa;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(7);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs support document.cookie
	  (function standardBrowserEnv() {
	    return {
	      write: function write(name, value, expires, path, domain, secure) {
	        var cookie = [];
	        cookie.push(name + '=' + encodeURIComponent(value));
	
	        if (utils.isNumber(expires)) {
	          cookie.push('expires=' + new Date(expires).toGMTString());
	        }
	
	        if (utils.isString(path)) {
	          cookie.push('path=' + path);
	        }
	
	        if (utils.isString(domain)) {
	          cookie.push('domain=' + domain);
	        }
	
	        if (secure === true) {
	          cookie.push('secure');
	        }
	
	        document.cookie = cookie.join('; ');
	      },
	
	      read: function read(name) {
	        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	        return (match ? decodeURIComponent(match[3]) : null);
	      },
	
	      remove: function remove(name) {
	        this.write(name, '', Date.now() - 86400000);
	      }
	    };
	  })() :
	
	  // Non standard browser env (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return {
	      write: function write() {},
	      read: function read() { return null; },
	      remove: function remove() {}
	    };
	  })()
	);


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(7);
	
	function InterceptorManager() {
	  this.handlers = [];
	}
	
	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};
	
	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};
	
	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};
	
	module.exports = InterceptorManager;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(7);
	var transformData = __webpack_require__(24);
	var isCancel = __webpack_require__(25);
	var defaults = __webpack_require__(10);
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	}
	
	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);
	
	  // Ensure headers exist
	  config.headers = config.headers || {};
	
	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );
	
	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers || {}
	  );
	
	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );
	
	  var adapter = config.adapter || defaults.adapter;
	
	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);
	
	    // Transform response data
	    response.data = transformData(
	      response.data,
	      response.headers,
	      config.transformResponse
	    );
	
	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);
	
	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData(
	          reason.response.data,
	          reason.response.headers,
	          config.transformResponse
	        );
	      }
	    }
	
	    return Promise.reject(reason);
	  });
	};


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(7);
	
	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });
	
	  return data;
	};


/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};


/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};


/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
	};


/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * A `Cancel` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
	function Cancel(message) {
	  this.message = message;
	}
	
	Cancel.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};
	
	Cancel.prototype.__CANCEL__ = true;
	
	module.exports = Cancel;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Cancel = __webpack_require__(28);
	
	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }
	
	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });
	
	  var token = this;
	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }
	
	    token.reason = new Cancel(message);
	    resolvePromise(token.reason);
	  });
	}
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};
	
	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};
	
	module.exports = CancelToken;


/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};


/***/ },
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(36)


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(37);
	__webpack_require__(39);
	__webpack_require__(40);
	__webpack_require__(41);
	__webpack_require__(42);
	__webpack_require__(44);


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var asap = __webpack_require__(38);
	
	function noop() {}
	
	// States:
	//
	// 0 - pending
	// 1 - fulfilled with _value
	// 2 - rejected with _value
	// 3 - adopted the state of another promise, _value
	//
	// once the state is no longer pending (0) it is immutable
	
	// All `_` prefixed properties will be reduced to `_{random number}`
	// at build time to obfuscate them and discourage their use.
	// We don'registerbase use symbols or Object.defineProperty to fully hide them
	// because the performance isn'registerbase good enough.
	
	
	// to avoid using try/catch inside critical functions, we
	// extract them to here.
	var LAST_ERROR = null;
	var IS_ERROR = {};
	function getThen(obj) {
	  try {
	    return obj.then;
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}
	
	function tryCallOne(fn, a) {
	  try {
	    return fn(a);
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}
	function tryCallTwo(fn, a, b) {
	  try {
	    fn(a, b);
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}
	
	module.exports = Promise;
	
	function Promise(fn) {
	  if (typeof this !== 'object') {
	    throw new TypeError('Promises must be constructed via new');
	  }
	  if (typeof fn !== 'function') {
	    throw new TypeError('not a function');
	  }
	  this._45 = 0;
	  this._81 = 0;
	  this._65 = null;
	  this._54 = null;
	  if (fn === noop) return;
	  doResolve(fn, this);
	}
	Promise._10 = null;
	Promise._97 = null;
	Promise._61 = noop;
	
	Promise.prototype.then = function(onFulfilled, onRejected) {
	  if (this.constructor !== Promise) {
	    return safeThen(this, onFulfilled, onRejected);
	  }
	  var res = new Promise(noop);
	  handle(this, new Handler(onFulfilled, onRejected, res));
	  return res;
	};
	
	function safeThen(self, onFulfilled, onRejected) {
	  return new self.constructor(function (resolve, reject) {
	    var res = new Promise(noop);
	    res.then(resolve, reject);
	    handle(self, new Handler(onFulfilled, onRejected, res));
	  });
	};
	function handle(self, deferred) {
	  while (self._81 === 3) {
	    self = self._65;
	  }
	  if (Promise._10) {
	    Promise._10(self);
	  }
	  if (self._81 === 0) {
	    if (self._45 === 0) {
	      self._45 = 1;
	      self._54 = deferred;
	      return;
	    }
	    if (self._45 === 1) {
	      self._45 = 2;
	      self._54 = [self._54, deferred];
	      return;
	    }
	    self._54.push(deferred);
	    return;
	  }
	  handleResolved(self, deferred);
	}
	
	function handleResolved(self, deferred) {
	  asap(function() {
	    var cb = self._81 === 1 ? deferred.onFulfilled : deferred.onRejected;
	    if (cb === null) {
	      if (self._81 === 1) {
	        resolve(deferred.promise, self._65);
	      } else {
	        reject(deferred.promise, self._65);
	      }
	      return;
	    }
	    var ret = tryCallOne(cb, self._65);
	    if (ret === IS_ERROR) {
	      reject(deferred.promise, LAST_ERROR);
	    } else {
	      resolve(deferred.promise, ret);
	    }
	  });
	}
	function resolve(self, newValue) {
	  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	  if (newValue === self) {
	    return reject(
	      self,
	      new TypeError('A promise cannot be resolved with itself.')
	    );
	  }
	  if (
	    newValue &&
	    (typeof newValue === 'object' || typeof newValue === 'function')
	  ) {
	    var then = getThen(newValue);
	    if (then === IS_ERROR) {
	      return reject(self, LAST_ERROR);
	    }
	    if (
	      then === self.then &&
	      newValue instanceof Promise
	    ) {
	      self._81 = 3;
	      self._65 = newValue;
	      finale(self);
	      return;
	    } else if (typeof then === 'function') {
	      doResolve(then.bind(newValue), self);
	      return;
	    }
	  }
	  self._81 = 1;
	  self._65 = newValue;
	  finale(self);
	}
	
	function reject(self, newValue) {
	  self._81 = 2;
	  self._65 = newValue;
	  if (Promise._97) {
	    Promise._97(self, newValue);
	  }
	  finale(self);
	}
	function finale(self) {
	  if (self._45 === 1) {
	    handle(self, self._54);
	    self._54 = null;
	  }
	  if (self._45 === 2) {
	    for (var i = 0; i < self._54.length; i++) {
	      handle(self, self._54[i]);
	    }
	    self._54 = null;
	  }
	}
	
	function Handler(onFulfilled, onRejected, promise){
	  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
	  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
	  this.promise = promise;
	}
	
	/**
	 * Take a potentially misbehaving resolver function and make sure
	 * onFulfilled and onRejected are only called once.
	 *
	 * Makes no guarantees about asynchrony.
	 */
	function doResolve(fn, promise) {
	  var done = false;
	  var res = tryCallTwo(fn, function (value) {
	    if (done) return;
	    done = true;
	    resolve(promise, value);
	  }, function (reason) {
	    if (done) return;
	    done = true;
	    reject(promise, reason);
	  })
	  if (!done && res === IS_ERROR) {
	    done = true;
	    reject(promise, LAST_ERROR);
	  }
	}


/***/ },
/* 38 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	// Use the fastest means possible to execute a task in its own turn, with
	// priority over other events including IO, animation, reflow, and redraw
	// events in browsers.
	//
	// An exception thrown by a task will permanently interrupt the processing of
	// subsequent tasks. The higher level `asap` function ensures that if an
	// exception is thrown by a task, that the task queue will continue flushing as
	// soon as possible, but if you use `rawAsap` directly, you are responsible to
	// either ensure that no exceptions are thrown from your task, or to manually
	// call `rawAsap.requestFlush` if an exception is thrown.
	module.exports = rawAsap;
	function rawAsap(task) {
	    if (!queue.length) {
	        requestFlush();
	        flushing = true;
	    }
	    // Equivalent to push, but avoids a function call.
	    queue[queue.length] = task;
	}
	
	var queue = [];
	// Once a flush has been requested, no further calls to `requestFlush` are
	// necessary until the next `flush` completes.
	var flushing = false;
	// `requestFlush` is an implementation-specific method that attempts to kick
	// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
	// the event queue before yielding to the browser's own event loop.
	var requestFlush;
	// The position of the next task to execute in the task queue. This is
	// preserved between calls to `flush` so that it can be resumed if
	// a task throws an exception.
	var index = 0;
	// If a task schedules additional tasks recursively, the task queue can grow
	// unbounded. To prevent memory exhaustion, the task queue will periodically
	// truncate already-completed tasks.
	var capacity = 1024;
	
	// The flush function processes all tasks that have been scheduled with
	// `rawAsap` unless and until one of those tasks throws an exception.
	// If a task throws an exception, `flush` ensures that its state will remain
	// consistent and will resume where it left off when called again.
	// However, `flush` does not make any arrangements to be called again if an
	// exception is thrown.
	function flush() {
	    while (index < queue.length) {
	        var currentIndex = index;
	        // Advance the index before calling the task. This ensures that we will
	        // begin flushing on the next task the task throws an error.
	        index = index + 1;
	        queue[currentIndex].call();
	        // Prevent leaking memory for long chains of recursive calls to `asap`.
	        // If we call `asap` within tasks scheduled by `asap`, the queue will
	        // grow, but to avoid an O(n) walk for every task we execute, we don'registerbase
	        // shift tasks off the queue after they have been executed.
	        // Instead, we periodically shift 1024 tasks off the queue.
	        if (index > capacity) {
	            // Manually shift all values starting at the index back to the
	            // beginning of the queue.
	            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
	                queue[scan] = queue[scan + index];
	            }
	            queue.length -= index;
	            index = 0;
	        }
	    }
	    queue.length = 0;
	    index = 0;
	    flushing = false;
	}
	
	// `requestFlush` is implemented using a strategy based on data collected from
	// every available SauceLabs Selenium web driver worker at time of writing.
	// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593
	
	// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
	// have WebKitMutationObserver but not un-prefixed MutationObserver.
	// Must use `global` or `self` instead of `window` to work in both frames and web
	// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.
	
	/* globals self */
	var scope = typeof global !== "undefined" ? global : self;
	var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
	
	// MutationObservers are desirable because they have high priority and work
	// reliably everywhere they are implemented.
	// They are implemented in all modern browsers.
	//
	// - Android 4-4.3
	// - Chrome 26-34
	// - Firefox 14-29
	// - Internet Explorer 11
	// - iPad Safari 6-7.1
	// - iPhone Safari 7-7.1
	// - Safari 6-7
	if (typeof BrowserMutationObserver === "function") {
	    requestFlush = makeRequestCallFromMutationObserver(flush);
	
	// MessageChannels are desirable because they give direct access to the HTML
	// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
	// 11-12, and in web workers in many engines.
	// Although message channels yield to any queued rendering and IO tasks, they
	// would be better than imposing the 4ms delay of timers.
	// However, they do not work reliably in Internet Explorer or Safari.
	
	// Internet Explorer 10 is the only browser that has setImmediate but does
	// not have MutationObservers.
	// Although setImmediate yields to the browser's renderer, it would be
	// preferrable to falling back to setTimeout since it does not have
	// the minimum 4ms penalty.
	// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
	// Desktop to a lesser extent) that renders both setImmediate and
	// MessageChannel useless for the purposes of ASAP.
	// https://github.com/kriskowal/q/issues/396
	
	// Timers are implemented universally.
	// We fall back to timers in workers in most engines, and in foreground
	// contexts in the following browsers.
	// However, note that even this simple case requires nuances to operate in a
	// broad spectrum of browsers.
	//
	// - Firefox 3-13
	// - Internet Explorer 6-9
	// - iPad Safari 4.3
	// - Lynx 2.8.7
	} else {
	    requestFlush = makeRequestCallFromTimer(flush);
	}
	
	// `requestFlush` requests that the high priority event queue be flushed as
	// soon as possible.
	// This is useful to prevent an error thrown in a task from stalling the event
	// queue if the exception handled by Node.js’s
	// `process.on("uncaughtException")` or by a domain.
	rawAsap.requestFlush = requestFlush;
	
	// To request a high priority event, we induce a mutation observer by toggling
	// the text of a text node between "1" and "-1".
	function makeRequestCallFromMutationObserver(callback) {
	    var toggle = 1;
	    var observer = new BrowserMutationObserver(callback);
	    var node = document.createTextNode("");
	    observer.observe(node, {characterData: true});
	    return function requestCall() {
	        toggle = -toggle;
	        node.data = toggle;
	    };
	}
	
	// The message channel technique was discovered by Malte Ubl and was the
	// original foundation for this library.
	// http://www.nonblocking.io/2011/06/windownexttick.html
	
	// Safari 6.0.5 (at least) intermittently fails to create message ports on a
	// page's first load. Thankfully, this version of Safari supports
	// MutationObservers, so we don'registerbase need to fall back in that case.
	
	// function makeRequestCallFromMessageChannel(callback) {
	//     var channel = new MessageChannel();
	//     channel.port1.onmessage = callback;
	//     return function requestCall() {
	//         channel.port2.postMessage(0);
	//     };
	// }
	
	// For reasons explained above, we are also unable to use `setImmediate`
	// under any circumstances.
	// Even if we were, there is another bug in Internet Explorer 10.
	// It is not sufficient to assign `setImmediate` to `requestFlush` because
	// `setImmediate` must be called *by name* and therefore must be wrapped in a
	// closure.
	// Never forget.
	
	// function makeRequestCallFromSetImmediate(callback) {
	//     return function requestCall() {
	//         setImmediate(callback);
	//     };
	// }
	
	// Safari 6.0 has a problem where timers will get lost while the user is
	// scrolling. This problem does not impact ASAP because Safari 6.0 supports
	// mutation observers, so that implementation is used instead.
	// However, if we ever elect to use timers in Safari, the prevalent work-around
	// is to add a scroll event listener that calls for a flush.
	
	// `setTimeout` does not call the passed callback if the delay is less than
	// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
	// even then.
	
	function makeRequestCallFromTimer(callback) {
	    return function requestCall() {
	        // We dispatch a timeout with a specified delay of 0 for engines that
	        // can reliably accommodate that request. This will usually be snapped
	        // to a 4 milisecond delay, but once we're flushing, there's no delay
	        // between events.
	        var timeoutHandle = setTimeout(handleTimer, 0);
	        // However, since this timer gets frequently dropped in Firefox
	        // workers, we enlist an interval handle that will try to fire
	        // an event 20 times per second until it succeeds.
	        var intervalHandle = setInterval(handleTimer, 50);
	
	        function handleTimer() {
	            // Whichever timer succeeds will cancel both timers and
	            // execute the callback.
	            clearTimeout(timeoutHandle);
	            clearInterval(intervalHandle);
	            callback();
	        }
	    };
	}
	
	// This is for `asap.js` only.
	// Its name will be periodically randomized to break any code that depends on
	// its existence.
	rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;
	
	// ASAP was originally a nextTick shim included in Q. This was factored out
	// into this ASAP package. It was later adapted to RSVP which made further
	// amendments. These decisions, particularly to marginalize MessageChannel and
	// to capture the MutationObserver implementation in a closure, were integrated
	// back into ASAP proper.
	// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Promise = __webpack_require__(37);
	
	module.exports = Promise;
	Promise.prototype.done = function (onFulfilled, onRejected) {
	  var self = arguments.length ? this.then.apply(this, arguments) : this;
	  self.then(null, function (err) {
	    setTimeout(function () {
	      throw err;
	    }, 0);
	  });
	};


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Promise = __webpack_require__(37);
	
	module.exports = Promise;
	Promise.prototype['finally'] = function (f) {
	  return this.then(function (value) {
	    return Promise.resolve(f()).then(function () {
	      return value;
	    });
	  }, function (err) {
	    return Promise.resolve(f()).then(function () {
	      throw err;
	    });
	  });
	};


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	//This file contains the ES6 extensions to the core Promises/A+ API
	
	var Promise = __webpack_require__(37);
	
	module.exports = Promise;
	
	/* Static Functions */
	
	var TRUE = valuePromise(true);
	var FALSE = valuePromise(false);
	var NULL = valuePromise(null);
	var UNDEFINED = valuePromise(undefined);
	var ZERO = valuePromise(0);
	var EMPTYSTRING = valuePromise('');
	
	function valuePromise(value) {
	  var p = new Promise(Promise._61);
	  p._81 = 1;
	  p._65 = value;
	  return p;
	}
	Promise.resolve = function (value) {
	  if (value instanceof Promise) return value;
	
	  if (value === null) return NULL;
	  if (value === undefined) return UNDEFINED;
	  if (value === true) return TRUE;
	  if (value === false) return FALSE;
	  if (value === 0) return ZERO;
	  if (value === '') return EMPTYSTRING;
	
	  if (typeof value === 'object' || typeof value === 'function') {
	    try {
	      var then = value.then;
	      if (typeof then === 'function') {
	        return new Promise(then.bind(value));
	      }
	    } catch (ex) {
	      return new Promise(function (resolve, reject) {
	        reject(ex);
	      });
	    }
	  }
	  return valuePromise(value);
	};
	
	Promise.all = function (arr) {
	  var args = Array.prototype.slice.call(arr);
	
	  return new Promise(function (resolve, reject) {
	    if (args.length === 0) return resolve([]);
	    var remaining = args.length;
	    function res(i, val) {
	      if (val && (typeof val === 'object' || typeof val === 'function')) {
	        if (val instanceof Promise && val.then === Promise.prototype.then) {
	          while (val._81 === 3) {
	            val = val._65;
	          }
	          if (val._81 === 1) return res(i, val._65);
	          if (val._81 === 2) reject(val._65);
	          val.then(function (val) {
	            res(i, val);
	          }, reject);
	          return;
	        } else {
	          var then = val.then;
	          if (typeof then === 'function') {
	            var p = new Promise(then.bind(val));
	            p.then(function (val) {
	              res(i, val);
	            }, reject);
	            return;
	          }
	        }
	      }
	      args[i] = val;
	      if (--remaining === 0) {
	        resolve(args);
	      }
	    }
	    for (var i = 0; i < args.length; i++) {
	      res(i, args[i]);
	    }
	  });
	};
	
	Promise.reject = function (value) {
	  return new Promise(function (resolve, reject) {
	    reject(value);
	  });
	};
	
	Promise.race = function (values) {
	  return new Promise(function (resolve, reject) {
	    values.forEach(function(value){
	      Promise.resolve(value).then(resolve, reject);
	    });
	  });
	};
	
	/* Prototype Methods */
	
	Promise.prototype['catch'] = function (onRejected) {
	  return this.then(null, onRejected);
	};


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// This file contains then/promise specific extensions that are only useful
	// for node.js interop
	
	var Promise = __webpack_require__(37);
	var asap = __webpack_require__(43);
	
	module.exports = Promise;
	
	/* Static Functions */
	
	Promise.denodeify = function (fn, argumentCount) {
	  if (
	    typeof argumentCount === 'number' && argumentCount !== Infinity
	  ) {
	    return denodeifyWithCount(fn, argumentCount);
	  } else {
	    return denodeifyWithoutCount(fn);
	  }
	}
	
	var callbackFn = (
	  'function (err, res) {' +
	  'if (err) { rj(err); } else { rs(res); }' +
	  '}'
	);
	function denodeifyWithCount(fn, argumentCount) {
	  var args = [];
	  for (var i = 0; i < argumentCount; i++) {
	    args.push('a' + i);
	  }
	  var body = [
	    'return function (' + args.join(',') + ') {',
	    'var self = this;',
	    'return new Promise(function (rs, rj) {',
	    'var res = fn.call(',
	    ['self'].concat(args).concat([callbackFn]).join(','),
	    ');',
	    'if (res &&',
	    '(typeof res === "object" || typeof res === "function") &&',
	    'typeof res.then === "function"',
	    ') {rs(res);}',
	    '});',
	    '};'
	  ].join('');
	  return Function(['Promise', 'fn'], body)(Promise, fn);
	}
	function denodeifyWithoutCount(fn) {
	  var fnLength = Math.max(fn.length - 1, 3);
	  var args = [];
	  for (var i = 0; i < fnLength; i++) {
	    args.push('a' + i);
	  }
	  var body = [
	    'return function (' + args.join(',') + ') {',
	    'var self = this;',
	    'var args;',
	    'var argLength = arguments.length;',
	    'if (arguments.length > ' + fnLength + ') {',
	    'args = new Array(arguments.length + 1);',
	    'for (var i = 0; i < arguments.length; i++) {',
	    'args[i] = arguments[i];',
	    '}',
	    '}',
	    'return new Promise(function (rs, rj) {',
	    'var cb = ' + callbackFn + ';',
	    'var res;',
	    'switch (argLength) {',
	    args.concat(['extra']).map(function (_, index) {
	      return (
	        'case ' + (index) + ':' +
	        'res = fn.call(' + ['self'].concat(args.slice(0, index)).concat('cb').join(',') + ');' +
	        'break;'
	      );
	    }).join(''),
	    'default:',
	    'args[argLength] = cb;',
	    'res = fn.apply(self, args);',
	    '}',
	    
	    'if (res &&',
	    '(typeof res === "object" || typeof res === "function") &&',
	    'typeof res.then === "function"',
	    ') {rs(res);}',
	    '});',
	    '};'
	  ].join('');
	
	  return Function(
	    ['Promise', 'fn'],
	    body
	  )(Promise, fn);
	}
	
	Promise.nodeify = function (fn) {
	  return function () {
	    var args = Array.prototype.slice.call(arguments);
	    var callback =
	      typeof args[args.length - 1] === 'function' ? args.pop() : null;
	    var ctx = this;
	    try {
	      return fn.apply(this, arguments).nodeify(callback, ctx);
	    } catch (ex) {
	      if (callback === null || typeof callback == 'undefined') {
	        return new Promise(function (resolve, reject) {
	          reject(ex);
	        });
	      } else {
	        asap(function () {
	          callback.call(ctx, ex);
	        })
	      }
	    }
	  }
	}
	
	Promise.prototype.nodeify = function (callback, ctx) {
	  if (typeof callback != 'function') return this;
	
	  this.then(function (value) {
	    asap(function () {
	      callback.call(ctx, null, value);
	    });
	  }, function (err) {
	    asap(function () {
	      callback.call(ctx, err);
	    });
	  });
	}


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	// rawAsap provides everything we need except exception management.
	var rawAsap = __webpack_require__(38);
	// RawTasks are recycled to reduce GC churn.
	var freeTasks = [];
	// We queue errors to ensure they are thrown in right order (FIFO).
	// Array-as-queue is good enough here, since we are just dealing with exceptions.
	var pendingErrors = [];
	var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);
	
	function throwFirstError() {
	    if (pendingErrors.length) {
	        throw pendingErrors.shift();
	    }
	}
	
	/**
	 * Calls a task as soon as possible after returning, in its own event, with priority
	 * over other events like animation, reflow, and repaint. An error thrown from an
	 * event will not interrupt, nor even substantially slow down the processing of
	 * other events, but will be rather postponed to a lower priority event.
	 * @param {{call}} task A callable object, typically a function that takes no
	 * arguments.
	 */
	module.exports = asap;
	function asap(task) {
	    var rawTask;
	    if (freeTasks.length) {
	        rawTask = freeTasks.pop();
	    } else {
	        rawTask = new RawTask();
	    }
	    rawTask.task = task;
	    rawAsap(rawTask);
	}
	
	// We wrap tasks with recyclable task objects.  A task object implements
	// `call`, just like a function.
	function RawTask() {
	    this.task = null;
	}
	
	// The sole purpose of wrapping the task is to catch the exception and recycle
	// the task object after its single use.
	RawTask.prototype.call = function () {
	    try {
	        this.task.call();
	    } catch (error) {
	        if (asap.onerror) {
	            // This hook exists purely for testing purposes.
	            // Its name will be periodically randomized to break any code that
	            // depends on its existence.
	            asap.onerror(error);
	        } else {
	            // In a web browser, exceptions are not fatal. However, to avoid
	            // slowing down the queue of pending tasks, we rethrow the error in a
	            // lower priority turn.
	            pendingErrors.push(error);
	            requestErrorThrow();
	        }
	    } finally {
	        this.task = null;
	        freeTasks[freeTasks.length] = this;
	    }
	};


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Promise = __webpack_require__(37);
	
	module.exports = Promise;
	Promise.enableSynchronous = function () {
	  Promise.prototype.isPending = function() {
	    return this.getState() == 0;
	  };
	
	  Promise.prototype.isFulfilled = function() {
	    return this.getState() == 1;
	  };
	
	  Promise.prototype.isRejected = function() {
	    return this.getState() == 2;
	  };
	
	  Promise.prototype.getValue = function () {
	    if (this._81 === 3) {
	      return this._65.getValue();
	    }
	
	    if (!this.isFulfilled()) {
	      throw new Error('Cannot get a value of an unfulfilled promise.');
	    }
	
	    return this._65;
	  };
	
	  Promise.prototype.getReason = function () {
	    if (this._81 === 3) {
	      return this._65.getReason();
	    }
	
	    if (!this.isRejected()) {
	      throw new Error('Cannot get a rejection reason of a non-rejected promise.');
	    }
	
	    return this._65;
	  };
	
	  Promise.prototype.getState = function () {
	    if (this._81 === 3) {
	      return this._65.getState();
	    }
	    if (this._81 === -1 || this._81 === -2) {
	      return 0;
	    }
	
	    return this._81;
	  };
	};
	
	Promise.disableSynchronous = function() {
	  Promise.prototype.isPending = undefined;
	  Promise.prototype.isFulfilled = undefined;
	  Promise.prototype.isRejected = undefined;
	  Promise.prototype.getValue = undefined;
	  Promise.prototype.getReason = undefined;
	  Promise.prototype.getState = undefined;
	};


/***/ },
/* 45 */,
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * vue-router v0.7.13
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.VueRouter = factory();
	}(this, function () { 'use strict';
	
	  var babelHelpers = {};
	
	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	  function Target(path, matcher, delegate) {
	    this.path = path;
	    this.matcher = matcher;
	    this.delegate = delegate;
	  }
	
	  Target.prototype = {
	    to: function to(target, callback) {
	      var delegate = this.delegate;
	
	      if (delegate && delegate.willAddRoute) {
	        target = delegate.willAddRoute(this.matcher.target, target);
	      }
	
	      this.matcher.add(this.path, target);
	
	      if (callback) {
	        if (callback.length === 0) {
	          throw new Error("You must have an argument in the function passed to `to`");
	        }
	        this.matcher.addChild(this.path, target, callback, this.delegate);
	      }
	      return this;
	    }
	  };
	
	  function Matcher(target) {
	    this.routes = {};
	    this.children = {};
	    this.target = target;
	  }
	
	  Matcher.prototype = {
	    add: function add(path, handler) {
	      this.routes[path] = handler;
	    },
	
	    addChild: function addChild(path, target, callback, delegate) {
	      var matcher = new Matcher(target);
	      this.children[path] = matcher;
	
	      var match = generateMatch(path, matcher, delegate);
	
	      if (delegate && delegate.contextEntered) {
	        delegate.contextEntered(target, match);
	      }
	
	      callback(match);
	    }
	  };
	
	  function generateMatch(startingPath, matcher, delegate) {
	    return function (path, nestedCallback) {
	      var fullPath = startingPath + path;
	
	      if (nestedCallback) {
	        nestedCallback(generateMatch(fullPath, matcher, delegate));
	      } else {
	        return new Target(startingPath + path, matcher, delegate);
	      }
	    };
	  }
	
	  function addRoute(routeArray, path, handler) {
	    var len = 0;
	    for (var i = 0, l = routeArray.length; i < l; i++) {
	      len += routeArray[i].path.length;
	    }
	
	    path = path.substr(len);
	    var route = { path: path, handler: handler };
	    routeArray.push(route);
	  }
	
	  function eachRoute(baseRoute, matcher, callback, binding) {
	    var routes = matcher.routes;
	
	    for (var path in routes) {
	      if (routes.hasOwnProperty(path)) {
	        var routeArray = baseRoute.slice();
	        addRoute(routeArray, path, routes[path]);
	
	        if (matcher.children[path]) {
	          eachRoute(routeArray, matcher.children[path], callback, binding);
	        } else {
	          callback.call(binding, routeArray);
	        }
	      }
	    }
	  }
	
	  function map (callback, addRouteCallback) {
	    var matcher = new Matcher();
	
	    callback(generateMatch("", matcher, this.delegate));
	
	    eachRoute([], matcher, function (route) {
	      if (addRouteCallback) {
	        addRouteCallback(this, route);
	      } else {
	        this.add(route);
	      }
	    }, this);
	  }
	
	  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];
	
	  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');
	
	  var noWarning = false;
	  function warn(msg) {
	    if (!noWarning && typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }
	
	  function tryDecode(uri, asComponent) {
	    try {
	      return asComponent ? decodeURIComponent(uri) : decodeURI(uri);
	    } catch (e) {
	      warn('malformed URI' + (asComponent ? ' component: ' : ': ') + uri);
	    }
	  }
	
	  function isArray(test) {
	    return Object.prototype.toString.call(test) === "[object Array]";
	  }
	
	  // A Segment represents a segment in the original route description.
	  // Each Segment type provides an `eachChar` and `regex` method.
	  //
	  // The `eachChar` method invokes the callback with one or more character
	  // specifications. A character specification consumes one or more input
	  // characters.
	  //
	  // The `regex` method returns a regex fragment for the segment. If the
	  // segment is a dynamic of star segment, the regex fragment also includes
	  // a capture.
	  //
	  // A character specification contains:
	  //
	  // * `validChars`: a String with a list of all valid characters, or
	  // * `invalidChars`: a String with a list of all invalid characters
	  // * `repeat`: true if the character specification can repeat
	
	  function StaticSegment(string) {
	    this.string = string;
	  }
	  StaticSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      var string = this.string,
	          ch;
	
	      for (var i = 0, l = string.length; i < l; i++) {
	        ch = string.charAt(i);
	        callback({ validChars: ch });
	      }
	    },
	
	    regex: function regex() {
	      return this.string.replace(escapeRegex, '\\$1');
	    },
	
	    generate: function generate() {
	      return this.string;
	    }
	  };
	
	  function DynamicSegment(name) {
	    this.name = name;
	  }
	  DynamicSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "/", repeat: true });
	    },
	
	    regex: function regex() {
	      return "([^/]+)";
	    },
	
	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };
	
	  function StarSegment(name) {
	    this.name = name;
	  }
	  StarSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "", repeat: true });
	    },
	
	    regex: function regex() {
	      return "(.+)";
	    },
	
	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };
	
	  function EpsilonSegment() {}
	  EpsilonSegment.prototype = {
	    eachChar: function eachChar() {},
	    regex: function regex() {
	      return "";
	    },
	    generate: function generate() {
	      return "";
	    }
	  };
	
	  function parse(route, names, specificity) {
	    // normalize route as not starting with a "/". Recognition will
	    // also normalize.
	    if (route.charAt(0) === "/") {
	      route = route.substr(1);
	    }
	
	    var segments = route.split("/"),
	        results = [];
	
	    // A routes has specificity determined by the order that its different segments
	    // appear in. This system mirrors how the magnitude of numbers written as strings
	    // works.
	    // Consider a number written as: "abc". An example would be "200". Any other number written
	    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
	    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
	    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
	    // leading symbol, "1".
	    // The rule is that symbols to the left carry more weight than symbols to the right
	    // when a number is written out as a string. In the above strings, the leading digit
	    // represents how many 100's are in the number, and it carries more weight than the middle
	    // number which represents how many 10's are in the number.
	    // This system of number magnitude works well for route specificity, too. A route written as
	    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
	    // `x`, irrespective of the other parts.
	    // Because of this similarity, we assign each type of segment a number value written as a
	    // string. We can find the specificity of compound routes by concatenating these strings
	    // together, from left to right. After we have looped through all of the segments,
	    // we convert the string to a number.
	    specificity.val = '';
	
	    for (var i = 0, l = segments.length; i < l; i++) {
	      var segment = segments[i],
	          match;
	
	      if (match = segment.match(/^:([^\/]+)$/)) {
	        results.push(new DynamicSegment(match[1]));
	        names.push(match[1]);
	        specificity.val += '3';
	      } else if (match = segment.match(/^\*([^\/]+)$/)) {
	        results.push(new StarSegment(match[1]));
	        specificity.val += '2';
	        names.push(match[1]);
	      } else if (segment === "") {
	        results.push(new EpsilonSegment());
	        specificity.val += '1';
	      } else {
	        results.push(new StaticSegment(segment));
	        specificity.val += '4';
	      }
	    }
	
	    specificity.val = +specificity.val;
	
	    return results;
	  }
	
	  // A State has a character specification and (`charSpec`) and a list of possible
	  // subsequent states (`nextStates`).
	  //
	  // If a State is an accepting state, it will also have several additional
	  // properties:
	  //
	  // * `regex`: A regular expression that is used to extract parameters from paths
	  //   that reached this accepting state.
	  // * `handlers`: Information on how to convert the list of captures into calls
	  //   to registered handlers with the specified parameters
	  // * `types`: How many static, dynamic or star segments in this route. Used to
	  //   decide which route to use if multiple registered routes match a path.
	  //
	  // Currently, State is implemented naively by looping over `nextStates` and
	  // comparing a character specification against a character. A more efficient
	  // implementation would use a hash of keys pointing at one or more next states.
	
	  function State(charSpec) {
	    this.charSpec = charSpec;
	    this.nextStates = [];
	  }
	
	  State.prototype = {
	    get: function get(charSpec) {
	      var nextStates = this.nextStates;
	
	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        var child = nextStates[i];
	
	        var isEqual = child.charSpec.validChars === charSpec.validChars;
	        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;
	
	        if (isEqual) {
	          return child;
	        }
	      }
	    },
	
	    put: function put(charSpec) {
	      var state;
	
	      // If the character specification already exists in a child of the current
	      // state, just return that state.
	      if (state = this.get(charSpec)) {
	        return state;
	      }
	
	      // Make a new state for the character spec
	      state = new State(charSpec);
	
	      // Insert the new state as a child of the current state
	      this.nextStates.push(state);
	
	      // If this character specification repeats, insert the new state as a child
	      // of itself. Note that this will not trigger an infinite loop because each
	      // transition during recognition consumes a character.
	      if (charSpec.repeat) {
	        state.nextStates.push(state);
	      }
	
	      // Return the new state
	      return state;
	    },
	
	    // Find a list of child states matching the next character
	    match: function match(ch) {
	      // DEBUG "Processing `" + ch + "`:"
	      var nextStates = this.nextStates,
	          child,
	          charSpec,
	          chars;
	
	      // DEBUG "  " + debugState(this)
	      var returned = [];
	
	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        child = nextStates[i];
	
	        charSpec = child.charSpec;
	
	        if (typeof (chars = charSpec.validChars) !== 'undefined') {
	          if (chars.indexOf(ch) !== -1) {
	            returned.push(child);
	          }
	        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
	          if (chars.indexOf(ch) === -1) {
	            returned.push(child);
	          }
	        }
	      }
	
	      return returned;
	    }
	
	    /** IF DEBUG
	    , debug: function() {
	      var charSpec = this.charSpec,
	          debug = "[",
	          chars = charSpec.validChars || charSpec.invalidChars;
	       if (charSpec.invalidChars) { debug += "^"; }
	      debug += chars;
	      debug += "]";
	       if (charSpec.repeat) { debug += "+"; }
	       return debug;
	    }
	    END IF **/
	  };
	
	  /** IF DEBUG
	  function debug(log) {
	    console.log(log);
	  }
	
	  function debugState(state) {
	    return state.nextStates.map(function(n) {
	      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
	      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
	    }).join(", ")
	  }
	  END IF **/
	
	  // Sort the routes by specificity
	  function sortSolutions(states) {
	    return states.sort(function (a, b) {
	      return b.specificity.val - a.specificity.val;
	    });
	  }
	
	  function recognizeChar(states, ch) {
	    var nextStates = [];
	
	    for (var i = 0, l = states.length; i < l; i++) {
	      var state = states[i];
	
	      nextStates = nextStates.concat(state.match(ch));
	    }
	
	    return nextStates;
	  }
	
	  var oCreate = Object.create || function (proto) {
	    function F() {}
	    F.prototype = proto;
	    return new F();
	  };
	
	  function RecognizeResults(queryParams) {
	    this.queryParams = queryParams || {};
	  }
	  RecognizeResults.prototype = oCreate({
	    splice: Array.prototype.splice,
	    slice: Array.prototype.slice,
	    push: Array.prototype.push,
	    length: 0,
	    queryParams: null
	  });
	
	  function findHandler(state, path, queryParams) {
	    var handlers = state.handlers,
	        regex = state.regex;
	    var captures = path.match(regex),
	        currentCapture = 1;
	    var result = new RecognizeResults(queryParams);
	
	    for (var i = 0, l = handlers.length; i < l; i++) {
	      var handler = handlers[i],
	          names = handler.names,
	          params = {};
	
	      for (var j = 0, m = names.length; j < m; j++) {
	        params[names[j]] = captures[currentCapture++];
	      }
	
	      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
	    }
	
	    return result;
	  }
	
	  function addSegment(currentState, segment) {
	    segment.eachChar(function (ch) {
	      var state;
	
	      currentState = currentState.put(ch);
	    });
	
	    return currentState;
	  }
	
	  function decodeQueryParamPart(part) {
	    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
	    part = part.replace(/\+/gm, '%20');
	    return tryDecode(part, true);
	  }
	
	  // The main interface
	
	  var RouteRecognizer = function RouteRecognizer() {
	    this.rootState = new State();
	    this.names = {};
	  };
	
	  RouteRecognizer.prototype = {
	    add: function add(routes, options) {
	      var currentState = this.rootState,
	          regex = "^",
	          specificity = {},
	          handlers = [],
	          allSegments = [],
	          name;
	
	      var isEmpty = true;
	
	      for (var i = 0, l = routes.length; i < l; i++) {
	        var route = routes[i],
	            names = [];
	
	        var segments = parse(route.path, names, specificity);
	
	        allSegments = allSegments.concat(segments);
	
	        for (var j = 0, m = segments.length; j < m; j++) {
	          var segment = segments[j];
	
	          if (segment instanceof EpsilonSegment) {
	            continue;
	          }
	
	          isEmpty = false;
	
	          // Add a "/" for the new segment
	          currentState = currentState.put({ validChars: "/" });
	          regex += "/";
	
	          // Add a representation of the segment to the NFA and regex
	          currentState = addSegment(currentState, segment);
	          regex += segment.regex();
	        }
	
	        var handler = { handler: route.handler, names: names };
	        handlers.push(handler);
	      }
	
	      if (isEmpty) {
	        currentState = currentState.put({ validChars: "/" });
	        regex += "/";
	      }
	
	      currentState.handlers = handlers;
	      currentState.regex = new RegExp(regex + "$");
	      currentState.specificity = specificity;
	
	      if (name = options && options.as) {
	        this.names[name] = {
	          segments: allSegments,
	          handlers: handlers
	        };
	      }
	    },
	
	    handlersFor: function handlersFor(name) {
	      var route = this.names[name],
	          result = [];
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }
	
	      for (var i = 0, l = route.handlers.length; i < l; i++) {
	        result.push(route.handlers[i]);
	      }
	
	      return result;
	    },
	
	    hasRoute: function hasRoute(name) {
	      return !!this.names[name];
	    },
	
	    generate: function generate(name, params) {
	      var route = this.names[name],
	          output = "";
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }
	
	      var segments = route.segments;
	
	      for (var i = 0, l = segments.length; i < l; i++) {
	        var segment = segments[i];
	
	        if (segment instanceof EpsilonSegment) {
	          continue;
	        }
	
	        output += "/";
	        output += segment.generate(params);
	      }
	
	      if (output.charAt(0) !== '/') {
	        output = '/' + output;
	      }
	
	      if (params && params.queryParams) {
	        output += this.generateQueryString(params.queryParams);
	      }
	
	      return output;
	    },
	
	    generateQueryString: function generateQueryString(params) {
	      var pairs = [];
	      var keys = [];
	      for (var key in params) {
	        if (params.hasOwnProperty(key)) {
	          keys.push(key);
	        }
	      }
	      keys.sort();
	      for (var i = 0, len = keys.length; i < len; i++) {
	        key = keys[i];
	        var value = params[key];
	        if (value == null) {
	          continue;
	        }
	        var pair = encodeURIComponent(key);
	        if (isArray(value)) {
	          for (var j = 0, l = value.length; j < l; j++) {
	            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
	            pairs.push(arrayPair);
	          }
	        } else {
	          pair += "=" + encodeURIComponent(value);
	          pairs.push(pair);
	        }
	      }
	
	      if (pairs.length === 0) {
	        return '';
	      }
	
	      return "?" + pairs.join("&");
	    },
	
	    parseQueryString: function parseQueryString(queryString) {
	      var pairs = queryString.split("&"),
	          queryParams = {};
	      for (var i = 0; i < pairs.length; i++) {
	        var pair = pairs[i].split('='),
	            key = decodeQueryParamPart(pair[0]),
	            keyLength = key.length,
	            isArray = false,
	            value;
	        if (pair.length === 1) {
	          value = 'true';
	        } else {
	          //Handle arrays
	          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
	            isArray = true;
	            key = key.slice(0, keyLength - 2);
	            if (!queryParams[key]) {
	              queryParams[key] = [];
	            }
	          }
	          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
	        }
	        if (isArray) {
	          queryParams[key].push(value);
	        } else {
	          queryParams[key] = value;
	        }
	      }
	      return queryParams;
	    },
	
	    recognize: function recognize(path, silent) {
	      noWarning = silent;
	      var states = [this.rootState],
	          pathLen,
	          i,
	          l,
	          queryStart,
	          queryParams = {},
	          isSlashDropped = false;
	
	      queryStart = path.indexOf('?');
	      if (queryStart !== -1) {
	        var queryString = path.substr(queryStart + 1, path.length);
	        path = path.substr(0, queryStart);
	        if (queryString) {
	          queryParams = this.parseQueryString(queryString);
	        }
	      }
	
	      path = tryDecode(path);
	      if (!path) return;
	
	      // DEBUG GROUP path
	
	      if (path.charAt(0) !== "/") {
	        path = "/" + path;
	      }
	
	      pathLen = path.length;
	      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
	        path = path.substr(0, pathLen - 1);
	        isSlashDropped = true;
	      }
	
	      for (i = 0, l = path.length; i < l; i++) {
	        states = recognizeChar(states, path.charAt(i));
	        if (!states.length) {
	          break;
	        }
	      }
	
	      // END DEBUG GROUP
	
	      var solutions = [];
	      for (i = 0, l = states.length; i < l; i++) {
	        if (states[i].handlers) {
	          solutions.push(states[i]);
	        }
	      }
	
	      states = sortSolutions(solutions);
	
	      var state = solutions[0];
	
	      if (state && state.handlers) {
	        // if a trailing slash was dropped and a star segment is the last segment
	        // specified, put the trailing slash back
	        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
	          path = path + "/";
	        }
	        return findHandler(state, path, queryParams);
	      }
	    }
	  };
	
	  RouteRecognizer.prototype.map = map;
	
	  var genQuery = RouteRecognizer.prototype.generateQueryString;
	
	  // export default for holding the Vue reference
	  var exports$1 = {};
	  /**
	   * Warn stuff.
	   *
	   * @param {String} msg
	   */
	
	  function warn$1(msg) {
	    /* istanbul ignore next */
	    if (typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }
	
	  /**
	   * Resolve a relative path.
	   *
	   * @param {String} base
	   * @param {String} relative
	   * @param {Boolean} append
	   * @return {String}
	   */
	
	  function resolvePath(base, relative, append) {
	    var query = base.match(/(\?.*)$/);
	    if (query) {
	      query = query[1];
	      base = base.slice(0, -query.length);
	    }
	    // a query!
	    if (relative.charAt(0) === '?') {
	      return base + relative;
	    }
	    var stack = base.split('/');
	    // remove trailing segment if:
	    // - not appending
	    // - appending to trailing slash (last segment is empty)
	    if (!append || !stack[stack.length - 1]) {
	      stack.pop();
	    }
	    // resolve relative path
	    var segments = relative.replace(/^\//, '').split('/');
	    for (var i = 0; i < segments.length; i++) {
	      var segment = segments[i];
	      if (segment === '.') {
	        continue;
	      } else if (segment === '..') {
	        stack.pop();
	      } else {
	        stack.push(segment);
	      }
	    }
	    // ensure leading slash
	    if (stack[0] !== '') {
	      stack.unshift('');
	    }
	    return stack.join('/');
	  }
	
	  /**
	   * Forgiving check for a promise
	   *
	   * @param {Object} p
	   * @return {Boolean}
	   */
	
	  function isPromise(p) {
	    return p && typeof p.then === 'function';
	  }
	
	  /**
	   * Retrive a route config field from a component instance
	   * OR a component contructor.
	   *
	   * @param {Function|Vue} component
	   * @param {String} name
	   * @return {*}
	   */
	
	  function getRouteConfig(component, name) {
	    var options = component && (component.$options || component.options);
	    return options && options.route && options.route[name];
	  }
	
	  /**
	   * Resolve an async component factory. Have to do a dirty
	   * mock here because of Vue core's internal API depends on
	   * an ID check.
	   *
	   * @param {Object} handler
	   * @param {Function} cb
	   */
	
	  var resolver = undefined;
	
	  function resolveAsyncComponent(handler, cb) {
	    if (!resolver) {
	      resolver = {
	        resolve: exports$1.Vue.prototype._resolveComponent,
	        $options: {
	          components: {
	            _: handler.component
	          }
	        }
	      };
	    } else {
	      resolver.$options.components._ = handler.component;
	    }
	    resolver.resolve('_', function (Component) {
	      handler.component = Component;
	      cb(Component);
	    });
	  }
	
	  /**
	   * Map the dynamic segments in a path to params.
	   *
	   * @param {String} path
	   * @param {Object} params
	   * @param {Object} query
	   */
	
	  function mapParams(path, params, query) {
	    if (params === undefined) params = {};
	
	    path = path.replace(/:([^\/]+)/g, function (_, key) {
	      var val = params[key];
	      /* istanbul ignore if */
	      if (!val) {
	        warn$1('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
	      }
	      return val || '';
	    });
	    if (query) {
	      path += genQuery(query);
	    }
	    return path;
	  }
	
	  var hashRE = /#.*$/;
	
	  var HTML5History = (function () {
	    function HTML5History(_ref) {
	      var root = _ref.root;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HTML5History);
	
	      if (root && root !== '/') {
	        // make sure there's the starting slash
	        if (root.charAt(0) !== '/') {
	          root = '/' + root;
	        }
	        // remove trailing slash
	        this.root = root.replace(/\/$/, '');
	        this.rootRE = new RegExp('^\\' + this.root);
	      } else {
	        this.root = null;
	      }
	      this.onChange = onChange;
	      // check base tag
	      var baseEl = document.querySelector('base');
	      this.base = baseEl && baseEl.getAttribute('href');
	    }
	
	    HTML5History.prototype.start = function start() {
	      var _this = this;
	
	      this.listener = function (e) {
	        var url = location.pathname + location.search;
	        if (_this.root) {
	          url = url.replace(_this.rootRE, '');
	        }
	        _this.onChange(url, e && e.state, location.hash);
	      };
	      window.addEventListener('popstate', this.listener);
	      this.listener();
	    };
	
	    HTML5History.prototype.stop = function stop() {
	      window.removeEventListener('popstate', this.listener);
	    };
	
	    HTML5History.prototype.go = function go(path, replace, append) {
	      var url = this.formatPath(path, append);
	      if (replace) {
	        history.replaceState({}, '', url);
	      } else {
	        // record scroll position by replacing current state
	        history.replaceState({
	          pos: {
	            x: window.pageXOffset,
	            y: window.pageYOffset
	          }
	        }, '', location.href);
	        // then push new state
	        history.pushState({}, '', url);
	      }
	      var hashMatch = path.match(hashRE);
	      var hash = hashMatch && hashMatch[0];
	      path = url
	      // strip hash so it doesn'registerbase mess up params
	      .replace(hashRE, '')
	      // remove root before matching
	      .replace(this.rootRE, '');
	      this.onChange(path, null, hash);
	    };
	
	    HTML5History.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/'
	      // absolute path
	      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
	    };
	
	    return HTML5History;
	  })();
	
	  var HashHistory = (function () {
	    function HashHistory(_ref) {
	      var hashbang = _ref.hashbang;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HashHistory);
	
	      this.hashbang = hashbang;
	      this.onChange = onChange;
	    }
	
	    HashHistory.prototype.start = function start() {
	      var self = this;
	      this.listener = function () {
	        var path = location.hash;
	        var raw = path.replace(/^#!?/, '');
	        // always
	        if (raw.charAt(0) !== '/') {
	          raw = '/' + raw;
	        }
	        var formattedPath = self.formatPath(raw);
	        if (formattedPath !== path) {
	          location.replace(formattedPath);
	          return;
	        }
	        // determine query
	        // note it's possible to have queries in both the actual URL
	        // and the hash fragment itself.
	        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
	        self.onChange(path.replace(/^#!?/, '') + query);
	      };
	      window.addEventListener('hashchange', this.listener);
	      this.listener();
	    };
	
	    HashHistory.prototype.stop = function stop() {
	      window.removeEventListener('hashchange', this.listener);
	    };
	
	    HashHistory.prototype.go = function go(path, replace, append) {
	      path = this.formatPath(path, append);
	      if (replace) {
	        location.replace(path);
	      } else {
	        location.hash = path;
	      }
	    };
	
	    HashHistory.prototype.formatPath = function formatPath(path, append) {
	      var isAbsoloute = path.charAt(0) === '/';
	      var prefix = '#' + (this.hashbang ? '!' : '');
	      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
	    };
	
	    return HashHistory;
	  })();
	
	  var AbstractHistory = (function () {
	    function AbstractHistory(_ref) {
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, AbstractHistory);
	
	      this.onChange = onChange;
	      this.currentPath = '/';
	    }
	
	    AbstractHistory.prototype.start = function start() {
	      this.onChange('/');
	    };
	
	    AbstractHistory.prototype.stop = function stop() {
	      // noop
	    };
	
	    AbstractHistory.prototype.go = function go(path, replace, append) {
	      path = this.currentPath = this.formatPath(path, append);
	      this.onChange(path);
	    };
	
	    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
	    };
	
	    return AbstractHistory;
	  })();
	
	  /**
	   * Determine the reusability of an existing router view.
	   *
	   * @param {Directive} view
	   * @param {Object} handler
	   * @param {Transition} transition
	   */
	
	  function canReuse(view, handler, transition) {
	    var component = view.childVM;
	    if (!component || !handler) {
	      return false;
	    }
	    // important: check view.Component here because it may
	    // have been changed in activate hook
	    if (view.Component !== handler.component) {
	      return false;
	    }
	    var canReuseFn = getRouteConfig(component, 'canReuse');
	    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
	      to: transition.to,
	      from: transition.from
	    }) : true; // defaults to true
	  }
	
	  /**
	   * Check if a component can deactivate.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function canDeactivate(view, transition, next) {
	    var fromComponent = view.childVM;
	    var hook = getRouteConfig(fromComponent, 'canDeactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHook(hook, fromComponent, next, {
	        expectBoolean: true
	      });
	    }
	  }
	
	  /**
	   * Check if a component can activate.
	   *
	   * @param {Object} handler
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function canActivate(handler, transition, next) {
	    resolveAsyncComponent(handler, function (Component) {
	      // have to check due to async-ness
	      if (transition.aborted) {
	        return;
	      }
	      // determine if this component can be activated
	      var hook = getRouteConfig(Component, 'canActivate');
	      if (!hook) {
	        next();
	      } else {
	        transition.callHook(hook, null, next, {
	          expectBoolean: true
	        });
	      }
	    });
	  }
	
	  /**
	   * Call deactivate hooks for existing router-views.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function deactivate(view, transition, next) {
	    var component = view.childVM;
	    var hook = getRouteConfig(component, 'deactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHooks(hook, component, next);
	    }
	  }
	
	  /**
	   * Activate / switch component for a router-view.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Number} depth
	   * @param {Function} [cb]
	   */
	
	  function activate(view, transition, depth, cb, reuse) {
	    var handler = transition.activateQueue[depth];
	    if (!handler) {
	      saveChildView(view);
	      if (view._bound) {
	        view.setComponent(null);
	      }
	      cb && cb();
	      return;
	    }
	
	    var Component = view.Component = handler.component;
	    var activateHook = getRouteConfig(Component, 'activate');
	    var dataHook = getRouteConfig(Component, 'data');
	    var waitForData = getRouteConfig(Component, 'waitForData');
	
	    view.depth = depth;
	    view.activated = false;
	
	    var component = undefined;
	    var loading = !!(dataHook && !waitForData);
	
	    // "reuse" is a flag passed down when the parent view is
	    // either reused via keep-alive or as a child of a kept-alive view.
	    // of course we can only reuse if the current kept-alive instance
	    // is of the correct type.
	    reuse = reuse && view.childVM && view.childVM.constructor === Component;
	
	    if (reuse) {
	      // just reuse
	      component = view.childVM;
	      component.$loadingRouteData = loading;
	    } else {
	      saveChildView(view);
	
	      // unbuild current component. this step also destroys
	      // and removes all nested child views.
	      view.unbuild(true);
	
	      // build the new component. this will also create the
	      // direct child view of the current one. it will register
	      // itself as view.childView.
	      component = view.build({
	        _meta: {
	          $loadingRouteData: loading
	        },
	        created: function created() {
	          this._routerView = view;
	        }
	      });
	
	      // handle keep-alive.
	      // when a kept-alive child vm is restored, we need to
	      // add its cached child views into the router's view list,
	      // and also properly update current view's child view.
	      if (view.keepAlive) {
	        component.$loadingRouteData = loading;
	        var cachedChildView = component._keepAliveRouterView;
	        if (cachedChildView) {
	          view.childView = cachedChildView;
	          component._keepAliveRouterView = null;
	        }
	      }
	    }
	
	    // cleanup the component in case the transition is aborted
	    // before the component is ever inserted.
	    var cleanup = function cleanup() {
	      component.$destroy();
	    };
	
	    // actually insert the component and trigger transition
	    var insert = function insert() {
	      if (reuse) {
	        cb && cb();
	        return;
	      }
	      var router = transition.router;
	      if (router._rendered || router._transitionOnLoad) {
	        view.transition(component);
	      } else {
	        // no transition on first render, manual transition
	        /* istanbul ignore if */
	        if (view.setCurrent) {
	          // 0.12 compat
	          view.setCurrent(component);
	        } else {
	          // 1.0
	          view.childVM = component;
	        }
	        component.$before(view.anchor, null, false);
	      }
	      cb && cb();
	    };
	
	    var afterData = function afterData() {
	      // activate the child view
	      if (view.childView) {
	        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
	      }
	      insert();
	    };
	
	    // called after activation hook is resolved
	    var afterActivate = function afterActivate() {
	      view.activated = true;
	      if (dataHook && waitForData) {
	        // wait until data loaded to insert
	        loadData(component, transition, dataHook, afterData, cleanup);
	      } else {
	        // load data and insert at the same time
	        if (dataHook) {
	          loadData(component, transition, dataHook);
	        }
	        afterData();
	      }
	    };
	
	    if (activateHook) {
	      transition.callHooks(activateHook, component, afterActivate, {
	        cleanup: cleanup,
	        postActivate: true
	      });
	    } else {
	      afterActivate();
	    }
	  }
	
	  /**
	   * Reuse a view, just reload data if necessary.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   */
	
	  function reuse(view, transition) {
	    var component = view.childVM;
	    var dataHook = getRouteConfig(component, 'data');
	    if (dataHook) {
	      loadData(component, transition, dataHook);
	    }
	  }
	
	  /**
	   * Asynchronously load and apply data to component.
	   *
	   * @param {Vue} component
	   * @param {Transition} transition
	   * @param {Function} hook
	   * @param {Function} cb
	   * @param {Function} cleanup
	   */
	
	  function loadData(component, transition, hook, cb, cleanup) {
	    component.$loadingRouteData = true;
	    transition.callHooks(hook, component, function () {
	      component.$loadingRouteData = false;
	      component.$emit('route-data-loaded', component);
	      cb && cb();
	    }, {
	      cleanup: cleanup,
	      postActivate: true,
	      processData: function processData(data) {
	        // handle promise sugar syntax
	        var promises = [];
	        if (isPlainObject(data)) {
	          Object.keys(data).forEach(function (key) {
	            var val = data[key];
	            if (isPromise(val)) {
	              promises.push(val.then(function (resolvedVal) {
	                component.$set(key, resolvedVal);
	              }));
	            } else {
	              component.$set(key, val);
	            }
	          });
	        }
	        if (promises.length) {
	          return promises[0].constructor.all(promises);
	        }
	      }
	    });
	  }
	
	  /**
	   * Save the child view for a kept-alive view so that
	   * we can restore it when it is switched back to.
	   *
	   * @param {Directive} view
	   */
	
	  function saveChildView(view) {
	    if (view.keepAlive && view.childVM && view.childView) {
	      view.childVM._keepAliveRouterView = view.childView;
	    }
	    view.childView = null;
	  }
	
	  /**
	   * Check plain object.
	   *
	   * @param {*} val
	   */
	
	  function isPlainObject(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }
	
	  /**
	   * A RouteTransition object manages the pipeline of a
	   * router-view switching process. This is also the object
	   * passed into user route hooks.
	   *
	   * @param {Router} router
	   * @param {Route} to
	   * @param {Route} from
	   */
	
	  var RouteTransition = (function () {
	    function RouteTransition(router, to, from) {
	      babelHelpers.classCallCheck(this, RouteTransition);
	
	      this.router = router;
	      this.to = to;
	      this.from = from;
	      this.next = null;
	      this.aborted = false;
	      this.done = false;
	    }
	
	    /**
	     * Abort current transition and return to previous location.
	     */
	
	    RouteTransition.prototype.abort = function abort() {
	      if (!this.aborted) {
	        this.aborted = true;
	        // if the root path throws an error during validation
	        // on initial load, it gets caught in an infinite loop.
	        var abortingOnLoad = !this.from.path && this.to.path === '/';
	        if (!abortingOnLoad) {
	          this.router.replace(this.from.path || '/');
	        }
	      }
	    };
	
	    /**
	     * Abort current transition and redirect to a new location.
	     *
	     * @param {String} path
	     */
	
	    RouteTransition.prototype.redirect = function redirect(path) {
	      if (!this.aborted) {
	        this.aborted = true;
	        if (typeof path === 'string') {
	          path = mapParams(path, this.to.params, this.to.query);
	        } else {
	          path.params = path.params || this.to.params;
	          path.query = path.query || this.to.query;
	        }
	        this.router.replace(path);
	      }
	    };
	
	    /**
	     * A router view transition's pipeline can be described as
	     * follows, assuming we are transitioning from an existing
	     * <router-view> chain [Component A, Component B] to a new
	     * chain [Component A, Component C]:
	     *
	     *  A    A
	     *  | => |
	     *  B    C
	     *
	     * 1. Reusablity phase:
	     *   -> canReuse(A, A)
	     *   -> canReuse(B, C)
	     *   -> determine new queues:
	     *      - deactivation: [B]
	     *      - activation: [C]
	     *
	     * 2. Validation phase:
	     *   -> canDeactivate(B)
	     *   -> canActivate(C)
	     *
	     * 3. Activation phase:
	     *   -> deactivate(B)
	     *   -> activate(C)
	     *
	     * Each of these steps can be asynchronous, and any
	     * step can potentially abort the transition.
	     *
	     * @param {Function} cb
	     */
	
	    RouteTransition.prototype.start = function start(cb) {
	      var transition = this;
	
	      // determine the queue of views to deactivate
	      var deactivateQueue = [];
	      var view = this.router._rootView;
	      while (view) {
	        deactivateQueue.unshift(view);
	        view = view.childView;
	      }
	      var reverseDeactivateQueue = deactivateQueue.slice().reverse();
	
	      // determine the queue of route handlers to activate
	      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
	        return match.handler;
	      });
	
	      // 1. Reusability phase
	      var i = undefined,
	          reuseQueue = undefined;
	      for (i = 0; i < reverseDeactivateQueue.length; i++) {
	        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
	          break;
	        }
	      }
	      if (i > 0) {
	        reuseQueue = reverseDeactivateQueue.slice(0, i);
	        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
	        activateQueue = activateQueue.slice(i);
	      }
	
	      // 2. Validation phase
	      transition.runQueue(deactivateQueue, canDeactivate, function () {
	        transition.runQueue(activateQueue, canActivate, function () {
	          transition.runQueue(deactivateQueue, deactivate, function () {
	            // 3. Activation phase
	
	            // Update router current route
	            transition.router._onTransitionValidated(transition);
	
	            // trigger reuse for all reused views
	            reuseQueue && reuseQueue.forEach(function (view) {
	              return reuse(view, transition);
	            });
	
	            // the root of the chain that needs to be replaced
	            // is the top-most non-reusable view.
	            if (deactivateQueue.length) {
	              var _view = deactivateQueue[deactivateQueue.length - 1];
	              var depth = reuseQueue ? reuseQueue.length : 0;
	              activate(_view, transition, depth, cb);
	            } else {
	              cb();
	            }
	          });
	        });
	      });
	    };
	
	    /**
	     * Asynchronously and sequentially apply a function to a
	     * queue.
	     *
	     * @param {Array} queue
	     * @param {Function} fn
	     * @param {Function} cb
	     */
	
	    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
	      var transition = this;
	      step(0);
	      function step(index) {
	        if (index >= queue.length) {
	          cb();
	        } else {
	          fn(queue[index], transition, function () {
	            step(index + 1);
	          });
	        }
	      }
	    };
	
	    /**
	     * Call a user provided route transition hook and handle
	     * the response (e.g. if the user returns a promise).
	     *
	     * If the user neither expects an argument nor returns a
	     * promise, the hook is assumed to be synchronous.
	     *
	     * @param {Function} hook
	     * @param {*} [context]
	     * @param {Function} [cb]
	     * @param {Object} [options]
	     *                 - {Boolean} expectBoolean
	     *                 - {Boolean} postActive
	     *                 - {Function} processData
	     *                 - {Function} cleanup
	     */
	
	    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
	      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	      var _ref$expectBoolean = _ref.expectBoolean;
	      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
	      var _ref$postActivate = _ref.postActivate;
	      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
	      var processData = _ref.processData;
	      var cleanup = _ref.cleanup;
	
	      var transition = this;
	      var nextCalled = false;
	
	      // abort the transition
	      var abort = function abort() {
	        cleanup && cleanup();
	        transition.abort();
	      };
	
	      // handle errors
	      var onError = function onError(err) {
	        postActivate ? next() : abort();
	        if (err && !transition.router._suppress) {
	          warn$1('Uncaught error during transition: ');
	          throw err instanceof Error ? err : new Error(err);
	        }
	      };
	
	      // since promise swallows errors, we have to
	      // throw it in the next tick...
	      var onPromiseError = function onPromiseError(err) {
	        try {
	          onError(err);
	        } catch (e) {
	          setTimeout(function () {
	            throw e;
	          }, 0);
	        }
	      };
	
	      // advance the transition to the next step
	      var next = function next() {
	        if (nextCalled) {
	          warn$1('transition.next() should be called only once.');
	          return;
	        }
	        nextCalled = true;
	        if (transition.aborted) {
	          cleanup && cleanup();
	          return;
	        }
	        cb && cb();
	      };
	
	      var nextWithBoolean = function nextWithBoolean(res) {
	        if (typeof res === 'boolean') {
	          res ? next() : abort();
	        } else if (isPromise(res)) {
	          res.then(function (ok) {
	            ok ? next() : abort();
	          }, onPromiseError);
	        } else if (!hook.length) {
	          next();
	        }
	      };
	
	      var nextWithData = function nextWithData(data) {
	        var res = undefined;
	        try {
	          res = processData(data);
	        } catch (err) {
	          return onError(err);
	        }
	        if (isPromise(res)) {
	          res.then(next, onPromiseError);
	        } else {
	          next();
	        }
	      };
	
	      // expose a clone of the transition object, so that each
	      // hook gets a clean copy and prevent the user from
	      // messing with the internals.
	      var exposed = {
	        to: transition.to,
	        from: transition.from,
	        abort: abort,
	        next: processData ? nextWithData : next,
	        redirect: function redirect() {
	          transition.redirect.apply(transition, arguments);
	        }
	      };
	
	      // actually call the hook
	      var res = undefined;
	      try {
	        res = hook.call(context, exposed);
	      } catch (err) {
	        return onError(err);
	      }
	
	      if (expectBoolean) {
	        // boolean hooks
	        nextWithBoolean(res);
	      } else if (isPromise(res)) {
	        // promise
	        if (processData) {
	          res.then(nextWithData, onPromiseError);
	        } else {
	          res.then(next, onPromiseError);
	        }
	      } else if (processData && isPlainOjbect(res)) {
	        // data promise sugar
	        nextWithData(res);
	      } else if (!hook.length) {
	        next();
	      }
	    };
	
	    /**
	     * Call a single hook or an array of async hooks in series.
	     *
	     * @param {Array} hooks
	     * @param {*} context
	     * @param {Function} cb
	     * @param {Object} [options]
	     */
	
	    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
	      var _this = this;
	
	      if (Array.isArray(hooks)) {
	        this.runQueue(hooks, function (hook, _, next) {
	          if (!_this.aborted) {
	            _this.callHook(hook, context, next, options);
	          }
	        }, cb);
	      } else {
	        this.callHook(hooks, context, cb, options);
	      }
	    };
	
	    return RouteTransition;
	  })();
	
	  function isPlainOjbect(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }
	
	  function toArray(val) {
	    return val ? Array.prototype.slice.call(val) : [];
	  }
	
	  var internalKeysRE = /^(component|subRoutes|fullPath)$/;
	
	  /**
	   * Route Context Object
	   *
	   * @param {String} path
	   * @param {Router} router
	   */
	
	  var Route = function Route(path, router) {
	    var _this = this;
	
	    babelHelpers.classCallCheck(this, Route);
	
	    var matched = router._recognizer.recognize(path);
	    if (matched) {
	      // copy all custom fields from route configs
	      [].forEach.call(matched, function (match) {
	        for (var key in match.handler) {
	          if (!internalKeysRE.test(key)) {
	            _this[key] = match.handler[key];
	          }
	        }
	      });
	      // set query and params
	      this.query = matched.queryParams;
	      this.params = [].reduce.call(matched, function (prev, cur) {
	        if (cur.params) {
	          for (var key in cur.params) {
	            prev[key] = cur.params[key];
	          }
	        }
	        return prev;
	      }, {});
	    }
	    // expose path and router
	    this.path = path;
	    // for internal use
	    this.matched = matched || router._notFoundHandler;
	    // internal reference to router
	    Object.defineProperty(this, 'router', {
	      enumerable: false,
	      value: router
	    });
	    // Important: freeze self to prevent observation
	    Object.freeze(this);
	  };
	
	  function applyOverride (Vue) {
	    var _Vue$util = Vue.util;
	    var extend = _Vue$util.extend;
	    var isArray = _Vue$util.isArray;
	    var defineReactive = _Vue$util.defineReactive;
	
	    // override Vue's init and destroy process to keep track of router instances
	    var init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      options = options || {};
	      var root = options._parent || options.parent || this;
	      var router = root.$router;
	      var route = root.$route;
	      if (router) {
	        // expose router
	        this.$router = router;
	        router._children.push(this);
	        /* istanbul ignore if */
	        if (this._defineMeta) {
	          // 0.12
	          this._defineMeta('$route', route);
	        } else {
	          // 1.0
	          defineReactive(this, '$route', route);
	        }
	      }
	      init.call(this, options);
	    };
	
	    var destroy = Vue.prototype._destroy;
	    Vue.prototype._destroy = function () {
	      if (!this._isBeingDestroyed && this.$router) {
	        this.$router._children.$remove(this);
	      }
	      destroy.apply(this, arguments);
	    };
	
	    // 1.0 only: enable route mixins
	    var strats = Vue.config.optionMergeStrategies;
	    var hooksToMergeRE = /^(data|activate|deactivate)$/;
	
	    if (strats) {
	      strats.route = function (parentVal, childVal) {
	        if (!childVal) return parentVal;
	        if (!parentVal) return childVal;
	        var ret = {};
	        extend(ret, parentVal);
	        for (var key in childVal) {
	          var a = ret[key];
	          var b = childVal[key];
	          // for data, activate and deactivate, we need to merge them into
	          // arrays similar to lifecycle hooks.
	          if (a && hooksToMergeRE.test(key)) {
	            ret[key] = (isArray(a) ? a : [a]).concat(b);
	          } else {
	            ret[key] = b;
	          }
	        }
	        return ret;
	      };
	    }
	  }
	
	  function View (Vue) {
	
	    var _ = Vue.util;
	    var componentDef =
	    // 0.12
	    Vue.directive('_component') ||
	    // 1.0
	    Vue.internalDirectives.component;
	    // <router-view> extends the internal component directive
	    var viewDef = _.extend({}, componentDef);
	
	    // with some overrides
	    _.extend(viewDef, {
	
	      _isRouterView: true,
	
	      bind: function bind() {
	        var route = this.vm.$route;
	        /* istanbul ignore if */
	        if (!route) {
	          warn$1('<router-view> can only be used inside a ' + 'router-enabled app.');
	          return;
	        }
	        // force dynamic directive so v-component doesn'registerbase
	        // attempt to build right now
	        this._isDynamicLiteral = true;
	        // finally, init by delegating to v-component
	        componentDef.bind.call(this);
	
	        // locate the parent view
	        var parentView = undefined;
	        var parent = this.vm;
	        while (parent) {
	          if (parent._routerView) {
	            parentView = parent._routerView;
	            break;
	          }
	          parent = parent.$parent;
	        }
	        if (parentView) {
	          // register self as a child of the parent view,
	          // instead of activating now. This is so that the
	          // child's activate hook is called after the
	          // parent's has resolved.
	          this.parentView = parentView;
	          parentView.childView = this;
	        } else {
	          // this is the root view!
	          var router = route.router;
	          router._rootView = this;
	        }
	
	        // handle late-rendered view
	        // two possibilities:
	        // 1. root view rendered after transition has been
	        //    validated;
	        // 2. child view rendered after parent view has been
	        //    activated.
	        var transition = route.router._currentTransition;
	        if (!parentView && transition.done || parentView && parentView.activated) {
	          var depth = parentView ? parentView.depth + 1 : 0;
	          activate(this, transition, depth);
	        }
	      },
	
	      unbind: function unbind() {
	        if (this.parentView) {
	          this.parentView.childView = null;
	        }
	        componentDef.unbind.call(this);
	      }
	    });
	
	    Vue.elementDirective('router-view', viewDef);
	  }
	
	  var trailingSlashRE = /\/$/;
	  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	  var queryStringRE = /\?.*$/;
	
	  // install v-link, which provides navigation support for
	  // HTML5 history mode
	  function Link (Vue) {
	    var _Vue$util = Vue.util;
	    var _bind = _Vue$util.bind;
	    var isObject = _Vue$util.isObject;
	    var addClass = _Vue$util.addClass;
	    var removeClass = _Vue$util.removeClass;
	
	    var onPriority = Vue.directive('on').priority;
	    var LINK_UPDATE = '__vue-router-link-update__';
	
	    var activeId = 0;
	
	    Vue.directive('link-active', {
	      priority: 9999,
	      bind: function bind() {
	        var _this = this;
	
	        var id = String(activeId++);
	        // collect v-links contained within this element.
	        // we need do this here before the parent-child relationship
	        // gets messed up by terminal directives (if, for, components)
	        var childLinks = this.el.querySelectorAll('[v-link]');
	        for (var i = 0, l = childLinks.length; i < l; i++) {
	          var link = childLinks[i];
	          var existingId = link.getAttribute(LINK_UPDATE);
	          var value = existingId ? existingId + ',' + id : id;
	          // leave a mark on the link element which can be persisted
	          // through fragment clones.
	          link.setAttribute(LINK_UPDATE, value);
	        }
	        this.vm.$on(LINK_UPDATE, this.cb = function (link, path) {
	          if (link.activeIds.indexOf(id) > -1) {
	            link.updateClasses(path, _this.el);
	          }
	        });
	      },
	      unbind: function unbind() {
	        this.vm.$off(LINK_UPDATE, this.cb);
	      }
	    });
	
	    Vue.directive('link', {
	      priority: onPriority - 2,
	
	      bind: function bind() {
	        var vm = this.vm;
	        /* istanbul ignore if */
	        if (!vm.$route) {
	          warn$1('v-link can only be used inside a router-enabled app.');
	          return;
	        }
	        this.router = vm.$route.router;
	        // update things when the route changes
	        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
	        // check v-link-active ids
	        var activeIds = this.el.getAttribute(LINK_UPDATE);
	        if (activeIds) {
	          this.el.removeAttribute(LINK_UPDATE);
	          this.activeIds = activeIds.split(',');
	        }
	        // no need to handle click if link expects to be opened
	        // in a new window/tab.
	        /* istanbul ignore if */
	        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
	          return;
	        }
	        // handle click
	        this.handler = _bind(this.onClick, this);
	        this.el.addEventListener('click', this.handler);
	      },
	
	      update: function update(target) {
	        this.target = target;
	        if (isObject(target)) {
	          this.append = target.append;
	          this.exact = target.exact;
	          this.prevActiveClass = this.activeClass;
	          this.activeClass = target.activeClass;
	        }
	        this.onRouteUpdate(this.vm.$route);
	      },
	
	      onClick: function onClick(e) {
	        // don'registerbase redirect with control keys
	        /* istanbul ignore if */
	        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	        // don'registerbase redirect when preventDefault called
	        /* istanbul ignore if */
	        if (e.defaultPrevented) return;
	        // don'registerbase redirect on right click
	        /* istanbul ignore if */
	        if (e.button !== 0) return;
	
	        var target = this.target;
	        if (target) {
	          // v-link with expression, just go
	          e.preventDefault();
	          this.router.go(target);
	        } else {
	          // no expression, delegate for an <a> inside
	          var el = e.target;
	          while (el.tagName !== 'A' && el !== this.el) {
	            el = el.parentNode;
	          }
	          if (el.tagName === 'A' && sameOrigin(el)) {
	            e.preventDefault();
	            var path = el.pathname;
	            if (this.router.history.root) {
	              path = path.replace(this.router.history.rootRE, '');
	            }
	            this.router.go({
	              path: path,
	              replace: target && target.replace,
	              append: target && target.append
	            });
	          }
	        }
	      },
	
	      onRouteUpdate: function onRouteUpdate(route) {
	        // router.stringifyPath is dependent on current route
	        // and needs to be called again whenver route changes.
	        var newPath = this.router.stringifyPath(this.target);
	        if (this.path !== newPath) {
	          this.path = newPath;
	          this.updateActiveMatch();
	          this.updateHref();
	        }
	        if (this.activeIds) {
	          this.vm.$emit(LINK_UPDATE, this, route.path);
	        } else {
	          this.updateClasses(route.path, this.el);
	        }
	      },
	
	      updateActiveMatch: function updateActiveMatch() {
	        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
	      },
	
	      updateHref: function updateHref() {
	        if (this.el.tagName !== 'A') {
	          return;
	        }
	        var path = this.path;
	        var router = this.router;
	        var isAbsolute = path.charAt(0) === '/';
	        // do not format non-hash relative paths
	        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
	        if (href) {
	          this.el.href = href;
	        } else {
	          this.el.removeAttribute('href');
	        }
	      },
	
	      updateClasses: function updateClasses(path, el) {
	        var activeClass = this.activeClass || this.router._linkActiveClass;
	        // clear old class
	        if (this.prevActiveClass && this.prevActiveClass !== activeClass) {
	          toggleClasses(el, this.prevActiveClass, removeClass);
	        }
	        // remove query string before matching
	        var dest = this.path.replace(queryStringRE, '');
	        path = path.replace(queryStringRE, '');
	        // add new class
	        if (this.exact) {
	          if (dest === path ||
	          // also allow additional trailing slash
	          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        } else {
	          if (this.activeRE && this.activeRE.test(path)) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        }
	      },
	
	      unbind: function unbind() {
	        this.el.removeEventListener('click', this.handler);
	        this.unwatch && this.unwatch();
	      }
	    });
	
	    function sameOrigin(link) {
	      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
	    }
	
	    // this function is copied from v-bind:class implementation until
	    // we properly expose it...
	    function toggleClasses(el, key, fn) {
	      key = key.trim();
	      if (key.indexOf(' ') === -1) {
	        fn(el, key);
	        return;
	      }
	      var keys = key.split(/\s+/);
	      for (var i = 0, l = keys.length; i < l; i++) {
	        fn(el, keys[i]);
	      }
	    }
	  }
	
	  var historyBackends = {
	    abstract: AbstractHistory,
	    hash: HashHistory,
	    html5: HTML5History
	  };
	
	  // late bind during install
	  var Vue = undefined;
	
	  /**
	   * Router constructor
	   *
	   * @param {Object} [options]
	   */
	
	  var Router = (function () {
	    function Router() {
	      var _this = this;
	
	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	      var _ref$hashbang = _ref.hashbang;
	      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
	      var _ref$abstract = _ref.abstract;
	      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
	      var _ref$history = _ref.history;
	      var history = _ref$history === undefined ? false : _ref$history;
	      var _ref$saveScrollPosition = _ref.saveScrollPosition;
	      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
	      var _ref$transitionOnLoad = _ref.transitionOnLoad;
	      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
	      var _ref$suppressTransitionError = _ref.suppressTransitionError;
	      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
	      var _ref$root = _ref.root;
	      var root = _ref$root === undefined ? null : _ref$root;
	      var _ref$linkActiveClass = _ref.linkActiveClass;
	      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
	      babelHelpers.classCallCheck(this, Router);
	
	      /* istanbul ignore if */
	      if (!Router.installed) {
	        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
	      }
	
	      // Vue instances
	      this.app = null;
	      this._children = [];
	
	      // route recognizer
	      this._recognizer = new RouteRecognizer();
	      this._guardRecognizer = new RouteRecognizer();
	
	      // state
	      this._started = false;
	      this._startCb = null;
	      this._currentRoute = {};
	      this._currentTransition = null;
	      this._previousTransition = null;
	      this._notFoundHandler = null;
	      this._notFoundRedirect = null;
	      this._beforeEachHooks = [];
	      this._afterEachHooks = [];
	
	      // trigger transition on initial render?
	      this._rendered = false;
	      this._transitionOnLoad = transitionOnLoad;
	
	      // history mode
	      this._root = root;
	      this._abstract = abstract;
	      this._hashbang = hashbang;
	
	      // check if HTML5 history is available
	      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
	      this._history = history && hasPushState;
	      this._historyFallback = history && !hasPushState;
	
	      // create history object
	      var inBrowser = Vue.util.inBrowser;
	      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';
	
	      var History = historyBackends[this.mode];
	      this.history = new History({
	        root: root,
	        hashbang: this._hashbang,
	        onChange: function onChange(path, state, anchor) {
	          _this._match(path, state, anchor);
	        }
	      });
	
	      // other options
	      this._saveScrollPosition = saveScrollPosition;
	      this._linkActiveClass = linkActiveClass;
	      this._suppress = suppressTransitionError;
	    }
	
	    /**
	     * Allow directly passing components to a route
	     * definition.
	     *
	     * @param {String} path
	     * @param {Object} handler
	     */
	
	    // API ===================================================
	
	    /**
	    * Register a map of top-level paths.
	    *
	    * @param {Object} map
	    */
	
	    Router.prototype.map = function map(_map) {
	      for (var route in _map) {
	        this.on(route, _map[route]);
	      }
	      return this;
	    };
	
	    /**
	     * Register a single root-level path
	     *
	     * @param {String} rootPath
	     * @param {Object} handler
	     *                 - {String} component
	     *                 - {Object} [subRoutes]
	     *                 - {Boolean} [forceRefresh]
	     *                 - {Function} [before]
	     *                 - {Function} [after]
	     */
	
	    Router.prototype.on = function on(rootPath, handler) {
	      if (rootPath === '*') {
	        this._notFound(handler);
	      } else {
	        this._addRoute(rootPath, handler, []);
	      }
	      return this;
	    };
	
	    /**
	     * Set redirects.
	     *
	     * @param {Object} map
	     */
	
	    Router.prototype.redirect = function redirect(map) {
	      for (var path in map) {
	        this._addRedirect(path, map[path]);
	      }
	      return this;
	    };
	
	    /**
	     * Set aliases.
	     *
	     * @param {Object} map
	     */
	
	    Router.prototype.alias = function alias(map) {
	      for (var path in map) {
	        this._addAlias(path, map[path]);
	      }
	      return this;
	    };
	
	    /**
	     * Set global before hook.
	     *
	     * @param {Function} fn
	     */
	
	    Router.prototype.beforeEach = function beforeEach(fn) {
	      this._beforeEachHooks.push(fn);
	      return this;
	    };
	
	    /**
	     * Set global after hook.
	     *
	     * @param {Function} fn
	     */
	
	    Router.prototype.afterEach = function afterEach(fn) {
	      this._afterEachHooks.push(fn);
	      return this;
	    };
	
	    /**
	     * Navigate to a given path.
	     * The path can be an object describing a named path in
	     * the format of { name: '...', params: {}, query: {}}
	     * The path is assumed to be already decoded, and will
	     * be resolved against root (if provided)
	     *
	     * @param {String|Object} path
	     * @param {Boolean} [replace]
	     */
	
	    Router.prototype.go = function go(path) {
	      var replace = false;
	      var append = false;
	      if (Vue.util.isObject(path)) {
	        replace = path.replace;
	        append = path.append;
	      }
	      path = this.stringifyPath(path);
	      if (path) {
	        this.history.go(path, replace, append);
	      }
	    };
	
	    /**
	     * Short hand for replacing current path
	     *
	     * @param {String} path
	     */
	
	    Router.prototype.replace = function replace(path) {
	      if (typeof path === 'string') {
	        path = { path: path };
	      }
	      path.replace = true;
	      this.go(path);
	    };
	
	    /**
	     * Start the router.
	     *
	     * @param {VueConstructor} App
	     * @param {String|Element} container
	     * @param {Function} [cb]
	     */
	
	    Router.prototype.start = function start(App, container, cb) {
	      /* istanbul ignore if */
	      if (this._started) {
	        warn$1('already started.');
	        return;
	      }
	      this._started = true;
	      this._startCb = cb;
	      if (!this.app) {
	        /* istanbul ignore if */
	        if (!App || !container) {
	          throw new Error('Must start vue-router with a component and a ' + 'root container.');
	        }
	        /* istanbul ignore if */
	        if (App instanceof Vue) {
	          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
	        }
	        this._appContainer = container;
	        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
	        // give it a name for better debugging
	        Ctor.options.name = Ctor.options.name || 'RouterApp';
	      }
	
	      // handle history fallback in browsers that do not
	      // support HTML5 history API
	      if (this._historyFallback) {
	        var _location = window.location;
	        var _history = new HTML5History({ root: this._root });
	        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
	        if (path && path !== '/') {
	          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
	          return;
	        }
	      }
	
	      this.history.start();
	    };
	
	    /**
	     * Stop listening to route changes.
	     */
	
	    Router.prototype.stop = function stop() {
	      this.history.stop();
	      this._started = false;
	    };
	
	    /**
	     * Normalize named route object / string paths into
	     * a string.
	     *
	     * @param {Object|String|Number} path
	     * @return {String}
	     */
	
	    Router.prototype.stringifyPath = function stringifyPath(path) {
	      var generatedPath = '';
	      if (path && typeof path === 'object') {
	        if (path.name) {
	          var extend = Vue.util.extend;
	          var currentParams = this._currentTransition && this._currentTransition.to.params;
	          var targetParams = path.params || {};
	          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
	          generatedPath = encodeURI(this._recognizer.generate(path.name, params));
	        } else if (path.path) {
	          generatedPath = encodeURI(path.path);
	        }
	        if (path.query) {
	          // note: the generated query string is pre-URL-encoded by the recognizer
	          var query = this._recognizer.generateQueryString(path.query);
	          if (generatedPath.indexOf('?') > -1) {
	            generatedPath += '&' + query.slice(1);
	          } else {
	            generatedPath += query;
	          }
	        }
	      } else {
	        generatedPath = encodeURI(path ? path + '' : '');
	      }
	      return generatedPath;
	    };
	
	    // Internal methods ======================================
	
	    /**
	    * Add a route containing a list of segments to the internal
	    * route recognizer. Will be called recursively to add all
	    * possible sub-routes.
	    *
	    * @param {String} path
	    * @param {Object} handler
	    * @param {Array} segments
	    */
	
	    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
	      guardComponent(path, handler);
	      handler.path = path;
	      handler.fullPath = (segments.reduce(function (path, segment) {
	        return path + segment.path;
	      }, '') + path).replace('//', '/');
	      segments.push({
	        path: path,
	        handler: handler
	      });
	      this._recognizer.add(segments, {
	        as: handler.name
	      });
	      // add sub routes
	      if (handler.subRoutes) {
	        for (var subPath in handler.subRoutes) {
	          // recursively walk all sub routes
	          this._addRoute(subPath, handler.subRoutes[subPath],
	          // pass a copy in recursion to avoid mutating
	          // across branches
	          segments.slice());
	        }
	      }
	    };
	
	    /**
	     * Set the notFound route handler.
	     *
	     * @param {Object} handler
	     */
	
	    Router.prototype._notFound = function _notFound(handler) {
	      guardComponent('*', handler);
	      this._notFoundHandler = [{ handler: handler }];
	    };
	
	    /**
	     * Add a redirect record.
	     *
	     * @param {String} path
	     * @param {String} redirectPath
	     */
	
	    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
	      if (path === '*') {
	        this._notFoundRedirect = redirectPath;
	      } else {
	        this._addGuard(path, redirectPath, this.replace);
	      }
	    };
	
	    /**
	     * Add an alias record.
	     *
	     * @param {String} path
	     * @param {String} aliasPath
	     */
	
	    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
	      this._addGuard(path, aliasPath, this._match);
	    };
	
	    /**
	     * Add a path guard.
	     *
	     * @param {String} path
	     * @param {String} mappedPath
	     * @param {Function} handler
	     */
	
	    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
	      var _this2 = this;
	
	      this._guardRecognizer.add([{
	        path: path,
	        handler: function handler(match, query) {
	          var realPath = mapParams(mappedPath, match.params, query);
	          _handler.call(_this2, realPath);
	        }
	      }]);
	    };
	
	    /**
	     * Check if a path matches any redirect records.
	     *
	     * @param {String} path
	     * @return {Boolean} - if true, will skip normal match.
	     */
	
	    Router.prototype._checkGuard = function _checkGuard(path) {
	      var matched = this._guardRecognizer.recognize(path, true);
	      if (matched) {
	        matched[0].handler(matched[0], matched.queryParams);
	        return true;
	      } else if (this._notFoundRedirect) {
	        matched = this._recognizer.recognize(path);
	        if (!matched) {
	          this.replace(this._notFoundRedirect);
	          return true;
	        }
	      }
	    };
	
	    /**
	     * Match a URL path and set the route context on vm,
	     * triggering view updates.
	     *
	     * @param {String} path
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */
	
	    Router.prototype._match = function _match(path, state, anchor) {
	      var _this3 = this;
	
	      if (this._checkGuard(path)) {
	        return;
	      }
	
	      var currentRoute = this._currentRoute;
	      var currentTransition = this._currentTransition;
	
	      if (currentTransition) {
	        if (currentTransition.to.path === path) {
	          // do nothing if we have an active transition going to the same path
	          return;
	        } else if (currentRoute.path === path) {
	          // We are going to the same path, but we also have an ongoing but
	          // not-yet-validated transition. Abort that transition and reset to
	          // prev transition.
	          currentTransition.aborted = true;
	          this._currentTransition = this._prevTransition;
	          return;
	        } else {
	          // going to a totally different path. abort ongoing transition.
	          currentTransition.aborted = true;
	        }
	      }
	
	      // construct new route and transition context
	      var route = new Route(path, this);
	      var transition = new RouteTransition(this, route, currentRoute);
	
	      // current transition is updated right now.
	      // however, current route will only be updated after the transition has
	      // been validated.
	      this._prevTransition = currentTransition;
	      this._currentTransition = transition;
	
	      if (!this.app) {
	        (function () {
	          // initial render
	          var router = _this3;
	          _this3.app = new _this3._appConstructor({
	            el: _this3._appContainer,
	            created: function created() {
	              this.$router = router;
	            },
	            _meta: {
	              $route: route
	            }
	          });
	        })();
	      }
	
	      // check global before hook
	      var beforeHooks = this._beforeEachHooks;
	      var startTransition = function startTransition() {
	        transition.start(function () {
	          _this3._postTransition(route, state, anchor);
	        });
	      };
	
	      if (beforeHooks.length) {
	        transition.runQueue(beforeHooks, function (hook, _, next) {
	          if (transition === _this3._currentTransition) {
	            transition.callHook(hook, null, next, {
	              expectBoolean: true
	            });
	          }
	        }, startTransition);
	      } else {
	        startTransition();
	      }
	
	      if (!this._rendered && this._startCb) {
	        this._startCb.call(null);
	      }
	
	      // HACK:
	      // set rendered to true after the transition start, so
	      // that components that are acitvated synchronously know
	      // whether it is the initial render.
	      this._rendered = true;
	    };
	
	    /**
	     * Set current to the new transition.
	     * This is called by the transition object when the
	     * validation of a route has succeeded.
	     *
	     * @param {Transition} transition
	     */
	
	    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
	      // set current route
	      var route = this._currentRoute = transition.to;
	      // update route context for all children
	      if (this.app.$route !== route) {
	        this.app.$route = route;
	        this._children.forEach(function (child) {
	          child.$route = route;
	        });
	      }
	      // call global after hook
	      if (this._afterEachHooks.length) {
	        this._afterEachHooks.forEach(function (hook) {
	          return hook.call(null, {
	            to: transition.to,
	            from: transition.from
	          });
	        });
	      }
	      this._currentTransition.done = true;
	    };
	
	    /**
	     * Handle stuff after the transition.
	     *
	     * @param {Route} route
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */
	
	    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
	      // handle scroll positions
	      // saved scroll positions take priority
	      // then we check if the path has an anchor
	      var pos = state && state.pos;
	      if (pos && this._saveScrollPosition) {
	        Vue.nextTick(function () {
	          window.scrollTo(pos.x, pos.y);
	        });
	      } else if (anchor) {
	        Vue.nextTick(function () {
	          var el = document.getElementById(anchor.slice(1));
	          if (el) {
	            window.scrollTo(window.scrollX, el.offsetTop);
	          }
	        });
	      }
	    };
	
	    return Router;
	  })();
	
	  function guardComponent(path, handler) {
	    var comp = handler.component;
	    if (Vue.util.isPlainObject(comp)) {
	      comp = handler.component = Vue.extend(comp);
	    }
	    /* istanbul ignore if */
	    if (typeof comp !== 'function') {
	      handler.component = null;
	      warn$1('invalid component for route "' + path + '".');
	    }
	  }
	
	  /* Installation */
	
	  Router.installed = false;
	
	  /**
	   * Installation interface.
	   * Install the necessary directives.
	   */
	
	  Router.install = function (externalVue) {
	    /* istanbul ignore if */
	    if (Router.installed) {
	      warn$1('already installed.');
	      return;
	    }
	    Vue = externalVue;
	    applyOverride(Vue);
	    View(Vue);
	    Link(Vue);
	    exports$1.Vue = Vue;
	    Router.installed = true;
	  };
	
	  // auto install
	  /* istanbul ignore if */
	  if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(Router);
	  }
	
	  return Router;
	
	}));

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var tpl = __webpack_require__(48);
	var App = Vue.extend({
	    template: tpl
	});
	
	module.exports = App;

/***/ },
/* 48 */
/***/ function(module, exports) {

	var tpl;
	
	tpl = '<div class="benmu-flex">\n    <header class="yo-header yo-header-weChat">\n        北京通·京医通官方微信服务平台\n    </header>\n    <router-view transition="fade" transition-mode="out-in"></router-view>\n</div>';
	
	module.exports = tpl;


/***/ },
/* 49 */,
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/* 使用方法
	 * **********常规使用(组件自动注册全局)************
	 * <alert :alert.sync="alert"></alert>
	 *...
	 * data:{
	 *      alert:{},
	 * }
	 *...
	 *(methods方法中)
	 * this.alert = {
	 *     type: 'tips',(必须)
	 *     content: resData.msg,
	 * }
	 *
	 * *********自行定制alert(手动注册)**************
	 * var RecommendNoalert = Vue.extend({
	 *     template: Tpl.alert,
	 *     replace: false,
	 *     methods: {
	 *         cancelCallback: function(){
	 *             this.$destroy()
	 *             window.globalEvent.trigger('showAlert',[{
	 *                 show: false
	 *             }])
	 *         }
	 *     }
	 * })
	 * var recommendNoalert = new RecommendNoalert({
	 *     el: '.js-alert-content',
	 *     data: {
	 *
	 *     }
	 * })
	 * this.alert = {
	 *     show: true,
	 *     type: 'custom'
	 * };
	 */
	
	var assign = __webpack_require__(51),
	    IScroll = __webpack_require__(1),
	    Tpl = __webpack_require__(102);
	
	var DEFAULTALERTDATA = {
	    //提示默认选项
	    tips: {
	        title: '',
	        titleClass: 'hor-center',
	        content: '',
	        contentClass: 'hor-center',
	        show: true,
	        buttonName: '确定'
	    },
	    rechargeTips: {
	        title: '',
	        titleClass: 'hor-center',
	        content: '',
	        contentClass: 'hor-center',
	        show: true,
	        button1Name: '取消',
	        button2Name: '确定'
	    },
	
	    //确认弹出默认选项
	    confirm: {
	        title: '',
	        titleClass: 'hor-center',
	        content: '',
	        contentClass: 'hor-center',
	        show: true,
	        button1Name: '取消',
	        button2Name: '确定'
	    },
	    //确认弹出默认选项
	    payTips: {
	        title: '',
	        titleClass: 'hor-center',
	        content: '',
	        contentClass: 'hor-center',
	        show: true,
	        button1Name: '取消',
	        button2Name: '确定'
	    },
	    //选择弹出层默认选项
	    selector: {
	        defaultStyle: {
	            paddingTop: 0
	        },
	        title: '',
	        titleClass: 'hor-center',
	        content: '',
	        contentClass: 'hor-center',
	        show: true,
	        options: ''
	    },
	    //输入弹出层默认选项
	    input: {
	        inputType: 'text',
	        title: '',
	        titleClass: 'hor-center',
	        content: '',
	        contentClass: 'hor-center',
	        show: true,
	        inputVal: '',
	        button1Name: '取消',
	        button2Name: '确定'
	    },
	    //用户自定义弹出默认选项
	    loading: {
	        content: '',
	        show: true
	    },
	    custom: {
	        show: true
	    }
	};
	
	var Alert = Vue.extend({
	    template: Tpl,
	    data: function data() {
	        return {
	            opts: {}
	        };
	    },
	    props: {
	        alert: {
	            twoway: true
	        }
	    },
	    watch: {
	        alert: function alert(newVal) {
	            //更新纯数据
	            this.opts = assign({}, DEFAULTALERTDATA[newVal.type], newVal);
	
	            if (newVal.type === 'payTips') {
	                this.$nextTick(function () {
	                    this.iscroll = new IScroll('#pay-tips-scroll', {
	                        preventDefault: false
	                    });
	                });
	            }
	
	            this.iscroll && this.iscroll.refresh();
	
	            // if (this.opts.type == 'alert') {
	            //     var xhr = new XMLHttpRequest();
	            //     xhr.readyState == 4?this.opts.show = false: '';
	            // }
	        }
	    },
	    methods: {
	        cancelCallback: function cancelCallback() {
	            this.opts.cancelCallback && this.opts.cancelCallback();
	            this.opts.show = false;
	        },
	        confirmCallback: function confirmCallback() {
	            this.opts.confirmCallback && this.opts.confirmCallback();
	            this.opts.show = false;
	        }
	    }
	});
	
	Vue.component('alert', Alert);

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(52),
	    copyObject = __webpack_require__(70),
	    createAssigner = __webpack_require__(71),
	    isArrayLike = __webpack_require__(81),
	    isPrototype = __webpack_require__(84),
	    keys = __webpack_require__(85);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Assigns own enumerable string keyed properties of source objects to the
	 * destination object. Source objects are applied from left to right.
	 * Subsequent sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assignIn
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * function Bar() {
	 *   this.c = 3;
	 * }
	 *
	 * Foo.prototype.b = 2;
	 * Bar.prototype.d = 4;
	 *
	 * _.assign({ 'a': 0 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var assign = createAssigner(function(object, source) {
	  if (isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keys(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty.call(source, key)) {
	      assignValue(object, key, source[key]);
	    }
	  }
	});
	
	module.exports = assign;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(53),
	    eq = __webpack_require__(69);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}
	
	module.exports = assignValue;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(54);
	
	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}
	
	module.exports = baseAssignValue;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(55);
	
	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());
	
	module.exports = defineProperty;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(56),
	    getValue = __webpack_require__(68);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(57),
	    isMasked = __webpack_require__(65),
	    isObject = __webpack_require__(64),
	    toSource = __webpack_require__(67);
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	module.exports = baseIsNative;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(58),
	    isObject = __webpack_require__(64);
	
	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(59),
	    getRawTag = __webpack_require__(62),
	    objectToString = __webpack_require__(63);
	
	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	module.exports = baseGetTag;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(60);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(61);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ },
/* 61 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(59);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	module.exports = getRawTag;


/***/ },
/* 63 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ },
/* 64 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(66);
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	module.exports = isMasked;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(60);
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	module.exports = coreJsData;


/***/ },
/* 67 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	module.exports = toSource;


/***/ },
/* 68 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	module.exports = getValue;


/***/ },
/* 69 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	module.exports = eq;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(52),
	    baseAssignValue = __webpack_require__(53);
	
	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	
	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;
	
	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}
	
	module.exports = copyObject;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(72),
	    isIterateeCall = __webpack_require__(80);
	
	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;
	
	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;
	
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	module.exports = createAssigner;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(73),
	    overRest = __webpack_require__(74),
	    setToString = __webpack_require__(76);
	
	/**
	 * The base implementation of `_.rest` which doesn'registerbase validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}
	
	module.exports = baseRest;


/***/ },
/* 73 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(75);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);
	
	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}
	
	module.exports = overRest;


/***/ },
/* 75 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}
	
	module.exports = apply;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var baseSetToString = __webpack_require__(77),
	    shortOut = __webpack_require__(79);
	
	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);
	
	module.exports = setToString;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var constant = __webpack_require__(78),
	    defineProperty = __webpack_require__(54),
	    identity = __webpack_require__(73);
	
	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};
	
	module.exports = baseSetToString;


/***/ },
/* 78 */
/***/ function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}
	
	module.exports = constant;


/***/ },
/* 79 */
/***/ function(module, exports) {

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;
	
	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;
	
	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);
	
	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}
	
	module.exports = shortOut;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(69),
	    isArrayLike = __webpack_require__(81),
	    isIndex = __webpack_require__(83),
	    isObject = __webpack_require__(64);
	
	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}
	
	module.exports = isIterateeCall;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(57),
	    isLength = __webpack_require__(82);
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	module.exports = isArrayLike;


/***/ },
/* 82 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 83 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}
	
	module.exports = isIndex;


/***/ },
/* 84 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	module.exports = isPrototype;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(86),
	    baseKeys = __webpack_require__(99),
	    isArrayLike = __webpack_require__(81);
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	module.exports = keys;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(87),
	    isArguments = __webpack_require__(88),
	    isArray = __webpack_require__(91),
	    isBuffer = __webpack_require__(92),
	    isIndex = __webpack_require__(83),
	    isTypedArray = __webpack_require__(95);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = arrayLikeKeys;


/***/ },
/* 87 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	module.exports = baseTimes;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(89),
	    isObjectLike = __webpack_require__(90);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};
	
	module.exports = isArguments;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(58),
	    isObjectLike = __webpack_require__(90);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}
	
	module.exports = baseIsArguments;


/***/ },
/* 90 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 91 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(60),
	    stubFalse = __webpack_require__(94);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	
	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;
	
	module.exports = isBuffer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(93)(module)))

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 94 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = stubFalse;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(96),
	    baseUnary = __webpack_require__(97),
	    nodeUtil = __webpack_require__(98);
	
	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	module.exports = isTypedArray;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(58),
	    isLength = __webpack_require__(82),
	    isObjectLike = __webpack_require__(90);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;
	
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}
	
	module.exports = baseIsTypedArray;


/***/ },
/* 97 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	module.exports = baseUnary;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(61);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());
	
	module.exports = nodeUtil;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(93)(module)))

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(84),
	    nativeKeys = __webpack_require__(100);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keys` which doesn'registerbase treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeys;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(101);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;


/***/ },
/* 101 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ },
/* 102 */
/***/ function(module, exports) {

	var CONFIRM, CUSTOM, INPUT, LOADING, MAIN, PAYTIPS, RECHARGETIPS, SELECTOR, TIPS;
	
	MAIN = '<div v-show="opts.show && (opts.type == \'tips\' || opts.type == \'confirm\' || opts.type == \'selector\' || opts.type == \'input\' || opts.type == \'loading\' || opts.type == \'payTips\' || opts.type == \'rechargeTips\' )" >\n    <div class="yo-mask">\n        LOADING\n        INPUT\n        TIPS\n        PAYTIPS\n        CONFIRM\n        SELECTOR\n        CUSTOM\n        RECHARGETIPS\n    </div>\n</div>';
	
	
	/*loading页模板 */
	
	LOADING = '<div v-if="opts.type == \'loading\'" class="yo-dialog yo-dialog-bm yo-dialog-bd-center" :style="opts.title != \'\'||opts.content != \'\'?\'\':opts.defaultStyle">\n    <div class="hd">\n        <h2 class="title {{opts.titleClass}}" v-show="opts.title!==\'\'" v-text="opts.title"></h2>\n    </div>\n     <div class="loading_tc">\n        <div class="bm_loadIcon"><span></span><span></span><span></span><span></span><span></span>\n        </div>\n        <p class="bm_loadText">{{opts.content}}</p>\n    </div>\n</div>';
	
	
	/*输入框弹窗模板 */
	
	INPUT = '<div v-if="opts.type == \'input\'" class="yo-dialog yo-dialog-bm yo-dialog-bd-center" :style="opts.title != \'\'||opts.content != \'\'?\'\':opts.defaultStyle">\n    <div class="hd">\n        <h2 class="title {{opts.titleClass}}" v-show="opts.title!==\'\'" v-text="opts.title"></h2>\n    </div>\n    <div class="bd {{opts.contentClass}}">{{{ opts.content }}}\n        <div class="yz-con">\n            <div class="yz-con-box">\n                <input type="{{opts.inputType}}" placeholder="请填写登录密码" v-model="opts.inputVal" autofocus="true">\n                <a  @click="opts.inputVal=\'\'" class="tel-del tel-del-yzm" ><i class="ff-icon ff-del" ></i></a>\n            </div>\n            <span>{{opts.tip}}</span>\n        </div>\n    </div>\n    <footer class="ft">\n        <button class="yo-btn yo-btn-dialog yo-btn-l" @click.prevent="cancelCallback">{{opts.button1Name}}</button>\n        <button class="yo-btn yo-btn-dialog yo-btn-l" @click.prevent="confirmCallback">{{opts.button2Name}}\n        </button>\n    </footer>\n</div>';
	
	
	/*单选弹窗模板 */
	
	TIPS = '<div  v-if="opts.type == \'tips\'" class="yo-dialog yo-dialog-bm yo-dialog-bd-center" :style="opts.title != \'\'||opts.content != \'\'?\'\':opts.defaultStyle">\n    <div class="hd">\n        <h2 class="title {{opts.titleClass}}" v-show="opts.title!==\'\'" v-text="opts.title"></h2>\n    </div>\n    <div class="bd" v-if="opts.type == \'tips\'&&opts.content!=\'\'">\n        <p>{{{ opts.content }}}</p>\n    </div>\n    <footer class="ft">\n        <button class="yo-btn yo-btn-dialog yo-btn-l" @click.prevent="cancelCallback">{{opts.buttonName}}</button>\n    </footer>\n</div>';
	
	
	/*确认充值模板 */
	
	RECHARGETIPS = '<div  v-if="opts.type == \'rechargeTips\'" class="yo-dialog yo-dialog-bm" :style="opts.title != \'\'||opts.content != \'\'?\'\':opts.defaultStyle">\n    <div class="hd">\n        <h2 class="title {{opts.titleClass}}" v-show="opts.title!==\'\'" v-text="opts.title"></h2>\n    </div>\n    <div class="bd left-padd" v-if="opts.content!=\'\'">\n        {{{ opts.content }}}\n    </div>\n    <footer class="ft">\n        <button class="yo-btn yo-btn-dialog yo-btn-l" @click.prevent="cancelCallback">{{opts.button1Name}}</button>\n        <button class="yo-btn yo-btn-dialog yo-btn-l" @click.prevent="confirmCallback">{{opts.button2Name}}</button>\n    </footer>\n</div>';
	
	
	/*选择弹窗模板 */
	
	SELECTOR = '<div v-if="opts.type == \'selector\'" class="yo-dialog yo-dialog-bm yo-dialog-bd-center" :style="opts.title != \'\'||opts.content != \'\'?\'\':opts.defaultStyle">\n    <div class="hd">\n        <h2 class="title {{opts.titleClass}}" v-show="opts.title!==\'\'" v-text="opts.title"></h2>\n    </div>\n     <footer class="ft" v-for="option in opts.options">\n        <button class="yo-btn yo-btn-dialog yo-btn-l" @click.prevent="option.callback">{{option.name}}</button>\n    </footer>\n</div>';
	
	
	/*双选弹窗模板 */
	
	CONFIRM = '<div v-if="opts.type == \'confirm\'" class="yo-dialog yo-dialog-bm yo-dialog-bd-center" :style="opts.title != \'\'||opts.content != \'\'?\'\':opts.defaultStyle">\n    <div class="hd">\n        <h2 class="title {{opts.titleClass}}" v-show="opts.title!==\'\'" v-text="opts.title"></h2>\n    </div>\n    <div class="bd" v-show="opts.content!=\'\'">\n        <p>\n            {{{opts.content}}}\n        </p>\n    </div>\n    <footer class="ft">\n        <button class="yo-btn yo-btn-dialog yo-btn-l" @click.prevent="cancelCallback">{{opts.button1Name}}</button>\n        <button class="yo-btn yo-btn-dialog yo-btn-l" @click.prevent="confirmCallback">{{opts.button2Name}}</button>\n    </footer>\n</div>';
	
	
	/*双选弹窗模板 */
	
	PAYTIPS = '<div v-if="opts.type == \'payTips\'" class="yo-dialog yo-dialog-bm" :style="opts.title != \'\'||opts.content != \'\'?\'\':opts.defaultStyle">\n    <div class="bd" v-show="opts.content!=\'\'"  id="pay-tips-scroll" style="height: 200px; overflow: hidden;">\n        <p v-html="opts.content"></p>\n    </div>\n    <footer class="ft">\n        <button class="yo-btn yo-btn-dialog yo-btn-l" @click.prevent="cancelCallback">{{opts.button1Name}}</button>\n        <button class="yo-btn yo-btn-dialog yo-btn-l" @click.prevent="confirmCallback">{{opts.button2Name}}</button>\n    </footer>\n</div>';
	
	
	/*自定义模板 */
	
	CUSTOM = '<div v-if="opts.type === \'custom\'" class="js-alert-content"></div>';
	
	module.exports = MAIN.replace('SELECTOR', SELECTOR).replace('INPUT', INPUT).replace('LOADING', LOADING).replace('TIPS', TIPS).replace('CONFIRM', CONFIRM).replace('PAYTIPS', PAYTIPS).replace('CUSTOM', CUSTOM).replace('RECHARGETIPS', RECHARGETIPS);


/***/ },
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */
/***/ function(module, exports) {

	'use strict';
	
	var urlMap = {
	    wechatIndex: {
	        url: '/register/index.html#!/'
	    },
	    // 选择医院
	    selectHospital: {
	        url: '/register/index.html'
	    },
	    // 挂号攻略
	    registerStrategy: {
	        url: '/register/registerStrategy.html'
	    },
	    // 选择科室
	    hosRaiders: {
	        url: '/register/hosRaiders.html'
	    },
	    // 选择号源
	    registerResource: {
	        url: '/register/registerResource.html'
	    },
	    // 挂号成功页
	    registerSuccess: {
	        url: '/register/registerSuccess.html'
	    },
	    // 选择就诊人
	    selectCard: {
	        url: '/register/selectCard.html'
	    },
	    newSelectCard: {
	        url: '/register/newSelectCard.html'
	    },
	    // 卡记录（挂号记录(queryType＝1)、缴费记录(queryType＝2)、待缴费记录(queryType＝0)）
	    cardRecord: {
	        url: '/register/cardRecord.html'
	    },
	
	    // 挂号详情、缴费详情、待缴费详情
	    medicalCardPay: {
	        url: '/register/medicalCardPay.html'
	    },
	    // 充值
	    recharge: {
	        url: '/recharge/index.html'
	    },
	    // 充值成功
	    rechargeSuccess: {
	        url: '/recharge/success.html'
	    },
	    // 充值列表
	    rechargeNotes: {
	        url: '/recharge/notes.html'
	    },
	    // 充值列表
	    rechargeDetail: {
	        url: '/recharge/detail.html'
	    },
	    // 登录
	    userLogin: {
	        url: '/account/userLogin.html'
	    },
	    // 忘记密码（手机号验证）
	    forgetPassword: {
	        url: '/account/forgetPassword.html'
	    },
	    // 重置密码
	    resetPassword: {
	        url: '/account/resetPassword.html'
	    },
	    // 我的账户
	    myAccount: {
	        url: '/account/myAccount.html'
	    },
	    // 账户管理
	    accountManage: {
	        url: '/account/accountManage.html'
	    },
	    // 卡信息
	    cardDetail: {
	        url: '/account/cardDetail.html'
	    },
	    // 卡资料
	    cardInfo: {
	        url: '/account/cardInfo.html'
	    },
	    // 交易记录
	    transRecord: {
	        url: '/account/transRecord.html'
	    },
	    // 修改昵称
	    modUsername: {
	        url: '/account/modUsername.html'
	    },
	    // 修改手机号码
	    changeTel: {
	        url: '/account/changeTel.html'
	    },
	    // 新手机号(校验)
	    cellPhone: {
	        url: '/account/cellPhone.html'
	    },
	    // 修改密码
	    modPassword: {
	        url: '/account/modPassword.html'
	    },
	    // 绑卡（选择绑卡／加卡类型）
	    bindNewCard: {
	        url: '/account/bindNewCard.html'
	    },
	    // 绑卡 （ 京医通卡、社保卡）
	    bindCard: {
	        url: '/account/bindCard.html'
	    },
	    // 建卡（临时卡）
	    tempCard: {
	        url: '/account/tempCard.html'
	    },
	    // 完善资料（预约社保卡）
	    perfectInfo: {
	        url: '/account/perfectInfo.html'
	    },
	    // 服务协议
	    serviceAgreement: {
	        url: '/account/serviceAgreement.html'
	    },
	    // 帮助中心
	    helpCenter: {
	        url: '/helpCenter/helpCenter.html'
	    },
	    // 自主服务专区
	    appealSelfService: {
	        url: '/appeal/selfService.html'
	    },
	    appealCardConfirm: {
	        url: '/appeal/cardConfirm.html'
	    },
	    // 申诉：退号退费
	    appealOrderList: {
	        url: '/appeal/orderList.html'
	    },
	    appealDetail: {
	        url: '/appeal/detail.html'
	    },
	    appealRecords: {
	        url: '/appeal/records.html'
	    },
	    // 提交申诉
	    submitAppeal: {
	        url: '/appeal/submit.html'
	    },
	    // 提交申诉成功
	    submitAppealSuccess: {
	        url: '/appeal/success.html'
	    }
	};
	
	// var PREFIXPATH = location.hostname != 'wechat.benmu-health.com' ? '/wechat/dist/html' : '/wechat';
	var PREFIXPATH = '/wechat';
	
	module.exports = {
	    goto: function goto(url) {
	        window.location.href = url;
	    },
	    //TODO 此处函数名最好为setParams与getParams相对应
	    getUrl: function getUrl(key, param) {
	        var _param = '';
	        if (param && Object.keys(param).length !== 0) {
	            var flag = false;
	            for (var i in param) {
	                if (flag) {
	                    _param += '&';
	                }
	                _param += i + '=' + encodeURIComponent(param[i]);
	                flag = true;
	            }
	        }
	
	        var url = PREFIXPATH + urlMap[key].url;
	
	        if (_param) {
	            url += '?' + _param;
	        }
	        return url;
	    },
	
	    getParams: function getParams(url) {
	        var query = {},
	            _url = url || window.location.href,
	            _urlArr = _url.split('?');
	        if (_urlArr.length > 1) {
	            _urlArr[1].split('&').map(function (item) {
	                var _item = item.split('=');
	                query[_item[0]] = decodeURIComponent(_item[1]);
	            });
	        }
	        return query;
	    }
	};

/***/ },
/* 107 */,
/* 108 */,
/* 109 */
/***/ function(module, exports) {

	'use strict';
	
	function iScrollClick() {
	    if (/iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent)) return false;
	    if (/Chrome/i.test(navigator.userAgent)) return (/Android/i.test(navigator.userAgent)
	    );
	    if (/Silk/i.test(navigator.userAgent)) return false;
	    if (/Android/i.test(navigator.userAgent)) {
	        var s = navigator.userAgent.substr(navigator.userAgent.indexOf('Android') + 8, 3);
	        return parseFloat(s[0] + s[3]) < 44 ? false : true;
	    }
	}
	
	module.exports = iScrollClick;

/***/ },
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var monitor = __webpack_require__(4);
	var axios = __webpack_require__(5);
	var MONITORURL = '/proxy/receive';
	axios.interceptors.request.use(function (config) {
	    var d1 = +new Date();
	    config.timeout = 20000;
	    config._t1 = d1;
	    if (config.method == 'get') {
	        if (!config.params) {
	            config.params = {};
	        }
	        config.params._ = d1;
	    }
	    // Do something before request is sent
	    return config;
	}, function (error) {
	    // Do something with request error
	    return Promise.reject(error);
	});
	
	axios.interceptors.response.use(function (response) {
	    var request_url = response.config.url;
	    if (request_url != MONITORURL) {
	        var d1 = response.config._t1;
	        var d2 = +new Date();
	        monitor.timer('API_TIME', '接口时间', d2 - d1, request_url);
	    }
	    // Do something with response data
	    var resCode = response.data.resCode;
	    if (resCode == 101) {
	        var url = encodeURIComponent(location.pathname.slice(1) + location.search + location.hash);
	        location.href = '/mobile/wx/accredit/go?old=' + url + '&new=' + url;
	    } else if (resCode == 102) {
	        location.href = '/wechat/account/userLogin.html?ref=' + encodeURIComponent(location.href);
	    }
	    return response;
	}, function (error) {
	    var url = error && error.config && error.config.url;
	    if (error.message !== 'CANCEL' && url != MONITORURL) {
	        var request = error.config;
	        var d2 = +new Date();
	        var t;
	        if (typeof request._t1 == 'number') {
	            t = d2 - request._t1;
	        }
	        if (error.response && error.response.status == 404) {
	            monitor.timer('API_FAIL', '接口失败', t, request.url);
	        } else {
	            monitor.timer('API_TIMEOUT', '接口超时', t, request.url);
	        }
	    }
	    // Do something with response error
	    return Promise.reject(error);
	});

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(130);
	__webpack_require__(50);
	var globalContext = __webpack_require__(132);
	var IScroll = __webpack_require__(1);
	var imgMonitor = __webpack_require__(133);
	var monitor = __webpack_require__(4);
	// var Url = require('Utils/url');
	var tpl = __webpack_require__(134);
	
	var SelectHospital = Vue.component('select-hospital', {
	    template: tpl,
	    data: function data() {
	        return {
	            isCol: false, // 一列两列标识
	            hospitalCount: 0,
	            infirmaryCount: 0,
	            hospitals: '',
	            isApplyHos: false,
	            displayBootimg: localStorage.getItem('displayBootimg'),
	            alert: {},
	            loading: true,
	            searchKeyword: '',
	            showSearch: false, // 是否显示搜索项
	            historyHos: globalContext.get('historySearch') || [] // 搜索历史记录
	        };
	    },
	    methods: {
	        isdisplayBootimg: function isdisplayBootimg() {
	            localStorage.setItem('displayBootimg', true);
	            this.displayBootimg = localStorage.getItem('displayBootimg');
	        },
	        goToHos: function goToHos(isOpen, hosCode, text) {
	            var params = this.getParams(isOpen, hosCode);
	            if (params) {
	                this.$router.go({
	                    name: 'selectDept',
	                    query: params
	                });
	            } else {
	                this.alert = {
	                    type: 'tips',
	                    content: text + '，敬请期待...'
	                };
	            }
	        },
	        goToRaiders: function goToRaiders() {
	            // 挂号攻略
	            this.$router.go({
	                name: 'registerStrategy'
	            });
	        },
	        getParams: function getParams(isOpen, hosCode) {
	            var params;
	            // 适用医院的
	            if (this.isApplyHos) {
	                params = {
	                    hosCode: hosCode,
	                    currentTab: 2,
	                    isCanOrder: isOpen ? '1' : '0'
	                };
	            } else {
	                if (isOpen) {
	                    params = {
	                        hosCode: hosCode
	                    };
	                }
	            }
	            return params;
	        },
	        filterImgNull: function filterImgNull() {
	            this.hospitals.forEach(function (item) {
	                if (!item.smallLogo) {
	                    monitor.count('IMG_ERROR', '图片失败', item.hosCode + '-' + item.hosName);
	                }
	            });
	        },
	        clickSearchIcon: function clickSearchIcon() {
	            var self = this;
	            this.showSearch = true;
	            this.$nextTick(function () {
	                self.$els.searchinput.focus();
	            });
	        },
	        goToHosFromSearch: function goToHosFromSearch(item) {
	            var index;
	            if (this.historyHos.length == 0) {
	                this.historyHos.push(item);
	            } else {
	                for (var i = 0, l = this.historyHos.length; i < l; i++) {
	                    var data = this.historyHos[i];
	                    if (data.hosCode == item.hosCode) {
	                        index = i;
	                        break;
	                    }
	                }
	                if (typeof index == 'number') {
	                    this.historyHos.splice(index, 1);
	                }
	                this.historyHos.unshift(item);
	                if (this.historyHos.length > 3) {
	                    this.historyHos.pop();
	                }
	            }
	            globalContext.set('historySearch', JSON.parse(JSON.stringify(this.historyHos)));
	
	            // 统计
	            this.searchStatistics(item.hosCode, item.hosName);
	            this.goToHos(item.open, item.hosCode, item.openView);
	        },
	        goToHosFromHistory: function goToHosFromHistory(item) {
	            // 统计
	            this.searchStatistics(item.hosCode, item.hosName);
	            this.goToHos(item.open, item.hosCode, item.openView);
	        },
	        clearHistoryHos: function clearHistoryHos() {
	            this.historyHos = [];
	            globalContext.set('historySearch', '');
	        },
	        searchStatistics: function searchStatistics(hosCode, hosName) {
	            var searchContent = this.searchKeyword,
	                searchContentLen = this.searchKeyword && this.searchKeyword.length || 0;
	            this.$http.get('/bjmc/api/helpCenter/saveHelpCenterPvInfo', {
	                params: {
	                    titleCode: searchContentLen, // 输入字数
	                    titleName: searchContent, // 输入内容
	                    categroyCode: 'searchHospital', // 页面位置code
	                    categroyName: '搜索医院', // 页面位置名称
	                    position: hosCode, // 统计发出位置code
	                    positionName: hosName // 统计发出位置名称
	                }
	            });
	        }
	    },
	    created: function created() {
	        var self = this;
	        this.$http.get('/mobile/wx/product/hospitals').then(function (rsData) {
	            self.loading = false;
	            var data = rsData.data;
	            if (data.resCode === 0) {
	                var hosInfo = data.data;
	                self.hospitalCount = hosInfo.hospitalCount;
	                self.infirmaryCount = hosInfo.infirmaryCount;
	                self.hospitals = hosInfo.hospitals;
	                self.filterImgNull();
	            } else if (data.resCode != 101 && data.resCode != 102) {
	                self.alert = {
	                    type: 'tips',
	                    content: data.msg
	                };
	            }
	        });
	    },
	    watch: {
	        hospitals: function hospitals() {
	            this.$nextTick(function () {
	                imgMonitor();
	                this.scroll && this.scroll.refresh();
	            });
	        },
	        isCol: function isCol() {
	            this.scroll && this.scroll.refresh();
	        },
	        searchKeyword: function searchKeyword() {
	            if (this.searchKeyword) {
	                this.$nextTick(function () {
	                    this.hospScroll && this.hospScroll.refresh();
	                });
	            }
	        },
	        showSearch: function showSearch() {
	            if (!this.showSearch) {
	                this.searchKeyword = '';
	                this.$els.searchinput.blur();
	            }
	        }
	    },
	    ready: function ready() {
	        var self = this;
	        //清空选择科室记录
	        sessionStorage.removeItem('BM_DEPT_INFO');
	        wx && wx.hideOptionMenu();
	        setTimeout(function () {
	            self.scroll = new IScroll('#js-scroll', {
	                preventDefault: false
	            });
	            self.hospScroll = new IScroll('#js-hosList-scroll', {
	                preventDefault: false,
	                bounce: false
	            });
	        }, 300);
	
	        // 防止用户中途更改字体大小
	        this.iscrollTimer = setInterval(function () {
	            self.scroll && self.scroll.refresh();
	        }, 3000);
	        this.isApplyHos = this.$route.query.applyHos == '1';
	        if (this.isApplyHos) {
	            document.setTitle('适用医院');
	        } else {
	            document.setTitle('选择医院');
	        }
	
	        // 页面统计
	        beacon.sendClk({
	            arg_a: this.isApplyHos ? '适用医院' : '选择医院',
	            l: 'info',
	            h: 'WeChat',
	            m: window.PHONEMODEL.type,
	            arg_b: window.PHONEMODEL.model || '',
	            arg_c: window.PHONEMODEL.system || ''
	        });
	
	        this.$els.form.onsubmit = function () {
	            self.$els.searchinput.blur();
	            return false;
	        };
	    },
	
	    destroyed: function destroyed() {
	        this.iscrollTimer && clearInterval(this.iscrollTimer);
	    }
	});
	
	module.exports = SelectHospital;

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// loading用法
	// ******html中
	// <loading :loading.sync="loading"></loading>
	// ******js中
	// require('Components/loading');
	// data中设置loading:{}
	// 方法内直接 this.loading = true/false 来控制是否显示
	// 如果要定义内容则 this.loading = {content: 'xxxx', show: true/false}
	// css: {
	//     'top': '0px',
	//     'bottom': '0px'
	// }
	var assign = __webpack_require__(51),
	    Tpl = __webpack_require__(131);
	
	var DEFAULTDATA = {
	    content: '加载中，请稍后',
	    show: true,
	    css: {
	        top: '40px',
	        bottom: 0
	    }
	};
	
	var Loading = Vue.extend({
	    template: Tpl,
	    data: function data() {
	        return {
	            // oldoPts: {},
	            opts: {}
	        };
	    },
	    props: {
	        loading: {
	            twoway: true
	        }
	    },
	    watch: {
	        loading: function loading(newVal) {
	            // //更新老数据
	            // this.oldoPts = this.opts;
	            //更新新数据
	            if (typeof newVal === 'boolean') {
	                this.opts = assign({}, {
	                    content: '加载中，请稍后',
	                    show: newVal,
	                    css: {
	                        top: '40px',
	                        bottom: 0
	                    }
	                }, newVal);
	            } else {
	                this.opts = assign({}, DEFAULTDATA, newVal);
	            }
	        }
	    }
	    // methods: {
	
	    //     cancelCallback: function() {
	    //         this.opts.cancelCallback && this.opts.cancelCallback();
	    //         this.opts.show = false;
	    //     }
	    // },
	    // created: function() {
	    //     // 生成新配置并拷贝一份老配置
	    //     this.oldoPts = this.opts = this.loading ? _assignData(DEFAULTDATA, this.loading) : DEFAULTDATA;
	    // }
	
	});
	
	// 组件记忆功能
	// function _assignData(firObj, secondObj) {
	//     var target;
	//     //更新纯数据
	
	//     if (typeof secondObj === 'boolean') {
	//         // 如果传进来是boolean
	//         target = {
	//             show: secondObj
	//         };
	//         return _.assign({}, firObj, target);
	//     }
	
	//     target = _.assign({}, firObj, secondObj);
	//     if (secondObj.css && secondObj.css != '') {
	//         target.css = _.assign({}, firObj.css, secondObj.css);
	//     }
	//     return target;
	// }
	
	Vue.component('loading', Loading);

/***/ },
/* 131 */
/***/ function(module, exports) {

	var LOADING_CONTENT, MAIN, MASK_TPL;
	
	MAIN = '<div v-show="opts.show" :style="opts.css" style="position:absolute; left:0; right:0;" >\n    MASK_TPL\n    <div class="yo-dialog yo-dialog-bm">\n\n        LOADING_CONTENT\n    </div>\n</div>';
	
	MASK_TPL = '<div class="yo-mask" ></div>\n';
	
	LOADING_CONTENT = '<div class="loading_tc">\n   <div class="bm_loadIcon"><span></span><span></span><span></span><span></span><span></span>\n   </div>\n   <p class="bm_loadText">{{opts.content}}</p>\n</div>';
	
	module.exports = MAIN.replace('MASK_TPL', MASK_TPL).replace('LOADING_CONTENT', LOADING_CONTENT);


/***/ },
/* 132 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * [nameKey 命名空间]
	 * @type {String}
	 */
	var nameKey = 'wechat-';
	
	/**
	 * [_get 获取 localstroage 值]
	 * @author songqi
	 * @date   2016-07-06
	 * @param  {[String]}   key [key 值]
	 * @return {[All]}       [value 值]
	 */
	function _get(key) {
	    var data = JSON.parse(localStorage.getItem(nameKey + key));
	    return data && data.data;
	}
	
	/**
	 * [_set 存储 localstroage 值]
	 * @author songqi
	 * @date   2016-07-06
	 * @param  {[String]}   key   [key 值]
	 * @param  {[All]}   value [value 值]
	 */
	function _set(key, value) {
	    var data = {
	        data: value
	    };
	    try {
	        localStorage.setItem(nameKey + key, JSON.stringify(data));
	    } catch (e) {
	        // console.log(e);
	    }
	}
	
	/**
	 * [_remove 删除内存中的数据]
	 * @author songqi
	 * @date   2016-07-06
	 * @param  {[Object]}   keys [内存中的 key]
	 */
	function _remove(keys) {
	    localStorage.removeItem(nameKey + keys);
	}
	
	/**
	 * [_clear 清除所有的缓存数据]
	 * @author songqi
	 * @date   2016-07-06
	 */
	function _clear() {
	    localStorage.clear();
	}
	
	module.exports = {
	    get: _get,
	    set: _set,
	    clear: _clear,
	    remove: _remove
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var monitor = __webpack_require__(4);
	function startMonitor() {
	    var imgs = document.querySelectorAll('img');
	    for (var i = 0, l = imgs.length; i < l; i++) {
	
	        imgs[i].addEventListener('error', function () {
	            monitor.count('IMG_ERROR', '图片失败', this.src);
	        }, false);
	    }
	}
	
	module.exports = startMonitor;

/***/ },
/* 134 */
/***/ function(module, exports) {

	var tpl;
	
	tpl = '<div id="js-scroll" style="position: absolute; left:0; right:0; top: 40px; bottom:0; overflow: hidden;">\n    <div class="flex"  v-show=\'!showSearch\'>\n        <section class="yo-list yo-list-change">\n            <div class="item">\n                 <div class="flex">共<span class="hos-num">{{infirmaryCount}}</span>家医院（{{hospitalCount}}个院区）</div>\n                 <div class="search-icon" @click=\'clickSearchIcon\'>\n                    <i class="ff-icon ff-search"></i>\n                 </div>\n                 <div class="r-layout" :class="isCol ? \'\' : \'r-layout-col\'" @click="isCol=!isCol">\n                    <i class="ff-icon ff-layout-col"></i>\n                 </div>\n            </div>\n        </section>\n        <div class="yo-list" :class="isCol ? \'yo-list-col\' : \'yo-list-row\'">\n            <div v-for="item in hospitals" class="item">\n                <a @click="goToHos(item.open,item.hosCode,item.openView)" class="item-body" href="javascript:;">\n                    <div v-if="!item.open && !isApplyHos" class="hos-noOpen">{{ item.openView }}</div>\n                    <div class="mark">\n                        <img :src="item.smallLogo">\n                    </div>\n                    <div class="flex">\n                        <h2 class="title">{{ item.hosName }}</h2>\n                        <div class="detail">\n                            <i class="ff-icon ff-sjjd"></i>\n                            <span class="text-sjjd">{{ item.hosLevel }}</span>\n                            <i class="ff-icon ff-addr"></i>\n                            <span class="text-addr">{{ item.countyName }}</span>\n                        </div>\n                    </div>\n                    <i class="ff-icon ff-arrR"></i>\n                </a>\n            </div>\n        </div>\n    </div>\n\n    <div v-show=\'showSearch\'>\n        <section class="yo-suggest yo-suggest-search">\n            <div class="operate">\n                <form class="action" method="post" v-el:form action="#">\n                    <input v-el:searchinput type="text" class="input" placeholder="请输入医院名称" v-model="searchKeyword"/>\n                    <i class="ff-icon ff-del" v-show=\'searchKeyword\' @click=\'searchKeyword=""\'></i>\n                </form>\n                <span class="cancel" @click=\'showSearch=false\'>取消</span>\n            </div>\n        </section>\n        <div id="js-hosList-scroll" style="position: absolute; left:0; right:0; top: 50px; bottom:0; overflow: hidden; background: rgb(236, 236, 236);z-index:1;" v-show=\'searchKeyword\'>\n            <div class="yo-list yo-list-searchCon yo-list-clear">\n                <div class="item"  v-for="item in hospitals | filterBy searchKeyword in \'hosName\'" @click="goToHosFromSearch(item)">\n                    <span>{{item.hosName}}</span>\n                </div>\n            </div>\n            <div class="search-null">未搜索到相关医院</div>\n        </div>\n\n        <div v-show="historyHos.length && !searchKeyword">\n            <div class="wechat-tit">历史搜索</div>\n            <div class="yo-list yo-list-searchCon">\n                <div class="item" v-for="item in historyHos" @click="goToHosFromHistory(item)">\n                    <span>{{item.hosName}}</span>\n                </div>\n            </div>\n            <div class="clear-msg" @click=\'clearHistoryHos\'>清除全部历史记录</div>\n        </div>\n    </div>\n\n\n    <div class="bm_registerStart" @click="goToRaiders" v-show=\'!showSearch\'>\n        <a href="javascript:;">\n            <img src="//img.benmu-health.com/m-benmu-health/registrStrat.png">\n        </a>\n    </div>\n    <div class="yo-mask yo-mask-dark" v-if=\'!displayBootimg\' @click=\'isdisplayBootimg\'>\n        <span class="layout-guide"></span>\n    </div>\n    <alert :alert.sync="alert"></alert>\n    <loading :loading.sync="loading"></loading>\n</div>';
	
	module.exports = tpl;


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	* @Author: songqi
	* @Date:   2016-10-20
	* @Email:  songqi@benmu-health.com
	* @Last modified by:   songqi
	* @Last modified time: 2016-10-26
	*/
	
	__webpack_require__(50);
	__webpack_require__(130);
	var IScroll = __webpack_require__(1);
	var Tpl = __webpack_require__(136),
	    Model = __webpack_require__(137);
	// Url = require('Utils/url');
	
	var SelectDept = Vue.component('select-dept', {
	    template: Tpl,
	    CONSTDATA: {
	        constUrl: [], //九宫格跳转链接
	        iconClass: [] //九宫格开放状态
	    },
	    data: function data() {
	        return {
	            hosCode: '',
	            currentId: '',
	            currentTab: 1, // true 为挂号
	            firstDeps: '', //一级科室
	            currentDep: '', //当前科室
	            currentDepName: '', //当前科室名称
	            hosInfo: {}, //医院信息
	            labels: {}, //医院信息
	            alert: {}, //alert组件
	            loading: {}, //loading组件
	            pool: { //状态池
	                tab1: true, //tab1控制开关
	                tab2: true, //tab2控制开关
	                open1: false, //控制该医院是否开放
	                open2: false //控制该医院是否开放
	            }
	        };
	    },
	    init: function init() {
	        /**
	         * 实例换model层 里面主要存储常量，api方法的封装与格式化
	         * @type {model}
	         */
	        this.model = new Model(this);
	    },
	    computed: {
	        /**
	         * 处理一级科室对应依赖的二级科室，secondDep双绑
	         * @return {[Object]} 二级科室详情
	         */
	        secondDep: function secondDep() {
	            return this.currentDep && this.secondDeps[this.currentDep];
	        },
	        /**
	         * 控制暂未开通模块的显示
	         * @return {Boolean} 控制暂未开通模块的显示
	         */
	        open: function open() {
	            return this['pool']['open' + this.currentTab];
	        }
	    },
	    methods: {
	        /**
	         * 切换tab
	         */
	        changeTab: function changeTab(currentTab) {
	            if (currentTab != this.currentTab) {
	                this.currentTab = currentTab;
	            }
	            if (currentTab == 2) {
	                if (!this.nineGridScroll) {
	                    this.nineGridScroll = new IScroll('#js-nineGrid', {
	                        preventDefault: false
	                    });
	                }
	                this.nineGridScroll.refresh();
	            }
	        },
	        /**
	         * 跳转挂号页面
	         */
	        gotoReg: function gotoReg(secondDeptId, secondDepartCode, secondDepartName) {
	            var params = {
	                hosCode: this.hosCode,
	                hosName: this.hosInfo.name,
	                firstDeptId: this.currentId,
	                firstDeptCode: this.currentDep,
	                firstDeptName: this.currentDepName,
	                secondDeptId: secondDeptId,
	                secondDeptCode: secondDepartCode,
	                secondDeptName: secondDepartName
	            };
	            //科室信息存入session
	            sessionStorage.setItem('BM_DEPT_INFO', JSON.stringify({
	                firstDeptId: this.currentId,
	                firstDeptCode: this.currentDep,
	                firstDeptName: this.currentDepName
	            }));
	
	            this.$router.go({
	                name: 'selectResource',
	                query: params
	            });
	        },
	        /**
	         * 选择一级科室之后赋值相应参数
	         * @param  {String} id   一级科室id
	         * @param  {String} code 一级科室code
	         * @param  {String} name 一级科室名称
	         */
	        selectFirstDept: function selectFirstDept(id, code, name) {
	            this.currentId = id;
	            this.currentDep = code;
	            this.currentDepName = name;
	        }
	    },
	    ready: function ready() {
	        var self = this;
	        wx && wx.hideOptionMenu();
	        var urlParams = this.$route.query;
	        if (urlParams.currentTab == 2) {
	            document.setTitle('医院详情');
	        } else {
	            document.setTitle('选择科室');
	        }
	        this.loading = true;
	        setTimeout(function () {
	            self.firstDeptsScroll = new IScroll('#js-scroll-firstDepts', {
	                preventDefault: false
	            });
	            self.secondDepsScroll = new IScroll('#js-scroll-secondDeps', {
	                preventDefault: false
	            });
	        }, 300);
	
	        this.iscrollTimer = setInterval(function () {
	            self.firstDeptsScroll && self.firstDeptsScroll.refresh();
	            self.secondDepsScroll && self.secondDepsScroll.refresh();
	            self.nineGridScroll && self.nineGridScroll.refresh();
	        }, 3000);
	
	        // 页面统计
	        beacon.sendClk({
	            arg_a: '医院详情',
	            l: 'info',
	            h: 'WeChat',
	            m: window.PHONEMODEL.type,
	            arg_b: window.PHONEMODEL.model || '',
	            arg_c: window.PHONEMODEL.system || ''
	        });
	        /**
	         * 初始化状态池,并接收url参数
	         */
	
	        var isCanOrder = urlParams.isCanOrder,
	            isHaveStrategy = urlParams.isHaveStrategy;
	
	        this.hasDept = urlParams.hasDept; //适用医院字段 open close
	        this.hosCode = urlParams.hosCode;
	        this.pool.tab1 = isCanOrder == 0 ? false : true;
	        this.pool.tab2 = isHaveStrategy == 0 ? false : true;
	        this.currentTab = urlParams.currentTab || (this.pool.tab1 ? 1 : 2);
	        /**
	         * 获取所有科室
	         * @param  {[Object]} res)
	         */
	        this.model.getAlldepts({
	            hosCode: this.hosCode,
	            CHANNEL: 'wechat'
	        }).then(function (res) {
	            self.firstDeps = res.firstDeps || [];
	            self.secondDeps = res.secondDeps || {};
	            //先读取历史记录
	            var histroyCode = JSON.parse(sessionStorage.getItem('BM_DEPT_INFO')) || {};
	            self.currentDep = histroyCode.firstDeptCode || res.currentDep || '';
	            self.currentId = histroyCode.firstDeptId || res.currentId || null;
	            self.currentDepName = histroyCode.firstDeptName || res.currentDepName || '';
	            self.hosInfo = res.hosInfo || {};
	            self.labels = res.labels || [];
	
	            self.pool.open1 = _isEmpty(res.firstDeps) ? true : false;
	            self.pool.open2 = _isEmpty(res.labels) ? true : false;
	            self.loading = false;
	        });
	    },
	    watch: {
	        /**
	         * 监听一级科室变化并refresh iscroll
	         */
	        firstDeps: function firstDeps() {
	            this.$nextTick(function () {
	                this.firstDeptsScroll && this.firstDeptsScroll.refresh();
	            });
	        },
	        /**
	         * 监听二级科室变化并refresh iscroll
	         */
	        currentDep: function currentDep() {
	            this.$nextTick(function () {
	                this.secondDepsScroll && this.secondDepsScroll.refresh();
	            });
	        }
	    },
	
	    destroyed: function destroyed() {
	        this.iscrollTimer && clearInterval(this.iscrollTimer);
	    }
	});
	
	function _isEmpty(value) {
	    return Array.isArray(value) && value.length === 0 || Object.prototype.isPrototypeOf(value) && Object.keys(value).length === 0;
	}
	
	module.exports = SelectDept;

/***/ },
/* 136 */
/***/ function(module, exports) {

	var HEADER_TPL_REP, NOTOPEN_TPL_REP, tpl;
	
	tpl = '<div class="m-hosRaiders">\n    HEADER_TPL_REP\n    <section class="m-hostRaiders-bd">\n        <!-- tab切换标签 -->\n        <div class="m-hostRaiders-bd-tab">\n            <ul class="yo-tab yo-tab-filter">\n                <li class="item" :class="{ \'item-on\': currentTab == 1 }" v-if="pool.tab1" @click="changeTab(1)">挂号</li>\n                <li class="item" :class="{ \'item-on\': currentTab == 2 }" v-if="pool.tab2" @click="changeTab(2)">医院攻略</li>\n            </ul>\n        </div>\n        <!-- tab切换标签 end-->\n        <!-- 挂号模块 -->\n        <div class="m-hostRaiders-bd-list" v-show="firstDeps.length && currentTab==1" style="position: absolute; top: 232px; left: 0; right: 0; bottom: 0; overflow: hidden;">\n            <div class="raiders-nav" id="js-scroll-firstDepts">\n                <ul class="yo-tab yo-tab-nav">\n                    <li v-for="item in firstDeps" @click="selectFirstDept(item.id, item.departCode, item.name)" class="item" :class="{ \'item-on\': currentDep == item.departCode  }"><i class="arrR"></i><span>{{ item.name }}</span></li>\n                </ul>\n            </div>\n            <div class="raiders-nav-open" id="js-scroll-secondDeps">\n                <ul>\n                    <li v-for="el in secondDep" @click="gotoReg(el.id, el.departCode ,el.name)">{{ el.name }}</li>\n                </ul>\n            </div>\n        </div>\n        <!-- 挂号模块 end-->\n        <!-- 医院攻略模块 -->\n         <div id="js-nineGrid" v-show="currentTab==2" style="position: absolute; top: 232px; left: 0; right: 0; bottom: 0; overflow: hidden;">\n            <div class="m-hostRaiders-bd-compose" >\n                <div class="raiders-nav-every" v-for="label in labels">\n                    <a :href="label.publish==0?label.url:\'javascript:;\'">\n                        <i class="ff-icon" :class="[label.OPENCLASS, label.publish == 1 ? \'gray\':\'\']"></i>\n                        <p>{{label.name}}</p>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <!-- 医院攻略模块 end-->\n        <!-- 暂未开通 -->\n        NOTOPEN_TPL_REP\n        <!-- 暂未开通 end-->\n    </section>\n    <alert :alert.sync="alert"></alert>\n<loading :loading.sync="loading"></loading>\n</div>\n';
	
	HEADER_TPL_REP = '<section class="m-hostRaiders-hd">\n    <div class="m-hostRaiders-hd-mark">\n        <img :src="hosInfo.logo">\n    </div>\n    <div class="m-hostRaiders-hd-info">\n        <h2 class="title">{{hosInfo.name}}</h2>\n        <div class="detail-con">\n            <div class="detail">\n                <i class="ff-icon ff-sjjd"></i>\n                <span class="text-sjjd">{{hosInfo.hosLevel}}</span>\n            </div>\n            <div class="detail" v-if="hosInfo.hosAddress">\n                <i class="ff-icon ff-addr"></i>\n                <span class="1\n                text-addr">{{hosInfo.hosAddress}}</span>\n            </div>\n            <div class="detail" v-if="hosInfo.advanceDay">\n                <i class="ff-icon ff-openNum"></i>\n                <span class="text-addr">开放{{hosInfo.advanceDay}}天号源<span class="c-red" v-if="hosInfo.lastOpenRegTime">（{{hosInfo.lastOpenRegTime}}放出第{{hosInfo.advanceDay}}天号源）</span></span>\n            </div>\n            <div class="detail" v-if="hosInfo.curOpenRegTime">\n                <i class="ff-icon ff-openDate"></i>\n                <span class="text-addr">每日{{hosInfo.curOpenRegTime}}更新当天号源余量</span>\n            </div>\n        </div>\n    </div>\n</section>';
	
	NOTOPEN_TPL_REP = '<div class="notopen-tip" v-if="open">\n    <i class="ff-icon ff-openWarn"></i>\n    <p class="txt">暂未开通，敬请期待</p>\n</div>';
	
	module.exports = tpl.replace('HEADER_TPL_REP', HEADER_TPL_REP).replace('NOTOPEN_TPL_REP', NOTOPEN_TPL_REP);


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var assign = __webpack_require__(51);
	module.exports = Model;
	
	var API = {
	    //mock
	    // getDeptByHosCode: '/bjmc/getDeptByHosCode',
	    // gotoHome: '/bjmc/gotoHome',
	    getDeptByHosCode: '/mobile/wx/product/departments',
	    gotoHome: '/bjmc/gotoHome'
	},
	
	// 九宫格信息
	NINE = {
	    hospital_situation: {
	        HTML: 'hosProfile.html',
	        OPENCLASS: 'ff-hos'
	    },
	    office: {
	        HTML: 'deptDoct.html',
	        OPENCLASS: 'ff-nurse'
	    },
	    hospital_public: {
	        HTML: 'hosPublic.html',
	        OPENCLASS: 'ff-hos-info'
	    },
	    register_notice: {
	        HTML: 'registerTips.html',
	        OPENCLASS: 'ff-info'
	    },
	    visit: {
	        HTML: 'visitInfo.html',
	        OPENCLASS: 'ff-diagnose'
	    },
	    stop_visit: {
	        HTML: 'stopVisitInfo.html',
	        OPENCLASS: 'ff-alert'
	    },
	    hospital_navigation: {
	        HTML: 'hosNav.html',
	        OPENCLASS: 'ff-navigation'
	    },
	    tohospital_navigation: {
	        HTML: 'hosInnerNav.html',
	        OPENCLASS: 'ff-gps'
	    },
	    contact_us: {
	        HTML: 'contactUs.html',
	        OPENCLASS: 'ff-tel'
	    }
	};
	
	function Model(vm) {
	    this.vm = vm;
	}
	
	Model.prototype = {
	    /**
	     * 获取所有科室
	     * @return {[Promise]} [获取所有科室后的promise]
	     */
	    getAlldepts: function getAlldepts(params) {
	        var http = this.vm.$http,
	            self = this;
	        return http.get(API.getDeptByHosCode, { params: params }).then(function (response) {
	            if (self._resCodehandler(response)) {
	                var data = response.data.data;
	                var res = {},
	                    labels = data.hosLabel && data.hosLabel.labels || {},
	                    cache = {};
	
	                res.allDepts = data.departments;
	                res.currentId = '';
	                res.currentDepName = '';
	
	                res.hosInfo = {};
	                res.firstDeps = [];
	                res.secondDeps = {};
	
	                res.hosInfo.hosAddress = data.hosAddress;
	                res.hosInfo.hosLevel = data.hosLevel;
	                res.hosInfo.logo = data.logo;
	                res.hosInfo.name = data.name;
	                res.hosInfo.open = data.open;
	                res.hosInfo.advanceDay = data.advanceDay;
	                res.hosInfo.curOpenRegTime = data.curOpenRegTime && data.curOpenRegTime.slice(0, -3) || '';
	                res.hosInfo.lastOpenRegTime = data.lastOpenRegTime && data.lastOpenRegTime.slice(0, -3) || '';
	
	                // 科室信息
	                res.allDepts.forEach(function (item, index) {
	                    if (index === 0) {
	                        res.currentDep = item.departCode;
	                        res.currentDepName = item.name;
	                        res.currentId = item.id;
	                    }
	                    res.firstDeps.push({
	                        id: item.id,
	                        name: item.name,
	                        departCode: item.departCode
	                    });
	
	                    res.secondDeps[item.departCode] = item.subDepartments.map(function (el) {
	                        return {
	                            id: el.id,
	                            name: el.name,
	                            departCode: el.departCode
	                        };
	                    });
	                });
	                // 九宫格信息处理
	                _isEmpty(labels) || labels.forEach(function (item, index) {
	                    cache = item;
	                    //来医导航掉用百度页面
	                    if (cache.url === 'gotoHospMap') {
	                        cache.url = 'http://api.map.baidu.com/direction?destination=latlng:' + data.lat + ',' + data.lng + '|name:' + res.hosInfo.name + '&output=html';
	                    }
	                    labels[index] = assign({}, cache, NINE[item['authorityCode']]);
	                });
	                res.labels = labels;
	                return res;
	            }
	        });
	    },
	    /**
	     * 统一处理resCode
	     * @param  {Object} data [接口返回对象]
	     */
	    _resCodehandler: function _resCodehandler(data) {
	        var resCode = data.data.resCode;
	        if (resCode === 0) {
	            return true;
	        }
	
	        this.vm.loading = false;
	        if (resCode != 101 && resCode != 102) {
	            this.vm.alert = {
	                type: 'tips',
	                content: data.data.msg
	            };
	        }
	
	        return false;
	    }
	};
	
	function _isEmpty(value) {
	    return Array.isArray(value) && value.length === 0 || Object.prototype.isPrototypeOf(value) && Object.keys(value).length === 0;
	}

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(130);
	__webpack_require__(50);
	
	var IScroll = __webpack_require__(139),
	    ISSCROLLCLICK = __webpack_require__(109)(),
	    assign = __webpack_require__(51),
	    Url = __webpack_require__(106),
	    Domain = __webpack_require__(140),
	    Model = __webpack_require__(141),
	    tpl = __webpack_require__(142);
	
	var TIPS = {
	    NO_INVENTORY: '当天号源无号',
	    SOLD_OUT: '当天号源全部约满',
	    UNAVAILABLE: '当天号源全部约满'
	};
	
	// source 用于前端判断各种
	
	var RegisterResource = Vue.component('register-resource', {
	    template: tpl,
	    // route: {
	    //     canReuse: false
	    // },
	    data: function data() {
	        return {
	            isRenderCalendar: false, // 是否渲染日历
	            isShowCalendar: false, // 日历显隐
	            calendarDayList: '', // 横向滚动日期
	            calendarMonthList: '', // 日历月份
	            currentDate: '', // 当前选择日期
	            sourceList: '', // 号源信息
	            recommendList: '', // 推荐号源
	            sourceMap: '',
	            getMoreDomTimes: 0, // 获取 dom 次数
	            sourceInfo: '',
	            isShowShortList: false,
	            restTime: '',
	            evaluation: '', // 挂号须知
	            alert: {},
	            loading: {
	                show: false,
	                css: {
	                    top: '80px'
	                }
	            }
	        };
	    },
	    CONSTDATA: {
	        hosName: '', // 医院名
	        hosCode: '', // 医院 Code
	        firstDeptName: '', // 一级科室名
	        firstDeptCode: '', // 一级科室 id
	        secondDeptName: '', // 二级科室名
	        secondDeptCode: '', // 二级科室 id
	        btnStatusText: {
	            VALID: '选择',
	            INVALID: '约满'
	        },
	        openPageTime: +new Date()
	    },
	    computed: {
	        tips: function tips() {
	            return TIPS[this.sourceInfo.status];
	        }
	    },
	    methods: {
	        /**
	         * 横排选择日期
	         * @param  {Object} sourceInfo 号源信息
	         * 修改 currentDate
	         */
	        selectDate: function selectDate(sourceInfo) {
	            var status = sourceInfo.status;
	            var date = sourceInfo.date;
	            switch (status) {
	                case 'NO_CONFIG':
	                    break;
	                case 'WAIT_OPEN':
	                case 'TOMORROW_OPEN':
	                    this.model._cancaleAjax();
	                    this.loading = false;
	                    this.currentDate = date;
	                    // TODO:
	                    this.sourceList = '';
	                    this.allList = '';
	                    this.recommendList = '';
	                    this.evaluation = '';
	                    this.isShowShortList = false;
	                    this.sourceInfo = this.model.getDateInfo(date);
	                    this.domain.calculateTimer(date);
	                    break;
	                default:
	                    this.domain.timer && clearTimeout(this.domain.timer);
	                    this.currentDate = date;
	                    this.domain.getDate(date);
	
	            }
	        },
	        /**
	         * 选择日历日期
	         * @param  {Object} sourceInfo 号源信息
	         * 1. 调用 selectDate
	         * 2. 隐藏日期
	         * 3. 调用 handleScroll
	         * 4. 调用 scrollToElement
	         */
	        selectCalendarDate: function selectCalendarDate(sourceInfo) {
	            this.isShowCalendar = false;
	            this.domain.handleScroll('enable');
	            if (!sourceInfo) return;
	            this.selectDate(sourceInfo);
	            sourceInfo.shortDate && this.domain._scrollToElement(sourceInfo.shortDate);
	        },
	        showCalendar: function showCalendar() {
	            this.isShowCalendar = true;
	            this.domain.handleScroll('disable');
	        },
	        showAllList: function showAllList() {
	            this.sourceList = this.allList;
	            this.isShowShortList = false;
	        },
	        /**
	         * 跳转到选卡页面
	         * @param  {Object} resourceDetail 后端返回每条号源信息
	         */
	        preRegTimeCheck: function preRegTimeCheck(resourceDetail) {
	            if (resourceDetail.status == 'INVALID') return;
	
	            var self = this;
	            var params = {
	                hosCode: this.$options.CONSTDATA.hosCode,
	                timeType: resourceDetail.showTimeType,
	                treatmentDay: resourceDetail.date,
	                productType: resourceDetail.type
	            };
	            this.model.preRegTimeCheck(params).then(function (res) {
	                var data = res.data;
	                if (data.data.state == 'OK') {
	                    self.goToSelectCard(resourceDetail);
	                } else {
	                    self.alert = {
	                        type: 'confirm',
	                        content: data.data.message,
	                        confirmCallback: function confirmCallback() {
	                            self.goToSelectCard(resourceDetail);
	                        },
	                        button2Name: '继续挂号'
	                    };
	                }
	            });
	        },
	        goToSelectCard: function goToSelectCard(resourceDetail) {
	            // 确定号源日期后修改地址栏参数date值。
	            this.$route.query.date = this.currentDate;
	            this.$route.query.source = 'back';
	            this.$router.replace({
	                name: 'selectResource',
	                query: this.$route.query
	            });
	
	            var deptInfo = this.model.getDeptInfo();
	            var resourceInfo = {
	                productId: resourceDetail.productId,
	                doctorId: resourceDetail.doctorInfo.doctorId,
	                productType: resourceDetail.type,
	                price: resourceDetail.price,
	                treatmentDay: resourceDetail.date,
	                regHour: '', // 选择就诊时间段 '11:10-12:20'
	                productTimeType: resourceDetail.showTimeType
	            };
	            var from = {
	                from: this.$route.query.from || 'register'
	            };
	            var params = assign({}, deptInfo, resourceInfo, from);
	            //location.href = Url.getUrl('newSelectCard', params);
	
	            var arr = [];
	            for (var k in params) {
	                arr.push(k + '=' + params[k]);
	            }
	            var PARAMS = '?' + arr.join('&');
	            var jumpUrl = encodeURIComponent('wechat/register/newSelectCard.html' + PARAMS);
	            location.href = '/mobile/wx/accredit/go?old=' + jumpUrl + '&new=' + jumpUrl;
	        },
	        goToRecommend: function goToRecommend(data) {
	            this.$router.replace({
	                name: 'selectResource',
	                query: {
	                    hosCode: data.hosCode,
	                    hosName: data.hosName,
	                    firstDeptId: data.firstDeptId,
	                    firstDeptCode: data.firstDeptCode,
	                    firstDeptName: data.firstDeptName,
	                    secondDeptId: data.secondDeptId,
	                    secondDeptCode: data.secondDeptCode,
	                    secondDeptName: data.secondDeptName,
	                    date: data.date,
	                    from: 'recommend',
	                    source: 'recommend'
	                }
	            });
	            location.reload(window.location.href);
	        },
	        goToLableList: function goToLableList() {
	            location.href = this.evaluation;
	        },
	        // 判断专场 showmore 的 icon 是否显示
	        judgeSpecialtyDescShow: function judgeSpecialtyDescShow(noReloadDom) {
	            var _this = this,
	                summaryLen = 0;
	            if (this.$el && (!noReloadDom || !this.$summar)) {
	                this.$summary = this.$el.querySelectorAll('.doctor-summary');
	                this.$summarySpan = [];
	                for (summaryLen = this.$summary.length; summaryLen--;) {
	                    this.$summarySpan.push(this.$summary[summaryLen].querySelector('span'));
	                }
	                this.$summarySpan.reverse();
	            }
	
	            if (this.$summary.length) {
	                if (this.getMoreDomTimes < 5 && !this.$summary[0].offsetWidth) {
	                    setTimeout(function () {
	                        ++_this.getMoreDomTimes;
	                        _this.judgeSpecialtyDescShow();
	                    }, 100);
	                    return;
	                }
	                for (summaryLen = this.$summary.length; summaryLen--;) {
	                    var _index = this.$summary[summaryLen].dataset['index'],
	                        _source = this.sourceMap[_index];
	                    if (_source.showSpecialtyDesc === false) {
	                        if (this.$summary[summaryLen].offsetWidth < this.$summarySpan[summaryLen].offsetWidth) {
	                            _source.showSpecialtyDesc = 'hide';
	                        } else {
	                            _source.showSpecialtyDesc = 'show';
	                        }
	                    }
	                }
	            }
	        },
	
	        // 控制专长的展开和收起
	        showSpecialtyDescMore: function showSpecialtyDescMore(item) {
	            if (item.showSpecialtyDesc === 'hide') {
	                item.showSpecialtyDesc = 'show';
	            }
	        }
	    },
	    /**
	     * 初始化 model
	     * 获取医院科室信息
	     */
	    init: function init() {
	        this.model = new Model(this); // 约定：只允许使用 http、alert，数据不准改动
	        assign(this.$options.CONSTDATA, this.model.getDeptInfo());
	    },
	    /**
	     * 从 model 获取日期信息与号源信息
	     */
	    created: function created() {
	        this.domain = new Domain(this);
	        var params = this.model.getDeptInfo();
	        this.domain.getDate(params.date, params.source);
	    },
	    watch: {
	        calendarDayList: function calendarDayList() {
	            this.domain.refreshScroll('dateScroll');
	        },
	        sourceList: function sourceList() {
	            var _this = this;
	            this.domain.refreshScroll('sourceScroll');
	            // 动画时间完成再获取 DOM
	            this.$nextTick(function () {
	                _this.judgeSpecialtyDescShow();
	            });
	        },
	        calendarList: function calendarList() {
	            this.domain.refreshScroll('calendarScroll');
	        },
	        isShowCalendar: function isShowCalendar() {
	            this.domain.refreshScroll('calendarScroll');
	        },
	        isRenderCalendar: function isRenderCalendar() {
	            // iPhone 4s 在 ready 里 new 报错
	            var self = this;
	            setTimeout(function () {
	                self.calendarScroll = new IScroll('#js-calendar-scroll', {
	                    preventDefault: true,
	                    click: ISSCROLLCLICK
	                });
	            }, 350);
	        }
	    },
	    ready: function ready() {
	        this.domain.initScroll();
	        wx && wx.hideOptionMenu();
	        document.setTitle('选择号源');
	        // 页面统计
	        beacon.sendClk({
	            arg_a: '选择号源',
	            l: 'info',
	            h: 'WeChat',
	            m: window.PHONEMODEL.type,
	            arg_b: window.PHONEMODEL.model || '',
	            arg_c: window.PHONEMODEL.system || ''
	        });
	    },
	
	    destroyed: function destroyed() {
	        this.iscrollTimer && clearInterval(this.iscrollTimer);
	    }
	});
	
	module.exports = RegisterResource;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
	(function (window, document, Math) {
	    var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
	        window.setTimeout(callback, 1000 / 60);
	    };
	
	    var utils = function () {
	        var me = {};
	
	        var _elementStyle = document.createElement('div').style;
	        var _vendor = function () {
	            var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
	                transform,
	                i = 0,
	                l = vendors.length;
	
	            for (; i < l; i++) {
	                transform = vendors[i] + 'ransform';
	                if (transform in _elementStyle) return vendors[i].substr(0, vendors[i].length - 1);
	            }
	
	            return false;
	        }();
	
	        function _prefixStyle(style) {
	            if (_vendor === false) return false;
	            if (_vendor === '') return style;
	            return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
	        }
	
	        me.getTime = Date.now || function getTime() {
	            return new Date().getTime();
	        };
	
	        me.extend = function (target, obj) {
	            for (var i in obj) {
	                target[i] = obj[i];
	            }
	        };
	
	        me.addEvent = function (el, type, fn, capture) {
	            el.addEventListener(type, fn, !!capture);
	        };
	
	        me.removeEvent = function (el, type, fn, capture) {
	            el.removeEventListener(type, fn, !!capture);
	        };
	
	        me.prefixPointerEvent = function (pointerEvent) {
	            return window.MSPointerEvent ? 'MSPointer' + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8) : pointerEvent;
	        };
	
	        me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
	            var distance = current - start,
	                speed = Math.abs(distance) / time,
	                destination,
	                duration;
	
	            deceleration = deceleration === undefined ? 0.0006 : deceleration;
	
	            destination = current + speed * speed / (2 * deceleration) * (distance < 0 ? -1 : 1);
	            duration = speed / deceleration;
	
	            if (destination < lowerMargin) {
	                destination = wrapperSize ? lowerMargin - wrapperSize / 2.5 * (speed / 8) : lowerMargin;
	                distance = Math.abs(destination - current);
	                duration = distance / speed;
	            } else if (destination > 0) {
	                destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
	                distance = Math.abs(current) + destination;
	                duration = distance / speed;
	            }
	
	            return {
	                destination: Math.round(destination),
	                duration: duration
	            };
	        };
	
	        var _transform = _prefixStyle('transform');
	
	        me.extend(me, {
	            hasTransform: _transform !== false,
	            hasPerspective: _prefixStyle('perspective') in _elementStyle,
	            hasTouch: 'ontouchstart' in window,
	            hasPointer: !!(window.PointerEvent || window.MSPointerEvent), // IE10 is prefixed
	            hasTransition: _prefixStyle('transition') in _elementStyle
	        });
	
	        /*
	        This should find all Android browsers lower than build 535.19 (both stock browser and webview)
	        - galaxy S2 is ok
	        - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
	        - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	        - galaxy S3 is badAndroid (stock brower, webview)
	         `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	        - galaxy S4 is badAndroid (stock brower, webview)
	         `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	        - galaxy S5 is OK
	         `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
	        - galaxy S6 is OK
	         `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
	        */
	        me.isBadAndroid = function () {
	            var appVersion = window.navigator.appVersion;
	            // Android browser is not a chrome browser.
	            if (/Android/.test(appVersion) && !/Chrome\/\d/.test(appVersion)) {
	                var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
	                if (safariVersion && (typeof safariVersion === 'undefined' ? 'undefined' : _typeof(safariVersion)) === "object" && safariVersion.length >= 2) {
	                    return parseFloat(safariVersion[1]) < 535.19;
	                } else {
	                    return true;
	                }
	            } else {
	                return false;
	            }
	        }();
	
	        me.extend(me.style = {}, {
	            transform: _transform,
	            transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
	            transitionDuration: _prefixStyle('transitionDuration'),
	            transitionDelay: _prefixStyle('transitionDelay'),
	            transformOrigin: _prefixStyle('transformOrigin')
	        });
	
	        me.hasClass = function (e, c) {
	            var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
	            return re.test(e.className);
	        };
	
	        me.addClass = function (e, c) {
	            if (me.hasClass(e, c)) {
	                return;
	            }
	
	            var newclass = e.className.split(' ');
	            newclass.push(c);
	            e.className = newclass.join(' ');
	        };
	
	        me.removeClass = function (e, c) {
	            if (!me.hasClass(e, c)) {
	                return;
	            }
	
	            var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
	            e.className = e.className.replace(re, ' ');
	        };
	
	        me.offset = function (el) {
	            var left = -el.offsetLeft,
	                top = -el.offsetTop;
	
	            // jshint -W084
	            while (el = el.offsetParent) {
	                left -= el.offsetLeft;
	                top -= el.offsetTop;
	            }
	            // jshint +W084
	
	            return {
	                left: left,
	                top: top
	            };
	        };
	
	        me.preventDefaultException = function (el, exceptions) {
	            for (var i in exceptions) {
	                if (exceptions[i].test(el[i])) {
	                    return true;
	                }
	            }
	
	            return false;
	        };
	
	        me.extend(me.eventType = {}, {
	            touchstart: 1,
	            touchmove: 1,
	            touchend: 1,
	
	            mousedown: 2,
	            mousemove: 2,
	            mouseup: 2,
	
	            pointerdown: 3,
	            pointermove: 3,
	            pointerup: 3,
	
	            MSPointerDown: 3,
	            MSPointerMove: 3,
	            MSPointerUp: 3
	        });
	
	        me.extend(me.ease = {}, {
	            quadratic: {
	                style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
	                fn: function fn(k) {
	                    return k * (2 - k);
	                }
	            },
	            circular: {
	                style: 'cubic-bezier(0.1, 0.57, 0.1, 1)', // Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
	                fn: function fn(k) {
	                    return Math.sqrt(1 - --k * k);
	                }
	            },
	            back: {
	                style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
	                fn: function fn(k) {
	                    var b = 4;
	                    return (k = k - 1) * k * ((b + 1) * k + b) + 1;
	                }
	            },
	            bounce: {
	                style: '',
	                fn: function fn(k) {
	                    if ((k /= 1) < 1 / 2.75) {
	                        return 7.5625 * k * k;
	                    } else if (k < 2 / 2.75) {
	                        return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
	                    } else if (k < 2.5 / 2.75) {
	                        return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
	                    } else {
	                        return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
	                    }
	                }
	            },
	            elastic: {
	                style: '',
	                fn: function fn(k) {
	                    var f = 0.22,
	                        e = 0.4;
	
	                    if (k === 0) {
	                        return 0;
	                    }
	                    if (k == 1) {
	                        return 1;
	                    }
	
	                    return e * Math.pow(2, -10 * k) * Math.sin((k - f / 4) * (2 * Math.PI) / f) + 1;
	                }
	            }
	        });
	
	        me.tap = function (e, eventName) {
	            var ev = document.createEvent('Event');
	            ev.initEvent(eventName, true, true);
	            ev.pageX = e.pageX;
	            ev.pageY = e.pageY;
	            e.target.dispatchEvent(ev);
	        };
	
	        me.click = function (e) {
	            var target = e.target,
	                ev;
	
	            if (!/(SELECT|INPUT|TEXTAREA)/i.test(target.tagName)) {
	                ev = document.createEvent('MouseEvents');
	                ev.initMouseEvent('click', true, true, e.view, 1, target.screenX, target.screenY, target.clientX, target.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null);
	
	                ev._constructed = true;
	                target.dispatchEvent(ev);
	            }
	        };
	
	        return me;
	    }();
	    function IScroll(el, options) {
	        this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
	        this.scroller = this.wrapper.children[0];
	        this.scrollerStyle = this.scroller.style; // cache style for better performance
	
	        this.options = {
	
	            resizeScrollbars: true,
	
	            mouseWheelSpeed: 20,
	
	            snapThreshold: 0.334,
	
	            // INSERT POINT: OPTIONS
	            disablePointer: !utils.hasPointer,
	            disableTouch: utils.hasPointer || !utils.hasTouch,
	            disableMouse: utils.hasPointer || utils.hasTouch,
	            startX: 0,
	            startY: 0,
	            scrollY: true,
	            directionLockThreshold: 5,
	            momentum: true,
	
	            bounce: true,
	            bounceTime: 600,
	            bounceEasing: '',
	
	            preventDefault: true,
	            preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },
	
	            HWCompositing: true,
	            useTransition: true,
	            useTransform: true,
	            bindToWrapper: typeof window.onmousedown === "undefined"
	        };
	
	        for (var i in options) {
	            this.options[i] = options[i];
	        }
	
	        // Normalize options
	        this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';
	
	        this.options.useTransition = utils.hasTransition && this.options.useTransition;
	        this.options.useTransform = utils.hasTransform && this.options.useTransform;
	
	        this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
	        this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;
	
	        // If you want eventPassthrough I have to lock one of the axes
	        this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
	        this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;
	
	        // With eventPassthrough we also need lockDirection mechanism
	        this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
	        this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;
	
	        this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;
	
	        this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;
	
	        if (this.options.tap === true) {
	            this.options.tap = 'tap';
	        }
	
	        if (this.options.shrinkScrollbars == 'scale') {
	            this.options.useTransition = false;
	        }
	
	        this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;
	
	        // INSERT POINT: NORMALIZATION
	
	        // Some defaults
	        this.x = 0;
	        this.y = 0;
	        this.directionX = 0;
	        this.directionY = 0;
	        this._events = {};
	
	        // INSERT POINT: DEFAULTS
	
	        this._init();
	        this.refresh();
	
	        this.scrollTo(this.options.startX, this.options.startY);
	        this.enable();
	    }
	
	    IScroll.prototype = {
	        version: '5.2.0',
	
	        _init: function _init() {
	            this._initEvents();
	
	            if (this.options.scrollbars || this.options.indicators) {
	                this._initIndicators();
	            }
	
	            if (this.options.mouseWheel) {
	                this._initWheel();
	            }
	
	            if (this.options.snap) {
	                this._initSnap();
	            }
	
	            if (this.options.keyBindings) {
	                this._initKeys();
	            }
	
	            // INSERT POINT: _init
	        },
	
	        destroy: function destroy() {
	            this._initEvents(true);
	            clearTimeout(this.resizeTimeout);
	            this.resizeTimeout = null;
	            this._execEvent('destroy');
	        },
	
	        _transitionEnd: function _transitionEnd(e) {
	            if (e.target != this.scroller || !this.isInTransition) {
	                return;
	            }
	
	            this._transitionTime();
	            if (!this.resetPosition(this.options.bounceTime)) {
	                this.isInTransition = false;
	                this._execEvent('scrollEnd');
	            }
	        },
	
	        _start: function _start(e) {
	            // React to left mouse button only
	            if (utils.eventType[e.type] != 1) {
	                // for button property
	                // http://unixpapa.com/js/mouse.html
	                var button;
	                if (!e.which) {
	                    /* IE case */
	                    button = e.button < 2 ? 0 : e.button == 4 ? 1 : 2;
	                } else {
	                    /* All others */
	                    button = e.button;
	                }
	                if (button !== 0) {
	                    return;
	                }
	            }
	
	            if (!this.enabled || this.initiated && utils.eventType[e.type] !== this.initiated) {
	                return;
	            }
	
	            if (this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
	                e.preventDefault();
	            }
	
	            var point = e.touches ? e.touches[0] : e,
	                pos;
	
	            this.initiated = utils.eventType[e.type];
	            this.moved = false;
	            this.distX = 0;
	            this.distY = 0;
	            this.directionX = 0;
	            this.directionY = 0;
	            this.directionLocked = 0;
	
	            this.startTime = utils.getTime();
	
	            if (this.options.useTransition && this.isInTransition) {
	                this._transitionTime();
	                this.isInTransition = false;
	                pos = this.getComputedPosition();
	                this._translate(Math.round(pos.x), Math.round(pos.y));
	                this._execEvent('scrollEnd');
	            } else if (!this.options.useTransition && this.isAnimating) {
	                this.isAnimating = false;
	                this._execEvent('scrollEnd');
	            }
	
	            this.startX = this.x;
	            this.startY = this.y;
	            this.absStartX = this.x;
	            this.absStartY = this.y;
	            this.pointX = point.pageX;
	            this.pointY = point.pageY;
	
	            this._execEvent('beforeScrollStart');
	        },
	
	        _move: function _move(e) {
	            if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
	                return;
	            }
	
	            if (this.options.preventDefault) {
	                // increases performance on Android? TODO: check!
	                e.preventDefault();
	            }
	
	            var point = e.touches ? e.touches[0] : e,
	                deltaX = point.pageX - this.pointX,
	                deltaY = point.pageY - this.pointY,
	                timestamp = utils.getTime(),
	                newX,
	                newY,
	                absDistX,
	                absDistY;
	
	            this.pointX = point.pageX;
	            this.pointY = point.pageY;
	
	            this.distX += deltaX;
	            this.distY += deltaY;
	            absDistX = Math.abs(this.distX);
	            absDistY = Math.abs(this.distY);
	
	            // We need to move at least 10 pixels for the scrolling to initiate
	            if (timestamp - this.endTime > 300 && absDistX < 10 && absDistY < 10) {
	                return;
	            }
	
	            // If you are scrolling in one direction lock the other
	            if (!this.directionLocked && !this.options.freeScroll) {
	                if (absDistX > absDistY + this.options.directionLockThreshold) {
	                    this.directionLocked = 'h'; // lock horizontally
	                } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
	                    this.directionLocked = 'v'; // lock vertically
	                } else {
	                    this.directionLocked = 'n'; // no lock
	                }
	            }
	
	            if (this.directionLocked == 'h') {
	                if (this.options.eventPassthrough == 'vertical') {
	                    e.preventDefault();
	                } else if (this.options.eventPassthrough == 'horizontal') {
	                    this.initiated = false;
	                    return;
	                }
	
	                deltaY = 0;
	            } else if (this.directionLocked == 'v') {
	                if (this.options.eventPassthrough == 'horizontal') {
	                    e.preventDefault();
	                } else if (this.options.eventPassthrough == 'vertical') {
	                    this.initiated = false;
	                    return;
	                }
	
	                deltaX = 0;
	            }
	
	            deltaX = this.hasHorizontalScroll ? deltaX : 0;
	            deltaY = this.hasVerticalScroll ? deltaY : 0;
	
	            newX = this.x + deltaX;
	            newY = this.y + deltaY;
	
	            // Slow down if outside of the boundaries
	            if (newX > 0 || newX < this.maxScrollX) {
	                newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
	            }
	            if (newY > 0 || newY < this.maxScrollY) {
	                newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
	            }
	
	            this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
	            this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;
	
	            if (!this.moved) {
	                this._execEvent('scrollStart');
	            }
	
	            this.moved = true;
	
	            this._translate(newX, newY);
	
	            /* REPLACE START: _move */
	
	            if (timestamp - this.startTime > 300) {
	                this.startTime = timestamp;
	                this.startX = this.x;
	                this.startY = this.y;
	            }
	
	            /* REPLACE END: _move */
	        },
	
	        _end: function _end(e) {
	            if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
	                return;
	            }
	
	            if (this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
	                e.preventDefault();
	            }
	
	            var point = e.changedTouches ? e.changedTouches[0] : e,
	                momentumX,
	                momentumY,
	                duration = utils.getTime() - this.startTime,
	                newX = Math.round(this.x),
	                newY = Math.round(this.y),
	                distanceX = Math.abs(newX - this.startX),
	                distanceY = Math.abs(newY - this.startY),
	                time = 0,
	                easing = '';
	
	            this.isInTransition = 0;
	            this.initiated = 0;
	            this.endTime = utils.getTime();
	
	            // reset if we are outside of the boundaries
	            if (this.resetPosition(this.options.bounceTime)) {
	                return;
	            }
	
	            this.scrollTo(newX, newY); // ensures that the last position is rounded
	
	            // we scrolled less than 10 pixels
	            if (!this.moved) {
	                if (this.options.tap) {
	                    utils.tap(e, this.options.tap);
	                }
	
	                if (this.options.click) {
	                    utils.click(e);
	                }
	
	                this._execEvent('scrollCancel');
	                return;
	            }
	
	            if (this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100) {
	                this._execEvent('flick');
	                return;
	            }
	
	            // start momentum animation if needed
	            if (this.options.momentum && duration < 300) {
	                momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
	                momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
	                newX = momentumX.destination;
	                newY = momentumY.destination;
	                time = Math.max(momentumX.duration, momentumY.duration);
	                this.isInTransition = 1;
	            }
	
	            if (this.options.snap) {
	                var snap = this._nearestSnap(newX, newY);
	                this.currentPage = snap;
	                time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
	                newX = snap.x;
	                newY = snap.y;
	
	                this.directionX = 0;
	                this.directionY = 0;
	                easing = this.options.bounceEasing;
	            }
	
	            // INSERT POINT: _end
	
	            if (newX != this.x || newY != this.y) {
	                // change easing function when scroller goes out of the boundaries
	                if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
	                    easing = utils.ease.quadratic;
	                }
	
	                this.scrollTo(newX, newY, time, easing);
	                return;
	            }
	
	            this._execEvent('scrollEnd');
	        },
	
	        _resize: function _resize() {
	            var that = this;
	
	            clearTimeout(this.resizeTimeout);
	
	            this.resizeTimeout = setTimeout(function () {
	                that.refresh();
	            }, this.options.resizePolling);
	        },
	
	        resetPosition: function resetPosition(time) {
	            var x = this.x,
	                y = this.y;
	
	            time = time || 0;
	
	            if (!this.hasHorizontalScroll || this.x > 0) {
	                x = 0;
	            } else if (this.x < this.maxScrollX) {
	                x = this.maxScrollX;
	            }
	
	            if (!this.hasVerticalScroll || this.y > 0) {
	                y = 0;
	            } else if (this.y < this.maxScrollY) {
	                y = this.maxScrollY;
	            }
	
	            if (x == this.x && y == this.y) {
	                return false;
	            }
	
	            this.scrollTo(x, y, time, this.options.bounceEasing);
	
	            return true;
	        },
	
	        disable: function disable() {
	            this.enabled = false;
	        },
	
	        enable: function enable() {
	            this.enabled = true;
	        },
	
	        refresh: function refresh() {
	            var rf = this.wrapper.offsetHeight; // Force reflow
	
	            this.wrapperWidth = this.wrapper.clientWidth;
	            this.wrapperHeight = this.wrapper.clientHeight;
	
	            /* REPLACE START: refresh */
	
	            this.scrollerWidth = this.scroller.scrollWidth;
	            this.scrollerHeight = this.scroller.scrollHeight;
	
	            this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
	            this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
	
	            /* REPLACE END: refresh */
	
	            this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
	            this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;
	
	            if (!this.hasHorizontalScroll) {
	                this.maxScrollX = 0;
	                this.scrollerWidth = this.wrapperWidth;
	            }
	
	            if (!this.hasVerticalScroll) {
	                this.maxScrollY = 0;
	                this.scrollerHeight = this.wrapperHeight;
	            }
	
	            this.endTime = 0;
	            this.directionX = 0;
	            this.directionY = 0;
	
	            this.wrapperOffset = utils.offset(this.wrapper);
	
	            this._execEvent('refresh');
	
	            this.resetPosition();
	
	            // INSERT POINT: _refresh
	        },
	
	        on: function on(type, fn) {
	            if (!this._events[type]) {
	                this._events[type] = [];
	            }
	
	            this._events[type].push(fn);
	        },
	
	        off: function off(type, fn) {
	            if (!this._events[type]) {
	                return;
	            }
	
	            var index = this._events[type].indexOf(fn);
	
	            if (index > -1) {
	                this._events[type].splice(index, 1);
	            }
	        },
	
	        _execEvent: function _execEvent(type) {
	            if (!this._events[type]) {
	                return;
	            }
	
	            var i = 0,
	                l = this._events[type].length;
	
	            if (!l) {
	                return;
	            }
	
	            for (; i < l; i++) {
	                this._events[type][i].apply(this, [].slice.call(arguments, 1));
	            }
	        },
	
	        scrollBy: function scrollBy(x, y, time, easing) {
	            x = this.x + x;
	            y = this.y + y;
	            time = time || 0;
	
	            this.scrollTo(x, y, time, easing);
	        },
	
	        scrollTo: function scrollTo(x, y, time, easing) {
	            easing = easing || utils.ease.circular;
	
	            this.isInTransition = this.options.useTransition && time > 0;
	            var transitionType = this.options.useTransition && easing.style;
	            if (!time || transitionType) {
	                if (transitionType) {
	                    this._transitionTimingFunction(easing.style);
	                    this._transitionTime(time);
	                }
	                this._translate(x, y);
	            } else {
	                this._animate(x, y, time, easing.fn);
	            }
	        },
	
	        scrollToElement: function scrollToElement(el, time, offsetX, offsetY, easing) {
	            el = el.nodeType ? el : this.scroller.querySelector(el);
	
	            if (!el) {
	                return;
	            }
	
	            var pos = utils.offset(el);
	
	            pos.left -= this.wrapperOffset.left;
	            pos.top -= this.wrapperOffset.top;
	
	            // if offsetX/Y are true we center the element to the screen
	            if (offsetX === true) {
	                offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
	            }
	            if (offsetY === true) {
	                offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
	            }
	
	            pos.left -= offsetX || 0;
	            pos.top -= offsetY || 0;
	
	            pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
	            pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;
	
	            time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x - pos.left), Math.abs(this.y - pos.top)) : time;
	
	            this.scrollTo(pos.left, pos.top, time, easing);
	        },
	
	        _transitionTime: function _transitionTime(time) {
	            time = time || 0;
	
	            var durationProp = utils.style.transitionDuration;
	            this.scrollerStyle[durationProp] = time + 'ms';
	
	            if (!time && utils.isBadAndroid) {
	                this.scrollerStyle[durationProp] = '0.0001ms';
	                // remove 0.0001ms
	                var self = this;
	                rAF(function () {
	                    if (self.scrollerStyle[durationProp] === '0.0001ms') {
	                        self.scrollerStyle[durationProp] = '0s';
	                    }
	                });
	            }
	
	            if (this.indicators) {
	                for (var i = this.indicators.length; i--;) {
	                    this.indicators[i].transitionTime(time);
	                }
	            }
	
	            // INSERT POINT: _transitionTime
	        },
	
	        _transitionTimingFunction: function _transitionTimingFunction(easing) {
	            this.scrollerStyle[utils.style.transitionTimingFunction] = easing;
	
	            if (this.indicators) {
	                for (var i = this.indicators.length; i--;) {
	                    this.indicators[i].transitionTimingFunction(easing);
	                }
	            }
	
	            // INSERT POINT: _transitionTimingFunction
	        },
	
	        _translate: function _translate(x, y) {
	            if (this.options.useTransform) {
	
	                /* REPLACE START: _translate */
	
	                this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;
	
	                /* REPLACE END: _translate */
	            } else {
	                x = Math.round(x);
	                y = Math.round(y);
	                this.scrollerStyle.left = x + 'px';
	                this.scrollerStyle.top = y + 'px';
	            }
	
	            this.x = x;
	            this.y = y;
	
	            if (this.indicators) {
	                for (var i = this.indicators.length; i--;) {
	                    this.indicators[i].updatePosition();
	                }
	            }
	
	            // INSERT POINT: _translate
	        },
	
	        _initEvents: function _initEvents(remove) {
	            var eventType = remove ? utils.removeEvent : utils.addEvent,
	                target = this.options.bindToWrapper ? this.wrapper : window;
	
	            eventType(window, 'orientationchange', this);
	            eventType(window, 'resize', this);
	
	            if (this.options.click) {
	                eventType(this.wrapper, 'click', this, true);
	            }
	
	            if (!this.options.disableMouse) {
	                eventType(this.wrapper, 'mousedown', this);
	                eventType(target, 'mousemove', this);
	                eventType(target, 'mousecancel', this);
	                eventType(target, 'mouseup', this);
	            }
	
	            if (utils.hasPointer && !this.options.disablePointer) {
	                eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
	                eventType(target, utils.prefixPointerEvent('pointermove'), this);
	                eventType(target, utils.prefixPointerEvent('pointercancel'), this);
	                eventType(target, utils.prefixPointerEvent('pointerup'), this);
	            }
	
	            if (utils.hasTouch && !this.options.disableTouch) {
	                eventType(this.wrapper, 'touchstart', this);
	                eventType(target, 'touchmove', this);
	                eventType(target, 'touchcancel', this);
	                eventType(target, 'touchend', this);
	            }
	
	            eventType(this.scroller, 'transitionend', this);
	            eventType(this.scroller, 'webkitTransitionEnd', this);
	            eventType(this.scroller, 'oTransitionEnd', this);
	            eventType(this.scroller, 'MSTransitionEnd', this);
	        },
	
	        getComputedPosition: function getComputedPosition() {
	            var matrix = window.getComputedStyle(this.scroller, null),
	                x,
	                y;
	
	            if (this.options.useTransform) {
	                matrix = matrix[utils.style.transform].split(')')[0].split(', ');
	                x = +(matrix[12] || matrix[4]);
	                y = +(matrix[13] || matrix[5]);
	            } else {
	                x = +matrix.left.replace(/[^-\d.]/g, '');
	                y = +matrix.top.replace(/[^-\d.]/g, '');
	            }
	
	            return { x: x, y: y };
	        },
	        _initIndicators: function _initIndicators() {
	            var interactive = this.options.interactiveScrollbars,
	                customStyle = typeof this.options.scrollbars != 'string',
	                indicators = [],
	                indicator;
	
	            var that = this;
	
	            this.indicators = [];
	
	            if (this.options.scrollbars) {
	                // Vertical scrollbar
	                if (this.options.scrollY) {
	                    indicator = {
	                        el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
	                        interactive: interactive,
	                        defaultScrollbars: true,
	                        customStyle: customStyle,
	                        resize: this.options.resizeScrollbars,
	                        shrink: this.options.shrinkScrollbars,
	                        fade: this.options.fadeScrollbars,
	                        listenX: false
	                    };
	
	                    this.wrapper.appendChild(indicator.el);
	                    indicators.push(indicator);
	                }
	
	                // Horizontal scrollbar
	                if (this.options.scrollX) {
	                    indicator = {
	                        el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
	                        interactive: interactive,
	                        defaultScrollbars: true,
	                        customStyle: customStyle,
	                        resize: this.options.resizeScrollbars,
	                        shrink: this.options.shrinkScrollbars,
	                        fade: this.options.fadeScrollbars,
	                        listenY: false
	                    };
	
	                    this.wrapper.appendChild(indicator.el);
	                    indicators.push(indicator);
	                }
	            }
	
	            if (this.options.indicators) {
	                // TODO: check concat compatibility
	                indicators = indicators.concat(this.options.indicators);
	            }
	
	            for (var i = indicators.length; i--;) {
	                this.indicators.push(new Indicator(this, indicators[i]));
	            }
	
	            // TODO: check if we can use array.map (wide compatibility and performance issues)
	            function _indicatorsMap(fn) {
	                if (that.indicators) {
	                    for (var i = that.indicators.length; i--;) {
	                        fn.call(that.indicators[i]);
	                    }
	                }
	            }
	
	            if (this.options.fadeScrollbars) {
	                this.on('scrollEnd', function () {
	                    _indicatorsMap(function () {
	                        this.fade();
	                    });
	                });
	
	                this.on('scrollCancel', function () {
	                    _indicatorsMap(function () {
	                        this.fade();
	                    });
	                });
	
	                this.on('scrollStart', function () {
	                    _indicatorsMap(function () {
	                        this.fade(1);
	                    });
	                });
	
	                this.on('beforeScrollStart', function () {
	                    _indicatorsMap(function () {
	                        this.fade(1, true);
	                    });
	                });
	            }
	
	            this.on('refresh', function () {
	                _indicatorsMap(function () {
	                    this.refresh();
	                });
	            });
	
	            this.on('destroy', function () {
	                _indicatorsMap(function () {
	                    this.destroy();
	                });
	
	                delete this.indicators;
	            });
	        },
	
	        _initWheel: function _initWheel() {
	            utils.addEvent(this.wrapper, 'wheel', this);
	            utils.addEvent(this.wrapper, 'mousewheel', this);
	            utils.addEvent(this.wrapper, 'DOMMouseScroll', this);
	
	            this.on('destroy', function () {
	                clearTimeout(this.wheelTimeout);
	                this.wheelTimeout = null;
	                utils.removeEvent(this.wrapper, 'wheel', this);
	                utils.removeEvent(this.wrapper, 'mousewheel', this);
	                utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
	            });
	        },
	
	        _wheel: function _wheel(e) {
	            if (!this.enabled) {
	                return;
	            }
	
	            e.preventDefault();
	
	            var wheelDeltaX,
	                wheelDeltaY,
	                newX,
	                newY,
	                that = this;
	
	            if (this.wheelTimeout === undefined) {
	                that._execEvent('scrollStart');
	            }
	
	            // Execute the scrollEnd event after 400ms the wheel stopped scrolling
	            clearTimeout(this.wheelTimeout);
	            this.wheelTimeout = setTimeout(function () {
	                if (!that.options.snap) {
	                    that._execEvent('scrollEnd');
	                }
	                that.wheelTimeout = undefined;
	            }, 400);
	
	            if ('deltaX' in e) {
	                if (e.deltaMode === 1) {
	                    wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
	                    wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
	                } else {
	                    wheelDeltaX = -e.deltaX;
	                    wheelDeltaY = -e.deltaY;
	                }
	            } else if ('wheelDeltaX' in e) {
	                wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
	                wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
	            } else if ('wheelDelta' in e) {
	                wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
	            } else if ('detail' in e) {
	                wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
	            } else {
	                return;
	            }
	
	            wheelDeltaX *= this.options.invertWheelDirection;
	            wheelDeltaY *= this.options.invertWheelDirection;
	
	            if (!this.hasVerticalScroll) {
	                wheelDeltaX = wheelDeltaY;
	                wheelDeltaY = 0;
	            }
	
	            if (this.options.snap) {
	                newX = this.currentPage.pageX;
	                newY = this.currentPage.pageY;
	
	                if (wheelDeltaX > 0) {
	                    newX--;
	                } else if (wheelDeltaX < 0) {
	                    newX++;
	                }
	
	                if (wheelDeltaY > 0) {
	                    newY--;
	                } else if (wheelDeltaY < 0) {
	                    newY++;
	                }
	
	                this.goToPage(newX, newY);
	
	                return;
	            }
	
	            newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
	            newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);
	
	            this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
	            this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;
	
	            if (newX > 0) {
	                newX = 0;
	            } else if (newX < this.maxScrollX) {
	                newX = this.maxScrollX;
	            }
	
	            if (newY > 0) {
	                newY = 0;
	            } else if (newY < this.maxScrollY) {
	                newY = this.maxScrollY;
	            }
	
	            this.scrollTo(newX, newY, 0);
	
	            // INSERT POINT: _wheel
	        },
	
	        _initSnap: function _initSnap() {
	            this.currentPage = {};
	
	            if (typeof this.options.snap == 'string') {
	                this.options.snap = this.scroller.querySelectorAll(this.options.snap);
	            }
	
	            this.on('refresh', function () {
	                var i = 0,
	                    l,
	                    m = 0,
	                    n,
	                    cx,
	                    cy,
	                    x = 0,
	                    y,
	                    stepX = this.options.snapStepX || this.wrapperWidth,
	                    stepY = this.options.snapStepY || this.wrapperHeight,
	                    el;
	
	                this.pages = [];
	
	                if (!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight) {
	                    return;
	                }
	
	                if (this.options.snap === true) {
	                    cx = Math.round(stepX / 2);
	                    cy = Math.round(stepY / 2);
	
	                    while (x > -this.scrollerWidth) {
	                        this.pages[i] = [];
	                        l = 0;
	                        y = 0;
	
	                        while (y > -this.scrollerHeight) {
	                            this.pages[i][l] = {
	                                x: Math.max(x, this.maxScrollX),
	                                y: Math.max(y, this.maxScrollY),
	                                width: stepX,
	                                height: stepY,
	                                cx: x - cx,
	                                cy: y - cy
	                            };
	
	                            y -= stepY;
	                            l++;
	                        }
	
	                        x -= stepX;
	                        i++;
	                    }
	                } else {
	                    el = this.options.snap;
	                    l = el.length;
	                    n = -1;
	
	                    for (; i < l; i++) {
	                        if (i === 0 || el[i].offsetLeft <= el[i - 1].offsetLeft) {
	                            m = 0;
	                            n++;
	                        }
	
	                        if (!this.pages[m]) {
	                            this.pages[m] = [];
	                        }
	
	                        x = Math.max(-el[i].offsetLeft, this.maxScrollX);
	                        y = Math.max(-el[i].offsetTop, this.maxScrollY);
	                        cx = x - Math.round(el[i].offsetWidth / 2);
	                        cy = y - Math.round(el[i].offsetHeight / 2);
	
	                        this.pages[m][n] = {
	                            x: x,
	                            y: y,
	                            width: el[i].offsetWidth,
	                            height: el[i].offsetHeight,
	                            cx: cx,
	                            cy: cy
	                        };
	
	                        if (x > this.maxScrollX) {
	                            m++;
	                        }
	                    }
	                }
	
	                this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);
	
	                // Update snap threshold if needed
	                if (this.options.snapThreshold % 1 === 0) {
	                    this.snapThresholdX = this.options.snapThreshold;
	                    this.snapThresholdY = this.options.snapThreshold;
	                } else {
	                    this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
	                    this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
	                }
	            });
	
	            this.on('flick', function () {
	                var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.x - this.startX), 1000), Math.min(Math.abs(this.y - this.startY), 1000)), 300);
	
	                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, time);
	            });
	        },
	
	        _nearestSnap: function _nearestSnap(x, y) {
	            if (!this.pages.length) {
	                return { x: 0, y: 0, pageX: 0, pageY: 0 };
	            }
	
	            var i = 0,
	                l = this.pages.length,
	                m = 0;
	
	            // Check if we exceeded the snap threshold
	            if (Math.abs(x - this.absStartX) < this.snapThresholdX && Math.abs(y - this.absStartY) < this.snapThresholdY) {
	                return this.currentPage;
	            }
	
	            if (x > 0) {
	                x = 0;
	            } else if (x < this.maxScrollX) {
	                x = this.maxScrollX;
	            }
	
	            if (y > 0) {
	                y = 0;
	            } else if (y < this.maxScrollY) {
	                y = this.maxScrollY;
	            }
	
	            for (; i < l; i++) {
	                if (x >= this.pages[i][0].cx) {
	                    x = this.pages[i][0].x;
	                    break;
	                }
	            }
	
	            l = this.pages[i].length;
	
	            for (; m < l; m++) {
	                if (y >= this.pages[0][m].cy) {
	                    y = this.pages[0][m].y;
	                    break;
	                }
	            }
	
	            if (i == this.currentPage.pageX) {
	                i += this.directionX;
	
	                if (i < 0) {
	                    i = 0;
	                } else if (i >= this.pages.length) {
	                    i = this.pages.length - 1;
	                }
	
	                x = this.pages[i][0].x;
	            }
	
	            if (m == this.currentPage.pageY) {
	                m += this.directionY;
	
	                if (m < 0) {
	                    m = 0;
	                } else if (m >= this.pages[0].length) {
	                    m = this.pages[0].length - 1;
	                }
	
	                y = this.pages[0][m].y;
	            }
	
	            return {
	                x: x,
	                y: y,
	                pageX: i,
	                pageY: m
	            };
	        },
	
	        goToPage: function goToPage(x, y, time, easing) {
	            easing = easing || this.options.bounceEasing;
	
	            if (x >= this.pages.length) {
	                x = this.pages.length - 1;
	            } else if (x < 0) {
	                x = 0;
	            }
	
	            if (y >= this.pages[x].length) {
	                y = this.pages[x].length - 1;
	            } else if (y < 0) {
	                y = 0;
	            }
	
	            var posX = this.pages[x][y].x,
	                posY = this.pages[x][y].y;
	
	            time = time === undefined ? this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;
	
	            this.currentPage = {
	                x: posX,
	                y: posY,
	                pageX: x,
	                pageY: y
	            };
	
	            this.scrollTo(posX, posY, time, easing);
	        },
	
	        next: function next(time, easing) {
	            var x = this.currentPage.pageX,
	                y = this.currentPage.pageY;
	
	            x++;
	
	            if (x >= this.pages.length && this.hasVerticalScroll) {
	                x = 0;
	                y++;
	            }
	
	            this.goToPage(x, y, time, easing);
	        },
	
	        prev: function prev(time, easing) {
	            var x = this.currentPage.pageX,
	                y = this.currentPage.pageY;
	
	            x--;
	
	            if (x < 0 && this.hasVerticalScroll) {
	                x = 0;
	                y--;
	            }
	
	            this.goToPage(x, y, time, easing);
	        },
	
	        _initKeys: function _initKeys(e) {
	            // default key bindings
	            var keys = {
	                pageUp: 33,
	                pageDown: 34,
	                end: 35,
	                home: 36,
	                left: 37,
	                up: 38,
	                right: 39,
	                down: 40
	            };
	            var i;
	
	            // if you give me characters I give you keycode
	            if (_typeof(this.options.keyBindings) == 'object') {
	                for (i in this.options.keyBindings) {
	                    if (typeof this.options.keyBindings[i] == 'string') {
	                        this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
	                    }
	                }
	            } else {
	                this.options.keyBindings = {};
	            }
	
	            for (i in keys) {
	                this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
	            }
	
	            utils.addEvent(window, 'keydown', this);
	
	            this.on('destroy', function () {
	                utils.removeEvent(window, 'keydown', this);
	            });
	        },
	
	        _key: function _key(e) {
	            if (!this.enabled) {
	                return;
	            }
	
	            var snap = this.options.snap,
	                // we are using this alot, better to cache it
	            newX = snap ? this.currentPage.pageX : this.x,
	                newY = snap ? this.currentPage.pageY : this.y,
	                now = utils.getTime(),
	                prevTime = this.keyTime || 0,
	                acceleration = 0.250,
	                pos;
	
	            if (this.options.useTransition && this.isInTransition) {
	                pos = this.getComputedPosition();
	
	                this._translate(Math.round(pos.x), Math.round(pos.y));
	                this.isInTransition = false;
	            }
	
	            this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;
	
	            switch (e.keyCode) {
	                case this.options.keyBindings.pageUp:
	                    if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
	                        newX += snap ? 1 : this.wrapperWidth;
	                    } else {
	                        newY += snap ? 1 : this.wrapperHeight;
	                    }
	                    break;
	                case this.options.keyBindings.pageDown:
	                    if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
	                        newX -= snap ? 1 : this.wrapperWidth;
	                    } else {
	                        newY -= snap ? 1 : this.wrapperHeight;
	                    }
	                    break;
	                case this.options.keyBindings.end:
	                    newX = snap ? this.pages.length - 1 : this.maxScrollX;
	                    newY = snap ? this.pages[0].length - 1 : this.maxScrollY;
	                    break;
	                case this.options.keyBindings.home:
	                    newX = 0;
	                    newY = 0;
	                    break;
	                case this.options.keyBindings.left:
	                    newX += snap ? -1 : 5 + this.keyAcceleration >> 0;
	                    break;
	                case this.options.keyBindings.up:
	                    newY += snap ? 1 : 5 + this.keyAcceleration >> 0;
	                    break;
	                case this.options.keyBindings.right:
	                    newX -= snap ? -1 : 5 + this.keyAcceleration >> 0;
	                    break;
	                case this.options.keyBindings.down:
	                    newY -= snap ? 1 : 5 + this.keyAcceleration >> 0;
	                    break;
	                default:
	                    return;
	            }
	
	            if (snap) {
	                this.goToPage(newX, newY);
	                return;
	            }
	
	            if (newX > 0) {
	                newX = 0;
	                this.keyAcceleration = 0;
	            } else if (newX < this.maxScrollX) {
	                newX = this.maxScrollX;
	                this.keyAcceleration = 0;
	            }
	
	            if (newY > 0) {
	                newY = 0;
	                this.keyAcceleration = 0;
	            } else if (newY < this.maxScrollY) {
	                newY = this.maxScrollY;
	                this.keyAcceleration = 0;
	            }
	
	            this.scrollTo(newX, newY, 0);
	
	            this.keyTime = now;
	        },
	
	        _animate: function _animate(destX, destY, duration, easingFn) {
	            var that = this,
	                startX = this.x,
	                startY = this.y,
	                startTime = utils.getTime(),
	                destTime = startTime + duration;
	
	            function step() {
	                var now = utils.getTime(),
	                    newX,
	                    newY,
	                    easing;
	
	                if (now >= destTime) {
	                    that.isAnimating = false;
	                    that._translate(destX, destY);
	
	                    if (!that.resetPosition(that.options.bounceTime)) {
	                        that._execEvent('scrollEnd');
	                    }
	
	                    return;
	                }
	
	                now = (now - startTime) / duration;
	                easing = easingFn(now);
	                newX = (destX - startX) * easing + startX;
	                newY = (destY - startY) * easing + startY;
	                that._translate(newX, newY);
	
	                if (that.isAnimating) {
	                    rAF(step);
	                }
	            }
	
	            this.isAnimating = true;
	            step();
	        },
	        handleEvent: function handleEvent(e) {
	            switch (e.type) {
	                case 'touchstart':
	                case 'pointerdown':
	                case 'MSPointerDown':
	                case 'mousedown':
	                    this._start(e);
	                    break;
	                case 'touchmove':
	                case 'pointermove':
	                case 'MSPointerMove':
	                case 'mousemove':
	                    this._move(e);
	                    break;
	                case 'touchend':
	                case 'pointerup':
	                case 'MSPointerUp':
	                case 'mouseup':
	                case 'touchcancel':
	                case 'pointercancel':
	                case 'MSPointerCancel':
	                case 'mousecancel':
	                    this._end(e);
	                    break;
	                case 'orientationchange':
	                case 'resize':
	                    this._resize();
	                    break;
	                case 'transitionend':
	                case 'webkitTransitionEnd':
	                case 'oTransitionEnd':
	                case 'MSTransitionEnd':
	                    this._transitionEnd(e);
	                    break;
	                case 'wheel':
	                case 'DOMMouseScroll':
	                case 'mousewheel':
	                    this._wheel(e);
	                    break;
	                case 'keydown':
	                    this._key(e);
	                    break;
	                case 'click':
	                    if (this.enabled && !e._constructed) {
	                        e.preventDefault();
	                        e.stopPropagation();
	                    }
	                    break;
	            }
	        }
	    };
	    function createDefaultScrollbar(direction, interactive, type) {
	        var scrollbar = document.createElement('div'),
	            indicator = document.createElement('div');
	
	        if (type === true) {
	            scrollbar.style.cssText = 'position:absolute;z-index:9999';
	            indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
	        }
	
	        indicator.className = 'iScrollIndicator';
	
	        if (direction == 'h') {
	            if (type === true) {
	                scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
	                indicator.style.height = '100%';
	            }
	            scrollbar.className = 'iScrollHorizontalScrollbar';
	        } else {
	            if (type === true) {
	                scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
	                indicator.style.width = '100%';
	            }
	            scrollbar.className = 'iScrollVerticalScrollbar';
	        }
	
	        scrollbar.style.cssText += ';overflow:hidden';
	
	        if (!interactive) {
	            scrollbar.style.pointerEvents = 'none';
	        }
	
	        scrollbar.appendChild(indicator);
	
	        return scrollbar;
	    }
	
	    function Indicator(scroller, options) {
	        this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
	        this.wrapperStyle = this.wrapper.style;
	        this.indicator = this.wrapper.children[0];
	        this.indicatorStyle = this.indicator.style;
	        this.scroller = scroller;
	
	        this.options = {
	            listenX: true,
	            listenY: true,
	            interactive: false,
	            resize: true,
	            defaultScrollbars: false,
	            shrink: false,
	            fade: false,
	            speedRatioX: 0,
	            speedRatioY: 0
	        };
	
	        for (var i in options) {
	            this.options[i] = options[i];
	        }
	
	        this.sizeRatioX = 1;
	        this.sizeRatioY = 1;
	        this.maxPosX = 0;
	        this.maxPosY = 0;
	
	        if (this.options.interactive) {
	            if (!this.options.disableTouch) {
	                utils.addEvent(this.indicator, 'touchstart', this);
	                utils.addEvent(window, 'touchend', this);
	            }
	            if (!this.options.disablePointer) {
	                utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
	                utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
	            }
	            if (!this.options.disableMouse) {
	                utils.addEvent(this.indicator, 'mousedown', this);
	                utils.addEvent(window, 'mouseup', this);
	            }
	        }
	
	        if (this.options.fade) {
	            this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
	            var durationProp = utils.style.transitionDuration;
	            this.wrapperStyle[durationProp] = utils.isBadAndroid ? '0.0001ms' : '0ms';
	            // remove 0.0001ms
	            var self = this;
	            if (utils.isBadAndroid) {
	                rAF(function () {
	                    if (self.wrapperStyle[durationProp] === '0.0001ms') {
	                        self.wrapperStyle[durationProp] = '0s';
	                    }
	                });
	            }
	            this.wrapperStyle.opacity = '0';
	        }
	    }
	
	    Indicator.prototype = {
	        handleEvent: function handleEvent(e) {
	            switch (e.type) {
	                case 'touchstart':
	                case 'pointerdown':
	                case 'MSPointerDown':
	                case 'mousedown':
	                    this._start(e);
	                    break;
	                case 'touchmove':
	                case 'pointermove':
	                case 'MSPointerMove':
	                case 'mousemove':
	                    this._move(e);
	                    break;
	                case 'touchend':
	                case 'pointerup':
	                case 'MSPointerUp':
	                case 'mouseup':
	                case 'touchcancel':
	                case 'pointercancel':
	                case 'MSPointerCancel':
	                case 'mousecancel':
	                    this._end(e);
	                    break;
	            }
	        },
	
	        destroy: function destroy() {
	            if (this.options.fadeScrollbars) {
	                clearTimeout(this.fadeTimeout);
	                this.fadeTimeout = null;
	            }
	            if (this.options.interactive) {
	                utils.removeEvent(this.indicator, 'touchstart', this);
	                utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
	                utils.removeEvent(this.indicator, 'mousedown', this);
	
	                utils.removeEvent(window, 'touchmove', this);
	                utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
	                utils.removeEvent(window, 'mousemove', this);
	
	                utils.removeEvent(window, 'touchend', this);
	                utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
	                utils.removeEvent(window, 'mouseup', this);
	            }
	
	            if (this.options.defaultScrollbars) {
	                this.wrapper.parentNode.removeChild(this.wrapper);
	            }
	        },
	
	        _start: function _start(e) {
	            var point = e.touches ? e.touches[0] : e;
	
	            e.preventDefault();
	            e.stopPropagation();
	
	            this.transitionTime();
	
	            this.initiated = true;
	            this.moved = false;
	            this.lastPointX = point.pageX;
	            this.lastPointY = point.pageY;
	
	            this.startTime = utils.getTime();
	
	            if (!this.options.disableTouch) {
	                utils.addEvent(window, 'touchmove', this);
	            }
	            if (!this.options.disablePointer) {
	                utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
	            }
	            if (!this.options.disableMouse) {
	                utils.addEvent(window, 'mousemove', this);
	            }
	
	            this.scroller._execEvent('beforeScrollStart');
	        },
	
	        _move: function _move(e) {
	            var point = e.touches ? e.touches[0] : e,
	                deltaX,
	                deltaY,
	                newX,
	                newY,
	                timestamp = utils.getTime();
	
	            if (!this.moved) {
	                this.scroller._execEvent('scrollStart');
	            }
	
	            this.moved = true;
	
	            deltaX = point.pageX - this.lastPointX;
	            this.lastPointX = point.pageX;
	
	            deltaY = point.pageY - this.lastPointY;
	            this.lastPointY = point.pageY;
	
	            newX = this.x + deltaX;
	            newY = this.y + deltaY;
	
	            this._pos(newX, newY);
	
	            // INSERT POINT: indicator._move
	
	            e.preventDefault();
	            e.stopPropagation();
	        },
	
	        _end: function _end(e) {
	            if (!this.initiated) {
	                return;
	            }
	
	            this.initiated = false;
	
	            e.preventDefault();
	            e.stopPropagation();
	
	            utils.removeEvent(window, 'touchmove', this);
	            utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
	            utils.removeEvent(window, 'mousemove', this);
	
	            if (this.scroller.options.snap) {
	                var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);
	
	                var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - snap.x), 1000), Math.min(Math.abs(this.scroller.y - snap.y), 1000)), 300);
	
	                if (this.scroller.x != snap.x || this.scroller.y != snap.y) {
	                    this.scroller.directionX = 0;
	                    this.scroller.directionY = 0;
	                    this.scroller.currentPage = snap;
	                    this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
	                }
	            }
	
	            if (this.moved) {
	                this.scroller._execEvent('scrollEnd');
	            }
	        },
	
	        transitionTime: function transitionTime(time) {
	            time = time || 0;
	            var durationProp = utils.style.transitionDuration;
	            this.indicatorStyle[durationProp] = time + 'ms';
	
	            if (!time && utils.isBadAndroid) {
	                this.indicatorStyle[durationProp] = '0.0001ms';
	                // remove 0.0001ms
	                var self = this;
	                rAF(function () {
	                    if (self.indicatorStyle[durationProp] === '0.0001ms') {
	                        self.indicatorStyle[durationProp] = '0s';
	                    }
	                });
	            }
	        },
	
	        transitionTimingFunction: function transitionTimingFunction(easing) {
	            this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
	        },
	
	        refresh: function refresh() {
	            this.transitionTime();
	
	            if (this.options.listenX && !this.options.listenY) {
	                this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
	            } else if (this.options.listenY && !this.options.listenX) {
	                this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
	            } else {
	                this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
	            }
	
	            if (this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll) {
	                utils.addClass(this.wrapper, 'iScrollBothScrollbars');
	                utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');
	
	                if (this.options.defaultScrollbars && this.options.customStyle) {
	                    if (this.options.listenX) {
	                        this.wrapper.style.right = '8px';
	                    } else {
	                        this.wrapper.style.bottom = '8px';
	                    }
	                }
	            } else {
	                utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
	                utils.addClass(this.wrapper, 'iScrollLoneScrollbar');
	
	                if (this.options.defaultScrollbars && this.options.customStyle) {
	                    if (this.options.listenX) {
	                        this.wrapper.style.right = '2px';
	                    } else {
	                        this.wrapper.style.bottom = '2px';
	                    }
	                }
	            }
	
	            var r = this.wrapper.offsetHeight; // force refresh
	
	            if (this.options.listenX) {
	                this.wrapperWidth = this.wrapper.clientWidth;
	                if (this.options.resize) {
	                    this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
	                    this.indicatorStyle.width = this.indicatorWidth + 'px';
	                } else {
	                    this.indicatorWidth = this.indicator.clientWidth;
	                }
	
	                this.maxPosX = this.wrapperWidth - this.indicatorWidth;
	
	                if (this.options.shrink == 'clip') {
	                    this.minBoundaryX = -this.indicatorWidth + 8;
	                    this.maxBoundaryX = this.wrapperWidth - 8;
	                } else {
	                    this.minBoundaryX = 0;
	                    this.maxBoundaryX = this.maxPosX;
	                }
	
	                this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX;
	            }
	
	            if (this.options.listenY) {
	                this.wrapperHeight = this.wrapper.clientHeight;
	                if (this.options.resize) {
	                    this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
	                    this.indicatorStyle.height = this.indicatorHeight + 'px';
	                } else {
	                    this.indicatorHeight = this.indicator.clientHeight;
	                }
	
	                this.maxPosY = this.wrapperHeight - this.indicatorHeight;
	
	                if (this.options.shrink == 'clip') {
	                    this.minBoundaryY = -this.indicatorHeight + 8;
	                    this.maxBoundaryY = this.wrapperHeight - 8;
	                } else {
	                    this.minBoundaryY = 0;
	                    this.maxBoundaryY = this.maxPosY;
	                }
	
	                this.maxPosY = this.wrapperHeight - this.indicatorHeight;
	                this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY;
	            }
	
	            this.updatePosition();
	        },
	
	        updatePosition: function updatePosition() {
	            var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
	                y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;
	
	            if (!this.options.ignoreBoundaries) {
	                if (x < this.minBoundaryX) {
	                    if (this.options.shrink == 'scale') {
	                        this.width = Math.max(this.indicatorWidth + x, 8);
	                        this.indicatorStyle.width = this.width + 'px';
	                    }
	                    x = this.minBoundaryX;
	                } else if (x > this.maxBoundaryX) {
	                    if (this.options.shrink == 'scale') {
	                        this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
	                        this.indicatorStyle.width = this.width + 'px';
	                        x = this.maxPosX + this.indicatorWidth - this.width;
	                    } else {
	                        x = this.maxBoundaryX;
	                    }
	                } else if (this.options.shrink == 'scale' && this.width != this.indicatorWidth) {
	                    this.width = this.indicatorWidth;
	                    this.indicatorStyle.width = this.width + 'px';
	                }
	
	                if (y < this.minBoundaryY) {
	                    if (this.options.shrink == 'scale') {
	                        this.height = Math.max(this.indicatorHeight + y * 3, 8);
	                        this.indicatorStyle.height = this.height + 'px';
	                    }
	                    y = this.minBoundaryY;
	                } else if (y > this.maxBoundaryY) {
	                    if (this.options.shrink == 'scale') {
	                        this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
	                        this.indicatorStyle.height = this.height + 'px';
	                        y = this.maxPosY + this.indicatorHeight - this.height;
	                    } else {
	                        y = this.maxBoundaryY;
	                    }
	                } else if (this.options.shrink == 'scale' && this.height != this.indicatorHeight) {
	                    this.height = this.indicatorHeight;
	                    this.indicatorStyle.height = this.height + 'px';
	                }
	            }
	
	            this.x = x;
	            this.y = y;
	
	            if (this.scroller.options.useTransform) {
	                this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
	            } else {
	                this.indicatorStyle.left = x + 'px';
	                this.indicatorStyle.top = y + 'px';
	            }
	        },
	
	        _pos: function _pos(x, y) {
	            if (x < 0) {
	                x = 0;
	            } else if (x > this.maxPosX) {
	                x = this.maxPosX;
	            }
	
	            if (y < 0) {
	                y = 0;
	            } else if (y > this.maxPosY) {
	                y = this.maxPosY;
	            }
	
	            x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
	            y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;
	
	            this.scroller.scrollTo(x, y);
	        },
	
	        fade: function fade(val, hold) {
	            if (hold && !this.visible) {
	                return;
	            }
	
	            clearTimeout(this.fadeTimeout);
	            this.fadeTimeout = null;
	
	            var time = val ? 250 : 500,
	                delay = val ? 0 : 300;
	
	            val = val ? '1' : '0';
	
	            this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';
	
	            this.fadeTimeout = setTimeout(function (val) {
	                this.wrapperStyle.opacity = val;
	                this.visible = +val;
	            }.bind(this, val), delay);
	        }
	    };
	
	    IScroll.utils = utils;
	
	    if (typeof module != 'undefined' && module.exports) {
	        module.exports = IScroll;
	    } else if (true) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return IScroll;
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        window.IScroll = IScroll;
	    }
	})(window, document, Math);

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var IScroll = __webpack_require__(139);
	var ISSCROLLCLICK = __webpack_require__(109)();
	
	var DEFAILTCONFIG = {
	    len4showCalendar: 6
	};
	
	function Domain(vm) {
	    this.vm = vm;
	}
	
	Domain.prototype = {
	    getDate: function getDate(selectDate, source) {
	        var self = this;
	        var vm = this.vm;
	        this.handleLoading({
	            show: true,
	            top: this._getLoadingTop()
	        });
	        this._handleSourceScroll('disable');
	        vm.model.getDate(source).then(function (dateObj) {
	            vm.$options.CONSTDATA.openPageTime = +new Date();
	            vm.isRenderCalendar = dateObj.calendarDayList.length > DEFAILTCONFIG.len4showCalendar;
	            vm.calendarDayList = dateObj.calendarDayList;
	            vm.calendarMonthList = dateObj.calendarMonthList;
	            if (source) {
	                typeof self['_' + source] == 'function' && self['_' + source](selectDate);
	            }
	            var date = selectDate || dateObj.calendarDayList[0]['date'];
	            vm.sourceInfo = vm.model.getDateInfo(date);
	
	            vm.currentDate = date;
	            var status = vm.sourceInfo.status;
	            if (status == 'TOMORROW_OPEN' || status == 'WAIT_OPEN') {
	
	                vm.selectDate(vm.sourceInfo);
	            } else {
	                self.getResourceDetail(date, source);
	            }
	        });
	    },
	    getResourceDetail: function getResourceDetail(date, source) {
	        var self = this;
	        var vm = this.vm;
	        vm.model.getResource(date, source).then(function (obj) {
	            self.handleLoading(false);
	            self._handleSourceScroll('enable');
	            if (!obj) {
	                vm.sourceList = '';
	                vm.allList = '';
	                vm.recommendList = '';
	                vm.evaluation = '';
	                vm.isShowShortList = false;
	                return;
	            } // 防止前面的请求之后到
	            if (obj.shortList.length) {
	                vm.sourceList = obj.shortList;
	                vm.allList = obj.sourceList;
	                vm.isShowShortList = true;
	            } else {
	                vm.sourceList = obj.sourceList;
	                vm.isShowShortList = false;
	            }
	            vm.evaluation = obj.evaluation;
	            vm.recommendList = obj.refSourceNo;
	            vm.sourceMap = obj.sourceMap;
	        }, function () {
	            self._handleSourceScroll('enable');
	        });
	    },
	    calculateTimer: function calculateTimer(date) {
	        var self = this;
	        var vm = this.vm;
	        var restTime = vm.sourceInfo.waitOpenTime - (+new Date() - vm.$options.CONSTDATA.openPageTime);
	        if (restTime < 0) {
	            this._resetWaitSourceStatus();
	            return;
	        }
	        vm.restTime = this._timeConversion(restTime);
	        clearTimeout(this.timer);
	        this.timer = setTimeout(function () {
	            self.calculateTimer(date);
	        }, 1000);
	    },
	    initScroll: function initScroll() {
	        var vm = this.vm;
	        vm.dateScroll = new IScroll('#js-date-scroll', {
	            eventPassthrough: true,
	            scrollX: true,
	            scrollY: false,
	            preventDefault: true,
	            click: ISSCROLLCLICK
	        });
	        vm.sourceScroll = new IScroll('#js-wrap-scroll', {
	            preventDefault: true,
	            click: ISSCROLLCLICK
	        });
	        vm.iscrollTimer = setInterval(function () {
	            vm.dateScroll && vm.dateScroll.refresh();
	            vm.sourceScroll && vm.sourceScroll.refresh();
	            vm.calendarScroll && vm.calendarScroll.refresh();
	            vm.judgeSpecialtyDescShow && vm.judgeSpecialtyDescShow(true);
	        }, 3000);
	    },
	    refreshScroll: function refreshScroll(scroll) {
	        var vm = this.vm;
	        vm.$nextTick(function () {
	            vm[scroll] && vm[scroll].refresh();
	        });
	    },
	    _resetWaitSourceStatus: function _resetWaitSourceStatus() {
	        var vm = this.vm;
	        var date = vm.sourceInfo.date;
	        this.getDate(date);
	        clearTimeout(this.timer);
	        this.timer = null;
	    },
	    getMYD: function getMYD(date) {
	        var d = new Date(date);
	        var moth = d.getMonth() + 1,
	            day = d.getDate(),
	            hours = d.getHours(),
	            minutes = d.getMinutes();
	
	        day = day < 10 ? '0' + day : day;
	        hours = hours < 10 ? '0' + hours : hours;
	        minutes = minutes < 10 ? '0' + minutes : minutes;
	
	        return {
	            timeText: moth + '月' + day + '日 ' + hours + ':' + minutes,
	            hours: hours + ':' + minutes
	        };
	    },
	    _timeConversion: function _timeConversion(a) {
	        var hours = 60 * 60 * 1000;
	        var minutes = 60 * 1000;
	        var seconds = 1000;
	
	        var h = parseInt(a / hours, 10);
	        var m = parseInt(a % hours / minutes, 10);
	        var s = parseInt(a % hours % minutes / seconds, 10);
	
	        return [convert2digit(h), convert2digit(m), convert2digit(s)];
	    },
	    _recommend: function _recommend(selectDate) {
	        this._proxyScrollToElement(selectDate);
	    },
	    _back: function _back(selectDate) {
	        this._proxyScrollToElement(selectDate);
	    },
	    _proxyScrollToElement: function _proxyScrollToElement(selectDate) {
	        var self = this;
	        setTimeout(function () {
	            self._scrollToElement(selectDate.slice(5));
	        }, 300);
	    },
	    _scrollToElement: function _scrollToElement(date, time, offsetX) {
	        var vm = this.vm;
	        vm.$nextTick(function () {
	            var t = time ? time : 500;
	            var x = offsetX ? offsetX : -5;
	            vm.dateScroll.scrollToElement(document.getElementById('date-scroll-li-' + date), t, x);
	        });
	    },
	    _getLoadingTop: function _getLoadingTop() {
	        var nav = document.querySelector('#js-nav');
	        var navHeight = nav && nav.clientHeight;
	        if (typeof navHeight !== 'number') {
	            navHeight = 40;
	        }
	        // 80 为横向日历的高度，不想获取 dom 高度
	        var loadingTop = 80 + navHeight + 5;
	        return loadingTop;
	    },
	    _handleSourceScroll: function _handleSourceScroll(type) {
	        this.vm.sourceScroll && this.vm.sourceScroll[type]();
	    },
	    handleScroll: function handleScroll(type) {
	        this.vm.dateScroll && this.vm.dateScroll[type]();
	        this.vm.sourceScroll && this.vm.sourceScroll[type]();
	    },
	    handleLoading: function handleLoading(opts) {
	        // iPhone 4s 第一次 loading 不消失
	        var vm = this.vm;
	        if (opts.show) {
	            vm.loading = {
	                content: '加载中，请稍后',
	                show: opts.show,
	                css: {
	                    top: opts.top ? opts.top + 'px' : '0px',
	                    bottom: opts.bottom ? opts.bottom + 'px' : '0px'
	                }
	            };
	        } else {
	            setTimeout(function () {
	                vm.loading = {
	                    content: '加载中，请稍后',
	                    show: opts.show,
	                    css: {
	                        top: opts.top ? opts.top + 'px' : '0px',
	                        bottom: opts.bottom ? opts.bottom + 'px' : '0px'
	                    }
	                };
	            }, 200);
	        }
	    }
	};
	
	function convert2digit(str) {
	    return str < 10 ? '0' + str : str;
	}
	
	module.exports = Domain;

/***/ },
/* 141 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = Model;
	
	var weekArr = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
	// 可预约 AVAILABLE,
	// 约满 SOLD_OUT
	// 不可预约  UNAVAILABLE,
	// 无号源  NO_INVENTORY
	// 等待放号 WAIT_OPEN
	var SOURCTSTATUSTEXT = {
	    AVAILABLE: '有号',
	    UNAVAILABLE: '约满', // 不可约
	    NO_INVENTORY: '无号',
	    SOLD_OUT: '约满',
	    WAIT_OPEN: '',
	    TOMORROW_OPEN: '即将放号',
	    NO_CONFIG: '即将放号'
	};
	
	var SOURCETYPETEXT = {
	    allDayList: '全天号源',
	    amList: '上午号源',
	    pmList: '下午号源',
	    nightList: '晚间号源'
	};
	
	function Model(vm) {
	    this.vm = vm;
	    this.resourceInfo = '';
	    this.getDeptInfo();
	    this._resourceMap = {}; // 以日期为 key 的日期信息
	    this._cacheAjax = [];
	}
	
	Model.prototype = {
	    /**
	     * 获取日期数据
	     * @return {Array} @_formatDate
	     */
	    getDate: function getDate() {
	        var self = this;
	        this._cancaleAjax();
	        var source = this.vm.$http.CancelToken.source();
	        this._cacheAjax.push(source);
	        return this.vm.$http.get('/mobile/wx/product/list', {
	            params: {
	                hosCode: this.resourceInfo.hosCode,
	                firstDeptCode: this.resourceInfo.firstDeptCode,
	                secondDeptCode: this.resourceInfo.secondDeptCode
	            },
	            cancelToken: source.token
	        }).then(function (data) {
	            var formatData;
	            if (self._resCodehandler(data)) {
	                formatData = self._formatDateList(data.data.data);
	            }
	            return formatData;
	        });
	    },
	    /**
	     * 获取号源
	     * @param  {Object} params date, status
	     * @return {[type]}        [description]
	     */
	    getResource: function getResource(date, from) {
	        var self = this;
	        var source = this.vm.$http.CancelToken.source();
	        this._cacheAjax.push(source);
	        var currentSourceInfo = this.getDateInfo(date);
	        var reqParams = {
	            hosCode: this.resourceInfo.hosCode,
	            firstDeptCode: this.resourceInfo.firstDeptCode,
	            secondDeptCode: this.resourceInfo.secondDeptCode,
	            date: date,
	            status: currentSourceInfo.status,
	            from: from,
	            extra: true
	        };
	        return this.vm.$http.get('/mobile/wx/product/detail', {
	            params: reqParams,
	            cancelToken: source.token
	        }).then(function (data) {
	            var formatData;
	            if (self._resCodehandler(data)) {
	                // 请求日期与返回数据日期对不上，请空detail
	                if (data.data.data.queryDate != self.vm.currentDate) {
	                    return false; // 前面请求回来慢，直接啥事也不干
	                }
	                formatData = self._formatReource(data.data.data);
	            }
	            return {
	                sourceMap: formatData.sourceMap,
	                sourceList: formatData.sourceList,
	                refSourceNo: formatData.refSourceNo,
	                shortList: formatData.shortList,
	                evaluation: data.data.data.evaluation
	            };
	        });
	    },
	    preRegTimeCheck: function preRegTimeCheck(params) {
	        var self = this;
	        var vm = this.vm;
	        return vm.$http.get('/mobile/wx/order/preRegTimeCheck', {
	            params: params
	        }).then(function (res) {
	            if (self._resCodehandler(res)) {
	                return res;
	            }
	        });
	    },
	    /**
	     * 获取 url 上的参数
	     * @return {Object} 医院科室信息
	     */
	    getDeptInfo: function getDeptInfo() {
	        if (!this.resourceInfo) {
	            this.resourceInfo = this.vm.$route.query;
	        }
	        return this.resourceInfo;
	    },
	    getDateInfo: function getDateInfo(date) {
	        return this._resourceMap[date];
	    },
	    /**
	     * 获取日历信息
	     * @return {[type]} [description]
	     */
	    _formatDateList: function _formatDateList(data) {
	        var self = this;
	
	        var today = data.today;
	        var calendarDayList = []; // 日历每天的数据
	        var calendarMonthList = []; // 月每天的数据
	
	        data.dateList.forEach(function (item) {
	            // 构造横向日期数据 BEGIN
	            item.forEach(function (el) {
	                self._formatDateSource(el, today);
	                calendarDayList.push(el);
	                self._resourceMap[el.date] = el;
	            });
	            // 构造横向日期数据 END
	
	            // 构造日历显示数据 BEGIN
	            // 算出日历前后补位
	            var monthFirstDay = item[0],
	                arr = monthFirstDay.date.split('-'),
	                paddingBefore = new Array(monthFirstDay.dayOfWeek),
	                paddingLast = new Array(7 - (item.length + paddingBefore.length) % 7),
	                calendarTitle = arr[0] + '年' + parseInt(arr[1], 10) + '月';
	
	            var calendarMonthObj = {
	                title: calendarTitle,
	                list: []
	            };
	            var monthItem = paddingBefore.concat(item, paddingLast);
	
	            for (var i = 0, l = monthItem.length; i < l; i += 7) {
	                calendarMonthObj.list.push(monthItem.slice(i, i + 7));
	            }
	            calendarMonthList.push(calendarMonthObj);
	            // 构造日历显示数据 END
	        });
	        return {
	            calendarDayList: calendarDayList,
	            calendarMonthList: calendarMonthList,
	            today: today
	        };
	    },
	
	    /**
	     * 格式化日期数据
	     * @param  {String} date 2016-06-06, status: ’AVAILABLE'
	     * @return {Object} week: 周几, shortDate: 06-06, date: 2016-06-06, d: 几号
	     */
	    _formatDateSource: function _formatDateSource(data, today) {
	        var date = data.date;
	        var D = new Date(date);
	        var dayOfWeek = D.getDay(); // the day of the week
	
	        data.isToday = date === today;
	        data.week = weekArr[dayOfWeek];
	        data.shortDate = date.slice(5);
	        // -888 为后台没配置放号时间，最后一天这时不能点击
	        if (data.waitOpenTime == -888) {
	            data.status = 'NO_CONFIG';
	        }
	        var openTime = '';
	        if (data.status == 'WAIT_OPEN' || data.status == 'TOMORROW_OPEN') {
	            openTime = data.openTimestamp && this.vm.domain.getMYD(data.openTimestamp);
	            data.openTimestampText = openTime.timeText;
	        }
	
	        data.statusText = SOURCTSTATUSTEXT[data.status] || data.openTimestamp && openTime && openTime.hours + '放号';
	        data.dayOfMonth = parseInt(date.slice(8), 10); // 几号
	        data.dayOfWeek = dayOfWeek;
	    },
	    /**
	     * 格式化号源数据
	     * 排序：
	     *  AM 全 上 下 晚
	     *  PM 全 下 晚 上
	     *  NG 全 晚 上 下
	     * @param  {Array} data 源数据
	     * @return {Object}     sourceList: sourceType: 上午号源 item: arr
	     *                      referData
	     */
	    _formatReource: function _formatReource(data) {
	        var allArr = [];
	        var resourceTypeOrder = '';
	        switch (data.currentType) {
	            case 'AM':
	                resourceTypeOrder = ['allDayList', 'amList', 'pmList', 'nightList'];
	                break;
	            case 'PM':
	                resourceTypeOrder = ['allDayList', 'pmList', 'nightList', 'amList'];
	                break;
	            default:
	                resourceTypeOrder = ['allDayList', 'nightList', 'amList', 'pmList'];
	        }
	
	        var refSourceNo = data.refSourceNo;
	        var refLen = refSourceNo.length;
	        var sourceLen = 0;
	        var shortArr = [];
	        var sourceMap = {};
	        resourceTypeOrder.forEach(function (item) {
	            if (data[item] && data[item].length) {
	                sourceLen += data[item].length;
	                allArr.push({
	                    sourceTypeText: SOURCETYPETEXT[item],
	                    list: data[item]
	                });
	            }
	        });
	
	        // 有推荐号源的折叠逻辑，所有号源 length 大于 1
	        if (refLen > 0 && sourceLen > 1) {
	            var len = 0;
	            for (var i = 0, l = allArr.length; i < l; i++) {
	                if (len == 1) break;
	                var obj = allArr[i];
	                var list = [];
	                var sourceTypeText = obj.sourceTypeText;
	                for (var j = 0, ll = obj.list.length; j < ll; j++) {
	                    list.push(obj.list[j]);
	                    len++;
	                    if (len == 1) break;
	                }
	                shortArr.push({
	                    sourceTypeText: sourceTypeText,
	                    list: list
	                });
	            }
	        }
	
	        // 专长信息过长之后展示 点点，并制作一张 map
	        allArr.forEach(function (sourceList, listIndex) {
	            sourceList.list.forEach(function (item, index) {
	                item['index'] = '' + listIndex + index;
	                if (!sourceMap[item.index]) {
	                    sourceMap[item.index] = item;
	                }
	                item['showSpecialtyDesc'] = false;
	            });
	        });
	
	        return {
	            sourceList: allArr,
	            shortList: shortArr,
	            refSourceNo: refSourceNo,
	            sourceMap: sourceMap
	        };
	    },
	    _cancaleAjax: function _cancaleAjax() {
	        this._cacheAjax.forEach(function (item) {
	            item.cancel && item.cancel('CANCEL');
	        });
	        this._cacheAjax = [];
	    },
	    /**
	     * 统一处理resCode
	     * @param  {Object} data [接口返回对象]
	     */
	    _resCodehandler: function _resCodehandler(data) {
	        var resCode = data.data.resCode;
	        if (resCode === 0) {
	            return true;
	        }
	
	        this.vm.loading = false;
	        if (resCode != 101 && resCode != 102) {
	            this.vm.alert = {
	                type: 'tips',
	                content: data.data.msg
	            };
	        }
	        return false;
	    }
	};

/***/ },
/* 142 */
/***/ function(module, exports) {

	var CALENDARDATETPL, COUNTDOWNTPL, RECOMMTPL, tpl;
	
	tpl = '<div id="js-wrap-scroll" style="position: absolute; top: 40px; left: 0; right: 0; bottom: 0;">\n    <div>\n        <div class="nav" id="js-nav">\n            {{$options.CONSTDATA.hosName}} - <span>{{$options.CONSTDATA.firstDeptName}}</span> - <span>{{$options.CONSTDATA.secondDeptName}}</span>\n        </div>\n        <div class="datepicker-position">\n            <!-- 日历 begin-->\n            <section class="week week-bottom">\n                <div class="dateArea" :class="{ \'dateArea-calendar\': isRenderCalendar }" id="js-date-scroll">\n                    <ul id="js-date-scroll-ul">\n                        <li @click="selectDate(item)" v-for="item in calendarDayList" :class="{ \'item-on\': currentDate == item.date }" id="date-scroll-li-{{item.shortDate}}">\n                            <p>{{item.isToday ? \'今日\': item.week}}</p>\n                            <p>{{item.shortDate}}</p>\n                            <p :class="{ \'hasResource\': item.status == \'AVAILABLE\', \'fully\': item.status == \'SOLD_OUT\' || item.status == \'WAIT_OPEN\' || item.status == \'NO_CONFIG\' || item.status == \'TOMORROW_OPEN\', \'noResource\': item.status == \'NO_INVENTORY\' }">{{item.statusText}}</p>\n                        </li>\n                    </ul>\n                </div>\n                <a v-if="isRenderCalendar" @click="showCalendar" class="calendar-ico" href="javascript:;">\n                    <i class="ff-icon ff-calendar"></i>\n                </a>\n            </section>\n            <!-- 日历 end -->\n            <div v-for="item in sourceList">\n                <div class="number-des">\n                    {{ item.sourceTypeText }}\n                </div>\n                <div class="yo-list yo-list-day">\n                    <div v-for="el in item.list" class="item" :class="{\'addMore\': el.showSpecialtyDesc === \'show\'}">\n                        <div class="flex" @click="showSpecialtyDescMore(el)">\n                            <div class="title">\n                                {{ el.doctorInfo.title }}\n                                <span v-if="el.doctorInfo.special">{{ el.doctorInfo.name }}</span>\n                                <span v-if="el.remark">-</span>\n                                <span class="hasResource" v-if="el.remark"> {{ el.remark }}</span>\n                                <span class="lineColor-333">｜</span>\n                                <span class="c-red">{{ el.price }}</span>元\n                            </div>\n                            <div class="doctor-summary" data-index="{{ el.index }}">\n                                <span>专长：{{ el.doctorInfo.specialtyDesc || \'暂无信息\' }}</span>\n                            </div>\n                        </div>\n                        <div class="addMore-con" @click="showSpecialtyDescMore(el)"><i class="ff-icon ff-addMore-bottom"></i></div>\n                        <div class="res-r">\n                            <div class="btn">\n                                <a href="javascript:;" class="yo-btn yo-btn-s" :class="{ \'yo-btn-fully\': el.status == \'INVALID\'}" @click="preRegTimeCheck(el)">{{ $options.CONSTDATA.btnStatusText[el.status] }}</a>\n                            </div>\n                            <div class="remaining">剩余{{el.inventory}}个</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div v-if="isShowShortList" @click="showAllList" class="cardDetailInfo payDetail"><span class="moreResource">更多号源</span><i class="ff-icon ff-arr_bottom"></i></div>\n            <!-- </div> -->\n\n            RECOMMTPL\n            <div v-if="evaluation" @click="goToLableList" class="yo-list register-instructions">\n                <div class="item">\n                    <span>挂号须知</span>\n                    <i class="ff-icon ff-arrow-r"></i>\n                </div>\n            </div>\n            <div class="m-footer"></div>\n            COUNTDOWNTPL\n            CALENDARDATETPL\n        </div>\n    </div>\n    <alert :alert.sync="alert"></alert>\n    <loading :loading.sync="loading"></loading>\n</div>';
	
	RECOMMTPL = '<!-- 推荐同类号源 -->\n<div v-if=\'recommendList.length\' class="noSource">\n    <i class="ff-icon ff-noSource"></i>\n    <p>{{tips}}<span v-if="recommendList.length">，已为您筛选以下同类号源</span></p>\n</div>\n<div v-if=\'!recommendList.length && sourceInfo.status == "NO_INVENTORY"\' class="noSource">\n    <i class="ff-icon ff-noSource"></i>\n    <p>{{tips}}</p>\n</div>\n\n<div class="yo-list yo-list-col" v-if="recommendList.length">\n    <div @click="goToRecommend(item)" class="item" v-for="item in recommendList">\n        <a class="item-body" href="javascript:;">\n            <div class="mark">\n                <img :src="item.smallLogo">\n            </div>\n            <div class="flex">\n                <h2 class="title">{{item.hosName}}</h2>\n                <div class="detail">\n                    <i class="ff-icon ff-sjjd"></i>\n                    <span class="text-sjjd">{{item.hosLevel}}</span>\n                    <i class="ff-icon ff-addr"></i>\n                    <span class="text-addr">{{item.district}}</span>\n                    <i class="ff-icon ff-keshi"></i>\n                    <span class="c-red">{{item.firstDeptName}}</span>\n                </div>\n            </div>\n            <i class="ff-icon ff-arrR"></i>\n        </a>\n    </div>\n</div>\n<!-- 推荐同类号源 end-->';
	
	CALENDARDATETPL = '<div v-if="isRenderCalendar" v-show="isShowCalendar" class="datepicker-wrap">\n   <div class="yo-mask" @click="selectCalendarDate(false)"></div>\n   <!-- 此处为日历弹层 -->\n   <section class="yo-datepicker yo-datepicker-bm">\n       <ul class="week-bar">\n           <li>日</li>\n           <li>一</li>\n           <li>二</li>\n           <li>三</li>\n           <li>四</li>\n           <li>五</li>\n           <li>六</li>\n       </ul>\n       <div class="weeks" id="js-calendar-scroll" @click="selectCalendarDate(false)">\n           <div class=\'flex\'>\n               <div v-for="items in calendarMonthList">\n                   <h3 class="month-bar">{{items.title}}</h3>\n                   <div class="week-con">\n                       <ul class="week" v-for="item in items.list">\n                           <li v-for="el in item" id="calendar-scroll-li-{{el ? el.shortDate : \'\'}}" @click="selectCalendarDate(el)" :class="{ \'item-on\': el && el.date == currentDate, \'hasResource\': el && el.status == \'AVAILABLE\', \'noResource\': el &&  el.status == \'NO_INVENTORY\', \'fully\': el && el.status == \'SOLD_OUT\', \'moreWide fully\': el && el.statusText && el.statusText.length > 3 }" track-by="$index">\n                               <span v-if="el">{{el.isToday ? \'今日\' : el.dayOfMonth}}</span>\n                               <span v-if="el">{{el.statusText}}</span>\n                           </li>\n                       </ul>\n                   </div>\n               </div>\n               <div class="datepicker-tip"><i class="ff-icon ff-datepicker"></i>点击无号、约满日期，可以查看其它医院同类号源。</div>\n           </div>\n       </div>\n   </section>\n   <!-- 此处为日历弹层 end-->\n </div>';
	
	COUNTDOWNTPL = '<div class="countdown" v-if="sourceInfo.status == \'WAIT_OPEN\' || sourceInfo.status == \'TOMORROW_OPEN\'">\n    <p class="countdown-tit" v-if=\'sourceInfo.openTimestamp\'>距离 <span class="c-red">{{sourceInfo.openTimestampText}}</span> 放号还有</p >\n    <div class="countdown-bd">\n        <span class="time-nums">{{restTime[0]}}</span><span class="time-txt">时</span><span class="time-nums">{{restTime[1]}}</span><span class="time-txt">分</span><span class="time-nums">{{restTime[2]}}</span><span class="time-txt">秒</span>\n    </div>\n</div>';
	
	module.exports = tpl.replace('CALENDARDATETPL', CALENDARDATETPL).replace('RECOMMTPL', RECOMMTPL).replace('COUNTDOWNTPL', COUNTDOWNTPL);


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var tpl = __webpack_require__(144);
	var RegisterStrategy = Vue.component('register-strategy', {
	    template: tpl,
	    data: function data() {
	        return {
	            idx: 0,
	            arrImg: ['https://img.benmu-health.com/m-benmu-health/registrStrat_01.jpg', 'https://img.benmu-health.com/m-benmu-health/registrStrat_02.jpg', 'https://img.benmu-health.com/m-benmu-health/registrStrat_03.jpg', 'https://img.benmu-health.com/m-benmu-health/registrStrat_04.jpg', 'https://img.benmu-health.com/m-benmu-health/registrStrat_05.jpg', 'https://img.benmu-health.com/m-benmu-health/registrStrat_06.jpg', 'https://img.benmu-health.com/m-benmu-health/registrStrat_07.jpg'],
	            step: ['点击挂号', '选择医院', '选择科室', '选择日期及号源', '选择就诊人或绑定新卡', '点击支付', '挂号成功']
	        };
	    },
	    methods: {
	        changePage: function changePage(opt) {
	            if (opt == 2) {
	                this.idx < 1 ? this.idx = 0 : this.idx--;
	            } else {
	                this.idx >= this.arrImg.length - 1 ? this.idx = this.arrImg.length - 1 : this.idx++;
	            }
	        }
	    },
	    ready: function ready() {
	        document.setTitle('挂号攻略');
	    }
	});
	
	module.exports = RegisterStrategy;

/***/ },
/* 144 */
/***/ function(module, exports) {

	var tpl;
	
	tpl = '<div class="benmu-flex">\n    <div class="step-hd">\n        <div class="step-hd-box">\n            <div class="step-num">\n                <div class="item" v-for=\'val in arrImg\'\n                :class=\'{"selected-num":$index <= idx, "selected":$index==idx}\'>\n                    <span class="num">{{$index+1}}\n                        <i class="txt">{{step[$index]}}</i>\n                        <i class="num-current">{{$index+1}}</i>\n                    </span>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="bm-regStrStepImg">\n        <div class="bm-prevImg">\n            <img src="//img.benmu-health.com/m-benmu-health/registrStratPrev.png" alt="" style="display: inline;"\n            v-show=\'idx > 0\' @click=\'changePage(2)\'>\n        </div>\n        <div class="bm-StepImg">\n            <img :src="arrImg[idx]" alt="">\n        </div>\n        <div class="bm-nextImg">\n            <img src="//img.benmu-health.com/m-benmu-health/registrStratNext.png" alt="" style="display: inline;"\n            v-show=\'idx < arrImg.length - 1\' @click=\'changePage(1)\'>\n        </div>\n    </div>\n</div>';
	
	module.exports = tpl;


/***/ }
/******/ ]);
//# sourceMappingURL=register.js.map