export * as fonts from './fonts';
export * from './colors/types';

import { darkThemeToken, lightThemeToken } from './colors';
import { ColorKindsType } from './colors/types';
export const color = {
    darkThemeToken,
    lightThemeToken,
};

export type ThemeType = {
    colors: ColorKindsType;
    fonts: {};
};
