import styled, {
    css,
    FlattenInterpolation,
    FlattenSimpleInterpolation,
    ThemeProps
} from 'styled-components';
import { SizeType } from '../../../@types/size.type';
import { ButtonColorType, ButtonProps } from './button.type';
import { ThemeType } from '@dgswcns/design-token';

export const ButtonStyle = styled.button<ButtonProps>`
    ${({ size }) => size && getSize[size]}
    ${({ color }) => color && getColor[color]};
    border: ${({ border, theme: { colors } }) =>
        border ? `${border}px solid ${colors.blue400}` : 'none'};
    border-radius: ${({ radius }) => (radius ? `${radius}px` : '0px')};
    box-shadow: ${({ shadow }) =>
        shadow && '0px 4px 30px rgba(0, 0, 0, 0.25); border-radius: 30px;'};

    &:hover {
        ${({ hover }) => hover && `background: ${hover}`}
    }
    cursor: ${({ disable }) => (disable === true ? 'not-allowed' : 'pointer')};
`;

const getSize: Record<SizeType, FlattenSimpleInterpolation> = {
    xs: css`
        width: 32px;
        height: 32px;
        font-size: 14px;
    `,
    sm: css`
        width: 78px;
        height: 48px;
    `,
    md: css`
        width: 240px;
        height: 58px;
    `,
    lg: css`
        width: 288px;
        height: 58px;
    `,
};

const getColor: Record<ButtonColorType, FlattenInterpolation<ThemeProps<ThemeType>>> = {
    blue400: css`
        background-color: ${({ theme: { colors } }: ThemeProps<ThemeType>) => colors.blue400};
        color: ${({ theme: { colors } }: ThemeProps<ThemeType>) => colors.white};
    `,
    white: css`
        background-color: ${({ theme: { colors } }: ThemeProps<ThemeType>) => colors.white};
        color: ${({ theme: { colors } }: ThemeProps<ThemeType>) => colors.blue400};
    `,
    gray400: css`
        background-color: ${({ theme: { colors } }: ThemeProps<ThemeType>) => colors.white};
        color: ${({ theme: { colors } }: ThemeProps<ThemeType>) => colors.gray400};
        border: ${({ theme: { colors } }: ThemeProps<ThemeType>) =>
            `1px solid ${colors.gray400} !important`};
    `,
};
