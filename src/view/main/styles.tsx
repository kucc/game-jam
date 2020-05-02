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

export const InnerBox = styled.div`
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
