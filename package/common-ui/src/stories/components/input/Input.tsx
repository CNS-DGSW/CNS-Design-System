import React from 'react';
import { InputStyle } from './input.style';
import { InputProps } from './input.type';

export const Input = ({ disable, radius = 8, inputSize = 'md', type, value }: InputProps) => {
    return (
        <InputStyle
            inputSize={inputSize}
            disabled={disable}
            radius={radius}
            type={type}
            value={value}
        />
    );
};
