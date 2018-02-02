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
	
	__webpack_require__(117);
	__webpack_require__(50);
	__webpack_require__(148);
	__webpack_require__(130);
	var md = __webpack_require__(158);
	var beacon = __webpack_require__(32);
	var Url = __webpack_require__(106);
	var tpl = __webpack_require__(175);
	var validate = __webpack_require__(152); // 表单校验规则
	var OVERALL = {
	    timer: '',
	    errMsgTimer: ''
	};
	
	//TODO 优化计时器
	new Vue({
	    el: '#app',
	    template: tpl,
	    data: {
	        checkKey: '', // 1: 发送验证码时，只校验账号  2: 验证码登录时，校验账号、验证码  3: 密码登录时，校验账号、密码
	        tabChange: true, // 验证码／密码登录tab切换
	        Tel: '', // 验证码帐号
	        verifCode: '', // 验证码
	        accountNum: '', // 密码帐号
	        password: '', // 密码
	        SMSCodeBtn: '获取验证码', // 验证码按钮文案变换
	        codeType: '', // 记录用户触发验证码事件  1-－触发短信  2-－触发语音
	        errMsg: '', // 阻止发送验证码(当前有倒计时正在进行)时，文案提示
	        isTimer: false, // what: 记录当前是否有倒计时进行  false: 没有  true：有  do: 用来判断当前是否可以重新发送验证码、辅助判断del图标是否显示、帐号输入框是否不可更改(readonly)
	        serviceShow: false,
	        alert: {},
	        loading: {
	            show: false
	        },
	        showDel: {
	            showDelTel: false,
	            showDelverifCode: false,
	            showDelaccountNum: false,
	            showDelpassword: false
	        }
	    },
	    methods: {
	        // 校验规则
	        checkRule: function checkRule() {
	            var Tel = [{
	                value: this.Tel,
	                rules: [{
	                    rule: 'required',
	                    msg: '请填写手机号码'
	                }, {
	                    rule: 'isMobile',
	                    msg: '请填写正确的手机号码'
	                }]
	            }];
	
	            var verifCode = [{
	                value: this.verifCode,
	                rules: [{
	                    rule: 'required',
	                    msg: '请填写验证码'
	                }, {
	                    rule: 'isVerifCode',
	                    msg: '填写的验证码有误，请核对后再试'
	                }]
	            }];
	            var pasLogin = [{
	                value: this.accountNum,
	                rules: [{
	                    rule: 'required',
	                    msg: '请填写手机号码'
	                }, {
	                    rule: 'isMobile',
	                    msg: '请填写正确的手机号码'
	                }]
	            }, {
	                value: this.password,
	                rules: [{
	                    rule: 'required',
	                    msg: '请填写密码'
	                }, {
	                    rule: 'minLength:6',
	                    msg: '请填写6-16位数字和字母的组合'
	                }, {
	                    rule: 'maxLength:16',
	                    msg: '请填写6-16位数字和字母的组合'
	                }, {
	                    rule: 'isPassword',
	                    msg: '填写的密码有误，请核对后再试'
	                }]
	            }];
	
	            var checkArr = [];
	            // 发送验证码时，只校验账号
	            if (this.checkKey == 1) {
	                checkArr = checkArr.concat(Tel);
	            }
	
	            // 验证码登录时，校验账号、验证码
	            if (this.checkKey == 2) {
	                checkArr = checkArr.concat(Tel, verifCode);
	            }
	
	            // 密码登录时，校验账号、密码
	            if (this.checkKey == 3) {
	                checkArr = checkArr.concat(pasLogin);
	            }
	
	            return checkArr;
	        },
	        serviceAgreement: function serviceAgreement() {
	            this.serviceShow = true;
	        },
	        // 校验功能
	        checkFn: function checkFn() {
	            // 返回校验结果，status(校验结果true/false)  msg: 校验失败时，返回的提示文案
	            var result = validate(this.checkRule());
	            if (!result.status) {
	                this.alert = {
	                    type: 'tips',
	                    content: result.msg
	                };
	            } else {
	                // 返回true，符合校验规则
	                return true;
	            }
	        },
	
	        // 触发发送验证码事件
	        sendVerifCode: function sendVerifCode(codeType) {
	            // 修改校验规则值，即改变校验需求规则
	            this.checkKey = 1;
	            if (this.checkFn()) {
	                if (!this.isTimer) {
	                    //if (!this.codeType && !this.isTimer) {
	                    this.codeType = codeType;
	                    // 根据 codeType 请求相应的验证码接口
	                    this.SMSCodeBtn = '正在发送中...';
	                    this.getVerifCode(this.codeType == 1 ? '/mobile/msg/verificationForSMS' : '/mobile/msg/verificationForVoice');
	                } else if (this.isTimer == true) {
	                    // 当前有验证码倒计时，阻止请求，文案提示
	                    this.errMsg = '正在发送' + (this.codeType == 1 ? '短信' : '语音') + '验证码，请勿重复点击';
	                    // 提示文案倒计时3秒，自动消失
	                    errMsgTime(this, 4);
	                }
	            }
	        },
	
	        // 请求验证码接口
	        getVerifCode: function getVerifCode(ajaxUrl) {
	            this.$http.get(ajaxUrl, {
	                'phone': this.Tel
	            }, {
	                _noNeedAlert: true
	            }).then(function (res) {
	                var resCode = res.data.resCode;
	                if (resCode == 0) {
	                    setTimeoutFun(this, 60);
	                } else {
	                    if (resCode != 101 && resCode != 102) {
	                        this.alert = {
	                            type: 'tips',
	                            content: res.data.msg
	                        };
	                    }
	
	                    //this.codeType = '';
	                    // 30秒内再次获取验证码，不更改按钮内容
	                    if (resCode != 5006) {
	                        this.SMSCodeBtn = '获取验证码';
	                    }
	
	                    // 当手机号无请求验证码机会，在30秒内再次请求时，不更改按钮文案
	                    if (!this.isTimer) {
	                        this.SMSCodeBtn = '获取验证码';
	                    }
	                }
	            }, function () {
	                //this.codeType = '';
	                this.SMSCodeBtn = '获取验证码';
	            });
	        },
	
	        //
	        /**
	         * 校验登录
	         * @param  {[type]} loginType 用户触发的登录类型  1: 验证码登录  2: 密码登录
	         */
	        checkLogin: function checkLogin(loginType) {
	            var param = {};
	            // 修改校验规则值，即改变校验需求规则
	            // 2: 验证码
	            // 3: 密码
	            this.checkKey = loginType == 1 ? 2 : 3;
	
	            if (this.checkKey == 2) {
	                if (!this.Tel || !this.verifCode) {
	                    return;
	                }
	            } else {
	                if (!this.accountNum || !this.password) {
	                    return;
	                }
	            }
	
	            if (this.checkFn()) {
	                // 校验成功
	                if (loginType == 1) {
	                    param = {
	                        'phone': this.Tel,
	                        'verifyCode': this.verifCode
	                    };
	                } else {
	                    param = {
	                        'phone': this.accountNum,
	                        'password': md.hex_md5(this.password)
	                    };
	                }
	                this.login('/mobile/wx/user/login', param, loginType);
	            }
	        },
	
	        // 请求登录接口
	        login: function login(ajaxUrl, param, loginType) {
	            var self = this;
	            this.loading = true;
	            this.$http.get(ajaxUrl, param, { _noNeedAlert: true }).then(function (res) {
	                this.loading = false;
	                var resCode = res.data.resCode;
	                if (resCode == 0) {
	                    if (loginType == 1) {
	                        localStorage.setItem('phone', this.Tel);
	                    } else {
	                        localStorage.setItem('phone', this.accountNum);
	                    }
	                    // 登录成功，首先哪来回哪
	                    if (Url.getParams().ref) {
	                        var _href = location.search.slice(5);
	                        window.location.href = decodeURIComponent(_href);
	                    } else {
	                        // 其次去我的账户中心
	                        window.location.href = Url.getUrl('myAccount');
	                    }
	                } else if (resCode == 10001) {
	                    this.alert = {
	                        type: 'confirm',
	                        content: '手机号码尚未注册，是否立即前往验证码登录？',
	                        confirmCallback: function confirmCallback() {
	                            window.location.href = Url.getUrl('userLogin');
	                        },
	                        button2Name: '前往验证码登录'
	                    };
	                } else {
	                    if (loginType == 1) {
	                        // 验证码登录情况下
	                        if (resCode == 5001) {
	                            // 同一个验证码，验证码错误，输错5次，验证码将失效，需重新获取
	                            this.alert = {
	                                type: 'confirm',
	                                content: res.data.msg,
	                                button2Name: '获取验证码',
	                                confirmCallback: function confirmCallback() {
	                                    // 发送验证码登录
	                                    //var codeType = self.codeType;
	                                    self.isTimer = false;
	                                    // self.codeType = '';
	                                    self.sendVerifCode(self.codeType);
	                                }
	                            };
	                        } else {
	                            if (resCode != 101 && resCode != 102) {
	                                this.alert = {
	                                    type: 'tips',
	                                    content: res.data.msg
	                                };
	                            }
	                        }
	                    } else {
	                        if (resCode != 101 && resCode != 102) {
	                            this.alert = {
	                                type: 'tips',
	                                content: res.data.msg
	                            };
	                        }
	                    }
	                }
	            }, function () {
	                this.loading = false;
	            });
	        },
	        showDelFun: function showDelFun(type) {
	            this.showDel[type] = true;
	        },
	        hideDelFun: function hideDelFun(type) {
	            this.showDel[type] = false;
	        }
	    },
	    ready: function ready() {
	        // beacon.sendClk({
	        //     arg_a: '登录',
	        //     l: 'info',
	        //     h: 'WeChat',
	        //     m: window.PHONEMODEL.type,
	        //     arg_b: window.PHONEMODEL.model || '',
	        //     arg_c: window.PHONEMODEL.system || ''
	        // });
	        this.Tel = localStorage.getItem('phone') || '';
	        this.accountNum = localStorage.getItem('phone') || '';
	    }
	});
	
	/**
	 * 验证码倒计时
	 * @param {num} time      倒计时的时间
	 * @param {num} timerType 用来区分哪个倒计时事件，这样做防止清错倒计时事件
	 *                        1-－验证码按钮倒计时
	 *                        2-－验证码提示文案倒计时
	 */
	function setTimeoutFun(vm, time) {
	    OVERALL.timer && clearTimeout(OVERALL.timer);
	    function countDown() {
	        if (time > 0) {
	            time--;
	            vm.SMSCodeBtn = time + '秒';
	            vm.isTimer = true;
	            OVERALL.timer = setTimeout(countDown, 1000);
	        } else {
	            //vm.codeType = '';
	            vm.isTimer = false;
	            vm.SMSCodeBtn = '获取验证码';
	            OVERALL.timer && clearTimeout(OVERALL.timer);
	        }
	    }
	    countDown();
	}
	
	function errMsgTime(vm, time) {
	    OVERALL.errMsgTimer && clearTimeout(OVERALL.errMsgTimer);
	    function countMsgDown() {
	        if (time > 0) {
	            time--;
	            OVERALL.errMsgTimer = setTimeout(countMsgDown, 1000);
	        } else {
	            vm.errMsg = '';
	            OVERALL.errMsgTimer && clearTimeout(OVERALL.errMsgTimer);
	        }
	    }
	    countMsgDown();
	}

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
	  // Don't bother if no value provided
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
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
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
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
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
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
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
	    // Only supports POST and GET calls and doesn't returns the response headers.
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
	
	      // The request errored out and we didn't get a response, this will be
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
/* 32 */
/***/ function(module, exports) {

	'use strict';
	
	// ty : type    beacon 类型
	// v : version  beacon 的版本号
	// rd : random  随机数，避免请求被缓存
	// r : reffer   reffer 值
	// t : 发送其请求时间   这个时间值是 beacon 发送时间
	// p : page     当前页面的page值
	// u : user     用户ID            暂无
	// m : machine  自助机机器编号
	// l : level    日志等级
	// h : hospital 医院信息
	// arg_a        beacon 值
	// arg_b        beacon 值
	// arg_c        beacon 值
	// arg_d        beacon 值
	// arg_e        beacon 值
	
	var VERSION = '0.0.1',
	    OTHERPARAMMAP = ['l', 'm', 'h', 'arg_a', 'arg_b', 'arg_c', 'arg_d', 'arg_e'],
	    PARAMMAP = ['ty', 'v', 'rd', 't', 'r', 'p', 'u', 'm', 'l', 'h', 'arg_a', 'arg_b', 'arg_c', 'arg_d', 'arg_e'].reverse();
	
	function Beacon() {
	    this.param = {};
	}
	
	Beacon.prototype = {
	
	    _getHashString: function _getHashString(key) {
	        var uri = window.location.hash.toString();
	        var re = new RegExp("" + key + "=([^&?]*)", "ig");
	        return uri.match(re) ? decodeURIComponent(uri.match(re)[0].substr(key.length + 1)) : "";
	    },
	
	    _getQueryString: function _getQueryString(key) {
	        var uri = window.location.search.toString();
	        var re = new RegExp("" + key + "=([^&?]*)", "ig");
	        return uri.match(re) ? decodeURIComponent(uri.match(re)[0].substr(key.length + 1)) : "";
	    },
	
	    _add: function _add(key, value) {
	        if (value != null) {
	            this.param[key] = value;
	        }
	    },
	
	    _getReffer: function _getReffer() {
	        var ref = document.referrer,
	            end = ref.indexOf('?');
	        if (end === -1) {
	            return ref.slice(7);
	        } else {
	            return ref.slice(7, end);
	        }
	    },
	
	    _getPage: function _getPage() {
	        return location.hostname + location.pathname;
	    },
	
	    _getUser: function _getUser() {
	        return localStorage.getItem('userId') || '';
	    },
	
	    _addBaseParam: function _addBaseParam(param) {
	        this._add('v', param.v || VERSION);
	        this._add('rd', param.rd || Math.random());
	        this._add('t', new Date().getTime());
	        this._add('r', param.r || this._getReffer());
	        this._add('p', param.p || this._getPage());
	        this._add('u', param.u || this._getUser());
	    },
	
	    _addOtherParam: function _addOtherParam(param) {
	        for (var i in param) {
	            if (OTHERPARAMMAP.indexOf(i) !== -1) {
	                this._add(i, param[i]);
	            }
	        }
	    },
	
	    _collectParams: function _collectParams() {
	        var s = [];
	        var p = this.param;
	        for (var paramNumLen = PARAMMAP.length; paramNumLen--;) {
	            var k = PARAMMAP[paramNumLen];
	            if (p[k] !== undefined) s.push(k + '=' + encodeURIComponent(p[k]));
	        }
	        return s.join('&');
	    },
	
	    _send: function _send() {
	        var img = new Image();
	        img.onload = function () {
	            img.onload = null;
	            img = null;
	        };
	        img.src = "http://bc.benmu-health.org?" + this._collectParams();
	    },
	
	    sendClk: function sendClk(param) {
	        return;
	        this.param = {};
	        this._addBaseParam(param);
	        this._addOtherParam(param);
	        // 添加 beacon 类型，clk
	        this._add('ty', 'clk');
	        this._send();
	    },
	
	    sendH: function sendH(param) {
	        return;
	        this.param = {};
	        this._addBaseParam(param);
	        this._addOtherParam(param);
	        // 添加 beacon 类型，pv
	        this._add('ty', 'h');
	        this._send();
	    }
	};
	
	module.exports = new Beacon();

/***/ },
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ function(module, exports) {

	/*!
	 * vue-resource v0.8.0
	 * https://github.com/vuejs/vue-resource
	 * Released under the MIT License.
	 */
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	};
	
	/**
	 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
	 */
	
	var RESOLVED = 0;
	var REJECTED = 1;
	var PENDING = 2;
	
	function Promise$2(executor) {
	
	    this.state = PENDING;
	    this.value = undefined;
	    this.deferred = [];
	
	    var promise = this;
	
	    try {
	        executor(function (x) {
	            promise.resolve(x);
	        }, function (r) {
	            promise.reject(r);
	        });
	    } catch (e) {
	        promise.reject(e);
	    }
	}
	
	Promise$2.reject = function (r) {
	    return new Promise$2(function (resolve, reject) {
	        reject(r);
	    });
	};
	
	Promise$2.resolve = function (x) {
	    return new Promise$2(function (resolve, reject) {
	        resolve(x);
	    });
	};
	
	Promise$2.all = function all(iterable) {
	    return new Promise$2(function (resolve, reject) {
	        var count = 0,
	            result = [];
	
	        if (iterable.length === 0) {
	            resolve(result);
	        }
	
	        function resolver(i) {
	            return function (x) {
	                result[i] = x;
	                count += 1;
	
	                if (count === iterable.length) {
	                    resolve(result);
	                }
	            };
	        }
	
	        for (var i = 0; i < iterable.length; i += 1) {
	            Promise$2.resolve(iterable[i]).then(resolver(i), reject);
	        }
	    });
	};
	
	Promise$2.race = function race(iterable) {
	    return new Promise$2(function (resolve, reject) {
	        for (var i = 0; i < iterable.length; i += 1) {
	            Promise$2.resolve(iterable[i]).then(resolve, reject);
	        }
	    });
	};
	
	var p$1 = Promise$2.prototype;
	
	p$1.resolve = function resolve(x) {
	    var promise = this;
	
	    if (promise.state === PENDING) {
	        if (x === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }
	
	        var called = false;
	
	        try {
	            var then = x && x['then'];
	
	            if (x !== null && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && typeof then === 'function') {
	                then.call(x, function (x) {
	                    if (!called) {
	                        promise.resolve(x);
	                    }
	                    called = true;
	                }, function (r) {
	                    if (!called) {
	                        promise.reject(r);
	                    }
	                    called = true;
	                });
	                return;
	            }
	        } catch (e) {
	            if (!called) {
	                promise.reject(e);
	            }
	            return;
	        }
	
	        promise.state = RESOLVED;
	        promise.value = x;
	        promise.notify();
	    }
	};
	
	p$1.reject = function reject(reason) {
	    var promise = this;
	
	    if (promise.state === PENDING) {
	        if (reason === promise) {
	            throw new TypeError('Promise settled with itself.');
	        }
	
	        promise.state = REJECTED;
	        promise.value = reason;
	        promise.notify();
	    }
	};
	
	p$1.notify = function notify() {
	    var promise = this;
	
	    nextTick(function () {
	        if (promise.state !== PENDING) {
	            while (promise.deferred.length) {
	                var deferred = promise.deferred.shift(),
	                    onResolved = deferred[0],
	                    onRejected = deferred[1],
	                    resolve = deferred[2],
	                    reject = deferred[3];
	
	                try {
	                    if (promise.state === RESOLVED) {
	                        if (typeof onResolved === 'function') {
	                            resolve(onResolved.call(undefined, promise.value));
	                        } else {
	                            resolve(promise.value);
	                        }
	                    } else if (promise.state === REJECTED) {
	                        if (typeof onRejected === 'function') {
	                            resolve(onRejected.call(undefined, promise.value));
	                        } else {
	                            reject(promise.value);
	                        }
	                    }
	                } catch (e) {
	                    reject(e);
	                }
	            }
	        }
	    });
	};
	
	p$1.then = function then(onResolved, onRejected) {
	    var promise = this;
	
	    return new Promise$2(function (resolve, reject) {
	        promise.deferred.push([onResolved, onRejected, resolve, reject]);
	        promise.notify();
	    });
	};
	
	p$1.catch = function (onRejected) {
	    return this.then(undefined, onRejected);
	};
	
	var PromiseObj = window.Promise || Promise$2;
	
	function Promise$1(executor, context) {
	
	    if (executor instanceof PromiseObj) {
	        this.promise = executor;
	    } else {
	        this.promise = new PromiseObj(executor.bind(context));
	    }
	
	    this.context = context;
	}
	
	Promise$1.all = function (iterable, context) {
	    return new Promise$1(PromiseObj.all(iterable), context);
	};
	
	Promise$1.resolve = function (value, context) {
	    return new Promise$1(PromiseObj.resolve(value), context);
	};
	
	Promise$1.reject = function (reason, context) {
	    return new Promise$1(PromiseObj.reject(reason), context);
	};
	
	Promise$1.race = function (iterable, context) {
	    return new Promise$1(PromiseObj.race(iterable), context);
	};
	
	var p = Promise$1.prototype;
	
	p.bind = function (context) {
	    this.context = context;
	    return this;
	};
	
	p.then = function (fulfilled, rejected) {
	
	    if (fulfilled && fulfilled.bind && this.context) {
	        fulfilled = fulfilled.bind(this.context);
	    }
	
	    if (rejected && rejected.bind && this.context) {
	        rejected = rejected.bind(this.context);
	    }
	
	    this.promise = this.promise.then(fulfilled, rejected);
	
	    return this;
	};
	
	p.catch = function (rejected) {
	
	    if (rejected && rejected.bind && this.context) {
	        rejected = rejected.bind(this.context);
	    }
	
	    this.promise = this.promise.catch(rejected);
	
	    return this;
	};
	
	p.finally = function (callback) {
	
	    return this.then(function (value) {
	        callback.call(this);
	        return value;
	    }, function (reason) {
	        callback.call(this);
	        return PromiseObj.reject(reason);
	    });
	};
	
	p.success = function (callback) {
	
	    warn('The `success` method has been deprecated. Use the `then` method instead.');
	
	    return this.then(function (response) {
	        return callback.call(this, response.data, response.status, response) || response;
	    });
	};
	
	p.error = function (callback) {
	
	    warn('The `error` method has been deprecated. Use the `catch` method instead.');
	
	    return this.catch(function (response) {
	        return callback.call(this, response.data, response.status, response) || response;
	    });
	};
	
	p.always = function (callback) {
	
	    warn('The `always` method has been deprecated. Use the `finally` method instead.');
	
	    var cb = function cb(response) {
	        return callback.call(this, response.data, response.status, response) || response;
	    };
	
	    return this.then(cb, cb);
	};
	
	var debug = false;
	var util = {};
	var array = [];
	function Util (Vue) {
	    util = Vue.util;
	    debug = Vue.config.debug || !Vue.config.silent;
	}
	
	var isArray = Array.isArray;
	
	function warn(msg) {
	    if (typeof console !== 'undefined' && debug) {
	        console.warn('[VueResource warn]: ' + msg);
	    }
	}
	
	function error(msg) {
	    if (typeof console !== 'undefined') {
	        console.error(msg);
	    }
	}
	
	function nextTick(cb, ctx) {
	    return util.nextTick(cb, ctx);
	}
	
	function trim(str) {
	    return str.replace(/^\s*|\s*$/g, '');
	}
	
	function toLower(str) {
	    return str ? str.toLowerCase() : '';
	}
	
	function isString(val) {
	    return typeof val === 'string';
	}
	
	function isFunction(val) {
	    return typeof val === 'function';
	}
	
	function isObject(obj) {
	    return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	}
	
	function isPlainObject(obj) {
	    return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
	}
	
	function when(value, fulfilled, rejected) {
	
	    var promise = Promise$1.resolve(value);
	
	    if (arguments.length < 2) {
	        return promise;
	    }
	
	    return promise.then(fulfilled, rejected);
	}
	
	function options(fn, obj, opts) {
	
	    opts = opts || {};
	
	    if (isFunction(opts)) {
	        opts = opts.call(obj);
	    }
	
	    return merge(fn.bind({ $vm: obj, $options: opts }), fn, { $options: opts });
	}
	
	function each(obj, iterator) {
	
	    var i, key;
	
	    if (typeof obj.length == 'number') {
	        for (i = 0; i < obj.length; i++) {
	            iterator.call(obj[i], obj[i], i);
	        }
	    } else if (isObject(obj)) {
	        for (key in obj) {
	            if (obj.hasOwnProperty(key)) {
	                iterator.call(obj[key], obj[key], key);
	            }
	        }
	    }
	
	    return obj;
	}
	
	function extend(target) {
	
	    var args = array.slice.call(arguments, 1);
	
	    args.forEach(function (arg) {
	        _merge(target, arg);
	    });
	
	    return target;
	}
	
	function merge(target) {
	
	    var args = array.slice.call(arguments, 1);
	
	    args.forEach(function (arg) {
	        _merge(target, arg, true);
	    });
	
	    return target;
	}
	
	function _merge(target, source, deep) {
	    for (var key in source) {
	        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
	            if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
	                target[key] = {};
	            }
	            if (isArray(source[key]) && !isArray(target[key])) {
	                target[key] = [];
	            }
	            _merge(target[key], source[key], deep);
	        } else if (source[key] !== undefined) {
	            target[key] = source[key];
	        }
	    }
	}
	
	function root (options, next) {
	
	    var url = next(options);
	
	    if (isString(options.root) && !url.match(/^(https?:)?\//)) {
	        url = options.root + '/' + url;
	    }
	
	    return url;
	}
	
	function query (options, next) {
	
	    var urlParams = Object.keys(Url.options.params),
	        query = {},
	        url = next(options);
	
	    each(options.params, function (value, key) {
	        if (urlParams.indexOf(key) === -1) {
	            query[key] = value;
	        }
	    });
	
	    query = Url.params(query);
	
	    if (query) {
	        url += (url.indexOf('?') == -1 ? '?' : '&') + query;
	    }
	
	    return url;
	}
	
	function legacy (options, next) {
	
	    var variables = [],
	        url = next(options);
	
	    url = url.replace(/(\/?):([a-z]\w*)/gi, function (match, slash, name) {
	
	        warn('The `:' + name + '` parameter syntax has been deprecated. Use the `{' + name + '}` syntax instead.');
	
	        if (options.params[name]) {
	            variables.push(name);
	            return slash + encodeUriSegment(options.params[name]);
	        }
	
	        return '';
	    });
	
	    variables.forEach(function (key) {
	        delete options.params[key];
	    });
	
	    return url;
	}
	
	function encodeUriSegment(value) {
	
	    return encodeUriQuery(value, true).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+');
	}
	
	function encodeUriQuery(value, spaces) {
	
	    return encodeURIComponent(value).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, spaces ? '%20' : '+');
	}
	
	/**
	 * URL Template v2.0.6 (https://github.com/bramstein/url-template)
	 */
	
	function expand(url, params, variables) {
	
	    var tmpl = parse(url),
	        expanded = tmpl.expand(params);
	
	    if (variables) {
	        variables.push.apply(variables, tmpl.vars);
	    }
	
	    return expanded;
	}
	
	function parse(template) {
	
	    var operators = ['+', '#', '.', '/', ';', '?', '&'],
	        variables = [];
	
	    return {
	        vars: variables,
	        expand: function expand(context) {
	            return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
	                if (expression) {
	
	                    var operator = null,
	                        values = [];
	
	                    if (operators.indexOf(expression.charAt(0)) !== -1) {
	                        operator = expression.charAt(0);
	                        expression = expression.substr(1);
	                    }
	
	                    expression.split(/,/g).forEach(function (variable) {
	                        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
	                        values.push.apply(values, getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
	                        variables.push(tmp[1]);
	                    });
	
	                    if (operator && operator !== '+') {
	
	                        var separator = ',';
	
	                        if (operator === '?') {
	                            separator = '&';
	                        } else if (operator !== '#') {
	                            separator = operator;
	                        }
	
	                        return (values.length !== 0 ? operator : '') + values.join(separator);
	                    } else {
	                        return values.join(',');
	                    }
	                } else {
	                    return encodeReserved(literal);
	                }
	            });
	        }
	    };
	}
	
	function getValues(context, operator, key, modifier) {
	
	    var value = context[key],
	        result = [];
	
	    if (isDefined(value) && value !== '') {
	        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
	            value = value.toString();
	
	            if (modifier && modifier !== '*') {
	                value = value.substring(0, parseInt(modifier, 10));
	            }
	
	            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
	        } else {
	            if (modifier === '*') {
	                if (Array.isArray(value)) {
	                    value.filter(isDefined).forEach(function (value) {
	                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
	                    });
	                } else {
	                    Object.keys(value).forEach(function (k) {
	                        if (isDefined(value[k])) {
	                            result.push(encodeValue(operator, value[k], k));
	                        }
	                    });
	                }
	            } else {
	                var tmp = [];
	
	                if (Array.isArray(value)) {
	                    value.filter(isDefined).forEach(function (value) {
	                        tmp.push(encodeValue(operator, value));
	                    });
	                } else {
	                    Object.keys(value).forEach(function (k) {
	                        if (isDefined(value[k])) {
	                            tmp.push(encodeURIComponent(k));
	                            tmp.push(encodeValue(operator, value[k].toString()));
	                        }
	                    });
	                }
	
	                if (isKeyOperator(operator)) {
	                    result.push(encodeURIComponent(key) + '=' + tmp.join(','));
	                } else if (tmp.length !== 0) {
	                    result.push(tmp.join(','));
	                }
	            }
	        }
	    } else {
	        if (operator === ';') {
	            result.push(encodeURIComponent(key));
	        } else if (value === '' && (operator === '&' || operator === '?')) {
	            result.push(encodeURIComponent(key) + '=');
	        } else if (value === '') {
	            result.push('');
	        }
	    }
	
	    return result;
	}
	
	function isDefined(value) {
	    return value !== undefined && value !== null;
	}
	
	function isKeyOperator(operator) {
	    return operator === ';' || operator === '&' || operator === '?';
	}
	
	function encodeValue(operator, value, key) {
	
	    value = operator === '+' || operator === '#' ? encodeReserved(value) : encodeURIComponent(value);
	
	    if (key) {
	        return encodeURIComponent(key) + '=' + value;
	    } else {
	        return value;
	    }
	}
	
	function encodeReserved(str) {
	    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
	        if (!/%[0-9A-Fa-f]/.test(part)) {
	            part = encodeURI(part);
	        }
	        return part;
	    }).join('');
	}
	
	function template (options) {
	
	    var variables = [],
	        url = expand(options.url, options.params, variables);
	
	    variables.forEach(function (key) {
	        delete options.params[key];
	    });
	
	    return url;
	}
	
	/**
	 * Service for URL templating.
	 */
	
	var ie = document.documentMode;
	var el = document.createElement('a');
	
	function Url(url, params) {
	
	    var self = this || {},
	        options = url,
	        transform;
	
	    if (isString(url)) {
	        options = { url: url, params: params };
	    }
	
	    options = merge({}, Url.options, self.$options, options);
	
	    Url.transforms.forEach(function (handler) {
	        transform = factory(handler, transform, self.$vm);
	    });
	
	    return transform(options);
	}
	
	/**
	 * Url options.
	 */
	
	Url.options = {
	    url: '',
	    root: null,
	    params: {}
	};
	
	/**
	 * Url transforms.
	 */
	
	Url.transforms = [template, legacy, query, root];
	
	/**
	 * Encodes a Url parameter string.
	 *
	 * @param {Object} obj
	 */
	
	Url.params = function (obj) {
	
	    var params = [],
	        escape = encodeURIComponent;
	
	    params.add = function (key, value) {
	
	        if (isFunction(value)) {
	            value = value();
	        }
	
	        if (value === null) {
	            value = '';
	        }
	
	        this.push(escape(key) + '=' + escape(value));
	    };
	
	    serialize(params, obj);
	
	    return params.join('&').replace(/%20/g, '+');
	};
	
	/**
	 * Parse a URL and return its components.
	 *
	 * @param {String} url
	 */
	
	Url.parse = function (url) {
	
	    if (ie) {
	        el.href = url;
	        url = el.href;
	    }
	
	    el.href = url;
	
	    return {
	        href: el.href,
	        protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
	        port: el.port,
	        host: el.host,
	        hostname: el.hostname,
	        pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
	        search: el.search ? el.search.replace(/^\?/, '') : '',
	        hash: el.hash ? el.hash.replace(/^#/, '') : ''
	    };
	};
	
	function factory(handler, next, vm) {
	    return function (options) {
	        return handler.call(vm, options, next);
	    };
	}
	
	function serialize(params, obj, scope) {
	
	    var array = isArray(obj),
	        plain = isPlainObject(obj),
	        hash;
	
	    each(obj, function (value, key) {
	
	        hash = isObject(value) || isArray(value);
	
	        if (scope) {
	            key = scope + '[' + (plain || hash ? key : '') + ']';
	        }
	
	        if (!scope && array) {
	            params.add(value.name, value.value);
	        } else if (hash) {
	            serialize(params, value, key);
	        } else {
	            params.add(key, value);
	        }
	    });
	}
	
	function xdrClient (request) {
	    return new Promise$1(function (resolve) {
	
	        var xdr = new XDomainRequest(),
	            response = { request: request },
	            handler;
	
	        request.cancel = function () {
	            xdr.abort();
	        };
	
	        xdr.open(request.method, Url(request), true);
	
	        handler = function handler(event) {
	
	            response.data = xdr.responseText;
	            response.status = xdr.status;
	            response.statusText = xdr.statusText || '';
	
	            resolve(response);
	        };
	
	        xdr.timeout = 0;
	        xdr.onload = handler;
	        xdr.onabort = handler;
	        xdr.onerror = handler;
	        xdr.ontimeout = function () {};
	        xdr.onprogress = function () {};
	
	        xdr.send(request.data);
	    });
	}
	
	var originUrl = Url.parse(location.href);
	var supportCors = 'withCredentials' in new XMLHttpRequest();
	
	function cors (request, next) {
	
	    if (request.crossOrigin === null) {
	        request.crossOrigin = crossOrigin(request);
	    }
	
	    if (request.crossOrigin) {
	
	        if (!supportCors) {
	            request.client = xdrClient;
	        }
	
	        request.emulateHTTP = false;
	    }
	
	    next();
	}
	
	function crossOrigin(request) {
	
	    var requestUrl = Url.parse(Url(request));
	
	    return requestUrl.protocol !== originUrl.protocol || requestUrl.host !== originUrl.host;
	}
	
	function mime (request, next) {
	
	    if (request.emulateJSON && isPlainObject(request.data)) {
	        request.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	        request.data = Url.params(request.data);
	    }
	
	    if (isObject(request.data) && /FormData/i.test(request.data.toString())) {
	        delete request.headers['Content-Type'];
	    }
	
	    if (isPlainObject(request.data)) {
	        request.data = JSON.stringify(request.data);
	    }
	
	    next(function (response) {
	
	        try {
	            response.data = JSON.parse(response.data);
	        } catch (e) {}
	    });
	}
	
	function jsonpClient (request) {
	    return new Promise$1(function (resolve) {
	
	        var callback = '_jsonp' + Math.random().toString(36).substr(2),
	            response = { request: request, data: null },
	            handler,
	            script;
	
	        request.params[request.jsonp] = callback;
	        request.cancel = function () {
	            handler({ type: 'cancel' });
	        };
	
	        script = document.createElement('script');
	        script.src = Url(request);
	        script.type = 'text/javascript';
	        script.async = true;
	
	        window[callback] = function (data) {
	            response.data = data;
	        };
	
	        handler = function handler(event) {
	
	            if (event.type === 'load' && response.data !== null) {
	                response.status = 200;
	            } else if (event.type === 'error') {
	                response.status = 404;
	            } else {
	                response.status = 0;
	            }
	
	            resolve(response);
	
	            delete window[callback];
	            document.body.removeChild(script);
	        };
	
	        script.onload = handler;
	        script.onerror = handler;
	
	        document.body.appendChild(script);
	    });
	}
	
	function jsonp (request, next) {
	
	    if (request.method == 'JSONP') {
	        request.client = jsonpClient;
	    }
	
	    next();
	}
	
	function before (request, next) {
	
	    if (isFunction(request.beforeSend)) {
	        request.beforeSend.call(this, request);
	    }
	
	    next();
	}
	
	/**
	 * HTTP method override Interceptor.
	 */
	
	function method (request, next) {
	
	    if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
	        request.headers['X-HTTP-Method-Override'] = request.method;
	        request.method = 'POST';
	    }
	
	    next();
	}
	
	function header (request, next) {
	
	    request.method = request.method.toUpperCase();
	    request.headers = extend({}, Http.headers.common, !request.crossOrigin ? Http.headers.custom : {}, Http.headers[request.method.toLowerCase()], request.headers);
	
	    if (isPlainObject(request.data) && /^(GET|JSONP)$/i.test(request.method)) {
	        extend(request.params, request.data);
	        delete request.data;
	    }
	
	    next();
	}
	
	/**
	 * Timeout Interceptor.
	 */
	
	function timeout (request, next) {
	
	    var timeout;
	
	    if (request.timeout) {
	        timeout = setTimeout(function () {
	            request.cancel();
	        }, request.timeout);
	    }
	
	    next(function (response) {
	
	        clearTimeout(timeout);
	    });
	}
	
	function xhrClient (request) {
	    return new Promise$1(function (resolve) {
	
	        var xhr = new XMLHttpRequest(),
	            response = { request: request },
	            handler;
	
	        request.cancel = function () {
	            xhr.abort();
	        };
	
	        xhr.open(request.method, Url(request), true);
	
	        handler = function handler(event) {
	
	            response.data = 'response' in xhr ? xhr.response : xhr.responseText;
	            response.status = xhr.status === 1223 ? 204 : xhr.status; // IE9 status bug
	            response.statusText = trim(xhr.statusText || '');
	            response.allHeaders = xhr.getAllResponseHeaders();
	
	            resolve(response);
	        };
	
	        xhr.timeout = 0;
	        xhr.onload = handler;
	        xhr.onabort = handler;
	        xhr.onerror = handler;
	        xhr.ontimeout = function () {};
	        xhr.onprogress = function () {};
	
	        if (isPlainObject(request.xhr)) {
	            extend(xhr, request.xhr);
	        }
	
	        if (isPlainObject(request.upload)) {
	            extend(xhr.upload, request.upload);
	        }
	
	        each(request.headers || {}, function (value, header) {
	            xhr.setRequestHeader(header, value);
	        });
	
	        xhr.send(request.data);
	    });
	}
	
	function Client (context) {
	
	    var reqHandlers = [sendRequest],
	        resHandlers = [];
	
	    if (!isObject(context)) {
	        context = null;
	    }
	
	    function Client(request) {
	        return new Promise$1(function (resolve) {
	
	            function exec() {
	                reqHandlers.pop().call(context, request, next);
	            }
	
	            function next(response) {
	                when(response, function (response) {
	
	                    if (isFunction(response)) {
	
	                        resHandlers.unshift(response);
	                    } else if (isObject(response)) {
	
	                        processResponse(response);
	
	                        resHandlers.forEach(function (handler) {
	                            handler.call(context, response);
	                        });
	
	                        resolve(response);
	
	                        return;
	                    }
	
	                    exec();
	                });
	            }
	
	            exec();
	        }, context);
	    }
	
	    Client.use = function (handler) {
	        reqHandlers.push(handler);
	    };
	
	    return Client;
	}
	
	function sendRequest(request, resolve) {
	
	    var client = request.client || xhrClient;
	
	    resolve(client(request));
	}
	
	function processResponse(response) {
	
	    var headers = response.headers || response.allHeaders;
	
	    if (isString(headers)) {
	        headers = parseHeaders(headers);
	    }
	
	    if (isObject(headers)) {
	        response.headers = function (name) {
	            return name ? headers[toLower(name)] : headers;
	        };
	    }
	
	    response.ok = response.status >= 200 && response.status < 300;
	
	    return response;
	}
	
	function parseHeaders(str) {
	
	    var headers = {},
	        value,
	        name,
	        i;
	
	    each(str.split('\n'), function (row) {
	
	        i = row.indexOf(':');
	        name = trim(toLower(row.slice(0, i)));
	        value = trim(row.slice(i + 1));
	
	        if (headers[name]) {
	
	            if (isArray(headers[name])) {
	                headers[name].push(value);
	            } else {
	                headers[name] = [headers[name], value];
	            }
	        } else {
	
	            headers[name] = value;
	        }
	    });
	
	    return headers;
	}
	
	/**
	 * Service for sending network requests.
	 */
	
	var jsonType = { 'Content-Type': 'application/json' };
	
	function Http(url, options) {
	
	    var self = this || {},
	        client = Client(self.$vm),
	        request,
	        promise;
	
	    Http.interceptors.forEach(function (handler) {
	        client.use(handler);
	    });
	
	    options = isObject(url) ? url : extend({ url: url }, options);
	    request = merge({}, Http.options, self.$options, options);
	    promise = client(request).then(function (response) {
	
	        return response.ok ? response : Promise$1.reject(response);
	    }, function (response) {
	
	        if (response instanceof Error) {
	            error(response);
	        }
	
	        return Promise$1.reject(response);
	    });
	
	    if (request.success) {
	        promise.success(request.success);
	    }
	
	    if (request.error) {
	        promise.error(request.error);
	    }
	
	    return promise;
	}
	
	Http.options = {
	    method: 'get',
	    data: '',
	    params: {},
	    headers: {},
	    xhr: null,
	    upload: null,
	    jsonp: 'callback',
	    beforeSend: null,
	    crossOrigin: null,
	    emulateHTTP: false,
	    emulateJSON: false,
	    timeout: 0
	};
	
	Http.headers = {
	    put: jsonType,
	    post: jsonType,
	    patch: jsonType,
	    delete: jsonType,
	    common: { 'Accept': 'application/json, text/plain, */*' },
	    custom: { 'X-Requested-With': 'XMLHttpRequest' }
	};
	
	Http.interceptors = [before, timeout, jsonp, method, mime, header, cors];
	
	['get', 'put', 'post', 'patch', 'delete', 'jsonp'].forEach(function (method) {
	
	    Http[method] = function (url, data, success, options) {
	
	        if (isFunction(data)) {
	            options = success;
	            success = data;
	            data = undefined;
	        }
	
	        if (isObject(success)) {
	            options = success;
	            success = undefined;
	        }
	
	        return this(url, extend({ method: method, data: data, success: success }, options));
	    };
	});
	
	function Resource(url, params, actions, options) {
	
	    var self = this || {},
	        resource = {};
	
	    actions = extend({}, Resource.actions, actions);
	
	    each(actions, function (action, name) {
	
	        action = merge({ url: url, params: params || {} }, options, action);
	
	        resource[name] = function () {
	            return (self.$http || Http)(opts(action, arguments));
	        };
	    });
	
	    return resource;
	}
	
	function opts(action, args) {
	
	    var options = extend({}, action),
	        params = {},
	        data,
	        success,
	        error;
	
	    switch (args.length) {
	
	        case 4:
	
	            error = args[3];
	            success = args[2];
	
	        case 3:
	        case 2:
	
	            if (isFunction(args[1])) {
	
	                if (isFunction(args[0])) {
	
	                    success = args[0];
	                    error = args[1];
	
	                    break;
	                }
	
	                success = args[1];
	                error = args[2];
	            } else {
	
	                params = args[0];
	                data = args[1];
	                success = args[2];
	
	                break;
	            }
	
	        case 1:
	
	            if (isFunction(args[0])) {
	                success = args[0];
	            } else if (/^(POST|PUT|PATCH)$/i.test(options.method)) {
	                data = args[0];
	            } else {
	                params = args[0];
	            }
	
	            break;
	
	        case 0:
	
	            break;
	
	        default:
	
	            throw 'Expected up to 4 arguments [params, data, success, error], got ' + args.length + ' arguments';
	    }
	
	    options.data = data;
	    options.params = extend({}, options.params, params);
	
	    if (success) {
	        options.success = success;
	    }
	
	    if (error) {
	        options.error = error;
	    }
	
	    return options;
	}
	
	Resource.actions = {
	
	    get: { method: 'GET' },
	    save: { method: 'POST' },
	    query: { method: 'GET' },
	    update: { method: 'PUT' },
	    remove: { method: 'DELETE' },
	    delete: { method: 'DELETE' }
	
	};
	
	function plugin(Vue) {
	
	    if (plugin.installed) {
	        return;
	    }
	
	    Util(Vue);
	
	    Vue.url = Url;
	    Vue.http = Http;
	    Vue.resource = Resource;
	    Vue.Promise = Promise$1;
	
	    Object.defineProperties(Vue.prototype, {
	
	        $url: {
	            get: function get() {
	                return options(Vue.url, this, this.$options.url);
	            }
	        },
	
	        $http: {
	            get: function get() {
	                return options(Vue.http, this, this.$options.http);
	            }
	        },
	
	        $resource: {
	            get: function get() {
	                return Vue.resource.bind(this);
	            }
	        },
	
	        $promise: {
	            get: function get() {
	                var _this = this;
	
	                return function (executor) {
	                    return new Vue.Promise(executor, _this);
	                };
	            }
	        }
	
	    });
	}
	
	if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(plugin);
	}
	
	module.exports = plugin;

/***/ },
/* 46 */,
/* 47 */,
/* 48 */,
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
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
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
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
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
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var vueResourece = __webpack_require__(45);
	Vue.use(vueResourece);
	__webpack_require__(118);
	Vue.http.options.timeout = 20000;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var LOGAPI = '/mobile/wx/conf/log';
	var monitor = __webpack_require__(4);
	Vue && Vue.http && Vue.http.interceptors.push(function (request, next) {
	    var d1 = +new Date();
	    if (request.method == 'get') {
	        if (!request.data) {
	            request.data = {};
	        }
	        request.data._ = d1;
	    }
	    next(function (response) {
	        try {
	            if (request._mTj) return response;
	            if (request.url == LOGAPI) return response;
	            var d2 = +new Date();
	            var time = d2 - d1;
	            if (!response.ok) {
	                if (response.status == 0) {
	                    monitor.timer('API_TIMEOUT', '接口超时', time, request.url);
	                } else {
	                    monitor.timer('API_FAIL', '接口失败', time, request.url);
	                }
	                this.loading = false;
	                this.alert = {
	                    type: 'tips',
	                    title: response.status || '',
	                    content: response.statusText || '网络超时，请稍候再试'
	                };
	            } else {
	                monitor.timer('API_TIME', '接口时间', time, request.url);
	            }
	            if (response.data) {
	                var resCode = response.data.resCode;
	                if (resCode == 101) {
	                    var url = encodeURIComponent(location.pathname.slice(1) + location.search + location.hash);
	                    location.href = '/mobile/wx/accredit/go?old=' + url + '&new=' + url;
	                } else if (resCode == 102) {
	                    var href = encodeURIComponent(location.href);
	                    Vue.http.get(LOGAPI, {
	                        goto: href,
	                        res: JSON.stringify(response.data)
	                    });
	                    location.href = '/wechat/account/userLogin.html?ref=' + href;
	                } else if (resCode !== 0 && !request._noNeedAlert) {
	                    this.alert = {
	                        type: 'tips',
	                        content: response.data.msg
	                    };
	                }
	            }
	        } catch (err) {
	            Vue.http.get(LOGAPI, {
	                type: 'FE_INTERCEPTOR_ERROR',
	                api: request.url,
	                msg: err && err.name + ' || ' + err.message || '未知错误',
	                res: JSON.stringify(response.data)
	            });
	        }
	        return response;
	    });
	});

/***/ },
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
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
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var IScroll = __webpack_require__(1),
	    Tpl = __webpack_require__(149);
	
	var ISSCROLLCLICK = __webpack_require__(109)();
	
	var ServiceProtocol = Vue.extend({
	    template: Tpl,
	    data: function data() {
	        return {
	            show: false
	        };
	    },
	    props: {
	        serviceShow: {
	            twoway: true
	        }
	    },
	    watch: {
	        serviceShow: function serviceShow(newVal) {
	            var self = this;
	            this.show = newVal;
	            if (!this.iscroll) {
	                setTimeout(function () {
	                    self.iscroll = new IScroll('#js-service-protocol-scroll', {
	                        preventDefault: true,
	                        bounce: false,
	                        click: ISSCROLLCLICK
	                    });
	                }, 300);
	            } else {
	                this.$nextTick(function () {
	                    this.iscroll && this.iscroll.refresh();
	                });
	            }
	
	            setInterval(function () {
	                self.iscroll && self.iscroll.refresh();
	            }, 3000);
	        }
	    },
	    methods: {
	        cancelCallback: function cancelCallback() {
	            this.serviceShow = false;
	        }
	    }
	});
	
	Vue.component('service-protocol', ServiceProtocol);

/***/ },
/* 149 */
/***/ function(module, exports) {

	var tpl;
	
	tpl = '<!-- 服务协议 -->\n<div class="serviceAgreement" id="js-service-protocol-scroll" v-show=\'show\' style="position: absolute; top:40px; left:0; right:0; bottom: 0; z-index: 1000;background: #fff;">\n    <div class="articleDetail">\n        <h2 class="small" style="text-align:center;">北京通·京医通微信公众平台服务协议</h2>\n        <h4>【首部及导言】</h4>\n        <p class="small">\n            欢迎使用北京通·京医通微信服务平台！\n            <br> 为使用北京通·京医通微信服务平台（以下简称“本服务”），您应当阅读并遵守《北京通·京医通微信公众平台服务协议》（以下简称“本协议”） 中规定的所有权利和限制。请您务必审慎阅读、充分理解各条款内容。如果您不同意本协议的任何内容，或者无法准确理解条款的含义，请不要进行后续操作。您对本服务的登录、查看、发布信息等行为即视为您已阅读并同意本协议的约束。\n        </p>\n        <h4>一、【协议的范围】</h4>\n        <p class="small">\n            1.1 本协议是您与北京通·京医通之间关于您使用北京通·京医通微信服务平台所订立的协议。“本木医疗”为本服务的技术支持方。“用户”是指注册、登录、使用微信公众帐号的个人或组织，在本协议中更多地称为“您”。“其他用户”是指包括其他微信公众帐号用户和微信用户等除用户本人外与微信公众平台服务相关的用户。\n            <br> 1.2 本服务是北京通·京医通向用户提供的信息发布、客户服务以及与此相关的互联网技术服务。微信用户关注微信公众帐号后将成为该帐号关注用户。\n            <br> 1.3 本协议内容同时包括北京通·京医通可能不断发布的关于本服务的相关协议、服务声明、业务规则及公告指引等内容（以下统称为“专项规则”）。上述内容一经正式发布，即为本协议不可分割的组成部分，您理同一并遵守。\n        </p>\n        <h4>二、【权利声明】</h4>\n        <p class="small">\n            2.1 禁止反向工程、反向编译和反向汇编：用户不得对本服务进行反向工程（ReverseEngineer）、反向编译（Decompile）或反向汇编（Disassemble），同时不得改动编译在程序文件内部的任何资源。除法律、法规明文规定允许上述活动外，用户必须遵守此协议限制。\n            <br> 2.2 组件分割:本服务是作为一个完整产品而被授予许可使用，用户不得将各个部分分开用于任何目的。\n            <br> 2.3 个别授权:如需进行商业性的销售、复制、分发，必须获得北京通·京医通的书面授权和许可。\n            <br> 2.4 保留权利：本协议未明示授权的其他一切权利仍归北京通·京医通所有，用户使用其他权利时必须获得北京通·京医通的书面同意。\n        </p>\n        <h4>三、【用户使用须知】</h4>\n        <p class="small">\n            3.1服务功能：本服务提供当天挂号、预约挂号、医疗缴费、医疗信息推送、北京通·京医通卡的使用（包括绑定、充值、查询卡资料、查询卡交易记录、临时挂失、解绑等）、建立北京通·京医通临时卡、已关联北京通·京医通账户的北京社保卡的使用（包括绑定、为北京社保卡开通的北京通·京医通账户充值、查询北京社保卡的北京通·京医通账户的资料、查询北京社保卡的北京通·京医通账户的交易记录、解绑等）、未关联北京通·京医通账户的北京社保卡的预约开户、查询挂号记录、查询缴费记录、查看检查报告等功能。\n            <br> 3.2 本服务的修改和升级：北京通·京医通保留为用户提供本服务的修改、升级版本的权利。\n            <br> 3.3您在绑定北京通·京医通卡、建北京通·京医通临时卡、绑定北京社保卡、北京社保卡预约开户过程中，需要填写一些必要的信息，请保持这些信息的真实、准确、合法、有效，以便本木医疗向您提供及时有效的帮助，或更好地为您提供服务。根据相关法律法规和政策，请您填写真实的身份信息。若您填写的信息不完整或不准确，则可能无法使用本服务或在使用过程中受到限制，因信息填写错误而造成的损失由个人承担。\n            <br> 3.4 您应对通过本服务了解、接收或可接触到的包括但不限于其他用户在内的任何人的个人信息予以充分尊重，您不应以搜集、复制、存储、传播或以其他任何方式使用其他用户的个人信息，否则，由此产生的后果由您自行承担。\n            <br> 3.5 用户应在遵守法律及本协议的前提下使用本服务。用户无权实施包括但不限于下列行为：\n            <br> 3.5.1 删除或者改变本服务上的所有权利管理电子信息；\n            <br> 3.5.2 故意避开或者破坏著作权人为保护本服务著作权而采取的技术措施；\n            <br> 3.5.3 利用本服务误导、欺骗他人;\n            <br> 3.5.4 违反国家规定，对计算机信息系统功能进行删除、修改、增加、干扰，造成计算机信息系统不能正常运行，\n            <br> 3.5.5 未经允许，进入计算机信息网络或者使用计算机信息网络资源；\n            <br> 3.5.6 未经允许，对计算机信息网络功能进行删除、修改或者增加的；\n            <br> 3.5.7 未经允许，对计算机信息网络中存储、处理或者传输的数据和应用程序进行删除、修改或者增加；\n            <br> 3.5.8 破坏本软件系统或网站的正常运行，故意传播计算机病毒等破坏性程序；\n            <br> 3.5.9 其他任何危害计算机信息网络安全的行为\n            <br> 3.6 用户使用本服务发布、传送、存储的任何内容应符合国家现行法律、法规的相关规定，不得含有以下内容：\n            <br> 3.6.1 违反宪法所确定的基本原则的；含有法律、行政法规禁止的其他内容的；\n            <br> 3.6.2 危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；\n            <br> 3.6.3 损害国家荣誉和利益的，攻击党和政府及其领导人的；\n            <br> 3.6.4 煽动民族仇恨、民族歧视，破坏民族团结的；\n            <br> 3.6.5 煽动非法集会、结社、游行、示威、聚众扰乱社会秩序的，以非法民间组织名义活动的；\n            <br> 3.6.6 破坏国家宗教政策，宣扬邪教和封建迷信的；\n            <br> 3.6.7 散布谣言或不实消息，扰乱社会秩序，破坏社会稳定的；\n            <br> 3.6.8 散布反动、淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；\n            <br> 3.6.9 虚假、骚扰性、侮辱性、恐吓性、伤害性、挑衅性、庸俗性信息；\n            <br> 3.6.10 违背中华民族传统美德、社会公德、伦理道德、以及社会主义精神文明的；\n            <br> 3.6.10 宣扬种族歧视，破坏国家、民族、地区团结的言论和消息的；\n            <br> 3.6.11 侵犯他人肖像权、姓名权、名誉权、隐私权或其他人身权利的；\n            <br> 3.6.12 侵犯其他任何第三方的专利权、版权、著作权、商标权、名誉权或其他任何合法权益的信息。\n            <br> 3.6.13 有法律、行政法规和国家规定禁止的其他内容的。 用户应承担一切因自己发布、传送、存储信息不当导致的民事、行政或刑事法律责任。\n        </p>\n        <h4>四、【账号使用规范】</h4>\n        <p class="small">\n            4.1 您在使用本服务前需要注册一个北京通·京医通帐号。北京通·京医通帐号可通过手机号码进行注册。北京通·京医通有权根据用户需求或产品需要对帐号注册和绑定的方式进行变更，关于您使用帐号的具体规则，请遵守北京通·京医通用户服务协议。\n            <br> 4.2 北京通·京医通帐号的所有权归北京通·京医通所有，用户完成申请注册手续后，仅获得北京通·京医通帐号的使用权，且该使用权仅属于初始申请注册人。同时，初始申请注册人不得赠与、借用、租用、转让或售卖北京通·京医通帐号或者以其他方式许可非初始申请注册人使用北京通·京医通帐号。非初始申请注册人不得通过受赠、继承、承租、受让或者其他任何方式使用北京通·京医通帐号。\n            <br> 4.3 用户有责任妥善保管注册帐户信息及帐户密码的安全，用户需要对注册帐户以及密码下的行为承担法律责任。用户同意在任何情况下不向他人透露帐户及密码信息。当在您怀疑他人在使用您的帐号时，您应立即通知北京通·京医通。\n            <br>\n        </p>\n        <h4>五、【用户隐私保护】</h4>\n        <p class="small">\n            5.1 保护用户个人信息是北京通·京医通的一项基本原则，北京通·京医通将会采取合理的措施保护用户的个人信息。除法律法规规定的情形外，未经用户许可北京通·京医通不会向第三方公开、透露用户个人信息。北京通·京医通对相关信息采用专业加密存储与传输方式，保障用户个人信息的安全。\n            <br> 5.2 您在注册帐号或使用本服务的过程中，需要提供一些必要的信息，例如：为向您提供帐号注册服务或进行用户身份识别，需要您填写手机号码；若国家法律法规或政策有特殊规定的，您需要提供真实的身份信息。若您提供的信息不完整，则无法使用本服务或在使用过程中受到限制。\n            <br> 5.3 绑定北京通·京医通卡、北京社保卡、建北京通·京医通临时卡、北京社保卡预约开户，需要用户登录提交卡片相关的个人信息，仅将此信息做用服务使用权验证并不会做其他任何用途。除法律法规规定的情形外，未经用户许可北京通·京医通不会向第三方公开、透露用户个人信息。北京通·京医通对相关信息采用专业加密存储与传输方式，保障用户个人信息的安全。\n            <br> 5.4 用户不应将其卡片信息、个人信息告知他人使用。因黑客行为或用户的保管疏忽导致卡片信息、个人信息遭他人非法使用，或手机遗失，北京通·京医通不承担任何责任。\n            <br> 5.5 北京通·京医通将运用各种安全技术和程序建立完善的管理制度来保护您的个人信息，以免遭受未经授权的访问、使用或披露。本服务不含有任何旨在破坏用户数据和获取用户隐私信息的恶意代码，不含有任何监控、监视用户的功能代码，不会收集用户个人文件、文档等信息，不会泄漏用户隐私。\n            <br>\n        </p>\n        <h4>六、【风险及免责】</h4>\n        <p class="small">\n            6.1 您理解并同意：为了向您提供有效的服务，本服务会利用您终端设备的处理器和带宽等资源。本服务使用过程中可能产生数据流量的费用，用户需自行向运营商了解相关资费信息，并自行承担相关费用。\n            <br> 6.2 用户在使用本服务时，须自行承担如下不可掌控的风险内容，包括但不限于：\n            <br> 6.2.1 由于受到计算机病毒、木马或其他恶意程序、黑客攻击的破坏等不可抗拒因素可能引起的信息丢失、泄漏等风险；\n            <br> 6.2.2 用户的电脑软件、系统、硬件和通信线路出现故障；\n            <br> 6.2.3 用户操作不当或通过非北京通·京医通授权的方式使用本服务；\n            <br> 6.2.4 用户发布的内容被他人转发、分享，因此等传播可能带来的风险和责任；\n            <br> 6.2.5 由于网络信号不稳定等原因，所引起的北京通·京医通微信服务平台登录失败、资料同步不完整、页面打开速度慢等风险。\n            <br> 6.2.6 其他北京通·京医通无法控制或合理预见的情形。\n            <br>\n        </p>\n        <h4>七、【知识产权声明】</h4>\n        <p class="small">\n            7.1 在本服务中提供的内容（包括但不限于网页、文字、图片、音频、视频、图表等）的知识产权归本木医疗所有，用户在使用本服务中所产生的内容的知识产权归用户或相关权利人所有，用户群发的内容一经发布即向公众传播和共享，您同意本木医疗免费使用、传播、复制、分发、展示或允许技术抓取相关内容。\n            <br> 7.2 除另有特别声明外，提供本服务时所依托软件的著作权、专利权及其他知识产权均归本木医疗所有。\n            <br> 7.3 上述及其他任何本服务包含的内容的知识产权均受到法律保护，其他未经北京通·京医通、用户或本木医疗许可的第三人，不得以任何形式进行使用或创造相关衍生作品。\n            <br>\n        </p>\n        <h4>八、【其它】</h4>\n        <p class="small">\n            8.1 您使用本服务即视为您已阅读并同意受本协议的约束。北京通·京医通有权在必要时修改本协议条款。您可以在相关服务页面查阅最新版本的条款。本协议条款变更后，如果您继续使用本服务，即视为您已接受修改后的协议。如果您不接受修改后的协议，应当停止使用本服务。\n            <br> 8.2 本协议签订地为中华人民共和国北京市朝阳区。\n            <br> 8.3 本协议的成立、生效、履行、解释及纠纷解决，适用中华人民共和国大陆地区法律（不包括冲突法）。\n            <br> 8.4 若您和北京通·京医通之间发生任何纠纷或争议，首先应友好协商解决；协商不成的，您同意将纠纷或争议提交本协议签订地有管辖权的人民法院管辖。\n            <br> 8.5 本协议所有条款的标题仅为阅读方便，本身并无实际涵义，不能作为本协议涵义解释的依据。\n            <br> 8.6 本协议条款无论因何种原因部分无效或不可执行，其余条款仍有效，对双方具有约束力。（正文完）\n        </p>\n        <i class="small">北京通·京医通 <br>2015年8月</i>\n    </div>\n    <p style="position: fixed;right: 0px;top: 45px;background: #00b4cb;color: white;padding: 5px;border-top-left-radius: 5px;border-bottom-left-radius: 5px;" @click="cancelCallback">关闭</p>\n</div>\n<!-- 服务协议 end -->';
	
	module.exports = tpl;


/***/ },
/* 150 */,
/* 151 */,
/* 152 */
/***/ function(module, exports) {

	'use strict';
	
	var strategies = {
	    _isdate: function _isdate(intYear, intMonth, intDay) {
	        if (isNaN(intYear) || isNaN(intMonth) || isNaN(intDay)) return false;
	        if (intMonth > 12 || intMonth < 1) return false;
	        if (intDay < 1 || intDay > 31) return false;
	        if ((intMonth == 4 || intMonth == 6 || intMonth == 9 || intMonth == 11) && intDay > 30) return false;
	        if (intMonth == 2) {
	            if (intDay > 29) return false;
	            if ((intYear % 100 == 0 && intYear % 400 != 0 || intYear % 4 != 0) && intDay > 28) return false;
	        }
	        return true;
	    },
	
	    //昵称校验()
	    isChinese: function isChinese(val, errorMsg) {
	        var chinese = /^(?:\[[^\[\]]+\])+$/; // 表情正则
	        if (chinese.test(val)) {
	            return errorMsg;
	        }
	    },
	    required: function required(val, errMsg) {
	        if (val == '') {
	            return errMsg;
	        }
	    },
	    //京医通卡号
	    isCardno: function isCardno(val, errMsg) {
	        var regcardNo = new RegExp('^[0-9]*$');
	        if (!regcardNo.test(val) || val.length != 14 && val.length != 16) {
	            return errMsg;
	        }
	    },
	
	    // 社保卡号
	    isSocioCardno: function isSocioCardno(val, errMsg) {
	        var str = new RegExp('^[A-Z]$');
	        var num = new RegExp('^[0-9]+$'),
	            cardLen = val.length;
	        var cardFliter1 = cardLen === 12 && num.test(val.slice(0, 11));
	        var cardFliter2 = cardFliter1 && (num.test(val.slice(11)) || str.test(val.slice(11)));
	        if (!cardFliter2) {
	            return errMsg;
	        }
	    },
	
	    isString: function isString(val, errMsg) {
	        var reg1 = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im; //特殊字符
	        var reg2 = /^[0-9]+$/g; //数字
	        if (reg1.test(val) || reg2.test(val)) {
	            return errMsg;
	        }
	    },
	
	    //姓名字节
	    strlen: function strlen(val, len, errMsg) {
	        var lens = 0;
	        for (var i = 0; i < val.length; i++) {
	            var c = val.charCodeAt(i);
	            //单字节加1
	            if (c >= 0x0001 && c <= 0x007e || 0xff60 <= c && c <= 0xff9f) {
	                lens++;
	            } else {
	                lens += 2;
	            }
	        }
	        if (lens > len) {
	            return errMsg;
	        }
	        // if (lens < len || lens > len) {
	        //     return errMsg;
	        // }
	    },
	
	    minLength: function minLength(val, len, errMsg) {
	        if (val.length < len) {
	            return errMsg;
	        }
	    },
	    maxLength: function maxLength(val, len, errMsg) {
	        if (val.length > len) {
	            return errMsg;
	        }
	    },
	    isMobile: function isMobile(val, errMsg) {
	        // var isMobile = /^0?(13[0-9]|15[012356789]|18[0123456789]|14[57]|17[0-9])[0-9]{8}$/g;
	        var isMobile = /(^1[3|4|5|7|8][0-9]{9}$)/;
	        if (!isMobile.test(val)) {
	            return errMsg;
	        }
	    },
	
	    //验证码校验（四位数字）
	    isVerifCode: function isVerifCode(val, errMsg) {
	        var isNumber = /^[0-9]{4}$/;
	        var isNumber2 = /^[0-9]{6}$/;
	        if (!(isNumber.test(val) || isNumber2.test(val))) {
	            return errMsg;
	        }
	    },
	
	    // 密码校验(6-16位数字、字母的组合)
	    isPassword: function isPassword(val, errMsg) {
	        var isnumAz = /^[0-9a-zA-Z]{6,16}$/;
	        //var isnumAz = /^(?!^\d+$)(?!^[a-zA-Z]+$)[0-9a-zA-Z]{6,16}$/;
	        if (!isnumAz.test(val)) {
	            return errMsg;
	        }
	    },
	
	    isBirthday: function isBirthday(val, errMsg) {
	        var value = val.trim();
	        if (value.length != 8) {
	            return errMsg;
	        }
	        var year = parseInt(value.slice(0, 4), 10);
	        var month = parseInt(value.slice(4, 6), 10);
	        var day = parseInt(value.slice(6), 10);
	        if (!strategies._isdate(year, month, day)) {
	            return errMsg;
	        }
	    },
	
	    //身份证号码校验
	    isIdCode: function isIdCode(val, errMsg) {
	        if (!val) return errMsg;
	        val = val.toUpperCase();
	        //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
	        /*if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(val))) {
	        return errMsg;
	        }*/
	        //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
	        //下面分别分析出生日期和校验位
	        var len, re;
	        len = val.length;
	        if (!/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(val)) {
	            return errMsg;
	        }
	
	        if (len == 15) {
	            re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
	            var arrSplit = val.match(re);
	            //检查生日日期是否正确
	            var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
	            var bGoodDay;
	            bGoodDay = strategies._isdate('19' + arrSplit[2], arrSplit[3], arrSplit[4]);
	            if (!bGoodDay) {
	                return errMsg;
	            } else {
	                //将15位身份证转成18位
	                //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
	                var arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
	                var arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
	                var nTemp = 0,
	                    i;
	                val = val.substr(0, 6) + '19' + val.substr(6, val.length - 6);
	                for (i = 0; i < 17; i++) {
	                    nTemp += val.substr(i, 1) * arrInt[i];
	                }
	                val += arrCh[nTemp % 11];
	                //return true;
	            }
	        }
	        if (len == 18) {
	            re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
	            var arrSplit = val.match(re);
	            //检查生日日期是否正确
	            var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
	            var bGoodDay;
	            bGoodDay = strategies._isdate(arrSplit[2], arrSplit[3], arrSplit[4]);
	            if (!bGoodDay) {
	                return errMsg;
	            } else {
	                //检验18位身份证的校验码是否正确。
	                //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
	                var valval;
	                var arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
	                var arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
	                var nTemp = 0,
	                    i;
	                for (i = 0; i < 17; i++) {
	                    nTemp += val.substr(i, 1) * arrInt[i];
	                }
	                valval = arrCh[nTemp % 11];
	                if (valval != val.substr(17, 1)) {
	                    return errMsg;
	                }
	            }
	        } else {
	            if (!/^[a-zA-Z0-9]{5,19}$/.test(val)) {
	                //其他证件 5-19位，[A-Za-z0-9]
	                return errMsg;
	            }
	        }
	    },
	
	    isText: function isText(val, errMsg) {
	        var text = /^[\s\u4e00-\u9fa5_a-zA-Z0-9_,\.;\:"'!！*%#@￥$&·“”?？<>《》，（）()~+=：、|{}[\]【】]{1,300}$/;
	        if (!text.test(val)) {
	            return errMsg;
	        }
	    }
	};
	
	/**
	 * 接受验证的数组
	 */
	var validate = function validate(arr) {
	    var obj = {
	        status: true
	    };
	    for (var i = 0, l1 = arr.length; i < l1; i++) {
	        var item = arr[i];
	        var stop = false;
	        for (var k = 0, l2 = item.rules.length; k < l2; k++) {
	
	            var r = item.rules[k];
	            var arg = r.rule.split(':');
	            var rule = arg.shift();
	            if (r.type) {
	                arg.unshift(r.type);
	            }
	            arg.unshift(item.value);
	            arg.push(r.msg);
	            var status = strategies[rule].apply(null, arg);
	            if (status) {
	                obj = {
	                    value: item.value,
	                    status: false,
	                    msg: status
	                };
	                stop = true;
	                break;
	            }
	        }
	        if (stop) break;
	    }
	    return obj;
	};
	
	module.exports = validate;

/***/ },
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */
/***/ function(module, exports) {

	"use strict";
	
	/*
	 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
	 * Digest Algorithm, as defined in RFC 1321.
	 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for more info.
	 */
	
	/*
	 * Configurable variables. You may need to tweak these to be compatible with
	 * the server-side, but the defaults work in most cases.
	 */
	var hexcase = 0; /* hex output format. 0 - lowercase; 1 - uppercase        */
	var b64pad = ""; /* base-64 pad character. "=" for strict RFC compliance   */
	var chrsz = 8; /* bits per input character. 8 - ASCII; 16 - Unicode      */
	
	/*
	 * These are the functions you'll usually want to call
	 * They take string arguments and return either hex or base-64 encoded strings
	 */
	function hex_md5(s) {
	  return binl2hex(core_md5(str2binl(s), s.length * chrsz));
	}
	function b64_md5(s) {
	  return binl2b64(core_md5(str2binl(s), s.length * chrsz));
	}
	function str_md5(s) {
	  return binl2str(core_md5(str2binl(s), s.length * chrsz));
	}
	function hex_hmac_md5(key, data) {
	  return binl2hex(core_hmac_md5(key, data));
	}
	function b64_hmac_md5(key, data) {
	  return binl2b64(core_hmac_md5(key, data));
	}
	function str_hmac_md5(key, data) {
	  return binl2str(core_hmac_md5(key, data));
	}
	
	/*
	 * Perform a simple self-test to see if the VM is working
	 */
	function md5_vm_test() {
	  return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
	}
	
	/*
	 * Calculate the MD5 of an array of little-endian words, and a bit length
	 */
	function core_md5(x, len) {
	  /* append padding */
	  x[len >> 5] |= 0x80 << len % 32;
	  x[(len + 64 >>> 9 << 4) + 14] = len;
	
	  var a = 1732584193;
	  var b = -271733879;
	  var c = -1732584194;
	  var d = 271733878;
	
	  for (var i = 0; i < x.length; i += 16) {
	    var olda = a;
	    var oldb = b;
	    var oldc = c;
	    var oldd = d;
	
	    a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
	    d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
	    c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
	    b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
	    a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
	    d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
	    c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
	    b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
	    a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
	    d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
	    c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
	    b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
	    a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
	    d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
	    c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
	    b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
	
	    a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
	    d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
	    c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
	    b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
	    a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
	    d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
	    c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
	    b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
	    a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
	    d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
	    c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
	    b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
	    a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
	    d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
	    c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
	    b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
	
	    a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
	    d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
	    c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
	    b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
	    a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
	    d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
	    c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
	    b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
	    a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
	    d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
	    c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
	    b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
	    a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
	    d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
	    c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
	    b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
	
	    a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
	    d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
	    c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
	    b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
	    a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
	    d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
	    c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
	    b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
	    a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
	    d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
	    c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
	    b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
	    a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
	    d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
	    c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
	    b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
	
	    a = safe_add(a, olda);
	    b = safe_add(b, oldb);
	    c = safe_add(c, oldc);
	    d = safe_add(d, oldd);
	  }
	  return Array(a, b, c, d);
	}
	
	/*
	 * These functions implement the four basic operations the algorithm uses.
	 */
	function md5_cmn(q, a, b, x, s, t) {
	  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
	}
	function md5_ff(a, b, c, d, x, s, t) {
	  return md5_cmn(b & c | ~b & d, a, b, x, s, t);
	}
	function md5_gg(a, b, c, d, x, s, t) {
	  return md5_cmn(b & d | c & ~d, a, b, x, s, t);
	}
	function md5_hh(a, b, c, d, x, s, t) {
	  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
	}
	function md5_ii(a, b, c, d, x, s, t) {
	  return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
	}
	
	/*
	 * Calculate the HMAC-MD5, of a key and some data
	 */
	function core_hmac_md5(key, data) {
	  var bkey = str2binl(key);
	  if (bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);
	
	  var ipad = Array(16),
	      opad = Array(16);
	  for (var i = 0; i < 16; i++) {
	    ipad[i] = bkey[i] ^ 0x36363636;
	    opad[i] = bkey[i] ^ 0x5C5C5C5C;
	  }
	
	  var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
	  return core_md5(opad.concat(hash), 512 + 128);
	}
	
	/*
	 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	 * to work around bugs in some JS interpreters.
	 */
	function safe_add(x, y) {
	  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
	  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	  return msw << 16 | lsw & 0xFFFF;
	}
	
	/*
	 * Bitwise rotate a 32-bit number to the left.
	 */
	function bit_rol(num, cnt) {
	  return num << cnt | num >>> 32 - cnt;
	}
	
	/*
	 * Convert a string to an array of little-endian words
	 * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
	 */
	function str2binl(str) {
	  var bin = Array();
	  var mask = (1 << chrsz) - 1;
	  for (var i = 0; i < str.length * chrsz; i += chrsz) {
	    bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << i % 32;
	  }return bin;
	}
	
	/*
	 * Convert an array of little-endian words to a string
	 */
	function binl2str(bin) {
	  var str = "";
	  var mask = (1 << chrsz) - 1;
	  for (var i = 0; i < bin.length * 32; i += chrsz) {
	    str += String.fromCharCode(bin[i >> 5] >>> i % 32 & mask);
	  }return str;
	}
	
	/*
	 * Convert an array of little-endian words to a hex string.
	 */
	function binl2hex(binarray) {
	  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
	  var str = "";
	  for (var i = 0; i < binarray.length * 4; i++) {
	    str += hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 + 4 & 0xF) + hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 & 0xF);
	  }
	  return str;
	}
	
	/*
	 * Convert an array of little-endian words to a base-64 string
	 */
	function binl2b64(binarray) {
	  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	  var str = "";
	  for (var i = 0; i < binarray.length * 4; i += 3) {
	    var triplet = (binarray[i >> 2] >> 8 * (i % 4) & 0xFF) << 16 | (binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4) & 0xFF) << 8 | binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4) & 0xFF;
	    for (var j = 0; j < 4; j++) {
	      if (i * 8 + j * 6 > binarray.length * 32) str += b64pad;else str += tab.charAt(triplet >> 6 * (3 - j) & 0x3F);
	    }
	  }
	  return str;
	}
	module.exports = {
	  'hex_md5': hex_md5
	};

/***/ },
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */
/***/ function(module, exports) {

	var tpl;
	
	tpl = '<div class="benmu-flex" style=\'overflow-y: scroll;\'>\n    <header class="yo-header yo-header-weChat">\n        北京通·京医通官方微信服务平台\n    </header>\n    <!-- tab切换标签 -->\n    <div v-show=\'!serviceShow\'>\n        <div class="m-hostRaiders-bd-tab">\n            <ul class="yo-tab yo-tab-filter">\n                <li class="item" :class="{\'item-on\':tabChange}" @click="tabChange = true">\n                    验证码登录\n                </li>\n                <li class="item" :class="{\'item-on\':!tabChange}" @click="tabChange = false">\n                    密码登录\n                </li>\n            </ul>\n        </div>\n        <!-- tab切换标签 end-->\n        <!-- 验证码登录模块 -->\n        <div v-show=\'tabChange\'>\n            <div class="yo-list yo-list-login">\n                <div class="item">\n                    <span class="account">账号</span>\n                    <div class="login-input">\n                        <input type="Tel" value="" maxlength="11" placeholder="请填写手机号码" v-model=\'Tel\' v-bind:readonly="isTimer" @focus=\'showDelFun("showDelTel")\' @blur=\'hideDelFun("showDelTel")\'>\n                    </div>\n                    <a href="javascript:;" class="tel-del" v-show=\'Tel && !(isTimer && codeType) && showDel.showDelTel\' @click=\'Tel=""\'>\n                        <i class="ff-icon ff-del"></i>\n                    </a>\n                </div>\n                <div class="item">\n                    <span class="account">验证码</span>\n                    <div class="login-input">\n                        <input type="Tel" maxlength="6" placeholder="请填写验证码"  v-model=\'verifCode\' errTip=\'输入错误\' @focus=\'showDelFun("showDelverifCode")\' @blur=\'hideDelFun("showDelverifCode")\'>\n                    </div>\n                    <a href="javascript:;" class="tel-del tel-del-yzm" v-show=\'verifCode && showDel.showDelverifCode\' @click=\'verifCode=""\'>\n                        <i class="ff-icon ff-del"></i>\n                    </a>\n                    <a href="javascript:;">\n                        <input type="button" class="yzm" :class=\'{"noGet":(!Tel || isTimer)}\' value="{{SMSCodeBtn}}" @click=\'sendVerifCode(1)\'>\n                    </a>\n                </div>\n            </div>\n            <p class="bm_error">{{errMsg}}</p>\n            <div class="bm_voice">\n                <p class="wait_message" :class=\'{"wait_message_gray":(!Tel || (isTimer && codeType))}\' v-show=\'!(isTimer && (codeType == 2))\'>\n                    <i>短信验证码收不到？试试 </i>\n                    <i class="ff-icon ff-voice"></i>\n                    <span class="voice-txt" @click=\'sendVerifCode(2)\'>语音验证</span>\n                </p>\n            </div>\n            <div class="wait_noget" v-show=\'(isTimer && codeType == 2)\'>请保持电话畅通，及时接听语音验证码。</div>\n            <section>\n                <a href="javascript:;" class="yo-btn yo-btn-login yo-btn-l yo-btn-stacked" :class=\'{"yo-btn-login-light": (Tel && verifCode)}\' @click=\'checkLogin(1)\'>登录</a>\n            </section>\n            <div class="bm_tishi">\n                <p>提示：未注册北京通·京医通账号的手机号，登录时将自动注册北京通·京医通账号，且代表您已同意 <a href="javascript:;" @click=\'serviceAgreement\'>《北京通·京医通服务协议》</a></p>\n            </div>\n        </div>\n        <!-- 验证码登录模块 end-->\n\n        <!-- 密码登录模块 -->\n        <div v-show=\'!tabChange\'>\n            <div class="yo-list yo-list-login">\n                <div class="item">\n                    <span class="account">账号</span>\n                    <div class="login-input">\n                        <input type="Tel" value="" maxlength="11" placeholder="请填写手机号码"  v-model=\'accountNum\'\n                        @focus=\'showDelFun("showDelaccountNum")\' @blur=\'hideDelFun("showDelaccountNum")\'>\n                    </div>\n                    <a href="javascript:;" v-show=\'accountNum && showDel.showDelaccountNum\' @click=\'accountNum=""\' class="tel-del"><i class="ff-icon ff-del"></i></a>\n                </div>\n                <div class="item">\n                    <span class="account">密码</span>\n                    <div class="login-input">\n                        <input type="password" value="" maxlength="16" placeholder="6-16位数字、字母的组合" v-model=\'password\' @focus=\'showDelFun("showDelpassword")\' @blur=\'hideDelFun("showDelpassword")\'>\n                    </div>\n                    <a href="javascript:;" v-show=\'password && showDel.showDelpassword\' @click=\'password=""\' class="tel-del"><i class="ff-icon ff-del"></i></a>\n                </div>\n            </div>\n            <section>\n                <a href="javascript:;" class="yo-btn yo-btn-login yo-btn-l yo-btn-stacked" :class=\'{"yo-btn-login-light" : accountNum && password}\' @click=\'checkLogin(2)\'>登录</a>\n            </section>\n            <p class="forget-pwd">\n                <a href="/wechat/account/forgetPassword.html?userTel={{accountNum}}&fromPage=userLogin">忘记密码</a>\n            </p>\n        </div>\n        <!-- 密码登录模块 end-->\n    </div>\n\n    <alert :alert.sync="alert"></alert>\n    <loading :loading.sync="loading"></loading>\n    <service-protocol :service-show.sync="serviceShow"></service-protocol>\n</div>';
	
	module.exports = tpl;


/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map