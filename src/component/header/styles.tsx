import styled from "styled-components/macro";

import { BREAKPOINT, THEME } from "../../constant";

export const Header = styled.header`
  width: 100%;
  height: 4rem;
  background-color: ${THEME.topDark};
  color: white;

  @media only screen and (min-width: ${BREAKPOINT}px) {
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  justify-content: center;
  align-items: center;

  font-size: 1.5rem;
`;
