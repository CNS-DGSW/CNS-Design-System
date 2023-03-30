import { PropsWithChildren } from 'react';
import { ButtonColorType } from '../../../@types/color.type';
import { SizeType } from '../../../@types/size.type';

export type ButtonProps = PropsWithChildren<{
    size?: SizeType;
    color?: ButtonColorType;
    clickEvent?: React.MouseEventHandler<HTMLButtonElement>;
    hover?: string | null;
    border?: string | null;
    radius?: number | 'circle';
    disable?: boolean;
    shadow?: boolean;
}>;
