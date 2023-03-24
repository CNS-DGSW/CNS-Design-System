import { PropsWithChildren } from 'react';
declare type ThemeTypeObject = {
    LIGHT: 'lightThemeToken';
    DARK: 'darkThemeToken';
};
declare type ThemeKinds = keyof ThemeTypeObject | undefined;
declare type CNSThemeProps = PropsWithChildren<{
    theme: ThemeKinds;
}>;
export declare const CNSThemeProvider: ({ theme, children }: CNSThemeProps) => JSX.Element;
export {};
