import styled from "styled-components";
import { breakpoints } from "./themes";

const TertiaryText = styled.span`
  font-size: ${(props) => props.theme["font"]["size"]["xs"]["tertiary"]};

  @media only screen and (min-width: ${breakpoints["s"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["s"]["tertiary"]};
  }

  @media only screen and (min-width: ${breakpoints["m"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["m"]["tertiary"]};
  }

  @media only screen and (min-width: ${breakpoints["l"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["l"]["tertiary"]};
  }

  @media only screen and (min-width: ${breakpoints["xl"]}) {
    font-size: ${(props) => props.theme["font"]["size"]["xl"]["tertiary"]};
  }
`;

export { TertiaryText };
