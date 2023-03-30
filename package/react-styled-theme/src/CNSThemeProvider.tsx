import React, { PropsWithChildren, useMemo } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
<<<<<<< HEAD
import { color, ThemeType, fonts } from '@dgswcns/design-token';
=======
import { color, ThemeType } from '@dgswcns/design-token';
>>>>>>> 04f648c5a6eb301c1344a198e16b8059dd0ef102
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
<<<<<<< HEAD
            fonts: fonts,
        };
    }, [token, theme]);

=======
            fonts: {},
        };
    }, [theme]);
>>>>>>> 04f648c5a6eb301c1344a198e16b8059dd0ef102
    return <StyledThemeProvider theme={themes}>{children}</StyledThemeProvider>;
};
