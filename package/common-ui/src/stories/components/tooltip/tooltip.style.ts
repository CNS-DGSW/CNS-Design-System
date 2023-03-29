import { ThemeType } from '@dgswcns/design-token';
import styled, { css, FlattenSimpleInterpolation, ThemeProps } from 'styled-components';
import { DirectionType } from './tooltip.type';

export const TooltipContainer = styled.span`
    position: relative;
    & > span {
        visibility: hidden;
    }
    :hover {
        & > span {
            visibility: visible;
        }
    }
`;
export const TooltipTitle = styled.span<{ direction: DirectionType }>`
    position: absolute;
    padding: 5px;
    background-color: ${({ theme: { colors } }: ThemeProps<ThemeType>) => colors.gray600};
    border-radius: 8px;
    font-size: 10px;
    color: ${({ theme: { colors } }: ThemeProps<ThemeType>) => colors.white};
    ${({ direction }) => getDirection[direction]};
`;
const getDirection: Record<DirectionType, FlattenSimpleInterpolation> = {
    bottom: css`
        top: 100%;
        left: 50%;
        transform: translate(-50%, 70%);
    `,
    left: css`
        top: 50%;
        right: 100%;
        transform: translate(0%, -50%);
    `,
    right: css`
        top: 50%;
        left: 100%;
        transform: translate(0%, -50%);
    `,
    top: css`
        bottom: 100%;
        left: 50%;
        transform: translate(-50%, -70%);
    `,
};
