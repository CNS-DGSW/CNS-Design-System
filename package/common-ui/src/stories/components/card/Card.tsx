import React from 'react';
import { CardStyle } from './card.style';
import { CardProps } from './card.type';
export const Card = ({
    size = 'md',
    backgroundColor = 'gray200',
    clickEvent,
    hover,
    radius,
    shadow,
    children,
    style,
}: CardProps) => {
    return (
        <CardStyle
            size={size}
            backgroundColor={backgroundColor}
            hover={hover}
            onClick={clickEvent}
            radius={radius}
            shadow={shadow}
            style={style}>
            {children}
        </CardStyle>
    );
};
