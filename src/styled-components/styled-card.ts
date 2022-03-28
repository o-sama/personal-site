import styled from "styled-components";
import { breakpoints } from "./themes";

export const Card = styled.div`
  width: 56.25vw;
  height: 56.25vw;
  border-radius: 0.5vw;
  box-shadow: 0.1vw 0.0725vw 0.1vw ${(props) => props.theme["shadow"]["color"]},
    -0.025vw -0.025vw 0.05vw ${(props) => props.theme["shadow"]["color"]};
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) =>
    props.theme["name"] === "light"
      ? props.theme["background"]["primary"]
      : props.theme["background"]["liftedElements"]};

  :hover {
    transform: scale3d(1.1, 1.1, 1.1);
    background: ${(props) => props.theme["background"]["liftedElements"]};
    transition: background-color
        ${(props) =>
          `${props.theme["transition"]["function"]} ${props.theme["transition"]["length"]}`}
        transform
        ${(props) =>
          `${props.theme["transition"]["function"]} ${props.theme["transition"]["length"]}`},
      box-shadow
        ${(props) =>
          `${props.theme["transition"]["function"]} ${props.theme["transition"]["length"]}`};
    box-shadow: 0.15vw 0.125vw 0.2vw
        ${(props) => props.theme["shadow"]["color"]},
      -0.025vw -0.025vw 0.1vw ${(props) => props.theme["shadow"]["color"]};
  }
  transition: transform
      ${(props) =>
        `${props.theme["transition"]["function"]} ${props.theme["transition"]["length"]}`},
    ${(props) =>
      `${props.theme["transition"]["function"]} ${props.theme["transition"]["length"]}`};

  @media only screen and (min-width: ${breakpoints["s"]}) {
    width: 45vw;
    height: 45vw;
  }

  @media only screen and (min-width: ${breakpoints["m"]}) {
    width: 37.5vw;
    height: 37.5vw;
  }

  @media only screen and (min-width: ${breakpoints["l"]}) {
    width: 30vw;
    height: 30vw;
  }

  @media only screen and (min-width: ${breakpoints["xl"]}) {
    width: 26.25vw;
    height: 26.25vw;
  }
`;
