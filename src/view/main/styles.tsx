import styled from "styled-components/macro";
import { THEME, BREAKPOINT } from "../../constant";

export const Main = styled.div`
  height: 100%;
  width: 100%;

  background-color: ${THEME.bottom};
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TopArea = styled.div`
  z-index: 100;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  background-color: ${THEME.topDark};

  border-bottom-left-radius: 5rem;
  border-bottom-right-radius: 5rem;
  color: white;

  padding-bottom: 4.5rem;
`;

export const TopBackgroudPurpleArea = styled.div`
  width: 85%;
  height: 10rem;
  background-color: ${THEME.topPurple};

  border-radius: 5rem;
`;

export const LogoCat = styled.img`
  width: 10rem;

  margin-top: -8.2rem;
`;

export const GameJamLogo = styled.img`
  position: absolute;

  top: 12rem;
  width: 25rem;

  border-radius: 0.5rem;
  border: 0.5rem solid ${THEME.topDark};
`;

interface CircleProps {
  w: number;
  h: number;
  t: number;
  l: number;
}

export const Circle = styled.div<CircleProps>`
  z-index: 200;

  position: absolute;
  border-radius: 50%;
  background-color: ${THEME.topCircle};

  width: ${(props) => `${props.w}rem`};
  height: ${(props) => `${props.h}rem`};
  top: ${(props) => `${props.t}rem`};
  left: ${(props) => `${props.l}rem`};
`;

export const InnerBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
`;

export const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 2rem;
`;

export const Slogan = styled.div`
  font-size: 2.5rem;
  text-align: center;
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${BREAKPOINT}px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
    margin-top: 2rem;
  }
`;

interface ContentBoxProps {
  color?: string;
}

export const FlexContainer = styled.div`
  width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  border-radius: 3rem;
  background-color: ${THEME.body};

  @media screen and (min-width: ${BREAKPOINT}px) {
    font-size: 1.5rem;
    height: 17rem;
  }
`;

export const ContentBoxContainer = styled.div`
  width: 5rem;
  text-align: center;

  @media screen and (min-width: ${BREAKPOINT}px) {
    width: 6rem;
  }
`;

export const ContentBox = styled.div<ContentBoxProps>`
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.9rem;

  background-color: black;
  color: ${(props) => (props.color ? props.color : "white")};

  @media screen and (min-width: ${BREAKPOINT}px) {
    font-size: 2rem;
  }
`;

export const ContentMessageContainer = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContentMessageTitle = styled.div`
  text-align: center;
  font-size: 1.3rem;

  @media screen and (min-width: ${BREAKPOINT}px) {
    font-size: 1.5rem;
  }
`;

export const ContentMessageDescription = styled.div`
  text-align: center;
  font-size: 1rem;

  @media screen and (min-width: ${BREAKPOINT}px) {
    font-size: 1.3rem;
  }
`;

export const JoinButton = styled.a`
  background-color: #c9c9c9;
  border-radius: 20rem;
  border: 6px solid #333;
  font-size: 3rem;
  text-decoration: none;
  letter-spacing: 0.3rem;
  transition: all 0.2s ease;
  padding: 2rem;
  outline: none;
  color: #333;
  box-shadow: 0 -3rem 0 1rem #9c9c9c inset;
  margin-bottom: 3rem;
  &:hover {
    opacity: 0.7;
    transform: scale(0.9);
  }
`;

export const SnackbarContainer = styled.div`
  position: relative;
  height: 3rem;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  @media screen and (min-width: ${BREAKPOINT}px) {
    margin-top: 5rem;
  }
`;
