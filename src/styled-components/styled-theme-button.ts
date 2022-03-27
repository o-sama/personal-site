import styled from "styled-components";
import { Column } from "./styled-grid";

export const ThemeButton = styled.button`
  /* Properties */
  width: 4vw;
  height: 2vw;
  background: ${(props) => props.theme["background"]["foregroundElements"]};
  position: relative;
  border: 0;
  border-radius: 2vw;
  padding: 0;
  align-self: center;

  /* Transforms & Transitions */
  transition: all ease-in-out 0.35s;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

export const ThemeIconContainer = styled(Column)<{ switch: boolean }>`
  height: 1.75vw;
  width: 1.75vw;
  position: absolute;
  border-radius: 50%;
  background: ${(props) =>
    props.theme["name"] === "light" ? "#a9a9a9" : "#333333"};
  left: 0.14vw;
  bottom: 0.125vw;
  transform: ${(props) => (props.switch ? "translateX(2vw)" : "translateX(0)")};
  transition: all ease-in-out 0.3s;
`;
