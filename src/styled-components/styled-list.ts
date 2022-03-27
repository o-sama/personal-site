import styled from "styled-components";
import { breakpoints } from "./themes";

export const StyledList = styled.ul``;
export const StyledListItem = styled.li`
  padding-bottom: 1rem;

  font-size: ${(props) => props.theme["font"]["size"]["xs"]["secondary"]};

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
