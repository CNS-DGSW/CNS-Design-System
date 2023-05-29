import styled, {
    css,
    FlattenInterpolation,
    FlattenSimpleInterpolation,
    ThemeProps,
} from 'styled-components';
import { CardColorType, CardProps, CardSizeType } from './card.type';
import { ThemeType } from '@dgswcns/design-token';

export const CardStyle = styled.div<CardProps>`
    ${({ size }) => size && getSize[size]}
    ${({ backgroundColor }) => backgroundColor && getColor[backgroundColor]};
    border-radius: ${({ radius }) => (radius ? '15px' : '0px')};
    box-shadow: ${({ shadow }) => shadow && '0px 4px 30px rgba(0, 0, 0, 0.25); '};

    &:hover {
        ${({ hover }) => hover && `background: ${hover}`}
    }
`;

const getSize: Record<CardSizeType, FlattenSimpleInterpolation> = {
    sm: css`
        width: 432px;
    `,
    md: css`
        width: 318px;
    `,
    lg: css`
        width: 1000px;
    `,
};

const getColor: Record<CardColorType, FlattenInterpolation<ThemeProps<ThemeType>>> = {
    blue300: css`
        background-color: ${({ theme: { colors } }) => colors.blue200};
    `,
    blue400: css`
        background-color: ${({ theme: { colors } }) => colors.blue400};
    `,
    blue900: css`
        background-color: ${({ theme: { colors } }) => colors.blue900};
    `,
    gray200: css`
        background-color: ${({ theme: { colors } }) => colors.white};
    `,
};
