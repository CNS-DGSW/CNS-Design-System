import { css } from 'styled-components';
import { FontThemeType } from './types';

export const fontToken: FontThemeType = {
    h1: css`
        font-size: 200px;
        @media screen and (max-width: 1600px) {
        }
    `,
    h2: css`
        font-size: 60px;
        @media screen and (max-width: 1600px) {
        }
    `,
    h3: css`
        font-size: 46px;
        @media screen and (max-width: 1600px) {
        }
    `,
    h4: css`
        font-size: 34px;
        @media screen and (max-width: 1600px) {
        }
    `,
    h5: css`
        font-size: 32px;
        @media screen and (max-width: 1600px) {
        }
    `,
    subtitle1: css`
        font-size: 28px;
        @media screen and (max-width: 1600px) {
        }
    `,
    subtitle2: css`
        font-size: 24px;
        @media screen and (max-width: 1600px) {
        }
    `,
    subtitle3: css`
        font-size: 22px;
        @media screen and (max-width: 1600px) {
        }
    `,
    subtitle4: css`
        font-size: 20px;
        @media screen and (max-width: 1600px) {
        }
    `,
    p1: css`
        font-size: 18px;
        @media screen and (max-width: 1600px) {
        }
    `,
    p2: css`
        font-size: 16px;
        @media screen and (max-width: 1600px) {
        }
    `,
    p3: css`
        font-size: 14px;
        @media screen and (max-width: 1600px) {
        }
    `,
    p4: css`
        font-size: 12px;
        @media screen and (max-width: 1600px) {
        }
    `,
    extrabold: 900,
    bold: 700,
    medium: 400,
    semibold: 300,
};
