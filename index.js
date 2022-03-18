! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t(require("lodash")) : "function" == typeof define && define.amd ? define(["lodash"], t) : "object" == typeof exports ? exports.arrz = t(require("lodash")) : e.arrz = t(e.lodash) }(this, (function(e) { return (() => { var t = { 826: e => { var t = { À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", Ấ: "A", Ắ: "A", Ẳ: "A", Ẵ: "A", Ặ: "A", Æ: "AE", Ầ: "A", Ằ: "A", Ȃ: "A", Ç: "C", Ḉ: "C", È: "E", É: "E", Ê: "E", Ë: "E", Ế: "E", Ḗ: "E", Ề: "E", Ḕ: "E", Ḝ: "E", Ȇ: "E", Ì: "I", Í: "I", Î: "I", Ï: "I", Ḯ: "I", Ȋ: "I", Ð: "D", Ñ: "N", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", Ố: "O", Ṍ: "O", Ṓ: "O", Ȏ: "O", Ù: "U", Ú: "U", Û: "U", Ü: "U", Ý: "Y", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", ấ: "a", ắ: "a", ẳ: "a", ẵ: "a", ặ: "a", æ: "ae", ầ: "a", ằ: "a", ȃ: "a", ç: "c", ḉ: "c", è: "e", é: "e", ê: "e", ë: "e", ế: "e", ḗ: "e", ề: "e", ḕ: "e", ḝ: "e", ȇ: "e", ì: "i", í: "i", î: "i", ï: "i", ḯ: "i", ȋ: "i", ð: "d", ñ: "n", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", ố: "o", ṍ: "o", ṓ: "o", ȏ: "o", ù: "u", ú: "u", û: "u", ü: "u", ý: "y", ÿ: "y", Ā: "A", ā: "a", Ă: "A", ă: "a", Ą: "A", ą: "a", Ć: "C", ć: "c", Ĉ: "C", ĉ: "c", Ċ: "C", ċ: "c", Č: "C", č: "c", C̆: "C", c̆: "c", Ď: "D", ď: "d", Đ: "D", đ: "d", Ē: "E", ē: "e", Ĕ: "E", ĕ: "e", Ė: "E", ė: "e", Ę: "E", ę: "e", Ě: "E", ě: "e", Ĝ: "G", Ǵ: "G", ĝ: "g", ǵ: "g", Ğ: "G", ğ: "g", Ġ: "G", ġ: "g", Ģ: "G", ģ: "g", Ĥ: "H", ĥ: "h", Ħ: "H", ħ: "h", Ḫ: "H", ḫ: "h", Ĩ: "I", ĩ: "i", Ī: "I", ī: "i", Ĭ: "I", ĭ: "i", Į: "I", į: "i", İ: "I", ı: "i", Ĳ: "IJ", ĳ: "ij", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", Ḱ: "K", ḱ: "k", K̆: "K", k̆: "k", Ĺ: "L", ĺ: "l", Ļ: "L", ļ: "l", Ľ: "L", ľ: "l", Ŀ: "L", ŀ: "l", Ł: "l", ł: "l", Ḿ: "M", ḿ: "m", M̆: "M", m̆: "m", Ń: "N", ń: "n", Ņ: "N", ņ: "n", Ň: "N", ň: "n", ŉ: "n", N̆: "N", n̆: "n", Ō: "O", ō: "o", Ŏ: "O", ŏ: "o", Ő: "O", ő: "o", Œ: "OE", œ: "oe", P̆: "P", p̆: "p", Ŕ: "R", ŕ: "r", Ŗ: "R", ŗ: "r", Ř: "R", ř: "r", R̆: "R", r̆: "r", Ȓ: "R", ȓ: "r", Ś: "S", ś: "s", Ŝ: "S", ŝ: "s", Ş: "S", Ș: "S", ș: "s", ş: "s", Š: "S", š: "s", Ţ: "T", ţ: "t", ț: "t", Ț: "T", Ť: "T", ť: "t", Ŧ: "T", ŧ: "t", T̆: "T", t̆: "t", Ũ: "U", ũ: "u", Ū: "U", ū: "u", Ŭ: "U", ŭ: "u", Ů: "U", ů: "u", Ű: "U", ű: "u", Ų: "U", ų: "u", Ȗ: "U", ȗ: "u", V̆: "V", v̆: "v", Ŵ: "W", ŵ: "w", Ẃ: "W", ẃ: "w", X̆: "X", x̆: "x", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Y̆: "Y", y̆: "y", Ź: "Z", ź: "z", Ż: "Z", ż: "z", Ž: "Z", ž: "z", ſ: "s", ƒ: "f", Ơ: "O", ơ: "o", Ư: "U", ư: "u", Ǎ: "A", ǎ: "a", Ǐ: "I", ǐ: "i", Ǒ: "O", ǒ: "o", Ǔ: "U", ǔ: "u", Ǖ: "U", ǖ: "u", Ǘ: "U", ǘ: "u", Ǚ: "U", ǚ: "u", Ǜ: "U", ǜ: "u", Ứ: "U", ứ: "u", Ṹ: "U", ṹ: "u", Ǻ: "A", ǻ: "a", Ǽ: "AE", ǽ: "ae", Ǿ: "O", ǿ: "o", Þ: "TH", þ: "th", Ṕ: "P", ṕ: "p", Ṥ: "S", ṥ: "s", X́: "X", x́: "x", Ѓ: "Г", ѓ: "г", Ќ: "К", ќ: "к", A̋: "A", a̋: "a", E̋: "E", e̋: "e", I̋: "I", i̋: "i", Ǹ: "N", ǹ: "n", Ồ: "O", ồ: "o", Ṑ: "O", ṑ: "o", Ừ: "U", ừ: "u", Ẁ: "W", ẁ: "w", Ỳ: "Y", ỳ: "y", Ȁ: "A", ȁ: "a", Ȅ: "E", ȅ: "e", Ȉ: "I", ȉ: "i", Ȍ: "O", ȍ: "o", Ȑ: "R", ȑ: "r", Ȕ: "U", ȕ: "u", B̌: "B", b̌: "b", Č̣: "C", č̣: "c", Ê̌: "E", ê̌: "e", F̌: "F", f̌: "f", Ǧ: "G", ǧ: "g", Ȟ: "H", ȟ: "h", J̌: "J", ǰ: "j", Ǩ: "K", ǩ: "k", M̌: "M", m̌: "m", P̌: "P", p̌: "p", Q̌: "Q", q̌: "q", Ř̩: "R", ř̩: "r", Ṧ: "S", ṧ: "s", V̌: "V", v̌: "v", W̌: "W", w̌: "w", X̌: "X", x̌: "x", Y̌: "Y", y̌: "y", A̧: "A", a̧: "a", B̧: "B", b̧: "b", Ḑ: "D", ḑ: "d", Ȩ: "E", ȩ: "e", Ɛ̧: "E", ɛ̧: "e", Ḩ: "H", ḩ: "h", I̧: "I", i̧: "i", Ɨ̧: "I", ɨ̧: "i", M̧: "M", m̧: "m", O̧: "O", o̧: "o", Q̧: "Q", q̧: "q", U̧: "U", u̧: "u", X̧: "X", x̧: "x", Z̧: "Z", z̧: "z" },
                        o = Object.keys(t).join("|"),
                        r = new RegExp(o, "g"),
                        n = new RegExp(o, ""),
                        a = function(e) { return e.replace(r, (function(e) { return t[e] })) };
                    e.exports = a, e.exports.has = function(e) { return !!e.match(n) }, e.exports.remove = a }, 356: t => { "use strict";
                    t.exports = e }, 150: e => { "use strict";

                    function t(e, t, o, r, n) { "object" != typeof e && Boolean(e.toString().match(n)) && !t.some((t => Object.is(t, e))) && t.push(e), Object.keys(e).forEach((a => { const i = r ? o.includes(a) : !o.includes(a);
                            Array.isArray(e[a]) && e[a].forEach((o => { const r = Boolean(o.toString().match(n)) && !t.some((e => Object.is(e, o))); "object" != typeof o && r ? t.push(e) : "object" == typeof o && Object.keys(o).forEach((r => { r.length > 0 && !i || !Boolean(o[r].toString().match(n)) || t.some((e => Object.is(e, o))) || t.push(e) })) })), o.length > 0 && !i || !Boolean(e[a].toString().match(n)) || t.some((t => Object.is(t, e))) || t.push(e) })) }

                    function o(e, r, n, a, i) { Array.isArray(e) ? e.forEach((u => { Array.isArray(e) ? o(u, r, n, a, i) : t(u, r, n, a, i) })) : t(e, r, n, a, i) }
                    e.exports = function({ searchText: e = "", searchItems: t = [], keys: r = [], include: n = !0, exact: a = !1 }) { const i = []; return o(t, i, r, n, a ? new RegExp(`^${e}$`, "i") : new RegExp(e, "i")), i } } },
            o = {};

        function r(e) { var n = o[e]; if (void 0 !== n) return n.exports; var a = o[e] = { exports: {} }; return t[e](a, a.exports, r), a.exports }
        r.n = e => { var t = e && e.__esModule ? () => e.default : () => e; return r.d(t, { a: t }), t }, r.d = (e, t) => { for (var o in t) r.o(t, o) && !r.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] }) }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }; var n = {}; return (() => { "use strict";
            r.r(n), r.d(n, { contains: () => f, countByCondition: () => u, doesNotContain: () => d, filterAndSort: () => h, filterValues: () => s, filterWithFuncObjectOrString: () => j, getOneMakeChildOfAnother: () => O, getUnique: () => x, group: () => y, makeChildOfAnother: () => w, makeChildOfAnotherTest: () => A, mergeByKeys: () => g, sortAsc: () => l, sortDesc: () => c, testFilterWithFuncStringObject: () => S, testMergeByKeys: () => v, testUnique: () => k, trimArr: () => i }); var e = r(356);
            r(826); const t = r(150);

            function o(e, t) { return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) { var o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (null != o) { var r, n, a = [],
                            i = !0,
                            u = !1; try { for (o = o.call(e); !(i = (r = o.next()).done) && (a.push(r.value), !t || a.length !== t); i = !0); } catch (e) { u = !0, n = e } finally { try { i || null == o.return || o.return() } finally { if (u) throw n } } return a } }(e, t) || function(e, t) { if (e) { if ("string" == typeof e) return a(e, t); var o = Object.prototype.toString.call(e).slice(8, -1); return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? a(e, t) : void 0 } }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length); for (var o = 0, r = new Array(t); o < t; o++) r[o] = e[o]; return r }

            function i(e) { for (var t = 0; t < e.length; t++)
                    for (var r = 0, n = Object.entries(e[t]); r < n.length; r++) { var a = o(n[r], 2),
                            i = a[0],
                            u = a[1]; if ("string" == typeof u) { var s = u.trim();
                            e[t][i] = s } }
                return e }

            function u(e, t, o) { for (var r = 0, n = 0; n < e.length; n++) e[n][t] === o && r++; return r }

            function s(e, o, r) { return i(t({ searchText: o, searchItems: e, keys: r })) }

            function l(t, o, r) { if ("date" === r)
                    for (var n = 0; n < t.length; n++) "string" == typeof t[n][o] ? t[n][o] = new Date(t[n][o]) : t[n][o] = t[n][o]; return i((0, e.sortBy)(t, [o])) }

            function c(t, o, r) { if ("date" === r)
                    for (var n = 0; n < t.length; n++) "string" == typeof t[n][o] ? t[n][o] = new Date(t[n][o]) : t[n][o] = t[n][o]; return i((0, e.sortBy)(t, [o]).reverse()) }

            function f(e, t, o) { for (var r = [], n = 0; n < e.length; n++) e[n][t] === o && r.push(e[n]); return i(r) }

            function d(e, t, o) { for (var r = [], n = 0; n < e.length; n++) e[n][t] !== o && r.push(e[n]); return i(r) }

            function h(t, o, r, n) { var a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                    u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : void 0,
                    s = (0, e.filter)(t, o),
                    f = (0, e.sortBy)(s, [r]); if (f = !1 === a ? c(f, r, n) : l(f, r, n), u) { var d = f.slice(0, u); return i(d) } return i(f) }

            function y(t, o) { return i((0, e.groupBy)(t, o)) }

            function p(e, t) { var o = Object.keys(e); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), o.push.apply(o, r) } return o }

            function m(e) { for (var t = 1; t < arguments.length; t++) { var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(o), !0).forEach((function(t) { b(e, t, o[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : p(Object(o)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t)) })) } return e }

            function b(e, t, o) { return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e }

            function g(t, o) { var r = {}; return r[o.key] = o.value, (0, e.map)(t, (function(t) { return (0, e.merge)(t, (0, e.find)(o.data, r)) })) }

            function v() { var e = g([{ title: "I want to be free. Free to live,  and to find my own way,  to love,  or to be alone,  but at least it is my choice,  and I am so tired of not having choices,  so scared of the years rushing past beneath my feet. I do not want to die as I’ve lived,  which is no life at all.", status: "to do", id: 1 }, { title: "Because we loved each other too much and found each other too interesting. And I love that about humanity,  and in fact it’s the very reason I root for us to survive—because we are so stupid about each other.", status: "doing", id: 2 }, { title: "But a life without art,  without wonder,  without beautiful things—she would go mad. She has gone mad. What she needs are stories. Stories are a way to preserve one’s self. To be remembered. And to forget.", status: "doing", id: 3 }], { data: [{ name: "Whatever", status: "doing", problem_id: 2, id: 1 }, { name: "is", status: "doing", problem_id: 2, id: 2 }, { name: "people", status: "to do", problem_id: 2, id: 3 }], key: "problem_id", value: 2 });
                console.log(e) }

            function w(e, t) { return e.data.map((function(o) { return m(m({}, o), {}, { child: t.data.filter((function(r) { return o[e.key] === r[t.key] })).map((function(e) { return e })) }) })) }

            function O(t, o) { var r = {};
                r[o.key] = o.value; var n = t.data.map((function(e) { return m(m({}, e), {}, { child: o.data.filter((function(r) { return e[t.key] === r[o.key] })).map((function(e) { return e })) }) })),
                    a = (n.filter((function(e) { return r })), {}); return a[t.key] = t.value, (0, e.filter)(n, a) }

            function A() { var e = [{ title: "I want to be free. Free to live,  and to find my own way,  to love,  or to be alone,  but at least it is my choice,  and I am so tired of not having choices,  so scared of the years rushing past beneath my feet. I do not want to die as I’ve lived,  which is no life at all.", status: "to do", id: 1 }, { title: "Because we loved each other too much and found each other too interesting. And I love that about humanity,  and in fact it’s the very reason I root for us to survive—because we are so stupid about each other.", status: "doing", id: 2 }, { title: "But a life without art,  without wonder,  without beautiful things—she would go mad. She has gone mad. What she needs are stories. Stories are a way to preserve one’s self. To be remembered. And to forget.", status: "doing", id: 3 }],
                    t = [{ name: "Whatever", status: "doing", problem_id: 2, id: 1 }, { name: "is", status: "doing", problem_id: 2, id: 2 }, { name: "people", status: "to do", problem_id: 2, id: 3 }],
                    o = O({ data: e, key: "id", value: 2 }, { data: t, key: "problem_id", value: 2 });
                console.log(o); var r = w({ data: e, key: "id" }, { data: t, key: "problem_id" });
                console.log(r) }

            function I(e) { return I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, I(e) }

            function j(t, o) { var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0; if (!(t.length > 0)) return []; if ("function" == typeof o) t.filter(o);
                else { if ("string" == typeof o && "string" == typeof r) { var n = f(t, o, r); return n } if ("object" === I(o)) return (0, e.filter)(t, o); if ("string" == typeof o) return s(t, "", [o]) } var a = (0, e.filter)(t, o); return a }

            function S() { var e = [{ name: "Because we loved each other too much and found each other too interesting. And I love that about humanity,  and in fact it’s the very reason I root for us to survive—because we are so stupid about each other.", status: "doing", problem_id: 2, id: 1 }, { name: "I want to be free. Free to live,  and to find my own way,  to love,  or to be alone,  but at least it is my choice,  and I am so tired of not having choices,  so scared of the years rushing past beneath my feet. I do not want to die as I’ve lived,  which is no life at all.", status: "doing", problem_id: 2, id: 2 }, { name: "But a life without art,  without wonder,  without beautiful things—she would go mad. She has gone mad. What she needs are stories. Stories are a way to preserve one’s self. To be remembered. And to forget.", status: "to do", problem_id: 2, id: 3 }],
                    t = j(e, (function(e) { if ("to do" === e.status) return e })),
                    o = j(e, { status: "to do" }),
                    r = j(e, "status", "to do"),
                    n = j(e, "status");
                console.log(t), console.log(o), console.log(r), console.log(n) }

            function E(e, t) {
                (null == t || t > e.length) && (t = e.length); for (var o = 0, r = new Array(t); o < t; o++) r[o] = e[o]; return r }

            function x(e, t) { return function(e) { return function(e) { if (Array.isArray(e)) return E(e) }(e) || function(e) { if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e) }(e) || function(e, t) { if (e) { if ("string" == typeof e) return E(e, t); var o = Object.prototype.toString.call(e).slice(8, -1); return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? E(e, t) : void 0 } }(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }(new Map(e.map((function(e) { return [e[t], e] }))).values()) } var U = [{ id: 1, hello: "whatsup" }, { id: 2, hello: "whatsup" }, { id: 1, hello: "whatsup" }];

            function k() { var e = x(U, "id");
                console.log(e) } })(), n })() }));