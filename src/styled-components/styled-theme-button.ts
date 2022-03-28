import styled from "styled-components";
import { Column } from "./styled-grid";
import { breakpoints } from "./themes";

export const ThemeButton = styled.button`
  /* Properties */
  width: 7.5vw;
  height: 3.75vw;
  background: ${(props) => props.theme["background"]["foregroundElements"]};
  position: relative;
  border: 0;
  border-radius: 2vw;
  padding: 0;
  align-self: center;

  /* Transforms & Transitions */
  transition: all
    ${(props) =>
      `${props.theme["transition"]["function"]} ${props.theme["transition"]["length"]}`};

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  @media only screen and (min-width: ${breakpoints["s"]}) {
    width: 6vw;
    height: 3vw;
  }

  @media only screen and (min-width: ${breakpoints["m"]}) {
    width: 5vw;
    height: 2.5vw;
  }

  @media only screen and (min-width: ${breakpoints["l"]}) {
    width: 4vw;
    height: 2vw;
  }

  @media only screen and (min-width: ${breakpoints["xl"]}) {
    width: 3.5vw;
    height: 1.75vw;
  }
`;

export const ThemeIconContainer = styled(Column)<{ switch: boolean }>`
  width: 3.28vw;
  height: 3.28vw;
  left: 0.26vw;
  bottom: 0.2vw;

  position: absolute;
  border-radius: 50%;
  background: ${(props) =>
    props.theme["name"] === "light" ? "#a9a9a9" : "#333333"};

  transform: ${(props) =>
    props.switch
      ? "translateX(3.75vw) translateZ(0)"
      : "translateX(0) translateZ(0)"};
  transition: all
    ${(props) =>
      `${props.theme["transition"]["function"]} ${props.theme["transition"]["length"]}`};

  @media only screen and (min-width: ${breakpoints["s"]}) {
    width: 2.63vw;
    height: 2.63vw;
    left: 0.21vw;
    bottom: 0.188vw;
    transform: ${(props) =>
      props.switch
        ? "translateX(3vw) translateZ(0)"
        : "translateX(0) translateZ(0)"};
  }

  @media only screen and (min-width: ${breakpoints["m"]}) {
    width: 2.19vw;
    height: 2.19vw;
    left: 0.175vw;
    bottom: 0.156vw;
    transform: ${(props) =>
      props.switch
        ? "translateX(2.5vw) translateZ(0)"
        : "translateX(0) translateZ(0)"};
  }

  @media only screen and (min-width: ${breakpoints["l"]}) {
    height: 1.75vw;
    width: 1.75vw;
    left: 0.14vw;
    bottom: 0.125vw;
    transform: ${(props) =>
      props.switch
        ? "translateX(2vw) translateZ(0)"
        : "translateX(0) translateZ(0)"};
  }

  @media only screen and (min-width: ${breakpoints["xl"]}) {
    width: 1.53vw;
    height: 1.53vw;
    left: 0.12vw;
    bottom: 0.11vw;
    transform: ${(props) =>
      props.switch
        ? "translateX(1.75vw) translateZ(0)"
        : "translateX(0) translateZ(0)"};
  }
`;
