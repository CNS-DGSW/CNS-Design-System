export * as fonts from './fonts';
export * from './colors/types';

import { darkThemeToken, lightThemeToken } from './colors';

import type { FontThemeType } from './fonts/types';
import type { ColorsThemeType } from './colors/types';

export const color = {
    darkThemeToken,
    lightThemeToken,
};

export type ThemeType = {
    colors: ColorsThemeType;
    fonts: FontThemeType
};

export * from './fonts/types';
