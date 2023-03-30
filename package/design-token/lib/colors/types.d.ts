declare type ColorNumber = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
declare type ColorType = "blue" | "gray";
declare type ColorKinds = `${ColorType}${ColorNumber}`;
export declare type ColorKindsType = Record<ColorKinds | "white" | "black", string>;
export {};
