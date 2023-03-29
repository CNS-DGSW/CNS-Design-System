import React from 'react';
import { TooltipContainer, TooltipTitle } from './tooltip.style';
import { TooltipProps } from './tooltip.type';

export const Tooltip = ({ direction = 'bottom', title, children }: TooltipProps) => {
    return (
        <TooltipContainer>
            <TooltipTitle direction={direction}>{title}</TooltipTitle>
            {children}
        </TooltipContainer>
    );
};
