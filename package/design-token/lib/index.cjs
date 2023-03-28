'use strict';
var l = Object.defineProperty;
var g = Object.getOwnPropertyDescriptor;
var t = Object.getOwnPropertyNames;
var F = Object.prototype.hasOwnProperty;
var f = (r, e) => {
        for (var E in e) l(r, E, { get: e[E], enumerable: !0 });
    },
    u = (r, e, E, y) => {
        if ((e && typeof e == 'object') || typeof e == 'function')
            for (let o of t(e))
                !F.call(r, o) &&
                    o !== E &&
                    l(r, o, { get: () => e[o], enumerable: !(y = g(e, o)) || y.enumerable });
        return r;
    };
var p = (r) => u(l({}, '__esModule', { value: !0 }), r);
var m = {};
f(m, { color: () => T });
module.exports = p(m);
var a = Object.freeze({
        white: '#ffffff',
        black: '#000000',
        blue100: '#F8FAFD',
        blue200: '',
        blue300: '',
        blue400: '#1485EE',
        blue500: '',
        blue600: '',
        blue700: '',
        blue800: '',
        blue900: '#1E2F44',
        gray100: '#FAFAFA',
        gray200: '#F5F5F5',
        gray300: '#EEEEEE',
        gray400: '#E0E0E0',
        gray500: '#BDBDBD',
        gray600: '#9E9E9E',
        gray700: '#757575',
        gray800: '#424344',
        gray900: '#212121',
    }),
    b = Object.freeze({
        white: '#fffff',
        black: '#000000',
        blue100: '#F8FAFD',
        blue200: '',
        blue300: '',
        blue400: '#1485EE',
        blue500: '',
        blue600: '',
        blue700: '',
        blue800: '',
        blue900: '#1E2F44',
        gray100: '#FAFAFA',
        gray200: '#F5F5F5',
        gray300: '#EEEEEE',
        gray400: '#E0E0E0',
        gray500: '#BDBDBD',
        gray600: '#9E9E9E',
        gray700: '#757575',
        gray800: '#424344',
        gray900: '#212121',
    });
var T = { darkThemeToken: b, lightThemeToken: a };
0 && (module.exports = { color });
