import styled, { css, } from 'styled-components';
export const ButtonStyle = styled.button `
    ${({ size }) => getSize[size]}
    ${({ color }) => getColor[color]};
    border: ${({ border }) => (border ? `${border}` : 'none')};
    border-radius: ${({ radius }) => (radius ? `${radius}px` : '0px')};
    box-shadow: ${({ shadow }) => shadow && '0px 4px 30px rgba(0, 0, 0, 0.25); border-radius: 30px;'};

    &:hover {
        ${({ hover }) => hover && `background: ${hover}`}
    }
    cursor: ${({ disable }) => (disable === true ? 'not-allowed' : 'pointer')};
`;
const getSize = {
    sm: css `
        width: 78px;
        height: 48px;
    `,
    md: css `
        width: 240px;
        height: 58px;
    `,
    lg: css `
        width: 288px;
        height: 58px;
    `,
};
const getColor = {
    primary: css `
        background-color: ${({ theme }) => theme.blue400};
        color: ${({ theme }) => theme.white};
    `,
    second: css `
        background-color: ${({ theme }) => theme.white};
        color: ${({ theme }) => theme.blue400};
    `,
};
