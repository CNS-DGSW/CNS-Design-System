type ColorNumber = "100"| "200"| "300"| "400"| "500"| "600"| "700"| "800"| "900";
type ColorType = "blue"|"gray";

type ColorKinds = `${ColorType}${ColorNumber}`
export type ColorKindsType = Record<ColorKinds | "white" | "black",string>



// 원하는 컬러 개수별 타입 자동 생성 로직 Ex) IteratorColorList 에 blue 3 입력시 blue100 | blue200 | blue300 타입 생성


// type IteratorColorList = "blue 5" | "black 3"| "white ";
// type NonIteratorColorList = "white";

// type ColorArray = Readonly<["100", "200", "300", "400", "500", "600", "700", "800", "900"]>
// type ColorType = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

// type GetIndex<T extends string, U extends Readonly<string[]>> = U extends Readonly<[infer Current, ...infer Rest]> ? Rest extends Readonly<string[]> ? Current extends `${T}00` ? Current : Current | GetIndex<T, Rest> : "" : "";
// type GetColorList<T> = T extends `${infer R} ${infer Num}` ? Num extends ColorType ? `${R}${GetIndex<`${Num}`, ColorArray>}` : R : "";

// export type ColorKindsType = GetColorList<IteratorColorList>
