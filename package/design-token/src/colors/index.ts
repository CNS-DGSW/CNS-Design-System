export * from './types';
import { darkThemeToken, lightThemeToken } from './colors';
import { ColorKindsType } from './types';

export const color = {
    darkThemeToken,
    lightThemeToken,
};

export type ThmeType = {
    colors: ColorKindsType;
    fonts: {};
};
