import styled from "styled-components";
import { breakpoints } from "./themes";

export const StyledList = styled.ul``;
export const StyledListItem = styled.li`
  padding-bottom: 1rem;

  font-size: ${(props) => props.theme["font"]["size"]["xs"]["primary"]};

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
