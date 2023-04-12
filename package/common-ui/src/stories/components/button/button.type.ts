import { PropsWithChildren } from 'react';
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

export type ButtonColorType = 'blue400' | 'gray400' | 'white';
