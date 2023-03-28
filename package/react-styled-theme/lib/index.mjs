import t, { useMemo as o } from 'react';
import { ThemeProvider as h } from 'styled-components';
import { color as i } from '@dgswcns/design-token';
import { useCNSThemeing as n } from '@dgswcns/react-theming';
var k = ({ theme: e, children: r }) => {
    let m = o(() => ({ LIGHT: 'lightThemeToken', DARK: 'darkThemeToken' }), []),
        T = o(() => ({ colors: i[m[n(e)]], fonts: {} }), [e]);
    return t.createElement(h, { theme: T }, r);
};
export { k as CNSThemeProvider };
