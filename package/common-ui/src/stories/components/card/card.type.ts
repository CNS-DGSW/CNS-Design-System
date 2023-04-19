import { PropsWithChildren } from 'react';
import { CSSObject } from 'styled-components';
import { SizeType } from '../../../@types/size.type';

export type CardProps = PropsWithChildren<{
    size?: CardSizeType;
    backgroundColor?: CardColorType;
    clickEvent?: React.MouseEventHandler<HTMLDivElement>;
    hover?: string | null;
    radius?: boolean;
    shadow?: boolean;
    style?: CSSObject;
}>;

export type CardColorType = 'blue300' | 'blue400' | 'blue900' | 'gray200';
export type CardSizeType = Exclude<SizeType, 'xs'>;
