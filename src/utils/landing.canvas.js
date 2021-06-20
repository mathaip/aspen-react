/* eslint-disable */
/*eslint no-unused-expressions: ["error", { "enforceForJSX": true }]*/
"use strict";

!function () {
    "use strict";

    function s(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
    }

    function t(t, e, i) {
        return e && n(t.prototype, e), i && n(t, i), t;
    }

    function e(e, t) {
        var i,
            n = Object.keys(e);
        return Object.getOwnPropertySymbols && (i = Object.getOwnPropertySymbols(e), t && (i = i.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, i)), n;
    }

    function o(s) {
        for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? e(Object(r), !0).forEach(function (t) {
            var e, i, n;
            e = s, n = r[i = t], i in e ? Object.defineProperty(e, i, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
            }) : e[i] = n;
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(r)) : e(Object(r)).forEach(function (t) {
            Object.defineProperty(s, t, Object.getOwnPropertyDescriptor(r, t));
        });
        }

        return s;
    }

    function a(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
        }), e && i(t, e);
    }

    function l(t) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
    }

    function i(t, e) {
        return (i = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
        })(t, e);
    }

    function h(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }

    function c(r) {
        var o = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (t) {
            return !1;
        }
        }();

        return function () {
        var t,
            e,
            i,
            n,
            s = l(r);
        return e = o ? (t = l(this).constructor, Reflect.construct(s, arguments, t)) : s.apply(this, arguments), i = this, !(n = e) || "object" != typeof n && "function" != typeof n ? h(i) : n;
        };
    }

    function u(t, e, i) {
        return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, i) {
        var n = function (t, e) {
            for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = l(t)););

            return t;
        }(t, e);

        if (n) {
            var s = Object.getOwnPropertyDescriptor(n, e);
            return s.get ? s.get.call(i) : s.value;
        }
        })(t, e, i || t);
    }

    function D(t, e) {
        return function (t) {
        if (Array.isArray(t)) return t;
        }(t) || function (t, e) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
        var i = [],
            n = !0,
            s = !1,
            r = void 0;

        try {
            for (var o, a = t[Symbol.iterator](); !(n = (o = a.next()).done) && (i.push(o.value), !e || i.length !== e); n = !0);
        } catch (t) {
            s = !0, r = t;
        } finally {
            try {
            n || null == a.return || a.return();
            } finally {
            if (s) throw r;
            }
        }

        return i;
        }(t, e) || r(t, e) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }

    function y(t) {
        return function (t) {
        if (Array.isArray(t)) return d(t);
        }(t) || function (t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
        }(t) || r(t) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }

    function r(t, e) {
        if (t) {
        if ("string" == typeof t) return d(t, e);
        var i = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? d(t, e) : void 0;
        }
    }

    function d(t, e) {
        (null == e || e > t.length) && (e = t.length);

        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];

        return n;
    }

    var f = {
        el: document,
        name: "scroll",
        offset: [0, 0],
        repeat: !1,
        smooth: !1,
        direction: "vertical",
        gestureDirection: "vertical",
        reloadOnContextChange: !1,
        lerp: .1,
        class: "is-inview",
        scrollbarContainer: !1,
        scrollbarClass: "c-scrollbar",
        scrollingClass: "has-scroll-scrolling",
        draggingClass: "has-scroll-dragging",
        smoothClass: "has-scroll-smooth",
        initClass: "has-scroll-init",
        getSpeed: !1,
        getDirection: !1,
        scrollFromAnywhere: !1,
        multiplier: 1,
        firefoxMultiplier: 50,
        touchMultiplier: 2,
        resetNativeScroll: !0,
        tablet: {
        smooth: !1,
        direction: "vertical",
        gestureDirection: "vertical",
        breakpoint: 1024
        },
        smartphone: {
        smooth: !1,
        direction: "vertical",
        gestureDirection: "vertical"
        }
    },
    m = function () {
        function e() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            s(this, e), Object.assign(this, f, t), this.smartphone = f.smartphone, t.smartphone && Object.assign(this.smartphone, t.smartphone), this.tablet = f.tablet, t.tablet && Object.assign(this.tablet, t.tablet), this.namespace = "locomotive", this.html = document.documentElement, this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.windowMiddle = {
                x: this.windowWidth / 2,
                y: this.windowHeight / 2
            }, this.els = {}, this.currentElements = {}, this.listeners = {}, this.hasScrollTicking = !1, this.hasCallEventSet = !1, this.checkScroll = this.checkScroll.bind(this), this.checkResize = this.checkResize.bind(this), this.checkEvent = this.checkEvent.bind(this), this.instance = {
                scroll: {
                x: 0,
                y: 0
                },
                limit: {
                x: this.html.offsetHeight,
                y: this.html.offsetHeight
                },
                currentElements: this.currentElements
            }, this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop", this.isMobile && (this.direction = this[this.context].direction), "horizontal" === this.direction ? this.directionAxis = "x" : this.directionAxis = "y", this.getDirection && (this.instance.direction = null), this.getDirection && (this.instance.speed = 0), this.html.classList.add(this.initClass), window.addEventListener("resize", this.checkResize, !1);
        }

        return t(e, [{
            key: "init",
            value: function () {
                this.initEvents();
            }
        }, {
            key: "checkScroll",
            value: function () {
                this.dispatchScroll();
            }
        }, {
            key: "checkResize",
            value: function () {
                var t = this;
                this.resizeTick || (this.resizeTick = !0, requestAnimationFrame(function () {
                t.resize(), t.resizeTick = !1;
                }));
            }
        }, {
            key: "resize",
            value: function () {}
        }, {
            key: "checkContext",
            value: function () {
                var t;
                this.reloadOnContextChange && (this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints || this.windowWidth < this.tablet.breakpoint, this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint, t = this.context, this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop", t != this.context && ("desktop" == t ? this.smooth : this[t].smooth) != ("desktop" == this.context ? this.smooth : this[this.context].smooth) && window.location.reload());
            }
        }, {
            key: "initEvents",
            value: function () {
                var e = this;
                this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]")), this.setScrollTo = this.setScrollTo.bind(this), this.scrollToEls.forEach(function (t) {
                t.addEventListener("click", e.setScrollTo, !1);
                });
            }
        }, {
            key: "setScrollTo",
            value: function (t) {
                t.preventDefault(), this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name, "-href")) || t.currentTarget.getAttribute("href"), {
                offset: t.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
                });
            }
        }, {
            key: "addElements",
            value: function () {}
        }, {
            key: "detectElements",
            value: function (o) {
                var a = this,
                    l = this.instance.scroll.y,
                    h = l + this.windowHeight,
                    c = this.instance.scroll.x,
                    u = c + this.windowWidth;
                Object.entries(this.els).forEach(function (t) {
                var e,
                    i,
                    n = D(t, 2),
                    s = n[0],
                    r = n[1];
                !r || r.inView && !o || ("horizontal" === a.direction ? u >= r.left && c < r.right && a.setInView(r, s) : h >= r.top && l < r.bottom && a.setInView(r, s)), r && r.inView && ("horizontal" === a.direction ? (e = r.right - r.left, r.progress = (a.instance.scroll.x - (r.left - a.windowWidth)) / (e + a.windowWidth), (u < r.left || c > r.right) && a.setOutOfView(r, s)) : (i = r.bottom - r.top, r.progress = (a.instance.scroll.y - (r.top - a.windowHeight)) / (i + a.windowHeight), (h < r.top || l > r.bottom) && a.setOutOfView(r, s)));
                }), this.hasScrollTicking = !1;
            }
        }, {
            key: "setInView",
            value: function (t, e) {
                this.els[e].inView = !0, t.el.classList.add(t.class), (this.currentElements[e] = t).call && this.hasCallEventSet && (this.dispatchCall(t, "enter"), t.repeat || (this.els[e].call = !1));
            }
        }, {
            key: "setOutOfView",
            value: function (t, e) {
                var i = this;
                this.els[e].inView = !1, Object.keys(this.currentElements).forEach(function (t) {
                t === e && delete i.currentElements[t];
                }), t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"), t.repeat && t.el.classList.remove(t.class);
            }
        }, {
            key: "dispatchCall",
            value: function (t, e) {
                this.callWay = e, this.callValue = t.call.split(",").map(function (t) {
                return t.trim();
                }), this.callObj = t, 1 == this.callValue.length && (this.callValue = this.callValue[0]);
                var i = new Event(this.namespace + "call");
                this.el.dispatchEvent(i);
            }
        }, {
            key: "dispatchScroll",
            value: function () {
                var t = new Event(this.namespace + "scroll");
                this.el.dispatchEvent(t);
            }
        }, {
            key: "setEvents",
            value: function (t, e) {
                this.listeners[t] || (this.listeners[t] = []);
                var i = this.listeners[t];
                i.push(e), 1 === i.length && this.el.addEventListener(this.namespace + t, this.checkEvent, !1), "call" === t && (this.hasCallEventSet = !0, this.detectElements(!0));
            }
        }, {
            key: "unsetEvents",
            value: function (t, e) {
                var i, n;
                this.listeners[t] && ((n = (i = this.listeners[t]).indexOf(e)) < 0 || (i.splice(n, 1), 0 === i.index && this.el.removeEventListener(this.namespace + t, this.checkEvent, !1)));
            }
        }, {
            key: "checkEvent",
            value: function (t) {
                var e = this,
                    i = t.type.replace(this.namespace, ""),
                    n = this.listeners[i];
                n && 0 !== n.length && n.forEach(function (t) {
                switch (i) {
                    case "scroll":
                    return t(e.instance);

                    case "call":
                    return t(e.callValue, e.callWay, e.callObj);

                    default:
                    return t();
                }
                });
            }
        }, {
            key: "startScroll",
            value: function () {}
        }, {
            key: "stopScroll",
            value: function () {}
        }, {
            key: "setScroll",
            value: function () {
                this.instance.scroll = {
                x: 0,
                y: 0
                };
            }
        }, {
            key: "destroy",
            value: function () {
                var e = this;
                window.removeEventListener("resize", this.checkResize, !1), Object.keys(this.listeners).forEach(function (t) {
                e.el.removeEventListener(e.namespace + t, e.checkEvent, !1);
                }), this.listeners = {}, this.scrollToEls.forEach(function (t) {
                t.removeEventListener("click", e.setScrollTo, !1);
                }), this.html.classList.remove(this.initClass);
            }
        }]), e;
    }(),
    p = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function g(t, e) {
        return t(e = {
        exports: {}
        }, e.exports), e.exports;
    }

    var v = g(function (t, e) {
        t.exports = {
        polyfill: function () {
            var t,
                o,
                l,
                h,
                i,
                e,
                c = window,
                u = document;

            function d(t, e) {
            this.scrollLeft = t, this.scrollTop = e;
            }

            function n(t) {
            if (null === t || "object" != typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior) return !0;
            if ("object" == typeof t && "smooth" === t.behavior) return !1;
            throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.");
            }

            function s(t, e) {
            return "Y" === e ? t.clientHeight + i < t.scrollHeight : "X" === e ? t.clientWidth + i < t.scrollWidth : void 0;
            }

            function r(t, e) {
            var i = c.getComputedStyle(t, null)["overflow" + e];
            return "auto" === i || "scroll" === i;
            }

            function a(t) {
            for (; t !== u.body && !1 === (0, i = s(e = t, "Y") && r(e, "Y"), n = s(e, "X") && r(e, "X"), i || n);) t = t.parentNode || t.host;

            var e, i, n;
            return t;
            }

            function f(t) {
            var e,
                i,
                n,
                s,
                r = (h() - t.startTime) / o;
            s = r = 1 < r ? 1 : r, e = .5 * (1 - Math.cos(Math.PI * s)), i = t.startX + (t.x - t.startX) * e, n = t.startY + (t.y - t.startY) * e, t.method.call(t.scrollable, i, n), i === t.x && n === t.y || c.requestAnimationFrame(f.bind(c, t));
            }

            function m(t, e, i) {
            var n,
                s,
                r,
                o = h(),
                a = t === u.body ? (s = (n = c).scrollX || c.pageXOffset, r = c.scrollY || c.pageYOffset, l.scroll) : (s = (n = t).scrollLeft, r = t.scrollTop, d);
            f({
                scrollable: n,
                method: a,
                startTime: o,
                startX: s,
                startY: r,
                x: e,
                y: i
            });
            }

            "scrollBehavior" in u.documentElement.style && !0 !== c.__forceSmoothScrollPolyfill__ || (t = c.HTMLElement || c.Element, o = 468, l = {
            scroll: c.scroll || c.scrollTo,
            scrollBy: c.scrollBy,
            elementScroll: t.prototype.scroll || d,
            scrollIntoView: t.prototype.scrollIntoView
            }, h = c.performance && c.performance.now ? c.performance.now.bind(c.performance) : Date.now, e = c.navigator.userAgent, i = new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(e) ? 1 : 0, c.scroll = c.scrollTo = function () {
            void 0 !== arguments[0] && (!0 !== n(arguments[0]) ? m.call(c, u.body, void 0 !== arguments[0].left ? ~~arguments[0].left : c.scrollX || c.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : c.scrollY || c.pageYOffset) : l.scroll.call(c, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : c.scrollX || c.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : c.scrollY || c.pageYOffset));
            }, c.scrollBy = function () {
            void 0 !== arguments[0] && (n(arguments[0]) ? l.scrollBy.call(c, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : m.call(c, u.body, ~~arguments[0].left + (c.scrollX || c.pageXOffset), ~~arguments[0].top + (c.scrollY || c.pageYOffset)));
            }, t.prototype.scroll = t.prototype.scrollTo = function () {
            if (void 0 !== arguments[0]) if (!0 !== n(arguments[0])) {
                var t = arguments[0].left,
                    e = arguments[0].top;
                m.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e);
            } else {
                if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                l.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop);
            }
            }, t.prototype.scrollBy = function () {
            void 0 !== arguments[0] && (!0 !== n(arguments[0]) ? this.scroll({
                left: ~~arguments[0].left + this.scrollLeft,
                top: ~~arguments[0].top + this.scrollTop,
                behavior: arguments[0].behavior
            }) : l.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop));
            }, t.prototype.scrollIntoView = function () {
            var t, e, i;
            !0 !== n(arguments[0]) ? (e = (t = a(this)).getBoundingClientRect(), i = this.getBoundingClientRect(), t !== u.body ? (m.call(this, t, t.scrollLeft + i.left - e.left, t.scrollTop + i.top - e.top), "fixed" !== c.getComputedStyle(t).position && c.scrollBy({
                left: e.left,
                top: e.top,
                behavior: "smooth"
            })) : c.scrollBy({
                left: i.left,
                top: i.top,
                behavior: "smooth"
            })) : l.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]);
            });
        }
        };
    }),
      b = (v.polyfill, function () {
    a(n, m);
    var i = c(n);

    function n() {
        var t,
            e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        return s(this, n), (t = i.call(this, e)).resetNativeScroll && (history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0)), window.addEventListener("scroll", t.checkScroll, !1), void 0 === window.smoothscrollPolyfill && (window.smoothscrollPolyfill = v, window.smoothscrollPolyfill.polyfill()), t;
    }

    return t(n, [{
        key: "init",
        value: function () {
            this.instance.scroll.y = window.pageYOffset, this.addElements(), this.detectElements(), u(l(n.prototype), "init", this).call(this);
        }
    }, {
        key: "checkScroll",
        value: function () {
            var t = this;
            u(l(n.prototype), "checkScroll", this).call(this), this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.speedTs = Date.now()), this.instance.scroll.y = window.pageYOffset, Object.entries(this.els).length && (this.hasScrollTicking || (requestAnimationFrame(function () {
            t.detectElements();
            }), this.hasScrollTicking = !0));
        }
    }, {
        key: "addDirection",
        value: function () {
            window.pageYOffset > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : window.pageYOffset < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up");
        }
    }, {
        key: "addSpeed",
        value: function () {
            window.pageYOffset != this.instance.scroll.y ? this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0;
        }
    }, {
        key: "resize",
        value: function () {
            Object.entries(this.els).length && (this.windowHeight = window.innerHeight, this.updateElements());
        }
    }, {
        key: "addElements",
        value: function () {
            var m = this;
            this.els = {}, this.el.querySelectorAll("[data-" + this.name + "]").forEach(function (t, e) {
            var i = t.getBoundingClientRect(),
                n = t.dataset[m.name + "Class"] || m.class,
                s = "string" == typeof t.dataset[m.name + "Id"] ? t.dataset[m.name + "Id"] : e,
                r = i.top + m.instance.scroll.y,
                o = i.left,
                a = i.right,
                l = r + t.offsetHeight,
                h = "string" == typeof t.dataset[m.name + "Offset"] ? t.dataset[m.name + "Offset"].split(",") : m.offset,
                c = t.dataset[m.name + "Repeat"],
                u = t.dataset[m.name + "Call"],
                c = "false" != c && (null != c || m.repeat),
                d = m.getRelativeOffset(h),
                f = {
                el: t,
                id: s,
                class: n,
                top: r + d[0],
                bottom: l - d[1],
                left: o,
                right: a,
                offset: h,
                progress: 0,
                repeat: c,
                inView: !1,
                call: u
            };
            m.els[s] = f, t.classList.contains(n) && m.setInView(m.els[s], s);
            });
        }
    }, {
        key: "updateElements",
        value: function () {
            var a = this;
            Object.entries(this.els).forEach(function (t) {
            var e = D(t, 2),
                i = e[0],
                n = e[1],
                s = n.el.getBoundingClientRect().top + a.instance.scroll.y,
                r = s + n.el.offsetHeight,
                o = a.getRelativeOffset(n.offset);
            a.els[i].top = s + o[0], a.els[i].bottom = r - o[1];
            }), this.hasScrollTicking = !1;
        }
    }, {
        key: "getRelativeOffset",
        value: function (t) {
            var e = [0, 0];
            if (t) for (var i = 0; i < t.length; i++) "string" == typeof t[i] ? t[i].includes("%") ? e[i] = parseInt(t[i].replace("%", "") * this.windowHeight / 100) : e[i] = parseInt(t[i]) : e[i] = t[i];
            return e;
        }
    }, {
        key: "scrollTo",
        value: function (t, e) {
            var i = 1 < arguments.length && void 0 !== e ? e : {},
                n = parseInt(i.offset) || 0,
                s = !!i.callback && i.callback;

            if ("string" == typeof t) {
            if ("top" === t) t = this.html;else if ("bottom" === t) t = this.html.offsetHeight - window.innerHeight;else if (!(t = document.querySelector(t))) return;
            } else if ("number" == typeof t) t = parseInt(t);else if (!t || !t.tagName) return void console.warn("`target` parameter is not valid");

            n = "number" != typeof t ? t.getBoundingClientRect().top + n + this.instance.scroll.y : t + n, s && (n = n.toFixed(), window.addEventListener("scroll", function t() {
            window.pageYOffset.toFixed() === n && (window.removeEventListener("scroll", t), s());
            })), window.scrollTo({
            top: n,
            behavior: "smooth"
            });
        }
    }, {
        key: "update",
        value: function () {
            this.addElements(), this.detectElements();
        }
    }, {
        key: "destroy",
        value: function () {
            u(l(n.prototype), "destroy", this).call(this), window.removeEventListener("scroll", this.checkScroll, !1);
        }
    }]), n;
  }()),
      w = Object.getOwnPropertySymbols,
      E = Object.prototype.hasOwnProperty,
      T = Object.prototype.propertyIsEnumerable;
    var x = function () {
        try {
        if (!Object.assign) return;
        var t = new String("abc");
        if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return;

        for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;

        if ("0123456789" !== Object.getOwnPropertyNames(e).map(function (t) {
            return e[t];
        }).join("")) return;
        var n = {};
        return "abcdefghijklmnopqrst".split("").forEach(function (t) {
            n[t] = t;
        }), "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, n)).join("") ? void 0 : 1;
        } catch (t) {
        return;
        }
    }() ? Object.assign : function (t, e) {
        for (var i, n, s = function (t) {
        if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(t);
        }(t), r = 1; r < arguments.length; r++) {
        for (var o in i = Object(arguments[r])) E.call(i, o) && (s[o] = i[o]);

        if (w) {
            n = w(i);

            for (var a = 0; a < n.length; a++) T.call(i, n[a]) && (s[n[a]] = i[n[a]]);
        }
        }

        return s;
    };

    function S() {}

    S.prototype = {
        on: function (t, e, i) {
        var n = this.e || (this.e = {});
        return (n[t] || (n[t] = [])).push({
            fn: e,
            ctx: i
        }), this;
        },
        once: function (t, e, i) {
        var n = this;

        function s() {
            n.off(t, s), e.apply(i, arguments);
        }

        return s._ = e, this.on(t, s, i);
        },
        emit: function (t) {
        for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, s = i.length; n < s; n++) i[n].fn.apply(i[n].ctx, e);

        return this;
        },
        off: function (t, e) {
        var i = this.e || (this.e = {}),
            n = i[t],
            s = [];
        if (n && e) for (var r = 0, o = n.length; r < o; r++) n[r].fn !== e && n[r].fn._ !== e && s.push(n[r]);
        return s.length ? i[t] = s : delete i[t], this;
        }
    };

    function A(t) {
        if (!t) return console.warn("bindAll requires at least one argument.");
        var e = Array.prototype.slice.call(arguments, 1);
        if (0 === e.length) for (var i in t) O.call(t, i) && "function" == typeof t[i] && "[object Function]" == L.call(t[i]) && e.push(i);

        for (var n = 0; n < e.length; n++) {
        var s = e[n];

        t[s] = function (t, e) {
            return function () {
            return t.apply(e, arguments);
            };
        }(t[s], t);
        }
    }

    var R = S,
        _ = g(function (t, e) {
        (function () {
        function t(t, e, i, n) {
            this.stability = null != t ? Math.abs(t) : 8, this.sensitivity = null != e ? 1 + Math.abs(e) : 100, this.tolerance = null != i ? 1 + Math.abs(i) : 1.1, this.delay = null != n ? n : 150, this.lastUpDeltas = function () {
            for (var t = [], e = 1, i = 2 * this.stability; 1 <= i ? e <= i : i <= e; 1 <= i ? e++ : e--) t.push(null);

            return t;
            }.call(this), this.lastDownDeltas = function () {
            for (var t = [], e = 1, i = 2 * this.stability; 1 <= i ? e <= i : i <= e; 1 <= i ? e++ : e--) t.push(null);

            return t;
            }.call(this), this.deltasTimestamp = function () {
            for (var t = [], e = 1, i = 2 * this.stability; 1 <= i ? e <= i : i <= e; 1 <= i ? e++ : e--) t.push(null);

            return t;
            }.call(this);
        }

        (null !== e ? e : this).Lethargy = (t.prototype.check = function (t) {
            var e;
            return null != (t = t.originalEvent || t).wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (e = -40 * t.detail), this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), 0 < e ? (this.lastUpDeltas.push(e), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(e), this.lastDownDeltas.shift(), this.isInertia(-1));
        }, t.prototype.isInertia = function (t) {
            var e,
                i,
                n,
                s,
                r,
                o,
                a = -1 === t ? this.lastDownDeltas : this.lastUpDeltas;
            return null === a[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && a[0] === a[2 * this.stability - 1]) && (i = a.slice(0, this.stability), e = a.slice(this.stability, 2 * this.stability), o = i.reduce(function (t, e) {
            return t + e;
            }), s = e.reduce(function (t, e) {
            return t + e;
            }), r = o / i.length, n = s / e.length, Math.abs(r) < Math.abs(n * this.tolerance) && this.sensitivity < Math.abs(n) && t);
        }, t.prototype.showLastUpDeltas = function () {
            return this.lastUpDeltas;
        }, t.prototype.showLastDownDeltas = function () {
            return this.lastDownDeltas;
        }, t);
        }).call(p);
    }),
        k = {
        hasWheelEvent: "onwheel" in document,
        hasMouseWheelEvent: "onmousewheel" in document,
        hasTouch: "ontouchstart" in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
        hasTouchWin: navigator.msMaxTouchPoints && 1 < navigator.msMaxTouchPoints,
        hasPointer: !!window.navigator.msPointerEnabled,
        hasKeyDown: "onkeydown" in document,
        isFirefox: -1 < navigator.userAgent.indexOf("Firefox")
    },
        L = Object.prototype.toString,
        O = Object.prototype.hasOwnProperty;

    var M = _.Lethargy,
        P = "virtualscroll",
        C = H,
        X = 37,
        U = 38,
        B = 39,
        F = 40,
        I = 32;

    function H(t) {
        A(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"), this.el = window, t && t.el && (this.el = t.el, delete t.el), this.options = x({
        mouseMultiplier: 1,
        touchMultiplier: 2,
        firefoxMultiplier: 15,
        keyStep: 120,
        preventTouch: !1,
        unpreventTouchClass: "vs-touchmove-allowed",
        limitInertia: !1,
        useKeyboard: !0,
        useTouch: !0
        }, t), this.options.limitInertia && (this._lethargy = new M()), this._emitter = new R(), this._event = {
        y: 0,
        x: 0,
        deltaX: 0,
        deltaY: 0
        }, this.touchStartX = null, this.touchStartY = null, this.bodyTouchAction = null, void 0 !== this.options.passive && (this.listenerOptions = {
        passive: this.options.passive
        });
    }

    function j(t, e, i) {
        return (1 - i) * t + i * e;
    }

    function W(t) {
        var e = {};

        if (window.getComputedStyle) {
        var i = getComputedStyle(t),
            n = i.transform || i.webkitTransform || i.mozTransform,
            s = n.match(/^matrix3d\((.+)\)$/);
        return s ? (e.x = s ? parseFloat(s[1].split(", ")[12]) : 0, e.y = s ? parseFloat(s[1].split(", ")[13]) : 0) : (s = n.match(/^matrix\((.+)\)$/), e.x = s ? parseFloat(s[1].split(", ")[4]) : 0, e.y = s ? parseFloat(s[1].split(", ")[5]) : 0), e;
        }
    }

    function Y(t) {
        for (var e = []; t && t !== document; t = t.parentNode) e.push(t);

        return e;
    }

    H.prototype._notify = function (t) {
        var e = this._event;
        e.x += e.deltaX, e.y += e.deltaY, this._emitter.emit(P, {
        x: e.x,
        y: e.y,
        deltaX: e.deltaX,
        deltaY: e.deltaY,
        originalEvent: t
        });
    }, H.prototype._onWheel = function (t) {
        var e,
            i = this.options;
        this._lethargy && !1 === this._lethargy.check(t) || ((e = this._event).deltaX = t.wheelDeltaX || -1 * t.deltaX, e.deltaY = t.wheelDeltaY || -1 * t.deltaY, k.isFirefox && 1 == t.deltaMode && (e.deltaX *= i.firefoxMultiplier, e.deltaY *= i.firefoxMultiplier), e.deltaX *= i.mouseMultiplier, e.deltaY *= i.mouseMultiplier, this._notify(t));
    }, H.prototype._onMouseWheel = function (t) {
        var e;
        this.options.limitInertia && !1 === this._lethargy.check(t) || ((e = this._event).deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0, e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta, this._notify(t));
    }, H.prototype._onTouchStart = function (t) {
        var e = t.targetTouches ? t.targetTouches[0] : t;
        this.touchStartX = e.pageX, this.touchStartY = e.pageY;
    }, H.prototype._onTouchMove = function (t) {
        var e = this.options;
        e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
        var i = this._event,
            n = t.targetTouches ? t.targetTouches[0] : t;
        i.deltaX = (n.pageX - this.touchStartX) * e.touchMultiplier, i.deltaY = (n.pageY - this.touchStartY) * e.touchMultiplier, this.touchStartX = n.pageX, this.touchStartY = n.pageY, this._notify(t);
    }, H.prototype._onKeyDown = function (t) {
        var e = this._event;
        e.deltaX = e.deltaY = 0;
        var i = window.innerHeight - 40;

        switch (t.keyCode) {
        case X:
        case U:
            e.deltaY = this.options.keyStep;
            break;

        case B:
        case F:
            e.deltaY = -this.options.keyStep;
            break;

        case t.shiftKey:
            e.deltaY = i;
            break;

        case I:
            e.deltaY = -i;
            break;

        default:
            return;
        }

        this._notify(t);
    }, H.prototype._bind = function () {
        k.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions), k.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), k.hasTouch && this.options.useTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions), this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), k.hasPointer && k.hasTouchWin && (this.bodyTouchAction = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", this.el.addEventListener("MSPointerDown", this._onTouchStart, !0), this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)), k.hasKeyDown && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown);
    }, H.prototype._unbind = function () {
        k.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel), k.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel), k.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart), this.el.removeEventListener("touchmove", this._onTouchMove)), k.hasPointer && k.hasTouchWin && (document.body.style.msTouchAction = this.bodyTouchAction, this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0), this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)), k.hasKeyDown && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown);
    }, H.prototype.on = function (t, e) {
        this._emitter.on(P, t, e);

        var i = this._emitter.e;
        i && i[P] && 1 === i[P].length && this._bind();
    }, H.prototype.off = function (t, e) {
        this._emitter.off(P, t, e);

        var i = this._emitter.e;
        (!i[P] || i[P].length <= 0) && this._unbind();
    }, H.prototype.reset = function () {
        var t = this._event;
        t.x = 0, t.y = 0;
    }, H.prototype.destroy = function () {
        this._emitter.off(), this._unbind();
    };
    var N = 4,
        z = 1e-7,
        V = 10,
        G = "function" == typeof Float32Array;

    function q(t, e) {
        return 1 - 3 * e + 3 * t;
    }

    function K(t, e) {
        return 3 * e - 6 * t;
    }

    function Q(t, e, i) {
        return ((q(e, i) * t + K(e, i)) * t + 3 * e) * t;
    }

    function $(t, e, i) {
        return 3 * q(e, i) * t * t + 2 * K(e, i) * t + 3 * e;
    }

    function J(t) {
        return t;
    }

    function Z(r, e, o, i) {
        if (!(0 <= r && r <= 1 && 0 <= o && o <= 1)) throw new Error("bezier x values must be in [0, 1] range");
        if (r === e && o === i) return J;

        for (var a = new (G ? Float32Array : Array)(11), t = 0; t < 11; ++t) a[t] = Q(.1 * t, r, o);

        function n(t) {
        for (var e = 0, i = 1; 10 !== i && a[i] <= t; ++i) e += .1;

        var n = e + .1 * ((t - a[--i]) / (a[i + 1] - a[i])),
            s = $(n, r, o);
        return .001 <= s ? function (t, e, i, n) {
            for (var s = 0; s < N; ++s) {
            var r = $(e, i, n);
            if (0 === r) return e;
            e -= (Q(e, i, n) - t) / r;
            }

            return e;
        }(t, n, r, o) : 0 === s ? n : function (t, e, i, n, s) {
            for (var r, o, a = 0; 0 < (r = Q(o = e + (i - e) / 2, n, s) - t) ? i = o : e = o, Math.abs(r) > z && ++a < V;);

            return o;
        }(t, e, e + .1, r, o);
        }

        return function (t) {
        return 0 === t ? 0 : 1 === t ? 1 : Q(n(t), e, i);
        };
    }

    var tt = 38,
        et = 40,
        it = 32,
        nt = 9,
        st = 33,
        rt = 34,
        ot = 36,
        at = 35,
        lt = function () {
        a(r, m);
        var i = c(r);

        function r() {
        var t,
            e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        return s(this, r), history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0), (t = i.call(this, e)).inertia && (t.lerp = .1 * t.inertia), t.isScrolling = !1, t.isDraggingScrollbar = !1, t.isTicking = !1, t.hasScrollTicking = !1, t.parallaxElements = {}, t.stop = !1, t.scrollbarContainer = e.scrollbarContainer, t.checkKey = t.checkKey.bind(h(t)), window.addEventListener("keydown", t.checkKey, !1), t;
        }

        return t(r, [{
        key: "init",
        value: function () {
            var e = this;
            this.html.classList.add(this.smoothClass), this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction), this.instance = o({
            delta: {
                x: 0,
                y: 0
            }
            }, this.instance), this.vs = new C({
            el: this.scrollFromAnywhere ? document : this.el,
            mouseMultiplier: -1 < navigator.platform.indexOf("Win") ? 1 : .4,
            firefoxMultiplier: this.firefoxMultiplier,
            touchMultiplier: this.touchMultiplier,
            useKeyboard: !1,
            passive: !0
            }), this.vs.on(function (t) {
            e.stop || e.isDraggingScrollbar || requestAnimationFrame(function () {
                e.updateDelta(t), e.isScrolling || e.startScrolling();
            });
            }), this.setScrollLimit(), this.initScrollBar(), this.addSections(), this.addElements(), this.checkScroll(!0), this.transformElements(!0, !0), u(l(r.prototype), "init", this).call(this);
        }
        }, {
        key: "setScrollLimit",
        value: function () {
            if (this.instance.limit.y = this.el.offsetHeight - this.windowHeight, "horizontal" === this.direction) {
            for (var t = 0, e = this.el.children, i = 0; i < e.length; i++) t += e[i].offsetWidth;

            this.instance.limit.x = t - this.windowWidth;
            }
        }
        }, {
        key: "startScrolling",
        value: function () {
            this.startScrollTs = Date.now(), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass);
        }
        }, {
        key: "stopScrolling",
        value: function () {
            cancelAnimationFrame(this.checkScrollRaf), this.scrollToRaf && (cancelAnimationFrame(this.scrollToRaf), this.scrollToRaf = null), this.isScrolling = !1, this.instance.scroll.y = Math.round(this.instance.scroll.y), this.html.classList.remove(this.scrollingClass);
        }
        }, {
        key: "checkKey",
        value: function (t) {
            var e = this;
            if (this.stop) t.keyCode == nt && requestAnimationFrame(function () {
            e.html.scrollTop = 0, document.body.scrollTop = 0, e.html.scrollLeft = 0, document.body.scrollLeft = 0;
            });else {
            switch (t.keyCode) {
                case nt:
                requestAnimationFrame(function () {
                    e.html.scrollTop = 0, document.body.scrollTop = 0, e.html.scrollLeft = 0, document.body.scrollLeft = 0, e.scrollTo(document.activeElement, -window.innerHeight / 2);
                });
                break;

                case tt:
                this.instance.delta[this.directionAxis] -= 240;
                break;

                case et:
                this.instance.delta[this.directionAxis] += 240;
                break;

                case st:
                this.instance.delta[this.directionAxis] -= window.innerHeight;
                break;

                case rt:
                this.instance.delta[this.directionAxis] += window.innerHeight;
                break;

                case ot:
                this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
                break;

                case at:
                this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
                break;

                case it:
                document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement || (t.shiftKey ? this.instance.delta[this.directionAxis] -= window.innerHeight : this.instance.delta[this.directionAxis] += window.innerHeight);
                break;

                default:
                return;
            }

            this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0), this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis]), this.stopScrolling(), this.isScrolling = !0, this.checkScroll(), this.html.classList.add(this.scrollingClass);
            }
        }
        }, {
        key: "checkScroll",
        value: function (t) {
            var e,
                i,
                n,
                s = this;
            (0 < arguments.length && void 0 !== t && t || this.isScrolling || this.isDraggingScrollbar) && (this.hasScrollTicking || (this.checkScrollRaf = requestAnimationFrame(function () {
            return s.checkScroll();
            }), this.hasScrollTicking = !0), this.updateScroll(), e = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]), i = Date.now() - this.startScrollTs, !this.animatingScroll && 100 < i && (e < .5 && 0 != this.instance.delta[this.directionAxis] || e < .5 && 0 == this.instance.delta[this.directionAxis]) && this.stopScrolling(), Object.entries(this.sections).forEach(function (t) {
            var e = D(t, 2),
                i = (e[0], e[1]);
            i.persistent || s.instance.scroll[s.directionAxis] > i.offset[s.directionAxis] && s.instance.scroll[s.directionAxis] < i.limit[s.directionAxis] ? ("horizontal" === s.direction ? s.transform(i.el, -s.instance.scroll[s.directionAxis], 0) : s.transform(i.el, 0, -s.instance.scroll[s.directionAxis]), i.inView || (i.inView = !0, i.el.style.opacity = 1, i.el.style.pointerEvents = "all", i.el.setAttribute("data-".concat(s.name, "-section-inview"), ""))) : (i.inView && (i.inView = !1, i.el.style.opacity = 0, i.el.style.pointerEvents = "none", i.el.removeAttribute("data-".concat(s.name, "-section-inview"))), s.transform(i.el, 0, 0));
            }), this.getDirection && this.addDirection(), this.getSpeed && (this.addSpeed(), this.speedTs = Date.now()), this.detectElements(), this.transformElements(), this.hasScrollbar && (n = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis], "horizontal" === this.direction ? this.transform(this.scrollbarThumb, n, 0) : this.transform(this.scrollbarThumb, 0, n)), u(l(r.prototype), "checkScroll", this).call(this), this.hasScrollTicking = !1);
        }
        }, {
        key: "resize",
        value: function () {
            this.windowHeight = window.innerHeight, this.windowWidth = window.innerWidth, this.checkContext(), this.windowMiddle = {
            x: this.windowWidth / 2,
            y: this.windowHeight / 2
            }, this.update();
        }
        }, {
        key: "updateDelta",
        value: function (t) {
            var e = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection,
                i = "both" === e ? t.deltaX + t.deltaY : "vertical" !== e && "horizontal" === e ? t.deltaX : t.deltaY;
            this.instance.delta[this.directionAxis] -= i * this.multiplier, this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0), this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis]);
        }
        }, {
        key: "updateScroll",
        value: function () {
            this.isScrolling || this.isDraggingScrollbar ? this.instance.scroll[this.directionAxis] = j(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp) : this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis] ? this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]) : this.instance.scroll.y < 0 ? this.setScroll(this.instance.scroll[this.directionAxis], 0) : this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis]);
        }
        }, {
        key: "addDirection",
        value: function () {
            this.instance.delta.y > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : this.instance.delta.y < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up"), this.instance.delta.x > this.instance.scroll.x ? "right" !== this.instance.direction && (this.instance.direction = "right") : this.instance.delta.x < this.instance.scroll.x && "left" !== this.instance.direction && (this.instance.direction = "left");
        }
        }, {
        key: "addSpeed",
        value: function () {
            this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis] ? this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0;
        }
        }, {
        key: "initScrollBar",
        value: function () {
            if (this.scrollbar = document.createElement("span"), this.scrollbarThumb = document.createElement("span"), this.scrollbar.classList.add("".concat(this.scrollbarClass)), this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb")), this.scrollbar.append(this.scrollbarThumb), this.scrollbarContainer ? this.scrollbarContainer.append(this.scrollbar) : document.body.append(this.scrollbar), this.getScrollBar = this.getScrollBar.bind(this), this.releaseScrollBar = this.releaseScrollBar.bind(this), this.moveScrollBar = this.moveScrollBar.bind(this), this.scrollbarThumb.addEventListener("mousedown", this.getScrollBar), window.addEventListener("mouseup", this.releaseScrollBar), window.addEventListener("mousemove", this.moveScrollBar), this.hasScrollbar = !1, "horizontal" == this.direction) {
            if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return;
            } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;

            this.hasScrollbar = !0, this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarWidth = this.scrollbarBCR.width, "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"), this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(), this.scrollBarLimit = {
            x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
            y: this.scrollbarHeight - this.scrollbarThumbBCR.height
            };
        }
        }, {
        key: "reinitScrollBar",
        value: function () {
            if (this.hasScrollbar = !1, "horizontal" == this.direction) {
            if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return;
            } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;

            this.hasScrollbar = !0, this.scrollbarBCR = this.scrollbar.getBoundingClientRect(), this.scrollbarHeight = this.scrollbarBCR.height, this.scrollbarWidth = this.scrollbarBCR.width, "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"), this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(), this.scrollBarLimit = {
            x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
            y: this.scrollbarHeight - this.scrollbarThumbBCR.height
            };
        }
        }, {
        key: "destroyScrollBar",
        value: function () {
            this.scrollbarThumb.removeEventListener("mousedown", this.getScrollBar), window.removeEventListener("mouseup", this.releaseScrollBar), window.removeEventListener("mousemove", this.moveScrollBar), this.scrollbar.remove();
        }
        }, {
        key: "getScrollBar",
        value: function () {
            this.isDraggingScrollbar = !0, this.checkScroll(), this.html.classList.remove(this.scrollingClass), this.html.classList.add(this.draggingClass);
        }
        }, {
        key: "releaseScrollBar",
        value: function () {
            this.isDraggingScrollbar = !1, this.html.classList.add(this.scrollingClass), this.html.classList.remove(this.draggingClass);
        }
        }, {
        key: "moveScrollBar",
        value: function (i) {
            var n = this;
            this.isDraggingScrollbar && requestAnimationFrame(function () {
            var t = 100 * (i.clientX - n.scrollbarBCR.left) / n.scrollbarWidth * n.instance.limit.x / 100,
                e = 100 * (i.clientY - n.scrollbarBCR.top) / n.scrollbarHeight * n.instance.limit.y / 100;
            0 < e && e < n.instance.limit.y && (n.instance.delta.y = e), 0 < t && t < n.instance.limit.x && (n.instance.delta.x = t);
            });
        }
        }, {
        key: "addElements",
        value: function () {
            var L = this;
            this.els = {}, this.parallaxElements = {}, this.el.querySelectorAll("[data-".concat(this.name, "]")).forEach(function (t, e) {
            var i,
                n,
                s,
                r,
                o,
                a = Y(t),
                l = Object.entries(L.sections).map(function (t) {
                var e = D(t, 2);
                e[0];
                return e[1];
            }).find(function (t) {
                return a.includes(t.el);
            }),
                h = t.dataset[L.name + "Class"] || L.class,
                c = "string" == typeof t.dataset[L.name + "Id"] ? t.dataset[L.name + "Id"] : "el" + e,
                u = t.dataset[L.name + "Repeat"],
                d = t.dataset[L.name + "Call"],
                f = t.dataset[L.name + "Position"],
                m = t.dataset[L.name + "Delay"],
                p = t.dataset[L.name + "Direction"],
                g = "string" == typeof t.dataset[L.name + "Sticky"],
                v = !!t.dataset[L.name + "Speed"] && parseFloat(t.dataset[L.name + "Speed"]) / 10,
                y = "string" == typeof t.dataset[L.name + "Offset"] ? t.dataset[L.name + "Offset"].split(",") : L.offset,
                b = t.dataset[L.name + "Target"],
                w = void 0 !== b ? document.querySelector("".concat(b)) : t,
                E = w.getBoundingClientRect(),
                T = null === l || l.inView ? (i = E.top + L.instance.scroll.y - W(w).y, E.left + L.instance.scroll.x - W(w).x) : (i = E.top - W(l.el).y - W(w).y, E.left - W(l.el).x - W(w).x),
                x = i + w.offsetHeight,
                S = T + w.offsetWidth,
                A = {
                x: (S - T) / 2 + T,
                y: (x - i) / 2 + i
            };
            g && (s = (n = t.getBoundingClientRect()).top, o = {
                x: (r = n.left) - T,
                y: s - i
            }, i += window.innerHeight, T += window.innerWidth, x = s + w.offsetHeight - t.offsetHeight - o[L.directionAxis], A = {
                x: ((S = r + w.offsetWidth - t.offsetWidth - o[L.directionAxis]) - T) / 2 + T,
                y: (x - i) / 2 + i
            }), u = "false" != u && (null != u || L.repeat);
            var R = [0, 0];
            if (y) if ("horizontal" === L.direction) {
                for (var _ = 0; _ < y.length; _++) "string" == typeof y[_] ? y[_].includes("%") ? R[_] = parseInt(y[_].replace("%", "") * L.windowWidth / 100) : R[_] = parseInt(y[_]) : R[_] = y[_];

                T += R[0], S -= R[1];
            } else {
                for (_ = 0; _ < y.length; _++) "string" == typeof y[_] ? y[_].includes("%") ? R[_] = parseInt(y[_].replace("%", "") * L.windowHeight / 100) : R[_] = parseInt(y[_]) : R[_] = y[_];

                i += R[0], x -= R[1];
            }
            var k = {
                el: t,
                id: c,
                class: h,
                section: l,
                top: i,
                middle: A,
                bottom: x,
                left: T,
                right: S,
                offset: y,
                progress: 0,
                repeat: u,
                inView: !1,
                call: d,
                speed: v,
                delay: m,
                position: f,
                target: w,
                direction: p,
                sticky: g
            };
            L.els[c] = k, t.classList.contains(h) && L.setInView(L.els[c], c), !1 === v && !g || (L.parallaxElements[c] = k);
            });
        }
        }, {
        key: "addSections",
        value: function () {
            var l = this;
            this.sections = {};
            var t = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
            0 === t.length && (t = [this.el]), t.forEach(function (t, e) {
            var i = "string" == typeof t.dataset[l.name + "Id"] ? t.dataset[l.name + "Id"] : "section" + e,
                n = t.getBoundingClientRect(),
                s = {
                x: n.left - 1.5 * window.innerWidth - W(t).x,
                y: n.top - 1.5 * window.innerHeight - W(t).y
            },
                r = {
                x: s.x + n.width + 2 * window.innerWidth,
                y: s.y + n.height + 2 * window.innerHeight
            },
                o = "string" == typeof t.dataset[l.name + "Persistent"];
            t.setAttribute("data-scroll-section-id", i);
            var a = {
                el: t,
                offset: s,
                limit: r,
                inView: !1,
                persistent: o,
                id: i
            };
            l.sections[i] = a;
            });
        }
        }, {
        key: "transform",
        value: function (t, e, i, n) {
            var s, r, o, a;
            s = n ? (o = j((r = W(t)).x, e, n), a = j(r.y, i, n), "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(o, ",").concat(a, ",0,1)")) : "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e, ",").concat(i, ",0,1)"), t.style.webkitTransform = s, t.style.msTransform = s, t.style.transform = s;
        }
        }, {
        key: "transformElements",
        value: function (s, t) {
            var r = this,
                o = 1 < arguments.length && void 0 !== t && t,
                a = this.instance.scroll.x + this.windowWidth,
                l = this.instance.scroll.y + this.windowHeight,
                h = {
            x: this.instance.scroll.x + this.windowMiddle.x,
            y: this.instance.scroll.y + this.windowMiddle.y
            };
            Object.entries(this.parallaxElements).forEach(function (t) {
            var e = D(t, 2),
                i = (e[0], e[1]),
                n = s ? 0 : !1;
            if (i.inView || o) switch (i.position) {
                case "top":
                n = r.instance.scroll[r.directionAxis] * -i.speed;
                break;

                case "elementTop":
                n = (l - i.top) * -i.speed;
                break;

                case "bottom":
                n = (r.instance.limit[r.directionAxis] - l + r.windowHeight) * i.speed;
                break;

                case "left":
                n = r.instance.scroll[r.directionAxis] * -i.speed;
                break;

                case "elementLeft":
                n = (a - i.left) * -i.speed;
                break;

                case "right":
                n = (r.instance.limit[r.directionAxis] - a + r.windowHeight) * i.speed;
                break;

                default:
                n = (h[r.directionAxis] - i.middle[r.directionAxis]) * -i.speed;
            }
            i.sticky && (n = i.inView ? "horizontal" === r.direction ? r.instance.scroll.x - i.left + window.innerWidth : r.instance.scroll.y - i.top + window.innerHeight : "horizontal" === r.direction ? r.instance.scroll.x < i.left - window.innerWidth && r.instance.scroll.x < i.left - window.innerWidth / 2 ? 0 : r.instance.scroll.x > i.right && r.instance.scroll.x > i.right + 100 && i.right - i.left + window.innerWidth : r.instance.scroll.y < i.top - window.innerHeight && r.instance.scroll.y < i.top - window.innerHeight / 2 ? 0 : r.instance.scroll.y > i.bottom && r.instance.scroll.y > i.bottom + 100 && i.bottom - i.top + window.innerHeight), !1 !== n && ("horizontal" === i.direction || "horizontal" === r.direction && "vertical" !== i.direction ? r.transform(i.el, n, 0, !s && i.delay) : r.transform(i.el, 0, n, !s && i.delay));
            });
        }
        }, {
        key: "scrollTo",
        value: function (t, e) {
            var i = this,
                n = 1 < arguments.length && void 0 !== e ? e : {},
                s = parseInt(n.offset) || 0,
                r = n.duration || 1e3,
                o = n.easing || [.25, 0, .35, 1],
                a = !!n.disableLerp,
                l = !!n.callback && n.callback,
                o = Z.apply(void 0, y(o));

            if ("string" == typeof t) {
            if ("top" === t) t = 0;else if ("bottom" === t) t = this.instance.limit.y;else if ("left" === t) t = 0;else if ("right" === t) t = this.instance.limit.x;else if (!(t = document.querySelector(t))) return;
            } else if ("number" == typeof t) t = parseInt(t);else if (!t || !t.tagName) return void console.warn("`target` parameter is not valid");

            if ("number" != typeof t) {
            if (!Y(t).includes(this.el)) return;
            var h = t.getBoundingClientRect(),
                c = h.top,
                u = h.left,
                d = Y(t).find(function (e) {
                return Object.entries(i.sections).map(function (t) {
                var e = D(t, 2);
                e[0];
                return e[1];
                }).find(function (t) {
                return t.el == e;
                });
            }),
                f = 0,
                f = d ? W(d)[this.directionAxis] : -this.instance.scroll[this.directionAxis],
                s = "horizontal" === this.direction ? u + s - f : c + s - f;
            } else s = t + s;

            function m(t) {
            a ? "horizontal" === i.direction ? i.setScroll(p + g * t, i.instance.delta.y) : i.setScroll(i.instance.delta.x, p + g * t) : i.instance.delta[i.directionAxis] = p + g * t;
            }

            var p = parseFloat(this.instance.delta[this.directionAxis]),
                g = Math.max(0, Math.min(s, this.instance.limit[this.directionAxis])) - p;
            this.animatingScroll = !0, this.stopScrolling(), this.startScrolling();
            var v = Date.now();
            !function t() {
            var e = (Date.now() - v) / r;
            1 < e ? (m(1), i.animatingScroll = !1, 0 == r && i.update(), l && l()) : (i.scrollToRaf = requestAnimationFrame(t), m(o(e)));
            }();
        }
        }, {
        key: "update",
        value: function () {
            this.setScrollLimit(), this.addSections(), this.addElements(), this.detectElements(), this.updateScroll(), this.transformElements(!0), this.reinitScrollBar(), this.checkScroll(!0);
        }
        }, {
        key: "startScroll",
        value: function () {
            this.stop = !1;
        }
        }, {
        key: "stopScroll",
        value: function () {
            this.stop = !0;
        }
        }, {
        key: "setScroll",
        value: function (t, e) {
            this.instance = o(o({}, this.instance), {}, {
            scroll: {
                x: t,
                y: e
            },
            delta: {
                x: t,
                y: e
            },
            speed: 0
            });
        }
        }, {
        key: "destroy",
        value: function () {
            u(l(r.prototype), "destroy", this).call(this), this.stopScrolling(), this.html.classList.remove(this.smoothClass), this.vs.destroy(), this.destroyScrollBar(), window.removeEventListener("keydown", this.checkKey, !1);
        }
        }]), r;
    }(),
        ht = function () {
        function e() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        s(this, e), this.options = t, Object.assign(this, f, t), this.smartphone = f.smartphone, t.smartphone && Object.assign(this.smartphone, t.smartphone), this.tablet = f.tablet, t.tablet && Object.assign(this.tablet, t.tablet), this.smooth || "horizontal" != this.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible"), this.tablet.smooth || "horizontal" != this.tablet.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"), this.smartphone.smooth || "horizontal" != this.smartphone.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"), this.init();
        }

        return t(e, [{
        key: "init",
        value: function () {
            var t, e;
            this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints || window.innerWidth < this.tablet.breakpoint, this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint, this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet ? this.scroll = new lt(this.options) : this.scroll = new b(this.options), this.scroll.init(), window.location.hash && (t = window.location.hash.slice(1, window.location.hash.length), (e = document.getElementById(t)) && this.scroll.scrollTo(e));
        }
        }, {
        key: "update",
        value: function () {
            this.scroll.update();
        }
        }, {
        key: "start",
        value: function () {
            this.scroll.startScroll();
        }
        }, {
        key: "stop",
        value: function () {
            this.scroll.stopScroll();
        }
        }, {
        key: "scrollTo",
        value: function (t, e) {
            this.scroll.scrollTo(t, e);
        }
        }, {
        key: "setScroll",
        value: function (t, e) {
            this.scroll.setScroll(t, e);
        }
        }, {
        key: "on",
        value: function (t, e) {
            this.scroll.setEvents(t, e);
        }
        }, {
        key: "off",
        value: function (t, e) {
            this.scroll.unsetEvents(t, e);
        }
        }, {
        key: "destroy",
        value: function () {
            this.scroll.destroy();
        }
        }]), e;
    }();

    !function () {
        document.documentElement.classList.add("is-loaded"), document.documentElement.classList.remove("is-loading"), setTimeout(function () {
            document.documentElement.classList.add("is-ready");
        }, 300);
        var e = {
            el: document.querySelector("#js-scroll"),
            smooth: !0,
            getSpeed: !0,
            getDirection: !0
        };
        "true" == document.querySelector("#js-scroll").getAttribute("data-horizontal") && (e.direction = "horizontal", e.gestureDirection = "both", e.tablet = {
            smooth: !0,
            direction: "horizontal",
            horizontalGesture: !0
        }, e.smartphone = {
            smooth: !1
        }, e.reloadOnContextChange = !0), setTimeout(function () {
            var t = new ht(e),
                i = document.getElementById("bgOverlay"),
                n = document.getElementById("colorOverlay"),
                s = document.getElementById("greyIn");
            t.on("scroll", function (t) {
                var e = 120 + 360 * t.scroll.y / 2e3;
                i.style.backgroundColor = "hsl(".concat(e, ", 90%, 70%)"), n.style.color = "hsl(".concat(e, ", 30%, 80%)"), document.documentElement.setAttribute("data-direction", t.direction), s.classList.contains("is-inview") ? (document.getElementById("grey").style.opacity = 1, document.body.classList.add("dark")) : (document.getElementById("grey").style.opacity = 0, document.body.classList.remove("dark"));
            });
        }, 1e3);
    }();
}(), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.GlslCanvas = e();
    }(void 0, function () {
    "use strict";

    var t,
        e,
        i,
        n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        s = "undefined" != typeof window ? window : n,
        o = function (t) {
        var e = r.call(t);
        return "[object Function]" === e || "function" == typeof t && "[object RegExp]" !== e || "undefined" != typeof window && (t === window.setTimeout || t === window.alert || t === window.confirm || t === window.prompt);
    },
        r = Object.prototype.toString,
        a = (e = t = {
        exports: {}
    }, i = t.exports, (i = e.exports = function (t) {
        return t.replace(/^\s*|\s*$/g, "");
    }).left = function (t) {
        return t.replace(/^\s*/, "");
    }, i.right = function (t) {
        return t.replace(/\s*$/, "");
    }, t.exports),
        l = Object.prototype.toString,
        h = Object.prototype.hasOwnProperty,
        g = function (t) {
        if (!t) return {};
        var r = {};
        return function (t, e, i) {
        if (!o(e)) throw new TypeError("iterator must be a function");
        arguments.length < 3 && (i = this), ("[object Array]" === l.call(t) ? function (t, e, i) {
            for (var n = 0, s = t.length; n < s; n++) h.call(t, n) && e.call(i, t[n], n, t);
        } : "string" == typeof t ? function (t, e, i) {
            for (var n = 0, s = t.length; n < s; n++) e.call(i, t.charAt(n), n, t);
        } : function (t, e, i) {
            for (var n in t) h.call(t, n) && e.call(i, t[n], n, t);
        })(t, e, i);
        }(a(t).split("\n"), function (t) {
        var e,
            i = t.indexOf(":"),
            n = a(t.slice(0, i)).toLowerCase(),
            s = a(t.slice(i + 1));
        void 0 === r[n] ? r[n] = s : (e = r[n], "[object Array]" === Object.prototype.toString.call(e) ? r[n].push(s) : r[n] = [r[n], s]);
        }), r;
    },
        c = function () {
        for (var t = {}, e = 0; e < arguments.length; e++) {
        var i = arguments[e];

        for (var n in i) u.call(i, n) && (t[n] = i[n]);
        }

        return t;
    },
        u = Object.prototype.hasOwnProperty,
        f = v,
        d = v;

    function m(t, e, i) {
        var n = t;
        return o(e) ? (i = e, "string" == typeof t && (n = {
        uri: t
        })) : n = c(e, {
        uri: t
        }), n.callback = i, n;
    }

    function v(t, e, i) {
        return p(e = m(t, e, i));
    }

    function p(n) {
        if (void 0 === n.callback) throw new Error("callback argument missing");

        function s(t, e, i) {
        r || (r = !0, n.callback(t, e, i));
        }

        var r = !1;

        function e(t) {
        return clearTimeout(a), t instanceof Error || (t = new Error("" + (t || "Unknown XMLHttpRequest Error"))), t.statusCode = 0, s(t, p);
        }

        function t() {
        if (!o) {
            var t;
            clearTimeout(a), t = n.useXDR && void 0 === l.status ? 200 : 1223 === l.status ? 204 : l.status;
            var e = p,
                i = null;
            return 0 !== t ? (e = {
            body: function () {
                var t = void 0,
                    t = l.response ? l.response : l.responseText || function (t) {
                try {
                    if ("document" === t.responseType) return t.responseXML;
                    var e = t.responseXML && "parsererror" === t.responseXML.documentElement.nodeName;
                    if ("" === t.responseType && !e) return t.responseXML;
                } catch (t) {}

                return null;
                }(l);
                if (m) try {
                t = JSON.parse(t);
                } catch (t) {}
                return t;
            }(),
            statusCode: t,
            method: c,
            headers: {},
            url: h,
            rawRequest: l
            }, l.getAllResponseHeaders && (e.headers = g(l.getAllResponseHeaders()))) : i = new Error("Internal XMLHttpRequest Error"), s(i, e, e.body);
        }
        }

        var i,
            o,
            a,
            l = n.xhr || null,
            h = (l = l || (n.cors || n.useXDR ? new v.XDomainRequest() : new v.XMLHttpRequest())).url = n.uri || n.url,
            c = l.method = n.method || "GET",
            u = n.body || n.data,
            d = l.headers = n.headers || {},
            f = !!n.sync,
            m = !1,
            p = {
        body: void 0,
        headers: {},
        statusCode: 0,
        method: c,
        url: h,
        rawRequest: l
        };
        if ("json" in n && !1 !== n.json && (m = !0, d.accept || d.Accept || (d.Accept = "application/json"), "GET" !== c && "HEAD" !== c && (d["content-type"] || d["Content-Type"] || (d["Content-Type"] = "application/json"), u = JSON.stringify(!0 === n.json ? u : n.json))), l.onreadystatechange = function () {
        4 === l.readyState && setTimeout(t, 0);
        }, l.onload = t, l.onerror = e, l.onprogress = function () {}, l.onabort = function () {
        o = !0;
        }, l.ontimeout = e, l.open(c, h, !f, n.username, n.password), f || (l.withCredentials = !!n.withCredentials), !f && 0 < n.timeout && (a = setTimeout(function () {
        var t;
        o || (o = !0, l.abort("timeout"), (t = new Error("XMLHttpRequest timeout")).code = "ETIMEDOUT", e(t));
        }, n.timeout)), l.setRequestHeader) for (i in d) d.hasOwnProperty(i) && l.setRequestHeader(i, d[i]);else if (n.headers && !function (t) {
        for (var e in t) if (t.hasOwnProperty(e)) return;

        return 1;
        }(n.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
        return "responseType" in n && (l.responseType = n.responseType), "beforeSend" in n && "function" == typeof n.beforeSend && n.beforeSend(l), l.send(u || null), l;
    }

    v.XMLHttpRequest = s.XMLHttpRequest || function () {}, v.XDomainRequest = "withCredentials" in new v.XMLHttpRequest() ? v.XMLHttpRequest : s.XDomainRequest, function (t) {
        for (var e = 0; e < t.length; e++) !function (n) {
        v["delete" === n ? "del" : n] = function (t, e, i) {
            return (e = m(t, e, i)).method = n.toUpperCase(), p(e);
        };
        }(t[e]);
    }(["get", "put", "post", "patch", "head", "delete"]), f.default = d;
    var y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    };

    function b(t, e, i) {
        return e && E(t.prototype, e), i && E(t, i), t;
    }

    var w = function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    };

    function E(t, e) {
        for (var i = 0; i < e.length; i++) {
        var n = e[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
    }

    var T = function (t) {
        if (Array.isArray(t)) {
        for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];

        return i;
        }

        return Array.from(t);
    },
        x = "",
        S = '\n\tThis page requires a browser that supports WebGL.<br/>\n\t<a href="http://get.webgl.org">Click here to upgrade your browser.</a>\n',
        A = '\n\tIt does not appear your computer can support WebGL.<br/>\n\t<a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>\n',
        R = 1,
        _ = 2;

    function k(t, e, i, n) {
        var s = t.gl,
            r = s.createShader(i);
        return s.shaderSource(r, e), s.compileShader(r), s.getShaderParameter(r, s.COMPILE_STATUS) ? r : (x = s.getShaderInfoLog(r), console.error("*** Error compiling shader " + r + ":" + x), t.trigger("error", {
        shader: r,
        source: e,
        type: i,
        error: x,
        offset: n || 0
        }), s.deleteShader(r), null);
    }

    function L(t, e, i, n) {
        for (var s = t.gl, r = s.createProgram(), o = 0; o < e.length; ++o) s.attachShader(r, e[o]);

        if (i) for (var a = 0; a < i.length; ++a) s.bindAttribLocation(r, n ? n[a] : a, i[a]);
        return s.linkProgram(r), s.getProgramParameter(r, s.LINK_STATUS) ? r : (x = s.getProgramInfoLog(r), console.log("Error in program linking:" + x), s.deleteProgram(r), null);
    }

    function D(t) {
        return 0 == (t & t - 1);
    }

    function O(t) {
        var m = new Set();
        return Object.assign(t, {
        on: function (t, e) {
            var i = {};
            i[t] = e, m.add(i);
        },
        off: function (t, e) {
            if (e) {
            var i = {};
            i[t] = e, m.delete(i);
            } else {
            var n = !0,
                s = !1,
                r = void 0;

            try {
                for (var o, a = m[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                var l = o.value,
                    h = !0,
                    c = !1,
                    u = void 0;

                try {
                    for (var d, f = Object.keys(l)[Symbol.iterator](); !(h = (d = f.next()).done); h = !0) if (d.value === t) return void m.delete(l);
                } catch (t) {
                    c = !0, u = t;
                } finally {
                    try {
                    !h && f.return && f.return();
                    } finally {
                    if (c) throw u;
                    }
                }
                }
            } catch (t) {
                s = !0, r = t;
            } finally {
                try {
                !n && a.return && a.return();
                } finally {
                if (s) throw r;
                }
            }
            }
        },
        listSubscriptions: function () {
            var t = !0,
                e = !1,
                i = void 0;

            try {
            for (var n, s = m[Symbol.iterator](); !(t = (n = s.next()).done); t = !0) {
                var r = n.value;
                console.log(r);
            }
            } catch (t) {
            e = !0, i = t;
            } finally {
            try {
                !t && s.return && s.return();
            } finally {
                if (e) throw i;
            }
            }
        },
        subscribe: function (t) {
            m.add(t);
        },
        unsubscribe: function (t) {
            m.delete(t);
        },
        unsubscribeAll: function () {
            m.clear();
        },
        trigger: function (t) {
            for (var e = arguments.length, i = Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];

            var s = !0,
                r = !1,
                o = void 0;

            try {
            for (var a, l = m[Symbol.iterator](); !(s = (a = l.next()).done); s = !0) {
                var h = a.value;
                "function" == typeof h[t] && h[t].apply(h, T(i));
            }
            } catch (t) {
            r = !0, o = t;
            } finally {
            try {
                !s && l.return && l.return();
            } finally {
                if (r) throw o;
            }
            }
        }
        });
    }

    var M = (b(P, [{
        key: "destroy",
        value: function () {
        this.valid && (this.gl.deleteTexture(this.texture), this.texture = null, delete this.data, this.data = null, this.valid = !1);
        }
    }, {
        key: "bind",
        value: function (t) {
        this.valid && ("number" == typeof t && P.activeUnit !== t && (this.gl.activeTexture(this.gl.TEXTURE0 + t), P.activeUnit = t), P.activeTexture !== this.texture && (this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture), P.activeTexture = this.texture));
        }
    }, {
        key: "load",
        value: function (t) {
        var e = 0 < arguments.length && void 0 !== t ? t : {};
        this.loading = null, "string" == typeof e.url ? void 0 !== this.url && e.url === this.url || this.setUrl(e.url, e) : e.element ? this.setElement(e.element, e) : e.data && e.width && e.height && this.setData(e.width, e.height, e.data, e);
        }
    }, {
        key: "setUrl",
        value: function (r, t) {
        var o = this,
            a = 1 < arguments.length && void 0 !== t ? t : {};
        if (this.valid) return this.url = r, this.source = this.url, this.sourceType = "url", this.loading = new Promise(function (e, t) {
            var i = r.split(".").pop().toLowerCase(),
                n = "ogv" === i || "webm" === i || "mp4" === i,
                s = void 0;
            n ? ((s = document.createElement("video")).autoplay = !0, a.filtering = "nearest") : s = new Image(), s.onload = function () {
            try {
                o.setElement(s, a);
            } catch (t) {
                console.log("Texture '" + o.name + "': failed to load url: '" + o.source + "'", t, a);
            }

            e(o);
            }, s.onerror = function (t) {
            console.log("Texture '" + o.name + "': failed to load url: '" + o.source + "'", t, a), e(o);
            }, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && "data:" === o.source.slice(0, 5) || (s.crossOrigin = "anonymous"), s.src = o.source, n && o.setElement(s, a);
        }), this.loading;
        }
    }, {
        key: "setData",
        value: function (t, e, i, n) {
        var s = 3 < arguments.length && void 0 !== n ? n : {};
        return this.width = t, this.height = e, this.source = i, this.sourceType = "data", this.update(s), this.setFiltering(s), this.loading = Promise.resolve(this), this.loading;
        }
    }, {
        key: "setElement",
        value: function (t, e) {
        var i,
            n = this,
            s = t;
        return "string" == typeof t && (t = document.querySelector(t)), t instanceof HTMLCanvasElement || t instanceof HTMLImageElement || t instanceof HTMLVideoElement ? (this.source = t, this.sourceType = "element", t instanceof HTMLVideoElement ? (t.addEventListener("canplaythrough", function () {
            n.intervalID = setInterval(function () {
            n.update(e);
            }, 15);
        }, !0), t.addEventListener("ended", function () {
            t.currentTime = 0, t.play();
        }, !0)) : this.update(e), this.setFiltering(e)) : (i = "the 'element' parameter (`element: " + JSON.stringify(s) + "`) must be a CSS ", i += "selector string, or a <canvas>, <image> or <video> object", console.log("Texture '" + this.name + "': " + i, e)), this.loading = Promise.resolve(this), this.loading;
        }
    }, {
        key: "update",
        value: function (t) {
        var e = 0 < arguments.length && void 0 !== t ? t : {};
        this.valid && (this.bind(), this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1 !== e.UNPACK_FLIP_Y_WEBGL), this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.UNPACK_PREMULTIPLY_ALPHA_WEBGL || !1), "element" === this.sourceType && (this.source instanceof HTMLCanvasElement || this.source instanceof HTMLVideoElement || this.source instanceof HTMLImageElement && this.source.complete) ? (this.source instanceof HTMLVideoElement ? (this.width = this.source.videoWidth, this.height = this.source.videoHeight) : (this.width = this.source.width, this.height = this.source.height), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.source)) : "data" === this.sourceType && this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.width, this.height, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.source), this.trigger("loaded", this));
        }
    }, {
        key: "setFiltering",
        value: function (t) {
        var e,
            i,
            n = 0 < arguments.length && void 0 !== t ? t : {};
        this.valid && (this.powerOf2 = D(this.width) && D(this.height), e = this.powerOf2 ? "mipmap" : "linear", this.filtering = n.filtering || e, i = this.gl, this.bind(), this.powerOf2 ? (i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, n.TEXTURE_WRAP_S || n.repeat && i.REPEAT || i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, n.TEXTURE_WRAP_T || n.repeat && i.REPEAT || i.CLAMP_TO_EDGE), "mipmap" === this.filtering ? (i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR_MIPMAP_LINEAR), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, i.LINEAR), i.generateMipmap(i.TEXTURE_2D)) : "linear" === this.filtering ? (i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, i.LINEAR)) : "nearest" === this.filtering && (i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, i.NEAREST))) : (i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE), "mipmap" === this.filtering && (this.filtering = "linear"), "nearest" === this.filtering ? (i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, i.NEAREST)) : (i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, i.LINEAR))));
        }
    }]), P);

    function P(t, e) {
        var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        w(this, P), O(this), this.gl = t, this.texture = t.createTexture(), this.texture && (this.valid = !0), this.bind(), this.name = e, this.source = null, this.sourceType = null, this.loading = null, this.setData(1, 1, new Uint8Array([0, 0, 0, 255]), {
        filtering: "linear"
        }), this.setFiltering(i.filtering), this.load(i);
    }

    M.getMaxTextureSize = function (t) {
        return t.getParameter(t.MAX_TEXTURE_SIZE);
    }, M.activeUnit = -1;
    var C = (b(X, [{
        key: "destroy",
        value: function () {
        for (var t in cancelAnimationFrame(this.animationFrameRequest), this.animated = !1, this.isValid = !1, this.textures) t.destroy && t.destroy();

        for (var e in this.textures = {}, this.attribs) this.gl.deleteBuffer(this.attribs[e]);

        for (var i in this.gl.useProgram(null), this.gl.deleteProgram(this.program), this.buffers) {
            var n = this.buffers[i];
            this.gl.deleteProgram(n.program);
        }

        this.program = null, this.gl = null;
        }
    }, {
        key: "load",
        value: function (t, e) {
        if (e && (this.vertexString = e), t && (this.fragmentString = t), this.animated = !1, this.nDelta = (this.fragmentString.match(/u_delta/g) || []).length, this.nTime = (this.fragmentString.match(/u_time/g) || []).length, this.nDate = (this.fragmentString.match(/u_date/g) || []).length, this.nMouse = (this.fragmentString.match(/u_mouse/g) || []).length, this.animated = 1 < this.nDate || 1 < this.nTime || 1 < this.nMouse, this.fragmentString.search(/sampler2D/g)) for (var i = this.fragmentString.split("\n"), n = 0; n < i.length; n++) {
            var s,
                r = i[n].match(/uniform\s*sampler2D\s*([\w]*);\s*\/\/\s*([\w|\:\/\/|\.|\-|\_]*)/i);
            if (r && (s = r[2].split(".").pop().toLowerCase(), r[1] && r[2] && ("jpg" === s || "jpeg" === s || "png" === s || "ogv" === s || "webm" === s || "mp4" === s) && this.setUniform(r[1], r[2])), i[n].match(/\s*void\s*main\s*/g)) break;
        }
        var o = k(this, this.vertexString, this.gl.VERTEX_SHADER),
            a = k(this, this.fragmentString, this.gl.FRAGMENT_SHADER);
        a ? this.isValid = !0 : (a = k(this, "void main(){\n\tgl_FragColor=vec4(1.0);\n}", this.gl.FRAGMENT_SHADER), this.isValid = !1);
        var l = L(this, [o, a]);
        this.gl.useProgram(l), this.gl.deleteShader(o), this.gl.deleteShader(a), this.program = l, this.change = !0, this.BUFFER_COUNT = 0;
        var h = this.getBuffers(this.fragmentString);
        Object.keys(h).length && this.loadPrograms(h), this.buffers = h, this.texureIndex = this.BUFFER_COUNT, this.trigger("load", {}), this.forceRender = !0, this.render();
        }
    }, {
        key: "test",
        value: function (s, r, o) {
        var a = this.vertexString,
            l = this.fragmentString,
            h = this.paused,
            c = this.gl.getExtension("EXT_disjoint_timer_query"),
            u = c.createQueryEXT(),
            d = this.isValid;
        (r || o) && (this.load(r, o), d = this.isValid, this.forceRender = !0, this.render()), this.paused = !0, c.beginQueryEXT(c.TIME_ELAPSED_EXT, u), this.forceRender = !0, this.render(), c.endQueryEXT(c.TIME_ELAPSED_EXT);
        var f = this;
        !function t() {
            f.forceRender = !0, f.render();
            var e,
                i = c.getQueryObjectEXT(u, c.QUERY_RESULT_AVAILABLE_EXT),
                n = f.gl.getParameter(c.GPU_DISJOINT_EXT);
            i && !n ? (e = {
            wasValid: d,
            frag: r || f.fragmentString,
            vert: o || f.vertexString,
            timeElapsedMs: c.getQueryObjectEXT(u, c.QUERY_RESULT_EXT) / 1e6
            }, f.paused = h, (r || o) && f.load(l, a), s(e)) : window.requestAnimationFrame(t);
        }();
        }
    }, {
        key: "loadTexture",
        value: function (t, e, i) {
        var n = this;
        i = i || {}, "string" == typeof e ? i.url = e : "object" === (void 0 === e ? "undefined" : y(e)) && e.data && e.width && e.height ? (i.data = e.data, i.width = e.width, i.height = e.height) : "object" === (void 0 === e ? "undefined" : y(e)) && (i.element = e), this.textures[t] ? this.textures[t] && (this.textures[t].load(i), this.textures[t].on("loaded", function (t) {
            n.forceRender = !0;
        })) : (this.textures[t] = new M(this.gl, t, i), this.textures[t].on("loaded", function (t) {
            n.forceRender = !0;
        }));
        }
    }, {
        key: "refreshUniforms",
        value: function () {
        this.uniforms = {};
        }
    }, {
        key: "setUniform",
        value: function (t) {
        for (var e = {}, i = arguments.length, n = Array(1 < i ? i - 1 : 0), s = 1; s < i; s++) n[s - 1] = arguments[s];

        e[t] = n, this.setUniforms(e);
        }
    }, {
        key: "setUniforms",
        value: function (t) {
        var e = function t(e, i) {
            var n = 1 < arguments.length && void 0 !== i ? i : null,
                s = [];

            for (var r in e) {
            var o = e[r],
                a = void 0;
            if (n && (r = n + "." + r), "number" == typeof o) s.push({
                type: "float",
                method: "1f",
                name: r,
                value: o
            });else if (Array.isArray(o)) {
                if ("number" == typeof o[0]) 1 === o.length ? s.push({
                type: "float",
                method: "1f",
                name: r,
                value: o
                }) : 2 <= o.length && o.length <= 4 ? s.push({
                type: "vec" + o.length,
                method: o.length + "fv",
                name: r,
                value: o
                }) : 4 < o.length && s.push({
                type: "float[]",
                method: "1fv",
                name: r + "[0]",
                value: o
                });else if ("string" == typeof o[0]) s.push({
                type: "sampler2D",
                method: "1i",
                name: r,
                value: o
                });else if (Array.isArray(o[0]) && "number" == typeof o[0][0]) {
                if (2 <= o[0].length && o[0].length <= 4) for (a = 0; a < o.length; a++) s.push({
                    type: "vec" + o[0].length,
                    method: o[a].length + "fv",
                    name: r + "[" + a + "]",
                    value: o[a]
                });
                } else if ("object" === y(o[0])) for (a = 0; a < o.length; a++) s.push.apply(s, T(t(o[a], r + "[" + a + "]")));
            } else "boolean" == typeof o ? s.push({
                type: "bool",
                method: "1i",
                name: r,
                value: o
            }) : "string" == typeof o ? s.push({
                type: "sampler2D",
                method: "1i",
                name: r,
                value: o
            }) : "object" === (void 0 === o ? "undefined" : y(o)) && s.push.apply(s, T(t(o, r)));
            }

            return s;
        }(t);

        for (var i in e) "sampler2D" === e[i].type ? this.loadTexture(e[i].name, e[i].value[0]) : this.uniform(e[i].method, e[i].type, e[i].name, e[i].value);

        this.forceRender = !0;
        }
    }, {
        key: "setMouse",
        value: function (t) {
        var e,
            i,
            n = this.canvas.getBoundingClientRect();
        t && t.x && t.x >= n.left && t.x <= n.right && t.y && t.y >= n.top && t.y <= n.bottom && (e = (t.x - n.left) * this.realToCSSPixels, i = this.canvas.height - (t.y - n.top) * this.realToCSSPixels, this.uniform("2f", "vec2", "u_mouse", e, i));
        }
    }, {
        key: "uniform",
        value: function (t, e, i) {
        this.uniforms[i] = this.uniforms[i] || {};

        for (var n, s, r = this.uniforms[i], o = arguments.length, a = Array(3 < o ? o - 3 : 0), l = 3; l < o; l++) a[l - 3] = arguments[l];

        if (s = a, (n = r.value) && s && n.toString() !== s.toString() || this.change || !r.location || !r.value) for (var h in r.name = i, r.type = e, r.value = a, r.method = "uniform" + t, this.gl.useProgram(this.program), r.location = this.gl.getUniformLocation(this.program, i), this.gl[r.method].apply(this.gl, [r.location].concat(r.value)), this.buffers) {
            var c = this.buffers[h];
            this.gl.useProgram(c.program);
            var u = this.gl.getUniformLocation(c.program, i);
            this.gl[r.method].apply(this.gl, [u].concat(r.value));
        }
        }
    }, {
        key: "uniformTexture",
        value: function (t, e, i) {
        if (void 0 === this.textures[t]) this.loadTexture(t, e, i);else {
            for (var n in this.uniform("1i", "sampler2D", t, this.texureIndex), this.buffers) {
            var s = this.buffers[n];
            this.gl.useProgram(s.program), this.gl.activeTexture(this.gl.TEXTURE0 + this.texureIndex), this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures[t].texture);
            }

            this.gl.useProgram(this.program), this.gl.activeTexture(this.gl.TEXTURE0 + this.texureIndex), this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures[t].texture), this.uniform("2f", "vec2", t + "Resolution", this.textures[t].width, this.textures[t].height);
        }
        }
    }, {
        key: "resize",
        value: function () {
        if (this.width === this.canvas.clientWidth && this.height === this.canvas.clientHeight) return !1;
        this.realToCSSPixels = window.devicePixelRatio || 1;
        var t = Math.floor(this.gl.canvas.clientWidth * this.realToCSSPixels),
            e = Math.floor(this.gl.canvas.clientHeight * this.realToCSSPixels);
        return this.gl.canvas.width === t && this.gl.canvas.height === e || (this.gl.canvas.width = t, this.gl.canvas.height = e, this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height)), this.width = this.canvas.clientWidth, this.height = this.canvas.clientHeight, this.resizeSwappableBuffers(), !0;
        }
    }, {
        key: "render",
        value: function () {
        var t;

        if (this.visible = 0 < (t = this.canvas).getBoundingClientRect().top + t.height && t.getBoundingClientRect().top < (window.innerHeight || document.documentElement.clientHeight), this.forceRender || this.change || this.animated && this.visible && !this.paused) {
            var e = new Date(),
                i = performance.now();

            for (var n in this.timeDelta = (i - this.timePrev) / 1e3, this.timePrev = i, 1 < this.nDelta && this.uniform("1f", "float", "u_delta", this.timeDelta), 1 < this.nTime && this.uniform("1f", "float", "u_time", (i - this.timeLoad) / 1e3), this.nDate && this.uniform("4f", "float", "u_date", e.getFullYear(), e.getMonth(), e.getDate(), 3600 * e.getHours() + 60 * e.getMinutes() + e.getSeconds() + .001 * e.getMilliseconds()), this.uniform("2f", "vec2", "u_resolution", this.canvas.width, this.canvas.height), this.buffers) {
            var s = this.buffers[n];
            this.uniform("1i", "sampler2D", s.name, s.bundle.input.index);
            }

            for (var r in this.texureIndex = this.BUFFER_COUNT, this.textures) this.uniformTexture(r), this.texureIndex++;

            this.renderPrograms(), this.trigger("render", {}), this.change = !1, this.forceRender = !1;
        }
        }
    }, {
        key: "pause",
        value: function () {
        this.paused = !0;
        }
    }, {
        key: "play",
        value: function () {
        this.paused = !1;
        }
    }, {
        key: "renderPrograms",
        value: function () {
        var t = this.gl,
            e = t.canvas.width,
            i = t.canvas.height;

        for (var n in t.viewport(0, 0, e, i), this.buffers) {
            var s = this.buffers[n];
            s.bundle.render(e, i, s.program, s.name), t.bindFramebuffer(t.FRAMEBUFFER, null);
        }

        t.useProgram(this.program), t.drawArrays(t.TRIANGLES, 0, 6);
        }
    }, {
        key: "getBuffers",
        value: function (e) {
        var i = {};
        return e && e.replace(/(?:^\s*)((?:#if|#elif)(?:\s*)(defined\s*\(\s*BUFFER_)(\d+)(?:\s*\))|(?:#ifdef)(?:\s*BUFFER_)(\d+)(?:\s*))/gm, function () {
            var t = arguments[3] || arguments[4];
            i["u_buffer" + t] = {
            fragment: "#define BUFFER_" + t + "\n" + e
            };
        }), i;
        }
    }, {
        key: "loadPrograms",
        value: function (t) {
        var e = this,
            i = this.gl,
            n = k(e, e.vertexString, i.VERTEX_SHADER);

        for (var s in t) {
            var r = t[s],
                o = k(e, r.fragment, i.FRAGMENT_SHADER, 1);
            o ? e.isValid = !0 : (o = k(e, "void main(){\n\tgl_FragColor=vec4(1.0);\n}", i.FRAGMENT_SHADER), e.isValid = !1);
            var a = L(e, [n, o]);
            r.name = s, r.program = a, r.bundle = e.createSwappableBuffer(e.canvas.width, e.canvas.height, a), i.deleteShader(o);
        }

        i.deleteShader(n);
        }
    }, {
        key: "createSwappableBuffer",
        value: function (t, e, i) {
        var n = this.createBuffer(t, e, i),
            s = this.createBuffer(t, e, i),
            r = this.gl;
        return {
            input: n,
            output: s,
            swap: function () {
            var t = n;
            n = s, s = t, this.input = n, this.output = s;
            },
            render: function (t, e, i) {
            r.useProgram(i), r.viewport(0, 0, t, e), r.bindFramebuffer(r.FRAMEBUFFER, this.input.buffer), r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, this.output.texture, 0), r.drawArrays(r.TRIANGLES, 0, 6), this.swap();
            },
            resize: function (t, e, i) {
            r.useProgram(i), r.viewport(0, 0, t, e), this.input.resize(t, e), this.output.resize(t, e);
            }
        };
        }
    }, {
        key: "createBuffer",
        value: function (t, e) {
        var l = this.gl,
            h = this.BUFFER_COUNT;
        this.BUFFER_COUNT += 2, l.getExtension("OES_texture_float");
        var c = l.createTexture();
        l.activeTexture(l.TEXTURE0 + h), l.bindTexture(l.TEXTURE_2D, c), l.texImage2D(l.TEXTURE_2D, 0, l.RGBA, t, e, 0, l.RGBA, l.FLOAT, null), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.NEAREST), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MAG_FILTER, l.NEAREST), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.CLAMP_TO_EDGE), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.CLAMP_TO_EDGE);
        var u = l.createFramebuffer();
        return {
            index: h,
            texture: c,
            buffer: u,
            W: t,
            H: e,
            resize: function (t, e) {
            l.bindFramebuffer(l.FRAMEBUFFER, u);
            var i = Math.min(t, this.W),
                n = Math.min(e, this.H),
                s = new Float32Array(i * n * 4);
            l.readPixels(0, 0, i, n, l.RGBA, l.FLOAT, s), l.bindFramebuffer(l.FRAMEBUFFER, null);
            var r = h + 1,
                o = l.createTexture();
            l.activeTexture(l.TEXTURE0 + r), l.bindTexture(l.TEXTURE_2D, o), l.texImage2D(l.TEXTURE_2D, 0, l.RGBA, t, e, 0, l.RGBA, l.FLOAT, null), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.NEAREST), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MAG_FILTER, l.NEAREST), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.CLAMP_TO_EDGE), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.CLAMP_TO_EDGE), l.texSubImage2D(l.TEXTURE_2D, 0, 0, 0, i, n, l.RGBA, l.FLOAT, s);
            var a = l.createFramebuffer();
            l.bindFramebuffer(l.FRAMEBUFFER, null), l.deleteTexture(c), l.activeTexture(l.TEXTURE0 + h), l.bindTexture(l.TEXTURE_2D, o), h = this.index = h, c = this.texture = o, u = this.buffer = a, this.W = t, this.H = e;
            }
        };
        }
    }, {
        key: "resizeSwappableBuffers",
        value: function () {
        var t = this.gl,
            e = t.canvas.width,
            i = t.canvas.height;

        for (var n in t.viewport(0, 0, e, i), this.buffers) {
            var s = this.buffers[n];
            s.bundle.resize(e, i, s.program, s.name);
        }

        t.useProgram(this.program);
        }
    }, {
        key: "version",
        value: function () {
        return "0.1.7";
        }
    }]), X);

    function X(t, e, i) {
        var n = this;
        w(this, X), O(this), e = e || {}, i = i || {}, !t.hasAttribute("data-fullscreen") || "1" != t.getAttribute("data-fullscreen") && "true" != t.getAttribute("data-fullscreen") ? (this.width = t.clientWidth, this.height = t.clientHeight) : (this.width = window.innerWidth, this.height = window.innerHeight, t.width = window.innerWidth, t.height = window.innerHeight), this.canvas = t, this.gl = void 0, this.program = void 0, this.textures = {}, this.buffers = {}, this.uniforms = {}, this.vbo = {}, this.isValid = !1, this.animationFrameRequest = void 0, this.BUFFER_COUNT = 0, this.vertexString = e.vertexString || "\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\nattribute vec2 a_position;\nattribute vec2 a_texcoord;\n\nvarying vec2 v_texcoord;\n\nvoid main(){\n gl_Position=vec4(a_position, 0.0, 1.0);\n v_texcoord=a_texcoord;\n}\n", this.fragmentString = e.fragmentString || "\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\nvarying vec2 v_texcoord;\n\nvoid main(){\n gl_FragColor=vec4(0.0);\n}\n";

        var s,
            r,
            o = function (n, t, s) {
        function e(t, e) {
            var i;
            "function" == typeof s ? s(t) : (i = n.parentNode) && (i.innerHTML = '\n<table style="background-color: #8CE; width: 100%; height: 100%;"><tr>\n<td align="center">\n<div style="display: table-cell; vertical-align: middle;">\n<div style="">' + e + "</div>\n</div>\n</td></tr></table>\n");
        }

        if (!window.WebGLRenderingContext) return e(R, S), null;

        var i = function (t, e) {
            for (var i = ["webgl", "experimental-webgl"], n = null, s = 0; s < i.length; ++s) try {
            n = t.getContext(i[s], e);
            } catch (t) {
            if (n) break;
            }

            return n;
        }(n, t);

        return i ? i.getExtension("OES_standard_derivatives") : e(_, A), i;
        }(t, e, i.onError);

        if (o && (this.gl = o, this.timeLoad = this.timePrev = performance.now(), this.timeDelta = 0, this.forceRender = !0, this.paused = !1, this.realToCSSPixels = window.devicePixelRatio || 1, t.style.backgroundColor = e.backgroundColor || "rgba(1,1,1,0)", t.hasAttribute("data-fragment") ? this.fragmentString = t.getAttribute("data-fragment") : t.hasAttribute("data-fragment-url") && (s = t.getAttribute("data-fragment-url"), f.get(s, function (t, e, i) {
        n.load(i, n.vertexString);
        })), t.hasAttribute("data-vertex") ? this.vertexString = t.getAttribute("data-vertex") : t.hasAttribute("data-vertex-url") && (r = t.getAttribute("data-vertex-url"), f.get(r, function (t, e, i) {
        n.load(n.fragmentString, i);
        })), this.load(), this.program)) {
        var a = o.getAttribLocation(this.program, "a_texcoord");
        this.vbo.texCoords = o.createBuffer(), this.gl.bindBuffer(o.ARRAY_BUFFER, this.vbo.texCoords), this.gl.bufferData(o.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]), o.STATIC_DRAW), this.gl.enableVertexAttribArray(a), this.gl.vertexAttribPointer(a, 2, o.FLOAT, !1, 0, 0);
        var l = o.getAttribLocation(this.program, "a_position");

        if (this.vbo.vertices = o.createBuffer(), this.gl.bindBuffer(o.ARRAY_BUFFER, this.vbo.vertices), this.gl.bufferData(o.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), o.STATIC_DRAW), this.gl.enableVertexAttribArray(l), this.gl.vertexAttribPointer(l, 2, o.FLOAT, !1, 0, 0), t.hasAttribute("data-textures")) {
            var h = t.getAttribute("data-textures").split(",");

            for (var c in h) this.setUniform("u_tex" + c, h[c]);
        }

        var u = {
            x: 0,
            y: 0
        };
        document.addEventListener("mousemove", function (t) {
            u.x = t.clientX || t.pageX, u.y = t.clientY || t.pageY;
        }, !1);
        var d = this;
        return this.setMouse({
            x: 0,
            y: 0
        }), function t() {
            1 < d.nMouse && d.setMouse(u), d.resize() && (d.forceRender = !0), d.render(), d.animationFrameRequest = window.requestAnimationFrame(t);
        }(), this;
        }
    }

    return window.addEventListener("load", function () {
        !function () {
        var t = document.getElementsByClassName("glslCanvas");

        if (0 < t.length) {
            window.glslCanvases = [];

            for (var e = 0; e < t.length; e++) {
            var i = new C(t[e]);
            i.isValid && window.glslCanvases.push(i);
            }
        }
        }();
    }), C;
});