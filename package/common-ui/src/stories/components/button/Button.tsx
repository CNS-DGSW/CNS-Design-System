import React from 'react';
import { ButtonStyle } from './button.style';
import { ButtonProps } from './button.type';
export const Button = ({
    size = 'md',
    color = 'blue400',
    clickEvent,
    hover,
    border,
    radius,
    disable,
    shadow,
    children,
}: ButtonProps) => {
    return (
        <ButtonStyle
            size={size}
            color={color}
            hover={hover}
            border={border}
            onClick={disable ? undefined : clickEvent}
            radius={radius}
            shadow={shadow}
            disable={disable}>
            {children}
        </ButtonStyle>
    );
};
