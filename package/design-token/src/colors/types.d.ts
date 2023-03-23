type ColorNumber = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
type ColorType = "blue" | "gray";
type ColorKinds = `${ColorType}${ColorNumber}`;
export type ColorKindsType = Record<ColorKinds | "white" | "black", string>;
export {};
