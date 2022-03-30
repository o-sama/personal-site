import { Link } from "gatsby";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration-line: none;
  transition: all
    ${(props) =>
      `${props.theme["transition"]["function"]} ${props.theme["transition"]["length"]}`};
  :link {
    color: ${(props) => props.theme["link"]["color"]};
  }
  :hover {
    color: ${(props) => props.theme["link"]["hover"]};
  }
  :visited {
    color: ${(props) => props.theme["link"]["used"]};
  }
`;
