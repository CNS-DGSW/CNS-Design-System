'use strict';
var d = Object.create;
var h = Object.defineProperty;
var y = Object.getOwnPropertyDescriptor;
var c = Object.getOwnPropertyNames;
var f = Object.getPrototypeOf,
    k = Object.prototype.hasOwnProperty;
var l = (e, o) => {
        for (var r in o) h(e, r, { get: o[r], enumerable: !0 });
    },
    i = (e, o, r, t) => {
        if ((o && typeof o == 'object') || typeof o == 'function')
            for (let m of c(o))
                !k.call(e, m) &&
                    m !== r &&
                    h(e, m, { get: () => o[m], enumerable: !(t = y(o, m)) || t.enumerable });
        return e;
    };
var P = (e, o, r) => (
        (r = e != null ? d(f(e)) : {}),
        i(o || !e || !e.__esModule ? h(r, 'default', { value: e, enumerable: !0 }) : r, e)
    ),
    C = (e) => i(h({}, '__esModule', { value: !0 }), e);
var u = {};
l(u, { CNSThemeProvider: () => S });
module.exports = C(u);
var T = P(require('react')),
    n = require('styled-components'),
    p = require('@dgswcns/design-token'),
    s = require('@dgswcns/react-theming'),
    S = ({ theme: e, children: o }) => {
        let r = (0, T.useMemo)(() => ({ LIGHT: 'lightThemeToken', DARK: 'darkThemeToken' }), []),
            t = (0, T.useMemo)(
                () => ({ colors: p.color[r[(0, s.useCNSThemeing)(e)]], fonts: {} }),
                [e],
            );
        return T.default.createElement(n.ThemeProvider, { theme: t }, o);
    };
0 && (module.exports = { CNSThemeProvider });
