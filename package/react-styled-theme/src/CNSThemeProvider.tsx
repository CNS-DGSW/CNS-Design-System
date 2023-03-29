import React, { PropsWithChildren, useMemo } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { color, ThemeType } from '@dgswcns/design-token';
import { useCNSThemeing } from '@dgswcns/react-theming';

type ThemeTypeObject = { LIGHT: 'lightThemeToken'; DARK: 'darkThemeToken' };
type ThemeKinds = keyof ThemeTypeObject | undefined;

type CNSThemeProps = PropsWithChildren<{ theme: ThemeKinds }>;

export const CNSThemeProvider = ({ theme, children }: CNSThemeProps) => {
    const token: ThemeTypeObject = useMemo(
        () => ({
            LIGHT: 'lightThemeToken',
            DARK: 'darkThemeToken',
        }),
        [],
    );
    const themes: ThemeType = useMemo(() => {
        return {
            colors: color[token[useCNSThemeing(theme)]],
            fonts: {},
        };
    }, [theme]);
    return <StyledThemeProvider theme={themes}>{children}</StyledThemeProvider>;
};
