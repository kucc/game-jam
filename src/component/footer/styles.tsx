import styled from "styled-components/macro";

import { BREAKPOINT, THEME } from "../../constant";

export const Footer = styled.footer`
  width: 100%;
  height: 4rem;
  background-color: ${THEME.bottom};

  @media only screen and (min-width: ${BREAKPOINT}px) {
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  justify-content: center;
  align-items: center;

  font-size: 1.5rem;
`;
