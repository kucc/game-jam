import styled from "styled-components/macro";
import { THEME } from "../../constant";

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

  min-width: 34rem;
  width: 95%;
  height: 95%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-bottom-left-radius: 4rem;
  border-bottom-right-radius: 4rem;
  padding-bottom: 1rem;

  background-color: ${THEME.body};

  /**분리되는 영역을 분리되지 않게끔 보이게 하기 위해 추가 */
  padding-top: 4rem;
  margin-top: -1rem;
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
  display: flex;
  flex-direction: column;

  align-items: center;
`;

interface ContentBoxProps {
  color?: string;
}

export const ContentBoxContainer = styled.div``;

export const ContentBox = styled.div<ContentBoxProps>`
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.9rem;

  background-color: black;
  color: ${(props) => (props.color ? props.color : "white")};
`;

export const ContentMessageContainer = styled.div`
  margin-top: 0.3rem;
  margin-bottom: 1.5rem;
`;

export const ContentMessageTitle = styled.div`
  text-align: center;
  font-size: 1.3rem;
`;

export const ContentMessageDescription = styled.div`
  text-align: center;
`;
