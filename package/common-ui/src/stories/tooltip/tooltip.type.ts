import { PropsWithChildren } from 'react';

export type TooltipProps = PropsWithChildren<{
    title: string;
    direction?: DirectionType;
}>;
export type DirectionType = 'left' | 'top' | 'bottom' | 'right';
