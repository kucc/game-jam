import styled, { css, keyframes } from "styled-components";

const fadein = keyframes`
  0% { top: 0px; opacity: 0; } 
  100% { top: -30px; opacity: 1; }
`;
const fadeout = keyframes`
  0% { top: -30px; opacity: 1; } 
  100% { top: 0px; opacity: 0; }
`;

interface SnackbarProps {
  show: boolean;
}

export const Snackbar = styled.div<SnackbarProps>`
  z-index: 100;
  position: absolute;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 30px;
  padding: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  font-size: 1.6rem;
  -webkit-animation: ${(props) =>
    props.show
      ? css`
          ${fadein} 0.5s, ${fadeout} 0.5s 2.5s
        `
      : ""};
  animation: ${(props) =>
    props.show
      ? css`
          ${fadein} 0.5s, ${fadeout} 0.5s 2.5s
        `
      : ""};
  animation-fill-mode: forwards;
  /* animation: ${fadein} 0.5s, ${fadeout} 0.5s 2.5s; */
`;
