/// <reference types="react" />
import { ButtonColorType } from '../../@types/color.type';
import { SizeType } from '../../@types/size.type';
export declare const ButtonStyle: import("styled-components").StyledComponent<"button", any, {
    size?: SizeType | undefined;
    color?: ButtonColorType | undefined;
    clickEvent?: import("react").MouseEventHandler<HTMLButtonElement> | undefined;
    hover?: string | null | undefined;
    border?: string | null | undefined;
    radius?: number | "circle" | undefined;
    disable?: boolean | undefined;
    shadow?: boolean | undefined;
} & {
    children?: import("react").ReactNode;
}, never>;
