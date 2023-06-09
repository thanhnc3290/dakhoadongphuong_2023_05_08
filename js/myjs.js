/*!
 * Bootstrap v5.2.1 (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = t(e.Popper) }(this, function(e) {
    "use strict";
    let t = function e(t) {
            if (t && t.__esModule) return t;
            let n = Object.create(null, {
                [Symbol.toStringTag]: { value: "Module" }
            });
            if (t) {
                for (let i in t)
                    if ("default" !== i) {
                        let r = Object.getOwnPropertyDescriptor(t, i);
                        Object.defineProperty(n, i, r.get ? r : { enumerable: !0, get: () => t[i] })
                    }
            }
            return n.default = t, Object.freeze(n)
        }(e),
        n = "transitionend",
        i = e => {
            let t = e.getAttribute("data-bs-target");
            if (!t || "#" === t) {
                let n = e.getAttribute("href");
                if (!n || !n.includes("#") && !n.startsWith(".")) return null;
                n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), t = n && "#" !== n ? n.trim() : null
            }
            return t
        },
        r = e => { let t = i(e); return t && document.querySelector(t) ? t : null },
        s = e => { let t = i(e); return t ? document.querySelector(t) : null },
        o = e => { e.dispatchEvent(new Event(n)) },
        a = e => !(!e || "object" != typeof e) && (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
        l = e => a(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? document.querySelector(e) : null,
        c = e => {
            if (!a(e) || 0 === e.getClientRects().length) return !1;
            let t = "visible" === getComputedStyle(e).getPropertyValue("visibility"),
                n = e.closest("details:not([open])");
            if (!n) return t;
            if (n !== e) { let i = e.closest("summary"); if (i && i.parentNode !== n || null === i) return !1 }
            return t
        },
        u = e => !e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")),
        d = e => { if (!document.documentElement.attachShadow) return null; if ("function" == typeof e.getRootNode) { let t = e.getRootNode(); return t instanceof ShadowRoot ? t : null } return e instanceof ShadowRoot ? e : e.parentNode ? d(e.parentNode) : null },
        h = () => {},
        f = e => { e.offsetHeight },
        p = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null,
        g = [],
        m = () => "rtl" === document.documentElement.dir,
        v = e => {
            var t;
            t = () => {
                let t = p();
                if (t) {
                    let n = e.NAME,
                        i = t.fn[n];
                    t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = () => (t.fn[n] = i, e.jQueryInterface)
                }
            }, "loading" === document.readyState ? (g.length || document.addEventListener("DOMContentLoaded", () => { for (let e of g) e() }), g.push(t)) : t()
        },
        y = e => { "function" == typeof e && e() },
        b = (e, t, i = !0) => {
            if (!i) return void y(e);
            let r = (e => { if (!e) return 0; let { transitionDuration: t, transitionDelay: n } = window.getComputedStyle(e), i = Number.parseFloat(t), r = Number.parseFloat(n); return i || r ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (Number.parseFloat(t) + Number.parseFloat(n))) : 0 })(t) + 5,
                s = !1,
                a = ({ target: i }) => { i === t && (s = !0, t.removeEventListener(n, a), y(e)) };
            t.addEventListener(n, a), setTimeout(() => { s || o(t) }, r)
        },
        $ = (e, t, n, i) => {
            let r = e.length,
                s = e.indexOf(t);
            return -1 === s ? !n && i ? e[r - 1] : e[0] : (s += n ? 1 : -1, i && (s = (s + r) % r), e[Math.max(0, Math.min(s, r - 1))])
        },
        w = /[^.]*(?=\..*)\.|.*/,
        x = /\..*/,
        T = /::\d+$/,
        C = {},
        _ = 1,
        E = { mouseenter: "mouseover", mouseleave: "mouseout" },
        A = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function k(e, t) { return t && `${t}::${_++}` || e.uidEvent || _++ }

    function N(e) { let t = k(e); return e.uidEvent = t, C[t] = C[t] || {}, C[t] }

    function S(e, t, n = null) { return Object.values(e).find(e => e.callable === t && e.delegationSelector === n) }

    function L(e, t, n) {
        let i = "string" == typeof t,
            r = I(e);
        return A.has(r) || (r = e), [i, i ? n : t || n, r]
    }

    function D(e, t, n, i, r) {
        var s, o, a, l, c, u;
        if ("string" != typeof t || !e) return;
        let [d, h, f] = L(t, n, i);
        t in E && (h = (s = h, function(e) { if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return s.call(this, e) }));
        let p = N(e),
            g = p[f] || (p[f] = {}),
            m = S(g, h, d ? n : null);
        if (m) return void(m.oneOff = m.oneOff && r);
        let v = k(h, t.replace(w, "")),
            y = d ? (o = e, a = n, l = h, function e(t) {
                let n = o.querySelectorAll(a);
                for (let { target: i } = t; i && i !== this; i = i.parentNode)
                    for (let r of n)
                        if (r === i) return H(t, { delegateTarget: i }), e.oneOff && P.off(o, t.type, a, l), l.apply(i, [t])
            }) : (c = e, u = h, function e(t) { return H(t, { delegateTarget: c }), e.oneOff && P.off(c, t.type, u), u.apply(c, [t]) });
        y.delegationSelector = d ? n : null, y.callable = h, y.oneOff = r, y.uidEvent = v, g[v] = y, e.addEventListener(f, y, d)
    }

    function j(e, t, n, i, r) {
        let s = S(t[n], i, r);
        s && (e.removeEventListener(n, s, Boolean(r)), delete t[n][s.uidEvent])
    }

    function O(e, t, n, i) {
        let r = t[n] || {};
        for (let s of Object.keys(r))
            if (s.includes(i)) {
                let o = r[s];
                j(e, t, n, o.callable, o.delegationSelector)
            }
    }

    function I(e) { return E[e = e.replace(x, "")] || e }
    let P = {
        on(e, t, n, i) { D(e, t, n, i, !1) },
        one(e, t, n, i) { D(e, t, n, i, !0) },
        off(e, t, n, i) {
            if ("string" != typeof t || !e) return;
            let [r, s, o] = L(t, n, i), a = o !== t, l = N(e), c = l[o] || {}, u = t.startsWith(".");
            if (void 0 === s) {
                if (u)
                    for (let d of Object.keys(l)) O(e, l, d, t.slice(1));
                for (let h of Object.keys(c)) {
                    let f = h.replace(T, "");
                    if (!a || t.includes(f)) {
                        let p = c[h];
                        j(e, l, o, p.callable, p.delegationSelector)
                    }
                }
            } else {
                if (!Object.keys(c).length) return;
                j(e, l, o, s, r ? n : null)
            }
        },
        trigger(e, t, n) {
            if ("string" != typeof t || !e) return null;
            let i = p(),
                r = null,
                s = !0,
                o = !0,
                a = !1;
            t !== I(t) && i && (r = i.Event(t, n), i(e).trigger(r), s = !r.isPropagationStopped(), o = !r.isImmediatePropagationStopped(), a = r.isDefaultPrevented());
            let l = new Event(t, { bubbles: s, cancelable: !0 });
            return l = H(l, n), a && l.preventDefault(), o && e.dispatchEvent(l), l.defaultPrevented && r && r.preventDefault(), l
        }
    };

    function H(e, t) {
        for (let [n, i] of Object.entries(t || {})) try { e[n] = i } catch (r) { Object.defineProperty(e, n, { configurable: !0, get: () => i }) }
        return e
    }
    let M = new Map,
        q = {set(e, t, n) {
                M.has(e) || M.set(e, new Map);
                let i = M.get(e);
                i.has(t) || 0 === i.size ? i.set(t, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)
            },
            get: (e, t) => M.has(e) && M.get(e).get(t) || null,
            remove(e, t) {
                if (!M.has(e)) return;
                let n = M.get(e);
                n.delete(t), 0 === n.size && M.delete(e)
            }
        };

    function F(e) { if ("true" === e) return !0; if ("false" === e) return !1; if (e === Number(e).toString()) return Number(e); if ("" === e || "null" === e) return null; if ("string" != typeof e) return e; try { return JSON.parse(decodeURIComponent(e)) } catch (t) { return e } }

    function B(e) { return e.replace(/[A-Z]/g, e => `-${e.toLowerCase()}`) }
    let z = {
        setDataAttribute(e, t, n) { e.setAttribute(`data-bs-${B(t)}`, n) },
        removeDataAttribute(e, t) { e.removeAttribute(`data-bs-${B(t)}`) },
        getDataAttributes(e) {
            if (!e) return {};
            let t = {},
                n = Object.keys(e.dataset).filter(e => e.startsWith("bs") && !e.startsWith("bsConfig"));
            for (let i of n) {
                let r = i.replace(/^bs/, "");
                t[r = r.charAt(0).toLowerCase() + r.slice(1, r.length)] = F(e.dataset[i])
            }
            return t
        },
        getDataAttribute: (e, t) => F(e.getAttribute(`data-bs-${B(t)}`))
    };
    class W {
        static get Default() { return {} }
        static get DefaultType() { return {} }
        static get NAME() { throw Error('You have to implement the static method "NAME", for each component!') }
        _getConfig(e) { return e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e }
        _configAfterMerge(e) { return e }
        _mergeConfigObj(e, t) { let n = a(t) ? z.getDataAttribute(t, "config") : {}; return {...this.constructor.Default, ... "object" == typeof n ? n : {}, ...a(t) ? z.getDataAttributes(t) : {}, ... "object" == typeof e ? e : {} } }
        _typeCheckConfig(e, t = this.constructor.DefaultType) {
            var n;
            for (let i of Object.keys(t)) {
                let r = t[i],
                    s = e[i],
                    o = a(s) ? "element" : null == (n = s) ? `${n}` : Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!RegExp(r).test(o)) throw TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${r}".`)
            }
        }
    }
    class R extends W {
        constructor(e, t) { super(), (e = l(e)) && (this._element = e, this._config = this._getConfig(t), q.set(this._element, this.constructor.DATA_KEY, this)) }
        dispose() { for (let e of(q.remove(this._element, this.constructor.DATA_KEY), P.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this))) this[e] = null }
        _queueCallback(e, t, n = !0) { b(e, t, n) }
        _getConfig(e) { return e = this._mergeConfigObj(e, this._element), e = this._configAfterMerge(e), this._typeCheckConfig(e), e }
        static getInstance(e) { return q.get(l(e), this.DATA_KEY) }
        static getOrCreateInstance(e, t = {}) { return this.getInstance(e) || new this(e, "object" == typeof t ? t : null) }
        static get VERSION() { return "5.2.1" }
        static get DATA_KEY() { return `bs.${this.NAME}` }
        static get EVENT_KEY() { return `.${this.DATA_KEY}` }
        static eventName(e) { return `${e}${this.EVENT_KEY}` }
    }
    let X = (e, t = "hide") => {
        let n = `click.dismiss${e.EVENT_KEY}`,
            i = e.NAME;
        P.on(document, n, `[data-bs-dismiss="${i}"]`, function(n) {
            if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), u(this)) return;
            let r = s(this) || this.closest(`.${i}`);
            e.getOrCreateInstance(r)[t]()
        })
    };
    class V extends R {
        static get NAME() { return "alert" }
        close() {
            if (P.trigger(this._element, "close.bs.alert").defaultPrevented) return;
            this._element.classList.remove("show");
            let e = this._element.classList.contains("fade");
            this._queueCallback(() => this._destroyElement(), this._element, e)
        }
        _destroyElement() { this._element.remove(), P.trigger(this._element, "closed.bs.alert"), this.dispose() }
        static jQueryInterface(e) {
            return this.each(function() {
                let t = V.getOrCreateInstance(this);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            })
        }
    }
    X(V, "close"), v(V);
    let Y = '[data-bs-toggle="button"]';
    class K extends R {
        static get NAME() { return "button" }
        toggle() { this._element.setAttribute("aria-pressed", this._element.classList.toggle("active")) }
        static jQueryInterface(e) { return this.each(function() { let t = K.getOrCreateInstance(this); "toggle" === e && t[e]() }) }
    }
    P.on(document, "click.bs.button.data-api", Y, e => {
        e.preventDefault();
        let t = e.target.closest(Y);
        K.getOrCreateInstance(t).toggle()
    }), v(K);
    let Q = {
            find: (e, t = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(t, e)),
            findOne: (e, t = document.documentElement) => Element.prototype.querySelector.call(t, e),
            children: (e, t) => [].concat(...e.children).filter(e => e.matches(t)),
            parents(e, t) {
                let n = [],
                    i = e.parentNode.closest(t);
                for (; i;) n.push(i), i = i.parentNode.closest(t);
                return n
            },
            prev(e, t) {
                let n = e.previousElementSibling;
                for (; n;) {
                    if (n.matches(t)) return [n];
                    n = n.previousElementSibling
                }
                return []
            },
            next(e, t) {
                let n = e.nextElementSibling;
                for (; n;) {
                    if (n.matches(t)) return [n];
                    n = n.nextElementSibling
                }
                return []
            },
            focusableChildren(e) { let t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(e => `${e}:not([tabindex^="-"])`).join(","); return this.find(t, e).filter(e => !u(e) && c(e)) }
        },
        U = { endCallback: null, leftCallback: null, rightCallback: null },
        J = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" };
    class G extends W {
        constructor(e, t) { super(), this._element = e, e && G.isSupported() && (this._config = this._getConfig(t), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents()) }
        static get Default() { return U }
        static get DefaultType() { return J }
        static get NAME() { return "swipe" }
        dispose() { P.off(this._element, ".bs.swipe") }
        _start(e) { this._supportPointerEvents ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX) : this._deltaX = e.touches[0].clientX }
        _end(e) { this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX), this._handleSwipe(), y(this._config.endCallback) }
        _move(e) { this._deltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this._deltaX }
        _handleSwipe() {
            let e = Math.abs(this._deltaX);
            if (e <= 40) return;
            let t = e / this._deltaX;
            this._deltaX = 0, t && y(t > 0 ? this._config.rightCallback : this._config.leftCallback)
        }
        _initEvents() { this._supportPointerEvents ? (P.on(this._element, "pointerdown.bs.swipe", e => this._start(e)), P.on(this._element, "pointerup.bs.swipe", e => this._end(e)), this._element.classList.add("pointer-event")) : (P.on(this._element, "touchstart.bs.swipe", e => this._start(e)), P.on(this._element, "touchmove.bs.swipe", e => this._move(e)), P.on(this._element, "touchend.bs.swipe", e => this._end(e))) }
        _eventIsPointerPenTouch(e) { return this._supportPointerEvents && ("pen" === e.pointerType || "touch" === e.pointerType) }
        static isSupported() { return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0 }
    }
    let Z = "next",
        ee = "prev",
        et = "left",
        en = "right",
        ei = "slid.bs.carousel",
        er = "carousel",
        es = "active",
        eo = { ArrowLeft: en, ArrowRight: et },
        ea = { interval: 5e3, keyboard: !0, pause: "hover", ride: !1, touch: !0, wrap: !0 },
        el = { interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean" };
    class ec extends R {
        constructor(e, t) { super(e, t), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = Q.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === er && this.cycle() }
        static get Default() { return ea }
        static get DefaultType() { return el }
        static get NAME() { return "carousel" }
        next() { this._slide(Z) }
        nextWhenVisible() {!document.hidden && c(this._element) && this.next() }
        prev() { this._slide(ee) }
        pause() { this._isSliding && o(this._element), this._clearInterval() }
        cycle() { this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval) }
        _maybeEnableCycle() { this._config.ride && (this._isSliding ? P.one(this._element, ei, () => this.cycle()) : this.cycle()) }
        to(e) {
            let t = this._getItems();
            if (e > t.length - 1 || e < 0) return;
            if (this._isSliding) return void P.one(this._element, ei, () => this.to(e));
            let n = this._getItemIndex(this._getActive());
            n !== e && this._slide(e > n ? Z : ee, t[e])
        }
        dispose() { this._swipeHelper && this._swipeHelper.dispose(), super.dispose() }
        _configAfterMerge(e) { return e.defaultInterval = e.interval, e }
        _addEventListeners() { this._config.keyboard && P.on(this._element, "keydown.bs.carousel", e => this._keydown(e)), "hover" === this._config.pause && (P.on(this._element, "mouseenter.bs.carousel", () => this.pause()), P.on(this._element, "mouseleave.bs.carousel", () => this._maybeEnableCycle())), this._config.touch && G.isSupported() && this._addTouchEventListeners() }
        _addTouchEventListeners() {
            for (let e of Q.find(".carousel-item img", this._element)) P.on(e, "dragstart.bs.carousel", e => e.preventDefault());
            this._swipeHelper = new G(this._element, { leftCallback: () => this._slide(this._directionToOrder(et)), rightCallback: () => this._slide(this._directionToOrder(en)), endCallback: () => { "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval)) } })
        }
        _keydown(e) {
            if (/input|textarea/i.test(e.target.tagName)) return;
            let t = eo[e.key];
            t && (e.preventDefault(), this._slide(this._directionToOrder(t)))
        }
        _getItemIndex(e) { return this._getItems().indexOf(e) }
        _setActiveIndicatorElement(e) {
            if (!this._indicatorsElement) return;
            let t = Q.findOne(".active", this._indicatorsElement);
            t.classList.remove(es), t.removeAttribute("aria-current");
            let n = Q.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
            n && (n.classList.add(es), n.setAttribute("aria-current", "true"))
        }
        _updateInterval() {
            let e = this._activeElement || this._getActive();
            if (!e) return;
            let t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
            this._config.interval = t || this._config.defaultInterval
        }
        _slide(e, t = null) {
            if (this._isSliding) return;
            let n = this._getActive(),
                i = e === Z,
                r = t || $(this._getItems(), n, i, this._config.wrap);
            if (r === n) return;
            let s = this._getItemIndex(r),
                o = t => P.trigger(this._element, t, { relatedTarget: r, direction: this._orderToDirection(e), from: this._getItemIndex(n), to: s });
            if (o("slide.bs.carousel").defaultPrevented || !n || !r) return;
            let a = Boolean(this._interval);
            this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(s), this._activeElement = r;
            let l = i ? "carousel-item-start" : "carousel-item-end",
                c = i ? "carousel-item-next" : "carousel-item-prev";
            r.classList.add(c), f(r), n.classList.add(l), r.classList.add(l), this._queueCallback(() => { r.classList.remove(l, c), r.classList.add(es), n.classList.remove(es, c, l), this._isSliding = !1, o(ei) }, n, this._isAnimated()), a && this.cycle()
        }
        _isAnimated() { return this._element.classList.contains("slide") }
        _getActive() { return Q.findOne(".active.carousel-item", this._element) }
        _getItems() { return Q.find(".carousel-item", this._element) }
        _clearInterval() { this._interval && (clearInterval(this._interval), this._interval = null) }
        _directionToOrder(e) { return m() ? e === et ? ee : Z : e === et ? Z : ee }
        _orderToDirection(e) { return m() ? e === ee ? et : en : e === ee ? en : et }
        static jQueryInterface(e) {
            return this.each(function() {
                let t = ec.getOrCreateInstance(this, e);
                if ("number" != typeof e) {
                    if ("string" == typeof e) {
                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw TypeError(`No method named "${e}"`);
                        t[e]()
                    }
                } else t.to(e)
            })
        }
    }
    P.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", function(e) {
        let t = s(this);
        if (!t || !t.classList.contains(er)) return;
        e.preventDefault();
        let n = ec.getOrCreateInstance(t),
            i = this.getAttribute("data-bs-slide-to");
        return i ? (n.to(i), void n._maybeEnableCycle()) : "next" === z.getDataAttribute(this, "slide") ? (n.next(), void n._maybeEnableCycle()) : (n.prev(), void n._maybeEnableCycle())
    }), P.on(window, "load.bs.carousel.data-api", () => { let e = Q.find('[data-bs-ride="carousel"]'); for (let t of e) ec.getOrCreateInstance(t) }), v(ec);
    let eu = "show",
        ed = "collapse",
        eh = "collapsing",
        ef = '[data-bs-toggle="collapse"]',
        ep = { parent: null, toggle: !0 },
        eg = { parent: "(null|element)", toggle: "boolean" };
    class em extends R {
        constructor(e, t) {
            super(e, t), this._isTransitioning = !1, this._triggerArray = [];
            let n = Q.find(ef);
            for (let i of n) {
                let s = r(i),
                    o = Q.find(s).filter(e => e === this._element);
                null !== s && o.length && this._triggerArray.push(i)
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
        }
        static get Default() { return ep }
        static get DefaultType() { return eg }
        static get NAME() { return "collapse" }
        toggle() { this._isShown() ? this.hide() : this.show() }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let e = [];
            if (this._config.parent && (e = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(e => e !== this._element).map(e => em.getOrCreateInstance(e, { toggle: !1 }))), e.length && e[0]._isTransitioning || P.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
            for (let t of e) t.hide();
            let n = this._getDimension();
            this._element.classList.remove(ed), this._element.classList.add(eh), this._element.style[n] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            let i = `scroll${n[0].toUpperCase() + n.slice(1)}`;
            this._queueCallback(() => { this._isTransitioning = !1, this._element.classList.remove(eh), this._element.classList.add(ed, eu), this._element.style[n] = "", P.trigger(this._element, "shown.bs.collapse") }, this._element, !0), this._element.style[n] = `${this._element[i]}px`
        }
        hide() {
            if (this._isTransitioning || !this._isShown() || P.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
            let e = this._getDimension();
            for (let t of(this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, f(this._element), this._element.classList.add(eh), this._element.classList.remove(ed, eu), this._triggerArray)) {
                let n = s(t);
                n && !this._isShown(n) && this._addAriaAndCollapsedClass([t], !1)
            }
            this._isTransitioning = !0, this._element.style[e] = "", this._queueCallback(() => { this._isTransitioning = !1, this._element.classList.remove(eh), this._element.classList.add(ed), P.trigger(this._element, "hidden.bs.collapse") }, this._element, !0)
        }
        _isShown(e = this._element) { return e.classList.contains(eu) }
        _configAfterMerge(e) { return e.toggle = Boolean(e.toggle), e.parent = l(e.parent), e }
        _getDimension() { return this._element.classList.contains("collapse-horizontal") ? "width" : "height" }
        _initializeChildren() {
            if (!this._config.parent) return;
            let e = this._getFirstLevelChildren(ef);
            for (let t of e) {
                let n = s(t);
                n && this._addAriaAndCollapsedClass([t], this._isShown(n))
            }
        }
        _getFirstLevelChildren(e) { let t = Q.find(":scope .collapse .collapse", this._config.parent); return Q.find(e, this._config.parent).filter(e => !t.includes(e)) }
        _addAriaAndCollapsedClass(e, t) {
            if (e.length)
                for (let n of e) n.classList.toggle("collapsed", !t), n.setAttribute("aria-expanded", t)
        }
        static jQueryInterface(e) {
            let t = {};
            return "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1), this.each(function() {
                let n = em.getOrCreateInstance(this, t);
                if ("string" == typeof e) {
                    if (void 0 === n[e]) throw TypeError(`No method named "${e}"`);
                    n[e]()
                }
            })
        }
    }
    P.on(document, "click.bs.collapse.data-api", ef, function(e) {
        ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
        let t = r(this),
            n = Q.find(t);
        for (let i of n) em.getOrCreateInstance(i, { toggle: !1 }).toggle()
    }), v(em);
    let ev = "dropdown",
        ey = "ArrowDown",
        e8 = "click.bs.dropdown.data-api",
        eb = "keydown.bs.dropdown.data-api",
        e$ = "show",
        ew = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
        ex = `${ew}.show`,
        eT = ".dropdown-menu",
        eC = m() ? "top-end" : "top-start",
        e_ = m() ? "top-start" : "top-end",
        eE = m() ? "bottom-end" : "bottom-start",
        eA = m() ? "bottom-start" : "bottom-end",
        ek = m() ? "left-start" : "right-start",
        eN = m() ? "right-start" : "left-start",
        eS = { autoClose: !0, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" },
        eL = { autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)" };
    class eD extends R {
        constructor(e, t) { super(e, t), this._popper = null, this._parent = this._element.parentNode, this._menu = Q.next(this._element, eT)[0] || Q.prev(this._element, eT)[0], this._inNavbar = this._detectNavbar() }
        static get Default() { return eS }
        static get DefaultType() { return eL }
        static get NAME() { return ev }
        toggle() { return this._isShown() ? this.hide() : this.show() }
        show() {
            if (u(this._element) || this._isShown()) return;
            let e = { relatedTarget: this._element };
            if (!P.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
                if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
                    for (let t of[].concat(...document.body.children)) P.on(t, "mouseover", h);
                this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(e$), this._element.classList.add(e$), P.trigger(this._element, "shown.bs.dropdown", e)
            }
        }
        hide() {
            if (u(this._element) || !this._isShown()) return;
            let e = { relatedTarget: this._element };
            this._completeHide(e)
        }
        dispose() { this._popper && this._popper.destroy(), super.dispose() }
        update() { this._inNavbar = this._detectNavbar(), this._popper && this._popper.update() }
        _completeHide(e) {
            if (!P.trigger(this._element, "hide.bs.dropdown", e).defaultPrevented) {
                if ("ontouchstart" in document.documentElement)
                    for (let t of[].concat(...document.body.children)) P.off(t, "mouseover", h);
                this._popper && this._popper.destroy(), this._menu.classList.remove(e$), this._element.classList.remove(e$), this._element.setAttribute("aria-expanded", "false"), z.removeDataAttribute(this._menu, "popper"), P.trigger(this._element, "hidden.bs.dropdown", e)
            }
        }
        _getConfig(e) { if ("object" == typeof(e = super._getConfig(e)).reference && !a(e.reference) && "function" != typeof e.reference.getBoundingClientRect) throw TypeError(`${ev.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`); return e }
        _createPopper() {
            if (void 0 === t) throw TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let e = this._element;
            "parent" === this._config.reference ? e = this._parent : a(this._config.reference) ? e = l(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
            let n = this._getPopperConfig();
            this._popper = t.createPopper(e, this._menu, n)
        }
        _isShown() { return this._menu.classList.contains(e$) }
        _getPlacement() { let e = this._parent; if (e.classList.contains("dropend")) return ek; if (e.classList.contains("dropstart")) return eN; if (e.classList.contains("dropup-center")) return "top"; if (e.classList.contains("dropdown-center")) return "bottom"; let t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim(); return e.classList.contains("dropup") ? t ? e_ : eC : t ? eA : eE }
        _detectNavbar() { return null !== this._element.closest(".navbar") }
        _getOffset() { let { offset: e } = this._config; return "string" == typeof e ? e.split(",").map(e => Number.parseInt(e, 10)) : "function" == typeof e ? t => e(t, this._element) : e }
        _getPopperConfig() { let e = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] }; return (this._inNavbar || "static" === this._config.display) && (z.setDataAttribute(this._menu, "popper", "static"), e.modifiers = [{ name: "applyStyles", enabled: !1 }]), {...e, ... "function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig } }
        _selectMenuItem({ key: e, target: t }) {
            let n = Q.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(e => c(e));
            n.length && $(n, t, e === ey, !n.includes(t)).focus()
        }
        static jQueryInterface(e) {
            return this.each(function() {
                let t = eD.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
        static clearMenus(e) {
            if (2 === e.button || "keyup" === e.type && "Tab" !== e.key) return;
            let t = Q.find(ex);
            for (let n of t) {
                let i = eD.getInstance(n);
                if (!i || !1 === i._config.autoClose) continue;
                let r = e.composedPath(),
                    s = r.includes(i._menu);
                if (r.includes(i._element) || "inside" === i._config.autoClose && !s || "outside" === i._config.autoClose && s || i._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
                let o = { relatedTarget: i._element };
                "click" === e.type && (o.clickEvent = e), i._completeHide(o)
            }
        }
        static dataApiKeydownHandler(e) {
            let t = /input|textarea/i.test(e.target.tagName),
                n = "Escape" === e.key,
                i = ["ArrowUp", ey].includes(e.key);
            if (!i && !n || t && !n) return;
            e.preventDefault();
            let r = this.matches(ew) ? this : Q.prev(this, ew)[0] || Q.next(this, ew)[0],
                s = eD.getOrCreateInstance(r);
            if (i) return e.stopPropagation(), s.show(), void s._selectMenuItem(e);
            s._isShown() && (e.stopPropagation(), s.hide(), r.focus())
        }
    }
    P.on(document, eb, ew, eD.dataApiKeydownHandler), P.on(document, eb, eT, eD.dataApiKeydownHandler), P.on(document, e8, eD.clearMenus), P.on(document, "keyup.bs.dropdown.data-api", eD.clearMenus), P.on(document, e8, ew, function(e) { e.preventDefault(), eD.getOrCreateInstance(this).toggle() }), v(eD);
    let ej = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        eO = ".sticky-top",
        eI = "padding-right",
        eP = "margin-right";
    class eH {
        constructor() { this._element = document.body }
        getWidth() { let e = document.documentElement.clientWidth; return Math.abs(window.innerWidth - e) }
        hide() {
            let e = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, eI, t => t + e), this._setElementAttributes(ej, eI, t => t + e), this._setElementAttributes(eO, eP, t => t - e)
        }
        reset() { this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, eI), this._resetElementAttributes(ej, eI), this._resetElementAttributes(eO, eP) }
        isOverflowing() { return this.getWidth() > 0 }
        _disableOverFlow() { this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden" }
        _setElementAttributes(e, t, n) {
            let i = this.getWidth();
            this._applyManipulationCallback(e, e => {
                if (e !== this._element && window.innerWidth > e.clientWidth + i) return;
                this._saveInitialAttribute(e, t);
                let r = window.getComputedStyle(e).getPropertyValue(t);
                e.style.setProperty(t, `${n(Number.parseFloat(r))}px`)
            })
        }
        _saveInitialAttribute(e, t) {
            let n = e.style.getPropertyValue(t);
            n && z.setDataAttribute(e, t, n)
        }
        _resetElementAttributes(e, t) {
            this._applyManipulationCallback(e, e => {
                let n = z.getDataAttribute(e, t);
                null !== n ? (z.removeDataAttribute(e, t), e.style.setProperty(t, n)) : e.style.removeProperty(t)
            })
        }
        _applyManipulationCallback(e, t) {
            if (a(e)) t(e);
            else
                for (let n of Q.find(e, this._element)) t(n)
        }
    }
    let eM = "show",
        eq = "mousedown.bs.backdrop",
        eF = { className: "modal-backdrop", clickCallback: null, isAnimated: !1, isVisible: !0, rootElement: "body" },
        e9 = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" };
    class eB extends W {
        constructor(e) { super(), this._config = this._getConfig(e), this._isAppended = !1, this._element = null }
        static get Default() { return eF }
        static get DefaultType() { return e9 }
        static get NAME() { return "backdrop" }
        show(e) {
            if (!this._config.isVisible) return void y(e);
            this._append();
            let t = this._getElement();
            this._config.isAnimated && f(t), t.classList.add(eM), this._emulateAnimation(() => { y(e) })
        }
        hide(e) { this._config.isVisible ? (this._getElement().classList.remove(eM), this._emulateAnimation(() => { this.dispose(), y(e) })) : y(e) }
        dispose() { this._isAppended && (P.off(this._element, eq), this._element.remove(), this._isAppended = !1) }
        _getElement() {
            if (!this._element) {
                let e = document.createElement("div");
                e.className = this._config.className, this._config.isAnimated && e.classList.add("fade"), this._element = e
            }
            return this._element
        }
        _configAfterMerge(e) { return e.rootElement = l(e.rootElement), e }
        _append() {
            if (this._isAppended) return;
            let e = this._getElement();
            this._config.rootElement.append(e), P.on(e, eq, () => { y(this._config.clickCallback) }), this._isAppended = !0
        }
        _emulateAnimation(e) { b(e, this._getElement(), this._config.isAnimated) }
    }
    let ez = ".bs.focustrap",
        eW = "backward",
        e0 = { autofocus: !0, trapElement: null },
        eR = { autofocus: "boolean", trapElement: "element" };
    class e1 extends W {
        constructor(e) { super(), this._config = this._getConfig(e), this._isActive = !1, this._lastTabNavDirection = null }
        static get Default() { return e0 }
        static get DefaultType() { return eR }
        static get NAME() { return "focustrap" }
        activate() { this._isActive || (this._config.autofocus && this._config.trapElement.focus(), P.off(document, ez), P.on(document, "focusin.bs.focustrap", e => this._handleFocusin(e)), P.on(document, "keydown.tab.bs.focustrap", e => this._handleKeydown(e)), this._isActive = !0) }
        deactivate() { this._isActive && (this._isActive = !1, P.off(document, ez)) }
        _handleFocusin(e) {
            let { trapElement: t } = this._config;
            if (e.target === document || e.target === t || t.contains(e.target)) return;
            let n = Q.focusableChildren(t);
            0 === n.length ? t.focus() : this._lastTabNavDirection === eW ? n[n.length - 1].focus() : n[0].focus()
        }
        _handleKeydown(e) { "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? eW : "forward") }
    }
    let eX = "hidden.bs.modal",
        e2 = "show.bs.modal",
        eV = "modal-open",
        e3 = "show",
        e7 = "modal-static",
        eY = { backdrop: !0, focus: !0, keyboard: !0 },
        eK = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
    class eQ extends R {
        constructor(e, t) { super(e, t), this._dialog = Q.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new eH, this._addEventListeners() }
        static get Default() { return eY }
        static get DefaultType() { return eK }
        static get NAME() { return "modal" }
        toggle(e) { return this._isShown ? this.hide() : this.show(e) }
        show(e) { this._isShown || this._isTransitioning || P.trigger(this._element, e2, { relatedTarget: e }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(eV), this._adjustDialog(), this._backdrop.show(() => this._showElement(e))) }
        hide() { this._isShown && !this._isTransitioning && (P.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(e3), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()))) }
        dispose() {
            for (let e of[window, this._dialog]) P.off(e, ".bs.modal");
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }
        handleUpdate() { this._adjustDialog() }
        _initializeBackDrop() { return new eB({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() }) }
        _initializeFocusTrap() { return new e1({ trapElement: this._element }) }
        _showElement(e) {
            document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
            let t = Q.findOne(".modal-body", this._dialog);
            t && (t.scrollTop = 0), f(this._element), this._element.classList.add(e3), this._queueCallback(() => { this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, P.trigger(this._element, "shown.bs.modal", { relatedTarget: e }) }, this._dialog, this._isAnimated())
        }
        _addEventListeners() { P.on(this._element, "keydown.dismiss.bs.modal", e => { if ("Escape" === e.key) return this._config.keyboard ? (e.preventDefault(), void this.hide()) : void this._triggerBackdropTransition() }), P.on(window, "resize.bs.modal", () => { this._isShown && !this._isTransitioning && this._adjustDialog() }), P.on(this._element, "mousedown.dismiss.bs.modal", e => { P.one(this._element, "click.dismiss.bs.modal", t => { this._dialog.contains(e.target) || this._dialog.contains(t.target) || ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition()) }) }) }
        _hideModal() { this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => { document.body.classList.remove(eV), this._resetAdjustments(), this._scrollBar.reset(), P.trigger(this._element, eX) }) }
        _isAnimated() { return this._element.classList.contains("fade") }
        _triggerBackdropTransition() {
            if (P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
            let e = this._element.scrollHeight > document.documentElement.clientHeight,
                t = this._element.style.overflowY;
            "hidden" === t || this._element.classList.contains(e7) || (e || (this._element.style.overflowY = "hidden"), this._element.classList.add(e7), this._queueCallback(() => { this._element.classList.remove(e7), this._queueCallback(() => { this._element.style.overflowY = t }, this._dialog) }, this._dialog), this._element.focus())
        }
        _adjustDialog() {
            let e = this._element.scrollHeight > document.documentElement.clientHeight,
                t = this._scrollBar.getWidth(),
                n = t > 0;
            if (n && !e) {
                let i = m() ? "paddingLeft" : "paddingRight";
                this._element.style[i] = `${t}px`
            }
            if (!n && e) {
                let r = m() ? "paddingRight" : "paddingLeft";
                this._element.style[r] = `${t}px`
            }
        }
        _resetAdjustments() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }
        static jQueryInterface(e, t) {
            return this.each(function() {
                let n = eQ.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === n[e]) throw TypeError(`No method named "${e}"`);
                    n[e](t)
                }
            })
        }
    }
    P.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function(e) {
        let t = s(this);
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(), P.one(t, e2, e => { e.defaultPrevented || P.one(t, eX, () => { c(this) && this.focus() }) });
        let n = Q.findOne(".modal.show");
        n && eQ.getInstance(n).hide(), eQ.getOrCreateInstance(t).toggle(this)
    }), X(eQ), v(eQ);
    let eU = "show",
        e4 = "showing",
        e6 = "hiding",
        eJ = ".offcanvas.show",
        eG = "hidePrevented.bs.offcanvas",
        e5 = "hidden.bs.offcanvas",
        eZ = { backdrop: !0, keyboard: !0, scroll: !1 },
        te = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
    class tt extends R {
        constructor(e, t) { super(e, t), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners() }
        static get Default() { return eZ }
        static get DefaultType() { return te }
        static get NAME() { return "offcanvas" }
        toggle(e) { return this._isShown ? this.hide() : this.show(e) }
        show(e) { this._isShown || P.trigger(this._element, "show.bs.offcanvas", { relatedTarget: e }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || (new eH).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(e4), this._queueCallback(() => { this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(eU), this._element.classList.remove(e4), P.trigger(this._element, "shown.bs.offcanvas", { relatedTarget: e }) }, this._element, !0)) }
        hide() { this._isShown && (P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(e6), this._backdrop.hide(), this._queueCallback(() => { this._element.classList.remove(eU, e6), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new eH).reset(), P.trigger(this._element, e5) }, this._element, !0))) }
        dispose() { this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose() }
        _initializeBackDrop() { let e = Boolean(this._config.backdrop); return new eB({ className: "offcanvas-backdrop", isVisible: e, isAnimated: !0, rootElement: this._element.parentNode, clickCallback: e ? () => { "static" !== this._config.backdrop ? this.hide() : P.trigger(this._element, eG) } : null }) }
        _initializeFocusTrap() { return new e1({ trapElement: this._element }) }
        _addEventListeners() { P.on(this._element, "keydown.dismiss.bs.offcanvas", e => { "Escape" === e.key && (this._config.keyboard ? this.hide() : P.trigger(this._element, eG)) }) }
        static jQueryInterface(e) {
            return this.each(function() {
                let t = tt.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            })
        }
    }
    P.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function(e) {
        let t = s(this);
        if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), u(this)) return;
        P.one(t, e5, () => { c(this) && this.focus() });
        let n = Q.findOne(eJ);
        n && n !== t && tt.getInstance(n).hide(), tt.getOrCreateInstance(t).toggle(this)
    }), P.on(window, "load.bs.offcanvas.data-api", () => { for (let e of Q.find(eJ)) tt.getOrCreateInstance(e).show() }), P.on(window, "resize.bs.offcanvas", () => { for (let e of Q.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(e).position && tt.getOrCreateInstance(e).hide() }), X(tt), v(tt);
    let tn = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        ti = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
        tr = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        ts = (e, t) => { let n = e.nodeName.toLowerCase(); return t.includes(n) ? !tn.has(n) || Boolean(ti.test(e.nodeValue) || tr.test(e.nodeValue)) : t.filter(e => e instanceof RegExp).some(e => e.test(n)) },
        to = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] },
        ta = { allowList: to, content: {}, extraClass: "", html: !1, sanitize: !0, sanitizeFn: null, template: "<div></div>" },
        tl = { allowList: "object", content: "object", extraClass: "(string|function)", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", template: "string" },
        tc = { entry: "(string|element|function|null)", selector: "(string|element)" };
    class tu extends W {
        constructor(e) { super(), this._config = this._getConfig(e) }
        static get Default() { return ta }
        static get DefaultType() { return tl }
        static get NAME() { return "TemplateFactory" }
        getContent() { return Object.values(this._config.content).map(e => this._resolvePossibleFunction(e)).filter(Boolean) }
        hasContent() { return this.getContent().length > 0 }
        changeContent(e) { return this._checkContent(e), this._config.content = {...this._config.content, ...e }, this }
        toHtml() {
            let e = document.createElement("div");
            for (let [t, n] of(e.innerHTML = this._maybeSanitize(this._config.template), Object.entries(this._config.content))) this._setContent(e, n, t);
            let i = e.children[0],
                r = this._resolvePossibleFunction(this._config.extraClass);
            return r && i.classList.add(...r.split(" ")), i
        }
        _typeCheckConfig(e) { super._typeCheckConfig(e), this._checkContent(e.content) }
        _checkContent(e) { for (let [t, n] of Object.entries(e)) super._typeCheckConfig({ selector: t, entry: n }, tc) }
        _setContent(e, t, n) {
            let i = Q.findOne(n, e);
            i && ((t = this._resolvePossibleFunction(t)) ? a(t) ? this._putElementInTemplate(l(t), i) : this._config.html ? i.innerHTML = this._maybeSanitize(t) : i.textContent = t : i.remove())
        }
        _maybeSanitize(e) {
            return this._config.sanitize ? function(e, t, n) {
                if (!e.length) return e;
                if (n && "function" == typeof n) return n(e);
                let i = (new window.DOMParser).parseFromString(e, "text/html"),
                    r = [].concat(...i.body.querySelectorAll("*"));
                for (let s of r) {
                    let o = s.nodeName.toLowerCase();
                    if (!Object.keys(t).includes(o)) { s.remove(); continue }
                    let a = [].concat(...s.attributes),
                        l = [].concat(t["*"] || [], t[o] || []);
                    for (let c of a) ts(c, l) || s.removeAttribute(c.nodeName)
                }
                return i.body.innerHTML
            }(e, this._config.allowList, this._config.sanitizeFn) : e
        }
        _resolvePossibleFunction(e) { return "function" == typeof e ? e(this) : e }
        _putElementInTemplate(e, t) {
            if (this._config.html) return t.innerHTML = "", void t.append(e);
            t.textContent = e.textContent
        }
    }
    let td = new Set(["sanitize", "allowList", "sanitizeFn"]),
        th = "fade",
        tf = "show",
        tp = ".modal",
        tg = "hide.bs.modal",
        tm = "hover",
        tv = "focus",
        ty = { AUTO: "auto", TOP: "top", RIGHT: m() ? "left" : "right", BOTTOM: "bottom", LEFT: m() ? "right" : "left" },
        t8 = { allowList: to, animation: !0, boundary: "clippingParents", container: !1, customClass: "", delay: 0, fallbackPlacements: ["top", "right", "bottom", "left"], html: !1, offset: [0, 0], placement: "top", popperConfig: null, sanitize: !0, sanitizeFn: null, selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', title: "", trigger: "hover focus" },
        tb = { allowList: "object", animation: "boolean", boundary: "(string|element)", container: "(string|element|boolean)", customClass: "(string|function)", delay: "(number|object)", fallbackPlacements: "array", html: "boolean", offset: "(array|string|function)", placement: "(string|function)", popperConfig: "(null|object|function)", sanitize: "boolean", sanitizeFn: "(null|function)", selector: "(string|boolean)", template: "string", title: "(string|element|function)", trigger: "string" };
    class t$ extends R {
        constructor(e, n) {
            if (void 0 === t) throw TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(e, n), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners()
        }
        static get Default() { return t8 }
        static get DefaultType() { return tb }
        static get NAME() { return "tooltip" }
        enable() { this._isEnabled = !0 }
        disable() { this._isEnabled = !1 }
        toggleEnabled() { this._isEnabled = !this._isEnabled }
        toggle(e) {
            if (this._isEnabled) {
                if (e) { let t = this._initializeOnDelegatedTarget(e); return t._activeTrigger.click = !t._activeTrigger.click, void(t._isWithActiveTrigger() ? t._enter() : t._leave()) }
                this._isShown() ? this._leave() : this._enter()
            }
        }
        dispose() { clearTimeout(this._timeout), P.off(this._element.closest(tp), tg, this._hideModalHandler), this.tip && this.tip.remove(), this._config.originalTitle && this._element.setAttribute("title", this._config.originalTitle), this._disposePopper(), super.dispose() }
        show() {
            if ("none" === this._element.style.display) throw Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled) return;
            let e = P.trigger(this._element, this.constructor.eventName("show")),
                t = (d(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (e.defaultPrevented || !t) return;
            this.tip && (this.tip.remove(), this.tip = null);
            let n = this._getTipElement();
            this._element.setAttribute("aria-describedby", n.getAttribute("id"));
            let { container: i } = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (i.append(n), P.trigger(this._element, this.constructor.eventName("inserted"))), this._popper ? this._popper.update() : this._popper = this._createPopper(n), n.classList.add(tf), "ontouchstart" in document.documentElement)
                for (let r of[].concat(...document.body.children)) P.on(r, "mouseover", h);
            this._queueCallback(() => { P.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), this._isHovered = !1 }, this.tip, this._isAnimated())
        }
        hide() {
            if (!this._isShown() || P.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) return;
            let e = this._getTipElement();
            if (e.classList.remove(tf), "ontouchstart" in document.documentElement)
                for (let t of[].concat(...document.body.children)) P.off(t, "mouseover", h);
            this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this._isHovered = null, this._queueCallback(() => { this._isWithActiveTrigger() || (this._isHovered || e.remove(), this._element.removeAttribute("aria-describedby"), P.trigger(this._element, this.constructor.eventName("hidden")), this._disposePopper()) }, this.tip, this._isAnimated())
        }
        update() { this._popper && this._popper.update() }
        _isWithContent() { return Boolean(this._getTitle()) }
        _getTipElement() { return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip }
        _createTipElement(e) {
            let t = this._getTemplateFactory(e).toHtml();
            if (!t) return null;
            t.classList.remove(th, tf), t.classList.add(`bs-${this.constructor.NAME}-auto`);
            let n = (e => { do e += Math.floor(1e6 * Math.random()); while (document.getElementById(e)); return e })(this.constructor.NAME).toString();
            return t.setAttribute("id", n), this._isAnimated() && t.classList.add(th), t
        }
        setContent(e) { this._newContent = e, this._isShown() && (this._disposePopper(), this.show()) }
        _getTemplateFactory(e) { return this._templateFactory ? this._templateFactory.changeContent(e) : this._templateFactory = new tu({...this._config, content: e, extraClass: this._resolvePossibleFunction(this._config.customClass) }), this._templateFactory }
        _getContentForTemplate() { return { ".tooltip-inner": this._getTitle() } }
        _getTitle() { return this._resolvePossibleFunction(this._config.title) || this._config.originalTitle }
        _initializeOnDelegatedTarget(e) { return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig()) }
        _isAnimated() { return this._config.animation || this.tip && this.tip.classList.contains(th) }
        _isShown() { return this.tip && this.tip.classList.contains(tf) }
        _createPopper(e) {
            let n = "function" == typeof this._config.placement ? this._config.placement.call(this, e, this._element) : this._config.placement,
                i = ty[n.toUpperCase()];
            return t.createPopper(this._element, e, this._getPopperConfig(i))
        }
        _getOffset() { let { offset: e } = this._config; return "string" == typeof e ? e.split(",").map(e => Number.parseInt(e, 10)) : "function" == typeof e ? t => e(t, this._element) : e }
        _resolvePossibleFunction(e) { return "function" == typeof e ? e.call(this._element) : e }
        _getPopperConfig(e) { let t = { placement: e, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "preSetPlacement", enabled: !0, phase: "beforeMain", fn: e => { this._getTipElement().setAttribute("data-popper-placement", e.state.placement) } }] }; return {...t, ... "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig } }
        _setListeners() {
            let e = this._config.trigger.split(" ");
            for (let t of e)
                if ("click" === t) P.on(this._element, this.constructor.eventName("click"), this._config.selector, e => this.toggle(e));
                else if ("manual" !== t) {
                let n = t === tm ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                    i = t === tm ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                P.on(this._element, n, this._config.selector, e => {
                    let t = this._initializeOnDelegatedTarget(e);
                    t._activeTrigger["focusin" === e.type ? tv : tm] = !0, t._enter()
                }), P.on(this._element, i, this._config.selector, e => {
                    let t = this._initializeOnDelegatedTarget(e);
                    t._activeTrigger["focusout" === e.type ? tv : tm] = t._element.contains(e.relatedTarget), t._leave()
                })
            }
            this._hideModalHandler = () => { this._element && this.hide() }, P.on(this._element.closest(tp), tg, this._hideModalHandler), this._config.selector ? this._config = {...this._config, trigger: "manual", selector: "" } : this._fixTitle()
        }
        _fixTitle() {
            let e = this._config.originalTitle;
            e && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", e), this._element.removeAttribute("title"))
        }
        _enter() { this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(() => { this._isHovered && this.show() }, this._config.delay.show)) }
        _leave() { this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(() => { this._isHovered || this.hide() }, this._config.delay.hide)) }
        _setTimeout(e, t) { clearTimeout(this._timeout), this._timeout = setTimeout(e, t) }
        _isWithActiveTrigger() { return Object.values(this._activeTrigger).includes(!0) }
        _getConfig(e) { let t = z.getDataAttributes(this._element); for (let n of Object.keys(t)) td.has(n) && delete t[n]; return e = {...t, ... "object" == typeof e && e ? e : {} }, e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e }
        _configAfterMerge(e) { return e.container = !1 === e.container ? document.body : l(e.container), "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }), e.originalTitle = this._element.getAttribute("title") || "", "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), e }
        _getDelegateConfig() { let e = {}; for (let t in this._config) this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]); return e }
        _disposePopper() { this._popper && (this._popper.destroy(), this._popper = null) }
        static jQueryInterface(e) {
            return this.each(function() {
                let t = t$.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }
    v(t$);
    let tw = {...t$.Default, content: "", offset: [0, 8], placement: "right", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>', trigger: "click" },
        tx = {...t$.DefaultType, content: "(null|string|element|function)" };
    class tT extends t$ {
        static get Default() { return tw }
        static get DefaultType() { return tx }
        static get NAME() { return "popover" }
        _isWithContent() { return this._getTitle() || this._getContent() }
        _getContentForTemplate() { return { ".popover-header": this._getTitle(), ".popover-body": this._getContent() } }
        _getContent() { return this._resolvePossibleFunction(this._config.content) }
        static jQueryInterface(e) {
            return this.each(function() {
                let t = tT.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }
    v(tT);
    let tC = "click.bs.scrollspy",
        t_ = "active",
        tE = "[href]",
        tA = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: !1, target: null, threshold: [.1, .5, 1] },
        tk = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element", threshold: "array" };
    class tN extends R {
        constructor(e, t) { super(e, t), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }, this.refresh() }
        static get Default() { return tA }
        static get DefaultType() { return tk }
        static get NAME() { return "scrollspy" }
        refresh() { for (let e of(this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver(), this._observableSections.values())) this._observer.observe(e) }
        dispose() { this._observer.disconnect(), super.dispose() }
        _configAfterMerge(e) { return e.target = l(e.target) || document.body, e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin, "string" == typeof e.threshold && (e.threshold = e.threshold.split(",").map(e => Number.parseFloat(e))), e }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (P.off(this._config.target, tC), P.on(this._config.target, tC, tE, e => {
                let t = this._observableSections.get(e.target.hash);
                if (t) {
                    e.preventDefault();
                    let n = this._rootElement || window,
                        i = t.offsetTop - this._element.offsetTop;
                    if (n.scrollTo) return void n.scrollTo({ top: i, behavior: "smooth" });
                    n.scrollTop = i
                }
            }))
        }
        _getNewObserver() { let e = { root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin }; return new IntersectionObserver(e => this._observerCallback(e), e) }
        _observerCallback(e) {
            let t = e => this._targetLinks.get(`#${e.target.id}`),
                n = e => { this._previousScrollData.visibleEntryTop = e.target.offsetTop, this._process(t(e)) },
                i = (this._rootElement || document.documentElement).scrollTop,
                r = i >= this._previousScrollData.parentScrollTop;
            for (let s of(this._previousScrollData.parentScrollTop = i, e)) { if (!s.isIntersecting) { this._activeTarget = null, this._clearActiveClass(t(s)); continue } let o = s.target.offsetTop >= this._previousScrollData.visibleEntryTop; if (r && o) { if (n(s), !i) return } else r || o || n(s) }
        }
        _initializeTargetsAndObservables() {
            this._targetLinks = new Map, this._observableSections = new Map;
            let e = Q.find(tE, this._config.target);
            for (let t of e) {
                if (!t.hash || u(t)) continue;
                let n = Q.findOne(t.hash, this._element);
                c(n) && (this._targetLinks.set(t.hash, t), this._observableSections.set(t.hash, n))
            }
        }
        _process(e) { this._activeTarget !== e && (this._clearActiveClass(this._config.target), this._activeTarget = e, e.classList.add(t_), this._activateParents(e), P.trigger(this._element, "activate.bs.scrollspy", { relatedTarget: e })) }
        _activateParents(e) {
            if (e.classList.contains("dropdown-item")) Q.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(t_);
            else
                for (let t of Q.parents(e, ".nav, .list-group"))
                    for (let n of Q.prev(t, ".nav-link, .nav-item > .nav-link, .list-group-item")) n.classList.add(t_)
        }
        _clearActiveClass(e) { e.classList.remove(t_); let t = Q.find("[href].active", e); for (let n of t) n.classList.remove(t_) }
        static jQueryInterface(e) {
            return this.each(function() {
                let t = tN.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }
    P.on(window, "load.bs.scrollspy.data-api", () => { for (let e of Q.find('[data-bs-spy="scroll"]')) tN.getOrCreateInstance(e) }), v(tN);
    let tS = "ArrowRight",
        tL = "ArrowDown",
        tD = "active",
        tj = "fade",
        tO = "show",
        tI = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        tP = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${tI}`;
    class tH extends R {
        constructor(e) { super(e), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), P.on(this._element, "keydown.bs.tab", e => this._keydown(e))) }
        static get NAME() { return "tab" }
        show() {
            let e = this._element;
            if (this._elemIsActive(e)) return;
            let t = this._getActiveElem(),
                n = t ? P.trigger(t, "hide.bs.tab", { relatedTarget: e }) : null;
            P.trigger(e, "show.bs.tab", { relatedTarget: t }).defaultPrevented || n && n.defaultPrevented || (this._deactivate(t, e), this._activate(e, t))
        }
        _activate(e, t) { e && (e.classList.add(tD), this._activate(s(e)), this._queueCallback(() => { "tab" === e.getAttribute("role") ? (e.focus(), e.removeAttribute("tabindex"), e.setAttribute("aria-selected", !0), this._toggleDropDown(e, !0), P.trigger(e, "shown.bs.tab", { relatedTarget: t })) : e.classList.add(tO) }, e, e.classList.contains(tj))) }
        _deactivate(e, t) { e && (e.classList.remove(tD), e.blur(), this._deactivate(s(e)), this._queueCallback(() => { "tab" === e.getAttribute("role") ? (e.setAttribute("aria-selected", !1), e.setAttribute("tabindex", "-1"), this._toggleDropDown(e, !1), P.trigger(e, "hidden.bs.tab", { relatedTarget: t })) : e.classList.remove(tO) }, e, e.classList.contains(tj))) }
        _keydown(e) {
            if (!["ArrowLeft", tS, "ArrowUp", tL].includes(e.key)) return;
            e.stopPropagation(), e.preventDefault();
            let t = [tS, tL].includes(e.key),
                n = $(this._getChildren().filter(e => !u(e)), e.target, t, !0);
            n && tH.getOrCreateInstance(n).show()
        }
        _getChildren() { return Q.find(tP, this._parent) }
        _getActiveElem() { return this._getChildren().find(e => this._elemIsActive(e)) || null }
        _setInitialAttributes(e, t) { for (let n of(this._setAttributeIfNotExists(e, "role", "tablist"), t)) this._setInitialAttributesOnChild(n) }
        _setInitialAttributesOnChild(e) {
            e = this._getInnerElement(e);
            let t = this._elemIsActive(e),
                n = this._getOuterElement(e);
            e.setAttribute("aria-selected", t), n !== e && this._setAttributeIfNotExists(n, "role", "presentation"), t || e.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(e, "role", "tab"), this._setInitialAttributesOnTargetPanel(e)
        }
        _setInitialAttributesOnTargetPanel(e) {
            let t = s(e);
            t && (this._setAttributeIfNotExists(t, "role", "tabpanel"), e.id && this._setAttributeIfNotExists(t, "aria-labelledby", `#${e.id}`))
        }
        _toggleDropDown(e, t) {
            let n = this._getOuterElement(e);
            if (!n.classList.contains("dropdown")) return;
            let i = (e, i) => {
                let r = Q.findOne(e, n);
                r && r.classList.toggle(i, t)
            };
            i(".dropdown-toggle", tD), i(".dropdown-menu", tO), i(".dropdown-item", tD), n.setAttribute("aria-expanded", t)
        }
        _setAttributeIfNotExists(e, t, n) { e.hasAttribute(t) || e.setAttribute(t, n) }
        _elemIsActive(e) { return e.classList.contains(tD) }
        _getInnerElement(e) { return e.matches(tP) ? e : Q.findOne(tP, e) }
        _getOuterElement(e) { return e.closest(".nav-item, .list-group-item") || e }
        static jQueryInterface(e) {
            return this.each(function() {
                let t = tH.getOrCreateInstance(this);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }
    P.on(document, "click.bs.tab", tI, function(e) {
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(), u(this) || tH.getOrCreateInstance(this).show()
    }), P.on(window, "load.bs.tab", () => { for (let e of Q.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]')) tH.getOrCreateInstance(e) }), v(tH);
    let tM = "hide",
        tq = "show",
        tF = "showing",
        t9 = { animation: "boolean", autohide: "boolean", delay: "number" },
        tB = { animation: !0, autohide: !0, delay: 5e3 };
    class tz extends R {
        constructor(e, t) { super(e, t), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners() }
        static get Default() { return tB }
        static get DefaultType() { return t9 }
        static get NAME() { return "toast" }
        show() { P.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(tM), f(this._element), this._element.classList.add(tq, tF), this._queueCallback(() => { this._element.classList.remove(tF), P.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide() }, this._element, this._config.animation)) }
        hide() { this.isShown() && (P.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(tF), this._queueCallback(() => { this._element.classList.add(tM), this._element.classList.remove(tF, tq), P.trigger(this._element, "hidden.bs.toast") }, this._element, this._config.animation))) }
        dispose() { this._clearTimeout(), this.isShown() && this._element.classList.remove(tq), super.dispose() }
        isShown() { return this._element.classList.contains(tq) }
        _maybeScheduleHide() { this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => { this.hide() }, this._config.delay))) }
        _onInteraction(e, t) {
            switch (e.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = t;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = t
            }
            if (t) return void this._clearTimeout();
            let n = e.relatedTarget;
            this._element === n || this._element.contains(n) || this._maybeScheduleHide()
        }
        _setListeners() { P.on(this._element, "mouseover.bs.toast", e => this._onInteraction(e, !0)), P.on(this._element, "mouseout.bs.toast", e => this._onInteraction(e, !1)), P.on(this._element, "focusin.bs.toast", e => this._onInteraction(e, !0)), P.on(this._element, "focusout.bs.toast", e => this._onInteraction(e, !1)) }
        _clearTimeout() { clearTimeout(this._timeout), this._timeout = null }
        static jQueryInterface(e) {
            return this.each(function() {
                let t = tz.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            })
        }
    }
    return X(tz), v(tz), { Alert: V, Button: K, Carousel: ec, Collapse: em, Dropdown: eD, Modal: eQ, Offcanvas: tt, Popover: tT, ScrollSpy: tN, Tab: tH, Toast: tz, Tooltip: t$ }
}),
function(e, t) { "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(e, t) {
    var n = [],
        i = n.slice,
        r = n.concat,
        s = n.push,
        o = n.indexOf,
        a = {},
        l = a.toString,
        c = a.hasOwnProperty,
        u = {},
        d = "1.11.1",
        h = function(e, t) { return new h.fn.init(e, t) },
        f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        g = /-([\da-z])/gi,
        m = function(e, t) { return t.toUpperCase() };

    function v(e) {
        var t = e.length,
            n = h.type(e);
        return !("function" === n || h.isWindow(e)) && (1 === e.nodeType && !!t || "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    h.fn = h.prototype = {
        jquery: d,
        constructor: h,
        selector: "",
        length: 0,
        toArray: function() { return i.call(this) },
        get: function(e) { return null != e ? 0 > e ? this[e + this.length] : this[e] : i.call(this) },
        pushStack: function(e) { var t = h.merge(this.constructor(), e); return t.prevObject = this, t.context = this.context, t },
        each: function(e, t) { return h.each(this, e, t) },
        map: function(e) { return this.pushStack(h.map(this, function(t, n) { return e.call(t, n, t) })) },
        slice: function() { return this.pushStack(i.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() { return this.prevObject || this.constructor(null) },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, h.extend = h.fn.extend = function() {
        var e, t, n, i, r, s, o = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof o && (c = o, o = arguments[a] || {}, a++), "object" == typeof o || h.isFunction(o) || (o = {}), a === l && (o = this, a--); l > a; a++)
            if (null != (r = arguments[a]))
                for (i in r) e = o[i], o !== (n = r[i]) && (c && n && (h.isPlainObject(n) || (t = h.isArray(n))) ? (t ? (t = !1, s = e && h.isArray(e) ? e : []) : s = e && h.isPlainObject(e) ? e : {}, o[i] = h.extend(c, s, n)) : void 0 !== n && (o[i] = n));
        return o
    }, h.extend({
        expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) { throw Error(e) },
        noop: function() {},
        isFunction: function(e) { return "function" === h.type(e) },
        isArray: Array.isArray || function(e) { return "array" === h.type(e) },
        isWindow: function(e) { return null != e && e == e.window },
        isNumeric: function(e) { return !h.isArray(e) && e - parseFloat(e) >= 0 },
        isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== h.type(e) || e.nodeType || h.isWindow(e)) return !1;
            try { if (e.constructor && !c.call(e, "constructor") && !c.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (n) { return !1 }
            if (u.ownLast)
                for (t in e) return c.call(e, t);
            for (t in e);
            return void 0 === t || c.call(e, t)
        },
        type: function(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? a[l.call(e)] || "object" : typeof e },
        globalEval: function(t) { t && h.trim(t) && (e.execScript || function(t) { e.eval.call(e, t) })(t) },
        camelCase: function(e) { return e.replace(p, "ms-").replace(g, m) },
        nodeName: function(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() },
        each: function(e, t, n) {
            var i, r = 0,
                s = e.length,
                o = v(e);
            if (n) {
                if (o)
                    for (; s > r && !1 !== (i = t.apply(e[r], n)); r++);
                else
                    for (r in e)
                        if (!1 === (i = t.apply(e[r], n))) break
            } else if (o)
                for (; s > r && !1 !== (i = t.call(e[r], r, e[r])); r++);
            else
                for (r in e)
                    if (!1 === (i = t.call(e[r], r, e[r]))) break; return e
        },
        trim: function(e) { return null == e ? "" : (e + "").replace(f, "") },
        makeArray: function(e, t) { var n = t || []; return null != e && (v(Object(e)) ? h.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (o) return o.call(t, e, n);
                for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; n > i;) e[r++] = t[i++];
            if (n != n)
                for (; void 0 !== t[i];) e[r++] = t[i++];
            return e.length = r, e
        },
        grep: function(e, t, n) { for (var i, r = [], s = 0, o = e.length, a = !n; o > s; s++)(i = !t(e[s], s)) !== a && r.push(e[s]); return r },
        map: function(e, t, n) {
            var i, s = 0,
                o = e.length,
                a = v(e),
                l = [];
            if (a)
                for (; o > s; s++) null != (i = t(e[s], s, n)) && l.push(i);
            else
                for (s in e) null != (i = t(e[s], s, n)) && l.push(i);
            return r.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) { var n, r, s; return "string" == typeof t && (s = e[t], t = e, e = s), h.isFunction(e) ? (n = i.call(arguments, 2), (r = function() { return e.apply(t || this, n.concat(i.call(arguments))) }).guid = e.guid = e.guid || h.guid++, r) : void 0 },
        now: function() { return +new Date },
        support: u
    }), h.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) { a["[object " + t + "]"] = t.toLowerCase() });
    var y = function(e) {
        var t, n, i, r, s, o, a, l, c, u, d, h, f, p, g, m, v, y, b, $ = "sizzle" + -new Date,
            w = e.document,
            x = 0,
            T = 0,
            C = eo(),
            _ = eo(),
            E = eo(),
            A = function(e, t) { return e === t && (d = !0), 0 },
            k = "undefined",
            N = -2147483648,
            S = {}.hasOwnProperty,
            L = [],
            D = L.pop,
            j = L.push,
            O = L.push,
            I = L.slice,
            P = L.indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            },
            H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            q = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            F = q.replace("w", "w#"),
            B = "\\[" + M + "*(" + q + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + M + "*\\]",
            z = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)",
            W = RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            R = RegExp("^" + M + "*," + M + "*"),
            X = RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            V = RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            Y = RegExp(z),
            K = RegExp("^" + F + "$"),
            Q = { ID: RegExp("^#(" + q + ")"), CLASS: RegExp("^\\.(" + q + ")"), TAG: RegExp("^(" + q.replace("w", "w*") + ")"), ATTR: RegExp("^" + B), PSEUDO: RegExp("^" + z), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: RegExp("^(?:" + H + ")$", "i"), needsContext: RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
            U = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            G = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            et = /'|\\/g,
            en = RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ei = function(e, t, n) { var i = "0x" + t - 65536; return i != i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320) };
        try { O.apply(L = I.call(w.childNodes), w.childNodes), L[w.childNodes.length].nodeType } catch (er) {
            O = {
                apply: L.length ? function(e, t) { j.apply(e, I.call(t)) } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function es(e, t, i, r) {
            var s, a, c, u, d, p, v, y, x, T;
            if ((t ? t.ownerDocument || t : w) !== f && h(t), t = t || f, i = i || [], !e || "string" != typeof e) return i;
            if (1 !== (u = t.nodeType) && 9 !== u) return [];
            if (g && !r) {
                if (s = Z.exec(e)) { if (c = s[1]) { if (9 === u) { if (!(a = t.getElementById(c)) || !a.parentNode) return i; if (a.id === c) return i.push(a), i } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(c)) && b(t, a) && a.id === c) return i.push(a), i } else { if (s[2]) return O.apply(i, t.getElementsByTagName(e)), i; if ((c = s[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(i, t.getElementsByClassName(c)), i } }
                if (n.qsa && (!m || !m.test(e))) {
                    if (y = v = $, x = t, T = 9 === u && e, 1 === u && "object" !== t.nodeName.toLowerCase()) {
                        for (p = o(e), (v = t.getAttribute("id")) ? y = v.replace(et, "\\$&") : t.setAttribute("id", y), y = "[id='" + y + "'] ", d = p.length; d--;) p[d] = y + em(p[d]);
                        x = ee.test(e) && ep(t.parentNode) || t, T = p.join(",")
                    }
                    if (T) try { return O.apply(i, x.querySelectorAll(T)), i } catch (C) {} finally { v || t.removeAttribute("id") }
                }
            }
            return l(e.replace(W, "$1"), t, i, r)
        }

        function eo() {
            var e = [];

            function t(n, r) { return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r }
            return t
        }

        function ea(e) { return e[$] = !0, e }

        function el(e) { var t = f.createElement("div"); try { return !!e(t) } catch (n) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function ec(e, t) { for (var n = e.split("|"), r = e.length; r--;) i.attrHandle[n[r]] = t }

        function eu(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || N) - (~e.sourceIndex || N);
            if (i) return i;
            if (n) {
                for (; n = n.nextSibling;)
                    if (n === t) return -1
            }
            return e ? 1 : -1
        }

        function ed(e) { return function(t) { return "input" === t.nodeName.toLowerCase() && t.type === e } }

        function eh(e) { return function(t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } }

        function ef(e) { return ea(function(t) { return t = +t, ea(function(n, i) { for (var r, s = e([], n.length, t), o = s.length; o--;) n[r = s[o]] && (n[r] = !(i[r] = n[r])) }) }) }

        function ep(e) { return e && typeof e.getElementsByTagName !== k && e }
        for (t in n = es.support = {}, s = es.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName }, h = es.setDocument = function(e) {
                var t, r = e ? e.ownerDocument || e : w,
                    o = r.defaultView;
                return r !== f && 9 === r.nodeType && r.documentElement ? (f = r, p = r.documentElement, g = !s(r), o && o !== o.top && (o.addEventListener ? o.addEventListener("unload", function() { h() }, !1) : o.attachEvent && o.attachEvent("onunload", function() { h() })), n.attributes = el(function(e) { return e.className = "i", !e.getAttribute("className") }), n.getElementsByTagName = el(function(e) { return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length }), n.getElementsByClassName = G.test(r.getElementsByClassName) && el(function(e) { return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length }), n.getById = el(function(e) { return p.appendChild(e).id = $, !r.getElementsByName || !r.getElementsByName($).length }), n.getById ? (i.find.ID = function(e, t) { if (typeof t.getElementById !== k && g) { var n = t.getElementById(e); return n && n.parentNode ? [n] : [] } }, i.filter.ID = function(e) { var t = e.replace(en, ei); return function(e) { return e.getAttribute("id") === t } }) : (delete i.find.ID, i.filter.ID = function(e) { var t = e.replace(en, ei); return function(e) { var n = typeof e.getAttributeNode !== k && e.getAttributeNode("id"); return n && n.value === t } }), i.find.TAG = n.getElementsByTagName ? function(e, t) { return typeof t.getElementsByTagName !== k ? t.getElementsByTagName(e) : void 0 } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        s = t.getElementsByTagName(e);
                    if ("*" === e) { for (; n = s[r++];) 1 === n.nodeType && i.push(n); return i }
                    return s
                }, i.find.CLASS = n.getElementsByClassName && function(e, t) { return typeof t.getElementsByClassName !== k && g ? t.getElementsByClassName(e) : void 0 }, v = [], m = [], (n.qsa = G.test(r.querySelectorAll)) && (el(function(e) { e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && m.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + M + "*(?:value|" + H + ")"), e.querySelectorAll(":checked").length || m.push(":checked") }), el(function(e) {
                    var t = r.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + M + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (n.matchesSelector = G.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && el(function(e) { n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), v.push("!=", z) }), m = m.length && RegExp(m.join("|")), v = v.length && RegExp(v.join("|")), b = (t = G.test(p.compareDocumentPosition)) || G.test(p.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t) {
                        for (; t = t.parentNode;)
                            if (t === e) return !0
                    }
                    return !1
                }, A = t ? function(e, t) { if (e === t) return d = !0, 0; var i = !e.compareDocumentPosition - !t.compareDocumentPosition; return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === r || e.ownerDocument === w && b(w, e) ? -1 : t === r || t.ownerDocument === w && b(w, t) ? 1 : u ? P.call(u, e) - P.call(u, t) : 0 : 4 & i ? -1 : 1) } : function(e, t) {
                    if (e === t) return d = !0, 0;
                    var n, i = 0,
                        s = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        l = [t];
                    if (!s || !o) return e === r ? -1 : t === r ? 1 : s ? -1 : o ? 1 : u ? P.call(u, e) - P.call(u, t) : 0;
                    if (s === o) return eu(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (; a[i] === l[i];) i++;
                    return i ? eu(a[i], l[i]) : a[i] === w ? -1 : l[i] === w ? 1 : 0
                }, r) : f
            }, es.matches = function(e, t) { return es(e, null, null, t) }, es.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== f && h(e), t = t.replace(V, "='$1']"), !(!n.matchesSelector || !g || v && v.test(t) || m && m.test(t))) try { var i = y.call(e, t); if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i } catch (r) {}
                return es(t, f, null, [e]).length > 0
            }, es.contains = function(e, t) { return (e.ownerDocument || e) !== f && h(e), b(e, t) }, es.attr = function(e, t) {
                (e.ownerDocument || e) !== f && h(e);
                var r = i.attrHandle[t.toLowerCase()],
                    s = r && S.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
                return void 0 !== s ? s : n.attributes || !g ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
            }, es.error = function(e) { throw Error("Syntax error, unrecognized expression: " + e) }, es.uniqueSort = function(e) {
                var t, i = [],
                    r = 0,
                    s = 0;
                if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(A), d) { for (; t = e[s++];) t === e[s] && (r = i.push(s)); for (; r--;) e.splice(i[r], 1) }
                return u = null, e
            }, r = es.getText = function(e) {
                var t, n = "",
                    i = 0,
                    s = e.nodeType;
                if (s) { if (1 === s || 9 === s || 11 === s) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += r(e) } else if (3 === s || 4 === s) return e.nodeValue } else
                    for (; t = e[i++];) n += r(t);
                return n
            }, (i = es.selectors = {
                cacheLength: 50,
                createPseudo: ea,
                match: Q,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(e) { return e[1] = e[1].replace(en, ei), e[3] = (e[3] || e[4] || e[5] || "").replace(en, ei), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || es.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && es.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Y.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
                filter: {
                    TAG: function(e) { var t = e.replace(en, ei).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                    CLASS: function(e) { var t = C[e + " "]; return t || (t = RegExp("(^|" + M + ")" + e + "(" + M + "|$)"), C(e, function(e) { return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== k && e.getAttribute("class") || "") })) },
                    ATTR: function(e, t, n) { return function(i) { var r = es.attr(i, e); return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-")) } },
                    CHILD: function(e, t, n, i, r) {
                        var s = "nth" !== e.slice(0, 3),
                            o = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === i && 0 === r ? function(e) { return !!e.parentNode } : function(t, n, l) {
                            var c, u, d, h, f, p, g = s !== o ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = a && t.nodeName.toLowerCase(),
                                y = !l && !a;
                            if (m) {
                                if (s) {
                                    for (; g;) {
                                        for (d = t; d = d[g];)
                                            if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        p = g = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [o ? m.firstChild : m.lastChild], o && y) {
                                    for (f = (c = (u = m[$] || (m[$] = {}))[e] || [])[0] === x && c[1], h = c[0] === x && c[2], d = f && m.childNodes[f]; d = ++f && d && d[g] || (h = f = 0) || p.pop();)
                                        if (1 === d.nodeType && ++h && d === t) { u[e] = [x, f, h]; break }
                                } else if (y && (c = (t[$] || (t[$] = {}))[e]) && c[0] === x) h = c[1];
                                else
                                    for (;
                                        (d = ++f && d && d[g] || (h = f = 0) || p.pop()) && (!((a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) && ++h) || (y && ((d[$] || (d[$] = {}))[e] = [x, h]), d !== t)););
                                return (h -= r) === i || h % i == 0 && h / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) { var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || es.error("unsupported pseudo: " + e); return r[$] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ea(function(e, n) { for (var i, s = r(e, t), o = s.length; o--;) e[i = P.call(e, s[o])] = !(n[i] = s[o]) }) : function(e) { return r(e, 0, n) }) : r }
                },
                pseudos: {
                    not: ea(function(e) {
                        var t = [],
                            n = [],
                            i = a(e.replace(W, "$1"));
                        return i[$] ? ea(function(e, t, n, r) { for (var s, o = i(e, null, r, []), a = e.length; a--;)(s = o[a]) && (e[a] = !(t[a] = s)) }) : function(e, r, s) { return t[0] = e, i(t, null, s, n), !n.pop() }
                    }),
                    has: ea(function(e) { return function(t) { return es(e, t).length > 0 } }),
                    contains: ea(function(e) { return function(t) { return (t.textContent || t.innerText || r(t)).indexOf(e) > -1 } }),
                    lang: ea(function(e) {
                        return K.test(e || "") || es.error("unsupported lang: " + e), e = e.replace(en, ei).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id },
                    root: function(e) { return e === p },
                    focus: function(e) { return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                    enabled: function(e) { return !1 === e.disabled },
                    disabled: function(e) { return !0 === e.disabled },
                    checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                    selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) { return !i.pseudos.empty(e) },
                    header: function(e) { return J.test(e.nodeName) },
                    input: function(e) { return U.test(e.nodeName) },
                    button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                    text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) },
                    first: ef(function() { return [0] }),
                    last: ef(function(e, t) { return [t - 1] }),
                    eq: ef(function(e, t, n) { return [0 > n ? n + t : n] }),
                    even: ef(function(e, t) { for (var n = 0; t > n; n += 2) e.push(n); return e }),
                    odd: ef(function(e, t) { for (var n = 1; t > n; n += 2) e.push(n); return e }),
                    lt: ef(function(e, t, n) { for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i); return e }),
                    gt: ef(function(e, t, n) { for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i); return e })
                }
            }).pseudos.nth = i.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) i.pseudos[t] = ed(t);
        for (t in { submit: !0, reset: !0 }) i.pseudos[t] = eh(t);

        function eg() {}

        function em(e) { for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value; return i }

        function ev(e, t, n) {
            var i = t.dir,
                r = n && "parentNode" === i,
                s = T++;
            return t.first ? function(t, n, s) {
                for (; t = t[i];)
                    if (1 === t.nodeType || r) return e(t, n, s)
            } : function(t, n, o) {
                var a, l, c = [x, s];
                if (o) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || r) && e(t, n, o)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) { if ((a = (l = t[$] || (t[$] = {}))[i]) && a[0] === x && a[1] === s) return c[2] = a[2]; if (l[i] = c, c[2] = e(t, n, o)) return !0 }
            }
        }

        function ey(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function e8(e, t, n, i, r) { for (var s, o = [], a = 0, l = e.length, c = null != t; l > a; a++)(s = e[a]) && (!n || n(s, i, r)) && (o.push(s), c && t.push(a)); return o }

        function eb(e, t, n, i, r, s) {
            return i && !i[$] && (i = eb(i)), r && !r[$] && (r = eb(r, s)), ea(function(s, o, a, l) {
                var c, u, d, h = [],
                    f = [],
                    p = o.length,
                    g = s || function e(t, n, i) { for (var r = 0, s = n.length; s > r; r++) es(t, n[r], i); return i }(t || "*", a.nodeType ? [a] : a, []),
                    m = e && (s || !t) ? e8(g, h, e, a, l) : g,
                    v = n ? r || (s ? e : p || i) ? [] : o : m;
                if (n && n(m, v, a, l), i)
                    for (c = e8(v, f), i(c, [], a, l), u = c.length; u--;)(d = c[u]) && (v[f[u]] = !(m[f[u]] = d));
                if (s) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = v.length; u--;)(d = v[u]) && c.push(m[u] = d);
                            r(null, v = [], c, l)
                        }
                        for (u = v.length; u--;)(d = v[u]) && (c = r ? P.call(s, d) : h[u]) > -1 && (s[c] = !(o[c] = d))
                    }
                } else v = e8(v === o ? v.splice(p, v.length) : v), r ? r(null, o, v, l) : O.apply(o, v)
            })
        }

        function e$(e) {
            for (var t, n, r, s = e.length, o = i.relative[e[0].type], a = o || i.relative[" "], l = o ? 1 : 0, u = ev(function(e) { return e === t }, a, !0), d = ev(function(e) { return P.call(t, e) > -1 }, a, !0), h = [function(e, n, i) { return !o && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i)) }]; s > l; l++)
                if (n = i.relative[e[l].type]) h = [ev(ey(h), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[$]) { for (r = ++l; s > r && !i.relative[e[r].type]; r++); return eb(l > 1 && ey(h), l > 1 && em(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(W, "$1"), n, r > l && e$(e.slice(l, r)), s > r && e$(e = e.slice(r)), s > r && em(e)) }
                    h.push(n)
                }
            return ey(h)
        }
        return eg.prototype = i.filters = i.pseudos, i.setFilters = new eg, o = es.tokenize = function(e, t) { var n, r, s, o, a, l, c, u = _[e + " "]; if (u) return t ? 0 : u.slice(0); for (a = e, l = [], c = i.preFilter; a;) { for (o in (!n || (r = R.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(s = [])), n = !1, (r = X.exec(a)) && (n = r.shift(), s.push({ value: n, type: r[0].replace(W, " ") }), a = a.slice(n.length)), i.filter)(r = Q[o].exec(a)) && (!c[o] || (r = c[o](r))) && (n = r.shift(), s.push({ value: n, type: o, matches: r }), a = a.slice(n.length)); if (!n) break } return t ? a.length : a ? es.error(e) : _(e, l).slice(0) }, a = es.compile = function(e, t) {
            var n, r, s, a, l, u, d = [],
                h = [],
                p = E[e + " "];
            if (!p) {
                for (t || (t = o(e)), u = t.length; u--;)(p = e$(t[u]))[$] ? d.push(p) : h.push(p);
                (p = E(e, (n = h, s = (r = d).length > 0, a = n.length > 0, l = function(e, t, o, l, u) {
                    var d, h, p, g = 0,
                        m = "0",
                        v = e && [],
                        y = [],
                        b = c,
                        $ = e || a && i.find.TAG("*", u),
                        w = x += null == b ? 1 : Math.random() || .1,
                        T = $.length;
                    for (u && (c = t !== f && t); m !== T && null != (d = $[m]); m++) {
                        if (a && d) {
                            for (h = 0; p = n[h++];)
                                if (p(d, t, o)) { l.push(d); break }
                            u && (x = w)
                        }
                        s && ((d = !p && d) && g--, e && v.push(d))
                    }
                    if (g += m, s && m !== g) {
                        for (h = 0; p = r[h++];) p(v, y, t, o);
                        if (e) {
                            if (g > 0)
                                for (; m--;) v[m] || y[m] || (y[m] = D.call(l));
                            y = e8(y)
                        }
                        O.apply(l, y), u && !e && y.length > 0 && g + r.length > 1 && es.uniqueSort(l)
                    }
                    return u && (x = w, c = b), v
                }, s ? ea(l) : l))).selector = e
            }
            return p
        }, l = es.select = function(e, t, r, s) {
            var l, c, u, d, h, f = "function" == typeof e && e,
                p = !s && o(e = f.selector || e);
            if (r = r || [], 1 === p.length) {
                if ((c = p[0] = p[0].slice(0)).length > 2 && "ID" === (u = c[0]).type && n.getById && 9 === t.nodeType && g && i.relative[c[1].type]) {
                    if (!(t = (i.find.ID(u.matches[0].replace(en, ei), t) || [])[0])) return r;
                    f && (t = t.parentNode), e = e.slice(c.shift().value.length)
                }
                for (l = Q.needsContext.test(e) ? 0 : c.length; l-- && (u = c[l], !i.relative[d = u.type]);)
                    if ((h = i.find[d]) && (s = h(u.matches[0].replace(en, ei), ee.test(c[0].type) && ep(t.parentNode) || t))) { if (c.splice(l, 1), !(e = s.length && em(c))) return O.apply(r, s), r; break }
            }
            return (f || a(e, p))(s, t, !g, r, ee.test(e) && ep(t.parentNode) || t), r
        }, n.sortStable = $.split("").sort(A).join("") === $, n.detectDuplicates = !!d, h(), n.sortDetached = el(function(e) { return 1 & e.compareDocumentPosition(f.createElement("div")) }), el(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || ec("type|href|height|width", function(e, t, n) { return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), n.attributes && el(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || ec("value", function(e, t, n) { return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue }), el(function(e) { return null == e.getAttribute("disabled") }) || ec(H, function(e, t, n) { var i; return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null }), es
    }(e);
    h.find = y, h.expr = y.selectors, h.expr[":"] = h.expr.pseudos, h.unique = y.uniqueSort, h.text = y.getText, h.isXMLDoc = y.isXML, h.contains = y.contains;
    var b = h.expr.match.needsContext,
        $ = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;

    function x(e, t, n) {
        if (h.isFunction(t)) return h.grep(e, function(e, i) { return !!t.call(e, i, e) !== n });
        if (t.nodeType) return h.grep(e, function(e) { return e === t !== n });
        if ("string" == typeof t) {
            if (w.test(t)) return h.filter(t, e, n);
            t = h.filter(t, e)
        }
        return h.grep(e, function(e) { return h.inArray(e, t) >= 0 !== n })
    }
    h.filter = function(e, t, n) { var i = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? h.find.matchesSelector(i, e) ? [i] : [] : h.find.matches(e, h.grep(t, function(e) { return 1 === e.nodeType })) }, h.fn.extend({
        find: function(e) {
            var t, n = [],
                i = this,
                r = i.length;
            if ("string" != typeof e) return this.pushStack(h(e).filter(function() {
                for (t = 0; r > t; t++)
                    if (h.contains(i[t], this)) return !0
            }));
            for (t = 0; r > t; t++) h.find(e, i[t], n);
            return (n = this.pushStack(r > 1 ? h.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) { return this.pushStack(x(this, e || [], !1)) },
        not: function(e) { return this.pushStack(x(this, e || [], !0)) },
        is: function(e) { return !!x(this, "string" == typeof e && b.test(e) ? h(e) : e || [], !1).length }
    });
    var T, C = e.document,
        _ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (h.fn.init = function(e, t) {
        var n, i;
        if (!e) return this;
        if ("string" == typeof e) {
            if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : _.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || T).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof h ? t[0] : t, h.merge(this, h.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), $.test(n[1]) && h.isPlainObject(t))
                    for (n in t) h.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            if ((i = C.getElementById(n[2])) && i.parentNode) {
                if (i.id !== n[2]) return T.find(e);
                this.length = 1, this[0] = i
            }
            return this.context = C, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : h.isFunction(e) ? void 0 !== T.ready ? T.ready(e) : e(h) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), h.makeArray(e, this))
    }).prototype = h.fn, T = h(C);
    var E = /^(?:parents|prev(?:Until|All))/,
        A = { children: !0, contents: !0, next: !0, prev: !0 };

    function k(e, t) { do e = e[t]; while (e && 1 !== e.nodeType); return e }
    h.extend({ dir: function(e, t, n) { for (var i = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !h(r).is(n));) 1 === r.nodeType && i.push(r), r = r[t]; return i }, sibling: function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n } }), h.fn.extend({
        has: function(e) {
            var t, n = h(e, this),
                i = n.length;
            return this.filter(function() {
                for (t = 0; i > t; t++)
                    if (h.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, s = [], o = b.test(e) || "string" != typeof e ? h(e, t || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && h.find.matchesSelector(n, e))) { s.push(n); break }
            return this.pushStack(s.length > 1 ? h.unique(s) : s)
        },
        index: function(e) { return e ? "string" == typeof e ? h.inArray(this[0], h(e)) : h.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(e, t) { return this.pushStack(h.unique(h.merge(this.get(), h(e, t)))) },
        addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
    }), h.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return h.dir(e, "parentNode") }, parentsUntil: function(e, t, n) { return h.dir(e, "parentNode", n) }, next: function(e) { return k(e, "nextSibling") }, prev: function(e) { return k(e, "previousSibling") }, nextAll: function(e) { return h.dir(e, "nextSibling") }, prevAll: function(e) { return h.dir(e, "previousSibling") }, nextUntil: function(e, t, n) { return h.dir(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return h.dir(e, "previousSibling", n) }, siblings: function(e) { return h.sibling((e.parentNode || {}).firstChild, e) }, children: function(e) { return h.sibling(e.firstChild) }, contents: function(e) { return h.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : h.merge([], e.childNodes) } }, function(e, t) { h.fn[e] = function(n, i) { var r = h.map(this, t, n); return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = h.filter(i, r)), this.length > 1 && (A[e] || (r = h.unique(r)), E.test(e) && (r = r.reverse())), this.pushStack(r) } });
    var N = /\S+/g,
        S = {};

    function L() { C.addEventListener ? (C.removeEventListener("DOMContentLoaded", D, !1), e.removeEventListener("load", D, !1)) : (C.detachEvent("onreadystatechange", D), e.detachEvent("onload", D)) }

    function D() {
        (C.addEventListener || "load" === event.type || "complete" === C.readyState) && (L(), h.ready())
    }
    h.Callbacks = function(e) {
        e = "string" == typeof e ? S[e] || (n = S[t = e] = {}, h.each(t.match(N) || [], function(e, t) { n[t] = !0 }), n) : h.extend({}, e);
        var t, n, i, r, s, o, a, l, c = [],
            u = !e.once && [],
            d = function(t) {
                for (r = e.memory && t, s = !0, a = l || 0, l = 0, o = c.length, i = !0; c && o > a; a++)
                    if (!1 === c[a].apply(t[0], t[1]) && e.stopOnFalse) { r = !1; break }
                i = !1, c && (u ? u.length && d(u.shift()) : r ? c = [] : f.disable())
            },
            f = {
                add: function() {
                    if (c) {
                        var t = c.length;
                        (function t(n) { h.each(n, function(n, i) { var r = h.type(i); "function" === r ? e.unique && f.has(i) || c.push(i) : i && i.length && "string" !== r && t(i) }) })(arguments), i ? o = c.length : r && (l = t, d(r))
                    }
                    return this
                },
                remove: function() {
                    return c && h.each(arguments, function(e, t) {
                        for (var n;
                            (n = h.inArray(t, c, n)) > -1;) c.splice(n, 1), i && (o >= n && o--, a >= n && a--)
                    }), this
                },
                has: function(e) { return e ? h.inArray(e, c) > -1 : !(!c || !c.length) },
                empty: function() { return c = [], o = 0, this },
                disable: function() { return c = u = r = void 0, this },
                disabled: function() { return !c },
                lock: function() { return u = void 0, r || f.disable(), this },
                locked: function() { return !u },
                fireWith: function(e, t) { return c && (!s || u) && (t = [e, (t = t || []).slice ? t.slice() : t], i ? u.push(t) : d(t)), this },
                fire: function() { return f.fireWith(this, arguments), this },
                fired: function() { return !!s }
            };
        return f
    }, h.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", h.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", h.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", h.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() { return n },
                    always: function() { return r.done(arguments).fail(arguments), this },
                    then: function() {
                        var e = arguments;
                        return h.Deferred(function(n) {
                            h.each(t, function(t, s) {
                                var o = h.isFunction(e[t]) && e[t];
                                r[s[1]](function() {
                                    var e = o && o.apply(this, arguments);
                                    e && h.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === i ? n.promise() : this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) { return null != e ? h.extend(e, i) : i }
                },
                r = {};
            return i.pipe = i.then, h.each(t, function(e, s) {
                var o = s[2],
                    a = s[3];
                i[s[1]] = o.add, a && o.add(function() { n = a }, t[1 ^ e][2].disable, t[2][2].lock), r[s[0]] = function() { return r[s[0] + "With"](this === r ? i : this, arguments), this }, r[s[0] + "With"] = o.fireWith
            }), i.promise(r), e && e.call(r, r), r
        },
        when: function(e) {
            var t, n, r, s = 0,
                o = i.call(arguments),
                a = o.length,
                l = 1 !== a || e && h.isFunction(e.promise) ? a : 0,
                c = 1 === l ? e : h.Deferred(),
                u = function(e, n, r) { return function(s) { n[e] = this, r[e] = arguments.length > 1 ? i.call(arguments) : s, r === t ? c.notifyWith(n, r) : --l || c.resolveWith(n, r) } };
            if (a > 1)
                for (t = Array(a), n = Array(a), r = Array(a); a > s; s++) o[s] && h.isFunction(o[s].promise) ? o[s].promise().done(u(s, r, o)).fail(c.reject).progress(u(s, n, t)) : --l;
            return l || c.resolveWith(r, o), c.promise()
        }
    }), h.fn.ready = function(e) { return h.ready.promise().done(e), this }, h.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) { e ? h.readyWait++ : h.ready(!0) },
        ready: function(e) {
            if (!0 === e ? !--h.readyWait : !h.isReady) {
                if (!C.body) return setTimeout(h.ready);
                h.isReady = !0, !0 !== e && --h.readyWait > 0 || (j.resolveWith(C, [h]), h.fn.triggerHandler && (h(C).triggerHandler("ready"), h(C).off("ready")))
            }
        }
    }), h.ready.promise = function(t) {
        if (!j) {
            if (j = h.Deferred(), "complete" === C.readyState) setTimeout(h.ready);
            else if (C.addEventListener) C.addEventListener("DOMContentLoaded", D, !1), e.addEventListener("load", D, !1);
            else {
                C.attachEvent("onreadystatechange", D), e.attachEvent("onload", D);
                var n = !1;
                try { n = null == e.frameElement && C.documentElement } catch (i) {}
                n && n.doScroll && function e() {
                    if (!h.isReady) {
                        try { n.doScroll("left") } catch (t) { return setTimeout(e, 50) }
                        L(), h.ready()
                    }
                }()
            }
        }
        return j.promise(t)
    };
    var j, O, I = "undefined";
    for (O in h(u)) break;
    u.ownLast = "0" !== O, u.inlineBlockNeedsLayout = !1, h(function() {
            var e, t, n, i;
            (n = C.getElementsByTagName("body")[0]) && n.style && (t = C.createElement("div"), (i = C.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== I && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", u.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function() {
            var e = C.createElement("div");
            if (null == u.deleteExpando) { u.deleteExpando = !0; try { delete e.test } catch (t) { u.deleteExpando = !1 } }
            e = null
        }(), h.acceptData = function(e) {
            var t = h.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
        };
    var P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        H = /([A-Z])/g;

    function M(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(H, "-$1").toLowerCase();
            if ("string" == typeof(n = e.getAttribute(i))) {
                try { n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : P.test(n) ? h.parseJSON(n) : n) } catch (r) {}
                h.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function q(e) {
        var t;
        for (t in e)
            if (("data" !== t || !h.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function F(e, t, i, r) {
        if (h.acceptData(e)) {
            var s, o, a = h.expando,
                l = e.nodeType,
                c = l ? h.cache : e,
                u = l ? e[a] : e[a] && a;
            if (u && c[u] && (r || c[u].data) || void 0 !== i || "string" != typeof t) return u || (u = l ? e[a] = n.pop() || h.guid++ : a), c[u] || (c[u] = l ? {} : { toJSON: h.noop }), ("object" == typeof t || "function" == typeof t) && (r ? c[u] = h.extend(c[u], t) : c[u].data = h.extend(c[u].data, t)), o = c[u], r || (o.data || (o.data = {}), o = o.data), void 0 !== i && (o[h.camelCase(t)] = i), "string" == typeof t ? null == (s = o[t]) && (s = o[h.camelCase(t)]) : s = o, s
        }
    }

    function B(e, t, n) {
        if (h.acceptData(e)) {
            var i, r, s = e.nodeType,
                o = s ? h.cache : e,
                a = s ? e[h.expando] : h.expando;
            if (o[a]) { if (t && (i = n ? o[a] : o[a].data)) { for (r = (t = h.isArray(t) ? t.concat(h.map(t, h.camelCase)) : (t in i) ? [t] : ((t = h.camelCase(t)) in i) ? [t] : t.split(" ")).length; r--;) delete i[t[r]]; if (n ? !q(i) : !h.isEmptyObject(i)) return }(n || (delete o[a].data, q(o[a]))) && (s ? h.cleanData([e], !0) : u.deleteExpando || o != o.window ? delete o[a] : o[a] = null) }
        }
    }
    h.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(e) { return !!(e = e.nodeType ? h.cache[e[h.expando]] : e[h.expando]) && !q(e) }, data: function(e, t, n) { return F(e, t, n) }, removeData: function(e, t) { return B(e, t) }, _data: function(e, t, n) { return F(e, t, n, !0) }, _removeData: function(e, t) { return B(e, t, !0) } }), h.fn.extend({
        data: function(e, t) {
            var n, i, r, s = this[0],
                o = s && s.attributes;
            if (void 0 === e) {
                if (this.length && (r = h.data(s), 1 === s.nodeType && !h._data(s, "parsedAttrs"))) {
                    for (n = o.length; n--;) o[n] && 0 === (i = o[n].name).indexOf("data-") && M(s, i = h.camelCase(i.slice(5)), r[i]);
                    h._data(s, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() { h.data(this, e) }) : arguments.length > 1 ? this.each(function() { h.data(this, e, t) }) : s ? M(s, e, h.data(s, e)) : void 0
        },
        removeData: function(e) { return this.each(function() { h.removeData(this, e) }) }
    }), h.extend({
        queue: function(e, t, n) { var i; return e ? (t = (t || "fx") + "queue", i = h._data(e, t), n && (!i || h.isArray(n) ? i = h._data(e, t, h.makeArray(n)) : i.push(n)), i || []) : void 0 },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = h.queue(e, t),
                i = n.length,
                r = n.shift(),
                s = h._queueHooks(e, t),
                o = function() { h.dequeue(e, t) };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete s.stop, r.call(e, o, s)), !i && s && s.empty.fire()
        },
        _queueHooks: function(e, t) { var n = t + "queueHooks"; return h._data(e, n) || h._data(e, n, { empty: h.Callbacks("once memory").add(function() { h._removeData(e, t + "queue"), h._removeData(e, n) }) }) }
    }), h.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? h.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = h.queue(this, e, t);
                h._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && h.dequeue(this, e)
            })
        },
        dequeue: function(e) { return this.each(function() { h.dequeue(this, e) }) },
        clearQueue: function(e) { return this.queue(e || "fx", []) },
        promise: function(e, t) {
            var n, i = 1,
                r = h.Deferred(),
                s = this,
                o = this.length,
                a = function() {--i || r.resolveWith(s, [s]) };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)(n = h._data(s[o], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        W = ["Top", "Right", "Bottom", "Left"],
        R = function(e, t) { return e = t || e, "none" === h.css(e, "display") || !h.contains(e.ownerDocument, e) },
        X = h.access = function(e, t, n, i, r, s, o) {
            var a = 0,
                l = e.length,
                c = null == n;
            if ("object" === h.type(n))
                for (a in r = !0, n) h.access(e, t, a, n[a], !0, s, o);
            else if (void 0 !== i && (r = !0, h.isFunction(i) || (o = !0), c && (o ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) { return c.call(h(e), n) })), t))
                for (; l > a; a++) t(e[a], n, o ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : c ? t.call(e) : l ? t(e[0], n) : s
        },
        V = /^(?:checkbox|radio)$/i;
    (function() {
        var e = C.createElement("input"),
            t = C.createElement("div"),
            n = C.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", u.leadingWhitespace = 3 === t.firstChild.nodeType, u.tbody = !t.getElementsByTagName("tbody").length, u.htmlSerialize = !!t.getElementsByTagName("link").length, u.html5Clone = "<:nav></:nav>" !== C.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), u.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", u.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", u.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, u.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() { u.noCloneEvent = !1 }), t.cloneNode(!0).click()), null == u.deleteExpando) { u.deleteExpando = !0; try { delete t.test } catch (i) { u.deleteExpando = !1 } }
    })(),
    function() {
        var t, n, i = C.createElement("div");
        for (t in { submit: !0, change: !0, focusin: !0 }) n = "on" + t, (u[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), u[t + "Bubbles"] = !1 === i.attributes[n].expando);
        i = null
    }();
    var Y = /^(?:input|select|textarea)$/i,
        K = /^key/,
        Q = /^(?:mouse|pointer|contextmenu)|click/,
        U = /^(?:focusinfocus|focusoutblur)$/,
        J = /^([^.]*)(?:\.(.+)|)$/;

    function G() { return !0 }

    function Z() { return !1 }

    function ee() { try { return C.activeElement } catch (e) {} }

    function et(e) {
        var t = en.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }
    h.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var s, o, a, l, c, u, d, f, p, g, m, v = h._data(e);
            if (v) {
                for (n.handler && (n = (l = n).handler, r = l.selector), n.guid || (n.guid = h.guid++), (o = v.events) || (o = v.events = {}), (u = v.handle) || ((u = v.handle = function(e) { return "function" === I || e && h.event.triggered === e.type ? void 0 : h.event.dispatch.apply(u.elem, arguments) }).elem = e), a = (t = (t || "").match(N) || [""]).length; a--;) p = m = (s = J.exec(t[a]) || [])[1], g = (s[2] || "").split(".").sort(), p && (c = h.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, c = h.event.special[p] || {}, d = h.extend({ type: p, origType: m, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && h.expr.match.needsContext.test(r), namespace: g.join(".") }, l), (f = o[p]) || ((f = o[p] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, i, g, u) || (e.addEventListener ? e.addEventListener(p, u, !1) : e.attachEvent && e.attachEvent("on" + p, u))), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, d) : f.push(d), h.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, r) {
            var s, o, a, l, c, u, d, f, p, g, m, v = h.hasData(e) && h._data(e);
            if (v && (u = v.events)) {
                for (c = (t = (t || "").match(N) || [""]).length; c--;)
                    if (p = m = (a = J.exec(t[c]) || [])[1], g = (a[2] || "").split(".").sort(), p) {
                        for (d = h.event.special[p] || {}, f = u[p = (i ? d.delegateType : d.bindType) || p] || [], a = a[2] && RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = f.length; s--;) o = f[s], !r && m !== o.origType || n && n.guid !== o.guid || a && !a.test(o.namespace) || i && i !== o.selector && ("**" !== i || !o.selector) || (f.splice(s, 1), o.selector && f.delegateCount--, d.remove && d.remove.call(e, o));
                        l && !f.length && (d.teardown && !1 !== d.teardown.call(e, g, v.handle) || h.removeEvent(e, p, v.handle), delete u[p])
                    } else
                        for (p in u) h.event.remove(e, p + t[c], n, i, !0);
                h.isEmptyObject(u) && (delete v.handle, h._removeData(e, "events"))
            }
        },
        trigger: function(t, n, i, r) {
            var s, o, a, l, u, d, f, p = [i || C],
                g = c.call(t, "type") ? t.type : t,
                m = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = d = i = i || C, 3 !== i.nodeType && 8 !== i.nodeType && !U.test(g + h.event.triggered) && (g.indexOf(".") >= 0 && (g = (m = g.split(".")).shift(), m.sort()), o = 0 > g.indexOf(":") && "on" + g, (t = t[h.expando] ? t : new h.Event(g, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = m.join("."), t.namespace_re = t.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : h.makeArray(n, [t]), u = h.event.special[g] || {}, r || !u.trigger || !1 !== u.trigger.apply(i, n))) {
                if (!r && !u.noBubble && !h.isWindow(i)) {
                    for (l = u.delegateType || g, U.test(l + g) || (a = a.parentNode); a; a = a.parentNode) p.push(a), d = a;
                    d === (i.ownerDocument || C) && p.push(d.defaultView || d.parentWindow || e)
                }
                for (f = 0;
                    (a = p[f++]) && !t.isPropagationStopped();) t.type = f > 1 ? l : u.bindType || g, (s = (h._data(a, "events") || {})[t.type] && h._data(a, "handle")) && s.apply(a, n), (s = o && a[o]) && s.apply && h.acceptData(a) && (t.result = s.apply(a, n), !1 === t.result && t.preventDefault());
                if (t.type = g, !r && !t.isDefaultPrevented() && (!u._default || !1 === u._default.apply(p.pop(), n)) && h.acceptData(i) && o && i[g] && !h.isWindow(i)) {
                    (d = i[o]) && (i[o] = null), h.event.triggered = g;
                    try { i[g]() } catch (v) {}
                    h.event.triggered = void 0, d && (i[o] = d)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = h.event.fix(e);
            var t, n, r, s, o, a = [],
                l = i.call(arguments),
                c = (h._data(this, "events") || {})[e.type] || [],
                u = h.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                for (a = h.event.handlers.call(this, e, c), t = 0;
                    (s = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = s.elem, o = 0;
                        (r = s.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, void 0 !== (n = ((h.event.special[r.origType] || {}).handle || r.handler).apply(s.elem, l)) && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, s, o = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && (!e.button || "click" !== e.type)) {
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (r = [], s = 0; a > s; s++) void 0 === r[n = (i = t[s]).selector + " "] && (r[n] = i.needsContext ? h(n, this).index(l) >= 0 : h.find(n, this, null, [l]).length), r[n] && r.push(i);
                        r.length && o.push({ elem: l, handlers: r })
                    }
            }
            return a < t.length && o.push({ elem: this, handlers: t.slice(a) }), o
        },
        fix: function(e) {
            if (e[h.expando]) return e;
            var t, n, i, r = e.type,
                s = e,
                o = this.fixHooks[r];
            for (o || (this.fixHooks[r] = o = Q.test(r) ? this.mouseHooks : K.test(r) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, e = new h.Event(s), t = i.length; t--;) e[n = i[t]] = s[n];
            return e.target || (e.target = s.srcElement || C), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, s) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(e, t) { return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, r, s = t.button,
                    o = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = (i = e.target.ownerDocument || C).documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== ee() && this.focus) try { return this.focus(), !1 } catch (e) {} }, delegateType: "focusin" }, blur: { trigger: function() { return this === ee() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() { return h.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function(e) { return h.nodeName(e.target, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } },
        simulate: function(e, t, n, i) {
            var r = h.extend(new h.Event, n, { type: e, isSimulated: !0, originalEvent: {} });
            i ? h.event.trigger(r, null, t) : h.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, h.removeEvent = C.removeEventListener ? function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n, !1) } : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === I && (e[i] = null), e.detachEvent(i, n))
    }, h.Event = function(e, t) { return this instanceof h.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? G : Z) : this.type = e, t && h.extend(this, t), this.timeStamp = e && e.timeStamp || h.now(), void(this[h.expando] = !0)) : new h.Event(e, t) }, h.Event.prototype = {
        isDefaultPrevented: Z,
        isPropagationStopped: Z,
        isImmediatePropagationStopped: Z,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = G, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = G, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = G, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, h.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) {
        h.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = e.relatedTarget,
                    r = e.handleObj;
                return i && (i === this || h.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), u.submitBubbles || (h.event.special.submit = {
        setup: function() {
            return !h.nodeName(this, "form") && void h.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = h.nodeName(t, "input") || h.nodeName(t, "button") ? t.form : void 0;
                n && !h._data(n, "submitBubbles") && (h.event.add(n, "submit._submit", function(e) { e._submit_bubble = !0 }), h._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) { e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && h.event.simulate("submit", this.parentNode, e, !0)) },
        teardown: function() { return !h.nodeName(this, "form") && void h.event.remove(this, "._submit") }
    }), u.changeBubbles || (h.event.special.change = {
        setup: function() {
            return Y.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (h.event.add(this, "propertychange._change", function(e) { "checked" === e.originalEvent.propertyName && (this._just_changed = !0) }), h.event.add(this, "click._change", function(e) { this._just_changed && !e.isTrigger && (this._just_changed = !1), h.event.simulate("change", this, e, !0) })), !1) : void h.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Y.test(t.nodeName) && !h._data(t, "changeBubbles") && (h.event.add(t, "change._change", function(e) {!this.parentNode || e.isSimulated || e.isTrigger || h.event.simulate("change", this.parentNode, e, !0) }), h._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) { var t = e.target; return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0 },
        teardown: function() { return h.event.remove(this, "._change"), !Y.test(this.nodeName) }
    }), u.focusinBubbles || h.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
        var n = function(e) { h.event.simulate(t, e.target, h.event.fix(e), !0) };
        h.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = h._data(i, t);
                r || i.addEventListener(e, n, !0), h._data(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = h._data(i, t) - 1;
                r ? h._data(i, t, r) : (i.removeEventListener(e, n, !0), h._removeData(i, t))
            }
        }
    }), h.fn.extend({
        on: function(e, t, n, i, r) {
            var s, o;
            if ("object" == typeof e) { for (s in "string" != typeof t && (n = n || t, t = void 0), e) this.on(s, t, n, e[s], r); return this }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), !1 === i) i = Z;
            else if (!i) return this;
            return 1 === r && (o = i, (i = function(e) { return h().off(e), o.apply(this, arguments) }).guid = o.guid || (o.guid = h.guid++)), this.each(function() { h.event.add(this, e, i, n, t) })
        },
        one: function(e, t, n, i) { return this.on(e, t, n, i, 1) },
        off: function(e, t, n) { var i, r; if (e && e.preventDefault && e.handleObj) return i = e.handleObj, h(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof e) { for (r in e) this.off(r, t, e[r]); return this } return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = Z), this.each(function() { h.event.remove(this, e, n, t) }) },
        trigger: function(e, t) { return this.each(function() { h.event.trigger(e, t, this) }) },
        triggerHandler: function(e, t) { var n = this[0]; return n ? h.event.trigger(e, t, n, !0) : void 0 }
    });
    var en = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ei = / jQuery\d+="(?:null|\d+)"/g,
        er = RegExp("<(?:" + en + ")[\\s/>]", "i"),
        es = /^\s+/,
        eo = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ea = /<([\w:]+)/,
        el = /<tbody/i,
        ec = /<|&#?\w+;/,
        eu = /<(?:script|style|link)/i,
        ed = /checked\s*(?:[^=]|=\s*.checked.)/i,
        eh = /^$|\/(?:java|ecma)script/i,
        ef = /^true\/(.*)/,
        ep = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        eg = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: u.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
        em = et(C).appendChild(C.createElement("div"));

    function ev(e, t) {
        var n, i, r = 0,
            s = typeof e.getElementsByTagName !== I ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== I ? e.querySelectorAll(t || "*") : void 0;
        if (!s)
            for (s = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || h.nodeName(i, t) ? s.push(i) : h.merge(s, ev(i, t));
        return void 0 === t || t && h.nodeName(e, t) ? h.merge([e], s) : s
    }

    function ey(e) { V.test(e.type) && (e.defaultChecked = e.checked) }

    function e8(e, t) { return h.nodeName(e, "table") && h.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e }

    function eb(e) { return e.type = (null !== h.find.attr(e, "type")) + "/" + e.type, e }

    function e$(e) { var t = ef.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e }

    function ew(e, t) { for (var n, i = 0; null != (n = e[i]); i++) h._data(n, "globalEval", !t || h._data(t[i], "globalEval")) }

    function ex(e, t) {
        if (1 === t.nodeType && h.hasData(e)) {
            var n, i, r, s = h._data(e),
                o = h._data(t, s),
                a = s.events;
            if (a)
                for (n in delete o.handle, o.events = {}, a)
                    for (i = 0, r = a[n].length; r > i; i++) h.event.add(t, n, a[n][i]);
            o.data && (o.data = h.extend({}, o.data))
        }
    }

    function eT(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !u.noCloneEvent && t[h.expando]) {
                for (i in (r = h._data(t)).events) h.removeEvent(t, i, r.handle);
                t.removeAttribute(h.expando)
            }
            "script" === n && t.text !== e.text ? (eb(t).text = e.text, e$(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), u.html5Clone && e.innerHTML && !h.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && V.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    eg.optgroup = eg.option, eg.tbody = eg.tfoot = eg.colgroup = eg.caption = eg.thead, eg.th = eg.td, h.extend({
        clone: function(e, t, n) {
            var i, r, s, o, a, l = h.contains(e.ownerDocument, e);
            if (u.html5Clone || h.isXMLDoc(e) || !er.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (em.innerHTML = e.outerHTML, em.removeChild(s = em.firstChild)), !(u.noCloneEvent && u.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || h.isXMLDoc(e)))
                for (i = ev(s), a = ev(e), o = 0; null != (r = a[o]); ++o) i[o] && eT(r, i[o]);
            if (t) {
                if (n)
                    for (a = a || ev(e), i = i || ev(s), o = 0; null != (r = a[o]); o++) ex(r, i[o]);
                else ex(e, s)
            }
            return (i = ev(s, "script")).length > 0 && ew(i, !l && ev(e, "script")), i = a = r = null, s
        },
        buildFragment: function(e, t, n, i) {
            for (var r, s, o, a, l, c, d, f = e.length, p = et(t), g = [], m = 0; f > m; m++)
                if ((s = e[m]) || 0 === s) {
                    if ("object" === h.type(s)) h.merge(g, s.nodeType ? [s] : s);
                    else if (ec.test(s)) {
                        for (a = a || p.appendChild(t.createElement("div")), d = eg[l = (ea.exec(s) || ["", ""])[1].toLowerCase()] || eg._default, a.innerHTML = d[1] + s.replace(eo, "<$1></$2>") + d[2], r = d[0]; r--;) a = a.lastChild;
                        if (!u.leadingWhitespace && es.test(s) && g.push(t.createTextNode(es.exec(s)[0])), !u.tbody)
                            for (r = (s = "table" !== l || el.test(s) ? "<table>" !== d[1] || el.test(s) ? 0 : a : a.firstChild) && s.childNodes.length; r--;) h.nodeName(c = s.childNodes[r], "tbody") && !c.childNodes.length && s.removeChild(c);
                        for (h.merge(g, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                        a = p.lastChild
                    } else g.push(t.createTextNode(s))
                }
            for (a && p.removeChild(a), u.appendChecked || h.grep(ev(g, "input"), ey), m = 0; s = g[m++];)
                if ((!i || -1 === h.inArray(s, i)) && (o = h.contains(s.ownerDocument, s), a = ev(p.appendChild(s), "script"), o && ew(a), n))
                    for (r = 0; s = a[r++];) eh.test(s.type || "") && n.push(s);
            return a = null, p
        },
        cleanData: function(e, t) {
            for (var i, r, s, o, a = 0, l = h.expando, c = h.cache, d = u.deleteExpando, f = h.event.special; null != (i = e[a]); a++)
                if ((t || h.acceptData(i)) && (o = (s = i[l]) && c[s])) {
                    if (o.events)
                        for (r in o.events) f[r] ? h.event.remove(i, r) : h.removeEvent(i, r, o.handle);
                    c[s] && (delete c[s], d ? delete i[l] : typeof i.removeAttribute !== I ? i.removeAttribute(l) : i[l] = null, n.push(s))
                }
        }
    }), h.fn.extend({
        text: function(e) { return X(this, function(e) { return void 0 === e ? h.text(this) : this.empty().append((this[0] && this[0].ownerDocument || C).createTextNode(e)) }, null, e, arguments.length) },
        append: function() {
            return this.domManip(arguments, function(e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && e8(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = e8(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() { return this.domManip(arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
        after: function() { return this.domManip(arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
        remove: function(e, t) { for (var n, i = e ? h.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || h.cleanData(ev(n)), n.parentNode && (t && h.contains(n.ownerDocument, n) && ew(ev(n, "script")), n.parentNode.removeChild(n)); return this },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && h.cleanData(ev(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && h.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return h.clone(this, e, t) }) },
        html: function(e) {
            return X(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(ei, "") : void 0;
                if (!("string" != typeof e || eu.test(e) || !u.htmlSerialize && er.test(e) || !u.leadingWhitespace && es.test(e) || eg[(ea.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(eo, "<$1></$2>");
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (h.cleanData(ev(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (r) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() { var e = arguments[0]; return this.domManip(arguments, function(t) { e = this.parentNode, h.cleanData(ev(this)), e && e.replaceChild(t, this) }), e && (e.length || e.nodeType) ? this : this.remove() },
        detach: function(e) { return this.remove(e, !0) },
        domManip: function(e, t) {
            e = r.apply([], e);
            var n, i, s, o, a, l, c = 0,
                d = this.length,
                f = this,
                p = d - 1,
                g = e[0],
                m = h.isFunction(g);
            if (m || d > 1 && "string" == typeof g && !u.checkClone && ed.test(g)) return this.each(function(n) {
                var i = f.eq(n);
                m && (e[0] = g.call(this, n, i.html())), i.domManip(e, t)
            });
            if (d && (n = (l = h.buildFragment(e, this[0].ownerDocument, !1, this)).firstChild, 1 === l.childNodes.length && (l = n), n)) {
                for (s = (o = h.map(ev(l, "script"), eb)).length; d > c; c++) i = l, c !== p && (i = h.clone(i, !0, !0), s && h.merge(o, ev(i, "script"))), t.call(this[c], i, c);
                if (s)
                    for (a = o[o.length - 1].ownerDocument, h.map(o, e$), c = 0; s > c; c++) i = o[c], eh.test(i.type || "") && !h._data(i, "globalEval") && h.contains(a, i) && (i.src ? h._evalUrl && h._evalUrl(i.src) : h.globalEval((i.text || i.textContent || i.innerHTML || "").replace(ep, "")));
                l = n = null
            }
            return this
        }
    }), h.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { h.fn[e] = function(e) { for (var n, i = 0, r = [], o = h(e), a = o.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), h(o[i])[t](n), s.apply(r, n.get()); return this.pushStack(r) } });
    var eC, e_ = {};

    function eE(t, n) {
        var i, r = h(n.createElement(t)).appendTo(n.body),
            s = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : h.css(r[0], "display");
        return r.detach(), s
    }

    function eA(e) {
        var t = C,
            n = e_[e];
        return n || ("none" !== (n = eE(e, t)) && n || ((t = ((eC = (eC || h("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || eC[0].contentDocument).document).write(), t.close(), n = eE(e, t), eC.detach()), e_[e] = n), n
    }
    u.shrinkWrapBlocks = function() { var e, t, n; return null != ek ? ek : (ek = !1, (t = C.getElementsByTagName("body")[0]) && t.style ? (e = C.createElement("div"), (n = C.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), typeof e.style.zoom !== I && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(C.createElement("div")).style.width = "5px", ek = 3 !== e.offsetWidth), t.removeChild(n), ek) : void 0) };
    var ek, eN, eS, eL = /^margin/,
        eD = RegExp("^(" + z + ")(?!px)[a-z%]+$", "i"),
        ej = /^(top|right|bottom|left)$/;

    function eO(e, t) { return { get: function() { var n = e(); if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments) } } }
    e.getComputedStyle ? (eN = function(e) { return e.ownerDocument.defaultView.getComputedStyle(e, null) }, eS = function(e, t, n) { var i, r, s, o, a = e.style; return o = (n = n || eN(e)) ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== o || h.contains(e.ownerDocument, e) || (o = h.style(e, t)), eD.test(o) && eL.test(t) && (i = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = i, a.minWidth = r, a.maxWidth = s)), void 0 === o ? o : o + "" }) : C.documentElement.currentStyle && (eN = function(e) { return e.currentStyle }, eS = function(e, t, n) { var i, r, s, o, a = e.style; return null == (o = (n = n || eN(e)) ? n[t] : void 0) && a && a[t] && (o = a[t]), eD.test(o) && !ej.test(t) && (i = a.left, (s = (r = e.runtimeStyle) && r.left) && (r.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : o, o = a.pixelLeft + "px", a.left = i, s && (r.left = s)), void 0 === o ? o : o + "" || "auto" }),
        function() {
            var t, n, i, r, s, o, a;
            if ((t = C.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = (i = t.getElementsByTagName("a")[0]) && i.style) {
                n.cssText = "float:left;opacity:.5", u.opacity = "0.5" === n.opacity, u.cssFloat = !!n.cssFloat, t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", u.clearCloneStyle = "content-box" === t.style.backgroundClip, u.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, h.extend(u, { reliableHiddenOffsets: function() { return null == o && l(), o }, boxSizingReliable: function() { return null == s && l(), s }, pixelPosition: function() { return null == r && l(), r }, reliableMarginRight: function() { return null == a && l(), a } });

                function l() {
                    var t, n, i, l;
                    (n = C.getElementsByTagName("body")[0]) && n.style && (t = C.createElement("div"), (i = C.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r = s = !1, a = !0, e.getComputedStyle && (r = "1%" !== (e.getComputedStyle(t, null) || {}).top, s = "4px" === (e.getComputedStyle(t, null) || { width: "4px" }).width, (l = t.appendChild(C.createElement("div"))).style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", l.style.marginRight = l.style.width = "0", t.style.width = "1px", a = !parseFloat((e.getComputedStyle(l, null) || {}).marginRight)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (l = t.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (o = 0 === l[0].offsetHeight) && (l[0].style.display = "", l[1].style.display = "none", o = 0 === l[0].offsetHeight), n.removeChild(i))
                }
            }
        }(), h.swap = function(e, t, n, i) { var r, s, o = {}; for (s in t) o[s] = e.style[s], e.style[s] = t[s]; for (s in r = n.apply(e, i || []), t) e.style[s] = o[s]; return r };
    var eI = /alpha\([^)]*\)/i,
        eP = /opacity\s*=\s*([^)]*)/,
        eH = /^(none|table(?!-c[ea]).+)/,
        eM = RegExp("^(" + z + ")(.*)$", "i"),
        eq = RegExp("^([+-])=(" + z + ")", "i"),
        eF = { position: "absolute", visibility: "hidden", display: "block" },
        e9 = { letterSpacing: "0", fontWeight: "400" },
        eB = ["Webkit", "O", "Moz", "ms"];

    function ez(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = eB.length; r--;)
            if ((t = eB[r] + n) in e) return t;
        return i
    }

    function eW(e, t) { for (var n, i, r, s = [], o = 0, a = e.length; a > o; o++)(i = e[o]).style && (s[o] = h._data(i, "olddisplay"), n = i.style.display, t ? (s[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && R(i) && (s[o] = h._data(i, "olddisplay", eA(i.nodeName)))) : (r = R(i), (n && "none" !== n || !r) && h._data(i, "olddisplay", r ? n : h.css(i, "display")))); for (o = 0; a > o; o++)(i = e[o]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? s[o] || "" : "none")); return e }

    function e0(e, t, n) { var i = eM.exec(t); return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t }

    function eR(e, t, n, i, r) { for (var s = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > s; s += 2) "margin" === n && (o += h.css(e, n + W[s], !0, r)), i ? ("content" === n && (o -= h.css(e, "padding" + W[s], !0, r)), "margin" !== n && (o -= h.css(e, "border" + W[s] + "Width", !0, r))) : (o += h.css(e, "padding" + W[s], !0, r), "padding" !== n && (o += h.css(e, "border" + W[s] + "Width", !0, r))); return o }

    function e1(e, t, n) {
        var i = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            s = eN(e),
            o = u.boxSizing && "border-box" === h.css(e, "boxSizing", !1, s);
        if (0 >= r || null == r) {
            if ((0 > (r = eS(e, t, s)) || null == r) && (r = e.style[t]), eD.test(r)) return r;
            i = o && (u.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + eR(e, t, n || (o ? "border" : "content"), i, s) + "px"
    }

    function eX(e, t, n, i, r) { return new eX.prototype.init(e, t, n, i, r) }
    h.extend({
        cssHooks: { opacity: { get: function(e, t) { if (t) { var n = eS(e, "opacity"); return "" === n ? "1" : n } } } },
        cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { float: u.cssFloat ? "cssFloat" : "styleFloat" },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, s, o, a = h.camelCase(t),
                    l = e.style;
                if (t = h.cssProps[a] || (h.cssProps[a] = ez(l, a)), o = h.cssHooks[t] || h.cssHooks[a], void 0 === n) return o && "get" in o && void 0 !== (r = o.get(e, !1, i)) ? r : l[t];
                if ("string" == (s = typeof n) && (r = eq.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(h.css(e, t)), s = "number"), null != n && n == n && ("number" !== s || h.cssNumber[a] || (n += "px"), u.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(o && "set" in o && void 0 === (n = o.set(e, n, i))))) try { l[t] = n } catch (c) {}
            }
        },
        css: function(e, t, n, i) { var r, s, o, a = h.camelCase(t); return t = h.cssProps[a] || (h.cssProps[a] = ez(e.style, a)), (o = h.cssHooks[t] || h.cssHooks[a]) && "get" in o && (s = o.get(e, !0, n)), void 0 === s && (s = eS(e, t, i)), "normal" === s && t in e9 && (s = e9[t]), "" === n || n ? (r = parseFloat(s), !0 === n || h.isNumeric(r) ? r || 0 : s) : s }
    }), h.each(["height", "width"], function(e, t) { h.cssHooks[t] = { get: function(e, n, i) { return n ? eH.test(h.css(e, "display")) && 0 === e.offsetWidth ? h.swap(e, eF, function() { return e1(e, t, i) }) : e1(e, t, i) : void 0 }, set: function(e, n, i) { var r = i && eN(e); return e0(e, n, i ? eR(e, t, i, u.boxSizing && "border-box" === h.css(e, "boxSizing", !1, r), r) : 0) } } }), u.opacity || (h.cssHooks.opacity = {
        get: function(e, t) { return eP.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" },
        set: function(e, t) {
            var n = e.style,
                i = e.currentStyle,
                r = h.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                s = i && i.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === h.trim(s.replace(eI, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = eI.test(s) ? s.replace(eI, r) : s + " " + r)
        }
    }), h.cssHooks.marginRight = eO(u.reliableMarginRight, function(e, t) { return t ? h.swap(e, { display: "inline-block" }, eS, [e, "marginRight"]) : void 0 }), h.each({ margin: "", padding: "", border: "Width" }, function(e, t) { h.cssHooks[e + t] = { expand: function(n) { for (var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + W[i] + t] = s[i] || s[i - 2] || s[0]; return r } }, eL.test(e) || (h.cssHooks[e + t].set = e0) }), h.fn.extend({
        css: function(e, t) {
            return X(this, function(e, t, n) {
                var i, r, s = {},
                    o = 0;
                if (h.isArray(t)) { for (i = eN(e), r = t.length; r > o; o++) s[t[o]] = h.css(e, t[o], !1, i); return s }
                return void 0 !== n ? h.style(e, t, n) : h.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() { return eW(this, !0) },
        hide: function() { return eW(this) },
        toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { R(this) ? h(this).show() : h(this).hide() }) }
    }), h.Tween = eX, eX.prototype = { constructor: eX, init: function(e, t, n, i, r, s) { this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = s || (h.cssNumber[n] ? "" : "px") }, cur: function() { var e = eX.propHooks[this.prop]; return e && e.get ? e.get(this) : eX.propHooks._default.get(this) }, run: function(e) { var t, n = eX.propHooks[this.prop]; return this.pos = t = this.options.duration ? h.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : eX.propHooks._default.set(this), this } }, eX.prototype.init.prototype = eX.prototype, eX.propHooks = { _default: { get: function(e) { var t; return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = h.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop] }, set: function(e) { h.fx.step[e.prop] ? h.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[h.cssProps[e.prop]] || h.cssHooks[e.prop]) ? h.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now } } }, eX.propHooks.scrollTop = eX.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, h.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 } }, h.fx = eX.prototype.init, h.fx.step = {};
    var e2, eV, e3 = /^(?:toggle|show|hide)$/,
        e7 = RegExp("^(?:([+-])=|)(" + z + ")([a-z%]*)$", "i"),
        eY = /queueHooks$/,
        eK = [function e(t, n, i) {
            var r, s, o, a, l, c, d, f, p = this,
                g = {},
                m = t.style,
                v = t.nodeType && R(t),
                y = h._data(t, "fxshow");
            for (r in i.queue || (null == (l = h._queueHooks(t, "fx")).unqueued && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function() { l.unqueued || c() }), l.unqueued++, p.always(function() { p.always(function() { l.unqueued--, h.queue(t, "fx").length || l.empty.fire() }) })), 1 === t.nodeType && ("height" in n || "width" in n) && (i.overflow = [m.overflow, m.overflowX, m.overflowY], "inline" === (f = "none" === (d = h.css(t, "display")) ? h._data(t, "olddisplay") || eA(t.nodeName) : d) && "none" === h.css(t, "float") && (u.inlineBlockNeedsLayout && "inline" !== eA(t.nodeName) ? m.zoom = 1 : m.display = "inline-block")), i.overflow && (m.overflow = "hidden", u.shrinkWrapBlocks() || p.always(function() { m.overflow = i.overflow[0], m.overflowX = i.overflow[1], m.overflowY = i.overflow[2] })), n)
                if (s = n[r], e3.exec(s)) {
                    if (delete n[r], o = o || "toggle" === s, s === (v ? "hide" : "show")) {
                        if ("show" !== s || !y || void 0 === y[r]) continue;
                        v = !0
                    }
                    g[r] = y && y[r] || h.style(t, r)
                } else d = void 0;
            if (h.isEmptyObject(g)) "inline" === ("none" === d ? eA(t.nodeName) : d) && (m.display = d);
            else
                for (r in y ? "hidden" in y && (v = y.hidden) : y = h._data(t, "fxshow", {}), o && (y.hidden = !v), v ? h(t).show() : p.done(function() { h(t).hide() }), p.done(function() { var e; for (e in h._removeData(t, "fxshow"), g) h.style(t, e, g[e]) }), g) a = e6(v ? y[r] : 0, r, p), r in y || (y[r] = a.start, v && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }],
        eQ = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    i = n.cur(),
                    r = e7.exec(t),
                    s = r && r[3] || (h.cssNumber[e] ? "" : "px"),
                    o = (h.cssNumber[e] || "px" !== s && +i) && e7.exec(h.css(n.elem, e)),
                    a = 1,
                    l = 20;
                if (o && o[3] !== s) {
                    s = s || o[3], r = r || [], o = +i || 1;
                    do o /= a = a || ".5", h.style(n.elem, e, o + s); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                }
                return r && (o = n.start = +o || +i || 0, n.unit = s, n.end = r[1] ? o + (r[1] + 1) * r[2] : +r[2]), n
            }]
        };

    function eU() { return setTimeout(function() { e2 = void 0 }), e2 = h.now() }

    function e4(e, t) {
        var n, i = { height: e },
            r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) i["margin" + (n = W[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function e6(e, t, n) {
        for (var i, r = (eQ[t] || []).concat(eQ["*"]), s = 0, o = r.length; o > s; s++)
            if (i = r[s].call(n, t, e)) return i
    }

    function eJ(e, t, n) {
        var i, r, s = 0,
            o = eK.length,
            a = h.Deferred().always(function() { delete l.elem }),
            l = function() { if (r) return !1; for (var t = e2 || eU(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, s = 1 - i, o = 0, l = c.tweens.length; l > o; o++) c.tweens[o].run(s); return a.notifyWith(e, [c, s, n]), 1 > s && l ? n : (a.resolveWith(e, [c]), !1) },
            c = a.promise({
                elem: e,
                props: h.extend({}, t),
                opts: h.extend(!0, { specialEasing: {} }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: e2 || eU(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) { var i = h.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing); return c.tweens.push(i), i },
                stop: function(t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i > n; n++) c.tweens[n].run(1);
                    return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (function e(t, n) {
                var i, r, s, o, a;
                for (i in t)
                    if (s = n[r = h.camelCase(i)], o = t[i], h.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== r && (t[r] = o, delete t[i]), (a = h.cssHooks[r]) && ("expand" in a))
                        for (i in o = a.expand(o), delete t[r], o)(i in t) || (t[i] = o[i], n[i] = s);
                    else n[r] = s
            }(u, c.opts.specialEasing); o > s; s++)
            if (i = eK[s].call(c, e, u, c.opts)) return i;
        return h.map(u, e6, c), h.isFunction(c.opts.start) && c.opts.start.call(e, c), h.fx.timer(h.extend(l, { elem: e, anim: c, queue: c.opts.queue })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    h.Animation = h.extend(eJ, { tweener: function(e, t) { h.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" "); for (var n, i = 0, r = e.length; r > i; i++) eQ[n = e[i]] = eQ[n] || [], eQ[n].unshift(t) }, prefilter: function(e, t) { t ? eK.unshift(e) : eK.push(e) } }), h.speed = function(e, t, n) { var i = e && "object" == typeof e ? h.extend({}, e) : { complete: n || !n && t || h.isFunction(e) && e, duration: e, easing: n && t || t && !h.isFunction(t) && t }; return i.duration = h.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in h.fx.speeds ? h.fx.speeds[i.duration] : h.fx.speeds._default, (null == i.queue || !0 === i.queue) && (i.queue = "fx"), i.old = i.complete, i.complete = function() { h.isFunction(i.old) && i.old.call(this), i.queue && h.dequeue(this, i.queue) }, i }, h.fn.extend({
        fadeTo: function(e, t, n, i) { return this.filter(R).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i) },
        animate: function(e, t, n, i) {
            var r = h.isEmptyObject(e),
                s = h.speed(t, n, i),
                o = function() {
                    var t = eJ(this, h.extend({}, e), s);
                    (r || h._data(this, "finish")) && t.stop(!0)
                };
            return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    r = null != e && e + "queueHooks",
                    s = h.timers,
                    o = h._data(this);
                if (r) o[r] && o[r].stop && i(o[r]);
                else
                    for (r in o) o[r] && o[r].stop && eY.test(r) && i(o[r]);
                for (r = s.length; r--;) s[r].elem !== this || null != e && s[r].queue !== e || (s[r].anim.stop(n), t = !1, s.splice(r, 1));
                (t || !n) && h.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = h._data(this),
                    i = n[e + "queue"],
                    r = n[e + "queueHooks"],
                    s = h.timers,
                    o = i ? i.length : 0;
                for (n.finish = !0, h.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; o > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), h.each(["toggle", "show", "hide"], function(e, t) {
        var n = h.fn[t];
        h.fn[t] = function(e, i, r) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(e4(t, !0), e, i, r) }
    }), h.each({ slideDown: e4("show"), slideUp: e4("hide"), slideToggle: e4("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { h.fn[e] = function(e, n, i) { return this.animate(t, e, n, i) } }), h.timers = [], h.fx.tick = function() {
        var e, t = h.timers,
            n = 0;
        for (e2 = h.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || h.fx.stop(), e2 = void 0
    }, h.fx.timer = function(e) { h.timers.push(e), e() ? h.fx.start() : h.timers.pop() }, h.fx.interval = 13, h.fx.start = function() { eV || (eV = setInterval(h.fx.tick, h.fx.interval)) }, h.fx.stop = function() { clearInterval(eV), eV = null }, h.fx.speeds = { slow: 600, fast: 200, _default: 400 }, h.fn.delay = function(e, t) {
        return e = h.fx && h.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, n) {
            var i = setTimeout(t, e);
            n.stop = function() { clearTimeout(i) }
        })
    }, (eZ = C.createElement("div")).setAttribute("className", "t"), eZ.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", tt = eZ.getElementsByTagName("a")[0], tn = (te = C.createElement("select")).appendChild(C.createElement("option")), e5 = eZ.getElementsByTagName("input")[0], tt.style.cssText = "top:1px", u.getSetAttribute = "t" !== eZ.className, u.style = /top/.test(tt.getAttribute("style")), u.hrefNormalized = "/a" === tt.getAttribute("href"), u.checkOn = !!e5.value, u.optSelected = tn.selected, u.enctype = !!C.createElement("form").enctype, te.disabled = !0, u.optDisabled = !tn.disabled, (e5 = C.createElement("input")).setAttribute("value", ""), u.input = "" === e5.getAttribute("value"), e5.value = "t", e5.setAttribute("type", "radio"), u.radioValue = "t" === e5.value;
    var eG = /\r/g;
    h.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = h.isFunction(e), this.each(function(n) {
                var r;
                1 === this.nodeType && (null == (r = i ? e.call(this, n, h(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : h.isArray(r) && (r = h.map(r, function(e) { return null == e ? "" : e + "" })), (t = h.valHooks[this.type] || h.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = h.valHooks[r.type] || h.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(eG, "") : null == n ? "" : n : void 0
        }
    }), h.extend({
        valHooks: {
            option: { get: function(e) { var t = h.find.attr(e, "value"); return null != t ? t : h.trim(h.text(e)) } },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, s = "select-one" === e.type || 0 > r, o = s ? null : [], a = s ? r + 1 : i.length, l = 0 > r ? a : s ? r : 0; a > l; l++)
                        if (!(!(n = i[l]).selected && l !== r || (u.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && h.nodeName(n.parentNode, "optgroup"))) {
                            if (t = h(n).val(), s) return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, s = h.makeArray(t), o = r.length; o--;)
                        if (i = r[o], h.inArray(h.valHooks.option.get(i), s) >= 0) try { i.selected = n = !0 } catch (a) { i.scrollHeight } else i.selected = !1;
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), h.each(["radio", "checkbox"], function() { h.valHooks[this] = { set: function(e, t) { return h.isArray(t) ? e.checked = h.inArray(h(e).val(), t) >= 0 : void 0 } }, u.checkOn || (h.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) });
    var e5, eZ, te, tt, tn, ti, tr, ts = h.expr.attrHandle,
        to = /^(?:checked|selected)$/i,
        ta = u.getSetAttribute,
        tl = u.input;
    h.fn.extend({ attr: function(e, t) { return X(this, h.attr, e, t, arguments.length > 1) }, removeAttr: function(e) { return this.each(function() { h.removeAttr(this, e) }) } }), h.extend({
        attr: function(e, t, n) { var i, r, s = e.nodeType; if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === I ? h.prop(e, t, n) : (1 === s && h.isXMLDoc(e) || (t = t.toLowerCase(), i = h.attrHooks[t] || (h.expr.match.bool.test(t) ? tr : ti)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = h.find.attr(e, t)) ? void 0 : r : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void h.removeAttr(e, t)) },
        removeAttr: function(e, t) {
            var n, i, r = 0,
                s = t && t.match(N);
            if (s && 1 === e.nodeType)
                for (; n = s[r++];) i = h.propFix[n] || n, h.expr.match.bool.test(n) ? tl && ta || !to.test(n) ? e[i] = !1 : e[h.camelCase("default-" + n)] = e[i] = !1 : h.attr(e, n, ""), e.removeAttribute(ta ? n : i)
        },
        attrHooks: { type: { set: function(e, t) { if (!u.radioValue && "radio" === t && h.nodeName(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }
    }), tr = { set: function(e, t, n) { return !1 === t ? h.removeAttr(e, n) : tl && ta || !to.test(n) ? e.setAttribute(!ta && h.propFix[n] || n, n) : e[h.camelCase("default-" + n)] = e[n] = !0, n } }, h.each(h.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ts[t] || h.find.attr;
        ts[t] = tl && ta || !to.test(t) ? function(e, t, i) { var r, s; return i || (s = ts[t], ts[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, ts[t] = s), r } : function(e, t, n) { return n ? void 0 : e[h.camelCase("default-" + t)] ? t.toLowerCase() : null }
    }), tl && ta || (h.attrHooks.value = { set: function(e, t, n) { return h.nodeName(e, "input") ? void(e.defaultValue = t) : ti && ti.set(e, t, n) } }), ta || (ti = { set: function(e, t, n) { var i = e.getAttributeNode(n); return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0 } }, ts.id = ts.name = ts.coords = function(e, t, n) { var i; return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null }, h.valHooks.button = { get: function(e, t) { var n = e.getAttributeNode(t); return n && n.specified ? n.value : void 0 }, set: ti.set }, h.attrHooks.contenteditable = { set: function(e, t, n) { ti.set(e, "" !== t && t, n) } }, h.each(["width", "height"], function(e, t) { h.attrHooks[t] = { set: function(e, n) { return "" === n ? (e.setAttribute(t, "auto"), n) : void 0 } } })), u.style || (h.attrHooks.style = { get: function(e) { return e.style.cssText || void 0 }, set: function(e, t) { return e.style.cssText = t + "" } });
    var tc = /^(?:input|select|textarea|button|object)$/i,
        tu = /^(?:a|area)$/i;
    h.fn.extend({ prop: function(e, t) { return X(this, h.prop, e, t, arguments.length > 1) }, removeProp: function(e) { return e = h.propFix[e] || e, this.each(function() { try { this[e] = void 0, delete this[e] } catch (t) {} }) } }), h.extend({ propFix: { for: "htmlFor", class: "className" }, prop: function(e, t, n) { var i, r, s, o = e.nodeType; if (e && 3 !== o && 8 !== o && 2 !== o) return (s = 1 !== o || !h.isXMLDoc(e)) && (t = h.propFix[t] || t, r = h.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = h.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : tc.test(e.nodeName) || tu.test(e.nodeName) && e.href ? 0 : -1 } } } }), u.hrefNormalized || h.each(["href", "src"], function(e, t) { h.propHooks[t] = { get: function(e) { return e.getAttribute(t, 4) } } }), u.optSelected || (h.propHooks.selected = { get: function(e) { var t = e.parentNode; return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null } }), h.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { h.propFix[this.toLowerCase()] = this }), u.enctype || (h.propFix.enctype = "encoding");
    var td = /[\t\r\n\f]/g;
    h.fn.extend({
        addClass: function(e) {
            var t, n, i, r, s, o, a = 0,
                l = this.length;
            if (h.isFunction(e)) return this.each(function(t) { h(this).addClass(e.call(this, t, this.className)) });
            if ("string" == typeof e && e) {
                for (t = (e || "").match(N) || []; l > a; a++)
                    if (i = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className + " ").replace(td, " ") : " ")) {
                        for (s = 0; r = t[s++];) 0 > i.indexOf(" " + r + " ") && (i += r + " ");
                        o = h.trim(i), n.className !== o && (n.className = o)
                    }
            }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, s, o, a = 0,
                l = this.length,
                c = 0 === arguments.length || "string" == typeof e && e;
            if (h.isFunction(e)) return this.each(function(t) { h(this).removeClass(e.call(this, t, this.className)) });
            if (c) {
                for (t = (e || "").match(N) || []; l > a; a++)
                    if (i = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className + " ").replace(td, " ") : "")) {
                        for (s = 0; r = t[s++];)
                            for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                        o = e ? h.trim(i) : "", n.className !== o && (n.className = o)
                    }
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(h.isFunction(e) ? function(n) { h(this).toggleClass(e.call(this, n, this.className, t), t) } : function() {
                if ("string" === n)
                    for (var t, i = 0, r = h(this), s = e.match(N) || []; t = s[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else(n === I || "boolean" === n) && (this.className && h._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : h._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(td, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), h.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) { h.fn[t] = function(e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), h.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) }, bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, i) { return this.on(t, e, n, i) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } });
    var th = h.now(),
        tf = /\?/,
        tp = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    h.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, i = null,
            r = h.trim(t + "");
        return r && !h.trim(r.replace(tp, function(e, t, r, s) { return n && t && (i = 0), 0 === i ? e : (n = r || t, i += !s - !r, "") })) ? Function("return " + r)() : h.error("Invalid JSON: " + t)
    }, h.parseXML = function(t) { var n, i; if (!t || "string" != typeof t) return null; try { e.DOMParser ? n = (i = new DOMParser).parseFromString(t, "text/xml") : ((n = new ActiveXObject("Microsoft.XMLDOM")).async = "false", n.loadXML(t)) } catch (r) { n = void 0 } return n && n.documentElement && !n.getElementsByTagName("parsererror").length || h.error("Invalid XML: " + t), n };
    var tg, tm, tv = /#.*$/,
        ty = /([?&])_=[^&]*/,
        t8 = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        tb = /^(?:GET|HEAD)$/,
        t$ = /^\/\//,
        tw = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        tx = {},
        tT = {},
        tC = "*/".concat("*");
    try { tm = location.href } catch (t_) {
        (tm = C.createElement("a")).href = "", tm = tm.href
    }

    function tE(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                s = t.toLowerCase().match(N) || [];
            if (h.isFunction(n))
                for (; i = s[r++];) "+" === i.charAt(0) ? (e[i = i.slice(1) || "*"] = e[i] || []).unshift(n) : (e[i] = e[i] || []).push(n)
        }
    }

    function tA(e, t, n, i) {
        var r = {},
            s = e === tT;

        function o(a) { var l; return r[a] = !0, h.each(e[a] || [], function(e, a) { var c = a(t, n, i); return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1) }), l }
        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }

    function tk(e, t) { var n, i, r = h.ajaxSettings.flatOptions || {}; for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]); return n && h.extend(!0, e, n), e }
    tg = tw.exec(tm.toLowerCase()) || [], h.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: tm, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(tg[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": tC, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": h.parseJSON, "text xml": h.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(e, t) { return t ? tk(tk(e, h.ajaxSettings), t) : tk(h.ajaxSettings, e) },
        ajaxPrefilter: tE(tx),
        ajaxTransport: tE(tT),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var n, i, r, s, o, a, l, c, u = h.ajaxSetup({}, t),
                d = u.context || u,
                f = u.context && (d.nodeType || d.jquery) ? h(d) : h.event,
                p = h.Deferred(),
                g = h.Callbacks("once memory"),
                m = u.statusCode || {},
                v = {},
                y = {},
                b = 0,
                $ = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; t = t8.exec(s);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() { return 2 === b ? s : null },
                    setRequestHeader: function(e, t) { var n = e.toLowerCase(); return b || (v[e = y[n] = y[n] || e] = t), this },
                    overrideMimeType: function(e) { return b || (u.mimeType = e), this },
                    statusCode: function(e) {
                        var t;
                        if (e) {
                            if (2 > b)
                                for (t in e) m[t] = [m[t], e[t]];
                            else w.always(e[w.status])
                        }
                        return this
                    },
                    abort: function(e) { var t = e || $; return l && l.abort(t), T(0, t), this }
                };
            if (p.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, u.url = ((e || u.url || tm) + "").replace(tv, "").replace(t$, tg[1] + "//"), u.type = t.method || t.type || u.method || u.type, u.dataTypes = h.trim(u.dataType || "*").toLowerCase().match(N) || [""], null == u.crossDomain && (n = tw.exec(u.url.toLowerCase()), u.crossDomain = !(!n || n[1] === tg[1] && n[2] === tg[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (tg[3] || ("http:" === tg[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = h.param(u.data, u.traditional)), tA(tx, u, t, w), 2 === b) return w;
            for (i in (a = u.global) && 0 == h.active++ && h.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !tb.test(u.type), r = u.url, u.hasContent || (u.data && (r = u.url += (tf.test(r) ? "&" : "?") + u.data, delete u.data), !1 === u.cache && (u.url = ty.test(r) ? r.replace(ty, "$1_=" + th++) : r + (tf.test(r) ? "&" : "?") + "_=" + th++)), u.ifModified && (h.lastModified[r] && w.setRequestHeader("If-Modified-Since", h.lastModified[r]), h.etag[r] && w.setRequestHeader("If-None-Match", h.etag[r])), (u.data && u.hasContent && !1 !== u.contentType || t.contentType) && w.setRequestHeader("Content-Type", u.contentType), w.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + tC + "; q=0.01" : "") : u.accepts["*"]), u.headers) w.setRequestHeader(i, u.headers[i]);
            if (u.beforeSend && (!1 === u.beforeSend.call(d, w, u) || 2 === b)) return w.abort();
            for (i in $ = "abort", { success: 1, error: 1, complete: 1 }) w[i](u[i]);
            if (l = tA(tT, u, t, w)) {
                w.readyState = 1, a && f.trigger("ajaxSend", [w, u]), u.async && u.timeout > 0 && (o = setTimeout(function() { w.abort("timeout") }, u.timeout));
                try { b = 1, l.send(v, T) } catch (x) {
                    if (!(2 > b)) throw x;
                    T(-1, x)
                }
            } else T(-1, "No Transport");

            function T(e, t, n, i) {
                var c, v, y, $, x, T = t;
                2 !== b && (b = 2, o && clearTimeout(o), l = void 0, s = i || "", w.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, n && ($ = function e(t, n, i) {
                    for (var r, s, o, a, l = t.contents, c = t.dataTypes;
                        "*" === c[0];) c.shift(), void 0 === s && (s = t.mimeType || n.getResponseHeader("Content-Type"));
                    if (s) {
                        for (a in l)
                            if (l[a] && l[a].test(s)) { c.unshift(a); break }
                    }
                    if (c[0] in i) o = c[0];
                    else {
                        for (a in i) {
                            if (!c[0] || t.converters[a + " " + c[0]]) { o = a; break }
                            r || (r = a)
                        }
                        o = o || r
                    }
                    return o ? (o !== c[0] && c.unshift(o), i[o]) : void 0
                }(u, w, n)), $ = function e(t, n, i, r) {
                    var s, o, a, l, c, u = {},
                        d = t.dataTypes.slice();
                    if (d[1])
                        for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
                    for (o = d.shift(); o;)
                        if (t.responseFields[o] && (i[t.responseFields[o]] = n), !c && r && t.dataFilter && (n = t.dataFilter(n, t.dataType)), c = o, o = d.shift()) {
                            if ("*" === o) o = c;
                            else if ("*" !== c && c !== o) {
                                if (!(a = u[c + " " + o] || u["* " + o])) {
                                    for (s in u)
                                        if ((l = s.split(" "))[1] === o && (a = u[c + " " + l[0]] || u["* " + l[0]])) {!0 === a ? a = u[s] : !0 !== u[s] && (o = l[0], d.unshift(l[1])); break }
                                }
                                if (!0 !== a) {
                                    if (a && t.throws) n = a(n);
                                    else try { n = a(n) } catch (h) { return { state: "parsererror", error: a ? h : "No conversion from " + c + " to " + o } }
                                }
                            }
                        }
                    return { state: "success", data: n }
                }(u, $, w, c), c ? (u.ifModified && ((x = w.getResponseHeader("Last-Modified")) && (h.lastModified[r] = x), (x = w.getResponseHeader("etag")) && (h.etag[r] = x)), 204 === e || "HEAD" === u.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = $.state, v = $.data, c = !(y = $.error))) : (y = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", c ? p.resolveWith(d, [v, T, w]) : p.rejectWith(d, [w, T, y]), w.statusCode(m), m = void 0, a && f.trigger(c ? "ajaxSuccess" : "ajaxError", [w, u, c ? v : y]), g.fireWith(d, [w, T]), a && (f.trigger("ajaxComplete", [w, u]), --h.active || h.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(e, t, n) { return h.get(e, t, n, "json") },
        getScript: function(e, t) { return h.get(e, void 0, t, "script") }
    }), h.each(["get", "post"], function(e, t) { h[t] = function(e, n, i, r) { return h.isFunction(n) && (r = r || i, i = n, n = void 0), h.ajax({ url: e, type: t, dataType: r, data: n, success: i }) } }), h.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { h.fn[t] = function(e) { return this.on(t, e) } }), h._evalUrl = function(e) { return h.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 }) }, h.fn.extend({
        wrapAll: function(e) {
            if (h.isFunction(e)) return this.each(function(t) { h(this).wrapAll(e.call(this, t)) });
            if (this[0]) {
                var t = h(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild; return e }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(h.isFunction(e) ? function(t) { h(this).wrapInner(e.call(this, t)) } : function() {
                var t = h(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) { var t = h.isFunction(e); return this.each(function(n) { h(this).wrapAll(t ? e.call(this, n) : e) }) },
        unwrap: function() { return this.parent().each(function() { h.nodeName(this, "body") || h(this).replaceWith(this.childNodes) }).end() }
    }), h.expr.filters.hidden = function(e) { return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !u.reliableHiddenOffsets() && "none" === (e.style && e.style.display || h.css(e, "display")) }, h.expr.filters.visible = function(e) { return !h.expr.filters.hidden(e) };
    var tN = /%20/g,
        tS = /\[\]$/,
        tL = /\r?\n/g,
        tD = /^(?:submit|button|image|reset|file)$/i,
        tj = /^(?:input|select|textarea|keygen)/i;

    function tO(e, t, n, i) {
        var r;
        if (h.isArray(t)) h.each(t, function(t, r) { n || tS.test(e) ? i(e, r) : tO(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i) });
        else if (n || "object" !== h.type(t)) i(e, t);
        else
            for (r in t) tO(e + "[" + r + "]", t[r], n, i)
    }
    h.param = function(e, t) {
        var n, i = [],
            r = function(e, t) { t = h.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) };
        if (void 0 === t && (t = h.ajaxSettings && h.ajaxSettings.traditional), h.isArray(e) || e.jquery && !h.isPlainObject(e)) h.each(e, function() { r(this.name, this.value) });
        else
            for (n in e) tO(n, e[n], t, r);
        return i.join("&").replace(tN, "+")
    }, h.fn.extend({ serialize: function() { return h.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = h.prop(this, "elements"); return e ? h.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !h(this).is(":disabled") && tj.test(this.nodeName) && !tD.test(e) && (this.checked || !V.test(e)) }).map(function(e, t) { var n = h(this).val(); return null == n ? null : h.isArray(n) ? h.map(n, function(e) { return { name: t.name, value: e.replace(tL, "\r\n") } }) : { name: t.name, value: n.replace(tL, "\r\n") } }).get() } }), h.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() { return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && tM() || function t() { try { return new e.ActiveXObject("Microsoft.XMLHTTP") } catch (n) {} }() } : tM;
    var tI = 0,
        tP = {},
        tH = h.ajaxSettings.xhr();

    function tM() { try { return new e.XMLHttpRequest } catch (t) {} }
    e.ActiveXObject && h(e).on("unload", function() { for (var e in tP) tP[e](void 0, !0) }), u.cors = !!tH && "withCredentials" in tH, (tH = u.ajax = !!tH) && h.ajaxTransport(function(e) {
        if (!e.crossDomain || u.cors) {
            var t;
            return {
                send: function(n, i) {
                    var r, s = e.xhr(),
                        o = ++tI;
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (r in e.xhrFields) s[r] = e.xhrFields[r];
                    for (r in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), n) void 0 !== n[r] && s.setRequestHeader(r, n[r] + "");
                    s.send(e.hasContent && e.data || null), t = function(n, r) {
                        var a, l, c;
                        if (t && (r || 4 === s.readyState)) {
                            if (delete tP[o], t = void 0, s.onreadystatechange = h.noop, r) 4 !== s.readyState && s.abort();
                            else {
                                c = {}, a = s.status, "string" == typeof s.responseText && (c.text = s.responseText);
                                try { l = s.statusText } catch (u) { l = "" }
                                a || !e.isLocal || e.crossDomain ? 1223 === a && (a = 204) : a = c.text ? 200 : 404
                            }
                        }
                        c && i(a, l, c, s.getAllResponseHeaders())
                    }, e.async ? 4 === s.readyState ? setTimeout(t) : s.onreadystatechange = tP[o] = t : t()
                },
                abort: function() { t && t(void 0, !0) }
            }
        }
    }), h.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(e) { return h.globalEval(e), e } } }), h.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), h.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = C.head || h("head")[0] || C.documentElement;
            return {
                send: function(i, r) {
                    (t = C.createElement("script")).async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() { t && t.onload(void 0, !0) }
            }
        }
    });
    var tq = [],
        tF = /(=)\?(?=&|$)|\?\?/;
    h.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = tq.pop() || h.expando + "_" + th++; return this[e] = !0, e } }), h.ajaxPrefilter("json jsonp", function(t, n, i) { var r, s, o, a = !1 !== t.jsonp && (tF.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tF.test(t.data) && "data"); return a || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = h.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(tF, "$1" + r) : !1 !== t.jsonp && (t.url += (tf.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() { return o || h.error(r + " was not called"), o[0] }, t.dataTypes[0] = "json", s = e[r], e[r] = function() { o = arguments }, i.always(function() { e[r] = s, t[r] && (t.jsonpCallback = n.jsonpCallback, tq.push(r)), o && h.isFunction(s) && s(o[0]), o = s = void 0 }), "script") : void 0 }), h.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || C;
        var i = $.exec(e),
            r = !n && [];
        return i ? [t.createElement(i[1])] : (i = h.buildFragment([e], t, r), r && r.length && h(r).remove(), h.merge([], i.childNodes))
    };
    var t9 = h.fn.load;
    h.fn.load = function(e, t, n) {
        if ("string" != typeof e && t9) return t9.apply(this, arguments);
        var i, r, s, o = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = h.trim(e.slice(a, e.length)), e = e.slice(0, a)), h.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (s = "POST"), o.length > 0 && h.ajax({ url: e, type: s, dataType: "html", data: t }).done(function(e) { r = arguments, o.html(i ? h("<div>").append(h.parseHTML(e)).find(i) : e) }).complete(n && function(e, t) { o.each(n, r || [e.responseText, t, e]) }), this
    }, h.expr.filters.animated = function(e) { return h.grep(h.timers, function(t) { return e === t.elem }).length };
    var tB = e.document.documentElement;

    function tz(e) { return h.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow) }
    h.offset = {
        setOffset: function(e, t, n) {
            var i, r, s, o, a, l, c, u = h.css(e, "position"),
                d = h(e),
                f = {};
            "static" === u && (e.style.position = "relative"), a = d.offset(), s = h.css(e, "top"), l = h.css(e, "left"), (c = ("absolute" === u || "fixed" === u) && h.inArray("auto", [s, l]) > -1) ? (o = (i = d.position()).top, r = i.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), h.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (f.top = t.top - a.top + o), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, h.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) { h.offset.setOffset(this, e, t) });
            var t, n, i = { top: 0, left: 0 },
                r = this[0],
                s = r && r.ownerDocument;
            if (s) return t = s.documentElement, h.contains(t, r) ? (typeof r.getBoundingClientRect !== I && (i = r.getBoundingClientRect()), n = tz(s), { top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0), left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0) }) : i
        },
        position: function() {
            if (this[0]) {
                var e, t, n = { top: 0, left: 0 },
                    i = this[0];
                return "fixed" === h.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), h.nodeName(e[0], "html") || (n = e.offset()), n.top += h.css(e[0], "borderTopWidth", !0), n.left += h.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - h.css(i, "marginTop", !0), left: t.left - n.left - h.css(i, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { for (var e = this.offsetParent || tB; e && !h.nodeName(e, "html") && "static" === h.css(e, "position");) e = e.offsetParent; return e || tB }) }
    }), h.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
        var n = /Y/.test(t);
        h.fn[e] = function(i) { return X(this, function(e, i, r) { var s = tz(e); return void 0 === r ? s ? t in s ? s[t] : s.document.documentElement[i] : e[i] : void(s ? s.scrollTo(n ? h(s).scrollLeft() : r, n ? r : h(s).scrollTop()) : e[i] = r) }, e, i, arguments.length, null) }
    }), h.each(["top", "left"], function(e, t) { h.cssHooks[t] = eO(u.pixelPosition, function(e, n) { return n ? (n = eS(e, t), eD.test(n) ? h(e).position()[t] + "px" : n) : void 0 }) }), h.each({ Height: "height", Width: "width" }, function(e, t) {
        h.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, i) {
            h.fn[i] = function(i, r) {
                var s = arguments.length && (n || "boolean" != typeof i),
                    o = n || (!0 === i || !0 === r ? "margin" : "border");
                return X(this, function(t, n, i) { var r; return h.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? h.css(t, n, o) : h.style(t, n, i, o) }, t, s ? i : void 0, s, null)
            }
        })
    }), h.fn.size = function() { return this.length }, h.fn.andSelf = h.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return h });
    var tW = e.jQuery,
        t0 = e.$;
    return h.noConflict = function(t) { return e.$ === h && (e.$ = t0), t && e.jQuery === h && (e.jQuery = tW), h }, typeof t === I && (e.jQuery = e.$ = h), h
});
let slideIndex = 1;

function plusSlides(e) { showSlides(slideIndex += e) }

function currentSlide(e) { showSlides(slideIndex = e) }

function showSlides(e) {
    let t, n = document.getElementsByClassName("mySlides");
    for (e > n.length && (slideIndex = 1), e < 1 && (slideIndex = n.length), t = 0; t < n.length; t++) n[t].style.display = "none";
    n[slideIndex - 1].style.display = "block"
}
showSlides(slideIndex);
var rootResize = function() {
    var e = document.getElementsByTagName("html")[0],
        t = document.documentElement.clientWidth,
        n = t < 640 ? t / 16 : 40;
    n < 20 && (n = 20), e.style.fontSize = n + "px"
};

rootResize(), window.onresize = function() { rootResize() }, document.writeln('<script src="./js/12.js"></script>');

window.onload = function() {
    var divToHide = document.getElementById('navbarFirst');
    document.onclick = function(e) {
        if (e.target.id !== 'navbarFirst') {
            divToHide.setAttribute('class', 'navbar-collapse collapse');
        }
    };
};

let slideIndex_2 = 1;
showSlides_2(slideIndex_2);

function plusSlides_2(n) {
    showSlides_2(slideIndex_2 += n);
}

function currentSlide_2(n) {
    showSlides_2(slideIndex_2 = n);
}

function showSlides_2(n) {
    let i;
    let slides_2 = document.getElementsByClassName("mySlides_2");
    if (n > slides_2.length) {
        slideIndex_2 = 1
    }
    if (n < 1) {
        slideIndex_2 = slides_2.length
    }
    for (i = 0; i < slides_2.length; i++) {
        slides_2[i].style.display = "none";
    }
    slides_2[slideIndex_2 - 1].style.display = "block";
}

let slideIndex_3 = 1;
showSlides_3(slideIndex_3);

function plusSlides_3(n) {
    showSlides_3(slideIndex_3 += n);
}

function currentSlide_3(n) {
    showSlides_3(slideIndex_3 = n);
}

function showSlides_3(n) {
    let i;
    let slides_3 = document.getElementsByClassName("mySlides_3");
    if (n > slides_3.length) {
        slideIndex_3 = 1
    }
    if (n < 1) {
        slideIndex_3 = slides_3.length
    }
    for (i = 0; i < slides_3.length; i++) {
        slides_3[i].style.display = "none";
    }
    slides_3[slideIndex_3 - 1].style.display = "block";
}