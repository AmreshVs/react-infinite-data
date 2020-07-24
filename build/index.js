/* eslint-disable no-unused-expressions */
module.exports = function (e) { var t = {}; function r(n) { if (t[n]) return t[n].exports; var o = t[n] = { i: n, l: !1, exports: {} }; return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports } return r.m = e, r.c = t, r.d = function (e, t, n) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, r.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, r.t = function (e, t) { if (1 & t && (e = r(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var n = Object.create(null); if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var o in e) r.d(n, o, function (t) { return e[t] }.bind(null, o)); return n }, r.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return r.d(t, "a", t), t }, r.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, r.p = "", r(r.s = 1) }([function (e, t) { e.exports = require("react") }, function (e, t, r) { "use strict"; r.r(t), r.d(t, "default", (function () { return d })); var n = r(0), o = r.n(n); function i() { return (i = Object.assign || function (e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e }).apply(this, arguments) } function u(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); t && (n = n.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n) } return r } function a(e) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {}; t % 2 ? u(Object(r), !0).forEach((function (t) { c(e, t, r[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) })) } return e } function c(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e } function l(e, t) { return function (e) { if (Array.isArray(e)) return e }(e) || function (e, t) { if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return; var r = [], n = !0, o = !1, i = void 0; try { for (var u, a = e[Symbol.iterator](); !(n = (u = a.next()).done) && (r.push(u.value), !t || r.length !== t); n = !0); } catch (e) { o = !0, i = e } finally { try { n || null == a.return || a.return() } finally { if (o) throw i } } return r }(e, t) || function (e, t) { if (!e) return; if ("string" == typeof e) return f(e, t); var r = Object.prototype.toString.call(e).slice(8, -1); "Object" === r && e.constructor && (r = e.constructor.name); if ("Map" === r || "Set" === r) return Array.from(e); if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return f(e, t) }(e, t) || function () { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() } function f(e, t) { (null == t || t > e.length) && (t = e.length); for (var r = 0, n = new Array(t); r < t; r++)n[r] = e[r]; return n } var s = { w100: { width: "100%" }, center: { textAlign: "center" } }; function d(e) { var t = e.loadMore, r = e.loadData, u = e.children, c = e.loader, f = e.endMessage, d = e.loadingContainerClass, p = e.bottomOffset, b = void 0 === p ? 100 : p, y = Object(n.createRef)(null), v = l(Object(n.useState)(!1), 2), O = v[0], m = v[1]; Object(n.useEffect)((function () { return g(), function () { window.removeEventListener("scroll", (function () { })) } }), [r]); var g = function () { if (!0 === t && !1 === O) { var e = window.innerHeight; window.addEventListener("scroll", (function () { if (null !== y.current) { var t = y.current.offsetTop - e - b; this.scrollY >= t && (m(!0), r(), n()) } })); var n = function () { setTimeout((function () { m(!1) }), 0) } } }, j = { className: void 0 !== d ? d : "", style: void 0 === d ? s.w100 : null }; return o.a.createElement(o.a.Fragment, null, u, !0 === t && o.a.createElement("div", i({}, j, { ref: y }), void 0 !== c ? c : o.a.createElement("div", { style: a(a({}, s.w100), s.center) }, o.a.createElement("span", null, "Loading..."))), void 0 !== f && !1 === t ? f : !1 === t && o.a.createElement("div", { style: a(a({}, s.w100), s.center) }, o.a.createElement("span", null, "No more data to show!"))) } }]);