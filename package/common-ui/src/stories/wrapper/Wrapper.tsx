import React from 'react';
import { WrapperPropsType } from './wrapper.type';
import WrapperStyle from './wrapper.style';

export const Wrapper = ({ children, direction = 'row', gap }: WrapperPropsType) => {
    return (
        <WrapperStyle direction={direction} gap={gap}>
            {children}
        </WrapperStyle>
    );
};
