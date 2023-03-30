import React from 'react';
import { ButtonStyle } from './button.style';
export const Button = ({ size = 'md', color = 'primary', clickEvent, hover, border, radius, disable, shadow, children, }) => {
    return (React.createElement(ButtonStyle, { size: size, color: color, hover: hover, border: border, onClick: disable ? clickEvent : () => { }, radius: radius, shadow: shadow, disable: disable }, children));
};
