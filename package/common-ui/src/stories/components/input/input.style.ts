import { ThemeType } from '@dgswcns/design-token';
import styled, { css, FlattenSimpleInterpolation, ThemeProps } from 'styled-components';
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
        background-color: ${({ theme: { colors } }: ThemeProps<ThemeType>) => colors.gray300};
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
