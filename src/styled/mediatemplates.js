import styled, { css } from "styled-components";

export const media = {
  mobile: (...args) => css`
    @media (max-width: 479px) {
      ${css(...args)};
    }
  `,
  tablets: (...args) => css`
    @media (min-width: 768px) and (max-width: 1097px) {
      ${css(...args)};
    }
  `,
  allDektops: (...args) => css`
    @media (min-width: 1098px) {
      ${css(...args)};
    }
  `
};

export const Container = styled.div`
  margin: 0 auto;

  ${media.mobile`
    padding-left: 21px;
    padding-right: 21px;
  `};

  ${media.tablets`
    max-width: 720px;
  `}

  ${media.allDektops`
    max-width: 880px;
  `}
`;
