import styled from "styled-components";
import { breakpoints } from "./themes";

export const Button = styled.button`
  width: 14vw;
  height: 3.5vw;
  align-self: center;
  border-radius: 2vw;
  border-style: outset;
  border-color: ${(props) => props.theme["button"]["borderColor"]};
  background: ${(props) => props.theme["button"]["backgroundColor"]["regular"]};
  font-size: ${(props) => props.theme["font"]["size"]["xs"]["secondary"]};
  color: ${(props) => props.theme["text"]["secondary"]};

  :hover {
    background: ${(props) => props.theme["button"]["backgroundColor"]["hover"]};
    color: ${(props) => props.theme["text"]["primary"]};
    transition: all
      ${(props) =>
        `${props.theme["transition"]["function"]} ${props.theme["transition"]["length"]}`};
  }

  @media only screen and (min-width: ${breakpoints["s"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["s"]["secondary"]};
  }

  @media only screen and (min-width: ${breakpoints["m"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["m"]["secondary"]};
  }

  @media only screen and (min-width: ${breakpoints["l"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["l"]["secondary"]};
  }

  @media only screen and (min-width: ${breakpoints["xl"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["xl"]["secondary"]};
  }
`;
