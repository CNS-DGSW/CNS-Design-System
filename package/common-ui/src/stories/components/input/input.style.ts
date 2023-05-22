import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { SizeType } from '../../../@types/size.type';
import { InputStyleProps } from './input.type';

export const InputStyle = styled.input<InputStyleProps>`
    ${({ inputSize }) => inputSize && getSize[inputSize]}
    border-radius:${({ radius }) => `${radius}px;`}
    box-sizing:border-box;
    height: 48px;
    border: 1px solid #d8dae0;
    padding: 15px;
    &:disabled {
        background: #f2f3f5;
    }
`;

const getSize: Record<SizeType, FlattenSimpleInterpolation> = {
    xs: css`
        width: 150px;
    `,
    sm: css`
        width: 224px;
    `,
    md: css`
        width: 310px;
    `,
    lg: css`
        width: 650px;
    `,
};
