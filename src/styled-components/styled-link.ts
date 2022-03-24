import { Link } from "gatsby";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  :hover {
    color: ${(props) => props.theme.linkHover};
  }
  :link {
    color: ${(props) => props.theme.linkColor};
  }
  :visited {
    color: ${(props) => props.theme.linkUsed};
  }
`;
