import styled from "styled-components";
import { breakpoints } from "./themes";

export const Button = styled.button`
  width: 20vw;
  height: 5vw;
  align-self: center;
  border-radius: 2.6vw;
  border-style: outset;
  border-color: ${(props) => props.theme["button"]["borderColor"]};
  background: ${(props) => props.theme["button"]["backgroundColor"]["regular"]};
  font-size: ${(props) => props.theme["font"]["size"]["xs"]["secondary"]};
  color: ${(props) => props.theme["text"]["secondary"]};

  :hover {
    transform: translateZ(0);
    background: ${(props) => props.theme["button"]["backgroundColor"]["hover"]};
    color: ${(props) => props.theme["text"]["primary"]};
    transition: all
      ${(props) =>
        `${props.theme["transition"]["function"]} ${props.theme["transition"]["length"]}`};
  }

  @media only screen and (min-width: ${breakpoints["s"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["s"]["secondary"]};
    width: 18vw;
    height: 4.5vw;
    border-radius: 2.4vw;
  }

  @media only screen and (min-width: ${breakpoints["m"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["m"]["secondary"]};
    width: 16vw;
    height: 4vw;
    border-radius: 2.2vw;
  }

  @media only screen and (min-width: ${breakpoints["l"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["l"]["secondary"]};
    width: 14vw;
    height: 3.5vw;
    border-radius: 2vw;
  }

  @media only screen and (min-width: ${breakpoints["xl"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["xl"]["secondary"]};
    width: 12vw;
    height: 3vw;
    border-radius: 1.8vw;
  }
`;
