export * as fonts from './fonts';
export * from './colors/types';
import { ColorKindsType } from './colors/types';
export declare const color: {
    darkThemeToken: ColorKindsType;
    lightThemeToken: ColorKindsType;
};
export declare type ThemeType = {
    colors: ColorKindsType;
    fonts: {};
};
export * from './fonts/types';
