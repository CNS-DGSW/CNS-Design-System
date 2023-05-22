import { HTMLInputTypeAttribute } from 'react';
import { SizeType } from '../../../@types/size.type';

export type InputProps = {
    inputSize?: SizeType;
    radius?: number;
    disable?: boolean;
    type?: HTMLInputTypeAttribute;
    value?: string;
};

export type InputStyleProps = Omit<InputProps, 'readOnly' | 'type' | 'value'>;
