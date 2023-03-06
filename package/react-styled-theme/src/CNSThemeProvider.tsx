import React, { PropsWithChildren, useMemo } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import * as colors from '@dgswcns/design-token';

type ThemeType = { LIGHT: 'lightThemeToken'; DARK: 'darkThemeToken' };
type ThemeKinds = keyof ThemeType;

type CNSThemeProps = PropsWithChildren<{ theme: ThemeKinds }>;

const CNSThemeProvider = ({ theme, children }: CNSThemeProps) => {
    const token: ThemeType = useMemo(
        () => ({
            LIGHT: 'lightThemeToken',
            DARK: 'darkThemeToken',
        }),
        [],
    );
    const themes = useMemo(() => colors[token[theme]], []);
    return <StyledThemeProvider theme={themes}>{children}</StyledThemeProvider>;
};

export default CNSThemeProvider;
