import React, { useMemo } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import * as colors from '@dgswcns/design-token';
import { useCNSThemeing } from "@dgswcns/react-theming";
export const CNSThemeProvider = ({ theme, children }) => {
    const token = useMemo(() => ({
        LIGHT: 'lightThemeToken',
        DARK: 'darkThemeToken',
    }), []);
    const themes = useMemo(() => colors[token[useCNSThemeing(theme)]], [theme]);
    return React.createElement(StyledThemeProvider, { theme: themes }, children);
};
