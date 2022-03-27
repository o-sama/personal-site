import { Link } from "gatsby";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  :hover {
    color: ${(props) => props.theme["link"]["hover"]};
  }
  :link {
    color: ${(props) => props.theme["link"]["color"]};
  }
  :visited {
    color: ${(props) => props.theme["link"]["used"]};
  }
`;
