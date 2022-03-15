! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t(require("lodash"), require("when_you_free")) : "function" == typeof define && define.amd ? define(["lodash", "when_you_free"], t) : "object" == typeof exports ? exports.array_helperz = t(require("lodash"), require("when_you_free")) : e.array_helperz = t(e.lodash, e.when_you_free) }(this, (function(e, t) { return (() => { var r = { 826: e => { var t = { À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", Ấ: "A", Ắ: "A", Ẳ: "A", Ẵ: "A", Ặ: "A", Æ: "AE", Ầ: "A", Ằ: "A", Ȃ: "A", Ç: "C", Ḉ: "C", È: "E", É: "E", Ê: "E", Ë: "E", Ế: "E", Ḗ: "E", Ề: "E", Ḕ: "E", Ḝ: "E", Ȇ: "E", Ì: "I", Í: "I", Î: "I", Ï: "I", Ḯ: "I", Ȋ: "I", Ð: "D", Ñ: "N", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", Ố: "O", Ṍ: "O", Ṓ: "O", Ȏ: "O", Ù: "U", Ú: "U", Û: "U", Ü: "U", Ý: "Y", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", ấ: "a", ắ: "a", ẳ: "a", ẵ: "a", ặ: "a", æ: "ae", ầ: "a", ằ: "a", ȃ: "a", ç: "c", ḉ: "c", è: "e", é: "e", ê: "e", ë: "e", ế: "e", ḗ: "e", ề: "e", ḕ: "e", ḝ: "e", ȇ: "e", ì: "i", í: "i", î: "i", ï: "i", ḯ: "i", ȋ: "i", ð: "d", ñ: "n", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", ố: "o", ṍ: "o", ṓ: "o", ȏ: "o", ù: "u", ú: "u", û: "u", ü: "u", ý: "y", ÿ: "y", Ā: "A", ā: "a", Ă: "A", ă: "a", Ą: "A", ą: "a", Ć: "C", ć: "c", Ĉ: "C", ĉ: "c", Ċ: "C", ċ: "c", Č: "C", č: "c", C̆: "C", c̆: "c", Ď: "D", ď: "d", Đ: "D", đ: "d", Ē: "E", ē: "e", Ĕ: "E", ĕ: "e", Ė: "E", ė: "e", Ę: "E", ę: "e", Ě: "E", ě: "e", Ĝ: "G", Ǵ: "G", ĝ: "g", ǵ: "g", Ğ: "G", ğ: "g", Ġ: "G", ġ: "g", Ģ: "G", ģ: "g", Ĥ: "H", ĥ: "h", Ħ: "H", ħ: "h", Ḫ: "H", ḫ: "h", Ĩ: "I", ĩ: "i", Ī: "I", ī: "i", Ĭ: "I", ĭ: "i", Į: "I", į: "i", İ: "I", ı: "i", Ĳ: "IJ", ĳ: "ij", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", Ḱ: "K", ḱ: "k", K̆: "K", k̆: "k", Ĺ: "L", ĺ: "l", Ļ: "L", ļ: "l", Ľ: "L", ľ: "l", Ŀ: "L", ŀ: "l", Ł: "l", ł: "l", Ḿ: "M", ḿ: "m", M̆: "M", m̆: "m", Ń: "N", ń: "n", Ņ: "N", ņ: "n", Ň: "N", ň: "n", ŉ: "n", N̆: "N", n̆: "n", Ō: "O", ō: "o", Ŏ: "O", ŏ: "o", Ő: "O", ő: "o", Œ: "OE", œ: "oe", P̆: "P", p̆: "p", Ŕ: "R", ŕ: "r", Ŗ: "R", ŗ: "r", Ř: "R", ř: "r", R̆: "R", r̆: "r", Ȓ: "R", ȓ: "r", Ś: "S", ś: "s", Ŝ: "S", ŝ: "s", Ş: "S", Ș: "S", ș: "s", ş: "s", Š: "S", š: "s", Ţ: "T", ţ: "t", ț: "t", Ț: "T", Ť: "T", ť: "t", Ŧ: "T", ŧ: "t", T̆: "T", t̆: "t", Ũ: "U", ũ: "u", Ū: "U", ū: "u", Ŭ: "U", ŭ: "u", Ů: "U", ů: "u", Ű: "U", ű: "u", Ų: "U", ų: "u", Ȗ: "U", ȗ: "u", V̆: "V", v̆: "v", Ŵ: "W", ŵ: "w", Ẃ: "W", ẃ: "w", X̆: "X", x̆: "x", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Y̆: "Y", y̆: "y", Ź: "Z", ź: "z", Ż: "Z", ż: "z", Ž: "Z", ž: "z", ſ: "s", ƒ: "f", Ơ: "O", ơ: "o", Ư: "U", ư: "u", Ǎ: "A", ǎ: "a", Ǐ: "I", ǐ: "i", Ǒ: "O", ǒ: "o", Ǔ: "U", ǔ: "u", Ǖ: "U", ǖ: "u", Ǘ: "U", ǘ: "u", Ǚ: "U", ǚ: "u", Ǜ: "U", ǜ: "u", Ứ: "U", ứ: "u", Ṹ: "U", ṹ: "u", Ǻ: "A", ǻ: "a", Ǽ: "AE", ǽ: "ae", Ǿ: "O", ǿ: "o", Þ: "TH", þ: "th", Ṕ: "P", ṕ: "p", Ṥ: "S", ṥ: "s", X́: "X", x́: "x", Ѓ: "Г", ѓ: "г", Ќ: "К", ќ: "к", A̋: "A", a̋: "a", E̋: "E", e̋: "e", I̋: "I", i̋: "i", Ǹ: "N", ǹ: "n", Ồ: "O", ồ: "o", Ṑ: "O", ṑ: "o", Ừ: "U", ừ: "u", Ẁ: "W", ẁ: "w", Ỳ: "Y", ỳ: "y", Ȁ: "A", ȁ: "a", Ȅ: "E", ȅ: "e", Ȉ: "I", ȉ: "i", Ȍ: "O", ȍ: "o", Ȑ: "R", ȑ: "r", Ȕ: "U", ȕ: "u", B̌: "B", b̌: "b", Č̣: "C", č̣: "c", Ê̌: "E", ê̌: "e", F̌: "F", f̌: "f", Ǧ: "G", ǧ: "g", Ȟ: "H", ȟ: "h", J̌: "J", ǰ: "j", Ǩ: "K", ǩ: "k", M̌: "M", m̌: "m", P̌: "P", p̌: "p", Q̌: "Q", q̌: "q", Ř̩: "R", ř̩: "r", Ṧ: "S", ṧ: "s", V̌: "V", v̌: "v", W̌: "W", w̌: "w", X̌: "X", x̌: "x", Y̌: "Y", y̌: "y", A̧: "A", a̧: "a", B̧: "B", b̧: "b", Ḑ: "D", ḑ: "d", Ȩ: "E", ȩ: "e", Ɛ̧: "E", ɛ̧: "e", Ḩ: "H", ḩ: "h", I̧: "I", i̧: "i", Ɨ̧: "I", ɨ̧: "i", M̧: "M", m̧: "m", O̧: "O", o̧: "o", Q̧: "Q", q̧: "q", U̧: "U", u̧: "u", X̧: "X", x̧: "x", Z̧: "Z", z̧: "z" },
                        r = Object.keys(t).join("|"),
                        n = new RegExp(r, "g"),
                        o = new RegExp(r, ""),
                        a = function(e) { return e.replace(n, (function(e) { return t[e] })) };
                    e.exports = a, e.exports.has = function(e) { return !!e.match(o) }, e.exports.remove = a }, 356: t => { "use strict";
                    t.exports = e }, 529: e => { "use strict";
                    e.exports = t } },
            n = {};

        function o(e) { var t = n[e]; if (void 0 !== t) return t.exports; var a = n[e] = { exports: {} }; return r[e](a, a.exports, o), a.exports }
        o.n = e => { var t = e && e.__esModule ? () => e.default : () => e; return o.d(t, { a: t }), t }, o.d = (e, t) => { for (var r in t) o.o(t, r) && !o.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] }) }, o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o.r = e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }; var a = {}; return (() => { "use strict";
            o.r(a), o.d(a, { contains: () => k, countByCondition: () => m, doesNotContain: () => w, filterAndSort: () => I, filterValues: () => b, getOneMakeChildOfAnother: () => U, group: () => S, makeChildOfAnother: () => x, makeChildOfAnotherTest: () => M, mergeByKeys: () => C, sortAsc: () => O, sortDesc: () => A, testMergeByKeys: () => j, trimArr: () => g }); var e = o(356);

            function t() { return t = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]) } return e }, t.apply(this, arguments) } var r = o(826),
                n = o.n(r),
                i = { CASE_SENSITIVE_EQUAL: 7, EQUAL: 6, STARTS_WITH: 5, WORD_STARTS_WITH: 4, CONTAINS: 3, ACRONYM: 2, MATCHES: 1, NO_MATCH: 0 };
            s.rankings = i; var u = function(e, t) { return String(e.rankedValue).localeCompare(String(t.rankedValue)) };

            function s(e, r, n) { void 0 === n && (n = {}); var o = n,
                    a = o.keys,
                    s = o.threshold,
                    f = void 0 === s ? i.MATCHES : s,
                    d = o.baseSort,
                    y = void 0 === d ? u : d,
                    p = o.sorter,
                    v = void 0 === p ? function(e) { return e.sort((function(e, t) { return function(e, t, r) { var n = e.rank,
                                    o = e.keyIndex,
                                    a = t.rank,
                                    i = t.keyIndex; return n === a ? o === i ? r(e, t) : o < i ? -1 : 1 : n > a ? -1 : 1 }(e, t, y) })) } : p,
                    g = e.reduce((function(e, o, u) { var s = function(e, t, r, n) { return t ? function(e, t) { for (var r = [], n = 0, o = t.length; n < o; n++)
                                        for (var a = t[n], i = h(a), u = c(e, a), s = 0, l = u.length; s < l; s++) r.push({ itemValue: u[s], attributes: i }); return r }(e, t).reduce((function(e, t, o) { var a = e.rank,
                                        u = e.rankedValue,
                                        s = e.keyIndex,
                                        f = e.keyThreshold,
                                        c = t.itemValue,
                                        d = t.attributes,
                                        h = l(c, r, n),
                                        y = u,
                                        p = d.minRanking,
                                        v = d.maxRanking,
                                        g = d.threshold; return h < p && h >= i.MATCHES ? h = p : h > v && (h = v), h > a && (a = h, s = o, f = g, y = c), { rankedValue: y, rank: a, keyIndex: s, keyThreshold: f } }), { rankedValue: e, rank: i.NO_MATCH, keyIndex: -1, keyThreshold: n.threshold }) : { rankedValue: e, rank: l(e, r, n), keyIndex: -1, keyThreshold: n.threshold } }(o, a, r, n),
                            d = s.rank,
                            y = s.keyThreshold; return d >= (void 0 === y ? f : y) && e.push(t({}, s, { item: o, index: u })), e }), []); return v(g).map((function(e) { return e.item })) }

            function l(e, t, r) { return e = f(e, r), (t = f(t, r)).length > e.length ? i.NO_MATCH : e === t ? i.CASE_SENSITIVE_EQUAL : (e = e.toLowerCase()) === (t = t.toLowerCase()) ? i.EQUAL : e.startsWith(t) ? i.STARTS_WITH : e.includes(" " + t) ? i.WORD_STARTS_WITH : e.includes(t) ? i.CONTAINS : 1 === t.length ? i.NO_MATCH : (n = e, o = "", n.split(" ").forEach((function(e) { e.split("-").forEach((function(e) { o += e.substr(0, 1) })) })), o).includes(t) ? i.ACRONYM : function(e, t) { var r = 0,
                        n = 0;

                    function o(e, t, n) { for (var o = n, a = t.length; o < a; o++)
                            if (t[o] === e) return r += 1, o + 1;
                        return -1 } var a, u, s = o(t[0], e, 0); if (s < 0) return i.NO_MATCH;
                    n = s; for (var l = 1, f = t.length; l < f; l++)
                        if (!((n = o(t[l], e, n)) > -1)) return i.NO_MATCH;
                    return a = 1 / (n - s), u = r / t.length, i.MATCHES + u * a }(e, t); var n, o }

            function f(e, t) { return e = "" + e, t.keepDiacritics || (e = n()(e)), e }

            function c(e, t) { var r; if ("object" == typeof t && (t = t.key), "function" == typeof t) r = t(e);
                else if (null == e) r = null;
                else if (Object.hasOwnProperty.call(e, t)) r = e[t];
                else { if (t.includes(".")) return function(e, t) { for (var r = e.split("."), n = [t], o = 0, a = r.length; o < a; o++) { for (var i = r[o], u = [], s = 0, l = n.length; s < l; s++) { var f = n[s]; if (null != f)
                                    if (Object.hasOwnProperty.call(f, i)) { var c = f[i];
                                        null != c && u.push(c) } else "*" === i && (u = u.concat(f)) }
                            n = u } if (Array.isArray(n[0])) { var d = []; return d.concat.apply(d, n) } return n }(t, e);
                    r = null } return null == r ? [] : Array.isArray(r) ? r : [String(r)] } var d = { maxRanking: 1 / 0, minRanking: -1 / 0 };

            function h(e) { return "string" == typeof e ? d : t({}, d, e) } var y = o(529);

            function p(e, t) { return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) { var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (null != r) { var n, o, a = [],
                            i = !0,
                            u = !1; try { for (r = r.call(e); !(i = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); i = !0); } catch (e) { u = !0, o = e } finally { try { i || null == r.return || r.return() } finally { if (u) throw o } } return a } }(e, t) || function(e, t) { if (e) { if ("string" == typeof e) return v(e, t); var r = Object.prototype.toString.call(e).slice(8, -1); return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? v(e, t) : void 0 } }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function v(e, t) {
                (null == t || t > e.length) && (t = e.length); for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]; return n }

            function g(e) { for (var t = 0; t < e.length; t++)
                    for (var r = 0, n = Object.entries(e[t]); r < n.length; r++) { var o = p(n[r], 2),
                            a = o[0],
                            i = o[1]; if ("string" == typeof i) { var u = i.trim();
                            e[t][a] = u } }
                return e }

            function m(e, t, r) { for (var n = 0, o = 0; o < e.length; o++) e[o][t] === r && n++; return n }

            function b(e, t, r) { return g(s(e, t, { keys: r })) }

            function O(t, r, n) { if ("date" === n)
                    for (var o = 0; o < t.length; o++) t[o][r] = (0, y.formatDateToPost)(t[o][r]); return g((0, e.sortBy)(t, [r])) }

            function A(t, r, n) { if ("date" === n)
                    for (var o = 0; o < t.length; o++) t[o][r] = (0, y.formatDateToPost)(t[o][r]); return g((0, e.sortBy)(t, [r]).reverse()) }

            function k(e, t, r) { for (var n = [], o = 0; o < e.length; o++) e[o][t] === r && n.push(e[o]); return g(n) }

            function w(e, t, r) { for (var n = [], o = 0; o < e.length; o++) e[o][t] !== r && n.push(e[o]); return g(n) }

            function I(t, r, n, o) { var a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                    i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : void 0,
                    u = (0, e.filter)(t, r),
                    s = (0, e.sortBy)(u, [n]); if (s = !1 === a ? A(s, n, o) : O(s, n, o), i) { var l = s.slice(0, i); return g(l) } return g(s) }

            function S(t, r) { return g((0, e.groupBy)(t, r)) }

            function T(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, n) } return r }

            function E(e) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? T(Object(r), !0).forEach((function(t) { _(e, t, r[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : T(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) })) } return e }

            function _(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e }

            function C(t, r) { var n = {}; return n[r.key] = r.value, (0, e.map)(t, (function(t) { return (0, e.merge)(t, (0, e.find)(r.data, n)) })) }

            function j() { var e = C([{ title: "I want to be free. Free to live,  and to find my own way,  to love,  or to be alone,  but at least it is my choice,  and I am so tired of not having choices,  so scared of the years rushing past beneath my feet. I do not want to die as I’ve lived,  which is no life at all.", status: "to do", id: 1 }, { title: "Because we loved each other too much and found each other too interesting. And I love that about humanity,  and in fact it’s the very reason I root for us to survive—because we are so stupid about each other.", status: "doing", id: 2 }, { title: "But a life without art,  without wonder,  without beautiful things—she would go mad. She has gone mad. What she needs are stories. Stories are a way to preserve one’s self. To be remembered. And to forget.", status: "doing", id: 3 }], { data: [{ name: "Whatever", status: "doing", problem_id: 2, id: 1 }, { name: "is", status: "doing", problem_id: 2, id: 2 }, { name: "people", status: "to do", problem_id: 2, id: 3 }], key: "problem_id", value: 2 });
                console.log(e) }

            function x(e, t) { return e.data.map((function(r) { return E(E({}, r), {}, { child: t.data.filter((function(n) { return r[e.key] === n[t.key] })).map((function(e) { return e })) }) })) }

            function U(t, r) { var n = {};
                n[r.key] = r.value; var o = t.data.map((function(e) { return E(E({}, e), {}, { child: r.data.filter((function(n) { return e[t.key] === n[r.key] })).map((function(e) { return e })) }) })),
                    a = (o.filter((function(e) { return n })), {}); return a[t.key] = t.value, (0, e.filter)(o, a) }

            function M() { var e = [{ title: "I want to be free. Free to live,  and to find my own way,  to love,  or to be alone,  but at least it is my choice,  and I am so tired of not having choices,  so scared of the years rushing past beneath my feet. I do not want to die as I’ve lived,  which is no life at all.", status: "to do", id: 1 }, { title: "Because we loved each other too much and found each other too interesting. And I love that about humanity,  and in fact it’s the very reason I root for us to survive—because we are so stupid about each other.", status: "doing", id: 2 }, { title: "But a life without art,  without wonder,  without beautiful things—she would go mad. She has gone mad. What she needs are stories. Stories are a way to preserve one’s self. To be remembered. And to forget.", status: "doing", id: 3 }],
                    t = [{ name: "Whatever", status: "doing", problem_id: 2, id: 1 }, { name: "is", status: "doing", problem_id: 2, id: 2 }, { name: "people", status: "to do", problem_id: 2, id: 3 }],
                    r = U({ data: e, key: "id", value: 2 }, { data: t, key: "problem_id", value: 2 });
                console.log(r); var n = x({ data: e, key: "id" }, { data: t, key: "problem_id" });
                console.log(n) } })(), a })() }));