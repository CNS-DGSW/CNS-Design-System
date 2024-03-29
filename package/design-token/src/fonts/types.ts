import { FlattenSimpleInterpolation } from 'styled-components';

type FontType =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'subtitle1'
    | 'subtitle2'
    | 'subtitle3'
    | 'subtitle4'
    | 'p1'
    | 'p2'
    | 'p3'
    | 'p4';

type FontWeightType = 'extrabold' | 'bold' | 'semibold' | 'medium';

export type FontThemeType = Readonly<
    Record<FontType, FlattenSimpleInterpolation> & Record<FontWeightType, number>
>;
