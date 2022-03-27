import styled from "styled-components";
import { breakpoints } from "./themes";

export const Nav = styled.nav`
  /* Properties */
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  visibility: visible;
  display: block;
  background-color: ${(props) => props.theme["background"]["primary"]};
  padding: 0.5vw 0;
  border-bottom: 0.2vw solid
    ${(props) =>
      props.theme["nav"]["border"] ? props.theme["nav"]["border"] : "#708090"};

  /* Content */
  font-family: ${(props) => props.theme["font"]["family"]["secondary"]};
  font-size: ${(props) => props.theme["font"]["size"]["xs"]["primary"]};
  color: ${(props) => props.theme["text"]["primary"]};

  @media only screen and (min-width: ${breakpoints["s"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["s"]["primary"]};
  }

  @media only screen and (min-width: ${breakpoints["m"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["m"]["primary"]};
  }

  @media only screen and (min-width: ${breakpoints["l"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["l"]["primary"]};
  }

  @media only screen and (min-width: ${breakpoints["xl"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["xl"]["primary"]};
  }
`;
