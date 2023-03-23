import { PropsWithChildren } from 'react';
type ThemeTypeObject = {
    LIGHT: 'lightThemeToken';
    DARK: 'darkThemeToken';
};
type ThemeKinds = keyof ThemeTypeObject | undefined;
type CNSThemeProps = PropsWithChildren<{
    theme: ThemeKinds;
}>;
export declare const CNSThemeProvider: ({ theme, children }: CNSThemeProps) => JSX.Element;
export {};
